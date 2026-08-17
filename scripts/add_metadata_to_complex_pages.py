#!/usr/bin/env python3
"""
Add metadata to complex pages that were skipped by the simple migration script.
These pages have rich content (hero sections, service grids, etc.) but lack metadata.
We add metadata export using data derived from the page content.
"""

import re
import os
import subprocess

cwd = "/Users/klebergarciaalcatrao/zion-support.github.io"

# Pages that need metadata added (complex pages with rich content)
PAGES_TO_FIX = [
    # Industry pages (complex but have metadata via generateMetadata on [key]/page.tsx)
    # These are individual industry pages
    "app/tools/page.tsx",
    "app/tools/service-recommender/page.tsx",
    "app/tools/service-comparison/page.tsx",
    "app/tools/ssl-checker/page.tsx",
    "app/it-services/page.tsx",
    "app/roi-calculator/page.tsx",
    "app/workflow-automation/page.tsx",
    "app/online-learning-platform/page.tsx",
    "app/zion-content-studio/page.tsx",
    "app/ai-powered-email-analyzer/page.tsx",
    "app/ai-powered-devops/page.tsx",
    "app/property-management-ai/page.tsx",
    "app/supply-chain-optimizer/page.tsx",
    "app/email-intelligence/page.tsx",
    "app/zion-crm-intelligence/page.tsx",
    "app/zion-ai-code-assistant/page.tsx",
    "app/zion-ai-quality-assurance/page.tsx",
    "app/pricing-calculator/page.tsx",
    "app/zion-ai-seo-optimizer/page.tsx",
    "app/zion-devops-automation/page.tsx",
    "app/zion-ai-workflow-automator/page.tsx",
    "app/zion-ai-workflow-automator-pro/page.tsx",
    "app/zion-ai-database-optimizer/page.tsx",
    "app/zion-ai-email-marketing-pro/page.tsx",
    "app/zion-ai-social-media-manager/page.tsx",
    "app/zion-ai-report-generator/page.tsx",
    "app/zion-ai-meeting-assistant/page.tsx",
    "app/zion-ai-customer-support-pro/page.tsx",
    "app/zion-ai-lead-scoring/page.tsx",
    "app/zion-ai-chatbot-builder/page.tsx",
    "app/zion-smart-analytics-dashboard/page.tsx",
    "app/zion-smart-crm-automation/page.tsx",
    "app/zion-ai-knowledge-base/page.tsx",
    "app/zion-security-shield/page.tsx",
    "app/zion-performance-monitor/page.tsx",
    "app/zion-cloud-vault/page.tsx",
    "app/zion-data-sync/page.tsx",
    "app/zion-ai-voice-assistant/page.tsx",
    "app/zion-project-master/page.tsx",
    "app/zion-email-automation/page.tsx",
    "app/zion-invoice-genius/page.tsx",
    "app/zion-ai-code-reviewer/page.tsx",
    "app/zion-ai-risk-assessor/page.tsx",
    "app/zion-ai-predictive-analytics/page.tsx",
    "app/zion-ai-api-tester/page.tsx",
    "app/ai-first-low-latency-observability-and-edge-monitoring-for-it-in-2026/page.tsx",
    "app/ai-first-devsecops-2026/page.tsx",
    "app/ai-first-cloud-cost-optimization/page.tsx",
    "app/ai-first-incident-response-2026/page.tsx",
    "app/ai-first-cloud-migration-2026/page.tsx",
    "app/ai-first-education-platforms-and-learning-intelligence-in-2026/page.tsx",
    "app/ai-first-low-code-workflow-automation-for-brazilian-it-in-2026/page.tsx",
    "app/ai-data-contract-governance-2026/page.tsx",
    "app/ai-partnership-growth-playbook-2026/page.tsx",
    "app/workflow-automation/page.tsx",
    "app/payment-success/page.tsx",
    "app/payment-cancelled/page.tsx",
    "app/ai-services/page.tsx",
    "app/partner-portal/page.tsx",
    "app/client-portal/page.tsx",
    "app/admin-dashboard/page.tsx",
    "app/roi-calculator/page.tsx",
    "app/micro-saas-qualification-rubric/page.tsx",
    "app/ceo-partnership-negotiation-email-templates/page.tsx",
    "app/online-learning-platform/page.tsx",
    "app/workflow-automation/page.tsx",
    "app/it-services/cybersecurity-audit/page.tsx",
    "app/it-services/mobile-development/page.tsx",
    "app/it-services/api-development/page.tsx",
    "app/it-services/data-engineering/page.tsx",
    "app/ai-partnership-growth-playbook-2026/page.tsx",
    "app/ai-first-occupational-health-and-safety-intelligence-in-2026/page.tsx",
    "app/ai-powered-email-analyzer/page.tsx",
    "app/proposals/view/[id]/page.tsx",
]

# Read the metadata script's output to find pages that got metadata
# Then add metadata to the remaining complex ones

def extract_title_from_h1(content):
    """Extract h1 text, handling nested spans."""
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if not h1_match:
        return None
    # Remove tags
    text = re.sub(r'<[^>]+>', '', h1_match.group(1))
    # Clean whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def extract_description(content):
    """Extract description from first paragraph or meta."""
    # Try to find a descriptive paragraph
    p_match = re.search(r'<p[^>]*class="[^"]*text-slate-[3400][^"]*"[^>]*>([^<]+)</p>', content)
    if p_match:
        desc = p_match.group(1).strip()
        # Clean entities
        desc = desc.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
        return desc
    return None


def add_metadata(filepath):
    """Add metadata to a page that doesn't have it."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has metadata
    if 'export const metadata' in content or 'export async function generateMetadata' in content:
        return None
    
    # Skip redirect pages
    if 'redirect(' in content:
        return None
    
    h1_text = extract_title_from_h1(content)
    if not h1_text:
        return None
    
    desc = extract_description(content)
    if not desc:
        desc = f'Discover Zion Tech Group\'s {h1_text.lower()} solutions for enterprise AI and IT transformation.'
    
    # Derive path from filepath
    path_slug = filepath.replace('app/', '').rstrip('/page.tsx')
    canonical = '/' + path_slug + '/'
    
    # Clean title (remove emoji prefix for SEO-friendly title)
    clean_title = re.sub(r'^[\U0001F300-\U0001FAFF\U00002600-\U000027BF][\s]*', '', h1_text).strip()
    title = clean_title + ' | Zion Tech Group'
    
    # Build metadata block
    metadata_block = f"""import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  alternates: {{ canonical: '{canonical}' }},
}};

"""
    
    # Find where to insert - after the last import
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if (line.strip().startswith('import ') or line.strip().startswith("'use client';")) and not line.strip().startswith('import type'):
            last_import_idx = i
    
    # Handle 'use client' directive
    use_client_idx = -1
    for i, line in enumerate(lines):
        if line.strip() == "'use client';":
            use_client_idx = i
    
    if use_client_idx >= 0:
        insert_after = use_client_idx
    elif last_import_idx >= 0:
        insert_after = last_import_idx
    else:
        insert_after = -1
    
    # Find the export default / function to insert before
    export_idx = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('export default function') or line.strip().startswith('const ') or line.strip().startswith('export const'):
            export_idx = i
            break
    
    if export_idx < 0:
        return None
    
    # Insert metadata block after imports, before the component
    new_lines = lines[:insert_after + 1] + ['', metadata_block] + lines[insert_after + 1:]
    new_content = '\n'.join(new_lines)
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    return title


# Process all pages that were skipped by the original script
# These are the complex pages
complex_pages = PAGES_TO_FIX

results = {}
for page_path in complex_pages:
    full_path = os.path.join(cwd, page_path)
    if not os.path.exists(full_path):
        results[page_path] = "SKIP (file not found)"
        continue
    
    result = add_metadata(full_path)
    if result:
        results[page_path] = f"✅ Added: {result}"
    else:
        results[page_path] = "⏭️ Already has metadata or redirect"

for page, status in sorted(results.items()):
    if '✅' in status:
        print(f"  {status}")
    else:
        print(f"  {status}: {page}")

count = sum(1 for s in results.values() if '✅' in s)
print(f"\nAdded metadata to {count} pages")