#!/usr/bin/env python3
"""Rewrite sitemap.xml injection block with correct adaptive-insights IDs (650-659).
Removes the 10 ai-powered-* entries added by the previous script (services 651-660),
and replaces them with the actual 10 adaptive-insights service pages generated."""
import re

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'

CORRECT_IDS = [
    'adaptive-insights-logistics-aa427732',
    'adaptive-insights-manufacturing-995210f1',
    'adaptive-insights-real-estate-46a7f243',
    'adaptive-insights-retail-916de044',
    'adaptive-insights-sports-1-136aaa4f',
    'adaptive-insights-sports-f35d470c',
    'adaptive-insights-tech-3772eff5',
    'adaptive-insights-telecom-a24cf9c3',
    'adaptive-insights-transportation-a9dd7cec',
    'adaptive-intelligence-automotive-e6a38931',
]

WRONG_IDS = [
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
    content = f.read()

# Remove the wrong block (the 10 entries added by previous script)
for wid in WRONG_IDS:
    pattern = rf'\s*<url>\s*<loc>https://ziontechgroup\.com/services/{re.escape(wid)}</loc>\s*<lastmod>[^<]*</lastmod>\s*</url>'
    content = re.sub(pattern, '', content)

# Build correct entries
new_entries = []
for pid in CORRECT_IDS:
    new_entries.append(
        f'  <url>\n'
        f'    <loc>https://ziontechgroup.com/services/{pid}</loc>\n'
        f'    <lastmod>2026-09-04</lastmod>\n'
        f'    <changefreq>weekly</changefreq>\n'
        f'    <priority>0.7</priority>\n'
        f'  </url>'
    )

new_block = '\n'.join(new_entries)
content = content.replace('</urlset>', f'{new_block}\n</urlset>')

with open(SITEMAP, 'w') as f:
    f.write(content)

count = len(re.findall(r'<loc>', content))
adaptive_count = len(re.findall(r'adaptive-insights', content))
ai_count = len(re.findall(r'ai-powered-', content))
print(f'Sitemap now: {count} URLs, {adaptive_count} adaptive-insights, {ai_count} ai-powered')
print(f'Replaced {len(WRONG_IDS)} wrong entries with {len(CORRECT_IDS)} correct adaptive-insights entries')
