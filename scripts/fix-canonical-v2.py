#!/usr/bin/env python3
"""Add missing canonical to pages with 'export const metadata = {' but no 'alternates'."""
import subprocess, os, re

os.chdir('/Users/klebergarciaalcatrao/zion-support.github.io')

# Find all pages with export const metadata but no alternates
result = subprocess.run(
    ['grep', '-rl', 'export const metadata', '--include=*.tsx', 'app/services/'],
    capture_output=True, text=True
)
all_meta_files = [f for f in result.stdout.strip().split('\n') if f]

# Find files that already have alternates
result2 = subprocess.run(
    ['grep', '-rl', 'alternates', '--include=*.tsx', 'app/services/'],
    capture_output=True, text=True
)
has_alternates = set(f for f in result2.stdout.strip().split('\n') if f)

# Find files without alternates
missing = [f for f in all_meta_files if f not in has_alternates]

fixed = 0
for file in missing:
    content = open(file).read()
    # Skip if it uses generateMetadata or redirect
    if 'generateMetadata' in content or 'redirect(' in content:
        continue
    # Build canonical path
    canonical = '/' + file.replace('/page.tsx', '')
    # Add alternates.canonical before the closing of metadata block
    # Pattern: description: '...',\n}  ->  description: '...',\n  alternates: { canonical: '...' },\n}
    new_content = re.sub(
        r"(description:.*?,)\s*\n(\s*\};)",
        rf"\1\n  alternates: {{ canonical: '{canonical}' }},\n\2",
        content
    )
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        fixed += 1

print(f"Fixed {fixed} pages")
