# Zion App 30-Minute Automation System

## Overview

The Zion App 30-Minute Automation System is a comprehensive automation framework that runs all automation scripts every 30 minutes, ensuring continuous improvement and maintenance of your application.

## 🚀 Quick Start

### Option 1: Manual Start (Recommended for testing)

```bash
npm run start-automation
```

### Option 2: Cron Jobs (Recommended for production)

```bash
npm run setup-cron
```

### Option 3: Direct Script Execution

```bash
./scripts/start-master-automation.sh
```

## 📋 Automation Scripts

The system runs the following automation scripts every 30 minutes:

### 1. **Zion App Maintainer** (`npm run maintain`)

- Main application maintenance and optimization
- Performance improvements
- System health checks

### 2. **Complete Zion Automation** (`npm run automate`)

- Comprehensive automation and fixes
- Issue detection and resolution
- Code quality improvements

### 3. **TypeScript Check** (`npm run typecheck`)

- TypeScript type checking and validation
- Type error detection
- Code type safety verification

### 4. **Linting Fix** (`npm run lint:fix`)

- ESLint fixes and code formatting
- Code style consistency
- Best practice enforcement

### 5. **Code Formatting** (`npm run format`)

- Prettier code formatting
- Consistent code style
- Readability improvements

### 6. **Security Audit** (`npm audit --audit-level moderate`)

- Security vulnerability scanning
- Dependency security checks
- Automatic security fixes

### 7. **Dependency Check** (`npm ls --depth=0`)

- Dependency health check
- Package version monitoring
- Dependency tree validation

### 8. **Build Test** (`npm run build`)

- Production build test
- Build error detection
- Deployment readiness verification

## 🔧 System Components

### Master Automation Scheduler (`scripts/master-automation-scheduler.cjs`)

- **Purpose**: Orchestrates all automation scripts
- **Schedule**: Every 30 minutes
- **Features**:
  - Parallel execution
  - Error handling
  - Result tracking
  - Health monitoring

### Startup Script (`scripts/start-master-automation.sh`)

- **Purpose**: Starts the automation system
- **Features**:
  - Prerequisites checking
  - Process monitoring
  - Graceful shutdown
  - Health monitoring

### Cron Setup (`scripts/setup-cron-automation.sh`)

- **Purpose**: Sets up system-level cron jobs
- **Features**:
  - Automatic scheduling
  - Log rotation
  - Status monitoring
  - Easy removal

## 📊 Monitoring & Control

### Check System Status

```bash
# Check automation status
npm run automation-status

# View real-time logs
tail -f logs/master-automation-scheduler.log

# Check cron job status
crontab -l | grep zion
```

### View Results

```bash
# View automation results
cat automation/scheduler-summary.json

# View health status
cat automation/scheduler-health.json

# View recent cycle results
ls -la automation/cycle-*.json
```

### Log Management

```bash
# View all automation logs
tail -f logs/cron-*.log

# Rotate logs manually
npm run rotate-logs

# Check log sizes
du -h logs/cron-*.log
```

## ⚙️ Configuration

### Environment Variables

```bash
NODE_ENV=development
PORT=3001
AUTOMATION_TIMEOUT=300000  # 5 minutes per automation
AUTOMATION_INTERVAL=1800000 # 30 minutes between cycles
```

### Customization

You can modify the automation list in `scripts/master-automation-scheduler.cjs`:

```javascript
this.automations = [
  {
    name: 'Custom Automation',
    command: 'your-custom-command',
    description: 'Your custom automation description',
  },
  // ... existing automations
];
```

## 📈 Performance & Monitoring

### Metrics Tracked

- **Total Cycles**: Number of automation cycles completed
- **Success Rate**: Percentage of successful automations
- **Duration**: Time taken for each cycle
- **Error Count**: Number of failed automations
- **Last Run**: Timestamp of last automation cycle
- **Next Run**: Scheduled time for next cycle

### Health Monitoring

- **Real-time Status**: Continuous health monitoring
- **Process Monitoring**: Automatic restart on failure
- **Resource Usage**: Memory and CPU monitoring
- **Log Rotation**: Automatic log management

## 🔄 Automation Cycle Flow

```
1. Start Cycle
   ↓
2. Run Zion App Maintainer
   ↓
3. Run Complete Zion Automation
   ↓
4. Run TypeScript Check
   ↓
5. Run Linting Fix
   ↓
6. Run Code Formatting
   ↓
7. Run Security Audit
   ↓
8. Run Dependency Check
   ↓
9. Run Build Test
   ↓
10. Save Results
    ↓
11. Update Health Status
    ↓
12. Schedule Next Cycle (30 minutes)
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. Automation Not Running

```bash
# Check if cron jobs are installed
crontab -l | grep zion

# Check if scheduler is running
ps aux | grep master-automation

# Check logs for errors
tail -f logs/master-automation-scheduler.log
```

#### 2. High Error Rate

```bash
# Check automation results
cat automation/scheduler-summary.json

# View detailed error logs
grep -r "ERROR" logs/cron-*.log

# Check individual automation logs
tail -f logs/cron-maintain.log
```

#### 3. Performance Issues

```bash
# Check resource usage
top -p $(pgrep -f master-automation)

# Check log sizes
du -h logs/cron-*.log

# Rotate logs if needed
npm run rotate-logs
```

### Debug Mode

```bash
# Run with debug logging
DEBUG=true node scripts/master-automation-scheduler.cjs

# Run single automation for testing
npm run maintain
```

## 🚀 Production Deployment

### Systemd Service (Linux)

```bash
# Install as system service
sudo cp scripts/zion-continuous-dev.service /etc/systemd/system/
sudo systemctl enable zion-continuous-dev
sudo systemctl start zion-continuous-dev
```

### Launchd Service (macOS)

```bash
# Install as user service
cp scripts/com.zion.app.continuous-dev.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.zion.app.continuous-dev.plist
launchctl start com.zion.app.continuous-dev
```

### Cron Jobs (Universal)

```bash
# Set up cron automation
npm run setup-cron

# Verify installation
npm run automation-status
```

## 📋 Maintenance

### Regular Tasks

- **Daily**: Check automation status and logs
- **Weekly**: Review automation results and success rates
- **Monthly**: Update automation scripts and dependencies
- **Quarterly**: Review and optimize automation performance

### Log Management

- **Automatic**: Daily log rotation at 2 AM
- **Manual**: `npm run rotate-logs`
- **Cleanup**: 7-day retention policy

### Performance Optimization

- **Monitoring**: Track execution times and resource usage
- **Optimization**: Adjust timeouts and intervals as needed
- **Scaling**: Add or remove automations based on needs

## 🔒 Security Considerations

### Access Control

- **User Permissions**: Run with appropriate user permissions
- **File Permissions**: Secure log and configuration files
- **Network Access**: Limit network access for automation scripts

### Data Protection

- **Log Security**: No sensitive data in logs
- **Environment Variables**: Secure handling of secrets
- **Audit Trail**: Complete automation audit trail

## 📞 Support

### Getting Help

1. **Check Status**: `npm run automation-status`
2. **View Logs**: Check logs in `logs/` directory
3. **Review Results**: Check `automation/` directory
4. **Restart System**: `npm run start-automation`

### Emergency Stop

```bash
# Stop all automation
pkill -f master-automation

# Remove cron jobs
npm run remove-cron

# Stop system services
sudo systemctl stop zion-continuous-dev  # Linux
launchctl stop com.zion.app.continuous-dev  # macOS
```

---

**Note**: This automation system is designed to run continuously and will automatically improve your app over time. It's safe to leave running 24/7 and will handle most issues automatically.
