import urllib.request, urllib.error
paths=['/','/about/','/contact/','/services/','/pricing/','/dashboard/','/configurator/','/status/','/automation/','/blog/','/blog/cyber-incident-response-retainer-ready-before-breach/']
fails=[]
for p in paths:
    try:
        r=urllib.request.urlopen('https://ziontechgroup.com'+p, timeout=30)
        if r.status != 200:
            fails.append({"route":p,"status":r.status,"content_type":r.headers.get('content-type')})
        r.close()
    except urllib.error.HTTPError as e:
        fails.append({"route":p,"status":e.code,"content_type":e.headers.get('content-type')})
print(fails)
