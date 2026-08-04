#!/usr/bin/env python3
"""Unified exponential content loop runner with long-form page generation."""
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


def paragraph(topic: str, cluster: str, key: str) -> str:
    topic = topic.replace('-', ' ').lower()
    c = cluster.replace('_', ' ').lower()
    topic_cap = topic.title()
    paragraphs = {
        'Why this matters now': [
            f'Buyers evaluating {topic} in 2026 are prioritizing measurable outcomes over feature checklists.',
            f'This guide focuses on practical adoption, risk reduction, and ROI because generic {c} marketing no longer converts informed buyers.',
            f'Teams that invest in {topic} with clear success metrics and phased delivery consistently outperform teams that chase experimental AI hype.',
            f'The organizations that win in 2026 will treat {topic} as a durable capability, not a one-off project, and they will instrument execution from day one.',
            f'If your team is still debating whether {topic} is worth investing in, use this guide to build the business case with evidence rather than vendor claims.'
        ],
        'Executive summary': [
            f'This post gives executives a concise view of {topic}: value drivers, adoption blockers, realistic timelines, and the ownership model required for success.',
            f'The bottom line: {topic} can shorten delivery cycles, reduce manual exceptions, and improve customer outcomes when scoped correctly and operated responsibly.',
            f'Recommendation: start with one workflow, assign ownership, define success metrics, and review after 30 days before broader rollout.',
            f'Use this guide to align leadership, set expectations, and avoid the common mistake of piloting without service ownership or alerting.'
        ],
        'Recommended approach': [
            f'For {topic}, we recommend a phased approach: pilot, instrument, stabilize, then expand.',
            f'Start with one high-friction workflow, automate the lowest-risk step first, and add observability before expanding scope.',
            f'Each phase should have a defined owner, success criteria, and rollback plan so the program remains reversible and low-risk.',
            f'Document runbooks early and train operators before scaling; otherwise, expansion creates unrecoverable backlogs and stakeholder distrust.',
            f'Keep changes small and reversible until metrics prove stability, then scale deliberately with the same discipline.'
        ],
        'Common pitfalls': [
            f'Common mistakes in {topic} include weak scope, over-automation, brittle integrations, missing rollback criteria, and unclear ownership.',
            f'Another frequent failure is piloting without service ownership; alerts and incidents need a named owner or the program stalls during the first production issue.',
            f'Teams also over-index on proofs of concept instead of production readiness: access control, monitoring, change management, and escalation paths are often missing.',
            f'Fix these before launch and you will dramatically improve adoption, reliability, and stakeholder confidence in the program.'
        ],
        'Next actions': [
            f'Review your highest-friction workflow, contact Zion Tech Group for a scoped pilot, and start with one measurable outcome.',
            f'Set a 30-day review date, define success metrics, assign an owner, and document rollback criteria before expanding.',
            f'If this matches your current initiative, the next step is a short scoping call and a concrete pilot plan.',
            f'The organizations that move fastest in 2026 are the ones that combine clear intent with disciplined execution.'
        ],
        'Current state': [
            f'Most organizations already have data, tools, and manual workflows for {topic}.',
            f'The missing piece is usually orchestration, clear ownership, and a repeatable operating model that can scale beyond a pilot.',
            f'Understanding the current state is essential: map workflows, measure cycle times, and identify bottlenecks before proposing automation.',
            f'A realistic baseline prevents unrealistic promises and helps leadership see the real gap between current state and target outcomes.',
            f'Spend time in discovery before committing to a roadmap; the best automation plans come from deep operational knowledge.'
        ],
        'Opportunities': [
            f'High-impact opportunities for {topic} usually cluster around onboarding, quality assurance, cost visibility, and escalation handling.',
            f'Focus on workflows with high volume, high error rates, or slow handoffs; these produce the clearest ROI and fastest adoption.',
            f'Map each opportunity to a business outcome so stakeholders understand the why behind the investment.',
            f'Choose one opportunity, measure the current state, then design an automation or augmentation that reduces rework.',
            f'Track opportunity value over time so you can prioritize the next wave after the first success.'
        ],
        'Implementation roadmap': [
            f'Phase one should deliver a single measurable win in 30 days for {topic}.',
            f'Phase two adds reliability controls: monitoring, access management, runbooks, and escalation criteria.',
            f'Phase three expands scope only after validated adoption, stable operations, and clear ownership across teams.',
            f'Each phase should include a retrospective so lessons learned feed the next phase rather than repeating the same mistakes.',
            f'Keep the roadmap visible to stakeholders and update it as the program matures; transparency builds trust and funding continuity.'
        ],
        'Risks and mitigations': [
            f'Main risks for {topic} include data quality gaps, over-automation, brittle integrations, missing rollback criteria, and unclear ownership.',
            f'Data quality gaps can be reduced with lightweight validation and clearly defined data contracts before automation begins.',
            f'Over-automation is best avoided with guardrails, approval flows, and human escalation paths for exceptions.',
            f'Weak rollback plans can be fixed with staged rollout criteria and synthetic monitors that trigger alerts before customers are affected.',
            f'Ownership gaps are solved by naming a primary owner, a backup owner, and an escalation path before launch.'
        ],
        'Outcomes to measure': [
            f'Leading indicators for {topic}: workflow completion rate, escalation rate, time-to-resolution, and user satisfaction.',
            f'Lagging indicators: revenue trend, cost trend, customer retention, and operational efficiency.',
            f'Track both leading and lagging indicators so you can explain progress to leadership before financial results appear.',
            f'Use a rolling 90-day window and re-baseline monthly; this keeps the program accountable without demanding perfection on day one.',
            f'Publish metrics in a shared dashboard so the whole team sees progress, not just the program sponsor.'
        ],
        'Business context': [
            f'Strong investments in {topic} reduce manual work, improve customer experience, and create faster feedback loops between operations and revenue.',
            f'The best programs tie capability building to business outcomes: faster throughput, fewer preventable incidents, and clearer accountability.',
            f'Leadership support increases when {topic} is framed as strategic capability rather than an experimental cost center.',
            f'Focus on durable value: scalable processes, reusable integrations, and measurable outcomes that survive turnover and budget cycles.',
            f'When business context is clear, funding and staffing decisions become easier because stakeholders understand the expected return.'
        ],
        'Technical considerations': [
            f'For {topic}, prefer services with documented APIs, webhooks, and role-based access control.',
            f'Avoid point solutions that become brittle after the pilot; choose platforms designed for production workloads and operational visibility.',
            f'Centralize data contracts and use lightweight integration points so you can adapt when requirements change.',
            f'Retain fallback paths for exceptions and edge cases; resilient systems handle failure modes gracefully instead of breaking end-to-end.',
            f'Document interfaces and ownership so future teams can extend the system without rewriting core logic.'
        ],
        'Operational rollout': [
            f'Pilot {topic} with one team, document runbooks, train operators, then expand.',
            f'Broad rollouts without ownership create unrecoverable backlogs and erode trust in automation.',
            f'Operational readiness should be checked before expansion: alerting, on-call coverage, incident response, and change management.',
            f'Make success visible through dashboards and weekly reviews so momentum builds from real progress, not slide decks.',
            f'Operational excellence is built during the pilot, not after a failed broad rollout.'
        ],
        'Success signals': [
            f'A successful rollout of {topic} produces clearer metrics, faster execution, and fewer preventable incidents.',
            f'If those outcomes do not appear, revisit scope and workflow design instead of adding more tooling.',
            f'Look for consistent adoption, stable error rates, and positive operator feedback before declaring success.',
            f'Sustained success requires continuous improvement, not a one-time implementation project.',
            f'Celebrate evidence-based wins publicly; they build momentum for the next phase.'
        ],
        'Problem definition': [
            f'Teams frequently over-index on proofs of concept without production guardrails for {topic}: monitoring, access control, incident response, and change management.',
            f'Without these guardrails, promising pilots become operational liabilities that consume more time than they save.',
            f'A clear problem definition separates experiments from production-ready programs by stating the exact outcome, constraints, and success criteria.',
            f'Invest time in problem definition before automation; it pays back in faster delivery and fewer rework cycles.',
            f'Write the problem statement in one paragraph and share it with stakeholders to align expectations before work begins.'
        ],
        'Architecture overview': [
            f'For {topic}, start with lightweight integration points, centralize data contracts, and expose only the actions required for human approval or escalation.',
            f'Composable architectures outperform monolith replacements because they let teams evolve individual capabilities without disrupting the whole system.',
            f'Keep the architecture observable: logs, metrics, and traces should answer why an action occurred, not just that it occurred.',
            f'Avoid hidden coupling between services; explicit interfaces and clear ownership reduce coordination costs as the system scales.',
            f'Revisit architecture after each phase and refactor coupling points before they become hard dependencies.'
        ],
        'Deployment patterns': [
            f'Use staged rollout for {topic} with explicit rollback criteria, synthetic monitors for critical paths, and defined ownership for alerts and incidents.',
            f'Small, reversible changes reduce blast radius and make incidents easier to diagnose and recover from.',
            f'Deployments should be boring by design: predictable, automated, and reversible with one command or control plane action.',
            f'Pair deployment automation with canary or blue-green strategies when user-facing behavior changes.',
            f'Track deployment frequency, failure rate, and recovery time; these metrics predict long-term operational health.'
        ],
        'Cost and ROI': [
            f'Calculate ROI for {topic} using saved hours, avoided incidents, faster throughput, or improved conversion.',
            f'Use a rolling 90-day window and re-baseline monthly so stakeholders see real trend data rather than one-time estimates.',
            f'Include operational costs: monitoring, on-call coverage, training, and exception handling. Ignoring these creates unrealistic ROI models.',
            f'ROI should be owned by the program sponsor and reviewed publicly; transparency keeps teams accountable and funding intact.',
            f'Update the ROI model after each phase so it reflects actual performance, not optimistic assumptions.'
        ],
        'Market signal': [
            f'Demand is rising for durable {topic} capabilities rather than one-off automations.',
            f'Buyers want measurable outcomes, stable operations, and vendor partnerships that grow with their environment.',
            f'The strongest programs differentiate themselves with operational maturity, not feature breadth.',
            f'Focus on outcomes, roadmap clarity, and evidence-based improvements rather than generic AI marketing.',
            f'Use market signal analysis to prioritize investments that align with buyer expectations and competitive positioning.'
        ],
        'Capability map': [
            f'Map capabilities against current workflow friction for {topic}.',
            f'Highest-ROI automations reduce handoffs and rework rather than simply digitizing existing handoffs.',
            f'A capability map makes priorities visible to leadership and creates a shared view of where automation should start.',
            f'Revisit the map quarterly; new opportunities emerge as teams mature and data quality improves.',
            f'Share the map with operators and validate assumptions before investing in automation.'
        ],
        'Execution playbook': [
            '1) Define success metrics. 2) Choose one primary workflow. 3) Automate the lowest-risk step first. 4) Add observability. 5) Expand only after stable operation.',
            'Document decisions, owners, dates, and metrics in a shared workspace so progress remains visible to all stakeholders.',
            'Review the playbook after each phase and update it with lessons learned; the playbook becomes organizational memory.',
            'Repeatable execution separates successful teams from teams that rely on heroics and undocumented workarounds.',
            'Keep the playbook short and actionable; long strategy documents rarely change behavior on the ground.'
        ],
        'Action checklist': [
            f'For {topic}: pick one workflow, assign ownership, define success metrics, instrument execution, and set a 30-day review date.',
            f'Write the checklist down and share it with stakeholders so expectations are explicit.',
            f'Before launch, verify access controls, monitoring, rollback criteria, and on-call coverage.',
            f'After launch, review metrics weekly and escalate deviations immediately; small drifts become large incidents when ignored.',
            f'Use the checklist as a living document and update it as the program learns from real operation.'
        ],
        'Recommended next step': [
            'Start with one workflow, one owner, and one success metric.',
            'Expansion should follow evidence, not enthusiasm.',
            'A focused pilot beats a scattered roadmap because it produces proof points that stakeholders can verify.',
            'If this matches your current initiative, the next step is a short scoping call and a concrete pilot plan.'
        ],
        'Conversion path': [
            f'If this guide matches your {topic} initiative, the next step is a scoping call with Zion Tech Group.',
            'We will define one measurable outcome, identify dependencies, and outline a pilot plan you can start in days.',
            'Contact us to move from assessment to execution with a timeline and success criteria already in place.'
        ],
    }
    vals = paragraphs.get(key, [f'{key}: {topic} requires clear ownership, measurable success criteria, and phased execution to deliver sustainable value.'])
    return ' '.join(vals)


def build_section_body(title: str, cluster: str) -> str:
    h = int(hashlib.sha1(title.encode('utf-8')).hexdigest()[:6], 16)
    variants = [
        ['Why this matters now', 'Executive summary', 'Recommended approach', 'Common pitfalls', 'Next actions'],
        ['Current state', 'Opportunities', 'Implementation roadmap', 'Risks and mitigations', 'Outcomes to measure'],
        ['Business context', 'Technical considerations', 'Operational rollout', 'Success signals', 'Recommended next step'],
        ['Problem definition', 'Architecture overview', 'Deployment patterns', 'Cost and ROI', 'Action checklist'],
        ['Market signal', 'Capability map', 'Execution playbook', ' ', 'Conversion path'],
    ]
    sections = variants[h % len(variants)]
    parts = []
    for section in sections:
        section = section.strip()
        if not section:
            continue
        parts.append(f'## {section}\n{paragraph(title, cluster, section)}\n')
    return '\n'.join(parts)


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

const jsonLd = {json_ld};

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
{build_section_body(title, cluster)}
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
    body = build_section_body(title, cluster)
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
    {body}
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
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{''.join(urls)}
</urlset>
"""
    (REPO / 'sitemap.xml').write_text(xml, encoding='utf-8')


def write_feed(slugs: list[str]) -> None:
    items = []
    for s in slugs[:50]:
        title = s.replace('-', ' ').title()
        items.append(f'<entry><title>{title}</title><link href="{SITE_URL}/blog/{s}/"/></entry>')
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Zion Tech Group Blog</title>
  <link href="{SITE_URL}/blog/"/>
  <updated>{datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')}</updated>
  {''.join(items)}
</feed>
"""
    (REPO / 'feed.xml').write_text(xml, encoding='utf-8')


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
