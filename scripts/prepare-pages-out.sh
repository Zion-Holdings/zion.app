#!/usr/bin/env bash
# Assemble the GitHub Pages artifact.
# public/ is the source of truth. Root-level legacy pages fill gaps only.
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

# Keep root assets in sync with public/ (Family A CSS/JS)
if [ -d public/assets ]; then
  mkdir -p "$DEST/assets"
  cp -Rf public/assets/. "$DEST/assets/"
fi

# 5) Inject Family A chrome on HTML that still lacks site.css / zion-shell.js
if command -v python3 >/dev/null 2>&1; then
  DEST="$DEST" python3 "$ROOT/scripts/inject-zion-shell.py" "$DEST"
else
  echo "inject-zion-shell: python3 not found, skipping HTML chrome inject" >&2
fi

touch "$DEST/.nojekyll"
echo "Prepared $DEST ($(find "$DEST" -type f | wc -l) files)"
