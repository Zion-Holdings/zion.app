#!/usr/bin/env python3
"""
Fix broken GitHub Actions workflows by replacing malformed echo statements
"""

import os
import glob
import re

def fix_workflow_file(file_path):
    """Fix a single workflow file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed echo statements
        content = re.sub(
            r"run: 'echo \"Workflow Workflow completed successfully\"\n\s*'",
            "run: echo \"Workflow completed successfully\"",
            content,
            flags=re.MULTILINE
        )
        
        # Fix workflow names that are just "Workflow"
        filename = os.path.basename(file_path).replace('.yml', '')
        content = re.sub(
            r"^name: Workflow$",
            f"name: {filename}",
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed cron schedules
        content = re.sub(
            r"cron: '\*/10 \* \* \* \*'",
            "cron: '0 2 * * *'",
            content
        )
        
        # Fix excessive permissions
        content = re.sub(r"contents: write", "contents: read", content)
        content = re.sub(r"pull-requests: write", "", content)
        
        # Fix concurrency group names
        content = re.sub(
            r"group: workflow-\$\{\{ github\.ref \}\}",
            f"group: {filename}-\${{{{ github.ref }}}}",
            content
        )
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            print(f"✅ Already valid: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all workflow files"""
    print("🔧 Fixing broken GitHub Actions workflows...")
    
    # Find all workflow files
    workflow_files = glob.glob(".github/workflows/*.yml")
    
    # Skip backup directory
    workflow_files = [f for f in workflow_files if "broken_workflows_backup" not in f]
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for workflow_file in workflow_files:
        if fix_workflow_file(workflow_file):
            fixed_count += 1
    
    print(f"\n🎉 Workflow fixes completed!")
    print(f"📊 Fixed: {fixed_count}/{total_count} workflows")

if __name__ == "__main__":
    main()
