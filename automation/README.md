# Intelligent Automation System

A comprehensive, autonomous automation system that provides intelligent task scheduling, self-healing capabilities, anomaly detection, and real-time monitoring for development workflows.

## 🚀 Features

### Core Capabilities
- **Autonomous Operation**: Runs independently with minimal human intervention
- **Self-Healing**: Automatically detects and recovers from failures
- **Adaptive Scheduling**: Adjusts task frequency based on system conditions
- **Anomaly Detection**: Identifies unusual patterns in performance and errors
- **Real-time Monitoring**: Web dashboard with live status and controls
- **Intelligent Reporting**: Automated daily/weekly reports with recommendations

### Automation Tasks
- **Dependency Updater**: Automatically updates npm packages and creates PRs
- **Security Scanner**: Scans for vulnerabilities and security issues
- **Code Quality Enforcer**: Runs linting, formatting, and tests
- **Stale Cleaner**: Removes old branches and pull requests

### Communication & Control
- **Slack Integration**: Real-time notifications and ChatOps commands
- **Web Dashboard**: Real-time status, logs, and manual controls
- **Email Notifications**: Configurable email alerts
- **API Endpoints**: RESTful API for external integration

## 📋 Requirements

- Node.js 16+ 
- Git
- GitHub CLI (for PR management)
- Slack webhook URL (optional)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Required for Slack notifications
   export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/..."
   export SLACK_CHANNEL="#automation"
   
   # Optional dashboard configuration
   export DASHBOARD_PORT=3001
   export DASHBOARD_USERNAME=admin
   export DASHBOARD_PASSWORD=secret
   ```

4. **Configure GitHub CLI** (for PR management)
   ```bash
   gh auth login
   ```

## 🚀 Quick Start

### Start the automation system
```bash
node automation/index.js
```

### Start with custom configuration
```bash
node automation/index.js --config custom-config.json
```

### Run in dry-run mode
```bash
node automation/index.js --dry-run
```

### Disable dashboard
```bash
node automation/index.js --no-dashboard
```

## 📊 Dashboard

Once started, access the web dashboard at:
```
http://localhost:3001
```

The dashboard provides:
- Real-time system status
- Task execution history
- Performance metrics
- Anomaly alerts
- Manual task controls
- Configuration management

## ⚙️ Configuration

The system uses `automation/config.json` for configuration. Key sections:

### Autonomous Settings
```json
{
  "autonomous": {
    "enabled": true,
    "selfHealing": true,
    "learning": true,
    "adaptiveScheduling": true
  }
}
```

### Task Configuration
```json
{
  "tasks": {
    "dependencyUpdater": {
      "enabled": true,
      "interval": 86400000,
      "dryRun": false,
      "autoCreatePR": true
    }
  }
}
```

### Notification Settings
```json
{
  "notifications": {
    "slack": {
      "enabled": true,
      "channel": "#automation"
    }
  }
}
```

## 🔧 Automation Tasks

### Dependency Updater
Automatically checks for outdated npm packages and creates pull requests.

**Features:**
- Skips major updates for critical packages
- Tests updates before creating PRs
- Configurable update limits
- Self-healing for network issues

**Configuration:**
```json
{
  "dependencyUpdater": {
    "enabled": true,
    "interval": 86400000,
    "dryRun": false,
    "autoCreatePR": true,
    "skipMajorUpdates": true,
    "maxUpdates": 5
  }
}
```

### Security Scanner
Scans for security vulnerabilities and code patterns.

**Features:**
- npm audit integration
- Secret detection
- Code pattern analysis
- Auto-fix for low-severity issues

**Configuration:**
```json
{
  "securityScanner": {
    "enabled": true,
    "interval": 21600000,
    "autoFix": true,
    "alertThreshold": "high",
    "scanPatterns": true,
    "scanSecrets": true
  }
}
```

### Code Quality Enforcer
Enforces code quality standards through linting and formatting.

**Features:**
- ESLint integration
- Prettier formatting
- TypeScript checking
- Auto-fix capabilities
- PR creation for violations

**Configuration:**
```json
{
  "codeQualityEnforcer": {
    "enabled": true,
    "interval": 7200000,
    "autoFix": true,
    "createPR": true,
    "tools": ["eslint", "prettier", "typescript"]
  }
}
```

### Stale Cleaner
Removes old branches and pull requests.

**Features:**
- Configurable age thresholds
- Protected branch support
- Unmerged commit detection
- Dry-run mode

**Configuration:**
```json
{
  "staleCleaner": {
    "enabled": true,
    "interval": 43200000,
    "staleBranchDays": 30,
    "stalePRDays": 14,
    "dryRun": false,
    "autoDelete": false
  }
}
```

## 📈 Monitoring & Analytics

### Anomaly Detection
The system automatically detects:
- High CPU/memory usage
- Increased error rates
- Unusual task durations
- Pattern violations

### Adaptive Scheduling
Task frequencies are automatically adjusted based on:
- System load
- Error rates
- Success rates
- Task performance

### Health Scoring
Real-time health score (0-100) based on:
- Task success rates
- System performance
- Anomaly frequency
- Error rates

## 📊 Reporting

### Automated Reports
- **Daily Reports**: Summary of daily activities
- **Weekly Reports**: Trends and recommendations
- **Monthly Reports**: Long-term analysis

### Report Content
- Executive summary
- Task performance metrics
- Anomaly analysis
- System health status
- Recommendations

## 🔌 API Reference

### REST Endpoints

#### System Status
```http
GET /api/status
```

#### Task Management
```http
GET /api/tasks
POST /api/tasks/:taskName/run
POST /api/tasks/:taskName/pause
POST /api/tasks/:taskName/resume
```

#### Scheduling
```http
GET /api/scheduling
POST /api/scheduling/recalculate
```

#### Anomalies
```http
GET /api/anomalies
```

#### Reports
```http
GET /api/reports
POST /api/reports/generate
```

#### System Controls
```http
POST /api/system/restart
POST /api/system/shutdown
```

## 🚨 Troubleshooting

### Common Issues

**Task failures**
- Check logs in dashboard
- Verify task configuration
- Ensure required tools are installed

**Slack notifications not working**
- Verify SLACK_WEBHOOK_URL is set
- Check webhook URL is valid
- Ensure channel exists

**Dashboard not accessible**
- Check port configuration
- Verify firewall settings
- Check for port conflicts

**GitHub PR creation fails**
- Verify GitHub CLI is authenticated
- Check repository permissions
- Ensure branch protection rules allow automation

### Logs
- System logs are available in the dashboard
- Task-specific logs are shown in task details
- Error logs include stack traces and context

### Self-Healing
The system automatically attempts to recover from:
- Network connectivity issues
- Git configuration problems
- Permission errors
- Resource constraints

## 🔒 Security

### Authentication
- Optional basic auth for dashboard
- Environment variable configuration
- Secure credential management

### Permissions
- Minimal required permissions
- Principle of least privilege
- Audit trail for all actions

### Data Protection
- No sensitive data logging
- Secure configuration storage
- Encrypted communication

## 🤝 Contributing

### Adding New Tasks
1. Create task class extending `AutomationTask`
2. Implement required methods
3. Add to task registry
4. Update configuration schema

### Extending Components
1. Follow existing patterns
2. Add comprehensive error handling
3. Include self-healing capabilities
4. Add monitoring and metrics

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review logs and error messages
3. Check configuration settings
4. Open an issue with detailed information

---

**Built with ❤️ for autonomous development workflows**
