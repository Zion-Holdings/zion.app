#!/usr/bin/env python3
"""Send interest drafts from the queue with rate limit handling."""
import json
import sys
import base64
import time
import urllib.request
import urllib.error
from pathlib import Path

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gog_headers

QUEUE_PATH = Path('/Users/klebergarciaalcatrao/lead-crm/outreach_monitor/processed/interest_draft_queue.jsonl')
LEDGER_PATH = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/sent_ledger.jsonl')

def send_email(to_addr, subject, body):
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
    data = json.dumps({'raw': encoded}).encode()
    
    try:
        req = urllib.request.Request(
            url,
            data=data,
            headers={**gog_headers(), 'Content-Type': 'application/json'},
            method='POST'
        )
        result = json.loads(urllib.request.urlopen(req, timeout=30).read())
        return {'success': True, 'message_id': result.get('id')}
    except urllib.error.HTTPError as e:
        if e.code == 429:
            return {'success': False, 'error': 'RATE_LIMITED', 'wait': 60}
        return {'success': False, 'error': f"HTTP {e.code}: {e.reason}"}
    except Exception as e:
        return {'success': False, 'error': str(e)}

def main():
    print("=" * 60)
    print("📤 Sending Interest Drafts from Queue")
    print("=" * 60)
    
    if not QUEUE_PATH.exists():
        print("❌ Queue file not found")
        return
    
    lines = QUEUE_PATH.read_text(encoding='utf-8').splitlines()
    drafts = [json.loads(line) for line in lines if line.strip()]
    
    print(f"\nFound {len(drafts)} drafts in queue")
    
    sent_count = 0
    errors = []
    sent_drafts = []
    
    for draft in drafts:
        to_addr = draft.get('from', '')
        subject = draft.get('subject', 'Following up on our collaboration')
        body = draft.get('draft', '')
        contact_name = draft.get('name', 'Friend')
        dedup_key = draft.get('dedup_key', '')
        
        print(f"\n[SEND] {to_addr} (contact: {contact_name})")
        
        result = send_email(to_addr, subject, body)
        
        if result.get('success'):
            print(f"  ✅ Sent: {result.get('message_id')}")
            sent_count += 1
            sent_drafts.append(draft)
            
            # Log to ledger
            entry = {
                'to': to_addr,
                'contact_name': contact_name,
                'subject': subject,
                'thread_id': draft.get('thread_id'),
                'message_id': result.get('message_id'),
                'status': 'sent',
                'ts': int(time.time()),
                'source': 'interest_draft_queue',
                'dedup_key': dedup_key
            }
            with open(LEDGER_PATH, 'a') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
        else:
            error_msg = result.get('error', 'Unknown error')
            print(f"  ❌ Failed: {error_msg}")
            errors.append(f"{to_addr}: {error_msg}")
            if result.get('wait'):
                print(f"  ⏳ Waiting {result.get('wait')}s for rate limit...")
                time.sleep(result.get('wait'))
    
    # Remove sent drafts from queue
    if sent_drafts:
        remaining = [d for d in drafts if d not in sent_drafts]
        QUEUE_PATH.write_text('\n'.join(json.dumps(d, ensure_ascii=False) for d in remaining))
        print(f"\nRemoved {len(sent_drafts)} sent drafts from queue")
    
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print(f"   Sent:    {sent_count}")
    print(f"   Errors:  {len(errors)}")
    print("=" * 60)

if __name__ == '__main__':
    main()