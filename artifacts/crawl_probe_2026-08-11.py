import json, os, subprocess, sys, time
from pathlib import Path

REPO = Path(r'C:\Users\Zion\tmp\zion-gh-publish')
ARTIFACTS = REPO / 'artifacts'
ARTIFACTS.mkdir(exist_ok=True)
DATE = time.strftime('%Y-%m-%d')
OUT = ARTIFACTS / f'crawl_probe_{DATE}.json'

BASE = 'https://ziontechgroup.com'
KEY_PATHS = ['/', '/services/', '/tools/', '/contact/', '/pricing/', '/solutions/', '/blog/', '/about/']

results = {}
for p in KEY_PATHS:
    url = BASE + p
    try:
        r = subprocess.run(
            ['curl', '-s', '-o', 'NUL', '-w', '%{http_code}', '-L', '--max-time', '15', url],
            capture_output=True, text=True, timeout=20
        )
        code = r.stdout.strip()
        size_proc = subprocess.run(
            ['curl', '-s', '-o', 'NUL', '-w', '%{size_download}', '-L', '--max-time', '15', url],
            capture_output=True, text=True, timeout=20
        )
        size = size_proc.stdout.strip()
        results[p] = {'status_code': int(code) if code.isdigit() else code, 'size': int(size) if size.isdigit() else size}
    except Exception as e:
        results[p] = {'error': str(e)}

# secondary paths
secondary = ['/configurator/', '/search/', '/testimonials/', '/case-studies/', '/industry-solutions/', '/5g-solutions/', '/ai/', '/faq/', '/press/', '/privacy/', '/terms/', '/cookies/', '/sla/', '/health/', '/dashboard/', '/agents-monitoring/', '/academy/', '/status/']
for p in secondary:
    url = BASE + p
    try:
        r = subprocess.run(
            ['curl', '-s', '-o', 'NUL', '-w', '%{http_code}', '-L', '--max-time', '15', url],
            capture_output=True, text=True, timeout=20
        )
        code = r.stdout.strip()
        results[p] = {'status_code': int(code) if code.isdigit() else code}
    except Exception as e:
        results[p] = {'error': str(e)}

OUT.write_text(json.dumps({'crawled_at': time.time(), 'base': BASE, 'results': results}, indent=2))
print(f"Wrote {OUT}")
