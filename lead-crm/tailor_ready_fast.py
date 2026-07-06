#!/usr/bin/env python3
"""
Tailor outreach_ready_canonical.json via fast deterministic templates (no LLM wait).
Writes tailored-canonical.json with same schema for downstream sender.
"""
import json, os, sys
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
CANONICAL = LEAD_DIR / 'outreach_ready_canonical.json'
OUT = LEAD_DIR / 'outreach_tailored_canonical.json'

def _now():
    return datetime.now(timezone.utc).isoformat()

def _load_json(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return {}

def _dedupe_subject_style(subject, seen_subjects):
    base = subject.lower().strip()
    if base not in seen_subjects:
        seen_subjects.add(base)
        return subject
    suffixes = [' — novas oportunidades', ' — colaboração', ' — sinergia', ' — rápido alinhamento', ' — proposta']
    for suf in suffixes:
        candidate = base + suf
        if candidate not in seen_subjects:
            seen_subjects.add(candidate)
            return subject + suf
    return subject

def main():
    payload = _load_json(CANONICAL)
    ready = payload.get('ready') or []
    if not ready:
        print(json.dumps({'updated': 0, 'error': 'empty_ready'}, ensure_ascii=False))
        return
    seen_subjects = set()
    updated = 0
    out_rows = []
    for r in ready:
        to = r.get('to') or r.get('email') or r.get('recipient') or ''
        company = r.get('name') or ''
        domain = ''
        try:
            domain = to.split('@',1)[1].lower()
        except Exception:
            pass
        company_name = company or (domain.split('.')[0] if domain else 'parceiro')
        # deterministic but slightly varied per recipient
        subject = r.get('subject') or f'Parceria em {company_name} — Zion Tech Group'
        
        variations = [
            ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, Presidente da <strong>Zion Tech Group</strong>. Temos atuado em AI/IT managed services e gostaria de explorar uma colaboração prática com necessidades reais da sua operação.</p><ul><li>Automação inteligente e suporte contínuo a incidentes</li><li>Otimização de custos cloud/IA e modernização de plataformas</li><li>Acesso a ferramentas e serviços gratuitos para começar rápido</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vi potencial real de criar valor mútuo entre nossas operações.</p><ul><li>NOC/SOC gerenciado adaptado ao seu modelo 24x7</li><li>Ferramentas AI conjuntas para reduzir carga L2 e tempo de resolução</li><li>Co-venda de serviços AI gerenciados em seus mercados</li></ul><p>Explore o que temos: https://ziontechgroup.com</p><p>Marque um alinhamento: https://calendly.com/kleber-ziontechgroup</p>"""),
            ("""<p>Olá {name},</p><p>Kleber Garcia Alcatrão, Zion Tech Group. Busco parcerias que vão além do genérico — focadas em resultados operacionais.</p><ul><li>Automação inteligente para TI e resposta a incidentes</li><li>FinOps cloud/IA e modernização de plataforma de desenvolvimento</li><li>Ferramentas e serviços gratuitos disponíveis hoje</li></ul><p>Visite: https://ziontechgroup.com</p><p>Agende: https://calendly.com/kleber-ziontechgroup</p>"""),
        ]
        import hashlib
        idx = int(hashlib.md5(to.encode()).hexdigest(), 16) % len(variations)
        body_tmpl = variations[idx]
        body = body_tmpl.format(name=company_name)
        subject = _dedupe_subject_style(subject, seen_subjects)
        out = dict(r)
        out['subject'] = subject
        out['body'] = body
        out['tailored_at'] = _now()
        out['llm_provider'] = 'deterministic-template-v2'
        out_rows.append(out)
        updated += 1
    out_payload = dict(payload)
    out_payload['ready'] = out_rows
    out_payload['tailored_at'] = _now()
    out_payload['tailored_by'] = 'lead-crm/tailor_ready_fast.py'
    OUT.write_text(json.dumps(out_payload, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'updated': updated, 'out': str(OUT)}, ensure_ascii=False))

if __name__ == '__main__':
    main()