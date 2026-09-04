import subprocess, json, time
repo='Zion-support/zion-support.github.io'
base='https://api.github.com/repos/'+repo+'/issues'
closed=0; failed=0; page=1
while True:
    token=subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
    r=subprocess.run(['curl','-s','-H','Authorization: Bearer '+token,'Accept: application/vnd.github+json','-H','X-GitHub-Api-Version: 2022-11-28',base+'?state=open&per_page=100&page='+str(page)],capture_output=True,text=True)
    if r.returncode!=0: break
    data=json.loads(r.stdout)
    if not data: break
    print('Page %d: %d issues' % (page,len(data)))
    for i in data:
        n=i['number']
        token=subprocess.run(['gh','auth','token'],capture_output=True,text=True).stdout.strip()
        p=subprocess.run(['curl','-s','-X','PATCH',base+'/'+str(n),'-H','Authorization: Bearer '+token,'Accept: application/vnd.github+json','-H','X-GitHub-Api-Version: 2022-11-28','-d','{"state":"closed"}'],capture_output=True,text=True)
        if 'closed' in p.stdout: closed+=1
        else: failed+=1
    time.sleep(2)
    page+=1
    if page>5: break
print('DONE closed=%d failed=%d' % (closed,failed))
