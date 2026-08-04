#!/usr/bin/env python3
import json, re, hashlib, shutil
from pathlib import Path
from datetime import datetime, timezone

REPO = Path("/data/data/com.termux/files/home/zion-support.github.io")
APP_BLOG = REPO / "app/blog"
DOCS_BLOG = REPO / "docs/blog"
PUBLIC_BLOG = REPO / "public/blog"
TOPICS_FILE = REPO / "content-loop/topics.json"
SITEMAP_FILE = REPO / "sitemap.xml"
FEED_FILE = REPO / "feed.xml"
BLOG_PAGE = REPO / "app/blog/page.tsx"

topics = json.loads(TOPICS_FILE.read_text(encoding="utf-8"))
if not isinstance(topics, list):
    raise SystemExit("topics.json must be list")

def clean(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")

def stable_seed(slug):
    return int(hashlib.md5(slug.encode()).hexdigest()[:8], 16)

def unique_permutations(base, max_variants=10):
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
    seen = set()
    out = []
    for t in templates[:max_variants]:
        s = clean(t)
        if s and s not in seen:
            seen.add(s)
            out.append(s)
    return out

def to_title(slug):
    s = slug.replace("-", " ")
    s = re.sub(r"ai\s+", "AI ", s, flags=re.IGNORECASE)
    s = re.sub(r"\b(it|soc|roi|sla|iot|qa|bi)\b", lambda m: m.group(1).upper(), s, flags=re.IGNORECASE)
    return s.title()

def render_body(sections):
    out = []
    for s in sections:
        out.append(f'<section><h2 class="mb-4 text-2xl font-bold text-white">{s["title"]}</h2><p class="mb-4 leading-relaxed text-slate-300">{s["body"]}</p></section>')
    return "".join(out)

fallback = """<!DOCTYPE html>
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
</html>"""

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
    pools = [
        [("Operational pressure", f"In 2026, {cluster} teams face pressure to do more with fewer resources. AI is no longer experimental: it is becoming the default operating layer for forecasting, automation, and customer experience."), ("Quantified gains", "Teams adopting this approach report measurable improvements in speed, quality, and cost. Zion Tech Group designs these capabilities as production-ready modules, not pilots.")],
        [("Fastest wins", f"Start with workflows that are rule-heavy, data-rich, and time-sensitive. In {cluster}, the fastest wins usually come from support triage, document processing, demand forecasting, and compliance checks."), ("Service catalog", 'See our <a href="/services" class="text-purple-300 underline underline-offset-2">service catalog</a> or <a href="https://calendly.com/kleber-ziontechgroup" class="text-purple-300 underline underline-offset-2">book a consultation</a>.')],
        [("Implementation roadmap", "A practical rollout reduces risk and accelerates ROI. We recommend a three-phase approach: stabilize data and integrations, deploy one high-value use case, then expand to adjacent workflows."), ("Execution checklist", "Audit data quality and system access, deploy a single measurable use case within 30 days, then expand to orchestrated multi-agent workflows.")],
        [("Governance and risk", f"AI adoption without guardrails creates new risk. {cluster} teams should set access boundaries, model monitoring, escalation paths, and audit logging before scaling."), ("Compliance design", 'Zion Tech Group includes compliance and security design in every engagement. <a href="/contact" class="text-purple-300 underline underline-offset-2">Talk to an expert</a>.')],
    ]
    for idx, s in enumerate(variants):
        angle_h1 = h1 if idx == 0 else to_title(s)
        title = f"{to_title(cluster)} in 2026"
        desc = f"Explore how {cluster} teams use AI to cut costs, improve outcomes, and scale operations in 2026."
        section_titles = [pools[i][stable_seed(s) % len(pools[i])][0] for i in range(4)]
        section_bodies = [pools[i][stable_seed(s) % len(pools[i])][1] for i in range(4)]
        body = render_body([{"title": t, "body": b} for t, b in zip(section_titles, section_bodies)])
        related_block = "<div class='mt-12 border-t border-slate-800 pt-8'><h3 class='text-lg font-semibold text-white'>Related articles</h3><ul class='mt-4 list-disc space-y-2 pl-6 text-slate-300'>" + "".join(f'<li><a href="/blog/{r}/" class="text-purple-300 underline underline-offset-2">{to_title(r)}</a></li>' for r in related[:4]) + "</ul></div>"
        app_page = f"""export const metadata = {{
  title: '{to_title(cluster)} in 2026 | Zion Tech Group',
  description: '{desc}',
  alternates: {{ canonical: '/blog/{s}/' }},
  openGraph: {{
    title: '{to_title(cluster)} in 2026',
    description: '{desc}',
    type: 'article',
    url: 'https://ziontechgroup.com/blog/{s}/',
  }},
}};

export default function Page() {{
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-8 text-sm text-slate-400">
          <a href="/blog" className="text-purple-300 hover:text-purple-200">← Back to all articles</a>
        </div>
        <header className="mb-12">
          <div className="mb-4 flex-wrap items-center gap-3 text-sm flex">
            <time dateTime="2026-08-04" className="text-slate-400">August 04, 2026</time>
            <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200">Insights</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{angle_h1}</h1>
        </header>
        <div className="prose-invert max-w-none space-y-10">{body}{related_block}</div>
        <div className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to accelerate your {cluster} roadmap?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            <a href="https://calendly.com/kleber-ziontechgroup" className="text-purple-200 underline underline-offset-2">Book a strategy session</a>
            with Zion Tech Group to map priorities, risks, and quick wins.
          </p>
          <div className="mt-8">
            <a href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Services</a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <a href="/blog/" className="text-sm font-medium text-purple-300 transition hover:text-purple-200">← Back to all articles</a>
        </div>
      </article>
    </div>
  );
}}
"""
        fb = fallback.replace("__TITLE__", title).replace("__DESC__", desc).replace("__OG_TITLE__", title).replace("__OG_DESC__", desc).replace("__SLUG__", s).replace("__H1__", angle_h1).replace("__CLUSTER__", cluster)
        (APP_BLOG / s).mkdir(parents=True, exist_ok=True)
        (APP_BLOG / s / "page.tsx").write_text(app_page, encoding="utf-8")
        (DOCS_BLOG / s).mkdir(parents=True, exist_ok=True)
        (DOCS_BLOG / s / "index.html").write_text(fb, encoding="utf-8")
        (PUBLIC_BLOG / s).mkdir(parents=True, exist_ok=True)
        (PUBLIC_BLOG / s / "index.html").write_text(fb, encoding="utf-8")
        slugs.append(s)

existing = {p.name for p in APP_BLOG.iterdir() if p.is_dir() and p.name != "page.tsx" and (p / "page.tsx").exists()}
for slug in existing - set(slugs):
    shutil.rmtree(APP_BLOG / slug, ignore_errors=True)
    shutil.rmtree(DOCS_BLOG / slug, ignore_errors=True)
    shutil.rmtree(PUBLIC_BLOG / slug, ignore_errors=True)

final_slugs = sorted(set(slugs))
SITEMAP_FILE.write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(f"<url><loc>https://ziontechgroup.com/blog/{s}/</loc></url>" for s in final_slugs) + '\n<url><loc>https://ziontechgroup.com/</loc></url>\n<url><loc>https://ziontechgroup.com/services/</loc></url>\n<url><loc>https://ziontechgroup.com/contact/</loc></url>\n<url><loc>https://ziontechgroup.com/tools/</loc></url>\n</urlset>\n', encoding="utf-8")
now = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S +0000")
FEED_FILE.write_text('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n  <title>Zion Tech Group</title>\n  <link>https://ziontechgroup.com</link>\n  <description>AI, IT &amp; Micro SAAS Solutions — ' + str(len(final_slugs)) + ' blog posts.</description>\n  <language>en-us</language>\n  <lastBuildDate>' + now + '</lastBuildDate>\n  <atom:link href="https://ziontechgroup.com/feed.xml" rel="self" type="application/rss+xml"/>\n' + "\n".join(f"  <item>\n    <title>{to_title(s)}</title>\n    <link>https://ziontechgroup.com/blog/{s}/</link>\n    <guid isPermaLink=\"true\">https://ziontechgroup.com/blog/{s}/</guid>\n    <pubDate>{now}</pubDate>\n    <category>AI Services</category>\n    <description><![CDATA[{to_title(s)} insights from Zion Tech Group.]]></description>\n  </item>" for s in final_slugs[:2000]) + '\n</channel>\n</rss>\n', encoding="utf-8")
posts = [{"slug": s, "title": to_title(s)} for s in final_slugs[:200]]
lines = ['import type { Metadata } from "next";', 'import Link from "next/link";', '', 'export const metadata: Metadata = {', '  title: "Blog | Zion Tech Group",', '  description: "Insights on AI, automation, enterprise IT, and digital transformation from the Zion Tech Group team.",', '  alternates: { canonical: "/blog/" },', '};', '', 'export default function BlogPage() {', '  const posts = [']
for p in posts:
    lines.append(f'    {{ slug: "{p["slug"]}", title: "{p["title"]}" }},')
lines += ['  ];', '  return (', '    <div className="min-h-screen bg-slate-950 text-white">', '      <main className="mx-auto max-w-6xl px-6 py-16">', '        <h1 className="text-4xl font-bold">Blog</h1>', '        <p className="mt-4 text-slate-400">Latest insights from Zion Tech Group.</p>', '        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">', '          {posts.map(({ slug, title }) => (', '            <Link key={slug} href={`/blog/${slug}/`} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40 transition-colors">', '              <span className="text-sm font-medium text-purple-400">Read article →</span>', '              <h2 className="mt-2 text-base font-semibold text-white">{title}</h2>', '            </Link>', '          ))}', '        </div>', '      </main>', '    </div>', '  );', '}']
BLOG_PAGE.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(json.dumps({"topics": len(topics), "slugs": len(final_slugs), "pruned": len(existing) - len(final_slugs)}, ensure_ascii=True))
