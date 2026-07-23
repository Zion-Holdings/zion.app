#!/usr/bin/env python3
"""
Enhanced Hot Follow-up LLM Responder
- Searches ALL Gmail folders for !!!hot-follow-up label
- Uses LLM-powered responses via OpenRouter
- Provides tailored, professional CEO replies
- Avoids duplicate responses using ledger
- Includes website link and Calendly scheduling option
"""

import json
import os
import sys
from datetime import datetime
from typing import List, Dict, Any, Optional
from pathlib import Path

# Add scripts directory to path
sys.path.insert(0, str(Path(__file__).parent))

from gmail.gmail_client import GmailClient
from llm.llm_client import LLMClient
from utils.ledger import ReplyLedger

# Configuration
HOT_FOLLOWUP_LABEL = '!!!hot-follow-up'
LEDGER_PATH = Path(__file__).parent.parent / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
WEBSITE_URL = 'https://ziontechgroup.com'
CALENDLY_URL = 'https://calendly.com/kleber-ziontechgroup'
MODEL_NAME = 'nvidia/nemotron-3-ultra-550b-a55b:free'  # OpenRouter model

def load_ledger() -> ReplyLedger:
    """Load the reply ledger to avoid duplicates."""
    return ReplyLedger(LEDGER_PATH)

def search_hot_followup_emails(gmail: GmailClient) -> List[Dict[str, Any]]:
    """Search for emails in ALL folders with !!!hot-follow-up label."""
    query = f'label:{HOT_FOLLOWUP_LABEL}'
    
    # Search in all folders (INBOX, Sent, and all labels)
    results = gmail.search_messages(query, include_all_folders=True)
    
    return results

def generate_ceo_reply(email_data: Dict[str, Any], llm: LLMClient) -> Optional[str]:
    """Generate a professional CEO-level reply using LLM."""
    
    # Extract email context
    subject = email_data.get('subject', '')
    body = email_data.get('body', '')
    from_name = email_data.get('from_name', 'Client')
    from_email = email_data.get('from_email', '')
    
    # Build the LLM prompt
    prompt = f"""
You are Kleber Garcia Alcatrao, CEO of Zion Tech Group. Write a professional, friendly, and personalized reply to the following email.

Email Context:
- Subject: {subject}
- From: {from_name} ({from_email})
- Previous conversation: {body[:500]}

Instructions:
1. Thank the client for the opportunity to have worked with them in the past
2. Be friendly but professional - not formal, but business-appropriate
3. Think creatively about new mutually beneficial business opportunities for both companies
4. Try to advance the negotiation as much as possible
5. Offer to schedule a meeting using Calendly: {CALENDLY_URL}
6. Send our website link: {WEBSITE_URL} and ask them to visit to learn about new AI services
7. Mention that we have many free services and tools on our website
8. Use the same language/style as the conversation
9. Avoid duplicates - make each reply unique and tailored

Generate a complete email reply that achieves all these goals.
"""
    
    try:
        response = llm.generate_completion(
            model=MODEL_NAME,
            prompt=prompt,
            max_tokens=800,
            temperature=0.7
        )
        return response
    except Exception as e:
        print(f"Error generating LLM reply: {e}")
        return None

def send_reply(gmail: GmailClient, email_id: str, reply: str, thread_id: str) -> bool:
    """Send a reply to the email."""
    try:
        gmail.send_reply(email_id, reply, thread_id)
        return True
    except Exception as e:
        print(f"Error sending reply: {e}")
        return False

def process_hot_followup_emails():
    """Main function to process !!!hot-follow-up emails."""
    
    print(f"[{datetime.now().isoformat()}] Starting hot follow-up processing...")
    
    # Initialize clients
    gmail = GmailClient()
    llm = LLMClient()
    ledger = load_ledger()
    
    # Search for emails
    emails = search_hot_followup_emails(gmail)
    print(f"Found {len(emails)} emails with !!!hot-follow-up label")
    
    # Process each email
    for email_data in emails:
        email_id = email_data.get('id')
        thread_id = email_data.get('thread_id')
        
        # Check if already replied (avoid duplicates)
        if ledger.has_replied(email_id):
            print(f"Skipping {email_id} - already replied")
            continue
        
        # Generate LLM-powered reply
        reply = generate_ceo_reply(email_data, llm)
        
        if reply:
            # Send reply
            success = send_reply(gmail, email_id, reply, thread_id)
            
            if success:
                # Record in ledger
                ledger.record_reply(email_id, thread_id, reply)
                print(f"Successfully replied to {email_id}")
            else:
                print(f"Failed to send reply to {email_id}")
        else:
            print(f"Failed to generate reply for {email_id}")
    
    print(f"[{datetime.now().isoformat()}] Hot follow-up processing complete")

if __name__ == '__main__':
    process_hot_followup_emails()