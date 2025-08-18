# GitHub Actions Workflow Testing Guide

This guide provides comprehensive instructions for testing and validating all GitHub Actions workflows in this repository.

## 🎯 Overview

The repository contains **227 GitHub Actions workflows** that need to be tested systematically. This guide provides tools and strategies to:

1. **Validate workflow syntax and structure**
2. **Test workflow execution**
3. **Track testing progress**
4. **Fix any issues found**

## 🛠️ Tools Available

### 1. Workflow Health Checker
```bash
node automation/check-workflow-health.cjs
```
- Quick health check for common workflow issues
- Identifies missing permissions, concurrency settings, etc.

### 2. Local Workflow Validator
```bash
node scripts/test-workflows-locally.cjs
```
- Comprehensive validation of all workflows
- Checks for syntax errors, security issues, and best practices
- Generates detailed reports

### 3. Workflow Testing Plan Generator
```bash
node scripts/workflow-testing-plan.cjs
```
- Categorizes workflows by priority (Critical → High → Medium → Low)
- Provides testing instructions for each workflow
- Generates testing schedule and checklist

### 4. Workflow Testing Tracker
```bash
node scripts/workflow-testing-tracker.cjs
```
- Tracks testing progress for all workflows
- Provides step-by-step testing instructions
- Manages workflow status updates

## 🚀 Getting Started

### Step 1: Validate All Workflows
Before testing, ensure all workflows are syntactically correct:

```bash
# Install required dependencies
npm install js-yaml

# Run comprehensive validation
node scripts/test-workflows-locally.cjs
```

This will identify any workflows with issues that need fixing before testing.

### Step 2: Generate Testing Plan
Create a prioritized testing strategy:

```bash
node scripts/workflow-testing-plan.cjs
```

This categorizes workflows by importance and provides testing instructions.

### Step 3: Start Testing with Tracker
Use the testing tracker to manage the testing process:

```bash
# Show current status
node scripts/workflow-testing-tracker.cjs

# Get testing instructions for a specific workflow
node scripts/workflow-testing-tracker.cjs test <workflow-name>

# Update workflow status after testing
node scripts/workflow-testing-tracker.cjs update <workflow-name> <status> [notes]
```

## 📋 Testing Process

### Phase 1: Critical Workflows (Day 1-2)
Test these workflows first as they are essential for the system:

- `ci.yml` - Continuous Integration
- `test.yml` - Test Runner
- `security.yml` - Security Checks
- `playwright-smoke.yml` - E2E Tests
- `test-suite.yml` - Comprehensive Testing

### Phase 2: High Priority Workflows (Day 3-4)
Core automation and management workflows:

- `workflow-manager.yml` - Workflow Management
- `workflow-validator.yml` - Workflow Validation
- `performance-monitoring.yml` - Performance Monitoring
- `release-deploy.yml` - Release Management

### Phase 3: Medium Priority Workflows (Day 5-6)
Quality and monitoring workflows:

- `security-audit.yml` - Security Auditing
- `performance-audit.yml` - Performance Auditing
- `seo-audit.yml` - SEO Auditing
- `gitleaks.yml` - Secret Scanning

### Phase 4: Low Priority Workflows (Day 7+)
Marketing, maintenance, and utility workflows:

- `marketing-daily.yml` - Daily Marketing Tasks
- `maintenance.yml` - System Maintenance
- `cleanup.yml` - Cleanup Operations

## 🔍 Manual Testing Instructions

For each workflow, follow these steps:

1. **Go to GitHub repository → Actions tab**
2. **Select the workflow from the left sidebar**
3. **Click 'Run workflow' button**
4. **Select branch (usually 'main') and click 'Run workflow'**
5. **Monitor execution in real-time**
6. **Check for any errors or warnings**
7. **Verify artifacts or outputs if any**

## 📊 Tracking Progress

### View Current Status
```bash
node scripts/workflow-testing-tracker.cjs
```

### Update Workflow Status
```bash
# Mark workflow as passed
node scripts/workflow-testing-tracker.cjs update ci.yml passed "All tests passed successfully"

# Mark workflow as failed
node scripts/workflow-testing-tracker.cjs update ci.yml failed "Build timeout after 15 minutes"

# Mark workflow as skipped
node scripts/workflow-testing-tracker.cjs update ci.yml skipped "Not applicable for current environment"
```

### Reset Progress (if needed)
```bash
node scripts/workflow-testing-tracker.cjs reset
```

## 🚨 Common Issues and Fixes

### Permission Issues
If a workflow has `contents: write` permission, it should also have `pull-requests: write`:

```yaml
permissions:
  contents: write
  pull-requests: write  # Add this line
  actions: read
```

### Missing Timeouts
Add timeout protection to prevent hanging workflows:

```yaml
jobs:
  main:
    timeout-minutes: 30  # Add this line
```

### Missing Concurrency
Add concurrency settings to prevent race conditions:

```yaml
concurrency:
  group: "workflow-name"
  cancel-in-progress: true
```

## 📈 Success Metrics

Track these metrics during testing:

- **Completion Rate**: Percentage of workflows tested
- **Success Rate**: Percentage of workflows that passed
- **Average Execution Time**: Performance baseline
- **Error Patterns**: Common failure modes

## 🔧 Troubleshooting

### Workflow Won't Start
- Check if workflow has `workflow_dispatch: {}` for manual triggering
- Verify branch selection matches workflow configuration
- Ensure you have appropriate repository permissions

### Workflow Fails
- Check the Actions tab for detailed error logs
- Look for specific step failures
- Verify environment variables and secrets are set
- Check for dependency or version compatibility issues

### Workflow Hangs
- Check timeout settings
- Look for infinite loops or blocking operations
- Verify resource availability (memory, CPU)

## 📝 Reporting

After completing the testing process:

1. **Generate final report** using the testing tracker
2. **Document any issues** found and their resolutions
3. **Share results** with the development team
4. **Update workflow configurations** based on findings
5. **Create maintenance schedule** for regular re-testing

## 🎉 Completion Checklist

- [ ] All 227 workflows validated locally
- [ ] All critical workflows tested and working
- [ ] All high priority workflows tested and working
- [ ] All medium priority workflows tested and working
- [ ] All low priority workflows tested and working
- [ ] All issues documented and resolved
- [ ] Final testing report generated
- [ ] Team notified of completion

## 📞 Support

If you encounter issues during testing:

1. Check the workflow logs in GitHub Actions
2. Review the local validation reports
3. Consult the workflow configuration files
4. Check for similar issues in the repository
5. Create an issue with detailed error information

## 🔄 Maintenance

After initial testing, establish a regular testing schedule:

- **Weekly**: Test critical workflows
- **Monthly**: Test high priority workflows
- **Quarterly**: Test all workflows
- **On Changes**: Test modified workflows

This ensures workflows remain functional as the codebase evolves.

---

**Happy Testing! 🚀**

Remember: Systematic testing leads to reliable automation. Take your time, document everything, and don't hesitate to fix issues as you find them.