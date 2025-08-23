#!/bin/bash

# Script to merge all unmerged branches into main
# This script will attempt to merge all unmerged branches and resolve conflicts automatically

set -e

echo "Starting automated branch merging process..."

# Get all unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v codex | head -50)

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in $UNMERGED_BRANCHES; do
    echo "Attempting to merge: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge failed for: $branch, attempting conflict resolution..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts for: $branch"
            
            # Try to resolve conflicts by accepting the feature branch version
            # This is a simple strategy - in production you might want more sophisticated conflict resolution
            
            # Get all conflicted files
            CONFLICTED_FILES=$(git status --porcelain | grep "^UU" | awk '{print $2}')
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "Resolving conflicts in: $file"
                    # Accept the feature branch version (--theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                fi
            done
            
            # Add all resolved files
            git add . 2>/dev/null || true
            
            # Try to commit the merge
            if git commit -m "Merge $branch: Resolved conflicts by accepting feature branch improvements" --no-edit; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to commit merge for: $branch"
                # Abort the merge and continue
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Merge failed for: $branch (no conflicts detected)"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---"
done

echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"
echo "Total processed: $((SUCCESS_COUNT + FAILED_COUNT)) branches"