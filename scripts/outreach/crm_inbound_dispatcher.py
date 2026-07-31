#!/usr/bin/env python3
"""Autonomous Inbound Dispatch with Calendly Integration - CRM DIRECTIVE IMPLEMENTATION

This script:
1. Scans inbox for high-intent keywords
2. Generates personalized Calendly dispatches
3. Propagates ledgers for deduplication
"""

import sys
import json
import time
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO))

from commands.google_workspace import gog_headers, gmail_search, gmail_get

DEDUP_DIR = REPO / 'lead-crm' / 'outreach_monitor' / 'processed'
LEDGER_FILE = DEDUP_DIR / 'outreach_sent_history.jsonl'
HOT_LEDGER = DEDUP_DIR / 'hot_followup_reply_ledger.jsonl'

CALYNDLY_BASE = "https://calendly.com/kleber-ziontechgroup/consultation"
GOOGLE_MEET_BASE = "https://meet.google.com/ouu-khao-kuy"

HIGH_INTENT_KEYWORDS = [
    'proposal', 'pricing', 'demo', 'consultation', 'collaboration',
    'opportunity', 'opportunidade', 'proposta', 'orçamento',
    'partnership', 'parceria', 'integração'
]

NOISE_SENDERS = [
    'github.com', 'airbnb.com', 'uber.com', 'tiktok.com', 'calendly.com',
    'zendesk.com', 'freshdesk.com', 'helpscout.com', 'intercom.io',
    'bigcontent.io', 'notifications@github.com', 'dependabot',
    'newsletter', 'noreply', 'marketing@', 'mailer@'
]


def is_lead_hot_intent(from_addr: str, subject: str, snippet: str) -> bool:
    """Detect if message shows high-intent buying signals."""
    from_lower = from_addr.lower()
    subject_lower = subject.lower()
    snippet_lower = snippet.lower()
    
    # Check for noise senders
    if any(x in from_lower for x in ['@ziontechgroup.com', 'github.com', 'no-reply', 'newsletter']):
        return False
    
    # Check for high-intent keywords
    combined_text = f"{subject_lower} {snippet_lower}"
    return any(kw in combined_text for kw in HIGH_INTENT_KEYWORDS)


def generate_personalized_dispatch(contact: str, name: str, company: str) -> str:
    """Generate Calendly-integrated personalized response."""
    template = f"""Olá {name},

Vi seu interesse em colaboração e gostaria de alinhar detalhes. Você pode marcar uma conversa de 15 minutos pelo link: {CALYNDLY_BASE}

Também estou disponível para videochamada pelo Google Meet: {GOOGLE_MEET_BASE}

Nosso time oferece consultoria técnica e análise de ROI para projetos de TI, com foco em resultados mensuráveis.

Aguardo seu retorno.

Atenciosamente,
Kleber Garcia Alcatrao
CEO - Zion Tech Group
https://ziontechgroup.com
"""
    return template


def append_to_ledger(ledger_path: Path, entry: dict):
    """Append entry to JSONL ledger with deduplication."""
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Load existing for dedup
    seen = set()
    if ledger_path.exists():
        try:
            with open(ledger_path, 'r', encoding='utf-8') as f:
                for line in f:
                    if line.strip():
                        entry_obj = json.loads(line)
                        key = entry_obj.get('thread_id') or entry_obj.get('message_id') or entry_obj.get('from')
                        if key:
                            seen.add(str(key))
        except:
            pass
    
    # Dedup key
    dedup_key = str(entry.get('thread_id') or entry.get('message_id') or entry.get('from'))
    if dedup_key in seen:
        return
    
    # Append new entry
    entry['_ts'] = int(time.time())
    with open(ledger_path, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def main():
    """Execute CRM dispatch pass."""
    report = {
        'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
        'dispatch_status': 'started',
        'hot_leads_found': 0,
        'dispatches_sent': 0,
        'ledgers_updated': [],
        'errors': []
    }
    
    try:
        # Authenticate
        gog_headers()
        
        # Search for high-intent leads
        query = 'in:anywhere (' + ' OR '.join(HIGH_INTENT_KEYWORDS) + ') -from:("no-reply" OR "newsletter" OR "noreply")'
        hits = gmail_search(query, limit=20, all_folders=True)
        
        for hit in hits:
            from_addr = hit.get('from', '')
            subject = hit.get('subject', '')
            thread_id = hit.get('threadId')
            message_id = hit.get('id')
            
            if not thread_id:
                continue
            
            # Extract email
            match = re.search(r'<([^>]+)>', from_addr)
            contact = match.group(1).lower() if match else from_addr.strip().lower()
            
            if '@' not in contact or not is_lead_hot_intent(from_addr, subject, hit.get('snippet', '')):
                continue
            
            # Check recent sent (24h dedup)
            if LEDGER_FILE.exists():
                recent = False
                try:
                    with open(LEDGER_FILE, 'r', encoding='utf-8') as f:
                        for line in f:
                            if line.strip():
                                entry = json.loads(line)
                                if entry.get('to') == contact:
                                    ts = entry.get('ts', 0)
                                    if time.time() - ts < 86400:
                                        recent = True
                                        break
                except:
                    pass
                if recent:
                    continue
            
            # Generate dispatch
            name = contact.split('@')[0].replace('.', ' ').title()
            company = contact.split('@')[1].split('.')[0].title() if '@' in contact else 'Partner'
            
            dispatch = {
                'thread_id': thread_id,
                'message_id': message_id,
                'from': contact,
                'name': name,
                'company': company,
                'subject': f"Alinhamento sobre sua oportunidade de colaboração",
                'dispatch_body': generate_personalized_dispatch(contact, name, company),
                'calendly_link': CALYNDLY_BASE,
                'status': 'ready_for_dispatch',
                'created_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
            }
            
            # Append to hot ledger
            hot_entry = {
                'thread_id': thread_id,
                'message_id': message_id,
                'from': contact,
                'name': name,
                'company': company,
                'dispatch_generated': True,
                'calendly_link': CALYNDLY_BASE,
                'status': 'dispatch_ready'
            }
            
            append_to_ledger(HOT_LEDGER, hot_entry)
            append_to_ledger(LEDGER_FILE, {
                'to': contact,
                'thread_id': thread_id,
                'subject': dispatch['subject'],
                'ts': int(time.time())
            })
            
            report['hot_leads_found'] += 1
            report['dispatches_sent'] += 1
            report['ledgers_updated'].append(str(HOT_LEDGER))
        
        report['dispatch_status'] = 'completed'
        
    except Exception as e:
        report['errors'].append(str(e))
        report['dispatch_status'] = 'error'
    
    # Write report
    report_file = REPO / 'lead-crm' / 'outreach_monitor' / 'processed' / 'dispatch_report.json'
    report_file.parent.mkdir(parents=True, exist_ok=True)
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(json.dumps(report, indent=2, ensure_ascii=False))
    return report


if __name__ == '__main__':
    main()