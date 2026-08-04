import os
import json
import base64
import urllib.request
import urllib.error
import ssl
from pathlib import Path

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('C:/Users/Zion/.gh_token', 'r') as f:
    TOKEN = f.read().strip()

REPO = "Zion-support/zion-support.github.io"
BASE_URL = f"https://api.github.com/repos/{REPO}"
HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github+json",
    "Content-Type": "application/json"
}

def gh(method, url, data=None):
    body = data if isinstance(data, bytes) else (json.dumps(data).encode() if data is not None else None)
    req = urllib.request.Request(url, data=body, method=method)
    for k, v in HEADERS.items():
        req.add_header(k, v)
    try:
        r = urllib.request.urlopen(req, timeout=20, context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

# Get current _redirects on gh-pages
c, data = gh("GET", f"{BASE_URL}/contents/_redirects?ref=gh-pages")
redirects = base64.b64decode(data["content"]).decode("utf-8", errors="ignore")
print("current _redirects size:", len(redirects))

additions = """
# Additional service mappings
/services/api-development/ /docs/services/api-development/index.html 200
/services/ai-automation/ /docs/services/ai-automation/index.html 200
/services/automation-orchestration-enterprise-2026-12/ /docs/blog/index.html 200
/blog/automation-orchestration-enterprise-2026-12/ /docs/blog/index.html 200
"""

new_redirects = redirects + additions
print("new _redirects size:", len(new_redirects))

# Blob
blob_payload = json.dumps({"content": base64.b64encode(new_redirects.encode("utf-8")).decode("ascii"), "encoding": "base64"}).encode()
c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
print("blob:", c, blob.get("sha", "")[:12])

# Tree
c, ref = gh("GET", f"{BASE_URL}/git/refs/heads/gh-pages")
tree_items = [{"path": "_redirects", "mode": "100644", "type": "blob", "sha": blob["sha"]}]
tree_payload = json.dumps({"base_tree": ref["object"]["sha"], "tree": tree_items}).encode()
c, tree = gh("POST", f"{BASE_URL}/git/trees", tree_payload)
print("tree:", c, tree.get("sha", "")[:12])

# Commit
commit_payload = json.dumps({
    "message": "fix: add missing service/blog redirects on gh-pages",
    "tree": tree["sha"],
    "parents": [ref["object"]["sha"]]
}).encode()
c, commit = gh("POST", f"{BASE_URL}/git/commits", commit_payload)
print("commit:", c, commit.get("sha", "")[:12])

# Update ref
ref_payload = json.dumps({"sha": commit["sha"], "force": True}).encode()
c, result = gh("PATCH", f"{BASE_URL}/git/refs/heads/gh-pages", ref_payload)
print("update:", c, result.get("message", "ok"))

# Trigger workflow
workflow_payload = json.dumps({"ref": "main"}).encode()
c, wf = gh("POST", f"{BASE_URL}/actions/workflows/gh-pages.yml/dispatches", workflow_payload)
print("workflow:", c)
