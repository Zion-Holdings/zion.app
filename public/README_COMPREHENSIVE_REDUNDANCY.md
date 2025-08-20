# Comprehensive Redundancy Automation System

This repository now includes a comprehensive redundancy automation system that provides backup and recovery for all PM2, GitHub Actions, and Netlify Functions automations. The system ensures continuous operation even when primary automation systems fail.

## 🚀 System Overview

The comprehensive redundancy system consists of:

1. **Master Redundancy Orchestrator** - Coordinates all redundancy systems
2. **Enhanced PM2 Redundancy** - Monitors and recovers PM2 processes
3. **Enhanced GitHub Actions Redundancy** - Monitors and recovers GitHub Actions workflows
4. **Enhanced Netlify Functions Redundancy** - Monitors and recovers Netlify functions
5. **Legacy Systems** - Maintains backward compatibility with existing automation

## 📁 File Structure

```
automation/
├── comprehensive-redundancy-system.cjs          # Main comprehensive system
├── enhanced-pm2-redundancy.cjs                 # Enhanced PM2 redundancy
├── enhanced-github-actions-redundancy.cjs      # Enhanced GitHub Actions redundancy
├── enhanced-netlify-functions-redundancy.cjs   # Enhanced Netlify functions redundancy
├── master-redundancy-orchestrator.cjs          # Master orchestrator
├── start-comprehensive-redundancy.sh           # Startup script
└── [existing legacy files...]

ecosystem.comprehensive-redundancy.cjs          # Comprehensive PM2 ecosystem
```

## 🔧 Features

### Master Redundancy Orchestrator
- **Unified Control**: Single point of control for all redundancy systems
- **Health Monitoring**: Continuous monitoring of all subsystems
- **Auto Recovery**: Automatic recovery when systems fail
- **Load Balancing**: Distributes load across redundant systems
- **Centralized Logging**: Unified logging and monitoring

### Enhanced PM2 Redundancy
- **Process Health Monitoring**: Monitors all PM2 processes
- **Ecosystem Validation**: Validates PM2 ecosystem files
- **Auto Recovery**: Automatically restarts failed processes
- **Backup Management**: Creates and manages backups of ecosystem files
- **Log Analysis**: Monitors PM2 logs for errors and triggers recovery

### Enhanced GitHub Actions Redundancy
- **Workflow Validation**: Validates YAML syntax and structure
- **API Health Checks**: Monitors GitHub API status
- **Auto Triggering**: Automatically triggers workflows when needed
- **Backup Management**: Backs up workflow files
- **Repository Sync**: Ensures repository is in sync with remote

### Enhanced Netlify Functions Redundancy
- **Functions Manifest Management**: Monitors and regenerates functions manifest
- **Deployment Health**: Checks Netlify deployment status
- **Auto Regeneration**: Automatically regenerates outdated manifests
- **Configuration Validation**: Validates Netlify configuration
- **Backup Management**: Backs up Netlify configuration files

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install PM2 globally
npm install -g pm2

# Install required Node.js dependencies
npm install js-yaml
```

### 2. Start All Systems

```bash
# Make startup script executable
chmod +x automation/start-comprehensive-redundancy.sh

# Start all redundancy systems
./automation/start-comprehensive-redundancy.sh start
```

### 3. Check Status

```bash
# Check system status
./automation/start-comprehensive-redundancy.sh status

# View logs
./automation/start-comprehensive-redundancy.sh logs all
```

## 📋 Management Commands

### Startup Script Commands

```bash
# Start all systems
./automation/start-comprehensive-redundancy.sh start

# Stop all systems
./automation/start-comprehensive-redundancy.sh stop

# Restart all systems
./automation/start-comprehensive-redundancy.sh restart

# Check system status
./automation/start-comprehensive-redundancy.sh status

# View specific system logs
./automation/start-comprehensive-redundancy.sh logs master      # Master orchestrator
./automation/start-comprehensive-redundancy.sh logs pm2         # PM2 redundancy
./automation/start-comprehensive-redundancy.sh logs github      # GitHub Actions redundancy
./automation/start-comprehensive-redundancy.sh logs netlify     # Netlify functions redundancy
./automation/start-comprehensive-redundancy.sh logs all         # All systems

# Perform health check
./automation/start-comprehensive-redundancy.sh health

# Clean up old logs and backups
./automation/start-comprehensive-redundancy.sh cleanup

# Show help
./automation/start-comprehensive-redundancy.sh help
```

### PM2 Commands

```bash
# Start comprehensive redundancy ecosystem
pm2 start ecosystem.comprehensive-redundancy.cjs

# Check status
pm2 status

# View logs
pm2 logs

# Restart all
pm2 restart all

# Save configuration
pm2 save
```

## 🔍 Monitoring and Health Checks

### Health Check Intervals

- **Master Orchestrator**: Every 1 minute
- **PM2 Redundancy**: Every 30 seconds
- **GitHub Actions Redundancy**: Every 1 minute
- **Netlify Functions Redundancy**: Every 2 minutes

### Health Check Results

Health check results are stored in JSON format in the `automation/logs/` directory:

- `master-orchestrator-health-check-results.json`
- `pm2-health-check-results.json`
- `github-actions-health-check-results.json`
- `netlify-functions-health-check-results.json`

### Log Files

All systems generate comprehensive logs:

- **Master Orchestrator**: `master-orchestrator.log`
- **PM2 Redundancy**: `enhanced-pm2-redundancy.log`
- **GitHub Actions Redundancy**: `enhanced-github-actions-redundancy.log`
- **Netlify Functions Redundancy**: `enhanced-netlify-functions-redundancy.log`

## 💾 Backup and Recovery

### Backup Locations

- **PM2 Backups**: `automation/backups/pm2/`
- **GitHub Actions Backups**: `automation/backups/github-actions/`
- **Netlify Functions Backups**: `automation/backups/netlify-functions/`

### Backup Retention

- **Log Files**: 30 days
- **Backup Files**: 20 most recent
- **Health Check Results**: 100 most recent

### Auto Recovery

The system automatically:

1. **Detects Failures**: Monitors system health continuously
2. **Triggers Recovery**: Automatically attempts recovery when thresholds are exceeded
3. **Escalates**: Uses different recovery strategies based on failure count
4. **Notifies**: Logs all recovery actions for monitoring

## ⚙️ Configuration

### Environment Variables

```bash
# Master Orchestrator
REDUNDANCY_LOG_LEVEL=INFO
REDUNDANCY_MASTER_CHECK_INTERVAL=60000
REDUNDANCY_AUTO_RECOVERY=true
REDUNDANCY_LOAD_BALANCING=true

# PM2 Redundancy
PM2_REDUNDANCY_LOG_LEVEL=INFO
PM2_HEALTH_CHECK_INTERVAL=30000
PM2_MAX_RESTART_ATTEMPTS=5
PM2_AUTO_RECOVERY=true

# GitHub Actions Redundancy
GITHUB_REDUNDANCY_LOG_LEVEL=INFO
GITHUB_HEALTH_CHECK_INTERVAL=60000
GITHUB_MAX_FAILURES=3
GITHUB_AUTO_TRIGGER=true

# Netlify Functions Redundancy
NETLIFY_REDUNDANCY_LOG_LEVEL=INFO
NETLIFY_HEALTH_CHECK_INTERVAL=120000
NETLIFY_MAX_FAILURES=3
NETLIFY_AUTO_DEPLOY=true
```

### Customization

You can customize the behavior by modifying:

1. **Configuration files**: Edit the `.cjs` files in the `automation/` directory
2. **Environment variables**: Set environment variables before starting
3. **PM2 ecosystem**: Modify `ecosystem.comprehensive-redundancy.cjs`

## 🚨 Troubleshooting

### Common Issues

1. **PM2 Not Running**
   ```bash
   pm2 start
   ```

2. **Missing Dependencies**
   ```bash
   npm install js-yaml
   ```

3. **Permission Issues**
   ```bash
   chmod +x automation/start-comprehensive-redundancy.sh
   ```

4. **Log File Issues**
   ```bash
   ./automation/start-comprehensive-redundancy.sh cleanup
   ```

### Debug Mode

Enable debug logging by setting:

```bash
export REDUNDANCY_LOG_LEVEL=DEBUG
export PM2_REDUNDANCY_LOG_LEVEL=DEBUG
export GITHUB_REDUNDANCY_LOG_LEVEL=DEBUG
export NETLIFY_REDUNDANCY_LOG_LEVEL=DEBUG
```

## 🔄 Migration from Legacy Systems

The comprehensive redundancy system is designed to work alongside existing systems:

1. **No Breaking Changes**: All existing automation continues to work
2. **Gradual Migration**: You can migrate systems one at a time
3. **Backward Compatibility**: Legacy systems are maintained and monitored
4. **Enhanced Monitoring**: Existing systems get enhanced monitoring and recovery

### Migration Steps

1. **Install the new system** alongside existing systems
2. **Test the redundancy features** with non-critical automations
3. **Gradually migrate** critical systems to use redundancy features
4. **Monitor and adjust** configuration as needed

## 📊 Performance and Resource Usage

### Resource Requirements

- **Memory**: ~50-100MB per redundancy system
- **CPU**: Minimal impact (health checks every 30 seconds to 2 minutes)
- **Disk**: Logs and backups (configurable retention)
- **Network**: Minimal (health checks and API calls)

### Optimization

- **Health Check Intervals**: Adjust based on your needs
- **Log Retention**: Reduce retention periods for high-traffic systems
- **Backup Frequency**: Adjust backup frequency based on change rate

## 🔐 Security Considerations

- **Environment Variables**: Store sensitive tokens in environment variables
- **File Permissions**: Ensure backup directories have appropriate permissions
- **Network Access**: Limit network access for security-sensitive systems
- **Log Security**: Ensure logs don't contain sensitive information

## 🤝 Contributing

To contribute to the redundancy system:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 📝 License

This redundancy automation system is part of the main project and follows the same license terms.

## 🆘 Support

For support and questions:

1. **Check the logs**: Use the logging commands to diagnose issues
2. **Review health checks**: Check health check results for system status
3. **Consult documentation**: Review this README and inline code comments
4. **Submit issues**: Use the project's issue tracker

---

**Note**: This comprehensive redundancy system provides enterprise-grade reliability for your automation infrastructure. It's designed to run continuously and automatically recover from failures, ensuring your automations remain operational even under adverse conditions.