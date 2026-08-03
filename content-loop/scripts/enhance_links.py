#!/usr/bin/env python3
"""
Zion Content Loop — Internal linking enhancer.
Adds contextual related-post links and CTA links from app/blog/* pages to other blog posts.
"""
from __future__ import annotations
import json, random, re
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
BLOG_ROOT = REPO / 'app' / 'blog'
LINK_PATTERN = re.compile(r'href=["\'](/blog/[^"\']+)["\']', re.IGNORECASE)


def collect_slugs() -> list[str]:
    if not BLOG_ROOT.exists():
        return []
    return sorted([
        p.name for p in BLOG_ROOT.iterdir()
        if p.is_dir() and (p / 'page.tsx').exists()
    ])


def enhance() -> dict:
    slugs = collect_slugs()
    updated = []
    for slug in slugs:
        page = BLOG_ROOT / slug / 'page.tsx'
        if not page.exists():
            continue
        text = page.read_text(encoding='utf-8')
        current_links = set(LINK_PATTERN.findall(text))
        candidates = [s for s in slugs if s != slug and f'/blog/{s}' not in current_links]
        if not candidates:
            continue
        random.shuffle(candidates)
        related = candidates[:4]
        related_items = '\n'.join(
            f'<li><Link href="/blog/{r}">{r.replace("-", " ").title()}</Link></li>' for r in related
        )
        replacement = (
            '<div className="mt-4 flex flex-col gap-3 sm:flex-row">\n'
            '              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>\n'
            '            </div>'
        )
        new_cta_block = (
            '<div className="mt-4 flex flex-col gap-3 sm:flex-row">\n'
            '              <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>\n'
            '              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>\n'
            '            </div>'
        )
        if replacement in text:
            text = text.replace(replacement, new_cta_block, 1)
        elif '<div className="mt-4 flex flex-col gap-3 sm:flex-row">' in text:
            pass
        else:
            text = text.replace('</article>', '          <div className="mt-4 flex flex-col gap-3 sm:flex-row">\n              <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>\n              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>\n            </div>\n        </article>')
        if '<ul className="list-disc pl-6 text-slate-300 space-y-2">\n              Coming soon\n            </ul>' in text:
            text = text.replace('<ul className="list-disc pl-6 text-slate-300 space-y-2">\n              Coming soon\n            </ul>', f'<ul className="list-disc pl-6 text-slate-300 space-y-2">\n              {related_items}\n            </ul>')
        elif '<ul className="list-disc pl-6 text-slate-300 space-y-2">' in text and 'Related articles' in text:
            text = re.sub(
                r'(<ul className="list-disc pl-6 text-slate-300 space-y-2">)(.*?)(</ul>)',
                lambda m: m.group(1) + '\n              ' + m.group(2).strip() + ('\n              ' + '\n              '.join(f'<li><Link href="/blog/{r}">{r.replace("-", " ").title()}</Link></li>' for r in related if f'href="/blog/{r}"' not in m.group(2)) + '\n            ' + m.group(3)),
                text,
                flags=re.S
            )
        page.write_text(text, encoding='utf-8')
        updated.append(slug)
    return {"enhanced": len(updated), "items": updated}


def main() -> int:
    result = enhance()
    print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
