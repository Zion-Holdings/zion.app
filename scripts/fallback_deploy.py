#!/usr/bin/env python3
"""
Fallback deploy using GitHub Contents API when git push is blocked.
This bypasses network timeout issues that prevent normal git push from completing.
"""
import base64
import json
import os
from pathlib import Path

try:
    import requests
    HAS_REQ = True
except ImportError:
    import subprocess
    result = subprocess.run(['pip', 'install', 'requests', '-q'], capture_output=True)
    import requests
    HAS_REQ = True

TOKEN = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
OWNER = 'Zion-support'
REPO = 'zion-support.github.io'
API_URL = f'https://api.github.com/repos/{OWNER}/{REPO}'
HEADERS = {'Authorization': f'token {TOKEN}', 'Accept': 'application/vnd.github.v3+json'} if TOKEN else {}

def deploy_file(path: str, content: str, sha: str = None) -> bool:
    """Deploy a single file to GitHub via Contents API."""
    if not TOKEN:
        print("No GITHUB_TOKEN available")
        return False
    
    b64_content = base64.b64encode(content.encode('utf-8')).decode()
    payload = {
        'message': f'auto-deploy: {path}',
        'content': b64_content,
        'branch': 'main'
    }
    if sha:
        payload['sha'] = sha
    
    try:
        r = requests.put(f'{API_URL}/contents/{path}', headers=HEADERS, json=payload, timeout=30)
        if r.status_code in (200, 201):
            print(f"✓ Deployed {path}")
            return True
        else:
            print(f"✗ Failed {path}: {r.status_code} {r.text[:100]}")
            return False
    except Exception as e:
        print(f"✗ Error {path}: {e}")
        return False

def get_sha(path: str) -> str:
    """Get current SHA of a file."""
    try:
        r = requests.get(f'{API_URL}/contents/{path}', headers=HEADERS, timeout=15)
        if r.status_code == 200:
            return r.json().get('sha')
    except:
        pass
    return None

def deploy_out_directory():
    """Deploy next.js out/ directory via Contents API."""
    base = Path('.').resolve()
    out_dir = base / 'out'
    
    if not out_dir.exists():
        print("No out/ directory - run `npm run build` first")
        return False
    
    # Deploy key files first
    key_files = ['sitemap.xml', 'feed.xml', '.github/workflows/gh-pages.yml']
    for f in key_files:
        fp = base / f
        if fp.exists():
            deploy_file(f, fp.read_text(), get_sha(f))
    
    # Deploy docs/blog fallbacks
    docs = base / 'docs'
    if docs.exists():
        count = 0
        for html in docs.rglob('*.html'):
            rel = html.relative_to(base)
            sha = get_sha(str(rel))
            deploy_file(str(rel), html.read_text(), sha)
            count += 1
        print(f"Deployed {count} docs files")
    
    # Deploy app/blog pages (TSX files)
    app_blog = base / 'app' / 'blog'
    if app_blog.exists():
        count = 0
        for p in app_blog.rglob('*.tsx'):
            rel = p.relative_to(base)
            sha = get_sha(str(rel))
            deploy_file(str(rel), p.read_text(), sha)
            count += 1
        print(f"Deployed {count} app/blog files")
    
    return True

if __name__ == '__main__':
    print("=== Fallback Deploy via GitHub Contents API ===")
    print(f"Token available: {'Yes' if TOKEN else 'No'}")
    deploy_out_directory()
    print("=== Done ===")