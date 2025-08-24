# Enhanced Redundancy Automation System

## Overview

This enhanced redundancy automation system provides comprehensive backup, monitoring, and recovery for all PM2 automations, GitHub Actions workflows, and Netlify functions. It ensures maximum uptime and automatic recovery from failures through multiple layers of redundancy.

## 🚀 Features

### Core Capabilities
- **Comprehensive Coverage**: Monitors PM2 processes, GitHub Actions workflows, and Netlify functions
- **Automatic Backup**: Continuous backup of all configuration files and automation scripts
- **Health Monitoring**: Real-time health checks with configurable thresholds
- **Auto-Recovery**: Automatic recovery from failures with multiple fallback strategies
- **Emergency Mode**: Automatic emergency response when system health drops below critical levels
- **Unified Orchestration**: Master orchestrator coordinates all redundancy systems

### Enhanced Systems

#### 1. Enhanced PM2 Redundancy (`enhanced-pm2-redundancy.cjs`)
- Monitors all PM2 processes and ecosystem files
- Automatic process restart and recovery
- Resource usage monitoring (CPU, memory)
- Backup and restore of ecosystem configurations
- Emergency recovery procedures

#### 2. Enhanced GitHub Actions Redundancy (`enhanced-github-actions-redundancy.cjs`)
- Monitors all GitHub Actions workflows
- YAML validation and syntax checking
- Automatic workflow triggering
- Backup and restore of workflow files
- Git-based recovery mechanisms

#### 3. Enhanced Netlify Functions Redundancy (`enhanced-netlify-functions-redundancy.cjs`)
- Monitors all Netlify functions
- Function validation and health checks
- Automatic deployment and redeployment
- Backup and restore of function configurations
- Local build and deployment fallbacks

#### 4. Master Redundancy Orchestrator (`master-redundancy-orchestrator.cjs`)
- Coordinates all redundancy systems
- Overall system health monitoring
- Emergency mode management
- System-wide backup and recovery
- Unified reporting and logging

## 📁 File Structure

```
automation/
├── enhanced-pm2-redundancy.cjs          # Enhanced PM2 redundancy system
├── enhanced-github-actions-redundancy.cjs # Enhanced GitHub Actions redundancy
├── enhanced-netlify-functions-redundancy.cjs # Enhanced Netlify functions redundancy
├── master-redundancy-orchestrator.cjs   # Master orchestrator
├── start-enhanced-redundancy.sh         # Startup script
└── logs/                                # Log files directory
    ├── enhanced-pm2-out.log
    ├── enhanced-github-out.log
    ├── enhanced-netlify-out.log
    └── master-orchestrator-out.log

ecosystem.enhanced-redundancy.cjs        # Enhanced PM2 ecosystem configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- PM2 (globally installed)
- Git access to the repository
- Appropriate permissions for file operations

### Quick Start

1. **Clone and navigate to the repository:**
   ```bash
   cd /path/to/your/repository
   ```

2. **Make the startup script executable:**
   ```bash
   chmod +x automation/start-enhanced-redundancy.sh
   ```

3. **Start the enhanced redundancy system:**
   ```bash
   ./automation/start-enhanced-redundancy.sh
   ```

4. **Verify the system is running:**
   ```bash
   pm2 list
   pm2 logs
   ```

### Manual Setup

1. **Start the master orchestrator:**
   ```bash
   pm2 start ecosystem.enhanced-redundancy.cjs --only master-redundancy-orchestrator
   ```

2. **Start individual redundancy systems:**
   ```bash
   pm2 start ecosystem.enhanced-redundancy.cjs --only enhanced-pm2-redundancy
   pm2 start ecosystem.enhanced-redundancy.cjs --only enhanced-github-actions-redundancy
   pm2 start ecosystem.enhanced-redundancy.cjs --only enhanced-netlify-functions-redundancy
   ```

3. **Save PM2 configuration:**
   ```bash
   pm2 save
   pm2 startup
   ```

## 🔧 Configuration

### Environment Variables

#### Master Orchestrator
```bash
REDUNDANCY_LOG_LEVEL=INFO
REDUNDANCY_CHECK_INTERVAL=60000
REDUNDANCY_BACKUP_INTERVAL=900000
REDUNDANCY_EMERGENCY_THRESHOLD=0.5
```

#### Enhanced PM2 Redundancy
```bash
PM2_CHECK_INTERVAL=30000
PM2_MAX_RESTARTS=5
PM2_BACKUP_INTERVAL=300000
```

#### Enhanced GitHub Actions Redundancy
```bash
GITHUB_CHECK_INTERVAL=60000
GITHUB_MAX_FAILURES=3
GITHUB_BACKUP_INTERVAL=300000
```

#### Enhanced Netlify Functions Redundancy
```bash
NETLIFY_CHECK_INTERVAL=120000
NETLIFY_MAX_FAILURES=3
NETLIFY_BACKUP_INTERVAL=600000
```

### Configuration Files

The system uses the existing `automation/redundancy-config.json` for backward compatibility, but the enhanced systems have their own internal configurations that can be customized by modifying the source files.

## 📊 Monitoring & Health Checks

### Health Metrics
- **Process Status**: Online/offline status of all monitored processes
- **Resource Usage**: CPU and memory consumption monitoring
- **Failure Counts**: Track repeated failures for escalation
- **Recovery Success**: Monitor recovery attempt success rates
- **Overall Health**: System-wide health score (0.0 - 1.0)

### Health Thresholds
- **Warning**: 0.8 (80%) - System performance degraded
- **Critical**: 0.5 (50%) - Emergency mode triggered
- **Recovery**: 0.8 (80%) - Exit emergency mode

### Emergency Mode
When system health drops below 50%, the system automatically:
1. Stops all monitoring to prevent interference
2. Performs emergency backup of all systems
3. Attempts full system recovery
4. Restarts monitoring once health is restored

## 🔄 Recovery Mechanisms

### PM2 Recovery
1. **Process Restart**: Attempt to restart failed processes
2. **Ecosystem Restart**: Restart from ecosystem file if process restart fails
3. **Backup Restoration**: Restore from backup if all else fails
4. **Emergency Recovery**: Kill all PM2 processes and restart from scratch

### GitHub Actions Recovery
1. **Workflow Validation**: Check and fix YAML syntax issues
2. **Workflow Triggering**: Manually trigger failed workflows
3. **Backup Restoration**: Restore workflow files from backup
4. **Git-based Recovery**: Use git operations to restore workflows

### Netlify Functions Recovery
1. **Function Validation**: Check function syntax and configuration
2. **Local Build**: Attempt local compilation and building
3. **Redeployment**: Redeploy functions to Netlify
4. **Backup Restoration**: Restore from backup if deployment fails

## 📝 Logging & Reporting

### Log Files
- **Master Orchestrator**: `automation/logs/master-orchestrator-out.log`
- **Enhanced PM2**: `automation/logs/enhanced-pm2-out.log`
- **Enhanced GitHub**: `automation/logs/enhanced-github-out.log`
- **Enhanced Netlify**: `automation/logs/enhanced-netlify-out.log`

### Health Reports
- **PM2 Health Report**: `automation/logs/pm2-health-report.json`
- **GitHub Actions Health Report**: `automation/logs/github-actions-health-report.json`
- **Netlify Functions Health Report**: `automation/logs/netlify-functions-health-report.json`
- **Master Report**: `automation/logs/master-redundancy-report.json`

### Log Rotation
All log files are automatically rotated when they exceed 10MB, with timestamped backup files created.

## 🚨 Troubleshooting

### Common Issues

#### PM2 Processes Not Starting
```bash
# Check PM2 status
pm2 list

# View PM2 logs
pm2 logs

# Restart specific process
pm2 restart enhanced-pm2-redundancy

# Check ecosystem file
node automation/enhanced-pm2-redundancy.cjs status
```

#### GitHub Actions Workflows Failing
```bash
# Check workflow health
node automation/enhanced-github-actions-redundancy.cjs status

# Validate workflow syntax
node automation/enhanced-github-actions-redundancy.cjs report

# Trigger manual recovery
node automation/enhanced-github-actions-redundancy.cjs recovery
```

#### Netlify Functions Issues
```bash
# Check function health
node automation/enhanced-netlify-functions-redundancy.cjs status

# Regenerate manifest
node automation/enhanced-netlify-functions-redundancy.cjs manifest

# Deploy functions
node automation/enhanced-netlify-functions-redundancy.cjs deploy
```

### Emergency Procedures

#### System-Wide Recovery
```bash
# Enter emergency mode
node automation/master-redundancy-orchestrator.cjs emergency

# Perform full recovery
node automation/master-redundancy-orchestrator.cjs recovery

# Emergency shutdown (if needed)
node automation/master-redundancy-orchestrator.cjs shutdown
```

#### Manual Backup/Restore
```bash
# Backup all systems
node automation/master-redundancy-orchestrator.cjs backup

# Restore from backup
node automation/master-redundancy-orchestrator.cjs restore

# Individual system backup
node automation/enhanced-pm2-redundancy.cjs backup
node automation/enhanced-github-actions-redundancy.cjs backup
node automation/enhanced-netlify-functions-redundancy.cjs backup
```

## 🔒 Security Considerations

### File Permissions
- Ensure log and backup directories have appropriate permissions
- Restrict access to configuration files containing sensitive information
- Use environment variables for API keys and tokens

### Network Security
- GitHub Actions workflows run in isolated environments
- Netlify functions are deployed with appropriate security headers
- PM2 processes run with minimal required privileges

### Backup Security
- Backup files are stored locally by default
- Consider encrypting sensitive backup data
- Implement backup rotation and cleanup policies

## 📈 Performance & Scalability

### Resource Usage
- **Memory**: Each redundancy system uses ~50-100MB RAM
- **CPU**: Minimal CPU usage during normal operation
- **Disk**: Log files and backups can grow over time (implement rotation)

### Scaling Considerations
- Systems can be run on multiple servers for high availability
- Load balancing can be implemented for the master orchestrator
- Database backends can be added for centralized monitoring

### Optimization
- Adjust check intervals based on system requirements
- Implement selective monitoring for large deployments
- Use clustering for high-traffic scenarios

## 🔄 Maintenance & Updates

### Regular Maintenance
1. **Monitor log files** for errors and warnings
2. **Review health reports** for system performance trends
3. **Clean up old backups** to prevent disk space issues
4. **Update dependencies** to maintain security and compatibility

### System Updates
1. **Backup current configuration** before updates
2. **Test updates** in a staging environment
3. **Rollback procedures** should be documented and tested
4. **Monitor system health** after updates

### Backup Management
- **Automatic backups** occur every 5-15 minutes
- **Manual backups** can be triggered at any time
- **Backup retention** should be configured based on storage constraints
- **Backup verification** should be performed regularly

## 🤝 Contributing

### Development Guidelines
1. **Follow existing code patterns** and naming conventions
2. **Add comprehensive logging** for debugging
3. **Include error handling** for all external operations
4. **Write tests** for new functionality
5. **Update documentation** for any changes

### Testing
```bash
# Test individual systems
node automation/enhanced-pm2-redundancy.cjs status
node automation/enhanced-github-actions-redundancy.cjs status
node automation/enhanced-netlify-functions-redundancy.cjs status

# Test master orchestrator
node automation/master-redundancy-orchestrator.cjs status

# Test startup script
./automation/start-enhanced-redundancy.sh --status
```

## 📚 Additional Resources

### Documentation
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)

### Related Files
- `ecosystem.pm2.cjs` - Original PM2 configuration
- `ecosystem.redundancy.cjs` - Legacy redundancy configuration
- `automation/redundancy-config.json` - Configuration settings
- `README_REDUNDANCY_AUTOMATION.md` - Original redundancy documentation

### Support
For issues and questions:
1. Check the troubleshooting section above
2. Review log files for error details
3. Check system health reports
4. Use the emergency recovery procedures if needed

---

**Note**: This enhanced redundancy system is designed to work alongside existing automation systems while providing additional layers of protection and monitoring. It maintains backward compatibility while adding new capabilities for improved reliability and recovery.