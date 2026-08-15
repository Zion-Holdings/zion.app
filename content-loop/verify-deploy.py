import urllib.request, urllib.error, json, time, os

TOKEN_PATH = os.path.expanduser('~/.gh_token')
REPO = 'Zion-support/zion-support.github.io'
BASE_URL = 'https://api.github.com'
SITE = 'https://ziontechgroup.com'

with open(TOKEN_PATH) as f:
    token = f.read().strip()

headers = {
    'Authorization': f'token {token}',
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'Hermes-Agent',
}

def api_get(path):
    req = urllib.request.Request(BASE_URL + path, headers=headers)
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

# Find latest run
runs = api_get(f'/repos/{REPO}/actions/workflows/gh-pages.yml/runs?per_page=1')
latest = runs['workflow_runs'][0]
print(f"Latest run {latest['id']} status={latest['status']} conclusion={latest['conclusion']}")

while latest['status'] not in ('completed', 'failure', 'cancelled'):
    time.sleep(30)
    runs = api_get(f'/repos/{REPO}/actions/workflows/gh-pages.yml/runs?per_page=1')
    latest = runs['workflow_runs'][0]
    print(f"Latest run {latest['id']} status={latest['status']} conclusion={latest['conclusion']}")

print(f"Final status={latest['status']} conclusion={latest['conclusion']}")

# Pick 4 sample URLs from newly generated pages
# We will check a few from the generated set.
sample_paths = [
    '/blog/ai-customer-success-churn-2026-9811/',
    '/blog/5g-solutions-2026-9812/',
    '/blog/it-consulting-2026-9813/',
    '/blog/network-infrastructure-2026-9814/',
]

results = {}
for p in sample_paths:
    url = SITE + p
    req = urllib.request.Request(url, headers={'User-Agent': 'Hermes-Agent'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            results[p] = r.status
    except urllib.error.HTTPError as e:
        results[p] = e.code
    except Exception as e:
        results[p] = str(e)

print('Page checks:')
for p, status in results.items():
    print(f'{p}: {status}')

# Output summary for downstream parsing
print('SUMMARY')
print(json.dumps({
    'latest_run_status': latest['status'],
    'latest_run_conclusion': latest['conclusion'],
    'page_checks': results,
}))
