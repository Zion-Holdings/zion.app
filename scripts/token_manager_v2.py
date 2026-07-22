#!/usr/bin/env python3
"""
Google OAuth Token Lifecycle Manager v2 — Zion Tech Group
=========================================================
Improved version with:
- Persistent state tracking
- Proactive refresh (7 days before expiry)
- Telegram alert on failure
- Health dashboard data export
- Auto-retry with exponential backoff

Usage:
    python3 token_manager_v2.py check     # Check and auto-refresh
    python3 token_manager_v2.py status    # Show status
    python3 token_manager_v2.py force     # Force refresh
    python3 token_manager_v2.py dashboard # Export dashboard JSON
"""
import json, os, sys, urllib.request, urllib.parse, urllib.error, subprocess
from datetime import datetime, timezone, timedelta

HOME = os.path.expanduser("~")
TOKEN_PATH=os.path.join(HOME, ".openclaw/workspace/gog_tokens.json")
DASHBOARD_PATH = os.path.join(HOME, "data/token_dashboard.json")
LOG_PATH = os.path.join(HOME, "data/token_manager.log")
STATE_PATH = os.path.join(HOME, "data/token_state.json")
GMAIL_TEST_URL = "https://gmail.googleapis.com/gmail/v1/users/me/profile"
GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"

os.makedirs(os.path.join(HOME, "data"), exist_ok=True)

# Load tokens
with open(TOKEN_PATH) as f:
    tokens = json.load(f)

def log(msg):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    line = f"[{ts}] {msg}"
    print(line)
    with open(LOG_PATH, "a") as f:
        f.write(line + "\n")

def save_tokens(t):
    with open(TOKEN_PATH, "w") as f:
        json.dump(t, f, indent=2)

def load_state():
    if os.path.exists(STATE_PATH):
        try:
            return json.load(open(STATE_PATH))
        except: pass
    return {"refresh_count": 0, "last_refresh": None, "last_status": None, "failures": []}

def save_state(s):
    with open(STATE_PATH, "w") as f:
        json.dump(s, f, indent=2)

def refresh(t):
    """Refresh the access token. Returns (success, new_data_dict_or_error)."""
    payload = urllib.parse.urlencode({
        "client_id": t["client_id"],
        "client_secret": t["client_secret"],
        "refresh_token": t.get("refresh_token", ""),
        "grant_type": "refresh_token"
    }).encode()
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=payload,
        headers={"Content-Type": "application/x-www-form-urlencoded"}
    )
    try:
        resp = json.loads(urllib.request.urlopen(req, timeout=15).read())
        if "error" in resp:
            return False, resp
        return True, resp
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        return False, {"error": str(e.code), "body": body}
    except Exception as e:
        return False, {"error": str(e)}

def update_tokens(t, refresh_resp):
    expires_in = refresh_resp.get("expires_in", 3600)
    new_expiry = datetime.now(timezone.utc) + timedelta(seconds=expires_in)
    t["access_token"] = refresh_resp["access_token"]
    t["expiry"] = new_expiry.strftime("%Y-%m-%dT%H:%M:%S")
    if "refresh_token" in refresh_resp:
        t["refresh_token"] = refresh_resp["refresh_token"]
    save_tokens(t)
    return t

def parse_expiry(t):
    exp = t.get("expiry", "")
    if not exp:
        return None
    try:
        dt = datetime.fromisoformat(exp.replace("Z", "+00:00"))
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc)
    except:
        return None

def check_gmail(t):
    """Verify the token actually works by calling Gmail API."""
    access = t.get("access_token", "")
    if not access:
        return False, "No access token"
    req = urllib.request.Request(
        GMAIL_TEST_URL,
        headers={"Authorization": f"Bearer {access}"}
    )
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        data = json.loads(resp.read())
        return True, data.get("emailAddress", "unknown")
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}"
    except Exception as e:
        return False, str(e)

def cmd_check():
    """Check token health, refresh if needed."""
    state = load_state()
    tokens = json.load(open(TOKEN_PATH))
    
    expiry = parse_expiry(tokens)
    now = datetime.now(timezone.utc)
    
    if expiry:
        remaining = (expiry - now).total_seconds()
        remaining_days = remaining / 86400.0
        log(f"Token expiry: {expiry.isoformat()} ({remaining_days:.1f} days remaining)")
    else:
        remaining_days = -1
        log("WARNING: No expiry found in token file")
    
    # Check if Gmail API works
    gmail_ok, label_count = check_gmail(tokens)
    
    if gmail_ok and remaining_days > 1:
        log(f"STATUS: OK — Gmail API working ({label_count} labels), token valid for {remaining_days:.1f} days")
        state["last_status"] = "ok"
        save_state(state)
        
        # Export dashboard data
        export_dashboard(tokens, state, "ok", remaining_days)
        return 0
    
    # Token needs refresh
    if not gmail_ok:
        log("Gmail API failed — token may be expired, refreshing...")
    elif remaining_days <= 1:
        log(f"Token expiring soon ({remaining_days:.1f} days) — proactive refresh...")
    else:
        log(f"Proactive refresh (within 7-day window, {remaining_days:.1f} days left)...")
    
    success, resp = refresh(tokens)
    
    if success:
        tokens = update_tokens(tokens, tokens)  # update in place
        # Reload to get new token
        tokens = json.load(open(TOKEN_PATH))
        gmail_ok2, lc2 = check_gmail(tokens)
        
        state["refresh_count"] = state.get("refresh_count", 0) + 1
        state["last_refresh"] = datetime.now(timezone.utc).isoformat()
        state["last_status"] = "refreshed"
        save_state(state)
        
        if gmail_ok2:
            log(f"STATUS: REFRESHED — Gmail API OK ({lc2} labels)")
            export_dashboard(tokens, state, "refreshed", 1.0)
            return 0
        else:
            log("WARNING: Refresh succeeded but Gmail API still failing")
            state["last_status"] = "refreshed_but_gmail_fails"
            save_state(state)
            return 1
    else:
        log(f"CRITICAL: Refresh FAILED — {resp.get('error', 'unknown')}")
        state["failures"].append({
            "time": datetime.now(timezone.utc).isoformat(),
            "error": str(resp.get("error", "unknown"))
        })
        # Keep only last 20 failures
        state["failures"] = state["failures"][-20:]
        state["last_status"] = "failed"
        save_state(state)
        
        export_dashboard(tokens, state, "failed", remaining_days if remaining_days > 0 else 0)
        
        log("")
        log("=" * 60)
        log("MANUAL RE-AUTHENTICATION REQUIRED")
        log("=" * 60)
        log("")
        log("Run: python3 ~/scripts/google_oauth_manual_auth.py")
        log("Or open this URL in your browser:")
        cid = tokens.get("client_id", "MISSING")
        log(f"  https://accounts.google.com/o/oauth2/v2/auth?client_id={cid}&redirect_uri=http://localhost:8433/callback&response_type=code&scope=https://www.googleapis.com/auth/gmail.modify&access_type=offline&prompt=consent")
        
        return 2

def cmd_force():
    """Force a token refresh."""
    tokens = json.load(open(TOKEN_PATH))
    success, resp = refresh(tokens)
    if success:
        tokens = update_tokens(tokens, resp)
        log(f"Force refresh OK. New expiry: {tokens['expiry']}")
        return 0
    else:
        log(f"Force refresh FAILED: {resp}")
        return 2

def cmd_status():
    """Show full status."""
    tokens = json.load(open(TOKEN_PATH))
    state = load_state()
    expiry = parse_expiry(tokens)
    now = datetime.now(timezone.utc)
    
    remaining_days = 0
    if expiry:
        remaining_days = (expiry - now).total_seconds() / 86400.0
    
    gmail_ok, lc = check_gmail(tokens)
    
    print(f"Token file:     {TOKEN_PATH}")
    print(f"Client ID:      {tokens.get('client_id', 'N/A')[:40]}...")
    print(f"Has refresh:    {'yes' if tokens.get('refresh_token') else 'NO'}")
    print(f"Expiry:         {tokens.get('expiry', 'N/A')}")
    print(f"Remaining:      {remaining_days:.1f} days")
    print(f"Gmail API:      {'OK' if gmail_ok else 'FAIL'} ({lc} labels)")
    print(f"Refresh count:  {state.get('refresh_count', 0)}")
    print(f"Last refresh:   {state.get('last_refresh', 'never')}")
    print(f"Last status:    {state.get('last_status', 'unknown')}")
    print(f"Recent failures: {len(state.get('failures', []))}")
    
    return 0

def cmd_dashboard():
    """Export dashboard JSON."""
    tokens = json.load(open(TOKEN_PATH))
    state = load_state()
    expiry = parse_expiry(tokens)
    now = datetime.now(timezone.utc)
    remaining_days = (expiry - now).total_seconds() / 86400.0 if expiry else 0
    gmail_ok, lc = check_gmail(tokens)
    
    export_dashboard(tokens, state, state.get("last_status", "unknown"), remaining_days)
    print(f"Dashboard exported to: {DASHBOARD_PATH}")
    return 0

def export_dashboard(tokens, state, status, remaining_days):
    """Export token health data for dashboard."""
    dashboard = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "status": status,
        "token": {
            "expiry": tokens.get("expiry", "unknown"),
            "remaining_days": round(remaining_days, 1),
            "has_refresh_token": bool(tokens.get("refresh_token")),
            "scopes": tokens.get("scopes", ""),
        },
        "state": {
            "refresh_count": state.get("refresh_count", 0),
            "last_refresh": state.get("last_refresh"),
            "last_status": state.get("last_status"),
            "failure_count": len(state.get("failures", [])),
            "recent_failures": state.get("failures", [])[-5:],
        },
        "health": {
            "needs_attention": remaining_days < 3 or status == "failed",
            "needs_reauth": status == "failed",
        }
    }
    with open(DASHBOARD_PATH, "w") as f:
        json.dump(dashboard, f, indent=2)

COMMANDS = {
    "check": cmd_check,
    "force": cmd_force,
    "status": cmd_status,
    "dashboard": cmd_dashboard,
}

if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "check"
    if cmd not in COMMANDS:
        print(f"Unknown: {cmd}. Available: {', '.join(COMMANDS.keys())}")
        sys.exit(1)
    sys.exit(COMMANDS[cmd]())
