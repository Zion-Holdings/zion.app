import json
import os
import random
import re
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path


PROJECT_ROOT = Path('/Users/klebergarciaalcatrao')
DATA_ROOT = PROJECT_ROOT / 'app' / 'data'
OUT_DIR = PROJECT_ROOT / 'data' / 'outreach'
LATEST_PATH = DATA_ROOT / 'outreach' / 'latest_outreach.json'
SENT_PATH = DATA_ROOT / 'outreach' / 'sent_log.json'
DISCOVERED_PATH = DATA_ROOT / 'discovered_leads.json'
QUERIES_PATH = DATA_ROOT / 'it_service_queries.json'
OUT_DIR.mkdir(parents=True, exist_ok=True)
DATA_ROOT.mkdir(parents=True, exist_ok=True)


DEFAULT_QUERIES = [
  "managed IT for small business Brazil contact",
  "managed service provider partnership Brazil",
  "cybersecurity managed services Brazil contact",
  "email security gateway vendor Brazil",
  "cloud managed services contact São Paulo",
  "DevOps managed support contact Brazil",
  "SaaS small business IT support Brazil",
  "zero trust identity partner Brazil",
  "SOC managed services Brazil contact",
  "AI implementation small business Brazil contact"
]


def load_queries():
  try:
    if QUERIES_PATH.exists():
      data = json.loads(QUERIES_PATH.read_text())
      if isinstance(data, list) and data:
        return [str(x) for x in data]
  except Exception:
    pass
  return DEFAULT_QUERIES


def load_json(path, default):
  try:
    if Path(path).exists():
      return json.loads(Path(path).read_text())
  except Exception:
    pass
  return default


def save_json(path, value):
  Path(path).write_text(json.dumps(value, indent=2, ensure_ascii=False), encoding='utf-8')


ROLE_RE = re.compile(
  r"\b(cio|cto|ceo|it\s*director|head\s*of\s*it|gerente\s*de\s*ti|coordenador\s*de\s*ti|ciso|vp\s*it)\b",
  re.I,
)
NOISE_LOCAL = {
  'admin', 'info', 'contact', 'hello', 'hi', 'support', 'help', 'office',
  'enquiries', 'enquiry', 'marketing', 'comercial', 'sac', 'atendimento',
  'rh', 'imprensa', 'jobs', 'careers', 'noreply', 'no-reply'
}
PLATFORMS = {
  'azureedge.net', 'azurewebsites.net', 'cloudfront.net', 'cloudflare.com',
  'github.com', 'googleapis.com', 'googleusercontent.com', 'amazonaws.com',
  'azurefd.net', 'windows.net'
}
TLD_BAD = {'gov', 'edu', 'mil', 'gov.br', 'edu.br', 'mil.br'}


def random_agent():
  return random.choice([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0 Safari/537.36'
  ])


def http_get(url, timeout=28):
  req = urllib.request.Request(url, headers={'User-Agent': random_agent()})
  with urllib.request.urlopen(req, timeout=timeout) as resp:
    return resp.read().decode('utf-8', errors='ignore')


def ddg_lite(query):
  data = urllib.parse.urlencode({'q': query}).encode()
  req = urllib.request.Request(
    'https://lite.duckduckgo.com/lite/',
    data=data,
    method='POST',
    headers={'User-Agent': random_agent(), 'Content-Type': 'application/x-www-form-urlencoded'}
  )
  try:
    with urllib.request.urlopen(req, timeout=28) as resp:
      return resp.read().decode('utf-8', errors='ignore')
  except Exception:
    return ''


class SimpleLinkExtractor(HTMLParser):
  def __init__(self):
    super().__init__()
    self.links = []
    self._in_a = False
    self._href = ''

  def handle_starttag(self, tag, attrs):
    attrs = attrs or []
    if tag == 'a':
      href = dict(attrs).get('href', '').strip()
      self._in_a = bool(href)
      self._href = href

  def handle_endtag(self, tag):
    if tag == 'a' and self._in_a and self._href.startswith('http'):
      self.links.append(self._href)
    self._in_a = False
    self._href = ''


def extract_links(html):
  p = SimpleLinkExtractor()
  try:
    p.feed(html)
  except Exception:
    pass
  out = []
  seen = set()
  for u in p.links:
    if u in seen:
      continue
    seen.add(u)
    if u.startswith('http'):
      out.append(u)
  for raw in re.findall(r'href="(https?://[^"]+)"', html):
    if raw not in seen:
      seen.add(raw)
      out.append(raw)
  return list(dict.fromkeys(out))[:40]


def email_quality(local, domain, context):
  if local in NOISE_LOCAL or local.startswith('noreply') or local.startswith('no-reply') or len(local) < 2:
    return -1
  ext = domain.rsplit('.', 1)[-1].lower()
  if len(ext) < 2 or len(ext) > 7 or not re.fullmatch(r'[a-z]+', ext):
    return -1
  if any(domain.endswith('.' + t) for t in TLD_BAD):
    return -1
  if any(p in domain.lower() for p in PLATFORMS):
    return -1
  score = 50
  if ROLE_RE.search(local + ' ' + context):
    score += 24
  score += min(18, max(1, 5 + len(domain) % 6))
  return min(94, score)


def main():
  queries = load_queries()
  latest = load_json(LATEST_PATH, [])
  sent = load_json(SENT_PATH, {})
  discovered = load_json(DISCOVERED_PATH, [])
  if not isinstance(latest, list):
    latest = []
  if not isinstance(discovered, list):
    discovered = []
  sent_emails = {str(k).lower() for k in sent}
  latest_emails = {str(r.get('email', '')).lower() for r in latest if isinstance(r, dict) and r.get('email')}
  existing_email = {str(r.get('email', '')).lower() for r in discovered if isinstance(r, dict) and r.get('email')}
  existing_company = {str(r.get('company', '')).strip().lower() for r in discovered if isinstance(r, dict) and r.get('company')}

  unique_domain = {}
  seen_pages = set()
  checked_links = 0
  collected = 0

  for query in queries:
    html = ddg_lite(query)
    if not html:
      continue
    text = html[:220].lower()
    links = extract_links(html)
    for link in links[:16]:
      if link in seen_pages:
        continue
      seen_pages.add(link)
      page = ''
      try:
        page = http_get(link, timeout=28)
      except Exception:
        page = ''
      checked_links += 1
      time.sleep(random.uniform(0.22, 0.72))
      if not page:
        continue
      if any(p in link.lower() for p in PLATFORMS):
        continue
      candidates = page + ' ' + text
      for raw in sorted(set(re.findall(r'[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}', candidates))):
        try:
          local, domain = raw.lower().split('@', 1)
        except ValueError:
          continue
        q = email_quality(local, domain, candidates.lower())
        if q < 0:
          continue
        if domain not in unique_domain or q > int(unique_domain[domain].get('score', 0)):
          unique_domain[domain] = {
            'email': raw.lower(),
            'company': domain.split('.')[0].replace('-', ' ').replace('_', ' ').title()[:80],
            'industry': 'IT Services',
            'query': query,
            'score': q,
            'discovered_at': datetime.now(timezone.utc).isoformat(),
            'source': 'free-search-2026-06-29'
          }

    time.sleep(random.uniform(0.3, 0.9))
    if checked_links >= 90:
      break

  rows = []
  for rec in unique_domain.values():
    email = rec['email'].lower()
    if email in sent_emails or email in latest_emails or email in existing_email:
      continue
    company = rec['company'].strip().lower()
    if company in existing_company:
      continue
    rows.append(rec)
    if len(rows) >= 120:
      break

  added = []
  for r in rows:
    entry = {
      **r,
      'status': 'New',
      'verified': False,
      'lastContact': None,
      'activities': [{
        'timestamp': r.get('discovered_at'),
        'action': f"Discovered via {r.get('source', 'free-search')}: {r.get('industry', 'IT Services')}"
      }]
    }
    discovered.append(entry)
    existing_email.add(r['email'].lower())
    existing_company.add(r['company'].lower())
    latest.append(entry)
    added.append(r)

  save_json(DISCOVERED_PATH, discovered)
  save_json(LATEST_PATH, latest)

  report = {
    'discovered_domains': len(unique_domain),
    'new_leads': len(added),
    'checked_links': checked_links,
    'queries_used': len(queries),
    'ts': datetime.now(timezone.utc).isoformat()
  }
  out = OUT_DIR / 'discover_report_2026-06-29.json'
  save_json(out, report)
  print(json.dumps({**report, 'out': str(out)}, ensure_ascii=False))


if __name__ == '__main__':
  main()
