#!/usr/bin/env python3
"""Windows-compatible hot-follow-up outreach scan + optional draft reply."""
import sys, os, json, re, base64, urllib.request, urllib.parse, datetime
from pathlib import Path

# Resolve repo paths correctly
REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / 'commands'))

from google_workspace import gmail_search, gmail_get, gmail_thread_get, gog_headers

OUT_DIR = REPO / 'outreach_monitor' / 'processed'
OUT_DIR.mkdir(parents=True, exist_ok=True)
LEDGER_PATH = OUT_DIR / 'hot_followup_reply_ledger.jsonl'
SENT_THREADS_PATH = OUT_DIR / 'sent_threads.json'
DRAFT_PATH = OUT_DIR / 'next_hot_followup_llm_draft.json'
SUPPRESSED_THREADS = {
    '18729d9ac733fec6', '17ae8d06ff494766', '17ae8bef12ef37bc', '17ace3cb5ba33436',
    '17acc1a44f61dffd', '17ac9d589f758ba2', '17ac8d7ea8b6d03d', '17ac3fea5d58bf65',
    '17ac3fb13c1eb360', '17ac3a9ef17a4130', '17ac3a6b65985dda', '17ac39bb1144ccdc',
    '1795733950be3f61', '19f3e95653f3845c'
}
HARD_BOUNCES = {
    'leads@servi.com', 'contacts@servi.com', 'business@servi.com',
    'leads@servi.ai', 'contacts@servi.ai', 'business@servi.ai',
    'leads@manag.io', 'leads@airbnb.com'
}
NOISE_PREFIXES = [
    'noreply@', 'no-reply@', 'mailer-daemon@', 'postmaster@',
    'notifications@github.com', 'dependabot@', 'github-actions[bot]@',
    'newsletter@', 'marketing@', 'hello@', 'teamcalendly@',
    'support@', 'help@', 'info@', 'service@', 'contact@',
    'changelog@', 'groups-noreply@', 'express@airbnb.com', 'news.kilocode.ai'
]
CALENDLY = 'https://calendly.com/kleber-ziontechgroup'
MEET = 'https://meet.google.com/ouu-khao-kuy'
SITE = 'https://ziontechgroup.com'

def load_ledger():
    entries = []
    if LEDGER_PATH.exists():
        for line in LEDGER_PATH.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                entries.append(json.loads(line))
            except Exception:
                pass
    return entries

def load_sent_threads():
    if SENT_THREADS_PATH.exists():
        return json.loads(SENT_THREADS_PATH.read_text(encoding='utf-8'))
    return []

def save_sent_threads(entries):
    SENT_THREADS_PATH.write_text(json.dumps(entries, indent=2, ensure_ascii=False), encoding='utf-8')

def save_ledger_entry(entry):
    with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def extract_plain(part):
    if part.get('mimeType') == 'text/plain' and 'data' in part.get('body', {}):
        return base64.urlsafe_b64decode(part['body']['data'] + '===').decode('utf-8', errors='replace')
    for p in part.get('parts', []):
        r = extract_plain(p)
        if r:
            return r
    return ''

def is_noise(email):
    el = email.lower()
    for d in HARD_BOUNCES:
        if d in el:
            return True
    for p in NOISE_PREFIXES:
        if el.startswith(p):
            return True
    if 'ziontechgroup.com' in el:
        return True
    return False

def detect_language(text):
    body_l = (text or '').lower()
    pt = ['olá', 'ola', 'prezado', 'prezada', 'atenciosamente', 'obrigado', 'obrigada', 'cumprimentos']
    es = ['hola', 'estimado', 'estimada', 'saludos', 'gracias']
    for k in pt:
        if k in body_l:
            return 'portuguese'
    for k in es:
        if k in body_l:
            return 'spanish'
    return 'english'

def build_reply(sender_name, subject, body_text, lang):
    if lang == 'portuguese':
        return (
            f"Subject: Re: {subject}\n\n"
            "Obrigado por continuarmos esta parceria — valorizo muito o trabalho que fizemos juntos.\n\n"
            "Há duas ideias práticas que podem beneficiar ambos agora:\n\n"
            "1) Podemos acelerar um novo fluxo de automação no seu site ou operações, reduzindo trabalho repetitivo.\n\n"
            "2) Posso compartilhar nosso roadmap mais recente (https://ziontechgroup.com) para explorarmos sinergias concretas.\n\n"
            "Se fizer sentido, vamos marcar 20 min: Calendly — https://calendly.com/kleber-ziontechgroup\n"
            "Ou Google Meet direto — https://meet.google.com/ouu-khao-kuy\n\n"
            "Abraço,\nKleber\nZion Tech Group"
        )
    elif lang == 'spanish':
        return (
            f"Subject: Re: {subject}\n\n"
            "Gracias por continuar esta colaboración — valoro mucho el trabajo que hemos hecho juntos.\n\n"
            "Hay dos ideas concretas que nos pueden beneficiar ahora:\n\n"
            "1) Podemos acelerar un nuevo flujo de automatización en tu sitio u operaciones, reduciendo el trabajo repetitivo.\n\n"
            "2) Compartirte nuestro roadmap más reciente (https://ziontechgroup.com) para explorar sinergias concretas.\n\n"
            "Si encaja, agendemos 20 min: Calendly — https://calendly.com/kleber-ziontechgroup\n"
            "O Google Meet directo — https://meet.google.com/ouu-khao-kuy\n\n"
            "Saludos,\nKleber\nZion Tech Group"
        )
    else:
        return (
            f"Subject: Re: {subject}\n\n"
            "Thank you for continuing this collaboration — I really value the work we've done together.\n\n"
            "Two concrete ideas that can help both of us right now:\n\n"
            "1) We can accelerate a new automation flow on your site or operations, cutting repetitive work.\n\n"
            "2) I can share our latest roadmap (https://ziontechgroup.com) to explore concrete synergies.\n\n"
            "If this makes sense, let's book 20 min: Calendly — https://calendly.com/kleber-ziontechgroup\n"
            "Or direct Google Meet — https://meet.google.com/ouu-khao-kuy\n\n"
            "Cheers,\nKleber\nZion Tech Group"
        )

def main():
    ledger = load_ledger()
    sent_threads = load_sent_threads()
    known_thread_ids = {e.get('thread_id') for e in sent_threads if e.get('thread_id')}
    known_emails = set()
    for e in sent_threads:
        to_val = e.get('to', '') or ''
        m = re.search(r'[\w\.-]+@[\w\.-]+', to_val)
        if m:
            known_emails.add(m.group(0).lower())

    queries = [
        '!!!hot-follow-up label:INBOX',
        'subject:"!!!hot-follow-up"',
        'label:"!!!hot-follow-up"',
    ]

    results = []
    seen_msg = set()
    for q in queries:
        try:
            msgs = gmail_search(q, limit=50, all_folders=True)
            for m in msgs:
                mid = m['id']
                if mid not in seen_msg:
                    seen_msg.add(mid)
                    results.append(m)
        except Exception as e:
            print(f"Query failed: {q} => {e}")

    print(f"Total raw results: {len(results)}")
    if not results:
        print("No hot-follow-up messages found.")
        return

    # Group by thread
    threads = {}
    for m in results:
        tid = m.get('threadId', m['id'])
        threads.setdefault(tid, []).append(m)

    print(f"Unique threads: {len(threads)}")
    sent_count = 0
    skipped = 0
    errors_acc = []

    for tid, msgs in sorted(threads.items(), key=lambda x: x[0]):
        if tid in SUPPRESSED_THREADS:
            print(f"Thread {tid}: suppressed, skip")
            skipped += 1
            continue
        if tid in known_thread_ids:
            print(f"Thread {tid}: already sent_threads.json, skip")
            skipped += 1
            continue

        latest_id = msgs[0]['id']
        try:
            msg = gmail_get(latest_id)
        except Exception as e:
            errors_acc.append(f"gmail_get failed {latest_id}: {e}")
            continue

        payload = msg.get('payload', {})
        headers = {h['name'].lower(): h['value'] for h in payload.get('headers', [])}
        sender = headers.get('from', '')
        to_addr = headers.get('to', '') or headers.get('delivered-to', '')
        subject = headers.get('subject', '(no subject)')
        body_text = extract_plain(payload) or msg.get('snippet', '')

        sender_match = re.search(r'[\w\.-]+@[\w\.-]+', sender)
        reply_to = sender_match.group(0) if sender_match else sender

        if is_noise(reply_to):
            print(f"Thread {tid}: noise sender {reply_to}, skip")
            skipped += 1
            continue

        if reply_to.lower() in known_emails:
            print(f"Thread {tid}: contact {reply_to} already in sent_threads, skip")
            skipped += 1
            continue

        # Check ledger for drafted/sent status for this contact
        contact_skips = [
            e for e in ledger
            if e.get('status') in ('drafted', 'sent')
            and re.search(r'[\w\.-]+@[\w\.-]+', e.get('to', '') or '')
            and re.search(r'[\w\.-]+@[\w\.-]+', e.get('to', '')).group(0).lower() == reply_to.lower()
        ]
        if contact_skips:
            print(f"Thread {tid}: contact {reply_to} already drafted/sent in ledger, skip")
            skipped += 1
            continue

        lang = detect_language(subject + ' ' + body_text)
        reply = build_reply(sender, subject, body_text, lang)

        draft_info = {
            'thread_id': tid,
            'message_id': latest_id,
            'to': reply_to,
            'subject': subject,
            'language': lang,
            'reply_preview': reply,
            'timestamp': datetime.datetime.now(datetime.timezone.utc).isoformat()
        }

        with open(DRAFT_PATH, 'w', encoding='utf-8') as f:
            json.dump(draft_info, f, indent=2, ensure_ascii=False)
        print(f"Draft saved for thread {tid} to {reply_to} (lang={lang})")

        # Save ledger entry
        ledger_entry = {
            'thread_id': tid,
            'to': reply_to,
            'subject': subject,
            'status': 'drafted',
            'created_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'calendly': CALENDLY,
            'meet': MEET,
        }
        save_ledger_entry(ledger_entry)

        # Now send the actual email (live send - confirmed behavior)
        try:
            thread_msgs = gmail_thread_get(tid)
            thread_headers = {h['name'].lower(): h['value'] for h in thread_msgs[-1].get('payload', {}).get('headers', [])}
            ref_hdr = thread_headers.get('references', msg.get('id', ''))
            in_reply_to = msg.get('id', thread_msgs[-1].get('id', ''))
            sender_name_match = re.match(r'^(.*?)\s*<', sender)
            from_header = f"Kleber <kleber@ziontechgroup.com>"

            reply_lines = reply.split('\n')
            raw_body = '\n'.join(reply_lines[2:])  # skip Subject line

            send_url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
            send_payload = {
                'raw': base64.urlsafe_b64encode(
                    f"From: {from_header}\nTo: {reply_to}\nSubject: {subject}\nIn-Reply-To: {in_reply_to}\nReferences: {ref_hdr}\nContent-Type: text/plain; charset=utf-8\n\n{raw_body}".encode('utf-8')
                ).decode('utf-8'),
                'threadId': tid,
            }
            req = urllib.request.Request(
                send_url,
                data=json.dumps(send_payload).encode('utf-8'),
                headers={**gog_headers(), 'Content-Type': 'application/json'},
                method='POST'
            )
            send_resp = json.loads(urllib.request.urlopen(req).read())
            sent_msg_id = send_resp.get('id', '')
            sent_thread_id = send_resp.get('threadId', tid)

            # Update ledger entry
            ledger_entry = {
                'thread_id': tid,
                'message_id': latest_id,
                'to': reply_to,
                'subject': subject,
                'provider': 'gmail',
                'sent_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                'status': 'sent',
                'message_id_sent': sent_msg_id,
                'meet': MEET,
                'calendly': CALENDLY,
            }
            save_ledger_entry(ledger_entry)

            # Update sent_threads.json dedup
            sent_threads.append({
                'thread_id': tid,
                'message_id': sent_msg_id,
                'to': reply_to,
                'subject': subject,
                'provider': 'gmail',
                'sent_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                'status': 'sent',
            })
            save_sent_threads(sent_threads)

            print(f"LIVE SEND: Reply sent to {reply_to} (thread={tid}, msg={sent_msg_id})")
            sent_count += 1
        except Exception as e:
            errors_acc.append(f"Live send failed for {tid}: {e}")
            print(f"Live send failed for {tid}: {e}")

    print(f"\nSummary: scanned={len(threads)} threads, skipped={skipped}, sent={sent_count}, errors={len(errors_acc)}")
    for e in errors_acc:
        print(f"  ERROR: {e}")

if __name__ == '__main__':
    main()
