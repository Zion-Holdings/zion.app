# GitHub Actions Workflow Repair Guide

## 🚨 Current Status

**Critical Issue Detected**: 167 out of 192 GitHub Actions workflows have YAML syntax errors and structural issues.

- **Total Workflows**: 192
- **Broken Workflows**: 167 (87%)
- **Working Workflows**: 25 (13%)
- **Health Score**: 13%

## 🔍 Common Issues Identified

### 1. Missing `runs-on:` Specification
**Problem**: Jobs don't specify which runner to use
```yaml
# ❌ BROKEN
jobs:
  main:
    name: Main Job
      - name: Checkout repository  # Missing runs-on and steps

# ✅ CORRECT
jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
```

### 2. Missing `steps:` Section
**Problem**: Steps are not properly nested under a steps section
```yaml
# ❌ BROKEN
jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
      - name: Checkout repository  # Missing steps: section

# ✅ CORRECT
jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
```

### 3. Incorrect Indentation
**Problem**: Steps and their properties have wrong indentation levels
```yaml
# ❌ BROKEN
      - name: Setup Node.js
        uses: actions/setup-node@v4
          node-version: '20'  # Wrong indentation

# ✅ CORRECT
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
```

### 4. Missing Structural Sections
**Problem**: Workflows lack essential sections like permissions and concurrency
```yaml
# ❌ BROKEN
on:
  workflow_dispatch: {}
jobs:
  main:
    runs-on: ubuntu-latest

# ✅ CORRECT
on:
  workflow_dispatch: {}

permissions:
  contents: read
  actions: read

concurrency:
  group: "github.workflow-${{ github.ref }}"
  cancel-in-progress: true

jobs:
  main:
    runs-on: ubuntu-latest
```

## 🛠️ Solutions

### Automated Repair

#### 1. GitHub Actions Auto-Healer
A new workflow has been created that automatically detects and fixes broken workflows:

- **File**: `.github/workflows/workflow-auto-healer.yml`
- **Schedule**: Runs every 6 hours
- **Triggers**: 
  - Manual dispatch
  - After CI failures
  - Scheduled maintenance

#### 2. Local Python Script
A Python script for local workflow repair:

```bash
# Install dependencies
pip install pyyaml

# Run the repair script
python3 scripts/fix-workflows.py
```

### Manual Repair

#### Step-by-Step Process

1. **Identify the Issue**
   ```bash
   # Check YAML validity
   python3 -c "import yaml; yaml.safe_load(open('.github/workflows/ci.yml'))"
   ```

2. **Create Backup**
   ```bash
   cp .github/workflows/ci.yml .github/workflows/ci.yml.backup
   ```

3. **Fix the Structure**
   - Add missing `runs-on: ubuntu-latest`
   - Add missing `steps:` section
   - Fix indentation
   - Add missing permissions and concurrency

4. **Validate the Fix**
   ```bash
   python3 -c "import yaml; yaml.safe_load(open('.github/workflows/ci.yml'))"
   ```

## 📋 Workflow Template

Use this template for new workflows:

```yaml
name: Workflow Name

on:
  workflow_dispatch: {}
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

permissions:
  contents: read
  actions: read
  pull-requests: read

concurrency:
  group: "github.workflow-${{ github.ref }}"
  cancel-in-progress: true

jobs:
  main:
    name: Main Job
    runs-on: ubuntu-latest
    timeout-minutes: 20
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

      - name: Run tests
        run: npm test

      - name: Build project
        run: npm run build
```

## 🔄 Auto-Healing System

### Components

1. **Detection Job**: Scans all workflows for YAML errors
2. **Repair Job**: Automatically fixes broken workflows
3. **Monitoring Job**: Generates health reports and metrics

### Features

- **Automatic Detection**: Finds broken workflows every 6 hours
- **Intelligent Repair**: Fixes common structural issues
- **Validation**: Ensures fixes are valid before committing
- **Pull Request Creation**: Creates PRs with fixes for review
- **Health Monitoring**: Tracks workflow health over time
- **Issue Creation**: Alerts when workflows are broken

### Triggers

- **Scheduled**: Every 6 hours
- **Manual**: Force repair all workflows
- **Reactive**: After CI workflow failures
- **Monitoring**: Continuous health checks

## 📊 Health Monitoring

### Metrics Tracked

- Total workflow count
- Working workflow count
- Broken workflow count
- Health percentage
- Error types and frequencies

### Reports Generated

- **Workflow Health Report**: Markdown report with current status
- **Issue Alerts**: GitHub issues for broken workflows
- **Pull Request Fixes**: Automated fixes with explanations
- **Artifact Reports**: Downloadable health reports

## 🚀 Getting Started

### Immediate Actions

1. **Run the Auto-Healer**
   ```bash
   # Trigger manually via GitHub Actions
   # Or wait for scheduled run (every 6 hours)
   ```

2. **Review Generated PRs**
   - Check the fixes
   - Test the workflows
   - Merge if satisfied

3. **Monitor Health**
   - Check health reports
   - Review any remaining issues
   - Validate fixes

### Long-term Maintenance

1. **Regular Health Checks**
   - Monitor auto-healer reports
   - Address any persistent issues
   - Update templates as needed

2. **Prevention**
   - Use workflow templates
   - Validate YAML before committing
   - Run local validation scripts

3. **Continuous Improvement**
   - Enhance auto-healing algorithms
   - Add new detection patterns
   - Improve error reporting

## 🔧 Troubleshooting

### Common Problems

1. **Workflow Still Broken After Fix**
   - Check backup files for original content
   - Review error messages
   - Manually inspect the file structure

2. **Auto-Healer Not Working**
   - Check workflow permissions
   - Verify Python dependencies
   - Review workflow logs

3. **Partial Fixes**
   - Some complex issues may require manual intervention
   - Review the specific error patterns
   - Apply targeted fixes

### Getting Help

1. **Check the Logs**
   - Review auto-healer workflow runs
   - Look for specific error messages
   - Check generated reports

2. **Manual Validation**
   - Use the Python script locally
   - Validate individual files
   - Compare with working examples

3. **Create Issues**
   - Report persistent problems
   - Request new detection patterns
   - Suggest improvements

## 📈 Success Metrics

### Goals

- **Short-term**: Reduce broken workflows to <10%
- **Medium-term**: Achieve 95%+ workflow health
- **Long-term**: Maintain 99%+ workflow health

### KPIs

- Workflow health percentage
- Time to fix broken workflows
- Number of manual interventions needed
- Auto-healing success rate

## 🎯 Next Steps

1. **Immediate**: Run the auto-healer workflow
2. **Short-term**: Review and merge generated fixes
3. **Medium-term**: Monitor health and refine auto-healing
4. **Long-term**: Implement preventive measures

---

*This guide is automatically maintained by the Workflow Auto-Healer system*