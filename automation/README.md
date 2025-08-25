# Zion Automation System

A comprehensive automation system for the Zion Tech Group application, featuring intelligent monitoring, link health management, and performance optimization.

## 🚀 Quick Start

### Start All Automation Systems
```bash
cd automation
node start-automation.js
```

### Check System Status
```bash
node check-status.js
```

### Start Individual Services
```bash
# Enhanced Autonomous System Manager
node launch-enhanced-autonomous-system.js start

# ML Link Intelligence
node ml-link-intelligence.cjs

# Link Health Scheduler
node link-health-scheduler.cjs

# Real-Time Performance Monitor
node real-time-performance-monitor.cjs

# Autonomous System Manager
node autonomous-system-manager.cjs start
```

## 📋 System Overview

### 1. Enhanced Autonomous System Manager (`launch-enhanced-autonomous-system.js`)
- **Purpose**: Central coordinator for all automation services
- **Features**: 
  - Service lifecycle management
  - Automatic restart on failure
  - Health monitoring and alerting
  - Configuration management
- **Commands**: `start`, `stop`, `restart`, `status`, `health`

### 2. ML Link Intelligence (`ml-link-intelligence.cjs`)
- **Purpose**: Intelligent link analysis and health monitoring
- **Features**:
  - Link health scoring (security, performance, SEO)
  - Domain authority calculation
  - Response time monitoring
  - Intelligent queue management
- **Data**: Stores analyzed links in `data/analyzed-links.json`

### 3. Link Health Scheduler (`link-health-scheduler.cjs`)
- **Purpose**: Scheduled link health checks with priority management
- **Features**:
  - Priority-based scheduling (critical, high, medium, low)
  - Configurable check intervals
  - Retry logic with exponential backoff
  - Concurrent job management
- **Data**: Stores schedule and link data in `data/` directory

### 4. Real-Time Performance Monitor (`real-time-performance-monitor.cjs`)
- **Purpose**: System performance monitoring and alerting
- **Features**:
  - CPU, memory, and disk monitoring
  - Configurable thresholds
  - Alert generation and handling
  - Performance metrics storage
- **Data**: Stores metrics and alerts in `data/` directory

### 5. Autonomous System Manager (`autonomous-system-manager.cjs`)
- **Purpose**: Core system management with decision engine
- **Features**:
  - Service orchestration
  - Intelligent decision making
  - Health checks and alerting
  - State persistence
- **Data**: Stores configuration and state in `data/` directory

## 🔧 Configuration

### Service Configuration
Each service can be configured through the configuration files in the `data/` directory:

- **Intervals**: How often services perform their tasks
- **Restart Limits**: Maximum restart attempts before disabling
- **Priority Levels**: Service importance for resource allocation
- **Thresholds**: Alert and warning levels for monitoring

### Default Settings
- **ML Link Intelligence**: Checks every 2 minutes
- **Link Health Scheduler**: Critical links every 5 minutes, low priority every 2 hours
- **Performance Monitor**: Metrics every 30 seconds
- **System Manager**: Health checks every 30 seconds

## 📊 Monitoring and Logs

### Log Files
All services log to the `logs/` directory:
- `autonomous-system-manager.runtime.log`
- `ml-link-intelligence.runtime.log`
- `link-health-scheduler.runtime.log`
- `real-time-performance-monitor.runtime.log`

### Data Files
Service data is stored in the `data/` directory:
- Configuration files
- Performance metrics
- Link analysis results
- System state information

### Health Monitoring
- **Green (🟢)**: Service is healthy and running
- **Yellow (🟡)**: Service needs attention
- **Red (🔴)**: Service is offline or has critical issues

## 🚨 Alerting System

### Alert Levels
- **Critical**: Immediate attention required
- **Warning**: Monitor and investigate
- **Info**: Informational messages

### Alert Categories
- **CPU**: High CPU usage
- **Memory**: Memory pressure
- **Service**: Service failures or restarts
- **Performance**: Response time issues

## 🔄 Automation Features

### Auto-Restart
- Services automatically restart on failure
- Configurable restart delays and limits
- Intelligent backoff strategies

### Load Balancing
- Concurrent job management
- Resource optimization
- Priority-based scheduling

### Decision Engine
- Automated problem resolution
- Service optimization
- Resource allocation

## 📈 Performance Optimization

### Resource Management
- Memory usage monitoring
- CPU load balancing
- Disk space monitoring
- Network interface tracking

### Scaling
- Automatic service scaling based on load
- Resource allocation optimization
- Performance threshold management

## 🛠️ Troubleshooting

### Common Issues

1. **Service Not Starting**
   - Check log files for error messages
   - Verify Node.js version compatibility
   - Check file permissions

2. **High Resource Usage**
   - Review service intervals
   - Check for memory leaks
   - Monitor CPU usage patterns

3. **Service Crashes**
   - Check restart limits
   - Review error logs
   - Verify configuration files

### Debug Mode
Enable verbose logging by setting environment variables:
```bash
export DEBUG=true
export LOG_LEVEL=debug
```

## 🔐 Security Considerations

- All credentials are handled via environment variables
- No sensitive data is logged
- Service isolation and sandboxing
- Secure communication between services

## 📚 API Reference

### Service Management
```javascript
const AutonomousSystem = require('./launch-enhanced-autonomous-system.js');
const system = new AutonomousSystem();

// Start all services
await system.startAll();

// Check status
const status = system.getStatus();

// Health check
const health = await system.healthCheck();
```

### Link Intelligence
```javascript
const MLLinkIntelligence = require('./ml-link-intelligence.cjs');
const intelligence = new MLLinkIntelligence();

// Analyze a link
const analysis = await intelligence.analyzeLink('https://example.com');

// Get health report
const report = intelligence.generateReport();
```

## 🤝 Contributing

1. Follow the existing code structure
2. Add comprehensive logging
3. Include error handling
4. Update documentation
5. Test thoroughly before committing

## 📄 License

This automation system is part of the Zion Tech Group application and follows the same licensing terms.

## 🆘 Support

For issues or questions:
1. Check the logs in the `logs/` directory
2. Review this documentation
3. Check the service status with `node check-status.js`
4. Restart services if needed

---

**Last Updated**: $(date)
**Version**: 1.0.0
**Maintainer**: Zion Tech Group Development Team
