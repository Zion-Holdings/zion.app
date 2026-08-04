#!/usr/bin/env python3
import os, re
from urllib.parse import urlparse

ROOT = '.'
files = []
for root, dirs, filenames in os.walk(ROOT):
    for f in filenames:
        if f.endswith(('.tsx', '.ts', '.js', '.jsx')):
            path = os.path.join(root, f)
            files.append(path)

hrefs = set()
href_files = {}
for path in files:
    try:
        text = open(path, 'r', encoding='utf-8', errors='ignore').read()
    except Exception:
        continue
    for m in re.finditer(r'href=(["\'])([^"\']+)\1', text):
        href = m.group(2)
        hrefs.add(href)
        href_files.setdefault(href, set()).add(path)

route_paths = set()
for root, dirs, filenames in os.walk(os.path.join(ROOT, 'app')):
    if '/node_modules' in root:
        continue
    for f in filenames:
        if f == 'page.tsx':
            rel = os.path.relpath(os.path.join(root, f), ROOT)
            route = '/' + rel.replace('app/', '').replace('/page.tsx', '')
            if route == '/page':
                route = '/'
            route_paths.add(route)

if os.path.isdir('src/app'):
    for root, dirs, filenames in os.walk('src/app'):
        if '/node_modules' in root:
            continue
        for f in filenames:
            if f == 'page.tsx':
                rel = os.path.relpath(os.path.join(root, f), ROOT)
                route = '/' + rel.replace('src/app/', '').replace('/page.tsx', '')
                if route == '/page':
                    route = '/'
                route_paths.add(route)

existing_files = {}
for route in route_paths:
    path = None
    if route == '/':
        for candidate in ['app/page.tsx', 'src/app/page.tsx', 'app/index.tsx', 'app/page.js', 'src/app/page.js']:
            if os.path.exists(candidate):
                path = candidate
                break
    else:
        rel = route.strip('/')
        for candidate in [f'app/{rel}/page.tsx', f'src/app/{rel}/page.tsx', f'app/{rel}.tsx', f'src/app/{rel}.tsx']:
            if os.path.exists(candidate):
                path = candidate
                break
    existing_files[route] = path

internal = {h for h in hrefs if h.startswith('/') and not h.startswith('//') and ':' not in urlparse(h).netloc}
missing = []
for href in sorted(internal):
    path = href.split('?')[0].split('#')[0]
    if path.endswith('/'):
        path = path[:-1]
    if path == '':
        path = '/'
    if path not in existing_files:
        fallback = None
        parts = path.strip('/').split('/')
        if len(parts) >= 2:
            maybe = '/services/[id]'
            if maybe in route_paths or any(r.startswith('/services/') for r in route_paths):
                fallback = 'dynamic_services'
        if fallback is None:
            missing.append((href, existing_files.get(path), href_files.get(href)))

print('UNIQUE_HREFS', len(hrefs))
print('ROUTE_PATHS', len(route_paths))
print('BROKEN_HREFS', len(missing))
for item in missing:
    print('BROKEN', item)
