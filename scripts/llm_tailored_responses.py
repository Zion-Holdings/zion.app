#!/usr/bin/env python3
"""
LLM-Tailored Response Generator for Zion Tech Group Outreach
Uses free LLM providers (Groq, Gemini, DeepSeek, etc.) to generate personalized outreach emails.
"""
import json
import os
import sys
import urllib.request
import urllib.error
from pathlib import Path
from typing import Optional

PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

# Free LLM providers configuration
GROQ_API_KEY = os.getenv('GROQ_API_KEY', '')
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')
DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY', '')
MISTRAL_API_KEY = os.getenv('MISTRAL_API_KEY', '')
OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY', '')
OLLAMA_BASE_URL = os.getenv('OLLAMA_BASE_URL', 'http://localhost:11434')
OLLAMA_MODEL = os.getenv('OLLAMA_MODEL', 'qwen3:4b')


def call_groq(messages: list, model: str = 'llama-3.3-70b-versatile') -> Optional[str]:
    """Call Groq LLM API"""
    if not GROQ_API_KEY:
        return None
    try:
        req = urllib.request.Request(
            'https://api.groq.com/openai/v1/chat/completions',
            data=json.dumps({
                'model': model,
                'messages': messages,
                'temperature': 0.7,
                'max_tokens': 1024
            }).encode('utf-8'),
            headers={
                'Authorization': f'Bearer {GROQ_API_KEY}',
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            return data['choices'][0]['message']['content']
    except Exception as e:
        print(f"[Groq error: {e}]", file=sys.stderr)
        return None


def call_gemini(messages: list, model: str = 'gemini-2.0-flash-lite') -> Optional[str]:
    """Call Gemini LLM API"""
    if not GEMINI_API_KEY:
        return None
    try:
        contents = [{'role': m['role'], 'parts': [{'text': m['content']}]} for m in messages]
        req = urllib.request.Request(
            f'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}',
            data=json.dumps({'contents': contents}).encode('utf-8'),
            headers={'Content-Type': 'application/json'},
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            return data['candidates'][0]['content']['parts'][0]['text']
    except Exception as e:
        print(f"[Gemini error: {e}]", file=sys.stderr)
        return None


def call_deepseek(messages: list, model: str = 'deepseek-chat') -> Optional[str]:
    """Call DeepSeek LLM API"""
    if not DEEPSEEK_API_KEY:
        return None
    try:
        req = urllib.request.Request(
            'https://api.deepseek.com/v1/chat/completions',
            data=json.dumps({
                'model': model,
                'messages': messages,
                'temperature': 0.7,
                'max_tokens': 1024
            }).encode('utf-8'),
            headers={
                'Authorization': f'Bearer {DEEPSEEK_API_KEY}',
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            return data['choices'][0]['message']['content']
    except Exception as e:
        print(f"[DeepSeek error: {e}]", file=sys.stderr)
        return None


def call_ollama(messages: list, model: str = OLLAMA_MODEL) -> Optional[str]:
    """Call local Ollama LLM"""
    try:
        req = urllib.request.Request(
            f'{OLLAMA_BASE_URL}/api/chat',
            data=json.dumps({
                'model': model,
                'messages': messages,
                'options': {'temperature': 0.7}
            }).encode('utf-8'),
            headers={'Content-Type': 'application/json'},
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
            return data.get('message', {}).get('content')
    except Exception as e:
        print(f"[Ollama error: {e}]", file=sys.stderr)
        return None


def call_openrouter(messages: list, model: str = 'openrouter/free') -> Optional[str]:
    """Call OpenRouter LLM API"""
    if not OPENROUTER_API_KEY:
        return None
    try:
        req = urllib.request.Request(
            'https://openrouter.ai/api/v1/chat/completions',
            data=json.dumps({
                'model': model,
                'messages': messages,
                'temperature': 0.7,
                'max_tokens': 1024
            }).encode('utf-8'),
            headers={
                'Authorization': f'Bearer {OPENROUTER_API_KEY}',
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://ziontechgroup.com',
                'X-Title': 'Zion Tech Group AI Outreach'
            },
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read())
            return data['choices'][0]['message']['content']
    except Exception as e:
        print(f"[OpenRouter error: {e}]", file=sys.stderr)
        return None


def generate_tailored_response(lead: dict, service_key: str = None, industry: str = None) -> dict:
    """
    Generate a tailored outreach response for a lead using available LLM providers.
    Returns dict with 'subject' and 'body' keys.
    """
    company = lead.get('company', 'your company')
    name = lead.get('name', 'there')
    pain_points = ', '.join(lead.get('painPoints', ['AI automation'])[:2])
    
    # Build the prompt for the LLM
    system_prompt = f"""You are a senior AI/IT solutions consultant at Zion Tech Group. 
Write a personalized, engaging outreach email to a {company} prospect.

Requirements:
- Subject line that grabs attention
- Mention specific pain points: {pain_points}
- Offer value, not just features
- Include Calendly link for meeting
- Mention free tools on ziontechgroup.com
- Professional but friendly tone
- Max 200 words for body

Company: {company}
Contact: {name}
Industry: {industry or 'Technology'}
Pain Points: {pain_points}
"""
    
    messages = [
        {'role': 'system', 'content': system_prompt},
        {'role': 'user', 'content': f'Write a compelling outreach email to {name} at {company}.'}
    ]
    
    # Try providers in order of preference
    providers = [
        ('groq', lambda: call_groq(messages)),
        ('gemini', lambda: call_gemini(messages)),
        ('deepseek', lambda: call_deepseek(messages)),
        ('openrouter', lambda: call_openrouter(messages)),
        ('ollama', lambda: call_ollama(messages)),
    ]
    
    for provider_name, provider_func in providers:
        content = provider_func()
        if content:
            # Parse the response into subject and body
            lines = content.strip().split('\n')
            subject = lines[0].strip() if lines else f'AI solutions for {company}'
            if subject.startswith('Subject:'):
                subject = subject[9:].strip()
            if subject.startswith('Re:') or subject.startswith('Subject:'):
                pass  # Keep as-is for replies
            body = '\n'.join(lines[1:]) if len(lines) > 1 else content
            return {'subject': subject, 'body': body, 'provider': provider_name}
    
    # Fallback to template-based response
    return template_fallback(company, name, industry, pain_points)


def template_fallback(company: str, name: str, industry: str, pain_points: str) -> dict:
    """Fallback to template-based response when no LLM available"""
    subject = f"AI automation for {company} - {industry or 'Technology'} solutions"
    body = f"""Hi {name},

I've been following {company}'s work in {industry or 'technology'} and noticed your focus on {pain_points}.

We help companies like yours deploy AI-powered automation that reduces costs by 40%+ while improving accuracy. Our solutions are HIPAA-compliant, SOC 2 certified, and include 24/7 support.

Our website offers 640+ free AI tools and services you can explore: https://ziontechgroup.com

Would you be open to a 15-minute call to discuss how we can help {company}? Book time here: https://calendly.com/kleber-ziontechgroup

Best regards,
Kleber Garcia
CEO, Zion Tech Group
+1 302 464 0950"""
    return {'subject': subject, 'body': body, 'provider': 'template'}


def render_outreach(lead: dict, service_key: str = None) -> dict:
    """Main entry point for outreach generation"""
    industry = lead.get('industry') or lead.get('niche') or 'Technology'
    return generate_tailored_response(lead, service_key, industry)


if __name__ == '__main__':
    # Test with sample lead
    test_lead = {
        'company': 'TestCorp',
        'name': 'John Doe',
        'industry': 'Healthcare IT',
        'painPoints': ['EHR integration', 'patient analytics']
    }
    result = render_outreach(test_lead)
    print(json.dumps(result, indent=2))