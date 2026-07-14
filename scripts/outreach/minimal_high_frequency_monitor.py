#!/usr/bin/env python3
"""Minimal Termux-compatible Gmail outreach monitor.
Uses commands.google_workspace for auth/API.
"""
import sys, json, time, re
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
if not REPO.exists():
    REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO))

from commands.google_workspace import gog_headers, gmail_search, gmail_get, gmail_thread_get, gmail_get_or_create_label_id, gmail_batch_modify

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

def search_all_folders(q, maxResults=20):
    """Search everywhere for a query, with bounded retries on transient failures."""
    hits = []
    seen_ids = set()
    seen_threads = set()
    scanned_queries = 0
    last_err = None
    for query in [q, f"{q} in:anywhere"]:
        scanned_queries += 1
        for attempt in range(3):
            try:
                msgs = gmail_search(query, all_folders=True)
            except Exception as e:
                last_err = e
                time.sleep(1 + attempt * 2)
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
            break
    try:
        print(f'METRIC search_all_folders scanned_queries={scanned_queries} hits={len(hits)} last_err={last_err!r}', flush=True)
    except Exception:
        pass
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

def same_outgoing_subject_recently_sent(contact, subject, within_seconds=12*3600):
    state = load_json_safe(LEDGER_FILE, [])
    if not isinstance(state, list):
        return False
    now = int(time.time())
    return any(
        (now - int(r.get('ts', 0))) < within_seconds
        and (r.get('to') or '').lower() == contact.lower()
        and (r.get('subject') or '').strip().lower() == subject.strip().lower()
        for r in state[-50:]
    )

def _llm_tailor_reply(name, contact, lang, subject, snippet):
    try:
        import urllib.request
        cfg_path = Path.home()/'.hermes'/'config.yaml'
        if not cfg_path.exists():
            return None
        import yaml
        cfg = yaml.safe_load(cfg_path.read_text(encoding='utf-8')) or {}
        base = cfg.get('default', {}) if isinstance(cfg.get('default'), dict) else {}
        provider_name = base.get('provider')
        providers = cfg.get('providers', {}) if isinstance(cfg.get('providers'), dict) else {}
        provider = providers.get(provider_name, {}) if isinstance(provider_name, str) else {}
        endpoint = base.get('base_url') or provider.get('base_url') or ''
        model = base.get('model') or provider.get('model') or ''
        key = provider.get('api_key') or base.get('api_key') or ''
        if not endpoint or not model or not key:
            return None
        system = (
            "You are the CEO of ZION TECH GROUP. Write a concise, friendly but professional follow-up reply to a past client. "
            "Goals: 1) thank them for the past project; 2) propose 1-2 mutually beneficial new business ideas using their context; 3) invite them to explore our new AI services at https://ziontechgroup.com and note we offer free tools/services; 4) offer a meeting at https://calendly.com/kleber-ziontechgroup. "
            f"Reply in language: {lang if lang in {'en','pt','es'} else 'en'}."
        )
        user = (
            f"Subject: {subject}\nClient: {name} <{contact}>\nRecent context: {(snippet or '')[:300]}\n\nReturn only the email body."
        )
        payload = json.dumps({"model": model, "messages": [{"role":"system","content":system},{"role":"user","content":user}]}).encode('utf-8')
        req = urllib.request.Request(endpoint.rstrip('/')+'/chat/completions', data=payload, headers={'Authorization': f'Bearer {key}', 'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read().decode('utf-8', errors='ignore'))
        text = (((data.get('choices') or [{}])[0].get('message') or {}).get('content') or '').strip()
        return text or None
    except Exception:
        return None
def _count_duplicates():
    try:
        state = load_json_safe(DEDUP_DIR / 'global_dedup_state.json', {})
        if isinstance(state, dict):
            return len(state)
    except Exception:
        pass
    return 0

def _count_cooldown_blocks():
    try:
        lock = REPO / 'lead-crm' / '.ceo_outreach_sent.lock'
        if not lock.exists():
            return 0
        rows = json.loads(lock.read_text(encoding='utf-8'))
        now = int(time.time())
        return sum(1 for r in rows if now - int(r.get('ts', 0)) < 24 * 3600)
    except Exception:
        return 0

def _load_sent_set() -> dict:
    """Load outreach sent lock as dict for cooldown checks."""
    _SENT_LOCK = REPO / 'lead-crm' / '.ceo_outreach_sent.lock'
    if not _SENT_LOCK.exists():
        return {}
    try:
        rows = json.loads(_SENT_LOCK.read_text(encoding='utf-8'))
        return {(r.get('to','').lower(), (r.get('subject') or '').strip(), str(r.get('thread_id') or '').lower(), str(r.get('message_id') or '').lower()): r for r in rows}
    except Exception:
        return {}

def main():
    report = {
        'event': 'high_frequency_monitor_tick',
        'labels_checked': [],
        'hot_followup_threads': 0,
        'hot_followup_sent_count': 0,
        'new_inbox_interest_count': 0,
        'new_inbox_examples': [],
        'llm_tailoring_coverage': {
            'enabled': True,
            'contact_tailor_count': 0,
            'coverage_ratio': 0.0,
            'blocker': None
        },
        'errors': [],
        'pending_outreach_count': 0,
        'hot_followup_drafts_count': 0,
        'duplicate_prevention_count': _count_duplicates(),
        'cooldown_blocked_count': _count_cooldown_blocks(),
        'metrics': {
            'scanned_queries': 0,
            'folders_covered': 0,
            'auth_blocked_ticks': 0,
            'llm_blocked_ticks': 0,
            'duplicates_avoided': 0,
            'cooldown_skips': 0,
            'tailored_drafts': 0,
            'summarized_threads': 0
        },
        'ztg_sender_email': 'kleber@ziontechgroup.com',
        'tailor_fallback_count': 0,
        'tailor_ok_count': 0,
        'recent_outgoing_check': True,
        'recent_outgoing_subjects_sample': [],
        'recent_outgoing_threads': [],
    }

    try:
        gog_headers()
    except Exception as e:
        append_report({'auth_failure': str(e), 'ts': int(time.time())})
        print(json.dumps({'auth_failure': str(e)}, ensure_ascii=False))
        return

    # Check hot-follow-up label directly
    try:
        hits = search_all_folders('label:"!!!hot-follow-up"')
        report['hot_followup_threads'] = len(hits)
        hot_drafts = []
        hot_message_ids = []
        for h in hits:
            from_addr = h.get('from', '')
            m = re.search(r'<([^>]+)>', from_addr)
            contact = m.group(1).lower() if m else from_addr.strip().lower()
            if not contact or '@' not in contact:
                continue
            if contact.endswith('@ziontechgroup.com'):
                continue
            if any(contact.endswith(x) for x in (
                '@github.com', '@users.noreply.github.com', '@fyxer.com', '@airbnb.com',
                '@uber.com', '@tiktok.com', '@dpsmrn.org', '@surfline.com',
                '@calendly.com', '@zendesk.com'
            )):
                continue
            if recent_sent_exists(contact, within_seconds=24*3600):
                continue
            if same_outgoing_subject_recently_sent(contact, (h.get('subject') or '').strip(), within_seconds=24*3600):
                continue
            tid = h.get('threadId') or h.get('id')
            if tid in {'18729d9ac733fec6','17ae8d06ff494766','17ae8bef12ef37bc','17ace3cb5ba33436','17acc1a44f61dffd','17ac9d589f758ba2','17ac8d7ea8b6d03d','17ac3fea5d58bf65','17ac3fb13c1eb360','17ac3a9ef17a4130','17ac3a6b65985dda','17ac39bb1144ccdc','1795733950be3f61','19f3e95653f3845c'}:
                continue
            if not thread_alive(tid):
                continue
            hot_message_ids.append(h.get('id'))
            try:
                full = gmail_get(h.get('id'))
                text = extract_text(full)
            except Exception:
                text = ''
            lang = detect_lang(text)
            name = contact.split('@')[0].replace('.', ' ').title()
            tailor = _llm_tailor_reply(name, contact, lang, (h.get('subject') or ''), text or h.get('snippet') or '')
            draft = tailor or build_draft(name, lang)
            if tailor:
                report['metrics']['tailored_drafts'] += 1
                report['llm_tailoring_coverage']['contact_tailor_count'] += 1
                report['tailor_ok_count'] = report.get('tailor_ok_count', 0) + 1
            else:
                report['tailor_fallback_count'] = report.get('tailor_fallback_count', 0) + 1
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
        try:
            hot_label_id = gmail_get_or_create_label_id('!!!hot-follow-up')
            gmail_batch_modify(
                {'ids': hot_message_ids[:50]},
                addLabelIds=[hot_label_id]
            )
            report['hot_followup_labeled_count'] = len(hot_message_ids)
        except Exception as e:
            report['errors'].append({'hot_followup_labeling': str(e)})
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

    # Inbox interest probe -> continuous-improvement drafts
    try:
        interest_q = (
            'in:anywhere newer_than:14d '
            '("partnership" OR "collaboration" OR "proposal" OR "opportunity" OR "integration")'
        )
        interest_hits = search_all_folders(interest_q)
        seen_threads = set()
        deduped_hits = []
        for hit in interest_hits:
            tid = hit.get('threadId') or hit.get('id')
            if tid and tid in seen_threads:
                continue
            seen_threads.add(tid)
            deduped_hits.append(hit)
        report['new_inbox_interest_count'] = len(interest_hits)
        report['new_inbox_interest_dedup_count'] = len(deduped_hits)
        report['new_inbox_examples'] = deduped_hits[:5]
        interest_drafts = []
        for hit in interest_hits:
            from_addr = hit.get('from', '')
            m = re.search(r'<([^>]+)>', from_addr)
            contact = m.group(1).lower() if m else from_addr.strip().lower()
            if not contact or '@' not in contact:
                continue
            if contact.endswith('@ziontechgroup.com'):
                continue
            if any(contact.endswith(x) for x in (
                '@github.com', '@users.noreply.github.com', '@fyxer.com', '@airbnb.com',
                '@uber.com', '@tiktok.com', '@dpsmrn.org', '@surfline.com',
                '@calendly.com', '@zendesk.com'
            )):
                continue
            if 'noreply' in contact or 'notifications@github.com' == contact or 'dependabot' in contact:
                continue
            thread_id = hit.get('threadId') or hit.get('id')
            if not thread_id:
                continue
            try:
                full = gmail_get(hit.get('id'))
                text = extract_text(full)
            except Exception:
                text = hit.get('snippet') or ''
            lang = detect_lang(text)
            name = contact.split('@')[0].replace('.', ' ').title()
            tailor = _llm_tailor_reply(name, contact, lang, (hit.get('subject') or 'New inquiry').strip(), text or '')
            draft = tailor or build_draft(name, lang)
            interest_drafts.append({
                'lead_id': hit.get('id'),
                'thread_id': thread_id,
                'message_id': hit.get('id'),
                'from': contact,
                'name': name,
                'company': contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner',
                'subject': hit.get('subject') or 'New inquiry',
                'lang': lang,
                'draft': draft,
                'status': 'ready_to_review',
                'dedup_key': re.sub(r'[^a-z0-9]', '', contact),
                'created_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            })
            if tailor:
                report['metrics']['tailored_drafts'] = report['metrics'].get('tailored_drafts', 0) + 1
                report['llm_tailoring_coverage']['contact_tailor_count'] += 1
                report['tailor_ok_count'] = report.get('tailor_ok_count', 0) + 1
            else:
                report['tailor_fallback_count'] = report.get('tailor_fallback_count', 0) + 1
        report['interest_drafts_count'] = len(interest_drafts)
        report['interest_drafts'] = interest_drafts[:5]
        if interest_drafts:
            try:
                q_path = Path('lead-crm') / 'outreach_monitor' / 'processed' / 'interest_draft_queue.jsonl'
                existing = []
                if q_path.exists():
                    existing = [json.loads(line) for line in q_path.read_text(encoding='utf-8', errors='ignore').splitlines() if line.strip()]
                combined = existing + interest_drafts
                seen_keys = set()
                final = []
                for item in combined:
                    k = item.get('dedup_key') or item.get('from')
                    if not k or k in seen_keys:
                        continue
                    seen_keys.add(k)
                    final.append(item)
                q_path.write_text('\n'.join(json.dumps(x, ensure_ascii=False) for x in final), encoding='utf-8')
                report['interest_queue_count'] = len(final)
            except Exception as queue_err:
                report['errors'].append({'interest_queue': repr(queue_err)})
    except Exception as e:
        report['errors'].append({'inbox_probe': repr(e)})

    # Dedup/ledger stats
    try:
        dedup = load_json_safe(DEDUP_DIR / 'global_dedup_state.json', {})
        report['dedup_entries'] = len(dedup) if isinstance(dedup, dict) else 0
        if LEDGER_FILE.exists():
            report['ledger_entries'] = sum(1 for _ in LEDGER_FILE.open('r', encoding='utf-8'))
        report['hot_followup_ledger_entries'] = sum(1 for _ in HOT_FOLLOWUP_REPLY_LEDGER.open('r', encoding='utf-8')) if HOT_FOLLOWUP_REPLY_LEDGER.exists() else 0
        total_drafts = report.get('hot_followup_drafts_count', 0) + report.get('interest_drafts_count', 0)
        tailored = report['llm_tailoring_coverage'].get('contact_tailor_count', 0)
        report['llm_tailoring_coverage']['coverage_ratio'] = round((tailored / total_drafts), 4) if total_drafts > 0 else (1.0 if tailored > 0 else 0.0)
    except Exception as e:
        report['errors'].append({'local_state': repr(e)})

    append_report(report)
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
