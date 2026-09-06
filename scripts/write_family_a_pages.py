#!/usr/bin/env python3
"""Put /ai-services/ and shared-shell gap pages on the Family A site.css chrome.

Does not touch /discovery/ Stripe checkout links.
"""
from __future__ import annotations

import re
import shutil
from pathlib import Path

from rewrite_next_leftovers import (
    PUBLIC,
    ROOT,
    SITE,
    family_a,
    meta_content,
)

PT_NAV = [
    ("/services/", "Serviços"),
    ("/plans/", "Planos"),
    ("/blog/", "Blog"),
    ("/contact/", "Contato"),
]
EN_NAV = [
    ("/services/", "Services"),
    ("/plans/", "Plans"),
    ("/blog/", "Blog"),
    ("/contact/", "Contact"),
]

AI_GROUPS = [
    (
        "Operations & automation",
        [
            "process-automation",
            "ai-agents-autonomous",
            "marketing-automation",
            "quality-assurance",
            "document-processing",
            "ai-document-intelligence",
        ],
    ),
    (
        "Intelligence & analytics",
        [
            "business-intelligence",
            "hr-analytics",
            "fraud-detection",
            "predictive-maintenance",
            "customer-experience",
            "supply-chain",
            "energy-management",
            "autonomous-growth-intelligence",
        ],
    ),
    (
        "Enterprise AI platform",
        [
            "generative-ai-enterprise",
            "ai-copilot-enterprise",
            "ai-rag-knowledge-systems",
            "ai-model-orchestration",
            "ai-integration-apis",
            "ai-strategy-roadmap",
            "content-generation",
        ],
    ),
    (
        "Security, governance & MLOps",
        [
            "ai-governance-trust",
            "ai-security-responsible-ai",
            "ai-security-operations-assistant",
            "ai-observability-mlops",
            "ai-agent-safety-evaluation",
            "ai-regulated-industries",
        ],
    ),
    (
        "Specialized systems",
        [
            "ai-email-reply-intelligence",
            "ai-context-engineering-enterprise",
            "ai-contact-center-intelligence",
            "ai-multimodal-intelligence",
            "ai-edge-realtime-inference",
            "ai-memory-agents-long-horizon",
            "ai-finetuning-alignment-pipelines",
            "ai-foundation-models-custom-training",
            "advanced-ai-enterprise-intelligence-hub",
        ],
    ),
]


def pretty_slug(slug: str) -> str:
    special = {"ai": "AI", "mlops": "MLOps", "rag": "RAG", "apis": "APIs", "hr": "HR", "qa": "QA"}
    return " ".join(special.get(w.lower(), w.capitalize()) for w in slug.replace("-", " ").split())


def service_desc(title: str) -> str:
    return f"{title} for teams that already have a stack — scoped after Discovery $99, not a boxed SKU."


def is_generic_title(title: str) -> bool:
    t = re.sub(r"\s+", " ", (title or "")).strip().lower()
    t = re.sub(r"(?:\s*[|·-]\s*zion tech group)+$", "", t).strip()
    return t in {"", "ai services", "ai service"}


def write_ai_child(slug: str, title: str, desc: str) -> str:
    body = f"""    <p class="crumb"><a href="/">Home</a> / <a href="/ai-services/">AI services</a> / {title}</p>
    <p class="eyebrow">AI service</p>
    <h1>{title}</h1>
    <p class="lead">{desc}</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/contact/">Contact</a>
      <a class="btn alt" href="/ai-services/">All AI services</a>
    </div>
    <div class="grid" style="margin-top:36px">
      <article class="card"><h3>What this is</h3><p>A capability Zion can scope onto the systems you already run. It is not a self-serve SKU and it is not priced from this page.</p></article>
      <article class="card"><h3>What Discovery writes</h3><p>One process, the tools in the loop, the human approval path, and a weekly number someone will actually review.</p></article>
      <article class="card featured"><h3>Commercial path</h3><p>Live prices live on <a href="/plans/">/plans/</a>. Typical sequence: Discovery $99 → Consulting $499 → Starter or Growth.</p></article>
    </div>
"""
    return family_a(
        f"{title} · Zion Tech Group",
        desc,
        f"{SITE}/ai-services/{slug}/",
        body,
        schema=schema_page(title, desc, f"{SITE}/ai-services/{slug}/", "Service"),
    )


def write(rel: str, html: str) -> None:
    dest = PUBLIC / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(html, encoding="utf-8")


def schema_page(name: str, desc: str, url: str, typ: str = "WebPage") -> dict:
    return {
        "@context": "https://schema.org",
        "@type": typ,
        "name": name,
        "description": desc,
        "url": url,
        "publisher": {"@type": "Organization", "name": "Zion Tech Group", "url": SITE},
    }


def write_ai_services() -> int:
    src_root = ROOT / "ai-services"
    dest_root = PUBLIC / "ai-services"
    dest_root.mkdir(parents=True, exist_ok=True)
    catalog: dict[str, tuple[str, str]] = {}
    converted = 0
    if src_root.is_dir():
        for child in sorted(p for p in src_root.iterdir() if p.is_dir()):
            idx = child / "index.html"
            if not idx.is_file():
                continue
            text = idx.read_text(encoding="utf-8", errors="ignore")
            dest = dest_root / child.name
            dest.mkdir(parents=True, exist_ok=True)
            dest_idx = dest / "index.html"
            converted += 1
            extracted = meta_content(text, r"<title>(.*?)</title>")
            extracted = re.sub(r"(?:\s*[|·-]\s*Zion Tech Group)+$", "", extracted, flags=re.I).strip()
            title = pretty_slug(child.name) if is_generic_title(extracted) else extracted
            desc = meta_content(text, r'<meta name="description" content="([^"]*)"')
            if not desc or "chatbots, RAG, computer vision" in desc or desc.startswith("Enterprise AI services"):
                desc = service_desc(title)
            dest_idx.write_text(write_ai_child(child.name, title, desc), encoding="utf-8")
            catalog[child.name] = (title, desc)

    grouped = {slug for _, slugs in AI_GROUPS for slug in slugs}
    extra = [slug for slug in catalog if slug not in grouped]
    groups = list(AI_GROUPS)
    if extra:
        groups.append(("More AI services", extra))

    sections = []
    for heading, slugs in groups:
        cards = []
        for slug in slugs:
            title, desc = catalog.get(slug, (pretty_slug(slug), "Capability scoped after Discovery $99."))
            href = f"/ai-services/{slug}/"
            cards.append(
                f'      <article class="card"><h3><a href="{href}">{title}</a></h3>'
                f"<p>{desc}</p><p><a href=\"{href}\">Open service →</a></p></article>"
            )
        if not cards:
            continue
        sections.append(f"    <h2 style=\"margin-top:40px\">{heading}</h2>\n    <div class=\"grid\">\n" + "\n".join(cards) + "\n    </div>")

    body = f"""    <p class="crumb"><a href="/">Home</a> / AI services</p>
    <p class="eyebrow">AI services</p>
    <h1>AI services. Scoped after Discovery.</h1>
    <p class="lead">Agents, document intelligence, automation, and MLOps for teams that already have a stack — not a boxed SKU. Discovery $99 maps one process before we write a statement of work.</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/solutions/">Industry solutions</a>
      <a class="btn alt" href="/services/">Full catalog</a>
    </div>
{chr(10).join(sections)}
    <article class="card featured" style="margin-top:28px">
      <h3>How Zion delivers this</h3>
      <p>Discovery $99 maps one process. Consulting $499 writes the roadmap. Starter implements the first loop. Growth operates it. If the honest answer is “do not automate yet”, that is the result.</p>
      <p style="margin-top:12px"><a class="btn" href="/contact/">Contact</a> <a class="btn alt" href="/plans/">See plans</a></p>
    </article>
"""
    hub = family_a(
        "AI Services · Zion Tech Group",
        "Enterprise AI services: agents, automation, document intelligence, MLOps, and governance. Scoped after Discovery $99.",
        f"{SITE}/ai-services/",
        body,
        schema=schema_page("AI Services", "Enterprise AI services from Zion Tech Group.", f"{SITE}/ai-services/", "CollectionPage"),
    )
    write("ai-services/index.html", hub)
    write("ai-services.html", hub)
    return converted


def write_cpa() -> None:
    body = """    <p class="crumb"><a href="/">Início</a> / CPA</p>
    <p class="eyebrow">Growth partner</p>
    <h1>CPA Growth Partner</h1>
    <p class="lead">Zion Tech Group — pague apenas pelo resultado que importa. Cost Per Action: lead qualificado, reunião ou venda. Sem ação, sem cobrança.</p>
    <div class="actions">
      <a class="btn" href="/contact/">Solicitar proposta CPA</a>
      <a class="btn alt" href="/plans/">Ver modelos de cobrança</a>
      <a class="btn alt" href="/discovery/">Discovery $99</a>
    </div>
    <div class="stats" style="margin-top:36px">
      <div class="stat"><strong>R$150</strong><span>por lead qualificado (MQL)</span></div>
      <div class="stat"><strong>R$500</strong><span>por reunião agendada (SQL)</span></div>
      <div class="stat"><strong>15%</strong><span>do ticket de venda (fechamento)</span></div>
    </div>
    <h2 style="margin-top:40px">Zion vs. agência tradicional</h2>
    <div class="grid grid-2">
      <article class="card">
        <h3>Agência tradicional</h3>
        <ul class="features">
          <li>Retenção mensal fixa</li>
          <li>Sem garantia de resultado</li>
          <li>Custo cresce com escopo</li>
          <li>Você gerencia tudo</li>
        </ul>
      </article>
      <article class="card featured">
        <h3>Zion CPA</h3>
        <ul class="features">
          <li>Pague só pelo que usar</li>
          <li>Sem retenção mínima</li>
          <li>Custo previsível por ação</li>
          <li>Nosso time no volante</li>
        </ul>
      </article>
    </div>
    <h2 style="margin-top:40px">Como funciona</h2>
    <div class="grid">
      <article class="card"><h3>1. Diagnóstico</h3><p>Auditoria do funil atual. Identificamos o CPA ideal para o negócio.</p></article>
      <article class="card"><h3>2. Setup</h3><p>Automação, IA e tracking. Você não levanta um dedo.</p></article>
      <article class="card"><h3>3. Ação</h3><p>Leads qualificados e reuniões reais. Cada ação é rastreada.</p></article>
      <article class="card"><h3>4. Cobrança</h3><p>Você paga apenas pelas ações que deram certo.</p></article>
    </div>
    <h2 style="margin-top:40px">Perguntas frequentes</h2>
    <div class="faq">
      <details><summary>Qual o investimento mínimo?</summary><p>Não há. Você paga apenas pelas ações entregues. Comece com um piloto de 30 dias e avalie.</p></details>
      <details><summary>Como vocês garantem qualidade?</summary><p>Leads são validados via formulário + análise de fit. Só cobramos por MQL real.</p></details>
      <details><summary>Posso cancelar quando quiser?</summary><p>Sem fidelidade. Sem multa. Sem perguntas.</p></details>
    </div>
    <div class="cta-box">
      <h2>Pronto para crescer com CPA?</h2>
      <p>Receba uma proposta personalizada em 24h. Sem compromisso.</p>
      <p style="margin-top:16px"><a class="btn" href="mailto:kleber@ziontechgroup.com?subject=Proposta%20CPA%20Zion">Falar com Kleber</a></p>
    </div>
"""
    write(
        "cpa/index.html",
        family_a(
            "Zion Tech Group — CPA Growth Partner | Pague por Resultado",
            "Zion Tech Group: crescimento com custo por ação real. Pague apenas por lead qualificado ou venda entregue.",
            f"{SITE}/cpa/",
            body,
            lang="pt-BR",
            skip_label="Ir para o conteúdo",
            menu_label="Abrir menu",
            nav_label="Principal",
            nav_items=PT_NAV,
            schema=schema_page("CPA Growth Partner", "Cost per action growth partner from Zion Tech Group.", f"{SITE}/cpa/"),
        ),
    )


def write_partners() -> None:
    body = """    <p class="crumb"><a href="/">Home</a> / Partners</p>
    <p class="eyebrow">Partner program</p>
    <h1>Earn recurring commissions</h1>
    <p class="lead">IT consultants, MSPs, and agencies earn on every closed referral. We handle delivery — you stay in the client relationship.</p>
    <div class="actions">
      <a class="btn" href="mailto:partners@ziontechgroup.com">Apply to partner program</a>
      <a class="btn alt" href="/contact/">Talk to a partner manager</a>
      <a class="btn alt" href="/referral/">Referral page</a>
    </div>
    <h2 style="margin-top:40px">Why partner with Zion</h2>
    <div class="grid">
      <article class="card"><h3>20% recurring commission</h3><p>Earn 20% on managed-service retainers for the life of the subscription. Implementation work pays a one-time share.</p></article>
      <article class="card"><h3>Zero delivery work</h3><p>Discovery, implementation, training, and support stay with Zion. You refer. We deliver. You get paid.</p></article>
      <article class="card"><h3>Dedicated partner manager</h3><p>One contact for deal registration, qualification, and commission tracking.</p></article>
    </div>
    <h2 style="margin-top:40px">How it works</h2>
    <ol class="steps">
      <li><strong>Register</strong> — apply by email. We review within 48 hours. No approval fee.</li>
      <li><strong>Refer clients</strong> — share a tracking link, co-present, or send a qualified lead.</li>
      <li><strong>We close and deliver</strong> — sales, Discovery, proposal, and operations stay with Zion. You get status updates.</li>
      <li><strong>Get paid</strong> — commissions calculated monthly via bank transfer or PayPal.</li>
    </ol>
    <h2 style="margin-top:40px">Commission structure</h2>
    <table>
      <thead><tr><th>Service type</th><th>Commission</th><th>Payout</th><th>Duration</th></tr></thead>
      <tbody>
        <tr><td>Managed service retainer<br><span style="color:var(--muted)">From $999/month</span></td><td>20% recurring</td><td>Monthly</td><td>Lifetime of subscription</td></tr>
        <tr><td>Implementation sprint<br><span style="color:var(--muted)">From $2,999</span></td><td>15% one-time</td><td>On completion</td><td>One-time</td></tr>
        <tr><td>AI readiness assessment<br><span style="color:var(--muted)">$499</span></td><td>20% one-time</td><td>On completion</td><td>One-time</td></tr>
        <tr><td>Custom AI development<br><span style="color:var(--muted)">Project-based</span></td><td>10% one-time</td><td>On completion</td><td>One-time</td></tr>
      </tbody>
    </table>
    <article class="card featured" style="margin-top:20px">
      <h3>Example: managed service retainer</h3>
      <p>You refer a client who signs a $1,500/month managed AI operations retainer.</p>
      <p>Your commission: 20% × $1,500 = <strong>$300/month</strong> for as long as they stay.</p>
      <p>After 12 months: $3,600 from one referral.</p>
    </article>
    <h2 style="margin-top:40px">Who should partner</h2>
    <div class="grid">
      <article class="card"><h3>MSPs &amp; IT consultants</h3><p>Add AI and automation without hiring a delivery bench.</p></article>
      <article class="card"><h3>Agencies &amp; developers</h3><p>Refer work that is not your core expertise. Earn while we deliver.</p></article>
      <article class="card"><h3>Freelancers &amp; advisors</h3><p>CTO-as-a-service and independent consultants can extend the advisory role.</p></article>
    </div>
    <h2 style="margin-top:40px">Services you can refer</h2>
    <div class="grid">
      <article class="card"><h3>AI customer support</h3><p>Chat, ticket intelligence, and a human handoff.</p><p><a href="/services/ai-customer-support-pro/">View service →</a></p></article>
      <article class="card"><h3>Data &amp; analytics</h3><p>Warehouses, BI, and forecasting loops.</p><p><a href="/services/ai-predictive-analytics/">View service →</a></p></article>
      <article class="card"><h3>Cybersecurity</h3><p>SOC, incident response, and compliance automation.</p><p><a href="/services/cybersecurity/">View service →</a></p></article>
      <article class="card"><h3>Cloud cost / FinOps</h3><p>Rightsizing and spend visibility before a retainer.</p><p><a href="/services/cloud-cost-optimization/">View service →</a></p></article>
      <article class="card"><h3>DevOps / DevSecOps</h3><p>Pipelines, scanning, and observability.</p><p><a href="/services/devops-pipeline/">View service →</a></p></article>
      <article class="card"><h3>Workflow automation</h3><p>Process loops on the systems you already run.</p><p><a href="/services/ai-workflow-automation/">View service →</a></p></article>
    </div>
    <div class="cta-box">
      <h2>Ready to start earning?</h2>
      <p>No upfront commitment — apply, get approved, start referring.</p>
      <p style="margin-top:16px"><a class="btn" href="mailto:partners@ziontechgroup.com">Apply to partner program</a> <a class="btn alt" href="/contact/">Talk to a partner manager</a></p>
    </div>
"""
    write(
        "partners/index.html",
        family_a(
            "Partner Program — Earn Recurring Commissions | Zion Tech Group",
            "Join Zion Tech Group's partner referral program. IT consultants, MSPs, and agencies earn 20% recurring commission on every referral.",
            f"{SITE}/partners/",
            body,
            schema=schema_page("Partner Program", "Referral and affiliate program for IT consultants, MSPs, and agencies.", f"{SITE}/partners/"),
        ),
    )


def write_services() -> None:
    current = (PUBLIC / "services/index.html").read_text(encoding="utf-8", errors="ignore")
    start = current.find('<div class="grid">')
    end = current.find('<div class="cta')
    if start == -1 or end == -1:
        raise RuntimeError("services catalog grid not found")
    catalog = current[start:end].strip()
    body = f"""    <p class="crumb"><a href="/">Home</a> / Services</p>
    <p class="eyebrow">Catalog</p>
    <h1>Services</h1>
    <p class="lead">Nested <code>/services/*</code> URLs describe capabilities Zion can scope after a $99 Discovery. They are not self-serve SKUs. Live prices are on <a href="/plans/">/plans/</a>.</p>
    {catalog}
    <div class="cta-box">
      <a class="btn" href="/discovery/">Book $99 Discovery</a>
      <a class="btn alt" href="/plans/">Plans</a>
      <a class="btn alt" href="/ai-services/">AI services hub</a>
    </div>
"""
    extra = "<style>ul.clean{padding-left:18px}ul.clean li{margin:6px 0;color:var(--muted)}</style>\n"
    write(
        "services/index.html",
        family_a(
            "Services | Zion Tech Group",
            "Zion Tech Group AI and IT services catalog. Scoped after Discovery.",
            f"{SITE}/services/",
            body,
            extra_head=extra,
            schema=schema_page("Services", "Zion Tech Group AI and IT services catalog. Scoped after Discovery.", f"{SITE}/services/", "CollectionPage"),
        ),
    )


def write_tools() -> None:
    body = """    <p class="crumb"><a href="/">Home</a> / Free AI IT tools</p>
    <p class="eyebrow">Tools</p>
    <h1>Free AI IT Tools</h1>
    <p class="lead">Utilities IT teams actually open: formatters, checkers, and quick audits. They are not a substitute for a managed service. When you need production automation, book Discovery.</p>
    <div class="grid">
      <article class="card"><h3>On this site</h3>
        <ul class="features">
          <li><a href="/tools/">Tools index</a></li>
          <li><a href="/tools/json-formatter/">JSON formatter</a></li>
          <li><a href="/tools/regex-tester/">Regex tester</a></li>
          <li><a href="/tools/health-check/">Health check</a></li>
        </ul>
      </article>
      <article class="card"><h3>When to call Zion</h3><p>Ticket floods, unowned cloud spend, or a help desk that only works because three people never sleep.</p></article>
    </div>
    <div class="cta-box">
      <a class="btn" href="/discovery/">Book $99 Discovery</a>
      <a class="btn alt" href="/tools/">Open tools</a>
    </div>
"""
    write(
        "free-ai-it-tools/index.html",
        family_a(
            "Free AI IT Tools | Zion Tech Group",
            "Free AI utilities for IT teams and MSPs from Zion Tech Group — plus the path to a scoped engagement.",
            f"{SITE}/free-ai-it-tools/",
            body,
            schema=schema_page("Free AI IT Tools", "Free AI utilities for IT teams and MSPs.", f"{SITE}/free-ai-it-tools/"),
        ),
    )


def write_roteiros() -> None:
    body = """    <p class="crumb"><a href="/">Início</a> / Roteiros</p>
    <p class="eyebrow">Operação</p>
    <h1>Roteiros operacionais</h1>
    <p class="lead">Guias curtos de como a Zion entra num processo real. Trabalho é recortado depois do Discovery $99 — não é produto de prateleira.</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Pagar Discovery $99</a>
      <a class="btn alt" href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1">Agendar</a>
      <a class="btn alt" href="https://wa.me/13024640950?text=Ola%20Kleber%2C%20quero%20o%20Discovery%20%2499%20da%20Zion%20Tech%20Group.">WhatsApp</a>
    </div>
    <div class="grid" style="margin-top:36px">
      <article class="card"><h3>Imobiliárias</h3><p>Leads, visita e contrato sem copiar WhatsApp para planilha.</p><p><a href="/para-imobiliarias/">Abrir roteiro</a></p></article>
      <article class="card"><h3>MSP / TI gerenciada</h3><p>Fila de ticket e evidência de SLA antes de vender agente.</p><p><a href="/managed-it-services/">Abrir MSP</a></p></article>
      <article class="card"><h3>FinOps</h3><p>Custo de nuvem e desperdício visível antes de um retainer.</p><p><a href="/finops-consulting/">Abrir FinOps</a></p></article>
      <article class="card"><h3>Discovery em 7 dias</h3><p>O que acontece entre o pagamento de $99 e o relatório.</p><p><a href="/7-dias/">Ver o prazo</a></p></article>
      <article class="card"><h3>Telegram</h3><p>Listener + worker. Capacidade operacional, não SKU self-serve.</p><p><a href="/telegram/">Ver agentes</a></p></article>
      <article class="card"><h3>Indústrias e direitos</h3><p>Índice antigo: indústrias, LGPD, trabalho, ambiente.</p><p><a href="/roteiros/industrias/">Indústrias</a> · <a href="/direitos-globais/">Direitos</a></p></article>
    </div>
    <p class="see-also"><a href="/academy/">Academia</a> · <a href="/blog/">Blog</a> · <a href="/plans/">Planos</a> · <a href="/privacidade/">Privacidade</a></p>
"""
    write(
        "roteiros/index.html",
        family_a(
            "Roteiros · Zion Tech Group",
            "Roteiros operacionais da Zion: imobiliárias, MSP, FinOps, Telegram, Discovery em 7 dias. Sem SKU de prateleira.",
            f"{SITE}/roteiros/",
            body,
            lang="pt-BR",
            skip_label="Ir para o conteúdo",
            menu_label="Abrir menu",
            nav_label="Principal",
            nav_items=PT_NAV,
            schema=schema_page("Roteiros", "Roteiros operacionais da Zion Tech Group.", f"{SITE}/roteiros/"),
        ),
    )


def write_para() -> None:
    body = """    <p class="crumb"><a href="/">Início</a> / Para</p>
    <p class="eyebrow">Verticais</p>
    <h1>Para o seu tipo de operação</h1>
    <p class="lead">Páginas curtas por vertical. O trabalho só começa depois do Discovery $99 — não é um SKU de prateleira.</p>
    <div class="actions">
      <a class="btn" href="/discovery/">Discovery $99</a>
      <a class="btn alt" href="/roteiros/">Ver roteiros</a>
    </div>
    <div class="grid" style="margin-top:36px">
      <article class="card"><h3>MSPs</h3><p>Fila de ticket e evidência de SLA antes de vender agente.</p><p><a href="/para-msps/">Abrir /para-msps/</a> · <a href="/para/msp/">atalho</a></p></article>
      <article class="card"><h3>Clínicas</h3><p>No-show e confirmação no WhatsApp. Sem prontuário milagroso.</p><p><a href="/clinica/">Abrir /clinica/</a> · <a href="/para/clinica/">atalho</a></p></article>
      <article class="card"><h3>Imobiliárias</h3><p>Lead de portal que esfria e visita sem confirmação.</p><p><a href="/para-imobiliarias/">Abrir /para-imobiliarias/</a> · <a href="/para/imobiliaria/">atalho</a></p></article>
    </div>
"""
    write(
        "para/index.html",
        family_a(
            "Para o seu tipo de operação · Zion Tech Group",
            "Verticais Zion: MSP, clínica e imobiliária. Discovery $99 mapeia um processo real.",
            f"{SITE}/para/",
            body,
            lang="pt-BR",
            skip_label="Ir para o conteúdo",
            menu_label="Abrir menu",
            nav_label="Principal",
            nav_items=PT_NAV,
            schema=schema_page("Para", "Verticais Zion Tech Group.", f"{SITE}/para/", "CollectionPage"),
        ),
    )

    stubs = [
        (
            "para/msp/index.html",
            "Para MSPs · Zion Tech Group",
            "MSP que quer oferecer IA sem montar fábrica. Discovery $99, depois o menu oficial.",
            f"{SITE}/para-msps/",
            "/para-msps/",
            "Hub MSP",
            '<a href="/para-msps/">/para-msps/</a> · <a href="/managed-it-services/">/managed-it-services/</a>.',
        ),
        (
            "para/clinica/index.html",
            "Para clínicas · Zion Tech Group",
            "No-show e confirmação no WhatsApp. Discovery $99 mapeia um processo operacional da clínica.",
            f"{SITE}/clinica/",
            "/clinica/",
            "Vertical clínica",
            '<a href="/clinica/">/clinica/</a>.',
        ),
        (
            "para/imobiliaria/index.html",
            "Para imobiliárias · Zion Tech Group",
            "Lead de portal que esfria e visita sem confirmação. Discovery $99 mapeia um processo da imobiliária em 7 dias.",
            f"{SITE}/imobiliaria/",
            "/imobiliaria/",
            "Vertical imobiliária",
            '<a href="/imobiliaria/">/imobiliaria/</a> · <a href="/para-imobiliarias/">/para-imobiliarias/</a>.',
        ),
    ]
    for rel, title, desc, canonical, dest, eyebrow, links in stubs:
        stub_body = f"""    <p class="crumb"><a href="/">Início</a> / <a href="/para/">Para</a> / {eyebrow}</p>
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title.split("·")[0].strip()}</h1>
    <p class="lead">{desc}</p>
    <p>{links}</p>
    <div class="actions">
      <a class="btn" href="{dest}">Abrir página</a>
      <a class="btn alt" href="/discovery/">Discovery $99</a>
    </div>
"""
        write(
            rel,
            family_a(
                title,
                desc,
                canonical,
                stub_body,
                lang="pt-BR",
                extra_head=f'<meta http-equiv="refresh" content="0;url={dest}">\n',
                skip_label="Ir para o conteúdo",
                menu_label="Abrir menu",
                nav_label="Principal",
                nav_items=PT_NAV,
            ),
        )


def write_referral() -> None:
    body = """    <p class="crumb"><a href="/">Início</a> / Referral</p>
    <p class="eyebrow">Partner</p>
    <h1>Indique um processo caro. A Zion entra com Discovery $99.</h1>
    <p class="lead">Você indica a operação. Nós diagnosticamos em até 7 dias. Comissão no programa de parceiros quando o deal avança.</p>
    <ol class="steps">
      <li>Mande o contato + empresa + processo dolorido.</li>
      <li>Zion responde em 24h úteis com Discovery ou CPA.</li>
      <li>Detalhe comercial vai por e-mail, não nesta página.</li>
    </ol>
    <div class="actions">
      <a class="btn" href="https://wa.me/13024640950?text=Ola%20Kleber%2C%20quero%20indicar%20um%20cliente%20para%20o%20Discovery%20%2499">Indicar no WhatsApp</a>
      <a class="btn alt" href="/indique/">Página completa</a>
      <a class="btn alt" href="/partners/">Partner program</a>
    </div>
    <p class="see-also"><a href="/discovery/">Pagar Discovery $99</a> · <a href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1">Agendar 30 min</a> · <a href="mailto:kleber@ziontechgroup.com?subject=Indicacao%20Zion">E-mail</a></p>
"""
    write(
        "referral/index.html",
        family_a(
            "Indique a Zion | Referral",
            "Indique um cliente para a Zion Tech Group. Discovery $99 e programa de parceiros.",
            f"{SITE}/indique/",
            body,
            lang="pt-BR",
            skip_label="Ir para o conteúdo",
            menu_label="Abrir menu",
            nav_label="Principal",
            nav_items=PT_NAV,
            schema=schema_page("Referral", "Indique um cliente para a Zion Tech Group.", f"{SITE}/referral/"),
        ),
    )


def write_whatsapp() -> None:
    wa = "https://wa.me/13024640950?text=Ola%20Kleber%2C%20quero%20o%20Discovery%20%2499%20da%20Zion"
    body = f"""    <p class="crumb"><a href="/">Início</a> / WhatsApp</p>
    <p class="eyebrow">Contato</p>
    <h1>Abrindo o WhatsApp…</h1>
    <p class="lead">Discovery $99 · Consulting $499 · indicação. Se o app não abrir, use o botão.</p>
    <div class="actions">
      <a class="btn" href="{wa}">Abrir WhatsApp</a>
      <a class="btn alt" href="/discovery/">Pagar Discovery $99</a>
      <a class="btn alt" href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1">Agendar</a>
    </div>
    <p class="see-also"><a href="/indique/">Indicar</a> · <a href="/contact/">Contato</a></p>
"""
    write(
        "whatsapp/index.html",
        family_a(
            "Falar no WhatsApp | Zion Tech Group",
            "Fale com Kleber no WhatsApp. Discovery $99, Consulting $499, indicação e CPA.",
            f"{SITE}/whatsapp/",
            body,
            lang="pt-BR",
            extra_head=f'<meta http-equiv="refresh" content="0;url={wa}">\n',
            skip_label="Ir para o conteúdo",
            menu_label="Abrir menu",
            nav_label="Principal",
            nav_items=PT_NAV,
            schema=schema_page("WhatsApp", "Fale com a Zion Tech Group no WhatsApp.", f"{SITE}/whatsapp/"),
        ),
    )


def overwrite_root_next() -> None:
    for name in ("solutions", "ai-services"):
        src = PUBLIC / name
        dest = ROOT / name
        if not src.is_dir():
            continue
        dest.mkdir(parents=True, exist_ok=True)
        for path in src.rglob("*.html"):
            target = dest / path.relative_to(src)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, target)
        alias = PUBLIC / f"{name}.html"
        if alias.exists():
            shutil.copy2(alias, ROOT / f"{name}.html")


def patch_redirects() -> None:
    extra_lines = [
        "/ai-services /ai-services/index.html 200",
        "/ai-services/ /ai-services/index.html 200",
        "/cpa /cpa/index.html 200",
        "/cpa/ /cpa/index.html 200",
        "/partners /partners/index.html 200",
        "/partners/ /partners/index.html 200",
        "/services /services/index.html 200",
        "/services/ /services/index.html 200",
        "/free-ai-it-tools /free-ai-it-tools/index.html 200",
        "/free-ai-it-tools/ /free-ai-it-tools/index.html 200",
        "/roteiros /roteiros/index.html 200",
        "/roteiros/ /roteiros/index.html 200",
        "/para /para/index.html 200",
        "/para/ /para/index.html 200",
        "/referral /referral/index.html 200",
        "/referral/ /referral/index.html 200",
        "/whatsapp /whatsapp/index.html 200",
        "/whatsapp/ /whatsapp/index.html 200",
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


def assert_no_next() -> None:
    leftover = [
        p.relative_to(PUBLIC).as_posix()
        for p in PUBLIC.rglob("*.html")
        if "/_next/" in p.read_text(encoding="utf-8", errors="ignore")
    ]
    if leftover:
        raise SystemExit("remaining /_next/ in public:\n" + "\n".join(leftover[:20]))


def main() -> None:
    converted = write_ai_services()
    write_cpa()
    write_partners()
    write_services()
    write_tools()
    write_roteiros()
    write_para()
    write_referral()
    write_whatsapp()
    overwrite_root_next()
    patch_redirects()
    assert_no_next()
    print(f"ai-services hub + {converted} child pages on Family A")
    print("chrome-gap pages wrapped: cpa partners services free-ai-it-tools roteiros para referral whatsapp")
    print("root solutions + ai-services overwritten so gap-fill cannot ship Next")


if __name__ == "__main__":
    main()
