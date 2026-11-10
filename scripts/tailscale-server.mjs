import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function parseArg(flag, fallback) {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
  return fallback;
}

const port = Number(parseArg('--port', process.env.PORT || '5174'));
const host = parseArg('--host', '127.0.0.1');
const certPath = parseArg('--cert', '');
const keyPath = parseArg('--key', '');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.wasm': 'application/wasm',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.map']);
const gzipCache = new Map();

function getCachedFile(filePath, ext) {
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) return null;
  const etag = `W/"${stat.size.toString(16)}-${Math.trunc(stat.mtimeMs).toString(16)}"`;
  const cached = gzipCache.get(filePath);
  if (cached && cached.etag === etag) return cached;

  const raw = fs.readFileSync(filePath);
  const gz = COMPRESSIBLE.has(ext) && raw.length > 512 ? zlib.gzipSync(raw, { level: 6 }) : null;
  const entry = { raw, gz, etag, size: stat.size };
  if (gzipCache.size > 64) gzipCache.clear();
  gzipCache.set(filePath, entry);
  return entry;
}

function handleRequest(req, res) {
  const method = req.method || 'GET';
  if (method !== 'GET' && method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', Allow: 'GET, HEAD' });
    res.end('Method Not Allowed');
    return;
  }

  let reqPath = '/';
  try {
    const u = new URL(req.url || '/', 'http://localhost');
    reqPath = decodeURIComponent(u.pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }

  if (reqPath === '' || reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  const safeRel = reqPath.replace(/^[/\\]+/, '');
  let fullPath = path.resolve(distDir, safeRel);
  if (!fullPath.startsWith(distDir + path.sep) && fullPath !== distDir) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  let ext = path.extname(fullPath).toLowerCase();
  let fileEntry = fs.existsSync(fullPath) ? getCachedFile(fullPath, ext) : null;

  // SPA fallback for extensionless routes
  if (!fileEntry && !ext) {
    fullPath = path.join(distDir, 'index.html');
    ext = '.html';
    fileEntry = fs.existsSync(fullPath) ? getCachedFile(fullPath, ext) : null;
  }

  if (!fileEntry) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const isImmutableAsset = reqPath.startsWith('/assets/');
  const headers = {
    'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    'Cache-Control': isImmutableAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
    ETag: fileEntry.etag,
    Vary: 'Accept-Encoding',
    'X-Content-Type-Options': 'nosniff',
  };

  if (req.headers['if-none-match'] === fileEntry.etag) {
    res.writeHead(304, headers);
    res.end();
    return;
  }

  const acceptEncoding = String(req.headers['accept-encoding'] || '');
  const useGzip = Boolean(fileEntry.gz && /\bgzip\b/i.test(acceptEncoding));
  const body = useGzip ? fileEntry.gz : fileEntry.raw;
  if (useGzip) headers['Content-Encoding'] = 'gzip';
  headers['Content-Length'] = body.length;

  res.writeHead(200, headers);
  if (method === 'HEAD') {
    res.end();
  } else {
    res.end(body);
  }
}

const httpServer = http.createServer(handleRequest);
httpServer.on('clientError', (_err, socket) => {
  if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

let httpsServer = null;
if (certPath && keyPath && fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  httpsServer = https.createServer(
    {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
    },
    handleRequest,
  );
  httpsServer.on('tlsClientError', () => {
    // Ignore aborted TLS probes cleanly
  });
}

// Dual-protocol TCP multiplexer: accepts BOTH TLS (0x16 ClientHello) and plain HTTP on the same port.
// This allows:
//   - https://<node>.<tailnet>.ts.net:5174/  (valid Let's Encrypt TLS)
//   - http://100.x.y.z:5174/                 (direct Tailscale IP, bypasses iOS Safari iCloud Private Relay)
//   - http://<node>:5174/                    (MagicDNS short name without https://)
//   - tailscale serve --https=443 proxy      (forwards plain HTTP to 127.0.0.1:5174)
const muxServer = net.createServer((socket) => {
  socket.once('error', () => {});
  const preHandshakeTimer = setTimeout(() => socket.destroy(), 15000);
  preHandshakeTimer.unref?.();
  socket.once('close', () => clearTimeout(preHandshakeTimer));
  socket.once('readable', () => {
    clearTimeout(preHandshakeTimer);
    const chunk = socket.read(1);
    if (!chunk || chunk.length === 0) {
      socket.destroy();
      return;
    }
    socket.pause();
    socket.unshift(chunk);
    if (chunk[0] === 0x16 && httpsServer) {
      httpsServer.emit('connection', socket);
    } else {
      httpServer.emit('connection', socket);
    }
    socket.resume();
  });
});

muxServer.on('error', (err) => {
  console.error(`[tailscale-server] Failed to bind ${host}:${port}:`, err.message);
  process.exit(1);
});

muxServer.listen(port, host, () => {
  console.log(
    `[tailscale-server] Serving ${distDir} on ${host}:${port} (HTTP${httpsServer ? ' + HTTPS dual-stack' : ' only'})`,
  );
});
