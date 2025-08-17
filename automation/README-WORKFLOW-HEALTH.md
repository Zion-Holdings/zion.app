# 🚀 Workflow Health Monitoring System

A comprehensive system for detecting and automatically fixing failing GitHub Actions workflows.

## 🎯 Overview

This system provides automated workflow health monitoring, prioritization, and self-healing capabilities to ensure your GitHub Actions workflows run smoothly and efficiently.

## 🏗️ System Components

### 1. **Workflow Health Monitor** (`workflow-health-monitor.cjs`)
- Analyzes all workflow files for common issues
- Detects excessive frequency, missing concurrency control, and other problems
- Automatically applies fixes to improve workflow reliability
- Generates comprehensive health reports

### 2. **Workflow Prioritizer** (`workflow-prioritizer.cjs`)
- Categorizes workflows by priority (critical, high, medium, low)
- Optimizes workflow frequency based on priority level
- Adds missing concurrency control and timeouts
- Manages workflow enable/disable states

### 3. **Workflow Watchdog** (`workflow-watchdog.cjs`)
- Monitors workflow failures in real-time
- Automatically restarts failing workflows based on configurable thresholds
- Maintains failure history and patterns
- Provides intelligent restart strategies

### 4. **Workflow Health Dashboard** (`workflow-health-dashboard.cjs`)
- Generates visual health reports (console and HTML)
- Shows workflow status, failure analysis, and recommendations
- Provides actionable insights for workflow optimization

### 5. **Health Orchestrator** (`orchestrate-workflow-health.cjs`)
- Master script that coordinates all components
- Runs comprehensive health assessments
- Provides continuous monitoring capabilities
- Generates unified reports

## 🚀 Quick Start

### 1. **Run Full Health Assessment**
```bash
# Run complete health check and optimization
node automation/orchestrate-workflow-health.cjs assess
```

### 2. **Start Continuous Monitoring**
```bash
# Monitor workflows every 30 minutes
node automation/orchestrate-workflow-health.cjs monitor 30
```

### 3. **Generate Health Dashboard**
```bash
# Create visual health overview
node automation/orchestrate-workflow-health.cjs dashboard
```

## 📋 Individual Component Usage

### Health Monitor
```bash
# Run health analysis only
node automation/workflow-health-monitor.cjs run

# Analyze workflows without applying fixes
node automation/workflow-health-monitor.cjs analyze

# Apply fixes only
node automation/workflow-health-monitor.cjs fix

# Clean up backup files
node automation/workflow-health-monitor.cjs cleanup
```

### Workflow Prioritizer
```bash
# Prioritize and optimize workflows
node automation/workflow-prioritizer.cjs prioritize

# Disable problematic workflow
node automation/workflow-prioritizer.cjs disable workflow-name.yml "Reason for disabling"

# Enable previously disabled workflow
node automation/workflow-prioritizer.cjs enable workflow-name.yml

# Check prioritization status
node automation/workflow-prioritizer.cjs status
```

### Workflow Watchdog
```bash
# Check workflow health
node automation/workflow-watchdog.cjs check

# Start continuous monitoring
node automation/workflow-watchdog.cjs monitor

# Generate watchdog report
node automation/workflow-watchdog.cjs report

# View watchdog configuration
node automation/workflow-watchdog.cjs config
```

### Health Dashboard
```bash
# Generate full dashboard (console + HTML)
node automation/workflow-health-dashboard.cjs generate

# Generate HTML dashboard only
node automation/workflow-health-dashboard.cjs html

# Generate console dashboard only
node automation/workflow-health-dashboard.cjs console
```

## 🔧 Configuration

### Priority Configuration
The system automatically creates `workflow-priority-config.json` with default settings:

```json
{
  "critical": ["ci.yml", "deploy.yml", "security-scan.yml"],
  "high": ["rapid-git-sync.yml", "autonomous-cloud-runner.yml"],
  "medium": ["autonomous-lighthouse.yml", "seo-audit.yml"],
  "low": ["ui-evolution-weekly-beautify.yml", "marketing-daily.yml"],
  "frequencyLimits": {
    "critical": "*/30",
    "high": "*/60",
    "medium": "0 */4 * * *",
    "low": "0 0 * * *"
  }
}
```

### Watchdog Configuration
The system creates `workflow-watchdog-config.json` with failure thresholds:

```json
{
  "maxRetries": 3,
  "retryDelayMinutes": 15,
  "autoRestart": true,
  "failureThresholds": {
    "critical": 2,
    "high": 3,
    "medium": 5,
    "low": 10
  }
}
```

## 📊 Health Metrics

### Health Score Calculation
- **80-100**: Excellent - All workflows healthy
- **60-79**: Good - Minor issues detected
- **40-59**: Warning - Several issues need attention
- **0-39**: Critical - Major workflow problems

### Common Issues Detected
1. **Excessive Frequency** - Workflows running too often
2. **Missing Concurrency** - No concurrency control
3. **Missing Timeouts** - No execution time limits
4. **Missing Error Handling** - Scripts can fail workflows
5. **Backup Files** - Old workflow versions

### Automatic Fixes Applied
1. **Frequency Optimization** - Reduce execution frequency
2. **Concurrency Control** - Add concurrency groups
3. **Timeout Addition** - Add appropriate timeouts
4. **Error Handling** - Add continue-on-error flags
5. **Cleanup** - Remove backup files

## 🚨 Troubleshooting

### Common Issues

#### 1. **Scripts Not Found**
```bash
# Ensure you're in the repository root
cd /path/to/your/repo

# Check if automation directory exists
ls -la automation/
```

#### 2. **Permission Errors**
```bash
# Make scripts executable
chmod +x automation/*.cjs

# Check file permissions
ls -la automation/
```

#### 3. **Missing Dependencies**
```bash
# Install Node.js dependencies
npm install

# Check Node.js version (requires 16+)
node --version
```

#### 4. **Git State Issues**
```bash
# Clean git state
git reset --hard HEAD
git clean -fd

# Check git status
git status
```

### Debug Mode
```bash
# Run with verbose logging
DEBUG=1 node automation/orchestrate-workflow-health.cjs assess

# Check log files
tail -f automation/logs/workflow-health-monitor.log
tail -f automation/logs/orchestrator.log
```

## 📈 Monitoring and Alerts

### Continuous Monitoring
```bash
# Start monitoring every 15 minutes
node automation/orchestrate-workflow-health.cjs monitor 15

# Monitor specific components
node automation/workflow-watchdog.cjs monitor
```

### Health Reports
- **Console Reports**: Real-time terminal output
- **HTML Dashboard**: Visual web interface
- **JSON Reports**: Machine-readable data
- **Log Files**: Detailed execution logs

### Alert Thresholds
- **Critical**: Health score < 40
- **Warning**: Health score < 60
- **Info**: Health score < 80
- **Success**: Health score >= 80

## 🔄 Integration with GitHub Actions

### Automated Health Monitoring
The system includes a GitHub Actions workflow (`workflow-health-monitor.yml`) that:
- Runs every 4 hours automatically
- Monitors workflow health
- Applies automatic fixes
- Generates health reports
- Commits improvements to the repository

### Manual Triggers
```bash
# Trigger health monitoring manually
gh workflow run "Workflow Health Monitor"

# Check workflow status
gh run list --workflow="Workflow Health Monitor"
```

## 📚 Advanced Usage

### Custom Health Checks
```javascript
// Extend the health monitor with custom checks
const monitor = new WorkflowHealthMonitor();
monitor.addCustomCheck('my-custom-check', async (workflow) => {
  // Custom validation logic
  return { healthy: true, issues: [] };
});
```

### Custom Prioritization Rules
```javascript
// Modify priority configuration
const prioritizer = new WorkflowPrioritizer();
prioritizer.priorityConfig.critical.push('my-critical-workflow.yml');
prioritizer.savePriorityConfig();
```

### Custom Watchdog Actions
```javascript
// Extend watchdog with custom restart logic
const watchdog = new WorkflowWatchdog();
watchdog.addCustomRestartStrategy('my-strategy', async (workflow) => {
  // Custom restart logic
});
```

## 🎯 Best Practices

### 1. **Regular Health Checks**
- Run full assessment weekly
- Monitor continuously for critical workflows
- Review health reports monthly

### 2. **Workflow Optimization**
- Use appropriate frequency limits
- Implement concurrency control
- Add reasonable timeouts
- Handle errors gracefully

### 3. **Monitoring Strategy**
- Start with critical workflows
- Gradually expand to all workflows
- Set appropriate failure thresholds
- Monitor resource usage

### 4. **Maintenance**
- Clean up old log files regularly
- Review and update priority configurations
- Monitor system performance
- Update failure thresholds as needed

## 🤝 Contributing

### Adding New Health Checks
1. Extend the `WorkflowHealthMonitor` class
2. Add new issue detection methods
3. Implement automatic fixes
4. Update documentation

### Adding New Prioritization Rules
1. Extend the `WorkflowPrioritizer` class
2. Add new priority categories
3. Implement optimization strategies
4. Update configuration schema

### Adding New Watchdog Features
1. Extend the `WorkflowWatchdog` class
2. Add new restart strategies
3. Implement failure analysis
4. Update monitoring logic

## 📞 Support

### Getting Help
1. Check the logs in `automation/logs/`
2. Review the health dashboard
3. Check GitHub Actions workflow runs
4. Review this documentation

### Reporting Issues
1. Check existing issues in the repository
2. Provide detailed error logs
3. Include system information
4. Describe expected vs actual behavior

## 📄 License

This workflow health monitoring system is part of the Zion.app project and follows the same licensing terms.

---

**🚀 Happy Workflow Monitoring!** 

Your GitHub Actions workflows will now be healthier, more reliable, and automatically self-healing!
