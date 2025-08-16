# GitHub Actions Workflows

This directory contains all the GitHub Actions workflows for the Zion.app project. These workflows automate various aspects of development, testing, deployment, and maintenance.

## 🚀 Core Workflows

### CI (Continuous Integration)
- **File:** `ci.yml`
- **Trigger:** Push to any branch, Pull Requests
- **Purpose:** Build, test, and validate code changes
- **Features:**
  - TypeScript type checking
  - ESLint linting
  - Build verification
  - Security scanning
  - Non-blocking test execution

### CI Self-Heal
- **File:** `ci-self-heal.yml`
- **Trigger:** After CI workflow completion (if failed)
- **Purpose:** Automatically fix common issues and retry builds
- **Features:**
  - Automated linting fixes
  - Dependency resolution
  - Build retry with fixes
  - Automatic commit and push of fixes

### Test Suite
- **File:** `test.yml`
- **Trigger:** Push to main/develop, Pull Requests, Daily schedule
- **Purpose:** Comprehensive testing across multiple dimensions
- **Features:**
  - Unit tests
  - Integration tests
  - E2E tests
  - Smoke tests
  - Performance tests
  - Coverage reporting

## 🔒 Security & Quality

### Security Scan
- **File:** `security-scan.yml`
- **Trigger:** Daily schedule, Push to main/develop, Pull Requests
- **Purpose:** Comprehensive security analysis
- **Features:**
  - CodeQL analysis
  - Dependency vulnerability scanning
  - Container security scanning with Trivy
  - Security event reporting

### PR Quality Gate
- **File:** `pr-quality-gate.yml`
- **Trigger:** Pull Requests to main/develop
- **Purpose:** Ensure code quality before merging
- **Features:**
  - Code quality checks
  - Test execution
  - Build verification
  - Dependency security audit
  - Performance analysis
  - Automated PR comments with results

## 🚀 Deployment & Release

### Deploy to Netlify
- **File:** `deploy.yml`
- **Trigger:** Push to main, Pull Requests
- **Purpose:** Automated deployment to Netlify
- **Features:**
  - Build and test before deployment
  - Preview deployments for PRs
  - Production deployments for main branch
  - Post-deployment verification
  - Artifact management

### Release Management
- **File:** `release.yml`
- **Trigger:** Tag pushes, Manual dispatch
- **Purpose:** Automated release creation and deployment
- **Features:**
  - Version management
  - Changelog generation
  - Release asset creation
  - Automated deployment
  - Documentation updates

## 🔧 Maintenance & Automation

### Dependency Management
- **File:** `dependency-management.yml`
- **Trigger:** Weekly schedule, Manual dispatch
- **Purpose:** Keep dependencies up to date and secure
- **Features:**
  - Automated dependency updates
  - Security audit fixes
  - Pull request creation for updates
  - Build verification

### Automation Orchestrator
- **File:** `automation-orchestrator.yml`
- **Trigger:** Every 6 hours, Manual dispatch
- **Purpose:** Coordinate all automated tasks
- **Features:**
  - Content generation
  - SEO optimization
  - Marketing automation
  - Quality assurance
  - Automated commits and pushes

## 🚨 Emergency & Recovery

### Emergency Fix & Rollback
- **File:** `emergency-fix.yml`
- **Trigger:** Manual dispatch only
- **Purpose:** Handle critical issues and rollbacks
- **Features:**
  - Hotfix application
  - Emergency rollbacks
  - Emergency deployments
  - Safety validations
  - Team notifications

## 📋 Workflow Configuration

### Permissions
All workflows use minimal required permissions:
- `contents: read/write` - For code access and commits
- `pull-requests: write` - For PR management
- `actions: read` - For workflow information
- `security-events: write` - For security reporting

### Concurrency
Workflows use concurrency groups to prevent conflicts:
- CI workflows cancel in-progress runs
- Automation workflows allow parallel execution
- Emergency actions have dedicated concurrency groups

### Timeouts
Each workflow has appropriate timeouts:
- Quick checks: 10-15 minutes
- Build and test: 20-30 minutes
- Complex automation: 40-45 minutes

## 🛠️ Usage

### Manual Workflow Dispatch
Most workflows support manual triggering:
1. Go to Actions tab in GitHub
2. Select the desired workflow
3. Click "Run workflow"
4. Fill in required parameters
5. Click "Run workflow"

### Emergency Actions
For critical situations:
1. Use the Emergency Fix & Rollback workflow
2. Select appropriate action type
3. Provide detailed description
4. Include commit SHA for rollbacks
5. Monitor execution and results

### Monitoring
- Check Actions tab for workflow status
- Review logs for any failures
- Monitor security alerts
- Track deployment status

## 🔧 Customization

### Environment Variables
- `NODE_OPTIONS`: Memory allocation for Node.js
- `NEXT_TELEMETRY_DISABLED`: Disable Next.js telemetry
- `CI`: Enable CI mode

### Secrets
- `GITHUB_TOKEN`: Automatically provided
- `NETLIFY_AUTH_TOKEN`: For Netlify deployments (if needed)

### Scheduling
Workflows use cron expressions for scheduling:
- `0 2 * * 1` - Weekly on Monday at 2 AM UTC
- `0 4 * * *` - Daily at 4 AM UTC
- `0 6 * * *` - Daily at 6 AM UTC
- `0 */6 * * *` - Every 6 hours

## 📊 Metrics & Reporting

### Coverage Reports
- Code coverage uploaded to Codecov
- Test results stored as artifacts
- Performance metrics tracked

### Security Reports
- Vulnerability reports in Security tab
- CodeQL analysis results
- Dependency audit summaries

### Deployment Reports
- Deployment status and URLs
- Build verification results
- Post-deployment check results

## 🚨 Troubleshooting

### Common Issues
1. **Permission Denied**: Check workflow permissions
2. **Timeout Errors**: Increase timeout values if needed
3. **Build Failures**: Check CI Self-Heal workflow
4. **Deployment Issues**: Verify Netlify configuration

### Debug Mode
Enable debug logging by setting repository secret:
- `ACTIONS_STEP_DEBUG`: `true`

### Support
For workflow issues:
1. Check workflow logs
2. Review error messages
3. Verify configuration
4. Check permissions and secrets

## 🔄 Workflow Dependencies

```
CI → CI Self-Heal (if failed)
CI → Deploy (if main branch)
PR → Quality Gate → Merge
Release → Deploy → Post-Release
Emergency → Validate → Action → Notify
```

## 📈 Performance Optimization

- Parallel job execution where possible
- Caching for dependencies and build artifacts
- Conditional job execution
- Efficient resource usage
- Timeout management

## 🔐 Security Best Practices

- Minimal required permissions
- No hardcoded secrets
- Security scanning integration
- Vulnerability reporting
- Automated security fixes
