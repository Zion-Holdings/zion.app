#!/usr/bin/env python3
"""
Zion Content Loop — resilient web-aware topic discovery.

Searches the web for fresh high-intent IT/AI topics and appends them
to content-loop/topics.json so the generator never runs dry.
"""
from __future__ import annotations
import json, re, random
from pathlib import Path
from urllib.parse import urlencode

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'
QUERIES = [
    'AI automation IT services 2026',
    'cloud security MSP SMB pain points',
    'Kubernetes zero trust FinOps',
    'LLM RAG enterprise search problems',
    'SOC automation MSSP challenges',
    'disaster recovery backup testing',
    'data governance lakehouse architecture',
    'CI/CD secret rotation credential hygiene',
    'observability Kubernetes OpenTelemetry',
    'incident response runbook automation',
    'vCIO advisory for SMBs',
    'managed DNS domain protection outage prevention',
    'AI customer onboarding automation',
    'healthcare AI automation HIPAA compliance',
    'supply chain AI demand forecasting',
    'energy utilities AI cost reduction',
    'government AI automation visibility',
    'retail AI automation deployment',
    'manufacturing AI predictive maintenance',
    'legal AI contract review risk scoring',
    'nonprofit AI automation measurable ROI',
    'real estate AI automation compliance',
    'telecom AI automation lower risk',
    'finance AI fraud detection real-time blocking',
    'EDR detection response SMB without large security teams',
    'service mesh Kubernetes Istio Linkerd Cilium',
    'SASE best practices CISO remote work',
    'email security SPF DKIM DMARC MSP',
    'endpoint management Windows Mac mobile fleets',
    'IT asset discovery hybrid cloud automation',
]


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-{2,}', '-', text)
    return text.strip('-')


def existing_slugs() -> set[str]:
    if not TOPICS_FILE.exists():
        return set()
    try:
        data = json.loads(TOPICS_FILE.read_text(encoding='utf-8'))
    except json.JSONDecodeError:
        return set()
    return {t.get('slug') for t in data if isinstance(t, dict) and t.get('slug')}

def fetch_reddit_titles(query: str, sub: str, limit: int = 12) -> list[str]:
    from urllib.request import urlopen, Request
    q = urlencode({'q': query, 'limit': str(limit), 'sort': 'relevance', 't': 'year'})
    url = f'https://www.reddit.com/r/{sub}/search.json?{q}'
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (+https://ziontechgroup.com)'})
    try:
        with urlopen(req, timeout=18) as r:
            data = json.load(r)
        out = []
        for child in data.get('data', {}).get('children', []):
            title = child.get('data', {}).get('title')
            if title and 20 < len(title) < 180:
                out.append(title)
        return out
    except Exception:
        return []


def fetch_hn_titles(query: str, limit: int = 12) -> list[str]:
    from urllib.request import urlopen, Request
    q = urlencode({'query': query, 'tags': 'story', 'hitsPerPage': str(limit)})
    url = f'https://hn.algolia.com/api/v1/search?{q}'
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (+https://ziontechgroup.com)'})
    try:
        with urlopen(req, timeout=18) as r:
            data = json.load(r)
        out = []
        for hit in data.get('hits', [])[:limit]:
            title = hit.get('title')
            if title and 20 < len(title) < 180:
                out.append(title)
        return out
    except Exception:
        return []


def fetch_ddg_titles(query: str, limit: int = 8) -> list[str]:
    from urllib.request import urlopen, Request
    data = urlencode({'q': query}).encode()
    url = 'https://html.duckduckgo.com/html/'
    req = Request(url, data=data, headers={
        'User-Agent': 'Mozilla/5.0 (+https://ziontechgroup.com)',
        'Content-Type': 'application/x-www-form-urlencoded',
    })
    try:
        with urlopen(req, timeout=18) as r:
            html = r.read().decode('utf-8', errors='ignore')
        titles = re.findall(r'<a[^>]+class="result__a"[^>]*>(.*?)</a>', html, re.S)
        out = []
        for t in titles:
            t = re.sub(r'<[^>]+>', '', t).strip()
            if 20 < len(t) < 180:
                out.append(t)
        return out[:limit]
    except Exception:
        return []


def cluster_for(text: str) -> str:
    text = text.lower()
    if any(k in text for k in ['security', 'siem', 'edr', 'soar', 'mssp', 'phishing', 'zero trust', 'sase', 'cryptography']):
        return 'security'
    if any(k in text for k in ['kubernetes', 'gitops', 'terraform', 'serverless', 'cloud native', 'platform engineering']):
        return 'cloud'
    if any(k in text for k in ['ai', 'llm', 'rag', 'observability', 'mlops', 'ml ops']):
        return 'ai'
    if any(k in text for k in ['data', 'lake', 'mesh', 'governance', 'pipeline']):
        return 'data'
    if any(k in text for k in ['support', 'onboarding', 'ticket', 'itsm', 'service desk']):
        return 'support'
    return 'it'


def intent_for(text: str) -> str:
    text = text.lower()
    if any(k in text for k in ['how to', 'guide', 'best practices', 'playbook', 'roadmap', 'checklist']):
        return 'guide'
    return 'solution'


def main() -> int:
    seen = existing_slugs()
    new_topics = []
    subs = ['ITManagers', 'sysadmin', 'cybersecurity', 'aws', 'kubernetes', 'devops', 'startups']

    for q in QUERIES:
        if len(new_topics) >= 35:
            break
        titles = []
        try:
            titles = fetch_reddit_titles(q, random.choice(subs), 10)
        except Exception:
            titles = []
        if not titles:
            try:
                titles = fetch_hn_titles(q, 10)
            except Exception:
                titles = []
        if not titles:
            try:
                titles = fetch_ddg_titles(q, 6)
            except Exception:
                titles = []

        for title in titles:
            slug = slugify(title)
            if not slug or slug in seen:
                continue
            seen.add(slug)
            new_topics.append({
                'title': title,
                'slug': slug,
                'cluster': cluster_for(title),
                'intent': intent_for(title),
                'differentiation_hook': 'Real question from current search/discussion data',
                'rationale': 'Web-discovered topic with demonstrated search interest',
            })

    if not new_topics:
        print(json.dumps({'added': 0, 'source': 'web', 'note': 'no sources returned results'}, indent=2))
        return 0

    current = []
    if TOPICS_FILE.exists():
        try:
            current = json.loads(TOPICS_FILE.read_text(encoding='utf-8'))
        except json.JSONDecodeError:
            current = []
    merged = current + new_topics
    TOPICS_FILE.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(json.dumps({'added': len(new_topics), 'total_topics': len(merged), 'source': 'web'}, indent=2))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
