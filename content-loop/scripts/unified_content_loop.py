#!/usr/bin/env python3
"""Unified exponential content loop for zion-support.github.io."""
from __future__ import annotations

import hashlib
import json
import os
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

REPO = Path("/data/data/com.termux/files/home/zion-support.github.io")
APP_BLOG = REPO / "app/blog"
DOCS_BLOG = REPO / "docs/blog"
PUBLIC_BLOG = REPO / "public/blog"
TOPICS_FILE = REPO / "content-loop/topics.json"
SITEMAP_FILE = REPO / "sitemap.xml"
FEED_FILE = REPO / "feed.xml"
BLOG_PAGE = REPO / "app/blog/page.tsx"
PAGE_TEMPLATE = """\
export const metadata = {
  title: '__TITLE__ | Zion Tech Group',
  description: '__DESC__',
  alternates: { canonical: '/blog/__SLUG__/' },
  openGraph: {
    title: '__OG_TITLE__',
    description: '__OG_DESC__',
    type: 'article',
    url: 'https://ziontechgroup.com/blog/__SLUG__/',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-8 text-sm text-slate-400">
          <a href="/blog" className="text-purple-300 hover:text-purple-200">← Back to all articles</a>
        </div>
        <header className="mb-12">
          <div className="mb-4 flex-wrap items-center gap-3 text-sm flex">
            <time dateTime="2026-08-04" className="text-slate-400">August 04, 2026</time>
            <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200">
              Insights
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            __H1__
          </h1>
        </header>
        <div className="prose-invert max-w-none space-y-10">
__BODY__
        </div>
        <div className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to accelerate your __CLUSTER__ roadmap?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            <a href="https://calendly.com/kleber-ziontechgroup" className="text-purple-200 underline underline-offset-2">Book a strategy session</a>
            with Zion Tech Group to map priorities, risks, and quick wins.
          </p>
          <div className="mt-8">
            <a href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Services
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <a href="/blog/" className="text-sm font-medium text-purple-300 transition hover:text-purple-200">
            ← Back to all articles
          </a>
        </div>
      </article>
    </div>
  );
}
"""

FALLBACK_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>__TITLE__</title>
<meta name="description" content="__DESC__" />
<link rel="canonical" href="https://ziontechgroup.com/blog/__SLUG__/" />
<meta property="og:title" content="__OG_TITLE__" />
<meta property="og:description" content="__OG_DESC__" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://ziontechgroup.com/blog/__SLUG__/" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"TechArticle","headline":"__OG_TITLE__","description":"__OG_DESC__","url":"https://ziontechgroup.com/blog/__SLUG__/","publisher":{"@type":"Organization","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}
</script>
<style>
body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#0b1220;color:#e2e8f0}
.wrap{max-width:860px;margin:0 auto;padding:48px 24px}
h1{font-size:2.25rem;line-height:1.15;font-weight:700;color:#fff;margin:0 0 16px}
.meta{color:#94a3b8;font-size:.875rem;margin-bottom:32px}
.section{margin:40px 0}
h2{font-size:1.5rem;color:#fff;margin:0 0 12px}
p{line-height:1.7;color:#cbd5e1;margin:0 0 16px}
.cta{margin:48px auto;max-width:640px;padding:28px;border-radius:24px;border:1px solid rgba(168,85,247,.35);background:linear-gradient(90deg,rgba(88,28,135,.35),rgba(236,72,153,.25));text-align:center}
.cta h2{color:#fff;margin:0 0 12px}
.cta a{color:#e9d5ff;text-decoration:underline}
.btn{display:inline-block;margin-top:16px;padding:10px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.35);color:#fff;text-decoration:none;font-weight:600}
.back{display:inline-block;margin-top:28px;color:#c084fc;text-decoration:none;font-size:.875rem}
</style>
</head>
<body>
<div class="wrap">
  <a href="/blog">← Back to all articles</a>
  <h1>__H1__</h1>
  <div class="meta">August 04, 2026 · Insights</div>
  <div class="section">
    <h2>Why __CLUSTER__ teams are moving first</h2>
    <p>In 2026, organizations using __CLUSTER__ solutions face pressure to do more with fewer resources. __CLUSTER__ is no longer experimental: it is becoming the default operating layer for forecasting, automation, and customer experience.</p>
  </div>
  <div class="section">
    <h2>What to automate first</h2>
    <p>Start with workflows that are rule-heavy, data-rich, and time-sensitive. In __CLUSTER__, the fastest wins usually come from support triage, document processing, demand forecasting, and compliance checks.</p>
    <p>Zion Tech Group builds these capabilities as production-ready modules, not pilots. See our <a href="/services">service catalog</a> or <a href="https://calendly.com/kleber-ziontechgroup">book a consultation</a>.</p>
  </div>
  <div class="section">
    <h2>Implementation roadmap</h2>
    <p>A practical rollout reduces risk and accelerates ROI. We recommend a three-phase approach: stabilize data and integrations, deploy one high-value use case, then expand to adjacent workflows.</p>
  </div>
  <div class="section">
    <h2>Governance and risk</h2>
    <p>AI adoption without guardrails creates new risk. __CLUSTER__ teams should set access boundaries, model monitoring, escalation paths, and audit logging before scaling.</p>
    <p>Zion Tech Group includes compliance and security design in every engagement. <a href="/contact">Talk to an expert</a>.</p>
  </div>
  <div class="cta">
    <h2>Ready to accelerate your __CLUSTER__ roadmap?</h2>
    <p><a href="https://calendly.com/kleber-ziontechgroup">Book a strategy session</a> with Zion Tech Group to map priorities, risks, and quick wins.</p>
    <a class="btn" href="/services">Explore Services</a>
  </div>
  <a class="back" href="/blog/">← Back to all articles</a>
</div>
</body>
</html>
"""


def clean(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def stable_seed(slug: str) -> int:
    return int(hashlib.md5(slug.encode()).hexdigest()[:8], 16)


def unique_permutations(base: str, max_variants: int = 10) -> list[str]:
    templates = [
        f"{base} 2026 playbook",
        f"how to implement {base} without disrupting operations",
        f"{base} costs ROI and hidden risks",
        f"comparing {base} vendors and build vs buy",
        f"{base} for enterprise teams",
        f"case study {base} in production",
        f"common mistakes when rolling out {base}",
        f"{base} checklist for IT and security leaders",
        f"automation and scaling patterns for {base}",
        f"{base} policy compliance and vendor management",
    ]
    out = []
    for t in templates[:max_variants]:
        out.append(clean(t))
    seen = set()
    deduped = []
    for s in out:
        if s not in seen:
            seen.add(s)
            deduped.append(s)
    return deduped


def build_sections(slug: str, h1: str, cluster: str) -> list[dict]:
    seed = stable_seed(slug)
    pools = [
        [
            ("Operational pressure", f"In 2026, {cluster} teams face pressure to do more with fewer resources. AI is no longer experimental: it is becoming the default operating layer for forecasting, automation, and customer experience."),
            ("Quantified gains", "Teams adopting this approach report measurable improvements in speed, quality, and cost. Zion Tech Group designs these capabilities as production-ready modules, not pilots."),
        ],
        [
            ("Fastest wins", f"Start with workflows that are rule-heavy, data-rich, and time-sensitive. In {cluster}, the fastest wins usually come from support triage, document processing, demand forecasting, and compliance checks."),
            ("Service catalog", "See our <a href=\"/services\" className=\"text-purple-300 underline underline-offset-2\">service catalog</a> or <a href=\"https://calendly.com/kleber-ziontechgroup\" className=\"text-purple-300 underline underline-offset-2\">book a consultation</a>."),
        ],
        [
            ("Implementation roadmap", "A practical rollout reduces risk and accelerates ROI. We recommend a three-phase approach: stabilize data and integrations, deploy one high-value use case, then expand to adjacent workflows."),
            ("Execution checklist", "Audit data quality and system access, deploy a single measurable use case within 30 days, then expand to orchestrated multi-agent workflows."),
        ],
        [
            ("Governance and risk", f"AI adoption without guardrails creates new risk. {cluster} teams should set access boundaries, model monitoring, escalation paths, and audit logging before scaling."),
            ("Compliance design", "Zion Tech Group includes compliance and security design in every engagement. <a href=\"/contact\" className=\"text-purple-300 underline underline-offset-2\">Talk to an expert</a>."),
        ],
    ]
    sections = []
    for i, pool in enumerate(pools):
        title, body = pool[seed % len(pool)]
        sections.append({"title": title, "body": body})
    return sections


def render_body(sections: list[dict]) -> str:
    out = []
    for s in sections:
        out.append(f"""\
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">{s['title']}</h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {s['body']}
            </p>
          </section>
""")
    return "".join(out)


def render_related(related: list[str], current: str) -> str:
    out = [
        '<div className="mt-12 border-t border-slate-800 pt-8">',
        '  <h3 className="text-lg font-semibold text-white">Related articles</h3>',
        '  <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">',
    ]
    for r in related:
        out.append(f'    <li><a href="/blog/{r}/" className="text-purple-300 underline underline-offset-2">{to_title(r)}</a></li>')
    out.append('  </ul>')
    out.append('</div>')
    return "\n".join(out)


def to_title(slug: str) -> str:
    s = slug.replace("-", " ")
    s = re.sub(r"ai\s+", "AI ", s, flags=re.IGNORECASE)
    s = re.sub(r"\b(it|soc|roi|sla|iot|qa|bi)\b", lambda m: m.group(1).upper(), s, flags=re.IGNORECASE)
    return s.title()


def write_page(slug: str, h1: str, cluster: str, related: list[str]) -> None:
    title = f"{to_title(cluster)} in 2026"
    desc = f"Explore how {cluster} teams use AI to cut costs, improve outcomes, and scale operations in 2026."
    og = f"{to_title(cluster)} in 2026"
    page_dir = APP_BLOG / slug
    page_dir.mkdir(parents=True, exist_ok=True)
    sections = build_sections(slug, h1, cluster)
    body = render_body(sections)
    related_block = render_related(related[:4], slug)
    html = PAGE_TEMPLATE.replace("__TITLE__", title).replace("__DESC__", desc).replace("__OG_TITLE__", og).replace("__OG_DESC__", desc).replace("__SLUG__", slug).replace("__H1__", h1).replace("__BODY__", body + "\n" + related_block).replace("__CLUSTER__", cluster)
    (page_dir / "page.tsx").write_text(html, encoding="utf-8")


def write_fallback(slug: str, h1: str, cluster: str, related: list[str]) -> None:
    title = f"{to_title(cluster)} in 2026"
    desc = f"Explore how {cluster} teams use AI to cut costs, improve outcomes, and scale operations in 2026."
    h1_text = h1
    related_links = ", ".join(f'<a href="/blog/{r}/">{to_title(r)}</a>' for r in related[:4])
    html = FALLBACK_TEMPLATE.replace("__TITLE__", title).replace("__DESC__", desc).replace("__OG_TITLE__", title).replace("__OG_DESC__", desc).replace("__SLUG__", slug).replace("__H1__", h1_text).replace("__CLUSTER__", cluster).replace("__RELATED__", related_links)
    out = DOCS_BLOG / slug / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")
    pub = PUBLIC_BLOG / slug / "index.html"
    pub.parent.mkdir(parents=True, exist_ok=True)
    pub.write_text(html, encoding="utf-8")


def load_topics() -> list[str]:
    if not TOPICS_FILE.exists():
        raise SystemExit(f"missing {TOPICS_FILE}")
    data = json.loads(TOPICS_FILE.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise SystemExit("topics.json must be a list of topic strings")
    return data


def dedupe_slugs(slugs: list[str]) -> list[str]:
    seen = set()
    out = []
    for s in slugs:
        if s and s not in seen:
            seen.add(s)
            out.append(s)
    return out


def existing_slugs() -> set[str]:
    return {p.name for p in APP_BLOG.iterdir() if p.is_dir() and p.name != "page.tsx" and (p / "page.tsx").exists()}


def write_sitemap(slugs: list[str]) -> None:
    urls = [f"https://ziontechgroup.com/blog/{s}/" for s in sorted(slugs)]
    urls += ["https://ziontechgroup.com/", "https://ziontechgroup.com/services/", "https://ziontechgroup.com/contact/", "https://ziontechgroup.com/tools/", "https://ziontechgroup.com/about/", "https://ziontechgroup.com/solutions/"]
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in sorted(set(urls)):
        lines += [f"<url><loc>{u}</loc></url>"]
    lines += ["</urlset>"]
    SITEMAP_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_feed(slugs: list[str]) -> None:
    now = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S +0000")
    items = []
    for s in slugs[:2000]:
        items.append(f"""\
  <item>
    <title>{to_title(s)}</title>
    <link>https://ziontechgroup.com/blog/{s}/</link>
    <guid isPermaLink="true">https://ziontechgroup.com/blog/{s}/</guid>
    <pubDate>{now}</pubDate>
    <category>AI Services</category>
    <description><![CDATA[{to_title(s)} insights from Zion Tech Group.]]></description>
  </item>
""")
    xml = f"""\
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Zion Tech Group</title>
  <link>https://ziontechgroup.com</link>
  <description>AI, IT &amp; Micro SAAS Solutions — {len(slugs)} blog posts.</description>
  <language>en-us</language>
  <lastBuildDate>{now}</lastBuildDate>
  <atom:link href="https://ziontechgroup.com/feed.xml" rel="self" type="application/rss+xml"/>
{''.join(items)}
</channel>
</rss>
"""
    FEED_FILE.write_text(xml, encoding="utf-8")


def prune_duplicate_and_truncated(existing: set[str], keep: set[str]) -> int:
    pruned = set()
    count = 0
    for path in APP_BLOG.iterdir():
        if not path.is_dir() or path.name == "page.tsx":
            continue
        slug = path.name
        if slug not in existing:
            continue
        if slug in pruned:
            continue
        m = re.match(r"^(.*)-\w{3,8}$", slug)
        if m:
            base = m.group(1)
            if base in existing or base in keep:
                pruned.add(slug)
                continue
        if slug not in keep:
            pruned.add(slug)
    for slug in pruned:
        shutil.rmtree(APP_BLOG / slug, ignore_errors=True)
        shutil.rmtree(DOCS_BLOG / slug, ignore_errors=True)
        count += 1
    return count


def update_blog_page(slugs: list[str]) -> None:
    posts = []
    for s in slugs[:200]:
        posts.append({"slug": s, "title": to_title(s)})
    lines = []
    lines.append('import type { Metadata } from "next";')
    lines.append('import Link from "next/link";')
    lines.append('')
    lines.append('export const metadata: Metadata = {')
    lines.append('  title: "Blog | Zion Tech Group",')
    lines.append('  description: "Insights on AI, automation, enterprise IT, and digital transformation from the Zion Tech Group team.",')
    lines.append('  alternates: { canonical: "/blog/" },')
    lines.append('};')
    lines.append('')
    lines.append('export default function BlogPage() {')
    lines.append('  const posts = [')
    for p in posts:
        lines.append(f'    {{ slug: "{p["slug"]}", title: "{p["title"]}" }},')
    lines.append('  ];')
    lines.append('  return (')
    lines.append('    <div className="min-h-screen bg-slate-950 text-white">')
    lines.append('      <main className="mx-auto max-w-6xl px-6 py-16">')
    lines.append('        <h1 className="text-4xl font-bold">Blog</h1>')
    lines.append('        <p className="mt-4 text-slate-400">Latest insights from Zion Tech Group.</p>')
    lines.append('        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">')
    lines.append('          {posts.map(({ slug, title }) => (')
    lines.append('            <Link key={slug} href={`/blog/${slug}/`} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40 transition-colors">')
    lines.append('              <span className="text-sm font-medium text-purple-400">Read article →</span>')
    lines.append('              <h2 className="mt-2 text-base font-semibold text-white">{title}</h2>')
    lines.append('            </Link>')
    lines.append('          ))}')
    lines.append('        </div>')
    lines.append('      </main>')
    lines.append('    </div>')
    lines.append('  );')
    lines.append('}')
    BLOG_PAGE.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    topics = load_topics()
    slugs = []
    for topic in topics:
        variants = unique_permutations(topic, max_variants=10)
        if not variants:
            continue
        primary = variants[0]
        secondary = variants[1:]
        related = [primary] + secondary[:3]
        cluster = to_title(topic)
        h1 = f"{to_title(topic)} in 2026"
        for idx, s in enumerate(variants):
            angle_h1 = h1 if idx == 0 else f"{to_title(s)}"
            write_page(s, angle_h1, cluster, related)
            write_fallback(s, angle_h1, cluster, related)
            slugs.append(s)
    slugs = dedupe_slugs(slugs)

    before = existing_slugs()
    pruned = prune_duplicate_and_truncated(before, set(slugs))
    final_slugs = sorted(set(slugs) | {s for s in existing_slugs() if (APP_BLOG / s / "page.tsx").exists()})
    write_sitemap(final_slugs)
    write_feed(final_slugs)
    update_blog_page(final_slugs)
    print(json.dumps({"topics": len(topics), "slugs": len(final_slugs), "pruned": pruned}, ensure_ascii=True))


if __name__ == "__main__":
    main()
