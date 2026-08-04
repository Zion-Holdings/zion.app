#!/usr/bin/env python3
import base64
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path

REPO = "Zion-support/zion-support.github.io"
BRANCH = "gh-pages"
TOKEN = Path.home().joinpath(".gh_token").read_text().strip()
ROOT = Path("/c/Users/Zion/tmp/zion-clone-clean/repo")
BASE_URL = f"https://api.github.com/repos/{REPO}/contents"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

SKIP = {".git", "node_modules", ".next", "app", "components", "content-loop", "lib", "scripts", ".github"}

def gh(method, url, data=None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(url, data=body, method=method)
    req.add_header("Authorization", f"token {TOKEN}")
    req.add_header("Accept", "application/vnd.github+json")
    if body:
        req.add_header("Content-Type", "application/json")
    try:
        r = urllib.request.urlopen(req, timeout=20, context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

def sha(path):
    url = f"{BASE_URL}/{path.as_posix()}?ref={BRANCH}"
    c, d = gh("GET", url)
    return d.get("sha") if c == 200 else None

def upload(path: Path):
    rel = path.as_posix()
    payload = {"message": f"deploy: {rel}", "content": base64.b64encode(path.read_bytes()).decode("ascii"), "branch": BRANCH}
    s = sha(path)
    if s:
        payload["sha"] = s
        action = "update"
    else:
        action = "create"
    c, d = gh("PUT", f"{BASE_URL}/{rel}", payload)
    ok = c in (200, 201)
    print(f"[{'ok' if ok else 'FAIL'}] {action} {rel} -> {c}")
    return ok

def include(p: Path):
    if any(part in SKIP for part in p.parts):
        return False
    return p.is_file()

def main():
    files = sorted([p for p in ROOT.rglob("*") if include(p)])
    print(f"Files to deploy: {len(files)}")
    fails = []
    for f in files:
        if not upload(f):
            fails.append(f)
    print(f"Done. Success: {len(files)-len(fails)}/{len(files)}")
    if fails:
        print("Failures:")
        for f in fails:
            print(" -", f)

if __name__ == "__main__":
    main()
