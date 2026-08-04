#!/usr/bin/env python3
"""Unified exponential content loop runner."""
from __future__ import annotations

import hashlib
import json
import random
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'
BACKLOG_FILE = REPO / 'content-loop' / 'new-topics-backlog.json'
AUTHOR_NAME = 'Zion Tech Group'
AUTHOR_URL = 'https://ziontechgroup.com'
SITE_URL = 'https://ziontechgroup.com'
RANDOM = random.Random(12345)


def to_slug(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'\s+', '-', text).strip('-')
    text = re.sub(r'-{2,}', '-', text)
    return text


def to_title(text: str) -> str:
    text = re.sub(r'\s+', ' ', text.strip())
    return text[0].upper() + text[1:] if text else 'Untitled'


ANGLES = [
    'executive guide', 'checklist for IT leaders', 'policy and compliance', 'vendor evaluation',
    'ROI and cost model', 'implementation playbook', 'case study', 'common mistakes',
    'architecture overview', 'security and governance', 'automation roadmap', 'operations handbook',
    'starter template', 'evaluation framework', 'deployment patterns'
]
CLUSTERS = ['ai', 'it', 'cloud', 'security', 'data', 'automation']


def load_topics() -> list[dict]:
    if not TOPICS_FILE.exists():
        return []
    data = json.loads(TOPICS_FILE.read_text(encoding='utf-8'))
    if isinstance(data, dict):
        data = data.get('topics', [])
    if not isinstance(data, list):
        data = []
    topics = []
    seen = set()
    for item in data:
        if isinstance(item, str):
            title = item.strip()
            slug = to_slug(title)
            cluster = random.choice(CLUSTERS)
        elif isinstance(item, dict):
            title = item.get('title') or item.get('slug') or item.get('topic', 'Untitled')
            if isinstance(title, list):
                title = ' '.join(title)
            title = str(title).strip()
            slug = to_slug(item.get('slug') or item.get('topic', title))
            cluster = item.get('cluster') or random.choice(CLUSTERS)
        else:
            continue
        if not slug or slug in seen:
            continue
        seen.add(slug)
        topics.append({'title': title, 'slug': slug, 'cluster': cluster})
    return topics


def expand_topics(topics: list[dict]) -> list[dict]:
    expanded = []
    seen = {t['slug'] for t in topics}
    for topic in topics:
        expanded.append(topic)
        angle_count = random.randint(3, 6)
        angles_sample = RANDOM.sample(ANGLES, min(angle_count, len(ANGLES)))
        for angle in angles_sample:
            new_title = f"{topic['title']}: {angle}"
            new_slug = to_slug(new_title)
            if new_slug in seen:
                continue
            seen.add(new_slug)
            expanded.append({
                'title': new_title,
                'slug': new_slug,
                'cluster': topic['cluster'],
                'intent': 'guide',
                'cta': 'services',
            })
    return expanded


def existing_slugs() -> tuple[set[str], set[str]]:
    blog_slugs = set()
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists():
                blog_slugs.add(child.name)
    docs_slugs = set()
    if DOCS_ROOT.exists():
        for child in DOCS_ROOT.iterdir():
            if child.is_dir() and (child / 'index.html').exists():
                docs_slugs.add(child.name)
    return blog_slugs, docs_slugs


def related_slugs(current: str, limit: int = 4) -> list[str]:
    candidates = []
    if BLOG_ROOT.exists():
        for p in BLOG_ROOT.iterdir():
            if p.is_dir() and (p / 'page.tsx').exists() and p.name != current:
                candidates.append(p.name)
    RANDOM.shuffle(candidates)
    return candidates[:limit]


def build_page(topic: dict) -> str:
    title = to_title(topic.get('title', topic.get('slug', 'Untitled')))
    slug = topic.get('slug') or to_slug(title)
    cluster = topic.get('cluster', 'it')
    cta = topic.get('cta', 'services')
    description = topic.get('description', title)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    related = related_slugs(slug)
    related_links = '\n'.join(
        f'<li><Link href="/blog/{r}">{r.replace("-", " ").title()}</Link></li>' for r in related
    ) or '<li>Coming soon</li>'

    h = int(hashlib.sha1(title.encode('utf-8')).hexdigest()[:6], 16)
    section_variants = [
        ['Why this matters now', 'Executive summary', 'Recommended approach', 'Common pitfalls', 'Next actions'],
        ['Current state', 'Opportunities', 'Implementation roadmap', 'Risks and mitigations', 'Outcomes to measure'],
        ['Business context', 'Technical considerations', 'Operational rollout', 'Success signals', 'Recommended next step'],
        ['Problem definition', 'Architecture overview', 'Deployment patterns', 'Cost and ROI', 'Action checklist'],
        ['Market signal', 'Capability map', 'Execution playbook', ' ', 'Conversion path'],
    ]
    sections = section_variants[h % len(section_variants)]
    body_map = {
        'Why this matters now': f'{cluster.replace("_", " ").title()} buyers are shifting from feature comparisons to outcome-based buying in 2026. This guide prioritizes execution, risk reduction, and measurable improvement.',
        'Current state': f'Most teams in {cluster.replace("_", " ").lower()} already have data, tools, and manual workflows. The gap is usually orchestration, ownership, and a repeatable operating model.',
        'Business context': f'The best {cluster.replace("_", " ").lower()} investments reduce manual work, improve customer experience, and create faster feedback loops between operations and revenue.',
        'Problem definition': f'Teams frequently over-index on proofs of concept without production guardrails: monitoring, access control, incident response, and change management.',
        'Market signal': f'Demand is rising for durable {cluster.replace("_", " ").lower()} capabilities rather than one-off automations. Buyers want measurable outcomes, not experimental pilots.',
        'Opportunities': 'High-impact opportunities usually cluster around onboarding, quality assurance, cost visibility, and escalation handling.',
        'Capability map': 'Map capabilities against current workflow friction. Highest-ROI automations tend to reduce handoffs, not simply digitize existing handoffs.',
        'Architecture overview': 'Start with lightweight integration points, centralize data contracts, and expose only the actions required for human approval or escalation.',
        'Technical considerations': 'Prefer services with documented APIs, webhooks, and role-based access. Avoid point solutions that become brittle after the pilot.',
        'Implementation roadmap': 'Phase one should deliver a single measurable win in 30 days. Phase two adds reliability controls. Phase three expands scope only after validated adoption.',
        'Deployment patterns': 'Use staged rollout with rollback criteria, synthetic monitors for critical paths, and defined ownership for alerts and incidents.',
        'Operational rollout': 'Pilot with one team, document runbooks, train operators, then expand. Broad rollouts without ownership create unrecoverable backlogs.',
        'Recommended approach': 'Start with a small pilot, instrument everything, and only scale after you can explain the before/after metrics clearly.',
        'Execution playbook': '1) Define success metrics. 2) Choose one primary workflow. 3) Automate the lowest-risk step first. 4) Add observability. 5) Expand only after stable operation.',
        'Risks and mitigations': 'Main risks are data quality gaps, over-automation, weak rollback plans, and unclear ownership. Each can be reduced with lightweight pre-launch checks.',
        'Cost and ROI': 'Calculate ROI using saved hours, avoided incidents, faster throughput, or improved conversion. Use a rolling 90-day window and re-baseline monthly.',
        'Outcomes to measure': 'Leading indicators: workflow completion rate, escalation rate, time-to-resolution, and user satisfaction. Lagging indicator: revenue or cost trend.',
        'Success signals': 'A successful rollout produces clearer metrics, faster execution, and fewer preventable incidents. If those do not appear, revisit scope, not tooling.',
        'Common pitfalls': 'Avoid generic AI experiments, fragile integrations, manual exception handling, and piloting without service ownership or alerting.',
        'Action checklist': 'Pick one workflow, assign ownership, define success metrics, instrument execution, and set a 30-day review date before expanding.',
        'Next actions': 'Review your highest-friction workflow, contact Zion Tech Group for a scoped pilot, and start with a single measurable outcome.',
        'Recommended next step': 'Start with one workflow, one owner, and one success metric. Expansion should follow evidence, not enthusiasm.',
        'Conversion path': 'If this matches your current initiative, the next step is a short scoping call and a concrete pilot plan.',
    }
    body_parts = []
    for section in sections:
        section = section.strip()
        if not section:
            continue
        body_parts.append(f'## {section}\n{body_map.get(section, section + ": build a short practical note focused on outcomes, not features.")}\n')
    body = '\n'.join(body_parts)

    json_ld = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': title,
        'description': description,
        'author': {'@type': 'Organization', 'name': AUTHOR_NAME, 'url': AUTHOR_URL},
        'publisher': {'@type': 'Organization', 'name': AUTHOR_NAME, 'url': AUTHOR_URL},
        'datePublished': now,
        'dateModified': now,
        'mainEntityOfPage': f'{SITE_URL}/blog/{slug}/',
    }
    return f"""import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {{
  title: '{title} | Zion Tech Group',
  description: '{description}',
  keywords: ['{cluster}', 'guide', 'AI services', 'IT services', 'Zion Tech Group'],
  authors: {{ name: '{AUTHOR_NAME}' }},
  openGraph: {{
    title: '{title}',
    description: '{description}',
    url: '{SITE_URL}/blog/{slug}/',
    type: 'article',
    siteName: 'Zion Tech Group',
  }},
  alternates: {{ canonical: '/blog/{slug}/' }},
}};

const jsonLd = {json.dumps(json_ld, ensure_ascii=False)};

export default function Page() {{
  return (
    <div className=\"relative min-h-screen bg-slate-950\">
      <article className=\"relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8\">
        <SiteBreadcrumbs items={{[{{ label: 'Home', href: '/' }}, {{ label: 'Blog', href: '/blog' }}, {{ label: '{title}' }}]}} className=\"mb-8\" />
        <header className=\"mb-10\">
          <h1 className=\"text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl\">{title}</h1>
          <p className=\"mt-4 text-lg text-slate-300\">{description}</p>
          <div className=\"mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400\">
            <span>By {AUTHOR_NAME}</span>
            <span aria-hidden=\"true\">•</span>
            <span>IT and AI insights from {AUTHOR_NAME}</span>
            <span aria-hidden=\"true\">•</span>
            <span>{datetime.now(timezone.utc).year}</span>
          </div>
        </header>

        <section className=\"prose prose-invert max-w-none\">
{body}
        </section>

        <section className=\"mt-12 grid gap-6 sm:grid-cols-2\">
          <div className=\"rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6\">
            <h2 className=\"mb-2 text-xl font-bold text-white\">Related articles</h2>
            <ul className=\"list-disc pl-6 text-slate-300 space-y-2\">
              {related_links}
            </ul>
          </div>
          <div className=\"rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6\">
            <h2 className=\"mb-2 text-xl font-bold text-white\">Next steps</h2>
            <p className=\"text-slate-300\">Talk with {AUTHOR_NAME} about your environment and goals.</p>
            <div className=\"mt-4 flex flex-col gap-3 sm:flex-row\">
              <Link href=\"/{cta}\" className=\"rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900\">Get started</Link>
              <Link href=\"/services\" className=\"rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white\">Services</Link>
            </div>
          </div>
        </section>

        <script
          type=\"application/ld+json\"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </article>
    </div>
  );
}}
"""


def write_fallback(slug: str, topic: dict) -> Path | None:
    title = to_title(topic.get('title', topic.get('slug', slug)))
    description = topic.get('description', title)
    cluster = topic.get('cluster', 'it')
    cta = topic.get('cta', 'services')
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
        'mainEntityOfPage': f'{SITE_URL}/blog/{slug}/',
    }, ensure_ascii=False)
    related = related_slugs(slug)
    related_items = '\n'.join([f'<li><a href="/blog/{r}/">{r.replace("-", " ").title()}</a></li>' for r in related[:4]]) or '<li>Coming soon</li>'
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="{SITE_URL}/blog/{slug}/" />
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
      {related_items}
    </ul>
    <p>Talk with Zion Tech Group about your environment and goals.</p>
    <a class="cta" href="/{cta}">Get started</a>
    <a class="secondary" href="/services">Services</a>
    <script type="application/ld+json">{json_ld}</script>
  </div>
</body>
</html>
"""
    out = DOCS_ROOT / slug / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding='utf-8')
    return out


def publish(topic: dict, blog_slugs: set[str], docs_slugs: set[str]) -> tuple[bool, str]:
    slug = topic.get('slug')
    if not slug:
        return False, 'no-slug'
    if slug in blog_slugs and slug in docs_slugs:
        return False, 'exists'
    if slug not in blog_slugs:
        BLOG_ROOT.joinpath(slug).mkdir(parents=True, exist_ok=True)
        BLOG_ROOT.joinpath(slug, 'page.tsx').write_text(build_page(topic), encoding='utf-8')
    if slug not in docs_slugs:
        write_fallback(slug, topic)
    return True, 'published'


def write_blog_index(slugs: list[str]) -> None:
    if not slugs:
        return
    lines = '\n'.join([f"          {{slug: '{s}', title: '{s.replace('-', ' ').title()}'}}," for s in slugs])
    index = BLOG_ROOT / 'page.tsx'
    if not index.exists():
        return
    html = index.read_text(encoding='utf-8', errors='ignore')
    start = html.find('const posts = [')
    end = html.find('];', start)
    if start == -1 or end == -1:
        return
    new_block = f'const posts = [\n{lines}\n];'
    index.write_text(html[:start] + new_block + html[end + 2:], encoding='utf-8')


def write_sitemap(slugs: list[str]) -> None:
    urls = [f'  <url><loc>{SITE_URL}/blog/{s}/</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>' for s in slugs]
    xml = f"""<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
{''.join(urls)}
</urlset>
"""
    (REPO / 'public' / 'sitemap.xml').write_text(xml, encoding='utf-8')


def write_feed(slugs: list[str]) -> None:
    items = []
    for s in slugs[:50]:
        title = s.replace('-', ' ').title()
        items.append(f'<entry><title>{title}</title><link href=\"{SITE_URL}/blog/{s}/\"/></entry>')
    xml = f"""<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<feed xmlns=\"http://www.w3.org/2005/Atom\">
  <title>Zion Tech Group Blog</title>
  <link href=\"{SITE_URL}/blog/\"/>
  <updated>{datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')}</updated>
  {''.join(items)}
</feed>
"""
    (REPO / 'public' / 'feed.xml').write_text(xml, encoding='utf-8')


def main() -> int:
    topics = load_topics()
    if not topics:
        print(json.dumps({'topics': 0, 'expanded': 0, 'published': 0, 'canonical_slugs': 0}, ensure_ascii=False))
        return 0
    expanded = expand_topics(topics)
    RANDOM.shuffle(expanded)
    blog_slugs, docs_slugs = existing_slugs()
    published = []
    for topic in expanded:
        ok, reason = publish(topic, blog_slugs, docs_slugs)
        if ok:
            blog_slugs.add(topic['slug'])
            docs_slugs.add(topic['slug'])
            published.append(topic['slug'])
    canonical_slugs = sorted(blog_slugs | docs_slugs)
    write_blog_index(canonical_slugs)
    write_sitemap(canonical_slugs)
    write_feed(canonical_slugs)
    if BACKLOG_FILE.exists():
        try:
            backlog = json.loads(BACKLOG_FILE.read_text(encoding='utf-8'))
            if not isinstance(backlog, list):
                backlog = []
        except Exception:
            backlog = []
    else:
        backlog = []
    for topic in expanded[len(published):]:
        backlog.append(topic)
    BACKLOG_FILE.write_text(json.dumps(backlog[:5000], ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({
        'topics': len(topics),
        'expanded': len(expanded),
        'published': len(published),
        'canonical_slugs': len(canonical_slugs),
    }, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
