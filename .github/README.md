# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for the Zion.app project.

## Active Workflows

### 1. **CI** (`.github/workflows/ci.yml`)
- **Triggers**: Push to main/develop, PRs, manual dispatch
- **Purpose**: Main continuous integration pipeline
- **Jobs**: 
  - Test & Build: Runs linting, type checking, tests, and build
  - Security Scan: Runs security audit and security scanner
- **Schedule**: Runs on every push/PR

### 2. **Test Suite** (`.github/workflows/test.yml`)
- **Triggers**: Push to main/develop, PRs, manual dispatch, daily at 2 AM
- **Purpose**: Comprehensive testing with Playwright
- **Jobs**: Runs full test suite with proper application startup
- **Schedule**: Daily at 2 AM UTC

### 3. **Playwright Smoke Tests** (`.github/workflows/playwright-smoke.yml`)
- **Triggers**: Push to main/develop, PRs, manual dispatch, daily at 6 AM
- **Purpose**: Quick smoke tests for critical functionality
- **Jobs**: Runs smoke tests from `tests/smoke.spec.ts`
- **Schedule**: Daily at 6 AM UTC

### 4. **Deploy** (`.github/workflows/deploy.yml`)
- **Triggers**: Push to main branch, manual dispatch
- **Purpose**: Production deployment to Netlify
- **Jobs**: Builds and deploys the application
- **Environment**: Production (requires approval)

### 5. **Dependencies** (`.github/workflows/dependencies.yml`)
- **Triggers**: Weekly on Monday at 1 AM, manual dispatch
- **Purpose**: Automated dependency updates and security fixes
- **Jobs**: Updates packages, runs security audit, creates PR
- **Schedule**: Weekly on Monday at 1 AM UTC

### 6. **Cleanup** (`.github/workflows/cleanup.yml`)
- **Triggers**: Daily at 3 AM, manual dispatch
- **Purpose**: Repository maintenance and cleanup
- **Jobs**: Removes old files, cleans build artifacts, maintains git state
- **Schedule**: Daily at 3 AM UTC

## Workflow Features

### Concurrency Control
- Each workflow uses unique concurrency groups to prevent conflicts
- CI and test workflows cancel in-progress runs on new commits
- Deploy workflow allows multiple deployments to run

### Error Handling
- Security scans continue on errors to provide visibility
- Tests use `continue-on-error` where appropriate
- Proper timeout values prevent hanging workflows

### Artifact Management
- Test results and build artifacts are uploaded
- 7-day retention policy for most artifacts
- Screenshots and reports preserved for debugging

### Security
- Minimal required permissions for each workflow
- Security scanning integrated into CI pipeline
- Automated vulnerability detection and fixes

## Required Secrets

### For Deployment
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token
- `NETLIFY_SITE_ID`: Netlify site identifier

### For Dependencies
- `GITHUB_TOKEN`: Automatically provided by GitHub

## Local Testing

To test workflows locally:

```bash
# Install act (GitHub Actions local runner)
brew install act

# Run a specific workflow
act -W .github/workflows/ci.yml

# Run with specific event
act push -W .github/workflows/ci.yml
```

## Monitoring

### Workflow Health
- Check workflow run history in GitHub Actions tab
- Monitor success/failure rates
- Review artifact uploads and test results

### Performance Metrics
- Build times and test execution times
- Resource usage and timeout occurrences
- Dependency update frequency and success rates

## Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version and memory settings
2. **Test Failures**: Verify application startup and test environment
3. **Deployment Issues**: Check Netlify credentials and site configuration
4. **Permission Errors**: Verify workflow permissions and repository settings

### Debug Steps
1. Check workflow logs for specific error messages
2. Verify required secrets are configured
3. Test locally with act if possible
4. Check repository permissions and branch protection rules

## Maintenance

### Regular Tasks
- Monitor workflow performance and success rates
- Update dependencies and security patches
- Review and optimize workflow schedules
- Clean up old artifacts and reports

### Updates
- Keep actions up to date (check for updates monthly)
- Review and update Node.js versions as needed
- Monitor for new security best practices
- Optimize workflow performance based on metrics
