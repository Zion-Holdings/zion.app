#!/usr/bin/env python3
"""Rebuild sitemap.xml with all tools, blog posts, and services."""
import os
import json

tools = sorted([d for d in os.listdir('public/tools') 
                if os.path.isdir(f'public/tools/{d}') and not d.startswith('.')])

blog_posts = sorted([d for d in os.listdir('app/blog') 
                     if os.path.isdir(f'app/blog/{d}') and not d.startswith('.')])

services = json.load(open('app/data/servicesData.json'))

lines = ['<?xml version="1.0" encoding="UTF-8"?>']
lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

static_pages = ['', 'services/', 'tools/', 'blog/', 'contact/', 'about/', 'pricing/', \
                'ai-services-index/', 'free-ai-it-tools/', 'new-ai-services/',
                'hermes-agents/', 'hermes-monitor/', 'agents-monitoring/',
                'services/hermes-agent/', 'services/hermes-agent-training/',
                'services/hermes-ai-agent-platform/',
                'solutions/hermes-ai-agents/',
                'case-studies/hermes-agent-fleet/',
                'docs/hermes-agent-skills/',
                'docs/agent-framework-comparison/',
                'docs/hermes-agent-installation/',
                'docs/hermes-agent-mcp-integration/',
                'dashboard/', 'use-cases/', 'partners/', 'providers/', 'it-vendors/',
                'careers/', 'faq/', 'privacy/', 'terms/', 'status/']
for page in static_pages:
    lines.append(f'  <url><loc>https://ziontechgroup.com/{page}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>')

for tool in tools:
    lines.append(f'  <url><loc>https://ziontechgroup.com/tools/{tool}/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>')

for post in blog_posts:
    lines.append(f'  <url><loc>https://ziontechgroup.com/blog/{post}/</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>')

for svc in services[:16500]:
    href = svc.get('href', f"/services/{svc.get('slug', svc.get('id', ''))}/")
    lines.append(f'  <url><loc>https://ziontechgroup.com{href}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>')

lines.append('</urlset>')

with open('sitemap.xml', 'w') as f:
    f.write('\n'.join(lines))

total = len(tools) + len(blog_posts) + len(services[:16500]) + len(static_pages)
print(f"Sitemap rebuilt: {total} URLs")
