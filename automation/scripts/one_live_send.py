#!/usr/bin/env python3
import json, os, random, re, subprocess, sys, time, urllib.parse, urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

REPO = Path('/Users/miami2/zion.app')
DISCOVERED = REPO / 'app' / 'data' / 'discovered_leads.json'
LEDGER = REPO / 'outreach_monitor' / 'processed' / 'hot_followup_reply_ledger.jsonl'
RUN_REPORT = REPO / 'automation' / 'reports' / 'hot-followup-autonomous-sender-latest.json'
MAX_SENDS_PER_RUN = 10

NOISE_SUBJECT = ['summit','presencial','event','webinar','conference','meetup','ticket','ingresso','pass']
BAD_LOCAL = {'career','jobs','hr','support','info','contact','hello','marketing','sales','admin','webmaster','feedback','noreply','no-reply','donotreply','do-not-reply','unsubscribe','website'}
BAD_DOMAIN_HINTS = ('example.com','test.com','domain.com','eample.com','sample.com','fake.com','.png','.jpg','.jpeg','.gif','.svg','.zip','.exe')
DISPOSABLE_HINTS = ('tempmail','guerrillamail','mailinator','throwaway','fakeinbox','yopmail','10minutemail','dispostable','trashmail')

USER_AGENTS = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36',
]

def _now():
    return datetime.now(timezone.utc)

def _now_iso():
    return _now().isoformat()

def _append_jsonl(path, record):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')

def _load_sent_set():
    sent = set()
    for path in [REPO / 'lead-crm' / 'outreach_sent_history.jsonl', REPO / 'lead-crm' / 'ceo_outreach_ledger.jsonl', LEDGER]:
        if not path.exists():
            continue
        for line in path.read_text(encoding='utf-8', errors='ignore').splitlines():
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
            except Exception:
                continue
            to = str(obj.get('to') or '').strip().lower()
            if to:
                sent.add(to)
    return sent

def _email_quality(email: str):
    if not email or '@' not in email:
        return False, 'missing'
    parts = email.split('@', 1)
    if len(parts) != 2:
        return False, 'bad_shape'
    local, domain = parts
    local = local.split('+')[0].lower()
    domain = domain.lower()
    if len(local) < 2:
        return False, 'too_short_local'
    if len(domain) < 4 or '.' not in domain:
        return False, 'too_short_domain'
    if any(h in domain for h in BAD_DOMAIN_HINTS):
        return False, 'bad_domain'
    if any(h in domain for h in DISPOSABLE_HINTS):
        return False, 'disposable'
    if local in BAD_LOCAL or 'unsubscribe' in local or 'do-not' in local:
        return False, 'bad_local'
    return True, 'ok'

def _send_gog(to, subject, body):
    safe_subject = subject.replace('"', "'")
    body_file = REPO / 'automation' / 'reports' / f"body-{datetime.now(timezone.utc).timestamp()}-{to.split('@')[0]}.txt"
    body_file.write_text(body, encoding='utf-8')
    cmd = 'gog gmail send --to "' + to + '" --subject "' + safe_subject + '" --body-file "' + str(body_file) + '" --account kleber@ziontechgroup.com --no-input'
    out = subprocess.run(cmd, shell=True, capture_output=True, text=True).stdout
    mid = None
    for line in out.splitlines():
        if line.startswith('message_id\t'):
            mid = line.split('\t', 1)[1].strip()
    try:
        body_file.unlink()
    except Exception:
        pass
    return mid


class _LinkExtractor(HTMLParser):
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


def _random_agent():
    return random.choice(USER_AGENTS)


def _http_get(url: str, timeout: int = 25) -> str:
    req = urllib.request.Request(url, headers={'User-Agent': _random_agent(), 'Accept': 'text/html'})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode('utf-8', errors='ignore')


def _extract_links(html: str):
    p = _LinkExtractor()
    try:
        p.feed(html)
    except Exception:
        pass
    seen = set()
    out = []
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


def main():
    send_attempted = 0
    send_succeeded = 0
    send_failed = 0
    selected = []
    errors = []
    searched_leads = []

    if DISCOVERED.exists():
        try:
            searched_leads = json.loads(DISCOVERED.read_text(encoding='utf-8'))
            if not isinstance(searched_leads, list):
                searched_leads = []
        except Exception:
            searched_leads = []

    sent = _load_sent_set()
    for lead in searched_leads:
        if send_attempted >= MAX_SENDS_PER_RUN:
            break
        if not isinstance(lead, dict):
            continue
        to = (lead.get('email') or '').strip()
        if not to or '@' not in to or 'ziontechgroup.com' in to.lower():
            continue
        if to.lower() in sent:
            continue
        ok, reason = _email_quality(to)
        if not ok:
            errors.append({'to': to, 'error': reason})
            continue
        subject = lead.get('subject') or 'AI implementation proposal'
        company = lead.get('company') or 'your team'
        name = (lead.get('name') or 'Contact').split()[0]
        provided_body = (lead.get('body') or '').strip()
        if provided_body:
            body = provided_body
        else:
            body = f"{name},\nThank you for the opportunity to connect with Zion Tech Group.\nA few concrete overlaps:\n- AI roadmap and automation\n- Integration and managed services\n- Security/compliance posture\n\nBest next step:\n- 15-minute working session on measurable proof points\n- A lightweight automation/AI pilot with a 30-day KPI window\n\nIf useful, we can run this quickly:\nhttps://calendly.com/kleber-ziontechgroup\n\nProof & free tools:\nhttps://ziontechgroup.com\n\nBest,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        send_attempted += 1
        try:
            mid = _send_gog(to, subject, body)
            if mid:
                send_succeeded += 1
                _append_jsonl(LEDGER, {'ts': _now_iso(), 'to': to, 'subject': subject, 'message_id': mid, 'status': 'sent'})
                selected.append({'to': to, 'message_id': mid, 'subject': subject})
            else:
                raise RuntimeError('no_message_id')
        except Exception as e:
            send_failed += 1
            errors.append({'to': to, 'error': str(e)[:300]})
        sent.add(to.lower())
        time.sleep(1)

    report = {
        'ts': _now_iso(),
        'run_id': _now().strftime('%Y%m%d-%H%M%S'),
        'mode': 'live',
        'active_send_path': os.environ.get('HOT_FOLLOWUP_ALLOW_SEND') == '1',
        'send_attempted': send_attempted,
        'send_succeeded': send_succeeded,
        'send_failed': send_failed,
        'selected': selected,
        'errors': errors,
    }
    RUN_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))


if __name__ == '__main__':
    main()
