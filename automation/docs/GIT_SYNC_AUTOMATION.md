# Git Sync Automation System

A comprehensive automation system for preventing and resolving git sync issues, built to handle the common problems encountered during repository synchronization.

## 🚀 Quick Start

### Basic Usage
```bash
# Run full automated sync
npm run git:sync:enhanced

# Check git health
npm run git:health

# Resolve conflicts automatically
npm run git:resolve

# Clean up git locks
npm run git:cleanup

# Get sync status
npm run git:status

# Generate sync report
npm run git:report
```

### Direct Script Usage
```bash
# Enhanced git sync
./automation/scripts/enhanced-git-sync.sh

# Health checker
./automation/scripts/git-health-checker.sh

# Conflict resolver
./automation/scripts/auto-conflict-resolver.sh
```

## 🏗️ System Architecture

### Core Components

1. **Enhanced Git Sync Script** (`enhanced-git-sync.sh`)
   - Main orchestration script for git operations
   - Handles branch switching, stashing, and conflict resolution
   - Automatic retry mechanisms and error handling

2. **Git Health Checker** (`git-health-checker.sh`)
   - Comprehensive repository health assessment
   - Identifies locks, conflicts, and configuration issues
   - Generates detailed JSON reports

3. **Auto Conflict Resolver** (`auto-conflict-resolver.sh`)
   - Automatic conflict resolution with configurable strategies
   - Backup branch creation before resolution
   - Fallback to interactive resolution when needed

4. **Pre-commit Hook** (`.git/hooks/pre-commit`)
   - Prevents commits with conflict markers or locks
   - JSX syntax validation
   - Security checks for sensitive information

5. **Enhanced Orchestrator** (`enhanced-git-sync-orchestrator.cjs`)
   - Node.js orchestrator coordinating all scripts
   - Unified CLI interface
   - Comprehensive logging and reporting

## 🔧 Configuration

### Environment Variables
```bash
# Git sync strategy (ours, theirs, manual)
RESOLUTION_STRATEGY="theirs"

# Maximum retry attempts
MAX_RETRIES=3

# Main branch name
MAIN_BRANCH="main"

# Remote name
REMOTE_NAME="origin"
```

### Resolution Strategies

- **`ours`**: Keep local changes during conflicts
- **`theirs`**: Keep incoming changes during conflicts (default)
- **`manual`**: Require manual conflict resolution

## 📋 Usage Examples

### Scenario 1: Daily Sync
```bash
# Run health check first
npm run git:health

# If healthy, run full sync
npm run git:sync:enhanced
```

### Scenario 2: Conflict Resolution
```bash
# Check for conflicts
npm run git:status

# Auto-resolve conflicts
npm run git:resolve

# Verify resolution
npm run git:status
```

### Scenario 3: Emergency Cleanup
```bash
# Clean up all git locks
npm run git:cleanup

# Check health
npm run git:health

# Attempt sync
npm run git:sync:enhanced
```

## 🛡️ Safety Features

### Automatic Backups
- Creates timestamped backup branches before major operations
- Preserves work in case of sync failures
- Automatic cleanup of successful backup branches

### Conflict Resolution
- Multiple resolution strategies
- Automatic conflict detection
- Fallback to interactive resolution
- Comprehensive logging of all actions

### Error Handling
- Graceful degradation on failures
- Detailed error reporting
- Automatic retry mechanisms
- Rollback capabilities

## 📊 Monitoring and Reporting

### Health Reports
```json
{
  "timestamp": "2025-01-14T12:00:00Z",
  "repository": "zion.app",
  "branch": "main",
  "issues": [
    {
      "severity": "HIGH",
      "category": "locks",
      "message": "Index lock file exists",
      "recommendation": "Remove .git/index.lock file"
    }
  ],
  "summary": {
    "total_issues": 1,
    "critical": 0,
    "high": 1,
    "medium": 0,
    "low": 0
  }
}
```

### Sync Reports
```json
{
  "timestamp": "2025-01-14T12:00:00Z",
  "repository": "zion.app",
  "status": {
    "workingTreeClean": true,
    "currentBranch": "main",
    "hasRemotes": true,
    "modifiedFiles": 0
  },
  "summary": {
    "success": true,
    "message": "Repository is synced and clean"
  }
}
```

## 🔍 Troubleshooting

### Common Issues

#### Git Lock Files
```bash
# Remove index lock
rm -f .git/index.lock

# Clean up rebase state
rm -rf .git/rebase-merge

# Clean up merge state
rm -rf .git/merge-HEAD
```

#### Conflict Resolution
```bash
# Check for conflict markers
grep -r "<<<<<<< HEAD" .

# Resolve conflicts manually
git add <resolved-file>
git commit -m "Resolve conflicts"
```

#### Branch Issues
```bash
# Check current branch
git branch --show-current

# Switch to main
git checkout main

# Set upstream
git branch --set-upstream-to=origin/main main
```

### Debug Mode
```bash
# Enable verbose logging
DEBUG=true npm run git:sync:enhanced

# Check logs
tail -f automation/logs/git-sync-*.log
```

## 🚨 Emergency Procedures

### Repository Recovery
```bash
# 1. Stop all operations
git reset --hard HEAD

# 2. Clean up locks
npm run git:cleanup

# 3. Check health
npm run git:health

# 4. Attempt recovery
npm run git:sync:enhanced
```

### Manual Sync
```bash
# 1. Stash changes
git stash push -m "Emergency stash"

# 2. Switch to main
git checkout main

# 3. Pull latest
git pull origin main

# 4. Apply stashed changes
git stash pop
```

## 🔄 Integration with CI/CD

### GitHub Actions
```yaml
- name: Git Sync Check
  run: |
    npm run git:health
    npm run git:sync:enhanced
```

### Netlify Build
```bash
# Pre-build git sync
npm run git:sync:enhanced

# Build
npm run build
```

## 📈 Performance Optimization

### Parallel Operations
- Health checks run in parallel where possible
- Conflict resolution with background processing
- Optimized file scanning algorithms

### Caching
- Git status caching for repeated operations
- Health check result caching
- Conflict resolution strategy caching

## 🔮 Future Enhancements

### Planned Features
- [ ] Machine learning conflict resolution
- [ ] Predictive conflict detection
- [ ] Integration with external git providers
- [ ] Advanced backup strategies
- [ ] Performance analytics dashboard

### Contributing
1. Fork the repository
2. Create a feature branch
3. Implement enhancements
4. Add tests and documentation
5. Submit a pull request

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Git Conflict Resolution](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Review logs in `automation/logs/`
3. Run health checks: `npm run git:health`
4. Generate reports: `npm run git:report`

---

**Last Updated**: January 14, 2025  
**Version**: 1.0.0  
**Maintainer**: Zion Tech Group Automation System
