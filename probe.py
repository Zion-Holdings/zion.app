#!/usr/bin/env python3
import urllib.request, urllib.error, urllib.parse, re, os, json, sys
BASE='https://ziontechgroup.com'
SEEDS=['/','/services/','/tools/','/contact/','/sitemap.xml']
candidates=set()
for seed in SEEDS:
    target=BASE+seed
    try:
        req=urllib.request.Request(target, headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            html=r.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print('FETCH', seed, 'FAILED', e, file=sys.stderr)
        continue
    print('FETCH', seed, f'HTTP OK {len(html)} bytes', file=sys.stderr)
    for m in re.finditer(r'href=["\'](https://ziontechgroup\.com/[^"#\?]+)["\']', html):
        candidates.add(m.group(1).rstrip('/'))
    for m in re.finditer(r'href=["\'](/[^"#]+)["\']', html):
        candidates.add(BASE+m.group(1).rstrip('/'))
    for m in re.finditer(r'src=["\'](https://ziontechgroup\.com/[^"#\?]+)["\']', html):
        candidates.add(m.group(1).rstrip('/'))
print('Unique candidates:', len(candidates), file=sys.stderr)
# prune/filter
pruned=set()
for u in candidates:
    if not urllib.parse.urlsplit(u).path: continue
    pruned.add(u)
# limit to 250
pruned=sorted(pruned)[:250]
print('Inspecting', len(pruned), file=sys.stderr)
results=[]
for u in pruned:
    redir=''
    code='000'
    size='0'
    marker='MISSING'
    probe='/tmp/site_probe_'+re.sub(r'[^A-Za-z0-9_-]','_',u)
    try:
        req=urllib.request.Request(u, headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            code=str(r.status)
            size=str(len(r.read()))
            if int(r.status)>=400: pass
            marker='OK'
    except urllib.error.HTTPError as e:
        code=str(e.code)
        marker=str(e.code)
    except Exception as e:
        code='000'
        marker='FAIL'
    if marker in ('OK',) and os.path.exists(probe):
        marker='OK'
    # simpler marker
    if marker=='OK': marker='OK' if int(code)<400 else code
    results.append({'url':u,'status':code,'size':size,'marker':marker,'redirect':redir})
    print(f"{u} {code} size={size}", file=sys.stderr)
print('RESULTS')
print(json.dumps(results, ensure_ascii=False, indent=2))
