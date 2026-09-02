#!/usr/bin/env python3
"""Add splat-based 200 rules to cover all blog/service/tool pages without individual rules."""
from pathlib import Path
import re, subprocess

repo = Path("/Users/miami2/zion-support.github.io")

# Read current _redirects
for fpath in [repo / "_redirects", repo / "public" / "_redirects", repo / "docs" / "_redirects"]:
    content = fpath.read_text()
    
    # Add splat rules if not present
    splat_rules = []
    
    # Blog splat: covers all blog/* pages
    if "/blog/*" not in content or "/blog/:splat/index.html 200" not in content:
        splat_rules.append("/blog/* /blog/:splat/index.html 200")
    
    # Services splat: covers all services/* pages
    # But keep individual service 200 rules (they may have special targets)
    if "/services/*" not in content or "/services/:splat/index.html 200" not in content:
        splat_rules.append("/services/* /services/:splat/index.html 200")
    
    # Tools splat: covers all tools/* pages
    if "/tools/*" not in content or "/tools/:splat/index.html 200" not in content:
        splat_rules.append("/tools/* /tools/:splat/index.html 200")
    
    if splat_rules:
        # Add splat rules at the end (after all individual rules)
        # Add a comment header
        new_lines = content.rstrip().split('\n')
        new_lines.append('')  # blank line
        new_lines.append('# Splat rules — cover all pages in these directories')
        new_lines.extend(splat_rules)
        fpath.write_text('\n'.join(new_lines) + '\n')
        print(f"Added {len(splat_rules)} splat rules to {fpath.name}")
    else:
        print(f"Splat rules already present in {fpath.name}")

# Verify parity
print("\n=== Verifying parity ===")
result1 = subprocess.run(['diff', '-q', str(repo / "_redirects"), str(repo / "public" / "_redirects")],
                        capture_output=True, text=True)
print(f"root vs public: {result1.stdout.strip() or 'IDENTICAL'}")

result2 = subprocess.run(['diff', '-q', str(repo / "_redirects"), str(repo / "docs" / "_redirects")],
                        capture_output=True, text=True)
print(f"root vs docs: {result2.stdout.strip() or 'IDENTICAL'}")

# Count new rules
with open(repo / "_redirects") as f:
    lines = f.readlines()

splat_200 = [l for l in lines if '/*' in l and '200' in l and not l.startswith('#')]
print(f"\nSplat 200 rules: {len(splat_200)}")
for r in splat_200:
    print(f"  {r.strip()}")

total_200 = len([l for l in lines if ' 200' in l and not l.startswith('#')])
total_301 = len([l for l in lines if ' 301' in l and not l.startswith('#')])
print(f"\nTotal: 200 rules={total_200}, 301 rules={total_301}")

# Push to main and gh-pages
print("\n=== Pushing to main ===")
result = subprocess.run(['git', 'add', '_redirects', 'public/_redirects', 'docs/_redirects'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"add: exit {result.returncode}")

result = subprocess.run(['git', 'commit', '-m', 'perf: add splat 200 rules for blog/services/tools directories'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"commit: {'success' if result.returncode == 0 else result.stderr.strip()}")

result = subprocess.run(['git', 'push', 'origin', 'main'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"push main: exit {result.returncode}")

print("\n=== Pushing main → gh-pages ===")
result = subprocess.run(['git', 'push', 'origin', 'main:gh-pages', '--force'],
                       cwd=str(repo), capture_output=True, text=True)
print(f"push main→gh-pages: exit {result.returncode}")
