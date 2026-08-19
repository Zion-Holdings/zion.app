#!/usr/bin/env python3
"""Sync the /tools index page with available tool subdirectories.

Ensures app/tools/page.tsx reflects actual public/tools/* directories.
Idempotent: safe to run repeatedly.
"""
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_TOOLS = REPO_ROOT / "public" / "tools"
TOOLS_DIR = REPO_ROOT / "app" / "tools"
PAGE_FILE = TOOLS_DIR / "page.tsx"


def scan_public_tools():
    if not PUBLIC_TOOLS.exists():
        return []
    items = []
    for child in sorted(PUBLIC_TOOLS.iterdir()):
        if child.is_dir() and (child / "index.html").exists():
            slug = child.name
            title = slug.replace("-", " ").title()
            items.append({
                "name": title,
                "slug": slug,
                "description": f"Interactive tool: {title}.",
                "icon": "🛠️",
            })
    return items


def ensure_tools_dir(cards):
    TOOLS_DIR.mkdir(parents=True, exist_ok=True)
    for card in cards:
        (TOOLS_DIR / card["slug"]).mkdir(parents=True, exist_ok=True)


def render_page(cards):
    cards_tsx = "\n".join(
        f'''        <Link href="/tools/{c["slug"]}" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">{c["icon"]}</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">{c["name"]}</h3>
          <p className="mt-2 text-sm text-slate-400">{c["description"]}</p>
        </Link>'''
        for c in cards
    )
    base = '''import type {{ Metadata }} from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {{
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {{
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  }},
  alternates: {{ canonical: '/tools/' }},
}};

export default function ToolsPage() {{
  return (
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={[
        {{ label: 'Home', href: '/' }},
        {{ label: 'Tools' }},
      ]}
      actions={[
        {{ label: 'Browse services', href: '/services/', style: 'secondary' }},
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
__CARDS__
      </div>
    </StandardPage>
  );
}}
'''
    return base.replace("__CARDS__", cards_tsx)


def sync():
    cards = scan_public_tools()
    if not cards:
        cards = [{
            "name": "Service Recommender",
            "slug": "service-recommender",
            "description": "Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.",
            "icon": "🤖",
        }]
    ensure_tools_dir(cards)
    content = render_page(cards)
    PAGE_FILE.write_text(content, encoding="utf-8")
    print(f"SYNCED: {PAGE_FILE} ({len(cards)} tool cards)")


if __name__ == "__main__":
    sync()
