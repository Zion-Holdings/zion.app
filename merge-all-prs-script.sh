#!/bin/bash

# Script to merge all open PRs by resolving conflicts and merging them systematically
# This script will handle the 340+ open PRs in the Zion-Holdings/zion.app repository

set -e

REPO="Zion-Holdings/zion.app"
LOG_FILE="merge-all-prs-$(date +%Y%m%d-%H%M%S).log"
MAX_PR_BATCH=10
CONFLICT_RESOLUTION_TIMEOUT=300  # 5 minutes per PR

echo "Starting comprehensive PR merge process for $REPO at $(date)" | tee -a "$LOG_FILE"
echo "Log file: $LOG_FILE" | tee -a "$LOG_FILE"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to check if a PR is mergeable
check_pr_mergeable() {
    local pr_number=$1
    gh pr view "$pr_number" --repo "$REPO" --json mergeable,mergeStateStatus,isDraft --jq '.mergeable + "|" + .mergeStateStatus + "|" + (.isDraft | tostring)'
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

# Main processing loop
main() {
    local total_prs=0
    local merged_prs=0
    local failed_prs=0
    local skipped_drafts=0
    
    # Get all open PRs
    log "Fetching all open PRs..."
    gh pr list --repo "$REPO" --state open --json number,title,headRefName,mergeable,mergeStateStatus,reviewDecision,isDraft > all_prs.json
    
    # Process PRs in batches
    while IFS= read -r pr_data; do
        local pr_number=$(echo "$pr_data" | jq -r '.number')
        local title=$(echo "$pr_data" | jq -r '.title')
        local branch_name=$(echo "$pr_data" | jq -r '.headRefName')
        local is_draft=$(echo "$pr_data" | jq -r '.isDraft')
        local mergeable=$(echo "$pr_data" | jq -r '.mergeable')
        local merge_state=$(echo "$pr_data" | jq -r '.mergeStateStatus')
        
        total_prs=$((total_prs + 1))
        
        log "Processing PR #$pr_number: $title"
        log "  Branch: $branch_name"
        log "  Draft: $is_draft"
        log "  Mergeable: $mergeable"
        log "  Merge State: $merge_state"
        
        # Skip draft PRs
        if [[ "$is_draft" == "true" ]]; then
            log "  Skipping draft PR #$pr_number"
            skipped_drafts=$((skipped_drafts + 1))
            continue
        fi
        
        # Handle different merge states
        case "$mergeable" in
            "MERGEABLE")
                log "  PR #$pr_number is mergeable, attempting to merge..."
                if merge_pr "$pr_number" "$branch_name"; then
                    merged_prs=$((merged_prs + 1))
                else
                    failed_prs=$((failed_prs + 1))
                fi
                ;;
            "CONFLICTING")
                log "  PR #$pr_number has conflicts, attempting to resolve..."
                if resolve_pr_conflicts "$pr_number" "$branch_name"; then
                    log "  Conflicts resolved, attempting to merge..."
                    if merge_pr "$pr_number" "$branch_name"; then
                        merged_prs=$((merged_prs + 1))
                    else
                        failed_prs=$((failed_prs + 1))
                    fi
                else
                    failed_prs=$((failed_prs + 1))
                fi
                ;;
            "UNKNOWN")
                log "  PR #$pr_number merge status unknown, checking..."
                # Force GitHub to check mergeability
                gh pr view "$pr_number" --repo "$REPO" > /dev/null
                sleep 5
                # Check again
                local new_status=$(check_pr_mergeable "$pr_number")
                log "  New status: $new_status"
                ;;
            *)
                log "  PR #$pr_number has unexpected mergeable status: $mergeable"
                failed_prs=$((failed_prs + 1))
                ;;
        esac
        
        # Add delay between PRs to avoid rate limiting
        sleep 2
        
        # Log progress
        if (( total_prs % 10 == 0 )); then
            log "Progress: Processed $total_prs PRs, Merged: $merged_prs, Failed: $failed_prs, Skipped Drafts: $skipped_drafts"
        fi
        
    done < <(jq -c '.[]' all_prs.json)
    
    # Final summary
    log "=== MERGE PROCESS COMPLETE ==="
    log "Total PRs processed: $total_prs"
    log "Successfully merged: $merged_prs"
    log "Failed to merge: $failed_prs"
    log "Skipped drafts: $skipped_drafts"
    log "Success rate: $(( (merged_prs * 100) / total_prs ))%"
    
    # Cleanup
    rm -f all_prs.json
}

# Error handling
trap 'log "Script interrupted. Cleaning up..."; git checkout main 2>/dev/null || true; exit 1' INT TERM

# Run main function
main "$@"