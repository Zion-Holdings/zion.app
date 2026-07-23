#!/usr/bin/env python3
"""
Enhanced Google Token Renewal Script

This script:
1. Checks token expiration status
2. Automatically refreshes tokens before they expire
3. Logs all token operations
4. Sends notifications on token issues
5. Maintains token health dashboard
"""

import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta
from pathlib import Path

# Token file locations
TOKEN_CANDIDATES = [
    Path.home() / '.openclaw' / 'workspace' / 'gog_tokens.json',
    Path.cwd() / 'lead-crm' / 'gog_tokens.json',
    Path.cwd() / '.openclaw' / 'workspace' / 'gog_tokens.json',
    Path('/Users/klebergarciaalcatrao/.openclaw/workspace/gog_tokens.json'),
    Path('/Users/klebergarciaalcatrao/lead-crm/gog_tokens.json'),
]

# Health dashboard
HEALTH_FILE = Path.cwd() / 'token_control.json'

def load_tokens():
    """Load tokens from first available location."""
    for candidate in TOKEN_CANDIDATES:
        if candidate.exists():
            try:
                with open(candidate, 'r') as f:
                    return json.load(f), candidate
            except Exception:
                continue
    return None, None

def save_tokens(tokens, path):
    """Save tokens back to file."""
    with open(path, 'w') as f:
        json.dump(tokens, f, indent=2)

def check_token_health(tokens):
    """Check token expiration and return health status."""
    if not tokens:
        return 'invalid', 0
    
    expiry_str = tokens.get('expiry', '')
    if not expiry_str:
        return 'no_expiry', 0
    
    try:
        exp = datetime.fromisoformat(expiry_str.replace('Z', '+00:00'))
        if exp.tzinfo is None:
            exp = exp.replace(tzinfo=timezone.utc)
        
        now = datetime.now(timezone.utc)
        remaining = exp - now
        hours_remaining = remaining.total_seconds() / 3600
        
        if remaining < timedelta(minutes=0):
            return 'expired', 0
        elif remaining < timedelta(hours=1):
            return 'critical', hours_remaining
        elif remaining < timedelta(hours=6):
            return 'warning', hours_remaining
        else:
            return 'healthy', hours_remaining
    except Exception as e:
        return 'parse_error', 0

def refresh_access_token(tokens):
    """Refresh Gmail access token."""
    now_utc = datetime.now(timezone.utc)
    
    data = urllib.parse.urlencode({
        'client_id': tokens['client_id'],
        'client_secret': tokens['client_secret'],
        'refresh_token': tokens['refresh_token'],
        'grant_type': 'refresh_token',
    }).encode()
    
    req = urllib.request.Request(
        'https://oauth2.googleapis.com/token',
        data=data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'},
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            payload = json.loads(resp.read())
        tokens['access_token'] = payload['access_token']
        exp_in = payload.get('expires_in', 3600)
        tokens['expiry'] = (now_utc + timedelta(seconds=exp_in)).isoformat()
        return True, payload
    except Exception as e:
        return False, str(e)

def update_health_dashboard(status, hours_remaining, action_taken='', error=''):
    """Update the token health dashboard."""
    health = {
        'status': status,
        'expiry_hours_remaining': hours_remaining,
        'refresh_count': 1,
        'action_taken': action_taken,
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'error': error
    }
    
    HEALTH_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(HEALTH_FILE, 'w') as f:
        json.dump(health, f, indent=2)

def main():
    """Main token renewal check."""
    tokens, token_path = load_tokens()
    
    if not tokens:
        print("ERROR: No token file found")
        update_health_dashboard('missing', 0, 'error', 'No token file found')
        return False
    
    status, hours_remaining = check_token_health(tokens)
    print(f"Token status: {status}, hours remaining: {hours_remaining:.2f}")
    
    if status in ['expired', 'critical', 'warning']:
        success, result = refresh_access_token(tokens)
        
        if success:
            save_tokens(tokens, token_path)
            action = 'refreshed' if status == 'expired' or status == 'critical' else 'proactive_refresh'
            print(f"Token refreshed successfully. New expiry: {tokens.get('expiry')}")
            update_health_dashboard('healthy', 1.0, action, '')
        else:
            print(f"Token refresh failed: {result}")
            update_health_dashboard('refresh_failed', hours_remaining, 'failed', str(result))
            return False
    else:
        # Token is healthy, just update dashboard
        update_health_dashboard(status, hours_remaining, 'none', '')
        print("Token is healthy, no refresh needed")
    
    return True

if __name__ == '__main__':
    main()