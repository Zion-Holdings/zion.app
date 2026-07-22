#!/usr/bin/env python3
"""
Send hot follow-up email to Rimpy Bawa via Gmail API
"""
import json
import base64
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime, timezone

HOME = Path.home()
TOKEN_FILE = HOME / '.openclaw/workspace/gog_tokens.json'

def load_tokens():
    with open(TOKEN_FILE, 'r') as f:
        return json.load(f)

def save_tokens(tokens):
    TOKEN_FILE.write_text(json.dumps(tokens, indent=2))

def refresh_access(tokens):
    refresh_token = tokens.get('refresh_token')
    client_id = tokens.get('client_id')
    client_secret = tokens.get('client_secret')
    
    data = urllib.parse.urlencode({
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token,
        'client_id': client_id,
        'client_secret': client_secret,
    }).encode()
    
    req = urllib.request.Request(
        'https://oauth2.googleapis.com/token',
        data=data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'},
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        payload = json.loads(resp.read())
        tokens['access_token'] = payload['access_token']
        tokens['expiry'] = datetime.now(timezone.utc).isoformat()
        save_tokens(tokens)
        return tokens['access_token']

import urllib.parse

def send_email():
    tokens = load_tokens()
    access = tokens.get('access_token', '')
    refresh = tokens.get('refresh_token')
    client_id = tokens.get('client_id')
    client_secret = tokens.get('client_secret')
    
    # Try to refresh if needed
    if not access:
        access = refresh_access(tokens)
    
    # Load the hot follow-up reply
    reply_file = Path('/Users/klebergarciaalcatrao/data/outreach/hot_followup_pending_reply_v2.json')
    with open(reply_file, 'r') as f:
        data = json.load(f)
    
    reply = data['pending_replies'][0]
    to = reply['to']
    subject = reply['subject']
    body = reply['body']
    message_id = reply.get('message_id', '')
    thread_id = reply.get('thread_id', '')
    in_reply_to = reply.get('in_reply_to', '')
    
    # Build email
    msg = f"To: {to}\r\n"
    msg += f"Subject: {subject}\r\n"
    msg += "Content-Type: text/plain; charset=utf-8\r\n"
    if in_reply_to:
        msg += f"In-Reply-To: {in_reply_to}\r\n"
    if message_id:
        msg += f"References: {message_id}\r\n"
    msg += f"\r\n{body}"
    
    raw = base64.urlsafe_b64encode(msg.encode('utf-8')).decode('utf-8')
    
    # Send via Gmail API
    api_url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    payload = {'raw': raw, 'threadId': thread_id} if thread_id else {'raw': raw}
    
    req = urllib.request.Request(
        api_url,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {access}',
            'Content-Type': 'application/json'
        },
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
            print(f"Email sent successfully: {result.get('id')}")
            
            # Update the pending file
            data['pending_replies'][0]['provider_status'] = 'sent'
            data['pending_replies'][0]['sent_at'] = datetime.now(timezone.utc).isoformat()
            data['pending_replies'][0]['gmail_message_id'] = result.get('id')
            
            with open(reply_file, 'w') as f:
                json.dump(data, f, indent=2)
            
            return True
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        if e.code == 401 and refresh:
            # Token expired, refresh and retry
            access = refresh_access(tokens)
            req = urllib.request.Request(
                api_url,
                data=json.dumps(payload).encode('utf-8'),
                headers={
                    'Authorization': f'Bearer {access}',
                    'Content-Type': 'application/json'
                },
                method='POST'
            )
            try:
                with urllib.request.urlopen(req, timeout=30) as resp:
                    result = json.loads(resp.read())
                    print(f"Email sent successfully after token refresh: {result.get('id')}")
                    data['pending_replies'][0]['provider_status'] = 'sent'
                    data['pending_replies'][0]['sent_at'] = datetime.now(timezone.utc).isoformat()
                    data['pending_replies'][0]['gmail_message_id'] = result.get('id')
                    with open(reply_file, 'w') as f:
                        json.dump(data, f, indent=2)
                    return True
            except urllib.error.HTTPError as e2:
                print(f"Failed after retry: {e2.code} {e2.read().decode()}")
                return False
        else:
            print(f"Failed to send: {e.code} {error_body}")
            return False
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == '__main__':
    import urllib.parse
    send_email()