# Redundancy Automation System

A comprehensive redundancy and backup system for all PM2, GitHub Actions, and Netlify functions automations. This system provides continuous monitoring, health checks, and automatic recovery for all automation components.

## 🚀 Overview

The Redundancy Automation System ensures that all your automation systems continue to function even if the primary systems fail. It provides:

- **PM2 Process Monitoring**: Continuous monitoring of PM2 processes with automatic restart capabilities
- **GitHub Actions Health Checks**: Validation of workflow files and local execution capabilities
- **Netlify Functions Monitoring**: Health checks for serverless functions and deployment status
- **Marketing Sync Redundancy**: Backup execution of marketing automation scripts
- **Git Sync Redundancy**: Backup git synchronization operations
- **Build Health Monitoring**: Continuous build health checks and recovery

## 📁 System Architecture

```
automation/
├── redundancy-automation-system.cjs    # Main orchestrator
├── pm2-redundancy-monitor.cjs         # PM2-specific monitoring
├── github-actions-redundancy.cjs      # GitHub Actions monitoring
├── netlify-functions-redundancy.cjs   # Netlify functions monitoring
├── start-redundancy-system.sh         # Startup script
├── redundancy-config.json             # Configuration file
└── logs/                              # Log files directory
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20.18.1 or higher
- Git
- PM2 (optional, for PM2 redundancy features)
- Access to GitHub repository
- Netlify account (for Netlify functions monitoring)

### Quick Start

1. **Clone the repository** (if not already done):
   ```bash
   git clone <your-repo-url>
   cd <your-repo>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the redundancy system**:
   ```bash
   ./automation/start-redundancy-system.sh start
   ```

## 🎯 Features

### 1. PM2 Redundancy Monitor

**File**: `pm2-redundancy-monitor.cjs`

Monitors all PM2 processes and provides automatic recovery:

- **Health Checks**: Monitors process status, memory usage, CPU usage
- **Auto-Restart**: Automatically restarts failed processes
- **Ecosystem Validation**: Checks PM2 ecosystem file validity
- **Performance Monitoring**: Tracks restart counts and resource usage

**Usage**:
```bash
# Run health check
node automation/pm2-redundancy-monitor.cjs check

# Start continuous monitoring
node automation/pm2-redundancy-monitor.cjs monitor

# Restart specific process
node automation/pm2-redundancy-monitor.cjs restart zion-auto-sync

# Show process status
node automation/pm2-redundancy-monitor.cjs status
```

### 2. GitHub Actions Redundancy

**File**: `github-actions-redundancy.cjs`

Provides backup for GitHub Actions workflows:

- **Workflow Validation**: Checks YAML syntax and cron expressions
- **Local Execution**: Runs workflows locally as backup
- **Git Status Monitoring**: Tracks uncommitted changes
- **Auto-Commit**: Automatically commits and pushes changes

**Usage**:
```bash
# Run health check
node automation/github-actions-redundancy.cjs check

# Start continuous monitoring
node automation/github-actions-redundancy.cjs monitor

# Validate specific workflow
node automation/github-actions-redundancy.cjs validate marketing-sync.yml

# Run workflow locally
node automation/github-actions-redundancy.cjs run sync-health.yml
```

### 3. Netlify Functions Redundancy

**File**: `netlify-functions-redundancy.cjs`

Monitors Netlify serverless functions:

- **Function Health**: Validates individual function files
- **Manifest Management**: Auto-regenerates functions manifest
- **Deployment Status**: Checks Netlify deployment health
- **Configuration Validation**: Validates Netlify configuration

**Usage**:
```bash
# Run health check
node automation/netlify-functions-redundancy.cjs check

# Start continuous monitoring
node automation/netlify-functions-redundancy.cjs monitor

# Regenerate functions manifest
node automation/netlify-functions-redundancy.cjs manifest

# Trigger Netlify build
node automation/netlify-functions-redundancy.cjs build
```

### 4. Main Redundancy Orchestrator

**File**: `redundancy-automation-system.cjs`

Coordinates all redundancy systems:

- **Unified Monitoring**: Single interface for all redundancy systems
- **Health Reporting**: Comprehensive health reports
- **Action Orchestration**: Coordinates recovery actions across systems
- **Metrics Collection**: System-wide performance metrics

**Usage**:
```bash
# Run full redundancy check
node automation/redundancy-automation-system.cjs check

# Start continuous monitoring
node automation/redundancy-automation-system.cjs monitor

# Check specific component
node automation/redundancy-automation-system.cjs pm2
node automation/redundancy-automation-system.cjs github
node automation/redundancy-automation-system.cjs netlify
```

## 🚀 Startup Script

**File**: `start-redundancy-system.sh`

Comprehensive startup script that manages all redundancy systems:

```bash
# Start all systems
./automation/start-redundancy-system.sh start

# Stop all systems
./automation/start-redundancy-system.sh stop

# Check system status
./automation/start-redundancy-system.sh status

# Restart all systems
./automation/start-redundancy-system.sh restart

# Run health checks
./automation/start-redundancy-system.sh health

# View logs
./automation/start-redundancy-system.sh logs
```

## ⚙️ Configuration

**File**: `redundancy-config.json`

The system is configured through a JSON configuration file:

```json
{
  "pm2": {
    "enabled": true,
    "checkInterval": 30000,
    "maxRestarts": 5,
    "autoRestart": true
  },
  "githubActions": {
    "enabled": true,
    "checkInterval": 60000,
    "autoTrigger": true
  },
  "netlify": {
    "enabled": true,
    "checkInterval": 120000,
    "autoDeploy": true
  },
  "monitoring": {
    "enabled": true,
    "reportInterval": 300000,
    "alertThreshold": 0.8
  }
}
```

### Configuration Options

#### PM2 Configuration
- `enabled`: Enable/disable PM2 monitoring
- `checkInterval`: Health check frequency (milliseconds)
- `maxRestarts`: Maximum restart attempts before alerting
- `autoRestart`: Automatically restart failed processes
- `restartDelay`: Delay between restart attempts

#### GitHub Actions Configuration
- `enabled`: Enable/disable GitHub Actions monitoring
- `checkInterval`: Health check frequency
- `maxFailures`: Maximum failures before alerting
- `autoTrigger`: Automatically trigger workflows locally
- `workflows`: List of workflows to monitor

#### Netlify Configuration
- `enabled`: Enable/disable Netlify monitoring
- `checkInterval`: Health check frequency
- `autoDeploy`: Automatically trigger deployments
- `deployTimeout`: Maximum deployment wait time

## 📊 Monitoring & Logging

### Log Files

All redundancy systems generate detailed logs:

- `redundancy-automation.log` - Main system logs
- `pm2-redundancy.log` - PM2 monitoring logs
- `github-actions-redundancy.log` - GitHub Actions logs
- `netlify-functions-redundancy.log` - Netlify functions logs
- `redundancy-startup.log` - Startup script logs

### Health Reports

The system generates JSON health reports for each component:

- Process status and health metrics
- Issues detected and actions taken
- Performance statistics
- Recovery attempts and results

### Metrics

Key metrics tracked:

- **Uptime**: System availability percentage
- **Response Time**: Health check response times
- **Error Rates**: Failure frequency and types
- **Recovery Success**: Automatic recovery success rate
- **Resource Usage**: Memory and CPU consumption

## 🔧 Troubleshooting

### Common Issues

1. **PM2 Not Running**
   ```bash
   # Check PM2 status
   pm2 status
   
   # Start PM2 services
   npm run pm2:start
   ```

2. **GitHub Actions Failures**
   ```bash
   # Validate workflows
   node automation/github-actions-redundancy.cjs validate
   
   # Check git status
   git status
   ```

3. **Netlify Functions Issues**
   ```bash
   # Regenerate manifest
   node automation/netlify-functions-redundancy.cjs manifest
   
   # Check function health
   node automation/netlify-functions-redundancy.cjs check
   ```

### Debug Mode

Enable verbose logging by setting environment variables:

```bash
export REDUNDANCY_DEBUG=true
export REDUNDANCY_LOG_LEVEL=debug
```

### Manual Recovery

If automatic recovery fails:

1. Check logs for specific error messages
2. Run individual health checks
3. Restart specific components
4. Verify configuration settings

## 🔄 Integration with Existing Systems

### PM2 Integration

The redundancy system works alongside existing PM2 processes:

- Monitors existing PM2 ecosystem
- Provides backup monitoring
- Auto-restarts failed processes
- Generates health reports

### GitHub Actions Integration

Enhances GitHub Actions reliability:

- Validates workflow syntax
- Provides local execution backup
- Monitors workflow health
- Auto-commits changes

### Netlify Integration

Improves Netlify deployment reliability:

- Monitors function health
- Validates configuration
- Triggers rebuilds
- Tracks deployment status

## 📈 Performance & Scalability

### Resource Usage

- **Memory**: ~50-100MB per monitoring process
- **CPU**: Minimal impact (<5% during normal operation)
- **Disk**: Log files grow ~10-50MB per day
- **Network**: Minimal external API calls

### Scaling Considerations

- Monitor multiple repositories
- Support multiple PM2 ecosystems
- Handle large numbers of Netlify functions
- Distribute monitoring across servers

## 🚨 Alerting & Notifications

### Built-in Alerts

- Console output with color coding
- Log file entries
- Health report generation
- Process status monitoring

### External Notifications

Configure external notification systems:

- Email notifications
- Slack webhooks
- Discord webhooks
- Custom webhook endpoints

## 🔒 Security Considerations

### Access Control

- Environment variable configuration
- Secure credential storage
- Minimal required permissions
- Audit logging

### Best Practices

- Run with minimal required privileges
- Secure configuration files
- Regular credential rotation
- Monitor access logs

## 📚 API Reference

### RedundancyAutomationSystem Class

```javascript
const RedundancyAutomationSystem = require('./automation/redundancy-automation-system.cjs');

const system = new RedundancyAutomationSystem();

// Run health check
await system.runFullRedundancyCheck();

// Start monitoring
await system.startContinuousMonitoring();

// Stop monitoring
await system.stopMonitoring();
```

### PM2RedundancyMonitor Class

```javascript
const PM2RedundancyMonitor = require('./automation/pm2-redundancy-monitor.cjs');

const monitor = new PM2RedundancyMonitor();

// Check PM2 health
await monitor.runPM2HealthCheck();

// Start monitoring
await monitor.startMonitoring();
```

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Testing

```bash
# Run individual component tests
node automation/pm2-redundancy-monitor.cjs check
node automation/github-actions-redundancy.cjs check
node automation/netlify-functions-redundancy.cjs check

# Run full system test
node automation/redundancy-automation-system.cjs check
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help

1. Check the logs for error messages
2. Review this documentation
3. Check the troubleshooting section
4. Open an issue on GitHub

### Reporting Issues

When reporting issues, include:

- System information (OS, Node.js version)
- Error messages and logs
- Steps to reproduce
- Expected vs actual behavior

---

**Note**: This redundancy system is designed to work alongside your existing automation infrastructure, providing backup and monitoring capabilities without interfering with normal operations.