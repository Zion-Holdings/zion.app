# Self-Healing System API Reference

## Overview

This document provides a comprehensive API reference for the self-healing system components, including methods, events, configuration options, and usage examples.

## Core Classes

### NetlifySelfHealing

The main self-healing engine that orchestrates error detection and fix application.

#### Constructor

```javascript
const healing = new NetlifySelfHealing();
```

#### Properties

```javascript
{
  buildHistory: Array<BuildRecord>,
  currentBuild: BuildInfo | null,
  isRunning: boolean,
  retryCount: number,
  lastHealthCheck: number
}
```

#### Methods

##### `startMonitoring()`
Starts the self-healing monitoring system.

```javascript
await healing.startMonitoring();
```

**Returns**: `Promise<void>`

##### `performHealthCheck()`
Performs a comprehensive health check of the build system.

```javascript
await healing.performHealthCheck();
```

**Returns**: `Promise<void>`

**Events Emitted**:
- `health-check-start`
- `health-check-complete`
- `health-check-error`

##### `checkBuildStatus()`
Checks the current build status and identifies issues.

```javascript
const status = await healing.checkBuildStatus();
```

**Returns**: `Promise<BuildStatus>`

**BuildStatus Interface**:
```typescript
interface BuildStatus {
  needsAttention: boolean;
  issues: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
}
```

##### `triggerSelfHealing(issues: string[])`
Triggers the self-healing process for specific issues.

```javascript
await healing.triggerSelfHealing(['memory', 'timeout']);
```

**Parameters**:
- `issues`: Array of issue types to fix

**Returns**: `Promise<void>`

**Events Emitted**:
- `healing-start`
- `healing-progress`
- `healing-complete`
- `healing-error`

##### `applyFixStrategy(strategy: string)`
Applies a specific fix strategy.

```javascript
await healing.applyFixStrategy('increase-memory');
```

**Parameters**:
- `strategy`: The fix strategy to apply

**Returns**: `Promise<void>`

**Available Strategies**:
- `increase-memory`
- `optimize-bundle`
- `clean-cache`
- `increase-timeout`
- `optimize-build`
- `parallel-build`
- `clean-deps`
- `update-deps`
- `fix-peer-deps`
- `fix-types`
- `skip-type-check`
- `update-tsconfig`
- `auto-fix-lint`
- `skip-lint`
- `fix-lint-config`
- `clean-build`
- `fix-build-config`
- `retry-build`
- `use-cache`
- `offline-build`
- `fix-permissions`
- `change-owner`
- `clean-disk`
- `optimize-size`
- `update-node`
- `fix-node-version`
- `use-nvm`

##### `testFix(issue: string)`
Tests if a fix was successful for a specific issue.

```javascript
const result = await healing.testFix('memory');
```

**Parameters**:
- `issue`: The issue type to test

**Returns**: `Promise<TestResult>`

**TestResult Interface**:
```typescript
interface TestResult {
  success: boolean;
  error?: string;
  duration: number;
  metrics: {
    memoryUsage: number;
    buildTime: number;
    errorCount: number;
  };
}
```

##### `getStatus()`
Gets the current status of the self-healing system.

```javascript
const status = healing.getStatus();
```

**Returns**: `SystemStatus`

**SystemStatus Interface**:
```typescript
interface SystemStatus {
  isRunning: boolean;
  retryCount: number;
  lastHealthCheck: number;
  buildHistory: BuildRecord[];
  currentIssues: string[];
  performance: {
    averageBuildTime: number;
    successRate: number;
    memoryUsage: number;
  };
}
```

### NetlifyBuildMonitor

Monitors build processes and detects issues in real-time.

#### Constructor

```javascript
const monitor = new NetlifyBuildMonitor();
```

#### Methods

##### `startMonitoring()`
Starts the build monitoring system.

```javascript
await monitor.startMonitoring();
```

**Returns**: `Promise<void>`

##### `monitorForBuild()`
Starts monitoring for a specific build.

```javascript
await monitor.monitorForBuild();
```

**Returns**: `Promise<void>`

**Events Emitted**:
- `build-start`
- `build-progress`
- `build-complete`
- `build-error`
- `build-timeout`

##### `checkForBuildErrors()`
Checks for errors in build artifacts.

```javascript
await monitor.checkForBuildErrors();
```

**Returns**: `Promise<void>`

##### `handleBuildError(file: string, content: string)`
Handles a specific build error.

```javascript
await monitor.handleBuildError('build.log', errorContent);
```

**Parameters**:
- `file`: The file containing the error
- `content`: The error content

**Returns**: `Promise<void>`

##### `performHealthCheck()`
Performs a health check of the monitoring system.

```javascript
await monitor.performHealthCheck();
```

**Returns**: `Promise<void>`

##### `getStatus()`
Gets the current status of the build monitor.

```javascript
const status = monitor.getStatus();
```

**Returns**: `MonitorStatus`

**MonitorStatus Interface**:
```typescript
interface MonitorStatus {
  isMonitoring: boolean;
  currentBuild: BuildInfo | null;
  buildStartTime: number | null;
  buildDuration: number | null;
  lastCheck: number;
  issues: string[];
}
```

### NetlifyAutoFix

Applies automatic fixes for detected issues.

#### Constructor

```javascript
const autoFix = new NetlifyAutoFix();
```

#### Methods

##### `applyAllFixes()`
Applies all available fixes.

```javascript
const fixes = await autoFix.applyAllFixes();
```

**Returns**: `Promise<string[]>`

**Returns**: Array of applied fix names

##### `increaseMemory()`
Increases memory allocation for builds.

```javascript
await autoFix.increaseMemory();
```

**Returns**: `Promise<void>`

##### `optimizeBuild()`
Optimizes the build process.

```javascript
await autoFix.optimizeBuild();
```

**Returns**: `Promise<void>`

##### `cleanDependencies()`
Cleans and updates dependencies.

```javascript
await autoFix.cleanDependencies();
```

**Returns**: `Promise<void>`

##### `fixTypeScript()`
Fixes TypeScript-related issues.

```javascript
await autoFix.fixTypeScript();
```

**Returns**: `Promise<void>`

##### `autoFixLint()`
Automatically fixes linting issues.

```javascript
await autoFix.autoFixLint();
```

**Returns**: `Promise<void>`

##### `testBuild()`
Tests the build after applying fixes.

```javascript
const success = await autoFix.testBuild();
```

**Returns**: `Promise<boolean>`

##### `getFixReport()`
Gets a report of applied fixes.

```javascript
const report = autoFix.getFixReport();
```

**Returns**: `FixReport`

**FixReport Interface**:
```typescript
interface FixReport {
  fixesApplied: string[];
  timestamp: string;
  totalFixes: number;
  success: boolean;
  duration: number;
  errors: string[];
}
```

### NetlifyHealingDaemon

Manages the self-healing system in the background.

#### Constructor

```javascript
const daemon = new NetlifyHealingDaemon();
```

#### Static Methods

##### `isRunning()`
Checks if the daemon is currently running.

```javascript
const running = NetlifyHealingDaemon.isRunning();
```

**Returns**: `boolean`

#### Instance Methods

##### `start()`
Starts the healing daemon.

```javascript
await daemon.start();
```

**Returns**: `Promise<void>`

**Events Emitted**:
- `daemon-start`
- `daemon-ready`
- `daemon-error`

##### `stop()`
Stops the healing daemon.

```javascript
await daemon.stop();
```

**Returns**: `Promise<void>`

**Events Emitted**:
- `daemon-stop`
- `daemon-stopped`

##### `restartProcess(name: string)`
Restarts a specific process managed by the daemon.

```javascript
await daemon.restartProcess('self-healing');
```

**Parameters**:
- `name`: The name of the process to restart

**Returns**: `Promise<void>`

##### `performHealthCheck()`
Performs a health check of the daemon and its processes.

```javascript
await daemon.performHealthCheck();
```

**Returns**: `Promise<void>`

##### `getStatus()`
Gets the current status of the daemon.

```javascript
const status = daemon.getStatus();
```

**Returns**: `DaemonStatus`

**DaemonStatus Interface**:
```typescript
interface DaemonStatus {
  isRunning: boolean;
  processes: {
    [name: string]: {
      pid: number;
      killed: boolean;
      uptime: number;
    };
  };
  timestamp: string;
  performance: {
    memoryUsage: number;
    cpuUsage: number;
    uptime: number;
  };
}
```

## Configuration

### Environment Variables

```bash
# Self-healing system
ENABLE_SELF_HEALING=true
AUTO_FIX_BUILD_ISSUES=true
BUILD_MONITORING=true

# Performance optimization
NODE_OPTIONS=--max-old-space-size=8192
NEXT_BUILD_WORKERS=4
NEXT_PRIVATE_BUILD_CACHE=true
SKIP_TYPE_CHECK=true

# Logging
LOG_LEVEL=info
LOG_FILE=logs/netlify-self-heal.log

# Monitoring
HEALTH_CHECK_INTERVAL=300000
BUILD_TIMEOUT=1800000
MAX_RETRIES=3
```

### Configuration Object

```javascript
const CONFIG = {
  maxRetries: 3,
  buildTimeout: 1800000, // 30 minutes
  healthCheckInterval: 300000, // 5 minutes
  logFile: 'logs/netlify-self-heal.log',
  errorPatterns: {
    memory: /JavaScript heap out of memory|ENOMEM|OutOfMemoryError/,
    timeout: /timeout|ETIMEDOUT|Build exceeded maximum time/,
    dependency: /Cannot find module|Module not found|peer dependency|version conflict/,
    typescript: /Type.*is not assignable|Property.*does not exist|TS\d+/,
    linting: /ESLint|linting|eslint/,
    build: /Build failed|Build error|Failed to compile/,
    network: /ECONNRESET|ENOTFOUND|ETIMEDOUT|network error/,
    permission: /EACCES|permission denied|access denied/,
    disk: /ENOSPC|disk space|no space left/,
    nodeVersion: /Node\.js version|version mismatch|incompatible version/
  },
  fixStrategies: {
    memory: ['increase-memory', 'optimize-bundle', 'clean-cache'],
    timeout: ['increase-timeout', 'optimize-build', 'parallel-build'],
    dependency: ['clean-deps', 'update-deps', 'fix-peer-deps'],
    typescript: ['fix-types', 'skip-type-check', 'update-tsconfig'],
    linting: ['auto-fix-lint', 'skip-lint', 'fix-lint-config'],
    build: ['clean-build', 'optimize-build', 'fix-build-config'],
    network: ['retry-build', 'use-cache', 'offline-build'],
    permission: ['fix-permissions', 'use-sudo', 'change-owner'],
    disk: ['clean-disk', 'increase-disk', 'optimize-size'],
    nodeVersion: ['update-node', 'fix-node-version', 'use-nvm']
  }
};
```

## Events

### Event Types

```javascript
// Self-healing events
'health-check-start'
'health-check-complete'
'health-check-error'
'healing-start'
'healing-progress'
'healing-complete'
'healing-error'

// Build monitor events
'build-start'
'build-progress'
'build-complete'
'build-error'
'build-timeout'

// Daemon events
'daemon-start'
'daemon-ready'
'daemon-stop'
'daemon-stopped'
'daemon-error'
```

### Event Handling

```javascript
const healing = new NetlifySelfHealing();

// Listen for events
healing.on('healing-start', (issues) => {
  console.log('Starting healing for issues:', issues);
});

healing.on('healing-complete', (result) => {
  console.log('Healing completed:', result);
});

healing.on('healing-error', (error) => {
  console.error('Healing error:', error);
});
```

## Error Handling

### Error Types

```javascript
class SelfHealingError extends Error {
  constructor(message, code, details) {
    super(message);
    this.name = 'SelfHealingError';
    this.code = code;
    this.details = details;
  }
}

class BuildMonitorError extends Error {
  constructor(message, code, details) {
    super(message);
    this.name = 'BuildMonitorError';
    this.code = code;
    this.details = details;
  }
}

class AutoFixError extends Error {
  constructor(message, code, details) {
    super(message);
    this.name = 'AutoFixError';
    this.code = code;
    this.details = details;
  }
}
```

### Error Codes

```javascript
const ERROR_CODES = {
  // Self-healing errors
  HEALING_INIT_FAILED: 'HEALING_INIT_FAILED',
  HEALTH_CHECK_FAILED: 'HEALTH_CHECK_FAILED',
  FIX_STRATEGY_FAILED: 'FIX_STRATEGY_FAILED',
  
  // Build monitor errors
  MONITOR_START_FAILED: 'MONITOR_START_FAILED',
  BUILD_DETECTION_FAILED: 'BUILD_DETECTION_FAILED',
  PROCESS_MONITOR_FAILED: 'PROCESS_MONITOR_FAILED',
  
  // Auto-fix errors
  FIX_APPLICATION_FAILED: 'FIX_APPLICATION_FAILED',
  CONFIG_UPDATE_FAILED: 'CONFIG_UPDATE_FAILED',
  TEST_FAILED: 'TEST_FAILED',
  
  // Daemon errors
  DAEMON_START_FAILED: 'DAEMON_START_FAILED',
  PROCESS_MANAGEMENT_FAILED: 'PROCESS_MANAGEMENT_FAILED',
  RESOURCE_MONITOR_FAILED: 'RESOURCE_MONITOR_FAILED'
};
```

### Error Handling Example

```javascript
try {
  await healing.performHealthCheck();
} catch (error) {
  if (error instanceof SelfHealingError) {
    switch (error.code) {
      case ERROR_CODES.HEALTH_CHECK_FAILED:
        console.error('Health check failed:', error.details);
        await healing.restart();
        break;
      case ERROR_CODES.FIX_STRATEGY_FAILED:
        console.error('Fix strategy failed:', error.details);
        await healing.applyAlternativeFix(error.details.issue);
        break;
      default:
        console.error('Unknown healing error:', error);
    }
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Logging

### Log Levels

```javascript
const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4
};
```

### Logging Example

```javascript
class Logger {
  constructor(level = 'INFO') {
    this.level = LOG_LEVELS[level.toUpperCase()];
  }
  
  log(message, level = 'INFO', data = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    if (LOG_LEVELS[level.toUpperCase()] <= this.level) {
      console.log(JSON.stringify(logEntry));
      fs.appendFileSync(CONFIG.logFile, JSON.stringify(logEntry) + '\n');
    }
  }
  
  error(message, data) { this.log(message, 'ERROR', data); }
  warn(message, data) { this.log(message, 'WARN', data); }
  info(message, data) { this.log(message, 'INFO', data); }
  debug(message, data) { this.log(message, 'DEBUG', data); }
  trace(message, data) { this.log(message, 'TRACE', data); }
}
```

## Performance Monitoring

### Metrics Collection

```javascript
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTimes: [],
      memoryUsage: [],
      errorRates: [],
      fixSuccessRates: []
    };
  }
  
  recordBuildTime(duration) {
    this.metrics.buildTimes.push({
      timestamp: Date.now(),
      duration
    });
  }
  
  recordMemoryUsage(usage) {
    this.metrics.memoryUsage.push({
      timestamp: Date.now(),
      usage
    });
  }
  
  getAverageBuildTime() {
    const times = this.metrics.buildTimes.slice(-10);
    return times.reduce((sum, metric) => sum + metric.duration, 0) / times.length;
  }
  
  getMemoryTrend() {
    const usage = this.metrics.memoryUsage.slice(-10);
    return usage.map(metric => metric.usage);
  }
}
```

## Testing

### Unit Tests

```javascript
describe('NetlifySelfHealing', () => {
  let healing;
  
  beforeEach(() => {
    healing = new NetlifySelfHealing();
  });
  
  test('should detect memory issues', async () => {
    const status = await healing.checkBuildStatus();
    expect(status.issues).toContain('memory');
  });
  
  test('should apply memory fixes', async () => {
    await healing.applyFixStrategy('increase-memory');
    const result = await healing.testFix('memory');
    expect(result.success).toBe(true);
  });
});
```

### Integration Tests

```javascript
describe('Self-Healing Integration', () => {
  test('should handle complete build failure scenario', async () => {
    const healing = new NetlifySelfHealing();
    const monitor = new NetlifyBuildMonitor();
    const autoFix = new NetlifyAutoFix();
    
    await healing.startMonitoring();
    await monitor.startMonitoring();
    
    // Simulate build failure
    const status = await healing.checkBuildStatus();
    expect(status.needsAttention).toBe(true);
    
    // Apply fixes
    const fixes = await autoFix.applyAllFixes();
    expect(fixes.length).toBeGreaterThan(0);
    
    // Verify fix
    const result = await healing.testFix('build');
    expect(result.success).toBe(true);
  });
});
```

## CLI Interface

### Command Line Usage

```bash
# Self-healing commands
node scripts/netlify-self-healing.cjs start
node scripts/netlify-self-healing.cjs stop
node scripts/netlify-self-healing.cjs status
node scripts/netlify-self-healing.cjs health-check
node scripts/netlify-self-healing.cjs fix memory timeout

# Build monitor commands
node scripts/netlify-build-monitor.cjs start
node scripts/netlify-build-monitor.cjs stop
node scripts/netlify-build-monitor.cjs status
node scripts/netlify-build-monitor.cjs monitor

# Auto-fix commands
node scripts/netlify-auto-fix.cjs all
node scripts/netlify-auto-fix.cjs test
node scripts/netlify-auto-fix.cjs report

# Daemon commands
node scripts/netlify-healing-daemon.cjs start
node scripts/netlify-healing-daemon.cjs stop
node scripts/netlify-healing-daemon.cjs status
node scripts/netlify-healing-daemon.cjs restart
```

### CLI Options

```javascript
const options = {
  start: {
    description: 'Start the self-healing system',
    options: {
      '--debug': 'Enable debug mode',
      '--verbose': 'Enable verbose logging',
      '--config': 'Path to config file'
    }
  },
  stop: {
    description: 'Stop the self-healing system',
    options: {
      '--force': 'Force stop all processes'
    }
  },
  status: {
    description: 'Show system status',
    options: {
      '--json': 'Output in JSON format',
      '--detailed': 'Show detailed information'
    }
  }
};
``` 