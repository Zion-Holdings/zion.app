#!/usr/bin/env python3
"""
Comprehensive Corruption Fixer
Handles the exact corruption pattern where on section is malformed
"""

import os
import sys
from pathlib import Path
import re
import yaml

def fix_comprehensive_corruption(file_path):
    """Fix the comprehensive corruption in workflow files"""
    print(f"🔧 Comprehensive fixing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    # Check if this file has the corruption pattern
    if 'runs-on: ubuntu-latest' not in content:
        print(f"   No corruption pattern detected")
        return False
    
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Handle the on section
        if stripped == 'on:':
            fixed_lines.append(line)
            i += 1
            
            # Process the on section until we hit the next section
            while i < len(lines):
                next_line = lines[i]
                next_stripped = next_line.strip()
                
                # Stop if we hit the next section
                if (next_stripped.startswith('concurrency:') or
                    next_stripped.startswith('jobs:') or
                    next_stripped.startswith('permissions:') or
                    next_stripped.startswith('env:')):
                    break
                
                # Skip malformed lines in the on section
                if (next_stripped == 'runs-on: ubuntu-latest' or
                    next_stripped == 'contents: write' or
                    next_stripped == 'actions: read' or
                    next_stripped == 'permissions: write'):
                    print(f"   Removing malformed line from on section: {next_stripped}")
                    i += 1
                    continue
                
                # Keep valid on section content
                fixed_lines.append(next_line)
                i += 1
        
        # Handle the concurrency section
        elif stripped == 'concurrency:':
            fixed_lines.append(line)
            i += 1
            
            # Process the concurrency section
            while i < len(lines):
                next_line = lines[i]
                next_stripped = next_line.strip()
                
                # Stop if we hit the next section
                if (next_stripped.startswith('jobs:') or
                    next_stripped.startswith('permissions:') or
                    next_stripped.startswith('env:')):
                    break
                
                # Skip malformed lines in the concurrency section
                if (next_stripped == 'contents: write' or
                    next_stripped == 'actions: read' or
                    next_stripped == 'permissions: write'):
                    print(f"   Removing malformed line from concurrency section: {next_stripped}")
                    i += 1
                    continue
                
                # Keep valid concurrency content
                fixed_lines.append(next_line)
                i += 1
        
        # Handle the jobs section
        elif stripped == 'jobs:':
            fixed_lines.append(line)
            i += 1
            
            # Process the jobs section
            while i < len(lines):
                next_line = lines[i]
                next_stripped = next_line.strip()
                
                # Stop if we hit the end of file or next major section
                if (next_stripped.startswith('permissions:') or
                    next_stripped.startswith('env:') or
                    next_stripped == ''):
                    break
                
                # Handle job definitions
                if next_stripped.startswith('- ') and not next_stripped.startswith('- name:'):
                    # This is a job definition
                    fixed_lines.append(next_line)
                    i += 1
                    
                    # Add missing runs-on and steps
                    fixed_lines.append('    runs-on: ubuntu-latest')
                    fixed_lines.append('    steps:')
                    
                    # Process job properties until we hit another job or section
                    while i < len(lines):
                        job_line = lines[i]
                        job_stripped = job_line.strip()
                        
                        # Stop if we hit another job or section
                        if (job_stripped.startswith('- ') or
                            job_stripped.startswith('jobs:') or
                            job_stripped.startswith('on:') or
                            job_stripped.startswith('permissions:') or
                            job_stripped.startswith('concurrency:') or
                            job_stripped.startswith('env:')):
                            break
                        
                        # Handle step names
                        if job_stripped.startswith('- name:'):
                            fixed_lines.append('      ' + job_stripped)
                            i += 1
                            
                            # Process step properties
                            while i < len(lines):
                                step_line = lines[i]
                                step_stripped = step_line.strip()
                                
                                # Stop if we hit another step or job
                                if (step_stripped.startswith('- name:') or
                                    step_stripped.startswith('- ') or
                                    step_stripped.startswith('jobs:') or
                                    step_stripped.startswith('on:') or
                                    step_stripped.startswith('permissions:') or
                                    step_stripped.startswith('concurrency:') or
                                    step_stripped.startswith('env:')):
                                    break
                                
                                # Fix step properties - add proper indentation
                                if (step_stripped.startswith('uses:') or 
                                    step_stripped.startswith('run:') or 
                                    step_stripped.startswith('with:') or
                                    step_stripped.startswith('id:') or
                                    step_stripped.startswith('env:') or
                                    step_stripped.startswith('working-directory:') or
                                    step_stripped.startswith('shell:') or
                                    step_stripped.startswith('timeout-minutes:') or
                                    step_stripped.startswith('continue-on-error:')):
                                    
                                    # Ensure proper indentation (8 spaces for step properties)
                                    if not step_line.startswith('        '):
                                        step_line = '        ' + step_stripped
                                
                                fixed_lines.append(step_line)
                                i += 1
                        else:
                            # Skip malformed job properties
                            if (job_stripped.startswith('- uses:') or 
                                job_stripped.startswith('- run:') or 
                                job_stripped.startswith('- with:') or
                                job_stripped.startswith('- runs-on:') or
                                job_stripped.startswith('- timeout-minutes:') or
                                job_stripped.startswith('- needs:') or
                                job_stripped.startswith('- if:') or
                                job_stripped.startswith('- env:') or
                                job_stripped.startswith('- strategy:') or
                                job_stripped.startswith('- matrix:') or
                                job_stripped.startswith('- fail-fast:') or
                                job_stripped.startswith('- max-parallel:') or
                                job_stripped.startswith('- steps:') or
                                job_stripped.startswith('- outputs:') or
                                job_stripped.startswith('- secrets:') or
                                job_stripped.startswith('- permissions:')):
                                print(f"   Removing malformed job property: {job_stripped}")
                                i += 1
                                continue
                            
                            # Keep other lines
                            fixed_lines.append(job_line)
                            i += 1
                else:
                    # Keep other lines
                    fixed_lines.append(next_line)
                    i += 1
        
        # Handle other sections
        else:
            fixed_lines.append(line)
            i += 1
    
    content = '\n'.join(fixed_lines)
    
    # Apply additional cleanup
    content = cleanup_content(content)
    
    # Validate the fixed content
    try:
        yaml.safe_load(content)
        print(f"✅ Comprehensive fix successful")
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"❌ Comprehensive fix failed: {e}")
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
        if stripped in ['contents: write', 'permissions: write', 'actions: read']:
            continue
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def main():
    print("🚀 Starting comprehensive corruption fixer...")
    
    workflow_dir = Path('.github/workflows')
    workflow_files = list(workflow_dir.glob('*.yml'))
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    
    # Fix corrupted files
    fixed_count = 0
    for file_path in workflow_files:
        if fix_comprehensive_corruption(file_path):
            fixed_count += 1
    
    print(f"\n🎉 Comprehensive fix complete!")
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
