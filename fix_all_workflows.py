#!/usr/bin/env python3
"""
Comprehensive GitHub Workflow Fixer
Fixes common YAML structure issues in GitHub workflow files
"""

import os
import re
import yaml
import glob
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix a single workflow file"""
    print(f"🔧 Fixing {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    
    # Fix 1: Add missing runs-on if job doesn't have it
    content = fix_missing_runs_on(content)
    
    # Fix 2: Add missing steps section
    content = fix_missing_steps(content)
    
    # Fix 3: Fix malformed YAML structure
    content = fix_yaml_structure(content)
    
    # Fix 4: Fix environment variables placement
    content = fix_env_placement(content)
    
    # Fix 5: Fix missing strategy sections
    content = fix_missing_strategy(content)
    
    # Fix 6: Fix malformed outputs
    content = fix_malformed_outputs(content)
    
    # Fix 7: Fix missing job names
    content = fix_missing_job_names(content)
    
    # Fix 8: Fix malformed matrix definitions
    content = fix_matrix_definitions(content)
    
    # Fix 9: Fix missing checkout steps
    content = fix_missing_checkout(content)
    
    # Fix 10: Fix malformed run commands
    content = fix_malformed_run_commands(content)
    
    if content != original_content:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed {file_path}")
            return True
        except Exception as e:
            print(f"❌ Error writing {file_path}: {e}")
            return False
    else:
        print(f"ℹ️ No changes needed for {file_path}")
        return False

def fix_missing_runs_on(content):
    """Add missing runs-on specification to jobs"""
    # Pattern to find jobs without runs-on
    pattern = r'(jobs:\s*\n)((?:[^\n]*\n)*?)(\s+[a-zA-Z0-9_-]+:\s*\n)((?:[^\n]*\n)*?)(?=\s+[a-zA-Z0-9_-]+:|$)'
    
    def replace_job(match):
        job_section = match.group(0)
        if 'runs-on:' not in job_section:
            # Find the job name
            job_name_match = re.search(r'(\s+[a-zA-Z0-9_-]+):\s*\n', job_section)
            if job_name_match:
                job_name = job_name_match.group(1).strip()
                # Add runs-on after job name
                job_section = re.sub(
                    rf'(\s+{re.escape(job_name)}:\s*\n)',
                    rf'\1    runs-on: ubuntu-latest\n',
                    job_section
                )
        return job_section
    
    content = re.sub(pattern, replace_job, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_missing_steps(content):
    """Add missing steps section to jobs"""
    # Pattern to find jobs without steps
    pattern = r'(\s+[a-zA-Z0-9_-]+:\s*\n)((?:[^\n]*\n)*?)(?=\s+[a-zA-Z0-9_-]+:|$)'
    
    def replace_job(match):
        job_section = match.group(0)
        if 'steps:' not in job_section and 'runs-on:' in job_section:
            # Add basic steps section
            steps_section = '''    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Run workflow
        run: |
          echo "Workflow executed successfully"
'''
            job_section = job_section.rstrip() + '\n' + steps_section
        return job_section
    
    content = re.sub(pattern, replace_job, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_yaml_structure(content):
    """Fix basic YAML structure issues"""
    # Fix missing quotes in JSON-like structures
    content = re.sub(r'(\w+):\s*([^"\s][^,\s]*[^"\s,])', r'\1: "\2"', content)
    
    # Fix malformed environment variables
    content = re.sub(r'(\s+)([A-Z_]+):\s*"(\${{[^}]+}})"', r'\1\2: \3', content)
    
    # Fix missing colons in job definitions
    content = re.sub(r'(\s+)([a-zA-Z0-9_-]+)\s*\n(\s+)([a-zA-Z0-9_-]+):', r'\1\2:\n\3\4:', content)
    
    return content

def fix_env_placement(content):
    """Move environment variables to proper env section"""
    # Find environment variables defined outside of jobs
    env_pattern = r'(\s+[A-Z_]+):\s*"(\${{[^}]+}})"'
    
    def replace_env(match):
        var_name = match.group(1)
        var_value = match.group(2)
        return f'  {var_name}: {var_value}'
    
    # Move them to env section
    if 'env:' not in content:
        content = re.sub(r'(permissions:\s*\n)', r'\1\nenv:\n', content)
    
    # Find and move env vars
    env_vars = re.findall(env_pattern, content)
    for var_name, var_value in env_vars:
        if f'{var_name}: {var_value}' not in content:
            content = re.sub(r'(env:\s*\n)', rf'\1  {var_name}: {var_value}\n', content)
    
    return content

def fix_missing_strategy(content):
    """Add missing strategy sections for matrix jobs"""
    # Pattern to find matrix-like job definitions without strategy
    pattern = r'(\s+[a-zA-Z0-9_-]+:\s*\n)((?:[^\n]*\n)*?)(\s+[a-zA-Z0-9_-]+:\s*\[[^\]]+\])'
    
    def replace_matrix(match):
        job_section = match.group(0)
        if 'strategy:' not in job_section:
            # Add strategy section
            strategy_section = '''    strategy:
      matrix:
        type: [basic, intermediate, advanced]
'''
            job_section = job_section.rstrip() + '\n' + strategy_section
        return job_section
    
    content = re.sub(pattern, replace_matrix, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_malformed_outputs(content):
    """Fix malformed outputs sections"""
    # Fix outputs without proper structure
    pattern = r'(\s+outputs:\s*\n)((?:[^\n]*\n)*?)(?=\s+[a-zA-Z0-9_-]+:|$)'
    
    def replace_outputs(match):
        outputs_section = match.group(0)
        # Fix malformed output lines
        outputs_section = re.sub(r'(\s+)([a-zA-Z0-9_-]+):\s*([^\n]+)', r'\1\2: \3', outputs_section)
        return outputs_section
    
    content = re.sub(pattern, replace_outputs, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_missing_job_names(content):
    """Add missing job names"""
    # Pattern to find jobs without names
    pattern = r'(\s+[a-zA-Z0-9_-]+:\s*\n)((?:[^\n]*\n)*?)(?=\s+[a-zA-Z0-9_-]+:|$)'
    
    def replace_job(match):
        job_section = match.group(0)
        if 'name:' not in job_section:
            # Extract job identifier
            job_id_match = re.search(r'(\s+[a-zA-Z0-9_-]+):\s*\n', job_section)
            if job_id_match:
                job_id = job_id_match.group(1).strip()
                # Add name after job identifier
                job_section = re.sub(
                    rf'(\s+{re.escape(job_id)}:\s*\n)',
                    rf'\1    name: {job_id.title().replace("_", " ")}\n',
                    job_section
                )
        return job_section
    
    content = re.sub(pattern, replace_job, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_matrix_definitions(content):
    """Fix malformed matrix definitions"""
    # Fix matrix arrays without proper structure
    content = re.sub(r'(\s+)([a-zA-Z0-9_-]+):\s*\[([^\]]+)\]\s*\n(\s+)([a-zA-Z0-9_-]+):', 
                    r'\1\2: [\3]\n\4\5:', content)
    
    return content

def fix_missing_checkout(content):
    """Add missing checkout steps"""
    # Pattern to find jobs without checkout
    pattern = r'(\s+steps:\s*\n)((?:[^\n]*\n)*?)(?=\s+[a-zA-Z0-9_-]+:|$)'
    
    def replace_steps(match):
        steps_section = match.group(0)
        if 'actions/checkout' not in steps_section:
            # Add checkout step at the beginning
            checkout_step = '''      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

'''
            steps_section = re.sub(r'(\s+steps:\s*\n)', r'\1' + checkout_step, steps_section)
        return steps_section
    
    content = re.sub(pattern, replace_steps, content, flags=re.MULTILINE | re.DOTALL)
    return content

def fix_malformed_run_commands(content):
    """Fix malformed run commands"""
    # Fix run commands without proper structure
    content = re.sub(r'(\s+run:\s*)([^\n]+)', r'\1|\n          \2', content)
    
    # Fix missing pipe characters
    content = re.sub(r'(\s+run:\s*\n)(\s+)([^\n]+)', r'\1\2|\n\2          \3', content)
    
    return content

def validate_yaml(file_path):
    """Validate YAML syntax"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            yaml.safe_load(f)
        return True
    except yaml.YAMLError as e:
        print(f"❌ YAML validation failed for {file_path}: {e}")
        return False

def main():
    """Main function to fix all workflow files"""
    workflows_dir = Path('.github/workflows')
    
    if not workflows_dir.exists():
        print("❌ .github/workflows directory not found")
        return
    
    # Get all YAML files
    workflow_files = list(workflows_dir.glob('*.yml'))
    
    if not workflow_files:
        print("❌ No workflow files found")
        return
    
    print(f"🔍 Found {len(workflow_files)} workflow files")
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for workflow_file in workflow_files:
        if fix_workflow_file(workflow_file):
            fixed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"Total workflows: {total_count}")
    print(f"Fixed workflows: {fixed_count}")
    print(f"Unchanged workflows: {total_count - fixed_count}")
    
    # Validate all workflows
    print(f"\n🔍 Validating fixed workflows...")
    valid_count = 0
    for workflow_file in workflow_files:
        if validate_yaml(workflow_file):
            valid_count += 1
    
    print(f"Valid workflows: {valid_count}/{total_count}")
    
    if valid_count == total_count:
        print("🎉 All workflows are now valid!")
    else:
        print("⚠️ Some workflows still have issues. Manual review may be needed.")

if __name__ == "__main__":
    main()