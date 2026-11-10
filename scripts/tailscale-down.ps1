param(
  [int]$Port = 5174
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ts = if (Test-Path "C:\Program Files\Tailscale\tailscale.exe") { "C:\Program Files\Tailscale\tailscale.exe" } else { "tailscale" }

$domain = node -e "
  const cp = require('node:child_process');
  try {
    const s = JSON.parse(cp.execFileSync(process.argv[1], ['status', '--json'], { encoding: 'utf8' }));
    process.stdout.write((s.CertDomains && s.CertDomains[0]) || String(s.Self.DNSName || '').replace(/\.$/, ''));
  } catch {}
" $ts

Write-Host "Turning off Tailscale Serve on port $Port..." -ForegroundColor Yellow
try { & $ts serve --tcp=$Port off 2>$null | Out-Null } catch {}
try { & $ts serve --https=$Port off 2>$null | Out-Null } catch {}
try { & $ts serve --http=$Port off 2>$null | Out-Null } catch {}

if ($domain) {
  $owns443 = node -e "
    const cp = require('node:child_process');
    try {
      const cfg = JSON.parse(cp.execFileSync(process.argv[1], ['serve', 'status', '--json'], { encoding: 'utf8' }) || '{}');
      const entry = cfg.Web && cfg.Web[process.argv[2] + ':443'];
      const rootProxy = entry && entry.Handlers && entry.Handlers['/'] && entry.Handlers['/'].Proxy;
      process.stdout.write(rootProxy === 'http://127.0.0.1:' + process.argv[3] ? 'yes' : 'no');
    } catch { process.stdout.write('no'); }
  " $ts $domain "$Port"
  if ($owns443 -eq "yes") {
    Write-Host "Turning off Tailscale Serve on $domain:443 ..." -ForegroundColor Yellow
    try { & $ts serve --https=443 off 2>$null | Out-Null } catch {}
  }
}

$existing = Get-NetTCPConnection -LocalAddress 127.0.0.1 -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
foreach ($conn in $existing) {
  if ($conn.OwningProcess -gt 0) {
    Write-Host "Stopping local share server (PID $($conn.OwningProcess))..." -ForegroundColor Yellow
    Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
  }
}

try {
  Get-NetFirewallRule -DisplayName "Falling Weapons Tailscale" -ErrorAction SilentlyContinue | Remove-NetFirewallRule -ErrorAction SilentlyContinue
} catch {}

& $ts serve status
