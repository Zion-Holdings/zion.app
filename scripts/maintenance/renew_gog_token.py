import json
import os
import subprocess
from datetime import datetime

STATE_PATH = os.environ.get('GOG_STATE_PATH', '/Users/miami2/.config/gog/state.json')
ACCOUNT = 'kleber@ziontechgroup.com'

def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True, shell=True)

def main():
    result = {'ts': datetime.utcnow().isoformat() + 'Z', 'account': ACCOUNT, 'token_path': STATE_PATH, 'results': {}}
    try:
        p = run("gog auth status --json")
        result['auth_refresh'] = {'ok': p.returncode == 0, 'out': (p.stdout or p.stderr).strip()[:4000]}
    except Exception as e:
        result['auth_refresh'] = {'ok': False, 'out': str(e)}
    os.makedirs(os.path.dirname(STATE_PATH), exist_ok=True)
    json.dump(result, open(STATE_PATH, 'w'), indent=2)
    print(json.dumps(result, indent=2))

if __name__ == '__main__':
    main()
