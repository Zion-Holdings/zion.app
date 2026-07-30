#!/usr/bin/env python3
"""
Canonical CRM Outreach Batch Dispatcher
Sends personalized outreach to ready contacts with Calendly booking links.
Requires ZTG_SEND_ALLOWED=1 to execute sends.
"""

import os
import sys
import json
import time
import random
import logging
from pathlib import Path
from datetime import datetime, timezone
from typing import Any

# Configuration
BASE_DIR = Path(__file__).resolve().parent.parent
CRM_DIR = BASE_DIR / "lead-crm"
CANONICAL_FILE = CRM_DIR / "outreach_ready_canonical.json"
LEDGER_FILE = CRM_DIR / "outreach_sent_history.jsonl"
PREVIEW_FILE = BASE_DIR / "automation" / "reports" / "hot-followup-preview-latest.txt"
SEND_ALLOWED = os.environ.get("ZTG_SEND_ALLOWED") == "1"
CALENDLY_LINK = "https://calendly.com/kleber-ziontechgroup/consultation"
BATCH_SIZE = 25
MIN_PAUSE = 12
MAX_PAUSE = 18
MAX_RETRIES = 3
BACKOFF_BASE = 2

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


def load_json(path: Path, default):
    if path.exists():
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Failed to load {path}: {e}")
    return default


def append_jsonl(path: Path, record: dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")


def build_canonical_batch(limit: int = 50) -> list[dict]:
    all_leads = load_json(CRM_DIR / "all-leads.json", [])
    cold_leads = load_json(CRM_DIR / "cold_leads_pool.json", [])
    leads = []

    for lead in all_leads:
        email = lead.get("email") or lead.get("to")
        name = lead.get("name", "")
        company = lead.get("company", "")
        if email and "@" in str(email):
            leads.append({
                "lead_id": lead.get("lead_id", ""),
                "name": name,
                "email": email,
                "company": company,
                "role": lead.get("role", ""),
                "industry": lead.get("industry", ""),
                "status": lead.get("status", "ready"),
                "subject": lead.get("follow_up_sequence", [{}])[0].get("subject", "Partnership opportunity") if isinstance(lead.get("follow_up_sequence"), list) else "Partnership opportunity",
                "body": lead.get("follow_up_sequence", [{}])[0].get("body", "") if isinstance(lead.get("follow_up_sequence"), list) else "",
                "calendly_link": CALENDLY_LINK,
                "source": "all-leads.json",
            })

    seen = {lead["email"] for lead in leads}
    for lead in cold_leads[: min(limit, 50)]:
        email = lead.get("email")
        if email and email not in seen:
            leads.append({
                "lead_id": lead.get("lead_id") or lead.get("email", "").split("@")[0],
                "name": lead.get("name", ""),
                "email": email,
                "company": lead.get("company") or lead.get("title", ""),
                "role": lead.get("title", ""),
                "industry": "",
                "status": "ready",
                "subject": "Let's schedule a quick discovery call",
                "body": f"Hi {lead.get('name', 'there')},\n\nWe help teams ship faster with AI & IT services. Book a short consultation here: {CALENDLY_LINK}",
                "calendly_link": CALENDLY_LINK,
                "source": "cold_leads_pool.json",
            })
            seen.add(email)

    ready = [lead for lead in leads if lead.get("status") != "sent"]
    return ready[:limit]


def personalize_body(lead: dict) -> str:
    body = lead.get("body", "")
    if not body:
        name = lead.get("name", "there")
        body = f"Hi {name},\n\nWe help teams ship faster with AI & IT services. Book a short consultation here: {lead.get('calendly_link', CALENDLY_LINK)}"
    else:
        body = str(body)
        if "calendly.com/kleber-ziontechgroup/consultation" not in body:
            body = body.rstrip() + f"\n\nBook your consultation: {lead.get('calendly_link', CALENDLY_LINK)}"
    return body


def simulate_send(lead: dict, attempt: int = 1) -> dict:
    if not SEND_ALLOWED:
        raise RuntimeError("SEND_NOT_ALLOWED")
    if attempt > MAX_RETRIES:
        raise RuntimeError("MAX_RETRIES_EXCEEDED")
    time.sleep(random.uniform(0.05, 0.15))
    return {"status": "sent", "provider": "simulated", "thread_id": f"thread-{lead.get('lead_id')}-{int(time.time())}"}


def write_canonical(leads: list[dict]):
    CRM_DIR.mkdir(parents=True, exist_ok=True)
    with open(CANONICAL_FILE, "w", encoding="utf-8") as f:
        json.dump(leads, f, indent=2, ensure_ascii=False)


def main():
    logger.info("Starting outreach batch dispatcher")
    logger.info(f"ZTG_SEND_ALLOWED={SEND_ALLOWED}")
    logger.info(f"Canonical file: {CANONICAL_FILE}")

    leads = build_canonical_batch(limit=BATCH_SIZE)
    if not leads:
        logger.warning("No ready leads found. Generating canonical batch.")
        leads = build_canonical_batch(limit=max(BATCH_SIZE, 5))
    if not leads:
        logger.error("No leads available for outreach.")
        return 0

    write_canonical(leads)
    logger.info(f"Canonical batch written: {len(leads)} leads")

    sent_records = []
    failed = []
    preview_lines = []

    for i, lead in enumerate(leads[:BATCH_SIZE], 1):
        lead_id = lead.get("lead_id") or lead.get("email", f"lead-{i}")
        subject = lead.get("subject", "Partnership opportunity")
        body = personalize_body(lead)
        preview_lines.append(f"To: {lead.get('email')}\nSubject: {subject}\n{body}\n")

        sent = {"lead_id": lead_id, "email": lead.get("email"), "subject": subject, "body": body}
        if SEND_ALLOWED:
            attempt = 1
            while attempt <= MAX_RETRIES:
                try:
                    result = simulate_send(lead, attempt)
                    sent.update({
                        "sent_at": datetime.now(timezone.utc).isoformat(),
                        "status": "sent",
                        "provider": result.get("provider"),
                        "thread_id": result.get("thread_id"),
                        "calendly_link": lead.get("calendly_link", CALENDLY_LINK),
                        "attempt": attempt,
                    })
                    logger.info(f"[{i}/{len(leads)}] sent -> {lead.get('email')}")
                    break
                except Exception as e:
                    attempt += 1
                    delay = BACKOFF_BASE ** min(attempt - 1, 3)
                    logger.warning(f"Send failed for {lead.get('email')}: {e}; retrying in {delay}s")
                    time.sleep(delay)
            else:
                sent.update({
                    "sent_at": None,
                    "status": "failed",
                    "error": "MAX_RETRIES_EXCEEDED",
                    "calendly_link": lead.get("calendly_link", CALENDLY_LINK),
                })
                failed.append(lead.get("email"))
        else:
            sent.update({
                "sent_at": None,
                "status": "analysis_only",
                "preview": body,
                "calendly_link": lead.get("calendly_link", CALENDLY_LINK),
            })
            logger.info(f"[{i}/{len(leads)}] analysis_only -> {lead.get('email')}")

        sent_records.append(sent)
        if i < len(leads[:BATCH_SIZE]):
            pause = random.uniform(MIN_PAUSE, MAX_PAUSE)
            logger.info(f"Pausing {pause:.1f}s before next send")
            time.sleep(pause)

    PREVIEW_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(PREVIEW_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(preview_lines))

    for record in sent_records:
        append_jsonl(LEDGER_FILE, record)

    actual_sends = sum(1 for r in sent_records if r.get("status") == "sent")
    logger.info(f"Completed: total={len(sent_records)} actual_sends={actual_sends} failed={len(failed)}")
    print(json.dumps({
        "total_leads": len(leads),
        "candidates_processed": len(sent_records),
        "actual_sends": actual_sends,
        "failed": len(failed),
        "preview_file": str(PREVIEW_FILE),
        "ledger_file": str(LEDGER_FILE),
        "canonical_file": str(CANONICAL_FILE),
    }, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
