#!/usr/bin/env python3
"""
Zion Site Repair — comprehensive link normalization and missing-page scaffolder.
"""
from __future__ import annotations
import re, json
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
NORMALIZE = {
    '/services/ai-powered-customer-success/': '/services/ai-customer-success-churn-prevention',
    '/services/ai-powered-customer-success': '/services/ai-customer-success-churn-prevention',
    '/services/ai-email-coaching-platform': '/services/ai-email-intelligence',
    '/services/ai-email-coaching-platform/': '/services/ai-email-intelligence',
    '/services/data-lake-platform': '/services/ai-data-lakehouse-pipelines',
    '/services/data-lake-platform/': '/services/ai-data-lakehouse-pipelines',
    '/services/managed-observability-247/': '/services/ai-observability',
    '/services/managed-observability-247': '/services/ai-observability',
    '/services/sec-soc-as-a-service/': '/services/ai-observability-aiops',
    '/services/sec-soc-as-a-service': '/services/ai-observability-aiops',
    '/tools/roi-calculator/': '/tools/roi-calculator',
    '/tools/health-check/': '/tools/health-check',
    '/tools/service-recommender/': '/tools/service-recommender',
    '/tools/base64/': '/tools/base64',
    '/configurator/': '/configurator',
    '/status/': '/status',
    '/privacy/': '/privacy',
    '/faq/': '/faq',
    '/health-dashboard/': '/health-dashboard',
    '/industry-solutions/': '/industry-solutions',
    '/free-resources': '/free-resources',
    '/free-ai-readiness-audit': '/free-ai-readiness-audit',
    '/consultation': '/consultation',
    '/business-solutions': '/business-solutions',
}


def page_template(title: str, description: str, body: str) -> str:
    return f'''import Link from 'next/link';

export const metadata = {{
  title: '{title} | Zion Tech Group',
  description: '{description}',
}};

export default function Page() {{
  return (
    <div className=\"container-page py-20\">
      <h1 className=\"text-4xl font-bold mb-4 text-white\">{title}</h1>
      <p className=\"mb-6 text-slate-300\">{description}</p>
      {body}
      <div className=\"mt-10 flex flex-col gap-3 sm:flex-row\">
        <Link href=\"/contact\" className=\"rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900\">Contact us</Link>
        <Link href=\"/services\" className=\"rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white\">Our services</Link>
      </div>
    </div>
  );
}}
'''


def create_placeholder(href: str) -> None:
    path = href.lstrip('/')
    target = REPO / 'app' / path / 'page.tsx'
    if target.exists():
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    title = path.replace('-', ' ').replace('/', ' - ').title()
    description = f'{title} page from Zion Tech Group.'
    body = (
        '      <div className=\"grid gap-6 sm:grid-cols-2\">\n'
        '        <div className=\"rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6\">\n'
        '          <h2 className=\"mb-2 text-xl font-bold text-white\">Overview</h2>\n'
        f'          <p className=\"text-slate-300\">This page provides information about {title}.</p>\n'
        '        </div>\n'
        '        <div className=\"rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6\">\n'
        '          <h2 className=\"mb-2 text-xl font-bold text-white\">Next steps</h2>\n'
        '          <p className=\"text-slate-300\">Contact us to discuss your requirements.</p>\n'
        '        </div>\n'
        '      </div>\n'
    )
    target.write_text(page_template(title, description, body), encoding='utf-8')


def main() -> int:
    changed = []
    for p in REPO.glob('app/**/*.tsx'):
        text = p.read_text(encoding='utf-8', errors='ignore')
        new = text
        for src, dst in NORMALIZE.items():
            new = new.replace(f'href="{src}"', f'href="{dst}"')
            new = new.replace(f"href='{src}'", f"href='{dst}'")
        if new != text:
            p.write_text(new, encoding='utf-8')
            changed.append(str(p))

    missing = []
    for p in REPO.glob('app/**/*.tsx'):
        text = p.read_text(encoding='utf-8', errors='ignore')
        for m in re.finditer(r'href=["\'](/[^"\']+)["\']', text):
            href = m.group(1).split('?')[0].split('#')[0]
            if href.startswith('/_next/') or href.startswith('http') or href == '/':
                continue
            target = REPO / href.lstrip('/')
            if not target.exists():
                missing.append(href)

    missing = sorted(set(missing))
    created = []
    for href in missing:
        create_placeholder(href)
        created.append(href)

    print(json.dumps({"changed_files": len(changed), "created_placeholders": len(created), "residual_missing": len(missing)}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
