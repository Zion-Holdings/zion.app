#!/usr/bin/env python3
"""Record audit row for blocked outreach run and send Telegram notification."""
import json, subprocess, os, sys
from datetime import datetime, timezone

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
canonical_path = os.path.join(REPO, "lead-crm", "outreach_ready_canonical.json")
log_path = os.path.join(REPO, "lead-crm", "pipeline_log.json")

# Load canonical state
with open(canonical_path, encoding="utf-8") as f:
    canonical = json.load(f)

send_blocked = canonical.get("send_blocked", False)
now = datetime.now(timezone.utc).isoformat()

# Load pipeline log
with open(log_path, encoding="utf-8") as f:
    pipeline_log = json.load(f)

# Build audit row
audit_row = {
    "timestamp": now,
    "event": "outreach_run_blocked",
    "state": canonical.get("state"),
    "send_blocked": send_blocked,
    "leads_processed": canonical.get("leads_processed"),
    "total_potential_value": canonical.get("total_potential_value"),
    "expected_revenue": canonical.get("expected_revenue"),
    "conversion_rate_target": canonical.get("conversion_rate_target"),
    "ready_leads_count": len(canonical.get("ready", [])),
    "wrapper_result": "discovered 1 worker script: send_outreach_batch.py (path gap fixed, lead-crm/ now in search_roots)",
    "action": "recorded_audit_row_and_exited_gracefully",
    "note": "send_blocked=true in outreach_ready_canonical.json - did not execute outreach worker"
}

pipeline_log.append(audit_row)

with open(log_path, "w", encoding="utf-8") as f:
    json.dump(pipeline_log, f, indent=2)

print(json.dumps(audit_row, indent=2))

# Send Telegram notification (direct API via env-configured token)
import urllib.request as _ureq
import urllib.parse as _uparse

tg_token = os.getenv("TELEGRAM_BOT_TOKEN", "")
tg_chat = os.getenv("TELEGRAM_HOME_CHANNEL", "8435383377")
msg = (
    "📊 *IT SMB Outreach — Blocked Run*\n\n"
    f"State: `{canonical.get('state')}`\n"
    f"send_blocked: `{send_blocked}`\n"
    f"Leads ready: {len(canonical.get('ready', []))}\n"
    f"Potential value: ${canonical.get('total_potential_value'):,}\n"
    f"Expected revenue: ${canonical.get('expected_revenue'):,.2f}\n\n"
    f"Wrapper: found 1 worker script (send_outreach_batch.py). Path gap fixed.\n"
    f"Action: audit row recorded. Exiting gracefully. No emails sent."
)

if tg_token:
    tg_url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
    tg_data = _uparse.urlencode({
        "chat_id": tg_chat,
        "text": msg,
        "parse_mode": "Markdown",
        "disable_web_page_preview": "true",
    }).encode()
    try:
        _req = _ureq.Request(tg_url, data=tg_data, method="POST")
        with _ureq.urlopen(_req, timeout=30) as _resp:
            tg_result = json.loads(_resp.read())
            if tg_result.get("ok"):
                print(f"[OK] Telegram message sent to chat {tg_chat}")
            else:
                print(f"[ERROR] Telegram API error: {tg_result}")
    except Exception as e:
        print(f"[ERROR] Telegram send failed: {e}")
else:
    print("[WARN] TELEGRAM_BOT_TOKEN not set — skipping Telegram notification")

print("=== GRACEFUL EXIT — send_blocked=true ===")
