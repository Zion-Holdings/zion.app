#!/usr/bin/env python3
"""
High-Frequency All-Folder Email Scanner
========================================
Runs every 5 minutes via cron to:
- Scan ALL Gmail folders for new hot follow-up threads
- Scan for new inbound partnership/collaboration emails
- Monitor sent/received ratios
- Track LLM tailoring coverage
- Continuous improvement metrics
"""

import json
import os
import sys
import time
import re
from pathlib import Path
from datetime import datetime, timezone

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO))
sys.path.insert(0, str(REPO / "scripts"))

from commands.google_workspace import gog_headers
import urllib.request
import urllib.parse

METRICS_FILE = REPO / "outreach_monitor" / "metrics" / "high_freq_scanner_metrics.jsonl"
REPORT_FILE = REPO / "outreach_monitor" / "processed" / "high_freq_scanner_report.json"

METRICS_FILE.parent.mkdir(parents=True, exist_ok=True)

# Gmail label IDs
HOT_FOLLOWUP_LABEL = "Label_4207916705207178948"  # !!!!HOT FOLLOW-UP
SENT_LABEL = "SENT"
INBOX_LABEL = "INBOX"
IMPORTANT_LABEL = "IMPORTANT"

MAX_RESULTS = 20
INTEREST_QUERY = (
    '!category:promotions !in:spam !in:trash '
    'newer_than:7d '
    '("partnership" OR "collaboration" OR "proposal" OR "opportunity" OR "work together" '
    'OR "supplier" OR "vendor" OR "partnership" OR "alliance" OR "joint venture" '
    'OR "strategic" OR "partnership" OR "resell" OR "white label" OR "co-sell" '
    'OR "referral" OR "channel partner" OR "technology partner") '
    '-"support reminder" -"rate the support" -"support survey" -"zendesk" '
    '-"newsletter" -"marketing" -"unsubscribe" -"promotional"'
)

def load_json_safe(path: Path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        pass
    return default

def save_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2), encoding="utf-8")

def append_metric(entry: dict):
    entry.setdefault("ts", int(time.time()))
    entry.setdefault("iso_ts", datetime.now(timezone.utc).isoformat())
    with METRICS_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")

def gmail_request(url: str) -> dict:
    req = urllib.request.Request(url, headers=gog_headers())
    return json.loads(urllib.request.urlopen(req, timeout=30).read())

def search_messages(query: str, label_ids: list = None, max_results: int = MAX_RESULTS) -> list:
    """Search messages with optional label filtering."""
    if label_ids:
        # Use labelIds param directly (comma-separated for multiple)
        label_param = "&labelIds=" + "&labelIds=".join(label_ids)
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q={urllib.parse.quote(query)}&maxResults={max_results}{label_param}"
    else:
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q={urllib.parse.quote(query)}&maxResults={max_results}"
    return gmail_request(url).get("messages", [])

def get_message(message_id: str, format: str = "metadata") -> dict:
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{message_id}?format={format}"
    if format == "metadata":
        url += "&metadataHeaders=From,Subject,Date,Message-ID,References,In-Reply-To"
    return gmail_request(url)

def get_thread(thread_id: str) -> dict:
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/threads/{thread_id}?format=metadata"
    return gmail_request(url)

def extract_email(from_header: str) -> str:
    match = re.search(r'<([^>]+)>', from_header)
    return match.group(1).lower().strip() if match else from_header.strip().lower()

def extract_name(from_header: str) -> str:
    match = re.search(r'^([^<]+)', from_header)
    if match:
        name = match.group(1).strip().strip('"')
        parts = name.split()
        return parts[0] if parts else "there"
    return "there"

def check_thread_alive(thread_id: str) -> bool:
    try:
        get_thread(thread_id)
        return True
    except Exception:
        return False

def main():
    print("=" * 60)
    print("⚡ High-Frequency All-Folder Scanner")
    print("=" * 60)
    
    report = {
        "run_ts": int(time.time()),
        "iso_ts": datetime.now(timezone.utc).isoformat(),
        "labels_checked": [],
        "hot_followup_threads": 0,
        "new_inbox_interest": 0,
        "new_inbox_examples": [],
        "sent_recent": 0,
        "dedup_entries": 0,
        "llm_tailoring": {
            "enabled": False,
            "contact_tailor_count": 0,
            "coverage_ratio": 0.0,
            "blocker": None,
        },
        "errors": [],
    }
    
    try:
        # 1. Check hot follow-up label using labelIds param (not query)
        print(f"\n🔍 Checking label: !!!!HOT FOLLOW-UP ({HOT_FOLLOWUP_LABEL})")
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds={HOT_FOLLOWUP_LABEL}&maxResults={MAX_RESULTS}"
        req = urllib.request.Request(url, headers=gog_headers())
        resp = json.loads(urllib.request.urlopen(req, timeout=30).read())
        hot_messages = resp.get("messages", [])
        report["labels_checked"].append({"name": "!!!!HOT FOLLOW-UP", "id": HOT_FOLLOWUP_LABEL, "count": len(hot_messages)})
        report["hot_followup_threads"] = len(hot_messages)
        print(f"   Found {len(hot_messages)} messages")
        
        # 2. Check recent sent
        print(f"\n📤 Checking recent sent emails...")
        sent_messages = search_messages("", label_ids=[SENT_LABEL], max_results=10)
        report["sent_recent"] = len(sent_messages)
        print(f"   Found {len(sent_messages)} recent sent")
        
        # 3. Check inbox for interest signals
        print(f"\n📥 Checking inbox for partnership/collaboration signals...")
        interest_messages = search_messages(INTEREST_QUERY, max_results=MAX_RESULTS)
        report["new_inbox_interest"] = len(interest_messages)
        print(f"   Found {len(interest_messages)} potential interest messages")
        
        examples = []
        seen = set()
        for msg in interest_messages[:5]:
            if msg["id"] in seen:
                continue
            seen.add(msg["id"])
            try:
                meta = get_message(msg["id"], format="metadata")
                headers = {h["name"]: h["value"] for h in meta.get("payload", {}).get("headers", [])}
                thread_id = meta.get("threadId")
                thread_alive = check_thread_alive(thread_id) if thread_id else False
                
                examples.append({
                    "id": meta["id"],
                    "thread_id": thread_id,
                    "thread_alive": thread_alive,
                    "from": headers.get("From"),
                    "subject": headers.get("Subject"),
                    "date": headers.get("Date"),
                    "snippet": meta.get("snippet", "")[:180],
                })
            except Exception:
                pass
        report["new_inbox_examples"] = examples
        
        # 4. Check LLM tailoring coverage
        print(f"\n🤖 Checking LLM tailoring coverage...")
        llm_blocker = None
        if not os.getenv("ZION_LLM_API_ENDPOINT") and not os.getenv("LLM_API_ENDPOINT"):
            llm_blocker = "missing_endpoint"
        elif not os.getenv("ZION_LLM_API_KEY") and not os.getenv("LLM_API_KEY"):
            llm_blocker = "missing_key"
        elif not os.getenv("ZION_LLM_MODEL") and not os.getenv("LLM_MODEL"):
            llm_blocker = "missing_model"
        
        dry_run_file = REPO / "outreach_monitor" / "processed" / "dry_run_report.jsonl"
        tailor_count = 0
        total_dry = 0
        if dry_run_file.exists():
            for line in dry_run_file.open("r", encoding="utf-8"):
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                if obj.get("mode") != "dry_run":
                    continue
                total_dry += 1
                if obj.get("llm_tailored"):
                    tailor_count += 1
        
        coverage = (tailor_count / total_dry) if total_dry else 0.0
        report["llm_tailoring"] = {
            "enabled": llm_blocker is None,
            "contact_tailor_count": tailor_count,
            "coverage_ratio": round(coverage, 3),
            "blocker": llm_blocker,
            "total_dry_runs": total_dry,
        }
        print(f"   LLM enabled: {llm_blocker is None}")
        print(f"   Coverage: {tailor_count}/{total_dry} = {coverage:.1%}")
        if llm_blocker:
            print(f"   Blocker: {llm_blocker}")
        
        # 5. Load dedup state
        dedup_file = REPO / "outreach_monitor" / "processed" / "global_dedup_state.json"
        if dedup_file.exists():
            dedup = load_json_safe(dedup_file, {})
            report["dedup_entries"] = len(dedup) if isinstance(dedup, dict) else 0
        
    except Exception as e:
        report["errors"].append({"global": repr(e)})
        print(f"❌ Error: {e}")
    
    # Save report
    save_json(REPORT_FILE, report)
    append_metric(report)
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 SCANNER SUMMARY")
    print(f"   Hot follow-up threads: {report['hot_followup_threads']}")
    print(f"   New inbox interest:    {report['new_inbox_interest']}")
    print(f"   Recent sent:           {report['sent_recent']}")
    print(f"   LLM tailoring:         {report['llm_tailoring']['enabled']} ({report['llm_tailoring']['coverage_ratio']:.1%})")
    print(f"   Dedup entries:         {report['dedup_entries']}")
    if report["errors"]:
        print(f"   Errors:                {len(report['errors'])}")
    print("=" * 60)

if __name__ == "__main__":
    main()