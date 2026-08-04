import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('C:/Users/Zion/.gh_token', 'r') as f:
    TOKEN = f.read().strip()

REPO = "Zion-support/zion-support.github.io"
BASE = f"https://api.github.com/repos/{REPO}"

def gh(method, url, data=None):
    body = data if data is not None and isinstance(data, bytes) else (json.dumps(data).encode() if data is not None else None)
    req = urllib.request.Request(url, data=body, method=method)
    req.add_header("Authorization", f"token {TOKEN}")
    req.add_header("Accept", "application/vnd.github+json")
    if body:
        req.add_header("Content-Type", "application/json")
    try:
        r = urllib.request.urlopen(req, timeout=15, context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

# Get latest gh-pages commit
c, data = gh("GET", f"{BASE}/git/refs/heads/gh-pages")
latest_sha = data["object"]["sha"]
print("latest_gh_pages_sha:", latest_sha[:12])

# Read files from main
files = {}
for p in ["docs/search/index.html", "docs/api-development/index.html", 
          "docs/blockchain-solutions/index.html", "docs/analytics/index.html"]:
    c2, d2 = gh("GET", f"{BASE}/contents/{p}?ref=main")
    if c2 == 200:
        import base64
        files[p] = base64.b64decode(d2["content"]).decode("utf-8", errors="ignore")
        print(f"Read {p}: {len(files[p])} bytes")

# Read _redirects from main
c2, d2 = gh("GET", f"{BASE}/contents/_redirects?ref=main")
if c2 == 200:
    import base64
    files["_redirects"] = base64.b64decode(d2["content"]).decode("utf-8", errors="ignore")
    print(f"Read _redirects: {len(files['_redirects'])} bytes")

# Create blobs
tree_items = []
for path, content in files.items():
    blob_payload = json.dumps({"content": content, "encoding": "utf-8"}).encode()
    c2, blob = gh("POST", f"{BASE}/git/blobs", blob_payload)
    if c2 in (200, 201):
        tree_items.append({"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        print(f"Blob {path}: {blob['sha'][:12]}")

# Create tree
tree_payload = json.dumps({"base_tree": latest_sha, "tree": tree_items}).encode()
c2, tree = gh("POST", f"{BASE}/git/trees", tree_payload)
print("Tree SHA:", tree["sha"][:12])

# Create commit
commit_payload = json.dumps({
    "message": "fix: add missing docs pages and redirects to gh-pages",
    "tree": tree["sha"],
    "parents": [latest_sha]
}).encode()
c2, commit = gh("POST", f"{BASE}/git/commits", commit_payload)
print("Commit SHA:", commit["sha"][:12])

# Update gh-pages ref
ref_payload = json.dumps({"sha": commit["sha"], "force": True}).encode()
c2, result = gh("PATCH", f"{BASE}/git/refs/heads/gh-pages", ref_payload)
print("Update gh-pages:", c2, result.get("message", "ok"))
