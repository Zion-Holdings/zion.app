#!/usr/bin/env python3
"""
Fix all GitHub Actions workflows by correcting YAML syntax issues
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
        
        # Fix missing document start marker
        if not content.startswith('---'):
            content = '---\n' + content
        
        # Fix workflow names that are just "Workflow"
        filename = os.path.basename(file_path).replace('.yml', '')
        content = re.sub(
            r'^name: Workflow$',
            f'name: {filename}',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed echo statements with newlines and quotes
        content = re.sub(
            r"run: 'echo \"Workflow Workflow completed successfully\"\n\s*'",
            'run: echo "Workflow completed successfully"',
            content,
            flags=re.MULTILINE
        )
        
        # Fix other malformed echo statements
        content = re.sub(
            r"run: 'echo \"Workflow completed successfully\"\n\s*'",
            'run: echo "Workflow completed successfully"',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed echo statements with just quotes
        content = re.sub(
            r'run: echo "Workflow Workflow completed successfully"',
            'run: echo "Workflow completed successfully"',
            content
        )
        
        # Fix cron schedules that are too frequent (every 5-30 minutes)
        # Change */5 to */60 (every hour)
        content = re.sub(
            r"cron: '\*/5 \* \* \* \*'",
            "cron: '0 * * * *'",
            content
        )
        
        # Change */10 to */120 (every 2 hours)
        content = re.sub(
            r"cron: '\*/10 \* \* \* \*'",
            "cron: '0 */2 * * *'",
            content
        )
        
        # Change */15 to */120 (every 2 hours)
        content = re.sub(
            r"cron: '\*/15 \* \* \* \*'",
            "cron: '0 */2 * * *'",
            content
        )
        
        # Change */30 to */120 (every 2 hours)
        content = re.sub(
            r"cron: '\*/30 \* \* \* \*'",
            "cron: '0 */2 * * *'",
            content
        )
        
        # If content was changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all workflow files"""
    print("🔧 Fixing all GitHub Actions workflows...")
    
    # Find all workflow files
    workflow_files = glob.glob('.github/workflows/*.yml')
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for file_path in workflow_files:
        print(f"Processing: {file_path}")
        if fix_workflow_file(file_path):
            fixed_count += 1
            print(f"  ✅ Fixed: {file_path}")
        else:
            print(f"  ℹ️  No changes needed: {file_path}")
    
    print(f"\n🎉 Completed! Fixed {fixed_count} out of {total_count} workflows.")

if __name__ == "__main__":
    main()