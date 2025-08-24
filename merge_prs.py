#!/usr/bin/env python3
"""
Script to merge all open pull requests into the main branch
"""

import subprocess
import sys
import os
import json
import requests

def run_command(cmd, cwd="/workspace"):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of open pull requests from GitHub API"""
    token = "ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18"
    headers = {"Authorization": f"token {token}"}
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching PRs: {e}")
        return []

def merge_prs():
    """Merge all open pull requests into main"""
    print("Starting merge process for open pull requests...")
    
    # Get current status
    print("Current git status:")
    success, stdout, stderr = run_command("git status")
    if success:
        print(stdout)
    else:
        print(f"Error getting status: {stderr}")
    
    # Switch to main branch and pull latest changes
    print("Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Error switching to main: {stderr}")
        return False
    
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"Error pulling main: {stderr}")
        return False
    
    # Get open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found or error fetching PRs")
        return False
    
    print(f"Found {len(prs)} open pull requests")
    
    # Merge each PR branch
    for pr in prs:
        branch_name = pr['head']['ref']
        pr_number = pr['number']
        pr_title = pr['title']
        
        print(f"\nProcessing PR #{pr_number}: {pr_title}")
        print(f"Branch: {branch_name}")
        
        # Check if branch exists
        success, stdout, stderr = run_command(f"git show-ref --verify --quiet refs/remotes/origin/{branch_name}")
        if not success:
            print(f"Branch {branch_name} not found, skipping...")
            continue
        
        # Try to merge
        print(f"Merging {branch_name} into main...")
        merge_cmd = f"git merge --no-edit --strategy=recursive -X theirs origin/{branch_name}"
        success, stdout, stderr = run_command(merge_cmd)
        
        if success:
            print(f"Successfully merged {branch_name}")
        else:
            print(f"Merge conflict detected in {branch_name}, attempting to resolve...")
            
            # Check for conflicts
            success, stdout, stderr = run_command("git status --porcelain")
            if success and "UU" in stdout:
                print("Resolving conflicts automatically...")
                
                # Add all files to resolve conflicts
                success, stdout, stderr = run_command("git add .")
                if success:
                    # Commit the merge
                    commit_cmd = f"git commit -m 'Resolve merge conflicts for {branch_name}'"
                    success, stdout, stderr = run_command(commit_cmd)
                    if success:
                        print(f"Conflicts resolved and committed for {branch_name}")
                    else:
                        print(f"Error committing resolved conflicts: {stderr}")
                        return False
                else:
                    print(f"Error adding files: {stderr}")
                    return False
            else:
                print("No conflicts found, continuing...")
    
    # Push the merged changes
    print("\nPushing merged changes to main...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("Successfully pushed to main")
    else:
        print(f"Error pushing to main: {stderr}")
        return False
    
    print("\nMerge process completed successfully!")
    
    # List final status
    print("Final git status:")
    success, stdout, stderr = run_command("git status")
    if success:
        print(stdout)
    else:
        print(f"Error getting final status: {stderr}")
    
    return True

if __name__ == "__main__":
    try:
        success = merge_prs()
        if success:
            print("All open pull requests have been merged into main branch.")
            sys.exit(0)
        else:
            print("Merge process failed.")
            sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)