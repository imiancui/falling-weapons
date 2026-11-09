param(
  [int]$Port = 5174
)

$ts = if (Test-Path "C:\Program Files\Tailscale\tailscale.exe") { "C:\Program Files\Tailscale\tailscale.exe" } else { "tailscale" }

Write-Host "Turning off Tailscale Serve on HTTPS port $Port..." -ForegroundColor Yellow
& $ts serve --https=$Port off
& $ts serve status
