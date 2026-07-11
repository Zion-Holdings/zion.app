import sys, os, json, time, re
from pathlib import Path

sys.path.insert(0, r'C:/Users/Zion/AppData/Local/hermes/skills/productivity/google-workspace/scripts')
from google_api import build_service
from googleapiclient.errors import HttpError

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
MONITOR_DIR = BASE_DIR / 'outreach_monitor' / 'metrics'
MONITOR_DIR.mkdir(parents=True, exist_ok=True)
REPORT_FILE = MONITOR_DIR / 'monitor_report.jsonl'
DEDUP_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'global_dedup_state.json'
LEDGER_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'sent_ledger.jsonl'
HOT_FOLLOWUP_LABEL_ID = 'Label_946'
PENDING_QUEUE_FILE = BASE_DIR / 'outreach_monitor' / 'processed' / 'pending_ceo_drafts.jsonl'


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
        'llm_tailoring_coverage': {
            'enabled': False,
            'contact_tailor_count': 0,
            'coverage_ratio': 0.0,
            'blocker': None,
        },
        'errors': [],
    }

    try:
        service = build_service('gmail', 'v1')
        label_map = {}
        for lab in service.users().labels().list(userId='me').execute().get('labels', []):
            label_map[lab['name']] = lab['id']

        check_targets = [
            ('!!!!HOT FOLLOW-UP', 'Label_4207916705207178948'),
            ('!!!hot-followup-sent', 'Label_947'),
            ('!!!hot-follow-up', 'Label_946'),
        ]
        for name, lid in check_targets:
            report['labels_checked'].append({'name': name, 'id': lid})
            try:
                res = service.users().messages().list(userId='me', labelIds=[lid], maxResults=20).execute()
                count = len(res.get('messages', []))
                if 'HOT' in name and 'SENT' not in name:
                    report['hot_followup_threads'] = count
                if 'SENT' in name:
                    report['hot_followup_sent_count'] = count
            except Exception as e:
                report['errors'].append({'label': name, 'error': repr(e)})

        try:
            sent = service.users().messages().list(userId='me', q='in:sent', maxResults=10).execute()
            report['recent_sent_count'] = len(sent.get('messages', []))
        except Exception as e:
            report['errors'].append({'sent_probe': repr(e)})

        try:
            interest_q = (
                '!category:promotions !in:spam !in:trash '
                'newer_than:7d "partnership" OR "collaboration" OR "proposal" '
                '-"support reminder" -"rate the support" -"support survey" -"zendesk"'
            )
            inbox = service.users().messages().list(userId='me', q=interest_q, maxResults=20).execute()
            msgs = inbox.get('messages', [])
            report['new_inbox_interest_count'] = len(msgs)
            examples = []
            seen = set()
            for m in msgs:
                if m['id'] in seen:
                    continue
                seen.add(m['id'])
                try:
                    meta = service.users().messages().get(
                        userId='me', id=m['id'], format='metadata', metadataHeaders=['Subject', 'From', 'Date']
                    ).execute()
                    hdrs = {x['name']: x['value'] for x in meta.get('payload', {}).get('headers', [])}
                    thread_id = meta.get('threadId')
                    thread_alive = False
                    if thread_id:
                        try:
                            service.users().threads().get(userId='me', id=thread_id).execute()
                            thread_alive = True
                        except Exception:
                            thread_alive = False
                    examples.append({
                        'id': meta['id'],
                        'thread_id': thread_id,
                        'thread_alive': thread_alive,
                        'from': hdrs.get('From'),
                        'subject': hdrs.get('Subject'),
                        'date': hdrs.get('Date'),
                        'snippet': meta.get('snippet', '')[:180],
                    })
                except Exception:
                    pass
            report['new_inbox_examples'] = examples[:5]
        except Exception as e:
            report['errors'].append({'inbox_probe': repr(e)})

        try:
            hot_drafts = []
            hot_dedup = set()
            dedup_state = load_json_safe(DEDUP_FILE, {}) if 'DEDUP_FILE' in globals() else {}
            hot_label_id = HOT_FOLLOWUP_LABEL_ID
            if hot_label_id:
                hot = service.users().messages().list(userId='me', labelIds=[hot_label_id], maxResults=20).execute()
                hot_msg_ids = [x['id'] for x in hot.get('messages', []) if x.get('id')]
                seen_hot = set()
                for mid in hot_msg_ids:
                    if mid in seen_hot:
                        continue
                    seen_hot.add(mid)
                    try:
                        meta = service.users().messages().get(
                            userId='me', id=mid, format='metadata', metadataHeaders=['Subject','From','Message-ID']
                        ).execute()
                    except Exception:
                        continue
                    h = {x['name']: x['value'] for x in meta.get('payload',{}).get('headers',[])}
                    thread_id = meta.get('threadId') or mid
                    alive = False
                    try:
                        service.users().threads().get(userId='me', id=thread_id).execute()
                        alive = True
                    except Exception:
                        alive = False
                    if not alive:
                        continue
                    from_addr = h.get('From','')
                    m = re.search(r'<([^>]+)>', from_addr)
                    contact = m.group(1).lower() if m else from_addr.strip().lower()
                    if not contact or '@' not in contact:
                        continue
                    dedup_key = re.sub(r'[^a-z0-9]','',contact)
                    if dedup_key in hot_dedup:
                        continue
                    hot_dedup.add(dedup_key)
                    try:
                        full = service.users().messages().get(userId='me', id=mid, format='full').execute()
                        text = ''
                        pl = full.get('payload',{})
                        if pl.get('body',{}).get('data'):
                            text = base64.urlsafe_b64decode(pl['body']['data']).decode('utf-8','ignore')
                        if not text:
                            for part in pl.get('parts',[]) or []:
                                if part.get('mimeType') == 'text/plain' and part.get('body',{}).get('data'):
                                    text = base64.urlsafe_b64decode(part['body']['data']).decode('utf-8','ignore')
                                    break
                        text = text or ' '
                    except Exception:
                        text = ' '
                    lang = 'en'
                    try:
                        lower = text.lower()
                        if any(w in lower for w in ['obrigado','oportunidade','projeto','serviços','ferramentas','call','abraço','oi']):
                            lang = 'pt'
                        elif any(w in lower for w in ['gracias','oportunidad','proyecto','servicios','herramientas','llamada','saludos']):
                            lang = 'es'
                    except Exception:
                        pass
                    name = contact.split('@')[0].replace('.',' ').title()
                    company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
                    subject = h.get('Subject') or 'Following up on our last project'
                    contact_key = contact
                    if globals().get('same_contact_recently_sent_any'):
                        try:
                            if same_contact_recently_sent_any(contact_key, within_seconds=24*3600):
                                continue
                        except Exception:
                            pass
                    if lang == 'es':
                        draft = (
                            f"{name},\n\n"
                            f"Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Veo buenas oportunidades para crear valor mutuo ahora.\n\n"
                            f"Puedes ver nuestros nuevos servicios de IA aquí: https://ziontechgroup.com\n"
                            f"También ofrecemos herramientas y servicios gratuitos en el sitio.\n\n"
                            f"Si cuadra, conversemos: https://calendly.com/kleber-ziontechgroup\n\n"
                            f"Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
                        )
                    elif lang == 'pt':
                        draft = (
                            f"{name},\n\n"
                            f"Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.\n\n"
                            f"Você pode ver nossos novos serviços de IA aqui: https://ziontechgroup.com\n"
                            f"Também temos ferramentas e serviços gratuitos no site.\n\n"
                            f"Se fizer sentido, vamos conversar: https://calendly.com/kleber-ziontechgroup\n\n"
                            f"Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
                        )
                    else:
                        draft = (
                            f"{name},\n\n"
                            f"Thank you for the opportunity to work together on the previous project. I see strong potential for new mutually valuable work between our teams.\n\n"
                            f"You can explore our new AI services here: https://ziontechgroup.com\n"
                            f"We also offer free services and tools on the site.\n\n"
                            f"If it makes sense, let's talk: https://calendly.com/kleber-ziontechgroup\n\n"
                            f"Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
                        )
                    hot_drafts.append({
                        'lead_id': mid,
                        'thread_id': thread_id,
                        'message_id': mid,
                        'from': contact,
                        'name': name,
                        'company': company,
                        'subject': subject,
                        'lang': lang,
                        'draft': draft.replace('Kleber Garcia Alcatrão','Kleber Garcia Alcatrão').strip(),
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
                report['errors'].append({'pending_queue': repr(e)})
        except Exception as e:
            report['errors'].append({'hot_followup_drafts': repr(e)})
    except Exception as e:
        report['errors'].append({'global': repr(e)})

    try:
        dedup = load_json_safe(DEDUP_FILE, {})
        report['dedup_entries'] = len(dedup) if isinstance(dedup, dict) else 0
        if LEDGER_FILE.exists():
            report['ledger_entries'] = sum(1 for _ in LEDGER_FILE.open('r', encoding='utf-8'))
    except Exception as e:
        report['errors'].append({'local_state': repr(e)})

    try:
        llm_blocker = None
        if not (os.getenv('ZION_LLM_API_ENDPOINT') or os.getenv('LLM_API_ENDPOINT')):
            llm_blocker = 'missing_endpoint'
        elif not (os.getenv('ZION_LLM_API_KEY') or os.getenv('LLM_API_KEY')):
            llm_blocker = 'missing_key'
        elif not (os.getenv('ZION_LLM_MODEL') or os.getenv('LLM_MODEL')):
            llm_blocker = 'missing_model'
        dry_run_file = BASE_DIR / 'outreach_monitor' / 'processed' / 'dry_run_report.jsonl'
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
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
