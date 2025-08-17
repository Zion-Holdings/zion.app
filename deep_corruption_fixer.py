#!/usr/bin/env python3
"""
Deep Corruption Fixer
Addresses the systematic corruption where runs-on lines are misplaced in the on section
"""

import os
import sys
from pathlib import Path
import re
import yaml

def fix_deep_corruption(file_path):
    """Fix the deep structural corruption in workflow files"""
    print(f"🔧 Deep fixing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    # Check if this file has the specific corruption pattern
    if 'runs-on: ubuntu-latest' not in content:
        print(f"   No corruption pattern detected")
        return False
    
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Look for the corruption pattern: runs-on in the wrong place
        if stripped == 'runs-on: ubuntu-latest':
            # This line is misplaced, skip it
            print(f"   Found misplaced runs-on line, removing")
            i += 1
            continue
        
        # Look for job definitions that are missing structure
        if stripped.startswith('- ') and not stripped.startswith('- name:'):
            # This is a job definition
            fixed_lines.append(line)
            i += 1
            
            # Add the missing runs-on and steps
            fixed_lines.append('    runs-on: ubuntu-latest')
            fixed_lines.append('    steps:')
            
            # Process all properties until we hit another job or section
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
                
                # Fix step properties - add proper indentation
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
                
                fixed_lines.append(next_line)
                i += 1
        else:
            fixed_lines.append(line)
            i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Apply additional cleanup
    content = cleanup_content(content)
    
    # Validate the fixed content
    try:
        yaml.safe_load(content)
        print(f"✅ Deep fix successful")
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"❌ Deep fix failed: {e}")
        return False

def cleanup_content(content):
    """Apply additional cleanup fixes"""
    # Remove any remaining malformed lines
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        stripped = line.strip()
        
        # Skip completely malformed lines
        if (stripped.startswith('- uses:') or 
            stripped.startswith('- run:') or 
            stripped.startswith('- with:') or
            stripped.startswith('- runs-on:') or
            stripped.startswith('- timeout-minutes:') or
            stripped.startswith('- needs:') or
            stripped.startswith('- if:') or
            stripped.startswith('- env:') or
            stripped.startswith('- strategy:') or
            stripped.startswith('- matrix:') or
            stripped.startswith('- fail-fast:') or
            stripped.startswith('- max-parallel:') or
            stripped.startswith('- steps:') or
            stripped.startswith('- outputs:') or
            stripped.startswith('- secrets:') or
            stripped.startswith('- permissions:')):
            continue
        
        # Skip stray content
        if stripped == 'contents: write' or stripped == 'permissions: write':
            continue
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def main():
    print("🚀 Starting deep corruption fixer...")
    
    workflow_dir = Path('.github/workflows')
    workflow_files = list(workflow_dir.glob('*.yml'))
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    
    # Fix corrupted files
    fixed_count = 0
    for file_path in workflow_files:
        if fix_deep_corruption(file_path):
            fixed_count += 1
    
    print(f"\n🎉 Deep fix complete!")
    print(f"🔧 Files fixed: {fixed_count}")
    
    # Final validation
    valid_count = 0
    corrupted_count = 0
    
    for file_path in workflow_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                yaml.safe_load(f)
            valid_count += 1
        except Exception as e:
            corrupted_count += 1
    
    print(f"\n📊 Final status: {valid_count} valid, {corrupted_count} corrupted")
    
    return valid_count, corrupted_count, fixed_count

if __name__ == '__main__':
    main()
