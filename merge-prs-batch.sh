#!/bin/bash

# Script to merge open PRs in batches
# This script will process a limited number of branches at a time

set -e

# Configuration
BATCH_SIZE=10
START_FROM=20

echo "Starting batch merge of open PRs..."
echo "Batch size: $BATCH_SIZE"
echo "Starting from: $START_FROM"

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -E "(cursor|codex|feature)" | sed 's/origin\///' | tail -n +$((START_FROM + 1)) | head -n $BATCH_SIZE)

echo "Processing this batch of branches:"
echo "$UNMERGED_BRANCHES"

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=""

# Process each branch in the batch
for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        echo "Branch $branch doesn't exist remotely, skipping..."
        continue
    fi
    
    # Create a temporary branch for merging
    TEMP_BRANCH="temp-merge-$branch"
    git checkout -b "$TEMP_BRANCH" 2>/dev/null || git checkout "$TEMP_BRANCH"
    
    echo "Attempting to merge $branch into $TEMP_BRANCH..."
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Now merge into main
        git checkout main
        if git merge "$TEMP_BRANCH" --no-edit; then
            echo "Successfully merged $branch into main"
            # Push the updated main
            git push origin main
        else
            echo "Failed to merge $branch into main"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_BRANCHES="$FAILED_BRANCHES $branch"
        fi
        
        # Clean up temp branch
        git branch -D "$TEMP_BRANCH"
    else
        echo "Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            # For package.json conflicts, take the incoming version
            if git status --porcelain | grep -q "package.json"; then
                git checkout --theirs package.json 2>/dev/null || true
                git checkout --theirs package-lock.json 2>/dev/null || true
            fi
            
            # For TypeScript conflicts, take the incoming version
            if git status --porcelain | grep -q "\.tsx\?$"; then
                git checkout --theirs src/ 2>/dev/null || true
            fi
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Try to commit the merge
            if git commit -m "Merge $branch - resolved conflicts"; then
                echo "Successfully resolved conflicts and merged $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                
                # Now merge into main
                git checkout main
                if git merge "$TEMP_BRANCH" --no-edit; then
                    echo "Successfully merged $branch into main"
                    git push origin main
                else
                    echo "Failed to merge $branch into main"
                    git merge --abort
                    FAILED_COUNT=$((FAILED_COUNT + 1))
                    FAILED_BRANCHES="$FAILED_BRANCHES $branch"
                fi
            else
                echo "Failed to commit merge for $branch"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
                FAILED_BRANCHES="$FAILED_BRANCHES $branch"
            fi
        else
            echo "No conflicts found, but merge still failed for $branch"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_BRANCHES="$FAILED_BRANCHES $branch"
        fi
        
        # Clean up temp branch
        git branch -D "$TEMP_BRANCH" 2>/dev/null || true
    fi
    
    echo "----------------------------------------"
done

# Final summary
echo "Batch merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"

if [ $FAILED_COUNT -gt 0 ]; then
    echo "Failed branches: $FAILED_BRANCHES"
    echo "These branches may need manual conflict resolution"
fi

# Return to main branch
git checkout main
echo "Current branch: $(git branch --show-current)"
echo "Next batch should start from: $((START_FROM + BATCH_SIZE))"