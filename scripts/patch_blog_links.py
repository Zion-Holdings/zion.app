#!/usr/bin/env python3
"""Patch broken internal links inside generated blog pages."""
import re
from pathlib import Path

REPO = Path('.').resolve()
BLOG_ROOT = REPO / 'app' / 'blog'

# Canonical base slugs for remapping
canonical_map = {
    'managed-it-services-small-business': 'managed-it-services-small-business-2026',
    'cybersecurity-platform-msp': 'cybersecurity-platform-msp-2026',
    'cloud-cost-ai-optimizer': 'cloud-cost-ai-optimizer-2026',
    'ai-observability': 'ai-observability-2026',
    'it-consulting': 'it-consulting-2026',
    'cloud-migration-services': 'cloud-migration-services-2026',
}

# Known broken service slugs -> fallback
service_fallbacks = {
    'ai-meeting-intelligence-minutes-and-actions': '/services/',
    'ai-incident-response-and-oncall-automation': '/services/',
    'devops-automation': '/services/',
    'ai-medical-diagnosis': '/services/',
    'hl7-fhir-integration': '/services/',
    'fraud-detection-ai': '/services/',
    'real-time-analytics': '/services/',
    'dynamic-pricing': '/services/',
    'iot-integration': '/services/',
    'route-optimization': '/services/',
    'fleet-management': '/services/',
    'legal-document-ai': '/services/',
    'contract-lifecycle': '/services/',
    'smart-inventory-ai': '/services/',
    'demand-forecasting': '/services/',
    'ai-predictive-analytics': '/services/',
}

replacements = {}
for base, canonical in canonical_map.items():
    replacements[f'/blog/{base}-'] = f'/blog/{canonical}/'
    replacements[f'/blog/{base}-'] = f'/blog/{canonical}/'
for bad, fallback in service_fallbacks.items():
    replacements[f'/services/{bad}/'] = fallback

fixed = 0
files = 0
for page in BLOG_ROOT.glob('*/page.tsx'):
    text = page.read_text(encoding='utf-8')
    new = text
    for old, new_url in replacements.items():
        if old in new:
            new = new.replace(old, new_url)
            fixed += 1
    if new != text:
        page.write_text(new, encoding='utf-8')
        files += 1

print(f'Updated {files} files, applied {fixed} replacements')
