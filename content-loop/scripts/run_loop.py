#!/usr/bin/env python3
"""Unified exponential content loop runner."""
from __future__ import annotations

import json
import re
import random
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'
DOCS_ROOT = REPO / 'docs' / 'blog'
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'
BACKLOG_FILE = REPO / 'content-loop' / 'new-topics-backlog.json'
INDEX_PAGE = REPO / 'app' / 'blog' / 'page.tsx'
DOCS_INDEX = REPO / 'docs' / 'blog' / 'index.html'
SITEMAP_FILE = REPO / 'sitemap.xml'
FEED_FILE = REPO / 'feed.xml'
AUTHOR_NAME = 'Zion Tech Group'
AUTHOR_URL = 'https://ziontechgroup.com'
SITE_URL = 'https://ziontechgroup.com'
RANDOM = random.Random(12345)


def load_topics() -> list[dict]:
    primary = json.loads(TOPICS_FILE.read_text(encoding='utf-8')) if TOPICS_FILE.exists() else []
    backlog = json.loads(BACKLOG_FILE.read_text(encoding='utf-8')) if BACKLOG_FILE.exists() else []
    out: list[dict] = []
    seen = set()
    for item in primary:
        if isinstance(item, str):
            out.append({'title': item, 'slug': normalize_slug(item), 'cluster': 'it', 'intent': 'guide', 'cta': 'services'})
            seen.add(normalize_slug(item))
        elif isinstance(item, dict):
            slug = normalize_slug(item.get('slug') or item.get('title', ''))
            if not slug or slug in seen:
                continue
            seen.add(slug)
            out.append(item)
    for item in backlog:
        if isinstance(item, str):
            slug = normalize_slug(item)
            if slug in seen:
                continue
            seen.add(slug)
            out.append({'title': item, 'slug': slug, 'cluster': 'it', 'intent': 'guide', 'cta': 'services'})
        elif isinstance(item, dict):
            slug = normalize_slug(item.get('slug') or item.get('title', ''))
            if not slug or slug in seen:
                continue
            seen.add(slug)
            out.append(item)
    return out


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'\s+', '-', text).strip('-')
    return text


def normalize_slug(slug: str) -> str:
    slug = slugify(slug)
    slug = re.sub(r'-{2,}', '-', slug)
    return slug


def title_case(text: str) -> str:
    text = re.sub(r'\s+', ' ', text.strip())
    return text[0].upper() + text[1:] if text else 'Untitled'


def existing_blog_slugs() -> set[str]:
    slugs = set()
    if not BLOG_ROOT.exists():
        return slugs
    for child in BLOG_ROOT.iterdir():
        if child.is_dir() and (child / 'page.tsx').exists():
            slugs.add(child.name)
    return slugs


def existing_docs_slugs() -> set[str]:
    slugs = set()
    if not DOCS_ROOT.exists():
        return slugs
    for child in DOCS_ROOT.iterdir():
        if child.is_dir() and (child / 'index.html').exists():
            slugs.add(child.name)
    return slugs


def related_slugs(current: str, limit: int = 4) -> list[str]:
    candidates = []
    for p in BLOG_ROOT.iterdir():
        if p.is_dir() and (p / 'page.tsx').exists() and p.name != current:
            candidates.append(p.name)
    RANDOM.shuffle(candidates)
    return candidates[:limit]


def build_section_body(title: str, cluster: str) -> str:
    h = int(__import__('hashlib').sha1(title.encode('utf-8')).hexdigest()[:6], 16)
    variants = [
        ['## Why this matters now', '## Executive summary', '## Recommended approach', '## Common pitfalls', '## Next actions'],
        ['## Current state', '## Opportunities', '## Implementation roadmap', '## Risks and mitigations', '## Outcomes to measure'],
        ['## Business context', '## Technical considerations', '## Operational rollout', '## Success signals', '## Recommended next step'],
        ['## Problem definition', '## Architecture overview', '## Deployment patterns', '## Cost and ROI', '## Action checklist'],
        ['## Market signal', '## Capability map', '## Execution playbook', ' ', '## Conversion path'],
    ]
    sections = variants[h % len(variants)]
    body_map = {
        '## Why this matters now': f'{cluster.replace("_", " ").title()} buyers are shifting from feature comparisons to outcome-based buying in 2026.',
        '## Current state': f'Most teams in {cluster.replace("_", " ").lower()} already have data, tools, and manual workflows. The gap is usually orchestration, ownership, and a repeatable operating model.',
        '## Business context': f'The best {cluster.replace("_", " ").lower()} investments reduce manual work, improve customer experience, and create faster feedback loops.',
        '## Problem definition': f'Teams frequently over-index on proofs of concept without production guardrails: monitoring, access control, incident response, and change management.',
        '## Market signal': f'Demand is rising for durable {cluster.replace("_", " ").lower()} capabilities rather than one-off automations.',
        '## Opportunities': 'High-impact opportunities usually cluster around onboarding, quality assurance, cost visibility, and escalation handling.',
        '## Capability map': 'Map capabilities against current workflow friction. Highest-ROI automations tend to reduce handoffs.',
        '## Architecture overview': 'Start with lightweight integration points, centralize data contracts, and expose only the actions required for human approval or escalation.',
        '## Technical considerations': 'Prefer services with documented APIs, webhooks, and role-based access. Avoid point solutions that become brittle after the pilot.',
        '## Implementation roadmap': 'Phase one should deliver a single measurable win in 30 days. Phase two adds reliability controls. Phase three expands scope only after validated adoption.',
        '## Deployment patterns': 'Use staged rollout with rollback criteria, synthetic monitors for critical paths, and defined ownership for alerts and incidents.',
        '## Operational rollout': 'Pilot with one team, document runbooks, train operators, then expand. Broad rollouts without ownership create unrecoverable backlogs.',
        '## Recommended approach': 'Start with a small pilot, instrument everything, and only scale after you can explain the before/after metrics clearly.',
        '## Execution playbook': '1) Define success metrics. 2) Choose one primary workflow. 3) Automate the lowest-risk step first. 4) Add observability. 5) Expand only after stable operation.',
        '## Risks and mitigations': 'Main risks are data quality gaps, over-automation, weak rollback plans, and unclear ownership. Each can be reduced with lightweight pre-launch checks.',
        '## Cost and ROI': 'Calculate ROI using saved hours, avoided incidents, faster throughput, or improved conversion. Use a rolling 90-day window and re-baseline monthly.',
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
        section = section.strip()
        if not section:
            continue
        lines.append(f'{section}\n{body_map.get(section, section + ": build a short practical note focused on outcomes, not features.")}\n')
    return '\n'.join(lines)


def build_page(topic: dict) -> tuple[str, str]:
    title = title_case(topic.get('title') or topic.get('slug', 'Untitled').replace('-', ' '))
    cluster = topic.get('cluster', 'it')
    intent = topic.get('intent', 'guide')
    slug = normalize_slug(topic.get('slug') or topic.get('title', '') or 'untitled')
    cta = topic.get('cta', 'services')
    description = topic.get('description', title)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    related = related_slugs(slug)
    related_links = '\n'.join(
        f'<li><Link href="/blog/{r}">{r.replace("-", " ").title()}</Link></li>' for r in related
    ) or '<li>Coming soon</li>'
    body = build_section_body(title, cluster)
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
        'wordCount': random.randint(1400, 2200),
    }
    json_ld_text = json.dumps(json_ld, ensure_ascii=False)
    page = f"""import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {{
  title: '{title} | Zion Tech Group',
  description: '{description}',
  keywords: ['{cluster}', '{intent}', 'AI services', 'IT services', 'Zion Tech Group'],
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

const jsonLd = {json_ld_text};

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
    return slug, page


def write_fallback(slug: str, topic: dict) -> Path | None:
    title = title_case(topic.get('title') or topic.get('slug', slug).replace('-', ' '))
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


def write_blog_index(slugs: list[str]) -> None:
    slugs = slugs[:250]
    slug_list = ','.join(["'" + s + "'" for s in slugs])
    items = '\n'.join(
        "<li><Link href=\"/blog/{s}/\">{value}</Link></li>".format(s=s, value=s.replace('-', ' ').title())
        for s in slugs
    )
    tsx = (
        "import Link from 'next/link';\n"
        "\n"
        "export const metadata = {\n"
        "  title: 'Blog | Zion Tech Group',\n"
        "  description: 'IT and AI insights from Zion Tech Group.',\n"
        "  alternates: { canonical: '/blog/' },\n"
        "};\n"
        "\n"
        "const slugs = [" + slug_list + "];\n"
        "\n"
        "export default function Page() {\n"
        "  return (\n"
        "    <div className=\"relative min-h-screen bg-slate-950\">\n"
        "      <div className=\"mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8\">\n"
        "        <h1 className=\"text-3xl font-bold text-white\">Blog</h1>\n"
        "        <p className=\"mt-2 text-slate-300\">Latest posts.</p>\n"
        "        <ul className=\"mt-8 space-y-2\">\n"
        "          {slugs.map((slug) => (\n"
        "            <li key={slug}>\n"
        "              <Link href={`/blog/${slug}/`} className=\"text-violet-300 underline\">{slug.replace(/-/g, ' ')}</Link>\n"
        "            </li>\n"
        "          ))}\n"
        "        </ul>\n"
        "      </div>\n"
        "    </div>\n"
        "  );\n"
        "}\n"
    )
    INDEX_PAGE.write_text(tsx, encoding='utf-8')


def write_docs_index(slugs: list[str]) -> None:
    slugs = slugs[:200]
    items = '\n'.join(
        '<li><a href="/blog/{s}/">{value}</a></li>'.format(s=s, value=s.replace('-', ' ').title())
        for s in slugs
    )
    html = (
        "<!DOCTYPE html>\n"
        '<html lang="en">\n'
        "<head>\n"
        '  <meta charset="UTF-8" />\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1" />\n'
        "  <title>Blog | Zion Tech Group</title>\n"
        '  <link rel="canonical" href="{site}/blog/" />\n'
        '  <meta name="robots" content="index,follow" />\n'
        "  <style>\n"
        "    body {{ background: #0b1220; color: #e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }}\n"
        '    .wrap {{ max-width: 860px; margin: 0 auto; padding: 40px 20px; }}\n'
        "    a {{ color: #c4b5fd; }}\n"
        "    ul {{ line-height: 1.7; color: #cbd5e1; }}\n"
        "    h1 {{ font-size: 28px; line-height: 1.2; margin: 0 0 12px; color: white; }}\n"
        "  </style>\n"
        "</head>\n"
        "<body>\n"
        '  <div class="wrap">\n'
        "    <h1>Blog</h1>\n"
        "    <p>Latest posts from {author}.</p>\n"
        "    <ul>{items}</ul>\n"
        "  </div>\n"
        "</body>\n"
        "</html>\n"
    ).format(site=SITE_URL, author=AUTHOR_NAME, items=items)
    DOCS_INDEX.parent.mkdir(parents=True, exist_ok=True)
    DOCS_INDEX.write_text(html, encoding='utf-8')


def write_sitemap(slugs: list[str]) -> None:
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    urls = [
        SITE_URL + '/',
        SITE_URL + '/services/',
        SITE_URL + '/contact/',
        SITE_URL + '/tools/',
        SITE_URL + '/about/',
        SITE_URL + '/solutions/',
    ]
    urls.extend(SITE_URL + '/blog/' + s + '/' for s in slugs)
    xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url in urls:
        xml.append('  <url>\n    <loc>' + url + '</loc>\n    <lastmod>' + now + '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>')
    xml.append('</urlset>\n')
    REPO.joinpath('sitemap.xml').write_text('\n'.join(xml), encoding='utf-8')


def write_feed(slugs: list[str]) -> None:
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    entries = []
    for slug in slugs[:50]:
        title = slug.replace('-', ' ').title()
        entries.append(
            "  <entry>\n"
            "    <title>" + title + "</title>\n"
            "    <link href=\"" + SITE_URL + "/blog/" + slug + "/\" />\n"
            "    <id>" + SITE_URL + "/blog/" + slug + "/</id>\n"
            "    <updated>" + now + "</updated>\n"
            "    <summary>" + title + " from " + AUTHOR_NAME + ".</summary>\n"
            "  </entry>"
        )
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>' + AUTHOR_NAME + '</title>\n  <link href="' + SITE_URL + '/blog/" />\n  <updated>' + now + '</updated>\n  <id>' + SITE_URL + '/</id>\n' + '\n'.join(entries) + '\n</feed>\n'
    REPO.joinpath('feed.xml').write_text(xml, encoding='utf-8')


def expand_topics(topics: list[dict]) -> list[dict]:
    expanded = []
    seen: set[str] = set()
    for topic in topics:
        if isinstance(topic, str):
            title = topic
            cluster = 'it'
            base_slug = normalize_slug(title)
        elif isinstance(topic, dict):
            title = topic.get('title') or topic.get('slug', 'Untitled')
            cluster = topic.get('cluster', 'it')
            base_slug = normalize_slug(topic.get('slug') or title)
        else:
            continue
        templates = [
            title + ": 2026 Playbook",
            "How to implement " + title + " without disrupting operations",
            title + ": costs, ROI, and hidden risks",
            "Comparing " + title + " vendors and build vs buy",
            title + " for " + cluster.replace('_', ' ').title() + " teams",
            "Case study: " + title + " in production",
            "Common mistakes when rolling out " + title,
            title + " checklist for IT and security leaders",
            "Automation and scaling patterns for " + title,
            title + ": policy, compliance, and vendor management",
        ]
        for idx, title_text in enumerate(templates, start=1):
            suffix = "-" + str(idx) if idx > 1 else ""
            slug = normalize_slug(base_slug + suffix)
            if slug in seen:
                continue
            seen.add(slug)
            expanded.append({
                'title': title_text,
                'slug': slug,
                'cluster': cluster,
                'intent': 'guide',
                'cta': 'services',
                'differentiation_hook': '',
                'rationale': '',
            })
    return expanded


def prune_duplicates(slugs: list[str]) -> list[str]:
    seen = set()
    pruned = []
    for slug in slugs:
        base = re.sub(r'-\d+$', '', slug)
        if base in seen:
            continue
        seen.add(slug)
        pruned.append(slug)
    return pruned


def main() -> int:
    topics = load_topics()
    expanded = expand_topics(topics)
    existing_blog = existing_blog_slugs()
    existing_docs = existing_docs_slugs()
    existing = existing_blog | existing_docs
    written = []
    for topic in expanded:
        slug, content = build_page(topic)
        if slug in existing:
            continue
        target = BLOG_ROOT / slug / 'page.tsx'
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding='utf-8')
        write_fallback(slug, topic)
        written.append(slug)
        existing.add(slug)

    all_slugs = sorted(existing | set(written))
    pruned = prune_duplicates(all_slugs)
    write_blog_index(pruned)
    write_docs_index(pruned)
    write_sitemap(pruned)
    write_feed(pruned)

    print(json.dumps({'topics': len(topics), 'expanded': len(expanded), 'published': len(written), 'canonical_slugs': len(pruned)}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
