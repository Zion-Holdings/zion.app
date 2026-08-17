from pathlib import Path
import re
import os

blog = Path('/data/data/com.termux/files/home/zion-support.github.io/app/blog')
valid_slugs = {name for name in os.listdir(blog) if (blog / name).is_dir() and name != '[slug]'}
print('valid_slugs', len(valid_slugs))
fixed = 0
skipped = 0
for page in blog.glob('*/page.tsx'):
    if not page.exists():
        skipped += 1
        continue
    text = page.read_text(encoding='utf-8', errors='ignore')
    original = text
    lines = text.splitlines()
    new_lines = []
    in_prose = False
    for line in lines:
        stripped = line.strip()
        if 'className="prose prose-invert' in line:
            in_prose = True
        elif in_prose and stripped.startswith('</section>'):
            in_prose = False
        if in_prose and stripped.startswith('## '):
            heading = stripped.lstrip('#').strip()
            indent = line[:len(line) - len(line.lstrip())]
            line = f'{indent}<h2 className="text-xl font-semibold text-white mb-2">{heading}</h2>'
        new_lines.append(line)
    text = '\n'.join(new_lines)
    def fix_href(m):
        href = m.group(1)
        slug = href.replace('/blog/', '').rstrip('/')
        if '/2026/' in href or slug not in valid_slugs:
            return 'href="/blog/"'
        return m.group(0)
    text = re.sub(r'href="(/blog/[^"]+)"', fix_href, text)
    if "dangerouslySetInnerHTML={__html: JSON.stringify(jsonLd)}" in text:
        if "import JsonLd from '@/components/JsonLd'" not in text:
            text = text.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport JsonLd from '@/components/JsonLd';")
            text = re.sub(r'<script[^>]*dangerouslySetInnerHTML=\{__html: JSON\.stringify\(jsonLd\)\}[^>]*/>', '', text)
    if text != original:
        try:
            page.write_text(text, encoding='utf-8')
            fixed += 1
        except FileNotFoundError:
            skipped += 1
print('fixed', fixed)
print('skipped', skipped)
