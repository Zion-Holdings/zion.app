#!/usr/bin/env python3
"""Minimal hot-followup scanner using google_workspace.py helpers."""
import importlib.util, json, os, sys, base64
from datetime import datetime, timezone

GW_PATH = os.path.join(os.path.dirname(__file__), "..", "commands", "google_workspace.py")
spec = importlib.util.spec_from_file_location("google_workspace", GW_PATH)
gw = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gw)

# Init auth explicitly per skill caveat
gog = gw.gog_headers() if hasattr(gw, 'gog_headers') else None
if not gog:
    print(json.dumps({"status": "error", "error": "gog_headers init failed"}, ensure_ascii=False))
    sys.exit(1)

# Check labels first
try:
    labels = gw.gmail_list_labels()
    target_label_id = None
    target_label_name = "!!!hot-follow-up"
    if isinstance(labels, list):
        for lab in labels:
            if isinstance(lab, dict) and lab.get("name") == target_label_name:
                target_label_id = lab.get("id")
                break
    # fallback alternative casing
    if not target_label_id:
        for lab in labels:
            if isinstance(lab, dict) and lab.get("name", "").lower() == "!!!hot-follow-up":
                target_label_id = lab.get("id")
                break
except Exception as e:
    labels = []
    target_label_id = None

if not target_label_id:
    # try second label name from memory
    alt = "!!!!HOT FOLLOW-UP"
    for lab in labels:
        if isinstance(lab, dict) and (lab.get("name") == alt or lab.get("name", "").lower() == alt.lower()):
            target_label_id = lab.get("id")
            break

print(json.dumps({"status": "labels_checked", "labels_count": len(labels) if isinstance(labels, list) else 0, "target_label_id": target_label_id}, ensure_ascii=False))

# Broader query scan as fallback
try:
    # token-only query per skill
    msgs = gw.gmail_search("\"!!!hot-follow-up\"", limit=20, all_folders=True)
except Exception as e:
    msgs = []

candidates = []
seen = set()
for m in msgs:
    if not isinstance(m, dict):
        continue
    tid = m.get("threadId") or m.get("thread_id")
    mid = m.get("id") or m.get("message_id")
    if tid in seen:
        continue
    seen.add(tid)
    # Try thread_get for metadata
    try:
        thread = gw.gmail_thread_get(tid)
        if isinstance(thread, list) and thread:
            msg = thread[0]
            headers = msg.get("payload", {}).get("headers", []) if isinstance(msg.get("payload"), dict) else []
            hmap = {h.get("name","").lower(): h.get("value","") for h in headers if isinstance(h, dict)}
            sender = hmap.get("from", "")
            subject = hmap.get("subject", "")
            date_h = hmap.get("date", "")
            label_ids = msg.get("labelIds", [])
        else:
            sender = m.get("from", "")
            subject = m.get("subject", "")
            date_h = m.get("date", "")
            label_ids = m.get("labelIds", [])
    except Exception:
        sender = m.get("from", "")
        subject = m.get("subject", "")
        date_h = m.get("date", "")
        label_ids = m.get("labelIds", [])

    candidates.append({
        "thread_id": tid,
        "message_id": mid,
        "from": sender,
        "subject": subject,
        "date": date_h,
        "label_ids": label_ids,
    })

print(json.dumps({"status": "scanned", "candidates": candidates}, ensure_ascii=False))
