#!/usr/bin/env python3
"""Rewrite Next.js leftovers under public/ into the Family A site.css shell.

Used to replace /solutions/ and any other public HTML that still references /_next/.
"""
from __future__ import annotations

import html
import json
import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SITE = "https://ziontechgroup.com"
SITE_CSS = (PUBLIC / "assets/css/site.css").read_text(encoding="utf-8")
STYLE_MARK = "<!-- qa-pass2-inline-site-css -->"

INDUSTRIES = [
    {
        "slug": "healthcare",
        "title": "Healthcare",
        "desc": "HIPAA-aware AI and IT for clinical operations, diagnostics, patient pathways, and compliance.",
        "cards": [
            ("Clinical operations", "Scheduling, triage, and clerical workflows on the systems you already run — not a diagnosis SKU.", "/healthcare-it-hipaa/"),
            ("Diagnostics & imaging", "Computer-vision assist for radiology, pathology, and lab results with a human in the loop.", "/contact/"),
            ("Patient pathways", "Follow-up, reminders, and outcomes tracking across EHR, WhatsApp, and the front desk.", "/contact/"),
            ("Compliance", "HIPAA / LGPD architecture review before any agent sees PHI.", "/healthcare-it-hipaa/"),
        ],
    },
    {
        "slug": "financial-services",
        "title": "Financial Services & FinTech",
        "desc": "AI-powered solutions for banking, insurance, fintech, and capital markets — scoped after Discovery.",
        "cards": [
            ("Fraud detection", "Real-time transaction monitoring and exception queues with a human approval path.", "/ai-fraud-detection/"),
            ("Risk analytics", "Credit risk modeling, portfolio views, and stress signals tied to a weekly KPI.", "/ai-predictive-analytics/"),
            ("Compliance automation", "SOC 2, PCI-DSS, and SOX evidence packs instead of weekend screenshot hunts.", "/compliance-automation/"),
            ("Invoice & close support", "Invoice, expense, and exception routing with an audit trail.", "/ai-smart-invoice/"),
            ("Trading & portfolio assist", "ML-assisted strategies only after we see the control story.", "/ai-stock-portfolio-manager/"),
            ("Mobile / digital banking", "Secure customer journeys — scoped as a project, not a boxed core-banking SKU.", "/contact/"),
        ],
    },
    {
        "slug": "manufacturing-industrial",
        "title": "Manufacturing & Industrial",
        "desc": "Predictive maintenance, quality inspection, and supply-chain loops for plants that already have an MES, ERP, or historian.",
        "cards": [
            ("Predictive maintenance", "Failure signals from the sensors and work orders you already collect.", "/ai-predictive-maintenance/"),
            ("Quality inspection", "Computer vision on the line with an operator override, not a black box.", "/contact/"),
            ("Supply visibility", "Exception handling when inventory, ASN, and the shop floor disagree.", "/ai-supply-chain/"),
            ("OEE & downtime", "A weekly number operations will actually review.", "/contact/"),
        ],
    },
    {
        "slug": "ecommerce-retail",
        "title": "E-Commerce & Retail",
        "desc": "Recommendation, inventory, and support automation for stores that still copy orders between WhatsApp, sheets, and the ERP.",
        "cards": [
            ("Catalog & merchandising", "Recommendations and search that cite the SKU you actually sell.", "/contact/"),
            ("Inventory AI", "Reorder and allocation from the ERP you already pay for.", "/ai-smart-inventory/"),
            ("Support automation", "WhatsApp / chat intake with CRM write-back and a human handoff.", "/ai-customer-support-pro/"),
            ("Dynamic pricing", "Only after Discovery writes the constraint set — not a silent price bot.", "/contact/"),
        ],
    },
    {
        "slug": "technology-and-saas",
        "title": "Technology & SaaS",
        "desc": "Platform engineering, observability, and product automation for SaaS teams that need an operating loop, not another unused license.",
        "cards": [
            ("Platform engineering", "CI, environments, and guardrails without a 12-month replatform.", "/services/"),
            ("Observability & AIOps", "Pages humans only when action is required.", "/ai-observability-platform/"),
            ("Support & success", "Ticket intelligence, churn signals, and knowledge retrieval.", "/ai-customer-success/"),
            ("Internal tools", "Agents on Composio that use the SaaS you already run.", "/ai-internal-app-builder/"),
        ],
    },
    {
        "slug": "logistics-supply-chain",
        "title": "Logistics & Supply Chain",
        "desc": "Route, warehouse, and exception automation for operators who live in TMS, WMS, and WhatsApp groups.",
        "cards": [
            ("Route optimization", "Dispatch assist with a dispatcher still on the exception.", "/ai-route-optimizer/"),
            ("Warehouse automation", "Receiving, slotting, and cycle-count loops tied to the WMS you have.", "/contact/"),
            ("Fleet & ETA", "Tracking that updates the same dashboard the CS team reads.", "/contact/"),
            ("Supplier risk", "Late, short, and quality exceptions before they become a fire drill.", "/zion-ai-supplier-risk/"),
        ],
    },
    {
        "slug": "government-and-public-sector",
        "title": "Government & Public Sector",
        "desc": "Citizen services, compliance automation, and knowledge systems with audit trails first.",
        "cards": [
            ("Citizen intake", "Forms, tickets, and status that do not require a second spreadsheet.", "/contact/"),
            ("Compliance evidence", "LGPD / policy mapping with a written data-flow diagram.", "/compliance-automation/"),
            ("Knowledge assistants", "Retrieval over approved corpora — citations, not invented policy.", "/ai-knowledge-base-rag-platform/"),
            ("Case work", "Routing and SLA views for the teams that already own the queue.", "/contact/"),
        ],
    },
    {
        "slug": "insurance",
        "title": "Insurance",
        "desc": "Claims, underwriting, and fraud queues with humans still on the approval path.",
        "cards": [
            ("Claims automation", "Packet assembly from FNOL, photos, and the core system you already run.", "/industries/insurance/"),
            ("Underwriting assist", "Risk signals and document extraction — underwriter still signs.", "/industries/insurance/"),
            ("Fraud prevention", "Exception queues enriched before an analyst opens the case.", "/ai-fraud-detection/"),
            ("Policy lifecycle", "Endorsements, renewals, and customer self-service without a rip-and-replace.", "/contact/"),
        ],
    },
    {
        "slug": "education-training",
        "title": "Education & Training",
        "desc": "Learning operations, scheduling, and knowledge systems for schools and corporate academies.",
        "cards": [
            ("Learner operations", "Enrollment, attendance, and reminder loops across the LMS you have.", "/contact/"),
            ("Content assist", "Drafts from approved material — instructors still publish.", "/contact/"),
            ("Support desk", "Student / employee questions with a human escalation.", "/contact/"),
            ("Reporting", "One trusted number for completion or time-to-competence.", "/contact/"),
        ],
    },
    {
        "slug": "energy-utilities",
        "title": "Energy & Utilities",
        "desc": "Asset, field-service, and demand loops for operators who cannot afford a silent agent.",
        "cards": [
            ("Asset health", "Predictive signals from SCADA / CMMS you already collect.", "/ai-predictive-maintenance/"),
            ("Field service", "Scheduling and parts exceptions with a dispatcher in the loop.", "/zion-ai-field-service-manager/"),
            ("Demand & carbon", "Forecasts tied to a weekly operating review.", "/contact/"),
            ("Outage comms", "Status that customer ops can actually send.", "/contact/"),
        ],
    },
    {
        "slug": "media-entertainment",
        "title": "Media & Entertainment",
        "desc": "Content operations, rights metadata, and audience workflows — scoped after we see how the desk actually works.",
        "cards": [
            ("Content ops", "Ingest, tagging, and localization queues with an editor override.", "/contact/"),
            ("Rights & metadata", "Where the spreadsheet still is the system of record.", "/contact/"),
            ("Audience support", "Chat and email intake that writes back to CRM.", "/contact/"),
            ("Production assist", "Drafts and logs — not an unsupervised publisher.", "/zion-content-studio/"),
        ],
    },
    {
        "slug": "construction-engineering",
        "title": "Construction & Engineering",
        "desc": "Document, schedule, and field-reporting loops for project teams that still live in email and WhatsApp.",
        "cards": [
            ("Document control", "RFIs, submittals, and drawings with an owner, not a lost PDF.", "/contact/"),
            ("Schedule risk", "Slip signals from the plan you already maintain.", "/contact/"),
            ("Field reports", "Photos and notes that land in the same place PMs look.", "/contact/"),
            ("Vendor coordination", "Exception handling when the PO, the site, and the invoice disagree.", "/contact/"),
        ],
    },
]


def escape(s: str) -> str:
    return html.escape(s, quote=True)


def family_a(
    title: str,
    desc: str,
    canonical: str,
    body: str,
    *,
    lang: str = "en",
    og_type: str = "website",
    extra_head: str = "",
    skip_label: str = "Skip to content",
    menu_label: str = "Open menu",
    nav_label: str = "Primary",
    nav_items: list[tuple[str, str]] | None = None,
    cta: tuple[str, str] = ("/discovery/", "Discovery $99"),
    schema: dict | None = None,
) -> str:
    if nav_items is None:
        nav_items = [
            ("/services/", "Services"),
            ("/plans/", "Plans"),
            ("/blog/", "Blog"),
            ("/contact/", "Contact"),
        ]
    nav_html = "".join(f'      <a href="{escape(h)}">{escape(l)}</a>\n' for h, l in nav_items)
    json_block = ""
    if schema:
        json_block = f'<script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>\n'
    return f"""<!DOCTYPE html>
<html lang="{escape(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{escape(title)}</title>
<meta name="description" content="{escape(desc)}">
<link rel="canonical" href="{escape(canonical)}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="{escape(title)}">
<meta property="og:description" content="{escape(desc)}">
<meta property="og:url" content="{escape(canonical)}">
<meta property="og:type" content="{escape(og_type)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/assets/css/site.css" as="style">
<link rel="stylesheet" href="/assets/css/site.css">
<style>{STYLE_MARK}
{SITE_CSS}
</style>
{json_block}{extra_head}
</head>
<body>
<a class="skip" href="#conteudo">{escape(skip_label)}</a>
<header class="nav">
  <div class="wrap navin">
    <a class="brand" href="/">Zion Tech Group</a>
    <button class="menu" aria-label="{escape(menu_label)}" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
    <nav class="links" aria-label="{escape(nav_label)}">
{nav_html}      <a class="cta" href="{escape(cta[0])}">{escape(cta[1])}</a>
    </nav>
  </div>
</header>
<main id="conteudo" class="section">
  <div class="wrap">
{body}
  </div>
</main>
<footer>
  <div class="wrap foot">
    <div>
      <h3>Company</h3>
      <a href="/about/">About</a>
      <a href="/partners/">Partners</a>
    </div>
    <div>
      <h3>Offer</h3>
      <a href="/plans/">Plans</a>
      <a href="/discovery/">Discovery $99</a>
      <a href="/solutions/">Solutions</a>
    </div>
    <div>
      <h3>Resources</h3>
      <a href="/blog/">Blog</a>
      <a href="/resources/">Resources</a>
      <a href="/services/">Services</a>
    </div>
    <div>
      <h3>Legal</h3>
      <a href="/privacy/">Privacy</a>
      <a href="/cookie-policy/">Cookies</a>
      <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
    </div>
  </div>
  <div class="wrap" style="margin-top:18px">© {date.today().year} Zion Tech Group · 364 E Main St STE 1008, Middletown, DE 19709 · +1 302 464 0950</div>
</footer>
</body>
</html>
"""


def solutions_hub() -> str:
    cards = []
    for item in INDUSTRIES:
        href = f"/solutions/{item['slug']}/"
        cards.append(
            f'      <article class="card"><h3><a href="{escape(href)}">{escape(item["title"])}</a></h3>'
            f'<p>{escape(item["desc"])}</p>'
            f'<p><a href="{escape(href)}">Open industry →</a></p></article>'
        )
    body = f"""    <p class="crumb"><a href="/">Home</a> / Solutions</p>
    <p class="eyebrow">Industry solutions</p>
    <h1>Industry solutions. Scoped after Discovery.</h1>
    <p class="lead">Tailored AI and IT for the operating loop of a specific industry — healthcare, finance, manufacturing, retail, logistics, public sector, and more. These are capabilities we scope after a $99 Discovery, not a boxed catalog SKU.</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Start Discovery $99</a>
      <a class="btn alt" href="/plans/">See plans</a>
      <a class="btn alt" href="/contact/">Contact</a>
    </div>
    <div class="grid" style="margin-top:36px">
{chr(10).join(cards)}
    </div>
    <article class="card featured" style="margin-top:28px">
      <h3>How Zion delivers this</h3>
      <p>Discovery $99 maps one process. Consulting $499 writes the roadmap. Starter $2.500 implements the first loop. Growth $8.000/mês operates it. If the honest answer is “do not automate yet”, that is the result.</p>
      <p style="margin-top:12px"><a class="btn" href="/booking/">Book a session</a> <a class="btn alt" href="/services/">Browse services</a> <a class="btn alt" href="/industries/insurance/">Insurance desk</a></p>
    </article>
"""
    schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Industry Solutions",
        "description": "AI and IT solutions by industry from Zion Tech Group.",
        "url": f"{SITE}/solutions/",
        "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": SITE},
    }
    return family_a(
        "Industry Solutions · Zion Tech Group",
        "AI and IT solutions by industry: healthcare, finance, manufacturing, retail, logistics, public sector, insurance, and more. Scoped after Discovery $99.",
        f"{SITE}/solutions/",
        body,
        schema=schema,
    )


def industry_page(item: dict) -> str:
    cards = []
    for title, text, href in item["cards"]:
        cards.append(
            f'      <article class="card"><h3>{escape(title)}</h3><p>{escape(text)}</p>'
            f'<p><a href="{escape(href)}">Learn more →</a></p></article>'
        )
    body = f"""    <p class="crumb"><a href="/">Home</a> / <a href="/solutions/">Solutions</a> / {escape(item["title"])}</p>
    <p class="eyebrow">Industry</p>
    <h1>{escape(item["title"])}</h1>
    <p class="lead">{escape(item["desc"])}</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/contact/">Contact</a>
      <a class="btn alt" href="/solutions/">All industries</a>
    </div>
    <div class="grid" style="margin-top:36px">
{chr(10).join(cards)}
    </div>
    <article class="card featured" style="margin-top:28px">
      <h3>Commercial path</h3>
      <p>Live prices live on <a href="/plans/">/plans/</a>. Typical sequence: Discovery $99 → Consulting $499 → Starter or Growth. We will not invent a catalog price for {escape(item["title"])} before we have seen your stack.</p>
    </article>
"""
    schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": item["title"],
        "description": item["desc"],
        "url": f"{SITE}/solutions/{item['slug']}/",
        "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": SITE,
            "email": "kleber@ziontechgroup.com",
            "telephone": "+1 302 464 0950",
        },
        "areaServed": "Worldwide",
    }
    return family_a(
        f"{item['title']} · Zion Tech Group",
        item["desc"],
        f"{SITE}/solutions/{item['slug']}/",
        body,
        schema=schema,
    )


CITIES = [
    {
        "slug": "it-support-curitiba",
        "city": "Curitiba",
        "region": "PR",
        "title": "Suporte de TI em Curitiba | IT Support | Zion Tech Group",
        "desc": "Suporte de TI profissional em Curitiba. Help desk, infraestrutura, cibersegurança e cloud para empresas.",
        "lead": "Help desk, infraestrutura de redes, cibersegurança e cloud com atendimento local e remoto.",
        "others": (
            ('/ai/it-support-florianopolis/', "Florianópolis"),
            ('/ai/it-support-balneario-camboriu/', "Balneário Camboriú"),
        ),
    },
    {
        "slug": "it-support-florianopolis",
        "city": "Florianópolis",
        "region": "SC",
        "title": "Suporte de TI em Florianópolis | IT Support Florianópolis | Zion Tech Group",
        "desc": "Suporte de TI profissional em Florianópolis. Help desk, infraestrutura de redes, cibersegurança e cloud para empresas. Atendimento local e remoto.",
        "lead": "Help desk, infraestrutura de redes, cibersegurança e cloud — atendimento local e remoto com SLA.",
        "others": (
            ('/ai/it-support-balneario-camboriu/', "Balneário Camboriú"),
            ('/ai/it-support-curitiba/', "Curitiba"),
        ),
    },
    {
        "slug": "it-support-balneario-camboriu",
        "city": "Balneário Camboriú",
        "region": "SC",
        "title": "Suporte de TI em Balneário Camboriú | IT Support | Zion Tech Group",
        "desc": "Suporte de TI profissional em Balneário Camboriú. Help desk, infraestrutura, cibersegurança e cloud para empresas.",
        "lead": "Help desk, infraestrutura de redes, cibersegurança e cloud com atendimento local e remoto.",
        "others": (
            ('/ai/it-support-florianopolis/', "Florianópolis"),
            ('/ai/it-support-curitiba/', "Curitiba"),
        ),
    },
]


def city_page(item: dict) -> str:
    others = "".join(
        f'<a class="btn alt" href="{escape(h)}">{escape(l)}</a> ' for h, l in item["others"]
    )
    body = f"""    <p class="crumb"><a href="/">Início</a> / <a href="/ai/">AI</a> / {escape(item["city"])}</p>
    <p class="eyebrow">Suporte de TI em {escape(item["city"])}</p>
    <h1>IT Support em {escape(item["city"])}</h1>
    <p class="lead">{escape(item["lead"])}</p>
    <div class="actions">
      <a class="btn" href="/contact/">Solicitar orçamento</a>
      <a class="btn alt" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/services/">Ver serviços</a>
    </div>
    <div class="grid" style="margin-top:36px">
      <article class="card"><h3>Help Desk</h3><p>Suporte N1, N2 e N3 com atendimento 24/7 e resolução rápida de incidentes.</p></article>
      <article class="card"><h3>Cibersegurança</h3><p>Proteção contra ameaças, firewall, SOC e conformidade LGPD.</p></article>
      <article class="card"><h3>Cloud e infraestrutura</h3><p>Migração e gestão cloud (AWS, Azure, GCP) e redes corporativas.</p></article>
      <article class="card featured"><h3>Precisa de suporte em {escape(item["city"])}?</h3><p>Atendimento local e remoto com SLA. Comece pelo Discovery $99 se quiser um mapa escrito de um processo.</p></article>
    </div>
    <p class="lead" style="margin-top:28px">Outras cidades: {others}</p>
"""
    schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": f"Zion Tech Group - Suporte de TI {item['city']}",
        "description": item["desc"],
        "url": f"{SITE}/ai/{item['slug']}/",
        "telephone": "+1 302 464 0950",
        "email": "kleber@ziontechgroup.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": item["city"],
            "addressRegion": item["region"],
            "addressCountry": "BR",
        },
        "areaServed": {"@type": "City", "name": item["city"]},
    }
    return family_a(
        item["title"],
        item["desc"],
        f"{SITE}/ai/{item['slug']}/",
        body,
        lang="pt-BR",
        skip_label="Ir para o conteúdo",
        menu_label="Abrir menu",
        nav_label="Principal",
        nav_items=[
            ("/services/", "Serviços"),
            ("/plans/", "Planos"),
            ("/blog/", "Blog"),
            ("/contact/", "Contato"),
        ],
        schema=schema,
    )


def write_cities() -> None:
    for item in CITIES:
        dest = PUBLIC / "ai" / item["slug"]
        dest.mkdir(parents=True, exist_ok=True)
        (dest / "index.html").write_text(city_page(item), encoding="utf-8")


def write_solutions() -> None:
    dest = PUBLIC / "solutions"
    dest.mkdir(parents=True, exist_ok=True)
    hub = solutions_hub()
    (dest / "index.html").write_text(hub, encoding="utf-8")
    (PUBLIC / "solutions.html").write_text(hub, encoding="utf-8")
    for item in INDUSTRIES:
        d = dest / item["slug"]
        d.mkdir(parents=True, exist_ok=True)
        (d / "index.html").write_text(industry_page(item), encoding="utf-8")


def meta_content(text: str, *patterns: str) -> str:
    for pat in patterns:
        m = re.search(pat, text, flags=re.I)
        if m:
            return html.unescape(m.group(1)).strip()
    return ""


def inner_s0(text: str) -> str:
    m = re.search(r'<div hidden id="S:0">(.*?)</div>\s*<script', text, flags=re.I | re.S)
    if m:
        return m.group(1)
    m = re.search(r'<div hidden id="S:0">(.*)$', text, flags=re.I | re.S)
    return m.group(1) if m else ""


def strip_noise(fragment: str) -> str:
    fragment = re.sub(r"<script[\s\S]*?</script>", "", fragment, flags=re.I)
    fragment = re.sub(r"<style[\s\S]*?</style>", "", fragment, flags=re.I)
    fragment = re.sub(r'<!--[\s\S]*?-->', "", fragment)
    return fragment


def clean_inner(raw: str) -> str:
    raw = re.sub(r"<[^>]+>", " ", raw)
    raw = html.unescape(raw)
    raw = re.sub(r"\s+", " ", raw).strip()
    return raw


def extract_blocks(fragment: str) -> list[tuple[str, str, str]]:
    """Return list of (tag, text_or_href, extra)."""
    blocks: list[tuple[str, str, str]] = []
    for m in re.finditer(
        r"<(h1|h2|h3|p|li|a)(\s[^>]*)?>(.*?)</\1>",
        fragment,
        flags=re.I | re.S,
    ):
        tag = m.group(1).lower()
        attrs = m.group(2) or ""
        inner = clean_inner(m.group(3))
        if not inner or inner in {"Loading…", "Learn more →"}:
            continue
        href = ""
        hm = re.search(r'href="([^"]+)"', attrs)
        if hm:
            href = hm.group(1)
        blocks.append((tag, inner, href))
    return blocks


def normalize_href(href: str) -> str:
    if not href:
        return "/contact/"
    href = href.strip()
    if href.startswith("http") or href.startswith("mailto:") or href.startswith("tel:"):
        return href
    mapping = {
        "/services": "/services/",
        "/consultation": "/contact/",
        "/consultation/": "/contact/",
        "/configurator/": "/contact/",
        "/configurator": "/contact/",
        "/blog": "/blog/",
    }
    if href in mapping:
        return mapping[href]
    if href.startswith("/") and not href.endswith("/") and "." not in href.rsplit("/", 1)[-1]:
        return href + "/"
    return href


def blocks_to_body(blocks: list[tuple[str, str, str]], crumb: str, fallback_h1: str, fallback_lead: str) -> str:
    h1 = fallback_h1
    lead = fallback_lead
    sections: list[str] = []
    current_title = ""
    current_ps: list[str] = []
    current_lis: list[str] = []
    links: list[tuple[str, str]] = []

    def flush() -> None:
        nonlocal current_title, current_ps, current_lis
        if not (current_title or current_ps or current_lis):
            return
        if not current_title and not current_ps and current_lis:
            current_lis = []
            return
        title = current_title or "Notes"
        bits = [f"<h3>{escape(title)}</h3>"]
        for p in current_ps:
            bits.append(f"<p>{escape(p)}</p>")
        if current_lis:
            bits.append("<ul class='features'>" + "".join(f"<li>{escape(x)}</li>" for x in current_lis) + "</ul>")
        sections.append('<article class="card">' + "".join(bits) + "</article>")
        current_title = ""
        current_ps = []
        current_lis = []

    seen_h1 = False
    for tag, text, href in blocks:
        if tag == "h1" and not seen_h1:
            h1 = text
            seen_h1 = True
            continue
        if tag == "p" and not current_title and not sections and text and lead == fallback_lead:
            lead = text
            continue
        if tag == "h2" or tag == "h3":
            flush()
            current_title = text
            continue
        if tag == "p":
            if len(text) > 20:
                current_ps.append(text)
            continue
        if tag == "li":
            if text in {"Home", "Blog", "Services", "Contact"} or text.startswith("/ "):
                continue
            current_lis.append(text)
            continue
        if tag == "a" and href:
            links.append((normalize_href(href), text))
    flush()

    if not sections:
        sections.append(
            f'<article class="card featured"><h3>{escape(h1)}</h3><p>{escape(lead)}</p>'
            f"<p>This note is part of Zion's AI and IT field library. Start with Discovery $99 if you want a written map of one process.</p></article>"
        )

    link_html = ""
    uniq = []
    seen = set()
    for href, label in links:
        key = (href, label.lower())
        if key in seen or href.startswith("/_next"):
            continue
        seen.add(key)
        uniq.append((href, label))
    if uniq:
        link_html = (
            '<p class="lead" style="margin-top:24px">'
            + " · ".join(f'<a href="{escape(h)}">{escape(l)}</a>' for h, l in uniq[:8])
            + "</p>"
        )

    return f"""    <p class="crumb">{crumb}</p>
    <p class="eyebrow">Zion Tech Group</p>
    <h1>{escape(h1)}</h1>
    <p class="lead">{escape(lead)}</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/contact/">Contact</a>
      <a class="btn alt" href="/services/">Services</a>
    </div>
    <div class="grid" style="margin-top:36px">
      {chr(10).join(sections)}
    </div>
    {link_html}
"""


def rewrite_city_page(path: Path, text: str) -> str:
    title = meta_content(text, r"<title>(.*?)</title>") or path.parent.name
    desc = meta_content(text, r'<meta name="description" content="([^"]*)"')
    canonical = meta_content(text, r'<link rel="canonical" href="([^"]*)"') or f"{SITE}/{path.relative_to(PUBLIC).parent.as_posix()}/"
    h1 = meta_content(text, r"<h1[^>]*>(.*?)</h1>") or title
    h1 = clean_inner(h1)
    lead = desc
    pm = re.search(r"<main[\s\S]*?</main>", text, flags=re.I)
    blocks = extract_blocks(strip_noise(pm.group(0) if pm else text))
    city = path.parent.name.replace("it-support-", "").replace("-", " ").title()
    crumb = f'<a href="/">Início</a> / <a href="/ai/">AI</a> / {escape(city)}'
    body = blocks_to_body(blocks, crumb, h1, lead)
    schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": f"Zion Tech Group — {city}",
        "description": desc,
        "url": canonical,
        "telephone": "+1 302 464 0950",
        "email": "kleber@ziontechgroup.com",
    }
    return family_a(
        title,
        desc,
        canonical,
        body,
        lang="pt-BR",
        skip_label="Ir para o conteúdo",
        menu_label="Abrir menu",
        nav_label="Principal",
        nav_items=[
            ("/services/", "Serviços"),
            ("/plans/", "Planos"),
            ("/blog/", "Blog"),
            ("/contact/", "Contato"),
        ],
        cta=("/discovery/", "Discovery $99"),
        schema=schema,
    )


def rewrite_next_page(path: Path, text: str) -> str:
    rel = path.relative_to(PUBLIC).as_posix()
    if rel.startswith("ai/it-support-"):
        return rewrite_city_page(path, text)

    title = meta_content(text, r"<title>(.*?)</title>")
    title = re.sub(r"(?:\s*\|\s*Zion Tech Group)+$", "", title).strip() or path.parent.name.replace("-", " ").title()
    if not title.lower().endswith("zion tech group"):
        full_title = f"{title} · Zion Tech Group"
    else:
        full_title = title
    desc = meta_content(
        text,
        r'<meta name="description" content="([^"]*)"',
        r'<meta property="og:description" content="([^"]*)"',
    ) or f"{title} — Zion Tech Group field note. Start with Discovery $99."
    canonical = meta_content(text, r'<link rel="canonical" href="([^"]*)"')
    if not canonical or canonical.rstrip("/") == SITE:
        slug = "/" + str(path.relative_to(PUBLIC).parent).replace("\\", "/") + "/"
        canonical = SITE + slug

    fragment = inner_s0(text) or text
    fragment = strip_noise(fragment)
    blocks = extract_blocks(fragment)
    parts = list(path.relative_to(PUBLIC).parts)
    if "blog" in parts:
        crumb = f'<a href="/">Home</a> / <a href="/blog/">Blog</a> / {escape(title)}'
        og_type = "article"
        schema_type = "Article"
    else:
        crumb = f'<a href="/">Home</a> / {escape(title)}'
        og_type = "website"
        schema_type = "WebPage"
    body = blocks_to_body(blocks, crumb, title, desc)
    schema = {
        "@context": "https://schema.org",
        "@type": schema_type,
        "name": title,
        "headline": title,
        "description": desc,
        "url": canonical,
        "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": SITE},
    }
    return family_a(full_title, desc, canonical, body, og_type=og_type, schema=schema)


def convert_public_next() -> int:
    count = 0
    for path in sorted(PUBLIC.rglob("*.html")):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if "/_next/" not in text:
            continue
        new = rewrite_next_page(path, text)
        if "/_next/" in new:
            raise RuntimeError(f"converter left /_next/ in {path}")
        path.write_text(new, encoding="utf-8")
        count += 1
    return count


def patch_redirects() -> None:
    extra_lines = [
        "/solutions /solutions/index.html 200",
        "/solutions/ /solutions/index.html 200",
    ]
    for path in (PUBLIC / "_redirects", ROOT / "_redirects"):
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        changed = False
        for line in extra_lines:
            if line not in text:
                text = text.rstrip() + "\n" + line + "\n"
                changed = True
        if changed:
            path.write_text(text, encoding="utf-8")


def main() -> None:
    write_solutions()
    converted = convert_public_next()
    write_cities()
    patch_redirects()
    leftover = [p.relative_to(PUBLIC).as_posix() for p in PUBLIC.rglob("*.html") if "/_next/" in p.read_text(encoding="utf-8", errors="ignore")]
    print(f"solutions hub + {len(INDUSTRIES)} industry pages written")
    print(f"converted {converted} leftover Next HTML files")
    print(f"remaining /_next/ in public: {len(leftover)}")
    if leftover:
        print("\n".join(leftover[:20]))
        raise SystemExit(1)


if __name__ == "__main__":
    main()
