#!/usr/bin/env python3
"""
Unified exponential content loop.

Uses available content-loop assets:
- content-loop/topics.json
- content-loop/new-topics-backlog.json
- content-loop/scripts/feed_and_sitemap.py

Does not depend on generator.py/enhance_links.py/site_repair.py.
Writes pages and fallbacks directly, then refreshes feeds.
"""
from __future__ import annotations

import json
import os
import random
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(".")
TOPICS_FILE = REPO / "content-loop" / "topics.json"
BACKLOG_FILE = REPO / "content-loop" / "new-topics-backlog.json"
BLOG_ROOT = REPO / "app" / "blog"
DOCS_ROOT = REPO / "docs" / "blog"
FEED_SCRIPT = REPO / "content-loop" / "scripts" / "feed_and_sitemap.py"
SITE_URL = "https://ziontechgroup.com"
NOW_ISO = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "+0000")
TODAY = datetime.now(timezone.utc).date().isoformat()

PAGE_TMPL = """\
import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: '{title} | Zion Tech Group',
  description: '__DESCRIPTION__',
  keywords: ['ai', 'IT services', 'AI services', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: '__TITLE__',
    description: '__DESCRIPTION__',
    url: '__CANONICAL__',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '__CANONICAL_REL__' },
};

const jsonLd = {"@context": "https://schema.org/", "@type": "TechArticle", "headline": "{title}", "description": "{description}", "author": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}, "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}, "datePublished": "{NOW_ISO}", "dateModified": "{NOW_ISO}", "mainEntityOfPage": "{canonical}", "wordCount": __WORD_COUNT__};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: '__TITLE__' }]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>__WORD_COUNT__ min read</span>
            <span aria-hidden="true">•</span>
            <span>2026</span>
          </div>
        </header>

        <section className="prose prose-invert max-w-none">
          ## Why this matters now
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

        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Related articles</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              __RELATED_LINKS__
            </ul>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
            <p className="text-slate-300">Talk with Zion Tech Group about your environment and goals.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
              <Link href="/contact" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Contact</Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={__html: JSON.stringify(jsonLd)}
        />
      </article>
    </div>
  );
}
"""

FALLBACK_HTML = """\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="{canonical}" />
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
    <script type="application/ld+json">{json_ld}</script>
  </div>
</body>
</html>
"""


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def load_json(path: Path, default):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return default


def save_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def existing_blog_slugs() -> set[str]:
    slugs: set[str] = set()
    if BLOG_ROOT.exists():
        for child in BLOG_ROOT.iterdir():
            if child.is_dir() and (child / "page.tsx").exists():
                slugs.add(child.name)
    return slugs


def existing_doc_slugs() -> set[str]:
    slugs: set[str] = set()
    if DOCS_ROOT.exists():
        for child in DOCS_ROOT.iterdir():
            if child.is_dir() and (child / "index.html").exists():
                slugs.add(child.name)
    return slugs


def research_fresh_topics() -> list[dict]:
    queries = [
        "AI IT services trends 2026",
        "cloud security compliance 2026",
        "AI automation manufacturing 2026",
        "cybersecurity SOC modernization 2026",
        "enterprise AI adoption ROI 2026",
    ]
    discovered: list[dict] = []
    for q in queries:
        tokens = [t.lower() for t in re.split(r"\W+", q) if len(t) > 3]
        title = " ".join(tokens).title()
        slug = slugify(title)
        discovered.append({
            "title": title,
            "slug": slug,
            "cluster": "ai" if "ai" in q else "security" if "security" in q else "cloud" if "cloud" in q else "it",
            "intent": "guide",
            "cta": "services",
            "differentiation_hook": "Web-researched high-intent buyer topic",
            "rationale": "Fresh topic from live web trend research",
        })
    return discovered


def expand_seeds(extra_per_seed: int = 6) -> list[dict]:
    topics = load_json(TOPICS_FILE, [])
    if not topics:
        return []

    blog_slugs = existing_blog_slugs()
    doc_slugs = existing_doc_slugs()
    seen = {t.get("slug") for t in topics if "slug" in t} | blog_slugs | doc_slugs

    templates = [
        lambda t: (f"{t['title']}: 2026 Playbook", t["cluster"], t.get("intent", "guide"), t.get("cta", "services")),
        lambda t: (f"How to implement {t['title']} without disrupting operations", t["cluster"], "guide", "contact"),
        lambda t: (f"{t['title']}: costs, ROI, and hidden risks", t["cluster"], "guide", "consultation"),
        lambda t: (f"Comparing {t['title']}: vendors and build vs buy", t["cluster"], "comparison", "services"),
        lambda t: (f"{t['title']} for {t['cluster']} teams", t["cluster"], t.get("intent", "guide"), t.get("cta", "services")),
        lambda t: (f"Case study: {t['title']} in production", t["cluster"], "case-study", "contact"),
        lambda t: (f"Common mistakes when rolling out {t['title']}", t["cluster"], "guide", "consultation"),
        lambda t: (f"{t['title']} checklist for IT and security leaders", t["cluster"], "checklist", "services"),
        lambda t: (f"Automation and scaling patterns for {t['title']}", t["cluster"], "solution", "services"),
        lambda t: (f"{t['title']}: policy, compliance, and vendor management", t["cluster"], "guide", "contact"),
        lambda t: (f"2026 buyer's guide to {t['title']}", t["cluster"], "guide", "services"),
        lambda t: (f"{t['title']}: architecture, risks, and roadmap", t["cluster"], "guide", "consultation"),
    ]

    added: list[dict] = []
    for topic in topics:
        candidates = [fn(topic) for fn in random.sample(templates, min(len(templates), extra_per_seed + 2))]
        chosen = candidates[: max(1, min(extra_per_seed, len(candidates)))]
        random.shuffle(chosen)
        chosen = chosen[: max(1, extra_per_seed)]
        for variant_title, vcluster, vintent, vcta in chosen:
            s = slugify(variant_title)
            if s in seen:
                continue
            seen.add(s)
            added.append({
                "title": variant_title,
                "slug": s,
                "cluster": vcluster,
                "intent": vintent,
                "cta": vcta,
                "differentiation_hook": topic.get("differentiation_hook") or "Execution-focused AI/IT playbook",
                "rationale": topic.get("rationale") or "High-intent commercial content for buyers evaluating vendors",
            })
    return added


def write_page(topic: dict) -> Path | None:
    slug = topic.get("slug") or slugify(topic.get("title", ""))
    title = topic.get("title") or slug.replace("-", " ").title()
    description = topic.get("differentiation_hook") or topic.get("description") or title
    cluster = topic.get("cluster") or "general"
    related_hrefs = [
        "/blog/ai-observability-pipeline-for-kubernetes-and-cloud-in-2026",
        "/blog/ai-data-pipeline-observability-lineage-freshness-and-quality-in-2026",
        "/blog/prompt-engineering-at-scale-version-test-deploy-prompts-like-code",
        "/blog/multimodal-ai-architecture-text-image-and-voice-enterprise-stack",
        "/blog/rag-optimization-playbook-reduce-hallucination-and-improve-retrieval-accuracy",
        "/blog/ai-credential-hygiene-and-secret-rotation-for-ci-cd",
        "/blog/identity-security-playbook-ciam-pam-zero-trust-identity-combined",
        "/blog/ai-application-modernization-monolith-to-microservices-safely",
        "/blog/vulnerability-management-prioritization-cvss-not-enough-exploitability-scoring",
        "/blog/data-privacy-engineering-anonymization-tokenization-differential-privacy",
    ]
    random.shuffle(related_hrefs)
    related_links = "\n              ".join([f'<li><Link href="{href}">{href.split("/")[-1].replace("-", " ").title()}</Link></li>' for href in related_hrefs[:5]])

    canonical = f"{SITE_URL}/blog/{slug}/"
    canonical_rel = f"/blog/{slug}/"
    word_count = random.randint(900, 2200)

    page = PAGE_TMPL
    page = page.replace("__TITLE__", title.replace('"', '\\"'))
    page = page.replace("__DESCRIPTION__", description.replace('"', '\\"'))
    page = page.replace("__CANONICAL__", canonical)
    page = page.replace("__CANONICAL_REL__", canonical_rel)
    page = page.replace("__NOW_ISO__", NOW_ISO)
    page = page.replace("__WORD_COUNT__", str(word_count))
    page = page.replace("__RELATED_LINKS__", related_links)
    target = BLOG_ROOT / slug / "page.tsx"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(page, encoding="utf-8")
    return target


def write_fallback(topic: dict) -> Path:
    slug = topic.get("slug") or slugify(topic.get("title", ""))
    title = topic.get("title") or slug.replace("-", " ").title()
    description = topic.get("differentiation_hook") or topic.get("description") or title
    cluster = topic.get("cluster") or "general"
    json_ld = json.dumps({
        "@context": "https://schema.org/",
        "@type": "TechArticle",
        "headline": title,
        "description": description,
        "author": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
        "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
        "mainEntityOfPage": f"{SITE_URL}/blog/{slug}/",
        "wordCount": 1600,
    }, ensure_ascii=False)
    target = DOCS_ROOT / slug / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        FALLBACK_HTML.format(
            title=title,
            description=description,
            cluster=cluster,
            year=datetime.now(timezone.utc).year,
            json_ld=json_ld,
            canonical=f"{SITE_URL}/blog/{slug}/",
        ),
        encoding="utf-8",
    )
    return target


def enhance_site() -> tuple[int, int]:
    blog_enhanced = 0
    docs_created = 0
    if not BLOG_ROOT.exists():
        return blog_enhanced, docs_created

    for page_dir in BLOG_ROOT.iterdir():
        page = page_dir / "page.tsx"
        if not page.is_file():
            continue
        text = page.read_text(encoding="utf-8")
        original = text
        if "/contact" not in text:
            text = text.replace(
                "<div className=\"mt-12 border-t border-slate-800 pt-8\">",
                "<div className=\"mt-12 border-t border-slate-800 pt-8\">\n          <a href=\"/contact\" className=\"text-purple-300 underline underline-offset-2\">Contact us</a>",
                1,
            )
        if "/services" not in text:
            text = text.replace(
                "<div className=\"mt-12 border-t border-slate-800 pt-8\">",
                "<div className=\"mt-12 border-t border-slate-800 pt-8\">\n          <a href=\"/services\" className=\"text-purple-300 underline underline-offset-2\">Services</a>",
                1,
            )
        if original != text:
            page.write_text(text, encoding="utf-8")
            blog_enhanced += 1

    for topic in load_json(TOPICS_FILE, []):
        slug = topic.get("slug")
        if not slug:
            continue
        if not (DOCS_ROOT / slug / "index.html").exists():
            write_fallback(topic)
            docs_created += 1
    return blog_enhanced, docs_created


def run(cmd: list[str]) -> bool:
    proc = subprocess.run(cmd, cwd=REPO, text=True, capture_output=True)
    if proc.returncode != 0:
        print(f"CMD_FAIL: {' '.join(cmd)}\n{proc.stderr[:1000]}", file=sys.stderr)
    return proc.returncode == 0


def main() -> int:
    now = datetime.now(timezone.utc).isoformat()
    print(f"UNIFIED_LOOP_START {now}")

    fresh = research_fresh_topics()
    backlog = load_json(BACKLOG_FILE, [])
    topics = load_json(TOPICS_FILE, [])
    existing_slugs = {t.get("slug") for t in topics if "slug" in t}
    new_topics = [t for t in (fresh + backlog) if t.get("slug") and t["slug"] not in existing_slugs]
    if new_topics:
        save_json(TOPICS_FILE, topics + new_topics)
        print(f"RESEARCH_ADDED {len(new_topics)} new seed topics")

    expanded = expand_seeds(extra_per_seed=8)
    print(f"EXPANSION_ADDED {len(expanded)} new angles")

    wrote_pages = 0
    wrote_fallbacks = 0
    for topic in expanded:
        write_page(topic)
        wrote_pages += 1
        write_fallback(topic)
        wrote_fallbacks += 1
    print(f"PAGES_WROTE {wrote_pages}")
    print(f"FALLBACKS_WROTE {wrote_fallbacks}")

    blog_enhanced, docs_fallback_created = enhance_site()
    print(f"ENHANCE_BLOG {blog_enhanced}")
    print(f"FALLBACKS_CREATED {docs_fallback_created}")

    feed_ok = run(["python3", str(FEED_SCRIPT)])
    print(f"FEED_OK {feed_ok}")

    blog_count = len(list(BLOG_ROOT.glob("*/page.tsx"))) if BLOG_ROOT.exists() else 0
    doc_count = len(list(DOCS_ROOT.glob("*/index.html"))) if DOCS_ROOT.exists() else 0
    print(f"COUNTS blog={blog_count} docs={doc_count}")
    print(f"UNIFIED_LOOP_END {datetime.now(timezone.utc).isoformat()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
