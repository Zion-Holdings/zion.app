#!/usr/bin/env python3
import requests, sys

urls = [
    "https://ziontechgroup.com",
    "https://ziontechgroup.com/services",
    "https://ziontechgroup.com/pricing",
    "https://ziontechgroup.com/stripe",
    "https://ziontechgroup.com/affiliate",
    "https://ziontechgroup.com/partners"
]

errors = []
for u in urls:
    try:
        r = requests.get(u, timeout=10)
        status = "OK" if r.status_code == 200 else f"FAIL({r.status_code})"
        print(f"{u}: {status}")
        if r.status_code != 200:
            errors.append(u)
    except Exception as e:
        print(f"{u}: ERROR({e})")
        errors.append(u)

sys.exit(0 if not errors else 1)