#!/usr/bin/env python3
"""
Local Outreach Draft Generator — Zion Tech Group

Purpose:
- Takes a small staged lead JSON file.
- Writes explicit outreach drafts/templates to `outreach_drafts/outputs/`.
- NEVER sends email from this script.

Outputs:
- Markdown drafts per stage
- CSV summary for manual upload into your mailer or CRM
"""

import csv
import json
from pathlib import Path
from datetime import datetime
from typing import List, Dict

WORKDIR = Path('/Users/Zion/zion-support.github.io')
INPUT = WORKDIR / 'out/lead_batch_001.json'
OUTDIR = WORKDIR / 'commands/outreach_drafts/outputs'
OUTDIR.mkdir(parents=True, exist_ok=True)

# Bundle exact service fits the lead can receive.
SERVICE_MATCH_RULES = [
    # rule format: keywords -> service ids to propose
    {
        'name': 'Managed Kubernetes',
        'keywords': ['kubernetes', 'containers', 'k8s', 'platform engineering'],
        'service_ids': ['it-kubernetes-operations'],
        'subject': 'Kubernetes ops without the firefighting',
        'template': 'draft_it_kubernetes_operations',
    },
    {
        'name': 'Zero Trust Access',
        'keywords': ['vpn', 'remote access', 'zero trust', 'ztna', 'identity'],
        'service_ids': ['it-vpn-zero-trust-access'],
        'subject': 'Replace legacy VPN with Zero Trust',
        'template': 'draft_it_zero_trust_access',
    },
    {
        'name': 'Hybrid AD Modernization',
        'keywords': ['active directory', 'hybrid identity', 'windows', 'entra'],
        'service_ids': ['it-windows-hybrid-ad'],
        'subject': 'Hybrid identity for Windows environments',
        'template': 'draft_it_windows_hybrid_ad',
    },
    {
        'name': 'Observability Cost Review',
        'keywords': ['observability', 'datadog', 'splunk', 'new relic', 'monitoring'],
        'service_ids': ['it-observability-pricing-monitor'],
        'subject': 'Lower observability cost without losing signal',
        'template': 'draft_it_observability_cost_optimizer',
    },
    {
        'name': 'Disaster Recovery Testing',
        'keywords': ['disaster recovery', 'dr', 'business continuity', 'backup'],
        'service_ids': ['it-disaster-recovery-testing'],
        'subject': 'Turn DR plans into tested procedures',
        'template': 'draft_it_dr_testing',
    },
    {
        'name': 'Patch Governance',
        'keywords': ['patching', 'patch management', 'vulnerability management', 'vuln'],
        'service_ids': ['it-software-patch-governance'],
        'subject': 'Patch governance with audit-ready evidence',
        'template': 'draft_it_patch_governance',
    },
    {
        'name': 'Incident Runbook Automation',
        'keywords': ['incident response', 'mttr', 'runbook', 'on-call', 'relability'],
        'service_ids': ['it-incident-runbook-automation'],
        'subject': 'Faster incident recovery with runbook automation',
        'template': 'draft_it_runbook_automation',
    },
    {
        'name': 'API Hardening',
        'keywords': ['api', 'rest', 'graphql', 'application security', 'appsec'],
        'service_ids': ['it-api-security-review'],
        'subject': 'API security review with prioritized fixes',
        'template': 'draft_it_api_security_review',
    },
    {
        'name': 'Revenue Dashboard',
        'keywords': ['mrr', 'churn', 'arr', 'startup', 'saas', 'revenue'],
        'service_ids': ['micro-saas-revenue-dashboard'],
        'subject': 'Founder revenue intelligence in one view',
        'template': 'draft_microsaas_revenue_dashboard',
    },
    {
        'name': 'Vendor Monitoring',
        'keywords': ['vendor', 'third party', 'supplier', 'procurement', 'sla'],
        'service_ids': ['micro-saas-sla-uptime-monitor'],
        'subject': 'Vendor performance tracking before renewal',
        'template': 'draft_microsaas_vendor_monitor',
    },
]


def score_lead(lead: Dict) -> float:
    score = 0.0
    text = ' '.join(str(lead.get(k, '')).lower() for k in ['title', 'company', 'target_services', 'notes'])
    for rule in SERVICE_MATCH_RULES:
        if any(k in text for k in rule['keywords']):
            score += 1.0
    return min(score, 5.0)


def pick_services(lead: Dict) -> List[Dict]:
    text = ' '.join(str(lead.get(k, '')).lower() for k in ['title', 'company', 'target_services', 'notes', 'services_offered'])
    picked = []
    seen = set()
    for rule in SERVICE_MATCH_RULES:
        key = rule['name']
        if key in seen:
            continue
        if any(k in text for k in rule['keywords']):
            picked.append({
                'name': rule['name'],
                'subject': rule['subject'],
                'template': rule['template'],
                'service_ids': rule['service_ids'],
            })
            seen.add(key)
    return picked


def render_draft(lead: Dict, service: Dict, day_type='initial') -> Dict[str, str]:
    company = lead.get('company') or 'your team'
    name = lead.get('contact_name') or 'there'
    email = lead.get('email') or ''
    subject = service['subject']
    body = f"""Hi {name},

I noticed {company} has several priorities where {service['name']} tends to deliver fast operational impact.

I’m sharing a short option, not a hard pitch:
- {service['name']}
- Human handoff + documented runbooks
- Expectation setting before commitment

If useful, reply “send overview” and I’ll return one note tailored to your stack.
If not, I won’t follow up again.

Kleber
Kleber@ziontechgroup.com | +1 302 464 0950
Zion Tech Group
"""
    return {'subject': subject, 'body': body.strip(), 'to_email': email, 'to_name': name}


def main():
    if not INPUT.exists():
        print(f'Missing input: {INPUT}')
        return
    leads = json.loads(INPUT.read_text())
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    out_md = OUTDIR / f'drafts_{timestamp}.md'
    out_csv = OUTDIR / f'leads_summary_{timestamp}.csv'
    rows = []
    md = [f'# Outreach Drafts — {timestamp}\n']
    for i, lead in enumerate(leads, start=1):
        services = pick_services(lead)
        if not services:
            services = [{
                'name': 'IT/MicroSaaS Assessment',
                'subject': 'Quick IT win for {company}',
                'template': 'draft_generic',
                'service_ids': ['it-engineering-management'],
            }]
        lead_title = lead.get('title') or lead.get('company') or 'lead'
        md.append(f'## {i}. {lead_title} ({lead.get("source_url", "")})\n')
        for j, svc in enumerate(services, start=1):
            draft = render_draft(lead, svc, day_type='initial')
            md.append(f'### {j}. {svc["name"]}\n')
            md.append(f'Subject: {draft["subject"]}\n')
            md.append(f'{draft["body"]}\n---\n')
            rows.append({
                'lead_index': i,
                'lead_title': lead_title,
                'stage': f'day0_stage{j}',
                'subject': draft['subject'],
                'template': svc['template'],
                'service_ids': '|'.join(svc['service_ids']),
                'review_status': 'pending',
            })
        md.append('\n')
    out_md.write_text('\n'.join(md), encoding='utf-8')
    with out_csv.open('w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)
    print('wrote', out_md)
    print('wrote', out_csv)


if __name__ == '__main__':
    main()
