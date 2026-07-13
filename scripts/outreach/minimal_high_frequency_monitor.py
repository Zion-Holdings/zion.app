#!/usr/bin/env python3
"""Minimal Termux-compatible Gmail outreach monitor.
Uses commands.google_workspace for auth/API.
"""
import sys, json, time, re
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO))

from commands.google_workspace import gog_headers, gmail_search, gmail_get, gmail_thread_get

DEDUP_DIR = REPO / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
REPORT_FILE = DEDUP_DIR / 'monitor_report.jsonl'
PENDING_QUEUE_FILE = DEDUP_DIR / 'pending_ceo_drafts.jsonl'
HOT_FOLLOWUP_REPLY_LEDGER = DEDUP_DIR / 'hot_followup_reply_ledger.jsonl'
LEDGER_FILE = DEDUP_DIR / 'sent_ledger.jsonl'

def append_report(entry: dict):
    entry.setdefault('ts', int(time.time()))
    with REPORT_FILE.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def load_json_safe(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default

def search_all_folders(q, limit=20):
    """Search everywhere for a query."""
    hits = []
    seen_ids = set()
    seen_threads = set()
    for query in [q, f"{q} in:anywhere"]:
        try:
            msgs = gmail_search(query, limit=limit, all_folders=True)
        except Exception:
            continue
        for m in msgs:
            mid = m.get('id')
            tid = m.get('threadId')
            if not mid or mid in seen_ids:
                continue
            if tid and tid in seen_threads:
                continue
            try:
                full = gmail_get(mid)
            except Exception:
                continue
            seen_ids.add(full.get('id'))
            if full.get('threadId'):
                seen_threads.add(full['threadId'])
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            hits.append({
                'id': full.get('id'),
                'threadId': full.get('threadId'),
                'from': headers.get('From', ''),
                'subject': headers.get('Subject', ''),
                'date': headers.get('Date', ''),
                'snippet': full.get('snippet', '')[:200],
            })
    return hits

def extract_text(msg):
    pl = msg.get('payload', {})
    if pl.get('body', {}).get('data'):
        import base64
        return base64.urlsafe_b64decode(pl['body']['data']).decode('utf-8', errors='ignore')
    for part in pl.get('parts', []) or []:
        if part.get('mimeType') == 'text/plain' and part.get('body', {}).get('data'):
            import base64
            return base64.urlsafe_b64decode(part['body']['data']).decode('utf-8', errors='ignore')
    return ''

def detect_lang(text):
    lower = (text or '').lower()
    if any(w in lower for w in ['obrigado','oportunidade','projeto','serviços','ferramentas','call','abraço','oi','olá']):
        return 'pt'
    if any(w in lower for w in ['gracias','oportunidad','proyecto','servicios','herramientas','llamada','saludos']):
        return 'es'
    return 'en'

def build_draft(name, lang):
    if lang == 'es':
        return (
            f"{name},\n\n"
            "Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Veo buenas oportunidades para crear valor mutuo ahora.\n\n"
            "Puedes ver nuestros nuevos servicios de IA aquí: https://ziontechgroup.com\n"
            "También ofrecemos herramientas y servicios gratuitos en el sitio.\n\n"
            "Si cuadra, conversemos: https://calendly.com/kleber-ziontechgroup\n\n"
            "Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    if lang == 'pt':
        return (
            f"{name},\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.\n\n"
            "Você pode ver nossos novos serviços de IA aqui: https://ziontechgroup.com\n"
            "Também temos ferramentas e serviços gratuitos no site.\n\n"
            "Se fizer sentido, vamos conversar: https://calendly.com/kleber-ziontechgroup\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    return (
        f"{name},\n\n"
        "Thank you for the opportunity to work together on the previous project. I see strong potential for new mutually valuable work between our teams.\n\n"
        "You can explore our new AI services here: https://ziontechgroup.com\n"
        "We also offer free services and tools on the site.\n\n"
        "If it makes sense, let's talk: https://calendly.com/kleber-ziontechgroup\n\n"
        "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
    )

def thread_alive(thread_id):
    try:
        gmail_thread_get(thread_id)
        return True
    except Exception:
        return False

def recent_sent_exists(contact, within_seconds=24*3600):
    state = load_json_safe(LEDGER_FILE, [])
    if not isinstance(state, list):
        return False
    now = int(time.time())
    return any(
        (now - int(r.get('ts', 0))) < within_seconds
        and (r.get('to') or '').lower() == contact.lower()
        for r in state[-50:]
    )

def main():
    report = {
        'event': 'high_frequency_monitor_tick',
        'labels_checked': [],
        'hot_followup_threads': 0,
        'hot_followup_sent_count': 0,
        'new_inbox_interest_count': 0,
        'new_inbox_examples': [],
        'llm_tailoring_coverage': {
            'enabled': False,
            'contact_tailor_count': 0,
            'coverage_ratio': 0.0,
            'blocker': 'env_not_configured',
        },
        'errors': [],
        'pending_outreach_count': 0,
        'hot_followup_drafts_count': 0,
    }

    try:
        gog_headers()
    except Exception as e:
        append_report({'auth_failure': str(e), 'ts': int(time.time())})
        print(json.dumps({'auth_failure': str(e)}, ensure_ascii=False))
        return

    # Check hot-follow-up label directly
    try:
        hits = search_all_folders('label:"!!!hot-follow-up"', limit=20)
        report['hot_followup_threads'] = len(hits)
        hot_drafts = []
        for h in hits:
            from_addr = h.get('from', '')
            m = re.search(r'<([^>]+)>', from_addr)
            contact = m.group(1).lower() if m else from_addr.strip().lower()
            if not contact or '@' not in contact:
                continue
            if recent_sent_exists(contact, within_seconds=24*3600):
                continue
            tid = h.get('threadId') or h.get('id')
            if not thread_alive(tid):
                continue
            try:
                full = gmail_get(h.get('id'))
                text = extract_text(full)
            except Exception:
                text = ''
            lang = detect_lang(text)
            name = contact.split('@')[0].replace('.', ' ').title()
            draft = build_draft(name, lang)
            hot_drafts.append({
                'lead_id': h.get('id'),
                'thread_id': tid,
                'message_id': h.get('id'),
                'from': contact,
                'name': name,
                'company': contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner',
                'subject': h.get('subject') or 'Following up on our last project',
                'lang': lang,
                'draft': draft,
                'status': 'ready_to_send',
                'dedup_key': re.sub(r'[^a-z0-9]', '', contact),
                'created_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            })
        report['hot_followup_drafts_count'] = len(hot_drafts)
        report['hot_followup_drafts'] = hot_drafts[:5]

        # write pending queue
        existing = []
        if PENDING_QUEUE_FILE.exists():
            try:
                existing = [json.loads(line) for line in PENDING_QUEUE_FILE.read_text(encoding='utf-8', errors='ignore').splitlines() if line.strip()]
            except Exception:
                pass
        combined = existing + hot_drafts
        seen_keys = set()
        final = []
        for item in combined:
            k = item.get('dedup_key') or item.get('from')
            if not k or k in seen_keys:
                continue
            seen_keys.add(k)
            final.append(item)
        PENDING_QUEUE_FILE.write_text('\n'.join(json.dumps(x, ensure_ascii=False) for x in final), encoding='utf-8')
        report['pending_outreach_count'] = len(final)
    except Exception as e:
        report['errors'].append({'hot_followup': repr(e)})

    # Inbox interest probe
    try:
        interest_q = (
            '!category:promotions !in:spam !in:trash '
            'newer_than:7d "partnership" OR "collaboration" OR "proposal" '
            '-"support reminder" -"rate the support" -"support survey" -"zendesk"'
        )
        inbox = search_all_folders(interest_q, limit=20)
        report['new_inbox_interest_count'] = len(inbox)
        report['new_inbox_examples'] = inbox[:5]
    except Exception as e:
        report['errors'].append({'inbox_probe': repr(e)})

    # Dedup/ledger stats
    try:
        dedup = load_json_safe(DEDUP_DIR / 'global_dedup_state.json', {})
        report['dedup_entries'] = len(dedup) if isinstance(dedup, dict) else 0
        if LEDGER_FILE.exists():
            report['ledger_entries'] = sum(1 for _ in LEDGER_FILE.open('r', encoding='utf-8'))
        report['hot_followup_ledger_entries'] = sum(1 for _ in HOT_FOLLOWUP_REPLY_LEDGER.open('r', encoding='utf-8')) if HOT_FOLLOWUP_REPLY_LEDGER.exists() else 0
    except Exception as e:
        report['errors'].append({'local_state': repr(e)})

    append_report(report)
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
