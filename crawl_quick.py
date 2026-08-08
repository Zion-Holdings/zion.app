#!/usr/bin/env python3
import urllib.request, urllib.error, ssl, time, sys
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base = 'https://ziontechgroup.com'
paths = [
'/',
'/blog/',
'/services/',
'/about/',
'/contact/',
'/pricing/',
'/careers/',
'/partners/',
'/press/',
'/privacy/',
'/cookies/',
'/faq/',
'/ai-services/',
'/solutions/',
'/status/',
'/terms/',
'/search/',
'/api-development/',
'/blockchain-solutions/',
'/analytics/',
'/services/ai-agentic-workflows-2026-583/',
'/blog/ai-agentic-workflows-2026-583/',
'/services/cloud-cost-ai-optimizer-2026-600/',
'/blog/cloud-cost-ai-optimizer-2026-600/',
'/services/ai-data-backup-2026-552/',
'/blog/ai-data-backup-2026-552/',
'/services/cloud-migration-services-2026-1121/',
'/blog/cloud-migration-services-2026-1121/',
'/services/enterprise-ai-intelligence-hub-2026-1143/',
'/blog/enterprise-ai-intelligence-hub-2026-1143/'
]

broken = []
for p in paths:
    try:
        r = urllib.request.urlopen(base + p, context=ctx, timeout=20)
        print(f'{p} -> {r.getcode()}')
    except urllib.error.HTTPError as e:
        print(f'{p} -> HTTP {e.code}')
        broken.append((p, e.code))
    except Exception as e:
        print(f'{p} -> ERROR {e}')
        broken.append((p, str(e)))

print(f'\nBroken: {len(broken)}')
for b in broken:
    print(b)
sys.exit(0 if not broken else 1)
