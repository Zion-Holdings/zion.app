#!/usr/bin/env python3
"""Fix broken internal /blog/ links across blog pages and docs fallbacks."""
from __future__ import annotations

import re
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'


def existing_slugs() -> set[str]:
    slugs = set()
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists():
                slugs.add(child.name)
    if DOCS_ROOT.exists():
        for child in DOCS_ROOT.iterdir():
            if child.is_dir() and (child / 'index.html').exists():
                slugs.add(child.name)
    return slugs


def fix_file(path: Path, valid_slugs: set[str]) -> int:
    text = path.read_text(encoding='utf-8', errors='ignore')
    original = text

    def repl(m: re.Match) -> str:
        href = m.group(1)
        if not href.startswith('/blog/'):
            return m.group(0)
        if href.endswith('/'):
            slug = href[len('/blog/'):-1]
        else:
            slug = href[len('/blog/'):]
        if slug in valid_slugs:
            return m.group(0)
        return 'href="/contact"'

    text = re.sub(r'href="(/blog/[^"]+)"', repl, text)
    if text != original:
        path.write_text(text, encoding='utf-8')
        return 1
    return 0


def main() -> int:
    valid_slugs = existing_slugs()
    fixes = 0
    checked = 0
    for page in BLOG_ROOT.glob('*/page.tsx'):
        checked += 1
        fixes += fix_file(page, valid_slugs)
    for html in DOCS_ROOT.glob('*/index.html'):
        checked += 1
        fixes += fix_file(html, valid_slugs)
    print(f'checked={checked} fixed={fixes} valid_slugs={len(valid_slugs)}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
