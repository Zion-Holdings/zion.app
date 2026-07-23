#!/usr/bin/env python3
"""Minimal Termux-compatible Gmail outreach monitor with LLM tailoring and bounded history miner."""
import os, sys, json, time, re
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
        print(f"METRIC search scanned_queries={scanned_queries} hits={len(hits)} last_err={last_err!r}", flush=True)
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
            "Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
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
        'recent_sent_count': 0,
        'hot_followup_threads': 0,
        'hot_followup_sent_count': 0,
        'dedup_entries': 0,
        'ledger_entries': 0,
        'new_inbox_interest_count': 0,
        'new_inbox_examples': [],
        'llm_tailoring_coverage': {'enabled': False, 'contact_tailor_count': 0, 'coverage_ratio': 0.0, 'blocker': None},
        'errors': [],
    }
    try:
        check_targets = [
            ('!!!!HOT FOLLOW-UP', 'Label_4207916705207178948'),
            ('!!!hot-followup-sent', 'Label_947'),
            ('!!!hot-follow-up', 'Label_946'),
        ]
        for name, lid in check_targets:
            report['labels_checked'].append({'name': name, 'id': lid})
            try:
                msgs = gmail_search(f'label:{lid}', limit=20, all_folders=True)
                count = len(msgs)
                if 'HOT' in name and 'SENT' not in name:
                    report['hot_followup_threads'] = count
                if 'SENT' in name:
                    report['hot_followup_sent_count'] = count
            except Exception as e:
                report['errors'].append({'label': name, 'error': repr(e)})

        try:
            sent = gmail_search('in:sent', limit=10, all_folders=True)
            report['recent_sent_count'] = len(sent)
        except Exception as e:
            report['errors'].append({'sent_probe': repr(e)})

        try:
            interest_q = (
                '!category:promotions !in:spam !in:trash '
                'newer_than:7d "partnership" OR "collaboration" OR "proposal" '
                '-"support reminder" -"rate the support" -"support survey" -"zendesk"'
            )
            msgs = gmail_search(interest_q, limit=20, all_folders=True)
            report['new_inbox_interest_count'] = len(msgs)
            examples = []
            seen = set()
            for m in msgs:
                mid = m.get('id')
                if not mid or mid in seen:
                    continue
                seen.add(mid)
                try:
                    full = gmail_get(mid)
                except Exception:
                    continue
                hdrs = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
                tid = full.get('threadId')
                thread_alive = False
                if tid:
                    try:
                        thread_alive = bool(gmail_thread_get(tid))
                    except Exception:
                        thread_alive = False
                fr = hdrs.get('From', '')
                if 'ziontechgroup.com' in (fr or '').lower():
                    continue
                examples.append({
                    'id': full.get('id'),
                    'thread_id': tid,
                    'thread_alive': thread_alive,
                    'from': fr,
                    'subject': hdrs.get('Subject'),
                    'date': hdrs.get('Date'),
                    'snippet': full.get('snippet', '')[:180],
                })
            report['new_inbox_examples'] = examples[:5]
        except Exception as e:
            report['errors'].append({'inbox_probe': repr(e)})

        try:
            hot_drafts = []
            hot_label_id = 'Label_946'
            if hot_label_id:
                hot_msgs = gmail_search(f'label:{hot_label_id}', limit=20, all_folders=True)
                seen_hot = set()
                hot_dedup = set()
                for m in hot_msgs:
                    mid = m.get('id')
                    if not mid or mid in seen_hot:
                        continue
                    seen_hot.add(mid)
                    try:
                        meta = gmail_get(mid)
                    except Exception:
                        continue
                    h = {x['name']: x['value'] for x in meta.get('payload', {}).get('headers', [])}
                    thread_id = meta.get('threadId') or mid
                    alive = False
                    try:
                        alive = bool(gmail_thread_get(thread_id))
                    except Exception:
                        alive = False
                    if not alive:
                        continue
                    from_addr = h.get('From', '')
                    m2 = re.search(r'<([^>]+)>', from_addr)
                    contact = m2.group(1).lower() if m2 else from_addr.strip().lower()
                    if not contact or '@' not in contact:
                        continue
                    if _is_noise_sender(contact, from_addr, h.get('Subject', ''), meta.get('snippet', '')):
                        continue
                    dedup_key = re.sub(r'[^a-z0-9]', '', contact)
                    if dedup_key in hot_dedup:
                        continue
                    hot_dedup.add(dedup_key)
                    if recent_sent_exists(contact, within_seconds=24*3600):
                        continue
                    text = extract_text(meta) or ' '
                    lang = detect_lang(text)
                    name = contact.split('@')[0].replace('.', ' ').title()
                    company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
                    subject = h.get('Subject') or 'Following up on our last project'
                    draft = build_draft(name, lang, subject)
                    hot_drafts.append({
                        'lead_id': mid,
                        'thread_id': thread_id,
                        'message_id': mid,
                        'from': contact,
                        'name': name,
                        'company': company,
                        'subject': subject,
                        'lang': lang,
                        'draft': draft.strip(),
                        'status': 'ready_to_send',
                        'dedup_key': dedup_key,
                        'created_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
                    })
            report['hot_followup_drafts_count'] = len(hot_drafts)
            report['hot_followup_drafts'] = hot_drafts[:5]
            try:
                existing = []
                if PENDING_QUEUE_FILE.exists():
                    try:
                        existing = [json.loads(line) for line in PENDING_QUEUE_FILE.read_text(encoding='utf-8', errors='ignore').splitlines() if line.strip()]
                    except Exception:
                        existing = []
                seen_keys = {item.get('dedup_key') or item.get('from') for item in existing if item.get('dedup_key') or item.get('from')}
                final = list(existing)
                for item in hot_drafts:
                    k = item.get('dedup_key') or item.get('from')
                    if not k or k in seen_keys:
                        continue
                    seen_keys.add(k)
                    final.append(item)
                PENDING_QUEUE_FILE.write_text('\\n'.join(json.dumps(x, ensure_ascii=False) for x in final), encoding='utf-8')
                report['pending_outreach_count'] = len(final)
            except Exception as e:
                report['errors'].append({'pending_queue': repr(e)})
        except Exception as e:
            report['errors'].append({'hot_followup_build': repr(e)})
    except Exception as e:
        report['errors'].append({'global': repr(e)})

    try:
        dedup = load_json_safe(DEDUP_DIR / 'global_dedup_state.json', {})
        report['dedup_entries'] = len(dedup) if isinstance(dedup, dict) else 0
        if LEDGER_FILE.exists():
            report['ledger_entries'] = sum(1 for _ in LEDGER_FILE.open('r', encoding='utf-8'))
    except Exception as e:
        report['errors'].append({'local_state': repr(e)})

    try:
        endpoint = os.getenv('ZION_LLM_API_ENDPOINT') or os.getenv('LLM_API_ENDPOINT')
        api_key = os.getenv('ZION_LLM_API_KEY') or os.getenv('LLM_API_KEY')
        model = os.getenv('ZION_LLM_MODEL') or os.getenv('LLM_MODEL')
        llm_blocker = None
        if not endpoint:
            llm_blocker = 'missing_endpoint'
        if not api_key:
            llm_blocker = llm_blocker or 'missing_key'
        if not model:
            llm_blocker = llm_blocker or 'missing_model'
        if llm_blocker:
            try:
                import yaml
                cfg = yaml.safe_load((Path.home()/'.hermes'/'config.yaml').read_text(encoding='utf-8') or '{}') or {}
                model_cfg = cfg.get('model') if isinstance(cfg.get('model'), dict) else {}
                providers = cfg.get('providers') if isinstance(cfg.get('providers'), dict) else {}
                provider_name = model_cfg.get('provider')
                provider = providers.get(provider_name, {}) if isinstance(provider_name, str) else {}
                endpoint = endpoint or provider.get('base_url') or provider.get('api_base') or ''
                api_key = api_key or provider.get('api_key') or ''
                model = model or model_cfg.get('default') or ''
                auth = (provider.get('auth') or '').lower()
                if auth == 'oauth' and (not endpoint or not api_key):
                    auth_path = Path.home()/'.hermes'/'auth.json'
                    if auth_path.exists():
                        llm_blocker = None
                if endpoint and api_key and model:
                    llm_blocker = None
            except Exception:
                pass
        dry_run_file = DEDUP_DIR / 'dry_run_report.jsonl'
        tailor_count = 0
        total_dry = 0
        if dry_run_file.exists():
            for line in dry_run_file.open('r', encoding='utf-8'):
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                if obj.get('mode') != 'dry_run':
                    continue
                total_dry += 1
                if obj.get('llm_tailored'):
                    tailor_count += 1
        coverage = (tailor_count / total_dry) if total_dry else 0.0
        report['llm_tailoring_coverage'] = {
            'enabled': llm_blocker is None,
            'contact_tailor_count': tailor_count,
            'coverage_ratio': round(coverage, 4),
            'blocker': llm_blocker,
        }
    except Exception as e:
        report['errors'].append({'llm_coverage': repr(e)})

    append_report(report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
