param(
  [int]$Port = 5174
)

$ErrorActionPreference = "Stop"
$ts = if (Test-Path "C:\Program Files\Tailscale\tailscale.exe") { "C:\Program Files\Tailscale\tailscale.exe" } else { "tailscale" }

Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Host "[1/3] Building production bundle..." -ForegroundColor Cyan
npm.cmd run build

Write-Host "[2/3] Configuring Tailscale Serve on HTTPS port $Port (tailnet only, existing ports untouched)..." -ForegroundColor Cyan
& $ts serve --bg --https=$Port "http://127.0.0.1:$Port"

Write-Host "[3/3] Starting local preview server on http://127.0.0.1:$Port ..." -ForegroundColor Green
& $ts serve status
npx.cmd vite preview --host 127.0.0.1 --port $Port --strictPort
