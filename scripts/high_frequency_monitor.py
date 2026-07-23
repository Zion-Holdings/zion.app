#!/usr/bin/env python3
"""
High-Frequency Gmail Monitor for !!!hot-follow-up label
Monitors ALL Gmail folders at high frequency (every 2-5 minutes)
Queries LLMs for tailored responses
Monitors for continuous improvement
"""

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Dict, Any, Optional
import time
import argparse

# Add scripts directory to path
sys.path.insert(0, str(Path(__file__).parent))

from gmail.gmail_client import GmailClient
from llm.llm_client import LLMClient, LLMConfig
from utils.ledger import ReplyLedger

# Configuration
HOT_FOLLOWUP_LABEL = '!!!hot-follow-up'
LEDGER_PATH = Path(__file__).parent.parent / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
WEBSITE_URL = 'https://ziontechgroup.com'
CALENDLY_URL = 'https://calendly.com/kleber-ziontechgroup'
MODEL_NAME = 'nvidia/nemotron-3-ultra-550b-a55b:free'

class HighFrequencyMonitor:
    """High-frequency Gmail monitor for !!!hot-follow-up label."""
    
    def __init__(self, interval_minutes: int = 2, dry_run: bool = False):
        self.interval_minutes = interval_minutes
        self.dry_run = dry_run
        self.gmail = GmailClient()
        self.llm = LLMClient(LLMConfig(
            api_key=os.environ.get('OPENROUTER_API_KEY', ''),
            model=MODEL_NAME
        ))
        self.ledger = ReplyLedger(LEDGER_PATH)
        
    def run_once(self) -> Dict[str, Any]:
        """Run a single monitoring cycle."""
        result = {
            'timestamp': datetime.now().isoformat(),
            'emails_found': 0,
            'emails_processed': 0,
            'emails_skipped': 0,
            'emails_replied': 0,
            'errors': []
        }
        
        try:
            # Search for emails in ALL folders with !!!hot-follow-up label
            emails = self.gmail.search_all_folders(f'label:{HOT_FOLLOWUP_LABEL}', limit=100)
            result['emails_found'] = len(emails)
            
            for email_data in emails:
                email_id = email_data.get('id')
                
                # Check if already replied (avoid duplicates)
                if self.ledger.has_replied(email_id):
                    result['emails_skipped'] += 1
                    continue
                
                # Generate LLM-powered reply
                try:
                    reply = self._generate_ceo_reply(email_data)
                    
                    if reply and not self.dry_run:
                        # Send reply
                        success = self.gmail.send_reply(
                            email_id, 
                            reply, 
                            email_data.get('thread_id', '')
                        )
                        
                        if success:
                            # Record in ledger
                            self.ledger.record_reply(email_id, email_data.get('thread_id', ''), reply)
                            result['emails_replied'] += 1
                        else:
                            result['errors'].append(f"Failed to send reply to {email_id}")
                    
                    result['emails_processed'] += 1
                    
                except Exception as e:
                    result['errors'].append(f"Error processing {email_id}: {str(e)}")
        
        except Exception as e:
            result['errors'].append(f"Monitoring error: {str(e)}")
        
        return result
    
    def _generate_ceo_reply(self, email_data: Dict[str, Any]) -> str:
        """Generate a professional CEO-level reply using LLM."""
        
        # Build context for LLM
        context = f"""
Previous relationship: {email_data.get('body', '')[:300]}
Client name: {email_data.get('from_name', 'Client')}
Client email: {email_data.get('from_email', '')}

Instructions:
1. Thank the client for the opportunity to have worked with them in the past
2. Be friendly but professional - not formal, but business-appropriate
3. Think creatively about new mutually beneficial business opportunities
4. Try to advance the negotiation as much as possible
5. Offer to schedule a meeting using Calendly: {CALENDLY_URL}
6. Send our website link: {WEBSITE_URL} and ask them to visit
7. Mention that we have many free services and tools on our website
8. Use the same language/style as the conversation
9. Avoid duplicates - make each reply unique and tailored
"""
        
        # Generate reply using LLM
        reply = self.llm.generate_completion(
            model=MODEL_NAME,
            prompt=f"""
You are Kleber Garcia Alcatrao, CEO of Zion Tech Group. Write a professional, friendly, and personalized reply to the following email.

Email:
Subject: {email_data.get('subject', 'No subject')}
From: {email_data.get('from_name', 'Unknown')} ({email_data.get('from_email', 'Unknown')})
Body: {email_data.get('body', 'No body')[:500]}

Context: {context}

Generate a complete email reply that achieves all these goals.
""",
            max_tokens=800,
            temperature=0.7
        )
        
        return reply
    
    def run_continuous(self) -> None:
        """Run continuous monitoring at specified interval."""
        print(f"Starting high-frequency monitor (every {self.interval_minutes} minutes)...")
        
        while True:
            try:
                result = self.run_once()
                
                # Log result
                print(f"[{result['timestamp']}] "
                      f"Found: {result['emails_found']}, "
                      f"Processed: {result['emails_processed']}, "
                      f"Replied: {result['emails_replied']}, "
                      f"Skipped: {result['emails_skipped']}")
                
                if result['errors']:
                    print(f"  Errors: {result['errors']}")
                
                # Wait for next interval
                time.sleep(self.interval_minutes * 60)
            
            except KeyboardInterrupt:
                print("\nMonitoring stopped by user")
                break
            except Exception as e:
                print(f"Monitoring error: {e}")
                time.sleep(60)  # Wait 1 minute before retrying

def main():
    parser = argparse.ArgumentParser(description='High-frequency Gmail monitor for !!!hot-follow-up label')
    parser.add_argument('--interval', type=int, default=2, help='Monitoring interval in minutes')
    parser.add_argument('--dry-run', action='store_true', help='Run without sending emails')
    parser.add_argument('--once', action='store_true', help='Run once and exit')
    
    args = parser.parse_args()
    
    monitor = HighFrequencyMonitor(interval_minutes=args.interval, dry_run=args.dry_run)
    
    if args.once:
        result = monitor.run_once()
        print(json.dumps(result, indent=2))
    else:
        monitor.run_continuous()

if __name__ == '__main__':
    main()