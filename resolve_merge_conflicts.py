#!/usr/bin/env python3
"""
Automatically resolve merge conflicts by accepting our fixed workflow files
"""

import os
import glob
import subprocess

def resolve_workflow_conflicts():
    """Resolve all workflow merge conflicts by accepting our fixed versions"""
    
    # Get all conflicted workflow files
    workflow_dir = ".github/workflows"
    conflicted_files = []
    
    # Check git status for conflicted files
    result = subprocess.run(['git', 'status', '--porcelain'], 
                          capture_output=True, text=True)
    
    for line in result.stdout.split('\n'):
        if line.startswith('UU') and '.github/workflows/' in line:
            file_path = line[3:]  # Remove 'UU ' prefix
            conflicted_files.append(file_path)
    
    print(f"Found {len(conflicted_files)} conflicted workflow files")
    
    # Resolve each conflict by accepting our version
    for file_path in conflicted_files:
        if os.path.exists(file_path):
            print(f"Resolving conflict in {file_path}")
            
            # Accept our version (--ours) for all workflow files
            subprocess.run(['git', 'checkout', '--ours', file_path])
            
            # Add the resolved file
            subprocess.run(['git', 'add', file_path])
            
            print(f"✅ Resolved {file_path}")
    
    # Also add our fix scripts and documentation
    additional_files = [
        'fix_all_workflows.py',
        'fix_corrupted_workflows.py', 
        'WORKFLOW_FIX_REPORT.md'
    ]
    
    for file_path in additional_files:
        if os.path.exists(file_path):
            subprocess.run(['git', 'add', file_path])
            print(f"✅ Added {file_path}")
    
    print("\n🎉 All merge conflicts resolved!")
    print("Ready to commit the merge.")

if __name__ == "__main__":
    resolve_workflow_conflicts()