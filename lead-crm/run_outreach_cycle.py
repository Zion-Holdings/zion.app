#!/usr/bin/env python3
"""
Master outreach automation cycle.
Runs miner -> rebuild queue -> LLM tailor with metrics -> send batch -> check replies -> log -> commit.
"""
import json, os, subprocess
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')


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
    rc, out, err = run('python3 lead-crm/rebuild_outreach_queue.py', timeout=60)
    log['steps']['queue_rebuild'] = {'rc': rc, 'stdout': out, 'stderr': err[:500]}

    # 3) Tailor: prefer LLM path, record real coverage metrics from final tailored file
    rc_llm, out_llm, err_llm = run('python3 lead-crm/tailor_ready_with_llm.py', timeout=220)
    used_llm = False
    if rc_llm == 0 and out_llm:
        rc, out, err = rc_llm, out_llm, err_llm
        used_llm = True
    else:
        rc, out, err = run('python3 lead-crm/tailor_ready_fast.py', timeout=200)
        log['steps']['tailor_backup'] = {'llm_rc': rc_llm, 'llm_stdout': out_llm[:200], 'llm_stderr': err_llm[:200]}
    log['steps']['tailor'] = {'rc': rc, 'stdout': out, 'stderr': err[:500], 'used_llm': used_llm}

    tailored_path = REPO / 'lead-crm' / 'outreach_tailored_canonical.json'
    tailored_total = 0
    tailored_llm = 0
    tailored_template = 0
    if tailored_path.exists():
        try:
            payload = json.loads(tailored_path.read_text(encoding='utf-8'))
            rows = payload.get('ready') or []
            tailored_total = len(rows)
            for row in rows:
                provider = (row.get('llm_provider') or '').strip().lower()
                if provider in {'template', 'deterministic-template-v1', 'deterministic-template-v2'}:
                    tailored_template += 1
                else:
                    tailored_llm += 1
        except Exception:
            pass
    try:
        Path('lead-crm/metrics_tailor_coverage.json').write_text(json.dumps({
            'ts': datetime.now(timezone.utc).isoformat(),
            'used_llm': used_llm,
            'tailored_total': tailored_total,
            'tailored_llm': tailored_llm,
            'tailored_template': tailored_template,
            'llm_share': round((tailored_llm / tailored_total) if tailored_total else 0, 4),
            'llm_stdout': out_llm[:180],
            'llm_stderr': err_llm[:180],
        }, ensure_ascii=False), encoding='utf-8')
    except Exception:
        pass

    # 4) Send batch
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    if not send_allowed:
        print('SEND_DISABLED: outreach sends remain policy-locked to avoid duplicates')

    # 5) Git commit
    rc, out, err = git('add -A')
    rc2, out2, err2 = git('commit -m "chore(outreach): automated outreach cycle"')
    rc3, out3, err3 = git('push origin main')
    log['steps']['git'] = {'add_rc': rc, 'commit_rc': rc2, 'push_rc': rc3}

    print(json.dumps(log, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
