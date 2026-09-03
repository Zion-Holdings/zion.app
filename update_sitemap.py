#!/usr/bin/env python3
"""Update sitemap.xml with the 10 new service pages."""
import re

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/public/sitemap.xml'
NEW_PAGES = [
    'intelligent-customer-service-for-healthcare-d0f9c7ca',
    'ai-devops-tech-edition-74429d99',
    'predictive-engine-engine-agriculture-4d4dace5',
    'predictive-processor-engine-tech-6dca9f98',
    'cognitive-generator-solution-healthcare-6e7cd9fc',
    'intelligent-orchestrator-for-insurance-f0b354d6',
    'ai-intelligent-automotive-edition-43b4cdb3',
    'ai-coordinator-real-estate-edition-5b2d7979',
    'cognitive-monitoring-solution-sports-f71ad03e',
    'ai-business-intelligence-transportation-edition-e01e1b32',
]

with open(SITEMAP) as f:
    sitemap = f.read()

# Remove the duplicate services/ entry (line 17) - keep only one
# The sitemap has services/ at line 17 and again... let me check
# Actually looking at the sitemap, line 17 has services/ - that's correct, keep it

new_entries = []
for pid in NEW_PAGES:
    new_entries.append(
        f'  <url>\n'
        f'    <loc>https://ziontechgroup.com/services/{pid}</loc>\n'
        f'    <lastmod>2026-09-03</lastmod>\n'
        f'  </url>'
    )

new_block = '\n'.join(new_entries)

# Insert before </urlset>
sitemap = sitemap.replace('</urlset>', f'{new_block}\n</urlset>')

with open(SITEMAP, 'w') as f:
    f.write(sitemap)

# Count total URLs
count = len(re.findall(r'<loc>', sitemap))
print(f'Sitemap updated: {count} URLs now')
print(f'Added {len(NEW_PAGES)} new service URLs')
