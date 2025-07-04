#!/bin/bash

# Robust merge script that automatically resolves conflicts and continues processing
# This script handles merge conflicts gracefully and continues with the next branches

set -e

echo "Starting robust merge process for unmerged branches..."

# Configuration
BATCH_SIZE=20  # Smaller batch size for better conflict handling
MAX_COMMITS_PER_BRANCH=300

# Get list of unmerged branches, excluding certain patterns
echo "Fetching list of unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "HEAD" | grep -v "dependabot" | head -$BATCH_SIZE)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "Found $TOTAL_BRANCHES unmerged branches to process in this batch"

# Create a temporary branch for merging if not already on one
if [[ "$(git branch --show-current)" != bulk-merge-* ]]; then
    MERGE_BRANCH="bulk-merge-$(date +%Y%m%d-%H%M%S)"
    git checkout -b "$MERGE_BRANCH"
    echo "Created merge branch: $MERGE_BRANCH"
else
    MERGE_BRANCH=$(git branch --show-current)
    echo "Using existing merge branch: $MERGE_BRANCH"
fi

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_BRANCHES=()
SKIPPED_BRANCHES=0
PROCESSED_BRANCHES=0

echo "Processing branches with automatic conflict resolution..."

for branch in $UNMERGED_BRANCHES; do
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
        echo "Theirs strategy failed, checking for conflicts..."
        
        # Check if we have conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Conflicts detected, attempting automatic resolution..."
            
            # Try to resolve conflicts automatically
            # For deleted files, remove them
            git status --porcelain | grep "^DD" | awk '{print $2}' | xargs -r git rm
            
            # For added files, add them
            git status --porcelain | grep "^AA" | awk '{print $2}' | xargs -r git add
            
            # For modified files, prefer theirs
            git status --porcelain | grep "^UU" | awk '{print $2}' | xargs -r git checkout --theirs
            
            # Add all resolved files
            git add .
            
            # Try to commit the merge
            if git commit --no-edit; then
                echo "✓ Successfully resolved conflicts and merged $branch"
                ((SUCCESSFUL_MERGES++))
                MERGE_SUCCESS=true
            else
                echo "Failed to commit resolved conflicts, aborting merge..."
                git merge --abort
            fi
        else
            echo "No conflicts detected, trying alternative strategies..."
            
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
                        echo "Cherry-pick failed for commit $commit, attempting conflict resolution..."
                        
                        # Check for conflicts
                        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                            echo "Resolving cherry-pick conflicts..."
                            
                            # Resolve conflicts automatically
                            git status --porcelain | grep "^DD" | awk '{print $2}' | xargs -r git rm
                            git status --porcelain | grep "^AA" | awk '{print $2}' | xargs -r git add
                            git status --porcelain | grep "^UU" | awk '{print $2}' | xargs -r git checkout --theirs
                            
                            git add .
                            
                            if git cherry-pick --continue; then
                                echo "Successfully resolved cherry-pick conflicts for commit $commit"
                            else
                                echo "Failed to continue cherry-pick, aborting..."
                                git cherry-pick --abort
                                CHERRY_SUCCESS=false
                                break
                            fi
                        else
                            echo "Cherry-pick failed for commit $commit, aborting..."
                            git cherry-pick --abort
                            CHERRY_SUCCESS=false
                            break
                        fi
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
    fi
    
    if [ "$MERGE_SUCCESS" = true ]; then
        echo "Branch $branch merged successfully"
    fi
    
    ((PROCESSED_BRANCHES++))
    
    # Progress update
    echo "Progress: $PROCESSED_BRANCHES/$TOTAL_BRANCHES branches processed"
    
    # Small delay to prevent overwhelming the system
    sleep 1
done

echo ""
echo "=== Robust Merge Summary ==="
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"
echo "Skipped branches: $SKIPPED_BRANCHES"
echo "Total processed: $PROCESSED_BRANCHES"

if [ ${#CONFLICT_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${CONFLICT_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"
echo "To push this branch: git push origin $MERGE_BRANCH"
echo "To continue with next batch: run this script again from this branch"