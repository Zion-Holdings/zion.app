import re
from pathlib import Path

REPO = Path.home() / 'zion-support.github.io'
BLOG_MD = REPO / 'blog' / 'seo-bundle-20260705.md'
BLOG_DIR = REPO / 'app' / 'blog'

md = BLOG_MD.read_text(encoding='utf-8')
pattern = re.compile(
    r'^title:\s*"(.*?)"\nslug:\s*"(.*?)"\ndate:\s*"(.*?)"\ndescription: "(.*?)"',
    re.MULTILINE,
)
body_start_offsets = []
entries = []
for m in pattern.finditer(md):
    title = m.group(1)
    slug = m.group(2)
    date = m.group(3)
    desc = m.group(4)
    body_start = m.end()
    body_end = md.find('\n\n---\n\n## Post', body_start)
    if body_end == -1:
        body_end = len(md)
    body = md[body_start:body_end].strip()
    entries.append((slug, title, date, desc, body))


def md_to_html(text: str) -> str:
    lines = text.splitlines()
    out = []
    in_list = False
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('- '):
            item = stripped[2:]
            item = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', item)
            item = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', item)
            if not in_list:
                out.append('<ul>')
                in_list = True
            out.append(f'<li>{item}</li>')
        else:
            if in_list:
                out.append('</ul>')
                in_list = False
            if stripped.startswith('### '):
                out.append(f'<h3>{stripped[4:]}</h3>')
            elif stripped.startswith('## '):
                out.append(f'<h2>{stripped[3:]}</h2>')
            elif stripped == '':
                continue
            else:
                line_html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', stripped)
                line_html = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', line_html)
                out.append(f'<p>{line_html}</p>')
    if in_list:
        out.append('</ul>')
    return '\n'.join(out)


fixed = []
for slug, title, date, desc, body in entries:
    page_dir = BLOG_DIR / slug
    page_dir.mkdir(parents=True, exist_ok=True)
    target = page_dir / 'page.tsx'
    body_html = md_to_html(body)
    title_esc = title.replace('"', '\\"')
    desc_esc = desc.replace('"', '\\"')
    html_escaped = body_html.replace('\\', '\\\\').replace('`', '\\`')
    content = (
        'import { Metadata } from "next";\n'
        'export const metadata: Metadata = {\n'
        f'  title: "{title_esc} | Zion Tech Group Blog",\n'
        f'  description: "{desc_esc}",\n'
        f'  alternates: {{ canonical: "/blog/{slug}/" }},\n'
        '};\n'
        'export default function Page() {\n'
        '  return (\n'
        '    <article className="container-page py-20">\n'
        f'      <h1 className="text-4xl font-bold mb-4 text-white">{title_esc}</h1>\n'
        '      <div className="text-sm text-slate-500 mb-8">Published: '
        f'{date}</div>\n'
        '      <div\n'
        '        className="prose prose-invert max-w-none text-slate-300 leading-relaxed"\n'
        '        dangerouslySetInnerHTML={{ __html: `' + html_escaped + '` }}\n'
        '      />\n'
        '    </article>\n'
        '  );\n'
        '}\n'
    )
    target.write_text(content, encoding='utf-8')
    fixed.append(slug)

print('FIXED_BLOG_PAGES', len(fixed))
for x in fixed:
    print(x)
