#!/usr/bin/env python3
"""Create missing app/blog pages for docs fallbacks, then improve thin posts."""
from __future__ import annotations

import hashlib
import json
import re
import random
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'
AUTHOR_NAME = 'Zion Tech Group'
AUTHOR_URL = 'https://ziontechgroup.com'
SITE_URL = 'https://ziontechgroup.com'
RANDOM = random.Random(12345)


def to_title(text: str) -> str:
    text = re.sub(r'\s+', ' ', text.strip())
    return text[0].upper() + text[1:] if text else 'Untitled'


def existing_blog_slugs() -> set[str]:
    slugs = set()
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists():
                slugs.add(child.name)
    return slugs


def existing_docs_slugs() -> set[str]:
    slugs = set()
    if DOCS_ROOT.exists():
        for child in DOCS_ROOT.iterdir():
            if child.is_dir() and (child / 'index.html').exists():
                slugs.add(child.name)
    return slugs


def related_slugs(current: str, limit: int = 4) -> list[str]:
    candidates = []
    if BLOG_ROOT.exists():
        for p in BLOG_ROOT.iterdir():
            if p.is_dir() and (p / 'page.tsx').exists() and p.name != current:
                candidates.append(p.name)
    RANDOM.shuffle(candidates)
    return candidates[:limit]


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
    lines = []
    for section in sections:
        section = section.strip()
        if not section:
            continue
        lines.append(f'## {section}\n{body_map.get(section, section + ": build a short practical note focused on outcomes, not features.")}\n')
    return '\n'.join(lines)


def build_page(title: str, cluster: str, slug: str, cta: str, description: str) -> str:
    body = build_section_body(title, cluster)
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


def create_missing_app_pages(limit: int = 200) -> tuple[int, int]:
    blog_slugs = existing_blog_slugs()
    docs_slugs = existing_docs_slugs()
    missing = sorted(docs_slugs - blog_slugs)[:limit]
    created = 0
    for slug in missing:
        title = to_title(slug.replace('-', ' '))
        cluster = 'it'
        if slug.startswith('ai-'):
            cluster = 'ai'
        elif slug.startswith('cloud-'):
            cluster = 'cloud'
        elif slug.startswith('security-') or slug.startswith('cyber-'):
            cluster = 'security'
        elif slug.startswith('data-'):
            cluster = 'data'
        elif slug.startswith('automation-'):
            cluster = 'automation'
        cta = 'services'
        if 'case-study' in slug or 'executive-guide' in slug:
            cta = 'contact'
        elif 'checklist' in slug or 'policy' in slug:
            cta = 'free-resources'
        page = BLOG_ROOT / slug / 'page.tsx'
        page.parent.mkdir(parents=True, exist_ok=True)
        page.write_text(build_page(title, cluster, slug, cta, title), encoding='utf-8')
        created += 1
    return created, len(missing)


def improve_thin_posts(limit: int = 50) -> tuple[int, int]:
    blog_slugs = existing_blog_slugs()
    improved = 0
    total = 0
    for slug in blog_slugs:
        if improved >= limit:
            break
        page = BLOG_ROOT / slug / 'page.tsx'
        if not page.exists():
            continue
        text = page.read_text(encoding='utf-8', errors='ignore')
        body_m = re.search(r'<section[^>]*className="prose[^"]*"[^>]*>(.*?)</section>', text, re.DOTALL | re.IGNORECASE)
        if not body_m:
            continue
        body_text = re.sub(r'<[^>]+>', '', body_m.group(1))
        words = len(body_text.split())
        if words >= 250:
            continue
        total += 1
        title_m = re.search(r'<h1[^>]*>([^<]+)</h1>', text, re.IGNORECASE)
        title = to_title(title_m.group(1).strip()) if title_m else to_title(slug.replace('-', ' '))
        description_m = re.search(r'<p className="mt-4 text-lg text-slate-300">([^<]+)</p>', text)
        description = description_m.group(1).strip() if description_m else title
        cluster_m = re.search(r"keywords: \['([^']+)'", text)
        cluster = cluster_m.group(1) if cluster_m else 'it'
        cta_m = re.search(r'href="/([^"]+)"[^>]*className="rounded-xl bg-white', text)
        cta = cta_m.group(1) if cta_m else 'services'
        page.write_text(build_page(title, cluster, slug, cta, description), encoding='utf-8')
        improved += 1
    return improved, total


def main() -> int:
    created, total_missing = create_missing_app_pages()
    improved, total_thin = improve_thin_posts()
    print(json.dumps({
        'missing_app_created': created,
        'missing_app_total': total_missing,
        'thin_posts_found': total_thin,
        'thin_posts_improved': improved,
    }, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
