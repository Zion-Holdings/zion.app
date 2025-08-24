#!/usr/bin/env python3

import json
import subprocess
import time
import sys
from datetime import datetime

# Configuration
BATCH_SIZE = 10
MAX_CONFLICTS_PER_BATCH = 3
GITHUB_TOKEN = "ghs_19kccVEp5VIJbcu1Oe1bBomzNM9uj62KhopR"
REPO_URL = "https://api.github.com/repos/Zion-Holdings/zion.app"

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

def get_open_prs():
    """Get list of open pull request numbers"""
    import urllib.request
    
    url = f"{REPO_URL}/pulls?state=open&per_page=100"
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return [pr['number'] for pr in data]
    except Exception as e:
        print(f"Error fetching PRs: {e}")
        return []

def get_pr_details(pr_number):
    """Get details for a specific PR"""
    import urllib.request
    
    url = f"{REPO_URL}/pulls/{pr_number}"
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching PR {pr_number}: {e}")
        return None

def merge_pr(pr_number, pr_details):
    """Attempt to merge a single PR"""
    print(f"\n=== Processing PR #{pr_number}: {pr_details['title']} ===")
    
    head_branch = pr_details['head']['ref']
    print(f"Head branch: {head_branch}")
    
    # Check if branch exists remotely
    if not run_command(f"git ls-remote --heads origin {head_branch}", check=False):
        print(f"⚠️  Branch {head_branch} not found, skipping...")
        return False
    
    # Fetch the branch
    run_command(f"git fetch origin {head_branch}:{head_branch}")
    
    # Check commit count
    commit_count = len(run_command(f"git log --oneline HEAD..{head_branch}").split('\n'))
    print(f"Commits ahead: {commit_count}")
    
    # Skip if too many commits
    if commit_count > 100:
        print(f"⚠️  Skipping - too many commits ({commit_count})")
        return False
    
    # Try different merge strategies
    merge_success = False
    
    # Strategy 1: Regular merge with recursive strategy
    print("Trying recursive merge strategy...")
    if run_command(f"git merge {head_branch} --no-edit --strategy=recursive -X theirs", check=False):
        print(f"✓ Successfully merged PR #{pr_number} (recursive strategy)")
        merge_success = True
    else:
        print("Recursive merge failed, trying alternative strategies...")
        run_command("git merge --abort")
        
        # Strategy 2: Ours strategy
        if run_command(f"git merge {head_branch} --no-edit --strategy=recursive -X ours", check=False):
            print(f"✓ Successfully merged PR #{pr_number} (ours strategy)")
            merge_success = True
        else:
            # Strategy 3: Cherry-pick approach
            run_command("git merge --abort")
            print("Trying cherry-pick approach...")
            
            commits = run_command(f"git log --oneline HEAD..{head_branch}").split('\n')
            cherry_success = True
            
            for commit in commits:
                if commit.strip():
                    commit_hash = commit.split()[0]
                    if not run_command(f"git cherry-pick {commit_hash} --no-edit", check=False):
                        print(f"Cherry-pick failed for commit {commit_hash}, aborting...")
                        run_command("git cherry-pick --abort")
                        cherry_success = False
                        break
            
            if cherry_success:
                print(f"✓ Successfully cherry-picked PR #{pr_number}")
                merge_success = True
            else:
                print(f"✗ All merge strategies failed for PR #{pr_number}")
                return False
    
    if merge_success:
        print(f"PR #{pr_number} merged successfully")
        return True
    
    return False

def main():
    print("Starting systematic merge process for open pull requests...")
    
    # Create merge branch
    merge_branch = f"systematic-merge-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    run_command(f"git checkout -b {merge_branch}")
    print(f"Created merge branch: {merge_branch}")
    
    # Get open PRs
    print("Fetching open pull requests...")
    open_prs = get_open_prs()
    
    if not open_prs:
        print("No open pull requests found")
        return
    
    total_prs = len(open_prs)
    print(f"Found {total_prs} open pull requests")
    print(f"Processing in batches of {BATCH_SIZE}...")
    
    # Process PRs in batches
    batch_num = 1
    successful_merges = 0
    failed_merges = 0
    conflict_count = 0
    
    for pr_number in open_prs:
        print(f"\n=== Batch {batch_num} ===")
        
        # Get PR details
        pr_details = get_pr_details(pr_number)
        if not pr_details:
            print(f"⚠️  Could not get details for PR #{pr_number}, skipping...")
            continue
        
        # Try to merge
        if merge_pr(pr_number, pr_details):
            successful_merges += 1
        else:
            failed_merges += 1
            conflict_count += 1
        
        # Check if we should start a new batch
        if (successful_merges + failed_merges) == BATCH_SIZE:
            print(f"\n=== Batch {batch_num} Complete ===")
            print(f"Successful merges: {successful_merges}")
            print(f"Failed merges: {failed_merges}")
            print(f"Total processed: {successful_merges + failed_merges}")
            
            # If too many conflicts, commit current progress and start fresh
            if conflict_count >= MAX_CONFLICTS_PER_BATCH:
                print("Too many conflicts in this batch, committing progress...")
                run_command("git add -A")
                run_command(f"git commit -m 'Batch {batch_num} merge progress - {datetime.now()}'")
                conflict_count = 0
            
            # Reset counters for next batch
            successful_merges = 0
            failed_merges = 0
            batch_num += 1
        
        # Add small delay to avoid rate limiting
        time.sleep(1)
    
    # Final summary
    print(f"\n=== Final Merge Summary ===")
    print(f"Total batches processed: {batch_num - 1}")
    print(f"Total successful merges: {successful_merges}")
    print(f"Total failed merges: {failed_merges}")
    
    print(f"\nCurrent branch: {merge_branch}")
    print(f"To merge to main: git checkout main && git merge {merge_branch}")
    print(f"To push this branch: git push origin {merge_branch}")
    print("To continue resolving conflicts: git status")

if __name__ == "__main__":
    main()