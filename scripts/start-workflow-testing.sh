#!/bin/bash

# Quick Start Script for GitHub Actions Workflow Testing
# This script initializes the workflow testing process

echo "🚀 GitHub Actions Workflow Testing - Quick Start"
echo "================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -d ".github/workflows" ]; then
    echo -e "${RED}❌ Error: No .github/workflows directory found${NC}"
    echo "Please run this script from the repository root directory."
    exit 1
fi

echo -e "${BLUE}📁 Found .github/workflows directory${NC}"
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js is not installed${NC}"
    echo "Please install Node.js to continue."
    exit 1
fi

echo -e "${GREEN}✅ Node.js is available${NC}"
echo ""

# Check if js-yaml is installed
if ! node -e "require('js-yaml')" &> /dev/null; then
    echo -e "${YELLOW}⚠️  Installing js-yaml dependency...${NC}"
    npm install js-yaml
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install js-yaml${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ js-yaml installed successfully${NC}"
else
    echo -e "${GREEN}✅ js-yaml is already installed${NC}"
fi

echo ""

# Step 1: Validate all workflows
echo -e "${BLUE}🔍 Step 1: Validating all workflows...${NC}"
node scripts/test-workflows-locally.cjs

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ All workflows are valid and ready for testing!${NC}"
else
    echo -e "${RED}❌ Some workflows have issues that need fixing before testing${NC}"
    echo "Please fix the identified issues and run this script again."
    exit 1
fi

echo ""

# Step 2: Generate testing plan
echo -e "${BLUE}📋 Step 2: Generating testing plan...${NC}"
node scripts/workflow-testing-plan.cjs

echo ""

# Step 3: Initialize testing tracker
echo -e "${BLUE}📊 Step 3: Initializing testing tracker...${NC}"
node scripts/workflow-testing-tracker.cjs

echo ""

# Step 4: Show next steps
echo -e "${GREEN}🎉 Setup Complete! Here's what to do next:${NC}"
echo ""
echo -e "${BLUE}1. Start with critical workflows:${NC}"
echo "   node scripts/workflow-testing-tracker.cjs test ci.yml"
echo ""
echo -e "${BLUE}2. After testing each workflow, update its status:${NC}"
echo "   node scripts/workflow-testing-tracker.cjs update ci.yml passed 'All tests passed'"
echo ""
echo -e "${BLUE}3. Check progress anytime:${NC}"
echo "   node scripts/workflow-testing-tracker.cjs"
echo ""
echo -e "${BLUE}4. View detailed testing plan:${NC}"
echo "   node scripts/workflow-testing-plan.cjs"
echo ""

# Create a simple testing checklist
echo -e "${YELLOW}📝 Quick Testing Checklist:${NC}"
echo "☐ Go to GitHub repository → Actions tab"
echo "☐ Select workflow from left sidebar"
echo "☐ Click 'Run workflow' button"
echo "☐ Select branch (usually 'main')"
echo "☐ Click 'Run workflow'"
echo "☐ Monitor execution in real-time"
echo "☐ Check for errors or warnings"
echo "☐ Verify artifacts/outputs"
echo "☐ Update status using the tracker"
echo ""

echo -e "${GREEN}🚀 You're ready to start testing workflows!${NC}"
echo "Start with the critical workflows and work your way down the priority list."
echo ""
echo -e "${BLUE}For detailed instructions, see: WORKFLOW_TESTING_README.md${NC}"