#!/usr/bin/env python3
"""Fix literal $canonical in canonical strings across service pages."""
import subprocess, os

os.chdir('/Users/klebergarciaalcatrao/zion-support.github.io')

# Find all files with the broken canonical
result = subprocess.run(
    ['grep', '-rl', "canonical: '$canonical'", '--include=*.tsx', 'app/services/'],
    capture_output=True, text=True
)
files = [f for f in result.stdout.strip().split('\n') if f]

fixed = 0
for file in files:
    with open(file) as f:
        content = f.read()
    # The canonical path is the file path without /page.tsx
    canonical = '/' + file.replace('/page.tsx', '')
    # Replace the broken literal
    new_content = content.replace(
        "canonical: '$canonical'",
        f"canonical: '{canonical}'"
    )
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        fixed += 1

print(f"Fixed {fixed} pages")
