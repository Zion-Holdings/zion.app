#!/usr/bin/env python3
"""Extract internal links from homepage HTML."""
import re, sys

html = sys.stdin.read()
hrefs = re.findall(r'href=["\']([^"\']+)["\']', html)
internal = [h for h in hrefs if h.startswith('/') or 'ziontechgroup.com' in h]
print(f'Total hrefs: {len(hrefs)}')
print(f'Internal hrefs: {len(internal)}')
for h in sorted(set(internal)):
    print(h)
