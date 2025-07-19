# Zion App Continuous Development System

## Overview

The Zion App Continuous Development System is an automated system that keeps your app running, improving, and developing 24/7. It monitors the application, detects issues, applies fixes, and continuously improves the codebase.

## Features

### 🔍 **Continuous Monitoring**
- Health checks every minute
- TypeScript error detection
- Linting issue monitoring
- Security vulnerability scanning
- Performance monitoring

### 🔧 **Automated Fixes**
- Automatic TypeScript error fixes
- Linting issue resolution
- Security vulnerability patching
- Performance optimizations
- Dynamic route fixes

### 📝 **Auto-Commit System**
- Automatic commits every 10 minutes (if changes detected)
- Detailed commit messages with timestamps
- Automatic push to main branch
- Issue and improvement tracking

### 🚀 **24/7 Operation**
- Systemd service (Linux)
- Launchd service (macOS)
- Automatic restart on failure
- Graceful shutdown handling

## Quick Start

### Option 1: Manual Start
```bash
# Start the development server
npm run dev

# In another terminal, start the continuous development system
./scripts/start-simple-continuous.sh
```

### Option 2: macOS Service (Recommended)
```bash
# Install the launchd service
sudo cp scripts/com.zion.app.continuous-dev.plist ~/Library/LaunchAgents/

# Load and start the service
launchctl load ~/Library/LaunchAgents/com.zion.app.continuous-dev.plist
launchctl start com.zion.app.continuous-dev

# Check status
launchctl list | grep zion
```

### Option 3: Linux Service
```bash
# Install the systemd service
sudo cp scripts/zion-continuous-dev.service /etc/systemd/system/

# Enable and start the service
sudo systemctl enable zion-continuous-dev
sudo systemctl start zion-continuous-dev

# Check status
sudo systemctl status zion-continuous-dev
```

## System Components

### 1. Simple Continuous Development (`scripts/simple-continuous-dev.cjs`)
The main automation engine that:
- Monitors application health
- Runs improvement cycles
- Handles auto-commits
- Manages error recovery

### 2. Health Monitoring
- Checks `/api/health` endpoint every minute
- Monitors memory usage
- Tracks uptime
- Detects server failures

### 3. Improvement Cycles
Runs every 5 minutes:
- TypeScript error checking
- Linting issue detection
- Security vulnerability scanning
- Performance optimization
- Automated fixes

### 4. Auto-Commit System
- Monitors for changes every 10 minutes
- Creates detailed commit messages
- Automatically pushes to main branch
- Tracks fixes and improvements

## Configuration

### Environment Variables
```bash
NODE_ENV=development
PORT=3001
```

### Log Files
- `logs/simple-continuous-dev.log` - Main system logs
- `logs/continuous-dev-error.log` - Error logs (macOS service)
- `logs/dev-server.log` - Development server logs

## Monitoring and Control

### Check System Status
```bash
# Check if the system is running
ps aux | grep simple-continuous-dev

# Check logs
tail -f logs/simple-continuous-dev.log

# Check health endpoint
curl http://localhost:3001/api/health
```

### Stop the System
```bash
# Manual stop
pkill -f simple-continuous-dev

# macOS service stop
launchctl stop com.zion.app.continuous-dev
launchctl unload ~/Library/LaunchAgents/com.zion.app.continuous-dev.plist

# Linux service stop
sudo systemctl stop zion-continuous-dev
sudo systemctl disable zion-continuous-dev
```

## Troubleshooting

### Common Issues

#### 1. Port 3001 Already in Use
```bash
# Find and kill the process using port 3001
lsof -ti:3001 | xargs kill -9
```

#### 2. Service Not Starting
```bash
# Check logs
tail -f logs/simple-continuous-dev.log

# Check permissions
ls -la scripts/simple-continuous-dev.cjs
chmod +x scripts/simple-continuous-dev.cjs
```

#### 3. Git Issues
```bash
# Check git status
git status

# Check remote configuration
git remote -v
```

### Debug Mode
To run in debug mode with more verbose logging:
```bash
DEBUG=true node scripts/simple-continuous-dev.cjs
```

## Integration with Cursor

The continuous development system is designed to work seamlessly with Cursor:

1. **Real-time Monitoring**: The system monitors the app and reports issues
2. **Auto-Fixes**: Automatically applies fixes for common issues
3. **Commit Integration**: Creates commits that trigger Cursor's AI improvements
4. **Health Checks**: Ensures the app stays healthy for development

## Safety Features

### Graceful Shutdown
- Handles SIGINT and SIGTERM signals
- Saves current state before shutdown
- Cleans up processes properly

### Error Recovery
- Automatic restart on failure
- Exponential backoff for repeated failures
- Detailed error logging

### Data Protection
- No sensitive data in logs
- Secure environment variable handling
- Safe git operations

## Performance Impact

The continuous development system is designed to be lightweight:
- Minimal CPU usage (< 1% typically)
- Low memory footprint (~30MB)
- Non-blocking operations
- Efficient polling intervals

## Future Enhancements

Planned improvements:
- Web dashboard for monitoring
- Slack/Discord notifications
- Advanced performance metrics
- Machine learning for issue prediction
- Integration with CI/CD pipelines

## Support

For issues or questions:
1. Check the logs in `logs/simple-continuous-dev.log`
2. Review this documentation
3. Check the health endpoint at `http://localhost:3001/api/health`
4. Restart the service if needed

---

**Note**: This system is designed to run continuously and will automatically improve your app over time. It's safe to leave running 24/7 and will handle most issues automatically. 