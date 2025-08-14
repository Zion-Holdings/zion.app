const fs = require('fs');
const path = require('path');

class ErrorManager {
  constructor(errorLogDir = 'automation/error-logs', config = {}) {
    this.errorLogDir = path.resolve(process.cwd(), errorLogDir);
    this.ensureErrorLogDir();
    
    // Default configuration
    this.config = {
      maxRetries: config.maxRetries || 3,
      baseDelayMs: config.baseDelayMs || 1000,
      maxDelayMs: config.maxDelayMs || 30000,
      backoffMultiplier: config.backoffMultiplier || 2,
      jitterFactor: config.jitterFactor || 0.1,
      circuitBreakerThreshold: config.circuitBreakerThreshold || 5,
      circuitBreakerTimeout: config.circuitBreakerTimeout || 60000, // 1 minute
      ...config
    };

    // Error classification patterns
    this.errorPatterns = {
      transient: [
        /timeout/i,
        /network/i,
        /connection/i,
        /temporary/i,
        /rate.limit/i,
        /throttle/i,
        /quota.exceeded/i,
        /service.unavailable/i,
        /internal.server.error/i,
        /bad.gateway/i,
        /gateway.timeout/i,
        /too.many.requests/i,
        /request.timeout/i,
        /connection.timed.out/i
      ],
      persistent: [
        /authentication/i,
        /authorization/i,
        /invalid.parameter/i,
        /malformed.request/i,
        /not.found/i,
        /forbidden/i,
        /conflict/i,
        /validation/i,
        /syntax/i,
        /parse/i,
        /invalid.json/i,
        /bad.request/i,
        /unsupported.media.type/i
      ],
      configuration: [
        /missing.config/i,
        /invalid.config/i,
        /environment/i,
        /api.key/i,
        /secret/i,
        /permission/i,
        /access.denied/i,
        /unauthorized/i,
        /missing.required.field/i,
        /invalid.format/i
      ],
      resource: [
        /memory/i,
        /disk.space/i,
        /cpu/i,
        /out.of.memory/i,
        /heap/i,
        /stack.overflow/i,
        /resource.exhausted/i,
        /insufficient.resources/i,
        /disk.full/i,
        /memory.limit/i
      ],
      dependency: [
        /dependency.not.found/i,
        /module.not.found/i,
        /package.not.found/i,
        /import.error/i,
        /require.error/i,
        /missing.dependency/i
      ]
    };

    // Retry policies for different error types
    this.retryPolicies = {
      transient: {
        maxRetries: this.config.maxRetries,
        shouldRetry: true,
        backoffStrategy: 'exponential',
        circuitBreaker: true
      },
      persistent: {
        maxRetries: 1,
        shouldRetry: false,
        backoffStrategy: 'none',
        circuitBreaker: false
      },
      configuration: {
        maxRetries: 0,
        shouldRetry: false,
        backoffStrategy: 'none',
        circuitBreaker: false
      },
      resource: {
        maxRetries: 2,
        shouldRetry: true,
        backoffStrategy: 'linear',
        circuitBreaker: true
      },
      dependency: {
        maxRetries: 1,
        shouldRetry: false,
        backoffStrategy: 'none',
        circuitBreaker: false
      }
    };

    // Circuit breaker state
    this.circuitBreakers = new Map();
  }

  ensureErrorLogDir() {
    if (!fs.existsSync(this.errorLogDir)) {
      fs.mkdirSync(this.errorLogDir, { recursive: true });
    }
  }

  /**
   * Classify an error based on its message and context
   * @param {Error|string} error - Error object or message
   * @param {object} context - Additional context (statusCode, functionName, etc.)
   * @returns {object} - Error classification with retry policy
   */
  classifyError(error, context = {}) {
    const errorMessage = error.message || error.toString();
    const statusCode = context.statusCode || 0;
    
    // Determine error type based on patterns
    let errorType = 'unknown';
    
    for (const [type, patterns] of Object.entries(this.errorPatterns)) {
      if (patterns.some(pattern => pattern.test(errorMessage))) {
        errorType = type;
        break;
      }
    }

    // Override based on HTTP status codes
    if (statusCode >= 500) {
      errorType = 'transient';
    } else if (statusCode >= 400 && statusCode < 500) {
      if (statusCode === 429) {
        errorType = 'transient'; // Rate limiting
      } else if (statusCode === 401 || statusCode === 403) {
        errorType = 'configuration'; // Auth issues
      } else if (statusCode === 404) {
        errorType = 'persistent'; // Not found
      } else {
        errorType = 'persistent'; // Client errors
      }
    }

    // Get retry policy for this error type
    const retryPolicy = this.retryPolicies[errorType] || this.retryPolicies.unknown;

    return {
      errorType,
      errorMessage,
      statusCode,
      retryPolicy,
      timestamp: new Date().toISOString(),
      context,
      classification: {
        confidence: this.calculateClassificationConfidence(errorMessage, statusCode),
        alternativeTypes: this.getAlternativeTypes(errorMessage, statusCode)
      }
    };
  }

  /**
   * Calculate classification confidence (0-1)
   * @param {string} errorMessage - Error message
   * @param {number} statusCode - HTTP status code
   * @returns {number} - Confidence score
   */
  calculateClassificationConfidence(errorMessage, statusCode) {
    let confidence = 0.5; // Base confidence

    // Boost confidence for clear HTTP status codes
    if (statusCode >= 500) confidence += 0.3;
    if (statusCode === 429) confidence += 0.2;
    if (statusCode === 401 || statusCode === 403) confidence += 0.2;

    // Boost confidence for clear error patterns
    if (errorMessage.includes('timeout')) confidence += 0.2;
    if (errorMessage.includes('memory')) confidence += 0.2;
    if (errorMessage.includes('network')) confidence += 0.2;

    return Math.min(confidence, 1.0);
  }

  /**
   * Get alternative error types
   * @param {string} errorMessage - Error message
   * @param {number} statusCode - HTTP status code
   * @returns {Array} - Alternative error types
   */
  getAlternativeTypes(errorMessage, statusCode) {
    const alternatives = [];
    
    if (statusCode >= 500) alternatives.push('transient');
    if (statusCode >= 400 && statusCode < 500) alternatives.push('persistent');
    if (errorMessage.includes('timeout')) alternatives.push('transient');
    if (errorMessage.includes('memory')) alternatives.push('resource');
    
    return alternatives.filter((type, index, arr) => arr.indexOf(type) === index);
  }

  /**
   * Calculate retry delay with exponential backoff and jitter
   * @param {number} attempt - Current attempt number (1-based)
   * @param {string} strategy - Backoff strategy ('exponential', 'linear', 'none')
   * @returns {number} - Delay in milliseconds
   */
  calculateRetryDelay(attempt, strategy = 'exponential') {
    if (strategy === 'none') return 0;

    let delay;
    if (strategy === 'exponential') {
      delay = this.config.baseDelayMs * Math.pow(this.config.backoffMultiplier, attempt - 1);
    } else if (strategy === 'linear') {
      delay = this.config.baseDelayMs * attempt;
    } else {
      delay = this.config.baseDelayMs;
    }

    // Cap the delay
    delay = Math.min(delay, this.config.maxDelayMs);

    // Add jitter to prevent thundering herd
    const jitter = delay * this.config.jitterFactor * Math.random();
    delay += jitter;

    return Math.round(delay);
  }

  /**
   * Check circuit breaker state
   * @param {string} operation - Operation identifier
   * @returns {object} - Circuit breaker state
   */
  checkCircuitBreaker(operation) {
    const breaker = this.circuitBreakers.get(operation);
    
    if (!breaker) {
      return { isOpen: false, reason: 'No circuit breaker' };
    }

    const now = Date.now();
    
    if (breaker.state === 'open') {
      if (now - breaker.lastFailureTime > this.config.circuitBreakerTimeout) {
        // Try to close the circuit
        breaker.state = 'half-open';
        breaker.lastFailureTime = now;
        this.circuitBreakers.set(operation, breaker);
        return { isOpen: false, reason: 'Circuit breaker half-open' };
      }
      return { isOpen: true, reason: 'Circuit breaker open', nextAttempt: breaker.lastFailureTime + this.config.circuitBreakerTimeout };
    }

    return { isOpen: false, reason: 'Circuit breaker closed' };
  }

  /**
   * Record circuit breaker success
   * @param {string} operation - Operation identifier
   */
  recordCircuitBreakerSuccess(operation) {
    const breaker = this.circuitBreakers.get(operation);
    if (breaker) {
      breaker.state = 'closed';
      breaker.failureCount = 0;
      breaker.lastFailureTime = 0;
      this.circuitBreakers.set(operation, breaker);
    }
  }

  /**
   * Record circuit breaker failure
   * @param {string} operation - Operation identifier
   */
  recordCircuitBreakerFailure(operation) {
    let breaker = this.circuitBreakers.get(operation);
    
    if (!breaker) {
      breaker = {
        state: 'closed',
        failureCount: 0,
        lastFailureTime: 0
      };
    }

    breaker.failureCount++;
    breaker.lastFailureTime = Date.now();

    if (breaker.failureCount >= this.config.circuitBreakerThreshold) {
      breaker.state = 'open';
    }

    this.circuitBreakers.set(operation, breaker);
  }

  /**
   * Determine if an operation should be retried
   * @param {object} errorClassification - Error classification result
   * @param {number} currentAttempt - Current attempt number
   * @param {string} operation - Operation identifier
   * @returns {object} - Retry decision with delay
   */
  shouldRetry(errorClassification, currentAttempt, operation = 'default') {
    const { retryPolicy } = errorClassification;
    
    // Check circuit breaker first
    const circuitBreaker = this.checkCircuitBreaker(operation);
    if (circuitBreaker.isOpen) {
      return {
        shouldRetry: false,
        reason: `Circuit breaker open: ${circuitBreaker.reason}`,
        delay: 0,
        nextAttempt: circuitBreaker.nextAttempt
      };
    }
    
    if (!retryPolicy.shouldRetry) {
      return {
        shouldRetry: false,
        reason: 'Policy does not allow retries for this error type',
        delay: 0
      };
    }

    if (currentAttempt > retryPolicy.maxRetries) {
      return {
        shouldRetry: false,
        reason: 'Maximum retries exceeded',
        delay: 0
      };
    }

    const delay = this.calculateRetryDelay(currentAttempt, retryPolicy.backoffStrategy);
    
    return {
      shouldRetry: true,
      reason: `Retry allowed for ${errorClassification.errorType} error`,
      delay,
      nextAttempt: currentAttempt + 1,
      maxAttempts: retryPolicy.maxRetries,
      strategy: retryPolicy.backoffStrategy
    };
  }

  /**
   * Log error for analysis and monitoring
   * @param {object} errorClassification - Error classification result
   * @param {string} functionName - Name of the function that encountered the error
   * @param {object} additionalContext - Additional context information
   * @returns {string} - Path to the error log file
   */
  logError(errorClassification, functionName, additionalContext = {}) {
    const timestamp = new Date().toISOString();
    const logId = `${functionName}-${Date.now()}`;
    const logFile = path.join(this.errorLogDir, `${logId}.json`);
    
    const errorLog = {
      id: logId,
      functionName,
      errorType: errorClassification.errorType,
      errorMessage: errorClassification.errorMessage,
      statusCode: errorClassification.statusCode,
      timestamp,
      retryPolicy: errorClassification.retryPolicy,
      classification: errorClassification.classification,
      context: {
        ...errorClassification.context,
        ...additionalContext
      },
      metadata: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime()
      }
    };

    try {
      fs.writeFileSync(logFile, JSON.stringify(errorLog, null, 2));
      return logFile;
    } catch (error) {
      console.error(`Failed to log error: ${error.message}`);
      return null;
    }
  }

  /**
   * Get error statistics for a function or globally
   * @param {string} functionName - Optional function name filter
   * @param {number} daysBack - Number of days to look back
   * @returns {object} - Error statistics
   */
  getErrorStats(functionName = null, daysBack = 30) {
    try {
      const files = fs.readdirSync(this.errorLogDir);
      const cutoff = Date.now() - (daysBack * 24 * 60 * 60 * 1000);
      const errors = [];
      const stats = {
        total: 0,
        byType: {},
        byFunction: {},
        byHour: {},
        byStatusCode: {},
        retryAttempts: 0,
        criticalErrors: 0,
        circuitBreakerTrips: 0,
        averageClassificationConfidence: 0
      };

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const logFile = path.join(this.errorLogDir, file);
        try {
          const errorLog = JSON.parse(fs.readFileSync(logFile, 'utf8'));
          
          // Filter by time and function
          if (new Date(errorLog.timestamp).getTime() < cutoff) continue;
          if (functionName && errorLog.functionName !== functionName) continue;

          errors.push(errorLog);
          stats.total++;

          // Count by error type
          stats.byType[errorLog.errorType] = (stats.byType[errorLog.errorType] || 0) + 1;

          // Count by function
          stats.byFunction[errorLog.functionName] = (stats.byFunction[errorLog.functionName] || 0) + 1;

          // Count by hour
          const hour = new Date(errorLog.timestamp).getHours();
          stats.byHour[hour] = (stats.byHour[hour] || 0) + 1;

          // Count by status code
          if (errorLog.statusCode) {
            stats.byStatusCode[errorLog.statusCode] = (stats.byStatusCode[errorLog.statusCode] || 0) + 1;
          }

          // Count critical errors (5xx status codes)
          if (errorLog.statusCode >= 500) {
            stats.criticalErrors++;
          }

          // Track classification confidence
          if (errorLog.classification && errorLog.classification.confidence) {
            stats.averageClassificationConfidence += errorLog.classification.confidence;
          }
        } catch (error) {
          console.warn(`Failed to read error log ${file}:`, error.message);
        }
      }

      // Calculate averages
      if (stats.total > 0) {
        stats.averageClassificationConfidence = stats.averageClassificationConfidence / stats.total;
      }

      return stats;
    } catch (error) {
      console.warn('Failed to get error stats:', error.message);
      return {
        total: 0,
        byType: {},
        byFunction: {},
        byHour: {},
        byStatusCode: {},
        retryAttempts: 0,
        criticalErrors: 0,
        circuitBreakerTrips: 0,
        averageClassificationConfidence: 0
      };
    }
  }

  /**
   * Get recent errors for analysis
   * @param {number} limit - Maximum number of errors to return
   * @param {string} errorType - Optional error type filter
   * @returns {Array} - Array of recent errors
   */
  getRecentErrors(limit = 50, errorType = null) {
    try {
      const files = fs.readdirSync(this.errorLogDir);
      const errors = [];

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const logFile = path.join(this.errorLogDir, file);
        try {
          const errorLog = JSON.parse(fs.readFileSync(logFile, 'utf8'));
          
          if (errorType && errorLog.errorType !== errorType) continue;
          
          errors.push(errorLog);
        } catch (error) {
          console.warn(`Failed to read error log ${file}:`, error.message);
        }
      }

      // Sort by timestamp (newest first) and limit results
      return errors
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, limit);
    } catch (error) {
      console.warn('Failed to get recent errors:', error.message);
      return [];
    }
  }

  /**
   * Clean up old error logs
   * @param {number} daysOld - Number of days old to consider for cleanup
   * @returns {number} - Number of logs cleaned up
   */
  cleanupOldLogs(daysOld = 90) {
    try {
      const files = fs.readdirSync(this.errorLogDir);
      let cleaned = 0;
      const cutoff = Date.now() - (daysOld * 24 * 60 * 60 * 1000);

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const logFile = path.join(this.errorLogDir, file);
        try {
          const errorLog = JSON.parse(fs.readFileSync(logFile, 'utf8'));
          
          if (new Date(errorLog.timestamp).getTime() < cutoff) {
            fs.unlinkSync(logFile);
            cleaned++;
          }
        } catch (error) {
          console.warn(`Failed to process error log ${file}:`, error.message);
        }
      }

      return cleaned;
    } catch (error) {
      console.warn('Failed to cleanup old error logs:', error.message);
      return 0;
    }
  }

  /**
   * Generate error report for monitoring
   * @returns {object} - Comprehensive error report
   */
  generateErrorReport() {
    const stats = this.getErrorStats();
    const recentErrors = this.getRecentErrors(20);
    const circuitBreakerStatus = this.getCircuitBreakerStatus();
    
    return {
      summary: stats,
      recentErrors,
      circuitBreakerStatus,
      recommendations: this.generateRecommendations(stats, recentErrors),
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Get circuit breaker status for all operations
   * @returns {object} - Circuit breaker status
   */
  getCircuitBreakerStatus() {
    const status = {};
    
    for (const [operation, breaker] of this.circuitBreakers) {
      status[operation] = {
        state: breaker.state,
        failureCount: breaker.failureCount,
        lastFailureTime: breaker.lastFailureTime,
        isOpen: breaker.state === 'open',
        timeUntilReset: breaker.state === 'open' ? 
          Math.max(0, (breaker.lastFailureTime + this.config.circuitBreakerTimeout) - Date.now()) : 0
      };
    }
    
    return status;
  }

  /**
   * Generate recommendations based on error patterns
   * @param {object} stats - Error statistics
   * @param {Array} recentErrors - Recent errors
   * @returns {Array} - Array of recommendations
   */
  generateRecommendations(stats, recentErrors) {
    const recommendations = [];

    if (stats.criticalErrors > stats.total * 0.1) {
      recommendations.push('🚨 **HIGH CRITICAL ERROR RATE** - Investigate infrastructure issues');
    }

    if (stats.byType.transient > stats.total * 0.5) {
      recommendations.push('⏱️ **HIGH TRANSIENT ERROR RATE** - Consider implementing circuit breakers');
    }

    if (stats.byType.configuration > 0) {
      recommendations.push('⚙️ **CONFIGURATION ERRORS DETECTED** - Review environment variables and settings');
    }

    if (stats.byType.resource > 0) {
      recommendations.push('💾 **RESOURCE ERRORS DETECTED** - Monitor system resources and optimize');
    }

    if (stats.byType.dependency > 0) {
      recommendations.push('📦 **DEPENDENCY ERRORS DETECTED** - Check package installations and versions');
    }

    // Find functions with high error rates
    for (const [functionName, count] of Object.entries(stats.byFunction)) {
      if (count > 10) {
        recommendations.push(`🔍 **HIGH ERROR RATE** in ${functionName} - Investigate function-specific issues`);
      }
    }

    // Check for patterns in recent errors
    const errorTypes = recentErrors.map(e => e.errorType);
    const uniqueTypes = [...new Set(errorTypes)];
    if (uniqueTypes.length === 1 && uniqueTypes[0] === 'transient') {
      recommendations.push('🔄 **SINGLE ERROR TYPE PATTERN** - All recent errors are transient, consider bulk retry strategy');
    }

    if (recommendations.length === 0) {
      recommendations.push('✅ **LOW ERROR RATE** - System appears to be operating normally');
    }

    return recommendations;
  }
}

module.exports = ErrorManager;
