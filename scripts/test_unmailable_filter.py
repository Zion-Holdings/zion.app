#!/usr/bin/env python3
"""Guard for the cold-outreach unmailable-address filter.

Wave2/wave3 on 2026-08-16 mailed no_reply@, business-noreply@ and
no_responder@ addresses, so the sender now rejects machine-only addresses by
shape rather than by cataloguing them one at a time. These assertions pin both
directions: the known-bad addresses stay blocked, and real prospects are never
caught by the pattern.

Run: python3 scripts/test_unmailable_filter.py
"""
import importlib.util
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SENDER = REPO / 'lead-crm' / 'send_outreach_batch.py'

# Addresses that actually received cold outreach and must never receive it again.
MUST_BLOCK = [
    'no_reply@email.heygen.com',
    'business-noreply@global.metamail.com',
    'no_responder@servidorkpmkmd.info-ambon.id',
    'notification@service.tiktok.com',
    'team@notifications.resend.com',
    'hello@email.marketing.acme.com',
    'contact@mailer.bigcorp.io',
    'bounces@mg.example.org',
    'postmaster@anything.com',
    'sem-arroba',
    '',
]

# Real prospects / legitimate mailboxes. A false positive here silently drops
# revenue, so these are as load-bearing as the blocklist above.
MUST_PASS = [
    'andrew.aite@aitech.co',
    'daniel.devo@innovateco.com',
    'psingh@solyssey.com',
    'kleber@ziontechgroup.com',
    'marketing@xturbo.pe',
    'info@news.iplace.com.br',
    'sales@email.com',      # short registrable domain, not a sending subdomain
    'jane@mail.ru',         # legitimate provider, two labels
    'ceo@mynotifyapp.com',  # "notify" inside a longer word
    'x@gmail.com',
]


def load_sender():
    sys.argv = ['test_unmailable_filter']
    spec = importlib.util.spec_from_file_location('_sender_under_test', SENDER)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main() -> int:
    mod = load_sender()
    failures = []

    for addr in MUST_BLOCK:
        if not mod._unmailable_reason(addr):
            failures.append(f'should be blocked but passed: {addr!r}')

    for addr in MUST_PASS:
        reason = mod._unmailable_reason(addr)
        if reason:
            failures.append(f'false positive on real prospect {addr!r}: {reason}')

    # The exclusion file must stay a dict with an "addresses" list; a plain list
    # would make _load_excluded() return an empty set and silently re-enable
    # every quarantined address.
    excluded = mod._load_excluded()
    if not isinstance(excluded, set) or not excluded:
        failures.append('_load_excluded() returned nothing -- exclusion list broken')
    for known in ('leads@servi.com', 'support@vultr.com'):
        if known not in excluded:
            failures.append(f'previously quarantined address missing: {known}')

    if failures:
        print(f'FAIL ({len(failures)})')
        for f in failures:
            print('  -', f)
        return 1

    print(f'ok: {len(MUST_BLOCK)} blocked, {len(MUST_PASS)} allowed, '
          f'{len(excluded)} addresses quarantined')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
