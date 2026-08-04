#!/usr/bin/env python3
"""Deep site audit: internal link validation, missing pages, blog quality, duplicate slugs."""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('.').resolve()
APP_DIR = REPO / 'app'
DOCS_DIR = REPO / 'docs'
PUBLIC_DIR = REPO / 'public'
BLOG_DIR = APP_DIR / 'blog'
REPORT_DIR = REPO / 'automation' / 'reports'
REPORT_FILE = REPORT_DIR / 'site-audit-report.json'

HREF_RX = re.compile(r'href="([^"]+)"')
ASSET_EXT_RE = re.compile(r'\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff2|woff|ttf|eot|json|xml|txt|map)$')


def iter_tsx_files(root: Path) -> list[Path]:
    out = []
    if not root.exists():
        return out
    for p in root.rglob('*.tsx'):
        if p.is_file():
            out.append(p)
    return out


def iter_html_files(root: Path) -> list[Path]:
    out = []
    if not root.exists():
        return out
    for p in root.rglob('*.html'):
        if p.is_file():
            out.append(p)
    return out


def existing_routes() -> dict[str, Path]:
    routes: dict[str, Path] = {}
    for page in APP_DIR.rglob('page.tsx'):
        rel = page.parent.relative_to(APP_DIR)
        slug = str(rel) if str(rel) != '.' else ''
        route = '/' + slug + '/' if slug else '/'
        routes[route] = page
    for html in DOCS_DIR.rglob('index.html'):
        rel = html.parent.relative_to(DOCS_DIR)
        slug = str(rel) if str(rel) != '.' else ''
        route = '/' + slug + '/' if slug else '/'
        routes[route] = html
    for html in PUBLIC_DIR.rglob('index.html'):
        rel = html.parent.relative_to(PUBLIC_DIR)
        slug = str(rel) if str(rel) != '.' else ''
        route = '/' + slug + '/' if slug else '/'
        routes[route] = html
    return routes


def check_route_exists(route: str, valid_routes: set[str]) -> bool:
    if route in valid_routes:
        return True
    if route.endswith('/') and route[:-1] in valid_routes:
        return True
    return False


def main() -> int:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    routes = existing_routes()
    valid_route_set = set(routes.keys())

    broken_links = []
    empty_hrefs = []
    blog_slugs = set()
    thin_posts = []

    for page in iter_tsx_files(APP_DIR):
        text = page.read_text(encoding='utf-8', errors='ignore')
        for href_m in HREF_RX.finditer(text):
            href = href_m.group(1)
            if not href or href == '#':
                empty_hrefs.append({'file': str(page.relative_to(REPO)), 'href': href})
                continue
            if href.startswith('http://') or href.startswith('https://') or href.startswith('//') or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
                continue
            if ASSET_EXT_RE.search(href):
                continue
            route = href if href.endswith('/') else href + '/'
            if not route.startswith('/'):
                route = '/' + route
            if not check_route_exists(route, valid_route_set):
                broken_links.append({'file': str(page.relative_to(REPO)), 'href': href, 'route': route})
        rel = str(page.parent.relative_to(REPO))
        if rel.startswith('app/blog/') and page.name == 'page.tsx':
            slug = rel[len('app/blog/'):]
            blog_slugs.add(slug)
            body_m = re.search(r'<section[^>]*className="prose[^"]*"[^>]*>(.*?)</section>', text, re.DOTALL | re.IGNORECASE)
            if body_m:
                body_text = re.sub(r'<[^>]+>', '', body_m.group(1))
                words = len(body_text.split())
                if words < 250:
                    thin_posts.append({'slug': slug, 'words': words, 'file': rel + '/page.tsx'})

    for html in iter_html_files(DOCS_DIR):
        text = html.read_text(encoding='utf-8', errors='ignore')
        for href_m in HREF_RX.finditer(text):
            href = href_m.group(1)
            if not href or href == '#':
                empty_hrefs.append({'file': str(html.relative_to(REPO)), 'href': href})
                continue
            if href.startswith('http://') or href.startswith('https://') or href.startswith('//') or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
                continue
            if ASSET_EXT_RE.search(href):
                continue
            route = href if href.endswith('/') else href + '/'
            if not route.startswith('/'):
                route = '/' + route
            if not check_route_exists(route, valid_route_set):
                broken_links.append({'file': str(html.relative_to(REPO)), 'href': href, 'route': route})

    report = {
        'timestamp': datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z'),
        'routes': len(valid_route_set),
        'blog_slugs': len(blog_slugs),
        'broken_internal_links': len(broken_links),
        'empty_hrefs': len(empty_hrefs),
        'thin_posts': len(thin_posts),
        'broken_links_sample': broken_links[:50],
        'empty_hrefs_sample': empty_hrefs[:20],
        'thin_posts_sample': thin_posts[:20],
    }
    REPORT_FILE.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
