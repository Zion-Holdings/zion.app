#!/usr/bin/env python3
"""
Fix all NEXT_REDIRECT stubs across the site.
For each page with a NEXT_REDIRECT, extract the target and create
a proper static HTML page if target doesn't exist.
"""
import os, re, sys

BASE = "/Users/miami2/zion-support.github.io"

def find_all_redirects():
    """Find all files containing NEXT_REDIRECT and extract target."""
    results = []
    for root, dirs, files in os.walk(BASE):
        # Skip .git, node_modules
        if '.git' in root or 'node_modules' in root:
            continue
        for f in files:
            if f.endswith('.txt') or f.endswith('.html'):
                path = os.path.join(root, f)
                try:
                    with open(path, 'r', errors='ignore') as fh:
                        content = fh.read()
                except:
                    continue
                if 'NEXT_REDIRECT' not in content:
                    continue
                # Extract the redirect target
                match = re.search(r'NEXT_REDIRECT;replace;([^;]+);307;', content)
                if match:
                    target = match.group(1)
                    results.append((path, target))
    return results

redirects = find_all_redirects()
print(f"Found {len(redirects)} files with NEXT_REDIRECT\n")

# Group by target
by_target = {}
for path, target in redirects:
    if target not in by_target:
        by_target[target] = []
    by_target[target].append(path)

for target, paths in sorted(by_target.items()):
    exists = os.path.exists(os.path.join(BASE, target.strip('/')))
    exists_idx = os.path.exists(os.path.join(BASE, target.strip('/'), 'index.html'))
    print(f"Target: {target}")
    print(f"  Exists as dir: {exists}")
    print(f"  Exists as index.html: {exists_idx}")
    print(f"  Source files: {len(paths)}")
    for p in paths[:2]:
        print(f"    - {os.path.relpath(p, BASE)}")
    print()
