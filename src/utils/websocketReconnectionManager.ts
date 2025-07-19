import { EventEmitter } from 'events';

export interface ReconnectionConfig {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  jitter: boolean;
  backoffMultiplier: number;
}

export interface ConnectionHealth {
  isHealthy: boolean;
  latency: number;
  lastPing: number;
  failedPings: number;
  connectionQuality: 'excellent' | 'good' | 'poor' | 'disconnected';
}

export interface ReconnectionEvent {
  type: 'attempt' | 'success' | 'failure' | 'health_check';
  attempt?: number;
  delay?: number;
  error?: string;
  health?: ConnectionHealth;
  timestamp: number;
}

export class WebSocketReconnectionManager extends EventEmitter {
  private config: ReconnectionConfig;
  private isReconnecting: boolean = false;
  private reconnectAttempts: number = 0;
  private lastReconnectAttempt: number = 0;
  private healthCheckInterval: NodeJS.Timeout | null = null;
  private connectionHealth: ConnectionHealth;
  private pingHistory: number[] = [];
  private maxPingHistory: number = 10;

  constructor(config: Partial<ReconnectionConfig> = {}) {
    super();

    this.config = {
      maxAttempts: 10,
      baseDelay: 1000,
      maxDelay: 5000,
      jitter: true,
      backoffMultiplier: 2,
      ...config,
    };

    this.connectionHealth = {
      isHealthy: false,
      latency: 0,
      lastPing: 0,
      failedPings: 0,
      connectionQuality: 'disconnected',
    };
  }

  /**
   * Calculate exponential backoff delay with optional jitter
   */
  private calculateDelay(attempt: number): number {
    const delay = Math.min(
      this.config.baseDelay * Math.pow(this.config.backoffMultiplier, attempt),
      this.config.maxDelay,
    );

    if (this.config.jitter) {
      // Add jitter to prevent thundering herd
      const jitter = Math.random() * delay * 0.1;
      return delay + jitter;
    }

    return delay;
  }

  /**
   * Start reconnection process
   */
  public startReconnection(socket: any, reason?: string): void {
    if (this.isReconnecting) {
      console.log('🔄 Reconnection already in progress');
      return;
    }

    if (this.reconnectAttempts >= this.config.maxAttempts) {
      console.error('❌ Max reconnection attempts reached');
      this.emit('reconnection_failed', {
        type: 'failure',
        error: 'Max reconnection attempts reached',
        timestamp: Date.now(),
      });
      return;
    }

    this.isReconnecting = true;
    this.reconnectAttempts++;
    this.lastReconnectAttempt = Date.now();

    const delay = this.calculateDelay(this.reconnectAttempts - 1);

    console.log(
      `🔄 Starting reconnection attempt ${this.reconnectAttempts}/${this.config.maxAttempts} in ${delay}ms`,
    );

    this.emit('reconnection_attempt', {
      type: 'attempt',
      attempt: this.reconnectAttempts,
      delay,
      timestamp: Date.now(),
    });

    setTimeout(() => {
      try {
        if (socket && typeof socket.connect === 'function') {
          socket.connect();
        } else {
          console.error('❌ Invalid socket for reconnection');
          this.handleReconnectionFailure('Invalid socket');
        }
      } catch (error) {
        console.error('❌ Reconnection error:', error);
        this.handleReconnectionFailure(
          error instanceof Error ? error.message : 'Unknown error',
        );
      }
    }, delay);
  }

  /**
   * Handle successful reconnection
   */
  public handleReconnectionSuccess(): void {
    console.log('✅ Reconnection successful');
    this.isReconnecting = false;
    this.reconnectAttempts = 0;
    this.connectionHealth.isHealthy = true;
    this.connectionHealth.failedPings = 0;

    this.emit('reconnection_success', {
      type: 'success',
      attempt: this.reconnectAttempts,
      timestamp: Date.now(),
    });
  }

  /**
   * Handle reconnection failure
   */
  public handleReconnectionFailure(error: string): void {
    console.error('❌ Reconnection failed:', error);
    this.isReconnecting = false;

    this.emit('reconnection_failure', {
      type: 'failure',
      attempt: this.reconnectAttempts,
      error,
      timestamp: Date.now(),
    });

    // Continue reconnection if we haven't reached max attempts
    if (this.reconnectAttempts < this.config.maxAttempts) {
      // The socket will trigger another disconnect event, which will start reconnection again
    }
  }

  /**
   * Start health monitoring
   */
  public startHealthMonitoring(socket: any, interval: number = 30000): void {
    if (this.healthCheckInterval) {
      this.stopHealthMonitoring();
    }

    this.healthCheckInterval = setInterval(() => {
      this.performHealthCheck(socket);
    }, interval);

    console.log('💓 Health monitoring started');
  }

  /**
   * Stop health monitoring
   */
  public stopHealthMonitoring(): void {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
      console.log('💓 Health monitoring stopped');
    }
  }

  /**
   * Perform health check
   */
  private performHealthCheck(socket: any): void {
    if (!socket || !socket.connected) {
      this.updateConnectionHealth({
        isHealthy: false,
        latency: 0,
        lastPing: Date.now(),
        failedPings: this.connectionHealth.failedPings + 1,
        connectionQuality: 'disconnected',
      });
      return;
    }

    const startTime = Date.now();

    try {
      socket.emit('ping', (response: any) => {
        const latency = Date.now() - startTime;
        this.updateConnectionHealth({
          isHealthy: true,
          latency,
          lastPing: Date.now(),
          failedPings: 0,
          connectionQuality: this.calculateConnectionQuality(latency),
        });
      });
    } catch (error) {
      this.updateConnectionHealth({
        isHealthy: false,
        latency: 0,
        lastPing: Date.now(),
        failedPings: this.connectionHealth.failedPings + 1,
        connectionQuality: 'disconnected',
      });
    }
  }

  /**
   * Update connection health
   */
  private updateConnectionHealth(health: ConnectionHealth): void {
    // Update ping history
    if (health.latency > 0) {
      this.pingHistory.push(health.latency);
      if (this.pingHistory.length > this.maxPingHistory) {
        this.pingHistory.shift();
      }
    }

    const previousHealth = this.connectionHealth;
    this.connectionHealth = health;

    // Emit health check event
    this.emit('health_check', {
      type: 'health_check',
      health: this.connectionHealth,
      timestamp: Date.now(),
    });

    // If health degraded significantly, emit warning
    if (previousHealth.connectionQuality !== health.connectionQuality) {
      this.emit('connection_quality_change', {
        previous: previousHealth.connectionQuality,
        current: health.connectionQuality,
        health: this.connectionHealth,
        timestamp: Date.now(),
      });
    }

    // If too many failed pings, trigger reconnection
    if (health.failedPings >= 3) {
      console.warn('⚠️ Too many failed pings, triggering reconnection');
      this.emit('health_degraded', {
        health: this.connectionHealth,
        timestamp: Date.now(),
      });
    }
  }

  /**
   * Calculate connection quality based on latency
   */
  private calculateConnectionQuality(
    latency: number,
  ): ConnectionHealth['connectionQuality'] {
    if (latency === 0) return 'disconnected';
    if (latency <= 50) return 'excellent';
    if (latency <= 150) return 'good';
    return 'poor';
  }

  /**
   * Get current connection health
   */
  public getConnectionHealth(): ConnectionHealth {
    return { ...this.connectionHealth };
  }

  /**
   * Get average latency
   */
  public getAverageLatency(): number {
    if (this.pingHistory.length === 0) return 0;
    return (
      this.pingHistory.reduce((a, b) => a + b, 0) / this.pingHistory.length
    );
  }

  /**
   * Reset reconnection state
   */
  public reset(): void {
    this.isReconnecting = false;
    this.reconnectAttempts = 0;
    this.lastReconnectAttempt = 0;
    this.stopHealthMonitoring();
    this.pingHistory = [];
    this.connectionHealth = {
      isHealthy: false,
      latency: 0,
      lastPing: 0,
      failedPings: 0,
      connectionQuality: 'disconnected',
    };
  }

  /**
   * Get reconnection statistics
   */
  public getStats() {
    return {
      reconnectAttempts: this.reconnectAttempts,
      maxAttempts: this.config.maxAttempts,
      isReconnecting: this.isReconnecting,
      lastReconnectAttempt: this.lastReconnectAttempt,
      connectionHealth: this.connectionHealth,
      averageLatency: this.getAverageLatency(),
      pingHistory: [...this.pingHistory],
    };
  }

  /**
   * Check if network is available
   */
  public static isNetworkAvailable(): boolean {
    return typeof navigator !== 'undefined' && navigator.onLine;
  }

  /**
   * Get network quality indicator
   */
  public static getNetworkQuality(): 'excellent' | 'good' | 'poor' | 'unknown' {
    if (typeof navigator === 'undefined') return 'unknown';

    // Check if we have connection info
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType) {
        switch (connection.effectiveType) {
          case '4g':
            return 'excellent';
          case '3g':
            return 'good';
          case '2g':
            return 'poor';
          default:
            return 'unknown';
        }
      }
    }

    return 'unknown';
  }
}

// Global reconnection manager instance
let globalReconnectionManager: WebSocketReconnectionManager | null = null;

/**
 * Get or create global reconnection manager
 */
export function getGlobalReconnectionManager(
  config?: Partial<ReconnectionConfig>,
): WebSocketReconnectionManager {
  if (!globalReconnectionManager) {
    globalReconnectionManager = new WebSocketReconnectionManager(config);
  }
  return globalReconnectionManager;
}

/**
 * Reset global reconnection manager
 */
export function resetGlobalReconnectionManager(): void {
  if (globalReconnectionManager) {
    globalReconnectionManager.reset();
    globalReconnectionManager = null;
  }
}
