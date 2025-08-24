# Zion App Self-Healing System

A comprehensive automated system that monitors, detects, and fixes common issues in the Zion App after each build.

## 🚀 Features

- **Automatic Error Detection**: Monitors build logs, health endpoints, and system resources
- **Intelligent Fixes**: Applies targeted fixes for different types of errors
- **Continuous Monitoring**: Runs health checks and build monitoring in the background
- **Self-Healing**: Automatically repairs common issues without manual intervention
- **Comprehensive Logging**: Detailed logs for debugging and monitoring

## 📁 System Components

### Core Scripts

1. **`scripts/self-healing.js`** - Main self-healing system
2. **`scripts/health-monitor.js`** - Health monitoring and endpoint checking
3. **`scripts/build-monitor.js`** - Build process monitoring
4. **`scripts/auto-fix-errors.js`** - Automatic error fixing utilities

### Management Scripts

1. **`scripts/start-monitoring.sh`** - Start all monitoring systems
2. **`scripts/stop-monitoring.sh`** - Stop all monitoring systems
3. **`scripts/status-monitoring.sh`** - Check status of all systems

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+
- npm or yarn
- Bash shell (for management scripts)

### Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   npm install chokidar  # For file watching
   ```

2. **Start all monitoring systems**:

   ```bash
   chmod +x scripts/*.sh
   ./scripts/start-monitoring.sh
   ```

3. **Check status**:

   ```bash
   ./scripts/status-monitoring.sh
   ```

4. **Stop monitoring**:
   ```bash
   ./scripts/stop-monitoring.sh
   ```

## 🔧 Manual Usage

### Individual Scripts

```bash
# Start self-healing system only
npm run self-heal

# Start health monitoring only
npm run health-monitor

# Start build monitoring only
npm run build-monitor

# Run auto-fix system
npm run auto-fix

# Start all monitoring systems
npm run monitor
```

### Post-Build Healing

The system automatically runs after each build:

```bash
npm run build  # This will trigger self-healing automatically
```

## 🔍 What Gets Monitored

### Health Monitoring

- Application endpoints (main site, API, auth)
- Response times
- Error rates
- System resources (CPU, memory)

### Build Monitoring

- Build success/failure rates
- TypeScript compilation errors
- ESLint errors
- Dependency issues
- Import/export problems

### File Monitoring

- Critical configuration files
- Source code changes
- Environment variables
- Package dependencies

## 🩹 Automatic Fixes

### Dependency Issues

- Missing package installations
- Cache clearing and reinstallation
- Version conflicts resolution

### TypeScript Issues

- Import/export fixes
- Type annotation corrections
- Interface and generic fixes
- Path alias resolution

### Linting Issues

- ESLint auto-fixes
- Code formatting
- Unused import removal

### Configuration Issues

- Next.js configuration
- TypeScript configuration
- Tailwind CSS setup
- Environment variable validation

### Wallet Context Issues

- AppKit initialization
- Provider configuration
- Error handling improvements
- Type safety enhancements

### Supabase Issues

- Client configuration
- Server configuration
- Environment variable handling
- Connection error fixes

## 📊 Monitoring & Logs

### Log Files

- `logs/build.log` - Build process logs
- `logs/errors.log` - Error logs
- `logs/health-metrics.json` - Health metrics
- `logs/build-errors.log` - Build-specific errors

### Metrics Tracked

- Uptime
- Response times
- Error rates
- Memory usage
- CPU usage
- Build success rate

## ⚙️ Configuration

### Environment Variables

```bash
# Required for monitoring
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id

# Optional monitoring endpoints
NEXT_PUBLIC_APP_URL=https://zion-app.netlify.app
```

### Thresholds (Configurable)

```javascript
// In health-monitor.js
thresholds: {
  maxResponseTime: 5000,    // 5 seconds
  maxErrorRate: 0.1,        // 10%
  maxMemoryUsage: 0.9,      // 90%
  maxCpuUsage: 0.8          // 80%
}
```

## 🚨 Error Patterns Detected

The system recognizes and fixes these common error patterns:

- **Module not found** → Dependency installation
- **Cannot resolve module** → Import path fixes
- **TypeScript error** → Type and interface fixes
- **ESLint error** → Code formatting and linting
- **Tailwind CSS** → Styling configuration
- **Wallet connection** → Wallet context fixes
- **Supabase connection** → Database configuration
- **Environment variable** → Environment setup

## 🔄 Healing Process

1. **Detection**: System detects issues through monitoring
2. **Analysis**: Error patterns are analyzed and categorized
3. **Fix Selection**: Appropriate fix strategy is selected
4. **Application**: Fixes are applied automatically
5. **Verification**: System verifies fixes were successful
6. **Logging**: All actions are logged for audit trail

## 📈 Performance Impact

- **Minimal overhead**: Monitoring runs in background
- **Efficient fixes**: Targeted fixes minimize processing time
- **Smart scheduling**: Health checks run every 5 minutes
- **Resource aware**: Monitors system resources to avoid overload

## 🛡️ Safety Features

- **Backup creation**: Critical files are backed up before modification
- **Rollback capability**: Failed fixes can be rolled back
- **Error isolation**: Individual fix failures don't stop the system
- **Logging**: All actions are logged for audit and debugging

## 🔧 Troubleshooting

### Common Issues

1. **Scripts not executable**:

   ```bash
   chmod +x scripts/*.sh
   ```

2. **Permission denied**:

   ```bash
   sudo chmod +x scripts/*.sh
   ```

3. **Node modules missing**:

   ```bash
   npm install
   ```

4. **Chokidar not found**:
   ```bash
   npm install chokidar
   ```

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm run self-heal
```

### Manual Fix Application

Run specific fix categories:

```bash
# Fix dependencies only
node scripts/auto-fix-errors.js --dependencies

# Fix TypeScript only
node scripts/auto-fix-errors.js --typescript

# Fix all issues
node scripts/auto-fix-errors.js --all
```

## 📞 Support

For issues with the self-healing system:

1. Check the logs in `logs/` directory
2. Run `./scripts/status-monitoring.sh` for system status
3. Review the error patterns in the logs
4. Check if fixes were applied successfully

## 🔄 Continuous Improvement

The self-healing system learns from:

- Successful fix patterns
- Error recurrence rates
- Performance metrics
- User feedback

This allows the system to improve its fix strategies over time.

---

**Note**: This system is designed to be autonomous and will automatically fix common issues. Monitor the logs to ensure it's working as expected and intervene only when necessary.
