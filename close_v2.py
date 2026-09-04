import subprocess, json, time, sys
base='https://api.github.com/repos/Zion-support/zion-support.github.io/issues'
closed=0; page=1
token=subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
hdr=['-s','-H','Authorization: Bearer '+token,'-H','Accept: application/vnd.github+json','-H','X-GitHub-Api-Version: 2022-11-28']
while page<=20:
    print('Page %d...'%page); sys.stdout.flush()
    ids=json.loads(subprocess.run(['curl']+hdr+[base+'?state=open&per_page=100&page='+str(page)],capture_output=True,text=True).stdout)
    if not ids: break
    for i in ids:
        if 'pull_request' in i: continue
        n=i['number']
        for attempt in range(3):
            try:
                r=subprocess.run(['curl']+['-s','-X','PATCH',base+'/'+str(n)]+hdr+['-d','{"state":"closed"}'],capture_output=True,text=True)
                if '"state":"closed"' in r.stdout or r.returncode==0:
                    closed+=1
                    sys.stdout.write('\r%d'%closed); sys.stdout.flush()
                    break
            except: pass
            time.sleep(1)
        time.sleep(0.3)
    page+=1
print('\nDONE closed=%d'%closed)
