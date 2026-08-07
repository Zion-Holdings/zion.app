#!/usr/bin/env python3
"""
send_outreach_batch.py — dispatches outreach batch actions.

Honors ZTG_SEND_ALLOWED:
- If 1: delegates to _small_wave_send_run.py for actual sending.
- Else: runs analysis/mining via historical_email_miner.py, improves outreach
  records, updates miner_health.json, and stops without sending.
"""
import os, sys, json, subprocess, traceback
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_CRM = REPO / 'lead-crm'
SEND_SCRIPT = LEAD_CRM / '_small_wave_send_run.py'
MINER_SCRIPT = LEAD_CRM / 'historical_email_miner.py'
VERIFICATION_PATH = LEAD_CRM / 'send_verification_result.json'
MINER_HEALTH_PATH = LEAD_CRM / 'miner_health.json'

def write_verification(result: dict):
    try:
        VERIFICATION_PATH.write_text(json.dumps(result, ensure_ascii=False, indent=2))
    except Exception:
        pass

def update_miner_health(send_allowed: bool, note: str, error: str | None):
    health = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'last_run': datetime.now(timezone.utc).isoformat(),
        'send_allowed': send_allowed,
        'note': note,
        'error': error,
    }
    try:
        MINER_HEALTH_PATH.write_text(json.dumps(health, ensure_ascii=False, indent=2))
    except Exception:
        pass

def run_send():
    if not SEND_SCRIPT.exists():
        return {'error': 'missing_send_script', 'note': '_small_wave_send_run.py not found'}
    try:
        proc = subprocess.run(
            [sys.executable, str(SEND_SCRIPT)],
            capture_output=True, text=True, timeout=180
        )
        # The script prints a single JSON object as its last non-empty line
        lines = [l for l in proc.stdout.splitlines() if l.strip()]
        if lines:
            try:
                return json.loads(lines[-1])
            except Exception:
                pass
        return {
            'error': proc.stderr.strip() or proc.stdout.strip() or 'unknown_send_error',
            'note': 'send_script_failed',
            'httpStatus': None,
        }
    except Exception as e:
        return {'error': str(e), 'note': 'send_exception'}

def run_analysis():
    if not MINER_SCRIPT.exists():
        return {'error': 'missing_miner_script', 'note': 'historical_email_miner.py not found'}
    try:
        proc = subprocess.run(
            [sys.executable, str(MINER_SCRIPT)],
            capture_output=True, text=True, timeout=180
        )
        if proc.returncode != 0:
            return {
                'error': proc.stderr.strip() or 'miner_failed',
                'note': 'analysis_failed',
                'httpStatus': None,
            }
        # Parse miner output
        lines = [l for l in proc.stdout.splitlines() if l.strip()]
        mined = 0
        llm = False
        if lines:
            try:
                out = json.loads(lines[-1])
                mined = out.get('mined', 0)
                llm = bool(out.get('llm'))
            except Exception:
                pass
        return {
            'send_count': 0,
            'sent_to': None,
            'subject': None,
            'httpStatus': None,
            'message_id': None,
            'thread_id': None,
            'liveSentCheck': False,
            'note': f'analysis_completed:mined={mined}:llm={llm}',
            'error': None,
        }
    except Exception as e:
        return {'error': str(e), 'note': 'analysis_exception'}

def main():
    send_allowed = os.environ.get('ZTG_SEND_ALLOWED') == '1'
    result = {
        'send_count': 0,
        'sent_to': None,
        'subject': None,
        'httpStatus': None,
        'message_id': None,
        'thread_id': None,
        'liveSentCheck': False,
        'note': None,
        'error': None,
    }

    if send_allowed:
        result = run_send()
    else:
        result = run_analysis()
        update_miner_health(send_allowed, result.get('note', 'analysis_completed'), result.get('error'))

    write_verification(result)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    main()
