import sys, base64, json, time, os, re
from pathlib import Path
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

sys.path.insert(0, r'C:\Users\Zion\AppData\Local\hermes\skills\productivity\google-workspace\scripts')
from google_api import build_service

BASE_DIR = Path('/c/Users/Zion/tmp/zion-clone-test2')
DEDUP_DIR = BASE_DIR / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
SENT_LEDGER = DEDUP_DIR / 'sent_ledger.jsonl'
HOT_FOLLOWUP_REPLY_LEDGER = DEDUP_DIR / 'hot_followup_reply_ledger.jsonl'
PENDING_QUEUE_FILE = DEDUP_DIR / 'pending_ceo_drafts.jsonl'
REPORT_FILE = DEDUP_DIR / 'gmail_sent_audit_report.jsonl'
HOT_FOLLOWUP_LABEL_ID = 'Label_946'


def append_jsonl(path, obj):
    entry = dict(obj)
    entry.setdefault('ts', int(time.time()))
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def load_jsonl(path):
    if not path.exists():
        return []
    out = []
    for line in path.read_text(encoding='utf-8', errors='ignore').splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            out.append(json.loads(line))
        except Exception:
            pass
    return out


def detect_language(text):
    pt_words = ['obrigado','oportunidade','projeto','junto','serviços','ferramentas','call','abraço','oi','nossos','site','reunião']
    es_words = ['gracias','oportunidad','proyecto','junto','servicios','herramientas','llamada','saludos','nuestro','sitio','reunión']
    lower = text.lower()
    if any(w in lower for w in pt_words):
        return 'pt'
    if any(w in lower for w in es_words):
        return 'es'
    return 'en'


def build_ceo_draft(name, company, subject, lang, thread_text=''):
    lang = lang or 'en'
    subject = subject or 'Following up on our last project'
    if lang == 'pt':
        return f"""{name},

Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Vejo boas oportunidades para criarmos valor mútuo agora.

Você pode ver nossos novos serviços de IA aqui: https://ziontechgroup.com
Também temos ferramentas e serviços gratuitos no site.

Se fizer sentido, vamos conversar: https://calendly.com/kleber-ziontechgroup

Um abraço,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com"""
    if lang == 'es':
        return f"""{name},

Gracias por la oportunidad de haber trabajado juntos en el proyecto anterior. Veo buenas oportunidades para crear valor mutuo ahora.

Puedes ver nuestros nuevos servicios de IA aquí: https://ziontechgroup.com
También ofrecemos herramientas y servicios gratuitos en el sitio.

Si cuadra, conversemos: https://calendly.com/kleber-ziontechgroup

Saludos cordiales,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com"""
    return f"""{name},

Thank you for the opportunity to work together on the previous project. I see strong potential for new mutually valuable work between our teams.

You can explore our new AI services here: https://ziontechgroup.com
We also offer free services and tools on the site.

If it makes sense, let’s talk: https://calendly.com/kleber-ziontechgroup

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
https://ziontechgroup.com"""


def main():
    service = build_service('gmail', 'v1')
    report = {
        'event': 'gmail_sent_and_hot_followup_audit',
        'recent_sent_count': 0,
        'hot_followup_count': 0,
        'duplicate_recent_contacts': [],
        'pending_drafts_count': 0,
        'errors': [],
    }

    # Recent sent audit
    try:
        sent = service.users().messages().list(userId='me', q='in:sent', maxResults=20).execute()
        sent_items = sent.get('messages', [])
        report['recent_sent_count'] = len(sent_items)
        contacts = []
        for m in sent_items:
            try:
                meta = service.users().messages().get(userId='me', id=m['id'], format='metadata', metadataHeaders=['To','Subject','Date']).execute()
                hdrs = {x['name']: x['value'] for x in meta.get('payload', {}).get('headers', [])}
                to_hdr = hdrs.get('To', '')
                contacts.append({'id': meta['id'], 'to': to_hdr, 'subject': hdrs.get('Subject'), 'date': hdrs.get('Date')})
            except Exception:
                pass
        # duplicate within 24h by normalized contact
        from collections import defaultdict
        by_contact = defaultdict(list)
        for entry in contacts:
            to = (entry.get('to') or '').lower()
            m = re.search(r'<([^>]+)>', to)
            contact = m.group(1) if m else to.strip()
            if contact:
                by_contact[contact].append(entry)
        dup_contacts = []
        for contact, items in by_contact.items():
            if len(items) > 1:
                dup_contacts.append({'contact': contact, 'count': len(items)})
        report['duplicate_recent_contacts'] = dup_contacts[:20]
    except Exception as e:
        report['errors'].append({'sent_audit': repr(e)})

    # Hot follow-up label scan
    try:
        hot = service.users().messages().list(userId='me', labelIds=[HOT_FOLLOWUP_LABEL_ID], maxResults=20).execute()
        hot_items = hot.get('messages', [])
        report['hot_followup_count'] = len(hot_items)
        seen_ids = set()
        replied_threads = {x.get('thread_id') for x in load_jsonl(HOT_FOLLOWUP_REPLY_LEDGER) if x.get('thread_id')}
        drafts = []
        seen_keys = set()
        for m in hot_items:
            if m.get('id') in seen_ids:
                continue
            seen_ids.add(m['id'])
            try:
                full = service.users().messages().get(userId='me', id=m['id'], format='full').execute()
            except Exception:
                continue
            headers = {x['name']: x['value'] for x in full.get('payload', {}).get('headers', [])}
            thread_id = full.get('threadId') or m['id']
            if thread_id in replied_threads:
                continue

            text = ''
            payload = full.get('payload', {})
            data = payload.get('body', {}).get('data')
            if data:
                try:
                    text = base64.urlsafe_b64decode(data).decode('utf-8', 'ignore')
                except Exception:
                    text = ''
            if not text:
                for part in payload.get('parts', []) or []:
                    if part.get('mimeType') == 'text/plain' and part.get('body', {}).get('data'):
                        try:
                            text = base64.urlsafe_b64decode(part['body']['data']).decode('utf-8', 'ignore')
                            if text.strip():
                                break
                        except Exception:
                            text = ''
            text = text or ' '
            lang = detect_language(text)

            from_hdr = headers.get('From', '')
            m2 = re.search(r'<([^>]+)>', from_hdr)
            contact = m2.group(1).lower() if m2 else from_hdr.strip().lower()
            if not contact or '@' not in contact:
                continue
            dedup_key = re.sub(r'[^a-z0-9]', '', contact)
            if dedup_key in seen_keys:
                continue
            seen_keys.add(dedup_key)

            # alive thread check
            alive = False
            try:
                service.users().threads().get(userId='me', id=thread_id).execute()
                alive = True
            except Exception:
                alive = False
            if not alive:
                continue

            name = contact.split('@')[0].replace('.', ' ').title()
            company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
            subject = headers.get('Subject') or 'Following up on our last project'
            draft = build_ceo_draft(name, company, subject, lang, text)
            drafts.append({
                'lead_id': m['id'],
                'thread_id': thread_id,
                'message_id': m['id'],
                'from': contact,
                'name': name,
                'company': company,
                'subject': subject,
                'lang': lang,
                'draft': draft,
                'status': 'ready_to_send',
                'dedup_key': dedup_key,
            })
        report['pending_drafts_count'] = len(drafts)
        report['pending_drafts'] = drafts[:10]

        # Merge with existing queue
        existing = load_jsonl(PENDING_QUEUE_FILE)
        combined = existing + drafts
        final = []
        seen_keys = set()
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

    append_jsonl(REPORT_FILE, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
