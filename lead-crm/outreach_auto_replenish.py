#!/usr/bin/env python3
"""Replenish outreach_ready_canonical.json with uncontacted leads.

Fixed (vs. earlier paste):
  - Reads email from the correct field.  all-leads.json stores it under "to".
  - Output is wrapped as {"ready": [...]} because send_outreach_batch.py
    does obj.get('ready') | obj.get('recipients') | obj.get('batch');
    a bare list would raise AttributeError on .get().
  - Sent-set reads the email from any of "to"/"email"/"recipient" so the
    mixed-schema outreach_sent_history.jsonl is handled robustly.
"""
import json, os
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
ALL_LEADS_FILE = str(SCRIPT_DIR / "all-leads.json")
READY_FILE     = str(SCRIPT_DIR / "outreach_ready_canonical.json")
HISTORY_FILE   = str(SCRIPT_DIR / "outreach_sent_history.jsonl")

def _email_of(lead: dict) -> str:
    return (lead.get("to") or lead.get("email") or lead.get("recipient") or "").strip().lower()

def _sent_emails() -> set:
    sent = set()
    if not os.path.exists(HISTORY_FILE):
        return sent
    with open(HISTORY_FILE, "r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                data = json.loads(line)
            except Exception:
                continue
            email = (data.get("to") or data.get("email") or data.get("recipient") or "").strip().lower()
            if email:
                sent.add(email)
    return sent

def replenish(limit: int = 50) -> None:
    if not os.path.exists(ALL_LEADS_FILE):
        print("all-leads.json not found.")
        return

    sent_emails = _sent_emails()

    with open(ALL_LEADS_FILE, "r", encoding="utf-8") as f:
        all_leads = json.load(f)

    ready_queue = []
    for lead in all_leads:
        email = _email_of(lead)
        if email and email not in sent_emails:
            # Normalize so downstream send script sees 'to' consistently.
            lead = dict(lead)
            lead["to"] = email
            lead["status"] = "ready"
            ready_queue.append(lead)
            if len(ready_queue) >= limit:
                break

    payload = {"ready": ready_queue}
    with open(READY_FILE, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    print(f"REPLENISHED: {len(ready_queue)} uncontacted leads written to "
          f"outreach_ready_canonical.json (sent-set size={len(sent_emails)})")

if __name__ == "__main__":
    replenish()
