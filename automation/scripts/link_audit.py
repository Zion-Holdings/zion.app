#!/usr/bin/env python
import re
import sys
from pathlib import Path

def audit_links(file_path):
    text = Path(file_path).read_text(encoding='utf-8')
    links = re.findall(r'href=["\']([^"\']+)["\']', text)
    internal = [href for href in links if href.startswith('/') or not href.startswith('http')]
    external = [href for href in links if href.startswith('http')]
    broken = []
    for href in external:
        if not re.match(r'^https?://', href):
            broken.append(href)
    print(f"FILE {file_path}")
    print(f"TOTAL {len(links)} INTERNAL {len(internal)} EXTERNAL {len(external)} BROKEN {len(broken)}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        audit_links(p)
