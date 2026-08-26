#!/usr/bin/env python3
"""
Better IT lead search + limited send via Resend.
"""

import json, os, re, time, random, datetime
from pathlib import Path

BASE = Path('/Users/klebergarciaalcatrao')
APP_DATA = BASE / 'app' / 'data'
DATA = APP_DATA / 'outreach'
LATEST = DATA / 'latest_outreach.json'
SENT = DATA / 'sent_log.json'
DATA.mkdir(parents=True, exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'}


def load_json(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text())
    except Exception:
        pass
    return default


def save_json(path, value):
    path.write_text(json.dumps(value, indent=2, ensure_ascii=False))


import urllib.parse, urllib.request

def http_get(url, timeout=30):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', errors='ignore')


def quick_page(link):
    try:
        return http_get(link, timeout=30)
    except Exception:
        return ''


QUERIES = [
    'consultoria de TI São Paulo site:.br',
    'managed services TI Brasil site:.br',
    'suporte TI pequenas empresas Brasil site:.br',
    'cybersecurity managed services Brasil site:.br',
    'cloud migration consultoria TI Brasil site:.br',
    'automação e monitoramento TI Brasil site:.br',
]


def extract_emails(text):
    return sorted(set(re.findall(r'[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}', text)))


NOISE = {'admin','info','contact','hello','hi','support','help','office','enquiries','enquiry','marketing','comercial','sac','atendimento','rh','imprensa','jobs','careers','noreply','no-reply'}
BAD_TLDS = {'.gov','.edu','.mil','.gov.br','.edu.br','.mil.br'}


def email_quality(e):
    e = e.lower()
    try:
        local, domain = e.split('@', 1)
    except ValueError:
        return -1
    local = local.lower()
    if local in NOISE or len(local) < 2 or local.startswith('noreply'):
        return -1
    ext = '.' + domain.rsplit('.', 1)[-1].lower()
    if ext in BAD_TLDS:
        return -1
    if domain.endswith(('example.com','test.com','localhost')):
        return -1
    return 10 + len(domain) % 20


def main():
    latest = load_json(LATEST, [])
    sent = load_json(SENT, {})
    sent_emails = {k.lower() for k in sent}
    seen = set()
    for r in latest:
        if isinstance(r, dict) and r.get('email'):
            seen.add(r['email'].lower())

    leads = []
    for q in QUERIES:
        try:
            html = http_get('https://lite.duckduckgo.com/lite/', urllib.parse.urlencode({'q': q}).encode(), 'POST')
        except Exception:
            html = ''
        if not html:
            continue
        links = re.findall(r'href=["\'](https?://[^"\']+)["\']', html)
        seen_links = set()
        for link in links[:18]:
            if link in seen_links:
                continue
            seen_links.add(link)
            page = quick_page(link)
            if not page:
                continue
            for raw in extract_emails(page):
                raw = raw.lower()
                if raw in sent_emails or raw in seen:
                    continue
                score = email_quality(raw)
                if score < 0:
                    continue
                try:
                    local, domain = raw.split('@', 1)
                except ValueError:
                    continue
                seen.add(raw)
                company = domain.split('.')[0].replace('-', ' ').replace('_', ' ').title()[:60]
                leads.append({
                    'lead_id': f'itv3-{random.randint(1000,9999)}',
                    'company': company,
                    'email': raw,
                    'name': 'Contact',
                    'industry': 'IT Services',
                    'service_key': 'Managed IT',
                    'source': 'free-search-br-list-v3',
                    'discovered_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                    'query': q,
                    'score': score,
                    'verified': False,
                    'send_verdict': 'send_ready_live_sendable',
                    'provider_status': 'pending_send',
                })
                if len(leads) >= 8:
                    break
            if len(leads) >= 8:
                break
        if len(leads) >= 8:
            break
        time.sleep(random.uniform(0.3, 0.9))

    latest.extend(leads)
    save_json(LATEST, latest)
    print(json.dumps({'added': len(leads), 'latest_total': len(latest), 'emails': [r['email'] for r in leads]} , ensure_ascii=False))


if __name__ == '__main__':
    main()
