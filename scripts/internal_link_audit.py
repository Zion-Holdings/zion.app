#!/usr/bin/env python3
"""
Internal link auditor for the Zion Tech Group Next.js app.
Scans source files for internal hrefs and checks whether the target route exists.
"""
import re
import json
from pathlib import Path
from collections import Counter

ROOT = Path('/data/data/com.termux/files/home/zion-support.github.io')
APP = ROOT / 'app'
COMPONENTS = ROOT / 'app' / 'components'

LINK_RE = re.compile(r'href="(/[^"]+)"')
IGNORE_PREFIXES = ('http://', 'https://', '//', '#', 'mailto:', 'tel:', '{', '`')
KNOWN_ROUTES = set()
for p in APP.rglob('page.tsx'):
    try:
        rel = p.relative_to(ROOT)
        route = '/' + str(rel.relative_to(APP / (p.relative_to(APP).parts[0] if False else '')).parent).replace('\\', '/')
        parts = route.strip('/').split('/')
        slug = '/' + '/'.join(parts[1:]) if len(parts) > 1 else '/'
        if slug == '/':
            slug = '/' + p.parent.name + '/'
        KNOWN_ROUTES.add(slug)
    except Exception:
        pass
KNOWN_ROUTES.update([
    '/','/blog','/services','/contact','/about','/careers','/case-studies','/community','/ai','/automation','/analytics','/consultation','/configurator','/client-portal','/cookies','/compliance-automation','/5g-solutions','/academy','/api-development','/blockchain-solutions'
])

rows=[]
checked_files=set()
all_links=0
for path in ROOT.rglob('*.tsx'):
    try:
        text = path.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        continue
    for m in LINK_RE.finditer(text):
        href=m.group(1)
        if any(href.startswith(pref) for pref in IGNORE_PREFIXES):
            continue
        normalized = href.split('?')[0].rstrip('/')
        if not normalized:
            normalized = '/'
        all_links += 1
        checked_files.add(str(path.relative_to(ROOT)))
        ok = normalized in KNOWN_ROUTES or normalized.startswith('/blog/') or normalized.startswith('/services/') or normalized.startswith('/ai-services/') or normalized.startswith('/ai-lab/') or normalized.startswith('/ai/') or normalized.startswith('/api/')
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
    'known_routes': sorted(KNOWN_ROUTES)[:120],
}
print(json.dumps(report, ensure_ascii=False, indent=2))
