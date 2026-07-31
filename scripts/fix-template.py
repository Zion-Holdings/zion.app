#!/usr/bin/env python3
"""
Fix the template, design, and layout issues in the static HTML files.
This script replaces placeholder "0" values with actual service counts.
"""

import re
import os

# Read the HTML file
html_path = '/Users/klebergarciaalcatrao/out/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Service count from service-index.json
SERVICE_COUNT = 14055

# Fix the hero section
replacements = [
    # Hero section
    ('● 0 Services — Live Now', f'● {SERVICE_COUNT:,} Services — Live Now'),
    ('0 real-world AI, IT, cloud, security, data, automation, micro-SaaS, DevOps, blockchain, and IoT services', f'{SERVICE_COUNT:,} real-world AI, IT, cloud, security, data, automation, micro-SaaS, DevOps, blockchain, and IoT services'),
    ('Explore All 3129+ Services', f'Explore All {SERVICE_COUNT:,}+ Services'),
    
    # Stats section
    ('602 services · 6 categories', f'{SERVICE_COUNT:,} services · 16 categories'),
    
    # Agent fleet section
    ('0+ Agents Live', '9+ Agents Live'),
    ('0+ Services', f'{SERVICE_COUNT:,}+ Services'),
    ('0+ Waves', '60+ Waves'),
    ('0 Actions', '315 Actions'),
    
    # Trust badges
    ('0 Published', '93 Published'),
    ('0 Beta', '0 Beta'),
    ('0 Coming Soon', '0 Coming Soon'),
]

changed = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        changed += 1
        print(f"Fixed: '{old[:50]}...' -> '{new[:50]}...'")

# Write the fixed content back
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✓ Fixed {changed} replacements in index.html")

# Also fix other key HTML files
for html_file in ['404.html', 'services/index.html']:
    path = f'/Users/klebergarciaalcatrao/out/{html_file}'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
        
        for old, new in replacements:
            if old in c:
                c = c.replace(old, new)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"✓ Fixed {path}")

print("\n✓ Template fixes complete!")