#!/usr/bin/env python3
"""Generate a live-send-cycle JSON summary report after each send cycle completion.

Reads the outreach send log and the latest lead queue, then writes a compact
JSON summary to this project's automation/reports/ directory so cron jobs and
dashboards can consume send_attempted / send_succeeded / recipient domains.
"""

import json
from datetime import datetime, timezone
from pathlib import Path

LOG_PATH = Path("/Users/miami2/zion.app/outreach-send-log.jsonl")
LEADS_PATH = Path("/Users/miami2/zion.app/automation/data/zion_leads_free.json")
REPORT_DIR = Path("/Users/miami2/zion-support.github.io/automation/reports")
REPORT_PATH = REPORT_DIR / "live-send-cycle-latest.json"

def load_log_entries():
    if not LOG_PATH.exists():
        return []
    entries = []
    with open(LOG_PATH) as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                entries.append(json.loads(line))
            except json.JSONDecodeError:
                continue
    return entries

def main():
    REPORT_DIR.mkdir(parents=True, exist_ok=True)

    log_entries = load_log_entries()

    # Only entries from this cycle — defined as the most recent contiguous batch
    # starting from the last "enviados"/"pulados" summary state. Since the log
    # is append-only, use a simpler heuristic: take entries that correspond to
    # leads currently in the queue file. Anything older is a previous cycle.
    current_leads = []
    try:
        with open(LEADS_PATH) as f:
            data = json.load(f)
        if isinstance(data, list):
            current_leads = data
        else:
            current_leads = data.get("leads", [])
    except Exception:
        pass

    current_emails = set()
    for lead in current_leads:
        cp = lead.get("contato_proventivo") or ""
        em = lead.get("email") or ""
        for cand in (cp, em):
            if cand:
                import re
                for m in re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', str(cand)):
                    current_emails.add(m.lower())

    cycle_entries = []
    previously_sent = set()
    for e in log_entries:
        if e.get("status") == "sent":
            previously_sent.add(e["to"].lower())

    for e in reversed(log_entries):
        email = e.get("to", "").lower()
        if email in current_emails:
            cycle_entries.append(e)
        else:
            break
    cycle_entries.reverse()

    if not cycle_entries:
        # Fallback: treat the last N entries as the current cycle
        cycle_entries = log_entries[-len(current_leads):] if log_entries else []

    send_attempted = sum(1 for e in cycle_entries if e.get("status") in ("sent", "failed"))
    send_succeeded = sum(1 for e in cycle_entries if e.get("status") == "sent")

    recipient_domains = []
    seen_domains = set()
    for e in cycle_entries:
        to = e.get("to", "")
        if "@" in to:
            domain = to.split("@", 1)[1].lower()
            if domain not in seen_domains:
                seen_domains.add(domain)
                recipient_domains.append(domain)

    summary = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "send_attempted": send_attempted,
        "send_succeeded": send_succeeded,
        "recipient_domains": recipient_domains,
        "cycle_entries_count": len(cycle_entries),
        "total_log_entries": len(log_entries),
    }

    with open(REPORT_PATH, "w") as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print(json.dumps(summary, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
