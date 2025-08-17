#!/usr/bin/env python3
"""
Run the enhanced YAML auto-fixer to fix all remaining issues
"""

import os
import sys
from pathlib import Path

def fix_yaml_file(file_path, fix_mode='aggressive'):
    """Fix common YAML syntax errors in a file"""
    print(f"🔧 Fixing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    fixes_applied = []
    
    # Fix 1: Remove stray quotes in concurrency
    if 'concurrency:"' in content:
        content = content.replace('concurrency:"', 'concurrency:')
        fixes_applied.append("Fixed concurrency syntax")
    
    # Fix 2: Fix group references
    if 'group: "github.workflow-github.ref' in content:
        content = content.replace('group: "github.workflow-github.ref', 'group: "github.workflow-${{ github.ref }}"')
        fixes_applied.append("Fixed concurrency group reference")
    
    # Fix 2b: Fix unquoted group references
    if 'group: github.workflow-github.ref' in content:
        content = content.replace('group: github.workflow-github.ref', 'group: "github.workflow-${{ github.ref }}"')
        fixes_applied.append("Fixed unquoted concurrency group reference")
    
    # Fix 2c: Fix missing closing quotes in group references
    if 'group: "fast-auto-push-${{ github.ref }}' in content and not 'group: "fast-auto-push-${{ github.ref }}"' in content:
        content = content.replace('group: "fast-auto-push-${{ github.ref }}', 'group: "fast-auto-push-${{ github.ref }}"')
        fixes_applied.append("Fixed missing closing quote in group reference")
    
    # Fix 2d: Fix missing closing quotes in any group reference
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        if line.strip().startswith('group: "') and not line.strip().endswith('"'):
            if '${{' in line and '}}' in line:
                # This is a group line with GitHub context that's missing closing quote
                line = line.rstrip() + '"'
                fixes_applied.append("Fixed missing closing quote in group reference")
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)
    
    # Fix 3: Fix cancel-in-progress quotes
    if 'cancel-in-progress: "true' in content:
        content = content.replace('cancel-in-progress: "true', 'cancel-in-progress: true')
        fixes_applied.append("Fixed cancel-in-progress quotes")
    
    # Fix 4: Fix double quotes in env vars
    if '""' in content:
        content = content.replace('""', '"')
        fixes_applied.append("Fixed double quotes")
    
    # Fix 5: Fix run command syntax
    if 'run: |"' in content:
        content = content.replace('run: |"', 'run: |')
        fixes_applied.append("Fixed run command syntax")
    
    # Fix 6: Fix id field quotes
    if 'id: "' in content:
        content = content.replace('id: "', 'id: ')
        fixes_applied.append("Fixed id field quotes")
    
    # Fix 7: Fix case statement quotes
    if 'aggressive")' in content:
        content = content.replace('aggressive")', '"aggressive")')
        fixes_applied.append("Fixed case statement quotes")
    if 'balanced")' in content:
        content = content.replace('balanced")', '"balanced")')
        fixes_applied.append("Fixed case statement quotes")
    if 'conservative")' in content:
        content = content.replace('conservative")', '"conservative")')
        fixes_applied.append("Fixed case statement quotes")
    
    # Fix 8: Fix job names with stray quotes
    if ':"' in content:
        lines = content.split('\n')
        fixed_lines = []
        for line in lines:
            if ':"' in line and line.strip().endswith(':"'):
                # This is a job name with a stray quote
                line = line.rstrip(':"') + ':'
                fixes_applied.append("Fixed job name with stray quote")
            fixed_lines.append(line)
        content = '\n'.join(fixed_lines)
    
    # Fix 9: Fix step indentation issues
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        # Fix missing dashes for steps
        if (line.strip().startswith('uses:') or 
            line.strip().startswith('run:') or 
            line.strip().startswith('with:')) and i > 0:
            prev_line = lines[i-1].strip()
            if prev_line.startswith('- name:') and not line.strip().startswith('-'):
                # This line should be indented under the previous step
                line = '        ' + line.strip()
                fixes_applied.append("Fixed step indentation")
        
        # Fix 8-space indentation to 6-space for step items
        if line.startswith('        - name:') or line.startswith('        - uses:') or line.startswith('        - run:') or line.startswith('        - with:'):
            line = '      ' + line[8:]
            fixes_applied.append("Fixed step indentation")
        
        fixed_lines.append(line)
    
    new_content = '\n'.join(fixed_lines)
    if new_content != content:
        content = new_content
    
    # Fix 10: Fix missing step dashes
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        # Look for step properties that are missing dashes
        if (line.strip().startswith('uses:') or 
            line.strip().startswith('run:') or 
            line.strip().startswith('with:') or
            line.strip().startswith('id:') or
            line.strip().startswith('env:') or
            line.strip().startswith('working-directory:') or
            line.strip().startswith('shell:') or
            line.strip().startswith('timeout-minutes:') or
            line.strip().startswith('continue-on-error:')) and i > 0:
            prev_line = lines[i-1].strip()
            if prev_line.startswith('- name:') and not line.strip().startswith('-'):
                line = '        ' + line.strip()
                fixes_applied.append("Fixed missing step dash")
        
        fixed_lines.append(line)
    
    new_content = '\n'.join(fixed_lines)
    if new_content != content:
        content = new_content
    
    # Apply fixes if any were made
    if fixes_applied:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Applied fixes: {', '.join(fixes_applied)}")
            return True
        except Exception as e:
            print(f"❌ Error writing {file_path}: {e}")
            return False
    else:
        print(f"ℹ️  No fixes needed for {file_path}")
        return False

def main():
    print("🔧 Running enhanced YAML auto-fixer...")
    
    # Find all YAML files
    yaml_files = list(Path('.').rglob('*.yml'))
    yaml_files = [f for f in yaml_files if 'node_modules' not in str(f) and '.git' not in str(f)]
    
    print(f"📁 Found {len(yaml_files)} YAML files")
    
    # Fix mode
    fixed_count = 0
    for file_path in yaml_files:
        if fix_yaml_file(file_path, 'aggressive'):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
