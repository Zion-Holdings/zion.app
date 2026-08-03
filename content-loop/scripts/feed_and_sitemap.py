#!/usr/bin/env python3
"""
Regenerate site feed files from current App Router blog slugs.

Outputs:
- feed.xml
- sitemap.xml
"""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(".")
BLOG_ROOT = REPO / "app" / "blog"
SITE_URL = "https://ziontechgroup.com"
NOW = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "+0000")


def collect_blog_slugs() -> list[str]:
    if not BLOG_ROOT.exists():
        return []
    slugs = []
    for child in BLOG_ROOT.iterdir():
        if child.is_dir() and (child / "page.tsx").exists():
            slugs.append(child.name)
    slugs.sort()
    return slugs


def page_meta(slug: str) -> tuple[str, str]:
    page = BLOG_ROOT / slug / "page.tsx"
    text = page.read_text(encoding="utf-8")
    title = slug.replace("-", " ").title()
    desc = title
    match = re.search(r"title:\s*'([^']+)'", text)
    if match:
        title = match.group(1)
    match = re.search(r"description:\s*'([^']+)'", text)
    if match:
        desc = match.group(1)
    return title, desc


def write_feed(slugs: list[str]) -> Path:
    items = []
    for slug in slugs:
        title, desc = page_meta(slug)
        items.append(
            f"""  <item>
    <title>{title}</title>
    <link>{SITE_URL}/blog/{slug}/</link>
    <guid isPermaLink="true">{SITE_URL}/blog/{slug}/</guid>
    <pubDate>{NOW}</pubDate>
    <category>Insights</category>
    <description><![CDATA[{desc}]]></description>
  </item>"""
        )
    feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Zion Tech Group</title>
  <link>{SITE_URL}</link>
  <description>AI, IT & Micro SAAS Solutions — insights and execution guides.</description>
  <language>en-us</language>
  <lastBuildDate>{NOW}</lastBuildDate>
  <atom:link href="{SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
</channel>
</rss>
"""
    path = REPO / "feed.xml"
    path.write_text(feed, encoding="utf-8")
    return path


def write_sitemap(slugs: list[str]) -> Path:
    today = datetime.now(timezone.utc).date().isoformat()
    urls = [
        f"""  <url>
    <loc>{SITE_URL}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>""",
        f"""  <url>
    <loc>{SITE_URL}/blog</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>""",
    ]
    for slug in slugs:
        urls.append(
            f"""  <url>
    <loc>{SITE_URL}/blog/{slug}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>"""
        )
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""
    path = REPO / "sitemap.xml"
    path.write_text(xml, encoding="utf-8")
    return path


def main() -> int:
    slugs = collect_blog_slugs()
    if not slugs:
        print(json.dumps({"feed": False, "sitemap": False, "blog": 0}, ensure_ascii=False))
        return 0
    feed_path = write_feed(slugs)
    sitemap_path = write_sitemap(slugs)
    print(
        json.dumps(
            {
                "feed": str(feed_path),
                "sitemap": str(sitemap_path),
                "blog": len(slugs),
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
