#!/bin/bash
# Auto-deploy script for exponential content loop
# Can run from cron or manually
set -euo pipefail

cd "$(dirname "$0")/.."

echo "=== Auto-deploy: $(date) ==="

# 1. Run content generator
echo "Running content generator..."
if [ -f content-loop/scripts/run_loop.py ]; then
    python3 content-loop/scripts/run_loop.py
    echo "✓ Content generated"
else
    echo "⚠ No run_loop.py found, skipping generation"
fi

# 2. Copy new blog posts to docs fallback
echo "Syncing docs/blog..."
if [ -d app/blog ] && [ -d docs ]; then
    find app/blog -mindepth 1 -maxdepth 1 -type d | while read slug; do
        slugname=$(basename "$slug")
        if [ ! -d "docs/blog/$slugname" ]; then
            mkdir -p "docs/blog/$slugname"
            cat > "docs/blog/$slugname/index.html" << 'EOF'
<!DOCTYPE html>
<html><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/blog/SLUGNAME/">
</head><body></body></html>
EOF
            sed -i "s|SLUGNAME|$slugname|g" "docs/blog/$slugname/index.html"
        fi
    done
    echo "✓ Docs synced"
fi

# 3. Check for node/npm
if command -v npm >/dev/null 2>&1 && [ -f package.json ]; then
    echo "Building Next.js export..."
    npm run build 2>/dev/null || echo "⚠ Build had issues"
    if [ -d out ]; then
        echo "✓ Next.js build complete"
    fi
fi

# 4. Get slug count
if [ -f content-loop/topics.json ]; then
    SLUGS=$(python3 -c "import json; print(len(json.load(open('content-loop/topics.json')).get('canonical_slugs', {})))" 2>/dev/null || echo "0")
    echo "Canonical slugs: $SLUGS"
fi

echo "=== Auto-deploy complete ==="