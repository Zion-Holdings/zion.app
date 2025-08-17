#!/usr/bin/env python3
"""
Final YAML cleanup to fix remaining structural issues
"""

import os
import sys
from pathlib import Path
import re

def fix_final_yaml_cleanup(file_path):
    """Fix final YAML cleanup issues in a file"""
    print(f"🔧 Final cleanup: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading {file_path}: {e}")
        return False
    
    original_content = content
    fixes_applied = []
    
    # Fix 1: Fix malformed environment variable definitions
    # Look for lines that have quotes but are missing proper structure
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Fix malformed env var definitions
        if (stripped.startswith('"') and 
            ('GROWTH_FACTOR:' in stripped or 
             'TARGET_COUNT:' in stripped or 
             'MAX_CONCURRENT:' in stripped) and
            not stripped.endswith('"')):
            
            # This is a malformed env var line, fix it
            if 'GROWTH_FACTOR:' in stripped:
                line = '  GROWTH_FACTOR: ${{ github.event.inputs.growth_factor || "2" }}'
            elif 'TARGET_COUNT:' in stripped:
                line = '  TARGET_COUNT: "${{ github.event.inputs.target_count || "10" }}"'
            elif 'MAX_CONCURRENT:' in stripped:
                line = '  MAX_CONCURRENT: 5'
            
            fixes_applied.append("Fixed malformed environment variable")
        
        # Fix lines that have stray quotes and malformed structure
        elif (stripped.startswith('"') and 
              ('${{' in stripped or '}}' in stripped) and
              not stripped.endswith('"')):
            
            # Remove the line if it's malformed
            fixes_applied.append("Removed malformed line")
            continue
        
        # Fix step properties that are missing proper structure
        elif (stripped.startswith('uses:') or 
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
        
        # Fix job properties that are missing proper structure
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
        
        # Fix malformed step definitions
        elif stripped.startswith('- uses:') or stripped.startswith('- run:') or stripped.startswith('- with:'):
            # This is a malformed step, remove it
            fixes_applied.append("Removed malformed step")
            continue
        
        # Fix malformed job definitions
        elif stripped.startswith('- runs-on:') or stripped.startswith('- timeout-minutes:') or stripped.startswith('- needs:'):
            # This is a malformed job property, remove it
            fixes_applied.append("Removed malformed job property")
            continue
        
        else:
            fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    # Fix 2: Fix specific malformed patterns
    # Remove any remaining malformed lines
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        stripped = line.strip()
        
        # Skip completely malformed lines
        if (stripped.startswith('"') and not stripped.endswith('"') and
            ('${{' in stripped or '}}' in stripped)):
            fixes_applied.append("Removed malformed quoted line")
            continue
        
        # Skip lines with malformed step structure
        if (stripped.startswith('- uses:') or 
            stripped.startswith('- run:') or 
            stripped.startswith('- with:') or
            stripped.startswith('- id:') or
            stripped.startswith('- env:') or
            stripped.startswith('- working-directory:') or
            stripped.startswith('- shell:') or
            stripped.startswith('- timeout-minutes:') or
            stripped.startswith('- continue-on-error:')):
            fixes_applied.append("Removed malformed step property")
            continue
        
        # Skip lines with malformed job structure
        if (stripped.startswith('- runs-on:') or
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
            stripped.startswith('- uses:') or
            stripped.startswith('- with:') or
            stripped.startswith('- secrets:') or
            stripped.startswith('- permissions:')):
            fixes_applied.append("Removed malformed job property")
            continue
        
        fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    # Fix 3: Ensure proper YAML structure
    # Add missing env section if needed
    if 'env:' not in content and ('GROWTH_FACTOR:' in content or 'TARGET_COUNT:' in content or 'MAX_CONCURRENT:' in content):
        # Find the jobs section and add env before it
        if 'jobs:' in content:
            content = content.replace('jobs:', 'env:\n  GROWTH_FACTOR: ${{ github.event.inputs.growth_factor || "2" }}\n  TARGET_COUNT: "${{ github.event.inputs.target_count || "10" }}"\n  MAX_CONCURRENT: 5\n\njobs:')
            fixes_applied.append("Added missing env section")
    
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
    print("🔧 Running final YAML cleanup...")
    
    # Focus on the problematic workflow files
    workflow_dir = Path('.github/workflows')
    workflow_files = list(workflow_dir.glob('*.yml'))
    
    print(f"📁 Found {len(workflow_files)} workflow files")
    
    # Fix mode
    fixed_count = 0
    for file_path in workflow_files:
        if fix_final_yaml_cleanup(file_path):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
