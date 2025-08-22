# GitHub Actions Quick Reference

## 🚀 Essential Workflows

### 1. **CI/CD Pipeline** (`ci.yml`)
- **Trigger**: Push to main/develop, PRs, weekdays at 8 AM
- **Purpose**: Quality checks, build, test, preview deployment
- **Key Features**: Linting, type checking, security audit, build artifacts

### 2. **Test Suite** (`test.yml`)
- **Trigger**: Push to main/develop, PRs, weekdays at 9 AM
- **Purpose**: Comprehensive testing with Playwright
- **Key Features**: Unit tests, integration tests, test artifacts

### 3. **Security & Dependencies** (`security.yml`)
- **Trigger**: Push to main/develop, PRs, weekdays at 10 AM
- **Purpose**: Security scanning and dependency management
- **Key Features**: npm audit, Snyk, CodeQL, dependency updates

### 4. **Deploy to Production** (`deploy.yml`)
- **Trigger**: Push to main branch
- **Purpose**: Staging and production deployment
- **Key Features**: Build artifacts, staging validation, rollback

### 5. **Repository Maintenance** (`maintenance.yml`)
- **Trigger**: Weekly on Sunday at 2 AM
- **Purpose**: Cleanup and optimization
- **Key Features**: Artifact cleanup, performance analysis, dependency maintenance

### 6. **Workflow Manager** (`workflow-manager.yml`)
- **Trigger**: Weekdays at 6 AM
- **Purpose**: Monitor and optimize other workflows
- **Key Features**: Health analysis, optimization recommendations, scheduling analysis

## 📅 Schedule Overview

| Time | Workflow | Purpose |
|------|----------|---------|
| 6:00 AM | Workflow Manager | Monitoring & optimization |
| 8:00 AM | CI/CD Pipeline | Quality & build |
| 9:00 AM | Test Suite | Testing |
| 10:00 AM | Security | Security & dependencies |
| 2:00 AM (Sun) | Maintenance | Cleanup & optimization |

## 🔧 Key Commands

### Manual Trigger
```bash
# Trigger any workflow manually
gh workflow run ci.yml
gh workflow run test.yml
gh workflow run security.yml
```

### Check Status
```bash
# View workflow runs
gh run list

# View specific workflow
gh run view --workflow=ci.yml
```

### View Logs
```bash
# View latest run logs
gh run view --log

# View specific run
gh run view --log <run-id>
```

## 🚨 Troubleshooting

### Common Issues
1. **Build Timeouts**: Check timeout values in workflow files
2. **Permission Errors**: Verify workflow permissions and secrets
3. **Resource Conflicts**: Check concurrency groups and scheduling
4. **Test Failures**: Verify test environment and dependencies

### Debug Steps
1. Check workflow logs in GitHub Actions tab
2. Verify artifact uploads
3. Check environment variables and secrets
4. Test locally if possible

## 📊 Monitoring

### Daily Checks
- [ ] Review workflow run status
- [ ] Check for failures
- [ ] Monitor resource usage
- [ ] Verify artifacts

### Weekly Reviews
- [ ] Analyze performance metrics
- [ ] Review optimization reports
- [ ] Check security scan results
- [ ] Update maintenance schedules

## 🔐 Required Secrets

### For Security Workflow
- `SNYK_TOKEN`: Snyk security scanning token

### For Deployment
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token
- `NETLIFY_SITE_ID`: Netlify site identifier

## 📁 Artifacts

### Build Artifacts
- **Name**: `build-files`
- **Path**: `.next/`, `out/`, `public/`
- **Retention**: 30 days

### Test Results
- **Name**: `playwright-report`
- **Path**: `playwright-report/`
- **Retention**: 7 days

### Security Reports
- **Name**: `security-report`
- **Path**: `snyk-report.json`
- **Retention**: 30 days

## 🎯 Best Practices

### Workflow Design
- Use concurrency groups to prevent conflicts
- Implement proper error handling
- Set appropriate timeout values
- Use environment variables for configuration

### Security
- Minimal required permissions
- Regular security scanning
- Dependency monitoring
- Code quality checks

### Performance
- Parallel job execution
- Efficient caching strategies
- Proper artifact management
- Resource optimization

## 📞 Support

For issues or questions:
1. Check workflow logs first
2. Review this documentation
3. Check the comprehensive improvements document
4. Create an issue if needed

---

**Last Updated**: August 17, 2025  
**Version**: 2.0 (Complete Overhaul)
