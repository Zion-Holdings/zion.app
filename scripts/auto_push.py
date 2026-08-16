#!/usr/bin/env python3
"""Stage, commit, and push all fixes to git."""
import subprocess
import time
import os

ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"

def run(cmd, timeout=120):
    return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=timeout)

# Stage all modified and new files
result = run(["git", "add", "-A"], timeout=120)
print(f"git add: {result.returncode}")

# Commit
result = run(["git", "commit", "-m", "fix: resolve broken links, redirect unbuilt services, add content"], timeout=60)
if "nothing to commit" in result.stdout:
    print("No new changes to commit")
else:
    print(f"Commit: {result.stdout[:200]}")

# Try pushing with multiple attempts
for attempt in range(5):
    result = run(["git", "push", "origin", "main"], timeout=300)
    if result.returncode == 0:
        print(f"✅ PUSH SUCCESS")
        break
    else:
        if "fetch first" in result.stderr or "Updates were rejected" in result.stderr:
            print(f"Attempt {attempt+1}: Remote ahead, pulling...")
            # Stash, pull, pop
            run(["git", "stash", "-u"], timeout=60)
            pull = run(["git", "pull", "origin", "main", "--no-edit"], timeout=120)
            print(f"  Pull: {pull.stdout[:200]} | {pull.stderr[:200]}")
            run(["git", "stash", "pop"], timeout=60)
            time.sleep(2)
        else:
            print(f"Push failed: {result.stderr[:300]}")
            break
else:
    print("❌ FAILED to push after 5 attempts")
