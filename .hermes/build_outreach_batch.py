import json
import os
from datetime import datetime, timezone

BASE_DIR = "/data/data/com.termux/files/home/zion-support.github.io"
SOURCE_BATCH = os.path.join(BASE_DIR, "lead-crm/outreach_batch_20260703T143315Z.json")
OUT_BATCH_DIR = os.path.join(BASE_DIR, "lead-crm")
timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
OUT_BATCH = os.path.join(OUT_BATCH_DIR, f"outreach_batch_{timestamp}.json")
OUT_READY = os.path.join(OUT_BATCH_DIR, f"outreach_ready_{timestamp}.json")

with open(SOURCE_BATCH, "r", encoding="utf-8") as f:
    batch = json.load(f)

recipients = batch.get("recipients") or []
seen = set()
deduped = []
system_like = {"example.com","localhost","localdomain","test.com"}
for rec in recipients:
    email = (rec.get("email") or rec.get("recipient") or "").strip().lower()
    if not email or "@" not in email:
        continue
    local, domain = email.split("@", 1)
    if domain.lower() in system_like or local.lower() in {"admin","postmaster","abuse","webmaster","noreply","no-reply","root"}:
        continue
    if email in seen:
        continue
    seen.add(email)
    business_domain = "." in domain and domain not in {"gmail.com","yahoo.com","hotmail.com"}
    rec.setdefault("status", "ready")
    rec.setdefault("preparedAt", datetime.now(timezone.utc).isoformat())
    rec.setdefault("source", "lead_discovery_current")
    rec.setdefault("business_domain", bool(business_domain))
    rec["skipped_reason"] = "" if business_domain else "non_business_domain"
    deduped.append(rec)

business = [r for r in deduped if r.get("business_domain")]
services_referenced = sorted({ref for r in deduped for ref in list((r.get("service_references") or {}).keys())})
input_count = len(batch.get("recipients", []))
out_batch = {
    "generatedAt": datetime.now(timezone.utc).isoformat(),
    "priorBatchFile": os.path.basename(SOURCE_BATCH),
    "inputCount": input_count,
    "duplicatesRemoved": input_count - len(deduped),
    "businessDomainReady": len(business),
    "nonBusinessExcluded": len(deduped) - len(business),
    "recipients": deduped,
    "servicesReferenced": services_referenced,
}

out_ready = {
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "batch_file": OUT_BATCH,
    "send_status": "send-blocked",
    "send_blocked": True,
    "block_reason": "No explicit opt-in consent flag found in environment/workspace config; no emails sent.",
    "batch_size": len(deduped),
    "send_count": 0,
    "send_errors": [],
    "counts": {
        "ready_before_dedupe": input_count,
        "business_domain_ready": len(business),
        "business_domain_nonpreferred": len(deduped) - len(business),
        "system_excluded": 0,
    },
    "services_referenced": services_referenced,
    "new_leads_discovered": 0,
    "note": "Send blocked by missing consent; future cron should only send when explicit opt-in is present.",
    "recipients": [
        {
            "recipient": r.get("email") or r.get("recipient"),
            "business_domain": r.get("business_domain"),
            "skipped_reason": r.get("skipped_reason", ""),
        }
        for r in deduped
    ],
}

with open(OUT_BATCH, "w", encoding="utf-8") as f:
    json.dump(out_batch, f, ensure_ascii=False, indent=2)

with open(OUT_READY, "w", encoding="utf-8") as f:
    json.dump(out_ready, f, ensure_ascii=False, indent=2)

print(f"{OUT_BATCH}|{OUT_READY}|{len(deduped)}|{len(business)}")
