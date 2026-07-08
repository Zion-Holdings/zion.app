#!/usr/bin/env python3
import json, re
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
all_leads_path = LEAD_DIR / 'all-leads.json'
sent_path = LEAD_DIR / 'pipeline_sent_cache.txt'
out_path = LEAD_DIR / 'outreach_ready_canonical.json'

def main():
    if not all_leads_path.exists():
        print(json.dumps({'ready': 0, 'error': 'missing all-leads.json'}, ensure_ascii=False))
        return
    sent = set()
    if sent_path.exists():
        try:
            sent = {line.split("|")[0].strip().lower() for line in sent_path.read_text(encoding="utf-8").splitlines() if line.strip()}
        except Exception:
            sent = set()
    clean = {"gmail.com","hotmail.com","outlook.com","yahoo.com","yahoo.com.br","icloud.com","live.com","ymail.com"}
    noise = ("mailer-daemon","no-reply","noreply","notifications@","postmaster@","support@")
    try:
        all_leads = json.loads(all_leads_path.read_text(encoding='utf-8'))
    except Exception as e:
        all_leads = []
    rows = all_leads if isinstance(all_leads, list) else all_leads.get('ready') or all_leads.get('leads') or []
    ready=[]
    seen=set()
    for r in rows:
        to=(r.get("email") or r.get("to") or "").strip().lower()
        if not to or not re.fullmatch(r"[^@]+@[^@]+\.[^@]+", to):
            continue
        if to in sent or to in seen:
            continue
        if any(to.startswith(p) for p in noise):
            continue
        domain=to.split("@")[-1]
        if domain in clean or domain.startswith('[') or domain.endswith('.invalid') or domain == 'blocked.invalid':
            continue
        seen.add(to)
        ready.append({
            "to":to,
            "name":r.get("name") or domain.split(".")[0].title(),
            "domain":domain,
            "subject":r.get("subject") or f'Parceria em {domain.split(".")[0]} — Zion Tech Group',
            "body":r.get("body"),
            "status":r.get("status","ready")
        })
        if len(ready)>=25:
            break
    out_payload = {"generatedAt": datetime.now(timezone.utc).isoformat(), "state": "send_ready", "ready": ready}
    out_path.write_text(json.dumps(out_payload, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({"ready": len(ready)}))

if __name__ == '__main__':
    main()
