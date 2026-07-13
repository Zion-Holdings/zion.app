#!/usr/bin/env python3
import json, os, re
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
IN_PATH = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
OUT_PATH = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
HEALTH_PATH = REPO / 'lead-crm' / 'miner_health.json'

# Lightweight enrichments without external network calls.
# Use domain/email tokens to infer context and build a tailored template
# that keeps the original subject as a base but improves it.
# We add:
# - recipient_display_name
# - company_hint
# - service_references_primary
# - body_template
# - subject_template

TOKENS_IT = [
    'ti', 'it', 'infra', 'devops', 'cloud', 'security', 'cyber', 'data',
    'infrastructure', 'engineering', 'dev', 'ops', 'sre', 'platform', 'automation'
]
TOKENS_OPS = [
    'operations', 'operacoes', 'op', 'logistics', 'supply', 'procurement',
    'facilities', 'gerenciamento', 'gestao', 'inovacao', 'innovation',
    'digital', 'transformacao', 'transformation'
]
FALLBACK_SUBJECT = 'Parceria Zion Tech Group — operações e eficiência para TI'

def guess_company_hint(name, domain, email):
    if name and name.lower() not in {'app'}:
        return name
    d = (domain or '').lower()
    parts = [p for p in d.split('.') if p and p not in {'com','br','ai','de','org','net','io','co'}]
    if parts:
        return parts[0].capitalize()
    # from email prefix
    prefix = (email or '').split('@')[0].split('.')[0]
    return prefix.capitalize() if prefix else 'Equipe'

def guess_display_name(email):
    prefix = (email or '').split('@')[0]
    prefix = prefix.replace('.', ' ').replace('-', ' ').replace('_', ' ')
    return prefix.title() if prefix else 'Contato'

def guess_services(domain, name):
    text = f"{(domain or '')} {(name or '')}".lower()
    services = []
    if any(t in text for t in ['hcl']):
        services += ['integração de sistemas', 'automação de TI', 'cloud híbrida']
    if any(t in text for t in ['dekra']):
        services += ['segurança operacional', 'conformidade', 'automação de inspeções']
    if any(t in text for t in ['procurri', 'fgv', 'shervacom', 'gakenholz', 'scrubly', 'wordzen', 'solyssey', 'kilocode', 'channelpronetwork', 'ztg', 'sscs']):
        services += ['modernização de TI', 'automação', 'eficiência operacional']
    if any(t in text for t in TOKENS_IT):
        services += ['automação de TI', 'cloud híbrida']
    if not services:
        services = ['automação de TI', 'eficiência operacional', 'cloud híbrida']
    # unique keep order
    seen = set()
    deduped = []
    for s in services:
        if s not in seen:
            seen.add(s)
            deduped.append(s)
    return deduped[:5]

def build_subject(contact, company):
    return FALLBACK_SUBJECT

def build_body(contact, company, services, website='https://ziontechgroup.com'):
    cal = 'https://calendly.com/kleber-ziontechgroup'
    svc = '; '.join(services[:3]) if services else 'automação de TI, eficiência operacional'
    return (
        f"Olá {contact},\n\n"
        f"Meu nome é Kleber Garcia Alcatrão, CEO da Zion Tech Group. "
        f"Percebi que a {company} pode ganhar ritmo com {svc.lower()}.\n\n"
        "Tenho duas ideias práticas para explorarmos em 15 minutos:\n"
        f"1) Revisar gargalos operacionais com foco em {services[0] if services else 'automação'}, medindo impacto em até 4 semanas.\n"
        "2) Prototipar uma automação ponta a ponta com baixo risco e ROI visível.\n\n"
        f"Se fizer sentido, agenda direto aqui: {cal}\n"
        f"Conheça mais em {website} — temos serviços novos de IA e ferramentas gratuitas.\n\n"
        "Abraço,\nKleber Garcia Alcatrão\nCEO — Zion Tech Group\n"
        "https://ziontechgroup.com | kleber@ziontechgroup.com"
    )

def enrich_row(r, idx):
    email = (r.get('to') or r.get('recipient') or r.get('email') or '').strip().lower()
    if not email:
        return r
    name = (r.get('name') or '').strip()
    domain = (r.get('domain') or '').strip()
    company = guess_company_hint(name, domain, email)
    contact = guess_display_name(email)
    services = guess_services(domain, name)
    existing_subject = (r.get('subject') or '').strip()
    subject = existing_subject or build_subject(contact, company)
    body = r.get('body') or build_body(contact, company, services)
    r.update({
        'to': email,
        'name': name,
        'domain': domain,
        'company_name': company,
        'display_name': contact,
        'recipient': email,
        'email': email,
        'service_references_primary': services,
        'subject': subject,
        'body': body,
        'llm_provider': r.get('llm_provider') or 'deterministic-template-v1',
        'llm_model': r.get('llm_model') or 'enrich-v1',
        'subject_template': subject,
        'body_template': body,
    })
    return r

def main():
    data = json.loads(IN_PATH.read_text(encoding='utf-8'))
    rows = data.get('ready') or data.get('recipients') or data.get('batch') or []
    enriched = [enrich_row(dict(r), i) for i, r in enumerate(rows)]
    data['ready'] = enriched
    data['generatedAt'] = datetime.now(timezone.utc).isoformat()
    OUT_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')

    # Update miner_health.json with outreach analysis metrics
    health = {}
    if HEALTH_PATH.exists():
        try:
            health = json.loads(HEALTH_PATH.read_text(encoding='utf-8'))
        except Exception:
            health = {}
    now = datetime.now(timezone.utc).isoformat()
    health['ts'] = now
    health['last_outreach_analysis'] = now
    health['outreach_ready_total'] = len(enriched)
    health['outreach_send_disabled'] = True
    health['outreach_subjects'] = list({r.get('subject') for r in enriched if r.get('subject')})
    service_refs = []
    for r in enriched:
        for s in (r.get('service_references_primary') or []):
            service_refs.append(s)
    from collections import Counter
    c = Counter(service_refs)
    health['service_references_top'] = [{"service": k, "count": v} for k, v in c.most_common()]
    HEALTH_PATH.write_text(json.dumps(health, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'status':'analyzed','outreach_ready_total':len(enriched),'ts':now}, ensure_ascii=False))

if __name__ == '__main__':
    main()
