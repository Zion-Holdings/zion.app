#!/usr/bin/env python3
from pathlib import Path
import re

app_base = Path('/Users/miami2/zion-support.github.io/app/seo')
docs_base = Path('/Users/miami2/zion-support.github.io/docs/seo')
docs_base.mkdir(parents=True, exist_ok=True)

for path in app_base.glob('*/page.tsx'):
    slug = path.parent.name
    text = path.read_text(encoding='utf-8', errors='ignore')
    m_title = re.search(r'title:\s*"([^"]+)"', text)
    m_desc = re.search(r'description:\s*"([^"]+)"', text)
    title = m_title.group(1) if m_title else slug
    desc = m_desc.group(1) if m_desc else ''
    out = docs_base / slug / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    html = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://ziontechgroup.com/seo/{slug}/">
</head>
<body style="min-height:100vh;background:#020617;color:#e2e8f0;padding:2rem">
<div style="max-width:900px;margin:0 auto">
<h1 style="font-size:2.2rem;font-weight:700;margin-bottom:1rem">{title}</h1>
<p style="color:#cbd5e1;margin-bottom:.75rem">{desc}</p>
<p><a href="https://calendly.com/kleber-ziontechgroup" style="color:#34d399;text-decoration:underline">Book an assessment</a></p>
<p><a href="https://ziontechgroup.com" style="color:#a78bfa;text-decoration:underline">Visit ziontechgroup.com</a></p>
</div>
</body>
</html>
'''
    out.write_text(html, encoding='utf-8')
    print(f'synced {slug}')
print('done')
