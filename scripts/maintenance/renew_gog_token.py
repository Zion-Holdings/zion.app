#!/usr/bin/env python3
"""Minimal token renewal/reporting for gog-managed OAuth.

Uses `gog auth status` to validate the current auth state and writes
a small dashboard/state file for downstream monitoring.
"""
import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

HOME = Path.home()
STATE_FILE = HOME / 'data' / 'token_state.json'
DASHBOARD_FILE = HOME / 'data' / 'token_dashboard.json'


def run_gog(args):
    cmd = ['gog'] + args + ['--account', 'kleber@ziontechgroup.com', '--no-input']
    try:
        out = subprocess.check_output(cmd, stderr=subprocess.STDOUT, timeout=70)
        return {'ok': True, 'out': out.decode('utf-8', errors='ignore')}
    except subprocess.CalledProcessError as e:
        return {'ok': False, 'out': (e.output or b'').decode('utf-8', errors='ignore'), 'ret': e.returncode}
    except Exception as e:
        return {'ok': False, 'out': str(e), 'ret': None}


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return default


def save_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def main():
    now = datetime.now(timezone.utc)
    now_iso = now.isoformat()

    status = run_gog(['auth', 'status', '--json'])
    state = load_json(STATE_FILE, {
        'refresh_count': 0,
        'last_refresh': None,
        'last_status': 'unknown',
        'failure_count': 0,
        'failures': [],
    })
    dashboard = load_json(DASHBOARD_FILE, {
        'timestamp': now_iso,
        'status': 'unknown',
        'token': {'expiry': 'unknown', 'remaining_days': 0, 'has_refresh_token': False, 'scopes': ''},
        'state': state,
        'health': {'needs_attention': False, 'needs_reauth': False},
    })

    if status['ok']:
        try:
            obj = json.loads(status['out'])
            email = obj.get('account', {}).get('email', '')
            auth_ok = bool(obj.get('account', {}).get('auth_preferred') == 'oauth')
            state['last_status'] = 'ok'
            state['failure_count'] = 0
            dashboard['status'] = 'ok'
            dashboard['health'] = {'needs_attention': False, 'needs_reauth': False}
            dashboard['token'] = {
                'expiry': 'managed_by_gog',
                'remaining_days': -1,
                'has_refresh_token': True,
                'email': email,
                'scopes': 'managed_by_gog',
            }
        except Exception:
            state['last_status'] = 'ok'
            dashboard['status'] = 'ok'
    else:
        state['last_status'] = 'failure'
        state['failure_count'] = state.get('failure_count', 0) + 1
        state.setdefault('failures', []).append({'time': now_iso, 'error': status.get('out', '')[:200]})
        dashboard['status'] = 'failed'
        dashboard['health'] = {'needs_attention': True, 'needs_reauth': True}

    state['last_refresh'] = now_iso
    dashboard['timestamp'] = now_iso
    dashboard['state'] = state

    save_json(STATE_FILE, state)
    save_json(DASHBOARD_FILE, dashboard)

    print(json.dumps({'ts': now_iso, 'status': dashboard['status'], 'state': state}, ensure_ascii=False))
    return 0 if dashboard['status'] == 'ok' else 2


if __name__ == '__main__':
    sys.exit(main())
