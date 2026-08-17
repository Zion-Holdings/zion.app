#!/usr/bin/env python3
"""Fix canonical paths to remove the /app/ prefix."""
import subprocess, os, re

os.chdir('/Users/klebergarciaalcatrao/zion-support.github.io')

# Find all files with broken canonical paths
result = subprocess.run(
    ['grep', '-rl', "canonical: '/app/services", '--include=*.tsx', 'app/services/'],
    capture_output=True, text=True
)
files = [f for f in result.stdout.strip().split('\n') if f]

fixed = 0
for file in files:
    with open(file) as f:
        content = f.read()
    # Remove /app prefix from canonical paths
    new_content = content.replace(
        "canonical: '/app/services",
        "canonical: '/services"
    )
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        fixed += 1

print(f"Fixed {fixed} pages")
