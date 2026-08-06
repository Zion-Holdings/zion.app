import os, re, json
from urllib.parse import urlparse

repo = '/data/data/com.termux/files/home/zion-support.github.io'

hrefs = []
for root, dirs, files in os.walk(repo):
    if any(part in root.split(os.sep) for part in ('node_modules', '.git', 'out', '.next')):
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts', '.js', '.jsx', '.html', '.md', '.mdx')):
            path = os.path.join(root, f)
            try:
                text = open(path, 'r', encoding='utf-8', errors='ignore').read()
            except Exception:
                continue
            for m in re.finditer(r'href\s*=\s*"([^"]+)"', text):
                hrefs.append((path, m.group(1)))
            for m in re.finditer(r'src\s*=\s*"([^"]+)"', text):
                hrefs.append((path, m.group(1)))

print('found_raw_refs', len(hrefs))

candidates = set()
for r, _, files in os.walk(repo):
    if any(part in r.split(os.sep) for part in ('node_modules', '.git')):
        continue
    if 'index.html' in files and r.startswith(os.path.join(repo, 'docs')):
        rel = os.path.relpath(r, repo)
        parts = rel.split(os.sep)
        if len(parts) >= 3:
            candidates.add('/' + '/'.join(parts[1:-1]) + '/')
        else:
            candidates.add('/')

# app route dirs from page.tsx files detection only
page_dirs = set()
for dirpath, dirnames, filenames in os.walk(os.path.join(repo, 'app')):
    if 'page.tsx' in filenames:
        rel = os.path.relpath(dirpath, repo)
        parts = rel.split(os.sep)
        route = '/' + '/'.join(parts[1:]) + '/'
        page_dirs.add(route)

for r in ('/index.html', '/sitemap.xml', '/robots.txt', '/manifest.json', '/', '/contact/', '/services/', '/blog/', '/tools/', '/ai-lab/', '/agents-monitoring/', '/dashboard/', '/pricing/', '/new-ai-services/'):
    candidates.add(r)
candidates.update(page_dirs)

external = []
internal = []
broken = []
seen_internal = set()

for rel, link in hrefs:
    cleaned = link.strip()
    if cleaned in seen_internal:
        continue
    seen_internal.add(cleaned)
    try:
        u = urlparse(cleaned)
    except Exception:
        continue
    if u.hostname:
        base_hostname = 'ziontechgroup.com'
        kind = 'external' if u.hostname != base_hostname and 'ziontechgroup.com' not in u.hostname else 'internal'
    else:
        kind = 'internal'
    if kind == 'external':
        external.append((rel, cleaned))
        continue
    path = u.path or '/'
    if not path.startswith('/'):
        path = '/' + path
    if path not in candidates:
        broken.append((rel, cleaned, path))

report = {
    'raw_refs': len(hrefs),
    'external_count': len(external),
    'broken_count': len(broken),
}
print('SUMMARY=', json.dumps(report))
with open('/data/data/com.termux/files/home/internal_link_audit.json', 'w') as f:
    json.dump({'summary': report, 'broken': broken, 'external': external}, f)
