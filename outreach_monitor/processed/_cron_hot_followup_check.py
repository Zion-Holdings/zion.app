#!/usr/bin/env python3
from __future__ import annotations
import sys, json, base64, re
from pathlib import Path
from datetime import datetime, timezone

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message

BASE = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed')
LEDGER = BASE / 'hot_followup_reply_ledger.jsonl'
DRAFT_FILE = BASE / 'next_hot_followup_llm_draft.json'
OUTWATCH_DRAFT = BASE / 'next_ceo_reply_hemmersbach.json'

def load_ledger():
    entries = []
    if not LEDGER.exists():
        return entries
    for line in LEDGER.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            entries.append(json.loads(line))
        except Exception:
            pass
    return entries

def is_duplicate(entry, thread_id, sender_email, subject):
    dedup_key = entry.get('dedup_key', '')
    to_addr = entry.get('to', '')
    entry_thread = entry.get('thread_id', '')
    entry_status = entry.get('status', '')
    if not entry_thread:
        return False
    if thread_id and entry_thread == thread_id:
        return True
    if sender_email and (sender_email.lower() == to_addr.lower() or sender_email.lower() in dedup_key.lower()):
        return True
    return False

def extract_latest_message_detail(msg):
    headers = {h['name'].lower(): h['value'] for h in msg.get('payload', {}).get('headers', [])}
    sender = headers.get('from', '')
    to_addr = headers.get('to', '')
    subject = headers.get('subject', '(no subject)')
    body = extract_body_from_gmail_message(msg)
    thread_id = msg.get('threadId', '')
    message_id = msg.get('id', '')
    return {
        'message_id': message_id,
        'thread_id': thread_id,
        'sender': sender,
        'to': to_addr,
        'subject': subject,
        'body': body,
    }

def draft_reply(msg_detail):
    sender = msg_detail['sender']
    to_email = sender.strip()
    subject = msg_detail['subject']
    thread_id = msg_detail['thread_id']
    body_lower = msg_detail.get('body', '').lower()
    subject_lower = subject.lower()

    # Detect language
    portuguese_keywords = ['olá', 'ola', 'prezado', 'prezada', 'atenciosamente', 'obrigado', 'obrigada', 'cumprimentos']
    spanish_keywords = ['hola', 'estimado', 'estimada', 'saludos', 'gracias']
    if any(k in body_lower or k in subject_lower for k in portuguese_keywords):
        language = 'portuguese'
    elif any(k in body_lower or k in subject_lower for k in spanish_keywords):
        language = 'spanish'
    else:
        language = 'english'

    if language == 'portuguese':
        reply_body = """Obrigado por continuarmos esta parceria — valorizo muito o trabalho que fizemos juntos.

Há duas ideias práticas que podem beneficiar ambos agora:
• Expansão conjunta do time de Dev\\Solutions com sourcing técnico dedicado para projetos novos.
• Integração de ferramentas/aplicações no ecossistema da Zion (https://ziontechgroup.com), incluindo serviços gratuitos que já colocamos à disposição.

Se fizer sentido, vamos marcar uma conversa rápida para alinhar próximos passos:
? https://calendly.com/kleber-ziontechgroup

Abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"""
    elif language == 'spanish':
        reply_body = """Gracias por seguir contando con nosotros — aprecio mucho el trabajo realizado en conjunto.

Tengo dos ideas prácticas que pueden beneficiarnos mutuamente:
• Expansión conjunta del equipo de Dev\\Solutions con sourcing técnico dedicado para proyectos nuevos.
• Integración de aplicaciones/software en el ecosistema Zion (https://ziontechgroup.com), incluyendo herramientas gratuitas disponibles.

Si te interesa, coordinemos una llamada breve para definir próximos pasos:
? https://calendly.com/kleber-ziontechgroup

Saludos,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"""
    else:
        reply_body = """Thanks for continuing this partnership — I really value the work we did together.

Two practical, mutually beneficial ideas I'd like to propose:
• Joint Dev\\Solutions team expansion with dedicated technical sourcing for new projects.
• Integration of apps/software into the Zion ecosystem (https://ziontechgroup.com), including free tools/services we have available.

If this resonates, let's schedule a quick call to align on next steps:
? https://calendly.com/kleber-ziontechgroup

Best regards,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"""

    return {
        'to': to_email,
        'subject': subject,
        'thread_id': thread_id,
        'body': reply_body,
        'language': language,
        'drafted_at': datetime.now(timezone.utc).isoformat(),
        'llm_provider': 'rule_based',
    }

def append_ledger(record):
    with LEDGER.open('a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')

def main():
    print("=== HOT FOLLOW-UP CHECK ===")
    ledger = load_ledger()
    print(f"Loaded {len(ledger)} ledger entries")

    print("\n=== STEP 1: SEARCH ===")
    results = gmail_search('label:!!!hot-follow-up', limit=20, all_folders=True)
    threads_scanned = 0
    duplicates_skipped = 0
    drafts_created = 0
    errors = []
    drafts = []

    print(json.dumps({"query": 'label:"!!!hot-follow-up"', "count": len(results), "results": results}, indent=2))

    seen_threads = set()
    for item in results:
        msg_id = item.get('id')
        if not msg_id:
            continue
        if msg_id in seen_threads:
            continue
        seen_threads.add(msg_id)

        try:
            threads_scanned += 1
            full = gmail_get(msg_id)
            info = extract_latest_message_detail(full)

            thread_id = info['thread_id']
            sender = info['sender']
            subject = info['subject']

            print(f"\n--- Thread {threads_scanned} ---")
            print(f"  thread_id: {thread_id}")
            print(f"  message_id: {msg_id}")
            print(f"  sender: {sender}")
            print(f"  subject: {subject}")

            is_dup = False
            for entry in ledger:
                if is_duplicate(entry, thread_id, sender, subject):
                    is_dup = True
                    break

            # Also avoid double-processing within this run
            if any(d.get('thread_id') == thread_id for d in drafts):
                is_dup = True

            if is_dup:
                duplicates_skipped += 1
                print(f"  => SKIPPED (duplicate)")
                continue

            draft = draft_reply(info)
            drafts.append(draft)
            drafts_created += 1

            # Save draft
            DRAFT_FILE.write_text(json.dumps(draft, ensure_ascii=False, indent=2), encoding='utf-8')

            # Ledger entry
            dedup_key = ''.join(c.lower() for c in sender)
            ledger_record = {
                'to': sender,
                'subject': re.sub(r'^re:\s*', '', subject, flags=re.IGNORECASE),
                'thread_id': thread_id,
                'message_id': msg_id,
                'status': 'drafted',
                'ts': int(datetime.now(timezone.utc).timestamp()),
                'source': 'cron_hot_followup_llm',
                'dedup_key': dedup_key,
            }
            append_ledger(ledger_record)
            print(f"  => DRAFTED")
        except Exception as e:
            err_msg = str(e)
            errors.append({'msg_id': msg_id, 'error': err_msg})
            print(f"  => ERROR: {err_msg}")

    summary = {
        'threads_scanned': threads_scanned,
        'duplicates_skipped': duplicates_skipped,
        'drafts_created': drafts_created,
        'errors': errors,
        'llm_provider': 'rule_based',
    }
    print("\n=== SUMMARY ===")
    print(json.dumps(summary, ensure_ascii=False, indent=2))

    # Write summary
    summary_path = BASE / 'hot_followup_cron_summary.json'
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')
    return summary

if __name__ == '__main__':
    main()
