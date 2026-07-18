#!/usr/bin/env python
import re
import sys
from pathlib import Path

def summarize_tools(dir_path):
    rows=[]
    for html in Path(dir_path).rglob('index.html'):
        text=html.read_text(encoding='utf-8', errors='ignore')
        title=re.search(r'<title[^>]*>([^<]+)</title>', text)
        canonical=re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', text)
        rows.append({
          'path': str(html),
          'title': title.group(1) if title else '',
          'canonical': canonical.group(1) if canonical else ''
        })
    print('COUNT', len(rows))
    for r in rows:
        print(r['path'], '=>', r['title'])

if __name__ == '__main__':
    for p in sys.argv[1:]:
        summarize_tools(p)
