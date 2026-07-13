#!/usr/bin/env python3
import json, re, urllib.request
from pathlib import Path
import datetime

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
CHECK_ROUTES = ['/', '/portal', '/contact', '/services/ai-agents-autonomous']
UA = 'Mozilla/5.0 (compatible; ZionPagesVerifier/1.0)'

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def canonical_from_html(html):
    m = re.search(r'<link rel="canonical"\s+href="([^"]+)"', html, re.I)
    return m.group(1).rstrip('/') if m else None

def metadata_canonical_for(route):
    safe = route.replace('/','') or 'index'
    candidates = [REPO / 'app' / safe / 'page.tsx', REPO / 'app' / (safe + '.tsx')]
    for p in candidates:
        if p.exists():
            text = p.read_text(encoding='utf-8', errors='ignore')
            m = re.search(r"""canonical:\s*(['"])([^'"]+)\1""", text)
            if m:
                val = m.group(2).strip()
                if val:
                    return val.rstrip('/')
    return None

results = {'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'routes': []}
for route in CHECK_ROUTES:
    url = 'https://ziontechgroup.com' + route + ('/' if not route.endswith('/') else '')
    try:
        html = fetch(url)
        live_canon = canonical_from_html(html)
        expected_canon = metadata_canonical_for(route)
        status = 'ok' if (live_canon and expected_canon and live_canon == expected_canon) else 'mismatch'
        results['routes'].append({
            'route': route,
            'url': url,
            'live_canonical': live_canon,
            'expected_canonical': expected_canon,
            'status': status,
        })
    except Exception as e:
        results['routes'].append({'route': route, 'url': url, 'status': 'error', 'error': str(e)})

mismatch = [r for r in results['routes'] if r.get('status') != 'ok']
print(json.dumps({'mismatch_count': len(mismatch), 'results': results['routes']}, ensure_ascii=False))
Path('scripts/reports/pages-canonical-deploy-latest.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
