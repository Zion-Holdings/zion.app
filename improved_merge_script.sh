#!/bin/bash

# Improved merge script for open pull requests
# This script correctly detects unmerged commits and handles merges efficiently

set -e

echo "Starting improved merge process for open pull requests..."

# Configuration
BATCH_SIZE=10
MAX_BRANCHES=50

# Get list of unmerged branches, prioritizing cursor branches
echo "Fetching unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep "cursor/" | head -$MAX_BRANCHES)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged cursor branches to process"

# Create a temporary branch for merging
MERGE_BRANCH="improved-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

echo "Created merge branch: $MERGE_BRANCH"

# Initialize counters
SUCCESSFUL=0
FAILED=0
SKIPPED=0

# Process branches
echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    echo ""
    echo "=== Processing branch: $branch ==="
    
    # Check if this branch has actual unmerged commits (excluding merge commits)
    UNMERGED_COMMITS=$(git log --oneline origin/main.."$branch" | grep -v "Merge" | wc -l)
    TOTAL_COMMITS=$(git log --oneline origin/main.."$branch" | wc -l)
    
    echo "Total commits ahead: $TOTAL_COMMITS"
    echo "Unmerged commits (excluding merges): $UNMERGED_COMMITS"
    
    # Skip branches with no meaningful changes or too many commits
    if [ "$UNMERGED_COMMITS" -eq 0 ] || [ "$TOTAL_COMMITS" -gt 50 ]; then
        echo "⚠️  Skipping $branch - no meaningful changes or too many commits"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Try different merge strategies
    MERGE_SUCCESS=false
    
    # Strategy 1: Try regular merge with recursive strategy
    echo "Trying recursive merge..."
    if git merge "$branch" --no-edit --strategy=recursive -X theirs 2>/dev/null; then
        echo "✓ Successfully merged $branch (recursive strategy)"
        SUCCESSFUL=$((SUCCESSFUL + 1))
        MERGE_SUCCESS=true
    else
        # Strategy 2: Try with ours strategy
        git merge --abort 2>/dev/null || true
        echo "Trying ours strategy..."
        if git merge "$branch" --no-edit --strategy=recursive -X ours 2>/dev/null; then
            echo "✓ Successfully merged $branch (ours strategy)"
            SUCCESSFUL=$((SUCCESSFUL + 1))
            MERGE_SUCCESS=true
        else
            # Strategy 3: Try cherry-pick approach for small changes
            git merge --abort 2>/dev/null || true
            if [ "$UNMERGED_COMMITS" -le 10 ]; then
                echo "Trying cherry-pick approach..."
                # Get only non-merge commits
                COMMITS=$(git log --oneline origin/main.."$branch" | grep -v "Merge" | awk '{print $1}' | head -10)
                
                CHERRY_SUCCESS=true
                for commit in $COMMITS; do
                    if ! git cherry-pick "$commit" --no-edit 2>/dev/null; then
                        echo "Cherry-pick failed for commit $commit, aborting..."
                        git cherry-pick --abort 2>/dev/null || true
                        CHERRY_SUCCESS=false
                        break
                    fi
                done
                
                if [ "$CHERRY_SUCCESS" = true ]; then
                    echo "✓ Successfully cherry-picked $branch"
                    SUCCESSFUL=$((SUCCESSFUL + 1))
                    MERGE_SUCCESS=true
                fi
            fi
            
            if [ "$MERGE_SUCCESS" = false ]; then
                echo "✗ All merge strategies failed for $branch"
                FAILED=$((FAILED + 1))
            fi
        fi
    fi
    
    # Progress indicator
    PROCESSED=$((SUCCESSFUL + FAILED + SKIPPED))
    PROGRESS=$((PROCESSED * 100 / TOTAL_BRANCHES))
    echo "Progress: $PROGRESS% ($PROCESSED/$TOTAL_BRANCHES)"
    
    # Stop after processing the batch size
    if [ $PROCESSED -ge $BATCH_SIZE ]; then
        echo ""
        echo "Reached batch size limit ($BATCH_SIZE). Stopping for review."
        break
    fi
done

echo ""
echo "=== Improved Merge Summary ==="
echo "Total branches processed: $((SUCCESSFUL + FAILED + SKIPPED))"
echo "Successful merges: $SUCCESSFUL"
echo "Failed merges: $FAILED"
echo "Skipped branches: $SKIPPED"

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To review changes: git log --oneline origin/main..HEAD"
echo "To see conflicts: git status"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"

# Create a summary file
cat > "improved_merge_summary_$(date +%Y%m%d-%H%M%S).txt" << EOF
Improved Merge Summary - $(date)
================================

Total branches processed: $((SUCCESSFUL + FAILED + SKIPPED))
Successful merges: $SUCCESSFUL
Failed merges: $FAILED
Skipped branches: $SKIPPED

Merge branch: $MERGE_BRANCH

Next steps:
1. Review the merged changes: git log --oneline origin/main..HEAD
2. Test the application
3. Merge to main: git checkout main && git merge $MERGE_BRANCH
4. Push to main: git push origin main
EOF

echo "Merge summary saved to improved_merge_summary_$(date +%Y%m%d-%H%M%S).txt"