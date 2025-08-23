#!/bin/bash

# Systematic merge script for open pull requests
# This script will process open PRs in batches and handle conflicts intelligently

set -e

echo "Starting systematic merge process for open pull requests..."

# Configuration
BATCH_SIZE=10
MAX_CONFLICTS_PER_BATCH=3
MERGE_BRANCH="systematic-merge-$(date +%Y%m%d-%H%M%S)"

# Create merge branch
git checkout -b "$MERGE_BRANCH"
echo "Created merge branch: $MERGE_BRANCH"

# Function to get open PRs
get_open_prs() {
    curl -s -H "Authorization: token ghs_19kccVEp5VIJbcu1Oe1bBomzNM9uj62KhopR" \
         "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" \
         | grep -o '"number":[0-9]*' | sed 's/"number"://' | sed 's/,//' | sort -n
}

# Function to get PR details
get_pr_details() {
    local pr_number=$1
    curl -s -H "Authorization: token ghs_19kccVEp5VIJbcu1Oe1bBomzNM9uj62KhopR" \
         "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number"
}

# Function to get PR head branch
get_pr_head_branch() {
    local pr_details=$1
    echo "$pr_details" | grep -o '"head":[^}]*"ref":"[^"]*"' | cut -d'"' -f6
}

# Function to get PR title
get_pr_title() {
    local pr_details=$1
    echo "$pr_details" | grep -o '"title":"[^"]*"' | cut -d'"' -f4
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local pr_details=$2
    local head_branch=$3
    local title=$4
    
    echo ""
    echo "=== Processing PR #$pr_number: $title ==="
    echo "Head branch: $head_branch"
    
    # Check if branch exists locally
    if ! git ls-remote --heads origin "$head_branch" | grep -q "$head_branch"; then
        echo "⚠️  Branch $head_branch not found, skipping..."
        return 1
    fi
    
    # Fetch the branch
    git fetch origin "$head_branch:$head_branch"
    
    # Check commit count
    local commit_count=$(git log --oneline HEAD.."$head_branch" | wc -l)
    echo "Commits ahead: $commit_count"
    
    # Skip if too many commits
    if [ "$commit_count" -gt 100 ]; then
        echo "⚠️  Skipping - too many commits ($commit_count)"
        return 1
    fi
    
    # Try different merge strategies
    local merge_success=false
    
    # Strategy 1: Regular merge with recursive strategy
    echo "Trying recursive merge strategy..."
    if git merge "$head_branch" --no-edit --strategy=recursive -X theirs; then
        echo "✓ Successfully merged PR #$pr_number (recursive strategy)"
        merge_success=true
    else
        echo "Recursive merge failed, trying alternative strategies..."
        git merge --abort
        
        # Strategy 2: Ours strategy
        if git merge "$head_branch" --no-edit --strategy=recursive -X ours; then
            echo "✓ Successfully merged PR #$pr_number (ours strategy)"
            merge_success=true
        else
            # Strategy 3: Cherry-pick approach
            git merge --abort
            echo "Trying cherry-pick approach..."
            
            local commits=$(git log --oneline HEAD.."$head_branch" | awk '{print $1}')
            local cherry_success=true
            
            for commit in $commits; do
                if ! git cherry-pick "$commit" --no-edit; then
                    echo "Cherry-pick failed for commit $commit, aborting..."
                    git cherry-pick --abort
                    cherry_success=false
                    break
                fi
            done
            
            if [ "$cherry_success" = true ]; then
                echo "✓ Successfully cherry-picked PR #$pr_number"
                merge_success=true
            else
                echo "✗ All merge strategies failed for PR #$pr_number"
                return 1
            fi
        fi
    fi
    
    if [ "$merge_success" = true ]; then
        echo "PR #$pr_number merged successfully"
        return 0
    fi
    
    return 1
}

# Main execution
echo "Fetching open pull requests..."
open_prs=$(get_open_prs)
total_prs=$(echo "$open_prs" | wc -l)

echo "Found $total_prs open pull requests"
echo "Processing in batches of $BATCH_SIZE..."

# Process PRs in batches
batch_num=1
successful_merges=0
failed_merges=0
conflict_count=0

for pr_number in $open_prs; do
    echo ""
    echo "=== Batch $batch_num ==="
    
    # Get PR details
    pr_details=$(get_pr_details "$pr_number")
    head_branch=$(get_pr_head_branch "$pr_details")
    title=$(get_pr_title "$pr_details")
    
    if [ -z "$head_branch" ]; then
        echo "⚠️  Could not get head branch for PR #$pr_number, skipping..."
        continue
    fi
    
    # Try to merge
    if merge_pr "$pr_number" "$pr_details" "$head_branch" "$title"; then
        ((successful_merges++))
    else
        ((failed_merges++))
        ((conflict_count++))
    fi
    
    # Check if we should start a new batch
    if [ $((successful_merges + failed_merges)) -eq $BATCH_SIZE ]; then
        echo ""
        echo "=== Batch $batch_num Complete ==="
        echo "Successful merges: $successful_merges"
        echo "Failed merges: $failed_merges"
        echo "Total processed: $((successful_merges + failed_merges))"
        
        # If too many conflicts, commit current progress and start fresh
        if [ $conflict_count -ge $MAX_CONFLICTS_PER_BATCH ]; then
            echo "Too many conflicts in this batch, committing progress..."
            git add -A
            git commit -m "Batch $batch_num merge progress - $(date)"
            conflict_count=0
        fi
        
        # Reset counters for next batch
        successful_merges=0
        failed_merges=0
        ((batch_num++))
    fi
    
    # Add small delay to avoid rate limiting
    sleep 1
done

# Final summary
echo ""
echo "=== Final Merge Summary ==="
echo "Total batches processed: $((batch_num - 1))"
echo "Total successful merges: $successful_merges"
echo "Total failed merges: $failed_merges"

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To push this branch: git push origin $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"