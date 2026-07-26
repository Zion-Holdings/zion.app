#!/usr/bin/env python3
import json, os, datetime, re
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')

def _now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def score_lead(lead):
    score = 0
    score += min(lead.get('priority', 0), 100)
    high_value_industries = {'healthcare', 'financial services', 'insurance', 'technology', 'saas', 'ecommerce'}
    industry = (lead.get('industry') or '').lower()
    if any(hvi in industry for hvi in high_value_industries):
        score += 20
    high_value_personas = {'cto', 'cio', 'ceo', 'vp-engineering', 'vp-product', 'head-data'}
    persona = (lead.get('persona') or '').lower()
    if persona in high_value_personas:
        score += 15
    high_value_services = {'ai', 'automation', 'security', 'analytics', 'integration'}
    services = ' '.join(lead.get('services_primary', []) or []).lower()
    if any(hvs in services for hvs in high_value_services):
        score += 15
    email = lead.get('to', '')
    if email and re.match(r'^[^@]+@[^@]+\.[^@]+$', email):
        score += 10
    return min(score, 100)

def main():
    queue_path = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
    if not queue_path.exists():
        print(json.dumps({'error': 'missing queue'}, ensure_ascii=False))
        return

    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    ready = queue.get('ready') or []

    scored = []
    for lead in ready:
        lead_score = score_lead(lead)
        lead['lead_score'] = lead_score
        lead['scored_at'] = _now()
        scored.append(lead)

    scored.sort(key=lambda x: x.get('lead_score', 0), reverse=True)

    output_path = REPO / 'lead-crm' / 'lead_scored.json'
    output_path.write_text(json.dumps({
        'generatedAt': _now(),
        'totalLeads': len(scored),
        'highPriorityCount': sum(1 for l in scored if l.get('lead_score', 0) >= 80),
        'leads': scored,
    }, ensure_ascii=False, indent=2), encoding='utf-8')

    print(json.dumps({
        'generatedAt': _now(),
        'totalLeads': len(scored),
        'highPriorityCount': sum(1 for l in scored if l.get('lead_score', 0) >= 80),
        'top3': [{'to': l.get('to'), 'company': l.get('company_name'), 'score': l.get('lead_score')} for l in scored[:3]],
    }, ensure_ascii=False))

if __name__ == '__main__':
    main()
