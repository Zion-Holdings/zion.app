#!/usr/bin/env python3
"""
Internal link auditor for the Zion Tech Group Next.js app.
Builds KNOWN_ROUTES from app/**/page.tsx plus known aliases.
"""
import re
import json
from pathlib import Path

ROOT = Path('/data/data/com.termux/files/home/zion-support.github.io')
APP = ROOT / 'app'

LINK_RE = re.compile(r'href="(/[^"]+)"')
IGNORE_PREFIXES = ('http://', 'https://', '//', '#', 'mailto:', 'tel:', '{', '`')
ALIAS_ROUTES = {
    '/','/blog','/services','/contact','/about','/careers','/case-studies','/community','/ai','/automation','/analytics','/consultation','/configurator','/client-portal','/cookies','/compliance-automation','/5g-solutions','/academy','/api-development','/blockchain-solutions',
    '/dashboard','/pricing','/partners','/search','/testimonials','/faq','/industry-solutions','/proposals','/status','/tools/ai-service-router','/press','/privacy','/terms','/services-explorer','/service-comparison',
}

KNOWN_ROUTES = set(ALIAS_ROUTES)

for p in APP.rglob('page.tsx'):
    try:
        rel = p.relative_to(APP)
        parts = [part for part in rel.parent.parts if part not in ('app',)]
        route = '/' + '/'.join(parts)
        if not route or route == '/':
            route = '/'
        if route not in KNOWN_ROUTES:
            KNOWN_ROUTES.add(route)
            # Also register common alias slugs
            if route.endswith('s'):
                KNOWN_ROUTES.add(route[:-1])
            base = route.rstrip('/')
            if base:
                KNOWN_ROUTES.add(base)
    except Exception:
        pass

BROAD_PREFIXES = (
    '/blog/','/services/','/ai-services/','/ai-lab/','/ai/','/api/','/docs/','/posts/','/resources/','/tools/',
)

rows = []
checked_files = set()
all_links = 0
for path in ROOT.rglob('*.tsx'):
    try:
        text = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        continue
    for m in LINK_RE.finditer(text):
        href = m.group(1)
        if any(href.startswith(pref) for pref in IGNORE_PREFIXES):
            continue
        path_part = href.split('?')[0].split('#')[0]
        normalized = path_part.rstrip('/')
        if not normalized:
            normalized = '/'
        all_links += 1
        checked_files.add(str(path.relative_to(ROOT)))
        ok = (
            normalized in KNOWN_ROUTES
            or any(normalized.startswith(prefix) for prefix in BROAD_PREFIXES)
            or normalized in ALIAS_ROUTES
        )
        if not ok:
            rows.append({
                'file': str(path.relative_to(ROOT)),
                'href': href,
                'normalized': normalized,
                'issue': 'route_not_found'
            })

report = {
    'checked_files': len(checked_files),
    'links_found': all_links,
    'broken_links': rows,
    'broken_count': len(rows),
    'known_routes_count': len(KNOWN_ROUTES),
    'known_routes_sample': sorted(KNOWN_ROUTES)[:80],
}
print(json.dumps(report, ensure_ascii=False, indent=2))
