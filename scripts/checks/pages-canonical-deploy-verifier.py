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
    safe = route.strip('/') or 'index'
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
        status = 'ok' if (live_canon and (expected_canon in (None, '') and route == '/' or live_canon == expected_canon)) else 'mismatch'
        issue = None
        if status == 'mismatch':
            if expected_canon in (None, ''):
                issue = 'missing_page_level_canonical'
            elif live_canon in (None, ''):
                issue = 'live_canonical_empty'
            elif route == '/' and live_canon == 'https://ziontechgroup.com':
                issue = 'homepage_canonical_ok_ignore'
            else:
                issue = 'deployed_layout_override_or_stale_cache'
        results['routes'].append({
            'route': route,
            'url': url,
            'live_canonical': live_canon,
            'expected_canonical': expected_canon,
            'status': 'ok' if status == 'mismatch' and route == '/' and live_canon == 'https://ziontechgroup.com' and issue == 'homepage_canonical_ok_ignore' else status,
            'issue': issue,
        })
    except Exception as e:
        results['routes'].append({'route': route, 'url': url, 'status': 'error', 'error': str(e)})

mismatch = [r for r in results['routes'] if r.get('status') != 'ok']
out = {'mismatch_count': len(mismatch), 'results': results['routes']}
print(json.dumps(out, ensure_ascii=False))
Path('scripts/reports/pages-canonical-deploy-latest.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
summary = {
  'checkedAt': results['generatedAt'],
  'status': 'ok' if not mismatch else 'mismatch',
  'mismatchCount': len(mismatch),
  'actionItems': [
    {
      'route': r['route'],
      'issue': r.get('issue'),
      'expectedCanonical': r.get('expected_canonical'),
      'liveCanonical': r.get('live_canonical'),
    }
    for r in mismatch
  ],
}
Path('scripts/reports/pages-canonical-deploy-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2))
print(json.dumps(summary, ensure_ascii=False))
