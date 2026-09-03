#!/usr/bin/env python3
"""Update sitemap.xml with the 10 new service pages."""
import re

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'
NEW_PAGES = [
    'ai-powered-next-generation-data-processing-81d13c40',
    'ai-powered-adaptive-threat-detection-7f2efd46',
    'ai-driven-marketing-optimization-suite-499099b2',
    'smart-customer-workflow-automation-25cc4017',
    'ai-powered-data-driven-iot-intelligence-264d41e4',
    'ai-powered-proactive-real-estate-analytics-59d54834',
    'intelligent-legal-forecasting-engine-1b3cb9cc',
    'ai-powered-advanced-customer-experience-suite-99082c37',
    'conversational-ai-for-gaming-7af9d21f',
    'ai-powered-real-time-data-processing-1a964317',
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
