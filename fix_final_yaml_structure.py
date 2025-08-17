#!/usr/bin/env python3
"""
Fix final YAML structure issues in workflow files
"""

import os
import sys
from pathlib import Path
import re

def fix_final_yaml_structure(file_path):
    """Fix final YAML structure issues in a file"""
    print(f"🔧 Fixing final structure: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    fixes_applied = []
    
    # Fix 1: Fix step structure - ensure proper indentation for step properties
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Look for step names
        if stripped.startswith('- name:'):
            fixed_lines.append(line)
            i += 1
            
            # Process all properties under this step until we hit another step or job
            while i < len(lines):
                next_line = lines[i]
                next_stripped = next_line.strip()
                
                # Stop if we hit another step or job
                if (next_stripped.startswith('- name:') or 
                    next_stripped.startswith('- ') or
                    next_stripped.startswith('jobs:') or
                    next_stripped.startswith('on:')):
                    break
                
                # Fix step properties
                if (next_stripped.startswith('uses:') or 
                    next_stripped.startswith('run:') or 
                    next_stripped.startswith('with:') or
                    next_stripped.startswith('id:') or
                    next_stripped.startswith('env:') or
                    next_stripped.startswith('working-directory:') or
                    next_stripped.startswith('shell:') or
                    next_stripped.startswith('timeout-minutes:') or
                    next_stripped.startswith('continue-on-error:')):
                    
                    # Ensure proper indentation (8 spaces for step properties)
                    if not next_line.startswith('        '):
                        next_line = '        ' + next_stripped
                        fixes_applied.append("Fixed step property indentation")
                
                fixed_lines.append(next_line)
                i += 1
        else:
            fixed_lines.append(line)
            i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Fix 2: Fix job structure - ensure proper indentation for job properties
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Look for job definitions
        if stripped.startswith('- ') and not stripped.startswith('- name:'):
            fixed_lines.append(line)
            i += 1
            
            # Process all properties under this job until we hit another job or section
            while i < len(lines):
                next_line = lines[i]
                next_stripped = next_line.strip()
                
                # Stop if we hit another job or section
                if (next_stripped.startswith('- ') or
                    next_stripped.startswith('jobs:') or
                    next_stripped.startswith('on:') or
                    next_stripped.startswith('permissions:') or
                    next_stripped.startswith('concurrency:')):
                    break
                
                # Fix job properties
                if (next_stripped.startswith('runs-on:') or
                    next_stripped.startswith('timeout-minutes:') or
                    next_stripped.startswith('needs:') or
                    next_stripped.startswith('if:') or
                    next_stripped.startswith('env:') or
                    next_stripped.startswith('strategy:') or
                    next_stripped.startswith('matrix:') or
                    next_stripped.startswith('fail-fast:') or
                    next_stripped.startswith('max-parallel:') or
                    next_stripped.startswith('steps:') or
                    next_stripped.startswith('outputs:') or
                    next_stripped.startswith('uses:') or
                    next_stripped.startswith('with:') or
                    next_stripped.startswith('secrets:') or
                    next_stripped.startswith('permissions:')):
                    
                    # Ensure proper indentation (2 spaces for job properties)
                    if not next_line.startswith('  '):
                        next_line = '  ' + next_stripped
                        fixes_applied.append("Fixed job property indentation")
                
                fixed_lines.append(next_line)
                i += 1
        else:
            fixed_lines.append(line)
            i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Fix 3: Fix specific malformed patterns
    # Remove any lines that have incorrect structure
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        stripped = line.strip()
        
        # Skip lines that have malformed step properties without proper indentation
        if (stripped.startswith('uses:') or 
            stripped.startswith('run:') or 
            stripped.startswith('with:') or
            stripped.startswith('id:') or
            stripped.startswith('env:') or
            stripped.startswith('working-directory:') or
            stripped.startswith('shell:') or
            stripped.startswith('timeout-minutes:') or
            stripped.startswith('continue-on-error:')):
            
            # Only keep properly indented step properties
            if line.startswith('        '):
                fixed_lines.append(line)
            else:
                fixes_applied.append("Removed malformed step property")
                continue
        
        # Skip lines that have malformed job properties without proper indentation
        elif (stripped.startswith('runs-on:') or
              stripped.startswith('timeout-minutes:') or
              stripped.startswith('needs:') or
              stripped.startswith('if:') or
              stripped.startswith('env:') or
              stripped.startswith('strategy:') or
              stripped.startswith('matrix:') or
              stripped.startswith('fail-fast:') or
              stripped.startswith('max-parallel:') or
              stripped.startswith('steps:') or
              stripped.startswith('outputs:') or
              stripped.startswith('uses:') or
              stripped.startswith('with:') or
              stripped.startswith('secrets:') or
              stripped.startswith('permissions:')):
            
            # Only keep properly indented job properties
            if line.startswith('  '):
                fixed_lines.append(line)
            else:
                fixes_applied.append("Removed malformed job property")
                continue
        else:
            fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
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
    print("🔧 Running final YAML structure fixer...")
    
    # Focus on the problematic workflow files
    workflow_dir = Path('.github/workflows')
    workflow_files = list(workflow_dir.glob('*.yml'))
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    
    # Fix mode
    fixed_count = 0
    for file_path in workflow_files:
        if fix_final_yaml_structure(file_path):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
