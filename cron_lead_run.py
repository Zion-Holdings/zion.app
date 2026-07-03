#!/usr/bin/env python3
"""Autonomous cron lead runner."""
from __future__ import annotations

import os
import re
import sys
import json
import time
import hashlib
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote_plus, urlparse

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
sys.path.insert(0, str(REPO / 'commands'))
load_dotenv(REPO / '.env')

from google_workspace import gmail_send_new, gmail_search, gmail_get  # type: ignore

OUT_DIR = Path.home() / '.hermes' / 'cron' / 'output'
OUT_DIR.mkdir(parents=True, exist_ok=True)
LOG_PATH = OUT_DIR / f"lead_gen_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
MAX_LEADS = 12
SLEEP_BETWEEN_SENDS = 7

BAD_EMAIL_TOKENS = (
    'noreply', 'no-reply', 'do-not-reply', 'donotreply',
    'mailer-daemon', 'postmaster', 'example.com', 'localhost',
    'yoursite.com', 'test.com', 'sentry.io', 'png', 'jpg', 'jpeg', 'webp', 'svg'
)
SEARCH_PROVIDERS = (
    'duckduckgo.com', 'bing.com', 'google.com/search', 'googlesyndication.com',
    'bing.net', 'yahoo.com', 'startpage.com', 'brave.com', 'advertising',
    'search?', 'webcache.googleusercontent.com'
)

KEYWORDS = [
    'managed IT support small business',
    'MSP email deliverability',
    'IT services company email lead',
    'small business IT security',
    'Office 365 migration help',
    'cloud backup small business',
    'wi-fi hardening services',
    'managed helpdesk contact email',
    'cybersecurity assessment firm contact',
    'email marketing automation for MSP',
    'IT asset lifecycle management vendor',
    'disaster recovery services company contact',
]


def log(msg: str) -> None:
    line = f"[{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')}] {msg}"
    print(line, flush=True)
    with LOG_PATH.open('a', encoding='utf-8') as f:
        f.write(line + '\n')


def now() -> str:
    return datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')


def extract_emails(text: str) -> set[str]:
    emails = set(re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text))
    return {e.lower() for e in emails if '@' in e}


def is_valid_email(email: str) -> bool:
    if not email or email.count('@') != 1:
        return False
    if any(tok in email.lower() for tok in BAD_EMAIL_TOKENS):
        return False
    domain = email.split('@', 1)[1].lower()
    return '.' in domain and len(domain) > 3


def extract_company_name(soup: BeautifulSoup, url: str) -> str:
    for prop in ('og:title', 'twitter:title'):
        tag = soup.find('meta', attrs={'property': prop}) or soup.find('meta', attrs={'name': prop})
        if tag and tag.get('content', '').strip():
            return tag['content'].strip()
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
        return domain.replace('-', ' ').title()
    except Exception:
        return 'Company'


def search_html_free(keyword: str, limit: int = 8) -> list[str]:
    queries = [
        f'https://html.duckduckgo.com/html/?q={quote_plus(keyword + " contact OR services OR firm")}',
        f'https://www.bing.com/search?q={quote_plus(keyword + " contact OR services OR firm")}',
    ]
    found: list[str] = []
    for q in queries:
        if len(found) >= limit:
            break
        try:
            resp = requests.get(q, headers={'User-Agent': 'Mozilla/5.0'}, timeout=12)
            resp.raise_for_status()
            soup = BeautifulSoup(resp.text, 'html.parser')
            links: list[str] = []
            for a in soup.find_all('a', href=True):
                href = a['href']
                text = a.get_text(' ', strip=True)
                if not text:
                    continue
                if href.startswith('/url?q='):
                    href = href.split('?q=', 1)[1].split('&', 1)[0]
                if href.startswith('http') and not any(x in href.lower() for x in ['bing.com/search', 'duckduckgo.com', 'google.com/search']):
                    links.append(href)
            for u in links:
                if u not in found:
                    found.append(u)
                if len(found) >= limit:
                    break
        except requests.exceptions.HTTPError as e:
            code = e.response.status_code if getattr(e, 'response', None) is not None else None
            if code == 403:
                log(f'Search provider blocked for keyword={keyword}; aborting query safely')
                break
        except requests.exceptions.RequestException:
            continue
    return found[:limit]


def page_emails(url: str) -> set[str]:
    try:
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=12)
        if resp.status_code == 403:
            log(f'Page fetch blocked: {url}')
            return set()
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, 'html.parser')
        text = soup.get_text(' ', strip=True)
        meta = ' '.join(tag.get('content', '') for tag in soup.find_all('meta') if tag.get('content'))
        return {e for e in extract_emails(text + ' ' + meta) if is_valid_email(e)}
    except Exception:
        return set()


def local_hash(msg: str) -> str:
    return hashlib.sha1(msg.encode()).hexdigest()[:12]


def build_outreach_email(name: str, company: str, website: str) -> tuple[str, str]:
    first = name.split()[0] if name and name.split() else 'Partner'
    subject = f"IT systems check for {company} — Zion Tech Group"
    body = (
        f"Hi {first},\n\n"
        f"I came across {company} and wanted to send a short note: "
        "Zion Tech Group helps small and mid-size IT teams with email deliverability, "
        "cloud/Office 365 migration, managed IT support, Wi‑Fi hardening, backup/disaster recovery, "
        "and security baseline setup.\n\n"
        "If you have gaps in any of those areas, we can propose an exact implementation plan aligned with your budget.\n\n"
        "Schedule here if useful: https://calendly.com/kleber-ziontechgroup\n\n"
        "Kleber\nZion Tech Group\n"
        "+1 302 464 0950 | kleber@ziontechgroup.com\n"
        "364 E Main St STE 1008, Middletown DE 19709\n"
        "https://ziontechgroup.com"
    )
    return subject, body


def discover_leads(max_keywords: int = 6) -> list[dict]:
    seen_urls: set[str] = set()
    leads: list[dict] = []
    for kw in KEYWORDS[:max_keywords]:
        urls = search_html_free(kw, limit=8)
        log(f'Keyword="{kw}" -> found {len(urls)} candidate urls')
        if not urls:
            continue
        for url in urls:
            if url in seen_urls or any(x in str(url).lower() for x in ['bing.com/search','duckduckgo.com','google.com/search']):
                continue
            seen_urls.add(url)
            emails = page_emails(url)
            if not emails:
                continue
            try:
                r0 = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=12)
                soup = BeautifulSoup(r0.text, 'html.parser')
            except Exception:
                soup = BeautifulSoup('', 'html.parser')
            company = extract_company_name(soup, url) or (' '.join(str(urlparse(str(url)).netloc.replace('www.','').split('.'))).title())
            lead = {
                'company': company,
                'website': url,
                'emails': sorted(emails),
            }
            leads.append(lead)
            if len(leads) >= MAX_LEADS + 8:
                break
        if len(leads) >= MAX_LEADS + 8:
            break
    return leads


def dedupe_leads(leads: list[dict]) -> list[dict]:
    best = []
    seen_email = set()
    for lead in leads:
        for email in lead.get('emails', []):
            if not is_valid_email(email):
                continue
            if email in seen_email:
                continue
            seen_email.add(email)
            lead['email'] = email
            best.append(lead)
            break
    return best[: MAX_LEADS + 4]


def run_lead_system_smoke_test() -> bool:
    try:
        res = gmail_send_new(
            to_addr='kleber@ziontechgroup.com',
            subject='Zion Lead System Smoke Test',
            body='This is an automated smoke test from the autonomous lead-generation runner.',
        )
        ok = bool(res.get('success'))
        log(f'Smoke test send result={res}')
        return ok
    except Exception as e:
        log(f'Smoke test failed: {e}')
        return False


def run_local_miner(limit: int = 40) -> list[dict]:
    leads: list[dict] = []
    try:
        messages = gmail_search('in:anywhere', limit=limit)
    except Exception as e:
        log(f'Local email miner search failed: {e}')
        return leads
    for m in messages:
        try:
            msg = gmail_get(m['id'])
            headers = msg.get('payload', {}).get('headers', [])
            sender = next((h['value'] for h in headers if h['name'].lower() == 'from'), '')
            sender_email = sender.split('<')[-1].split('>')[0].strip().lower()
            if not is_valid_email(sender_email):
                continue
            leads.append({
                'company': sender_email.split('@')[1].replace('.', ' ').title(),
                'website': f"https://{sender_email.split('@')[1]}",
                'emails': [sender_email],
            })
            if len(leads) >= MAX_LEADS:
                break
        except Exception:
            continue
    return leads


def main() -> int:
    log('=== Cron lead run started ===')
    try:
        from urllib.parse import urlparse
    except Exception:
        pass

    system_ok = True
    if not run_lead_system_smoke_test():
        log('WARNING: Lead send system smoke test failed; stopping cron run early')
        system_ok = False

    if not system_ok:
        log('=== Cron lead run completed with errors ===')
        return 2

    leads = discover_leads(max_keywords=6)
    log(f'Discovered raw leads: {len(leads)}')
    if not leads:
        log('No fresh web leads discovered; trying local email miner fallback')
        leads = run_local_miner(limit=40)
        log(f'Local miner leads: {len(leads)}')

    sendable = dedupe_leads(leads)
    log(f'Sendable lead candidates: {len(sendable)}')

    sent = 0
    skipped = 0
    seen_hashes: set[str] = set()
    for lead in sendable:
        if sent >= MAX_LEADS:
            break
        to_addr = lead.get('email')
        if not is_valid_email(to_addr):
            skipped += 1
            continue
        subject, body = build_outreach_email(
            name=to_addr.split('@')[0].replace('.', ' ').title() if to_addr else 'Friend',
            company=lead.get('company', 'your team'),
            website=lead.get('website', 'https://ziontechgroup.com'),
        )
        msg_hash = local_hash((to_addr or '') + '||' + subject + '||' + body)
        if msg_hash in seen_hashes:
            log(f'Skipping duplicate send hash for {to_addr}')
            skipped += 1
            continue
        seen_hashes.add(msg_hash)
        result = gmail_send_new(to_addr=to_addr, subject=subject, body=body)
        if result.get('success'):
            sent += 1
            log(f'SENT -> {to_addr} | subject={subject}')
        else:
            skipped += 1
            log(f'SEND_FAILED -> {to_addr} | reason={result.get("error")} | subject={subject}')
        time.sleep(SLEEP_BETWEEN_SENDS)

    summary = {
        'run_ts': now(),
        'system_ok': system_ok,
        'raw_leads': len(leads),
        'sendable': len(sendable),
        'sent': sent,
        'skipped': skipped,
        'max_leads': MAX_LEADS,
        'log_path': str(LOG_PATH),
    }
    try:
        print(json.dumps(summary, indent=2), flush=True)
    except Exception:
        pass
    log(f'SUMMARY: {json.dumps(summary)}')
    log('=== Cron lead run finished ===')
    return 0 if sent > 0 or not system_ok else 1


if __name__ == '__main__':
    raise SystemExit(main())
