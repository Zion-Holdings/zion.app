#!/usr/bin/env python3
"""Send drafted emails - fast batch mode"""
import json
import sys
import base64
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime, timezone
import glob

sys.path.insert(0, '/Users/klebergarciaalcatrao/zion-techgroup/commands')
from google_workspace import gog_headers

DRAFTS_DIR = Path('/Users/klebergarciaalcatrao/scripts/outreach')
LEDGER_PATH = Path('/Users/klebergarciaalcatrao/zion-techgroup/outreach_monitor/processed/email_drafts_ledger.jsonl')
MAX_BATCH = 100  # Process up to 100 emails per run

def send_email(to_addr, subject, body, max_retries=3):
    """Send email via Gmail API with exponential backoff for rate limiting."""
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
    
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(
                url,
                data=data,
                headers={**gog_headers(), 'Content-Type': 'application/json'},
                method='POST'
            )
            result = json.loads(urllib.request.urlopen(req, timeout=15).read())
            return {'success': True, 'message_id': result.get('id')}
        except urllib.error.HTTPError as e:
            if e.code == 429:  # Rate limit
                wait_time = (2 ** attempt) * 5
                import time
                time.sleep(wait_time)
                continue
            else:
                return {'success': False, 'error': f"HTTP {e.code}: {e.reason}"}
        except Exception as e:
            if attempt < max_retries - 1:
                import time
                time.sleep(2)
                continue
            return {'success': False, 'error': str(e)}
    
    return {'success': False, 'error': 'Max retries exceeded'}

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
    print("📤 Sending Drafted Emails (Fast Batch Mode)")
    print("=" * 60)
    
    ledger = load_ledger()
    sent_dedup_keys = set()
    for entry in ledger:
        if entry.get('status') == 'sent':
            sent_dedup_keys.add(entry.get('dedup_key', ''))
    
    print(f"\nLoaded {len(ledger)} ledger entries, {len(sent_dedup_keys)} already sent")
    
    draft_files = sorted(glob.glob(str(DRAFTS_DIR / 'draft_*.json')))
    print(f"Found {len(draft_files)} total draft files")
    
    sent_count = 0
    skipped_count = 0
    errors = []
    processed = 0
    
    for draft_file in draft_files:
        if processed >= MAX_BATCH:
            print(f"\n⚠️ Reached batch limit of {MAX_BATCH} emails")
            break
            
        try:
            with open(draft_file, 'r', encoding='utf-8') as f:
                draft = json.load(f)
        except Exception as e:
            errors.append(f"Failed to read {draft_file}: {e}")
            continue
        
        if draft.get('status') != 'draft':
            skipped_count += 1
            continue
        
        to_addr = draft.get('prospect_email', '')
        subject = draft.get('subject', 'Following up on our collaboration')
        body = draft.get('body', '')
        contact_name = draft.get('prospect_name', 'Friend')
        service_name = draft.get('service_name', 'Service')
        dedup_key = f"{to_addr}-{draft.get('service_id', '')}"
        
        if dedup_key in sent_dedup_keys:
            print(f"  [SKIP] {to_addr} (contact: {contact_name}) - already sent")
            skipped_count += 1
            continue
        
        print(f"  [SEND] {to_addr} (contact: {contact_name}, service: {service_name})")
        result = send_email(to_addr, subject, body)
        processed += 1
        
        if result.get('success'):
            print(f"    ✅ Sent: {result.get('message_id')}")
            sent_count += 1
            
            entry = {
                'to': to_addr,
                'contact_name': contact_name,
                'service_name': service_name,
                'subject': subject,
                'thread_id': None,
                'message_id': result.get('message_id'),
                'status': 'sent',
                'ts': int(datetime.now(timezone.utc).timestamp()),
                'source': 'draft_file',
                'dedup_key': dedup_key,
                'draft_file': draft_file
            }
            with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
            
            draft['status'] = 'sent'
            draft['sent_at'] = datetime.now(timezone.utc).isoformat()
            draft['message_id'] = result.get('message_id')
            with open(draft_file, 'w', encoding='utf-8') as f:
                json.dump(draft, f, indent=2, ensure_ascii=False)
        else:
            errors.append(f"Failed to send to {to_addr}: {result.get('error')}")
            print(f"    ❌ Failed: {result.get('error')}")
    
    print(f"\n{'=' * 60}")
    print("📊 SUMMARY")
    print(f"   Sent:    {sent_count}")
    print(f"   Skipped: {skipped_count}")
    print(f"   Errors:  {len(errors)}")
    if errors:
        print("\n❌ Errors:")
        for err in errors[:10]:
            print(f"   - {err}")
    print("=" * 60)

if __name__ == '__main__':
    main()