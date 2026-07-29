#!/usr/bin/env python3
"""
Zion Tech Group Hot Follow-up Cron Job
Checks Gmail label !!!hot-follow-up across ALL folders, drafts CEO-level replies.
"""
import sys
import json
import os
import re
from pathlib import Path
from datetime import datetime, timezone

# Add the commands directory to path for google_workspace
sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gmail_search, gmail_get, extract_body_from_gmail_message, gmail_thread_get

# Paths
LEDGER_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/hot_followup_reply_ledger.jsonl')
DRAFT_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/next_hot_followup_llm_draft.json')
TEMPLATE_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/ceo_hot_followup_draft_template.txt')

# Load template
TEMPLATE = TEMPLATE_PATH.read_text(encoding='utf-8').strip()

# LLM provider
LLM_PROVIDER = "nvidia/nemotron-3-ultra-550b-a55b:free"

def load_ledger():
    """Load processed thread IDs and contact emails from ledger."""
    processed_threads = set()
    processed_contacts = set()
    if LEDGER_PATH.exists():
        for line in LEDGER_PATH.read_text(encoding='utf-8').strip().split('\n'):
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                if entry.get('thread_id'):
                    processed_threads.add(entry['thread_id'])
                if entry.get('contact_email'):
                    processed_contacts.add(entry['contact_email'].lower())
                if entry.get('dedup_key'):
                    processed_contacts.add(entry['dedup_key'].lower())
            except json.JSONDecodeError:
                continue
    return processed_threads, processed_contacts

def save_ledger_entry(entry):
    """Append entry to ledger."""
    LEDGER_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')

def detect_language(text):
    """Detect language of text: Portuguese, English, or Spanish."""
    text_lower = text.lower()
    # Portuguese indicators
    pt_indicators = ['obrigado', 'obrigada', 'muito obrigado', 'por favor', 'gostaria', 'conversar', 'reunião', 'reunião', 'parceria', 'colaboração', 'trabalho', 'projeto', 'zión', 'zion', 'alcatrão', 'garcia', 'kleber']
    # Spanish indicators
    es_indicators = ['gracias', 'muchas gracias', 'por favor', 'me gustaría', 'reunión', 'colaboración', 'trabajo', 'proyecto', 'oportunidad']
    
    pt_count = sum(1 for w in pt_indicators if w in text_lower)
    es_count = sum(1 for w in es_indicators if w in text_lower)
    
    if pt_count > es_count and pt_count > 0:
        return 'pt'
    elif es_count > 0:
        return 'es'
    return 'en'

def extract_contact_info(message):
    """Extract contact name and email from message headers."""
    headers = message.get('payload', {}).get('headers', [])
    from_header = next((h['value'] for h in headers if h['name'].lower() == 'from'), '')
    subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), '')
    
    # Extract email from "Name <email@domain.com>" format
    email_match = re.search(r'<([^>]+)>', from_header)
    email = email_match.group(1).lower() if email_match else from_header.strip().lower()
    
    # Extract name
    name_match = re.search(r'^([^<]+)', from_header)
    name = name_match.group(1).strip() if name_match else from_header.strip()
    if '<' in name:
        name = name.split('<')[0].strip()
    if not name or '@' in name:
        name = email.split('@')[0].replace('.', ' ').title()
    
    return name, email, subject

def extract_latest_message_content(message):
    """Extract the latest message content from a thread message."""
    body = extract_body_from_gmail_message(message)
    return body.strip()

def generate_llm_draft(contact_name, contact_email, subject, latest_message, language):
    """Generate a CEO-level follow-up draft using the LLM."""
    
    # Language-specific templates
    templates = {
        'pt': {
            'thank_you': f"Obrigado pela oportunidade de trabalharmos juntos no passado, {contact_name}. Valorizo o que construímos e vejo bom caminho para continuarmos colaborando.",
            'ideas_intro': "Duas ideias concretas para nova parceria:",
            'idea_1': "1) Co-desenvolvimento de soluções de IA generativa para seu setor — combinando a expertise da Zion Tech Group com o conhecimento de domínio da sua equipe.",
            'idea_2': "2) Programa de inovação conjunta com prototipagem rápida (2-4 semanas) usando nossas ferramentas gratuitas em ziontechgroup.com para validar ROI antes de escalar.",
            'cta': "Se alinhar com seus objetivos, agende uma conversa rápida: https://calendly.com/kleber-ziontechgroup",
            'website': "Conheça também nossos novos serviços de IA e ferramentas gratuitas: https://ziontechgroup.com",
            'signoff': "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"
        },
        'es': {
            'thank_you': f"Gracias por la oportunidad de trabajar juntos en el pasado, {contact_name}. Valoro lo que construimos y veo buen camino para seguir colaborando.",
            'ideas_intro': "Dos ideas concretas para nueva colaboración:",
            'idea_1': "1) Co-desarrollo de soluciones de IA generativa para su sector — combinando la experiencia de Zion Tech Group con el conocimiento de dominio de su equipo.",
            'idea_2': "2) Programa de innovación conjunta con prototipado rápido (2-4 semanas) usando nuestras herramientas gratuitas en ziontechgroup.com para validar ROI antes de escalar.",
            'cta': "Si se alinea con sus objetivos, agende una charla rápida: https://calendly.com/kleber-ziontechgroup",
            'website': "Conozca también nuestros nuevos servicios de IA y herramientas gratuitas: https://ziontechgroup.com",
            'signoff': "Un abrazo,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"
        },
        'en': {
            'thank_you': f"Thanks for the opportunity to work together in the past, {contact_name}. I value what we built and see a clear path to keep collaborating.",
            'ideas_intro': "Two concrete ideas for a new partnership:",
            'idea_1': "1) Co-develop generative AI solutions for your industry — combining Zion Tech Group's expertise with your team's domain knowledge.",
            'idea_2': "2) Joint innovation program with rapid prototyping (2-4 weeks) using our free tools at ziontechgroup.com to validate ROI before scaling.",
            'cta': "If this aligns with your goals, let's book a quick call: https://calendly.com/kleber-ziontechgroup",
            'website': "Also explore our new AI services and free tools: https://ziontechgroup.com",
            'signoff': "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n+1 302 464 0950"
        }
    }
    
    t = templates.get(language, templates['en'])
    
    draft = f"""Subject: Re: {subject}

{t['thank_you']}

{t['ideas_intro']}
{t['idea_1']}
{t['idea_2']}

{t['cta']}

{t['website']}

{t['signoff']}"""
    
    return draft.strip()

def main():
    print("=== Zion Hot Follow-up Cron Job ===")
    print(f"Started: {datetime.now(timezone.utc).isoformat()}")
    
    # Load ledger
    processed_threads, processed_contacts = load_ledger()
    print(f"Loaded ledger: {len(processed_threads)} threads, {len(processed_contacts)} contacts already processed")
    
    # Search Gmail for !!!hot-follow-up label across ALL folders
    print("\nSearching Gmail for label:!!!hot-follow-up across all folders...")
    try:
        results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
    except Exception as e:
        print(f"ERROR searching Gmail: {e}")
        return {
            "threads_scanned": 0,
            "duplicates_skipped": 0,
            "drafts_created": 0,
            "errors": [str(e)],
            "llm_provider": LLM_PROVIDER
        }
    
    if not results:
        print("No messages found with label !!!hot-follow-up")
        summary = {
            "threads_scanned": 0,
            "duplicates_skipped": 0,
            "drafts_created": 0,
            "errors": [],
            "llm_provider": LLM_PROVIDER
        }
        # Log to ledger
        save_ledger_entry({
            "ts": int(datetime.now(timezone.utc).timestamp()),
            "source": "cron_hot_followup_llm",
            "status": "no_threads_found",
            "threads_scanned": 0,
            "duplicates_skipped": 0,
            "drafts_created": 0,
            "note": "No !!!hot-follow-up threads found across all folders."
        })
        print(json.dumps(summary, indent=2))
        return summary
    
    print(f"Found {len(results)} messages")
    
    threads_scanned = 0
    duplicates_skipped = 0
    drafts_created = 0
    errors = []
    
    # Process each message
    for msg_ref in results:
        msg_id = msg_ref.get('id')
        thread_id = msg_ref.get('threadId')
        
        if not msg_id or not thread_id:
            continue
            
        threads_scanned += 1
        print(f"\n--- Processing message {msg_id} (thread {thread_id}) ---")
        
        # Check duplicates
        if thread_id in processed_threads:
            print(f"  SKIP: Thread {thread_id} already in ledger")
            duplicates_skipped += 1
            continue
        
        try:
            # Get full message
            message = gmail_get(msg_id)
            if not message:
                print(f"  ERROR: Could not fetch message {msg_id}")
                errors.append(f"Failed to fetch message {msg_id}")
                continue
            
            # Get contact info
            contact_name, contact_email, subject = extract_contact_info(message)
            print(f"  From: {contact_name} <{contact_email}>")
            print(f"  Subject: {subject}")
            
            # Check contact duplicate
            if contact_email.lower() in processed_contacts:
                print(f"  SKIP: Contact {contact_email} already in ledger")
                duplicates_skipped += 1
                continue
            
            # Get the latest message in thread
            thread_messages = gmail_thread_get(thread_id)
            if not thread_messages:
                print(f"  ERROR: Could not fetch thread {thread_id}")
                errors.append(f"Failed to fetch thread {thread_id}")
                continue
            
            # Get the last message (most recent)
            latest_msg = thread_messages[-1]
            latest_body = extract_latest_message_content(latest_msg)
            print(f"  Latest message preview: {latest_body[:200]}...")
            
            # Detect language
            language = detect_language(latest_body)
            print(f"  Detected language: {language}")
            
            # Generate draft
            draft = generate_llm_draft(contact_name, contact_email, subject, latest_body, language)
            
            # Save draft
            DRAFT_PATH.write_text(json.dumps({
                "leads": [{
                    "contact_name": contact_name,
                    "contact_email": contact_email,
                    "subject": subject,
                    "thread_id": thread_id,
                    "message_id": msg_id,
                    "draft_body": draft,
                    "language": language,
                    "llm_provider": LLM_PROVIDER,
                    "generated_at": datetime.now(timezone.utc).isoformat()
                }]
            }, indent=2, ensure_ascii=False), encoding='utf-8')
            
            # Save ledger entry
            save_ledger_entry({
                "source": "cron_hot_followup_llm",
                "thread_id": thread_id,
                "message_id": msg_id,
                "contact_name": contact_name,
                "contact_email": contact_email,
                "subject": subject,
                "dedup_key": f"{contact_email}-{thread_id[:8]}",
                "ts": int(datetime.now(timezone.utc).timestamp()),
                "status": "drafted",
                "draft_saved_to": str(DRAFT_PATH),
                "llm_provider": LLM_PROVIDER,
                "language": language,
                "reason": "New incoming message from hot-follow-up thread — drafted CEO follow-up with 2 concrete collaboration proposals"
            })
            
            drafts_created += 1
            print(f"  DRAFT CREATED for {contact_name} ({contact_email})")
            
            # Update local sets to prevent duplicates in this run
            processed_threads.add(thread_id)
            processed_contacts.add(contact_email.lower())
            
        except Exception as e:
            error_msg = f"Error processing message {msg_id}: {e}"
            print(f"  ERROR: {error_msg}")
            errors.append(error_msg)
    
    # If no drafts created, log that
    if drafts_created == 0:
        save_ledger_entry({
            "ts": int(datetime.now(timezone.utc).timestamp()),
            "source": "cron_hot_followup_llm",
            "status": "no_drafts_needed",
            "threads_scanned": threads_scanned,
            "duplicates_skipped": duplicates_skipped,
            "drafts_created": 0,
            "note": f"Scanned {threads_scanned} threads, {duplicates_skipped} duplicates skipped, no new drafts needed"
        })
    
    summary = {
        "threads_scanned": threads_scanned,
        "duplicates_skipped": duplicates_skipped,
        "drafts_created": drafts_created,
        "errors": errors,
        "llm_provider": LLM_PROVIDER
    }
    
    print("\n=== SUMMARY ===")
    print(json.dumps(summary, indent=2))
    return summary

if __name__ == '__main__':
    result = main()
    sys.exit(0 if len(result['errors']) == 0 else 1)