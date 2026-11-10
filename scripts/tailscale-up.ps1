param(
  [int]$Port = 5174,
  [switch]$SkipBuild,
  [switch]$Background
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ts = if (Test-Path "C:\Program Files\Tailscale\tailscale.exe") { "C:\Program Files\Tailscale\tailscale.exe" } else { "tailscale" }
$rootDir = Split-Path -Parent $PSScriptRoot
Set-Location $rootDir

# 1. Read Tailscale node domain & IPs safely via Node (avoids PS 5.1 CP950 UTF-8 parse issues)
$tsInfoJson = node -e "
  const cp = require('node:child_process');
  const raw = cp.execFileSync(process.argv[1], ['status', '--json'], { encoding: 'utf8' });
  const s = JSON.parse(raw);
  const domain = (s.CertDomains && s.CertDomains[0]) || String(s.Self.DNSName || '').replace(/\.$/, '');
  const ips = s.Self.TailscaleIPs || [];
  const ipv4 = ips.find((ip) => ip.includes('.')) || '';
  const ipv6 = ips.find((ip) => ip.includes(':')) || '';
  const host = String(s.Self.HostName || '').toLowerCase();
  process.stdout.write(JSON.stringify({ domain, ipv4, ipv6, host }));
" $ts
$tsInfo = $tsInfoJson | ConvertFrom-Json
$domain = $tsInfo.domain
$ipv4 = $tsInfo.ipv4
$shortHost = $tsInfo.host

if (-not $SkipBuild) {
  Write-Host "[1/5] Building production bundle..." -ForegroundColor Cyan
  npm.cmd run build
} else {
  Write-Host "[1/5] Skipping build (-SkipBuild)..." -ForegroundColor DarkCyan
}

# 2. Export Let's Encrypt TLS certificate for dual-stack HTTPS + HTTP on $Port
$certDir = Join-Path $rootDir ".tailscale-certs"
New-Item -ItemType Directory -Force -Path $certDir | Out-Null
$certFile = Join-Path $certDir "$domain.crt"
$keyFile = Join-Path $certDir "$domain.key"

Write-Host "[2/5] Fetching Tailscale TLS certificate for $domain ..." -ForegroundColor Cyan
& $ts cert --cert-file $certFile --key-file $keyFile $domain | Out-Host

# 3. Ensure Windows Firewall allows inbound TCP on Tailscale interface across all profiles (including Public)
Write-Host "[3/5] Ensuring Windows Firewall rule on Tailscale interface (TCP $Port, 443)..." -ForegroundColor Cyan
try {
  Get-NetFirewallRule -DisplayName "Falling Weapons Tailscale" -ErrorAction SilentlyContinue | Remove-NetFirewallRule -ErrorAction SilentlyContinue
  New-NetFirewallRule `
    -DisplayName "Falling Weapons Tailscale" `
    -Direction Inbound `
    -Action Allow `
    -Protocol TCP `
    -LocalPort @("$Port", "443") `
    -InterfaceAlias "Tailscale" `
    -Profile Any | Out-Null
} catch {
  Write-Warning "Could not update Windows Firewall rule (run PowerShell as Administrator if inbound connections are blocked): $($_.Exception.Message)"
}

# 4. Configure Tailscale Serve:
#    - Raw TCP forwarder on $Port -> 127.0.0.1:$Port so BOTH HTTPS and plain HTTP work on port $Port
#    - HTTPS handler on 443 -> http://127.0.0.1:$Port (only if $domain:443 is currently unused or ours)
Write-Host "[4/5] Configuring Tailscale Serve (tailnet only, existing host services untouched)..." -ForegroundColor Cyan
try { & $ts serve --https=$Port off 2>$null | Out-Null } catch {}
try { & $ts serve --http=$Port off 2>$null | Out-Null } catch {}
& $ts serve --bg --tcp=$Port "tcp://127.0.0.1:$Port" | Out-Host

$canUse443 = node -e "
  const cp = require('node:child_process');
  const cfg = JSON.parse(cp.execFileSync(process.argv[1], ['serve', 'status', '--json'], { encoding: 'utf8' }) || '{}');
  const web = (cfg && cfg.Web) || {};
  const entry = web[process.argv[2] + ':443'];
  if (!entry || !entry.Handlers) { process.stdout.write('yes'); process.exit(0); }
  const rootProxy = entry.Handlers['/'] && entry.Handlers['/'].Proxy;
  process.stdout.write(rootProxy === 'http://127.0.0.1:' + process.argv[3] ? 'yes' : 'no');
" $ts $domain "$Port"

if ($canUse443 -eq "yes") {
  & $ts serve --bg --https=443 "http://127.0.0.1:$Port" | Out-Host
}

# Stop any stale local listener on 127.0.0.1:$Port
$existing = Get-NetTCPConnection -LocalAddress 127.0.0.1 -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
foreach ($conn in $existing) {
  if ($conn.OwningProcess -gt 0) {
    Write-Host "Stopping previous local server (PID $($conn.OwningProcess)) on 127.0.0.1:$Port ..." -ForegroundColor Yellow
    Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
  }
}
Start-Sleep -Milliseconds 300

Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  Falling Weapons - Tailscale Share Ready (Tailnet Only)" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
if ($ipv4) {
  Write-Host "  [iPhone / Mobile Recommended - Bypasses iCloud Private Relay]" -ForegroundColor Yellow
  Write-Host "    http://${ipv4}:${Port}/" -ForegroundColor White
  Write-Host ""
}
Write-Host "  [HTTPS Tailnet Domain URLs]" -ForegroundColor Cyan
Write-Host "    https://${domain}:${Port}/" -ForegroundColor White
if ($canUse443 -eq "yes") {
  Write-Host "    https://${domain}/" -ForegroundColor White
}
if ($shortHost) {
  Write-Host "    http://${shortHost}:${Port}/" -ForegroundColor Gray
}
Write-Host "================================================================" -ForegroundColor Green
Write-Host ""

$serverArgs = @("scripts/tailscale-server.mjs", "--host", "127.0.0.1", "--port", "$Port", "--cert", $certFile, "--key", $keyFile)

if ($Background) {
  Write-Host "[5/5] Starting dual-protocol server in background on 127.0.0.1:$Port ..." -ForegroundColor Green
  $proc = Start-Process -FilePath "node" -ArgumentList $serverArgs -WorkingDirectory $rootDir -WindowStyle Hidden -PassThru
  for ($i = 0; $i -lt 25; $i++) {
    Start-Sleep -Milliseconds 200
    $ready = Get-NetTCPConnection -LocalAddress 127.0.0.1 -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($ready) {
      Write-Host "Background server running (PID $($proc.Id)). Run 'npm run unshare' to stop." -ForegroundColor Green
      exit 0
    }
  }
  throw "Timed out waiting for background server on 127.0.0.1:$Port"
} else {
  Write-Host "[5/5] Starting dual-protocol server on 127.0.0.1:$Port (Ctrl+C to stop)..." -ForegroundColor Green
  & node @serverArgs
}
