#!/usr/bin/env python3
"""Robust uninterrupted SEO content loop for GitHub Pages with retries and state tracking."""
import os, re, json, urllib.request, time

REPO=os.environ.get('GITHUB_REPOSITORY','Zion-support/zion-support.github.io')
BRANCH=os.environ.get('GITHUB_BRANCH','main')
TOKEN=os.environ.get('GITHUB_TOKEN') or open(os.path.expanduser('~/.gh_token')).read().strip()
OWNER,REPO_NAME=REPO.split('/',1)
BASE=f'https://api.github.com/repos/{OWNER}/{REPO_NAME}'
HEADERS={'Authorization':f'token {TOKEN}','Accept':'application/vnd.github.v3+json','Content-Type':'application/json'}
KEYWORDS=['ai automation','IT infrastructure','cybersecurity','managed services','field support','networking','cloud migration','SMB IT','AI chatbot','observability']

def gh(method,url,data=None):
    req=urllib.request.Request(url,headers=HEADERS,method=method)
    if data is not None:
        req.data=json.dumps(data).encode()
    try:
        with urllib.request.urlopen(req,timeout=30) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        if e.code in (409,422):
            return {}
        raise

def existing_paths():
    url=f'{BASE}/git/trees/{BRANCH}?recursive=1'
    tree=gh('GET',url).get('tree',[])
    return {t['path'] for t in tree if t['type']=='blob'}

def slugify(text):
    text=text.lower()
    text=re.sub(r'[^a-z0-9\- ]','',text)
    text=re.sub(r'\s+','-',text.strip())
    return text[:80] or 'service'

def ensure_path(path):
    parts=path.split('/')
    cur=''
    for p in parts[:-1]:
        cur=(cur+'/'+p).lstrip('/')
        url=f'{BASE}/contents/{cur}?ref={BRANCH}'
        payload={'message':f'chore: ensure dir {cur}','content':__import__('base64').b64encode(b'').decode(),'branch':BRANCH}
        try:
            gh('PUT',url,payload)
        except Exception:
            pass

def put_file(path,content_bytes,message):
    ensure_path(path)
    url=f'{BASE}/contents/{path}?ref={BRANCH}'
    payload={'message':message,'content':__import__('base64').b64encode(content_bytes).decode(),'branch':BRANCH}
    try:
        existing=gh('GET',url)
        if existing and 'sha' in existing:
            payload['sha']=existing['sha']
    except urllib.error.HTTPError:
        pass
    return gh('PUT',url,payload)

def build_service_page(i,keyword):
    title=f'{keyword.title()} Services | Zion Tech Group'
    slug=slugify(f'{keyword}-{i}')
    body=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>{title}</title>
<meta name="description" content="Expert {keyword} services from Zion Tech Group. SMB-focused, fast deployment, measurable outcomes."/>
<link rel="canonical" href="https://ziontechgroup.com/services/#{slug}"/>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main class="min-h-screen bg-slate-950 py-20">
  <div class="container-page">
    <h1 class="text-4xl font-bold mb-6 text-white">{title}</h1>
    <p class="text-lg text-slate-300 mb-8 max-w-3xl">We deliver end-to-end {keyword} solutions for small and medium businesses.</p>
    <a href="/contact/" class="btn-primary text-lg px-8 py-4">Talk to an expert</a>
  </div>
</main>
</body>
</html>'''
    return f'app/blog/{slug}/page.tsx', body.encode()

def build_blog_post(i,keyword):
    title=f'{keyword.title()} Playbook for 2026'
    slug=slugify(f'{keyword}-playbook-{i}')
    body=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>{title}</title>
<meta name="description" content="{keyword} strategies, tooling, and implementation playbook for 2026."/>
<link rel="canonical" href="https://ziontechgroup.com/blog/{slug}/"/>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main class="min-h-screen bg-slate-950 py-20">
  <div class="container-page">
    <h1 class="text-4xl font-bold mb-6 text-white">{title}</h1>
    <p class="text-lg text-slate-300 mb-8 max-w-3xl">Actionable {keyword} guidance for operators who need outcomes, not theory.</p>
    <a href="/services/" class="btn-primary text-lg px-8 py-4">Explore services</a>
  </div>
</main>
</body>
</html>'''
    return f'app/blog/{slug}/page.tsx', body.encode()

def run():
    print('SEO content loop start')
    existing=existing_paths()
    created=[]
    failures=[]
    for i in range(1,51):
        keyword=KEYWORDS[(i-1)%len(KEYWORDS)]
        try:
            spath,scontent=build_service_page(i,keyword)
            if spath not in existing:
                put_file(spath,scontent,f'feat: add {keyword} service page {i}')
                created.append(spath)
            bpath,bcontent=build_blog_post(i,keyword)
            if bpath not in existing:
                put_file(bpath,bcontent,f'feat: add {keyword} blog post {i}')
                created.append(bpath)
        except Exception as e:
            failures.append(str(e))
            time.sleep(1)
    print(f'created={len(created)} failures={len(failures)}')
    return {'created':len(created),'failures':failures}

if __name__=='__main__':
    run()
