from urllib.parse import urlparse, urljoin
import requests

def simulate_classify(item):
    url = item.get("url","")
    status = item.get("status","")
    detail = item.get("detail","")
    if status == "error":
        if any(t in detail for t in ("Name or service not known","Unable to connect","getaddrinfo")):
            return "missing page"
        return "external reference error"
    if status.startswith(("1","3")):
        return "stale redirect"
    if status.startswith("4"):
        return "missing page"
    if status.startswith("5"):
        return "external reference error"
    return "missing page"

START="https://ziontechgroup.com"
BASE=urlparse(START).netloc
s=requests.Session(); s.headers.update({"User-Agent":"Mozilla/5.0"})

r=s.get(START, timeout=15)
print("HOMEPAGE", r.status_code, r.headers.get("Content-Type",""))
assert r.status_code==200
assert "text/html" in r.headers.get("Content-Type","").lower()

r2=s.get("https://ziontechgroup.com/pricing", timeout=15, allow_redirects=False)
print("REDIRECT", r2.status_code, r2.headers.get("Location",""))
assert r2.status_code in (301,302)
cat=simulate_classify({"url":START,"status":str(r.status_code),"detail":""})
print("HOMEPAGE_CLASS",cat)
assert cat=="missing page"
cat2=simulate_classify({"url":"https://ziontechgroup.com/pricing","status":"301","detail":"https://ziontechgroup.com/pricing/"})
print("REDIRECT_CLASS",cat2)
assert cat2=="stale redirect"
cat3=simulate_classify({"url":"mailto:a@b.com","status":"error","detail":"No connection adapters"})
print("MAILTO_CLASS",cat3)
assert cat3=="external reference error"
cat4=simulate_classify({"url":"https://ziontechgroup.com/nope","status":"404","detail":""})
print("404_CLASS",cat4)
assert cat4=="missing page"
cat5=simulate_classify({"url":"https://ziontechgroup.com/bomb","status":"500","detail":""})
print("500_CLASS",cat5)
assert cat5=="external reference error"
print("SMOKE_OK")
