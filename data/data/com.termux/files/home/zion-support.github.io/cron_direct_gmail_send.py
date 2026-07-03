#!/usr/bin/env python3
"""Cron-safe direct Gmail send helper."""
import json, base64, urllib.request, urllib.parse, datetime
from pathlib import Path

WORKSPACE = Path('/data/data/com.termux/files/home/.openclaw/workspace')
TOKENS_FILE = WORKSPACE / 'gog_tokens.json'


def load_gog_tokens():
    with open(TOKENS_FILE) as f:
        return json.load(f)


def refresh_access_token(tokens):
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    expiry_str = tokens.get('expiry', '')
    if expiry_str:
        try:
            exp = datetime.datetime.fromisoformat(expiry_str.replace('Z', '+00:00'))
            if exp.tzinfo is None:
                exp = exp.replace(tzinfo=datetime.timezone.utc)
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
    with open(TOKENS_FILE, 'w') as f:
        json.dump(tokens, f)
    return tokens['access_token']


def gog_headers():
    tokens = load_gog_tokens()
    token = refresh_access_token(tokens)
    return {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}


def send_mail(to_addr, subject, body, html=None):
    raw_lines = [f"To: {to_addr}", f"Subject: {subject}", "Content-Type: text/html; charset=utf-8", "", html or body]
    raw = "\r\n".join(raw_lines)
    encoded = base64.urlsafe_b64encode(raw.encode('utf-8')).decode('utf-8')
    send_url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    payload = json.dumps({'raw': encoded}).encode('utf-8')
    req = urllib.request.Request(send_url, data=payload, headers=gog_headers(), method='POST')
    result = json.loads(urllib.request.urlopen(req).read())
    return result.get('id'), result.get('threadId')


if __name__ == '__main__':
    import sys, time
    batch_path = sys.argv[1]
    obj=json.load(open(batch_path))
    rows = obj.get('recipients') or obj.get('ready') or []
    outputs=[]
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to':None,'success':False,'error':'missing email'})
            continue
        try:
            mid, tid = send_mail(to, r.get('subject',''), r.get('body',''), r.get('html'))
            outputs.append({'to':to,'success':True,'message_id':mid,'thread_id':tid})
        except Exception as e:
            outputs.append({'to':to,'success':False,'error':str(e)})
        time.sleep(0.25)
    print(json.dumps({'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'send_count': len(outputs), 'results': outputs}))
