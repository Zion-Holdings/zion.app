#!/usr/bin/env python3
"""
Enhanced Google Token Renewal with Automatic Monitoring

This script:
1. Checks token expiration status
2. Automatically refreshes tokens before they expire
3. Logs all token operations
4. Sends notifications on token issues
5. Maintains token health dashboard
6. Triggers automatic refresh via cron or manual run
"""

import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta
from pathlib import Path
import os
import sys

# Token file locations - check all possible locations
TOKEN_CANDIDATES = [
    Path.home() / '.openclaw' / 'workspace' / 'gog_tokens.json',
    Path.cwd() / 'lead-crm' / 'gog_tokens.json',
    Path.cwd() / '.openclaw' / 'workspace' / 'gog_tokens.json',
    Path('/Users/klebergarciaalcatrao/.openclaw/workspace/gog_tokens.json'),
    Path('/Users/klebergarciaalcatrao/lead-crm/gog_tokens.json'),
]

# Health dashboard location
HEALTH_FILE = Path.home() / '.openclaw' / 'workspace' / 'token_health.json'
LOG_FILE = Path.home() / '.openclaw' / 'workspace' / 'token_renewal.log'

def log_message(level: str, message: str):
    """Log a message to both stdout and log file."""
    timestamp = datetime.now(timezone.utc).isoformat()
    log_line = f"[{timestamp}] [{level}] {message}"
    print(log_line)
    
    # Append to log file
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, 'a') as f:
        f.write(log_line + '\n')

def load_tokens():
    """Load tokens from first available location."""
    for candidate in TOKEN_CANDIDATES:
        if candidate.exists():
            try:
                with open(candidate, 'r') as f:
                    tokens = json.load(f)
                # Update the token path to the first found location
                return tokens, candidate
            except Exception as e:
                log_message('WARNING', f"Could not load tokens from {candidate}: {e}")
                continue
    
    log_message('ERROR', f"No token file found in any of: {TOKEN_CANDIDATES}")
    return None, None

def save_tokens(tokens, path):
    """Save tokens back to file."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w') as f:
        json.dump(tokens, f, indent=2)
    log_message('INFO', f"Tokens saved to {path}")

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
        elif remaining < timedelta(hours=24):
            return 'soon', hours_remaining
        else:
            return 'healthy', hours_remaining
    except Exception as e:
        log_message('ERROR', f"Could not parse expiry: {e}")
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
        
        # Add additional token info if available
        if 'scope' in payload:
            tokens['scope'] = payload['scope']
        tokens['token_type'] = payload.get('token_type', 'Bearer')
        tokens['token_expires_in'] = exp_in
        tokens['token_obtained_at'] = now_utc.isoformat()
        
        return True, payload
    except Exception as e:
        log_message('ERROR', f"Token refresh failed: {e}")
        return False, str(e)

def update_health_dashboard(status, hours_remaining, action_taken='', error=''):
    """Update the token health dashboard."""
    health = {
        'status': status,
        'expiry_hours_remaining': round(hours_remaining, 2),
        'last_check': datetime.now(timezone.utc).isoformat(),
        'action_taken': action_taken,
        'error': error,
        'auto_refresh_enabled': True,
        'next_check_suggested': (datetime.now(timezone.utc) + timedelta(minutes=30)).isoformat()
    }
    
    HEALTH_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(HEALTH_FILE, 'w') as f:
        json.dump(health, f, indent=2)
    
    return health

def trigger_notification(status: str, message: str):
    """Trigger a notification (could be email, Slack, etc.)."""
    # For now, just log it - can be extended to send actual notifications
    log_message('ALERT', f"STATUS: {status} - {message}")
    
    # Check if we should send a real notification
    # This could be extended to use Gmail API, Slack webhook, etc.

def main():
    """Main token renewal check."""
    log_message('INFO', "=" * 60)
    log_message('INFO', "Starting Google Token Renewal Check")
    log_message('INFO', "=" * 60)
    
    tokens, token_path = load_tokens()
    
    if not tokens:
        log_message('ERROR', "No token file found - cannot proceed")
        update_health_dashboard('missing', 0, 'error', 'No token file found')
        return False
    
    log_message('INFO', f"Token file: {token_path}")
    
    status, hours_remaining = check_token_health(tokens)
    log_message('INFO', f"Token status: {status}, hours remaining: {hours_remaining:.2f}")
    
    # Refresh logic based on status
    needs_refresh = status in ['expired', 'critical', 'warning', 'soon']
    
    if needs_refresh:
        log_message('WARNING', f"Token needs refresh (status: {status})")
        
        success, result = refresh_access_token(tokens)
        
        if success:
            save_tokens(tokens, token_path)
            action = 'refreshed' if status in ['expired', 'critical'] else 'proactive_refresh'
            log_message('INFO', f"Token refreshed successfully. New expiry: {tokens.get('expiry')}")
            
            # Send notification for proactive refresh
            if status in ['warning', 'soon']:
                trigger_notification('refreshed', f"Token proactively refreshed. Status was {status} ({hours_remaining:.1f}h remaining)")
            
            health = update_health_dashboard('healthy', 1.0, action, '')
        else:
            log_message('ERROR', f"Token refresh failed: {result}")
            health = update_health_dashboard('refresh_failed', hours_remaining, 'failed', str(result))
            trigger_notification('error', f"Token refresh failed: {result}")
            return False
    else:
        # Token is healthy, just update dashboard
        health = update_health_dashboard(status, hours_remaining, 'none', '')
        log_message('INFO', "Token is healthy, no refresh needed")
    
    log_message('INFO', f"Health dashboard updated: {health}")
    log_message('INFO', "Token renewal check complete")
    
    return True

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)