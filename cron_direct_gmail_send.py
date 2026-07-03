#!/usr/bin/env python3
import json, base64, urllib.request, urllib.parse, datetime, sys, os
from pathlib import Path

WORKSPACE = Path('/data/data/com.termux/files/home/.openclaw/workspace')
TOKENS_FILE = WORKSPACE / 'gog_tokens.json'
REPO_ROOT = Path(__file__).resolve().parent.parent


def _load_llm_client():
    sys.path.insert(0, str(REPO_ROOT))
    try:
        from lib.llm_client import chat
        return chat
    except Exception:
        return None


def _tailor_message(chat_fn, r):
    if not chat_fn:
        return r
    subject = r.get('subject', '')
    body = r.get('body', '')
    if not body:
        return r
    company = r.get('name') or r.get('company') or ''
    reason = r.get('reason') or ''
    website = r.get('website') or ''
    contact = r.get('first_name') or r.get('contact_name') or ''
    if not any([company, reason, website, contact]):
        return r
    prompt = (
        "Rewrite this outreach email into a concise, personalized Portuguese message for Zion Tech Group. "
        "Keep it short and direct. Do not invent unavailable facts. "
        "If insufficient context is provided, keep the original body intact.\n\n"
        f"Company: {company}\nWebsite: {website}\nContext: {reason}\nContact: {contact}\n"
        f"Subject: {subject}\nBody:\n{body}\n"
    )
    messages = [
        {"role": "system", "content": "You are a helpful assistant that rewrites business emails concisely."},
        {"role": "user", "content": prompt},
    ]
    try:
        result = chat_fn(messages, provider="auto")
        text = (result.get("content") or "").strip()
        if not text:
            return r
        lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
        if lines:
            r["subject"] = lines[0].replace("Assunto:", "").strip() or subject
            r["body"] = "\n".join(lines[1:]).strip() if len(lines) > 1 else text
        else:
            r["body"] = text
        r["llm_provider"] = result.get("provider")
        r["llm_model"] = result.get("model")
    except Exception:
        pass
    return r


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
    return {'Authorization': 'Bearer %s' % token, 'Content-Type': 'application/json'}


def send_mail(to_addr, subject, body, html=None):
    raw_lines = ['To: %s' % to_addr, 'Subject: %s' % subject, 'Content-Type: text/html; charset=utf-8', '', html or body]
    raw = '\r\n'.join(raw_lines)
    encoded = base64.urlsafe_b64encode(raw.encode('utf-8')).decode('utf-8')
    send_url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    payload = json.dumps({'raw': encoded}).encode('utf-8')
    req = urllib.request.Request(send_url, data=payload, headers=gog_headers(), method='POST')
    result = json.loads(urllib.request.urlopen(req).read())
    return result.get('id'), result.get('threadId')


if __name__ == '__main__':
    import time
    batch_path = sys.argv[1]
    obj = json.load(open(batch_path))
    rows = obj.get('recipients') or obj.get('ready') or []
    chat_fn = _load_llm_client()
    outputs = []
    for r in rows:
        to = r.get('email') or r.get('recipient') or r.get('to')
        if not to:
            outputs.append({'to': None, 'success': False, 'error': 'missing email'})
            continue
        try:
            tailored = _tailor_message(chat_fn, dict(r))
            mid, tid = send_mail(to, tailored.get('subject', ''), tailored.get('body', ''), tailored.get('html'))
            outputs.append({'to': to, 'success': True, 'message_id': mid, 'thread_id': tid, 'llm_provider': tailored.get('llm_provider'), 'llm_model': tailored.get('llm_model')})
        except Exception as e:
            outputs.append({'to': to, 'success': False, 'error': str(e)})
        time.sleep(0.25)
    print(json.dumps({'generatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'send_count': len(outputs), 'results': outputs}))
