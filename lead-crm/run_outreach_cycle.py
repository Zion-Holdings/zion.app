#!/usr/bin/env python3
"""
Master outreach automation cycle.
Runs miner -> rebuild queue -> fast tailor -> send batch -> check replies -> log -> commit.
"""
import json, os, sys, subprocess
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'

def run(cmd, timeout=200):
    try:
        r = subprocess.run(cmd, shell=True, cwd=REPO, capture_output=True, text=True, timeout=timeout)
        return r.returncode, r.stdout.strip(), r.stderr.strip()
    except subprocess.TimeoutExpired:
        return 124, '', 'timeout'

def git(*args):
    return run(f'git {" ".join(args)}')

def main():
    ts = datetime.now(timezone.utc).isoformat()
    log = {'ts': ts, 'steps': {}}

    # 1) Mine
    rc, out, err = run('python3 lead-crm/historical_email_miner.py', timeout=240)
    log['steps']['miner'] = {'rc': rc, 'stdout': out, 'stderr': err[:500]}

    # 2) Rebuild queue
    rebuild = '''
import json, re
from pathlib import Path
from datetime import datetime, timezone
all_leads = json.loads(Path("lead-crm/all-leads.json").read_text())
sent = set(line.split("|")[0].strip().lower() for line in Path("lead-crm/pipeline_sent_cache.txt").read_text(encoding="utf-8").splitlines() if line.strip())
clean = {"gmail.com","hotmail.com","outlook.com","yahoo.com","yahoo.com.br","icloud.com","live.com","ymail.com"}
noise = ("mailer-daemon","no-reply","noreply","notifications@","postmaster@","support@")
ready=[]; seen=set()
for r in all_leads:
    to=(r.get("email") or r.get("to") or "").strip().lower()
    if not to or not re.fullmatch(r"[^@]+@[^@]+\\.[^@]+", to): continue
    if to in sent or to in seen: continue
    if any(to.startswith(p) for p in noise): continue
    seen.add(to)
    domain=to.split("@")[-1]
    if domain in clean: continue
    ready.append({"to":to,"name":r.get("name") or domain.split(".")[0].title(),"domain":domain,"subject":r.get("subject") or f'Parceria em {domain.split(".")[0]} — Zion Tech Group',"body":r.get("body"),"status":r.get("status","ready")})
    if len(ready)>=25: break
Path("lead-crm/outreach_ready_canonical.json").write_text(json.dumps({"generatedAt":datetime.now(timezone.utc).isoformat(),"state":"send_ready","ready":ready},ensure_ascii=False,indent=2))
print(json.dumps({"ready":len(ready)}))
'''
    rc, out, err = run(f'python3 -c {repr(rebuild)}', timeout=60)
    log['steps']['queue_rebuild'] = {'rc': rc, 'stdout': out, 'stderr': err[:500]}

    # 3) Fast tailor
    rc, out, err = run('python3 lead-crm/tailor_ready_fast.py', timeout=200)
    log['steps']['tailor'] = {'rc': rc, 'stdout': out, 'stderr': err[:500]}

    # 4) Send batch
    # rc, out, err = run('python3 lead-crm/send_outreach_batch.py lead-crm/outreach_ready_canonical.json', timeout=300)
    # log['steps']['send_batch'] = {'rc': rc, 'stdout': out, 'stderr': err[:500]}

    # 5) Git commit
    rc, out, err = git('add -A')
    rc2, out2, err2 = git('commit -m "chore(outreach): automated outreach cycle"')
    rc3, out3, err3 = git('push origin main')
    log['steps']['git'] = {'add_rc': rc, 'commit_rc': rc2, 'push_rc': rc3}

    print(json.dumps(log, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
