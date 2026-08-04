#!/usr/bin/env python3
"""Generate staged lead outreach drafts for Zion Tech Group free lead outreach."""
import csv, json, os
from pathlib import Path
from datetime import datetime

_ROOT = Path(os.path.expanduser('~')) / 'zion-support.github.io'
for candidate in [Path('.'), _ROOT]:
    if (candidate / 'package.json').exists():
        WORKDIR = candidate.resolve()
        break
else:
    WORKDIR = _ROOT.resolve()

LEADS_PATH = WORKDIR / 'out/free-leads-discovered-github.json'
OUTDIR = WORKDIR / 'out/manual-outreach-pack'
OUTDIR.mkdir(parents=True, exist_ok=True)

leads_json = json.loads(LEADS_PATH.read_text(encoding='utf-8'))
leads = [l for l in leads_json.get('leads', []) if l.get('email')]
WEBSITE = 'https://ziontechgroup.com'
FREE_TOOLS = 'https://ziontechgroup.com/free-services/'
DEFAULT_SUBJ = 'AI & IT services that can reduce your costs and speed up operations'

hot_services = [
    'AI Agentic Workflow Automation',
    'AI Knowledge Base & RAG Platform',
    'Managed Observability 24/7',
    'Cyber Incident Response Retainer',
    'Cloud Cost Optimization Platform',
    'Data Warehouse Modernization',
    'Free AI Tools & Services'
]

rows = []
drafts = []
for i, l in enumerate(leads, 1):
    name = l.get('contact_name') or l.get('company') or 'there'
    company = l.get('company') or 'your company'
    email = l.get('email', '')
    domain = (email.split('@', 1)[1] if '@' in email else '').lower()
    if not email:
        continue
    if domain.endswith('.example'):
        continue
    if domain.endswith('.example.com') or domain.endswith('.example.org') or domain.endswith('.example.net'):
        continue
    if 'example' in domain:
        continue
    if 'noreply' in email:
        continue
    domain = l.get('domain') or ''
    service_line = hot_services[(i-1) % (len(hot_services)-1)]
    if i % 7 == 0:
        service_line = 'Free AI Tools & Services'
    subject = f"{company}: {service_line}"
    if len(subject) > 90:
        subject = subject[:87] + '...'
    body = f"""Hi {name},

This is Kleber Garcia, CEO of Zion Tech Group. We develop AI and IT solutions for companies that want to operate faster, safer, and with lower overhead.

I'm reaching out because we recently expanded our AI/IT catalog, and I believe we can propose mutually beneficial ideas for both {company} and Zion Tech Group — especially around {service_line}.

Why it can be useful now:
- Reduce manual operation hours with AI automation
- Improve reliability and response times
- Access practical, free tools and services we already offer

You can learn more, explore our new AI services, and visit our free services page here:
- Main site: {WEBSITE}
- Free services/tools: {FREE_TOOLS}

If this is relevant, reply and I'll send a short proposal with a concrete idea tailored to {company}. If not, I'm happy to keep it in my files for a better-fitted moment.

Best regards,
Kleber Garcia
CEO, Zion Tech Group
Phone/WhatsApp: +1 302 464 0950
Email: kleber@ziontechgroup.com
"""
    drafts.append({
        'from_name': 'Kleber Garcia',
        'from_email': 'kleber@ziontechgroup.com',
        'reply_to': 'kleber@ziontechgroup.com',
        'to_name': name,
        'to_email': email,
        'subject': subject,
        'body': body,
        'reviewed': True,
        'approved': False,
        'transport': 'pending',
        'service_line': service_line,
        'source': 'github-lead-discovery'
    })
    rows.append([email, name, company, subject, service_line])

csv_path = OUTDIR / 'outreach-queue-github-discovery.csv'
with csv_path.open('w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['email','contact_name','company','subject','service_line'])
    w.writerows(rows)

drafts_path = OUTDIR / 'outreach-queue-github-discovery.json'
payload = {
    'generated_at': datetime.now().isoformat(),
    'count': len(drafts),
    'default_subject': DEFAULT_SUBJ,
    'from_name': 'Kleber Garcia',
    'from_email': 'kleber@ziontechgroup.com',
    'reply_to': 'kleber@ziontechgroup.com',
    'reviewed': True,
    'approved': False,
    'transport': 'pending',
    'hot_services': hot_services,
    'website': WEBSITE,
    'free_tools_page': FREE_TOOLS,
    'send_rule': 'Approval + sender_config/verified transport required',
    'drafts': drafts
}
drafts_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
out_it = WORKDIR / 'out/leads-it-outreach-drafts-waves1-12.json'
out_it.write_text(json.dumps({'generated_at': datetime.now().isoformat(), 'count': len(drafts), 'drafts': drafts}, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Staged {len(drafts)} drafts to {drafts_path}')
print(f'CSV written to {csv_path}')
