#!/bin/bash

# GitHub Actions Workflow Trigger Script
# This script helps trigger workflows manually using GitHub CLI

echo "🚀 GitHub Actions Workflow Trigger"
echo "=================================="

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    echo "Then run: gh auth login"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
if [ -z "$REPO" ]; then
    echo "❌ Could not determine repository. Are you in a git repository?"
    exit 1
fi

echo "📁 Repository: $REPO"
echo ""

# List available workflows
echo "📋 Available Workflows:"
echo "1. 🚀 CI - Continuous Integration"
echo "2. 🚀 Deploy - Production Deployment"
echo "3. 🔧 Maintenance - Automated Maintenance Tasks"
echo "4. 🤖 Automation Factories - Run Autonomous Agents"
echo "5. 🧪 Test & Validation - Comprehensive Testing Suite"
echo ""

# Get user choice
read -p "Select workflow to trigger (1-5): " choice

case $choice in
    1)
        WORKFLOW="ci.yml"
        echo "🚀 Triggering CI workflow..."
        gh workflow run ci.yml
        ;;
    2)
        WORKFLOW="deploy.yml"
        echo "🚀 Triggering Deploy workflow..."
        gh workflow run deploy.yml
        ;;
    3)
        WORKFLOW="maintenance.yml"
        echo "🔧 Triggering Maintenance workflow..."
        gh workflow run maintenance.yml
        ;;
    4)
        WORKFLOW="automation-factories.yml"
        echo "🤖 Triggering Automation Factories workflow..."
        gh workflow run automation-factories.yml
        ;;
    5)
        WORKFLOW="test-validation.yml"
        echo "🧪 Triggering Test & Validation workflow..."
        gh workflow run test-validation.yml
        ;;
    *)
        echo "❌ Invalid choice. Please select 1-5."
        exit 1
        ;;
esac

echo ""
echo "✅ Workflow '$WORKFLOW' triggered successfully!"
echo "📊 View progress at: https://github.com/$REPO/actions"
echo ""
echo "💡 You can also trigger workflows with specific inputs:"
echo "   gh workflow run $WORKFLOW --field environment=staging"
echo "   gh workflow run $WORKFLOW --field task=dependencies"
echo "   gh workflow run $WORKFLOW --field test-type=unit"