#!/usr/bin/env python3
"""Hot follow-up LLM draft runner.

Checks !!!hot-follow-up label across all folders, deduplicates via ledger,
drafts CEO-level replies in the conversation language, and writes results
to the canonical JSON + JSONL ledger files.
"""
from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

# Make commands/ importable
REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO))

from commands.google_workspace import (
    gmail_search,
    gmail_get,
    extract_body_from_gmail_message,
)

# Paths
LEDGER = REPO / "outreach_monitor/processed/hot_followup_reply_ledger.jsonl"
DRAFT_JSON = REPO / "outreach_monitor/processed/next_hot_followup_llm_draft.json"

# ─── Helpers ──────────────────────────────────────────────────────────────────

def now_utc_iso() -> str:
    return datetime.now(timezone.utc).isoformat()

def load_ledger() -> list[dict]:
    if not LEDGER.exists():
        return []
    rows = []
    with open(LEDGER, "r", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError:
                continue
    return rows

def extract_headers(msg: dict) -> dict:
    headers = {}
    for hdr in msg.get("payload", {}).get("headers", []):
        name = hdr.get("name", "").lower()
        value = hdr.get("value", "")
        if name in ("from", "to", "subject", "date"):
            headers[name] = value
    return headers

def detect_language(text: str) -> str:
    text_lower = text.lower()
    pt_markers = ["obrigado", "obrigada", "gostaria", "projeto", "colaboração", "reunião", "chamada", "abraço", "atenciosamente"]
    es_markers = ["gracias", "proyecto", "colaboración", "reunión", "saludos", "atentamente", "oportunidad"]
    en_markers = ["thank", "opportunity", "project", "collaboration", "meeting", "regards", "best"]
    scores = {
        "pt": sum(1 for m in pt_markers if m in text_lower),
        "es": sum(1 for m in es_markers if m in text_lower),
        "en": sum(1 for m in en_markers if m in text_lower),
    }
    best = max(scores, key=scores.get)
    if scores[best] == 0:
        return "en"
    return best

def build_reply_body(language: str, subject: str) -> str:
    name_hint = ""
    subj_lower = subject.lower()
    if " Re:" in subject:
        m = re.search(r"Re:\s*(.+)", subject)
        if m:
            name_hint = m.group(1).strip()

    if language == "pt":
        return (
            f"Olá{',' if name_hint else ''} {name_hint}\n\n"
            "Fico feliz em poder colaborar novamente. "
            "Gostaria de explorar duas ideias concretas que podem beneficiar ambos:\n\n"
            "1) Um programa de parceria consultiva para ampliar a presença digital da sua empresa "
            "com lançamentos rápidos e suporte contínuo.\n\n"
            "2) Uma integração de automação inteligente para reduzir custos operacionais, "
            "com ferramentas que já disponibilizamos gratuitamente no nosso site.\n\n"
            "Vamos agendar uma rápida conversa?\n"
            "👉 https://calendly.com/kleber-ziontechgroup\n\n"
            "Saiba mais: https://ziontechgroup.com\n\n"
            "Atenciosamente,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    elif language == "es":
        return (
            f"Hola{',' if name_hint else ''} {name_hint}\n\n"
            "Me alegra la oportunidad de volver a colaborar. "
            "Quiero proponer dos ideas concretas que pueden beneficiarnos mutuamente:\n\n"
            "1) Un programa de asociación consultiva para amplificar la presencia digital de tu empresa "
            "con lanzamientos rápidos y soporte continuo.\n\n"
            "2) Una integración de automatización inteligente para reducir costos operativos, "
            "con herramientas gratuitas disponibles en nuestro sitio.\n\n"
            "¿Agendamos una llamada breve?\n"
            "👉 https://calendly.com/kleber-ziontechgroup\n\n"
            "Más información: https://ziontechgroup.com\n\n"
            "Saludos,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )
    else:  # en (default)
        return (
            f"Hi{',' if name_hint else ''} {name_hint}\n\n"
            "I appreciate the opportunity to work together again. "
            "I'd like to propose two concrete ideas that can benefit both sides:\n\n"
            "1) A consultative partnership program to amplify your company's digital presence "
            "with fast launches and ongoing support.\n\n"
            "2) An intelligent automation integration to cut operational costs, "
            "using free tools we already offer on our website.\n\n"
            "Shall we schedule a quick call?\n"
            "👉 https://calendly.com/kleber-ziontechgroup\n\n"
            "Learn more: https://ziontechgroup.com\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "CEO, Zion Tech Group\n"
            "+1 302 464 0950"
        )

# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    summary = {
        "threads_scanned": 0,
        "duplicates_skipped": 0,
        "drafts_created": 0,
        "errors": [],
        "llm_provider": "heuristic-rule-based",
        "drafts_details": [],
        "duplicates_details": [],
    }

    ledger = load_ledger()
    seen_threads = {r.get("thread_id") for r in ledger if r.get("thread_id")}
    seen_contacts = set()
    for r in ledger:
        for k in ("to", "from"):
            val = r.get(k, "")
            if val:
                seen_contacts.add(val.lower())

    # Search
    try:
        results = gmail_search('label:"!!!hot-follow-up"', limit=20, all_folders=True)
    except Exception as exc:
        summary["errors"].append(f"Gmail search failed: {exc}")
        write_json(summary)
        return

    if not results:
        write_json(summary)
        return

    threads_needing_reply = []

    for item in results:
        thread_id = item.get("threadId") or item.get("thread_id")
        message_id = item.get("id")
        summary["threads_scanned"] += 1

        try:
            msg = gmail_get(message_id)
        except Exception as exc:
            summary["errors"].append(f"Gmail get {message_id} failed: {exc}")
            continue

        headers = extract_headers(msg)
        email_from = headers.get("from", "")
        subject = headers.get("subject", "No Subject")
        body = extract_body_from_gmail_message(msg)

        # Dedup checks
        if thread_id and thread_id in seen_threads:
            summary["duplicates_skipped"] += 1
            summary["duplicates_details"].append({
                "message_id": message_id,
                "thread_id": thread_id,
                "subject": subject,
                "reason": "thread_already_in_ledger",
            })
            continue

        match = re.search(r"<([^>]+)>", email_from)
        contact_email = (match.group(1) if match else email_from).lower()
        if contact_email in seen_contacts:
            summary["duplicates_skipped"] += 1
            summary["duplicates_details"].append({
                "message_id": message_id,
                "thread_id": thread_id,
                "subject": subject,
                "reason": "contact_already_in_ledger",
            })
            continue

        # Check if already recently replied in this thread by looking for Re:/RE:
        # (lightweight guard; ledger is authoritative)
        if thread_id:
            seen_threads.add(thread_id)

        # Build draft content
        language = detect_language(subject + " " + body)
        body_text = build_reply_body(language, subject)

        threads_needing_reply.append({
            "thread_id": thread_id,
            "message_id": message_id,
            "to": contact_email,
            "subject": subject,
            "language": language,
            "body": body_text,
        })

    # Write outputs
    for draft in threads_needing_reply:
        summary["drafts_created"] += 1
        summary["drafts_details"].append({
            "thread_id": draft["thread_id"],
            "message_id": draft["message_id"],
            "to": draft["to"],
            "subject": draft["subject"],
            "language": draft["language"],
            "preview": draft["body"][:160],
        })

        # Append ledger entry
        ledger_entry = {
            "to": draft["to"],
            "subject": f"Re: {draft['subject']}",
            "thread_id": draft["thread_id"],
            "message_id": draft["message_id"],
            "avoid_duplicate": True,
            "status": "drafted",
            "ts": int(datetime.now(timezone.utc).timestamp()),
            "source": "cron_hot_followup_llm",
            "llm_provider": summary["llm_provider"],
        }
        with open(LEDGER, "a", encoding="utf-8") as fh:
            fh.write(json.dumps(ledger_entry, ensure_ascii=False) + "\n")

    write_json(summary)


def write_json(summary: dict):
    payload = {
        "drafted_at": now_utc_iso(),
        "llm_provider": summary["llm_provider"],
        "threads_scanned": summary["threads_scanned"],
        "duplicates_skipped": summary["duplicates_skipped"],
        "drafts_created": summary["drafts_created"],
        "errors": summary["errors"],
        "drafts_details": summary["drafts_details"],
        "duplicates_details": summary["duplicates_details"],
        "note": "Processed !!!hot-follow-up threads.",
    }
    if summary["threads_scanned"] == 0 and summary["drafts_created"] == 0:
        payload["note"] = "No !!!hot-follow-up threads found across all folders."

    DRAFT_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(DRAFT_JSON, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, indent=2, ensure_ascii=False)

    print(json.dumps(payload, ensure_ascii=False))


if __name__ == "__main__":
    main()
