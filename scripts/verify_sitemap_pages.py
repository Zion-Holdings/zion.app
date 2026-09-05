#!/usr/bin/env python3
"""Verify sitemap-0 and alias routes have public/ HTML that deploy would ship."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SITE = "https://ziontechgroup.com"

ALIASES = [
    "/roteiros/",
    "/direitos/",
    "/free-ai-itools/",
    "/agents/",
    "/ai/demo/",
    "/free-ai-it-tools/",
    "/direitos-globais/",
]


def locs(path: Path) -> list[str]:
    return [m.strip() for m in re.findall(r"<loc>\s*([^<]+)\s*</loc>", path.read_text(encoding="utf-8"))]


def has_page(base: Path, url_path: str) -> bool:
    rel = url_path.strip("/")
    if not rel:
        return (base / "index.html").exists()
    return (base / rel / "index.html").exists() or (base / f"{rel}.html").exists()


def main() -> int:
    sm = ROOT / "sitemap-0.xml"
    urls = []
    for loc in locs(sm):
        p = loc.replace(SITE, "") or "/"
        if not p.endswith("/"):
            p += "/"
        urls.append(p)

    missing = [u for u in urls if not has_page(PUBLIC, u)]
    svc = [u for u in urls if u.startswith("/services/")]
    blog = [u for u in urls if u.startswith("/blog/")]
    svc_miss = [u for u in svc if not has_page(PUBLIC, u)]
    blog_miss = [u for u in blog if not has_page(PUBLIC, u)]
    alias_miss = [u for u in ALIASES if not has_page(PUBLIC, u)]

    print(f"sitemap urls={len(urls)}")
    print(f"services={len(svc)} missing_in_public={len(svc_miss)}")
    print(f"blog={len(blog)} missing_in_public={len(blog_miss)}")
    print(f"total sitemap missing in public={len(missing)}")
    print(f"aliases missing={alias_miss or 'none'}")
    if svc_miss[:8]:
        print("sample missing services:")
        for u in svc_miss[:8]:
            print(" ", u)
    if blog_miss[:8]:
        print("sample missing blog:")
        for u in blog_miss[:8]:
            print(" ", u)

    out = ROOT / "out"
    out_miss = []
    if out.exists():
        out_miss = [u for u in urls if not has_page(out, u)]
        alias_out = [u for u in ALIASES if not has_page(out, u)]
        print(f"out/ sitemap missing={len(out_miss)} aliases missing={alias_out or 'none'}")

    ok = not svc_miss and not blog_miss and not alias_miss
    print("RESULT", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
