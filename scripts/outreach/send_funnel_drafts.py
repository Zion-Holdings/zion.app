#!/usr/bin/env python3
"""Send drafted emails from funnel_drafts_queue.jsonl"""
import json
import sys
import time
import base64
import urllib.request
from pathlib import Path
from datetime import datetime, timezone

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gog_headers

QUEUE_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/funnel_drafts_queue.jsonl')
LEDGER_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/hot_followup_reply_ledger.jsonl')

def send_email(thread_id, to_addr, subject, body):
    """Send email via Gmail API."""
    raw_lines = [
        f"Subject: {subject}",
        f"To: {to_addr}",
        "",
        body,
    ]
    raw = "\r\n".join(raw_lines)
    encoded = base64.urlsafe_b64encode(raw.encode()).decode()
    
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    data = json.dumps({'raw': encoded, 'threadId': thread_id}).encode()
    req = urllib.request.Request(
        url,
        data=data,
        headers={**gog_headers(), 'Content-Type': 'application/json'},
        method='POST'
    )
    
    try:
        result = json.loads(urllib.request.urlopen(req, timeout=30).read())
        return {'success': True, 'message_id': result.get('id'), 'thread_id': thread_id}
    except Exception as e:
        return {'success': False, 'error': str(e)}

def load_ledger():
    entries = []
    if LEDGER_PATH.exists():
        with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        entries.append(json.loads(line))
                    except:
                        pass
    return entries

def main():
    print("=" * 60)
    print("📤 Sending Drafted Emails from Funnel Queue")
    print("=" * 60)
    
    # Load ledger to check for duplicates
    ledger = load_ledger()
    sent_thread_ids = set()
    for entry in ledger:
        if entry.get('status') == 'sent' and entry.get('thread_id'):
            sent_thread_ids.add(entry['thread_id'])
    
    print(f"\nLoaded {len(ledger)} ledger entries, {len(sent_thread_ids)} already sent")
    
    # Load drafts from queue
    if not QUEUE_PATH.exists():
        print("No queue file found")
        return
    
    drafts = []
    with open(QUEUE_PATH, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    draft = json.loads(line)
                    if draft.get('status') == 'ready_to_send':
                        drafts.append(draft)
                except:
                    pass
    
    if not drafts:
        print("No drafts ready to send")
        return
    
    print(f"Found {len(drafts)} drafts ready to send")
    
    sent_count = 0
    skipped_count = 0
    errors = []
    
    for draft in drafts:
        thread_id = draft.get('thread_id')
        to_addr = draft.get('to')
        subject = draft.get('subject', 'Following up on our collaboration')
        body = draft.get('body', '')
        contact_name = draft.get('contact_name', 'Friend')
        
        # Check for duplicates
        if thread_id in sent_thread_ids:
            print(f"  [SKIP] Thread {thread_id[:12]}... already sent")
            skipped_count += 1
            continue
        
        # Send the email
        print(f"  [SEND] {to_addr} (contact: {contact_name})")
        try:
            result = send_email(thread_id, to_addr, subject, body)
            if result.get('success'):
                print(f"    ✅ Sent: {result.get('message_id')}")
                sent_count += 1
                
                # Append to ledger
                entry = {
                    'to': to_addr,
                    'contact_name': contact_name,
                    'subject': subject,
                    'thread_id': thread_id,
                    'message_id': result.get('message_id'),
                    'status': 'sent',
                    'ts': int(datetime.now(timezone.utc).timestamp()),
                    'source': 'funnel_drafts_queue',
                    'dedup_key': draft.get('dedup_key', f'{to_addr}-{thread_id[-8:]}')
                }
                with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
                    f.write(json.dumps(entry, ensure_ascii=False) + '\n')
            else:
                errors.append(f"Failed to send to {to_addr}: {result}")
                print(f"    ❌ Failed: {result}")
        except Exception as e:
            errors.append(str(e))
            print(f"    ❌ Error: {e}")
        
        time.sleep(0.5)  # Rate limit
    
    print(f"\n{'=' * 60}")
    print("📊 SUMMARY")
    print(f"   Sent:    {sent_count}")
    print(f"   Skipped: {skipped_count}")
    print(f"   Errors:  {len(errors)}")
    print("=" * 60)

if __name__ == '__main__':
    main()