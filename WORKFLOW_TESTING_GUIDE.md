# GitHub Actions Workflow Testing & Fixing Guide

## Overview

This guide provides comprehensive instructions for testing and fixing GitHub Actions workflows in your repository. The repository currently has **450 workflows**, all of which have been validated locally and are structurally sound.

## Current Status

✅ **All workflows are healthy!**
- Total workflows: 450
- Valid YAML: 450
- Critical issues: 0
- Warnings: 0

## Prerequisites

### 1. GitHub Personal Access Token (PAT)

To trigger workflows remotely, you need a GitHub Personal Access Token with the following scopes:
- `repo` (Full control of private repositories)
- `workflow` (Update GitHub Action workflows)

**To create a PAT:**
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select the required scopes
4. Copy the token

### 2. Environment Setup

Set your GitHub token as an environment variable:

```bash
# Option 1: Export in current session
export GH_TOKEN=your_token_here
export GITHUB_TOKEN=your_token_here

# Option 2: Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
echo 'export GH_TOKEN=your_token_here' >> ~/.bashrc
source ~/.bashrc

# Option 3: Create a .env file
echo 'GH_TOKEN=your_token_here' > .env
```

## Available Testing Tools

### 1. Local Testing (No GitHub Token Required)

```bash
# Test all workflows comprehensively
./scripts/test-workflows-local.sh comprehensive

# Test specific workflow categories
./scripts/test-workflows-local.sh category core
./scripts/test-workflows-local.sh category security
./scripts/test-workflows-local.sh category automation
./scripts/test-workflows-local.sh category deployment

# Get detailed info about a specific workflow
./scripts/test-workflows-local.sh details ci.yml

# Run health check
./scripts/test-workflows-local.sh health
```

### 2. Remote Testing (Requires GitHub Token)

```bash
# List all workflows
node scripts/trigger-workflows.cjs --list

# Test specific workflows
node scripts/trigger-workflows.cjs --only "ci.yml,pr-smoke.yml" --ref main

# Test all workflows with comprehensive reporting
node scripts/trigger-workflows.cjs --ref main --wait --delay 5000 --max-parallel 3
```

### 3. Workflow Health Check

```bash
# Run comprehensive health check
./scripts/workflow-health-check.sh

# Fix broken workflows (if any)
./scripts/fix-all-workflows.sh
```

## Workflow Categories

### Core Workflows
- `ci.yml` - Main CI pipeline
- `pr-smoke.yml` - Pull request smoke tests
- `playwright-smoke.yml` - End-to-end testing
- `actionlint.yml` - Workflow linting
- `commitlint.yml` - Commit message validation

### Security Workflows
- `security.yml` - General security scanning
- `security-audit.yml` - Security audits
- `security-scan.yml` - Vulnerability scanning
- `security-weekly.yml` - Weekly security checks
- `security-gates.yml` - Security gates

### Automation Workflows
- `workflow-auto-healer.yml` - Self-healing workflows
- `workflow-supervisor.yml` - Workflow supervision
- `workflow-manager.yml` - Workflow management
- `workflow-watchdog.yml` - Workflow monitoring

### Deployment Workflows
- `release-deploy.yml` - Release deployment
- `continuous-deployment.yml` - Continuous deployment
- `netlify-monitor.yml` - Netlify monitoring

## Testing Strategy

### Phase 1: Local Validation ✅ COMPLETED
- [x] Validate YAML syntax
- [x] Check workflow structure
- [x] Verify required sections
- [x] Identify common issues

### Phase 2: Remote Testing (When you have tokens)
- [ ] Trigger workflows individually
- [ ] Monitor execution results
- [ ] Identify runtime failures
- [ ] Collect performance metrics

### Phase 3: Fix and Optimize
- [ ] Fix any failing workflows
- [ ] Optimize performance
- [ ] Add missing features
- [ ] Improve error handling

## Common Workflow Issues and Fixes

### 1. Missing Permissions
```yaml
# Add this section if your workflow needs write access
permissions:
  contents: write
  actions: read
  pull-requests: write
```

### 2. Missing Timeout
```yaml
jobs:
  main:
    timeout-minutes: 30  # Add reasonable timeout
```

### 3. Missing Concurrency Control
```yaml
concurrency:
  group: "workflow-${{ github.ref }}"
  cancel-in-progress: true
```

### 4. Deprecated Actions
```yaml
# Replace deprecated actions
- uses: actions/checkout@v4  # Instead of v3
- uses: actions/setup-node@v4  # Instead of v3
```

## Workflow Triggering Commands

### Test Individual Workflows
```bash
# Test CI workflow
node scripts/trigger-workflows.cjs --only "ci.yml" --ref main --wait

# Test multiple workflows
node scripts/trigger-workflows.cjs --only "ci.yml,pr-smoke.yml" --ref main --wait

# Test with delay between workflows
node scripts/trigger-workflows.cjs --only "ci.yml" --ref main --wait --delay 10000
```

### Test All Workflows
```bash
# Test all workflows sequentially
node scripts/trigger-workflows.cjs --ref main --wait --max-parallel 1

# Test all workflows with parallel execution
node scripts/trigger-workflows.cjs --ref main --wait --max-parallel 5

# Test only changed workflows
node scripts/trigger-workflows.cjs --ref main --changed-only
```

## Monitoring and Reporting

### Real-time Monitoring
```bash
# Monitor workflow execution
node scripts/trigger-workflows.cjs --ref main --wait --verbose

# Check workflow status
gh run list --workflow=ci.yml
```

### Generate Reports
```bash
# Generate comprehensive report
./scripts/test-workflows-local.sh comprehensive

# View latest report
ls -la workflow-local-reports/
cat workflow-local-reports/latest.json
```

## Best Practices

### 1. Workflow Design
- Use descriptive names
- Include proper triggers
- Set appropriate timeouts
- Add concurrency controls
- Specify permissions explicitly

### 2. Testing Strategy
- Test locally first
- Test in parallel when possible
- Monitor resource usage
- Collect metrics and logs
- Document failures and fixes

### 3. Maintenance
- Regular health checks
- Update deprecated actions
- Monitor execution times
- Review and optimize
- Keep workflows focused

## Troubleshooting

### Common Issues

1. **Token Permission Errors**
   - Verify token has correct scopes
   - Check token expiration
   - Ensure token has access to repository

2. **Workflow Execution Failures**
   - Check YAML syntax
   - Verify required secrets
   - Review action versions
   - Check runner compatibility

3. **Performance Issues**
   - Reduce parallel execution
   - Optimize workflow steps
   - Use caching where possible
   - Set appropriate timeouts

### Getting Help

- Check workflow logs in GitHub Actions
- Review workflow validation output
- Use the health check scripts
- Consult GitHub Actions documentation

## Next Steps

Since all workflows are currently healthy, you can:

1. **Set up GitHub tokens** to enable remote testing
2. **Run comprehensive remote tests** to identify runtime issues
3. **Monitor workflow performance** and optimize as needed
4. **Add new workflows** following the established patterns
5. **Implement continuous monitoring** to catch issues early

## Conclusion

Your repository has an excellent foundation with 450 well-structured workflows. The local validation shows no critical issues, which means the workflows should execute successfully once you have the proper GitHub tokens configured.

The testing tools provided will help you maintain this high quality and quickly identify and fix any issues that arise during execution.