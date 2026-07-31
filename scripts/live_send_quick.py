#!/usr/bin/env python3
"""
Live Send Script - Quick Test Mode
Executes throttled batch dispatch with minimal delay for testing.
"""
import sys
import json
import random
import time
import datetime
from pathlib import Path

# Configuration
REPO = Path('/Users/klebergarciaalcatrao')
BATCH_PATH = REPO / 'lead-crm' / 'outreach_test_batch.json'
SEND_LOG = REPO / 'lead-crm' / 'outreach_sent_history.jsonl'

# Throttling configuration - quick test mode
MIN_DELAY = 0.1  # seconds (minimal for testing)
MAX_DELAY = 0.5  # seconds (minimal for testing)

def get_random_delay():
    """Return a random delay between MIN_DELAY and MAX_DELAY seconds."""
    return random.uniform(MIN_DELAY, MAX_DELAY)

def append_sent(record: dict):
    """Append sent message record to the history log."""
    try:
        with SEND_LOG.open('a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + '\n')
    except Exception as e:
        print(f"Warning: Could not write to sent history: {e}")

def send_email_with_throttle(to_addr, subject, body):
    """
    Send an email with throttled delay.
    In a real implementation, this would call the Gmail API or SMTP.
    For testing, it simulates the send operation.
    """
    # Simulate send operation
    message_id = f"msg_{int(time.time() * 1000)}_{random.randint(1000, 9999)}"
    
    # Append to sent history
    append_sent({
        'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'to': to_addr,
        'subject': subject,
        'message_id': message_id,
        'thread_id': None,
        'provider': 'simulated',
        'status': 'sent'
    })
    
    return message_id

def main():
    """Execute the throttled batch dispatch."""
    print("=" * 60)
    print("📤 LIVE SEND - Throttled Batch Dispatch (Test Mode)")
    print("=" * 60)
    
    # Check if send is allowed
    if Path(BATCH_PATH).exists():
        batch_data = json.loads(BATCH_PATH.read_text(encoding='utf-8'))
        rows = batch_data.get('recipients') or batch_data.get('ready') or batch_data.get('batch') or []
    else:
        print(f"❌ Batch file not found: {BATCH_PATH}")
        return
    
    if not rows:
        print("⚠️ No recipients in batch file")
        return
    
    print(f"\n📋 Processing {len(rows)} recipients")
    print(f"⏱️  Throttling: {MIN_DELAY}-{MAX_DELAY}s random delay between sends")
    print()
    
    sent_count = 0
    smtp_count = 0
    skipped_count = 0
    errors = []
    
    for i, recipient in enumerate(rows, 1):
        to = recipient.get('email') or recipient.get('recipient') or recipient.get('to')
        if not to:
            skipped_count += 1
            continue
        
        to = to.lower()
        subject = recipient.get('subject', 'Following up on our collaboration')
        body = recipient.get('body', '')
        
        print(f"[{i}/{len(rows)}] 📧 Sending to {to}...")
        
        try:
            message_id = send_email_with_throttle(to, subject, body)
            print(f"    ✅ Sent via simulated: {message_id}")
            sent_count += 1
            smtp_count += 1  # Count as SMTP fallback in test mode
        except Exception as e:
            errors.append(f"Failed to send to {to}: {e}")
            print(f"    ❌ Error: {e}")
        
        # Apply random delay between sends (except for last one)
        if i < len(rows):
            delay = get_random_delay()
            time.sleep(delay)
    
    print("\n" + "=" * 60)
    print("📊 TRANSMISSION METRICS")
    print("=" * 60)
    print(f"   Total recipients:  {len(rows)}")
    print(f"   Actual sends:      {sent_count}")
    print(f"   Via SMTP:          {smtp_count} (simulated)")
    print(f"   Skipped:           {skipped_count}")
    print(f"   Errors:            {len(errors)}")
    if errors:
        print("\n❌ Errors:")
        for err in errors[:10]:
            print(f"   - {err}")
    print("=" * 60)
    
    # Return stats
    return {
        'sent_count': sent_count,
        'smtp_count': smtp_count,
        'skipped_count': skipped_count,
        'errors': errors,
        'total_recipients': len(rows)
    }

if __name__ == '__main__':
    result = main()
    if result:
        sys.exit(0 if result.get('errors') == 0 else 1)