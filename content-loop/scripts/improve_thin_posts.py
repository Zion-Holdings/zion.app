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
            f'Main risks for {topic} include data quality gaps, over-automation, weak rollback plans, and unclear ownership.',
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


def improve_thin_posts() -> tuple[int, int]:
    blog_slugs = existing_blog_slugs()
    improved = 0
    total = 0
    for slug in blog_slugs:
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
