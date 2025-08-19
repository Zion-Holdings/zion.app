# 🚀 GitHub Actions Workflows

This repository contains a comprehensive set of GitHub Actions workflows designed to automate various aspects of development, testing, deployment, and maintenance.

## 📋 Available Workflows

### 1. 🚀 CI - Continuous Integration (`.github/workflows/ci.yml`)

**Purpose**: Comprehensive continuous integration pipeline that runs on every push and pull request.

**Triggers**:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Manual trigger via `workflow_dispatch`
- Scheduled every 6 hours

**Jobs**:
- **Test**: Runs tests across Node.js 18, 20, and 22
- **Lint**: Code quality checks with ESLint and formatting
- **Security**: Security audits and vulnerability scanning
- **Build**: Project build verification
- **Deploy Preview**: Preview deployment for pull requests
- **Notify**: Status notifications

**Features**:
- Matrix testing across Node.js versions
- Artifact uploads for test results and build artifacts
- Security scanning with Snyk
- Preview deployments for pull requests
- Comprehensive status reporting

### 2. 🚀 Deploy - Production Deployment (`.github/workflows/deploy.yml`)

**Purpose**: Handles staging and production deployments with proper validation and rollback capabilities.

**Triggers**:
- Push to `main` branch
- Manual trigger with environment selection
- Force deployment option

**Jobs**:
- **Validate**: Pre-deployment checks and testing
- **Deploy Staging**: Staging environment deployment
- **Deploy Production**: Production environment deployment
- **Post-Deploy**: Health checks and status updates

**Features**:
- Environment-specific deployments
- Deployment status tracking
- Automatic release tagging
- Health check validation
- Rollback capabilities

### 3. 🔧 Maintenance - Automated Maintenance Tasks (`.github/workflows/maintenance.yml`)

**Purpose**: Automated repository maintenance including dependency updates, cleanup, and health checks.

**Triggers**:
- Scheduled every Sunday at 2 AM UTC
- Daily at 2 PM UTC
- Manual trigger with task selection

**Jobs**:
- **Dependency Update**: Automated npm package updates
- **Cleanup**: Repository cleanup and optimization
- **Security Scan**: Comprehensive security validation
- **Health Check**: Repository health monitoring
- **Notify Completion**: Summary reporting

**Features**:
- Automated dependency updates with PR creation
- Security vulnerability scanning
- Repository cleanup and optimization
- Health monitoring and reporting
- Configurable task execution

### 4. 🤖 Automation Factories - Run Autonomous Agents (`.github/workflows/automation-factories.yml`)

**Purpose**: Executes the autonomous agent factories in the `automation/factories/` directory.

**Triggers**:
- Scheduled every 2 hours
- Manual trigger with factory selection
- Force execution option

**Jobs**:
- **Discover Factories**: Automatically finds all factory directories
- **Run Factory**: Executes each factory with validation
- **Health Check**: Monitors factory health and output
- **Notify Factories**: Status reporting and artifact collection

**Features**:
- Dynamic factory discovery
- Matrix execution across all factories
- Output collection and artifact uploads
- Health monitoring and validation
- Configurable execution parameters

### 5. 🧪 Test & Validation - Comprehensive Testing Suite (`.github/workflows/test-validation.yml`)

**Purpose**: Comprehensive testing across multiple dimensions including unit, integration, E2E, performance, and accessibility.

**Triggers**:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches
- Manual trigger with test type selection
- Daily scheduled execution

**Jobs**:
- **Unit Tests**: Multi-version Node.js testing
- **Integration Tests**: Service integration validation
- **E2E Tests**: End-to-end user journey testing
- **Performance Tests**: Bundle analysis and performance metrics
- **Accessibility Tests**: WCAG compliance checking
- **Code Quality**: Linting and complexity analysis
- **Security Validation**: Security audit and secret detection

**Features**:
- Matrix testing across Node.js versions
- Comprehensive test coverage
- Performance and accessibility validation
- Security scanning and validation
- Detailed reporting and artifact collection

## 🚀 How to Use

### Manual Workflow Triggering

Use the provided trigger script:

```bash
./trigger-workflows.sh
```

Or use GitHub CLI directly:

```bash
# Trigger CI workflow
gh workflow run ci.yml

# Trigger deployment to staging
gh workflow run deploy.yml --field environment=staging

# Trigger maintenance task
gh workflow run maintenance.yml --field task=dependencies

# Trigger specific test type
gh workflow run test-validation.yml --field test-type=unit
```

### Workflow Inputs

#### Deploy Workflow
- `environment`: Choose between `staging` or `production`
- `force`: Force deployment even if checks fail

#### Maintenance Workflow
- `task`: Choose between `all`, `dependencies`, `cleanup`, `security`, or `health-check`

#### Test & Validation Workflow
- `test-type`: Choose between `all`, `unit`, `integration`, `e2e`, `performance`, or `accessibility`

#### Automation Factories Workflow
- `factory`: Specify a particular factory to run (leave empty for all)
- `force`: Force execution even if previous run is in progress

## ⚙️ Configuration

### Required Secrets

Some workflows require GitHub secrets to be configured:

- `SNYK_TOKEN`: For Snyk security scanning
- `GITHUB_TOKEN`: Automatically provided by GitHub

### Environment Configuration

The deploy workflow uses GitHub environments:
- `staging`: For staging deployments
- `production`: For production deployments

Configure these in your repository settings under Environments.

### Concurrency Control

All workflows implement concurrency control to prevent race conditions:
- CI: `ci-${{ github.ref }}` (per branch)
- Deploy: `deploy-${{ github.ref }}` (per branch)
- Maintenance: `maintenance` (global)
- Automation Factories: `automation-factories` (global)
- Test & Validation: `test-validation-${{ github.ref }}` (per branch)

## 📊 Monitoring and Reporting

### Artifacts

All workflows generate artifacts that are automatically uploaded:
- Test results and coverage reports
- Build artifacts and bundles
- Security scan results
- Performance metrics
- Factory output and logs

### Status Notifications

Each workflow provides comprehensive status reporting:
- Job-level status updates
- Summary reports
- Failure notifications
- Success confirmations

### Dashboard

View all workflow runs and their status at:
```
https://github.com/{owner}/{repo}/actions
```

## 🔧 Customization

### Adding New Workflows

1. Create a new `.yml` file in `.github/workflows/`
2. Follow the established patterns for:
   - Permissions and security
   - Concurrency control
   - Error handling
   - Artifact management
   - Status reporting

### Modifying Existing Workflows

All workflows are designed to be easily customizable:
- Environment variables for configuration
- Conditional job execution
- Configurable timeouts and resources
- Extensible step definitions

### Local Testing

Test workflows locally using:
```bash
# Validate YAML syntax
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/workflow.yml'))"

# Check for common issues
./fix-github-actions-comprehensive.sh
```

## 🚨 Troubleshooting

### Common Issues

1. **Workflow not triggering**: Check trigger conditions and branch names
2. **Permission denied**: Verify workflow permissions and repository settings
3. **Job timeout**: Adjust `timeout-minutes` in workflow files
4. **Concurrency conflicts**: Check concurrency group settings

### Debug Mode

Enable debug logging by setting the secret:
```
ACTIONS_STEP_DEBUG=true
```

### Health Checks

Run the comprehensive fixer to identify and resolve issues:
```bash
./fix-github-actions-comprehensive.sh
```

## 📈 Best Practices

### Security
- Use minimal required permissions
- Implement secret scanning
- Regular security audits
- Dependency vulnerability monitoring

### Performance
- Implement caching strategies
- Use matrix builds efficiently
- Optimize artifact retention
- Monitor execution times

### Reliability
- Implement proper error handling
- Use conditional job execution
- Implement retry mechanisms
- Comprehensive status reporting

### Maintenance
- Regular dependency updates
- Workflow optimization
- Performance monitoring
- Documentation updates

## 🤝 Contributing

When contributing to workflows:

1. Follow the established patterns
2. Test changes locally
3. Validate YAML syntax
4. Update documentation
5. Consider security implications
6. Test with different triggers

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Security Best Practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Environment Configuration](https://docs.github.com/en/actions/deployment/targeting-different-environments)

---

**Note**: These workflows are designed to work together as a comprehensive automation system. Each workflow can be run independently, but they're optimized to work in concert for maximum efficiency and reliability.