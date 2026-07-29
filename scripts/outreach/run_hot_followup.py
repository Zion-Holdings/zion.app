#!/usr/bin/env python3
"""
Hot Follow-up Runner - Orchestrates the hot follow-up workflow.

This script:
1. Runs the LLM-powered hot follow-up responder to generate drafts
2. Runs the hot follow-up sender to send pre-drafted CEO replies
3. Reports results

Usage:
    python3 scripts/outreach/run_hot_followup.py
"""

import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime, timezone

# Project root is zion-techgroup directory
ZT_ROOT = Path("/Users/klebergarciaalcatrao/zion-techgroup")
sys.path.insert(0, str(ZT_ROOT))

# Paths
LEDGER_FILE = ZT_ROOT / "outreach_monitor" / "processed" / "hot_followup_reply_ledger.jsonl"
DRAFT_FILE = ZT_ROOT / "outreach_monitor" / "processed" / "next_hot_followup_llm_draft.json"
HEMLI_RESPONDER = ZT_ROOT / "scripts" / "outreach" / "llm_hot_followup_responder.py"
CEO_SENDER = ZT_ROOT / "scripts" / "outreach" / "send_hot_followup_ceo.py"


def count_ledger_entries():
    """Count entries in the ledger file."""
    if not LEDGER_FILE.exists():
        return 0
    count = 0
    with open(LEDGER_FILE, 'r', encoding='utf-8', errors='replace') as f:
        for line in f:
            if line.strip():
                count += 1
    return count


def run_llm_responder():
    """Run the LLM hot follow-up responder."""
    print("=" * 60)
    print("STEP 1: Running LLM Hot Follow-up Responder")
    print("=" * 60)
    
    result = subprocess.run(
        [sys.executable, str(HEMLI_RESPONDER)],
        cwd=str(ZT_ROOT),
        capture_output=True,
        text=True,
        timeout=120
    )
    
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr, file=sys.stderr)
    
    return result.returncode == 0


def run_ceo_sender():
    """Run the CEO hot follow-up sender for pre-drafted replies."""
    print("\n" + "=" * 60)
    print("STEP 2: Sending Pre-drafted CEO Replies")
    print("=" * 60)
    
    result = subprocess.run(
        [sys.executable, str(CEO_SENDER)],
        cwd=str(ZT_ROOT),
        capture_output=True,
        text=True,
        timeout=60
    )
    
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr, file=sys.stderr)
    
    return result.returncode == 0


def main():
    """Main orchestration function."""
    print("=" * 60)
    print("🔥 HOT FOLLOW-UP RUNNER")
    print("=" * 60)
    print(f"Timestamp: {datetime.now(timezone.utc).isoformat()}")
    print()
    
    # Count initial ledger entries
    initial_count = count_ledger_entries()
    print(f"Initial ledger entries: {initial_count}")
    print()
    
    # Run LLM responder
    llm_success = run_llm_responder()
    
    # Run CEO sender
    sender_success = run_ceo_sender()
    
    # Count final ledger entries
    final_count = count_ledger_entries()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 RUN SUMMARY")
    print("=" * 60)
    print(f"LLM Responder: {'✅ SUCCESS' if llm_success else '❌ FAILED'}")
    print(f"CEO Sender:    {'✅ SUCCESS' if sender_success else '❌ FAILED'}")
    print(f"Ledger entries: {initial_count} → {final_count}")
    print(f"New entries:    {final_count - initial_count}")
    print("=" * 60)
    
    # Return success only if both steps succeeded
    return 0 if (llm_success and sender_success) else 1


if __name__ == "__main__":
    sys.exit(main())