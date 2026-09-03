#!/usr/bin/env python3
import requests, sys
urls=["https://ziontechgroup.com","https://ziontechgroup.com/services","https://ziontechgroup.com/pricing"]
for u in urls:
    r=requests.get(u,timeout=20)
    print(f"{u}: {r.status_code}")
    sys.exit(0 if r.status_code==200 else 1)
