#!/bin/bash
# Robust build wrapper for 100K+ page static export
# Fixes: EMFILE (too many open files) + stack overflow (deep recursion) + ENOSPC (disk space)
# from the growth engine continuously generating individual service page dirs.
#
# The [id]/page.tsx dynamic route generates all service pages via
# generateStaticParams from servicesData.json — individual page directories
# under app/services/<slug>/ are redundant and cause EMFILE/stack overflow.

set -e

export NEXT_TELEMETRY_DISABLED=1
export NEXT_BUILD_WORKER_COUNT=4

# Clean .next and out directories (fresh build)
rm -rf .next out

# Use ramdisk for .next/cache to avoid ENOSPC (cache grows to 3GB)
# Symlink .next/cache -> /Volumes/RAMDISK/next-cache
if [ -d /Volumes/RAMDISK ]; then
  mkdir -p /Volumes/RAMDISK/next-cache
  rm -rf /Volumes/RAMDISK/next-cache/* 2>/dev/null || true
  mkdir -p .next
  ln -sfn /Volumes/RAMDISK/next-cache .next/cache
fi

# Clean up redundant individual service page directories
# (growth engine regenerates these every ~5min; [id]/page.tsx handles them)
# -mindepth 1 prevents deleting app/services itself
# -path with backslash-escaped brackets matches literal [id] (not glob)
echo "=== Cleaning redundant service page directories ==="
find app/services -mindepth 1 -maxdepth 1 -type d -not -path 'app/services/\\[id\\]' -not -name '.git*' -exec rm -rf {} + 2>/dev/null || true
# Also remove stray .tsx component files in app/services/ root (not in [id]/)
find app/services -maxdepth 1 -name '*.tsx' -delete 2>/dev/null || true
echo "Remaining in app/services/:" && ls app/services/ 2>/dev/null

# Raise file descriptor limit (194K service dirs cause EMFILE on macOS)
ulimit -n 1048576 2>/dev/null || ulimit -n 65536 2>/dev/null || true

echo "=== Build environment ==="
echo "Node: $(node --version)"
echo "Stack size: 8192KB"
echo "Max old space: 8192MB"
echo "ulimit -n: $(ulimit -n)"
echo "========================="

# Monitor disk space during build in background
if [ -d /Volumes/RAMDISK ]; then
  (while true; do
    AVAIL=$(df -m / | tail -1 | awk '{print $4}')
    if [ "$AVAIL" -lt 500 ]; then
      echo "WARNING: Low disk space (${AVAIL}MB remaining)"
    fi
    sleep 10
  done) &
  MONITOR_PID=$!
else
  MONITOR_PID=""
fi

# --stack-size must be passed as direct node flag (not via NODE_OPTIONS)
node --stack-size=8192 --max-old-space-size=8192 ./node_modules/.bin/next build "$@"

# Sync sitemap.xml + _redirects directly from servicesData.json
# (growth engine cron adds services between build start and postbuild)
echo "=== Syncing sitemap.xml + _redirects from servicesData.json ==="
node scripts/sync-sitemap-redirects.cjs || echo "WARNING: sitemap sync failed, continuing"

# Clean up monitor
if [ -n "$MONITOR_PID" ]; then
  kill $MONITOR_PID 2>/dev/null || true
fi

# Clean up ramdisk cache after build
if [ -d /Volumes/RAMDISK/next-cache ]; then
  rm -rf /Volumes/RAMDISK/next-cache/* 2>/dev/null || true
fi
