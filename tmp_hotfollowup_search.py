#!/usr/bin/env python3
import sys
from pathlib import Path
repo = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(repo))

from commands.google_workspace import gmail_search, gmail_get
import json
from datetime import datetime

ledger_path = repo / "outreach_monitor/processed/hot_followup_reply_ledger.jsonl"
seen_threads = set()
seen_contacts = set()
if ledger_path.exists():
    with open(ledger_path, "r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entry = json.loads(line)
                tid = entry.get("thread_id")
                if tid:
                    seen_threads.add(tid)
                contact = entry.get("to")
                if contact and "<" in contact:
                    contact = contact.split("<")[1].split(">")[0]
                if contact:
                    seen_contacts.add(contact.lower())
            except Exception:
                continue

print(f"Seen threads: {len(seen_threads)}")
print(f"Seen contacts: {len(seen_contacts)}")

results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
print(f"Gmail search results count: {len(results) if results else 0}")
if results:
    for i, msg in enumerate(results):
        print(f"{i}: {msg.get('id', '')} thread={msg.get('threadId', '')} label={msg.get('labelIds', [])}")
        print(f"   snippet={msg.get('snippet', '')[:120]}")
