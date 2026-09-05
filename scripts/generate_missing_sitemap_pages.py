#!/usr/bin/env python3
"""Generate static marketing pages for sitemap-0.xml URLs missing under public/.

GitHub Pages serves files, not Next.js. This script writes self-contained HTML
that matches Zion's dark public/ pages (Discovery $99, plans, contact).
"""
from __future__ import annotations

import hashlib
import html
import json
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SITEMAP = ROOT / "sitemap-0.xml"
SITE = "https://ziontechgroup.com"
TODAY = date.today().isoformat()

SKIP_IF_PUBLIC_EXISTS = True
MIN_KEEP_BYTES = 400  # keep existing public pages that are not empty stubs
GENERATED_MARK = "scoped work after Discovery"

CATEGORIES = [
    ("security", ("security", "cyber", "soc", "siem", "waf", "zero-trust", "identity", "iam", "mfa", "ransomware", "threat", "vuln", "pentest", "dlp", "firewall", "compliance", "gdpr", "hipaa", "lgpd", "audit")),
    ("cloud", ("cloud", "aws", "azure", "gcp", "finops", "kubernetes", "k8s", "devops", "sre", "infra", "migration", "iac", "terraform", "multi-cloud")),
    ("data", ("data", "analytics", "bi", "warehouse", "lakehouse", "etl", "pipeline", "forecast", "mlops", "observability", "vector", "rag")),
    ("automation", ("automat", "workflow", "rpa", "agent", "orchestr", "n8n", "composio", "zapier", "low-code", "no-code")),
    ("healthcare", ("health", "clinic", "medical", "patient", "pharma", "life-scienc", "telemedicine", "hipaa")),
    ("finance", ("financ", "fintech", "bank", "payment", "fraud", "invoice", "billing", "treasury", "underwrit", "claim")),
    ("sales", ("sales", "crm", "lead", "bdr", "sdr", "revops", "pipeline", "outreach", "marketing", "churn", "retention", "nurtur", "proposal")),
    ("support", ("support", "help-desk", "helpdesk", "itsm", "ticket", "chatbot", "customer", "cx", "whatsapp", "voice")),
    ("industry", ("manufactur", "logistics", "supply", "fleet", "warehouse", "retail", "ecommerce", "agricult", "energy", "construction", "insurance", "legal", "education", "government")),
    ("devtools", ("code", "devsecops", "cicd", "ci-cd", "review", "api", "sdk", "testing", "qa")),
]

CATEGORY_COPY = {
    "security": {
        "label": "Cybersecurity & compliance",
        "pitch": "Zion designs detection, response, and compliance workflows that sit on the tools you already run — SIEM, identity, ticketing, and chat — instead of dropping another unread dashboard on the SOC.",
        "features": [
            "Alert triage and enrichment with your existing SIEM and ITSM",
            "Identity and access reviews with auditable evidence packs",
            "Playbooks for phishing, ransomware, and insider-risk events",
            "LGPD, GDPR, and industry-control mapping for LATAM + US teams",
        ],
        "outcomes": [
            "Fewer unowned alerts and faster mean time to acknowledge",
            "Repeatable evidence for audits instead of weekend screenshot hunts",
            "A security operating cadence your MSP or internal team can keep",
        ],
    },
    "cloud": {
        "label": "Cloud, FinOps & platform",
        "pitch": "Zion scopes cloud work the way operators actually live it: cost, reliability, and change safety. We start from the current account layout, then automate the toil that burns your on-call.",
        "features": [
            "FinOps baselines: idle spend, rightsizing, reserved-capacity gaps",
            "CI/CD and platform guardrails without a 12-month replatform",
            "Observability that pages humans only when action is required",
            "Migration waves with rollback, not a single cutover weekend",
        ],
        "outcomes": [
            "A written cost and reliability baseline after Discovery",
            "Automation that your team can operate without Zion in the loop",
            "Fewer surprise invoices and fewer 3 a.m. deploys",
        ],
    },
    "data": {
        "label": "Data, analytics & AI operations",
        "pitch": "Most “AI programs” stall on messy data and missing owners. Zion builds the pipelines, retrieval, and reporting that make models useful to operators — not just a slide in a board deck.",
        "features": [
            "Source-to-warehouse contracts and quality checks",
            "RAG / knowledge systems grounded in your documents and tickets",
            "Forecasting and anomaly detection tied to a business KPI",
            "MLOps: evaluation, drift, and rollback — not a notebook in Slack",
        ],
        "outcomes": [
            "One trusted number for the decision you actually make weekly",
            "Retrieval that cites sources instead of inventing policy",
            "A backlog of automations ranked by impact × feasibility",
        ],
    },
    "automation": {
        "label": "AI agents & workflow automation",
        "pitch": "Zion implements agent-native automation on Composio and complementary tools (n8n, Make, custom workers). We do not sell a boxed RPA SKU. Work is scoped after a $99 Discovery.",
        "features": [
            "Workflow audit: where humans copy-paste between SaaS apps",
            "Agent architecture: models, tools, triggers, and guardrails",
            "Managed OAuth and tool routing across 1,000+ apps via Composio",
            "Production hardening: retries, idempotency, audit logs, SLAs",
        ],
        "outcomes": [
            "Hours returned to operators in the first 30–60 days",
            "Automations your team can extend without a rewrite",
            "A roadmap that separates quick wins from multi-system work",
        ],
    },
    "healthcare": {
        "label": "Healthcare & life sciences",
        "pitch": "Zion builds operational AI for clinics, payers, and life-science teams with privacy constraints first: least-privilege access, audit trails, and no model training on PHI unless you contract it.",
        "features": [
            "Intake, scheduling, and documentation assist — not a diagnosis SKU",
            "Claims and prior-auth packet assembly from existing systems",
            "Knowledge assistants over approved clinical and policy corpora",
            "HIPAA / LGPD-aware architecture reviews before any agent goes live",
        ],
        "outcomes": [
            "Less clerical time per encounter or claim",
            "Clear data-flow diagrams for compliance and legal",
            "A scoped pilot with success metrics before a broader rollout",
        ],
    },
    "finance": {
        "label": "Finance, fintech & risk",
        "pitch": "Zion automates the finance and risk work that already lives in email, ERP, and spreadsheets — close support, fraud queues, invoicing, and exception handling — with humans still on the approval path.",
        "features": [
            "Invoice, expense, and exception routing with audit trails",
            "Fraud and anomaly queues enriched before an analyst opens the case",
            "Cash and demand signals that update the same dashboard weekly",
            "Controls that match how your controller actually signs off",
        ],
        "outcomes": [
            "Shorter close and fewer lost invoices",
            "Analysts spending time on judgment, not copy-paste",
            "A written control story for internal audit",
        ],
    },
    "sales": {
        "label": "Revenue operations & growth",
        "pitch": "Zion builds the lead, enrichment, and follow-up machinery that IT and MSP commercial teams need in LATAM and the US — without pretending a chatbot is a sales team.",
        "features": [
            "ICP-matched discovery and enrichment from public + CRM sources",
            "Speed-to-lead routing across WhatsApp, email, and voice",
            "Proposal and SOW drafts from Discovery notes — you still approve",
            "Partner / channel enablement kits for recurring AI services",
        ],
        "outcomes": [
            "Faster first response on inbound and outbound",
            "Cleaner CRM, fewer duplicate sequences",
            "A repeatable motion your closers can run next quarter",
        ],
    },
    "support": {
        "label": "IT support, ITSM & customer operations",
        "pitch": "Zion modernizes help desk and customer operations with ticket intelligence, knowledge retrieval, and voice/chat agents that escalate cleanly to humans.",
        "features": [
            "Ticket classification, routing, and suggested resolutions",
            "RAG over your KB, runbooks, and closed tickets",
            "WhatsApp / email / voice intake with CRM write-back",
            "QA sampling so you see what the agent actually said",
        ],
        "outcomes": [
            "Lower first-response time without hiring a night shift first",
            "A knowledge base that stays current because agents expose gaps",
            "Metrics your MSP or internal IT can put on a weekly review",
        ],
    },
    "industry": {
        "label": "Industry operations",
        "pitch": "Zion applies AI and IT automation to the operating loop of a specific industry — inventory, routing, claims, inspections, or field service — after we see how the work is done today.",
        "features": [
            "Process map from the people who run the shift, not a generic template",
            "Integrations with the ERP, WMS, TMS, or core system you already pay for",
            "Exception handling that pages a human when the model is unsure",
            "KPI design so the pilot has a number, not a vibe",
        ],
        "outcomes": [
            "One high-value loop automated before we talk about a platform",
            "Operators who trust the tool because they helped design the exceptions",
            "A commercial path from Discovery → pilot → retainer",
        ],
    },
    "devtools": {
        "label": "Engineering productivity & DevSecOps",
        "pitch": "Zion shortens the path from commit to production: review assist, pipeline reliability, API governance, and security checks that developers will actually keep enabled.",
        "features": [
            "PR review and test-gap hints grounded in your repo conventions",
            "CI failure triage and flaky-test clustering",
            "API catalogs, gateways, and contract tests for the services you ship",
            "Secret scanning and dependency risk in the same pipeline, not a side tool",
        ],
        "outcomes": [
            "Fewer Friday fire drills from broken main",
            "Review time spent on design, not nits the linter already knows",
            "A delivery dashboard engineering and the CEO can both read",
        ],
    },
    "general": {
        "label": "AI & IT services",
        "pitch": "Zion Tech Group is an AI and IT services firm. We do not sell leftover catalog SKUs. Nested URLs describe a capability we can scope after a $99 Discovery — then implement as a project or monthly retainer.",
        "features": [
            "Discovery: systems, owners, and the decision this work is supposed to change",
            "Architecture: models, integrations, data boundaries, and fallbacks",
            "Implementation on Composio, custom workers, and your current SaaS stack",
            "Handoff: runbooks, monitoring, and a commercial path (Starter or Growth)",
        ],
        "outcomes": [
            "A written opportunity map instead of a tool demo",
            "Production automation with an owner, not a forgotten Zap",
            "Pricing that matches scope — see /plans/ for live numbers",
        ],
    },
}

STEPS = [
    ("Discovery ($99)", "We map the workflow, systems, and the KPI this page is supposed to move. No packaged SKU is assumed."),
    ("Design", "Architecture, data boundaries, human approvals, and the smallest useful pilot."),
    ("Build", "Agents, integrations, and dashboards in your environment — Composio-first when apps must talk."),
    ("Operate", "Runbooks, monitoring, and a retainer if you want Zion to keep the loop healthy."),
]

RELATED = [
    ("/services/", "All services"),
    ("/plans/", "Live prices"),
    ("/booking/", "Book Discovery"),
    ("/blog/", "Field notes"),
    ("/contact/", "Contact"),
    ("/use-cases/", "Use cases"),
]


def slug_title(slug: str) -> str:
    slug = slug.strip("/")
    slug = re.sub(r"-20\d{2}-\d{3,}$", "", slug)
    slug = re.sub(r"-20\d{2}$", "", slug)
    words = [w for w in slug.split("-") if w]
    small = {"and", "or", "of", "for", "the", "in", "to", "vs", "a", "an", "on"}
    out = []
    for i, w in enumerate(words):
        if w.lower() in ("ai", "it", "iot", "api", "ml", "qa", "hr", "erp", "crm", "soc", "rag", "msp", "sla"):
            out.append(w.upper())
        elif i > 0 and w.lower() in small:
            out.append(w.lower())
        else:
            out.append(w.capitalize())
    return " ".join(out) or "Zion Tech Group"


def categorize(path: str) -> str:
    blob = path.lower()
    scores = {k: 0 for k in CATEGORY_COPY}
    for name, keys in CATEGORIES:
        scores[name] = sum(1 for k in keys if k in blob)
    best = max(scores, key=scores.get)
    return best if scores[best] else "general"


def pick(items: list[str], seed: str, n: int) -> list[str]:
    h = int(hashlib.sha256(seed.encode()).hexdigest(), 16)
    out = []
    for i in range(n):
        out.append(items[(h + i * 7) % len(items)])
    # unique preserve order
    seen = set()
    uniq = []
    for x in out:
        if x not in seen:
            seen.add(x)
            uniq.append(x)
    return uniq


def escape(s: str) -> str:
    return html.escape(s, quote=True)


CSS = """
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(160deg,#020617 0%,#0f172a 45%,#1e1b4b 100%);color:#e2e8f0;line-height:1.65;min-height:100vh}
a{color:#67e8f9;text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:960px;margin:0 auto;padding:28px 20px 64px}
nav.top{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-bottom:28px;font-size:.92rem}
nav.top .brand{font-weight:800;font-size:1.15rem;background:linear-gradient(135deg,#00d4ff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.badge{display:inline-block;background:rgba(167,139,250,.15);border:1px solid rgba(167,139,250,.35);color:#c4b5fd;border-radius:999px;padding:3px 10px;font-size:.75rem;font-weight:600;letter-spacing:.02em}
h1{font-size:clamp(1.7rem,3vw,2.4rem);line-height:1.2;margin:12px 0 12px;background:linear-gradient(135deg,#e2e8f0,#a5b4fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.lead{color:#cbd5e1;font-size:1.08rem;margin-bottom:24px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:20px 0}
.card{background:rgba(15,23,42,.62);border:1px solid rgba(124,58,237,.28);border-radius:14px;padding:18px}
.card h3{margin:0 0 8px;color:#c4b5fd;font-size:1.02rem}
.card p,.card li{color:#cbd5e1;font-size:.95rem}
ol.steps{padding-left:20px}ol.steps li{margin:8px 0}
.cta{margin:32px 0;padding:22px;border-radius:16px;background:linear-gradient(135deg,rgba(0,105,255,.25),rgba(124,58,237,.25));border:1px solid rgba(0,212,255,.25);text-align:center}
.btn{display:inline-block;margin:6px;padding:12px 20px;border-radius:12px;font-weight:700;background:linear-gradient(135deg,#0069ff,#00d4ff);color:#fff}
.btn.alt{background:transparent;border:1px solid rgba(167,139,250,.5);color:#e2e8f0}
footer{margin-top:48px;padding-top:20px;border-top:1px solid rgba(148,163,184,.2);color:#94a3b8;font-size:.88rem}
ul.clean{padding-left:18px}ul.clean li{margin:6px 0}
.crumb{color:#94a3b8;font-size:.85rem;margin-bottom:10px}
.crumb a{color:#a5b4fc}
"""


def chrome(title: str, desc: str, canonical: str, body: str, schema_type: str = "Service", extra_head: str = "") -> str:
    payloads = {
        "Service": {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": SITE,
                "email": "kleber@ziontechgroup.com",
                "telephone": "+1 302 464 0950",
            },
            "description": desc,
            "areaServed": "Worldwide",
            "url": canonical,
        },
        "Article": {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": desc,
            "author": {"@type": "Organization", "name": "Zion Tech Group"},
            "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": SITE},
            "datePublished": TODAY,
            "mainEntityOfPage": canonical,
        },
        "WebPage": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": desc,
            "url": canonical,
            "publisher": {"@type": "Organization", "name": "Zion Tech Group"},
        },
    }
    payload = payloads.get(schema_type)
    json_block = f'<script type="application/ld+json">{json.dumps(payload, ensure_ascii=False)}</script>' if payload else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(title)} | Zion Tech Group</title>
<meta name="description" content="{escape(desc)}">
<link rel="canonical" href="{escape(canonical)}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="{escape(title)} | Zion Tech Group">
<meta property="og:description" content="{escape(desc)}">
<meta property="og:url" content="{escape(canonical)}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<style>{CSS}</style>
{json_block}
{extra_head}
</head>
<body>
<div class="wrap">
<nav class="top" aria-label="Primary">
  <a class="brand" href="/">Zion Tech Group</a>
  <a href="/services/">Services</a>
  <a href="/plans/">Plans</a>
  <a href="/blog/">Blog</a>
  <a href="/booking/">Book $99</a>
  <a href="/contact/">Contact</a>
</nav>
{body}
<footer>
  <p>© {date.today().year} Zion Tech Group · 364 E Main St STE 1008, Middletown, DE 19709 · <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · +1 302 464 0950</p>
  <p><a href="/">Home</a> · <a href="/services/">Services</a> · <a href="/plans/">Plans</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
</footer>
</div>
</body>
</html>
"""


def service_body(title: str, path: str, cat: str) -> str:
    c = CATEGORY_COPY[cat]
    topic = title
    features = c["features"]
    outcomes = c["outcomes"]
    feat_html = "".join(f"<li>{escape(x)}</li>" for x in features)
    out_html = "".join(f"<li>{escape(x)}</li>" for x in outcomes)
    steps = "".join(f"<li><strong>{escape(n)}</strong> — {escape(d)}</li>" for n, d in STEPS)
    related = " · ".join(f'<a href="{h}">{escape(l)}</a>' for h, l in RELATED)
    who = pick(
        [
            "IT directors and MSPs who need a measurable operating loop, not another unused license",
            "Operators who already live in Slack, email, WhatsApp, and a CRM that is only half true",
            "Founders in LATAM and the US who want bilingual delivery and a written commercial path",
            "Security, finance, or ops leads who will not approve an agent without an audit trail",
        ],
        path,
        3,
    )
    who_html = "".join(f"<li>{escape(x)}</li>" for x in who)
    extra = pick(
        [
            f"This URL describes a {c['label'].lower()} capability. It is not a self-serve checkout SKU.",
            "If a previous sitemap advertised this path without a file, this page is the real closer: scope first, then build.",
            "Zion has delivered automation for fintech, healthcare, logistics, SaaS, and professional services — the pattern transfers; the integrations do not.",
            "Composio is our preferred action layer when an agent must use SaaS apps. We will say so if a simpler n8n or API job is enough.",
        ],
        path + "x",
        2,
    )
    extra_html = "".join(f"<p>{escape(x)}</p>" for x in extra)
    return f"""
<p class="crumb"><a href="/">Home</a> / <a href="/services/">Services</a> / {escape(title)}</p>
<span class="badge">{escape(c['label'])}</span>
<h1>{escape(title)}</h1>
<p class="lead">{escape(c['pitch'])} This page covers <strong>{escape(topic)}</strong> as Zion actually delivers it: scoped work after Discovery, then a pilot or retainer.</p>
<section>
  <h2>What we deliver</h2>
  <div class="grid">
    <div class="card"><h3>Capability</h3><ul class="clean">{feat_html}</ul></div>
    <div class="card"><h3>Outcomes we design for</h3><ul class="clean">{out_html}</ul></div>
  </div>
  {extra_html}
</section>
<section>
  <h2>How the engagement runs</h2>
  <ol class="steps">{steps}</ol>
</section>
<section>
  <h2>Who this is for</h2>
  <ul class="clean">{who_html}</ul>
</section>
<section>
  <h2>Commercial path</h2>
  <p>Live prices live on <a href="/plans/">/plans/</a>. Typical sequence: Discovery $99 → Consulting $499 → Starter project or Growth retainer. We will not invent a catalog price for {escape(topic)} before we have seen your stack.</p>
</section>
<div class="cta">
  <p><strong>Scope {escape(topic)} the honest way.</strong></p>
  <a class="btn" href="/booking/">Book $99 Discovery</a>
  <a class="btn alt" href="/plans/">See plans</a>
  <a class="btn alt" href="mailto:kleber@ziontechgroup.com?subject={escape(title)}">Email Zion</a>
</div>
<p>{related}</p>
"""


def blog_body(title: str, path: str, cat: str) -> str:
    c = CATEGORY_COPY[cat]
    topic = title
    paras = [
        f"Teams searching for {topic.lower()} usually already have tools. The gap is ownership, data quality, and a loop that survives the first month.",
        c["pitch"],
        "Zion writes these notes from delivery work — MSPs, LATAM operators, and US mid-market teams — not from a generic content farm.",
    ]
    lis = "".join(f"<li>{escape(x)}</li>" for x in c["features"][:4])
    outs = "".join(f"<li>{escape(x)}</li>" for x in c["outcomes"])
    return f"""
<p class="crumb"><a href="/">Home</a> / <a href="/blog/">Blog</a> / {escape(title)}</p>
<span class="badge">Field note · {escape(c['label'])}</span>
<h1>{escape(title)}</h1>
<p class="lead">{escape(paras[0])}</p>
<article>
  <h2>Why this matters in 2026</h2>
  <p>{escape(paras[1])}</p>
  <p>{escape(paras[2])}</p>
  <h2>What actually works</h2>
  <ul class="clean">{lis}</ul>
  <h2>What to measure</h2>
  <ul class="clean">{outs}</ul>
  <h2>How Zion helps</h2>
  <p>Start with a $99 Discovery if you want a written map. Implementation is a project or Growth retainer — see <a href="/plans/">plans</a>. Related services live under <a href="/services/">/services/</a>.</p>
</article>
<div class="cta">
  <p><strong>Turn this article into a scoped engagement.</strong></p>
  <a class="btn" href="/booking/">Book Discovery</a>
  <a class="btn alt" href="/services/">Browse services</a>
</div>
"""


def generic_body(title: str, path: str, cat: str) -> str:
    c = CATEGORY_COPY[cat]
    return f"""
<p class="crumb"><a href="/">Home</a> / {escape(title)}</p>
<span class="badge">{escape(c['label'])}</span>
<h1>{escape(title)}</h1>
<p class="lead">{escape(c['pitch'])}</p>
<div class="grid">
  <div class="card"><h3>Start here</h3><p>Book the $99 AI/IT Discovery. We will tell you if this path is a project, a retainer, or the wrong problem.</p></div>
  <div class="card"><h3>Prices</h3><p>Discovery $99 · Consulting $499 · Starter from $2,500 · Growth $8,000/month. Details on <a href="/plans/">/plans/</a>.</p></div>
  <div class="card"><h3>Stack</h3><p>Composio, custom workers, and the SaaS you already pay for. We do not require a rip-and-replace.</p></div>
</div>
<div class="cta">
  <a class="btn" href="/booking/">Book $99 Discovery</a>
  <a class="btn alt" href="/services/">Services</a>
  <a class="btn alt" href="/contact/">Contact</a>
</div>
"""


def redirect_page(canonical: str, dest: str, title: str) -> str:
    dest_abs = dest if dest.startswith("http") else SITE + dest
    extra = f'<meta http-equiv="refresh" content="0; url={escape(dest)}">'
    body = f"""
<h1>{escape(title)}</h1>
<p>This alias moved. Continue to <a href="{escape(dest)}">{escape(dest)}</a>.</p>
<script>location.replace({dest!r});</script>
"""
    html_doc = chrome(title, f"Redirecting to {dest}", dest_abs if dest.startswith("http") else SITE + dest, body, "Redirect", extra)
    # canonical should point at destination
    return html_doc.replace(
        f'<link rel="canonical" href="{escape(SITE + dest) if dest.startswith("/") else escape(dest)}">',
        f'<link rel="canonical" href="{escape(dest_abs)}">',
    )


def is_next_dump(text: str) -> bool:
    return "/_next/static" in text or "self.__next_f" in text


def public_path_for(url_path: str) -> Path:
    rel = url_path.strip("/")
    if not rel:
        return PUBLIC / "index.html"
    return PUBLIC / rel / "index.html"


def find_existing(url_path: str) -> Path | None:
    rel = url_path.strip("/")
    candidates = []
    if not rel:
        candidates = [PUBLIC / "index.html", ROOT / "index.html"]
    else:
        candidates = [
            PUBLIC / rel / "index.html",
            PUBLIC / f"{rel}.html",
            ROOT / rel / "index.html",
            ROOT / f"{rel}.html",
        ]
    for c in candidates:
        if c.exists() and c.is_file():
            return c
    return None


def parse_sitemap(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    # tolerate missing ns
    locs = re.findall(r"<loc>\s*([^<]+)\s*</loc>", text)
    out = []
    for loc in locs:
        loc = loc.strip()
        if loc.startswith(SITE):
            p = loc[len(SITE) :] or "/"
            if not p.startswith("/"):
                p = "/" + p
            if not p.endswith("/"):
                p += "/"
            out.append(p)
    return out


def write_page(dest: Path, content: str) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(content, encoding="utf-8")


def generate_for_path(url_path: str) -> str:
    rel = url_path.strip("/")
    slug = rel.split("/")[-1] if rel else "home"
    title = slug_title(slug) if slug and slug not in ("services", "blog", "tools", "ai") else slug_title(rel or "Zion Tech Group")
    if url_path.rstrip("/") == "/services":
        title = "Services"
    elif url_path.rstrip("/") == "/blog":
        title = "Blog"
    cat = categorize(url_path)
    canonical = SITE + (url_path if url_path.endswith("/") else url_path + "/")
    if url_path.startswith("/blog/") and url_path.count("/") >= 2 and url_path != "/blog/":
        desc = f"Practical guidance on {title.lower()} from Zion Tech Group — AI and IT services for operators in LATAM and the US."
        return chrome(title, desc, canonical, blog_body(title, url_path, cat), "Article")
    if url_path.startswith("/services/") or url_path.startswith("/ai-services/") or url_path.startswith("/it-services/") or url_path.startswith("/micro-saas/"):
        desc = f"{title} from Zion Tech Group. {CATEGORY_COPY[cat]['label']}. Scoped after a $99 Discovery — not a leftover catalog SKU."
        return chrome(title, desc, canonical, service_body(title, url_path, cat), "Service")
    if url_path.startswith("/tools/"):
        desc = f"{title} — a Zion Tech Group utility for IT and AI teams. Pair it with a scoped engagement when you need production automation."
        return chrome(title, desc, canonical, generic_body(title, url_path, cat), "WebPage")
    desc = f"{title} | Zion Tech Group — AI and IT services. Work is scoped after the $99 Discovery."
    return chrome(title, desc, canonical, generic_body(title, url_path, cat), "WebPage")


def services_index(slugs: list[str]) -> str:
    groups = defaultdict(list)
    for s in slugs:
        title = slug_title(s)
        groups[categorize("/services/" + s)].append((s, title))
    blocks = []
    for cat, items in sorted(groups.items(), key=lambda x: x[0]):
        items = sorted(items, key=lambda x: x[1])
        lis = "".join(f'<li><a href="/services/{escape(s)}/">{escape(t)}</a></li>' for s, t in items[:80])
        more = f"<p>{len(items)} pages in this group.</p>" if len(items) > 80 else ""
        blocks.append(f'<div class="card"><h3>{escape(CATEGORY_COPY[cat]["label"])}</h3><ul class="clean">{lis}</ul>{more}</div>')
    body = f"""
<p class="crumb"><a href="/">Home</a> / Services</p>
<span class="badge">Catalog</span>
<h1>Services</h1>
<p class="lead">Nested <code>/services/*</code> URLs describe capabilities Zion can scope after a $99 Discovery. They are not self-serve SKUs. Live prices are on <a href="/plans/">/plans/</a>.</p>
<div class="grid">{''.join(blocks)}</div>
<div class="cta">
  <a class="btn" href="/booking/">Book $99 Discovery</a>
  <a class="btn alt" href="/plans/">Plans</a>
</div>
"""
    return chrome("Services", "Zion Tech Group AI and IT services catalog. Scoped after Discovery.", f"{SITE}/services/", body, "WebPage")


def alias_pages() -> dict[str, str]:
    pages = {}
    # /roteiros/ hub
    children = [
        ("/roteiros/industrias/", "Indústrias"),
        ("/roteiros/direitos-humanos/", "Direitos humanos"),
        ("/roteiros/direitos-sociais/", "Direitos sociais"),
        ("/roteiros/direitos-trabalhistas/", "Direitos trabalhistas"),
        ("/roteiros/direitos-ambientais/", "Direitos ambientais"),
    ]
    lis = "".join(f'<li><a href="{h}">{escape(t)}</a></li>' for h, t in children)
    roteiros = chrome(
        "Roteiros",
        "Roteiros de TI e IA da Zion Tech Group — indústrias e direitos.",
        f"{SITE}/roteiros/",
        f"""
<p class="crumb"><a href="/">Home</a> / Roteiros</p>
<span class="badge">pt-BR</span>
<h1>Roteiros Zion</h1>
<p class="lead">Guias operacionais em português: como Zion aplica automação e IA em indústrias e em frentes de direitos. Trabalho é scoped depois do Discovery de $99 — não é um produto de prateleira.</p>
<div class="card"><h3>Índice</h3><ul class="clean">{lis}</ul></div>
<p><a href="/direitos-globais/">Direitos globais</a> · <a href="/services/">Serviços</a> · <a href="/booking/">Agendar</a></p>
""",
        "WebPage",
    )
    pages["roteiros/index.html"] = roteiros

    pages["direitos/index.html"] = redirect_page(f"{SITE}/direitos/", "/direitos-globais/", "Direitos")
    pages["free-ai-itools/index.html"] = redirect_page(f"{SITE}/free-ai-itools/", "/free-ai-it-tools/", "Free AI IT tools")

    pages["agents/index.html"] = chrome(
        "AI Agents",
        "Zion Tech Group AI agents for support, sales, ops, and security — scoped after Discovery.",
        f"{SITE}/agents/",
        f"""
<p class="crumb"><a href="/">Home</a> / Agents</p>
<span class="badge">AI agents</span>
<h1>AI Agents</h1>
<p class="lead">Zion builds production agents that use your apps (Composio), escalate to humans, and leave an audit trail. This hub replaces the missing <code>/agents/</code> route advertised in the sitemap.</p>
<div class="grid">
  <div class="card"><h3>Support &amp; ITSM</h3><p>Ticket intelligence, WhatsApp, and knowledge retrieval.</p><p><a href="/services/ai-customer-support-chatbot/">Customer support chatbot</a></p></div>
  <div class="card"><h3>Revenue</h3><p>Speed-to-lead, enrichment, and follow-up without a fake SDR SKU.</p><p><a href="/services/w174-sales-intelligence-ai/">Sales intelligence</a></p></div>
  <div class="card"><h3>Security &amp; ops</h3><p>Triage, observability, and incident assist.</p><p><a href="/agents-monitoring/">Agent monitoring</a> · <a href="/services/it-support-ticket-intelligence/">Ticket intelligence</a></p></div>
</div>
<div class="cta">
  <a class="btn" href="/booking/">Book a demo via Discovery</a>
  <a class="btn alt" href="/ai/demo/">Interactive demo notes</a>
</div>
""",
        "WebPage",
    )

    pages["ai/demo/index.html"] = chrome(
        "AI Demo",
        "See how Zion scopes AI and IT work. Book a $99 Discovery for a live walkthrough.",
        f"{SITE}/ai/demo/",
        """
<p class="crumb"><a href="/">Home</a> / <a href="/ai/">AI</a> / Demo</p>
<span class="badge">Demo</span>
<h1>AI Demo</h1>
<p class="lead">There is no leftover Next.js sandbox here. A useful demo is a 30–45 minute walkthrough of <em>your</em> workflow: intake, tools, and the KPI we would automate first.</p>
<div class="grid">
  <div class="card"><h3>What we show</h3><ul class="clean"><li>Agent using real SaaS tools via Composio</li><li>Human approval on the risky step</li><li>Logs you could hand to audit</li></ul></div>
  <div class="card"><h3>What we do not show</h3><ul class="clean"><li>A fake chatbot that cannot write back to your CRM</li><li>A catalog of 800 SKUs with invented prices</li></ul></div>
</div>
<div class="cta">
  <a class="btn" href="/booking/">Book the live demo (Discovery)</a>
  <a class="btn alt" href="/ai-lab/">AI Lab</a>
  <a class="btn alt" href="/agents/">Agents hub</a>
</div>
""",
        "WebPage",
    )

    pages["free-ai-it-tools/index.html"] = chrome(
        "Free AI IT Tools",
        "Free AI utilities for IT teams and MSPs from Zion Tech Group — plus the path to a scoped engagement.",
        f"{SITE}/free-ai-it-tools/",
        """
<p class="crumb"><a href="/">Home</a> / Free AI IT tools</p>
<span class="badge">Tools</span>
<h1>Free AI IT Tools</h1>
<p class="lead">Utilities IT teams actually open: formatters, checkers, and quick audits. They are not a substitute for a managed service. When you need production automation, book Discovery.</p>
<div class="grid">
  <div class="card"><h3>On this site</h3><ul class="clean">
    <li><a href="/tools/">Tools index</a></li>
    <li><a href="/tools/json-formatter/">JSON formatter</a></li>
    <li><a href="/tools/regex-tester/">Regex tester</a></li>
    <li><a href="/tools/health-check/">Health check</a></li>
  </ul></div>
  <div class="card"><h3>When to call Zion</h3><p>Ticket floods, unowned cloud spend, or a help desk that only works because three people never sleep.</p></div>
</div>
<div class="cta"><a class="btn" href="/booking/">Book $99 Discovery</a><a class="btn alt" href="/tools/">Open tools</a></div>
""",
        "WebPage",
    )

    pages["direitos-globais/index.html"] = chrome(
        "Direitos globais",
        "Roteiros Zion sobre direitos globais, TI e automação responsável.",
        f"{SITE}/direitos-globais/",
        """
<p class="crumb"><a href="/">Home</a> / Direitos globais</p>
<span class="badge">pt-BR</span>
<h1>Direitos globais</h1>
<p class="lead">Zion trata direitos e conformidade como restrição de desenho — LGPD, GDPR, acessibilidade, trabalho e meio ambiente — não como um parágrafo no rodapé de um agente.</p>
<ul class="clean">
  <li><a href="/roteiros/direitos-humanos/">Direitos humanos</a></li>
  <li><a href="/roteiros/direitos-sociais/">Direitos sociais</a></li>
  <li><a href="/roteiros/direitos-trabalhistas/">Direitos trabalhistas</a></li>
  <li><a href="/roteiros/direitos-ambientais/">Direitos ambientais</a></li>
  <li><a href="/roteiros/">Todos os roteiros</a></li>
</ul>
<div class="cta"><a class="btn" href="/booking/">Agendar Discovery</a></div>
""",
        "WebPage",
    )
    return pages


def update_sitemap(paths_added: list[str]) -> None:
    if not SITEMAP.exists():
        return
    raw = SITEMAP.read_text(encoding="utf-8")
    existing = set(parse_sitemap(SITEMAP))
    extras = []
    for p in paths_added:
        if not p.startswith("/"):
            p = "/" + p
        if not p.endswith("/"):
            p += "/"
        if p not in existing:
            extras.append(p)
            existing.add(p)
    # refresh lastmod on file
    raw = re.sub(r"<lastmod>[^<]+</lastmod>", f"<lastmod>{TODAY}T00:00:00.000Z</lastmod>", raw)
    if extras and "</urlset>" in raw:
        chunks = []
        for p in extras:
            chunks.append(
                f"<url><loc>{SITE}{p}</loc><lastmod>{TODAY}T00:00:00.000Z</lastmod>"
                f"<changefreq>weekly</changefreq><priority>0.6</priority></url>\n"
            )
        raw = raw.replace("</urlset>", "".join(chunks) + "</urlset>")
    SITEMAP.write_text(raw, encoding="utf-8")
    # also publish under public/ so both deploy workflows ship it
    (PUBLIC / "sitemap-0.xml").write_text(raw, encoding="utf-8")


def copy_good_root_to_public(url_path: str, src: Path) -> bool:
    """Copy a non-Next static page into public/ so public-wins deploy still has it."""
    text = src.read_text(encoding="utf-8", errors="ignore")
    if is_next_dump(text):
        return False
    dest = public_path_for(url_path)
    if dest.exists():
        return False
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(text, encoding="utf-8")
    return True


def main() -> None:
    PUBLIC.mkdir(exist_ok=True)
    urls = parse_sitemap(SITEMAP)
    print(f"sitemap-0 urls: {len(urls)}")

    created = 0
    copied = 0
    skipped = 0
    service_slugs = []

    for url_path in urls:
        dest = public_path_for(url_path)
        existing_pub = dest if dest.exists() else None
        refresh = "--refresh-generated" in sys.argv and existing_pub and GENERATED_MARK in existing_pub.read_text(encoding="utf-8", errors="ignore")
        if existing_pub and existing_pub.stat().st_size >= MIN_KEEP_BYTES and SKIP_IF_PUBLIC_EXISTS and not refresh:
            skipped += 1
            if url_path.startswith("/services/") and url_path != "/services/":
                service_slugs.append(url_path.strip("/").split("/", 1)[-1])
            continue

        root_hit = find_existing(url_path)
        focus = (
            url_path.startswith("/services/")
            or url_path.startswith("/blog/")
            or url_path.rstrip("/") in {"/agents", "/ai/demo", "/automation"}
        )
        if root_hit and root_hit.resolve() != dest.resolve():
            if copy_good_root_to_public(url_path, root_hit):
                copied += 1
                if url_path.startswith("/services/") and url_path != "/services/":
                    service_slugs.append(url_path.strip("/").split("/", 1)[-1])
                continue
            # Non-focus routes that already have a root/docs file: leave them.
            # Focus routes with Next.js dumps still get a real static page.
            if not focus:
                skipped += 1
                continue

        html_doc = generate_for_path(url_path)
        write_page(dest, html_doc)
        created += 1
        if url_path.startswith("/services/") and url_path != "/services/":
            service_slugs.append(url_path.strip("/").split("/", 1)[-1])

    # Replace leftover Next.js dumps under root services/blog with real public HTML
    for section in ("services", "blog"):
        root_section = ROOT / section
        if not root_section.is_dir():
            continue
        for child in root_section.iterdir():
            idx = child / "index.html"
            if not child.is_dir() or not idx.exists():
                continue
            dest = PUBLIC / section / child.name / "index.html"
            if dest.exists():
                continue
            text = idx.read_text(encoding="utf-8", errors="ignore")
            if not is_next_dump(text):
                continue
            url_path = f"/{section}/{child.name}/"
            write_page(dest, generate_for_path(url_path))
            created += 1
            if section == "services":
                service_slugs.append(child.name)

    # Always refresh services index with a real directory
    if (PUBLIC / "services").exists():
        for p in (PUBLIC / "services").iterdir():
            if p.is_dir() and (p / "index.html").exists():
                service_slugs.append(p.name)
    write_page(PUBLIC / "services" / "index.html", services_index(sorted(set(service_slugs))))

    alias_created = []
    for rel, content in alias_pages().items():
        dest = PUBLIC / rel
        write_page(dest, content)
        alias_created.append("/" + rel.replace("/index.html", "/"))

    # Improve roteiros children that are still stubs
    for child in PUBLIC.glob("roteiros/*/index.html"):
        text = child.read_text(encoding="utf-8", errors="ignore")
        if "Em breve" in text or len(text) < 600:
            slug = child.parent.name
            title = slug_title(slug)
            url_path = f"/roteiros/{slug}/"
            write_page(child, generate_for_path(url_path))

    update_sitemap(alias_created)
    refresh_blog_index()

    print(f"created={created} copied_from_root={copied} skipped_existing={skipped} aliases={len(alias_created)}")
    print("done")


def refresh_blog_index() -> None:
    idx = PUBLIC / "blog" / "index.html"
    if not idx.exists():
        return
    html_doc = idx.read_text(encoding="utf-8")
    added = 0
    posts = []
    for post in sorted((PUBLIC / "blog").iterdir()):
        if not post.is_dir() or not (post / "index.html").exists():
            continue
        slug = post.name
        if f"/blog/{slug}/" in html_doc:
            continue
        title = slug_title(slug)
        raw = (post / "index.html").read_text(encoding="utf-8", errors="ignore")
        m = re.search(r"<title>(.*?)</title>", raw)
        if m:
            title = re.sub(r"\s*\|\s*Zion Tech Group.*$", "", m.group(1)).strip() or title
        posts.append((title, slug))
    if not posts:
        return
    block = ""
    for title, slug in posts:
        block += f'  <div class="post"><h2><a href="/blog/{slug}/">{html.escape(title)}</a></h2><div class="meta">{html.escape(slug.replace("-", " "))}</div></div>\n'
        added += 1
    if "</body>" in html_doc:
        html_doc = html_doc.replace("</body>", block + "</body>")
        idx.write_text(html_doc, encoding="utf-8")
    print(f"blog index appended {added} posts")


if __name__ == "__main__":
    main()
