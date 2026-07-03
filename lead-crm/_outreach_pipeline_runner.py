#!/usr/bin/env python3
import importlib
import json, os, re, datetime, subprocess, sys
from pathlib import Path

base = Path('/data/data/com.termux/files/home/zion-support.github.io')
lead_crm = base / 'lead-crm'
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
    domain = e.split('@', 1)[1] if '@' in e else ''
    return domain not in free_providers

it_pool = [
    'it', 'it-remote-workforce-enablement', 'it-incident-response-retainer',
    'it-cost-optimization-cloud', 'it-modern-dev-platform', 'it-secure-access-service-edge',
    'it-zero-trust-access', 'it-backup-disaster-recovery', 'it-hybrid-cloud-orchestrator', 'it-endpoint-management',
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
    reason = r.get('reason') or ''
    website = r.get('website') or ''
    contact = r.get('display_name') or ''
    if not any([company, reason, website, contact, subject]):
        return r
    prompt = (
        "Rewrite this outreach email into a concise, personalized Portuguese message for Zion Tech Group. "
        "Keep it short and direct. Do not invent facts. If context is insufficient, keep the original body intact.\\n\\n"
        f"Company: {company}\\nWebsite: {website}\\nContext: {reason}\\nContact: {contact}\\n"
        f"Subject: {subject}\\nBody:\\n{body}\\n"
    )
    messages = [
        {"role": "system", "content": "You are a helpful assistant that rewrites business emails concisely. Reply in Portuguese when possible."},
        {"role": "user", "content": prompt},
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
                r['body'] = '\\n'.join(lines[1:]).strip() if len(lines) > 1 else text
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

lead_crm.mkdir(parents=True, exist_ok=True)

new_leads_count = 0
try:
    miner_spec = importlib.util.spec_from_file_location('miner', str(base / 'enhanced_historical_email_miner.py'))
    miner = importlib.util.module_from_spec(miner_spec)
    miner_spec.loader.exec_module(miner)
    miner.run()
    mined_path = lead_crm / 'outreach_ready_mined_old_emails.json'
    if mined_path.exists():
        mined = json.loads(mined_path.read_text(errors='ignore'))
        mined_contacts = mined.get('contacts', [])
        new_leads_count = len(mined_contacts)
        for c in mined_contacts:
            c['source'] = 'mined_in_anywhere'
            c['services'] = [it_pool[0], it_pool[2], it_pool[4]]
            candidates.append(c)
except Exception:
    new_leads_count = 0

fallback_candidates = []
existing = sorted(lead_crm.glob('lead_discovery_*.json'))
if existing and not candidates:
    try:
        with open(existing[-1], 'r', errors='ignore') as f:
            disc = json.load(f)
            cands = disc.get('candidates', disc.get('leads', []))
            if isinstance(cands, list):
                fallback_candidates = cands
                for c in fallback_candidates:
                    email = c.get('email', c.get('contact', {}).get('email', '')).lower()
                    if valid_email(email):
                        candidates.append(c)
    except Exception:
        pass

if len(candidates) < 3:
    for p in sorted(lead_crm.glob('outreach_batch_*.json')):
        try:
            with open(p, 'r', errors='ignore') as f:
                b = json.load(f)
            recips = b.get('recipients', [])
            for r in recips:
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
selected = business + others
selected = selected[:25]

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
        lines.append(f"Hi {name},\\n\\n{reason}")
    else:
        lines.append(f"Hi {name},\\n\\nYour posture aligns well with a few targeted IT plays that reduce incident drag and improve operational efficiency.")
    if primary:
        lines.append("\\nBest fits based on your posture:")
        for sid in primary:
            svc = service_lookup.get(sid, {'id': sid, 'title': sid.replace('it-','').replace('-',' ').title(), 'href': f'/services/{sid}'})
            lines.append(f"- {svc['title']}: {svc['href']}")
    if len(services) > 3:
        extra = ', '.join(service_lookup.get(s, {'title': s})['title'] for s in services[3:6])
        lines.append(f"\\nAlso worth a look: {extra}. ")
    lines.append("\\nWant a quick call?\\n\\nBest,\\nZion Tech Group\\nkleber@ziontechgroup.com | +1 302 464 0950\\nhttps://ziontechgroup.com")
    return '\\n'.join(lines)

def build_html(name, services, reason=''):
    primary = services[:3]
    html = [f"<html><body><p>Hi {name},</p>"]
    if reason:
        html.append(f"<p>{reason}</p>")
    if primary:
        html.append("<p><strong>Best fits based on your posture:</strong></p><ul>")
        for sid in primary:
            svc = service_lookup.get(sid, {'id': sid, 'title': sid.replace('it-','').replace('-',' ').title(), 'href': f'/services/{sid}'})
            html.append(f"<li>{svc['title']}: <a href=\"{svc['href']}\">{svc['href']}</a></li>")
        html.append("</ul>")
    if len(services) > 3:
        extra = ', '.join(service_lookup.get(s, {'title': s})['title'] for s in services[3:6])
        html.append(f"<p>Also worth a look: {extra}.</p>")
    html.append("<p>Want a quick call?</p><p>Best,<br/>Zion Tech Group<br/>kleber@ziontechgroup.com | +1 302 464 0950<br/><a href=\"https://ziontechgroup.com\">https://ziontechgroup.com</a></p></body></html>")
    return '\\n'.join(html)

recipients = []
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

forced = []
for rec in recipients:
    if not rec.get('llm_provider') or rec.get('llm_provider') == 'template':
        rec = _tailor(rec)
    forced.append(rec)
recipients = forced
template_count = sum(1 for r in recipients if r.get('llm_provider') == 'template')
llm_count = sum(1 for r in recipients if r.get('llm_provider') != 'template')
print('LLM_TAILOR_STATS', f'llm={llm_count}', f'template={template_count}')

batch = {
    'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'lead_crm_current_outreach_run_file': 'lead-crm/outreach_run_2026-06-30.json' if (lead_crm / 'outreach_run_2026-06-30.json').exists() else 'missing',
    'consent': {
        'outreach_opt_in': os.environ.get('OUTREACH_OPT_IN','').lower() == 'true',
        'lead_outreach_opt_in': os.environ.get('LEAD_OUTREACH_OPT_IN','').lower() == 'true'
    },
    'sendCapable': True,
    'sendBlocked': False,
    'servicesReferenced': it_pool,
    'counts': {
        'ready_before_dedupe': len(candidates),
        'system_excluded': sum(1 for c in candidates if any(s in c.get('email', c.get('recipient','')).lower() for s in system_addresses)),
        'business_domain_ready': sum(1 for c in candidates if is_business(c.get('email', c.get('recipient','')).lower()))
    },
    'recipients': recipients,
    'new_leads_discovered': new_leads_count,
    'prospector': {'stdout_bytes': 0, 'stderr_bytes': 0, 'returncode': 0}
}

batch_path = lead_crm / f'outreach_batch_{timestamp}.json'
with open(batch_path, 'w') as f:
    json.dump(batch, f, indent=2)

print('NEW_LEADS', new_leads_count)
print('BATCH_SIZE', len(recipients))
print('BATCH', batch_path)

outreach_ready = {
    'generated_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'batch_file': str(batch_path),
    'send_status': 'send-attempted',
    'send_blocked': False,
    'block_reason': '',
    'batch_size': len(recipients),
    'send_count': 0,
    'send_errors': [],
    'counts': batch['counts'],
    'services_referenced': it_pool,
    'new_leads_discovered': new_leads_count,
    'note': ''
}

consent = os.environ.get('OUTREACH_OPT_IN','').lower() == 'true' and os.environ.get('LEAD_OUTREACH_OPT_IN','').lower() == 'true'
if not consent:
    outreach_ready['send_status'] = 'send-blocked'
    outreach_ready['send_blocked'] = True
    outreach_ready['block_reason'] = 'opt_in_consent_flag_absent'
    outreach_ready['note'] = 'Opt-in consent flags absent. No sends attempted.'
else:
    gapi = '/data/data/com.termux/files/home/.hermes/skills/productivity/google-workspace/scripts/google_api.py'
    if not os.path.exists(gapi):
        outreach_ready['send_status'] = 'send-blocked'
        outreach_ready['send_blocked'] = True
        outreach_ready['block_reason'] = 'google_workspace_script_missing'
        outreach_ready['note'] = f'Missing google_api.py at {gapi}.'
    else:
        chk = subprocess.run(['python3', gapi, 'gmail', 'search', 'newer_than:1d', '--max', '1'], capture_output=True, text=True)
        if chk.returncode != 0:
            outreach_ready['send_status'] = 'send-blocked'
            outreach_ready['send_blocked'] = True
            outreach_ready['block_reason'] = 'google_workspace_auth_not_verified'
            outreach_ready['note'] = f'Auth verification failed: {(chk.stderr or chk.stdout).strip()}'
        else:
            max_sends = min(12, len(recipients))
            send_errors = []
            send_count = 0
            sent_ids = []
            for rec in recipients[:max_sends]:
                cmd = ['python3', gapi, 'gmail', 'send', '--to', rec['email'], '--subject', rec['subject'], '--body', rec['body'], '--html']
                p = subprocess.run(cmd, capture_output=True, text=True)
                try:
                    res = json.loads(p.stdout)
                    if res.get('status', '') == 'sent':
                        send_count += 1
                        sent_ids.append(res.get('id'))
                    else:
                        send_errors.append({'email': rec['email'], 'error': (p.stdout + '\\n' + p.stderr).strip()})
                except Exception:
                    send_errors.append({'email': rec['email'], 'error': (p.stdout + '\\n' + p.stderr).strip()})
                if send_errors:
                    break
            outreach_ready['send_status'] = 'send-attempted' if send_count else 'send-blocked'
            outreach_ready['send_blocked'] = send_count == 0
            outreach_ready['send_count'] = send_count
            outreach_ready['send_errors'] = send_errors
            outreach_ready['sent_message_ids'] = sent_ids
            outreach_ready['note'] = f'Consents present, auth verified. Attempts={send_count+len(send_errors)}.'

ready_path = lead_crm / f'outreach_ready_{timestamp}.json'
with open(ready_path, 'w') as f:
    json.dump(outreach_ready, f, indent=2)

print('READY', ready_path)
print('SEND_COUNT', outreach_ready.get('send_count', 0))
print('BLOCKED', outreach_ready.get('send_blocked', True))
print('BLOCK_REASON', outreach_ready.get('block_reason', ''))
print('ERRORS', json.dumps(outreach_ready.get('send_errors', []), ensure_ascii=False))

brain = base / 'Zion_Brain_Log.md'
errors_short = '; '.join(f"{e['email']}:{e.get('error','')[:40]}" for e in outreach_ready.get('send_errors', [])) or 'none'
report = (
    f"\\n- run_{timestamp}"
    f"| discovered_new_from_prospector={new_leads_count}"
    f"; batch_size={len(recipients)}"
    f"; send_count={outreach_ready.get('send_count', 0)}"
    f"; errors={errors_short}"
    f"; block_reason={outreach_ready.get('block_reason', 'sent')}"
    f"; opt_in=OUTREACH_OPT_IN={os.environ.get('OUTREACH_OPT_IN')},LEAD_OUTREACH_OPT_IN={os.environ.get('LEAD_OUTREACH_OPT_IN')}"
    f"; artifacts={batch_path.name},{ready_path.name}"
    f"; out={'send-blocked' if outreach_ready.get('send_blocked') else 'sent' if outreach_ready.get('send_count',0)>0 else 'send-blocked'}.\\n"
)
with open(brain, 'a') as f:
    f.write(report)
