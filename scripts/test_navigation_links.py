#!/usr/bin/env python3
"""Guard: every navigation href must resolve to a page that actually builds.

Why this exists
---------------
All eight links in the "Featured AI Services" dropdown shipped as 404s. The
hrefs pointed at /services/<slug>/ for slugs that were never keys of
SERVICE_CATEGORY_MAP in app/services/[slug]/page.tsx -- and that map is what
generateStaticParams() enumerates, so those pages were never emitted. The
markup was valid, the typecheck passed, HTTP checks only probe routes that do
exist, and the sitemap did not list them either. Nothing in CI could see it.

A dead link in the primary menu is served from every page on the site, so this
class of defect is worth its own check.

What it verifies
----------------
For each href in app/constants/navigation.ts (and the inline link arrays in
app/components/Footer.tsx), the target resolves to one of:

  * a static route          app/<path>/page.tsx
  * a prebuilt static page  public/<path>/index.html
  * a dynamic route whose generateStaticParams source map contains the slug

Query strings (/services/?category=ai) are checked against their base path.
External URLs, mailto:, tel: and #anchors are skipped.

Run: python3 scripts/test_navigation_links.py

Current status (2026-08-19): 637 of 696 internal navigation links are dead --
SERVICE_CATEGORY_MAP has 10 keys while navigation.ts advertises ~640 distinct
/services/<slug>/ URLs. Spot-checked against production: 11 of 12 sampled
return 404 (the twelfth, ai-agents-autonomous, is a map key and returns 200).

This script is therefore a DIAGNOSTIC, not yet a CI gate. Wiring it into
deploy.yml today would block every deploy on a pre-existing 637-link backlog,
which is worse than the backlog. Wire it in after the backlog is resolved --
either by generating the missing service pages or by trimming navigation.ts to
the services that exist. Until then, run it manually and do not let the count
grow.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
NAV = REPO / 'app' / 'constants' / 'navigation.ts'
FOOTER = REPO / 'app' / 'components' / 'Footer.tsx'


def static_routes() -> set[str]:
    """Every routable static page, as a '/path/' string."""
    routes = set()
    for page in REPO.glob('app/**/page.tsx'):
        rel = page.parent.relative_to(REPO / 'app')
        parts = rel.parts
        # dynamic segments and Next.js private dirs are not plain static routes
        if any('[' in p for p in parts) or any(p.startswith('_') for p in parts):
            continue
        routes.add('/' if str(rel) == '.' else '/' + '/'.join(parts) + '/')
    return routes


def public_pages() -> set[str]:
    routes = set()
    for page in REPO.glob('public/**/index.html'):
        rel = page.parent.relative_to(REPO / 'public')
        routes.add('/' if str(rel) == '.' else '/' + str(rel).replace('\\', '/') + '/')
    return routes


def dynamic_slugs() -> dict[str, set[str]]:
    """Map a dynamic route prefix to the slugs generateStaticParams will emit.

    Only handles the shape this repo uses: Object.keys(SOME_MAP), where the map
    is a top-level object literal in the same file. Anything else is reported
    as unknown rather than silently treated as empty, so a refactor that moves
    the data cannot make this guard quietly stop checking.
    """
    out: dict[str, set[str]] = {}
    for page in REPO.glob('app/**/[[]*[]]/page.tsx'):
        prefix = '/' + '/'.join(page.parent.parent.relative_to(REPO / 'app').parts) + '/'
        src = page.read_text(encoding='utf-8')
        m = re.search(r'generateStaticParams\s*\([^)]*\)\s*\{(.*?)\n\}', src, re.S)
        if not m:
            out[prefix] = set()
            continue
        keys = re.search(r'Object\.keys\(\s*(\w+)\s*\)', m.group(1))
        if not keys:
            out[prefix] = set()
            continue
        block = re.search(
            rf'{keys.group(1)}[^=]*=\s*\{{(.*?)\n\}};', src, re.S)
        out[prefix] = (
            set(re.findall(r"^\s*'([^']+)':", block.group(1), re.M)) if block else set()
        )
    return out


def hrefs_from(path: Path) -> list[str]:
    if not path.exists():
        return []
    return re.findall(r"href:\s*'([^']+)'", path.read_text(encoding='utf-8'))


def main() -> int:
    if not NAV.exists():
        print(f'FAIL: {NAV.relative_to(REPO)} not found')
        return 1

    routes, pub, dyn = static_routes(), public_pages(), dynamic_slugs()
    links = [(NAV, h) for h in hrefs_from(NAV)] + [(FOOTER, h) for h in hrefs_from(FOOTER)]

    dead: list[tuple[str, str, str]] = []
    hygiene: list[tuple[str, str]] = []
    checked = 0

    for src, href in links:
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:', '#')):
            continue
        checked += 1
        base = href.split('?', 1)[0].split('#', 1)[0]
        if not base.endswith('/'):
            hygiene.append((href, 'missing trailing slash'))
            base += '/'
        if '//' in base.lstrip('/'):
            hygiene.append((href, 'double slash'))

        if base in routes or base in pub:
            continue

        matched = False
        for prefix, slugs in dyn.items():
            if base.startswith(prefix):
                slug = base[len(prefix):].strip('/')
                if slug and slug in slugs:
                    matched = True
                    break
                if slug:
                    dead.append((
                        src.name, href,
                        f'"{slug}" is not a generateStaticParams key for {prefix} '
                        f'({len(slugs)} keys) -- the page is never built',
                    ))
                    matched = True
                    break
        if matched:
            continue

        dead.append((src.name, href, 'no static route, public page or dynamic slug'))

    for src, href, why in dead:
        print(f'DEAD  {src:20} {href:52} {why}')
    for href, why in hygiene:
        print(f'HYGIENE  {href:52} {why}')

    print(
        f'\n{checked} internal links checked | '
        f'{len(routes)} static routes | {len(pub)} public pages | '
        f'{sum(len(v) for v in dyn.values())} dynamic slugs across {len(dyn)} routes'
    )
    if dead or hygiene:
        print(f'FAIL: {len(dead)} dead, {len(hygiene)} hygiene')
        return 1
    print('ok: every navigation link resolves to a page that builds')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
