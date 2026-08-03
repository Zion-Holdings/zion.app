#!/usr/bin/env python3
"""
Zion Content Loop v2
--------------------
Generates new unique blog posts, builds internal links, and rewrites thin posts.
Designed for continuous autonomous operation.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Iterable

REPO_ROOT = Path("/data/data/com.termux/files/home/zion-support.github.io")
BLOG_DIR = REPO_ROOT / "app" / "blog"
SITE_URL = "https://ziontechgroup.com"
CALENDLY = "https://calendly.com/kleber-ziontechgroup"
MIN_WORDS = 200
CLUSTER_LINKS = {
    "observability": "/services#observability",
    "support": "/services#support",
    "security": "/services#security",
    "data": "/services#data",
    "automation": "/services#automation",
    "ai": "/services#ai",
    "it": "/services#it",
    "cloud": "/services#cloud",
    "micro-saas": "/services#micro-saas",
    "devops": "/services#devops",
}
DEFAULT_CLUSTER_LINK = "/services"


@dataclass(frozen=True)
class Topic:
    slug: str
    title: str
    cluster: str
    intent: str
    cta: str = "services"
    summary: str = ""

    def service_link(self) -> str:
        return CLUSTER_LINKS.get(self.cluster, DEFAULT_CLUSTER_LINK)

    def service_label(self) -> str:
        return {
            "observability": "Observability services",
            "support": "Support automation",
            "security": "Security services",
            "data": "Data services",
            "automation": "Automation services",
            "ai": "AI services",
            "it": "IT services",
            "cloud": "Cloud services",
            "micro-saas": "Micro-SaaS products",
            "devops": "DevOps services",
        }.get(self.cluster, "AI services")


def normalize_slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    if not BLOG_DIR.exists():
        return slugs
    for child in BLOG_DIR.iterdir():
        if child.is_dir() and (child / "page.tsx").exists():
            slugs.add(child.name)
    return slugs


def next_unique_slug(base_slug: str) -> str | None:
    base = normalize_slug(base_slug)
    if not base:
        return None
    existing = existing_slugs()
    existing_norm = {normalize_slug(s) for s in existing}
    if base not in existing_norm:
        return base
    for idx in range(2, 100):
        candidate = f"{base}-{idx}"
        if candidate not in existing_norm:
            return candidate
    return None


def load_topic_queue() -> list[Topic]:
    queue_path = REPO_ROOT / "content-loop" / "topics.json"
    if not queue_path.exists():
        return []
    data = json.loads(queue_path.read_text(encoding="utf-8"))
    allowed = {"slug", "title", "cluster", "intent", "cta", "summary"}
    cleaned = []
    for item in data:
        if not item.get("slug") or not item.get("title"):
            continue
        cleaned.append({k: item[k] for k in item if k in allowed})
    return [Topic(**item) for item in cleaned]


def append_topic_queue(topics: Iterable[Topic]) -> None:
    queue_path = REPO_ROOT / "content-loop" / "topics.json"
    existing: list[dict] = []
    if queue_path.exists():
        existing = json.loads(queue_path.read_text(encoding="utf-8"))
    existing_map = {normalize_slug(item.get("slug", "")): item for item in existing}
    for topic in topics:
        existing_map[normalize_slug(topic.slug)] = {
            "slug": topic.slug,
            "title": topic.title,
            "cluster": topic.cluster,
            "intent": topic.intent,
            "cta": topic.cta,
            "summary": topic.summary,
        }
    queue_path.write_text(
        json.dumps(list(existing_map.values()), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def cluster_keywords(cluster: str) -> tuple[str, str, str]:
    table = {
        "observability": ("incident response", "signal-to-noise reduction", "automated root-cause hints"),
        "support": ("ticket triage", "response consistency", "escalation routing"),
        "security": ("patch latency", "exposure windows", "compliance evidence"),
        "data": ("pipeline trust", "schema drift", "governance without bottlenecks"),
        "automation": ("runbook automation", "handoff friction", "deployment risk"),
        "ai": ("adoption sequencing", "pilot evidence", "outcome measurement"),
        "it": ("capacity planning", "endpoint reliability", "vendor coordination"),
        "cloud": ("cost attribution", "deployment consistency", "resilience testing"),
    }
    return table.get(cluster, ("execution clarity", "outcome measurement", "operational discipline"))


ARTICLE_TSX = """
import { Metadata } from 'next';
import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: '__TITLE__ | Zion Tech Group',
  description: '__DESCRIPTION__',
  openGraph: {
    title: '__TITLE__',
    description: '__DESCRIPTION__',
    url: '__CANONICAL__',
    type: 'article',
  },
  alternates: {
    canonical: '__CANONICAL__',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: '__TITLE__' }
          ]}
          className="mb-8"
        />

        <header className="mb-12">
          <div className="mb-4 flex-wrap items-center gap-3 text-sm flex">
            <time dateTime="__DATE__" className="text-slate-400">__DATE__</time>
            <span className="rounded-full border border-violet-400/40 bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">__INTENT__</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">__TITLE__</h1>
          <p className="mt-4 text-lg text-slate-300">__LEAD__</p>
        </header>

        <div className="prose-invert max-w-none space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Where this adds value</h2>
            <p className="mb-4 leading-relaxed text-slate-300">__VALUE_PARAGRAPH__</p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>__BENEFIT_1__</li>
              <li>__BENEFIT_2__</li>
              <li>__BENEFIT_3__</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">How Zion Tech Group helps</h2>
            <p className="mb-4 leading-relaxed text-slate-300">__ZION_PARAGRAPH__</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Next step</h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              If you want a practical plan, let’s discuss it. Browse our services at
              {' '}
              <Link href="__SERVICE_LINK__" className="text-violet-300 underline">
                __SERVICE_LABEL__
              </Link>
              , explore free tools at
              {' '}
              <Link href="__SITE_URL__" className="text-violet-300 underline">
                __SITE_URL__
              </Link>
              , or schedule a call at
              {' '}
              <Link href="__CALENDLY__" className="text-violet-300 underline">
                __CALENDLY__
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-blue-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Want a practical execution plan?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">Get a short plan with the highest-impact first step.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="__CALENDLY__" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Book Strategy Call
            </Link>
            <Link href="__SERVICE_LINK__" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              __SERVICE_LABEL__
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/blog/" className="text-sm font-medium text-violet-300 transition hover:text-violet-200">
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
""".strip() + "\n"


def build_article(topic: Topic, published_at: str) -> str:
    keyword_1, keyword_2, keyword_3 = cluster_keywords(topic.cluster)
    description = f"{topic.title}: practical execution model, measurable guardrails, and next actions for IT and AI leaders."
    canonical = f"{SITE_URL}/blog/{topic.slug}"
    lead = topic.summary or (
        f"{topic.title.replace(' in 2026','').replace(' for ',' ')} "
        "requires measurable guardrails, repeatable workflows, and clear ownership."
    )
    value = (
        f"Focus on {keyword_1}, {keyword_2}, and {keyword_3}. "
        "Start with a small owned workflow, measure weekly, and expand only after "
        "the first workflow shows consistent improvement."
    )
    benefits = [
        f"Reduce manual work tied to {keyword_1} without removing review checkpoints",
        f"Create a repeatable baseline for {keyword_2} before expanding automation",
        f"Connect improvements to measurable {keyword_3} stakeholders can track",
    ]
    zion = (
        "Zion Tech Group delivers practical AI/IT solutions with measurable outcomes, "
        "clear ownership, and integration with existing tooling."
    )
    return (
        ARTICLE_TSX.replace("__TITLE__", topic.title)
        .replace("__DESCRIPTION__", description)
        .replace("__CANONICAL__", canonical)
        .replace("__DATE__", published_at)
        .replace("__INTENT__", topic.intent.title())
        .replace("__LEAD__", lead)
        .replace("__VALUE_PARAGRAPH__", value)
        .replace("__BENEFIT_1__", benefits[0])
        .replace("__BENEFIT_2__", benefits[1])
        .replace("__BENEFIT_3__", benefits[2])
        .replace("__ZION_PARAGRAPH__", zion)
        .replace("__SERVICE_LINK__", topic.service_link())
        .replace("__SERVICE_LABEL__", topic.service_label())
        .replace("__SITE_URL__", SITE_URL)
        .replace("__CALENDLY__", CALENDLY)
    )


def word_count(text: str) -> int:
    return len(re.findall(r"[A-Za-zÀ-ÿ0-9]+", text))


def validate_article(path: Path) -> list[str]:
    errors: list[str] = []
    if not path.exists():
        return ["missing"]
    text = path.read_text(encoding="utf-8", errors="ignore")
    if word_count(text) < MIN_WORDS:
        errors.append(f"thin_content:{word_count(text)}")
    if "export const metadata" not in text:
        errors.append("missing_metadata")
    if "alternates" not in text or "canonical" not in text:
        errors.append("missing_canonical")
    if "under construction" in text.lower():
        errors.append("under_construction_placeholder")
    return errors


def audit_blog(limit: int = 25) -> dict:
    report = {"total": 0, "valid": 0, "thin_or_invalid": 0, "examples": []}
    if not BLOG_DIR.exists():
        return report
    for page in sorted(BLOG_DIR.glob("*/page.tsx")):
        report["total"] += 1
        issues = validate_article(page)
        if issues:
            report["thin_or_invalid"] += 1
            report["examples"].append({"slug": page.parent.name, "issues": issues})
        else:
            report["valid"] += 1
    report["examples"] = report["examples"][:limit]
    return report


def find_thin_posts(min_words: int = 220) -> list[Path]:
    thin: list[Path] = []
    if not BLOG_DIR.exists():
        return thin
    for page in BLOG_DIR.glob("*/page.tsx"):
        text = page.read_text(encoding="utf-8", errors="ignore")
        if word_count(text) < min_words:
            thin.append(page)
    return thin


def rewrite_thin_posts() -> dict:
    rewritten: list[dict] = []
    for page in find_thin_posts():
        slug = page.parent.name
        cluster = "ai"
        for key in CLUSTER_LINKS:
            if f"/{key}" in slug or f"-{key}-" in slug or slug.startswith(f"{key}-"):
                cluster = key
                break
        topic = Topic(slug=slug, title=slug.replace("-", " ").title(), cluster=cluster, intent="guide")
        article = build_article(topic, str(date.today()))
        page.write_text(article, encoding="utf-8")
        issues = validate_article(page)
        if not issues:
            rewritten.append({"slug": slug, "path": str(page)})
    return {"rewritten": len(rewritten), "items": rewritten}


def publish_new(count: int, expand_existing: bool = True) -> dict:
    queue = load_topic_queue()
    existing = existing_slugs()
    existing_norm = {normalize_slug(s) for s in existing}
    published: list[dict] = []
    for topic in queue:
        if len(published) >= count:
            break
        norm = normalize_slug(topic.slug)
        if not norm or norm in existing_norm:
            continue
        unique = next_unique_slug(topic.slug)
        if not unique:
            continue
        target = BLOG_DIR / unique / "page.tsx"
        target.parent.mkdir(parents=True, exist_ok=True)
        final_topic = Topic(
            slug=unique,
            title=topic.title,
            cluster=topic.cluster,
            intent=topic.intent,
            cta=topic.cta,
            summary=topic.summary,
        )
        article = build_article(final_topic, str(date.today()))
        target.write_text(article, encoding="utf-8")
        issues = validate_article(target)
        if issues:
            target.unlink(missing_ok=True)
            continue
        published.append({"slug": unique, "title": final_topic.title, "path": str(target)})
        existing_norm.add(unique)
    if expand_existing and len(published) < count:
        for page in sorted(BLOG_DIR.glob("*/page.tsx")):
            if len(published) >= count:
                break
            text = page.read_text(encoding="utf-8", errors="ignore")
            if word_count(text) >= MIN_WORDS:
                continue
            slug = page.parent.name
            cluster = "ai"
            for key in CLUSTER_LINKS:
                if f"/{key}" in slug or f"-{key}-" in slug or slug.startswith(f"{key}-"):
                    cluster = key
                    break
            topic = Topic(slug=slug, title=slug.replace("-", " ").title(), cluster=cluster, intent="guide")
            article = build_article(topic, str(date.today()))
            page.write_text(article, encoding="utf-8")
            issues = validate_article(page)
            if not issues:
                published.append({"slug": slug, "title": topic.title, "path": str(page), "action": "rewrite"})
    return {"published": len(published), "items": published}


def main() -> int:
    parser = argparse.ArgumentParser(description="Zion content loop")
    parser.add_argument("--count", type=int, default=5, help="max new posts to publish")
    parser.add_argument("--audit", action="store_true", help="audit blog quality")
    parser.add_argument("--topics", action="store_true", help="show planned topics only")
    parser.add_argument("--rewrite-thin", action="store_true", help="rewrite thin posts")
    args = parser.parse_args()

    if args.topics:
        queue = load_topic_queue()
        print(json.dumps({"topics": [t.__dict__ for t in queue]}, ensure_ascii=False))
        return 0

    if args.audit:
        report = audit_blog()
        print(json.dumps(report, ensure_ascii=False))
        return 0

    if args.rewrite_thin:
        result = rewrite_thin_posts()
        print(json.dumps(result, ensure_ascii=False))
        return 0

    result = publish_new(args.count)
    print(json.dumps({"published": len(result.get("items", [])), "items": result.get("items", [])[:3]}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
