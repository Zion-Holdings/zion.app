#!/usr/bin/env python3
"""Public-web lead finder. Stdlib only. Does not send mail. Counts on stdout."""
from __future__ import annotations

import json, os, re, socket, ssl, time, urllib.error, urllib.parse, urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

REPO_PATHS = [
    Path('/data/data/com.termux/files/home/zion-support.github.io'),
    Path('/data/data/com.termux/files/home/ztg/repo'),
    Path(__file__).resolve().parent.parent,
    Path('/Users/klebergarciaalcatrao/zion-support.github.io'),
]
REPO = next((p for p in REPO_PATHS if p.exists()), Path(__file__).resolve().parent.parent)
LEAD = REPO / 'lead-crm'
CANONICAL = LEAD / 'outreach_ready_canonical.json'
ALL_LEADS = LEAD / 'all-leads.json'
SENT = LEAD / 'outreach_sent_history.jsonl'
EXCLUSION = LEAD / 'exclusion-list.json'
CURSOR = LEAD / 'web_finder_cursor.json'
HEALTH = LEAD / 'web_finder_health.json'
DISCOVERED = LEAD / 'web_finder_discovered.jsonl'

EMAIL_RE = re.compile(r'[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}', re.I)
HREF_RE = re.compile(r'href=["\'](https?://[^"\']+)["\']', re.I)
REQ_TO = 8
PAGE_TO = 6
MAX_NEW = int(os.environ.get('ZTG_FIND_MAX', '15'))
MAX_DOMAINS = int(os.environ.get('ZTG_FIND_DOMAINS', '8'))
MAX_QUERIES = int(os.environ.get('ZTG_FIND_QUERIES', '6'))
UA = 'ZionTechGroupLeadFinder/1.0 (+https://ziontechgroup.com/contact/)'
PATHS = ('/contato', '/contact', '/contact-us', '/fale-conosco', '/comercial', '/about', '/equipe', '/team')
QUERIES = [
    '"automacao de processos" contato site:.com.br',
    '"gestor de TI" "fale conosco" site:.com.br',
    'FinOps OR "custo de cloud" contato site:.com.br',
    'inurl:contato (ERP OR RPA) site:.com.br',
    '"inteligencia artificial" contato empresa site:.com.br',
    '"AI automation" operations contact -site:linkedin.com',
]
SEEDS = ['omie.com.br', 'sankhya.com.br', 'senior.com.br', 'softplan.com.br', 'linx.com.br', 'vtex.com', 'tiny.com.br', 'bling.com.br', 'zenvia.com', 'blip.ai', 'gupy.io', 'inter.co', 'neon.com.br', 'stone.com.br', 'stefanini.com', 'ciandt.com']
SKIP = {'dock', 'pipefy', 'contaazul', 'creditas', 'celcoin', 'simetrik', 'recurly', 'auxis', 'beyondkey', 'firstbase', 'tsia', 'brex', 'paysafe', 'ziontechgroup', 'github', 'shopee', 'serasa', 'samsung', 'hubspot'}
ALLOW = {'contato', 'comercial', 'vendas', 'hello', 'partners', 'sales', 'parceiros'}
DENY = {'info', 'suporte', 'support', 'infra', 'noc', 'comunicacao', 'imprensa', 'financeiro', 'rh', 'privacy', 'abuse', 'postmaster', 'noreply', 'no-reply', 'notification', 'bounce', 'admin', 'billing', 'help', 'team', 'legal', 'assistente', 'affiliate'}
GENERIC = {'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br', 'icloud.com', 'live.com'}
PLATFORM = {'zendesk.com', 'freshdesk.com', 'intercom.io', 'sendgrid.net', 'github.com', 'google.com', 'linkedin.com'}
CAL = 'https://calendly.com/kleber-ziontechgroup'
SITE = 'https://ziontechgroup.com'
POSTAL = '364 E Main St STE 1008, Middletown, DE 19709'
CTX = ssl.create_default_context()

def now():
    return datetime.now(timezone.utc).isoformat()

def load(path, default):
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        pass
    return default

def save(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')

def get(url, timeout=REQ_TO):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': 'text/html'})
    with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
        return r.read(400000).decode('utf-8', 'replace')

def post(url, data, timeout=REQ_TO):
    body = urllib.parse.urlencode(data).encode()
    req = urllib.request.Request(url, data=body, headers={'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded'}, method='POST')
    with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
        return r.read(400000).decode('utf-8', 'replace')

def host_of(v):
    v = (v or '').strip().lower()
    if '@' in v:
        v = v.split('@', 1)[1]
    v = v.split('/')[0]
    return v[4:] if v.startswith('www.') else v

def skip_co(d):
    compact = d.replace('.', '').replace('-', '')
    return any(t in compact for t in SKIP)

def classify(email):
    email = (email or '').strip().lower()
    if '@' not in email:
        return None
    local, _, domain = email.partition('@')
    if 'ziontechgroup' in domain or domain in GENERIC:
        return None
    if any(domain == p or domain.endswith('.' + p) for p in PLATFORM):
        return None
    if skip_co(domain):
        return None
    if local in DENY or any(local.startswith(x + '.') or local.startswith(x + '-') for x in DENY):
        return None
    if local in ALLOW:
        return 'allow_role'
    return 'named_public'

def mx_ok(domain):
    try:
        socket.getaddrinfo(domain, 443)
        return True
    except Exception:
        return False

def ddg(q):
    urls = []
    html = ''
    try:
        html = post('https://html.duckduckgo.com/html/', {'q': q, 'kl': 'br-pt'})
    except Exception:
        try:
            html = get('https://html.duckduckgo.com/html/?' + urllib.parse.urlencode({'q': q}))
        except Exception:
            return urls
    for raw in HREF_RE.findall(html):
        if 'duckduckgo.com' in raw or 'duck.com' in raw:
            qs = urllib.parse.parse_qs(urllib.parse.urlparse(raw).query)
            raw = urllib.parse.unquote((qs.get('uddg') or qs.get('u') or [''])[0])
        if not raw.startswith('http'):
            continue
        h = host_of(urllib.parse.urlparse(raw).netloc)
        if not h or skip_co(h) or any(b in h for b in ('linkedin.', 'facebook.', 'instagram.', 'youtube.')):
            continue
        urls.append(raw.split('#')[0])
    return urls

class Extract(HTMLParser):
    def __init__(self):
        super().__init__()
        self.emails = set()
        self.chunks = []
    def handle_starttag(self, tag, attrs):
        href = dict(attrs).get('href', '')
        if href.lower().startswith('mailto:'):
            self.emails.add(href[7:].split('?')[0])
    def handle_data(self, data):
        if data and '@' in data:
            self.chunks.append(data)

def emails_from(html):
    found = set()
    p = Extract()
    try:
        p.feed(html)
        found |= p.emails
        blob = ' '.join(p.chunks)
    except Exception:
        blob = html
    found |= set(EMAIL_RE.findall(blob))
    found |= set(EMAIL_RE.findall(html))
    out = set()
    for e in found:
        e = e.strip('.,;:<>()[]"\'').lower()
        if classify(e):
            out.add(e)
    return out

def pages(domain):
    out = []
    for scheme in ('https://', 'https://www.'):
        for path in ('',) + PATHS:
            url = scheme + domain + path
            try:
                html = get(url, PAGE_TO)
            except Exception:
                continue
            if html and ('@' in html or 'mailto:' in html.lower()):
                out.append((url, html))
                if len(out) >= 3:
                    return out
        if out:
            break
    return out

def sent_set():
    s = set()
    if SENT.exists():
        for line in SENT.read_text(encoding='utf-8').splitlines():
            if line.strip():
                try:
                    s.add((json.loads(line).get('email') or '').lower())
                except Exception:
                    pass
    return {x for x in s if x}

def known():
    emails, domains = set(), set()
    for path in (ALL_LEADS, EXCLUSION):
        data = load(path, [])
        rows = data if isinstance(data, list) else (data.get('ready') if isinstance(data, dict) else [])
        for row in rows or []:
            if not isinstance(row, dict):
                continue
            e = (row.get('email') or row.get('to') or '').lower()
            d = (row.get('domain') or host_of(e)).lower()
            if e: emails.add(e)
            if d: domains.add(d)
    data = load(CANONICAL, {'ready': []})
    for row in (data.get('ready') or []):
        e = (row.get('email') or row.get('to') or '').lower()
        d = (row.get('domain') or host_of(e)).lower()
        if e: emails.add(e)
        if d: domains.add(d)
    emails |= sent_set()
    return emails, domains

def locale(domain):
    return ('BR', 'pt-BR') if domain.endswith('.br') else ('US', 'en')

def footer(loc):
    if loc.startswith('pt'):
        return f"\n\n\u2014\nKleber Garcia Alcatrao \u00b7 Zion Tech Group\n{POSTAL}\nContato: kleber@ziontechgroup.com\nBase legal: legitimo interesse (LGPD art. 7o IX).\nResponda SAIR para sair.\nPrivacidade: {SITE}/privacy/\n"
    return f"\n\n\u2014\nKleber Garcia Alcatrao \u00b7 Zion Tech Group\n{POSTAL}\nReply STOP to opt out.\nPrivacy: {SITE}/privacy/\n"

def row(email, url):
    domain = host_of(email)
    country, loc = locale(domain)
    subj = 'Parceria Zion Tech Group \u2014 operacoes e eficiencia para TI' if loc.startswith('pt') else 'Zion Tech Group \u2014 operations efficiency'
    body = (('Ola! Somos a Zion Tech Group (IA, automacao, FinOps). Encontrei um canal publico da ' + domain + ' e proponho um diagnostico de um processo manual.\n\n15min: ' + CAL + '\nDiscovery $99: ' + SITE + '/discovery/\n') if loc.startswith('pt') else ('Hello from Zion Tech Group. Public contact found for ' + domain + '. Happy to run a focused ops diagnostic.\n\n15min: ' + CAL + '\n')) + footer(loc)
    return {
        'domain': domain, 'email': email, 'source': 'web_lead_finder', 'source_url': url,
        'source_type': 'page', 'country': country, 'locale': loc, 'legal_basis': 'legitimate_interest',
        'verify_status': 'mx_ok', 'status': 'ready', 'subject': subj, 'body': body,
        'followup_1': {'subject': 'Re: ' + subj, 'body': ('Ola, so retomando. 15min: ' + CAL if loc.startswith('pt') else 'Following up. 15min: ' + CAL) + footer(loc), 'days_after': 3},
        'followup_2': {'subject': 'Ultima nota \u2014 Zion Tech Group' if loc.startswith('pt') else 'Last note \u2014 Zion Tech Group', 'body': (SITE + footer(loc)), 'days_after': 7},
    }

def merge(rows):
    data = load(CANONICAL, {'ready': []})
    if not isinstance(data, dict):
        data = {'ready': []}
    ready = data.get('ready') or []
    have = {(r.get('email') or '').lower() for r in ready}
    added = 0
    for r in rows:
        if r['email'] in have:
            continue
        ready.append(r)
        have.add(r['email'])
        added += 1
    data['ready'] = ready
    save(CANONICAL, data)
    return added

def run():
    t0 = time.perf_counter()
    have_e, have_d = known()
    cur = load(CURSOR, {'query_index': 0, 'seed_index': 0})
    qi, si = int(cur.get('query_index') or 0), int(cur.get('seed_index') or 0)
    qs = [QUERIES[(qi + i) % len(QUERIES)] for i in range(MAX_QUERIES)]
    seeds = [SEEDS[(si + i) % len(SEEDS)] for i in range(min(MAX_DOMAINS, len(SEEDS)))]
    domains, hits = [], 0
    for q in qs:
        urls = ddg(q)
        hits += len(urls)
        for u in urls:
            h = host_of(urllib.parse.urlparse(u).netloc)
            if h and h not in domains and h not in have_d and not skip_co(h):
                domains.append(h)
        if len(domains) >= MAX_DOMAINS:
            break
    for h in seeds:
        if h not in domains and h not in have_d and not skip_co(h):
            domains.append(h)
        if len(domains) >= MAX_DOMAINS:
            break
    rows, pages_ok = [], 0
    for h in domains[:MAX_DOMAINS]:
        if len(rows) >= MAX_NEW:
            break
        if not mx_ok(h):
            continue
        got = pages(h)
        if not got:
            continue
        pages_ok += 1
        for url, html in got:
            for e in sorted(emails_from(html)):
                if e in have_e:
                    continue
                if host_of(e) != h and not host_of(e).endswith(h) and not h.endswith(host_of(e)):
                    continue
                r = row(e, url)
                rows.append(r)
                have_e.add(e)
                with DISCOVERED.open('a', encoding='utf-8') as f:
                    f.write(json.dumps({'ts': now(), 'domain': h, 'source_url': url, 'country': r['country']}, ensure_ascii=False) + '\n')
                if len(rows) >= MAX_NEW:
                    break
            if len(rows) >= MAX_NEW:
                break
    added = merge(rows) if rows else 0
    elapsed = round(time.perf_counter() - t0, 3)
    health = {'ts': now(), 'status': 'ok', 'queries_run': len(qs), 'ddg_urls': hits, 'domains_tried': min(len(domains), MAX_DOMAINS), 'pages_ok': pages_ok, 'new_leads_added': added, 'elapsed_s': elapsed, 'cap': MAX_NEW}
    save(HEALTH, health)
    save(CURSOR, {'query_index': (qi + MAX_QUERIES) % len(QUERIES), 'seed_index': (si + MAX_DOMAINS) % len(SEEDS), 'ts': now()})
    print(json.dumps({'new_leads_added': added, 'domains_tried': health['domains_tried'], 'elapsed_s': elapsed, 'status': 'ok'}, ensure_ascii=False))
    return health

if __name__ == '__main__':
    run()
