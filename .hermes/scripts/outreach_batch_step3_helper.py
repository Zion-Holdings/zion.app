#!/usr/bin/env python3
"""
Step 3 helper: build or update outreach batch safely.
Reads candidate leads, prepares outreach_references referencing IT services,
deduplicates by recipient, excludes system/user addresses,
prefers business-domain recipients, and writes a batch JSON.
"""
import json
import re
from pathlib import Path
from datetime import datetime, timezone


def load_json(path: Path, default):
    if path.exists() and path.read_text(encoding='utf-8').strip():
        try:
            return json.loads(path.read_text(encoding='utf-8'))
        except json.JSONDecodeError:
            return default
    return default


def is_system_address(email: str) -> bool:
    local = (email or '').split('@', 1)[0].lower()
    domain = (email or '').split('@', 1)[-1].lower()
    system_names = {'info', 'admin', 'administrator', 'support', 'sales', 'marketing',
                    'webmaster', 'postmaster', 'abuse', 'root', 'noreply', 'no-reply',
                    'do not reply', 'mailer-daemon'}
    return local in system_names or domain in {
        'example.com', 'test.com', 'localhost', 'localdomain'
    }


def is_business_domain(email: str) -> bool:
    domain = (email or '').split('@', 1)[-1].lower()
    if not domain:
        return False
    common_personal = {'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
                       'aol.com', 'icloud.com', 'protonmail.com', 'mail.com',
                       'yandex.com', 'zoho.com', 'live.com', 'msn.com'}
    return domain not in common_personal


def extract_it_services(services_data_path: Path) -> dict:
    text = services_data_path.read_text(encoding='utf-8', errors='ignore')
    m = re.search(r'export\s+const\s+aiServices\s*:\s*Service\[\]\s*=\s*\[(.*?)\]\s*;\s*export\s+const\s+itServices',
                  text, re.S)
    if not m:
        m = re.search(r'export\s+const\s+itServices\s*:\s*Service\[\]\s*=\s*\[(.*?)\]\s*;\s*export\s+const\s+securityServices',
                      text, re.S)
    services = []
    if m:
        block = m.group(1)
        titles = re.findall(r"title:\s*['\"]([^'\"]+)['\"]", block)
        ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", block)
        categories = re.findall(r"category:\s*['\"]([^'\"]+)['\"]", block)
        for i, t in enumerate(titles):
            sid = ids[i] if i < len(ids) else f'service_{i}'
            cat = categories[i] if i < len(categories) else 'it'
            services.append({'id': sid, 'title': t, 'category': cat})
    return {'aiServices': services, 'category_services': services}


def personalize(service_title: str, company: str, contact_name: str = '') -> str:
    c = company or 'your team'
    n = contact_name.strip().split()[0] if contact_name.strip() else ''
    greeting = f"Hi {n}," if n else f"Hi {c} team,"
    return (
        f"{greeting}\n\n"
        f"I noticed {c} could benefit from our **{service_title}**. "
        f"We help companies improve reliability, reduce incident turnaround, and align IT spend without adding headcount.\n\n"
        f"Could I send a short 3-point capability summary that matches your stack?\n\n"
        f"Best,\n"
        f"Zion Tech Group\n"
        f"📞 +1 302 464 0950 | commercial@ziontechgroup.com"
    )


def build_batch(
    leads: list,
    services_data_path: Path,
) -> dict:
    now = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
    batch_path = Path(f'lead-crm/outreach_batch_{now}.json')
    ready_path = Path(f'lead-crm/outreach_ready_{now}.json')

    service_info = extract_it_services(services_data_path)
    it_like = [s for s in service_info.get('aiServices', [])
               if s.get('category') in {'it', 'it-services', 'ai'}][:6]

    seen = set()
    deduped = []
    for lead in leads:
        email = (lead.get('email') or '').strip().lower()
        if not email or '@' not in email:
            continue
        if is_system_address(email):
            continue
        if email in seen:
            continue
        seen.add(email)
        lead['email_lower'] = email
        deduped.append(lead)

    def score(lead):
        return (3 if is_business_domain(lead.get('email_lower', '')) else 0) + (2 if lead.get('company') else 0)

    deduped.sort(key=score, reverse=True)

    service_assignment = {}
    used = set()
    for lead in deduped:
        sid = None
        for s in it_like:
            if s['id'] not in used:
                sid = s['id']
                used.add(sid)
                break
        if not sid and it_like:
            sid = it_like[0]['id']
        service_assignment[lead['email_lower']] = sid if sid else 'it-services'

    batch_items = []
    for lead in deduped:
        sid = service_assignment.get(lead['email_lower'], 'it-services')
        svc = next((s for s in it_like if s['id'] == sid), {'title': 'IT Services', 'id': sid})
        company = lead.get('company') or 'your company'
        contact = lead.get('name', '')
        body = personalize(svc['title'], company, contact)
        batch_items.append({
            'lead_id': lead.get('lead_id'),
            'company': company,
            'contact_name': contact,
            'email': lead['email_lower'],
            'subject': f"{svc['title']} for {company}",
            'body': body,
            'service_id': sid,
            'category': 'it',
            'personalization_url': f"/services/{sid}",
            'domain': lead['email_lower'].split('@', 1)[-1].lower(),
            'business_domain': is_business_domain(lead['email_lower']),
            'prepared_at': now,
        })

    batch = {
        'generated_at': now,
        'batch_size': len(batch_items),
        'source': 'step3-helper+services-reference',
        'services_referenced': sorted({x['service_id'] for x in batch_items}),
        'items': batch_items,
    }
    ready = {
        'generated_at': now,
        'batch_size': len(batch_items),
        'send_blocked': True,
        'block_reason': 'opt_in_consent_flag_absent',
        'services_referenced': batch['services_referenced'],
        'items': batch_items,
        'note': 'Outreach prepared but not sent by step3-helper with send-block active. Use the google-workspace sender path and explicit opt-in flag to send this batch.',
    }

    batch_path.write_text(json.dumps(batch, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    ready_path.write_text(json.dumps(ready, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return {
        'batch_path': str(batch_path),
        'ready_path': str(ready_path),
        'batch_size': len(batch_items),
        'services_referenced': ready['services_referenced'],
    }


def main():
    cwd = Path('.').resolve()
    leads_path = cwd / 'lead-crm/all-leads.json'
    if not leads_path.exists():
        leads_path = cwd / 'lead-crm/outreach_ready_mined_emails.json'
    services_path = cwd / 'app/data/servicesData.ts'
    leads = load_json(leads_path, [])
    if isinstance(leads, dict):
        leads = [leads] if leads else []
        for v in leads:
            if isinstance(v, dict) and 'items' in v:
                leads = v['items']
                break

    result = build_batch(leads, services_path)
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
