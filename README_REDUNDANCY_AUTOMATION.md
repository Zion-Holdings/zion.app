# Redundancy Automation System

A comprehensive redundancy and monitoring system that provides backup automation for all PM2 processes, GitHub Actions workflows, and Netlify functions in the Zion Tech Group project.

## 🚀 Overview

The Redundancy Automation System is designed to ensure continuous operation of all automation components by providing:
- **PM2 Process Monitoring**: Continuous health checks and automatic restart of PM2 processes
- **GitHub Actions Monitoring**: Validation and health monitoring of GitHub Actions workflows
- **Netlify Functions Monitoring**: Health checks and manifest regeneration for Netlify functions
- **Git Synchronization**: Automated Git sync with multiple strategies (pull, hardreset, rebase)
- **Build System Monitoring**: Comprehensive build health checks and recovery mechanisms
- **Log Management**: Automated log rotation and archival
- **Alert System**: Configurable alerts for system failures

## 📁 System Architecture

```
automation/
├── redundancy-automation-system.cjs # Main system orchestrator
├── redundancy-health-monitor.cjs # Health monitoring service
├── redundancy-git-sync.cjs # Git synchronization service
├── redundancy-build-monitor.cjs # Build system monitor
└── start-redundancy-system.sh # System startup script

ecosystem.redundancy.cjs # PM2 ecosystem configuration
```

## 🛠️ Components

### 1. Redundancy Automation System (`redundancy-automation-system.cjs`)

The main orchestrator that coordinates all redundancy components:
- **PM2 Health Monitoring**: Checks PM2 process status every 30 seconds
- **GitHub Actions Monitoring**: Validates workflow syntax and configuration every minute
- **Netlify Functions Monitoring**: Ensures functions manifest is current every 2 minutes
- **Git Synchronization**: Performs repository sync operations
- **Build Health Checks**: Monitors build system health
- **Emergency Recovery**: Automated recovery procedures for critical failures

### 2. Health Monitor (`redundancy-health-monitor.cjs`)

Dedicated health monitoring service:
- **Comprehensive Health Checks**: Monitors all system components
- **Failure Tracking**: Tracks consecutive failures and triggers alerts
- **Performance Metrics**: Monitors system resources and performance
- **Alert System**: Configurable alerting with cooldown periods

### 3. Git Sync Service (`redundancy-git-sync.cjs`)

Automated Git synchronization service:
- **Multiple Sync Strategies**: Support for pull, hardreset, and rebase
- **Conflict Resolution**: Automatic stashing and restoration of local changes
- **Branch Management**: Automatic branch switching and validation
- **Error Recovery**: Retry mechanisms and failure handling

### 4. Build Monitor (`redundancy-build-monitor.cjs`)

Build system monitoring and recovery:
- **Environment Validation**: Checks Node.js, npm, and dependencies
- **Build Health Checks**: Runs pre-build validation scripts
- **Recovery Mechanisms**: Automatic dependency reinstallation and cleanup
- **Artifact Monitoring**: Tracks build outputs and artifacts
- **Resource Monitoring**: Monitors CPU and memory usage

## 🚀 Quick Start

### Prerequisites
- Node.js 20.18.1 or higher
- npm 10.0.0 or higher
- PM2 (install with `npm install -g pm2`)
- Git access to the repository

### Installation

1. **Clone the repository** (if not already done):
 ```bash
 git clone <repository-url>
 cd <repository-name>
 ```

2. **Install dependencies**:
 ```bash
 npm install
 ```

3. **Start the redundancy system**:
 ```bash
 ./automation/start-redundancy-system.sh
 ```

### Manual PM2 Management

```bash
# Start the system
pm2 start ecosystem.redundancy.cjs

# Check status
pm2 status

# View logs
pm2 logs

# Restart the system
pm2 restart ecosystem.redundancy.cjs

# Stop the system
pm2 stop ecosystem.redundancy.cjs
```

## ⚙️ Configuration

### Environment Variables

The system can be configured using environment variables:

```bash
# PM2 monitoring intervals
REDUNDANCY_PM2_CHECK_INTERVAL=30000 # 30 seconds
REDUNDANCY_GITHUB_CHECK_INTERVAL=60000 # 1 minute
REDUNDANCY_NETLIFY_CHECK_INTERVAL=120000 # 2 minutes

# Health monitoring
HEALTH_CHECK_INTERVAL=300000 # 5 minutes
ALERT_THRESHOLD=3 # Failure threshold for alerts

# Git sync configuration
GIT_SYNC_REMOTE=origin # Git remote name
GIT_SYNC_BRANCH=main # Target branch
GIT_SYNC_STRATEGY=pull # Sync strategy (pull/hardreset/rebase)
GIT_SYNC_CLEAN=1 # Clean working directory

# Build monitoring
BUILD_CHECK_INTERVAL=600000 # 10 minutes
BUILD_TIMEOUT=300000 # 5 minutes
MAX_BUILD_FAILURES=3 # Max consecutive failures
```

### PM2 Ecosystem Configuration

The `ecosystem.redundancy.cjs` file configures all PM2 processes:

```javascript
module.exports = {
 apps: [
 {
 name: "redundancy-automation-system",
 script: "automation/redundancy-automation-system.cjs",
 // ... configuration
 },
 {
 name: "redundancy-health-monitor",
 script: "automation/redundancy-health-monitor.cjs",
 // ... configuration
 },
 // ... other processes
 ]
};
```

## 📊 Monitoring and Logs

### Log Files

All system logs are stored in `automation/logs/`:
- `redundancy-system-YYYY-MM-DD.log` - Main system logs
- `redundancy-health-YYYY-MM-DD.log` - Health monitor logs
- `redundancy-git-sync-YYYY-MM-DD.log` - Git sync logs
- `redundancy-build-monitor-YYYY-MM-DD.log` - Build monitor logs
- `health-alert-*.json` - Health alert records

### Log Rotation

The system automatically manages logs:
- **Size Limits**: Individual log files limited to 5-10MB
- **Retention**: Keeps last 15-30 log files
- **Compression**: Old logs are compressed and archived
- **Cleanup**: Automatic removal of old log files

### Health Checks

The system performs comprehensive health checks:

1. **PM2 Process Health**: Status, restart count, uptime
2. **GitHub Actions**: Workflow syntax, environment variables
3. **Netlify Functions**: Manifest validity, function count
4. **Git Repository**: Remote access, branch status
5. **Build System**: Dependencies, scripts, artifacts

## 🔧 Troubleshooting

### Common Issues

#### PM2 Processes Not Starting

```bash
# Check PM2 installation
npm install -g pm2

# Check PM2 status
pm2 status

# View PM2 logs
pm2 logs

# Restart PM2 daemon
pm2 kill
pm2 start ecosystem.redundancy.cjs
```

#### Git Sync Failures

```bash
# Check Git configuration
git remote -v
git status

# Manual sync test
node automation/redundancy-git-sync.cjs

# Check for conflicts
git status --porcelain
```

#### Build Failures

```bash
# Check dependencies
npm install

# Clear build cache
rm -rf .next out node_modules/.cache

# Run health check manually
npm run build:health-check
```

### Emergency Recovery

The system includes automatic emergency recovery:

```bash
# Trigger emergency recovery
node -e "
const {RedundancyAutomationSystem} = require('./automation/redundancy-automation-system.cjs');
const system = new RedundancyAutomationSystem();
system.emergencyRecovery();
"
```

### Manual System Control

```bash
# Start the system
./automation/start-redundancy-system.sh

# Stop the system
./automation/start-redundancy-system.sh stop

# Restart the system
./automation/start-redundancy-system.sh restart

# Check status
./automation/start-redundancy-system.sh status

# View logs
./automation/start-redundancy-system.sh logs
```

## 📈 Performance and Scaling

### Resource Usage
- **Memory**: Each process typically uses 50-100MB
- **CPU**: Minimal CPU usage during normal operation
- **Disk**: Log files grow at ~1-5MB per day
- **Network**: Git sync operations use minimal bandwidth

### Scaling Considerations
- **Multiple Instances**: Can run multiple instances for redundancy
- **Load Distribution**: Processes can be distributed across servers
- **Monitoring**: Centralized monitoring for multiple deployments

## 🔒 Security Considerations

### Access Control
- **Process Isolation**: Each component runs in isolated PM2 processes
- **File Permissions**: Log files have restricted permissions
- **Environment Variables**: Sensitive data stored in environment variables

### Audit Trail
- **Comprehensive Logging**: All operations are logged with timestamps
- **Change Tracking**: Git operations are tracked and logged
- **Alert Records**: Health alerts are stored for audit purposes

## 🚀 Integration with Existing Systems

### PM2 Integration

The redundancy system works alongside existing PM2 processes:
- **Non-Interfering**: Doesn't interfere with existing PM2 processes
- **Shared Resources**: Uses existing PM2 installation and configuration
- **Unified Management**: All processes managed through PM2 ecosystem

### GitHub Actions Integration
- **Workflow Validation**: Ensures GitHub Actions workflows are properly configured
- **Environment Checks**: Validates required environment variables
- **Health Monitoring**: Monitors workflow execution health

### Netlify Integration
- **Function Monitoring**: Ensures Netlify functions are properly generated
- **Manifest Validation**: Validates functions manifest file
- **Auto-Regeneration**: Automatically regenerates stale manifests

## 📚 API Reference

### RedundancyAutomationSystem Class

```javascript
const {RedundancyAutomationSystem} = require('./automation/redundancy-automation-system.cjs');

const system = new RedundancyAutomationSystem();

// Get system status
const status = system.getStatus();

// Run health check
const health = await system.runFullHealthCheck();

// Emergency recovery
const recovery = await system.emergencyRecovery();
```

### RedundancyHealthMonitor Class

```javascript
const {RedundancyHealthMonitor} = require('./automation/redundancy-health-monitor.cjs');

const monitor = new RedundancyHealthMonitor();

// Get monitor status
const status = monitor.getStatus();

// Perform health check
const health = await monitor.performHealthCheck();
```

### RedundancyGitSync Class

```javascript
const {RedundancyGitSync} = require('./automation/redundancy-git-sync.cjs');

const gitSync = new RedundancyGitSync();

// Get sync status
const status = gitSync.getStatus();

// Perform sync
const sync = await gitSync.performSync();
```

### RedundancyBuildMonitor Class

```javascript
const {RedundancyBuildMonitor} = require('./automation/redundancy-build-monitor.cjs');

const buildMonitor = new RedundancyBuildMonitor();

// Get monitor status
const status = buildMonitor.getStatus();

// Perform build check
const check = await buildMonitor.performComprehensiveCheck();
```

## 🤝 Contributing

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**: Run the redundancy system and verify all components
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Testing

```bash
# Test individual components
node automation/redundancy-automation-system.cjs
node automation/redundancy-health-monitor.cjs
node automation/redundancy-git-sync.cjs
node automation/redundancy-build-monitor.cjs

# Test startup script
./automation/start-redundancy-system.sh status
```

## 📄 License

This project is licensed under the same license as the main Zion Tech Group project.

## 🆘 Support

For support and questions:

1. **Check the logs**: Use `pm2 logs` or check log files in `automation/logs/`
2. **Review this documentation**: Ensure proper configuration and setup
3. **Check system status**: Use `./automation/start-redundancy-system.sh status`
4. **Open an issue**: Create a GitHub issue with detailed error information

## 🔄 Changelog

### Version 1.0.0
- Initial release of redundancy automation system
- PM2 process monitoring and recovery
- GitHub Actions workflow validation
- Netlify functions monitoring
- Git synchronization with multiple strategies
- Build system monitoring and recovery
- Comprehensive health monitoring
- Automated log management
- Emergency recovery procedures

---

**Note**: This redundancy system is designed to work alongside existing automation systems, providing backup and monitoring capabilities without interfering with normal operations.