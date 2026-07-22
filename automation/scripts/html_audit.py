#!/usr/bin/env python
import re
import sys
from pathlib import Path

def audit_html(file_path):
    text = Path(file_path).read_text(encoding='utf-8')
    issues = []
    if not re.search(r'<title[^>]*>', text):
        issues.append('missing title')
    if not re.search(r'<meta[^>]+name=["\']description["\']', text):
        issues.append('missing meta description')
    if not re.search(r'<meta[^>]+name=["\']viewport["\']', text):
        issues.append('missing viewport')
    h1 = len(re.findall(r'<h1[^>]*>', text))
    if h1 != 1:
        issues.append(f'h1 count={h1}')
    broken = re.findall(r"""<a[^>]+href=(["'])([^"']+)\1""", text)
    broken = [href for _, href in broken if href.startswith('http') and not re.match(r'^https?://', href)]
    if broken:
        issues.append(f'broken links={broken[:3]}')
    print(f"{file_path}: {'; '.join(issues) if issues else 'ok'}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        audit_html(p)
