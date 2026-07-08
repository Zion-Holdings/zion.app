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
        
        domain_key = (domain or '').lower()
        industry_keywords = {
            'fintech': ['pagamento', 'fintech', 'bank', 'insurance', 'bancário', 'finanças'],
            'health': ['saúde', 'health', 'clínica', 'hospital', 'patient'],
            'retail': ['varejo', 'retail', 'loja', 'shop', 'commerce', 'lojas'],
            'manufacturing': ['indústria', 'manufacturing', 'fábrica', 'produto', 'industrial'],
            'logistics': ['logística', 'logistics', 'transporte', 'frete', 'supply chain'],
            'education': ['educação', 'education', 'escola', 'university', 'ensino'],
            'energy': ['energia', 'energy', 'utilities', 'elétrica', 'solar'],
            'telecom': ['telecom', 'isp', 'operadora', 'carrier', 'banda larga'],
            'government': ['gov', 'prefeitura', 'município', 'público', 'secretaria'],
            'legal': ['jurídico', 'legal', 'law', 'advogado', 'compliance'],
            'hr': ['rh', 'hr', 'talent', 'pessoas', 'people'],
            'realestate': ['imobiliária', 'real estate', 'propriedade', 'construção'],
            'agriculture': ['agro', 'agricultura', 'agritech', 'fazenda'],
            'media': ['mídia', 'media', 'streaming', 'conteúdo', 'publisher']
        }
        selected_industry = None
        for industry, keywords in industry_keywords.items():
            if any(k in domain_key for k in keywords):
                selected_industry = industry
                break
        if company_name:
            lower_name = company_name.lower()
            for industry, keywords in industry_keywords.items():
                if any(k in lower_name for k in keywords):
                    selected_industry = industry
                    break
        industry_templates = {
            'fintech': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo sinergia entre nossas operações em fintech/seguros/bancos, especialmente em automação inteligente e redução de custos com IA.</p><ul><li>Detecção de fraude e automação de operações financeiras</li><li>Otimização de custos cloud e governança de dados</li><li>Ferramentas gratuitas para começar rápido</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'health': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Acredito que podemos criar valor mútuo em saúde digital, automação de suporte e privacidade de dados.</p><ul><li>Automação de fluxos assistenciais e apoio a operações clínicas</li><li>Observabilidade e resposta a incidentes</li><li>Ferramentas gratuitas para avaliação inicial</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'retail': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo oportunidades em automação comercial, experiência do cliente e redução de custos operacionais.</p><ul><li>Automação de atendimento e inteligência comercial</li><li>Otimização de operações de loja e logística</li><li>Ferramentas gratuitas para começar</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'manufacturing': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo possível colaboração em indústria inteligente, manutenção preditiva e qualidade.</p><ul><li>Digital twin, automação e manutenção preventiva</li><li>Otimização de produção e redução de paradas</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'logistics': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo parceria relevante em logística, rastreabilidade e redução de custos operacionais.</p><ul><li>Visibilidade de cadeia e automação de operações logísticas</li><li>Previsão de demanda e otimização de rotas</li><li>Ferramentas gratuitas para iniciar</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'education': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo possibilidade de colaboração em educação, plataformas digitais e inteligência de aprendizagem.</p><ul><li>Personalização de conteúdo e automação de suporte</li><li>Melhoria de experiência e redução de evasão</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'energy': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo potencial em energia, utilities e otimização de ativos.</p><ul><li>Gestão inteligente de ativos e eficiência energética</li><li>Previsão de demanda e redução de desperdício</li><li>Ferramentas gratuitas para pilotos</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'telecom': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo colaboração em telecom, experiência do cliente e automação de operações.</p><ul><li>Atendimento inteligente e redução de falhas</li><li>Automação de operações e resposta a incidentes</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'government': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo oportunidades digitais em serviços públicos e eficiência operacional.</p><ul><li>Automação de fluxos e atendimento ao cidadão</li><li>Segurança, conformidade e governança</li><li>Ferramentas gratuitas para análise inicial</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'legal': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo sinergia em tecnologia jurídica, automação e inteligência de contratos.</p><ul><li>Automação de documentos e fluxos jurídicos</li><li>Conformidade, risco e governança</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'hr': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo oportunidades em RH digital, talento e experiência do colaborador.</p><ul><li>Automação de recrutamento e suporte RH</li><li>Analytics de pessoas e retenção</li><li>Ferramentas gratuitas para começar</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'realestate': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo sinergia em experiência do cliente, operações imobiliárias e automação.</p><ul><li>Automação de atendimento e qualificação</li><li>Otimização de processos e redução de custos</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'agriculture': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo oportunidades em agritech, dados e automação.</p><ul><li>Monitoramento inteligente e redução de perdas</li><li>Previsão e otimização operacional</li><li>Ferramentas gratuitas para pilotos</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"""),
            'media': ("""<p>Olá {name},</p><p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vejo parceria relevante em mídia, conteúdo e automação de operações digitais.</p><ul><li>Automação de publicação e recomendação</li><li>Monetização e retenção de audiência</li><li>Ferramentas gratuitas para avaliação</li></ul><p>Conheça nossos serviços: https://ziontechgroup.com</p><p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>""")
        }
        if selected_industry and selected_industry in industry_templates:
            body = industry_templates[selected_industry].format(name=company_name)
        else:
            body = (
                f"<p>Olá {company_name},</p>"
                "<p>Sou Kleber Garcia Alcatrão, Presidente da <strong>Zion Tech Group</strong>. "
                "Temos atuado em AI/IT managed services e gostaria de explorar uma colaboração prática com necessidades reais da sua operação.</p>"
                "<ul>"
                "<li>Automação inteligente e suporte contínuo a incidentes</li>"
                "<li>Otimização de custos cloud/IA e modernização de plataformas</li>"
                "<li>Acesso a ferramentas e serviços gratuitos para começar rápido</li>"
                "</ul>"
                "<p>Conheça nossos serviços: https://ziontechgroup.com</p>"
                "<p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>"
            )
        if subject.startswith('Parceria'):
            subject = 'Proposta de valor conjunto — ' + company_name
        elif 'orçamento' in (r.get('subject') or '').lower():
            subject = 'Proposta comercial direta — ' + company_name
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