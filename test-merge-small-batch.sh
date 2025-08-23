#!/bin/bash

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