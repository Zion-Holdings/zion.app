#!/usr/bin/env python3
"""Send outreach batch - sends IT SMB leads from lead_crm directory"""

import json
import os
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

# REPO path fallback chain - try Termux, then relative, then macOS
REPO_PATHS = [
    Path('/data/data/com.termux/files/home/zion-support.github.io'),
    Path(__file__).resolve().parent.parent,
    Path('/Users/klebergarciaalcatrao/zion-support.github.io'),
]

REPO = None
for p in REPO_PATHS:
    if p.exists():
        REPO = p
        break

if not REPO:
    print("ERROR: Could not find repository root", file=sys.stderr)
    sys.exit(1)

sys.path.insert(0, str(REPO))

# Config
# Default is 1, not 5. A cron run of this script with the variable unset sent
# five emails in one tick (job zion-outreach-send-small-wave), which is what a
# "small wave" is explicitly meant to prevent. The batch cap has to fail safe:
# an operator who wants five passes ZTG_SEND_COUNT=5 deliberately.
SEND_COUNT = int(os.environ.get('ZTG_SEND_COUNT', '1'))
# Fail closed. This defaulted to '1', so the script sent live email whenever
# ZTG_SEND_ALLOWED was simply unset -- the opposite of a send gate, and how
# repeated cron ticks dispatched mail nobody authorised. Sending now requires
# the variable to be set to '1' explicitly.
SEND_ALLOWED = os.environ.get('ZTG_SEND_ALLOWED', '0') == '1'
SEND_DELAY = 1.0

# Paths
LEAD_CRM_DIR = REPO / 'lead-crm'
CANONICAL_FILE = LEAD_CRM_DIR / 'outreach_ready_canonical.json'
SENT_HISTORY = LEAD_CRM_DIR / 'outreach_sent_history.jsonl'

def load_canonical():
    if not CANONICAL_FILE.exists():
        print(f"ERROR: Canonical file not found: {CANONICAL_FILE}")
        return None
    try:
        with open(CANONICAL_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"ERROR: Reading canonical: {e}")
        return None

def load_sent_dedup():
    sent = set()
    if SENT_HISTORY.exists():
        try:
            with open(SENT_HISTORY, 'r', encoding='utf-8') as f:
                for line in f:
                    if line.strip():
                        try:
                            entry = json.loads(line)
                            sent.add(entry.get('email', '').lower())
                        except:
                            pass
        except:
            pass
    return sent

def record_send(email, message_id=None, error=None):
    entry = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'email': email.lower(),
        'message_id': message_id,
        'error': error,
        'status': 'error' if error else 'sent'
    }
    SENT_HISTORY.parent.mkdir(parents=True, exist_ok=True)
    try:
        with open(SENT_HISTORY, 'a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception as e:
        print(f"WARNING: Could not write to sent history: {e}")

def send_email(email, subject, body):
    if os.environ.get('SEND_DRY_RUN') == '1':
        print(f"  [DRY RUN] Would send to {email}")
        return True, f"dry_run_{int(time.time())}"
    print(f"  Sending to: {email}")
    print(f"    Subject: {subject[:50]}...")
    time.sleep(SEND_DELAY)
    from commands.google_workspace import gmail_send_new
    msg_id = gmail_send_new(subject, body, email)
    return True, msg_id

def main():
    print("=" * 60)
    print("SEND OUTREACH BATCH")
    print("=" * 60)
    print(f"Repository: {REPO}")
    print(f"Batch size: {SEND_COUNT}")
    print(f"Send allowed: {SEND_ALLOWED}")
    print(f"Send delay: {SEND_DELAY}s")
    print()

    if not SEND_ALLOWED:
        print("Send not allowed (ZTG_SEND_ALLOWED=0)")
        result = {'send_count': 0, 'status': 'blocked', 'reason': 'ZTG_SEND_ALLOWED=0'}
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return 0

    # Load canonical
    canonical = load_canonical()
    if not canonical:
        print("No canonical data to send")
        return 1

    ready_leads = canonical.get('ready', [])
    if not ready_leads:
        print("No leads in canonical")
        return 0

    # Load dedup
    sent_addresses = load_sent_dedup()
    print(f"Already sent: {len(sent_addresses)} addresses")

    # Filter unsent leads
    unsent_leads = [
        lead for lead in ready_leads
        if (lead.get('email') or lead.get('to') or '').lower().strip() not in sent_addresses
    ]
    print(f"Unsent leads: {len(unsent_leads)}")

    if not unsent_leads:
        print("All leads already sent")
        return 0

    # Send up to batch size
    to_send = unsent_leads[:SEND_COUNT]
    print(f"Sending {len(to_send)} emails...")
    print()

    success_count = 0
    error_count = 0
    results = []
    errors = []

    for lead in to_send:
        email = (lead.get('email') or lead.get('to') or '').strip()
        subject = (lead.get('subject') or 'Introduction').strip()
        body = lead.get('body') or ''

        if not email:
            print(f"[{success_count + error_count + 1}/{len(to_send)}] SKIP (no email)")
            continue

        print(f"[{success_count + error_count + 1}/{len(to_send)}] {email}")

        try:
            success, msg_id = send_email(email, subject, body)

            if success:
                record_send(email, message_id=msg_id)
                success_count += 1
                results.append({'email': email, 'message_id': msg_id})
                print(f"  Sent")
            else:
                error_count += 1
                errors.append({'email': email, 'error': msg_id or 'Unknown'})
                print(f"  Failed")

        except Exception as e:
            error_count += 1
            errors.append({'email': email, 'error': str(e)})
            print(f"  Error: {e}")

        # Throttle between sends
        time.sleep(SEND_DELAY)

        # Rate limit break
        if errors and '429' in str(errors[-1]):
            print("  Rate limit hit (429) - stopping")
            break

    print()
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Sent: {success_count}")
    print(f"Errors: {error_count}")

    result = {
        'send_count': success_count,
        'results': results,
        'errors': errors if errors else None,
        'httpStatus': 200 if success_count > 0 else None,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))

    return 0 if error_count == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
