#!/bin/bash

set -euo pipefail

# Extract GitHub token and repository info from git remote
GITHUB_TOKEN=$(git remote get-url origin | sed -n 's/.*x-access-token:\([^@]*\)@.*/\1/p')
REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Could not extract GitHub token from git remote"
    exit 1
fi

echo "🔑 Using GitHub token: ${GITHUB_TOKEN:0:8}..."
echo "📦 Repository: $REPO_OWNER/$REPO_NAME"
echo ""

# Function to trigger a workflow
trigger_workflow() {
    local workflow_file="$1"
    local workflow_name=$(basename "$workflow_file" .yml)
    
    echo "🚀 Triggering workflow: $workflow_name"
    
    # Check if workflow has workflow_dispatch
    if ! grep -q "workflow_dispatch" "$workflow_file"; then
        echo "   ⚠️  Skipping $workflow_name (no manual trigger)"
        return 0
    fi
    
    # Trigger the workflow
    local response=$(curl -s -w "\n%{http_code}" \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        -X POST \
        "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/workflows/$workflow_name/dispatches" \
        -d '{"ref":"main"}')
    
    local http_code=$(echo "$response" | tail -n1)
    local response_body=$(echo "$response" | head -n -1)
    
    if [ "$http_code" = "204" ]; then
        echo "   ✅ Successfully triggered $workflow_name"
        return 0
    else
        echo "   ❌ Failed to trigger $workflow_name (HTTP $http_code)"
        echo "   Response: $response_body"
        return 1
    fi
}

# Function to wait for workflow completion and check status
wait_for_workflow() {
    local workflow_name="$1"
    local max_wait=300  # 5 minutes
    local wait_time=0
    local interval=10
    
    echo "   ⏳ Waiting for $workflow_name to complete..."
    
    while [ $wait_time -lt $max_wait ]; do
        local response=$(curl -s \
            -H "Authorization: token $GITHUB_TOKEN" \
            -H "Accept: application/vnd.github.v3+json" \
            "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/workflows/$workflow_name/runs?per_page=1&status=completed")
        
        local status=$(echo "$response" | jq -r '.workflow_runs[0].conclusion // "in_progress"')
        
        if [ "$status" != "in_progress" ]; then
            if [ "$status" = "success" ]; then
                echo "   ✅ $workflow_name completed successfully"
                return 0
            elif [ "$status" = "failure" ]; then
                echo "   ❌ $workflow_name failed"
                return 1
            elif [ "$status" = "cancelled" ]; then
                echo "   ⚠️  $workflow_name was cancelled"
                return 0
            else
                echo "   ℹ️  $workflow_name completed with status: $status"
                return 0
            fi
        fi
        
        sleep $interval
        wait_time=$((wait_time + interval))
        echo "   ⏳ Still waiting... ($wait_time/$max_wait seconds)"
    done
    
    echo "   ⏰ Timeout waiting for $workflow_name"
    return 1
}

# Main execution
echo "🔍 Finding all workflow files..."
workflow_files=($(find .github/workflows -name "*.yml" -o -name "*.yaml" | sort))

echo "📋 Found ${#workflow_files[@]} workflow files"
echo ""

# Track results
successful_workflows=()
failed_workflows=()
skipped_workflows=()

# Process each workflow
for workflow_file in "${workflow_files[@]}"; do
    echo "=========================================="
    echo "Processing: $workflow_file"
    echo "=========================================="
    
    if trigger_workflow "$workflow_file"; then
        workflow_name=$(basename "$workflow_file" .yml)
        
        # Wait for completion and check status
        if wait_for_workflow "$workflow_name"; then
            successful_workflows+=("$workflow_name")
        else
            failed_workflows+=("$workflow_name")
        fi
        
        # Small delay between workflows to avoid overwhelming GitHub
        sleep 5
    else
        workflow_name=$(basename "$workflow_file" .yml)
        skipped_workflows+=("$workflow_name")
    fi
    
    echo ""
done

# Summary
echo "=========================================="
echo "🎯 WORKFLOW TESTING SUMMARY"
echo "=========================================="
echo "✅ Successful: ${#successful_workflows[@]}"
echo "❌ Failed: ${#failed_workflows[@]}"
echo "⏭️  Skipped: ${#skipped_workflows[@]}"
echo ""

if [ ${#successful_workflows[@]} -gt 0 ]; then
    echo "✅ Successful workflows:"
    for workflow in "${successful_workflows[@]}"; do
        echo "   - $workflow"
    done
    echo ""
fi

if [ ${#failed_workflows[@]} -gt 0 ]; then
    echo "❌ Failed workflows:"
    for workflow in "${failed_workflows[@]}"; do
        echo "   - $workflow"
    done
    echo ""
fi

if [ ${#skipped_workflows[@]} -gt 0 ]; then
    echo "⏭️  Skipped workflows:"
    for workflow in "${skipped_workflows[@]}"; do
        echo "   - $workflow"
    done
    echo ""
fi

# Exit with error if any workflows failed
if [ ${#failed_workflows[@]} -gt 0 ]; then
    echo "🚨 Some workflows failed. Please review and fix them."
    exit 1
else
    echo "🎉 All tested workflows completed successfully!"
    exit 0
fi