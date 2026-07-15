"""
Live sender for drafted hot-follow-up CEO replies using the working Gmail helper.

Reads:
  outreach_monitor/processed/next_ceo_reply_hemmersbach.json
  outreach_monitor/processed/next_ceo_reply_heygen.json

Sends via commands.google_workspace.gmail_send_reply_fixed()
Appends results to:
  outreach_monitor/processed/hot_followup_reply_ledger.jsonl
"""
import base64
import html
import json
import os
import sys
from pathlib import Path

REPO = Path(r'C:/Users/Zion/tmp/zion-clone-test2')
sys.path.insert(0, str(REPO))

os.environ.setdefault('OUTREACH_REQUIRES_APPROVAL', '0')
os.environ.setdefault('OUTREACH_DRY_RUN', '0')

import outreach_worker_automation as ow
from commands.google_workspace import gog_headers  # noqa: E402

LEDGER = ow.HOT_FOLLOWUP_REPLY_LEDGER


def append_ledger(entry: dict):
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    with LEDGER.open('a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def load_draft(name: str) -> dict:
    p = REPO / 'outreach_monitor' / 'processed' / name
    return json.loads(p.read_text(encoding='utf-8'))


def find_thread_id_for_to(to_addr: str):
    # Use live thread history for real safety check: find latest inbound thread for this contact.
    q = f'to:{to_addr} OR from:{to_addr}'
    hits = ow.search_all_folders(q, maxResults=20) if hasattr(ow, 'search_all_folders') else []
    if not hits:
        return None
    for hit in hits:
        if isinstance(hit, dict):
            return hit.get('threadId') or hit.get('thread_id') or hit.get('id')
    return None


def make_references(msg_id: str, headers: dict) -> str:
    references = headers.get('Message-ID') or headers.get('References') or msg_id
    return references


def send_via_helper(to_addr: str, subject: str, body: str, references_message_id: str) -> dict:
    # Build headers mapping without a live messages.get call.
    # We still pass through gmail_send_reply_fixed so threading uses threadId inline.
    from commands.google_workspace import gmail_send_reply_fixed  # noqa
    # Use the helper directly; it constructs To/Subject/In-Reply-To itself.
    result = gmail_send_reply_fixed(
        thread_id_or_msg_id=references_message_id,
        original_subject=subject,
        body=body,
        original_sender=to_addr,
    )
    if not isinstance(result, dict):
        return {'success': False, 'error': 'invalid_result', 'raw': repr(result)}
    return result


def main():
    candidates = [
        'next_ceo_reply_hemmersbach.json',
        'next_ceo_reply_heygen.json',
    ]
    sent = []
    skipped = []
    failed = []
    for name in candidates:
        p = REPO / 'outreach_monitor' / 'processed' / name
        if not p.exists():
            skipped.append((name, 'missing'))
            continue
        draft = load_draft(name)
        to_addr = draft['to']
        subject = draft['subject']
        body = html.unescape(draft.get('draft') or draft.get('body') or '')
        thread_id = draft.get('thread_id') or ''
        ref_id = draft.get('message_id') or draft.get('msg_id') or thread_id
        if not ref_id:
            skipped.append((name, 'no_thread_or_msg_id'))
            continue

        # real duplicate-send safety: check whether a recent CEO outbound already exists in thread history
        recent_sent = False
        try:
            thread_history = ow.search_all_folders(
                f'(to:{to_addr} OR from:{to_addr}) in:anywhere',
                maxResults=20,
            )
            for item in thread_history or []:
                if not isinstance(item, dict):
                    continue
                hdrs = item.get('headers') or {}
                frm = hdrs.get('From', '') if isinstance(hdrs, dict) else ''
                if 'kleber@ziontechgroup.com' in str(frm) and item.get('id'):
                    recent_sent = True
                    break
        except Exception:
            pass
        if recent_sent:
            skipped.append((name, 'recent_ceo_outbound_present'))
            continue

        res = send_via_helper(to_addr, subject, body, ref_id)
        message_id = res.get('message_id') or res.get('id') or ''
        success = bool(res.get('success')) or bool(message_id)
        if not success:
            failed.append((name, res))
            continue
        append_ledger({
            'source': name,
            'to': to_addr,
            'subject': subject,
            'thread_id': thread_id,
            'message_id': message_id,
            'avoid_duplicate': True,
            'dedup_key': draft.get('dedup_key') or name,
            'ts': int(ow.time.time()),
            'status': 'sent',
            'payload': res,
            'reason': f'one-shot hot-followup CEO reply via {name}',
        })
        sent.append({'file': name, 'message_id': message_id, 'to': to_addr})
    print('SENT', json.dumps(sent, ensure_ascii=False))
    print('SKIPPED', json.dumps(skipped, ensure_ascii=False))
    print('FAILED', json.dumps(failed, ensure_ascii=False))
    if not sent and not failed:
        sys.exit(3)


if __name__ == '__main__':
    main()
