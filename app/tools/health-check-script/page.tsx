'use client';

import { useState } from 'react';

export default function HealthCheckScriptTool() {
  const [os, setOs] = useState<'linux' | 'macos' | 'windows'>('linux');
  const [format, setFormat] = useState<'bash' | 'python' | 'powershell'>('bash');

  const scripts = {
    linux: {
      bash: `#!/bin/bash
# System Health Check Script - Linux
# Usage: curl -sSL https://ziontechgroup.com/tools/health-check.sh | bash

set -euo pipefail

echo "=== Zion Tech Group System Health Check ==="
echo "Timestamp: $(date -u +"%Y-%m-%d %H:%M:%S UTC")"
echo "Hostname: $(hostname)"
echo ""

# CPU
echo "--- CPU ---"
lscpu | grep -E "Model name|CPU\\(s\\):|Thread|Core|Socket" | head -5
echo "Load: $(uptime | awk -F'load average:' '{print $2}')"
echo ""

# Memory
echo "--- Memory ---"
free -h
echo ""

# Disk
echo "--- Disk Usage ---"
df -h / | tail -1
df -h /home 2>/dev/null | tail -1
df -h /var 2>/dev/null | tail -1
echo ""

# Disk I/O
echo "--- Disk I/O (last 5s) ---"
iostat -x 1 2 2>/dev/null | tail -10 || echo "iostat not available"
echo ""

# Network
echo "--- Network ---"
ip -brief addr show | grep -v "DOWN"
echo ""
ss -tuln | head -20
echo ""

# Services
echo "--- Critical Services ---"
for svc in ssh docker nginx postgresql redis; do
  if systemctl is-active --quiet "\$svc" 2>/dev/null; then
    echo "  ✓ \$svc: active"
  elif systemctl list-unit-files | grep -q "^\$svc"; then
    echo "  ✗ \$svc: inactive"
  fi
done
echo ""

# Docker
if command -v docker &> /dev/null; then
  echo "--- Docker ---"
  docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"
  echo "Images: \$(docker images -q | wc -l)"
  echo ""
fi

# Logs
echo "--- Recent Errors (last 100 lines) ---"
journalctl -p err -n 20 --no-pager 2>/dev/null | tail -10
echo ""

echo "=== Health Check Complete ==="`,
      python: `#!/usr/bin/env python3
"""
System Health Check Script - Linux (Python)
Run: curl -sSL https://ziontechgroup.com/tools/health-check.py | python3
"""

import subprocess, sys, json, platform, psutil, socket
from datetime import datetime

def run(cmd):
    try: return subprocess.run(cmd, shell=True, capture_output=True, text=True).stdout.strip()
    except: return ""

print("=== Zion Tech Group System Health Check ===")
print(f"Timestamp: {datetime.utcnow().isoformat()} UTC")
print(f"Hostname: {socket.gethostname()}")
print(f"Platform: {platform.platform()}")
print()

# CPU
print("--- CPU ---")
print(f"Cores: {psutil.cpu_count(logical=True)} logical, {psutil.cpu_count(logical=False)} physical")
print(f"Load: {psutil.getloadavg()}")
print()

# Memory
print("--- Memory ---")
mem = psutil.virtual_memory()
print(f"Total: {mem.total / 1e9:.1f} GB")
print(f"Available: {mem.available / 1e9:.1f} GB")
print(f"Used: {mem.percent}%")
print()

# Disk
print("--- Disk ---")
for part in psutil.disk_partitions():
    try:
        usage = psutil.disk_usage(part.mountpoint)
        print(f"{part.mountpoint}: {usage.used/1e9:.1f}/{usage.total/1e9:.1f} GB ({usage.percent}%)")
    except: pass
print()

# Network
print("--- Network ---")
for iface, addrs in psutil.net_if_addrs().items():
    for addr in addrs:
        if addr.family == socket.AF_INET:
            print(f"  {iface}: {addr.address}")
print()

# Services
print("--- Services ---")
for svc in ['ssh', 'docker', 'nginx', 'postgresql', 'redis']:
    try:
        result = subprocess.run(['systemctl', 'is-active', svc], capture_output=True)
        status = result.stdout.decode().strip()
        print(f"  {svc}: {status}")
    except: pass
print()

# Docker
if run("which docker"):
    print("--- Docker ---")
    print(run("docker ps --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'"))
    print()

print("=== Health Check Complete ===")`,
      powershell: `# PowerShell Health Check - Windows
# Run in PowerShell: iwr https://ziontechgroup.com/tools/health-check.ps1 | iex

Write-Host "=== Zion Tech Group System Health Check ===" -ForegroundColor Cyan
Write-Host "Timestamp: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss UTC')" -ForegroundColor Gray
Write-Host "Hostname: $env:COMPUTERNAME" -ForegroundColor Gray
Write-Host ""

# CPU
Write-Host "--- CPU ---" -ForegroundColor Yellow
Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors | Format-Table -AutoSize
$load = Get-Counter "\Processor(_Total)\% Processor Time" -SampleInterval 1 -MaxSamples 2 | Select-Object -ExpandProperty CounterSamples | Select-Object -Last 1 -ExpandProperty CookedValue
Write-Host "CPU Load: $([math]::Round($load,1))%" -ForegroundColor White
Write-Host ""

# Memory
Write-Host "--- Memory ---" -ForegroundColor Yellow
$mem = Get-CimInstance Win32_OperatingSystem
$total = [math]::Round($mem.TotalVisibleMemorySize / 1MB, 1)
$free = [math]::Round($mem.FreePhysicalMemory / 1MB, 1)
$used = [math]::Round(($total - $free) / $total * 100, 1)
Write-Host `Total: $${String.raw`{total}`} GB` -ForegroundColor White
Write-Host `Free: $${String.raw`{free}`} GB` -ForegroundColor White
Write-Host `Used: $${String.raw`{used}`}%` -ForegroundColor White
Write-Host ""

# Disk
Write-Host "--- Disk ---" -ForegroundColor Yellow
Get-CimInstance Win32_LogicalDisk | Where-Object {$_.DriveType -eq 3} | 
  ForEach-Object {
    $size = [math]::Round($_.Size / 1GB, 1)
    $free = [math]::Round($_.FreeSpace / 1GB, 1)
    $pct = [math]::Round(($size - $free) / $size * 100, 1)
    Write-Host "  $($_.DeviceID): $$free/$$size GB ($$pct% used)" -ForegroundColor White
  }
Write-Host ""

# Network
Write-Host "--- Network ---" -ForegroundColor Yellow
Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*"} |
  Select-Object InterfaceAlias, IPAddress, PrefixLength | Format-Table -AutoSize
Write-Host ""

# Services
Write-Host "--- Services ---" -ForegroundColor Yellow
$services = @('sshd', 'docker', 'nginx', 'postgresql', 'redis')
foreach ($svc in $services) {
  try {
    $status = (Get-Service $svc -ErrorAction SilentlyContinue).Status
    if ($status) { Write-Host "  $svc: $status" -ForegroundColor White }
  } catch {}
}
Write-Host ""

Write-Host "=== Health Check Complete ===" -ForegroundColor Cyan`
    },
    macos: {
      bash: `#!/bin/bash
# System Health Check Script - macOS
# Usage: curl -sSL https://ziontechgroup.com/tools/health-check.sh | bash

echo "=== Zion Tech Group System Health Check (macOS) ==="
echo "Timestamp: $(date -u +"%Y-%m-%d %H:%M:%S UTC")"
echo "Hostname: $(hostname)"
echo ""

# CPU
echo "--- CPU ---"
sysctl -n machdep.cpu.brand_string
echo "Cores: $(sysctl -n hw.ncpu)"
sysctl -n hw.physicalcpu hw.logicalcpu
echo "Load: $(uptime | awk -F'load average:' '{print $2}')"
echo ""

# Memory
echo "--- Memory ---"
vm_stat | awk '
  /Pages free/ { free=$3 }
  /Pages active/ { active=$3 }
  /Pages inactive/ { inactive=$3 }
  /Pages speculative/ { spec=$3 }
  /Pages wired/ { wired=$3 }
  END {
    page_size=4096
    total=(free+active+inactive+spec+wired)*page_size/1024/1024/1024
    used=(active+wired)*page_size/1024/1024/1024
    printf "Total: %.1f GB\nUsed: %.1f GB\n", total, used
  }'
echo ""

# Disk
echo "--- Disk ---"
df -h /
echo ""

# Network
echo "--- Network ---"
ifconfig | grep -E "inet |status:" | grep -v "127.0.0.1"
echo ""

# Services (launchd)
echo "--- Services ---"
for svc in ssh docker nginx postgresql redis; do
  if launchctl list | grep -q "\$svc"; then
    echo "  ✓ \$svc: loaded"
  fi
done
echo ""

# Docker
if command -v docker &> /dev/null; then
  echo "--- Docker ---"
  docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
  echo ""
fi

echo "=== Health Check Complete ==="`,
    },
    windows: {
      powershell: `# PowerShell Health Check - Windows (same as above)
# Run in PowerShell: iwr https://ziontechgroup.com/tools/health-check.ps1 | iex

Write-Host "=== Zion Tech Group System Health Check ===" -ForegroundColor Cyan
Write-Host "Timestamp: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss UTC')" -ForegroundColor Gray
Write-Host "Hostname: $env:COMPUTERNAME" -ForegroundColor Gray
Write-Host ""

Write-Host "--- CPU ---" -ForegroundColor Yellow
Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors | Format-Table -AutoSize

Write-Host "--- Memory ---" -ForegroundColor Yellow
$mem = Get-CimInstance Win32_OperatingSystem
$total = [math]::Round($mem.TotalVisibleMemorySize / 1MB, 1)
$free = [math]::Round($mem.FreePhysicalMemory / 1MB, 1)
$used = [math]::Round(($total - $free) / $total * 100, 1)
Write-Host "Total: $$total GB | Free: $$free GB | Used: $$used%"

Write-Host "--- Disk ---" -ForegroundColor Yellow
Get-CimInstance Win32_LogicalDisk | Where-Object {$_.DriveType -eq 3} | 
  ForEach-Object { $size=[math]::Round($_.Size/1GB,1); $free=[math]::Round($_.FreeSpace/1GB,1); $pct=[math]::Round(($size-$free)/$size*100,1); Write-Host "  $($_.DeviceID): $$free/$$size GB ($$pct% used)" }

Write-Host "--- Network ---" -ForegroundColor Yellow
Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*"} | Select-Object InterfaceAlias, IPAddress | Format-Table -AutoSize

Write-Host "=== Health Check Complete ===" -ForegroundColor Cyan`
    }
  };

  const getScript = () => scripts[os]?.[format] || scripts.linux.bash;
  const getFilename = () => `health-check.${format === 'python' ? 'py' : format === 'powershell' ? 'ps1' : 'sh'}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">System Health Check Script</h1>
        <p className="mb-8 text-slate-400">Generate a cross-platform system health check script. Run locally or pipe from curl/wget/iwr.</p>
        
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Target OS</label>
              <select value={os} onChange={e => setOs(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none">
                <option value="linux">Linux</option>
                <option value="macos">macOS</option>
                <option value="windows">Windows</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Script Format</label>
              <select value={format} onChange={e => setFormat(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-purple-500 focus:outline-none">
                <option value="bash">Bash (Linux/macOS)</option>
                <option value="python">Python 3 (Linux)</option>
                <option value="powershell">PowerShell (Windows)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-colors">
              Copy to Clipboard
            </button>
            <a href={`/tools/health-check-script/download?os=${os}&format=${format}`} className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-purple-500 transition-colors">
              Download .{format === 'python' ? 'py' : format === 'powershell' ? 'ps1' : 'sh'}
            </a>
          </div>
        </div>
        
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Script Preview</h3>
            <span className="text-xs text-slate-500 font-mono">{getFilename()}</span>
          </div>
          <pre className="rounded-lg bg-slate-900 p-4 overflow-x-auto text-sm font-mono text-slate-300 max-h-[500px]">
{getScript()}
          </pre>
        </div>
        
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 font-semibold">Quick Run Commands</h3>
          <div className="space-y-2 text-sm font-mono">
            {os === 'windows' ? (
              <>
                <div className="flex gap-2"><span className="text-slate-500">PowerShell:</span><code className="text-white">iwr https://ziontechgroup.com/tools/health-check.ps1 | iex</code></div>
              </>
            ) : (
              <>
                <div className="flex gap-2"><span className="text-slate-500">Bash:</span><code className="text-white">curl -sSL https://ziontechgroup.com/tools/health-check.sh | bash</code></div>
                <div className="flex gap-2"><span className="text-slate-500">Python:</span><code className="text-white">curl -sSL https://ziontechgroup.com/tools/health-check.py | python3</code></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';