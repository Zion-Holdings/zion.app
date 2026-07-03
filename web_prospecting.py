#!/usr/bin/env python3
"""
Web Prospector for IT/Real Estate Lead Outreach
Free HTML search fallback when DuckDuckGo is unavailable.
"""
import os
import sys
import re
import time
import json
from datetime import datetime, timezone
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
import requests
import psycopg2
from dotenv import load_dotenv
from pathlib import Path

WORKDIR = Path(os.environ.get('ZION_ROOT', str(Path(__file__).resolve().parent)))
load_dotenv(WORKDIR / '.env')

if str(WORKDIR / 'commands') not in sys.path:
    sys.path.insert(0, str(WORKDIR / 'commands'))

KEYWORDS_FILE = WORKDIR / 'it_service_keywords.txt'
IT_ONLY = True
IT_EXTRA = [
  'API gateway managed services',
  'disaster recovery as a service company',
  'CI/CD pipeline security services',
  'IT helpdesk outsourcing contact email',
  'managed IT support provider email',
  'cybersecurity assessment firm',
  'network infrastructure services contact',
  'data backup and recovery services',
  'endpoint security compliance monitoring provider',
  'DevSecOps managed service email',
  'edge computing implementation services',
  'AI consulting services for business',
  'cloud migration services company',
  'SASE implementation services',
  'FinOps cloud cost optimization consulting',
  'zero trust access services provider',
  'incident response retainer services',
  'remote workforce enablement provider contact',
  'secure access service edge implementation services'
]


def db_conn():
    return psycopg2.connect(
        host=os.getenv('POSTGRES_HOST', 'localhost'),
        port=int(os.getenv('POSTGRES_PORT', '5432')),
        dbname=os.getenv('POSTGRES_DB', 'zion'),
        user=os.getenv('POSTGRES_USER', 'zion_user'),
        password=os.getenv('POSTGRES_PASSWORD', 'zion_secret'),
    )


def log(msg: str) -> None:
    ts = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with (WORKDIR / 'Zion_Brain_Log.md').open('a', encoding='utf-8') as f:
        f.write(f'- [{ts}] WebProspector: {msg}\n')


def _discover_keywords(max_count: int = 50) -> list:
    root = WORKDIR
    priority = [
        root / 'it_service_keywords.txt',
        root / 'commands' / 'it_service_keywords.txt',
        root / 'services.json',
        root / 'app' / 'data' / 'services.ts',
        root / 'app' / 'data' / 'services.js',
    ]
    for target in priority:
        if not target.exists():
            continue
        if target.suffix == '.txt':
            log(f"Loading text keywords from {target}")
            with open(target, 'r', errors='ignore') as f:
                data = [line.strip() for line in f if line.strip()]
            return data[:max_count]
        if target.suffix == '.json':
            log(f"Loading keywords from JSON: {target}")
            data = json.loads(target.read_text(errors='ignore'))
            if isinstance(data, list):
                if data and all(isinstance(x, str) for x in data[:20]):
                    return [x.strip() for x in data if isinstance(x, str) and x.strip()][:max_count]
                if data and isinstance(data[0], dict):
                    out = []
                    for item in data:
                        if not isinstance(item, dict):
                            continue
                        for key in ('name', 'title', 'slug', 'category', 'service', 'id'):
                            val = item.get(key)
                            if isinstance(val, str) and val.strip():
                                out.append(val.strip())
                                break
                    return out[:max_count]
            if isinstance(data, dict):
                out = [str(x).strip() for x in data.keys() if str(x).strip()]
                out += [str(x).strip() for x in data.values() if isinstance(x, str) and x.strip()]
                return sorted(list(dict.fromkeys(out)))[:max_count]
            return []
        if target.suffix in {'.ts', '.js'}:
            log(f"Extracting keywords from source: {target}")
            txt = target.read_text(errors='ignore')
            items = re.findall(r"title:\s*['\"]([^'\"]+)['\"]", txt)
            if items:
                return sorted(list(dict.fromkeys(items)))[:max_count]
    log('Falling back to inline service keywords')
    return [
        'IT services', 'managed IT', 'cloud migration', 'cybersecurity', 'data recovery',
        'network infrastructure', 'endpoint management', 'SOP automation', 'digital transformation',
        'IT consulting', 'technical support', 'help desk', 'server management', 'virtualization',
        'disaster recovery', 'compliance automation', 'IT monitoring', 'identity management'
    ][:max_count]


def load_keywords(max_count: int = 50) -> list:
    if KEYWORDS_FILE.exists():
        log(f"Loading keywords from {KEYWORDS_FILE}")
        with open(KEYWORDS_FILE, 'r', errors='ignore') as f:
            data = [line.strip() for line in f if line.strip()]
        return data[:max_count]
    return _discover_keywords(max_count=max_count)


def extract_emails(text: str) -> set:
    return set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text))


def extract_company_name(soup, url: str) -> str:
    og_title = soup.find('meta', property='og:title')
    if og_title and og_title.get('content'):
        return og_title['content'].strip()

    twitter_title = soup.find('meta', property='twitter:title')
    if twitter_title and twitter_title.get('content'):
        return twitter_title['content'].strip()

    title_tag = soup.find('title')
    if title_tag and title_tag.string:
        title = title_tag.string.strip()
        for sep in [' - ', ' | ', ' :: ', ' – ']:
            if sep in title:
                title = title.split(sep)[0].strip()
        return title

    try:
        from urllib.parse import urlparse
        domain = urlparse(url).netloc
        domain = re.sub(r'^www\.', '', domain)
        domain = re.sub(r'\.(com|org|net|io|co|biz|info)$', '', domain)
        return domain.replace('-', ' ').title()
    except Exception:
        return 'Unknown Company'


def is_valid_email(email: str) -> bool:
    if not email or '@' not in email:
        return False
    if email.count('@') != 1:
        return False
    local, domain = email.split('@')
    if not local or not domain or '.' not in domain:
        return False
    return True


def search_html_free(keyword: str, limit: int = 8):
    queries = [
        f'https://www.bing.com/search?q={quote_plus(keyword + " contact OR services OR firm")}',
        f'https://html.duckduckgo.com/html/?q={quote_plus(keyword + " contact OR services OR firm")}',
        f'https://www.google.com/search?q={quote_plus(keyword + " contact OR services OR firm")}',
    ]
    found = []
    for q in queries:
        try:
            r = requests.get(q, headers={'User-Agent':'Mozilla/5.0'}, timeout=12)
            r.raise_for_status()
            soup = BeautifulSoup(r.text, 'html.parser')
            links = []
            for a in soup.find_all('a', href=True):
                href = a['href']
                text = a.get_text(' ', strip=True)
                if not text:
                    continue
                if href.startswith('http'):
                    links.append(href)
                elif href.startswith('/url?q='):
                    href = href.split('?q=', 1)[1].split('&', 1)[0]
                    if href.startswith('http'):
                        links.append(href)
            uniq = []
            for u in links:
                if any(bad in u.lower() for bad in ['bing.com/search','duckduckgo.com','google.com/search']):
                    continue
                if u not in uniq:
                    uniq.append(u)
            found.extend(uniq[:limit])
            if found:
                break
        except Exception:
            continue
    return found


def page_emails(url: str):
    try:
        r = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=12)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, 'html.parser')
        text_content = soup.get_text(' ', strip=True)
        meta_text = ' '.join(tag.get('content', '') for tag in soup.find_all('meta') if tag.get('content'))
        return extract_emails(text_content + ' ' + meta_text)
    except Exception:
        return set()


def prospect_with_keywords():
    log('=== Starting web prospecting free fallback ===')
    keywords = load_keywords(18)
    if not keywords:
        log('No keywords loaded, exiting')
        return

    total_searched = 0
    total_emails_found = 0
    new_leads_added = 0

    try:
        for keyword in keywords:
            query = f'"{keyword}" company OR "provider" OR "services" OR "firm"'
            log(f"Searching for keyword={keyword}")
            urls = search_html_free(keyword, limit=6)
            if not urls:
                log(f"No URLs for keyword={keyword}")
                continue
            for url in urls[:6]:
                total_searched += 1
                log(f"Processing URL={url}")
                emails = page_emails(url)
                valid_emails = [email for email in emails if is_valid_email(email)]
                if valid_emails:
                    log(f"Found emails on {url}: {', '.join(valid_emails[:3])}")
                    total_emails_found += len(valid_emails)
                    for email in valid_emails:
                        try:
                            conn = db_conn()
                            cur = conn.cursor()
                            cur.execute("SELECT email FROM leads WHERE email = %s", (email,))
                            if cur.fetchone() is None:
                                score = 0.4
                                if any(i in url.lower() for i in ['real-estate','property','imobiliaria','realty','realtor']):
                                    score += 0.35
                                if any(i in keyword.lower() for i in ['real estate','property','imobiliario','valuation','leasing']):
                                    score += 0.15
                                score = min(score, 0.95)
                                cur.execute(
                                    "INSERT INTO leads (email, score, source, status, found_at, notes, company, industry) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)",
                                    (
                                        email,
                                        score,
                                        'web_prospector_it',
                                        'discovered',
                                        datetime.now(timezone.utc),
                                        f"Found via web prospecting: keyword='{keyword}', url='{url}'",
                                        extract_company_name(BeautifulSoup(requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=12).text, 'html.parser'), url),
                                        'real-estate' if any(i in keyword.lower() for i in ['real estate','property','imobiliario']) else 'it-services'
                                    )
                                )
                                conn.commit()
                                new_leads_added += 1
                                log(f"Added new lead: {email} score={score:.2f}")
                            cur.close()
                            conn.close()
                        except Exception as e:
                            log(f"Insert failed for {email}: {e}")
                time.sleep(2)
    except Exception as e:
        log(f"Unexpected error in prospecting: {e}")
        import traceback
        log(traceback.format_exc())
    finally:
        log('=== Web Prospecting Complete ===')
        log(f"Keywords processed: {len(keywords)}")
        log(f"URLs searched: {total_searched}")
        log(f"Emails found: {total_emails_found}")
        log(f"New leads added: {new_leads_added}")


if __name__ == '__main__':
    prospect_with_keywords()
