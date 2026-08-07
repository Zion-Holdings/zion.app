#!/usr/bin/env python3
"""Generate static SEO blog posts into docs/blog."""
import os
import sys
import json
import datetime
import hashlib
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
DOCS_BLOG = REPO / "docs" / "blog"
TOPICS_FILE = REPO / "content-loop" / "topics.json"
LOG_DIR = REPO / "automation" / "content-loop" / "generated"
LOG_FILE = LOG_DIR / "ai-content-log.jsonl"

DEFAULT_TOPICS = [
    {"title": "AI IT Operations", "slug": "ai-it-operations-automation-2026"},
    {"title": "Cloud Cost Optimization", "slug": "cloud-cost-optimization-checklist-2026"},
    {"title": "Cybersecurity for MSPs", "slug": "cybersecurity-platform-msp-2026"},
    {"title": "Managed IT Services", "slug": "managed-it-services-small-business-2026"},
    {"title": "Data Analytics Platform", "slug": "data-analytics-platform-modern-enterprise-2026"},
    {"title": "Automation Orchestration", "slug": "automation-orchestration-enterprise-2026"},
]


def load_topics():
    try:
        return json.loads(TOPICS_FILE.read_text())
    except Exception:
        return DEFAULT_TOPICS


def existing_count():
    if not DOCS_BLOG.exists():
        return 0
    return len([p for p in DOCS_BLOG.iterdir() if p.is_dir()])


def slugify(text):
    return "-".join(text.lower().split())


def render_html(topic, n):
    title = topic["title"]
    slug = f"{topic['slug']}-{n}"
    return f"""<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} | Zion Tech Group</title>
<meta name="description" content="{title} — actionable insights for enterprise teams adopting AI and automation.">
<meta name="keywords" content="{slugify(title)}, ai, AI, automation, IT services">
<link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/">
<meta property="og:title" content="{title}"><meta property="og:description" content="Actionable insights for enterprise AI and automation teams.">
<meta property="og:type" content="article"><meta property="og:url" content="https://ziontechgroup.com/blog/{slug}/">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{title}"><meta name="twitter:description" content="Actionable insights for enterprise teams.">
<script type="application/ld+json">{{"@context":"https://***@type":"BlogPosting","headline":"{title}","description":"{title} — actionable insights.","author":{{"@type":"Organization","name":"Zion Tech Group"}},"publisher":{{"@type":"Organization","name":"Zion Tech Group","url":"https://ziontechgroup.com"}},"mainEntityOfPage":"https://ziontechgroup.com/blog/{slug}/","keywords":"{slugify(title)}, ai, AI, automation, IT services"}}</script>
</head><body>
<header><nav><a href="/">Zion Tech Group</a> · <a href="/services/">Services</a> · <a href="/blog/">Blog</a> · <a href="/contact/">Contact</a></nav></header>
<main><article><h1>{title}</h1><p class="lead">Actionable insights for enterprise teams adopting AI, automation, and modern IT operations.</p><div class="body"><h2>Executive Summary</h2>
<p>Organizations adopting {slugify(title)} can reduce operational costs, accelerate delivery, and improve governance across complex IT environments. This guide breaks down the core capabilities, implementation roadmap, and measurable business outcomes.</p>
<h2>Key Capabilities</h2>
<ul>
<li>Automated discovery and classification of workloads and data assets</li>
<li>Policy-as-code enforcement with continuous compliance validation</li>
<li>AI-assisted remediation for misconfigurations and anomalies</li>
<li>Unified visibility across cloud, on-premises, and edge environments</li>
<li>Cost optimization and rightsizing with usage forecasting</li>
</ul>
<h2>Implementation Roadmap</h2>
<ol>
<li>Assess current-state maturity and prioritize high-value use cases</li>
<li>Build platform foundations with identity, networking, and observability</li>
<li>Deploy automation pipelines with safety controls and rollback policies</li>
<li>Expand to adjacent domains with reusable integration patterns</li>
<li>Measure outcomes and iterate with quarterly reviews</li>
</ol>
<h2>Measurable Business Outcomes</h2>
<p>Enterprises typically see faster incident resolution, fewer outages, lower cloud spend, and higher employee satisfaction after implementing mature {slugify(title)} practices.</p>
<h2>Why Zion Tech Group</h2>
<p>We deliver production-ready solutions with proven methodologies, global support, and deep expertise across {slugify(title)} domains.</p>
</div><div class="related"><h3>Related Services</h3><p><a href="/services/data-analytics/">data analytics</a> | <a href="/services/cybersecurity/">cybersecurity</a> | <a href="/services/devops/">DevOps</a> | <a href="/services/ai/">AI</a> | <a href="/services/process-automation/">process automation</a> | <a href="/services/enterprise-it/">enterprise IT</a></p></div><div class="cta"><a href="/contact/" class="btn-primary">Get Your Custom Proposal →</a><p>📞 <a href="tel:13024640950">13024640950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p></div></article></main>
<footer><p>© 2026 Zion Tech Group. All rights reserved.</p></footer>
</body></html>"""


def main():
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 15
    topics = load_topics()
    base = existing_count()
    created = 0
    DOCS_BLOG.mkdir(parents=True, exist_ok=True)
    LOG_DIR.mkdir(parents=True, exist_ok=True)

    for i in range(count):
        topic = topics[i % len(topics)]
        n = base + i + 1
        slug = f"{topic['slug']}-{n}"
        post_dir = DOCS_BLOG / slug
        post_dir.mkdir(parents=True, exist_ok=True)
        html_path = post_dir / "index.html"
        html_path.write_text(render_html(topic, n), encoding="utf-8")
        created += 1
        log = {
            "ts": datetime.datetime.utcnow().isoformat() + "Z",
            "slug": slug,
            "title": topic["title"],
            "path": str(html_path.relative_to(REPO)),
        }
        with LOG_FILE.open("a", encoding="utf-8") as f:
            f.write(json.dumps(log) + "\n")

    print(f"created={created}")
    return created


if __name__ == "__main__":
    main()
