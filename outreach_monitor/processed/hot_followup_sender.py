#!/usr/bin/env python3
"""
Hot follow-up sender script.
Sends drafted replies from next_hot_followup_llm_draft.json.
"""
import sys, json, os, datetime, base64, urllib.request
from pathlib import Path

PROJECT = '/Users/klebergarciaalcatrao/zion-techgroup'
sys.path.insert(0, os.path.join(PROJECT, 'commands'))

from google_workspace import gmail_send_reply_fixed

LEDGER_PATH = os.path.join(PROJECT, 'outreach_monitor', 'processed', 'hot_followup_reply_ledger.jsonl')
DRAFT_PATH = os.path.join(PROJECT, 'outreach_monitor', 'processed', 'next_hot_followup_llm_draft.json')

def load_ledger():
    entries = []
    if os.path.exists(LEDGER_PATH):
        with open(LEDGER_PATH, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    entries.append(json.loads(line))
                except:
                    pass
    return entries

def is_sent(entry):
    return entry.get('status') == 'sent' and entry.get('avoid_duplicate') == True

def main():
    print("=== HOT FOLLOW-UP SENDER ===")
    
    # Load ledger to check for sent status
    ledger = load_ledger()
    sent_keys = set()
    for entry in ledger:
        if is_sent(entry):
            if entry.get('thread_id'):
                sent_keys.add(entry['thread_id'])
            if entry.get('message_id'):
                sent_keys.add(entry['message_id'])
            if entry.get('to'):
                sent_keys.add(entry['to'].lower())
    
    print(f"Loaded {len(ledger)} ledger entries, {len(sent_keys)} sent keys")
    
    # Load drafts
    if not os.path.exists(DRAFT_PATH):
        print("No draft file found")
        return
    
    with open(DRAFT_PATH, 'r', encoding='utf-8') as f:
        drafts = json.load(f).get('leads', [])
    
    if not drafts:
        print("No drafts to send")
        return
    
    print(f"Found {len(drafts)} drafts")
    
    sent_count = 0
    skipped_count = 0
    errors = []
    sent_entries = []
    
    for draft in drafts:
        thread_id = draft.get('thread_id')
        message_id = draft.get('message_id')
        to_addr = draft.get('to')
        subject = draft.get('subject')
        body = draft.get('body')
        
        # Check for duplicates
        if thread_id in sent_keys:
            print(f"  [SKIP] Thread {thread_id} already sent")
            skipped_count += 1
            continue
        if message_id in sent_keys:
            print(f"  [SKIP] Message {message_id} already sent")
            skipped_count += 1
            continue
        if to_addr and to_addr.lower() in sent_keys:
            print(f"  [SKIP] Contact {to_addr} already sent")
            skipped_count += 1
            continue
        
        # Send the reply
        print(f"  [SEND] {to_addr} | thread={thread_id}")
        try:
            result = gmail_send_reply_fixed(thread_id, subject, body, to_addr)
            if result.get('success'):
                sent_count += 1
                print(f"    Sent: {result.get('message_id')}")
                sent_entries.append({
                    'to': to_addr,
                    'subject': subject,
                    'thread_id': thread_id,
                    'message_id': result.get('message_id'),
                    'status': 'sent',
                    'payload': result,
                    'ts': int(datetime.datetime.now(datetime.timezone.utc).timestamp()),
                    'source': 'hot_followup_sender'
                })
            else:
                errors.append(f"Failed to send to {to_addr}: {result}")
                print(f"    Failed: {result}")
        except Exception as e:
            errors.append(str(e))
            print(f"    Error: {e}")
    
    # Append sent entries to ledger
    if sent_entries:
        with open(LEDGER_PATH, 'a', encoding='utf-8') as f:
            for entry in sent_entries:
                entry['avoid_duplicate'] = True
                entry['dedup_key'] = f"hot-followup-{entry['thread_id']}"
                f.write(json.dumps(entry, ensure_ascii=False) + '\n')
        print(f"\n[INFO] Appended {len(sent_entries)} entries to ledger")
    
    # Summary
    summary = {
        'threads_scanned': len(drafts),
        'duplicates_skipped': skipped_count,
        'replied': sent_count,
        'errors': errors,
        'mode': 'send'
    }
    
    print(f"\n=== SUMMARY ===")
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    
    return summary

if __name__ == '__main__':
    main()