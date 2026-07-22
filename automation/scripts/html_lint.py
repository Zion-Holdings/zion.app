#!/usr/bin/env python
import re
import sys
from pathlib import Path
from datetime import datetime

def lint_html(file_path):
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
    print(f"{file_path}: {'; '.join(issues) if issues else 'ok'}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        lint_html(p)
