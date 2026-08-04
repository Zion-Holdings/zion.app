#!/usr/bin/env python3
"""Minimal Termux-compatible Gmail outreach monitor with LLM tailoring and bounded history miner."""
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

def search_all_folders(q, limit=20):
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
                msgs = gmail_search(query, limit=limit, all_folders=True)
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
        print(f'METRIC search scanned_queries={scanned_queries} hits={len(hits)} last_err={last_err!r}', flush=True)
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

def build_draft(name, lang, subject='Following up on our last project'):
    if lang == 'es':
        return (
            f"{name},\n\n"
            "Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.\n\n"
            "Puedes ver nossos novos servicios de IA aquí: https://ziontechgroup.com\n"
            "También ofrecemos herramientas y servicios gratuitos en el sitio.\n\n"
            "Si cuadra, conversemos: https://calendly.com/kleber-ziontechgroup o también por Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
            "Saludos cordiais,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    if lang == 'pt':
        return (
            f"{name},\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.\n\n"
            "Você pode ver nossos novos serviços de IA aqui: https://ziontechgroup.com\n"
            "Também temos ferramentas e serviços gratuitos no site.\n\n"
            "Se fizer sentido, vamos conversar: https://calendly.com/kleber-ziontechgroup ou também por Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    return (
        f"{name},\n\n"
        "Thank you for the opportunity to work together on the previous project. I see strong potential for new mutually valuable work between our teams.\n\n"
        "You can explore our new AI services here: https://ziontechgroup.com\n"
        "We also offer free services and tools on the site.\n\n"
        "If it makes sense, let's talk: https://calendly.com/kleber-ziontechgroup or via Google Meet: https://meet.google.com/ouu-khao-kuy\n\n"
        "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
    )

def _is_noise_sender(contact: str, from_addr: str = '', subject: str = '', snippet: str = '') -> bool:
    contact = (contact or '').lower()
    from_addr = (from_addr or '').lower()
    subject = (subject or '').lower()
    snippet = (snippet or '').lower()
    if contact.endswith('@ziontechgroup.com'):
        return True
    tokens = [
        'github.com','fyxer.com','airbnb.com','uber.com','tiktok.com','dpsmrn.org','surfline.com',
        'calendly.com','zendesk.com','freshdesk.com','helpscout.com','intercom.io','bigcontent.io',
        'walletconnect.com','artlist.com','noreply','notifications@','dependabot','newsletter',
        'marketing@','hello@','teamcalendly','no-reply@','postmaster@','noresponder','mailer@','promo@',
    ]
    if any(x in from_addr for x in tokens) or any(x in contact for x in tokens):
        return True
    if any(subject.startswith(p) for p in ('[','re: ','undeliverable','bounce','your ','new acquisition','reverse myths','application for','brew fest','tickets now')):
        return True
    if any(k in subject for k in ['event','tickets','saver','pass','fest','promo','promotion','acquisition']):
        return True
    if any(k in snippet for k in ['unsubscribe','click here','claim your','buy now','limited time','early-bird']):
        return True
    domain = contact.split('@')[-1] if '@' in contact else ''
    if any(domain.endswith(x) for x in ('.email','.local','.io','.news','.promo','.mail','.bounce')) and not any(k in subject for k in ['project','proposal','opportunity']):
        return True
    return False

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

def _last_history_ts():
    p = DEDUP_DIR / 'historical_miner_ts.txt'
    try:
        if p.exists():
            return int(p.read_text(encoding='utf-8').strip() or '0')
    except Exception:
        pass
    return 0

def _save_history_ts(ts: int):
    try:
        (DEDUP_DIR / 'historical_miner_ts.txt').write_text(str(int(ts)), encoding='utf-8')
    except Exception:
        pass

def mine_older_history(min_ts):
    hits = []
    try:
        history_q = f'in:anywhere after:{min_ts} ("partnership" OR "collaboration" OR "proposal" OR "opportunity" OR "integration")'
        hits = search_all_folders(history_q, limit=20)
    except Exception:
        pass
    return hits

def _llm_tailor_reply_auth(name, contact, lang, subject, snippet):
    try:
        import urllib.request
        auth_path = Path.home()/'.hermes'/'auth.json'
        cfg_path = Path.home()/'.hermes'/'config.yaml'
        if not auth_path.exists():
            return None
        cfg = json.loads(auth_path.read_text(encoding='utf-8')) or {}
        provider = ((cfg.get('providers') or {}).get('nous') or {})
        endpoint = (provider.get('inference_base_url') or 'https://inference-api.nousresearch.com/v1').rstrip('/')
        token = provider.get('access_token') or ''
        if not token or not endpoint:
            return None
        model = provider.get('model') or 'stepfun/step-3.7-flash:free'
        system = (
            "You are the CEO of Zion Tech Group. Output one complete email only. "
            f"Language: {lang if lang in {'en','pt','es'} else 'en'}. "
            "Tone: friendly, direct, professional. "
            "Include https://ziontechgroup.com and mention free services/tools. "
            "Include https://calendly.com/kleber-ziontechgroup and https://meet.google.com/ouu-khao-kuy. "
            "Prefix MUST start with the email body greeting, e.g. Hi ..., Olá ..., Dear ... . "
            "No narration or chain-of-thought."
        )
        user = (
            f"Subject: {subject}\nRecipient: {name} <{contact}>\nContext: "
            f"{(snippet or '')[:500]}\n\nWrite the email."
        )
        payload = json.dumps({
            'model': model,
            'messages': [
                {'role': 'system', 'content': system},
                {'role': 'user', 'content': user},
                {'role': 'assistant', 'content': 'Hi ' + name + ',\n\n'}
            ],
            'temperature': 0.25,
            'max_tokens': 1024,
        }).encode('utf-8')
        req = urllib.request.Request(endpoint+'/chat/completions', data=payload, headers={'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=25) as r:
            data = json.loads(r.read().decode('utf-8', errors='ignore'))
        msg = ((data.get('choices') or [{}])[0].get('message') or {})
        if not isinstance(msg, dict):
            return None
        if msg.get('content'):
            text = msg['content'].strip()
            if text and len(text.splitlines()) >= 2:
                return text[:900]
        if msg.get('reasoning'):
            text = msg['reasoning'].strip()
            for prefix in ('Got it,', 'Sure,', 'Okay,', 'Wait,', 'let\'s', 'First,', 'Now,', 'Here\'s'):
                if text.startswith(prefix):
                    text = text[len(prefix):].lstrip(' ,:-')
            greeting_matches = list(re.finditer(
                r'(?:\n|^)((?:Hi|Hello|Dear|Good\s+(?:morning|afternoon|evening)|Greetings|Ol[áa])[^\\n]{0,180}?,?)',
                text, re.IGNORECASE | re.S,
            ))
            if greeting_matches:
                text = text[greeting_matches[-1].start():].strip()
            else:
                candidates = [
                    m.start() for m in re.finditer(r'(?:\n|^)(?:Hi|Hello|Dear|Ol[áa])', text, re.IGNORECASE | re.S)
                ]
                if candidates:
                    text = text[candidates[-1]:].strip()
                else:
                    text = text[-1200:].strip()
            text = ' '.join([ln.strip() for ln in text.splitlines() if ln.strip()])
            text = text.replace('\\n', '\n').strip()
            if len(text) > 900:
                text = text[-900:].rstrip()
            if any(text.lower().startswith(x) for x in ['got it', 'first,', 'okay,', 'let\'s', 'here\'s']) or 'the requirements:' in text.lower() or 'the user said' in text.lower():
                return None
            if not re.search(r'^\s*(hi|hello|dear|good\s+(morning|afternoon|evening)|greetings|ol[áa])', text, re.IGNORECASE):
                return None
            return text
        return None
    except Exception:
        return None

def main():
    report = {
        'event': 'high_frequency_monitor_tick',
        'labels_checked': ['!!!hot-follow-up'],
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
        'historical_miner': {},
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
        hot_message_ids = []
        metrics = {'tailored_drafts': 0, 'tailor_fallback_count': 0, 'tailor_ok_count': 0}
        for h in hits:
            from_addr = h.get('from', '')
            m = re.search(r'<([^>]+)>', from_addr)
            contact = m.group(1).lower() if m else from_addr.strip().lower()
            subject = (h.get('subject') or '').strip()
            if not contact or '@' not in contact or _is_noise_sender(contact, from_addr, subject, h.get('snippet') or ''):
                continue
            if same_outgoing_subject_recently_sent(contact, subject, within_seconds=24*3600):
                continue
            tid = h.get('threadId') or h.get('id')
            suppressed = {'18729d9ac733fec6','17ae8d06ff494766','17ae8bef12ef37bc','17ace3cb5ba33436','17acc1a44f61dffd','17ac9d589f758ba2','17ac8d7ea8b6d03d','17ac3fea5d58bf65','17ac3fb13c1eb360','17ac3a9ef17a4130','17ac3a6b65985dda','17ac39bb1144ccdc','1795733950be3f61','19f3e95653f3845c'}
            if tid in suppressed:
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
            tailor = _llm_tailor_reply_auth(name, contact, lang, (h.get('subject') or ''), text or h.get('snippet') or '')
            draft = tailor or build_draft(name, lang)
            if tailor:
                metrics['tailored_drafts'] += 1
                metrics['tailor_ok_count'] += 1
            else:
                metrics['tailor_fallback_count'] += 1
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
            if hot_message_ids:
                hot_label_id = gmail_get_or_create_label_id('!!!hot-follow-up')
                gmail_batch_modify(
                    {'ids': hot_message_ids[:50]},
                    addLabelIds=[hot_label_id]
                )
                report['hot_followup_labeled_count'] = len(hot_message_ids)
        except Exception as e:
            report['errors'].append({'hot_followup_labeling': str(e)})
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
        report['metrics'] = metrics
        report['llm_tailoring_coverage']['contact_tailor_count'] += metrics.get('tailor_ok_count', 0)
        report['llm_tailoring_coverage']['enabled'] = True
    except Exception as e:
        report['errors'].append({'hot_followup': repr(e)})

    # Inbox interest probe -> continuous-improvement drafts
    try:
        interest_q = (
            'in:anywhere newer_than:14d '
            '("partnership" OR "collaboration" OR "proposal" OR "opportunity" OR "integration")'
        )
        interest_hits = search_all_folders(interest_q)
        interest_hits = [
            hit for hit in interest_hits
            if 'free ai readiness audit' not in (hit.get('subject') or '').lower()
            and 'custom proposal' not in (hit.get('subject') or '').lower()
            and (hit.get('from') or '').lower() != 'no-reply@nvidiagram.a.bigcontent.io'
            and (hit.get('from') or '').lower() != 'newsletter@artlist.com'
            and not (hit.get('subject') or '').lower().startswith('re: ')
        ]
        seen_threads = set()
        deduped_hits = []
        for hit in interest_hits:
            tid = hit.get('threadId') or hit.get('id')
            if tid and tid in seen_threads:
                continue
            seen_threads.add(tid)
            deduped_hits.append(hit)
        skipped_reasons = []
        filtered_hits = []
        for hit in interest_hits:
            subject = (hit.get('subject') or '').lower()
            from_addr = (hit.get('from') or '').lower()
            reason = None
            if 'free ai readiness audit' in subject or 'custom proposal' in subject:
                reason = 'self_promotion_subject'
            elif from_addr in {
                'no-reply@nvidiagram.a.bigcontent.io',
                'newsletter@artlist.com',
                'notifications@github.com',
                'dependabot[bot] <notifications@github.com>',
            }:
                reason = 'noise_sender'
            elif any(from_addr.endswith(x) for x in (
                '@github.com','@users.noreply.github.com','@fyxer.com','@airbnb.com',
                '@uber.com','@tiktok.com','@dpsmrn.org','@surfline.com',
                '@calendly.com','@zendesk.com','@freshdesk.com','@helpscout.com',
                '@intercom.io','@bigcontent.io','@datadog.zendesk.com',
            )):
                reason = 'support_sender_domain'
            elif subject.startswith('[') or subject.startswith('re: '):
                reason = 'bracketed_or_replay_subject'
            elif 'newsletter' in from_addr or 'noreply' in from_addr or 'mailer' in from_addr:
                reason = 'newsletter_mailer'
            elif 'undeliverable' in subject or 'bounce' in subject:
                reason = 'bounce'
            if reason:
                skipped_reasons.append(reason)
                continue
            filtered_hits.append(hit)
        interest_hits = filtered_hits
        report['new_inbox_interest_count'] = len(interest_hits)
        report['new_inbox_interest_filtered_count'] = len(skipped_reasons)
        report['new_inbox_interest_filter_breakdown'] = {
            k: skipped_reasons.count(k) for k in dict.fromkeys(skipped_reasons)
        }
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
            if any(x in (hit.get('from') or '').lower() for x in [
                'github.com','fyxer.com','airbnb.com','uber.com','tiktok.com','dpsmrn.org','surfline.com',
                'calendly.com','zendesk.com','freshdesk.com','helpscout.com','intercom.io',
                'bigcontent.io','walletconnect.com','artlist.com','noreply','notifications@',
                'dependabot','newsletter','marketing@','hello@','teamcalendly','no-reply@',
            ]):
                continue
            if (hit.get('subject') or '').lower().startswith('[') or (hit.get('subject') or '').lower().startswith('re: '):
                continue
            if 'noreply' in contact or 'notifications@github.com' == contact or 'dependabot' in contact:
                continue
            if any(p in contact for p in ['zendesk.com','freshdesk.com','helpscout.com','intercom.io','bigcontent.io']):
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
            tailor = _llm_tailor_reply_auth(name, contact, lang, (hit.get('subject') or 'New inquiry').strip(), text or '')
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
                report['metrics']['tailor_ok_count'] = report['metrics'].get('tailor_ok_count', 0) + 1
            else:
                report['metrics']['tailor_fallback_count'] = report['metrics'].get('tailor_fallback_count', 0) + 1
        report['interest_drafts_count'] = len(interest_drafts)
        report['interest_drafts'] = interest_drafts[:5]
        if interest_drafts:
            q_path = Path('lead-crm') / 'outreach_monitor' / 'processed' / 'interest_draft_queue.jsonl'
            try:
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
            except Exception as queue_err:
                report['errors'].append({'interest_queue': repr(queue_err)})
            try:
                lines = q_path.read_text(encoding='utf-8', errors='ignore').splitlines()
                kept = []
                for line in lines:
                    if not line.strip():
                        continue
                    try:
                        obj = json.loads(line)
                        ts = obj.get('created_at') or obj.get('ts') or ''
                        age_days = 9e9
                        if ts.endswith('Z'):
                            age_days = (time.time() - time.mktime(time.strptime(ts.replace('Z',''), '%Y-%m-%dT%H:%M:%S'))) / 86400
                        elif ts.endswith('+00:00'):
                            age_days = (time.time() - time.mktime(time.strptime(ts.replace('+00:00',''), '%Y-%m-%dT%H:%M:%S'))) / 86400
                        if age_days > 3:
                            continue
                        kept.append(line)
                    except Exception:
                        pass
                q_path.write_text('\n'.join(kept), encoding='utf-8')
                report['interest_queue_count'] = len(kept)
            except Exception:
                pass
    except Exception as e:
        report['errors'].append({'inbox_probe': repr(e)})

    # Unconditional draft-queue TTL cleanup on every tick
    try:
        q_path = Path('lead-crm') / 'outreach_monitor' / 'processed' / 'interest_draft_queue.jsonl'
        if q_path.exists():
            lines = q_path.read_text(encoding='utf-8', errors='ignore').splitlines()
            kept = []
            for line in lines:
                if not line.strip():
                    continue
                try:
                    obj = json.loads(line)
                    ts = obj.get('created_at') or obj.get('ts') or ''
                    age_days = 9e9
                    if ts.endswith('Z'):
                        age_days = (time.time() - time.mktime(time.strptime(ts.replace('Z',''), '%Y-%m-%dT%H:%M:%S'))) / 86400
                    elif ts.endswith('+00:00'):
                        age_days = (time.time() - time.mktime(time.strptime(ts.replace('+00:00',''), '%Y-%m-%dT%H:%M:%S'))) / 86400
                    if age_days > 3:
                        continue
                    from_addr = (obj.get('from') or '').lower()
                    subject = (obj.get('subject') or '').lower()
                    snippet = (obj.get('draft') or '').lower()
                    if _is_noise_sender(from_addr, from_addr, subject, snippet):
                        continue
                    kept.append(line)
                except Exception:
                    pass
            q_path.write_text('\n'.join(kept), encoding='utf-8')
            report['interest_queue_count'] = len(kept)
    except Exception:
        pass

    # Bounded older-history mining
    try:
        min_ts = _last_history_ts()
        if not min_ts:
            min_ts = int(time.time()) - 30 * 24 * 3600
        hist_hits = mine_older_history(min_ts)
        report['historical_miner'] = {
            'run_now': True,
            'window_start': min_ts,
            'hits': len(hist_hits),
            'errors': None if hist_hits or not min_ts else 'no_hits_or_disabled',
        }
        if hist_hits:
            _save_history_ts(int(time.time()))
    except Exception as e:
        report['errors'].append({'historical_miner': repr(e)})

    # Coverage ratio
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
