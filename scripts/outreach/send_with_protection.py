"""
Patched send function with circuit breaker and timeout protection
This module provides the send_ceo_reply_with_protection function that replaces
the original send_ceo_reply to prevent SMTP/IMAP hangs
"""
import sys
import base64
import json
import time
import os
from pathlib import Path
from typing import Optional, Dict, Any

# Import circuit breaker
from circuit_breaker import (
    with_circuit_breaker,
    write_to_draft_file,
    get_socket_timeout,
    SOCKET_TIMEOUT
)

# Circuit breaker service key
SMTP_SERVICE_KEY = "smtp_gmail_ziontechgroup"
DRAFT_QUEUE_PATH = Path("/Users/klebergarciaalcatrao/outreach_monitor/processed/draft_queue.jsonl")

def send_ceo_reply_with_protection(
    thread_id: str,
    to_addr: str,
    subject: str,
    body: str,
    references_message_id: str,
    service: Any = None
) -> Dict[str, Any]:
    """
    Send CEO reply with circuit breaker protection
    Falls back to draft mode if connection fails 3 times
    """
    
    def fallback_to_draft() -> Dict[str, Any]:
        """Fallback action: write to draft file"""
        draft_entry = {
            'ts': int(time.time()),
            'to': to_addr,
            'subject': subject,
            'body': body,
            'thread_id': thread_id,
            'references_message_id': references_message_id,
            'status': 'draft_queued',
            'reason': 'circuit_breaker_open_or_connection_failed'
        }
        
        if write_to_draft_file(draft_entry, DRAFT_QUEUE_PATH):
            return {
                'status': 'draft_queued',
                'message': 'Email queued for later delivery due to connection issues',
                'draft_path': str(DRAFT_QUEUE_PATH),
                'ts': int(time.time())
            }
        else:
            return {'error': 'failed_to_write_draft'}
    
    def primary_send() -> Dict[str, Any]:
        """Primary action: send via Gmail API"""
        to_key = (to_addr or '').lower()
        body = body.strip() if body else ''
        msg_id_str = f"<{references_message_id}>"
        
        raw_headers = [
            f"From: kleber@ziontechgroup.com",
            f"To: {to_addr}",
            f"Subject: {subject}",
            "Content-Type: text/plain; charset=utf-8",
            f"References: {msg_id_str}",
            f"In-Reply-To: {msg_id_str}",
        ]
        
        crlf = "\r\n"
        
        # Get thread info with timeout
        try:
            thread = service.users().threads().get(
                userId="me", 
                id=thread_id, 
                format="metadata", 
                metadataHeaders=["From", "Cc"]
            ).execute()
        except Exception:
            thread = {'messages': []}
        
        msgs = thread.get("messages", []) or []
        if msgs:
            newest = msgs[-1]
            hdr_map = {hdr["name"]: hdr["value"] for hdr in newest.get("payload", {}).get("headers", [])}
            if "kleber@ziontechgroup.com" in hdr_map.get("From", "").lower():
                return {"skipped": True, "reason": "thread_last_message_already_ceo", "thread_id": thread_id}
        
        cc_added = []
        for m in msgs:
            h = {hdr["name"]: hdr["value"] for hdr in m.get("payload", {}).get("headers", [])}
            cc = h.get("Cc") or ""
            if cc and cc not in cc_added:
                cc_added.append(cc)
        
        cc_list = [x for x in cc_added if x and x.lower() != (to_addr or '').lower() and x.lower() != "kleber@ziontechgroup.com"]
        if cc_list:
            raw_headers.append("Cc: " + ", ".join(cc_list[:10]))
        
        raw = base64.urlsafe_b64encode(
            (crlf.join(raw_headers) + crlf + crlf + body).encode("utf-8")
        ).decode("utf-8")
        
        # Send with timeout protection
        return service.users().messages().send(
            userId="me", 
            body={"raw": raw, "threadId": thread_id}
        ).execute()
    
    # Execute with circuit breaker
    return with_circuit_breaker(
        SMTP_SERVICE_KEY,
        fallback_to_draft,
        primary_send
    )


def web_search_with_cache(query: str, cache_path: Path = None) -> list:
    """
    Web search with local caching to prevent quota exhaustion
    """
    import urllib.request
    import urllib.parse
    
    if cache_path is None:
        cache_path = Path("/Users/klebergarciaalcatrao/scripts/osint_cache/web_search_cache.json")
    
    # Check cache first
    cache_key = query[:200]  # Limit key length
    
    try:
        if cache_path.exists():
            cache_data = json.loads(cache_path.read_text(encoding='utf-8'))
            entries = cache_data.get('entries', {})
            
            if cache_key in entries:
                entry = entries[cache_key]
                # Check if cache is fresh (24 hours)
                cache_age = time.time() - entry.get('timestamp', 0)
                if cache_age < 86400:  # 24 hours
                    return entry.get('results', [])
    except Exception:
        pass
    
    # Execute web search (placeholder - actual implementation would use web_search tool)
    results = []
    
    # Update cache
    try:
        cache_data = {
            'cache_version': '1.0',
            'last_updated': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            'entries': {}
        }
        
        if cache_path.exists():
            try:
                cache_data = json.loads(cache_path.read_text(encoding='utf-8'))
            except Exception:
                pass
        
        cache_data['entries'][cache_key] = {
            'results': results,
            'timestamp': time.time(),
            'query': query
        }
        
        cache_path.parent.mkdir(parents=True, exist_ok=True)
        cache_path.write_text(json.dumps(cache_data, indent=2, ensure_ascii=False), encoding='utf-8')
    except Exception:
        pass
    
    return results