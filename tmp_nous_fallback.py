def _call_nous_hermes(thread_text: str, contact_name: str, company_name: str, language: str) -> str:
    """
    Hermes/Nous fallback: call the configured Nous endpoint for chat completions.
    Returns a reply string, or '' on failure.
    """
    try:
        import os as _os
        import urllib.request
        import json as _json
        endpoint = (_os.environ.get('NOUS_BASE_URL') or 'https://inference-api.nousresearch.com/v1').rstrip('/')
        token = _os.environ.get('NOUS_TOKEN') or _os.environ.get('HERMES_LLM_TOKEN') or ''
        if not token:
            return ''
        model = _os.environ.get('HERMES_LLM_MODEL') or _os.environ.get('ZION_LLM_MODEL') or 'stepfun/step-3.7-flash:free'
        url = endpoint.rstrip('/') + '/chat/completions'
        print('NOUS_CALL', url, 'model=', model, 'token_prefix=', token[:8], flush=True)
        trimmed = (thread_text or '').strip()[:1800]
        system = (
            f"You are the CEO of Zion Tech Group writing in {language}. "
            "Tone: friendly, professional CEO. No signature block."
        )
        user = (
            f"Context:\n{trimmed}\n\n"
            "Write ONE short outbound email to {contact_name} at {company_name}.\n"
            "Requirements:\n"
            "- Thanks for past collaboration/opportunity\n"
            "- Calendly: https://calendly.com/kleber-ziontechgroup\n"
            "- Mention AI services and free tools: https://ziontechgroup.com\n"
            "- Propose one mutually beneficial next step/topic\n"
            "- Match conversation language: {language}\n"
        ).format(contact_name=contact_name, company_name=company_name, language=language)
        payload = {
            'model': model,
            'messages': [
                {'role': 'system', 'content': system},
                {'role': 'user', 'content': user},
            ],
            'temperature': 0.35,
            'max_tokens': 320,
        }
        req = urllib.request.Request(
            url,
            data=_json.dumps(payload).encode('utf-8'),
            headers={
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            method='POST',
        )
        with urllib.request.urlopen(req, timeout=35) as resp:
            data = _json.loads(resp.read().decode('utf-8'))
        print('NOUS_RESP_TYPE', type(data).__name__, flush=True)
        if isinstance(data, dict):
            print('NOUS_RESP_KEYS', sorted(data.keys()), 'http=', data.get('__http_status__'), 'err=', data.get('error') or data.get('message') or data.get('detail'), flush=True)
        if not isinstance(data, dict):
            return ''
        message = ((data.get('choices') or [{}])[0].get('message') or {})
        content = message.get('content') or message.get('reasoning') or ''
        if not isinstance(content, str) or not content.strip():
            print('NOUS_EMPTY_CONTENT', flush=True)
            return ''
        return content.strip()
    except Exception as e:
        print('NOUS_ERR', repr(e), flush=True)
        return ''
