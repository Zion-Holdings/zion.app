import urllib.request
import urllib.error
import json
import os
import sys

TOKEN = None
try:
    with open(os.path.expanduser('~/.gh_token'), 'r') as f:
        TOKEN = f.read().strip()
except:
    pass

REPO = "Zion-support/zion-support.github.io"
BASE = "https://ziontechgroup.com"
ROUTES = ["/services/", "/about/", "/contact/", "/pricing/", "/blog/"]

results = {}

# 1. Site health
try:
    req = urllib.request.Request(BASE, method='GET')
    with urllib.request.urlopen(req, timeout=15) as resp:
        results['site'] = resp.getcode()
        results['site_final'] = resp.geturl()
except Exception as e:
    results['site'] = str(e)

# 2. Key routes
route_results = {}
for route in ROUTES:
    url = BASE + route
    try:
        req = urllib.request.Request(url, method='GET')
        with urllib.request.urlopen(req, timeout=15) as resp:
            code = resp.getcode()
            final = resp.geturl()
            route_results[route] = f"{code} -> {final}"
    except urllib.error.HTTPError as e:
        route_results[route] = f"{e.code}"
    except Exception as e:
        route_results[route] = f"ERR: {e}"
results['routes'] = route_results

# 3. GitHub Actions - last 10 runs
headers = {}
if TOKEN:
    headers['Authorization'] = f'token {TOKEN}'

try:
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}/actions/runs?per_page=10",
        headers=headers
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode())
        runs = data.get('workflow_runs', [])
        failures = []
        for r in runs:
            if r.get('status') == 'completed' and r.get('conclusion') == 'failure':
                failures.append({
                    'name': r.get('name'),
                    'id': r.get('id'),
                    'run_number': r.get('run_number'),
                    'conclusion': r.get('conclusion'),
                    'event': r.get('event')
                })
        results['gh_runs_total'] = len(runs)
        results['gh_failures'] = failures
except Exception as e:
    results['gh_runs'] = str(e)

print(json.dumps(results, indent=2))
