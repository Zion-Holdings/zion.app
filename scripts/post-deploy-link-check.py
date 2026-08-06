#!/usr/bin/env python3
"""Lightweight post-deploy link verifier for ziontechgroup.com."""
import json
import sys
from pathlib import Path
from datetime import datetime, timezone

try:
    import requests
except ImportError:
    print('missing dependency: requests')
    sys.exit(2)

BASE = 'https://ziontechgroup.com'
ROUTES = [
    '/',
    '/services/',
    '/blog/',
    '/contact/',
    '/case-studies/',
    '/about/',
    '/pricing/',
    '/tools/',
    '/free-tools/',
    '/sitemap.xml',
    '/robots.txt',
    '/ai-services-index/',
    '/new-ai-services/',
    '/free-resources/',
    '/blog/5g-solutions-2026/',
    '/blog/accessibility-compliance-2026/',
    '/blog/ai-3d-asset-generator-2026/',
    '/blog/ai-customer-support-pro-2026/',
    '/blog/ai-observability-2026/',
    '/blog/ai-performance-monitoring-2026/',
]
REPORT_DIR = Path('automation/reports')
REPORT_DIR.mkdir(parents=True, exist_ok=True)
REPORT_PATH = REPORT_DIR / 'post-deploy-link-check-latest.json'


def check():
    results = []
    broken = 0
    for route in ROUTES:
        try:
            code = requests.get(BASE + route, timeout=20, allow_redirects=True).status_code
        except Exception as exc:
            code = repr(exc)
            broken += 1
            results.append({'route': route, 'code': code, 'ok': False, 'error': code})
            continue
        ok = code == 200
        if not ok:
            broken += 1
        results.append({'route': route, 'code': code, 'ok': ok})
    return results, broken


def main():
    results, broken = check()
    payload = {
        'checked_at': datetime.now(timezone.utc).isoformat(),
        'base': BASE,
        'routes_checked': len(results),
        'routes_ok': len(results) - broken,
        'routes_broken': broken,
        'results': results,
    }
    REPORT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    if broken:
        sys.exit(3)


if __name__ == '__main__':
    main()
