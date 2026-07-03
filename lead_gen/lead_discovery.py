from __future__ import annotations
import csv
import json
import os
import re
import time
import urllib.parse
from datetime import datetime
from pathlib import Path

import requests
from bs4 import BeautifulSoup

QUERIES = [
    "managed IT support small business Delaware",
    "MSP email deliverability consultant",
    "managed service provider cybersecurity small business",
    "office 365 migration help small business",
    "cloud backup disaster recovery small business",
    "Wi-Fi security setup managed services",
]
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}
EMAIL_RE = re.compile(r"[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}")
BAD_EMAIL_DOMAIN = {"example.com", "test.com", "sentry.io", "gravatar.com", "w3.org", "schema.org"}
BAD_PATTERNS = re.compile(r"noreply|no-reply|mailer-daemon|admin@|info@|support@|docs.google|drive.google", re.I)
TIMES = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday","am","pm"]
BAD_TEXT = re.compile(r"|".join(["cookie","privacy","terms","policy","login","sign in","careers","jobs","newsletter","portal","portal\."]), re.I)
KEYWORDS_LIKELY = re.compile(r"managed service|IT support|cybersecurity|backup|migration|Wi-Fi|network|helpdesk|cloud|compliance", re.I)
OUT_DIR = Path("lead_gen")
OUT_DIR.mkdir(exist_ok=True)
run_ts = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
csv_path = OUT_DIR / f"leads_{run_ts}.csv"
json_path = OUT_DIR / f"leads_{run_ts}.json"
leads = []
seen_pages = set()
seen_emails = set()
session = requests.Session()
session.headers.update(HEADERS)


def extract_emails_from_html(text: str) -> list[str]:
    found = sorted(set(EMAIL_RE.findall(text)))
    return [e for e in found if not BAD_PATTERNS.search(e) and e.split("@",1)[1].lower() not in BAD_EMAIL_DOMAIN]


def score_lead(url: str, emails: list[str], text: str) -> int:
    score = 40
    if emails:
        score += 25
        for e in emails:
            dom = e.split("@",1)[1].lower()
            if dom.endswith(".io") or dom.endswith(".co") or dom.endswith(".com"):
                score += 5
            if not any(e.endswith(k) for k in ["@gmail.com","@yahoo.com","@hotmail.com","@outlook.com"]):
                score += 10
    if KEYWORDS_LIKELY.search(text):
        score += 25
    if "msp" in text.lower() or "managed service" in text.lower() or "IT support" in text:
        score += 10
    return min(score, 100)


def search_startpage(query: str) -> list[str]:
    params = {"query": query}
    try:
        r = session.get("https://www.startpage.com/do/search", params=params, timeout=20)
        if r.status_code != 200 or "Startpage Blocked" in r.text or "captcha" in r.text.lower() or len(r.text) < 2000:
            return []
        soup = BeautifulSoup(r.text, "lxml")
        urls = []
        for a in soup.select("a"):
            href = a.get("href") or ""
            if href.startswith("https://") and any(x in href for x in [".com/",".io/",".co/",".net/"]):
                if href not in urls and href not in seen_pages:
                    urls.append(href)
        return urls[:12]
    except Exception:
        return []


def page_contacts(url: str):
    try:
        r = session.get(url, timeout=20, allow_redirects=True)
        text = r.text
        emails = extract_emails_from_html(text)
        soup = BeautifulSoup(text, "lxml")
        title = soup.title.get_text(strip=True) if soup.title else ""
        snippet = re.sub(r"\s+", " ", soup.get_text(" ", strip=True))[:1400]
        score = score_lead(url, emails, title+" "+snippet)
        return title, emails, score, snippet
    except Exception:
        return "", [], 0, ""


def consolidate(leads_list):
    by_domain = {}
    for lead in leads_list:
        key = urllib.parse.urlparse(lead["url"]).netloc.lower()
        if key not in by_domain:
            by_domain[key] = lead
    return list(by_domain.values())[:15]


for q in QUERIES:
    print("QUERY", q)
    urls = search_startpage(q)
    print("URLS", len(urls))
    for url in urls:
        seen_pages.add(url)
        title, emails, score, snippet = page_contacts(url)
        if not emails and score < 50:
            continue
        if any(k in url.lower() for k in ["facebook.com","twitter.com","instagram.com","reddit.com","linkedin.com","youtube.com","pinterest.com","tiktok.com","mastodon","github.com","bit.ly","medium.com","startpage.com","startmail.com"]):
            continue
        lead = {
            "url": url,
            "title": title,
            "emails": emails,
            "score": score,
            "snippet": snippet,
        }
        leads.append(lead)
        for e in emails:
            seen_emails.add(e)
        if len(leads) >= 20:
            break
    time.sleep(3)

leads = consolidate(leads)
leads = sorted(leads, key=lambda x: x.get("score",0), reverse=True)[:12]
with csv_path.open("w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["title","url","emails","score","snippet"])
    writer.writeheader()
    for lead in leads:
        writer.writerow({**lead, "emails": ";".join(lead.get("emails",[]))})
with json_path.open("w", encoding="utf-8") as f:
    json.dump({"run_ts": run_ts, "count": len(leads), "leads": leads}, f, indent=2, ensure_ascii=False)
print(json.dumps({"run_ts": run_ts, "count": len(leads), "leads_file": str(csv_path), "json_file": str(json_path), "top": [{"url": x["url"], "emails": x["emails"], "score": x["score"]} for x in leads[:5]]}))
