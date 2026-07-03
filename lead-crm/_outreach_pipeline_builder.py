#!/usr/bin/env python3
"""Stage-1 builder: lead discovery + LLM tailoring + batch metadata.
Does NOT send emails. Designed to run every 3 minutes."""
import importlib, json, os, re, datetime, sys
from pathlib import Path

base = Path('/data/data/com.termux/files/home/zion-support.github.io')
lead_crm = base / 'lead-crm'
lead_crm.mkdir(parents=True, exist_ok=True)
timestamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')

sys.path.insert(0, sys_path := str(base))
try:
    from lib.llm_client import chat as _llm_chat
except Exception:
    _llm_chat = None

system_addresses = ['noreply','no-reply','mailer-daemon','abuse','postmaster','root','admin@localhost','example.com']
free_providers = ['gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com','icloud.com','protonmail.com','yandex.com','zoho.com']

def valid_email(email):
    e = email.lower()
    return e and '@' in e and not any(s in e for s in system_addresses)

def is_business(email):
    e = email.lower()
    domain = e.split('@',1)[1] if '@' in e else ''
    return domain not in free_providers

it_pool = [
    'it','it-remote-workforce-enablement','it-incident-response-retainer',
    'it-cost-optimization-cloud','it-modern-dev-platform','it-secure-access-service-edge',
    'it-zero-trust-access','it-backup-disaster-recovery','it-hybrid-cloud-orchestrator','it-endpoint-management',
]

candidates = []

def _tailor(r):
    if not _llm_chat:
        return r
    subject = r.get('subject', '') or ''
    body = r.get('body', '') or ''
    if not body:
        return r
    company = r.get('company_name') or r.get('name') or ''
    reason = r.get('reason', '') or ''
    website = r.get('website', '') or ''
    contact = r.get('display_name', '') or ''
    if not any([company, reason, website, contact, subject]):
        return r
    prompt = (
        "Rewrite this outreach email into a concise, personalized Portuguese message for Zion Tech Group. "
        "Keep it short and direct. Do not invent facts. If context is insufficient, keep the original body intact.\\n\\n"
        f"Company: {company}\\nWebsite: {website}\\nContext: {reason}\\nContact: {contact}\\n"
        f"Subject: {subject}\\nBody:\\n{body}\\n"
    )
    messages = [
        {"role":"system","content":"You are a helpful assistant that rewrites business emails concisely."},
        {"role":"user","content":prompt},
    ]
    last_err = None
    for _ in range(3):
        try:
            result = _llm_chat(messages, provider='auto')
            text = (result.get('content') or '').strip()
            if not text:
                last_err = 'empty_llm_content'
                continue
            lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
            if lines:
                r['subject'] = lines[0].replace('Assunto:', '').strip() or subject
                r['body'] = '\n'.join(lines[1:]).strip() if len(lines) > 1 else text
            else:
                r['body'] = text
            r['llm_provider'] = result.get('provider')
            r['llm_model'] = result.get('model')
            return r
        except Exception as e:
            last_err = str(e)
            continue
    r['llm_provider'] = r.get('llm_provider') or 'template'
    r['llm_model'] = r.get('llm_model') or 'deterministic-template-v1'
    r['tailor_error'] = last_err
    return r

service_lookup = {}
try:
    txt = (base / 'app/data/servicesData.ts').read_text(errors='ignore')
    ids = re.findall(r"id:\s*'([^']+)'", txt)
    titles = re.findall(r"title:\s*'([^']+)'", txt)
    hrefs = re.findall(r"href:\s*'([^']+)'", txt)
    for i, t, h in zip(ids, titles, hrefs):
        service_lookup[i] = {'id': i, 'title': t, 'href': h}
except Exception:
    pass

def build_body(name, services, reason=''):
    primary = services[:3]
    lines = []
    if reason:
        lines.append(f"Olá, equipe da {name},\\n\\n{reason}")
    else:
        lines.append(f"Olá, equipe da {name},\\n\\nSeu perfil indica potencial alinhamento com nossos serviços de TI gerenciada, migração para nuvem e segurança.")
    if primary:
        lines.append("\\nPrincipais alinhamentos com a sua atuação:")
        for sid in primary:
            svc = service_lookup.get(sid, {'id': sid, 'title': sid.replace('it-','').replace('-',' ').title(), 'href': f'/services/{sid}'})
            lines.append(f"- {svc['title']}: {svc['href']}")
    if len(services) > 3:
        extra = ', '.join(service_lookup.get(s, {'title': s})['title'] for s in services[3:6])
        lines.append(f"\\nTambém vale a pena conferir: {extra}.")
    lines.append("\\nGostariam de agendar uma chamada rápida?\\n\\nAtenciosamente,\\nEquipe Zion Tech Group\\nkleber@ziontechgroup.com | +1 302 464 0950\\nhttps://ziontechgroup.com")
    return '\\n'.join(lines)

def build_html(name, services, reason=''):
    primary = services[:3]
    html = [f"<html><body><p>Olá, equipe da {name},</p>"]
    if reason:
        html.append(f"<p>{reason}</p>")
    if primary:
        html.append("<p><strong>Principais alinhamentos com a sua atuação:</strong></p><ul>")
        for sid in primary:
            svc = service_lookup.get(sid, {'id': sid, 'title': sid.replace('it-','').replace('-',' ').title(), 'href': f'/services/{sid}'})
            html.append(f"<li>{svc['title']}: <a href=\"{svc['href']}\">{svc['href']}</a></li>")
        html.append("</ul>")
    if len(services) > 3:
        extra = ', '.join(service_lookup.get(s, {'title': s})['title'] for s in services[3:6])
        html.append(f"<p>Também vale a pena conferir: {extra}.</p>")
    html.append("<p>Gostariam de agendar uma chamada rápida?</p><p>Atenciosamente,<br/>Equipe Zion Tech Group<br/>kleber@ziontechgroup.com | +1 302 464 0950<br/><a href=\"https://ziontechgroup.com\">https://ziontechgroup.com</a></p></body></html>")
    return '\\n'.join(html)

recipients = []
# Only use short-lived contacts from miner if available
mined_path = lead_crm / 'outreach_ready_mined_old_emails.json'
if mined_path.exists():
    try:
        mined = json.loads(mined_path.read_text(errors='ignore'))
        for c in mined.get('contacts', []):
            c.setdefault('source', 'mined_in_anywhere')
            c.setdefault('services', [it_pool[0], it_pool[2], it_pool[4]])
            candidates.append(c)
    except Exception:
        pass

for p in sorted(lead_crm.glob('outreach_batch_*.json')):
    try:
        with open(p, 'r', errors='ignore') as f:
            b = json.load(f)
        for r in b.get('recipients', []):
            email = r.get('email', r.get('recipient', '')).lower()
            if email and valid_email(email) and email not in {c.get('email','').lower() for c in candidates}:
                c = {'email': email, 'company_name': r.get('company_name') or r.get('name') or r.get('display_name'), 'source': 'fallback_batch'}
                candidates.append(c)
    except Exception:
        pass

unique, seen2 = [], set()
for c in candidates:
    email = c.get('email', c.get('recipient', '')).lower()
    if email and email not in seen2:
        seen2.add(email)
        unique.append(c)
candidates = unique

business = [c for c in candidates if is_business(c.get('email', c.get('recipient', '')).lower())]
others = [c for c in candidates if not is_business(c.get('email', c.get('recipient', '')).lower())]
selected = (business + others)[:20]

for c in selected:
    email = c.get('email', c.get('recipient', '')).lower()
    if not valid_email(email):
        continue
    name = c.get('company_name', c.get('name', c.get('display_name', email.split('@')[0])))
    reason = c.get('reason', c.get('description', ''))
    services = c.get('services', [])
    if not services:
        services = it_pool[:5]
    primary = [s for s in it_pool if s in services][:3]
    services = (primary + [s for s in services if s not in primary])[:6] if services else it_pool[:5]
    body = build_body(name, services, reason)
    html = build_html(name, services, reason)
    rec = {
        'recipient': email, 'to': email, 'email': email,
        'display_name': c.get('display_name', name),
        'company_name': name,
        'subject': f"{name} — IT support options worth comparing",
        'body': body, 'html': html,
        'name': name,
        'service_references': {sid: service_lookup.get(sid, {'id': sid, 'title': sid, 'href': f'/services/{sid}'}) for sid in services},
        'service_references_primary': services[:3],
        'template_context': {'services_grid': it_pool[:5], 'outbound_send': 'outbound-send-logo'},
        'preparedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'status': 'ready',
        'source': c.get('source', 'lead_discovery_current'),
        'skipped_reason': ''
    }
    recipients.append(_tailor(rec))

forced=[]
for rec in recipients:
    if not rec.get('llm_provider') or rec.get('llm_provider')=='template':
        rec = _tailor(rec)
    forced.append(rec)
recipients=forced
template_count=sum(1 for r in recipients if r.get('llm_provider')=='template')
print('LLM_TAILOR_STATS', f'llm={sum(1 for r in recipients if r.get("llm_provider")!="template")}', f'template={template_count}')

batch = {
    'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'lead_crm_current_outreach_run_file': 'lead-crm/outreach_run_2026-06-30.json' if (lead_crm/'outreach_run_2026-06-30.json').exists() else 'missing',
    'consent': {
        'outreach_opt_in': os.environ.get('OUTREACH_OPT_IN','').lower()=='true',
        'lead_outreach_opt_in': os.environ.get('LEAD_OUTREACH_OPT_IN','').lower()=='true'
    },
    'sendCapable': len(recipients) > 0,
    'sendBlocked': False,
    'servicesReferenced': it_pool,
    'counts': {
        'ready_before_dedupe': len(candidates),
        'system_excluded': sum(1 for c in candidates if any(s in c.get('email', c.get('recipient','')).lower() for s in system_addresses)),
        'business_domain_ready': sum(1 for c in candidates if is_business(c.get('email', c.get('recipient','')).lower()))
    },
    'recipients': recipients,
    'new_leads_discovered': 0,
    'prospector': {'stdout_bytes': 0, 'stderr_bytes': 0, 'returncode': 0}
}
batch_path = lead_crm / f'outreach_batch_{timestamp}.json'
batch_path.write_text(json.dumps(batch, indent=2, ensure_ascii=False))
print('BATCH_WRITTEN', batch_path, 'SIZE', len(recipients))

ready = {
    'generated_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'batch_file': str(batch_path),
    'send_status': 'ready',
    'send_blocked': False,
    'block_reason': '',
    'batch_size': len(recipients),
    'send_count': 0,
    'send_errors': [],
    'counts': batch['counts'],
    'services_referenced': it_pool,
    'new_leads_discovered': 0,
    'note': 'builder_only'
}
ready_path = lead_crm / f'outreach_ready_{timestamp}.json'
ready_path.write_text(json.dumps(ready, indent=2, ensure_ascii=False))
print('READY_WRITTEN', ready_path)
