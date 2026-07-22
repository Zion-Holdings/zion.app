#!/usr/bin/env python
import re
import sys
from pathlib import Path

def audit_accessibility(file_path):
    text = Path(file_path).read_text(encoding='utf-8')
    issues = []
    if not re.search(r'<h1[^>]*>', text):
        issues.append('missing h1')
    if len(re.findall(r'<h1[^>]*>', text)) > 1:
        issues.append('multiple h1')
    if not re.search(r'<meta[^>]+name=["\']viewport["\']', text):
        issues.append('missing viewport')
    if not re.search(r'<img[^>]+alt=', text):
        issues.append('no img alt')
    if not re.search(r'<button[^>]*>', text) and not re.search(r'href=', text):
        issues.append('no interactive elements')
    print(f"{file_path}: {'; '.join(issues) if issues else 'ok'}")

if __name__ == '__main__':
    for p in sys.argv[1:]:
        audit_accessibility(p)
