#!/usr/bin/env python3
"""
Zion Content Loop - Link Enhancer
Adds internal links and fixes missing metadata/canonical on existing blog posts.
"""
from __future__ import annotations

import json
import re
from datetime import date
from pathlib import Path

REPO_ROOT = Path("/data/data/com.termux/files/home/zion-support.github.io")
BLOG_DIR = REPO_ROOT / "app" / "blog"
SITE_URL = "https://ziontechgroup.com"
CALENDLY = "https://calendly.com/kleber-ziontechgroup"


def slug_to_title(slug: str) -> str:
    return slug.replace("-", " ").title()


def cluster_from_slug(slug: str) -> str:
    mapping = [
        ("observability", "observability"),
        ("support", "support"),
        ("security", "security"),
        ("data", "data"),
        ("automation", "automation"),
        ("ai", "ai"),
        ("it", "it"),
        ("cloud", "cloud"),
        ("micro-saas", "micro-saas"),
        ("devops", "devops"),
    ]
    for key, _ in mapping:
        if f"/{key}" in slug or f"-{key}-" in slug or slug.startswith(f"{key}-"):
            return key
    return "ai"


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


def service_link(cluster: str) -> str:
    return CLUSTER_LINKS.get(cluster, "/services")


def service_label(cluster: str) -> str:
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
    }.get(cluster, "AI services")


def build_minimal_article(slug: str, title: str, cluster: str, today: str) -> str:
    canonical = f"{SITE_URL}/blog/{slug}"
    description = f"{title}: practical execution model, measurable guardrails, and next actions for IT and AI leaders."
    lead = f"{title} requires measurable guardrails, repeatable workflows, and clear ownership."
    value = (
        "Focus on adoption sequencing, pilot evidence, and outcome measurement. "
        "Start with a small owned workflow, measure weekly, and expand only after the first workflow shows consistent improvement."
    )
    benefits = [
        "Reduce manual work without removing review checkpoints",
        "Create a repeatable baseline before expanding automation",
        "Connect improvements to measurable outcomes stakeholders can track",
    ]
    return "\n".join([
        "import { Metadata } from 'next';",
        "import Link from 'next/link';",
        "import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';",
        "import ArticleStructuredData from '@/components/ArticleStructuredData';",
        "",
        "export const metadata = {",
        "  title: '" + title + " | Zion Tech Group',",
        "  description: '" + description + "',",
        "  openGraph: {",
        "    title: '" + title + "',",
        "    description: '" + description + "',",
        "    url: '" + canonical + "',",
        "    type: 'article',",
        "  },",
        "  alternates: {",
        "    canonical: '" + canonical + "',",
        "  },",
        "};",
        "",
        "export default function Page() {",
        "  return (",
        "    <div className=\"relative min-h-screen bg-slate-950\">",
        "      <div className=\"pointer-events-none absolute inset-0 overflow-hidden\" aria-hidden=\"true\">",
        "        <div className=\"absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl\" />",
        "        <div className=\"absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl\" />",
        "      </div>",
        "",
        "      <article className=\"relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8\">",
        "        <SiteBreadcrumbs",
        "          items={[",
        "            { label: 'Home', href: '/' },",
        "            { label: 'Blog', href: '/blog' },",
        "            { label: '" + title + "' }",
        "          ]}",
        "          className=\"mb-8\"",
        "        />",
        "",
        "        <header className=\"mb-12\">",
        "          <div className=\"mb-4 flex-wrap items-center gap-3 text-sm flex\">",
        "            <time dateTime=\"" + today + "\" className=\"text-slate-400\">" + today + "</time>",
        "            <span className=\"rounded-full border border-violet-400/40 bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200\">Guide</span>",
        "          </div>",
        "          <h1 className=\"text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl\">" + title + "</h1>",
        "          <p className=\"mt-4 text-lg text-slate-300\">" + lead + "</p>",
        "        </header>",
        "",
        "        <div className=\"prose-invert max-w-none space-y-10\">",
        "          <section>",
        "            <h2 className=\"mb-4 text-2xl font-bold text-white\">Where this adds value</h2>",
        "            <p className=\"mb-4 leading-relaxed text-slate-300\">" + value + "</p>",
        "            <ul className=\"list-disc pl-6 text-slate-300 space-y-2\">",
        "              <li>" + benefits[0] + "</li>",
        "              <li>" + benefits[1] + "</li>",
        "              <li>" + benefits[2] + "</li>",
        "            </ul>",
        "          </section>",
        "",
        "          <section>",
        "            <h2 className=\"mb-4 text-2xl font-bold text-white\">How Zion Tech Group helps</h2>",
        "            <p className=\"mb-4 leading-relaxed text-slate-300\">Zion Tech Group delivers practical AI/IT solutions with measurable outcomes, clear ownership, and integration with existing tooling.</p>",
        "          </section>",
        "",
        "          <section>",
        "            <h2 className=\"mb-4 text-2xl font-bold text-white\">Next step</h2>",
        "            <p className=\"mb-4 leading-relaxed text-slate-300\">",
        "              If you want a practical plan, let’s discuss it. Browse our services at",
        "              {' '}",
        "              <Link href=\"" + service_link(cluster) + "\" className=\"text-violet-300 underline\">",
        "                " + service_label(cluster) + "",
        "              </Link>",
        "              , explore free tools at",
        "              {' '}",
        "              <Link href=\"" + SITE_URL + "\" className=\"text-violet-300 underline\">",
        "                " + SITE_URL + "",
        "              </Link>",
        "              , or schedule a call at",
        "              {' '}",
        "              <Link href=\"" + CALENDLY + "\" className=\"text-violet-300 underline\">",
        "                " + CALENDLY + "",
        "              </Link>",
        "              .",
        "            </p>",
        "          </section>",
        "        </div>",
        "",
        "        <div className=\"mt-16 rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-blue-900/40 p-8 text-center shadow-2xl sm:p-12\">",
        "          <h2 className=\"text-2xl font-bold text-white sm:text-3xl\">Want a practical execution plan?</h2>",
        "          <p className=\"mx-auto mt-4 max-w-2xl text-slate-200\">Get a short plan with the highest-impact first step.</p>",
        "          <div className=\"mt-8 flex flex-col justify-center gap-4 sm:flex-row\">",
        "            <Link href=\"" + CALENDLY + "\" className=\"rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100\">",
        "              Book Strategy Call",
        "            </Link>",
        "            <Link href=\"" + service_link(cluster) + "\" className=\"rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10\">",
        "              " + service_label(cluster) + "",
        "            </Link>",
        "          </div>",
        "        </div>",
        "",
        "        <div className=\"mt-12 border-t border-slate-800 pt-8\">",
        "          <Link href=\"/blog/\" className=\"text-sm font-medium text-violet-300 transition hover:text-violet-200\">",
        "            &larr; Back to all articles",
        "          </Link>",
        "        </div>",
        "      </article>",
        "    </div>",
        "  );",
        "}",
        "",
    ]) + "\n"


def fix_post(page: Path) -> dict | None:
    text = page.read_text(encoding="utf-8", errors="ignore")
    issues = []
    if "export const metadata" not in text:
        issues.append("missing_metadata")
    if "alternates" not in text or "canonical" not in text:
        issues.append("missing_canonical")
    if "under construction" in text.lower():
        issues.append("under_construction_placeholder")
    words = len(re.findall(r"[A-Za-zÀ-ÿ0-9]+", text))
    if words < 200:
        issues.append(f"thin_content:{words}")
    if not issues:
        return None
    slug = page.parent.name
    title = slug_to_title(slug)
    cluster = cluster_from_slug(slug)
    today = str(date.today())
    new_article = build_minimal_article(slug, title, cluster, today)
    page.write_text(new_article, encoding="utf-8")
    return {"slug": slug, "issues": issues, "words": words}


def main() -> int:
    fixed = 0
    examples = []
    if not BLOG_DIR.exists():
        print(json.dumps({"fixed": 0, "items": []}, ensure_ascii=False))
        return 0
    for page in sorted(BLOG_DIR.glob("*/page.tsx")):
        result = fix_post(page)
        if result:
            fixed += 1
            examples.append(result)
    print(json.dumps({"fixed": fixed, "items": examples[:20]}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
