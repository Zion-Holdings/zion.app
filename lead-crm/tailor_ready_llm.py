#!/usr/bin/env python3
"""
Tailor outreach_ready_canonical.json via LLM (with fallback) into personalized Portuguese CEO emails.
Queries thread context for true personalization. Falls back to deterministic templates.
Writes tailored-canonical.json with same schema for downstream sender.
"""
import json, os, sys, time, hashlib
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
LEAD_DIR = REPO / 'lead-crm'
CANONICAL = LEAD_DIR / 'outreach_ready_canonical.json'
OUT = LEAD_DIR / 'outreach_tailored_canonical.json'
LOG = LEAD_DIR / 'tailor_log.jsonl'

def _now():
    return datetime.now(timezone.utc).isoformat()

def _load_json(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return {}

def _save_json(path, obj):
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')

def _append_log(entry: dict):
    entry['ts'] = _now()
    try:
        with open(LOG, 'a', encoding='utf-8') as f:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')
    except Exception:
        pass

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

def _call_llm_chat(messages, model=None, temperature=0.35, max_tokens=500):
    # Primary: lib.llm_client with OpenRouter/Ollama fallback chain
    try:
        sys.path.insert(0, str(REPO / 'lib'))
        from lib.llm_client import chat as lib_chat
        res = lib_chat(messages, provider="auto", temperature=temperature, max_tokens=max_tokens)
        if isinstance(res, dict) and (res.get('content') or '').strip():
            return {'content': res.get('content','').strip(), 'provider': res.get('provider', 'lib'), 'model': res.get('model', '')}
    except Exception:
        pass
    # Secondary: Nous provider with auth.json/PAT
    try:
        sys.path.insert(0, str(LEAD_DIR))
        from nous_llm import chat as nous_chat
        res = nous_chat(messages, model=model, temperature=temperature, max_tokens=max_tokens)
        if isinstance(res, dict) and (res.get('content') or '').strip():
            return {'content': res.get('content','').strip(), 'provider': res.get('provider', 'nous'), 'model': res.get('model', '')}
    except Exception as e:
        return {'content': '', 'provider': 'error', 'model': '', 'error': str(e)}
    return {'content': '', 'provider': 'no-llm', 'model': ''}

def _get_thread_context(thread_id):
    """Fetch recent thread context for personalization."""
    try:
        sys.path.insert(0, str(REPO / 'commands'))
        from commands.google_workspace import gmail_thread_get, gmail_get, extract_body_from_gmail_message
        msgs = gmail_thread_get(thread_id)
        if not msgs:
            return {}
        latest = msgs[-1].get('id')
        full = gmail_get(latest)
        body = extract_body_from_gmail_message(full) or ''
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        return {
            'latest_subject': headers.get('Subject', ''),
            'latest_from': headers.get('From', ''),
            'latest_body': body[:4000],
        }
    except Exception:
        return {}

def _decode_mime_words(s: str) -> str:
    try:
        import email.header
        parts = email.header.decode_header(s)
        return ''.join(part.decode(enc or 'utf-8', errors='replace') if isinstance(part, bytes) else part for part, enc in parts)
    except Exception:
        return s

def _template_fallback(company_name, to, idx):
    """Deterministic but varied fallback templates."""
    variations = [
        f"""<p>Olá {company_name},</p>
<p>Sou Kleber Garcia Alcatrão, Presidente da <strong>Zion Tech Group</strong>. Temos atuado em AI/IT managed services e gostaria de explorar uma colaboração prática com necessidades reais da sua operação.</p>
<ul>
<li>Automação inteligente e suporte contínuo a incidentes</li>
<li>Otimização de custos cloud/IA e modernização de plataformas</li>
<li>Acesso a ferramentas e serviços gratuitos para começar rápido</li>
</ul>
<p>Conheça nossos serviços: https://ziontechgroup.com</p>
<p>Agende uma conversa: https://calendly.com/kleber-ziontechgroup</p>""",
        f"""<p>Olá {company_name},</p>
<p>Sou Kleber Garcia Alcatrão, CEO da <strong>Zion Tech Group</strong>. Vi potencial real de criar valor mútuo entre nossas operações.</p>
<ul>
<li>NOC/SOC gerenciado adaptado ao seu modelo 24x7</li>
<li>Ferramentas AI conjuntas para reduzir carga L2 e tempo de resolução</li>
<li>Co-venda de serviços AI gerenciados em seus mercados</li>
</ul>
<p>Explore o que temos: https://ziontechgroup.com</p>
<p>Marque um alinhamento: https://calendly.com/kleber-ziontechgroup</p>""",
        f"""<p>Olá {company_name},</p>
<p>Kleber Garcia Alcatrão, Zion Tech Group. Busco parcerias que vão além do genérico — focadas em resultados operacionais.</p>
<ul>
<li>Automação inteligente para TI e resposta a incidentes</li>
<li>FinOps cloud/IA e modernização de plataforma de desenvolvimento</li>
<li>Ferramentas e serviços gratuitos disponíveis hoje</li>
</ul>
<p>Visite: https://ziontechgroup.com</p>
<p>Agende: https://calendly.com/kleber-ziontechgroup</p>""",
    ]
    return variations[idx % len(variations)]

def main():
    payload = _load_json(CANONICAL)
    ready = payload.get('ready') or []
    if not ready:
        print(json.dumps({'updated': 0, 'error': 'empty_ready'}, ensure_ascii=False))
        return
    max_items = int(os.environ.get('TAILOR_MAX_ITEMS', '0') or '0')
    if max_items > 0:
        ready = ready[:max_items]
    seen_subjects = set()
    updated = 0
    llm_success = 0
    out_rows = []
    for i, r in enumerate(ready):
        to = r.get('to') or r.get('email') or r.get('recipient') or ''
        company = r.get('name') or ''
        domain = ''
        try:
            domain = to.split('@',1)[1].lower()
        except Exception:
            pass
        company_name = company or (domain.split('.')[0] if domain else 'parceiro')
        thread_id = r.get('thread_id') or ''
        
        # Get thread context for personalization
        context = _get_thread_context(thread_id) if thread_id else {}
        
        subject = r.get('subject') or f'Parceria em {company_name} — Zion Tech Group'
        body = r.get('body') or ''
        
        messages = [
            {"role": "system", "content": "Rewrite business outreach emails naturally in Portuguese. Friendly, professional, concise. Do not invent facts. Keep under 200 words."},
            {"role": "user", "content": f"""Thread context:
Subject: {_decode_mime_words(context.get('latest_subject',''))}
From: {context.get('latest_from','')}
Body: {context.get('latest_body','')[:2000]}

Recipient: {to}
Company: {company_name}
Existing subject: {subject}
Existing body: {body[:1500]}

Requirements:
- Friendly but professional Portuguese
- Reference prior context naturally if relevant (keep brief)
- Highlight Zion AI/IT managed services and free tools
- Clear CTA: https://calendly.com/kleber-ziontechgroup
- Website: https://ziontechgroup.com
- Sign as Kleber Garcia Alcatrão, President/CEO, +1 302 464 0950
- 1-2 specific mutually beneficial next steps

Output JSON ONLY:
{{"subject":"...","body":"..."}}
"""}
        ]
        
        # Try LLM
        res = _call_llm_chat(messages)
        content = res.get('content','') if isinstance(res, dict) else ''
        parsed = None
        if content:
            try:
                start = content.find('{')
                end = content.rfind('}')
                if start != -1 and end != -1 and end > start:
                    parsed = json.loads(content[start:end+1])
            except Exception:
                parsed = None
        
        if isinstance(parsed, dict) and parsed.get('subject') and parsed.get('body'):
            subject = parsed['subject']
            body = parsed['body']
            llm_success += 1
            provider = res.get('provider', 'llm')
        else:
            # Fallback
            body = _template_fallback(company_name, to, i)
            provider = 'deterministic-template-v3'
        
        subject = _dedupe_subject_style(subject, seen_subjects)
        out = dict(r)
        out['subject'] = subject
        out['body'] = body
        out['tailored_at'] = _now()
        out['llm_provider'] = provider
        out_rows.append(out)
        updated += 1
        
        _append_log({'to': to, 'provider': provider, 'success': bool(parsed)})
    
    out_payload = dict(payload)
    out_payload['ready'] = out_rows
    out_payload['tailored_at'] = _now()
    out_payload['tailored_by'] = 'lead-crm/tailor_ready_llm.py'
    out_payload['llm_success_rate'] = f'{llm_success}/{updated}'
    _save_json(OUT, out_payload)
    print(json.dumps({'updated': updated, 'llm_success': llm_success, 'out': str(OUT)}, ensure_ascii=False))

if __name__ == '__main__':
    main()