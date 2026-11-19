import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  throw new Error('dist/index.html not found. Run "npm run build" first.');
}

// Ensure .nojekyll exists in dist so GitHub Pages serves all assets directly
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

const remoteUrl = execFileSync('git', ['remote', 'get-url', 'origin'], {
  cwd: rootDir,
  encoding: 'utf8',
}).trim();

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fw-gh-pages-'));
try {
  fs.cpSync(distDir, tmpDir, { recursive: true });
  execFileSync('git', ['init', '-b', 'gh-pages'], { cwd: tmpDir, stdio: 'inherit' });
  execFileSync('git', ['add', '-A'], { cwd: tmpDir, stdio: 'inherit' });
  execFileSync('git', ['commit', '-m', `deploy: ${new Date().toISOString()}`], {
    cwd: tmpDir,
    stdio: 'inherit',
  });
  execFileSync('git', ['push', '-f', remoteUrl, 'gh-pages:gh-pages'], {
    cwd: tmpDir,
    stdio: 'inherit',
  });
  console.log('Successfully deployed dist/ to gh-pages branch!');
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
