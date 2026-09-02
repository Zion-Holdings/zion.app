import urllib.request, json, sys

token = sys.argv[1]
owner = sys.argv[2]
repo = sys.argv[3]
headers = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}

def close_issue(n):
    data = json.dumps({'state': 'closed'}).encode()
    req = urllib.request.Request(f'https://api.github.com/repos/{owner}/{repo}/issues/{n}', data=data, headers=headers, method='PATCH')
    try:
        with urllib.request.urlopen(req) as resp:
            return True
    except Exception as e:
        print(f'Failed #{n}: {e}')
        return False

# Targeted duplicate closures from earlier analysis
to_close = [
    # Lead: Kleber duplicates - keep #71005
    70905, 70906, 70907, 70908, 70909, 70910, 70911, 70912, 70913, 70914,
    70915, 70916, 70917, 70918, 70919, 70920, 70921, 70922, 70923, 70924,
    70925, 70926, 70927, 70928, 70929, 70930, 70931, 70932, 70933, 70934,
    70935, 70936, 70937, 70938, 70939, 70940, 70941, 70942, 70943, 70944,
    70945, 70946, 70947, 70948, 70949, 70950, 70951, 70952, 70953, 70954,
    70955, 70956, 70957, 70958, 70959, 70960, 70961, 70962, 70963, 70964,
    70965, 70966, 70967, 70968, 70969, 70970, 70971, 70972, 70973, 70974,
    70975, 70976, 70977, 70978, 70979, 70980, 70981, 70982, 70983, 70984,
    70985, 70986, 70987, 70988, 70989, 70990, 70991, 70992, 70993, 70994,
    70995, 70996, 70997, 70998, 70999, 71000, 71001, 71002, 71003, 71004,
    # Composio maximize run duplicates - keep #71013
    71010, 71011, 71012,
]

closed = 0
for n in to_close:
    if close_issue(n):
        closed += 1

print(f'Closed {closed}/{len(to_close)} issues')
