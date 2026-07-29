#!/usr/bin/env python3
"""Cron job: hot-follow-up reply check"""

import sys
import json
import base64
import re
from pathlib import Path
from datetime import datetime

# Add repo to path
repo = Path('/Users/klebergarciaalcatrao/zion-techgroup')
sys.path.insert(0, str(repo))

from commands.google_workspace import (
    gmail_search,
    gmail_get,
    gmail_thread_get,
    gmail_create_draft,
    load_gog_tokens,
)

PROCESSED = repo / 'outreach_monitor/processed'
LEDGER = PROCESSED / 'hot_followup_reply_ledger.jsonl'
DRAFT_FILE = PROCESSED / 'next_hot_followup_llm_draft.json'
LLM_PROVIDER = 'manual_cron'

# Load existing ledger
ledger_entries = []
if LEDGER.exists():
    with open(LEDGER, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                ledger_entries.append(json.loads(line))
            except json.JSONDecodeError:
                pass

# Build dedup set: thread_ids and to addresses with drafted/sent status
thread_ids_seen = {}
for entry in ledger_entries:
    tid = entry.get('thread_id') or ''
    if tid:
        thread_ids_seen[tid] = entry.get('status', '')
    
    to_addr = entry.get('to', '') or ''
    if to_addr and entry.get('status') in ('drafted', 'sent'):
        # normalize email
        m = re.search(r'[\w\.-]+@[\w\.-]+', to_addr)
        if m:
            thread_ids_seen[m.group(0).lower()] = entry.get('status', '')

threads_scanned = 0
duplicates_skipped = 0
drafts_created = 0
errors = []
new_drafts = []

# Search all folders
results = gmail_search('label:!!!hot-follow-up', limit=20, all_folders=True)
print(f"Found {len(results)} messages with label !!!hot-follow-up")

# Group by thread_id
threads = {}
for m in results:
    tid = m.get('threadId', m['id'])
    if tid not in threads:
        threads[tid] = []
    threads[tid].append(m)

for tid, msgs in threads.items():
    threads_scanned += 1
    # Check dedup
    existing_status = thread_ids_seen.get(tid)
    if existing_status:
        print(f"  Thread {tid}: already {existing_status}, skipping")
        duplicates_skipped += 1
        continue
    
    # Get the latest message in thread (first result is already sorted newest first)
    latest_msg_id = msgs[0]['id']
    # Also fetch the message to get headers
    try:
        msg = gmail_get(latest_msg_id)
    except Exception as e:
        errors.append(f"Failed to get message {latest_msg_id}: {e}")
        continue
    
    # Extract headers
    headers = {}
    payload = msg.get('payload', {})
    for h in payload.get('headers', []):
        headers[h['name'].lower()] = h['value']
    
    subject = headers.get('subject', 'No Subject')
    to_addr = headers.get('from', '') or headers.get('to', '')
    # Often 'from' is the sender, we want 'to' field or we reply to from
    # For reply, we send to the sender
    sender = headers.get('from', '')
    # Extract email
    sender_match = re.search(r'[\w\.-]+@[\w\.-]+', sender)
    reply_to = sender_match.group(0) if sender_match else sender
    
    # Check if this contact was already drafted
    contact_key_match = re.search(r'[\w\.-]+@[\w\.-]+', to_addr or sender)
    contact_key = contact_key_match.group(0).lower() if contact_key_match else (to_addr or sender).lower()
    
    def _email_match(entry):
        to_val = entry.get('to', '') or ''
        m = re.search(r'[\w\.-]+@[\w\.-]+', to_val)
        if not m:
            return False
        return m.group(0).lower() == contact_key
    
    contact_dedup = any(
        (entry.get('status') in ('drafted', 'sent')) and _email_match(entry)
        for entry in ledger_entries
    )
    
    if contact_dedup:
        print(f"  Contact {contact_key} in thread {tid}: already contacted, skipping")
        duplicates_skipped += 1
        continue
    
    # Detect language from body/snippet
    body_text = (msg.get('snippet', '') or '') + ' ' + latest_msg_id
    body_full = ''
    # Try extract plain text from payload
    def extract_plain(part):
        if part.get('mimeType') == 'text/plain' and 'data' in part.get('body', {}):
            return base64.urlsafe_b64decode(part['body']['data'] + '===').decode('utf-8', errors='replace')
        for p in part.get('parts', []):
            r = extract_plain(p)
            if r:
                return r
        return ''
    body_text = extract_plain(payload) or msg.get('snippet', '')
    
    # Language detection heuristics
    lang = 'en'
    pt_words = ['obrigado', 'olá', 'prezado', 'atenciosamente', 'proposta', 'orçamento', 'projeto', 'colaboração', 'trabalhar', 'juntos']
    es_words = ['gracias', 'hola', 'estimado', 'oportunidad', 'colaboración', 'trabajar', 'juntos', 'presupuesto']
    b = body_text.lower()
    if sum(1 for w in pt_words if w in b) > sum(1 for w in es_words if w in b) and any(w in b for w in pt_words):
        lang = 'pt'
    elif any(w in b for w in es_words):
        lang = 'es'
    
    print(f"  Thread {tid} ({subject}): lang={lang}, to={reply_to}")
    
    # Build reply
    if lang == 'pt':
        body = (
            "Olá,\n\n"
            "Obrigado pela oportunidade de trabalharmos juntos em um projeto anterior. "
            "Foi ótimo construir essa parceria e ver resultados concretos.\n\n"
            "Para esta próxima fase, gostaria de propor duas ideias rápidas e mutuamente benéficas:\n"
            "1. Uma parceria de indicação cruzada para expandir a base de clientes sem custos extras.\n"
            "2. Um piloto de automação compartilhada para reduzir a carga operacional das duas equipes.\n\n"
            "Se fizer sentido, vamos conversar por 15 minutos: https://calendly.com/kleber-ziontechgroup\n\n"
            "Temos serviços/ferramentas gratuitos em https://ziontechgroup.com que podem acelerar os seus resultados.\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    elif lang == 'es':
        body = (
            "Hola,\n\n"
            "Gracias por la oportunidad de trabajar juntos en un proyecto anterior. "
            "Fue genial construir esta asociación y ver resultados concretos.\n\n"
            "Para esta próxima fase, me gustaría proponer dos ideas rápidas y mutuamente beneficiosas:\n"
            "1. Una asociación de derivación cruzada para ampliar la base de clientes sin costos extra.\n"
            "2. Un piloto de automatización compartida para reducir la carga operativa de ambos equipos.\n\n"
            "Si tiene sentido, sincronicemos por 15 minutos: https://calendly.com/kleber-ziontechgroup\n\n"
            "Tenemos servicios/herramientas gratuitas en https://ziontechgroup.com que pueden acelerar sus resultados.\n\n"
            "Atentamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    else:
        body = (
            "Hi,\n\n"
            "Thank you for the opportunity to work together on a past project. "
            "It was great building that partnership and seeing tangible results.\n\n"
            "For this next phase, I'd like to propose two quick, mutually beneficial ideas:\n"
            "1. A cross-referral partnership to grow both client bases without extra cost.\n"
            "2. A shared automation pilot to cut operational load for both teams.\n\n"
            "If this makes sense, let's sync for 15 minutes: https://calendly.com/kleber-ziontechgroup\n\n"
            "We also have free services/tools at https://ziontechgroup.com that can speed up your results.\n\n"
            "Best,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    
    # Create draft in Gmail
    try:
        draft_id = gmail_create_draft(
            thread_id=tid,
            subject=subject,
            body=body,
            to_addr=reply_to,
        )
        print(f"  -> Draft created: {draft_id}")
        drafts_created += 1
        
        new_drafts.append({
            "to": reply_to,
            "subject": subject,
            "thread_id": tid,
            "message_id": latest_msg_id,
            "language": lang,
            "body": body,
            "status": "drafted",
            "draft_id": draft_id,
        })
        
        # Append to ledger
        with open(LEDGER, 'a') as lf:
            ledger_entries.append({
                "to": reply_to,
                "subject": subject,
                "thread_id": tid,
                "message_id": latest_msg_id,
                "avoid_duplicate": True,
                "dedup_key": f"cron-hot-followup-{tid}",
                "status": "drafted",
                "ts": int(datetime.now().timestamp()),
                "source": "cron_hot_followup_llm",
            })
    except Exception as e:
        errors.append(f"Failed to create draft for {tid}: {e}")
        print(f"  -> ERROR: {e}")

# Write draft file
if new_drafts:
    with open(DRAFT_FILE, 'w') as df:
        json.dump({"leads": new_drafts}, df, indent=2)
else:
    # Keep existing file but update
    with open(DRAFT_FILE, 'w') as df:
        json.dump({"leads": []}, df, indent=2)

summary = {
    "threads_scanned": threads_scanned,
    "duplicates_skipped": duplicates_skipped,
    "drafts_created": drafts_created,
    "errors": errors,
    "llm_provider": LLM_PROVIDER,
    "timestamp": datetime.now().isoformat(),
}
print("\n=== SUMMARY ===")
print(json.dumps(summary, indent=2))
