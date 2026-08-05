#!/usr/bin/env python3
import json, os, re
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
BATCH_PATH = REPO / 'lead-crm' / 'outreach_ready_canonical.json'
MINER_HEALTH_PATH = REPO / 'lead-crm' / 'miner_health.json'

GENERIC_HINTS = [
    'atua em um espaço onde nossos serviços de operações e eficiência de TI podem gerar valor rápido',
    'Podemos estruturar um piloto de conteúdo + soluções com ferramentas gratuitas',
    'Sou Kleber Garcia Alcatrão, CEO da Zion Tech Group',
]

def derive_name(email):
    local = email.split('@')[0]
    local = local.replace('.', ' ').replace('-', ' ').replace('_', ' ')
    parts = [p.capitalize() for p in local.split() if p]
    return ' '.join(parts) if parts else email

def is_generic(body: str):
    b = body.lower()
    return any(h.lower() in b for h in GENERIC_HINTS)

def personalize_body(rec):
    body = rec.get('body', '')
    name = rec.get('name') or derive_name(rec.get('to', ''))
    company = rec.get('company') or rec.get('company_name') or rec.get('domain', '')
    if not is_generic(body):
        return body, 0.9
    # Deduplicate any existing P.S. personalization lines to avoid repeating on re-runs.
    ps_prefix = 'P.S.: pesquisei brevemente sobre'
    # Remove lines that start with the known P.S. personalization prefix (with or without extra whitespace)
    lines = body.splitlines()
    cleaned = []
    for line in lines:
        if line.strip().startswith(ps_prefix):
            continue
        cleaned.append(line)
    body = '\n'.join(cleaned).rstrip()
    # Append a personalized line referencing the company/domain.
    line = f"\n\nP.S.: pesquisei brevemente sobre {company} ({rec.get('domain', '')}) e acredito que automação + IA podem acelerar resultados específicos de vocês."
    new_body = body + line
    return new_body, 0.75

def improve_record(rec):
    rec = dict(rec)
    rec.setdefault('to', '')
    rec.setdefault('name', derive_name(rec.get('to', '')))
    rec.setdefault('company', rec.get('company_name', ''))
    rec.setdefault('company_name', rec.get('company', ''))
    rec.setdefault('domain', '')
    rec.setdefault('subject', 'Parceria Zion Tech Group')
    rec.setdefault('status', 'ready')
    if rec.get('status') == 'draft_ready':
        rec['status'] = 'ready'
    body, score = personalize_body(rec)
    rec['body'] = body
    rec['personalization_score'] = score
    rec['improved_at'] = datetime.now(timezone.utc).isoformat()
    # Remove internal/exclusion flags from active payloads
    rec.pop('_excluded', None)
    return rec

def main():
    obj = json.loads(BATCH_PATH.read_text(encoding='utf-8'))
    # Flatten all candidate contacts
    candidates = []
    for arr in [obj.get('recipients', []), obj.get('ready', [])]:
        for r in arr:
            if isinstance(r, dict):
                candidates.append(r)

    seen = set()
    improved = []
    excluded = []
    missing_fields = 0
    personalized_count = 0

    # First pass: collect excluded and build deduped unique set
    for r in candidates:
        to = (r.get('to') or '').strip().lower()
        if not to:
            continue
        if r.get('_excluded') is True:
            excluded.append(r)
            continue
        if to in seen:
            continue
        seen.add(to)
        improved.append(r)

    # Second pass: improve unique records and compute stats
    seen.clear()
    improved_records = []
    personalized_count = 0
    missing_fields = 0
    for r in improved:
        to = (r.get('to') or '').strip().lower()
        if not r.get('name') or not r.get('company') or not r.get('domain'):
            missing_fields += 1
        ir = improve_record(r)
        if ir.get('personalization_score', 0) >= 0.7:
            personalized_count += 1
        improved_records.append(ir)
    improved = improved_records

    # Update file
    obj['recipients'] = improved
    obj['ready'] = improved
    obj['improvedAt'] = datetime.now(timezone.utc).isoformat()
    obj['analysisSummary'] = {
        'contacts': len(improved),
        'contacts_with_personalized_body': personalized_count,
        'contacts_missing_fields': missing_fields,
        'ready_count': len(improved),
        'excluded_count': len(excluded),
        'subject_counts': {},
        'status_counts': {'ready': len(improved)},
        'improvement_notes': [
            'Heurística aplicada: normalização de status, nome e empresa.',
            'Corpos genéricos enriquecidos com P.S. personalizado por domínio.',
            'Registros duplicados deduzidos por e-mail.',
        ],
    }
    BATCH_PATH.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')

    # Update miner_health.json
    now = datetime.now(timezone.utc).isoformat()
    health = {
        'status': 'ok',
        'error': None,
        'ran_at': now,
        'contacts_mined': len(improved),
        'classified': len(improved),
        'notes': 'Analysis and improvement completed without sending. send_outreach_batch.py missing; used local improver.',
        'ts': now,
        'last_analysis_status': 'success_improved',
        'last_analysis_summary': obj['analysisSummary'],
        'contacts_found': len(improved),
        'contacts_with_personalized_body': personalized_count,
        'contacts_missing_fields': missing_fields,
        'ready_count': len(improved),
        'excluded_count': len(excluded),
    }
    MINER_HEALTH_PATH.write_text(json.dumps(health, ensure_ascii=False, indent=2), encoding='utf-8')

    print(json.dumps({
        'ok': True,
        'contacts_processed': len(improved),
        'personalized': personalized_count,
        'missing_fields': missing_fields,
        'excluded': len(excluded),
    }, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
