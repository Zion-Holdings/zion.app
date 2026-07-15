#!/usr/bin/env python3
import sys
sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message
import json
from datetime import datetime, timezone

ledger_path = '/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/hot_followup_reply_ledger.jsonl'
draft_path = '/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/next_hot_followup_llm_draft.json'

# Load existing ledger
ledger = set()
ledger_entries = []
try:
    with open(ledger_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            entry = json.loads(line)
            ledger_entries.append(entry)
            ledger.add(entry.get('thread_id', ''))
            ledger.add(entry.get('message_id', ''))
            if entry.get('to'):
                ledger.add(entry.get('to').lower())
except Exception as e:
    print(f"Ledger load error: {e}")

try:
    results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
except Exception as e:
    print(json.dumps({"error": str(e), "threads_scanned": 0, "duplicates_skipped": 0, "drafts_created": 0, "errors": [str(e)], "llm_provider": "none"}))
    sys.exit(0)

threads_scanned = 0
duplicates_skipped = 0
drafts_created = 0
errors = []

for item in results:
    tid = item.get('id')
    try:
        msg = gmail_get(tid)
        threads_scanned += 1
    except Exception as e:
        errors.append(f"gmail_get error for {tid}: {e}")
        continue

    headers = {}
    for h in msg.get('payload', {}).get('headers', []):
        headers[h['name']] = h['value']

    thread_id = msg.get('threadId', tid)
    subject = headers.get('Subject', '')
    from_addr = headers.get('From', '')
    body_text = extract_body_from_gmail_message(msg)

    skip = False
    if thread_id in ledger:
        skip = True
        dup_key = 'thread_id'
    elif tid in ledger:
        skip = True
        dup_key = 'message_id'
    elif from_addr and from_addr.lower() in ledger:
        skip = True
        dup_key = 'contact'

    if skip:
        duplicates_skipped += 1
        continue

    # Determine language
    lang = 'en'
    low = (subject + ' ' + body_text).lower()
    if any(c in low for c in ['á', 'é', 'í', 'ó', 'ú', 'ã', 'õ', 'ç']):
        lang = 'pt'
    elif any(c in low for c in ['ñ', 'á', 'é', 'í', 'ó', 'ú']):
        lang = 'es'

    if lang == 'pt':
        body = (
            "Olá,\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos no projeto anterior. Foi um prazer entregar valor para a sua equipe.\n\n"
            "Gostaria de retomar a parceria com duas ideias práticas:\n"
            "1) Automação inteligente de rotinas e integração com ferramentas que vocês já usam.\n"
            "2) Consultoria expressa em IA para acelerar resultados nos próximos 90 dias.\n\n"
            "Além disso, temos ferramentas e serviços gratuitos em https://ziontechgroup.com que podem ajudar na avaliação inicial.\n\n"
            "Se fizer sentido, vamos conversar em: https://calendly.com/kleber-ziontechgroup\n\n"
            "Abraço,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    elif lang == 'es':
        body = (
            "Hola,\n\n"
            "Gracias por la oportunidad de trabajar juntos en el proyecto anterior. Fue un placer generar valor para tu equipo.\n\n"
            "Me gustaría retomar la colaboración con dos ideas concretas:\n"
            "1) Automatización inteligente de rutinas e integración con herramientas que ya usan.\n"
            "2) Consultoría express en IA para acelerar resultados en los próximos 90 días.\n\n"
            "También contamos con herramientas y servicios gratuitos en https://ziontechgroup.com para una evaluación inicial.\n\n"
            "Si tiene sentido, conversemos en: https://calendly.com/kleber-ziontechgroup\n\n"
            "Saludos,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    else:
        body = (
            "Hello,\n\n"
            "Thank you for the opportunity to work together on the earlier project. It was a pleasure delivering value for your team.\n\n"
            "I would like to restart the partnership with two concrete ideas:\n"
            "1) Intelligent automation routines integrated with the tools you already use.\n"
            "2) Express AI consulting to accelerate results over the next 90 days.\n\n"
            "We also offer free services and tools at https://ziontechgroup.com to help with an initial assessment.\n\n"
            "If this makes sense, let us talk at: https://calendly.com/kleber-ziontechgroup\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )

    draft = {
        "to": from_addr,
        "subject": subject,
        "body": body,
        "thread_id": thread_id,
        "message_id": tid,
        "source": "hot_followup_cron",
        "ts": int(datetime.now(timezone.utc).timestamp()),
        "language": lang
    }

    try:
        with open(draft_path, 'r', encoding='utf-8') as f:
            existing = json.load(f)
    except Exception:
        existing = []

    existing.append(draft)
    with open(draft_path, 'w', encoding='utf-8') as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

    entry = {
        "to": from_addr,
        "subject": subject,
        "thread_id": thread_id,
        "message_id": tid,
        "avoid_duplicate": True,
        "dedup_key": f"hot-followup-{thread_id}",
        "status": "drafted",
        "ts": int(datetime.now(timezone.utc).timestamp()),
        "source": "hot_followup_cron"
    }
    with open(ledger_path, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

    drafts_created += 1
    ledger.add(thread_id)
    ledger.add(tid)
    if from_addr:
        ledger.add(from_addr.lower())

summary = {
    "threads_scanned": threads_scanned,
    "duplicates_skipped": duplicates_skipped,
    "drafts_created": drafts_created,
    "errors": errors,
    "llm_provider": "none"
}
print(json.dumps(summary, ensure_ascii=False))
