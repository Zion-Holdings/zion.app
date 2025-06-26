# Monitoring System Improvements

## Overview

The project monitoring system has been significantly improved to provide better stability, reduced false positives, and more intelligent self-healing capabilities.

## Key Improvements

### 1. Fixed Build Issues ✅
- **Search Component Type Error**: Fixed `SearchResult` interface to include all result types (`blog`, `product`, `talent`, etc.)
- **Price Property Mismatch**: Converted `null` to `undefined` for consistent typing
- **Missing Imports**: Resolved TypeScript import issues in components
- **Chatbot Safety**: Added null-safety checks for array access

### 2. Enhanced Watchdog System 🔧

#### Improved Resource Monitoring
- **Conservative Thresholds**: Raised memory threshold to 95% and CPU threshold to 95%
- **Reduced CPU Checks**: Lowered sustained CPU checks from 10 to 3 for faster response
- **Smart Logging**: Only logs resource usage when concerning (>85%)
- **Development Mode**: Automatically uses more relaxed thresholds in development

#### Prevented Multiple Instances
- **PID File Management**: Ensures only one watchdog instance runs at a time
- **Graceful Shutdown**: Proper cleanup on SIGINT/SIGTERM signals
- **Stale Process Detection**: Automatically removes stale PID files

#### Rate Limiting & Cooldowns
- **5-Minute Cooldown**: Prevents rapid successive self-heal attempts
- **Command Timeout**: 10-minute timeout for self-heal commands
- **Better Error Handling**: Improved logging and error recovery

#### Optional Discord Integration
- **Webhook Configuration**: Only sends alerts when `DISCORD_WEBHOOK_URL` is configured
- **No More Warning Spam**: Eliminated repeated "webhook not configured" warnings

### 3. Log Management 📋
- **Log Clearing Script**: `scripts/clear-logs.js` to reset monitoring state
- **Better Log Rotation**: Prevents log files from growing indefinitely
- **Structured Logging**: More informative log messages with timestamps

## Usage

### NPM Scripts

```bash
# Start the watchdog monitoring (production)
npm run watchdog:start

# Clear logs and reset monitoring state
npm run watchdog:clear

# Check if watchdog is running
npm run watchdog:status

# View live self-heal logs
npm run logs:view

# Monitor current system resources
npm run monitor:resources
```

### Environment Configuration

Create a `.env.local` file with optional watchdog settings:

```env
# Discord webhook for alerts (optional)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url

# Custom log directory (optional, defaults to ./logs)
WATCHDOG_LOG_PATH=/custom/log/path

# Development mode for relaxed monitoring
WATCHDOG_DEV_MODE=true

# Custom thresholds (optional)
WATCHDOG_MEMORY_THRESHOLD=0.90
WATCHDOG_CPU_THRESHOLD=0.90
WATCHDOG_CPU_CHECKS=5
WATCHDOG_CHECK_INTERVAL=60000
WATCHDOG_COOLDOWN=300000
```

### Configuration Options

The watchdog system now supports environment-based configuration:

- **Memory Threshold**: Percentage of memory usage before triggering alerts
- **CPU Threshold**: Percentage of CPU usage before triggering alerts  
- **Check Intervals**: How often to monitor system resources
- **Cooldown Periods**: Minimum time between self-heal attempts
- **Log Patterns**: Custom regex patterns for log monitoring

## Development Mode

When `NODE_ENV=development` or `WATCHDOG_DEV_MODE=true`:
- Memory threshold: 98% (more conservative)
- CPU threshold: 98% (more conservative)
- Sustained checks: 5 (requires more consistent high usage)
- Check interval: 60 seconds (less frequent monitoring)

This prevents false alarms during normal development activities like building, testing, or debugging.

## Log Files

The monitoring system creates these log files in the `logs/` directory:

- `self-heal.log`: Main watchdog activity log
- `watchdog.pid`: Process ID file (auto-managed)
- `perf/hourly.log`: Performance monitoring (optional)
- `security/hourly-fix.log`: Security patch monitoring (optional)

## Troubleshooting

### Watchdog Won't Start
```bash
# Clear any stale processes and logs
npm run watchdog:clear

# Check if another instance is running
npm run watchdog:status

# Start fresh
npm run watchdog:start
```

### High Resource Usage Alerts
```bash
# Check current resource usage
npm run monitor:resources

# View recent self-heal activity
npm run logs:view

# Clear logs if needed
npm run logs:clear
```

### Build Failures
```bash
# Run build with full error output
npm run build

# Check for TypeScript issues
npm run typecheck

# Clean and rebuild
npm run deps:clean && npm run build
```

## Best Practices

1. **Production Deployment**: Always run the watchdog in production environments
2. **Discord Alerts**: Configure webhook URL for immediate notification of issues
3. **Log Monitoring**: Regularly check logs for patterns and performance issues
4. **Resource Planning**: Monitor baseline resource usage to set appropriate thresholds
5. **Testing**: Test self-heal procedures in staging before production deployment

## Security Considerations

- PID files prevent unauthorized process spawning
- Log files are created with appropriate permissions
- Self-heal commands are configurable and logged
- Discord webhooks use HTTPS for secure alert delivery

## Future Enhancements

- [ ] Prometheus/Grafana integration for metrics visualization
- [ ] Database connection monitoring
- [ ] API endpoint health checks
- [ ] Kubernetes deployment health monitoring
- [ ] Automated performance regression detection 