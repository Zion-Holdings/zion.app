# GitHub Actions Workflows

This directory contains the automated CI/CD workflows for the Zion.app project.

## 🚀 Core Workflows

### 1. **CI** (`ci.yml`)
- **Trigger**: Push to main/develop, PRs, manual dispatch
- **Purpose**: Continuous integration with build, test, and security checks
- **Jobs**: 
  - Build and test
  - Security scan
- **Frequency**: On every push/PR

### 2. **Test Suite** (`test.yml`)
- **Trigger**: Push to main/develop, PRs, manual dispatch, daily at 2 AM UTC
- **Purpose**: Comprehensive testing including Playwright tests
- **Jobs**:
  - Run tests
  - Code quality checks (lint, type-check)
- **Frequency**: On every push/PR + daily

### 3. **Playwright Smoke Tests** (`playwright-smoke.yml`)
- **Trigger**: Push to main/develop, PRs, manual dispatch, daily at 4 AM UTC
- **Purpose**: Critical smoke tests for core functionality
- **Jobs**: Smoke test execution
- **Frequency**: On every push/PR + daily

### 4. **Deploy** (`deploy.yml`)
- **Trigger**: Push to main, manual dispatch, after CI/Test completion
- **Purpose**: Production deployment to Netlify
- **Jobs**: Build and deploy
- **Frequency**: On main branch push + manual

### 5. **Security** (`security.yml`)
- **Trigger**: Push to main/develop, PRs, manual dispatch, daily at 6 AM UTC
- **Purpose**: Security audits and vulnerability scanning
- **Jobs**:
  - Security audit
  - Dependency check
- **Frequency**: On every push/PR + daily

### 6. **Dependency Maintenance** (`dependency-maintenance.yml`)
- **Trigger**: Manual dispatch, weekly on Monday at 8 AM UTC
- **Purpose**: Automated dependency updates and security patches
- **Jobs**:
  - Check dependencies
  - Update dependencies
  - Create PR for updates
- **Frequency**: Weekly + manual

### 7. **Performance Monitoring** (`performance-monitoring.yml`)
- **Trigger**: Push to main/develop, PRs, manual dispatch, daily at 10 AM UTC
- **Purpose**: Performance monitoring and optimization
- **Jobs**:
  - Lighthouse audit
  - Bundle analysis
  - Performance tests
- **Frequency**: On every push/PR + daily

### 8. **Release** (`release.yml`)
- **Trigger**: Git tags (v*), manual dispatch
- **Purpose**: Automated releases and deployments
- **Jobs**: Create release, build artifacts, deploy
- **Frequency**: On version tags + manual

## 🔧 Maintenance Workflows

### 9. **Maintenance** (`maintenance.yml`)
- **Purpose**: System maintenance and cleanup tasks
- **Frequency**: Scheduled maintenance

### 10. **Workflow Manager** (`workflow-manager.yml`)
- **Purpose**: Manage and orchestrate other workflows
- **Frequency**: As needed

## 📊 Workflow Status

All workflows are configured with:
- ✅ Proper permissions
- ✅ Timeout limits (10-30 minutes)
- ✅ Concurrency controls
- ✅ Error handling
- ✅ Artifact retention
- ✅ Comprehensive logging

## 🚨 Required Secrets

The following secrets must be configured in your GitHub repository:

- `NETLIFY_AUTH_TOKEN`: Netlify authentication token
- `NETLIFY_SITE_ID`: Netlify site ID
- `LHCI_GITHUB_APP_TOKEN`: Lighthouse CI GitHub app token (optional)

## 📈 Monitoring

- **Workflow runs**: View in GitHub Actions tab
- **Artifacts**: Download test results, build outputs, and reports
- **Notifications**: GitHub issues and comments for important events

## 🛠️ Customization

Each workflow can be customized by:
- Modifying trigger conditions
- Adjusting timeout values
- Adding/removing jobs
- Changing runner environments
- Updating artifact retention

## 🔄 Workflow Dependencies

```
CI → Deploy (on success)
Test Suite → Deploy (on success)
Security → CI (parallel)
Performance → CI (parallel)
```

## 📝 Best Practices

1. **Always test workflows locally** before pushing
2. **Use semantic versioning** for releases
3. **Monitor workflow performance** and optimize as needed
4. **Keep secrets secure** and rotate regularly
5. **Document changes** in workflow files
6. **Use concurrency controls** to prevent conflicts
7. **Set appropriate timeouts** for each job
8. **Handle failures gracefully** with proper error reporting
