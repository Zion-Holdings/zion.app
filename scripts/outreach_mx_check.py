#!/usr/bin/env python3
"""Gate an outreach batch on deliverability before anything is sent.

A domain resolving an A record does not mean it accepts email. Of the five
recipients in this batch, aitech.co and innovateco.com resolve to real IPs
but publish no MX record, so mail to them hard-bounces. A 40% bounce rate
in one send is what mailbox providers use to classify a sender as a
spammer, and the damage lands on every legitimate email from the domain
afterwards.

Run this before enabling ZTG_SEND_ALLOWED. Default is report-only; pass
--filter to rewrite the batch down to the deliverable recipients.

Usage:
    python scripts/outreach_mx_check.py [batch.json] [--filter]

Requires dnspython (pip install dnspython). Termux ships no dig/host and
Android has no /etc/resolv.conf, so public resolvers are set explicitly.
"""
from __future__ import annotations

import json
import os
import socket
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_BATCH = os.path.join(REPO, "lead-crm", "outreach_ready_canonical.json")
RESOLVERS = ["1.1.1.1", "8.8.8.8"]


def mx_for(domain: str) -> list[str]:
    """Return MX records, or a <Reason> marker when none can be read."""
    try:
        import dns.resolver
    except ImportError:
        return ["<dnspython not installed>"]
    try:
        resolver = dns.resolver.Resolver(configure=False)
        resolver.nameservers = list(RESOLVERS)
        resolver.timeout = 10
        resolver.lifetime = 20
        answers = resolver.resolve(domain, "MX")
        return sorted(f"{r.preference} {r.exchange.to_text()}" for r in answers)
    except Exception as exc:
        return [f"<{type(exc).__name__}>"]


def a_record(domain: str) -> str:
    try:
        return socket.gethostbyname(domain)
    except Exception as exc:
        return f"unresolved ({type(exc).__name__})"


def address_of(lead: dict) -> str:
    return (lead.get("email") or lead.get("to") or "").strip().lower()


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    do_filter = "--filter" in sys.argv[1:]
    batch_path = args[0] if args else DEFAULT_BATCH

    if not os.path.isfile(batch_path):
        print(f"batch not found: {batch_path}")
        return 1

    with open(batch_path, encoding="utf-8") as fh:
        doc = json.load(fh)
    if not isinstance(doc, dict) or "ready" not in doc:
        print("unexpected batch shape; refusing to touch it")
        return 1

    leads = [l for l in doc["ready"] if isinstance(l, dict)]
    by_domain: dict[str, list[dict]] = {}
    for lead in leads:
        addr = address_of(lead)
        if "@" in addr:
            by_domain.setdefault(addr.split("@", 1)[1], []).append(lead)

    print(f"recipients: {len(leads)} | distinct domains: {len(by_domain)}\n")

    deliverable: set[str] = set()
    for domain, rows in sorted(by_domain.items()):
        mx = mx_for(domain)
        accepts = bool(mx) and not mx[0].startswith("<")
        if accepts:
            deliverable.add(domain)
        print(f"{domain}")
        print(f"  A  : {a_record(domain)}")
        print(f"  MX : {mx[0] if mx else 'none'}")
        print(f"  --> {'ACCEPTS MAIL' if accepts else 'NO MX: will hard-bounce'}")
        for r in rows:
            print(f"      {address_of(r)}  ({r.get('name')} @ {r.get('company')})")
        print()

    # A domain claimed by two different companies means the company label
    # cannot be trusted in the message body.
    for domain, rows in sorted(by_domain.items()):
        companies = {(r.get("company") or "").strip() for r in rows}
        if len(companies) > 1:
            print(f"LABEL CONFLICT: {domain} claimed by {sorted(companies)}")

    sendable = [l for l in leads if address_of(l).split("@")[-1] in deliverable]
    blocked = len(leads) - len(sendable)
    rate = (blocked / len(leads) * 100) if leads else 0
    print(f"\ndeliverable: {len(sendable)}/{len(leads)}"
          f"  |  would hard-bounce: {blocked} ({rate:.0f}%)")

    if not do_filter:
        if blocked:
            print("\nRun with --filter to drop the undeliverable recipients "
                  "before enabling ZTG_SEND_ALLOWED.")
        return 0

    doc["ready"] = sendable
    doc["leads_processed"] = len(sendable)
    doc["deliverability_filtered"] = True
    with open(batch_path, "w", encoding="utf-8") as fh:
        json.dump(doc, fh, indent=2, ensure_ascii=False)
    print(f"\nfiltered batch written: {len(sendable)} recipients kept, "
          f"{blocked} dropped")
    return 0


if __name__ == "__main__":
    sys.exit(main())
