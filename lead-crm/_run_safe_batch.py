import json, re, os, sys
from datetime import datetime, timezone
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))
batch_path = LEAD_DIR / 'outreach_batch_current.json'
ready_path = LEAD_DIR / 'outreach_ready_canonical.json'
SENT_CACHE = LEAD_DIR / 'pipeline_sent_cache.txt'
CURSOR_FILE = LEAD_DIR / 'replenish_cursor.json'


def _backfill_ready_from_batch():
    try:
        if not batch_path.exists():
            return []
        payload = json.loads(batch_path.read_text(encoding='utf-8'))
        rows = payload.get('batch') or payload.get('ready') or payload.get('recipients') or []
        out = []
        seen = set()
        for r in rows:
            if not isinstance(r, dict):
                continue
            to = (r.get('to') or r.get('email') or r.get('recipient') or '').strip().lower()
            if not to or to in seen:
                continue
            seen.add(to)
            subject = (r.get('subject') or 'Parceria Zion Tech Group').strip()
            body = (r.get('body') or "<p>Olá, sou Kleber Garcia Alcatrão, CEO da Zion Tech Group.</p><p>Vamos alinhar uma parceria mútua em AI/IT. Conheça nossos serviços e ferramentas gratuitas em <a href=\"https://ziontechgroup.com\">ziontechgroup.com</a> e agende uma conversa em <a href=\"https://calendly.com/kleber-ziontechgroup\">calendly.com/kleber-ziontechgroup</a>.</p>").strip()
            if not r.get('subject') or not r.get('body'):
                r['subject'] = subject
                r['body'] = body
            out.append({
                'to': r.get('to') or r.get('email') or to,
                'name': r.get('name'),
                'subject': subject,
                'body': body,
            })
        return out
    except Exception:
        return []


def load_json(path, default=None):
    try:
        if Path(path).exists():
            return json.loads(Path(path).read_text(encoding='utf-8'))
    except Exception:
        pass
    return default if default is not None else {}


def build_ready_payload(rows, send_blocked=False):
    state = 'send_ready' if rows else 'empty'
    payload = {
        'generated_at': datetime.now(timezone.utc).isoformat(),
        'state': state if not send_blocked else 'send_ready_no_explicit_opt_in',
        'send_blocked': bool(send_blocked),
        'ready': rows[:200],
    }
    for p in (LEAD_DIR / 'outreach_ready_canonical.json', LEAD_DIR / 'outreach_ready_replenished.json'):
        try:
            p.write_text(json.dumps(payload, ensure_ascii=False, indent=2))
        except Exception:
            pass
    return payload

_CURSOR = None


def load_cursor(total_count):
    global _CURSOR
    try:
        if CURSOR_FILE.exists():
            _CURSOR = json.loads(CURSOR_FILE.read_text(encoding='utf-8'))
    except Exception:
        _CURSOR = None
    if not isinstance(_CURSOR, dict):
        _CURSOR = {'start_index': 0}
    _CURSOR.setdefault('start_index', 0)
    _CURSOR.setdefault('total_count', total_count)
    return _CURSOR


def save_cursor():
    if isinstance(_CURSOR, dict):
        try:
            CURSOR_FILE.write_text(json.dumps(_CURSOR, ensure_ascii=False, indent=2), encoding='utf-8')
        except Exception:
            pass


def load_sent_cache():
    keys = set()
    if SENT_CACHE.exists():
        try:
            for line in SENT_CACHE.read_text(encoding='utf-8').splitlines():
                val = line.strip()
                if val:
                    keys.add(val.split('|', 1)[0] if '|' in val else val)
        except Exception:
            pass
    return keys


sent_cache = load_sent_cache()

sys_domains = {
    'gov.br','sp.gov.br','rj.gov.br','es.gov.br','unicamp.br','fgv.br',
    'pbh.gov.br','prodemge.gov.br','cge.rj.gov.br',
    'docusign.net','wordpress.com','wordpress.net','google.com','github.com',
    'youcanbook.me','updates.coursiv.co',
    'airbnb.com','booking.com','expedia.com','hotels.com','tripadvisor.com',
    'airbnb.co.uk','airbnb.co.za','airbnb.com.au','airbnb.co.in',
    'airbnb.ca','airbnb.fr','airbnb.de','airbnb.es','airbnb.it',
    'airbnb.nl','airbnb.be','airbnb.at','airbnb.ch','airbnb.se','airbnb.no',
    'airbnb.dk','airbnb.fi','airbnb.co.nz','airbnb.co.jp','airbnb.kr','airbnb.co.za',
    'stays.net','stayz.com','homeaway.com','vrbo.com',
    'servi.ai','servi.com','manag.io','start.co','start.com'
}
system_local_prefixes = [
    'mailer-daemon','no-reply','noreply','notifications@github.com',
    'donotreply@wordpress.com','calendar-notification@google.com',
    'notifications@youcanbook.me','no-reply@updates.coursiv.co',
    'mailer-daemon','postmaster','hostmaster','webmaster','abuse@',
    'noreply@','no-reply@','donotreply@','do-not-reply@','calendar-notification@','notifications@',
]


def is_system(email: str) -> bool:
    e = (email or '').lower().strip()
    for pref in system_local_prefixes:
        if e.startswith(pref):
            return True
    dom = e.split('@')[-1]
    return any(dom == s or e.endswith('.' + s) for s in sys_domains)


p = LEAD_DIR / 'all-leads.json'
recs = json.loads(p.read_text())
cursor = load_cursor(len(recs))
start_index = int(cursor.get('start_index') or 0)
seen = set()
batch = []

def pick_email(r):
    for key in ('to', 'email', 'recipient', 'contact_email'):
        val = (r.get(key) or '').strip().lower()
        if val:
            return val
    return ''

def pick_name(r):
    for key in ('name', 'company', 'contact_name', 'lead_name'):
        val = (r.get(key) or '').strip()
        if val:
            return val.split('|')[0].strip() or 'Prezado'
    return 'Prezado'

checked = 0
idx = start_index
while len(batch) < 50 and checked < len(recs):
    r = recs[idx % max(len(recs), 1)]
    idx += 1
    checked += 1
    to = pick_email(r)
    if not to or not re.fullmatch(r'[^@]+@[^@]+\.[^@]+', to):
        continue
    if to in seen:
        continue
    if is_system(to):
        continue
    if not os.environ.get('OUTREACH_RECOVERY_MODE') and to.lower() in sent_cache:
        continue
    if any(to.lower().endswith('@' + s) or ('@' + s) in to.lower() for s in sys_domains):
        continue
    if any(to.lower().endswith('.' + s) for s in sys_domains):
        continue
    name = pick_name(r)
    extra = (r.get('body') or '').strip()
    company_domain = ''
    company_name = ''
    m = re.search(r'@([A-Za-z0-9.-]+\.[A-Za-z]{2,})', to)
    if m:
        company_domain = m.group(1).lower()
        company_name = company_domain.split('.')[0]
    subject = f"Parceria em {company_name or name or 'Tecnologia'} — Zion Tech Group"
    body = f"<p>{name},</p><p>Sou Kleber Garcia Alcatrão da <strong>Zion Tech Group</strong>. Vi potencial de colaboração mútua com sua operação em <strong>{company_domain or 'tecnologia'}</strong>.</p><ul><li>Automação inteligente para TI</li><li>Otimização de custos em cloud/IA</li><li>Resposta a incidentes e DevEx</li></ul><p>Posso enviar um diagnóstico inicial de 15 minutos?</p><p><a href=\"https://ziontechgroup.com\" style=\"background:#0066cc;color:white;padding:12px 24px;text-decoration:none;border-radius:4px\">Nossos serviços</a> | <a href=\"https://calendly.com/kleber-ziontechgroup\">Agende uma reunião</a></p>"
    batch.append({
        'from': 'kleber@ziontechgroup.com',
        'to': to,
        'name': name,
        'subject': subject,
        'body': body,
        'status': 'ready',
        'source_record_status': r.get('status'),
        'company_domain': company_domain,
        'company_name': company_name or name,
        'source_query': r.get('source_query') or r.get('query') or r.get('source') or '',
    })

cursor['start_index'] = idx % max(len(recs), 1)
cursor['total_count'] = len(recs)
save_cursor()

batch_path.write_text(json.dumps({
    'batch': batch,
    'candidate_pool_file': 'lead-crm/all-leads.json',
    'dedupe_and_filters_applied': True,
    'system_addresses_excluded': True,
    'business_domain_preference_applied': True,
    'services_taxonomy_note': 'IT focus with new service categories from app/data/new_services_it.json and referenced it services from servicesData.ts',
    'generated_at': datetime.now(timezone.utc).isoformat(),
}, ensure_ascii=False, indent=2))

services_referenced = [
    'it', 'it-remote-workforce-enablement', 'it-incident-response-retainer',
    'it-cost-optimization-cloud', 'it-modern-dev-platform', 'it-secure-access-service-edge'
]

outreach_opt_in = os.environ.get('OUTREACH_OPT_IN', '').strip().lower()
lead_outreach_opt_in = os.environ.get('LEAD_OUTREACH_OPT_IN', '').strip().lower()
consent_ok = outreach_opt_in in {'1','true','yes','y'} and lead_outreach_opt_in in {'1','true','yes','y'}

ready_payload = {
    'generated_at': datetime.now(timezone.utc).isoformat(),
    'state': 'send_ready' if consent_ok else 'send_ready_no_explicit_opt_in',
    'reason': 'opt_in_consent_present' if consent_ok else 'no_explicit_opt_in_consent_flag',
    'send_blocked': not consent_ok,
    'enforce_opt_in_at_send': True,
    'opts_in': {
        'outreach_opt_in': os.environ.get('OUTREACH_OPT_IN', 'unset'),
        'lead_outreach_opt_in': os.environ.get('LEAD_OUTREACH_OPT_IN', 'unset'),
    },
    'services_referenced': services_referenced,
    'candidate_pool': 'lead-crm/all-leads.json',
    'sender': 'lead-crm/send_outreach_batch.py',
    'ready': [
        {
            'to': r.get('to'),
            'name': r.get('name'),
            'subject': r.get('subject'),
            'body': r.get('body'),
        }
        for r in batch
    ],
}
ready_path.write_text(json.dumps(ready_payload, ensure_ascii=False, indent=2))
ready_check = load_json(LEAD_DIR / 'outreach_ready_canonical.json', {})
if not (ready_check.get('ready') or []):
    fallback = _backfill_ready_from_batch()
    if fallback:
        build_ready_payload(fallback, send_blocked=ready_check.get('send_blocked', False))
print(json.dumps({'batch': len(batch), 'ready_canonical': str(ready_path), 'consent_ok': consent_ok}, ensure_ascii=False))
