#!/usr/bin/env python3

import subprocess
import os
import sys
from datetime import datetime

def run_command(cmd, check=True):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        if check:
            print(f"Error running command: {cmd}")
            print(f"Error: {e}")
            sys.exit(1)
        return None

def get_conflicted_files():
    """Get list of files with merge conflicts"""
    result = run_command("git diff --name-only --diff-filter=U", check=False)
    if result:
        return result.split('\n')
    return []

def resolve_conflict_strategy(file_path, strategy="theirs"):
    """Resolve conflict using specified strategy"""
    print(f"Resolving conflicts in {file_path} using {strategy} strategy...")
    
    if strategy == "theirs":
        # Use their version (remote main)
        run_command(f"git checkout --theirs {file_path}")
    elif strategy == "ours":
        # Use our version (local changes)
        run_command(f"git checkout --ours {file_path}")
    elif strategy == "both":
        # Keep both versions (manual resolution needed)
        print(f"⚠️  Manual resolution needed for {file_path}")
        return False
    
    # Mark as resolved
    run_command(f"git add {file_path}")
    return True

def resolve_conflicts_automatically():
    """Automatically resolve merge conflicts using intelligent strategies"""
    print("Starting automatic conflict resolution...")
    
    conflicted_files = get_conflicted_files()
    if not conflicted_files:
        print("No conflicted files found")
        return True
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    # Define resolution strategies for different file types
    resolution_strategies = {
        # Configuration files - prefer remote version
        "tailwind.config.js": "theirs",
        "next.config.js": "theirs",
        "package.json": "theirs",
        "tsconfig.json": "theirs",
        
        # Component files - prefer our version (merged PRs)
        "components/": "ours",
        "pages/": "ours",
        "src/": "ours",
        
        # Data files - prefer our version
        "data/": "ours",
        
        # Type definitions - prefer our version
        "types/": "ours",
        
        # Styles - prefer our version
        "styles/": "ours",
        
        # Scripts - prefer our version
        "*.sh": "ours",
        "*.py": "ours",
        
        # Documentation - prefer our version
        "*.md": "ours",
    }
    
    resolved_count = 0
    manual_resolution_needed = []
    
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"\nProcessing: {file_path}")
        
        # Determine strategy based on file type
        strategy = "theirs"  # Default to remote version
        
        for pattern, file_strategy in resolution_strategies.items():
            if pattern in file_path or file_path.endswith(pattern.replace("*", "")):
                strategy = file_strategy
                break
        
        # Apply resolution strategy
        if resolve_conflict_strategy(file_path, strategy):
            resolved_count += 1
            print(f"✓ Resolved {file_path}")
        else:
            manual_resolution_needed.append(file_path)
    
    print(f"\n=== Conflict Resolution Summary ===")
    print(f"Automatically resolved: {resolved_count}")
    print(f"Manual resolution needed: {len(manual_resolution_needed)}")
    
    if manual_resolution_needed:
        print("\nFiles requiring manual resolution:")
        for file_path in manual_resolution_needed:
            print(f"  - {file_path}")
    
    return len(manual_resolution_needed) == 0

def main():
    print("Starting merge conflict resolution...")
    
    # Check if we're in a merge state
    if not run_command("git status --porcelain", check=False):
        print("No merge in progress")
        return
    
    # Resolve conflicts automatically
    if resolve_conflicts_automatically():
        print("\nAll conflicts resolved automatically!")
        
        # Commit the merge
        commit_message = f"Merge remote main with local changes - {datetime.now()}"
        run_command(f"git commit -m '{commit_message}'")
        
        print("✓ Merge committed successfully!")
        print("You can now push to main: git push origin main")
    else:
        print("\n⚠️  Some conflicts require manual resolution")
        print("Please resolve the remaining conflicts manually and then:")
        print("1. git add <resolved-files>")
        print("2. git commit -m 'Resolve merge conflicts'")
        print("3. git push origin main")

if __name__ == "__main__":
    main()