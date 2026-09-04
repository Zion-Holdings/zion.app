#!/usr/bin/env python3
"""Close all open issues using gh CLI - simple and reliable"""
import subprocess, sys, time

REPO = "Zion-support/zion-support.github.io"

def close_issue(n):
    r = subprocess.run(["gh", "issue", "close", str(n), "--repo", REPO],
                       capture_output=True, text=True)
    if r.returncode == 0:
        return True
    if "rate limit" in r.stderr.lower():
        return "rate_limit"
    return False

page = 1
closed = 0
errors = 0

while True:
    # List open issues page by page
    r = subprocess.run(["gh", "api", f"repos/{REPO}/issues?state=open&per_page=100&page={page}",
                         "--jq", "[.[] | select(.pull_request == null) | .number]"],
                        capture_output=True, text=True)
    
    if r.returncode != 0:
        if "rate limit" in r.stderr.lower():
            print(f"Rate limit on list, sleeping 60s...", flush=True)
            time.sleep(60)
            continue
        print(f"Error listing page {page}: {r.stderr[:200]}", flush=True)
        break
    
    try:
        issues = eval(r.stdout.strip()) if r.stdout.strip() else []
    except:
        try:
            import json
            issues = json.loads(r.stdout) if r.stdout.strip() else []
        except:
            break
    
    if not issues:
        print(f"Page {page}: no more issues - DONE", flush=True)
        break
    
    print(f"Page {page}: {len(issues)} issues", flush=True)
    
    for n in issues:
        result = close_issue(n)
        if result == "rate_limit":
            print("Rate limit, sleeping 120s...", flush=True)
            time.sleep(120)
            result = close_issue(n)
        
        if result:
            closed += 1
        else:
            errors += 1
        
        if closed % 50 == 0 and closed > 0:
            print(f"Progress: {closed} closed, {errors} errors", flush=True)
        
        # Small delay every 10 issues
        if closed % 10 == 0:
            time.sleep(1)
    
    page += 1

print(f"COMPLETE: {closed} closed, {errors} errors")
