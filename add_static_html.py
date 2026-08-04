import os, json, urllib.request, ssl
from pathlib import Path

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
with open('C:/Users/Zion/.gh_token','r') as f:
    TOKEN=f.read().strip()
REPO="Zion-support/zion-support.github.io"
BASE=f"https://api.github.com/repos/{REPO}"
HEADERS={"Authorization":f"token {TOKEN}","Accept":"application/vnd.github+json","Content-Type":"application/json"}

def gh(method,url,data=None):
    body=data if isinstance(data,bytes) else (json.dumps(data).encode() if data is not None else None)
    req=urllib.request.Request(url,data=body,method=method)
    for k,v in HEADERS.items(): req.add_header(k,v)
    try:
        r=urllib.request.urlopen(req,timeout=20,context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())

TMPL='''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="robots" content="index,follow" />
  <meta name="description" content="{desc}" />
  <link rel="canonical" href="https://ziontechgroup.com{slug}/" />
  <link rel="stylesheet" href="/styles.css"/>
  <style>
    :root {{ color-scheme: dark; }}
    body {{ background:#020617; color:#e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }}
    .container {{ max-width: 1100px; margin: 0 auto; padding: 24px; }}
    .hero {{ padding: 96px 0 64px; }}
    h1 {{ font-size: 44px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }}
    .grid {{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-top: 36px; }}
    .card {{ border:1px solid #334155; border-radius:12px; padding:18px; background:#0b1220; }}
    .cta {{ display:inline-flex; align-items:center; gap:8px; margin-top:24px; padding:14px 18px; border-radius:8px; background:#2563eb; color:#fff; text-decoration:none; font-weight:600; }}
    .footer {{ margin-top: 64px; padding: 24px 0; color:#64748b; font-size:13px; }}
  </style>
</head>
<body>
  <main class="container">
    <section class="hero">
      <h1>{title}</h1>
      <p class="lead">{desc}</p>
      <a class="cta" href="/contact/">Get Your Custom Proposal →</a>
      <div class="grid">
        <div class="card"><h3>Strategy</h3><p>Assessment, roadmap, and prioritization aligned to your business outcomes.</p></div>
        <div class="card"><h3>Implementation</h3><p>Delivery with modern tooling, automation, and production-ready guardrails.</p></div>
        <div class="card"><h3>Operations</h3><p>Monitoring, optimization, and support to keep systems reliable and performant.</p></div>
      </div>
    </section>
    <footer class="footer">© <span id="y"></span> Zion Tech Group. <a href="/services/">Services</a> · <a href="/contact/">Contact</a></footer>
  </main>
  <script>document.getElementById('y').textContent = new Date().getFullYear();</script>
</body>
</html>
'''

items = []
for kind in ['blog','services']:
    base = Path('app')/kind
    if not base.exists():
        continue
    for d in sorted(base.iterdir()):
        if not d.is_dir() or not (d/'page.tsx').exists():
            continue
        slug = d.name
        title = slug.replace('-', ' ').replace('2026', '2026').strip()
        title = ' '.join(w.capitalize() if w not in ['And','Or','With','For','To','A','An','The','Of','In','On','At','From','By'] else w for w in title.split())
        desc = f"Zion Tech Group {title}."
        html = TMPL.format(title=title, desc=desc, slug=f"/{kind}/{slug}/")
        out = Path('public')/kind/slug/'index.html'
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding='utf-8')
        items.append(str(out))

print('wrote', len(items), 'files')
print('sample:', items[:5])

# Get latest main commit and create blobs for a few sample pages plus the first few pages
c, ref = gh("GET", f"{BASE}/git/refs/heads/main")
latest = ref["object"]["sha"]
print('latest main:', latest[:12])

tree_items = []
# Add a small batch of pages as a proof-of-concept: first 10 blog + first 10 services
count=0
for kind in ['blog','services']:
    base = Path('app')/kind
    if not base.exists():
        continue
    for d in sorted(base.iterdir()):
        if not d.is_dir() or not (d/'page.tsx').exists():
            continue
        slug=d.name
        out = Path('public')/kind/slug/'index.html'
        if not out.exists():
            continue
        content = out.read_text(encoding='utf-8')
        blob_payload = json.dumps({"content": content, "encoding": "utf-8"}).encode()
        c, blob = gh("POST", f"{BASE}/git/blobs", blob_payload)
        if c in (200,201):
            tree_items.append({"path": f"public/{kind}/{slug}/index.html", "mode":"100644","type":"blob","sha":blob["sha"]})
            count += 1
        if count >= 20:
            break
    if count >= 20:
        break

print('blobs prepared:', count)

# Create tree
tree_payload = json.dumps({"base_tree": latest, "tree": tree_items}).encode()
c, tree = gh("POST", f"{BASE}/git/trees", tree_payload)
print('tree:', c, tree.get('sha','')[:12])

commit_payload = json.dumps({"message":"chore: add static HTML pages for new blog/services cycles","tree":tree["sha"],"parents":[latest]}).encode()
c, commit = gh("POST", f"{BASE}/git/commits", commit_payload)
print('commit:', c, commit.get('sha','')[:12])

ref_payload = json.dumps({"sha": commit["sha"], "force": True}).encode()
c, result = gh("PATCH", f"{BASE}/git/refs/heads/main", ref_payload)
print('update main:', c, result.get('message','ok'))
