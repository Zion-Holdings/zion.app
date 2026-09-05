#!/usr/bin/env python3
"""Idempotent Family A chrome injector for assembled GitHub Pages HTML."""
from __future__ import annotations

import os
import sys
from pathlib import Path

CSS_TAG = '<link rel="stylesheet" href="/assets/css/site.css">'
JS_TAG = '<script src="/assets/js/zion-shell.js" defer></script>'
SKIP_DIRS = {"_next", "node_modules", ".git"}


def should_skip(path: Path, dest: Path) -> bool:
    try:
        rel = path.relative_to(dest)
    except ValueError:
        return True
    return any(part in SKIP_DIRS for part in rel.parts)


def inject(text: str) -> str:
    lower = text.lower()
    if "zion-shell.js" in lower and "/assets/css/site.css" in lower:
        return text

    out = text
    if "/assets/css/site.css" not in lower:
        if "</head>" in out:
            out = out.replace("</head>", CSS_TAG + "\n</head>", 1)
        elif "</HEAD>" in out:
            out = out.replace("</HEAD>", CSS_TAG + "\n</HEAD>", 1)
        elif "<head>" in out:
            out = out.replace("<head>", "<head>\n" + CSS_TAG, 1)
        else:
            out = CSS_TAG + "\n" + out
        lower = out.lower()

    if "zion-shell.js" not in lower:
        if "</head>" in out:
            out = out.replace("</head>", JS_TAG + "\n</head>", 1)
        elif "</HEAD>" in out:
            out = out.replace("</HEAD>", JS_TAG + "\n</HEAD>", 1)
        elif "</body>" in out:
            out = out.replace("</body>", JS_TAG + "\n</body>", 1)
        elif "</BODY>" in out:
            out = out.replace("</BODY>", JS_TAG + "\n</BODY>", 1)
        else:
            out = out + "\n" + JS_TAG + "\n"
    return out


def main() -> int:
    dest = Path(os.environ.get("DEST", sys.argv[1] if len(sys.argv) > 1 else "out"))
    if not dest.is_dir():
        print(f"inject-zion-shell: dest missing: {dest}", file=sys.stderr)
        return 1

    changed = 0
    scanned = 0
    for path in dest.rglob("*.html"):
        if should_skip(path, dest):
            continue
        scanned += 1
        try:
            original = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        updated = inject(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed += 1
    print(f"inject-zion-shell: scanned {scanned} html, injected {changed}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
