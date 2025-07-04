#!/bin/bash

# Bulk merge script for thousands of open pull requests with smart conflict resolution
# This script processes branches in batches to avoid overwhelming the system

set -e

echo "Starting bulk merge process for open pull requests..."
echo "This will process branches in batches to handle the large volume efficiently."

# Configuration
BATCH_SIZE=50
MAX_COMMITS_PER_BRANCH=100
MAX_TOTAL_BRANCHES=1000  # Limit to prevent infinite processing

# Get list of unmerged branches, excluding certain patterns
echo "Fetching list of unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "HEAD" | grep -v "dependabot" | head -$MAX_TOTAL_BRANCHES)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged branches to process"

# Create a temporary branch for merging
MERGE_BRANCH="bulk-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_BRANCHES=()
SKIPPED_BRANCHES=0
PROCESSED_BRANCHES=0

echo "Created merge branch: $MERGE_BRANCH"
echo "Processing branches in batches of $BATCH_SIZE..."

# Process branches in batches
BATCH_NUMBER=1
while [ $PROCESSED_BRANCHES -lt $TOTAL_BRANCHES ]; do
    echo ""
    echo "=== Processing Batch $BATCH_NUMBER ==="
    
    # Get current batch
    CURRENT_BATCH=$(echo "$UNMERGED_BRANCHES" | tail -n +$((PROCESSED_BRANCHES + 1)) | head -n $BATCH_SIZE)
    BATCH_COUNT=$(echo "$CURRENT_BATCH" | wc -l)
    
    echo "Batch $BATCH_NUMBER: Processing $BATCH_COUNT branches ($((PROCESSED_BRANCHES + 1))-$((PROCESSED_BRANCHES + BATCH_COUNT)) of $TOTAL_BRANCHES)"
    
    for branch in $CURRENT_BATCH; do
        echo ""
        echo "--- Processing branch: $branch ---"
        
        # Check if this branch has significant changes
        COMMIT_COUNT=$(git log --oneline HEAD.."$branch" | wc -l)
        echo "Commits ahead: $COMMIT_COUNT"
        
        # Skip branches with too many commits to avoid complex conflicts
        if [ "$COMMIT_COUNT" -gt $MAX_COMMITS_PER_BRANCH ]; then
            echo "⚠️  Skipping $branch - too many commits ($COMMIT_COUNT > $MAX_COMMITS_PER_BRANCH)"
            ((SKIPPED_BRANCHES++))
            ((PROCESSED_BRANCHES++))
            continue
        fi
        
        # Try different merge strategies
        MERGE_SUCCESS=false
        
        # Strategy 1: Try regular merge with theirs strategy (prefer incoming changes)
        echo "Trying merge with 'theirs' strategy..."
        if git merge "$branch" --no-edit --strategy=recursive -X theirs; then
            echo "✓ Successfully merged $branch (theirs strategy)"
            ((SUCCESSFUL_MERGES++))
            MERGE_SUCCESS=true
        else
            echo "Theirs strategy failed, trying alternative strategies..."
            
            # Strategy 2: Try with ours strategy (prefer current changes)
            git merge --abort
            echo "Trying merge with 'ours' strategy..."
            if git merge "$branch" --no-edit --strategy=recursive -X ours; then
                echo "✓ Successfully merged $branch (ours strategy)"
                ((SUCCESSFUL_MERGES++))
                MERGE_SUCCESS=true
            else
                # Strategy 3: Try cherry-pick approach
                git merge --abort
                echo "Trying cherry-pick approach..."
                
                # Get the commits from this branch
                COMMITS=$(git log --oneline HEAD.."$branch" | awk '{print $1}')
                
                CHERRY_SUCCESS=true
                for commit in $COMMITS; do
                    if ! git cherry-pick "$commit" --no-edit; then
                        echo "Cherry-pick failed for commit $commit, aborting..."
                        git cherry-pick --abort
                        CHERRY_SUCCESS=false
                        break
                    fi
                done
                
                if [ "$CHERRY_SUCCESS" = true ]; then
                    echo "✓ Successfully cherry-picked $branch"
                    ((SUCCESSFUL_MERGES++))
                    MERGE_SUCCESS=true
                else
                    echo "✗ All merge strategies failed for $branch"
                    ((FAILED_MERGES++))
                    CONFLICT_BRANCHES+=("$branch")
                fi
            fi
        fi
        
        if [ "$MERGE_SUCCESS" = true ]; then
            echo "Branch $branch merged successfully"
        fi
        
        ((PROCESSED_BRANCHES++))
        
        # Progress update
        echo "Progress: $PROCESSED_BRANCHES/$TOTAL_BRANCHES branches processed"
    done
    
    echo ""
    echo "=== Batch $BATCH_NUMBER Summary ==="
    echo "Batch successful merges: $SUCCESSFUL_MERGES"
    echo "Batch failed merges: $FAILED_MERGES"
    echo "Batch skipped branches: $SKIPPED_BRANCHES"
    echo "Total processed so far: $PROCESSED_BRANCHES/$TOTAL_BRANCHES"
    
    # Ask user if they want to continue to next batch
    if [ $PROCESSED_BRANCHES -lt $TOTAL_BRANCHES ]; then
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Stopping at user request. Current progress saved in branch: $MERGE_BRANCH"
            break
        fi
    fi
    
    ((BATCH_NUMBER++))
done

echo ""
echo "=== Final Bulk Merge Summary ==="
echo "Total successful merges: $SUCCESSFUL_MERGES"
echo "Total failed merges: $FAILED_MERGES"
echo "Total skipped branches: $SKIPPED_BRANCHES"
echo "Total processed: $PROCESSED_BRANCHES"
echo "Total branches found: $TOTAL_BRANCHES"

if [ ${#CONFLICT_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts (first 20):"
    for branch in "${CONFLICT_BRANCHES[@]:0:20}"; do
        echo "  - $branch"
    done
    if [ ${#CONFLICT_BRANCHES[@]} -gt 20 ]; then
        echo "  ... and $(( ${#CONFLICT_BRANCHES[@]} - 20 )) more"
    fi
fi

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"
echo "To push this branch: git push origin $MERGE_BRANCH"
echo "To continue processing more branches: run this script again from this branch"