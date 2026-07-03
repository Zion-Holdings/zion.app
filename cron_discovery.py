import requests, urllib.parse, re, json, time, os
from bs4 import BeautifulSoup
from datetime import datetime

BASE = "/data/data/com.termux/files/home/zion-support.github.io"
LOG_OUT = os.path.join(BASE, "logs", "lead_gen_cron.log")
LEADS_OUT = os.path.join(BASE, "lead_gen", "cron_leads_latest.jsonl")
UA = "Mozilla/5.0 (compatible; LeadBot/1.0; +https://ziontechgroup.com)"
queries = [
    "managed IT support small business United States email",
    "MSP email deliverability + contact",
    "small business IT security emailed services",
    "office 365 migration provider contact",
    "cloud backup provider email",
    "Wi-Fi security setup email contact"
]
results = []
seen_domains = set()

def extract_emails_from_domain(domain):
    candidates = [f"https://{domain}/contact", f"https://{domain}/contact-us", f"https://{domain}/"]
    emails = set()
    for url in candidates:
        try:
            r = requests.get(url, timeout=18, headers={"User-Agent": UA}, allow_redirects=True)
            txt = r.text
            found = re.findall(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", txt)
            for e in found:
                e = e.lower().strip('.')
                domain_part = e.split('@', 1)[-1]
                if domain_part in seen_domains:
                    continue
                bad = any(x in e for x in ['example.com','noreply','mailer-daemon','.png','.jpg','.svg','sentry','webpack'])
                if not bad:
                    emails.add(e)
            time.sleep(2)
        except Exception:
            pass
    return list(emails)

def bing_search(query):
    r = requests.get("https://www.bing.com/search", params={"q": query}, timeout=22, headers={"User-Agent": UA})
    return r.status_code, r.text

start = time.time()
log = []
log.append(f"=== Lead discovery start {datetime.now().isoformat()} ===")
blocked = False
for q in queries:
    if blocked:
        log.append(f"Blocked provider skip for query: {q}")
        continue
    status, html = bing_search(q)
    log.append(f"Query: {q} | status={status} | len={len(html)}")
    if status != 200 or "captcha" in html.lower() or "blocked" in html.lower() or "results" not in html.lower():
        log.append("Provider blocked for this run; halting discovery fallbacks.")
        blocked = True
        continue
    soup = BeautifulSoup(html, "lxml")
    urls = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        txt = a.get_text(' ', strip=True)
        if href.startswith('http') and any(t in txt.lower() for t in ['msp','it support','managed it','it services','email deliverability','migration','backup','wi-fi','wireless']):
            urls.append((href, txt))
    for url, txt in urls[:12]:
        try:
            parsed = urllib.parse.urlparse(url)
            domain = parsed.netloc.lower()
            if not domain or domain in seen_domains:
                continue
            if domain.endswith(('.gov','.edu','.mil')):
                continue
            seen_domains.add(domain)
            emails = extract_emails_from_domain(domain)
            if emails:
                lead = {
                    "server": domain,
                    "website": f"https://{domain}",
                    "source_query": q,
                    "emails": emails,
                    "context": txt
                }
                results.append(lead)
            time.sleep(2)
        except Exception as e:
            log.append(f"Err {domain}: {e}")

log.append(f"Discovery finished in {round(time.time()-start,1)}s | unique leads={len(results)}")

os.makedirs(os.path.dirname(LOG_OUT), exist_ok=True)
with open(LOG_OUT, "a") as f:
    f.write("\n".join(log) + "\n")

with open(LEADS_OUT, "w") as f:
    for lead in results:
        f.write(json.dumps(lead, ensure_ascii=False) + "\n")

print(json.dumps({"status":"ok","leads":results,"log":log}, ensure_ascii=False, indent=2))
