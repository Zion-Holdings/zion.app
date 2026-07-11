import urllib.request, urllib.error

paths = [
    "/",
    "/about/",
    "/contact/",
    "/services/",
    "/pricing/",
    "/dashboard/",
    "/configurator/",
    "/status/",
    "/automation/",
    "/blog/",
    "/blog/cyber-incident-response-retainer-ready-before-breach/",
]

fails = []
for p in paths:
    try:
        r = urllib.request.urlopen("https://ziontechgroup.com" + p, timeout=30)
        status = r.status
        content_type = r.headers.get("content-type")
        r.close()
    except urllib.error.HTTPError as e:
        status = e.code
        content_type = e.headers.get("content-type")
    except Exception as e:
        fails.append({"route": p, "status": "ERROR", "content_type": str(e)})
        continue

    if status != 200:
        fails.append({"route": p, "status": status, "content_type": content_type})

print(str(fails))
