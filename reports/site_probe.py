import requests, json
from urllib.parse import urljoin
base='https://ziontechgroup.com'
paths=['/','/services/','/tools/','/contact/','/pricing/','/solutions/','/blog/','/about/']
rows=[]
for p in paths:
    try:
        r=requests.get(urljoin(base,p),timeout=20,allow_redirects=True)
        rows.append({'path':p,'status':r.status_code,'final_url':r.url,'content_length':len(r.text),'ct':r.headers.get('content-type','')})
    except Exception as e:
        rows.append({'path':p,'status':'ERR','error':str(e)})
print(json.dumps(rows,indent=2))
