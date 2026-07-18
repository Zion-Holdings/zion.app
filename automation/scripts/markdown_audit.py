#!/usr/bin/env python
import re
import sys
from pathlib import Path

def audit_markdown(file_path):
    text = Path(file_path).read_text(encoding='utf-8')
    lines = text.splitlines()
    headings = [len(re.match(r'^#{1,6}', line).group()) for line in lines if re.match(r'^#{1,6}', line)]
    h1 = headings.count(1)
    h2 = headings.count(2)
    links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', text)
    external = [href for _, href in links if href.startswith('http')]
    print(f"FILE {file_path}")
    print(f"H1 {h1} H2 {h2}")
    print(f"LINKS {len(links)} EXTERNAL {len(external)}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        audit_markdown(p)
