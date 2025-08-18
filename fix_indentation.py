#!/usr/bin/env python3
"""
Fix indentation issues in GitHub Actions workflows
"""

import os
import glob
import re

def fix_indentation(file_path):
    """Fix indentation in a single workflow file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        original_lines = lines.copy()
        fixed = False
        
        # Fix indentation issues
        for i, line in enumerate(lines):
            # Fix cron schedule indentation (should be 4 spaces)
            if 'cron:' in line and line.strip().startswith('- cron:'):
                if not line.startswith('    - cron:'):
                    lines[i] = '    - cron:' + line.split('- cron:')[1]
                    fixed = True
            
            # Fix steps indentation (should be 6 spaces)
            elif line.strip().startswith('- name:') and 'steps:' in ''.join(lines[:i]):
                if not line.startswith('      - name:'):
                    lines[i] = '      - name:' + line.split('- name:')[1]
                    fixed = True
            
            # Fix other step properties indentation (should be 8 spaces)
            elif line.strip().startswith('uses:') and 'steps:' in ''.join(lines[:i]):
                if not line.startswith('        uses:'):
                    lines[i] = '        uses:' + line.split('uses:')[1]
                    fixed = True
            elif line.strip().startswith('with:') and 'steps:' in ''.join(lines[:i]):
                if not line.startswith('        with:'):
                    lines[i] = '        with:' + line.split('with:')[1]
                    fixed = True
            elif line.strip().startswith('run:') and 'steps:' in ''.join(lines[:i]):
                if not line.startswith('        run:'):
                    lines[i] = '        run:' + line.split('run:')[1]
                    fixed = True
            
            # Fix with properties indentation (should be 10 spaces)
            elif line.strip().startswith('node-version:') and 'with:' in ''.join(lines[:i]):
                if not line.startswith('          node-version:'):
                    lines[i] = '          node-version:' + line.split('node-version:')[1]
                    fixed = True
            elif line.strip().startswith('cache:') and 'with:' in ''.join(lines[:i]):
                if not line.startswith('          cache:'):
                    lines[i] = '          cache:' + line.split('cache:')[1]
                    fixed = True
            elif line.strip().startswith('fetch-depth:') and 'with:' in ''.join(lines[:i]):
                if not line.startswith('          fetch-depth:'):
                    lines[i] = '          fetch-depth:' + line.split('fetch-depth:')[1]
                    fixed = True
            
            # Remove trailing spaces
            if line.rstrip() != line:
                lines[i] = line.rstrip() + '\n'
                fixed = True
        
        # If content was changed, write it back
        if fixed:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all workflow files"""
    print("🔧 Fixing indentation in all GitHub Actions workflows...")
    
    # Find all workflow files
    workflow_files = glob.glob('.github/workflows/*.yml')
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for file_path in workflow_files:
        print(f"Processing: {file_path}")
        if fix_indentation(file_path):
            fixed_count += 1
            print(f"  ✅ Fixed: {file_path}")
        else:
            print(f"  ℹ️  No changes needed: {file_path}")
    
    print(f"\n🎉 Completed! Fixed {fixed_count} out of {total_count} workflows.")

if __name__ == "__main__":
    main()
