import os, collections
path = os.path.join(os.path.dirname(__file__), '..', '..', 'AppData', 'Local', 'Temp', 'zion_urls.txt')
path = os.path.abspath(path)
with open(path) as f:
    urls = [l.strip() for l in f if l.strip()]
cats = collections.Counter()
for u in urls:
    if '/blog/' in u:
        cats['blog'] += 1
    elif '/tools/' in u:
        cats['tools'] += 1
    elif '/services/' in u:
        cats['services'] += 1
    elif u in ('https://ziontechgroup.com/cookies/','https://ziontechgroup.com/press/','https://ziontechgroup.com/privacy/','https://ziontechgroup.com/proposals/','https://ziontechgroup.com/agents-monitoring/','https://ziontechgroup.com/ai/ai-readiness-assessment/','https://ziontechgroup.com/sla/','https://ziontechgroup.com/status/','https://ziontechgroup.com/terms/'):
        cats['misc'] += 1
    else:
        cats['other'] += 1
for k,v in cats.most_common():
    print(f'{k}: {v}')
