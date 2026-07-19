#!/usr/bin/env python
import re
import sys
from pathlib import Path

def minify_css(file_path):
    text = Path(file_path).read_text(encoding='utf-8')
    minified = re.sub(r'/\*[\s\S]*?\*/', '', text)
    minified = re.sub(r'\s+', ' ', minified)
    minified = re.sub(r'\s*([{,}])\s*', r'\1', minified)
    minified = re.sub(r';\s*', ';', minified)
    out = file_path.replace('.css', '.min.css').replace('_', '-')
    Path(out).write_text(minified.strip(), encoding='utf-8')
    print('MINIFIED', out)

if __name__ == '__main__':
    for p in sys.argv[1:]:
        minify_css(p)
