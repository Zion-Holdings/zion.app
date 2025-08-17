#!/usr/bin/env python3
"""
Fix complex YAML syntax errors in workflow files
"""

import os
import sys
from pathlib import Path

def fix_complex_yaml_file(file_path):
    """Fix complex YAML syntax errors in a file"""
    print(f"🔧 Fixing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    fixes_applied = []
    
    # Fix 1: Fix env variables with missing closing quotes
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this line starts with a quote and contains ${{ but doesn't end with quote
        if (line.strip().startswith('"') and 
            '${{' in line and 
            not line.strip().endswith('"') and
            i + 1 < len(lines)):
            
            next_line = lines[i + 1].strip()
            
            # If next line starts with quote, merge them
            if next_line.startswith('"'):
                if next_line.endswith('"'):
                    # Merge the lines properly
                    merged_line = line.rstrip() + ' ' + next_line
                    fixed_lines.append(merged_line)
                    i += 1  # Skip next line
                    fixes_applied.append("Fixed merged env variable lines")
                else:
                    # Add closing quote to current line
                    fixed_lines.append(line.rstrip() + '"')
                    fixes_applied.append("Fixed env variable missing closing quote")
            else:
                # Add closing quote to current line
                fixed_lines.append(line.rstrip() + '"')
                fixes_applied.append("Fixed env variable missing closing quote")
        else:
            fixed_lines.append(line)
        
        i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Fix 2: Fix stray quotes in id fields
    if 'id: "' in content:
        content = content.replace('id: "', 'id: ')
        fixes_applied.append("Fixed id field with stray quote")
    
    # Fix 3: Fix stray quotes in run commands
    if 'run: "|' in content:
        content = content.replace('run: "|', 'run: |')
        fixes_applied.append("Fixed run command with stray quote")
    
    # Fix 4: Fix stray quotes in arithmetic expressions
    if '))"' in content:
        content = content.replace('))"', '))')
        fixes_applied.append("Fixed arithmetic expression with stray quote")
    
    # Fix 5: Fix stray quotes at end of files
    if content.strip().endswith('"'):
        content = content.rstrip('"')
        fixes_applied.append("Fixed stray quote at end of file")
    
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
    print("🔧 Running complex YAML fixer...")
    
    # Focus on the problematic workflow files
    workflow_dir = Path('.github/workflows')
    workflow_files = list(workflow_dir.glob('*.yml'))
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    
    # Fix mode
    fixed_count = 0
    for file_path in workflow_files:
        if fix_complex_yaml_file(file_path):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
