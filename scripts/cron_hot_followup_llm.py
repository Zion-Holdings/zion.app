#!/usr/bin/env python3
"""Hot follow-up email checker and drafter."""

import sys
import json
from pathlib import Path

# Add commands directory to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent / 'commands'))

from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message

PROJECT_ROOT = Path(__file__).resolve().parent.parent / 'zion-techgroup'
LEDGER_PATH = PROJECT_ROOT / 'outreach_monitor/processed/hot_followup_reply_ledger.jsonl'
DRAFT_PATH = PROJECT_ROOT / 'outreach_monitor/processed/next_hot_followup_llm_draft.json'

# Load ledger into memory for dedup
existing = {}
if LEDGER_PATH.exists():
    with open(LEDGER_PATH, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            entry = json.loads(line)
            thread_id = entry.get('thread_id')
            to_addr = (entry.get('to') or '').strip().lower()
            dedup_key = entry.get('dedup_key')
            status = entry.get('status', '')
            # Mark as already handled if sent/drafted/skipped_already_replied
            if status in ('sent', 'drafted', 'skipped_already_replied'):
                if thread_id and thread_id not in existing:
                    existing[thread_id] = entry
                if to_addr and to_addr not in existing:
                    existing[to_addr] = entry
                if dedup_key and dedup_key not in existing:
                    existing[dedup_key] = entry

print(f"Loaded {len(existing)} existing ledger entries")

# Search for !!!hot-follow-up emails across all folders
print("Searching for !!!hot-follow-up emails...")
messages = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
print(f"Found {len(messages)} message references")

threads_scanned = 0
duplicates_skipped = 0
drafts_created = 0
errors = []
drafts = []

# Group by thread_id to avoid duplicates
seen_threads = {}

def detect_language(subject, body):
    """Detect if email is in Portuguese, English, or Spanish."""
    text = (subject + ' ' + body).lower()
    pt_indicators = ['olá', 'oi', 'prezado', 'prezada', 'obrigado', 'obrigada', 'orçamento', 'envio', 'favor', 'atenciosamente']
    es_indicators = ['hola', 'estimado', 'estimada', 'gracias', 'gracias', 'saludos', 'cordiales']
    if any(ind in text for ind in pt_indicators):
        return 'pt'
    if any(ind in text for ind in es_indicators):
        return 'es'
    return 'en'

def get_sender_email(msg):
    """Extract sender email from message headers."""
    headers = msg.get('payload', {}).get('headers', [])
    from_header = next((h['value'] for h in headers if h['name'] == 'From'), '')
    # Extract email from "Name <email@example.com>" or just "email@example.com"
    if '<' in from_header and '>' in from_header:
        return from_header.split('<')[1].split('>')[0].strip().lower()
    return from_header.strip().lower()

def get_subject(msg):
    """Extract subject from message headers."""
    headers = msg.get('payload', {}).get('headers', [])
    return next((h['value'] for h in headers if h['name'] == 'Subject'), 'No Subject')

def draft_reply_email(subject, body, sender_email, language='en'):
    """Draft a professional CEO-level reply in the same language as the conversation."""
    
    # Get latest message body excerpt to understand context
    body_excerpt = body[:300].replace('\n', ' ') if body else ''
    
    if language == 'pt':
        reply = f"""Obrigado pela oportunidade de trabalharmos juntos no projeto passado — foi um prazer colaborar com vocês.

Para continuarmos avançando, gostaria de propor duas ideias que podem ser mutuamente benéficas:
1. Uma parceria onde expandimos essa colaboração para novos projetos ou mercados que combinem nossos pontos fortes.
2. Um experimento rápido/joint venture num nicho específico para validar crescimento conjunto com baixo risco.

Gostaria de conversar sobre essas possibilidades? Vamos agendar uma call:
👉 https://calendly.com/kleber-ziontechgroup

Conheça também nossos serviços e ferramentas gratuitas em:
🌐 https://ziontechgroup.com

Atenciosamente,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    elif language == 'es':
        reply = f"""Gracias por la oportunidad de colaborar juntos en el proyecto anterior — fue un placer trabajar con ustedes.

Para seguir avanzando, me gustaría proponer dos ideas que pueden ser mutuamente beneficiosas:
1. Una asociación para expandir esta colaboración a nuevos proyectos o mercados que combinen nuestras fortalezas.
2. Un experimento rápido/emprendimiento conjunto en un nicho específico para validar crecimiento compartido con bajo riesgo.

¿Le gustaría conversar sobre estas posibilidades? Agendemos una llamada:
👉 https://calendly.com/kleber-ziontechgroup

Conozca también nuestros servicios y herramientas gratuitas en:
🌐 https://ziontechgroup.com

Saludos cordiales,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    else:  # English
        reply = f"""Thank you for the opportunity to work together on the past project — it was a pleasure collaborating with your team.

To keep building on that momentum, I'd like to propose two ideas that could be mutually beneficial:
1. A partnership expanding this collaboration into new projects or markets that match our respective strengths.
2. A quick experiment/joint venture in a specific niche to validate shared growth with limited risk.

I'd love to discuss these possibilities. Let's set up a call:
👉 https://calendly.com/kleber-ziontechgroup

You can also explore our services and free tools at:
🌐 https://ziontechgroup.com

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
+1 302 464 0950"""
    
    return reply

# Process each message
for msg_ref in messages:
    msg_id = msg_ref.get('id')
    if not msg_id:
        continue
    
    # Get thread_id to group messages
    try:
        msg = gmail_get(msg_id)
        thread_id = msg.get('threadId', msg_id)
    except Exception as e:
        errors.append(f"Failed to get message {msg_id}: {str(e)}")
        continue
    
    threads_scanned += 1
    
    # Check if thread was already handled
    if thread_id in existing:
        duplicates_skipped += 1
        print(f"  [SKIP] Thread {thread_id} already handled (duplicate)")
        continue
    
    # Check sender
    sender = get_sender_email(msg)
    if sender in existing:
        duplicates_skipped += 1
        print(f"  [SKIP] Sender {sender} already handled (duplicate)")
        continue
    
    # Check if system/bot sender
    if 'noreply' in sender or 'github.com' in sender or 'codespaces' in sender:
        print(f"  [SKIP] System/bot sender: {sender}")
        continue
    
    # Get full message content
    body = extract_body_from_gmail_message(msg)
    subject = get_subject(msg)
    
    # Detect language
    language = detect_language(subject, body)
    print(f"  [PROCESS] Thread {thread_id} from {sender}, lang={language}")
    
    # Draft reply
    try:
        reply_body = draft_reply_email(subject, body, sender, language)
        
        # Create draft entry
        draft_entry = {
            "thread_id": thread_id,
            "message_id": msg_id,
            "to": sender,
            "subject": subject,
            "reply_body": reply_body,
            "language": language,
            "status": "drafted",
            "source": "cron_hot_followup_llm",
            "timestamp": json.dumps({"$date": "2026-07-15T00:00:00Z"})
        }
        
        # Append to draft file
        existing_drafts = []
        if DRAFT_PATH.exists():
            with open(DRAFT_PATH, 'r') as f:
                try:
                    data = json.load(f)
                    if isinstance(data, dict):
                        existing_drafts = data.get('leads', [])
                except:
                    existing_drafts = []
        
        existing_drafts.append(draft_entry)
        
        with open(DRAFT_PATH, 'w') as f:
            json.dump({"leads": existing_drafts}, f, indent=2, ensure_ascii=False)
        
        # Append to ledger
        ledger_entry = {
            "to": sender,
            "subject": f"Re: {subject}" if not subject.startswith('Re:') else subject,
            "thread_id": thread_id,
            "message_id": msg_id,
            "avoid_duplicate": True,
            "dedup_key": f"hotfollowup-{thread_id}",
            "status": "drafted",
            "source": "cron_hot_followup_llm"
        }
        
        with open(LEDGER_PATH, 'a') as f:
            f.write(json.dumps(ledger_entry, ensure_ascii=False) + '\n')
        
        # Update local dedup
        existing[thread_id] = ledger_entry
        existing[sender] = ledger_entry
        
        drafts_created += 1
        drafts.append(draft_entry)
        print(f"  [OK] Draft created for {sender}")
        
    except Exception as e:
        errors.append(f"Failed to draft for {thread_id}: {str(e)}")
        print(f"  [ERROR] {e}")

# Summary
summary = {
    "threads_scanned": threads_scanned,
    "duplicates_skipped": duplicates_skipped,
    "drafts_created": drafts_created,
    "errors": errors,
    "llm_provider": "stepfun/step-3.7-flash:free",
    "drafts": drafts
}

print("\n=== SUMMARY ===")
print(json.dumps(summary, indent=2, ensure_ascii=False))
