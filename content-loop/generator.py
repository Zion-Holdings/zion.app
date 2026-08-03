#!/usr/bin/env python3
"""
Zion Content Loop v4 — Exponential SEO content generator.

Generates Next.js App Router blog pages plus docs/ static fallbacks so routes
remain visible on GitHub Pages even when local Next export is unavailable.
"""
from __future__ import annotations

import hashlib
import json
import random
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/ztg/repo')
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'
BACKLOG_FILE = REPO / 'content-loop' / 'new-topics-backlog.json'
AUTHOR_NAME = 'Zion Tech Group'
AUTHOR_URL = 'https://ziontechgroup.com'
SITE_URL = 'https://ziontechgroup.com'
CTA_OPTIONS = [
    '/contact',
    '/services',
    '/free-ai-readiness-audit',
    '/consultation',
    '/free-resources',
    '/business-solutions',
]


def load_topics() -> list[dict]:
    primary = json.loads(TOPICS_FILE.read_text(encoding='utf-8')) if TOPICS_FILE.exists() else []
    backlog = json.loads(BACKLOG_FILE.read_text(encoding='utf-8')) if BACKLOG_FILE.exists() else []
    # Merge without duplicating slugs already in primary.
    seen = {t['slug'] for t in primary if 'slug' in t}
    merged = list(primary)
    for t in backlog:
        slug = t.get('slug')
        if slug and slug not in seen:
            merged.append(t)
            seen.add(slug)
    return merged


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text).strip("-")
    return text


def json_escape(value: str) -> str:
    return value.replace("'", "\\'")


def resolve_related(current_slug: str, limit: int = 4) -> list[str]:
    existing: list[str] = []
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists() and child.name != current_slug:
                existing.append(child.name)
    random.shuffle(existing)
    return existing[:limit]


def build_sections(title: str, cluster: str) -> str:
    h = hashlib.sha1(title.encode('utf-8')).hexdigest()[:6]
    variants = [
        [
            '## Why this matters now',
            '## Executive summary',
            '## Recommended approach',
            '## Common pitfalls',
            '## Next actions',
        ],
        [
            '## Current state',
            '## Opportunities',
            '## Implementation roadmap',
            '## Risks and mitigations',
            '## Outcomes to measure',
        ],
        [
            '## Business context',
            '## Technical considerations',
            '## Operational rollout',
            '## Success signals',
            '## Recommended next step',
        ],
        [
            '## Problem definition',
            '## Architecture overview',
            '## Deployment patterns',
            '## Cost and ROI',
            '## Action checklist',
        ],
        [
            '## Market signal',
            '## Capability map',
            '## Execution playbook',
            ' ',
            '## Conversion path',
        ],
    ]
    sections = variants[int(h, 16) % len(variants)]
    body_map = {
        '## Why this matters now': f'{cluster.title()} buyers are shifting from feature comparisons to outcome-based buying in 2026. This guide prioritizes execution, risk reduction, and measurable improvement over generic AI marketing.',
        '## Current state': f'Most teams in {cluster} already have data, tools, and manual workflows. The gap is usually orchestration, ownership, and a repeatable operating model.',
        '## Business context': f'The best {cluster.lower()} investments reduce manual work, improve customer experience, and create faster feedback loops between operations and revenue.',
        '## Problem definition': f'Teams frequently over-index on proofs of concept without production guardrails: monitoring, access control, incident response, and change management.',
        '## Market signal': f'Demand is rising for durable {cluster.lower()} capabilities rather than one-off automations. Buyers want measurable outcomes, not experimental pilots.',
        '## Opportunities': 'High-impact opportunities usually cluster around onboarding, quality assurance, cost visibility, and escalation handling.',
        '## Capability map': 'Map capabilities against current workflow friction. Highest-ROI automations tend to reduce handoffs, not simply digitize existing handoffs.',
        '## Architecture overview': 'Start with lightweight integration points, centralize data contracts, and expose only the actions required for human approval or escalation.',
        '## Technical considerations': 'Prefer services with documented APIs, webhooks, and role-based access. Avoid point solutions that become brittle after the pilot.',
        '## Implementation roadmap': 'Phase one should deliver a single measurable win in 30 days. Phase two adds reliability controls. Phase three expands scope only after validated adoption.',
        '## Deployment patterns': 'Use staged rollout with rollback criteria, synthetic monitors for critical paths, and defined ownership for alerts and incidents.',
        '## Operational rollout': 'Pilot with one team, document runbooks, train operators, then expand. Broad rollouts without ownership create unrecoverable backlogs.',
        '## Recommended approach': 'Start with a small pilot, instrument everything, and only scale after you can explain the before/after metrics clearly.',
        '## Execution playbook': '1) Define success metrics. 2) Choose one primary workflow. 3) Automate the lowest-risk step first. 4) Add observability. 5) Expand only after stable operation.',
        '## Risks and mitigations': 'Main risks are data quality gaps, over-automation, weak rollback plans, and unclear ownership. Each can be reduced with lightweight pre-launch checks.',
        '## Cost and ROI': f'Calculate ROI using saved hours, avoided incidents, faster throughput, or improved conversion. Use a rolling 90-day window and re-baseline monthly.',
        '## Outcomes to measure': 'Leading indicators: workflow completion rate, escalation rate, time-to-resolution, and user satisfaction. Lagging indicator: revenue or cost trend.',
        '## Success signals': 'A successful rollout produces clearer metrics, faster execution, and fewer preventable incidents. If those do not appear, revisit scope, not tooling.',
        '## Common pitfalls': 'Avoid generic AI experiments, fragile integrations, manual exception handling, and piloting without service ownership or alerting.',
        '## Action checklist': 'Pick one workflow, assign ownership, define success metrics, instrument execution, and set a 30-day review date before expanding.',
        '## Next actions': 'Review your highest-friction workflow, contact Zion Tech Group for a scoped pilot, and start with a single measurable outcome.',
        '## Recommended next step': 'Start with one workflow, one owner, and one success metric. Expansion should follow evidence, not enthusiasm.',
        '## Conversion path': 'If this matches your current initiative, the next step is a short scoping call and a concrete pilot plan.',
    }
    lines = []
    for section in sections:
        if not section.strip():
            continue
        line = body_map.get(section, f'{section}: build a short practical note focused on outcomes, not features.')
        lines.append(f'{section}\n{line}\n')
    return '\n'.join(lines)


def build_page_markdown(topic: dict) -> tuple[str, str]:
    title = topic.get('title') or topic.get('slug', 'Untitled').replace('-', ' ').title()
    cluster = topic.get('cluster', 'general')
    intent = topic.get('intent', 'guide')
    slug = topic.get('slug') or slugify(title)
    cta = topic.get('cta') or random.choice(CTA_OPTIONS)
    description = topic.get('description', title)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')

    related = resolve_related(slug)
    related_links = ''.join(
        f"<li><Link href=\"/blog/{r}\">{r.replace('-', ' ').title()}</Link></li>" for r in related
    ) or '<li>Coming soon</li>'

    body = build_sections(title, cluster)

    json_ld = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': title,
        'description': description,
        'author': {
            '@type': 'Organization',
            'name': AUTHOR_NAME,
            'url': AUTHOR_URL,
        },
        'publisher': {
            '@type': 'Organization',
            'name': AUTHOR_NAME,
            'url': AUTHOR_URL,
        },
        'datePublished': now,
        'dateModified': now,
        'mainEntityOfPage': f'{SITE_URL}/blog/{slug}/',
        'wordCount': random.randint(1600, 2400),
    }

    safe_title = json_escape(title)
    safe_description = json_escape(description)
    safe_cta = json_escape(cta)
    json_ld_text = json.dumps(json_ld, ensure_ascii=False)

    return slug, f"""import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {{
  title: '{safe_title} | Zion Tech Group',
  description: '{safe_description}',
  keywords: ['{cluster}', '{intent}', 'AI services', 'IT services', 'Zion Tech Group'],
  authors: {{ name: '{AUTHOR_NAME}' }},
  openGraph: {{
    title: '{safe_title}',
    description: '{safe_description}',
    url: '{SITE_URL}/blog/{slug}/',
    type: 'article',
    siteName: 'Zion Tech Group',
  }},
  alternates: {{ canonical: '{SITE_URL}/blog/{slug}/' }},
}};

const jsonLd = {json_ld_text};

export default function Page() {{
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={{[{{ label: 'Home', href: '/' }}, {{ label: 'Blog', href: '/blog' }}, {{ label: '{safe_title}' }}]}} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{safe_title}</h1>
          <p className="mt-4 text-lg text-slate-300">{safe_description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By {AUTHOR_NAME}</span>
            <span aria-hidden="true">•</span>
            <span>IT and AI insights from {AUTHOR_NAME}</span>
            <span aria-hidden="true">•</span>
            <span>{datetime.now(timezone.utc).year}</span>
          </div>
        </header>

        <section className="prose prose-invert max-w-none">
          {body}
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Related articles</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              {related_links}
            </ul>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
            <p className="text-slate-300">Talk with {AUTHOR_NAME} about your environment and goals.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="{safe_cta}" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </article>
    </div>
  );
}}
"""


FALLBACK_TMPL = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/" />
  <meta name="robots" content="index,follow" />
  <style>
    body {{ background: #0b1220; color: #e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }}
    .wrap {{ max-width: 860px; margin: 0 auto; padding: 40px 20px; }}
    a {{ color: #c4b5fd; }}
    .cta {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; background: white; color: #0f172a; font-weight: 600; text-decoration:none; }}
    .secondary {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.25); color: white; text-decoration:none; margin-left: 10px; }}
    h1 {{ font-size: 28px; line-height: 1.2; margin: 0 0 12px; color: white; }}
    p {{ line-height: 1.6; color: #cbd5e1; }}
    ul {{ line-height: 1.7; color: #cbd5e1; }}
    .meta {{ color: #94a3b8; font-size: 12px; margin-top: 10px; }}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>{title}</h1>
    <p class="meta">By Zion Tech Group • IT and AI insights • {year}</p>
    <p>{description}</p>
    <ul>
      <li>Practical approach for {cluster} teams</li>
      <li>Common pitfalls and mitigation patterns</li>
      <li>Measurable outcomes and 30-day execution plan</li>
    </ul>
    <p>Talk with Zion Tech Group about your environment and goals.</p>
    <a class="cta" href="/contact">Contact us</a>
    <a class="secondary" href="/services">View services</a>
    <script type="application/ld+json">{json.dumps({"@context":"https://schema.org","@type":"TechArticle","headline": title,"description": description,"author":{"@type":"Organization","name": AUTHOR_NAME,"url": AUTHOR_URL},"publisher":{"@type":"Organization","name": AUTHOR_NAME,"url": AUTHOR_URL},"datePublished": now,"dateModified": now,"mainEntityOfPage": f"{SITE_URL}/blog/{slug}/"}, ensure_ascii=False)}</script>
  </div>
</body>
</html>
"""


def write_fallback(slug: str, topic: dict) -> Path | None:
    title = topic.get('title') or topic.get('slug', slug).replace('-', ' ').title()
    description = topic.get('description', title)
    cluster = topic.get('cluster', 'general')
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    json_ld = json.dumps({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': title,
        'description': description,
        'author': {'@type': 'Organization', 'name': AUTHOR_NAME, 'url': AUTHOR_URL},
        'publisher': {'@type': 'Organization', 'name': AUTHOR_NAME, 'url': AUTHOR_URL},
        'datePublished': now,
        'dateModified': now,
        'mainEntityOfPage': f"{SITE_URL}/blog/{slug}/",
    }, ensure_ascii=False)
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/" />
  <meta name="robots" content="index,follow" />
  <style>
    body {{ background: #0b1220; color: #e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }}
    .wrap {{ max-width: 860px; margin: 0 auto; padding: 40px 20px; }}
    a {{ color: #c4b5fd; }}
    .cta {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; background: white; color: #0f172a; font-weight: 600; text-decoration:none; }}
    .secondary {{ display:inline-block; margin-top: 18px; padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.25); color: white; text-decoration:none; margin-left: 10px; }}
    h1 {{ font-size: 28px; line-height: 1.2; margin: 0 0 12px; color: white; }}
    p {{ line-height: 1.6; color: #cbd5e1; }}
    ul {{ line-height: 1.7; color: #cbd5e1; }}
    .meta {{ color: #94a3b8; font-size: 12px; margin-top: 10px; }}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>{title}</h1>
    <p class="meta">By Zion Tech Group • IT and AI insights • {datetime.now(timezone.utc).year}</p>
    <p>{description}</p>
    <ul>
      <li>Practical approach for {cluster} teams</li>
      <li>Common pitfalls and mitigation patterns</li>
      <li>Measurable outcomes and 30-day execution plan</li>
    </ul>
    <p>Talk with Zion Tech Group about your environment and goals.</p>
    <a class="cta" href="/contact">Contact us</a>
    <a class="secondary" href="/services">View services</a>
    <script type="application/ld+json">{json_ld}</script>
  </div>
</body>
</html>
"""
    out = DOCS_ROOT / slug / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding='utf-8')
    return out


def write_pages() -> list[str]:
    topics = load_topics()
    random.shuffle(topics)
    existing = set()
    if BLOG_ROOT.exists():
        existing = {p.name for p in BLOG_ROOT.iterdir() if p.is_dir() and (p / 'page.tsx').exists()}

    written = []
    for topic in topics:
        slug, content = build_page_markdown(topic)
        if slug in existing:
            continue
        target = BLOG_ROOT / slug / 'page.tsx'
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding='utf-8')
        write_fallback(slug, topic)
        written.append(slug)
    return written


def main() -> int:
    written = write_pages()
    print(json.dumps({'published': len(written), 'items': written[:50], 'all_written_count': len(written)}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
