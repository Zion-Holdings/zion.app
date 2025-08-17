#!/bin/bash

# Emergency Recovery Script for GitHub Actions Workflows
# This script provides immediate steps to start recovery

echo "🚨 EMERGENCY RECOVERY: GitHub Actions Workflows"
echo "================================================"
echo ""

# Check current status
echo "📊 Current Status Check:"
echo "========================"
if [ -f "workflow-health-report.json" ]; then
    TOTAL=$(grep -o '"total_workflows": [0-9]*' workflow-health-report.json | grep -o '[0-9]*')
    BROKEN=$(grep -o '"broken_workflows": [0-9]*' workflow-health-report.json | grep -o '[0-9]*')
    HEALTHY=$(grep -o '"healthy_workflows": [0-9]*' workflow-health-report.json | grep -o '[0-9]*')
    
    echo "Total Workflows: $TOTAL"
    echo "Broken Workflows: $BROKEN"
    echo "Healthy Workflows: $HEALTHY"
    echo "Health Score: $(( ($HEALTHY * 100) / $TOTAL ))%"
else
    echo "❌ No health report found. Run the auto-heal engine first."
fi

echo ""
echo "🛠️  IMMEDIATE ACTION REQUIRED"
echo "============================="
echo ""

# Check if auto-heal system is ready
if [ -f "workflow-auto-heal-engine.py" ]; then
    echo "✅ Auto-heal engine found"
else
    echo "❌ Auto-heal engine missing"
fi

if [ -f ".github/workflows/enhanced-auto-heal.yml" ]; then
    echo "✅ Enhanced auto-heal workflow found"
else
    echo "❌ Enhanced auto-heal workflow missing"
fi

echo ""
echo "🚀 RECOVERY STEPS"
echo "================="
echo ""

echo "1. 🚨 EMERGENCY STOP (Next 5 minutes):"
echo "   - Disable all automated workflows in GitHub"
echo "   - Stop any running workflow executions"
echo "   - Prevent further damage to the system"
echo ""

echo "2. 🔧 IMMEDIATE FIXES (Next 2 hours):"
echo "   - Run: python3 workflow-auto-heal-engine.py"
echo "   - Review the generated health report"
echo "   - Begin manual fixes on critical workflows"
echo ""

echo "3. 📋 PRIORITY WORKFLOWS TO FIX FIRST:"
echo "   - deploy.yml (if exists)"
echo "   - test.yml (if exists)"
echo "   - security-scan.yml (if exists)"
echo "   - Any workflow critical to your business"
echo ""

echo "4. 🚀 DEPLOY AUTO-HEAL SYSTEM:"
echo "   - git add .github/workflows/enhanced-auto-heal.yml"
echo "   - git commit -m 'feat: add emergency auto-heal system'"
echo "   - git push"
echo ""

echo "5. 📊 MONITOR PROGRESS:"
echo "   - Check workflow health every 4 hours"
echo "   - Run auto-heal engine daily"
echo "   - Track health score improvements"
echo ""

echo ""
echo "🔧 QUICK FIX TEMPLATE"
echo "====================="
echo ""

cat << 'EOF'
For each broken workflow, use this structure:

name: [Workflow Name]

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'

permissions:
  contents: write
  actions: read

concurrency:
  group: "github.workflow-${{ github.ref }}"
  cancel-in-progress: true

jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci --no-audit --no-fund

      - name: [Specific Task]
        run: |
          # Add your workflow logic here
          echo "Executing workflow task..."

      - name: Complete workflow
        run: |
          echo "Workflow completed successfully"
EOF

echo ""
echo "📞 GETTING HELP"
echo "==============="
echo ""

echo "• Run auto-heal engine: python3 workflow-auto-heal-engine.py"
echo "• Check health reports: workflow-health-report.json"
echo "• Review analysis: GITHUB_ACTIONS_FIX_RECOMMENDATIONS.md"
echo "• Use validation script: ./validate-workflows.sh"
echo ""

echo "⚠️  CRITICAL REMINDER"
echo "===================="
echo "Your GitHub Actions system is 100% broken."
echo "Immediate action is required to restore functionality."
echo "Start with the emergency stop, then begin systematic recovery."
echo ""

# Offer to run the auto-heal engine
echo "Would you like to run the auto-heal engine now? (y/n)"
read -r response
if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 Starting auto-heal engine..."
    python3 workflow-auto-heal-engine.py
else
    echo ""
    echo "Manual recovery steps provided above."
    echo "Run the auto-heal engine when ready: python3 workflow-auto-heal-engine.py"
fi

echo ""
echo "🆘 Emergency recovery script completed."
echo "Follow the steps above to begin recovery immediately."