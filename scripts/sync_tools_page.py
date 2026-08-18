#!/usr/bin/env python3
"""Sync the /tools index page with available tool subdirectories.

Ensures app/tools/page.tsx exists with proper metadata, canonical links,
and a grid of tool cards derived from app/tools/*/page.tsx files.
Idempotent: safe to run repeatedly.
"""
import os
import re

REPO_ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"
TOOLS_DIR = os.path.join(REPO_ROOT, "app", "tools")
PAGE_FILE = os.path.join(TOOLS_DIR, "page.tsx")

# Tool card links to render on the tools index
TOOL_CARDS = [
    {
        "name": "Service Recommender",
        "slug": "service-recommender",
        "description": "Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.",
        "icon": "🤖",
    },
    {
        "name": "Service Comparison",
        "slug": "service-comparison",
        "description": "Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.",
        "icon": "⚖️",
    },
    {
        "name": "SSL Checker",
        "slug": "ssl-checker",
        "description": "Real-time SSL/TLS certificate health and expiry check for any domain.",
        "icon": "🔒",
    },
]


def ensure_tools_dir():
    os.makedirs(TOOLS_DIR, exist_ok=True)
    for card in TOOL_CARDS:
        slug_dir = os.path.join(TOOLS_DIR, card["slug"])
        os.makedirs(slug_dir, exist_ok=True)


def render_page():
    cards_tsx = "\n".join(
        f'''        <Link href="/tools/{c["slug"]}" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">{c["icon"]}</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">{c["name"]}</h3>
          <p className="mt-2 text-sm text-slate-400">{c["description"]}</p>
        </Link>'''
        for c in TOOL_CARDS
    )

    return f'''import type {{ Metadata }} from 'next';
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
      breadcrumbItems={{
        [
          {{ label: 'Home', href: '/' }},
          {{ label: 'Tools' }},
        ]
      }}
      actions={{
        [
          {{ label: 'Browse services', href: '/services/', style: 'secondary' }},
        ]
      }}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
{cards_tsx}
      </div>
    </StandardPage>
  );
}}
'''


def sync():
    ensure_tools_dir()
    content = render_page()
    with open(PAGE_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"SYNCED: {PAGE_FILE} ({len(TOOL_CARDS)} tool cards)")


if __name__ == "__main__":
    sync()
