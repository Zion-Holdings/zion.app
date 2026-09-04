import subprocess, json, time, sys
base='https://api.github.com/repos/Zion-support/zion-support.github.io/issues'
closed=0; page=1
while True:
    token=subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
    r=subprocess.run(['curl','-s','-H','Authorization: Bearer '+token,'-H','Accept: application/vnd.github+json','-H','X-GitHub-Api-Version: 2022-11-28',base+'?state=open&per_page=100&page='+str(page)],capture_output=True,text=True)
    try:
        data=json.loads(r.stdout)
    except json.JSONDecodeError:
        print('JSON decode error on page', page, file=sys.stderr)
        break
    if not data: break
    print('Page %d: %d'%(page,len(data)))
    for i in data:
        if 'pull_request' in i: continue
        n=i['number']
        subprocess.run(['curl','-s','-X','PATCH',base+'/'+str(n),'-H','Authorization: Bearer '+token,'-H','Accept: application/vnd.github+json','-H','X-GitHub-Api-Version: 2022-11-28','-d','{"state":"closed"}'],capture_output=True,text=True)
        closed+=1
    page+=1
    time.sleep(1)
print('DONE closed=%d'%closed)
