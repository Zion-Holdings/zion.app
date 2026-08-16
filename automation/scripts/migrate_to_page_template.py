#!/usr/bin/env python3
"""migrate_to_page_template.py — Convert pages with manual <main> wrappers to use PageTemplate.

This script:
1. Finds all page.tsx files that have a manual <main className...> but don't import PageShell/PageTemplate/ProductPageLayout
2. Wraps their content in <PageTemplate> with appropriate props
3. Handles the common service page pattern and other simple patterns
"""

import os
import re
import sys
from pathlib import Path

REPO_ROOT = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_DIR = os.path.join(REPO_ROOT, "app")

def find_target_pages():
    """Find all page.tsx that use manual <main> but no shared template."""
    targets = []
    for root, dirs, files in os.walk(APP_DIR):
        for fname in files:
            if fname != "page.tsx":
                continue
            fpath = os.path.join(root, fname)
            try:
                content = Path(fpath).read_text(encoding="utf-8")
            except Exception:
                continue
            
            # Skip if already uses a shared template
            if any(x in content for x in ["PageShell", "PageTemplate", "ProductPageLayout", "ToolPage"]):
                continue
            # Skip if no manual main
            if "main className" not in content:
                continue
            
            targets.append(fpath)
    return targets

def extract_metadata(content):
    """Extract title and description from metadata block if present."""
    title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
    desc_match = re.search(r"description:\s*['\"]([^'\"]{10,})['\"]", content)
    canonical_match = re.search(r"canonical:\s*['\"]([^'\"]+)['\"]", content)
    
    title = title_match.group(1) if title_match else "Page"
    description = desc_match.group(1) if desc_match else ""
    canonical = canonical_match.group(1) if canonical_match else ""
    
    return title, description, canonical

def is_service_page(content):
    """Check if this looks like a generated service page."""
    return "ServicePage" in content or "service" in content.lower()

def migrate_service_page(fpath, content, title, description, canonical):
    """Convert a service page to use PageTemplate with centered layout."""
    
    # Extract the inner content between <div className="max-w-4xl mx-auto px-6 py-16"> and </div>\n        </main>
    # The service pages have this structure:
    # <main className="min-h-screen bg-slate-950 text-white">
    #   <div className="max-w-4xl mx-auto px-6 py-16">
    #     <h1>...</h1>
    #     <p>...</p>
    #     ... content ...
    #   </div>
    # </main>
    
    # Extract content inside the main wrapper
    # Find the opening div after main
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if not main_match:
        return None
    
    inner = main_match.group(1).strip()
    
    # Remove the wrapper div if present
    div_match = re.search(r'<div className="max-w-4xl mx-auto px-6 py-16">(.*?)</div>\s*$', inner, re.DOTALL)
    if div_match:
        inner = div_match.group(1).strip()
    
    # Extract the title from the h1
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', inner, re.DOTALL)
    page_title = h1_match.group(1).strip() if h1_match else title
    
    # Build the new content
    # Remove the h1 since PageTemplate renders the title as hero
    # Actually, for centered layout, we don't have hero, so keep h1
    
    new_content = f'''import PageTemplate from '@/components/PageTemplate';
import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{page_title}',
  description: '{description[:150]}...',
  alternates: {{ canonical: '{canonical or "/"}' }},
}};

export default function ServicePage() {{
  return (
    <PageTemplate
      title="{page_title}"
      description="{description[:150]}..."
      canonical="{canonical or '/'}"
      layout="centered"
      breadcrumbItems={{[
        {{ label: 'Home', href: '/' }},
        {{ label: 'Services', href: '/services/' }},
        {{ label: '{page_title}' }},
      ]}}
    >
      {inner}
    </PageTemplate>
  );
}}
'''
    
    return new_content

def migrate_simple_page(fpath, content, title, description, canonical):
    """Convert a simple page (like cookies, search) to use PageTemplate."""
    
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if not main_match:
        return None
    
    inner = main_match.group(1).strip()
    
    # Extract h1
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', inner, re.DOTALL)
    page_title = h1_match.group(1).strip() if h1_match else title
    
    # Remove the outer container div if it has container-page or similar
    # Keep the inner content
    
    # Determine if this should use 'tool' or 'centered' layout
    filepath = fpath.replace(str(APP_DIR) + "/", "")
    if filepath.startswith("tools/"):
        layout = "tool"
    else:
        layout = "centered"
    
    # Build breadcrumb
    if filepath.startswith("tools/"):
        breadcrumb = [
            { label: 'Home', href: '/' },
            { label: 'Free Tools', href: '/tools/' },
            { label: page_title },
        ]
    elif filepath.startswith("blog/"):
        breadcrumb = [
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog/' },
            { label: page_title },
        ]
    else:
        breadcrumb = [
            { label: 'Home', href: '/' },
            { label: page_title },
        ]
    
    breadcrumb_str = "[\n" + ",\n".join(
        f"        {{ label: '{b['label']}', href: '{b.get('href', '')}' }}" for b in breadcrumb
    ) + ",\n      ]"
    
    # Remove existing imports that we'll replace
    lines = content.split('\n')
    new_lines = []
    in_metadata = False
    
    for line in lines:
        # Skip old imports
        if line.strip().startswith("import") and "from" in line:
            continue
        # Skip metadata block
        if "export const metadata" in line:
            in_metadata = True
            continue
        if in_metadata:
            if line.strip() == "};":
                in_metadata = False
                continue
            continue
        # Skip 'use client'
        if line.strip() == "'use client';":
            continue
        new_lines.append(line)
    
    remaining = '\n'.join(new_lines).strip()
    
    new_content = f'''import PageTemplate from '@/components/PageTemplate';
import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{page_title}',
  description: '{description[:150]}...',
  alternates: {{ canonical: '{canonical or "/"}' }},
}};

export default function Page() {{
  return (
    <PageTemplate
      title="{page_title}"
      description="{description[:150]}..."
      canonical="{canonical or '/'}"
      layout="{layout}"
      breadcrumbItems={[
        {breadcrumb_str}
      ]}
    >
      {inner}
    </PageTemplate>
  );
}}
'''
    
    return new_content

def main():
    targets = find_target_pages()
    print(f"Found {len(targets)} pages to migrate")
    
    migrated = 0
    failed = 0
    
    for fpath in targets:
        content = Path(fpath).read_text(encoding="utf-8")
        title, description, canonical = extract_metadata(content)
        
        if is_service_page(content):
            new_content = migrate_service_page(fpath, content, title, description, canonical)
        else:
            new_content = migrate_simple_page(fpath, content, title, description, canonical)
        
        if new_content:
            Path(fpath).write_text(new_content, encoding="utf-8")
            migrated += 1
            print(f"  ✓ Migrated: {fpath.replace(REPO_ROOT + '/', '')}")
        else:
            failed += 1
            print(f"  ✗ Failed: {fpath.replace(REPO_ROOT + '/', '')}")
    
    print(f"\nResults: {migrated} migrated, {failed} failed")
    return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
