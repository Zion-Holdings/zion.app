#!/usr/bin/env python3
"""
Fix all remaining YAML issues in GitHub Actions workflows
"""
import os
import glob
import re

def fix_remaining_issues(file_path):
    """Fix remaining issues in a single workflow file"""
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
        
        # Fix workflow_dispatch: {} to workflow_dispatch: null
        content = re.sub(
            r'workflow_dispatch:\s*\{\}',
            'workflow_dispatch: null',
            content
        )
        
        # Fix missing newlines at end of files
        if not content.endswith('\n'):
            content += '\n'
        
        # Fix line length issues by breaking long lines
        lines = content.split('\n')
        fixed_lines = []
        for line in lines:
            if len(line) > 80 and ':' in line and not line.strip().startswith('#'):
                # Try to break long lines at logical points
                if 'run: |' in line:
                    fixed_lines.append(line)
                elif 'run:' in line and len(line) > 80:
                    # Break run commands
                    indent = len(line) - len(line.lstrip())
                    prefix = line[:line.find('run:') + 4]
                    rest = line[line.find('run:') + 4:].strip()
                    if rest:
                        fixed_lines.append(prefix)
                        fixed_lines.append(' ' * (indent + 8) + rest)
                    else:
                        fixed_lines.append(line)
                elif 'with:' in line and len(line) > 80:
                    # Break with sections
                    indent = len(line) - len(line.lstrip())
                    prefix = line[:line.find('with:') + 5]
                    rest = line[line.find('with:') + 5:].strip()
                    if rest:
                        fixed_lines.append(prefix)
                        fixed_lines.append(' ' * (indent + 8) + rest)
                    else:
                        fixed_lines.append(line)
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
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
    print("🔧 Fixing remaining issues in all GitHub Actions workflows...")
    
    # Find all workflow files
    workflow_files = glob.glob('.github/workflows/*.yml')
    
    fixed_count = 0
    total_count = len(workflow_files)
    
    for file_path in workflow_files:
        print(f"Processing: {file_path}")
        if fix_remaining_issues(file_path):
            fixed_count += 1
            print(f"  ✅ Fixed: {file_path}")
        else:
            print(f"  ℹ️  No changes needed: {file_path}")
    
    print(f"\n🎉 Completed! Fixed {fixed_count} out of {total_count} workflows.")

if __name__ == "__main__":
    main()
