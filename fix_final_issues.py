#!/usr/bin/env python3
"""
Fix final indentation issues in GitHub Actions workflows
"""

import os
import glob
import re

def fix_final_issues(file_path):
    """Fix final issues in a single workflow file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix cron schedule indentation (should be 4 spaces)
        content = re.sub(
            r'^(\s*)-\s*cron:',
            r'    - cron:',
            content,
            flags=re.MULTILINE
        )
        
        # Fix steps indentation (should be 6 spaces)
        content = re.sub(
            r'^(\s*)-\s*name:',
            r'      - name:',
            content,
            flags=re.MULTILINE
        )
        
        # Fix step properties indentation (should be 8 spaces)
        content = re.sub(
            r'^(\s{2,6})uses:',
            r'        uses:',
            content,
            flags=re.MULTILINE
        )
        content = re.sub(
            r'^(\s{2,6})with:',
            r'        with:',
            content,
            flags=re.MULTILINE
        )
        content = re.sub(
            r'^(\s{2,6})run:',
            r'        run:',
            content,
            flags=re.MULTILINE
        )
        
        # Fix with properties indentation (should be 10 spaces)
        content = re.sub(
            r'^(\s{2,8})node-version:',
            r'          node-version:',
            content,
            flags=re.MULTILINE
        )
        content = re.sub(
            r'^(\s{2,8})cache:',
            r'          cache:',
            content,
            flags=re.MULTILINE
        )
        content = re.sub(
            r'^(\s{2,8})fetch-depth:',
            r'          fetch-depth:',
            content,
            flags=re.MULTILINE
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
    print("🔧 Fixing final issues in all GitHub Actions workflows...")
    
    # Find all workflow files
    workflow_files = glob.glob('.github/workflows/*.yml')
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for file_path in workflow_files:
        print(f"Processing: {file_path}")
        if fix_final_issues(file_path):
            fixed_count += 1
            print(f"  ✅ Fixed: {file_path}")
        else:
            print(f"  ℹ️  No changes needed: {file_path}")
    
    print(f"\n🎉 Completed! Fixed {fixed_count} out of {total_count} workflows.")

if __name__ == "__main__":
    main()
