#!/usr/bin/env python3
"""Cron job: scan !!!hot-follow-up label, deduplicate, draft CEO replies."""
from __future__ import annotations

import sys
import json
import time
import re
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/Users/klebergarciaalcatrao/zion-techgroup')
sys.path.insert(0, str(REPO / 'commands'))
from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message

BASE = REPO / 'outreach_monitor' / 'processed'
LEDGER_PATH = BASE / 'hot_followup_reply_ledger.jsonl'
DRAFT_PATH = BASE / 'next_hot_followup_llm_draft.json'

# Load existing ledger
ledger_entries = []
if LEDGER_PATH.exists():
    with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    ledger_entries.append(json.loads(line))
                except Exception:
                    pass

thread_ids_seen = set()
contacts_seen = set()
for entry in ledger_entries:
    tid = entry.get('thread_id') or entry.get('message_id')
    if tid:
        thread_ids_seen.add(tid)
    to_addr = entry.get('to', '').lower()
    if to_addr:
        contacts_seen.add(to_addr)

print(f"Loaded {len(ledger_entries)} ledger entries", flush=True)

results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
print(f"Found {len(results)} messages with !!!hot-follow-up label", flush=True)

threads_scanned = len(results)
duplicates_skipped = 0
drafts_created = 0
errors = []
new_drafts = []


def extract_email(from_header: str) -> str:
    from_header = from_header.strip()
    if '<' in from_header and '>' in from_header:
        return from_header.split('<')[-1].split('>')[0].strip().lower()
    return from_header.lower()


def detect_language(text: str) -> str:
    text_lower = text.lower()
    pt_words = ['obrigado', 'olá', 'ola', 'projeto', 'colaboração', 'colaboracao',
                'reunião', 'reuniao', 'atenciosamente', 'abraço', 'abraco',
                'prezado', 'prezada', 'cumprimentos']
    es_words = ['gracias', 'hola', 'proyecto', 'colaboración', 'colaboracion',
                'reunión', 'reunion', 'saludos', 'estimado', 'estimada']
    if any(w in text_lower for w in pt_words):
        return 'pt'
    if any(w in text_lower for w in es_words):
        return 'es'
    return 'en'


def build_draft(to_email: str, subject: str, body_text: str, lang: str) -> dict:
    # Derive first name for personalization
    if '@' in to_email:
        name_part = to_email.split('@')[0]
        name = name_part.replace('.', ' ').replace('_', ' ').title()
    else:
        name = to_email

    if lang == 'pt':
        body = (
            f"Olá, {name},\n\n"
            "Obrigado pela oportunidade de colaborarmos em projetos anteriores. "
            "Foi um prazer construir essa parceria e ver resultados concretos juntos.\n\n"
            "Gostaria de explorar duas possibilidades para fortalecermos ainda mais essa relação:\n"
            "1. Uma parceria tecnológica para co-criar produtos digitais usando ferramentas gratuitas "
            "disponíveis em https://ziontechgroup.com, reduzindo custos e acelerando o time-to-market.\n"
            "2. Uma iniciativa conjunta de inovação que combine nossa expertise em IA e desenvolvimento "
            "com seu conhecimento de mercado para gerar novas receitas recorrentes.\n\n"
            "Acredito que podemos gerar valor mútuo rapidamente. Vamos agendar uma conversa? "
            "Escolha um horário aqui: https://calendly.com/kleber-ziontechgroup\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "https://ziontechgroup.com"
        )
    elif lang == 'es':
        body = (
            f"Hola, {name},\n\n"
            "Gracias por la oportunidad de colaborar en proyectos anteriores. "
            "Ha sido un placer construir esta alianza y ver resultados tangibles juntos.\n\n"
            "Me gustaría explorar dos posibilidades para fortalecer aún más esta relación:\n"
            "1. Una alianza tecnológica para co-crear productos digitales usando herramientas gratuitas "
            "disponibles en https://ziontechgroup.com, reduciendo costos y acelerando el time-to-market.\n"
            "2. Una iniciativa conjunta de innovación que combine nuestra experiencia en IA y desarrollo "
            "con su conocimiento del mercado para generar nuevos ingresos recurrentes.\n\n"
            "Creo que podemos generar valor mutuo rápidamente. ¿Agendamos una charla? "
            "Elige un horario aquí: https://calendly.com/kleber-ziontechgroup\n\n"
            "Saludos cordiales,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "https://ziontechgroup.com"
        )
    else:
        body = (
            f"Hi, {name},\n\n"
            "Thank you for the opportunity to work together on past projects. "
            "It has been a pleasure building that partnership and delivering real results together.\n\n"
            "I would like to explore two possibilities to strengthen that relationship further:\n"
            "1. A technology partnership to co-create digital products using free tools available at "
            "https://ziontechgroup.com, cutting costs and accelerating time-to-market.\n"
            "2. A joint innovation initiative combining our AI and development expertise with your "
            "market knowledge to build new recurring revenue streams.\n\n"
            "I believe we can create mutual value quickly. Shall we schedule a call? "
            "Pick a time here: https://calendly.com/kleber-ziontechgroup\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950\n"
            "https://ziontechgroup.com"
        )
    return {
        'to': to_email,
        'subject': subject,
        'thread_id': '',  # filled below
        'body': body,
        'language': lang,
        'drafted_at': datetime.now(timezone.utc).isoformat(),
        'llm_provider': 'rule_based',
    }


for msg_meta in results:
    mid = msg_meta.get('id')
    thread_id = msg_meta.get('threadId', mid)
    try:
        msg = gmail_get(mid)
    except Exception as e:
        errors.append(f"Failed to get message {mid}: {e}")
        continue

    headers = {h['name']: h['value'] for h in msg.get('payload', {}).get('headers', [])}
    subject = headers.get('Subject', '(no subject)')
    from_header = headers.get('From', '')
    sender_email = extract_email(from_header)
    body = extract_body_from_gmail_message(msg)

    # Check duplicate by thread_id or contact
    if thread_id in thread_ids_seen or sender_email in contacts_seen:
        duplicates_skipped += 1
        print(f"Duplicate skipped: thread={thread_id} from={sender_email}", flush=True)
        continue

    lang = detect_language(body + ' ' + subject)
    draft = build_draft(sender_email, subject, body, lang)
    draft['thread_id'] = thread_id
    draft['message_id'] = mid

    new_drafts.append(draft)
    thread_ids_seen.add(thread_id)
    contacts_seen.add(sender_email)
    drafts_created += 1
    print(f"Drafted reply for {sender_email} / thread={thread_id} lang={lang}", flush=True)

# Write draft file
DRAFT_PATH.parent.mkdir(parents=True, exist_ok=True)
with open(DRAFT_PATH, 'w', encoding='utf-8') as f:
    json.dump({"leads": new_drafts}, f, ensure_ascii=False, indent=2)

# Append ledger
with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
    for d in new_drafts:
        entry = {
            'to': d['to'],
            'subject': d['subject'],
            'thread_id': d.get('thread_id', ''),
            'message_id': d.get('message_id', ''),
            'status': 'drafted',
            'ts': int(time.time()),
            'source': 'cron_hot_followup_llm',
            'language': d.get('language', 'en'),
            'avoid_duplicate': True,
            'dedup_key': f"hotfollowup-{d.get('thread_id', d.get('message_id', ''))}",
        }
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

summary = {
    'threads_scanned': threads_scanned,
    'duplicates_skipped': duplicates_skipped,
    'drafts_created': drafts_created,
    'errors': errors,
    'llm_provider': 'rule_based (heuristic language detection)',
}
print(json.dumps(summary, ensure_ascii=False))
