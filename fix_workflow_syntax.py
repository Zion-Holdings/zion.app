#!/usr/bin/env python3
"""
Fix GitHub Actions workflow YAML syntax errors
"""

import os
import re
import glob
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix common YAML syntax errors in workflow files"""
    print(f"Fixing {file_path}")
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix 1: Add missing permissions: key
    if 'contents: write' in content and 'permissions:' not in content:
        # Find the line with contents: write and add permissions: above it
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == 'contents: write':
                lines.insert(i, 'permissions:')
                break
        content = '\n'.join(lines)
    
    # Fix 2: Add missing runs-on: in jobs
    if 'name: Main Job' in content and 'runs-on:' not in content:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == 'name: Main Job':
                lines.insert(i + 1, '    runs-on: ubuntu-latest')
                break
        content = '\n'.join(lines)
    
    # Fix 3: Add missing steps: key
    if '- name: Checkout repository' in content and 'steps:' not in content:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == '- name: Checkout repository':
                lines.insert(i, '    steps:')
                break
        content = '\n'.join(lines)
    
    # Fix 4: Fix indentation for steps
    if 'steps:' in content:
        lines = content.split('\n')
        in_steps = False
        for i, line in enumerate(lines):
            if line.strip() == 'steps:':
                in_steps = True
                continue
            if in_steps and line.strip().startswith('- name:'):
                # Ensure proper indentation
                if not line.startswith('      '):
                    lines[i] = '      ' + line.strip()
            elif in_steps and line.strip().startswith('uses:'):
                if not line.startswith('        '):
                    lines[i] = '        ' + line.strip()
            elif in_steps and line.strip().startswith('with:'):
                if not line.startswith('        '):
                    lines[i] = '        ' + line.strip()
            elif in_steps and line.strip().startswith('run:'):
                if not line.startswith('        '):
                    lines[i] = '        ' + line.strip()
            elif in_steps and line.strip().startswith('id:'):
                if not line.startswith('        '):
                    lines[i] = '        ' + line.strip()
            elif in_steps and line.strip() == '':
                continue
            elif in_steps and not line.strip().startswith('-') and not line.strip().startswith('uses:') and not line.strip().startswith('with:') and not line.strip().startswith('run:') and not line.strip().startswith('id:') and line.strip() != '':
                # This might be the end of steps, check if next non-empty line is at job level
                in_steps = False
        
        content = '\n'.join(lines)
    
    # Fix 5: Fix missing with: sections
    if 'uses: actions/checkout@v4' in content:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == 'uses: actions/checkout@v4':
                # Check if next line has fetch-depth
                if i + 1 < len(lines) and 'fetch-depth:' in lines[i + 1]:
                    # Insert with: before fetch-depth
                    lines.insert(i + 1, '        with:')
                    # Fix indentation of fetch-depth
                    if i + 2 < len(lines):
                        lines[i + 2] = '          ' + lines[i + 2].strip()
                break
        content = '\n'.join(lines)
    
    if 'uses: actions/setup-node@v4' in content:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.strip() == 'uses: actions/setup-node@v4':
                # Check if next lines have node-version or cache
                if i + 1 < len(lines) and ('node-version:' in lines[i + 1] or 'cache:' in lines[i + 1]):
                    # Insert with: before node-version
                    lines.insert(i + 1, '        with:')
                    # Fix indentation
                    for j in range(i + 2, min(i + 5, len(lines))):
                        if lines[j].strip() and not lines[j].strip().startswith('-'):
                            lines[j] = '          ' + lines[j].strip()
                break
        content = '\n'.join(lines)
    
    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"  ✓ Fixed {file_path}")
        return True
    else:
        print(f"  - No changes needed for {file_path}")
        return False

def main():
    """Main function to fix all workflow files"""
    # Find all workflow files
    workflow_files = []
    
    # Check .github/workflows/ directory
    workflows_dir = Path('.github/workflows')
    if workflows_dir.exists():
        workflow_files.extend(workflows_dir.glob('*.yml'))
        workflow_files.extend(workflows_dir.glob('*.yaml'))
    
    # Check .github/ directory for workflow files
    github_dir = Path('.github')
    if github_dir.exists():
        workflow_files.extend(github_dir.glob('*.yml'))
        workflow_files.extend(github_dir.glob('*.yaml'))
    
    print(f"Found {len(workflow_files)} workflow files")
    
    fixed_count = 0
    for workflow_file in workflow_files:
        if fix_workflow_file(workflow_file):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {len(workflow_files)} workflow files")

if __name__ == '__main__':
    main()