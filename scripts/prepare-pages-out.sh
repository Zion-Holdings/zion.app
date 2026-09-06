#!/usr/bin/env bash
# Assemble the GitHub Pages artifact.
# public/ is the source of truth. Root-level legacy pages fill gaps only.
# Family A under public/services/** must never be replaced by ~850-byte
# "Not a packaged SKU" redirect stubs (historically published on gh-pages).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
DEST="${DEST:-out}"
DEST_NAME="$(basename "$DEST")"
rm -rf "$DEST"
mkdir -p "$DEST"

# 1) public/ first
if [ -d public ]; then
  cp -Rf public/. "$DEST/"
fi

# 2) docs/ under /docs/ (do not overwrite public/docs if present)
if [ -d docs ]; then
  mkdir -p "$DEST/docs"
  cp -Rn docs/. "$DEST/docs/" 2>/dev/null || true
fi

# 3) Root-level page directories fill gaps only (never replace public/)
for d in */; do
  d="${d%/}"
  case "$d" in
    out|"$DEST_NAME"|.git|.github|node_modules|public|docs|gh-pages|__pycache__|scripts|automation|commands|app) continue ;;
  esac
  if [ -f "$d/index.html" ]; then
    mkdir -p "$DEST/$d"
    # Copy files that do not already exist in DEST (public wins)
    if command -v rsync >/dev/null 2>&1; then
      rsync -a --ignore-existing "$d/" "$DEST/$d/"
    else
      cp -Rn "$d/." "$DEST/$d/" 2>/dev/null || true
    fi
  fi
done

# 4) Root-level static files GitHub Pages actually serves (gap-fill)
for f in *.html sitemap*.xml robots.txt CNAME _headers _redirects styles.css sw.js offline.html og-home.svg .nojekyll .pages-trigger; do
  if [ -f "$f" ] && [ ! -e "$DEST/$f" ]; then
    cp -f "$f" "$DEST/$f"
  fi
done

# Mixed code+page directories: copy only index.html if public did not provide one
for special in automation commands app; do
  if [ -f "$special/index.html" ] && [ ! -f "$DEST/$special/index.html" ]; then
    mkdir -p "$DEST/$special"
    cp -f "$special/index.html" "$DEST/$special/index.html"
  fi
done

# Prefer the updated sitemap from public/ or, if missing, root
if [ -f public/sitemap-0.xml ]; then
  cp -f public/sitemap-0.xml "$DEST/sitemap-0.xml"
elif [ -f sitemap-0.xml ]; then
  cp -f sitemap-0.xml "$DEST/sitemap-0.xml"
fi

# 5) Family A chrome: force assets + inject tags into assembled HTML
mkdir -p "$DEST/assets/css" "$DEST/assets/js"
if [ -f public/assets/css/site.css ]; then
  cp -f public/assets/css/site.css "$DEST/assets/css/site.css"
fi
if [ -f public/assets/js/zion-shell.js ]; then
  cp -f public/assets/js/zion-shell.js "$DEST/assets/js/zion-shell.js"
fi
if command -v python3 >/dev/null 2>&1 && [ -f "$ROOT/scripts/inject-zion-shell.py" ]; then
  python3 "$ROOT/scripts/inject-zion-shell.py" "$DEST"
fi

# 6) HARD WIN: re-copy public/services (+ EN mirrors) AFTER gap-fill + inject.
#    Prevents root Next leftovers or any later step from displacing Family A.
#    Also strips leftover "Not a packaged SKU" stubs if they somehow appear.
if [ -d public/services ]; then
  mkdir -p "$DEST/services"
  # Force public/services over anything gap-fill or inject left behind
  if command -v rsync >/dev/null 2>&1; then
    rsync -a public/services/ "$DEST/services/"
  else
    cp -Rf public/services/. "$DEST/services/"
  fi
fi
if [ -d public/en/services ]; then
  mkdir -p "$DEST/en/services"
  if command -v rsync >/dev/null 2>&1; then
    rsync -a public/en/services/ "$DEST/en/services/"
  else
    cp -Rf public/en/services/. "$DEST/en/services/"
  fi
fi

# Remove any stub-sized redirect pages under services that are NOT in public/
# (orphan stubs from older gh-pages trees that gap-fill might have copied).
if command -v python3 >/dev/null 2>&1; then
  DEST="$DEST" python3 - <<'PY'
import os
from pathlib import Path
dest = Path(os.environ["DEST"])
markers = ("Not a packaged SKU", "no free consultation")
removed = 0
for base in (dest / "services", dest / "en" / "services"):
    if not base.is_dir():
        continue
    for path in base.glob("*/index.html"):
        raw = path.read_bytes()
        text = raw.decode("utf-8", errors="ignore")
        if len(raw) <= 1200 and any(m in text for m in markers):
            path.unlink(missing_ok=True)
            removed += 1
            # drop empty dir
            try:
                path.parent.rmdir()
            except OSError:
                pass
if removed:
    print(f"Removed {removed} packaged-SKU stub(s) from {dest}")
PY
fi

touch "$DEST/.nojekyll"
echo "Prepared $DEST ($(find "$DEST" -type f | wc -l) files)"

# Re-inject chrome after forced public/services copy (idempotent)
if command -v python3 >/dev/null 2>&1 && [ -f "$ROOT/scripts/inject-zion-shell.py" ]; then
  python3 "$ROOT/scripts/inject-zion-shell.py" "$DEST"
fi

# 7) Gate: Family A must win in out/services
if command -v python3 >/dev/null 2>&1 && [ -f "$ROOT/scripts/assert-no-service-stubs.py" ]; then
  python3 "$ROOT/scripts/assert-no-service-stubs.py" "$DEST"
fi
