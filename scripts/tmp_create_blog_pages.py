import re
from pathlib import Path

repo = Path.home() / 'zion-support.github.io'
seo = (repo / 'blog' / 'seo-bundle-20260705.md').read_text(encoding='utf-8')

pattern = re.compile(
    r'^title:\s*"(.+?)"\nslug:\s*"([^"]+)"\ndate:\s*"([^"]+)"\ndescription: "(.+?)"',
    re.MULTILINE,
)
posts = []
for m in pattern.finditer(seo):
    title, slug, date, desc = m.group(1), m.group(2), m.group(3), m.group(4)
    posts.append({'slug': slug, 'title': title, 'date': date, 'desc': desc})

blog_dir = repo / 'app' / 'blog'
created = []
for p in posts:
    page_dir = blog_dir / p['slug']
    if page_dir.exists():
        continue
    page_dir.mkdir(parents=True, exist_ok=True)
    content = (
        'import { Metadata } from "next";\n'
        'export const metadata: Metadata = {\n'
        f'  title: "{p["title"].replace(chr(34), chr(92)+chr(34))} | Zion Tech Group Blog",\n'
        f'  description: "{p["desc"].replace(chr(34), chr(92)+chr(34))}",\n'
        f'  alternates: {{ canonical: "/blog/{p["slug"]}/" }},\n'
        '};\n'
        'export default function Page() {\n'
        '  return (\n'
        '    <div className="container-page py-20">\n'
        f'      <h1 className="text-3xl font-bold mb-4">{p["title"].replace(chr(34), "&quot;")}</h1>\n'
        f'      <p className="text-slate-400 mb-8">{p["desc"].replace(chr(34), "&quot;")}</p>\n'
        f'      <div className="text-sm text-slate-500">Published: {p["date"]}</div>\n'
        '    </div>\n'
        '  );\n'
        '}\n'
    )
    (page_dir / 'page.tsx').write_text(content, encoding='utf-8')
    created.append(p['slug'])

print('CREATED_POSTS', len(created))
for x in created:
    print(x)
