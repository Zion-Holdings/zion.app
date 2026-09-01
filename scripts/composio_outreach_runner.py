#!/usr/bin/env python3
"""
Zion Tech Group — Composio outreach runner (free-methods first)
Uses the Composio Python SDK to discover tools, execute actions,
and build a lead list + send email outreach.

Free methods/tools used:
  - Composio connected apps inventory (GET /tools, GET /accounts)
  - componsio_search / composer-driven lead discovery
  - resend / gmail sends for cold outreach (where available)
  - github + cursor-free workflows for provenance

Path: scripts/composio_outreach_runner.py
"""

import json
import os
import sys
import time
from pathlib import Path

REPO = Path("/data/data/com.termux/files/home/zion-support.github.io")
OUT_DIR = REPO / "outreach"
RUN_ID = time.strftime("%Y%m%d-%H%M%S")
OUT = OUT_DIR / f"outreach_{RUN_ID}.json"

OUT_DIR.mkdir(parents=True, exist_ok=True)

# ── tiny composio SDK shim ──────────────────────────────────────────────────
# Avoid hard dependency on the composio wheel (which failed to build on
# Termux/ARM). We do raw HTTPS calls to the Composio backend instead.

import urllib.request
import urllib.error
import ssl

try:
    COMPOSIO_API_KEY = os.environ["COMPOSIO_API_KEY"]
except KeyError:
    COMPOSIO_API_KEY = None

BACKEND = "https://backend.composio.dev"

_session = None


def _get_session():
    global _session
    if _session is not None:
        return _session
    ctx = ssl.create_default_context()
    opener = urllib.request.build_opener(
        urllib.request.HTTPSHandler(context=ctx)
    )
    _session = opener
    return _session


def _headers():
    h = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    if COMPOSIO_API_KEY:
        h["Authorization"] = f"Bearer {COMPOSIO_API_KEY}"
    return h


def api(method: str, path: str, body=None):
    url = f"{BACKEND}{path}"
    data = None
    if body is not None:
        data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=_headers(), method=method)
    try:
        with _get_session().open(req, timeout=30) as resp:
            raw = resp.read().decode("utf-8", "replace")
            return resp.status, json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", "replace")
        return e.code, (json.loads(raw) if raw else {"error": str(e)})
    except Exception as e:
        return 0, {"error": str(e)}


# ── tools / accounts inventory ──────────────────────────────────────────────

def inventory() -> dict:
    """List composio tools and connected accounts without SDK.

    Returns a dict with keys 'tools', 'accounts', 'tools_error', 'accounts_error'.
    """
    out: dict = {"tools": [], "accounts": []}

    # Tools list
    status, payload = api("GET", "/tools")
    if status == 200 and isinstance(payload, list):
        out["tools"] = payload
    else:
        out["tools_error"] = {"status": status, "payload": payload}

    # Accounts
    status, payload = api("GET", "/accounts")
    if status == 200 and isinstance(payload, list):
        out["accounts"] = payload
    else:
        out["accounts_error"] = {"status": status, "payload": payload}

    return out


# ── free-methods lead discovery (no paid enrichment required) ───────────────

def discover_leads_free():
    """Return candidate leads using only free / public methods.

    This is a small shell that can be extended with serpapi / hunter /
    google-search via Composio tools when they are connected. For now
    we seed with a few example segments relevant to Zion's IT/AI niche.
    """
    segments = [
        {
            "company": "Example FinTech Inc",
            "role": "CTO",
            "email": "cto@example-fintech.com",
            "reason": "fintech + ai-services need",
        },
        {
            "company": "Example Health AI Labs",
            "role": "Head of Engineering",
            "email": "eng@examplehealth.ai",
            "reason": "ai-ops + compliance need",
        },
    ]
    return segments


# ── send outreach email ─────────────────────────────────────────────────────

def send_email(to: str, subject: str, html: str, text: str):
    """Send an outreach email using the connected Resend or Gmail tool.

    Tries Resend first, then Gmail, then falls back to logging only
    so the run can continue without blocking on provider availability.
    """
    body = {
        "to": to,
        "subject": subject,
        "html": html,
        "text": text,
    }

    # Resend
    status, resp = api("POST", "/actions/resend/send", body)
    if status in (200, 201):
        return {"provider": "resend", "status": status, "response": resp}

    # Gmail
    status, resp = api("POST", "/actions/gmail/send", body)
    if status in (200, 201):
        return {"provider": "gmail", "status": status, "response": resp}

    # Fallback: log only
    return {
        "provider": "log_only",
        "status": status,
        "fallback": True,
        "note": "neither resend nor gmail available; logged for manual send",
    }


# ── outreach templates ──────────────────────────────────────────────────────

SERVICE_OFFERINGS = [
    "AI Operations & Managed AI",
    "Cybersecurity Platform for MSPs",
    "DevSecOps Pipeline Services",
    "AI-Powered Observability",
    "Cloud Cost Optimization with AI",
    "Managed IT & Staff Augmentation",
]


def make_subject(service: str) -> str:
    return f"Zion Tech Group: {service} for your team"


def make_html(service: str, company: str, role: str) -> str:
    return f"""
<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; color:#0b1220; margin:0; padding:24px;">
  <p style="margin:0 0 16px;">Hi {role},</p>
  <p style="margin:0 0 16px;">
    We help teams like <strong>{company}</strong> ship and run AI/IT services
    without the usual operational drag.
  </p>
  <p style="margin:0 0 16px;">
    A few areas where Zion Tech Group can help right now:
  </p>
  <ul style="margin:0 0 16px 18px;">
    <li>AI Operations &amp; Managed AI</li>
    <li>Cybersecurity Platform for MSPs</li>
    <li>DevSecOps Pipeline Services</li>
    <li>AI-Powered Observability</li>
    <li>Cloud Cost Optimization with AI</li>
    <li>Managed IT &amp; Staff Augmentation</li>
  </ul>
  <p style="margin:0 0 16px;">
    If any of these match a current gap, I can send over a short scope
    and pricing options.
  </p>
  <p style="margin:0;">
    Best,<br>
    Kleber Garcia Alcatrão<br>
    <a href="https://ziontechgroup.com" style="color:#2563eb;">ziontechgroup.com</a>
  </p>
</body>
</html>
"""


def make_text(service: str, company: str, role: str) -> str:
    return (
        f"Hi {role},\n\n"
        f"We help teams like {company} ship and run AI/IT services "
        f"without the usual operational drag.\n\n"
        f"A few areas where Zion Tech Group can help right now:\n"
        f"- AI Operations & Managed AI\n"
        f"- Cybersecurity Platform for MSPs\n"
        f"- DevSecOps Pipeline Services\n"
        f"- AI-Powered Observability\n"
        f"- Cloud Cost Optimization with AI\n"
        f"- Managed IT & Staff Augmentation\n\n"
        f"If any of these match a current gap, I can send over a short "
        f"scope and pricing options.\n\n"
        f"Best,\n"
        f"Kleber Garcia Alcatrão\n"
        f"https://ziontechgroup.com"
    )


# ── main run ────────────────────────────────────────────────────────────────

def main():
    report = {
        "run_id": RUN_ID,
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "inventory": None,
        "leads": [],
        "sent": [],
        "errors": [],
    }

    # 1. composio inventory
    try:
        inv = inventory()
        report["inventory"] = {
            "tools_count": len(inv.get("tools", [])),
            "accounts_count": len(inv.get("accounts", [])),
            "tools_error": inv.get("tools_error"),
            "accounts_error": inv.get("accounts_error"),
        }
    except Exception as e:
        report["errors"].append({"step": "inventory", "error": str(e)})

    # 2. leads
    try:
        leads = discover_leads_free()
        report["leads"] = leads
    except Exception as e:
        report["errors"].append({"step": "discover_leads", "error": str(e)})
        leads = []

    # 3. send
    for lead in leads:
        try:
            service = SERVICE_OFFERINGS[0]
            subject = make_subject(service)
            html = make_html(service, lead["company"], lead["role"])
            text = make_text(service, lead["company"], lead["role"])
            result = send_email(lead["email"], subject, html, text)
            report["sent"].append({
                "to": lead["email"],
                "company": lead["company"],
                "service": service,
                "result": result,
            })
        except Exception as e:
            report["errors"].append({"step": "send", "lead": lead.get("email"), "error": str(e)})

    with OUT.open("w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print(f"outreach run {RUN_ID} complete -> {OUT}")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
