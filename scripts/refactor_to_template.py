#!/usr/bin/env python3
"""
Refactor tool pages and simple content pages to use PageTemplate.
Only touches pages with simple <main className="min-h-screen bg-slate-950 py-20">
or <div className="container-page py-..."> wrappers - NOT pages with custom
gradient backgrounds.
"""

import os
import re
import sys
import json
from pathlib import Path

ROOT = Path(os.getcwd())
APP_DIR = ROOT / 'app'

def find_page_files():
    skip_dirs = {'node_modules', 'components', 'data', 'lib', 'constants', 'configurator', 'public', '.next'}
    results = []
    for root, dirs, files in os.walk(APP_DIR):
        dirs[:] = [d for d in dirs if d not in skip_dirs and not d.startswith('.')]
        for f in files:
            if f == 'page.tsx':
                results.append(Path(root) / f)
    return sorted(results)

def categorize(filepath):
    rel = str(filepath.relative_to(ROOT))
    if '/blog/' in rel: return 'blog'
    if '/tools/' in rel: return 'tool'
    if '/case-studies/' in rel: return 'case-study'
    if '/portal/' in rel: return 'portal'
    if '/ai/' in rel: return 'ai'
    return 'other'

def has_template(content):
    return 'PageTemplate' in content or 'PageShell' in content or 'ProductPageLayout' in content

def get_safe_pages():
    """Get pages that are safe to refactor - those with simple layouts."""
    files = find_page_files()
    safe = []
    for f in files:
        content = f.read_text()
        if has_template(content):
            continue
        cat = categorize(f)
        # Skip pages with custom gradient backgrounds
        if 'className="relative min-h-screen' in content or 'pointer-events-none absolute' in content:
            continue
        # Only process tools, case-studies, and simple blog posts
        if cat not in ('tool', 'case-study', 'blog'):
            continue
        # Only process pages with simple main wrappers
        if 'className="min-h-screen bg-slate-950 py-20"' in content or 'className="container-page py-16"' in content or '<main className="min-h-screen bg-slate-950' in content:
            safe.append(f)
    return safe

def extract_meta(content):
    title, description, canonical = '', '', ''

    # Try "export const metadata: Metadata = {" or "export const metadata = {"
    meta_match = re.search(r'export const metadata\s*[:=]\s*\{([\s\S]*?)\}', content)
    if meta_match:
        body = meta_match.group(1)
        tm = re.search(r'title\s*:\s*["\']([^"\']*)["\']', body)
        if tm: title = tm.group(1)

        dm = re.search(r'description\s*:\s*"([^"]*)"', body)
        if not dm:
            dm = re.search(r"description\s*:\s*'([^']*)'", body)
        if dm: description = dm.group(1)

        cm = re.search(r'alternates:\s*\{\s*canonical:\s*["\']([^"\']*)["\']', body)
        if cm: canonical = cm.group(1)

    if not title:
        h1 = re.search(r'<h1[^>]*>\s*([^<\n]+)', content)
        if h1: title = h1.group(1).strip()

    return title, description, canonical

def refactor_simple_main(filepath, content):
    """
    Refactor pages that use:
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        ... content ...
      </div>
    </main>

    into:
    <PageTemplate
      title="..."
      hero={{ variant: 'none' }}
      ...
    >
      ... content ...
    </PageTemplate>
    """
    cat = categorize(filepath)
    title, desc, canon = extract_meta(content)
    rel = str(filepath.relative_to(APP_DIR)).replace('/page.tsx', '')
    if not canon: canon = '/' + rel + '/'
    if not title:
        title = filepath.parent.name.replace('-', ' ').title()
    if not desc: desc = title

    display_title = title

    # Pattern: return ( <main className="min-h-screen bg-slate-950 py-20"> <div className="container-page"> ... </div> </main> );
    pattern = r'return\s*\(\s*\n?\s*<main\s+className="min-h-screen[^"]*">\s*\n?\s*<div\s+className="container-page[^"]*">\s*([\s\S]*?)\s*</div>\s*\n?\s*</main>\s*\n?\s*\)'

    match = re.search(pattern, content)
    if not match:
        # Try without container-page div
        pattern2 = r'return\s*\(\s*\n?\s*<main\s+className="min-h-screen[^"]*">\s*([\s\S]*?)\s*</main>\s*\n?\s*\)'
        match = re.search(pattern2, content)
        if match:
            # Check if inner content has a container-page div
            inner = match.group(1).strip()
            container = re.match(r'<div\s+className="container-page[^"]*">\s*([\s\S]*)\s*</div>\s*$', inner, re.DOTALL)
            if container:
                inner = container.group(1).strip()
        else:
            return None

    inner_content = match.group(1).strip()

    # Add PageTemplate import
    if 'import PageTemplate' not in content:
        use_client_match = re.search(r"['\"]use client['\"];?\s*\n", content)
        if use_client_match:
            content = content[:use_client_match.end()] + "import PageTemplate from '@/components/PageTemplate';\n" + content[use_client_match.end():]
        else:
            # Add after first import line
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if line.strip().startswith('import '):
                    lines.insert(i + 1, "import PageTemplate from '@/components/PageTemplate';")
                    break
            content = '\n'.join(lines)

    # Replace the return block
    old_return = match.group(0)

    breadcrumb_js = "[{ label: 'Home', href: '/' }, { label: " + json.dumps(display_title) + " }]"
    title_json = json.dumps(display_title)
    desc_json = json.dumps(desc)
    canon_json = json.dumps(canon)

    new_return = f'''return (
    <PageTemplate
      title={title_json}
      description={desc_json}
      canonical={canon_json}
      hero={{ variant: 'none' }}
      breadcrumbItems={{{breadcrumb_js}}}
    >
      {inner_content}
    </PageTemplate>
  );'''

    content = content.replace(old_return, new_return)

    return content

def main():
    dry_run = '--dry-run' in sys.argv
    category_filter = 'all'
    for arg in sys.argv[1:]:
        if arg.startswith('--category='):
            category_filter = arg.split('=')[1]
        elif arg == '--all':
            category_filter = 'all'

    safe_pages = get_safe_pages()

    if category_filter != 'all':
        safe_pages = [f for f in safe_pages if categorize(f) == category_filter]

    print(f'Found {len(safe_pages)} safe pages to refactor')

    success = 0
    for f in safe_pages:
        content = f.read_text()
        new_content = refactor_simple_main(f, content)
        if new_content and new_content != content:
            success += 1
            if not dry_run:
                f.write_text(new_content)
            print(f'  ✓ {f.relative_to(ROOT)}')
        else:
            print(f'  ✗ {f.relative_to(ROOT)} - could not refactor')

    suffix = ' would be' if dry_run else ''
    print(f'\nDone: {success}/{len(safe_pages)} files{suffix} refactored')

if __name__ == '__main__':
    main()
