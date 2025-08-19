# Comprehensive Redundancy Automation System

This directory contains a complete redundancy automation system that provides comprehensive coverage for all PM2, GitHub Actions, and Netlify functions automations. The system is designed to ensure continuous operation and automatic recovery from failures.

## 🚀 System Overview

The redundancy system consists of multiple layers of automation that work together to ensure your application remains operational:

1. **Comprehensive Redundancy System** - Main orchestrator that coordinates all systems
2. **Enhanced PM2 Redundancy** - Monitors and recovers PM2 processes
3. **Enhanced GitHub Actions Redundancy** - Validates and fixes GitHub Actions workflows
4. **Enhanced Netlify Functions Redundancy** - Manages Netlify functions and deployment
5. **Master Orchestrator** - Coordinates all redundancy systems with priority-based recovery

## 📁 File Structure

```
automation/
├── comprehensive-redundancy-system.cjs      # Main comprehensive system
├── enhanced-pm2-redundancy.cjs             # PM2 process redundancy
├── enhanced-github-actions-redundancy.cjs  # GitHub Actions redundancy
├── enhanced-netlify-functions-redundancy.cjs # Netlify functions redundancy
├── master-redundancy-orchestrator.cjs      # Master orchestrator
├── start-comprehensive-redundancy.sh       # Startup script
├── redundancy-config.json                  # Configuration file
└── logs/                                   # Log files directory
```

## 🔧 Quick Start

### 1. Start the Entire System

```bash
# Start all redundancy systems
./automation/start-comprehensive-redundancy.sh start

# Check status
./automation/start-comprehensive-redundancy.sh status

# Stop the system
./automation/start-comprehensive-redundancy.sh stop
```

### 2. Individual System Control

```bash
# PM2 Redundancy
node automation/enhanced-pm2-redundancy.cjs --start
node automation/enhanced-pm2-redundancy.cjs --check

# GitHub Actions Redundancy
node automation/enhanced-github-actions-redundancy.cjs --start
node automation/enhanced-github-actions-redundancy.cjs --check

# Netlify Functions Redundancy
node automation/enhanced-netlify-functions-redundancy.cjs --start
node automation/enhanced-netlify-functions-redundancy.cjs --health-check

# Master Orchestrator
node automation/master-redundancy-orchestrator.cjs --start
node automation/master-redundancy-orchestrator.cjs --health-check
```

## 📋 System Components

### 1. Comprehensive Redundancy System

**File:** `comprehensive-redundancy-system.cjs`

The main system that provides comprehensive monitoring and recovery for all automation components.

**Features:**
- Monitors PM2 processes, GitHub Actions workflows, and Netlify functions
- Performs health checks every 5 minutes
- Automatic recovery from failures
- Comprehensive logging and reporting

**Usage:**
```bash
# Health check
node automation/comprehensive-redundancy-system.cjs --health-check

# Emergency recovery
node automation/comprehensive-redundancy-system.cjs --emergency-recovery

# Generate health report
node automation/comprehensive-redundancy-system.cjs --health-report
```

### 2. Enhanced PM2 Redundancy

**File:** `enhanced-pm2-redundancy.cjs`

Monitors and manages all PM2 processes with advanced recovery mechanisms.

**Features:**
- Real-time PM2 process monitoring
- Automatic process restart and recovery
- Health metrics collection
- Emergency recovery procedures
- Process validation and repair

**Monitored Processes:**
- `zion-auto-sync`
- `zion-auto-sync-cron`
- `redundancy-automation-system`
- `redundancy-health-monitor`
- `redundancy-git-sync`
- `redundancy-build-monitor`

**Usage:**
```bash
# Start monitoring
node automation/enhanced-pm2-redundancy.cjs --start

# Check all processes
node automation/enhanced-pm2-redundancy.cjs --check

# Emergency recovery
node automation/enhanced-pm2-redundancy.cjs --emergency-recovery

# Generate metrics
node automation/enhanced-pm2-redundancy.cjs --metrics
```

### 3. Enhanced GitHub Actions Redundancy

**File:** `enhanced-github-actions-redundancy.cjs`

Validates and maintains GitHub Actions workflows with automatic issue detection and repair.

**Features:**
- Workflow YAML validation
- Cron syntax validation
- Permission structure validation
- Automatic issue fixing
- Workflow backup and recovery
- Health monitoring and reporting

**Monitored Workflows:**
- `marketing-sync.yml`
- `sync-health.yml`

**Usage:**
```bash
# Start monitoring
node automation/enhanced-github-actions-redundancy.cjs --start

# Check all workflows
node automation/enhanced-github-actions-redundancy.cjs --check

# Emergency recovery
node automation/enhanced-github-actions-redundancy.cjs --emergency-recovery

# Generate workflow report
node automation/enhanced-github-actions-redundancy.cjs --report
```

### 4. Enhanced Netlify Functions Redundancy

**File:** `enhanced-netlify-functions-redundancy.cjs`

Manages Netlify functions deployment and health with comprehensive validation.

**Features:**
- Functions manifest validation
- Function file structure validation
- Automatic manifest regeneration
- Deployment status monitoring
- Backup and recovery procedures
- Health reporting

**Usage:**
```bash
# Start monitoring
node automation/enhanced-netlify-functions-redundancy.cjs --start

# Health check
node automation/enhanced-netlify-functions-redundancy.cjs --health-check

# Emergency recovery
node automation/enhanced-netlify-functions-redundancy.cjs --emergency-recovery

# Regenerate manifest
node automation/enhanced-netlify-functions-redundancy.cjs --regenerate-manifest

# Generate functions report
node automation/enhanced-netlify-functions-redundancy.cjs --report
```

### 5. Master Redundancy Orchestrator

**File:** `master-redundancy-orchestrator.cjs`

Coordinates all redundancy systems with intelligent recovery prioritization.

**Features:**
- System initialization and coordination
- Priority-based recovery queue
- Concurrent recovery management
- Comprehensive health monitoring
- System status tracking
- Centralized reporting

**Usage:**
```bash
# Start orchestration
node automation/master-redundancy-orchestrator.cjs --start

# Health check
node automation/master-redundancy-orchestrator.cjs --health-check

# Emergency recovery
node automation/master-redundancy-orchestrator.cjs --emergency-recovery

# Generate system report
node automation/master-redundancy-orchestrator.cjs --report
```

## 🚨 Emergency Recovery

### Automatic Recovery

The system automatically detects issues and attempts recovery:

1. **PM2 Processes**: Automatic restart and recovery
2. **GitHub Actions**: Workflow validation and fixing
3. **Netlify Functions**: Manifest regeneration and validation
4. **System Coordination**: Priority-based recovery queue

### Manual Recovery

```bash
# Emergency recovery for all systems
./automation/start-comprehensive-redundancy.sh restart

# Individual system recovery
node automation/enhanced-pm2-redundancy.cjs --emergency-recovery
node automation/enhanced-github-actions-redundancy.cjs --emergency-recovery
node automation/enhanced-netlify-functions-redundancy.cjs --emergency-recovery
```

## 📊 Monitoring and Reporting

### Health Checks

The system performs continuous health checks:

- **PM2**: Every 30 seconds
- **GitHub Actions**: Every 1 minute
- **Netlify Functions**: Every 2 minutes
- **Comprehensive**: Every 5 minutes
- **Orchestrator**: Every 1 minute

### Logs

All systems log to the `automation/logs/` directory:

- `comprehensive-redundancy-*.log` - Main system logs
- `enhanced-pm2-redundancy.log` - PM2 system logs
- `enhanced-github-actions-redundancy.log` - GitHub Actions logs
- `enhanced-netlify-functions-redundancy.log` - Netlify functions logs
- `master-orchestrator.log` - Orchestrator logs

### Reports

Generate comprehensive reports:

```bash
# System health report
node automation/master-redundancy-orchestrator.cjs --report

# Individual system reports
node automation/enhanced-pm2-redundancy.cjs --metrics
node automation/enhanced-github-actions-redundancy.cjs --report
node automation/enhanced-netlify-functions-redundancy.cjs --report
```

## ⚙️ Configuration

### Redundancy Config

Edit `automation/redundancy-config.json` to customize system behavior:

```json
{
  "orchestrator": {
    "enabled": true,
    "orchestrationInterval": 60000,
    "healthCheckInterval": 300000,
    "maxConcurrentRecoveries": 2,
    "autoRecovery": true
  },
  "pm2": {
    "enabled": true,
    "checkInterval": 30000,
    "autoRecovery": true
  },
  "githubActions": {
    "enabled": true,
    "checkInterval": 60000,
    "autoFix": true
  },
  "netlify": {
    "enabled": true,
    "checkInterval": 120000,
    "autoRegenerate": true
  }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **PM2 Not Running**
   ```bash
   node automation/enhanced-pm2-redundancy.cjs --emergency-recovery
   ```

2. **GitHub Actions Workflow Issues**
   ```bash
   node automation/enhanced-github-actions-redundancy.cjs --emergency-recovery
   ```

3. **Netlify Functions Problems**
   ```bash
   node automation/enhanced-netlify-functions-redundancy.cjs --emergency-recovery
   ```

4. **System Won't Start**
   ```bash
   ./automation/start-comprehensive-redundancy.sh stop
   ./automation/start-comprehensive-redundancy.sh start
   ```

### Log Analysis

Check logs for specific issues:

```bash
# View recent logs
tail -f automation/logs/comprehensive-redundancy-$(date +%Y-%m-%d).log

# Check system status
./automation/start-comprehensive-redundancy.sh status
```

## 🚀 Deployment

### Production Deployment

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the System**
   ```bash
   ./automation/start-comprehensive-redundancy.sh start
   ```

3. **Verify Operation**
   ```bash
   ./automation/start-comprehensive-redundancy.sh status
   ```

### Service Integration

The system can be integrated with systemd or other service managers:

```bash
# Create systemd service
sudo cp automation/redundancy-system.service /etc/systemd/system/
sudo systemctl enable redundancy-system
sudo systemctl start redundancy-system
```

## 📈 Performance

### Resource Usage

- **Memory**: ~50-100MB per system
- **CPU**: Minimal overhead (<1% during normal operation)
- **Disk**: Log rotation keeps logs under 100MB
- **Network**: Minimal network usage for health checks

### Scaling

The system is designed to scale with your infrastructure:

- Multiple instances can run simultaneously
- Load balancing across redundancy systems
- Configurable check intervals
- Priority-based recovery queue

## 🔒 Security

### Access Control

- All systems run with minimal required permissions
- Log files are protected from unauthorized access
- Configuration files contain no sensitive information
- Recovery procedures are logged and auditable

### Best Practices

1. **Regular Updates**: Keep the redundancy system updated
2. **Monitoring**: Monitor the redundancy system itself
3. **Backups**: Regular backups of configuration and logs
4. **Testing**: Test recovery procedures in staging environments

## 📞 Support

### Getting Help

1. **Check Logs**: Review system logs for error details
2. **Status Check**: Use status commands to identify issues
3. **Documentation**: Refer to this README and inline code comments
4. **Recovery**: Use emergency recovery procedures for critical issues

### Contributing

To contribute to the redundancy system:

1. Follow the existing code style
2. Add comprehensive error handling
3. Include logging for all operations
4. Test thoroughly before deployment
5. Update documentation for new features

## 🎯 Success Metrics

The redundancy system is successful when:

- **Uptime**: 99.9%+ system availability
- **Recovery Time**: <5 minutes for most failures
- **False Positives**: <1% of health check failures
- **Resource Usage**: <5% overhead on production systems
- **Maintenance**: <1 hour per month for system maintenance

---

**Note**: This redundancy system provides comprehensive coverage for all your automation needs. Regular monitoring and testing ensure optimal performance and reliability.