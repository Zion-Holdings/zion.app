# 🚀 Zion Tech Group Redundancy System

Complete redundancy automation system providing backup for all PM2, GitHub Actions, and Netlify functions automations.

## 📋 Overview

This redundancy system ensures continuous operation of your automation infrastructure by providing local PM2-based backups for all critical automation processes. If GitHub Actions fail, if Netlify functions become unavailable, or if any automation system goes down, the redundancy system automatically takes over.

## 🎯 What's Covered

### ✅ GitHub Actions Redundancy
- **Marketing Sync** - Automated LinkedIn and Instagram posting
- **Sync Health** - Repository health monitoring and sync operations

### ✅ Netlify Functions Redundancy
- **Functions Orchestration** - Automated function management and deployment
- **Build Triggers** - Automatic build initiation and monitoring
- **Health Validation** - Function health checks and reporting

### ✅ Build Automation Redundancy
- **Dependency Management** - Automatic dependency checking and installation
- **Linting & Type Checking** - Code quality validation
- **Build Process** - Automated build execution and validation
- **Output Validation** - Build output verification

### ✅ Content Generation Redundancy
- **Sitemap Generation** - Automatic sitemap creation
- **Search Index** - Search functionality maintenance
- **Content Quality** - Automated content optimization
- **README Generation** - Documentation maintenance

### ✅ Security & Health Redundancy
- **Security Scanning** - Automated security checks
- **NPM Audit** - Dependency vulnerability scanning
- **Environment Security** - Configuration file validation
- **System Health** - Overall system monitoring

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    REDUNDANCY SYSTEM                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   GitHub Actions│  │  PM2 Redundancy │  │Netlify Funcs│ │
│  │   (Primary)     │  │   (Backup)      │  │  (Backup)   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│              FAILOVER CONTROLLER                            │
│              (Automatic switching)                          │
├─────────────────────────────────────────────────────────────┤
│              HEALTH MONITOR                                 │
│              (Continuous monitoring)                        │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install -g pm2
npm install
```

### 2. Start the Redundancy System
```bash
chmod +x scripts/start-redundancy-system.sh
./scripts/start-redundancy-system.sh
```

### 3. Verify System Status
```bash
pm2 status
pm2 logs --lines 50
```

## 📁 File Structure

```
├── ecosystem.redundancy.cjs           # PM2 ecosystem configuration
├── automation/
│   └── redundancy/
│       ├── marketing-sync-redundancy.js      # Marketing automation backup
│       ├── sync-health-redundancy.js         # Sync health backup
│       ├── netlify-functions-redundancy.js   # Netlify functions backup
│       ├── build-automation-redundancy.js    # Build automation backup
│       ├── content-generation-redundancy.js  # Content generation backup
│       ├── security-health-redundancy.js     # Security monitoring backup
│       ├── redundancy-health-monitor.js      # System health monitoring
│       └── redundancy-failover-controller.js # Failover management
├── scripts/
│   └── start-redundancy-system.sh    # Startup script
└── README_REDUNDANCY_SYSTEM.md       # This documentation
```

## ⚙️ Configuration

### Environment Variables
```bash
# Marketing Sync
LINKEDIN_ACCESS_TOKEN=your_linkedin_token
LINKEDIN_URN=your_linkedin_urn
IG_USER_ID=your_instagram_user_id
IG_ACCESS_TOKEN=your_instagram_token

# Netlify Functions
NETLIFY_SITE_ID=your_site_id
NETLIFY_ACCESS_TOKEN=your_access_token

# Git Configuration
AUTO_SYNC_REMOTE=origin
AUTO_SYNC_BRANCH=main
```

### PM2 Ecosystem Configuration
The `ecosystem.redundancy.cjs` file contains all redundancy process configurations with:
- Automatic restart policies
- Cron-based scheduling
- Log management
- Environment variable injection
- Health monitoring

## 🔄 Process Scheduling

| Process | Frequency | Purpose |
|---------|-----------|---------|
| **Marketing Sync** | Every 12 hours | Social media automation |
| **Sync Health** | Every 15 minutes | Repository health monitoring |
| **Netlify Functions** | Every 30 minutes | Function management |
| **Build Automation** | Every 20 minutes | Build process monitoring |
| **Content Generation** | Every 6 hours | Content maintenance |
| **Security & Health** | Every 4 hours | Security monitoring |
| **Health Monitor** | Every 5 minutes | System health check |
| **Failover Controller** | Every 2 minutes | Failover management |

## 📊 Monitoring & Reporting

### Automatic Reports
Each redundancy process generates detailed reports:
- `marketing-sync-redundancy-report.md`
- `sync-health-redundancy-report.md`
- `netlify-functions-redundancy-report.md`
- `build-automation-redundancy-report.md`
- `content-generation-redundancy-report.md`
- `security-health-redundancy-report.md`
- `redundancy-health-monitor-report.md`
- `redundancy-failover-controller-report.md`

### Health Monitoring
The system continuously monitors:
- PM2 process status
- Log file health
- Report generation
- Script availability
- Ecosystem configuration

## 🚨 Failover Management

### Automatic Failover
The system automatically detects failures and switches between:
1. **Primary System** - Most reliable available system
2. **Secondary System** - Backup system
3. **Tertiary System** - Emergency backup

### Failover Triggers
- PM2 process failures
- GitHub Actions unavailability
- Netlify functions downtime
- Build process failures
- Security check failures

## 🛠️ Management Commands

### Start/Stop System
```bash
# Start redundancy system
pm2 start ecosystem.redundancy.cjs

# Stop redundancy system
pm2 stop ecosystem.redundancy.cjs

# Restart redundancy system
pm2 restart ecosystem.redundancy.cjs

# Delete redundancy system
pm2 delete ecosystem.redundancy.cjs
```

### Monitor System
```bash
# Check process status
pm2 status

# View logs
pm2 logs

# Monitor specific process
pm2 logs redundancy-health-monitor

# Check process details
pm2 show redundancy-marketing-sync
```

### Manual Process Execution
```bash
# Run individual redundancy processes
node automation/redundancy/marketing-sync-redundancy.js
node automation/redundancy/sync-health-redundancy.js
node automation/redundancy/netlify-functions-redundancy.js
node automation/redundancy/build-automation-redundancy.js
node automation/redundancy/content-generation-redundancy.js
node automation/redundancy/security-health-redundancy.js
node automation/redundancy/redundancy-health-monitor.js
node automation/redundancy/redundancy-failover-controller.js
```

## 🔧 Troubleshooting

### Common Issues

#### PM2 Not Running
```bash
# Check PM2 installation
npm list -g pm2

# Reinstall PM2 if needed
npm install -g pm2

# Check PM2 daemon
pm2 ping
```

#### Process Failures
```bash
# Check process logs
pm2 logs --lines 100

# Restart failed processes
pm2 restart all

# Check process configuration
pm2 show <process-name>
```

#### Permission Issues
```bash
# Fix log directory permissions
sudo chown -R $USER:$USER automation/logs
chmod 755 automation/logs

# Fix script permissions
chmod +x scripts/start-redundancy-system.sh
```

### Log Analysis
```bash
# View all redundancy logs
tail -f automation/logs/*.log

# Search for errors
grep -r "ERROR" automation/logs/

# Check recent activity
find automation/logs -name "*.log" -mtime -1
```

## 📈 Performance Optimization

### Resource Management
- **Memory**: Each process limited to 20MB buffer
- **CPU**: Cron-based scheduling prevents resource contention
- **Disk**: Automatic log rotation and cleanup
- **Network**: Efficient API calls with timeout management

### Scaling Considerations
- **Horizontal**: Add more PM2 instances
- **Vertical**: Increase process memory limits
- **Geographic**: Deploy across multiple regions
- **Load Balancing**: Use PM2 cluster mode

## 🔒 Security Features

### Access Control
- Environment variable protection
- Secure API token handling
- Git user configuration
- Process isolation

### Monitoring
- Security scan automation
- Vulnerability detection
- Dependency auditing
- Configuration validation

## 📚 API Reference

### Redundancy Process Functions
Each redundancy script exports functions for programmatic use:

```javascript
const { main, generateReport } = require('./automation/redundancy/marketing-sync-redundancy.js');

// Run the process
main();

// Generate report only
const reportPath = generateReport(results);
```

### Configuration Options
```javascript
// Environment variables
process.env.REDUNDANCY_MODE = "marketing-sync";
process.env.AUTO_SYNC_STRATEGY = "hardreset";
process.env.AUTO_SYNC_CLEAN = "1";
```

## 🤝 Contributing

### Adding New Redundancy Processes
1. Create new script in `automation/redundancy/`
2. Add process configuration to `ecosystem.redundancy.cjs`
3. Update health monitor to include new process
4. Add to failover controller strategy
5. Update documentation

### Testing
```bash
# Test individual processes
node automation/redundancy/<process-name>.js

# Test complete system
./scripts/start-redundancy-system.sh

# Validate configuration
pm2 validate ecosystem.redundancy.cjs
```

## 📞 Support

### Getting Help
- Check process logs: `pm2 logs`
- Review health reports in project root
- Check PM2 status: `pm2 status`
- Validate configuration: `pm2 validate`

### Emergency Procedures
1. **Stop all processes**: `pm2 stop all`
2. **Check system health**: `pm2 ping`
3. **Restart redundancy**: `pm2 start ecosystem.redundancy.cjs`
4. **Monitor logs**: `pm2 logs --lines 100`

## 🎉 Success Metrics

### System Health Indicators
- ✅ All redundancy processes running
- ✅ Recent log generation
- ✅ Report files up-to-date
- ✅ No failed processes
- ✅ Successful failover tests

### Performance Metrics
- **Uptime**: 99.9% target
- **Response Time**: <5 seconds for failover
- **Coverage**: 100% of critical automations
- **Reliability**: Zero single points of failure

---

**🚀 Your automation system now has complete redundancy coverage with zero downtime!**

For questions or support, check the logs and health reports generated by the system.