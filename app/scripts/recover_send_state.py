#!/usr/bin/env python3
"""Recover state after successful partial send."""

import json
from datetime import datetime, timezone
from pathlib import Path

BASE = Path('/Users/klebergarciaalcatrao')
OUT_DIR = BASE / 'app' / 'data' / 'outreach'
OUT_DIR.mkdir(parents=True, exist_ok=True)

LATEST_PATH = OUT_DIR / 'latest_outreach.json'
SENT_PATH = OUT_DIR / 'sent_log.json'
REPORT_PATH = OUT_DIR / f"send_report_{datetime.now(timezone.utc).strftime('%Y-%m-%d')}.json"

sent_emails = [
    'error-lite@duckduckgo.com',
    'ryan.morrissey@useblueprints.ai',
    'quin@iamquin.ai',
    'mehul.jindal@bharatx.tech',
    'matthew.smith@trusspayments.com',
    'ire.aderinokun@helicarrier.studio',
    'dane.cook@tankpayments.com',
    'akanksha.singh@backdropagent.com',
    'devang.shah@bulkmro.com',
    'noam.izhaki@ballerine.com',
    'anna.berger@buildtrayd.com',
    'sam.stein@trigodata.com',
    'jeremie.cohen@kelaitech.com',
]

latest = json.loads(LATEST_PATH.read_text()) if LATEST_PATH.exists() else []
sent = json.loads(SENT_PATH.read_text()) if SENT_PATH.exists() else {}
sent_emails_set = {e.lower() for e in sent_emails}
sent_count = 0
updated = []
for r in latest:
    email = (r.get('email') or '').lower()
    if email in sent_emails_set:
        sent_count += 1
        if email not in sent:
            sent[email] = {
                'company': r.get('company',''),
                'subject': r.get('subject',''),
                'sent_at': datetime.now(timezone.utc).isoformat(),
                'lead_id': r.get('lead_id',''),
                'source': r.get('source',''),
                'status': 'sent',
            }
        continue
    updated.append(r)
LATEST_PATH.write_text(json.dumps(updated, indent=2, ensure_ascii=False), encoding='utf-8')
SENT_PATH.write_text(json.dumps(sent, indent=2, ensure_ascii=False), encoding='utf-8')
report = {
    'ts': datetime.now(timezone.utc).isoformat(),
    'sent_count_recovered': sent_count,
    'errors': [],
    'sent_total_ledger': len(sent),
    'latest_total': len(updated),
    'recovery': True,
}
REPORT_PATH.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False))
