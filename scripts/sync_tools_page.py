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
TOOLS_INDEX = PUBLIC_TOOLS / "index.html"


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
        f'''        <Link href="/tools/{c["slug"]}/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">{c["icon"]}</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">{c["name"]}</h3>
          <p className="mt-2 text-sm text-slate-400">{c["description"]}</p>
        </Link>'''
        for c in cards
    )
    base = '''import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  return (
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
      ]}
      actions={[
        { label: 'Get a recommendation', href: '/tools/ai-roi-calculator/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
        { label: 'Cloud savings check', href: '/tools/cloud-cost-optimizer/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
__CARDS__
      </div>
    </StandardPage>
  );
}
'''
    return base.replace("__CARDS__", cards_tsx)


def render_index(cards):
    items = "\n".join(
        f'      <a class="card" href="/tools/{c["slug"]}/"><div class="icon">🛠️</div><div class="name">{c["name"]}</div><div class="desc">{c["description"]}</div></a>'
        for c in cards
    )
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tools | Zion Tech Group</title>
<style>
  :root {{ --bg:#0b0f1a; --card:rgba(255,255,255,0.04); --border:rgba(255,255,255,0.08); --text:#e7eaf0; --muted:#a3a8b8; --accent:#7c3aed; --accent-2:#22d3ee; }}
  * {{ box-sizing: border-box; }}
  html, body {{ margin:0; padding:0; background: linear-gradient(180deg,#0b0f1a 0%,#0f1626 100%); color:var(--text); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }}
  .wrap {{ max-width: 980px; margin: 0 auto; padding: 28px 20px 60px; }}
  .title {{ font-size: 28px; font-weight: 700; letter-spacing: -0.3px; }}
  .sub {{ color: var(--muted); margin-top: 6px; }}
  .grid {{ display: grid; gap: 16px; grid-template-columns: repeat(3, 1fr); margin-top: 18px; }}
  @media (max-width: 720px) {{ .grid {{ grid-template-columns: 1fr; }} }}
  .card {{ background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 18px; text-decoration: none; color: inherit; backdrop-filter: blur(10px); box-shadow: 0 10px 30px rgba(0,0,0,0.25); transition: transform .15s ease, border-color .15s ease; }}
  .card:hover {{ transform: translateY(-2px); border-color: rgba(124,58,237,.35); }}
  .icon {{ font-size: 28px; margin-bottom: 10px; }}
  .name {{ font-size: 16px; font-weight: 600; color: #fff; }}
  .desc {{ margin-top: 6px; font-size: 13px; color: var(--muted); }}
  .cta {{ margin-top: 22px; }}
  .cta a {{ color: var(--accent-2); text-decoration: none; font-weight: 600; }}
</style>
</head>
<body>
  <div class="wrap">
    <div class="title">Tools</div>
    <div class="sub">Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives.</div>
    <div class="grid">
{items}
    </div>
    <div class="cta"><a href="/contact/">Talk to an engineer about your cloud estate →</a></div>
  </div>
</body>
</html>
"""


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
    page_content = render_page(cards)
    PAGE_FILE.write_text(page_content, encoding="utf-8")
    index_content = render_index(cards)
    TOOLS_INDEX.write_text(index_content, encoding="utf-8")
    print(f"SYNCED: {PAGE_FILE} ({len(cards)} tool cards)")
    print(f"SYNCED: {TOOLS_INDEX} ({len(cards)} tool cards)")


if __name__ == "__main__":
    sync()
