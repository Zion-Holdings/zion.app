#!/usr/bin/env python3
"""Quick internal link check on key paths."""
import urllib.request, urllib.parse, re, json, subprocess, sys
from pathlib import Path

ORIGIN = 'https://ziontechgroup.com'
PATHS = ['/', '/services/', '/tools/', '/contact/', '/pricing/', '/solutions/', '/blog/', '/about/']
checked = set()
broken = []

def curl_status(url):
    try:
        r = subprocess.run(['curl', '-s', '-o', 'NUL', '-w', '%{http_code}', '--max-time', '10', url],
                           capture_output=True, text=True, shell=False)
        # On Windows git-bash, NUL works as null device
        return r.stdout.strip()
    except Exception as e:
        return f'ERR:{e}'

for p in PATHS:
    url = ORIGIN + p
    try:
        resp = urllib.request.urlopen(url, timeout=15)
        html = resp.read().decode('utf-8', errors='replace')
    except Exception as e:
        broken.append({'path': p, 'error': str(e)})
        continue
    hrefs = re.findall(r'href=["\'](.*?)["\']', html, re.IGNORECASE)
    for h in hrefs:
        if h.startswith('#') or h.startswith('http://') or h.startswith('https://'):
            continue
        if h.startswith('/'):
            target = ORIGIN + h
        else:
            # relative
            target = urllib.parse.urljoin(url, h)
        if target in checked:
            continue
        checked.add(target)
        status = curl_status(target)
        if not status.startswith('2'):
            broken.append({'path': p, 'href': h, 'target': target, 'status': status})

print(json.dumps({'checked_paths': len(PATHS), 'unique_targets': len(checked), 'broken': broken}, indent=2))
