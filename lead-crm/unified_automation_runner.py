#!/usr/bin/env python3
"""
Zion Unified Automation Runner
Runs at high frequency: hot follow-up + outreach pipeline + miner replenishment.
"""
import sys, json, time, datetime, subprocess
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
LEAD_DIR = REPO / 'lead-crm'
HOT_RUNNER = LEAD_DIR / 'hot_followup_responder.py'
PIPELINE_RUNNER = LEAD_DIR / 'continuous_outreach_pipeline.py'
MINER = LEAD_DIR / 'historical_email_miner.py'
LOCK = LEAD_DIR / 'unified_automation_runner.lock'
LOG = LEAD_DIR / 'unified_automation.log'

def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def log(msg):
    line = f"[{now_iso()}] {msg}"
    print(line, flush=True)
    try:
        with open(LOG, 'a', encoding='utf-8') as f:
            f.write(line + '\n')
    except Exception:
        pass

def pid_alive(pid):
    try:
        out = subprocess.check_output(['ps', '-p', str(pid)], text=True)
        return str(pid) in out
    except Exception:
        return False

def acquire_lock():
    if LOCK.exists():
        txt = LOCK.read_text(encoding='utf-8').strip()
        if txt:
            pid = txt.split(' ')[0]
            if pid.isdigit() and pid_alive(int(pid)):
                return False
            LOCK.unlink(missing_ok=True)
    owner = f"{__import__('os').getpid()} {now_iso()}"
    LOCK.write_text(owner, encoding='utf-8')
    return True

def release_lock():
    LOCK.unlink(missing_ok=True)

def run_once(cmd, cwd, env=None, timeout=180):
    try:
        proc = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            cwd=cwd,
            env={**__import__('os').environ, **(env or {})}
        )
        return proc.returncode, proc.stdout, proc.stderr
    except subprocess.TimeoutExpired:
        return -1, '', 'timeout'
    except Exception as e:
        return -1, '', str(e)

def main():
    log('unified_automation_start')
    if not acquire_lock():
        log('lock_held_exit')
        return

    try:
        backoff = 5
        while True:
            ts = now_iso()
            log('tick_start')
            try:
                # Hot follow-up
                rc, out, err = run_once(
                    ['python3', str(HOT_RUNNER)],
                    cwd=str(REPO),
                    env={**(__import__('os').environ), 'DRY_RUN': 'false'},
                    timeout=120
                )
                log(f"hot_followup_rc={rc} out={out[:400]} err={err[:200]}")
            except Exception as e:
                log(f"hot_followup_exception={e}")

            try:
                # Outreach pipeline tick
                rc, out, err = run_once(
                    ['python3', str(PIPELINE_RUNNER), '--run-once'],
                    cwd=str(REPO),
                    timeout=180
                )
                log(f"pipeline_rc={rc} out={out[:400]} err={err[:200]}")
            except Exception as e:
                log(f"pipeline_exception={e}")

            # Replenish leads from miner if needed
            try:
                rc, out, err = run_once(
                    ['python3', str(MINER)],
                    cwd=str(REPO),
                    timeout=180
                )
                if rc == 0:
                    log(f"miner_replenish_ok out={out[:300]}")
                else:
                    log(f"miner_replenish_rc={rc} err={err[:200]}")
            except Exception as e:
                log(f"miner_exception={e}")

            backoff = 5
            time.sleep(backoff)
    finally:
        release_lock()

if __name__ == '__main__':
    main()
