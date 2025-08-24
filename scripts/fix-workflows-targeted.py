#!/usr/bin/env python3
"""
Targeted GitHub Actions Workflow Fixer
Fixes specific YAML syntax errors found in the workflows
"""

import yaml
import re
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix a specific workflow file"""
    print(f"🔧 Fixing: {file_path.name}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create backup
        backup_path = f"{file_path}.backup"
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Fix specific issues
        fixed_content = fix_specific_issues(content)
        
        # Validate
        try:
            yaml.safe_load(fixed_content)
            print(f"  ✅ Fixed successfully")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
            
        except yaml.YAMLError as e:
            print(f"  ❌ Still broken: {e}")
            return False
            
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return False

def fix_specific_issues(content):
    """Fix the specific YAML issues found"""
    lines = content.split('\n')
    fixed_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Fix missing quotes in concurrency group
        if 'group:' in line and not line.strip().endswith('"'):
            if i + 1 < len(lines) and 'cancel-in-progress:' in lines[i + 1]:
                # This is a broken concurrency block
                fixed_lines.append(line.rstrip() + '"')
                i += 1
                continue
        
        # Fix missing steps section
        if stripped.startswith('- name:') and i > 0:
            prev_line = lines[i-1].strip()
            if prev_line == 'runs-on: ubuntu-latest' or 'runs-on:' in prev_line:
                # Insert missing steps section
                indent = len(lines[i-1]) - len(lines[i-1].lstrip())
                fixed_lines.append(' ' * indent + 'steps:')
        
        # Fix incorrect indentation for step properties
        if stripped.startswith('uses:') or stripped.startswith('run:') or stripped.startswith('if:'):
            if i > 0 and lines[i-1].strip().startswith('- name:'):
                # This should be properly indented under a step
                step_indent = len(lines[i-1]) - len(lines[i-1].lstrip())
                fixed_lines.append(' ' * (step_indent + 2) + stripped)
                i += 1
                continue
        
        # Fix missing runs-on
        if stripped.startswith('name:') and i > 0:
            prev_line = lines[i-1].strip()
            if prev_line.endswith(':') and not prev_line.startswith('#'):
                # This looks like a job definition, ensure it has runs-on
                next_line = lines[i + 1] if i + 1 < len(lines) else ""
                if 'runs-on:' not in next_line:
                    indent = len(line) - len(line.lstrip())
                    fixed_lines.append(line)
                    fixed_lines.append(' ' * (indent + 2) + 'runs-on: ubuntu-latest')
                    i += 1
                    continue
        
        fixed_lines.append(line)
        i += 1
    
    result = '\n'.join(fixed_lines)
    
    # Add missing permissions if not present
    if 'permissions:' not in result:
        result = result.replace('on:', 'on:\n\npermissions:\n  contents: read\n  actions: read')
    
    # Add missing concurrency if not present
    if 'concurrency:' not in result:
        result = result.replace('permissions:', 'permissions:\n\nconcurrency:\n  group: "github.workflow-${{ github.ref }}"\n  cancel-in-progress: true')
    
    return result

def main():
    """Main function"""
    workflows_dir = Path('.github/workflows')
    
    if not workflows_dir.exists():
        print("❌ .github/workflows directory not found")
        return
    
    workflow_files = list(workflows_dir.glob('*.yml'))
    fixed_count = 0
    
    print(f"🔍 Found {len(workflow_files)} workflow files")
    
    for workflow_file in workflow_files:
        if fix_workflow_file(workflow_file):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} workflows")

if __name__ == '__main__':
    main()