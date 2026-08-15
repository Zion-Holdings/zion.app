import json
with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json') as f:
    data = json.load(f)

# Count by industry
industries = {}
for s in data:
    industry = s.get('industry', 'unknown')
    industries[industry] = industries.get(industry, 0) + 1

# Target industries
target = ['real-estate', 'telecommunications', 'gaming', 'healthcare', 'finance', 'manufacturing', 'retail', 'logistics']
for t in target:
    print(f'{t}: {industries.get(t, 0)}')

# Show all industries sorted by count
print('\nAll industries:')
for ind, count in sorted(industries.items(), key=lambda x: -x[1]):
    print(f'  {ind}: {count}')