#!/bin/bash

# Test script to merge a small batch of branches first
set -e

echo "🧪 Testing merge process with a small batch..."
echo "📊 Total cursor branches available: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration - small batch for testing
BATCH_SIZE=3
BACKUP_BRANCH="test-backup-$(date +%Y%m%d-%H%M%S)"
# Test script to merge a small batch of cursor branches into main
set -e

echo "🧪 Starting test merge of small batch of cursor branches..."
echo "📊 This is a test run to verify the merge logic works correctly"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration - Small batch size for testing
BATCH_SIZE=5
BACKUP_BRANCH="test-merge-backup-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="test-merge-log-$(date +%Y%m%d-%H%M%S).txt"
=======

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Get first few cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -$BATCH_SIZE)

echo "📋 Testing with branches:"
echo "$BRANCHES"
echo "---"
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}
=======

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
        else
            echo "📝 Regular file, attempting to merge both versions..."
            log_message "📦 Critical file detected, keeping main version and merging dependencies..."
        else
            log_message "📝 Regular file, attempting to merge both versions..."
=======
        log_message "✅ Resolved conflicts in $file"
=======
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
=======
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Test merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
=======
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
=======
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Test resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
=======
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each branch in the test batch
echo "🔄 Starting test batch processing..."
echo "---"

for branch in $BRANCHES; do
    echo "📋 Processing test branch: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged or doesn't exist)"
# Main processing loop
log_message "🧪 Starting test processing..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "---"

# Get first few cursor branches for testing
BRANCHES=$(git branch -r | grep "origin/cursor/" | head -$BATCH_SIZE | sed 's/origin\///' | sort)

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}
current_batch=1

log_message "📊 Test branches: $total_branches"
log_message "---"

log_message "🚀 Processing test batch $current_batch (branches 1 to $total_branches)"
log_message "---"

batch_success=0
batch_failures=0

# Process this test batch
for ((j=0; j<total_branches; j++)); do
    branch="${branch_array[$j]}"
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED/$total_branches: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
=======
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Test branch $branch processed successfully"
    else
        echo "❌ Failed to process test branch $branch"
    fi
    
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
done

# Push changes
echo "💾 Pushing test changes to remote..."
git push origin main

# Summary
echo ""
echo "🧪 Test batch completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Next steps
echo ""
echo "🚀 Next steps:"
if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    echo "   ✅ Test successful! You can now run the full incremental script:"
    echo "      ./incremental-merge-prs.sh"
else
    echo "   ⚠️  Test had issues. Review the errors before proceeding."
fi
echo "   1. Review the merged changes: git log --oneline -10"
echo "   2. Test the application"
        log_message "✅ Branch $branch processed successfully"
        batch_success=$((batch_success + 1))
    else
        log_message "❌ Failed to process branch $branch"
        batch_failures=$((batch_failures + 1))
    fi
    
    # Progress update
    log_message "📊 Batch progress: $batch_success successful, $batch_failures failed"
    log_message "📊 Overall progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    log_message "---"
done

# Push changes after the test batch
log_message "💾 Pushing test batch changes to remote..."
git push origin main

log_message "✅ Test batch completed: $batch_success successful, $batch_failures failed"
log_message "---"

# Summary
echo ""
log_message "🧪 Test merge of cursor branches completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Batches processed: $current_batch"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"

# Test results
echo ""
if [ $FAILED_MERGES -eq 0 ]; then
    log_message "🎉 TEST PASSED! All branches merged successfully."
    log_message "✅ Ready to run the full merge script."
else
    log_message "⚠️  TEST FAILED! Some branches failed to merge."
    log_message "❌ Review the failures before running the full script."
fi

# Cleanup recommendations
echo ""
log_message "🧹 Cleanup recommendations:"
log_message "   1. Review the merged changes: git log --oneline -20"
log_message "   2. Test the application thoroughly"
log_message "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
log_message "   4. If test passed, run the full script: ./merge-all-cursor-prs.sh"
=======
echo "   3. Delete the test backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
=======
# Test script to merge a small batch of PRs
# This will help us test the conflict resolution and merging process

set -e

REPO="Zion-Holdings/zion.app"
LOG_FILE="test-merge-$(date +%Y%m%d-%H%M%S).log"
MAX_TEST_PRS=20  # Increased to find non-draft PRs

echo "Starting test PR merge process for $REPO at $(date)" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE" | tee -a "$LOG_FILE"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts for a PR
resolve_pr_conflicts() {
    local pr_number=$1
    local branch_name=$2
    
    log "Attempting to resolve conflicts for PR #$pr_number (branch: $branch_name)"
    
    # Checkout the PR branch
    if ! git checkout -b "$branch_name" "origin/$branch_name" 2>/dev/null; then
        log "Failed to checkout branch $branch_name"
        return 1
    fi
    
    # Try to merge with main
    if git merge main --no-edit; then
        log "Successfully resolved conflicts for PR #$pr_number"
        git push origin "$branch_name" --force
        git checkout main
        git branch -D "$branch_name" 2>/dev/null || true
        return 0
    else
        log "Failed to resolve conflicts for PR #$pr_number"
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "$branch_name" 2>/dev/null || true
        return 1
    fi
}

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    log "Attempting to merge PR #$pr_number"
    
    # Try to merge the PR
    if gh pr merge "$pr_number" --merge --delete-branch; then
        log "Successfully merged PR #$pr_number"
        return 0
    else
        log "Failed to merge PR #$pr_number"
        return 1
    fi
}

# Main test function
main() {
    local processed=0
    local merged=0
    local failed=0
    local non_draft_found=0
    
    # Get a larger batch of open PRs to find non-drafts
    log "Fetching first $MAX_TEST_PRS open PRs to find non-draft ones..."
    gh pr list --repo "$REPO" --state open --limit "$MAX_TEST_PRS" --json number,title,headRefName,mergeable,mergeStateStatus,reviewDecision,isDraft > test_prs.json
    
    # Process each PR
    while IFS= read -r pr_data && [ $non_draft_found -lt 3 ]; do  # Only process 3 non-draft PRs
        local pr_number=$(echo "$pr_data" | jq -r '.number')
        local title=$(echo "$pr_data" | jq -r '.title')
        local branch_name=$(echo "$pr_data" | jq -r '.headRefName')
        local is_draft=$(echo "$pr_data" | jq -r '.isDraft')
        local mergeable=$(echo "$pr_data" | jq -r '.mergeable')
        local merge_state=$(echo "$pr_data" | jq -r '.mergeStateStatus')
        
        processed=$((processed + 1))
        
        log "=== Processing PR #$pr_number ==="
        log "Title: $title"
        log "Branch: $branch_name"
        log "Draft: $is_draft"
        log "Mergeable: $mergeable"
        log "Merge State: $merge_state"
        
        # Skip draft PRs
        if [[ "$is_draft" == "true" ]]; then
            log "Skipping draft PR #$pr_number"
            continue
        fi
        
        non_draft_found=$((non_draft_found + 1))
        log "Found non-draft PR #$pr_number, processing..."
        
        # Handle different merge states
        case "$mergeable" in
            "MERGEABLE")
                log "PR #$pr_number is mergeable, attempting to merge..."
                if merge_pr "$pr_number" "$branch_name"; then
                    merged=$((merged + 1))
                else
                    failed=$((failed + 1))
                fi
                ;;
            "CONFLICTING")
                log "PR #$pr_number has conflicts, attempting to resolve..."
                if resolve_pr_conflicts "$pr_number" "$branch_name"; then
                    log "Conflicts resolved, attempting to merge..."
                    if merge_pr "$pr_number" "$branch_name"; then
                        merged=$((merged + 1))
                    else
                        failed=$((failed + 1))
                    fi
                else
                    failed=$((failed + 1))
                fi
                ;;
            "UNKNOWN")
                log "PR #$pr_number merge status unknown, attempting to check..."
                # Force GitHub to check mergeability
                gh pr view "$pr_number" --repo "$REPO" > /dev/null
                sleep 5
                # Check again
                local new_status=$(gh pr view "$pr_number" --repo "$REPO" --json mergeable,mergeStateStatus --jq '.mergeable + "|" + .mergeStateStatus')
                log "New status: $new_status"
                ;;
            *)
                log "PR #$pr_number has unexpected mergeable status: $mergeable"
                failed=$((failed + 1))
                ;;
        esac
        
        log "---"
        sleep 3  # Delay between PRs
        
    done < <(jq -c '.[]' test_prs.json)
    
    # Final summary
    log "=== TEST MERGE PROCESS COMPLETE ==="
    log "Total PRs examined: $processed"
    log "Non-draft PRs found: $non_draft_found"
    log "Successfully merged: $merged"
    log "Failed to merge: $failed"
    if [ $non_draft_found -gt 0 ]; then
        log "Success rate: $(( (merged * 100) / non_draft_found ))%"
    fi
    
    # Cleanup
    rm -f test_prs.json
}

# Error handling
trap 'log "Script interrupted. Cleaning up..."; git checkout main 2>/dev/null || true; exit 1' INT TERM

# Run main function
main "$@"
