#!/usr/bin/env python3
"""
Zion Historical Email Miner - Termux-safe.
Single-source query list for high-frequency/all-folder mining.
Writes new leads to lead-crm/all-leads.json with status='discovered'.
"""
import sys, json, re, datetime, time
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
LEAD_DIR = REPO / 'lead-crm'
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search

try:
    from lib.llm_client import chat as llm_chat
except Exception:
    llm_chat = None

PROSPECTS_FILE = LEAD_DIR / 'all-leads.json'
MINED_FILE = LEAD_DIR / 'historical_miner_results.json'
MINER_LOG = LEAD_DIR / 'miner_log.json'
HEALTH_MONITOR = LEAD_DIR / 'miner_health.json'
QUALITY_LOG = LEAD_DIR / 'mined_contact_quality.jsonl'
HIGH_SIGNAL_MIN_CONFIDENCE = 2
#LABEL_CACHE_FILE = LEAD_DIR / 'label_cache.json'

QUERIES = [
    'subject:parceria',
    'subject:proposta',
    'subject:orçamento',
    'subject:reunião',
    'subject:diagnóstico',
    '"Zion Tech Group"',
    '"ziontechgroup.com"',
    'subject:automação',
    'subject:"incident response"',
    'subject:managed services',
    'subject:devops',
    'subject:sase',
    'subject:"platform engineering"',
    'subject:"AI services"',
    '"contact center intelligence"',
    '"document intelligence"',
    'subject:"security operations assistant"',
    'subject:readiness assessment',
    'subject:free tools',
    'subject:cost optimization',
    'subject:channel partner',
    'subject:vendor partnership',
    'subject:observability',
    'subject:integration',
    'subject:outsourcing',
    'subject:managed cloud',
    'subject:"AI consulting"',
    'subject:"AI implementation"',
    'subject:"AI strategy"',
    'subject:data lakehouse',
    'subject:AIOps',
]

EMAIL_RE = re.compile(r'[\w\.-]+@[\w\.-]+\.[A-Za-z]{2,}')
MAX_RESULTS_PER_QUERY = 20
QUERY_TIMEOUT_SECONDS = 60
LABEL_CACHE_TTL_SECONDS = 60 * 20
FAST_MODE = True


def now_iso() -> str:
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def load_json(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default


def save_json(path: Path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')


def append_log(entry: dict):
    data = load_json(MINER_LOG, [])
    if not isinstance(data, list):
        data = [data]
    data.append(entry)
    if len(data) > 2000:
        data = data[-2000:]
    save_json(MINER_LOG, data)


def append_quality(entry: dict):
    try:
        with QUALITY_LOG.open('a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass


def classify_prospect(email: str, source_query: str) -> dict:
    domain = (email.split('@')[-1] or '').lower()
    is_generic = domain in {
        'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br',
        'icloud.com', 'live.com', 'ymail.com',
    }
    is_invalid = (domain or '').startswith('[') or (domain or '').endswith('.invalid') or domain == 'blocked.invalid'
    is_placeholder = domain in {
        'cybersec.ai','cybersec.io','cybersec.co','cybersec.br','manag.ai','develope.ai','servi.ai','servi.co','servi.br',
        'integ.ai','integ.br','integ.co','integ.com','enterpri.ai','enterpri.br','enterpri.co','enterpri.com',
        'pro.ai','pro.br','pro.co','pro.com','digital.ai','digital.br','digital.co','digital.io',
        'cloudi.ai','cloudi.br','cloudi.co','cloudi.com','cloudi.io',
        'start.co','start.com'
    }
    domain_score = 2 if ((domain or '') and not is_generic and not is_placeholder and not is_invalid) else 0
    base = {
        'to': email,
        'name': None,
        'subject': 'Parceria Zion Tech Group — operações e eficiência para TI',
        'body': None,
        'status': 'discovered',
        'source': 'historical_email_miner',
        'source_query': source_query,
        'domain': domain,
        'is_generic_provider': is_generic,
        'is_invalid_domain': is_invalid,
        'is_placeholder_domain': is_placeholder,
    }
    if llm_chat is None:
        base['confidence'] = domain_score
        return base
    try:
        ctx = (
            "Rate this reply/value signal as 0/1/2 related to managed AI/IT services: "
            f"{source_query} | mydomain:ziontechgroup.com"
        )
        resp = llm_chat([{"role": "user", "content": ctx}], provider="auto")
        txt = (resp.get('content') or '').strip()
        m = re.search(r"\b([0-2](?:\.\d+)?)\b", txt)
        score = float(m.group(1)) if m else float(domain_score)
        base['llm_provider'] = resp.get('provider')
        base['llm_model'] = resp.get('model')
        base['llm_reason'] = txt[:300]
        base['confidence'] = 2 if score >= 1.5 else 1 if score >= 0.5 else 0
    except Exception:
        base['confidence'] = domain_score
    return base


def msg_id_to_text(msg_id: str) -> str:
    try:
        import urllib.request, json as _json, base64
        from commands.google_workspace import gog_headers
        url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}'
        req = urllib.request.Request(url, headers=gog_headers())
        with urllib.request.urlopen(req, timeout=QUERY_TIMEOUT_SECONDS) as r:
            raw = r.read()
        msg = _json.loads(raw)
        headers = msg.get('payload', {}).get('headers', [])
        text = ' '.join(x.get('value','') for x in headers) + '\n'
        def decode(pl):
            data = pl.get('body', {}).get('data')
            if data:
                try:
                    text = base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='replace')
                    return text
                except Exception:
                    pass
            for part in pl.get('parts', []) or []:
                rec = decode(part)
                if rec:
                    return rec
            return ''
        text += decode(msg.get('payload', {}))
        return text or msg.get('snippet','') or ''
    except Exception:
        return ''

def is_non_prospect(addr: str) -> bool:
    """True when an address cannot be a sales prospect.

    The miner scans the inbox, so From/To carry automated senders and our
    own addresses far more often than leads. On 2026-08-18 this sent seven
    identical commercial emails to notification@service.tiktok.com,
    team@notifications.resend.com, cloud@lambdalabs.zendesk.com and
    support@vultr.com, because every header address was treated as a
    prospect. Filtering here is what stops that at the source.
    """
    a = (addr or '').strip().lower()
    if not a or '@' not in a:
        return True

    local, _, domain = a.partition('@')

    # Our own addresses are never prospects.
    if 'ziontechgroup' in domain:
        return True

    # Automated senders: no human reads these, and replying to them is
    # what mailbox providers score as spam.
    NOREPLY_LOCAL = (
        'noreply', 'no-reply', 'donotreply', 'do-not-reply', 'notification',
        'notifications', 'alert', 'alerts', 'bounce', 'bounces', 'mailer',
        'mailer-daemon', 'postmaster', 'automated', 'auto-confirm', 'system',
        'root', 'daemon', 'webmaster', 'abuse',
    )
    if any(local == n or local.startswith(n + '-') or local.startswith(n + '.')
           for n in NOREPLY_LOCAL):
        return True

    # Support desks and shared inboxes: real humans, wrong context. A cold
    # pitch into a support queue gets marked as spam by the agent handling it.
    SUPPORT_LOCAL = ('support', 'help', 'helpdesk', 'billing', 'admin',
                     'team', 'cloud', 'security', 'privacy', 'legal')
    if local in SUPPORT_LOCAL:
        return True

    # Ticketing / transactional-mail platforms: the address belongs to the
    # platform, not to a company we can sell to.
    PLATFORM_DOMAIN = (
        'zendesk.com', 'freshdesk.com', 'intercom.io', 'helpscout.net',
        'notifications.resend.com', 'sendgrid.net', 'mailgun.org',
        'amazonses.com', 'service.tiktok.com', 'github.com', 'gitlab.com',
        'atlassian.net', 'slack.com', 'google.com', 'accounts.google.com',
    )
    if any(domain == d or domain.endswith('.' + d) for d in PLATFORM_DOMAIN):
        return True

    return False


def extract_contacts_metadata(msg_id: str):
    try:
        import urllib.request, json as _json
        from commands.google_workspace import gog_headers
        url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}?format=metadata'
        req = urllib.request.Request(url, headers=gog_headers())
        with urllib.request.urlopen(req, timeout=QUERY_TIMEOUT_SECONDS) as r:
            raw = r.read()
        msg = _json.loads(raw)
        headers = msg.get('payload', {}).get('headers', [])
        hdr_map = {h['name'].lower(): h['value'] for h in headers}
        emails = set()
        # Reply-To beats From when present: it is where a human actually
        # reads. 'to'/'cc'/'bcc' on an inbound message are our own addresses
        # and other recipients, never the prospect, so they are not mined.
        for field in ('reply-to', 'from'):
            val = hdr_map.get(field, '') or ''
            emails.update(m.group(0).lower() for m in EMAIL_RE.finditer(val) if m)
        emails = {e for e in emails if not is_non_prospect(e)}
        if emails:
            return list(emails)
        # Light fallback: scan body/snippet for prospect emails.
        text = msg.get('snippet','') or ''
        if not text:
            try:
                pl = msg.get('payload', {})
                def decode(pl):
                    data = pl.get('body', {}).get('data')
                    if data:
                        try:
                            import base64
                            return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='replace')
                        except Exception:
                            return ''
                    for part in pl.get('parts', []) or []:
                        rec = decode(part)
                        if rec:
                            return rec
                    return ''
                text = decode(pl)
            except Exception:
                pass
        if text:
            emails.update(m.group(0).lower() for m in EMAIL_RE.finditer(text) if m)
        return list(emails)
    except Exception:
        return []


def run_miner():
    existing = load_json(PROSPECTS_FILE, [])
    existing_emails = {
        (r.get('to') or r.get('email') or '').strip().lower()
        for r in existing
    }
    results = load_json(MINED_FILE, [])
    result_emails = {
        (r.get('to') or r.get('email') or '').strip().lower()
        for r in results
    }
    seen = existing_emails | result_emails

    new_leads = []
    mined_contacts = []
    queries_run = 0
    active_queries = QUERIES
    started = time.perf_counter()
    query_durations = []
    for q in active_queries:
        if time.perf_counter() - started > 110:
            append_log({'ts': now_iso(), 'event': 'miner_timeout', 'query': q, 'note': 'soft timeout reached; stopping query loop early'})
            break
        qstart = time.perf_counter()
        queries_run += 1
        try:
            msgs = gmail_search(q, limit=MAX_RESULTS_PER_QUERY, all_folders=True)
        except Exception as e:
            append_log({'ts': now_iso(), 'event': 'search_error', 'query': q, 'error': str(e)})
            query_durations.append(time.perf_counter() - qstart)
            continue
        if time.perf_counter() - started > 110:
            append_log({'ts': now_iso(), 'event': 'miner_timeout', 'query': q, 'note': 'soft timeout reached after search; breaking before metadata extraction'})
            break
        msg_ids = [m.get('id') for m in msgs if m.get('id')]
        seen_ids = set()
        for msg_id in msg_ids:
            if msg_id in seen_ids:
                continue
            seen_ids.add(msg_id)
            contacts = extract_contacts_metadata(msg_id)
            for email in contacts:
                key = email.strip().lower()
                if not key or key in seen:
                    continue
                if key.startswith(('mailer-daemon', 'no-reply', 'noreply', 'notifications@github.com')):
                    continue
                seen.add(key)
                lead = classify_prospect(key, q)
                if lead.get('is_generic_provider') or lead.get('is_invalid_domain') or lead.get('is_placeholder_domain'):
                    continue
                new_leads.append(lead)
                mined_contacts.append({'id': msg_id, 'email': key, 'query': q})
                confidence = None
                if isinstance(lead, dict):
                    confidence = lead.get('confidence')
                try:
                    append_quality({
                        'ts': now_iso(),
                        'email': key,
                        'msg_id': msg_id,
                        'query': q,
                        'confidence': confidence,
                        'high_signal': bool(isinstance(confidence, (int, float)) and confidence >= HIGH_SIGNAL_MIN_CONFIDENCE),
                    })
                except Exception:
                    pass
        query_durations.append(time.perf_counter() - qstart)
    elapsed = time.perf_counter() - started

    if new_leads:
        existing.extend(new_leads)
        save_json(PROSPECTS_FILE, existing)
        results.extend(mined_contacts)
        save_json(MINED_FILE, results)

    now = now_iso()
    try:
        _ql = load_json(QUALITY_LOG, [])
        if not isinstance(_ql, list):
            _ql = [_ql]
        ql = _ql[-200:]
        high_signal = sum(1 for x in ql if x.get('high_signal'))
        quality_ratio = (high_signal / len(ql)) if ql else None
    except Exception:
        high_signal = 0
        quality_ratio = None
    health = {
        'ts': now,
        'queries_run': queries_run,
        'contacts_found': len(mined_contacts),
        'new_leads_added': len(new_leads),
        'elapsed_s': round(elapsed, 3),
        'queries_per_second': round(queries_run / elapsed, 4) if elapsed > 0 else None,
        'avg_query_s': round(sum(query_durations) / len(query_durations), 4) if query_durations else None,
        'max_query_s': round(max(query_durations), 4) if query_durations else None,
        'status': 'ok' if queries_run else 'error',
        'high_signal_leads': high_signal,
        'lead_quality_ratio': quality_ratio,
        'rolling': {
            'last_5_queries': query_durations[-5:],
            'last_5_qps': [round(1/q, 4) if q else None for q in query_durations[-5:]],
        },
    }
    try:
        save_json(HEALTH_MONITOR, health)
    except Exception:
        pass
    try:
        hist_path = LEAD_DIR / 'miner_health_history.json'
        hist = load_json(hist_path, [])
        if not isinstance(hist, list):
            hist = [hist]
        hist.append(health)
        hist = hist[-20:]
        avg_qps = round(sum(h.get('queries_per_second') or 0 for h in hist if h.get('queries_per_second') is not None) / max(len(hist), 1), 4)
        avg_new_leads = round(sum(h.get('new_leads_added') or 0 for h in hist) / max(len(hist), 1), 3)
        health['high_signal_leads'] = avg_new_leads
        health['lead_quality_ratio'] = avg_qps
        hist[-1] = health
        save_json(hist_path, hist)
    except Exception:
        pass
    return {
        'queries_run': queries_run,
        'contacts_found': len(mined_contacts),
        'new_leads_added': len(new_leads),
    }


if __name__ == '__main__':
    print(json.dumps(run_miner(), ensure_ascii=False))
