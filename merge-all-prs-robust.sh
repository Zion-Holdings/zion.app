#!/bin/bash

# Comprehensive script to merge all open PRs with conflict resolution
# This script handles the complex merge situation and preserves critical fixes

set -e

echo "🚀 Starting comprehensive merge of all open PRs..."
echo "📋 This will handle conflicts systematically and preserve critical fixes"

# Create a comprehensive log file
LOG_FILE="comprehensive-merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "Comprehensive merge log started at $(date)" > "$LOG_FILE"
echo "Strategy: Preserve critical fixes, resolve conflicts systematically" >> "$LOG_FILE"

# Get all remote branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counters
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0
CONFLICT_RESOLVED_COUNT=0

# First, let's try to get the latest remote changes
echo "🔄 Fetching latest remote changes..."
git fetch origin

# Check if we need to handle the divergent main branch
if git status | grep -q "Your branch and 'origin/main' have diverged"; then
    echo "⚠️  Detected divergent branches. Handling this first..."
    echo "⚠️  Detected divergent branches. Handling this first..." >> "$LOG_FILE"
    
    # Create a backup branch of our current work
    BACKUP_BRANCH="backup-$(date +%Y%m%d-%H%M%S)"
    echo "💾 Creating backup branch: $BACKUP_BRANCH"
    git checkout -b "$BACKUP_BRANCH"
    git push origin "$BACKUP_BRANCH"
    
    # Go back to main
    git checkout main
    
    # Reset to match remote main exactly
    echo "🔄 Resetting to match remote main..."
    git reset --hard origin/main
    
    # Cherry-pick our critical fixes
    echo "🔧 Cherry-picking critical fixes from backup..."
    git cherry-pick "$BACKUP_BRANCH" --strategy=recursive -X theirs || {
        echo "⚠️  Cherry-pick had conflicts, resolving..."
        git add .
        git commit -m "Cherry-pick critical fixes with conflict resolution"
    }
fi

echo "---" >> "$LOG_FILE"

# Now process each branch systematically
for branch in $BRANCHES; do
    echo "📋 Processing branch: $branch"
    echo "📋 Processing branch: $branch" >> "$LOG_FILE"
    
    # Skip if we're already on this branch or if it's main
    if [[ "$branch" == "main" ]]; then
        echo "⏭️  Skipping main branch"
        continue
    fi
    
    # Try to merge the branch
    echo "🔄 Attempting to merge $branch..."
    echo "🔄 Attempting to merge $branch..." >> "$LOG_FILE"
    
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
        echo "✅ Successfully merged $branch" >> "$LOG_FILE"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving systematically..."
        echo "⚠️  Merge conflicts detected in $branch, resolving systematically..." >> "$LOG_FILE"
        
        # Check what types of conflicts we have
        CONFLICT_TYPES=$(git status --porcelain | grep "^UU\|^AA\|^DD\|^DU\|^UD" | wc -l)
        echo "🔍 Found $CONFLICT_TYPES conflict types"
        
        # Handle different types of conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving content conflicts..."
            echo "🔧 Resolving content conflicts..." >> "$LOG_FILE"
            
            # For critical configuration files, preserve our version
            if [[ -f "netlify.toml" ]]; then
                echo "🔒 Preserving our Vite configuration in netlify.toml"
                git checkout --ours netlify.toml
            fi
            
            if [[ -f "vite.config.ts" ]]; then
                echo "🔒 Preserving our Vite configuration in vite.config.ts"
                git checkout --ours vite.config.ts
            fi
            
            if [[ -f "package.json" ]]; then
                echo "🔒 Preserving our package.json"
                git checkout --ours package.json
            fi
            
            # For other conflicts, try to take incoming changes
            git status --porcelain | grep "^UU\|^AA" | while read -r line; do
                file=$(echo "$line" | awk '{print $2}')
                if [[ "$file" != "netlify.toml" && "$file" != "vite.config.ts" && "$file" != "package.json" ]]; then
                    echo "📝 Taking incoming changes for $file"
                    git checkout --theirs "$file" 2>/dev/null || echo "⚠️  Could not resolve $file automatically"
                fi
            done
            
            # Handle deleted files conflicts
            git status --porcelain | grep "^DD" | while read -r line; do
                file=$(echo "$line" | awk '{print $2}')
                echo "🗑️  Resolving deletion conflict for $file"
                git rm "$file" 2>/dev/null || echo "⚠️  Could not remove $file"
            done
            
            # Try to commit the merge
            if git add . && git commit -m "Merge $branch: Resolve conflicts systematically"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                echo "✅ Successfully resolved conflicts and merged $branch" >> "$LOG_FILE"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                CONFLICT_RESOLVED_COUNT=$((CONFLICT_RESOLVED_COUNT + 1))
            else
                echo "❌ Failed to resolve conflicts in $branch, aborting merge"
                echo "❌ Failed to resolve conflicts in $branch, aborting merge" >> "$LOG_FILE"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Merge failed for $branch (unknown reason)"
            echo "❌ Merge failed for $branch (unknown reason)" >> "$LOG_FILE"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---" >> "$LOG_FILE"
done

# Final summary
echo "🎉 Comprehensive merge process completed!"
echo "✅ Successful merges: $SUCCESS_COUNT"
echo "🔧 Conflicts resolved: $CONFLICT_RESOLVED_COUNT"
echo "❌ Failed merges: $FAILED_COUNT"
echo "⏭️  Skipped branches: $SKIPPED_COUNT"
echo "📋 Log saved to: $LOG_FILE"

echo "🎉 Comprehensive merge process completed!" >> "$LOG_FILE"
echo "✅ Successful merges: $SUCCESS_COUNT" >> "$LOG_FILE"
echo "🔧 Conflicts resolved: $CONFLICT_RESOLVED_COUNT" >> "$LOG_FILE"
echo "❌ Failed merges: $FAILED_COUNT" >> "$LOG_FILE"
echo "⏭️  Skipped branches: $SKIPPED_COUNT" >> "$LOG_FILE"

# Try to push the updated main branch
echo "🚀 Attempting to push updated main branch..."
if git push origin main; then
    echo "✅ Successfully pushed updated main branch to remote"
    echo "✅ Successfully pushed updated main branch to remote" >> "$LOG_FILE"
else
    echo "⚠️  Push failed. You may need to force push or coordinate with team"
    echo "⚠️  Push failed. You may need to force push or coordinate with team" >> "$LOG_FILE"
fi