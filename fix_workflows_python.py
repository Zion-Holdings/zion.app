#!/usr/bin/env python3
"""
Python script to fix YAML syntax errors in GitHub Actions workflows
"""

import os
import re
import shutil
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix a single workflow file by reading and rewriting it properly"""
    print(f"Fixing: {file_path}")
    
    # Create backup
    backup_path = f"{file_path}.backup4"
    shutil.copy2(file_path, backup_path)
    
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Fix common patterns
        fixed_content = content
        
        # Fix missing newlines after cron schedules
        fixed_content = re.sub(r'(cron: [^\n]*)\njobs:', r'\1\n\njobs:', fixed_content)
        
        # Fix missing newlines after schedule
        fixed_content = re.sub(r'(schedule:)\njobs:', r'\1\n\njobs:', fixed_content)
        
        # Fix missing newlines after on:
        fixed_content = re.sub(r'(on:)\njobs:', r'\1\n\njobs:', fixed_content)
        
        # Fix missing newlines after workflow_dispatch
        fixed_content = re.sub(r'(workflow_dispatch:)\njobs:', r'\1\n\njobs:', fixed_content)
        
        # Fix missing newlines after permissions
        fixed_content = re.sub(r'(permissions:)\njobs:', r'\1\n\njobs:', fixed_content)
        
        # Fix missing newlines after steps:
        fixed_content = re.sub(r'(steps:)\n    - name:', r'\1\n      - name:', fixed_content)
        
        # Fix missing newlines between step names and their properties
        fixed_content = re.sub(r'(- name: [^\n]*)\n    uses:', r'\1\n      uses:', fixed_content)
        fixed_content = re.sub(r'(- name: [^\n]*)\n    run:', r'\1\n      run:', fixed_content)
        fixed_content = re.sub(r'(- name: [^\n]*)\n    with:', r'\1\n      with:', fixed_content)
        fixed_content = re.sub(r'(- name: [^\n]*)\n    if:', r'\1\n      if:', fixed_content)
        
        # Fix missing newlines between uses and with
        fixed_content = re.sub(r'(uses: [^\n]*)\n    with:', r'\1\n      with:', fixed_content)
        
        # Fix missing newlines between run and next step
        fixed_content = re.sub(r'(run: [^\n]*)\n    - name:', r'\1\n      - name:', fixed_content)
        
        # Fix missing newlines between with and node-version
        fixed_content = re.sub(r'(with:)\n    node-version:', r'\1\n      node-version:', fixed_content)
        
        # Fix indentation issues
        fixed_content = re.sub(r'^      timeout-minutes:', '    timeout-minutes:', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^  runs-on:', '    runs-on:', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^  steps:', '    steps:', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^  agent-execution:', '    agent-execution:', fixed_content, flags=re.MULTILINE)
        
        # Fix missing newlines between steps
        fixed_content = re.sub(r'(run: [^\n]*)\n    - name:', r'\1\n      - name:', fixed_content)
        
        # Fix missing newlines after step names
        fixed_content = re.sub(r'(- name: [^\n]*)\n      uses:', r'\1\n        uses:', fixed_content)
        fixed_content = re.sub(r'(- name: [^\n]*)\n      run:', r'\1\n        run:', fixed_content)
        fixed_content = re.sub(r'(- name: [^\n]*)\n      with:', r'\1\n        with:', fixed_content)
        
        # Fix missing newlines after uses
        fixed_content = re.sub(r'(uses: [^\n]*)\n      with:', r'\1\n        with:', fixed_content)
        
        # Fix missing newlines after with
        fixed_content = re.sub(r'(with:)\n        node-version:', r'\1\n          node-version:', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w') as f:
            f.write(fixed_content)
        
        print(f"  Fixed: {file_path}")
        
    except Exception as e:
        print(f"  Error fixing {file_path}: {e}")
        # Restore from backup
        shutil.copy2(backup_path, file_path)

def main():
    """Main function to find and fix all workflow files with errors"""
    print("Python-based workflow fixer starting...")
    
    workflows_dir = Path('.github/workflows')
    if not workflows_dir.exists():
        print("Workflows directory not found!")
        return
    
    # Find all workflow files
    workflow_files = list(workflows_dir.glob('*.yml')) + list(workflows_dir.glob('*.yaml'))
    
    print(f"Found {len(workflow_files)} workflow files")
    
    # Find files with errors
    files_with_errors = []
    for file_path in workflow_files:
        try:
            import yaml
            with open(file_path, 'r') as f:
                yaml.safe_load(f)
        except Exception:
            files_with_errors.append(file_path)
    
    print(f"Found {len(files_with_errors)} files with YAML syntax errors")
    
    # Fix each file
    for file_path in files_with_errors:
        fix_workflow_file(file_path)
    
    print("Python-based workflow fixes completed!")
    print("Note: Backup files have been created with .backup4 extension")

if __name__ == "__main__":
    main()
