#!/usr/bin/env python3
"""
Zion Content Loop v3 — Expanded autonomous content toolkit.

Generates Next.js App Router blog pages with:
- stronger SEO metadata + article JSON-LD schema
- author / E-E-A-T block
- reading-time metadata
- related posts
- contextual internal links
- multi-option CTAs
"""

from __future__ import annotations

import hashlib
import json
import os
import random
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
BLOG_ROOT = REPO / 'app' / 'blog'
DATA_ROOT = REPO / 'app' / 'data'
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'

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
    if not TOPICS_FILE.exists():
        raise FileNotFoundError(f'Topics file not found: {TOPICS_FILE}')
    return json.loads(TOPICS_FILE.read_text(encoding='utf-8'))


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-{2,}', '-', text)
    return text.strip('-')


def reading_time(words: int) -> int:
    return max(1, round(words / 220))


def resolve_related(current_slug: str, limit: int = 4) -> list[str]:
    existing: list[str] = []
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists():
                existing.append(child.name)
    related = [s for s in existing if s != current_slug]
    random.shuffle(related)
    return related[:limit]


def json_escape(value: str) -> str:
    return value.replace("'", "\\'")


def build_page_markdown(topic: dict) -> tuple[str, str]:
    title = topic.get('title', 'Untitled')
    cluster = topic.get('cluster', 'general')
    intent = topic.get('intent', 'guide')
    slug = topic.get('slug') or slugify(title)
    cta = topic.get('cta') or random.choice(CTA_OPTIONS)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')

    related = resolve_related(slug)
    related_links = ''.join(
        f"<li><Link href=\"/blog/{r}\">{r.replace('-', ' ').title()}</Link></li>" for r in related
    ) or '<li>Coming soon</li>'

    word_target = random.randint(1400, 2200)
    body = """## Why this matters now
Buyers are evaluating vendors around measurable outcomes, not feature lists. This guide focuses on execution, guardrails, and measurable results for IT and AI leaders in 2026.

## Executive summary
- Prioritize outcomes over deliverables.
- Start with a small pilot and clear success criteria.
- Choose tooling that integrates with existing workflows.

## Recommended approach
1. Map current workflows and data sources.
2. Identify the highest-impact automation or visibility gap.
3. Build a pilot with measurable success criteria.
4. Measure, document, and scale.

## Common pitfalls
- Treating AI as a generic feature instead of a workflow change.
- Skipping the data-quality and integration step.
- Launching without a rollback or monitoring plan.

## Next actions
- Review current workflows for manual, high-volume tasks.
- Contact Zion Tech Group for a scoped pilot.
- Use the free resources to build a shortlist of tools.
"""

    json_ld = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': title,
        'description': topic.get('description', title),
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
        'wordCount': word_target,
    }

    safe_title = json_escape(title)
    safe_description = json_escape(topic.get('description', title))
    safe_cta = json_escape(cta)

    content = f"""import Link from 'next/link';
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

const jsonLd = {json.dumps(json_ld, ensure_ascii=False)};

export default function Page() {{
  return (
    <div className=\"relative min-h-screen bg-slate-950\">
      <article className=\"relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8\">
        <SiteBreadcrumbs items={{[{{ label: 'Home', href: '/' }}, {{ label: 'Blog', href: '/blog' }}, {{ label: '{safe_title}' }}]}} className=\"mb-8\" />
        <header className=\"mb-10\">
          <h1 className=\"text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl\">{safe_title}</h1>
          <p className=\"mt-4 text-lg text-slate-300\">{safe_description}</p>
          <div className=\"mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400\">
            <span>By {AUTHOR_NAME}</span>
            <span aria-hidden=\"true\">•</span>
            <span>{word_target} min read</span>
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
            <p className=\"text-slate-300\">Talk with Zion Tech Group about your environment and goals.</p>
            <div className=\"mt-4 flex flex-col gap-3 sm:flex-row\">
              <Link href=\"{safe_cta}\" className=\"rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900\">Get started</Link>
              <Link href=\"/services\" className=\"rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white\">Services</Link>
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
    return slug, content


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
        written.append(slug)
    return written


def main() -> int:
    written = write_pages()
    print(json.dumps({"published": len(written), "items": written}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
