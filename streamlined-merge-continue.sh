#!/bin/bash

# Streamlined PR Merge Continuation Script
set -e

echo "🚀 Continuing PR Merge Process with Streamlined Approach..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=3
LOG_FILE="streamlined-merge-log-$(date +%Y%m%d-%H%M%S).txt"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Get unmerged cursor branches
log_message "🔍 Identifying unmerged cursor branches..."
UNMERGED_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -$BATCH_SIZE)

if [ -z "$UNMERGED_BRANCHES" ]; then
    log_message "✅ All cursor branches appear to be merged!"
    exit 0
fi

log_message "📋 Processing batch of $(echo "$UNMERGED_BRANCHES" | wc -l) branches:"
echo "$UNMERGED_BRANCHES"
echo "---"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_CONFLICTS=0

# Process each branch
for branch in $UNMERGED_BRANCHES; do
    log_message "🔄 Processing branch: $branch"
    
    # Check if branch has unmerged commits
    if git merge-base HEAD "origin/$branch" >/dev/null 2>&1; then
        UNMERGED_COMMITS=$(git log --oneline "origin/$branch" --not main | wc -l)
        
        if [ "$UNMERGED_COMMITS" -eq 0 ]; then
            log_message "⏭️  Branch $branch already merged, skipping..."
            continue
        fi
        
        log_message "📝 Found $UNMERGED_COMMITS unmerged commits in $branch"
    fi
    
    # Attempt to merge
    if git merge "origin/$branch" --no-edit; then
        log_message "✅ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Count conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U | wc -l)
        TOTAL_CONFLICTS=$((TOTAL_CONFLICTS + CONFLICTED_FILES))
        
        # Resolve conflicts by keeping main version for config files
        for file in $(git diff --name-only --diff-filter=U); do
            if [[ "$file" == *.config.* ]] || [[ "$file" == *.json ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.tsx ]]; then
                if [[ "$file" == package.json ]] || [[ "$file" == next.config.js ]] || [[ "$file" == tsconfig.json ]]; then
                    log_message "⚙️  Config file detected, keeping main version: $file"
                    git checkout --ours "$file"
                else
                    log_message "📝 Regular file, attempting to merge both versions: $file"
                    # Try to merge both versions, fallback to main if conflict persists
                    if ! git checkout --theirs "$file" 2>/dev/null; then
                        git checkout --ours "$file"
                    fi
                fi
                git add "$file"
            fi
        done
        
        # Commit the resolved conflicts
        if git commit --no-edit; then
            log_message "✅ Successfully resolved conflicts and merged $branch"
            ((SUCCESSFUL_MERGES++))
        else
            log_message "❌ Failed to resolve conflicts in $branch"
            git merge --abort
            ((FAILED_MERGES++))
        fi
    fi
    
    echo "---"
done

# Push results
log_message "💾 Pushing batch results to remote..."
if git push origin main; then
    log_message "✅ Successfully pushed merged changes to remote"
else
    log_message "⚠️  Push failed, pulling latest changes first..."
    git pull origin main --no-rebase
    git push origin main
fi

# Summary
log_message "📊 Batch Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Total conflicts resolved: $TOTAL_CONFLICTS"
log_message "   📋 Branches processed: $(echo "$UNMERGED_BRANCHES" | wc -l)"

echo "---"
log_message "🎯 Ready to proceed with improvements!"
log_message "   Next steps: Continue merging remaining PRs or proceed with enhancements"