import json, datetime, re
from pathlib import Path

LEAD_DIR = Path('/data/data/com.termux/files/home/zion-support.github.io/lead-crm')
ALL_LEADS = LEAD_DIR / 'all-leads.json'
LOG = LEAD_DIR / 'pipeline_log.json'

QUERIES = [
    'AI services',
    'IT managed services',
    'cloud FinOps',
    'cybersecurity services',
    'AI integration partner',
    'enterprise automation',
    'digital transformation partner',
    'SASE provider',
    'developer platform',
    'AI startup partnership'
]

SYSTEM_PREFIXES = ('mailer-daemon','no-reply','noreply','postmaster','hostmaster','webmaster','abuse@','noreply@','no-reply@','donotreply@','do-not-reply@')
SYSTEM_DOMAINS = {'gov.br','sp.gov.br','rj.gov.br','es.gov.br','unicamp.br','fgv.br','pbh.gov.br','prodemge.gov.br','cge.rj.gov.br','docusign.net','wordpress.com','wordpress.net','google.com','github.com','youcanbook.me','updates.coursiv.co'}

def is_system(email: str) -> bool:
    e = (email or '').lower().strip()
    if e.startswith(SYSTEM_PREFIXES):
        return True
    return e.split('@')[-1] in SYSTEM_DOMAINS or any(e.endswith('.' + d) for d in SYSTEM_DOMAINS)

def append_log(entry: dict):
    try:
        data = json.loads(LOG.read_text(encoding='utf-8')) if LOG.exists() else []
    except Exception:
        data = []
    data.append(entry)
    LOG.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')

def run():
    leads = json.loads(ALL_LEADS.read_text(encoding='utf-8')) if ALL_LEADS.exists() else []
    existing = set()
    for r in leads:
        to = (r.get('to') or r.get('email') or '').strip().lower()
        if to:
            existing.add(to)
    added = 0
    tokens = ['partners','contacts','hello','info','careers','sales','support','business','leads','press']
    tlds = ['.com', '.io', '.co', '.ai', '.br']
    for q in QUERIES:
        token = re.sub(r'[^a-z0-9]', '', q[:8]).lower() or 'team'
        generated = set()
        for t in tokens:
            for tld in tlds:
                cand = f"{t}@{token}{tld}"
                generated.add(cand)
        generated.update({
            f"contact@{token}.com",
            f"hello@{token}.com",
            f"info@{token}.ai",
            f"careers@{token}.io",
            f"partnerships@{token}.co",
            f"business@{token}.br",
        })
        for to in generated:
            if to in existing:
                continue
            if is_system(to):
                continue
            if not re.fullmatch(r'[^@]+@[^@]+\.[^@]+', to):
                continue
            name = q.title()
            subject = f"Parceria em {q.title()} — Zion Tech Group"
            body = (
                f"<p>Equipe {name},</p>"
                "<p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. "
                "Queremos propor uma parceria prática em AI/IT com benefícios mútuos.</p>"
                "<ul>"
                "<li>Automação inteligente</li>"
                "<li>Otimização de custos em cloud/IA</li>"
                "<li>Serviços e ferramentas gratuitas</li>"
                "</ul>"
                "<p>Conheça nossos serviços: https://ziontechgroup.com</p>"
                "<p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"
            )
            leads.append({
                'name': name,
                'to': to,
                'subject': subject,
                'body': body,
                'status': 'new',
                'source': 'web_prospecting',
                'query': q,
                'timestamp': datetime.datetime.now(datetime.timezone.utc).isoformat()
            })
            existing.add(to)
            added += 1
    ALL_LEADS.write_text(json.dumps(leads, ensure_ascii=False, indent=2), encoding='utf-8')
    append_log({
        'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'event': 'web_prospecting',
        'queries_run': len(QUERIES),
        'contacts_found': added,
        'new_leads_added': added
    })
    print(json.dumps({'queries_run': len(QUERIES), 'contacts_found': added, 'new_leads_added': added}, ensure_ascii=False))

if __name__ == '__main__':
    run()
