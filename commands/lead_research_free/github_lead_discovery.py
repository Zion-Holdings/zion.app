#!/usr/bin/env python3
"""Free lead discovery: GitHub org search -> website -> contact email extraction."""
import json, os, re, sys, time, urllib.request, urllib.parse
from pathlib import Path

KEYWORDS = [
    "managed IT services",
    "cybersecurity consulting",
    "cloud migration",
    "DevOps consulting",
    "IT support company",
]
SEARCH_QUERIES = [f'"{k}" in:name,description,readme' for k in KEYWORDS]
UA = "Mozilla/5.0 (compatible; lead-discovery/1.0)"
OUT = Path("out/free-leads-discovered-github.json")
HEADERS = {"User-Agent": UA, "Accept": "application/vnd.github+json"}


def gh_json(endpoint):
    url = "https://api.github.com" + endpoint
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.load(r)
    except Exception as e:
        print(f"[GH ERR] {endpoint} -> {e}")
        return []


def extract_emails(text):
    return list(set(re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', text)))[:5]


def crawl_website_for_emails(domain, limit=3):
    urls = [f"https://{domain}/contact", f"https://{domain}/", f"https://{domain}/about"]
    found = []
    for u in urls:
        try:
            req = urllib.request.Request(u, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=15) as r:
                txt = r.read().decode('utf-8', errors='replace')
                found.extend(extract_emails(txt))
            if len(found) >= limit:
                break
        except Exception:
            pass
        time.sleep(0.3)
    return found[:limit]


def main():
    leads = []
    seen_handles = set()
    for q in SEARCH_QUERIES:
        data = gh_json(f"/search/users?q={urllib.parse.quote(q)}&per_page=10")
        items = data.get('items', []) if isinstance(data, dict) else []
        print(f"QUERY: {q} -> {len(items)} users")
        for item in items[:8]:
            login = item.get('login', '')
            if login in seen_handles:
                continue
            seen_handles.add(login)
            profile = gh_json(f"/users/{login}")
            if not profile or not isinstance(profile, dict):
                continue
            name = profile.get('name') or profile.get('login')
            company = profile.get('company')
            blog = profile.get('blog')
            email = profile.get('email')
            location = profile.get('location')
            domain = urllib.parse.urlparse(blog).netloc.replace('www.', '') if blog else ''
            website_emails = []
            if domain and not email:
                website_emails = crawl_website_for_emails(domain)
            candidate_emails = [e for e in [email] + website_emails if e]
            leads.append({
                'company': company or name,
                'contact_name': name,
                'github_handle': login,
                'email': candidate_emails[0] if candidate_emails else '',
                'website': blog or f'https://github.com/{login}',
                'domain': domain,
                'location': location,
                'source': 'github',
            })
            print(f"  + {login} | {company or name} | emails={len(candidate_emails)}")
        time.sleep(1)

    # Dedup by domain/login
    seen = set()
    uniq = []
    for l in leads:
        key = l.get('domain') or l.get('github_handle')
        if key and key not in seen:
            seen.add(key)
            uniq.append(l)

    out = {
        'generated_at': __import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat(),
        'source': 'github-org-search',
        'total': len(uniq),
        'with_email': sum(1 for l in uniq if l.get('email')),
        'leads': uniq,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"Wrote {len(uniq)} leads, {out['with_email']} with emails -> {OUT}")


if __name__ == '__main__':
    main()
