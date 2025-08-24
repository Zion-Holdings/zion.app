/**
 * Chunk Error Handler - Comprehensive solution for ChunkLoadError recovery
 * Handles automatic retry, cache clearing, and graceful degradation
 */

import { logErrorToProduction } from './productionLogger';

interface ChunkErrorStats {
  errorCount: number;
  lastErrorTime: number;
  userAgent: string;
  url: string;
}

class ChunkErrorHandler {
  private errorStats: Map<string, ChunkErrorStats> = new Map();
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 1000; // 1 second
  private readonly CACHE_CLEAR_THRESHOLD = 2;

  constructor() {
    this.initializeGlobalHandlers();
  }

  private initializeGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle webpack chunk loading errors
    window.addEventListener('error', (event) => {
      this.handleScriptError(event);
    });

    // Handle unhandled promise rejections (async chunk loading)
    window.addEventListener('unhandledrejection', (event) => {
      this.handlePromiseRejection(event);
    });
  }

  private handleScriptError(event: ErrorEvent): void {
    const { error, filename } = event;
    
    if (this.isChunkError(error, filename)) {
      event.preventDefault(); // Prevent the error from bubbling up
      this.handleChunkError(error, { filename, source: 'script' });
    }
  }

  private handlePromiseRejection(event: PromiseRejectionEvent): void {
    const error = event.reason;
    
    if (this.isChunkError(error)) {
      event.preventDefault(); // Prevent unhandled rejection
      this.handleChunkError(error, { source: 'promise' });
    }
  }

  private isChunkError(error: any, filename?: string): boolean {
    if (!error) return false;

    const errorMessage = error.message || String(error);
    const errorName = error.name || '';
    
    const chunkErrorPatterns = [
      'ChunkLoadError',
      'Loading chunk',
      'Failed to fetch dynamically imported module',
      'Failed to import',
      'chunk-',
      'vendors-'
    ];

    return chunkErrorPatterns.some(pattern => 
      errorMessage.includes(pattern) || 
      errorName.includes(pattern) ||
      (filename && filename.includes(pattern))
    );
  }

  private async handleChunkError(error: Error, context: { filename?: string; source: string }): Promise<void> {
    const sessionKey = this.getSessionKey();
    const stats = this.getOrCreateErrorStats(sessionKey);
    
    stats.errorCount++;
    stats.lastErrorTime = Date.now();

    logErrorToProduction('ChunkLoadError detected', error, {
      context: 'chunkErrorHandler',
      errorCount: stats.errorCount,
      retryAttempt: stats.errorCount,
      source: context.source,
      filename: context.filename,
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Attempt recovery based on error count
    if (stats.errorCount <= this.MAX_RETRIES) {
      await this.attemptRecovery(stats.errorCount, context);
    } else {
      this.showFatalErrorMessage();
    }
  }

  private async attemptRecovery(attemptNumber: number, context: { filename?: string; source: string }): Promise<void> {
    logErrorToProduction(`Attempting ChunkLoadError recovery #${attemptNumber}`, undefined, {
      context: 'chunkErrorRecovery',
      attemptNumber,
      recoveryMethod: this.getRecoveryMethod(attemptNumber)
    });

    switch (attemptNumber) {
      case 1:
        // First attempt: Simple retry after short delay
        await this.delay(this.RETRY_DELAY);
        this.reloadPage();
        break;
        
      case 2:
        // Second attempt: Clear caches and retry
        await this.clearCaches();
        await this.delay(this.RETRY_DELAY * 2);
        this.reloadPage();
        break;
        
      case 3:
        // Third attempt: Hard refresh with cache bypass
        this.hardRefresh();
        break;
        
      default:
        this.showFatalErrorMessage();
    }
  }

  private getRecoveryMethod(attemptNumber: number): string {
    switch (attemptNumber) {
      case 1: return 'simple-retry';
      case 2: return 'cache-clear-retry';
      case 3: return 'hard-refresh';
      default: return 'fatal-error';
    }
  }

  private async clearCaches(): Promise<void> {
    try {
      // Clear service worker caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }

      // Clear localStorage items that might be stale
      const keysToRemove = ['__NEXT_ROUTER_STATE__', '__NEXT_ROUTE_INFO__'];
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          // Ignore localStorage errors
        }
      });

      logErrorToProduction('Caches cleared successfully', undefined, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear'
      });
    } catch (error) {
      logErrorToProduction('Failed to clear caches', error as Error, {
        context: 'chunkErrorRecovery',
        action: 'cache-clear-failed'
      });
    }
  }

  private reloadPage(): void {
    // Use replace to avoid adding to history
    window.location.replace(window.location.href);
  }

  private hardRefresh(): void {
    // Force a hard refresh bypassing all caches
    window.location.href = window.location.href + '?_t=' + Date.now();
  }

  private showFatalErrorMessage(): void {
    // Create a user-friendly error message
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    errorDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; max-width: 500px;">
        <h2 style="margin-bottom: 1rem;">Connection Issue</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.5;">
          We're having trouble loading some parts of the application. 
          This might be due to a poor network connection or a temporary server issue.
        </p>
        <button onclick="window.location.reload()" style="
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          margin-right: 1rem;
        ">
          Try Again
        </button>
        <button onclick="window.location.href='/'" style="
          background: #666;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        ">
          Go Home
        </button>
      </div>
    `;

    document.body.appendChild(errorDiv);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getSessionKey(): string {
    return `${navigator.userAgent}_${window.location.origin}`;
  }

  private getOrCreateErrorStats(sessionKey: string): ChunkErrorStats {
    if (!this.errorStats.has(sessionKey)) {
      this.errorStats.set(sessionKey, {
        errorCount: 0,
        lastErrorTime: 0,
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    }
    return this.errorStats.get(sessionKey)!;
  }

  // Public method to manually trigger recovery
  public triggerRecovery(): void {
    this.clearCaches().then(() => {
      this.reloadPage();
    });
  }

  // Public method to check if we're in a chunk error state
  public isInErrorState(): boolean {
    const sessionKey = this.getSessionKey();
    const stats = this.errorStats.get(sessionKey);
    return stats ? stats.errorCount > 0 : false;
  }

  // Public method to reset error state
  public resetErrorState(): void {
    const sessionKey = this.getSessionKey();
    this.errorStats.delete(sessionKey);
  }
}

// Create and export singleton instance
export const chunkErrorHandler = new ChunkErrorHandler();

// Export for manual usage
export default chunkErrorHandler;