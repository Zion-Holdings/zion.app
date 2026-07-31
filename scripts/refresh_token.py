#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import datetime

# Load current tokens
with open('/Users/klebergarciaalcatrao/.openclaw/gog_tokens.json') as f:
    tokens = json.load(f)

print(f"Current token expiry: {tokens.get('expiry')}")

# Try to refresh
data = urllib.parse.urlencode({
    'client_id': tokens['client_id'],
    'client_secret': tokens['client_secret'],
    'refresh_token': tokens['refresh_token'],
    'grant_type': 'refresh_token',
}).encode()

req = urllib.request.Request(
    'https://oauth2.googleapis.com/token',
    data=data,
    headers={'Content-Type': 'application/x-www-form-urlencoded'}
)

try:
    resp = urllib.request.urlopen(req, timeout=30)
    result = json.loads(resp.read())
    print(f"Token refreshed successfully!")
    
    # Update tokens
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    tokens['access_token'] = result['access_token']
    tokens['expiry'] = (now_utc + datetime.timedelta(seconds=result.get('expires_in', 3600))).isoformat()
    tokens['token_expires_in'] = result.get('expires_in', 3600)
    tokens['token_obtained_at'] = now_utc.isoformat()
    
    with open('/Users/klebergarciaalcatrao/.openclaw/gog_tokens.json', 'w') as f:
        json.dump(tokens, f, indent=2)
    print("Token saved to file")
except Exception as e:
    print(f"Error refreshing token: {e}")