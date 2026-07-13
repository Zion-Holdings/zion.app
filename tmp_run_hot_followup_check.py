import sys, json, urllib.parse, urllib.request, datetime
from pathlib import Path

WORKSPACE = Path('/data/data/com.termux/files/home/.openclaw/workspace')
FALLBACK_WORKSPACE = Path.home() / '.openclaw' / 'workspace'
LEAD_CRM_FALLBACK = Path('/Users/miami2/zion.app/lead-crm')

TOKENS_FILE = None
for candidate in [WORKSPACE / 'gog_tokens.json', FALLBACK_WORKSPACE / 'gog_tokens.json', LEAD_CRM_FALLBACK / 'gog_tokens.json']:
    if candidate.exists():
        TOKENS_FILE = candidate
        break
if TOKENS_FILE is None:
    TOKENS_FILE = FALLBACK_WORKSPACE / 'gog_tokens.json'

def load_gog_tokens():
    with open(str(TOKENS_FILE)) as f:
        return json.load(f)

def refresh_access_token(tokens):
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    expiry_str = tokens.get('expiry', '')
    if expiry_str:
        try:
            exp = datetime.datetime.fromisoformat(expiry_str.replace('Z', '+00:00'))
            if exp.tzinfo is None: exp = exp.replace(tzinfo=datetime.timezone.utc)
            if exp > now_utc + datetime.timedelta(minutes=5):
                return tokens['access_token']
        except Exception:
            pass
    data = urllib.parse.urlencode({
        'client_id': tokens['client_id'],
        'client_secret': tokens['client_secret'],
        'refresh_token': tokens['refresh_token'],
        'grant_type': 'refresh_token',
    }).encode()
    req = urllib.request.Request('https://oauth2.googleapis.com/token', data=data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'})
    resp = json.loads(urllib.request.urlopen(req).read())
    tokens['access_token'] = resp['access_token']
    exp_in = resp.get('expires_in', 3600)
    tokens['expiry'] = (now_utc + datetime.timedelta(seconds=exp_in)).isoformat()
    with open(str(TOKENS_FILE), 'w') as f:
        json.dump(tokens, f)
    return tokens['access_token']

def gog_headers():
    tokens = load_gog_tokens()
    token = refresh_access_token(tokens)
    return {'Authorization': f'Bearer {token}'}

def gmail_search(query, limit=20, all_folders=False):
    if all_folders:
        q = f'in:anywhere {query}'
    else:
        q = query + ' label:INBOX'
    url = ('https://gmail.googleapis.com/gmail/v1/users/me/messages'
           f'?q={urllib.parse.quote(q)}&maxResults={limit}')
    req = urllib.request.Request(url, headers=gog_headers())
    resp = json.loads(urllib.request.urlopen(req).read())
    return resp.get('messages', [])

def gmail_get(message_id):
    url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{message_id}?format=full'
    req = urllib.request.Request(url, headers=gog_headers())
    return json.loads(urllib.request.urlopen(req).read())

def gmail_thread_get(thread_id):
    url = f'https://gmail.googleapis.com/gmail/v1/users/me/threads/{thread_id}?format=full'
    req = urllib.request.Request(url, headers=gog_headers())
    resp = json.loads(urllib.request.urlopen(req).read())
    return resp.get('messages', [])

def extract_headers(msg):
    headers = msg.get('payload', {}).get('headers', [])
    subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), '')
    from_addr = next((h['value'] for h in headers if h['name'].lower() == 'from'), '')
    date = next((h['value'] for h in headers if h['name'].lower() == 'date'), '')
    return subject, from_addr, date

query = 'label:"!!!hot-follow-up"'
hits = gmail_search(query, limit=20, all_folders=True)
print('HIT_COUNT=' + str(len(hits)))
if not hits:
    print('NO_HOT_FOLLOWUP_THREADS')
    sys.exit(0)

seen_threads = {}
for m in hits:
    tid = m.get('threadId')
    if tid not in seen_threads:
        seen_threads[tid] = m['id']

results = []
for tid, mid in seen_threads.items():
    try:
        msg = gmail_get(mid)
    except Exception as e:
        print('ERROR fetching message ' + mid + ': ' + str(e), file=sys.stderr)
        continue
    subject, from_addr, date = extract_headers(msg)
    results.append({
        'thread_id': tid,
        'subject': subject,
        'from': from_addr,
        'date': date,
        'message_count': None,
    })

for item in results:
    try:
        thread_messages = gmail_thread_get(item['thread_id'])
    except Exception as e:
        print('ERROR fetching thread ' + item['thread_id'] + ': ' + str(e), file=sys.stderr)
        thread_messages = []
    item['message_count'] = len(thread_messages)

for item in results:
    print('THREAD_ID=' + str(item['thread_id']))
    print('SUBJECT=' + str(item['subject']))
    print('FROM=' + str(item['from']))
    print('DATE=' + str(item['date']))
    print('MESSAGE_COUNT=' + str(item['message_count']))
    print('---')
