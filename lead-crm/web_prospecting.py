#!/usr/bin/env python3
"""
Zion Web Prospector — free lead discovery for AI/IT niches.
Searches DuckDuckGo/Bing HTML for target keywords, extracts likely leads,
and writes them to lead-crm/outreach_ready_canonical.json for the pipeline.
No paid APIs required.
"""
import sys, json, time, re, urllib.parse, urllib.request, datetime
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
LEAD_DIR = REPO / 'lead-crm'
CANONICAL_READY = LEAD_DIR / 'outreach_ready_canonical.json'

KEYWORDS = [
    'AI automation for support',
    'computer vision quality inspection',
    'incident response retainer managed',
    'FinOps cloud cost optimization',
    'zero trust network access remote teams',
    'insurance claims automation',
    'field service intelligent routing',
    'BI predictive analytics dashboard',
    'cloud migration assessment',
    'IT outsourcing LATAM'
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (compatible; ZionBot/1.0; +https://ziontechgroup.com)',
    'Accept': 'text/html,application/xhtml+xml',
    'Accept-Language': 'en,pt;q=0.9'
}


def fetch_html(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode('utf-8', errors='replace')


def duckduckgo_search(query: str, max_results: int = 10) -> list[str]:
    q = urllib.parse.quote_plus(query)
    url = f'https://html.duckduckgo.com/html/?q={q}'
    html = fetch_html(url)
    links = []
    for m in re.finditer(r'<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>(.*?)</a>', html):
        href = m.group(1)
        txt = re.sub(r'<[^>]+>', '', m.group(2))
        if href and txt:
            links.append(href)
        if len(links) >= max_results:
            break
    return links


def extract_emails(text: str) -> list[str]:
    return list(dict.fromkeys(re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', text)))


def bing_html_search(query: str, max_results: int = 10) -> list[str]:
    q = urllib.parse.quote_plus(query)
    url = f'https://www.bing.com/search?q={q}&count={max_results}'
    try:
        html = fetch_html(url)
    except Exception:
        return []
    links = []
    for m in re.finditer(r'<h2><a href="(https?://[^"]+)"[^>]*>', html):
        href = m.group(1)
        if href and 'bing.com' not in href:
            links.append(href)
        if len(links) >= max_results:
            break
    return links


def discover_leads(keyword: str, limit: int = 8) -> list[dict]:
    leads = []
    seen = set()
    try:
        urls = duckduckgo_search(keyword, max_results=limit)
    except Exception:
        urls = []
    if not urls:
        try:
            urls = bing_html_search(keyword, max_results=limit)
        except Exception:
            urls = []
    for u in urls:
        if u in seen:
            continue
        seen.add(u)
        try:
            html = fetch_html(u)
            emails = extract_emails(html)
            if not emails:
                continue
            subject = f'Oportunidade em {keyword}'
            body = (
                'Olá! Somos a Zion Tech Group e atuamos com IA, automação, FinOps, zero-trust, '
                'inspeção por visão computacional e modernização de plataformas.\n\n'
                'Gostaríamos de explorar uma possível parceria ou projeto conjunto.\n\n'
                'Agende uma conversa: https://calendly.com/kleber-ziontechgroup\n'
                'Serviços e ferramentas gratuitas: https://ziontechgroup.com\n'
            )
            leads.append({
                'to': emails[0],
                'name': emails[0].split('@')[0],
                'subject': subject,
                'body': body,
                'source_url': u,
                'keyword': keyword,
            })
        except Exception:
            continue
    return leads


def append_ready(rows: list[dict]):
    try:
        data = json.loads(CANONICAL_READY.read_text(encoding='utf-8'))
    except Exception:
        data = {'ready': []}
    ready = data.get('ready') or []
    seen_to = {str(r.get('to')).strip().lower() for r in ready if r.get('to')}
    added = 0
    for r in rows:
        to = str(r.get('to') or '').strip().lower()
        if not to or to in seen_to:
            continue
        ready.append(r)
        seen_to.add(to)
        added += 1
    data['ready'] = ready[-2000:]
    data['state'] = 'send_ready'
    data['send_blocked'] = False
    CANONICAL_READY.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    return added


def main():
    all_leads = []
    for kw in KEYWORDS:
        try:
            rows = discover_leads(kw, limit=6)
            all_leads.extend(rows)
        except Exception:
            pass
        time.sleep(1.0)
    added = append_ready(all_leads)
    print(json.dumps({'ts': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                       'discovered': len(all_leads), 'added': added,
                       'canonical_path': str(CANONICAL_READY)}, ensure_ascii=False))


if __name__ == '__main__':
    main()
