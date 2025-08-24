#!/usr/bin/env python3
"""
GitHub Actions Workflow Auto-Fixer
Automatically fixes common YAML syntax issues in workflow files
"""

import os
import re
import yaml
import glob
from pathlib import Path

def fix_workflow_file(file_path):
    """Fix common YAML syntax issues in a workflow file"""
    print(f"🔧 Fixing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    fixed = False
    
    # Fix 1: Add missing runs-on if not present
    if 'runs-on:' not in content:
        # Find the jobs section and add runs-on
        jobs_match = re.search(r'^(\s*)jobs:\s*$', content, re.MULTILINE)
        if jobs_match:
            indent = jobs_match.group(1)
            # Find the first job
            job_match = re.search(rf'{indent}(\w+):\s*$', content, re.MULTILINE)
            if job_match:
                job_name = job_match.group(1)
                # Add runs-on after the job name
                job_pattern = rf'{indent}{job_name}:\s*$'
                replacement = rf'{indent}{job_name}:\n{indent}  runs-on: ubuntu-latest'
                content = re.sub(job_pattern, replacement, content, flags=re.MULTILINE)
                fixed = True
                print(f"  ✅ Added missing runs-on for job '{job_name}'")
    
    # Fix 2: Add missing steps section if not present
    if 'steps:' not in content:
        # Find jobs and add steps
        jobs_match = re.search(r'^(\s*)jobs:\s*$', content, re.MULTILINE)
        if jobs_match:
            indent = jobs_match.group(1)
            # Find the first job
            job_match = re.search(rf'{indent}(\w+):\s*$', content, re.MULTILINE)
            if job_match:
                job_name = job_match.group(1)
                # Add steps after runs-on
                runs_on_pattern = rf'{indent}{job_name}:\s*\n(\s+)runs-on:\s*ubuntu-latest\s*$'
                replacement = rf'{indent}{job_name}:\n\1runs-on: ubuntu-latest\n\1steps:'
                content = re.sub(runs_on_pattern, replacement, content, flags=re.MULTILINE)
                fixed = True
                print(f"  ✅ Added missing steps section for job '{job_name}'")
    
    # Fix 3: Fix permissions section placement
    if 'permissions:' in content and 'concurrency:' in content:
        # Check if permissions is in the wrong place
        permissions_before_concurrency = re.search(r'permissions:.*?concurrency:', content, re.DOTALL)
        if permissions_before_concurrency:
            # Move permissions to the right place (after on: section)
            on_match = re.search(r'^(\s*)on:\s*$', content, re.MULTILINE)
            if on_match:
                indent = on_match.group(1)
                # Find the end of the on section
                on_end = content.find('\n\n', content.find('on:'))
                if on_end > 0:
                    # Extract permissions content
                    permissions_match = re.search(r'permissions:\s*\n((?:\s+[^\n]+\n?)+)', content)
                    if permissions_match:
                        permissions_content = permissions_match.group(0)
                        # Remove permissions from current location
                        content = content.replace(permissions_content, '')
                        # Add permissions after on section
                        content = content[:on_end] + f'\n{indent}permissions:\n{indent}  contents: write\n{indent}  actions: read\n' + content[on_end:]
                        fixed = True
                        print(f"  ✅ Fixed permissions section placement")
    
    # Fix 4: Add missing with: sections for actions
    # Find steps that use actions but are missing with:
    step_pattern = r'^(\s+)-\s+name:\s*([^\n]+)\s*\n(\s+)uses:\s*([^\n]+)\s*$'
    for match in re.finditer(step_pattern, content, re.MULTILINE):
        step_indent = match.group(1)
        step_name = match.group(2).strip()
        action_indent = match.group(3)
        action = match.group(4).strip()
        
        # Check if this action needs with: parameters
        if 'actions/checkout' in action and 'fetch-depth:' not in content:
            # Add fetch-depth parameter
            replacement = f'{step_indent}- name: {step_name}\n{action_indent}uses: {action}\n{action_indent}with:\n{action_indent}  fetch-depth: 0'
            content = re.sub(re.escape(match.group(0)), replacement, content)
            fixed = True
            print(f"  ✅ Added with: section for {step_name}")
        
        elif 'actions/setup-node' in action and 'node-version:' not in content:
            # Add node-version parameter
            replacement = f'{step_indent}- name: {step_name}\n{action_indent}uses: {action}\n{action_indent}with:\n{action_indent}  node-version: \'20\'\n{action_indent}  cache: \'npm\''
            content = re.sub(re.escape(match.group(0)), replacement, content)
            fixed = True
            print(f"  ✅ Added with: section for {step_name}")
    
    # Fix 5: Add missing basic steps if workflow is incomplete
    if 'steps:' in content and 'npm ci' not in content and 'npm install' not in content:
        # Add basic setup steps
        steps_match = re.search(r'^(\s+)steps:\s*$', content, re.MULTILINE)
        if steps_match:
            indent = steps_match.group(1)
            # Add checkout step if not present
            if 'actions/checkout' not in content:
                checkout_step = f'{indent}- name: Checkout repository\n{indent}  uses: actions/checkout@v4\n{indent}  with:\n{indent}    fetch-depth: 0\n\n'
                content = content.replace(f'{indent}steps:', f'{indent}steps:\n{checkout_step}{indent}')
                fixed = True
                print(f"  ✅ Added missing checkout step")
            
            # Add Node.js setup if not present
            if 'actions/setup-node' not in content:
                node_step = f'{indent}- name: Setup Node.js\n{indent}  uses: actions/setup-node@v4\n{indent}  with:\n{indent}    node-version: \'20\'\n{indent}    cache: \'npm\'\n\n'
                content = content.replace(f'{indent}steps:', f'{indent}steps:\n{indent}')
                # Insert after checkout step
                checkout_pos = content.find('Checkout repository')
                if checkout_pos > 0:
                    insert_pos = content.find('\n\n', checkout_pos) + 2
                    content = content[:insert_pos] + node_step + content[insert_pos:]
                fixed = True
                print(f"  ✅ Added missing Node.js setup step")
    
    # Fix 6: Add missing permissions if not present
    if 'permissions:' not in content:
        # Add basic permissions after on section
        on_match = re.search(r'^(\s*)on:\s*$', content, re.MULTILINE)
        if on_match:
            indent = on_match.group(1)
            on_end = content.find('\n\n', content.find('on:'))
            if on_end > 0:
                permissions_section = f'\n{indent}permissions:\n{indent}  contents: write\n{indent}  actions: read\n'
                content = content[:on_end] + permissions_section + content[on_end:]
                fixed = True
                print(f"  ✅ Added missing permissions section")
    
    # Fix 7: Add missing concurrency if not present
    if 'concurrency:' not in content:
        # Add basic concurrency after permissions
        permissions_match = re.search(r'^(\s*)permissions:\s*$', content, re.MULTILINE)
        if permissions_match:
            indent = permissions_match.group(1)
            permissions_end = content.find('\n\n', content.find('permissions:'))
            if permissions_end > 0:
                concurrency_section = f'\n{indent}concurrency:\n{indent}  group: "github.workflow-${{{{ github.ref }}}}"\n{indent}  cancel-in-progress: true\n'
                content = content[:permissions_end] + concurrency_section + content[permissions_end:]
                fixed = True
                print(f"  ✅ Added missing concurrency section")
    
    # Fix 8: Add missing complete workflow steps
    if 'steps:' in content and 'npm ci' not in content:
        # Add basic workflow completion
        steps_end = content.find('\n\n', content.find('steps:'))
        if steps_end > 0:
            basic_steps = f'\n{indent}- name: Install dependencies\n{indent}  run: npm ci --no-audit --no-fund\n\n{indent}- name: Complete workflow\n{indent}  run: |\n{indent}    echo "Workflow completed successfully"\n'
            content = content[:steps_end] + basic_steps + content[steps_end:]
            fixed = True
            print(f"  ✅ Added missing basic workflow steps")
    
    # Write the fixed content back
    if fixed:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  💾 Saved fixed version of {file_path}")
            return True
        except Exception as e:
            print(f"❌ Error writing {file_path}: {e}")
            return False
    else:
        print(f"  ✅ No fixes needed for {file_path}")
        return True

def main():
    """Main function to fix all workflow files"""
    print("🚀 GitHub Actions Workflow Auto-Fixer")
    print("=====================================")
    
    # Find all workflow files
    workflow_dir = Path('.github/workflows')
    if not workflow_dir.exists():
        print("❌ .github/workflows directory not found")
        return
    
    workflow_files = list(workflow_dir.glob('*.yml')) + list(workflow_dir.glob('*.yaml'))
    
    if not workflow_files:
        print("❌ No workflow files found")
        return
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    print()
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for workflow_file in workflow_files:
        if fix_workflow_file(workflow_file):
            fixed_count += 1
        print()
    
    print("=====================================")
    print(f"📊 Fix Summary:")
    print(f"Total files: {total_count}")
    print(f"Successfully processed: {fixed_count}")
    print(f"Success rate: {(fixed_count * 100) // total_count}%")
    
    if fixed_count == total_count:
        print("🎉 All workflows processed successfully!")
    else:
        print(f"⚠️  {total_count - fixed_count} workflows may still have issues")

if __name__ == "__main__":
    main()