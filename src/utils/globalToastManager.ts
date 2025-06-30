import { toast as sonnerToast } from 'sonner';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


// Toast configuration constants
const TOAST_CONFIG = {
  MAX_VISIBLE_TOASTS: 3,
  DEFAULT_DURATION: 4000, // 4 seconds
  ERROR_DURATION: 6000, // 6 seconds for errors
  SUCCESS_DURATION: 3000, // 3 seconds for success
  WARNING_DURATION: 5000, // 5 seconds for warnings
  DEDUPE_WINDOW: 3000, // 3 seconds deduplication window
  PRIORITY_BOOST_DURATION: 1000, // Extra time for high priority toasts
};

// Toast priority levels
export enum ToastPriority {
  LOW = 1,
  NORMAL = 2,
  HIGH = 3,
  CRITICAL = 4,
}

// Toast types with corresponding priorities
export enum ToastType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  NETWORK_ERROR = 'network_error',
  AUTH_ERROR = 'auth_error',
  VALIDATION_ERROR = 'validation_error',
  CRITICAL_ERROR = 'critical_error',
}

// Toast interface
export interface GlobalToast {
  id: string;
  message: string;
  title?: string;
  type: ToastType;
  priority: ToastPriority;
  duration?: number;
  persistent?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  onRetry?: () => void;
  metadata?: Record<string, any>;
  createdAt: number;
  expiresAt?: number;
}

// Toast queue and tracking
class GlobalToastManager {
  private activeToasts: Map<string, GlobalToast> = new Map();
  private toastQueue: GlobalToast[] = [];
  private dedupeCache: Map<string, number> = new Map();
  private dismissalTimers: Map<string, NodeJS.Timeout> = new Map();

  // Priority mappings
  private readonly priorityMap: Record<ToastType, ToastPriority> = {
    [ToastType.INFO]: ToastPriority.LOW,
    [ToastType.SUCCESS]: ToastPriority.NORMAL,
    [ToastType.WARNING]: ToastPriority.NORMAL,
    [ToastType.ERROR]: ToastPriority.HIGH,
    [ToastType.NETWORK_ERROR]: ToastPriority.HIGH,
    [ToastType.AUTH_ERROR]: ToastPriority.HIGH,
    [ToastType.VALIDATION_ERROR]: ToastPriority.NORMAL,
    [ToastType.CRITICAL_ERROR]: ToastPriority.CRITICAL,
  };

  // Duration mappings
  private readonly durationMap: Record<ToastType, number> = {
    [ToastType.INFO]: TOAST_CONFIG.DEFAULT_DURATION,
    [ToastType.SUCCESS]: TOAST_CONFIG.SUCCESS_DURATION,
    [ToastType.WARNING]: TOAST_CONFIG.WARNING_DURATION,
    [ToastType.ERROR]: TOAST_CONFIG.ERROR_DURATION,
    [ToastType.NETWORK_ERROR]: TOAST_CONFIG.ERROR_DURATION,
    [ToastType.AUTH_ERROR]: TOAST_CONFIG.ERROR_DURATION,
    [ToastType.VALIDATION_ERROR]: TOAST_CONFIG.DEFAULT_DURATION,
    [ToastType.CRITICAL_ERROR]: TOAST_CONFIG.ERROR_DURATION + TOAST_CONFIG.PRIORITY_BOOST_DURATION,
  };

  /**
   * Generate a unique deduplication key for the toast
   */
  private generateDedupeKey(toast: Partial<GlobalToast>): string {
    const { type, message, title } = toast;
    return `${type}-${title || ''}-${message}`.toLowerCase().replace(/\s+/g, '-');
  }

  /**
   * Check if toast should be shown based on deduplication
   */
  private shouldShowToast(dedupeKey: string): boolean {
    const now = Date.now();
    const lastShown = this.dedupeCache.get(dedupeKey);
    
    if (lastShown && (now - lastShown) < TOAST_CONFIG.DEDUPE_WINDOW) {
      return false;
    }
    
    this.dedupeCache.set(dedupeKey, now);
    return true;
  }

  /**
   * Remove expired entries from dedupe cache
   */
  private cleanupDedupeCache(): void {
    const now = Date.now();
    for (const [key, timestamp] of this.dedupeCache.entries()) {
      if (now - timestamp > TOAST_CONFIG.DEDUPE_WINDOW * 2) {
        this.dedupeCache.delete(key);
      }
    }
  }

  /**
   * Get the number of currently visible toasts
   */
  private getVisibleToastCount(): number {
    return this.activeToasts.size;
  }

  /**
   * Remove the lowest priority toast to make room for new ones
   */
  private removeLowestPriorityToast(): void {
    let lowestPriority = ToastPriority.CRITICAL;
    let oldestTime = Date.now();
    let toastToRemove: string | null = null;

    for (const [id, toast] of this.activeToasts.entries()) {
      if (toast.priority < lowestPriority || 
         (toast.priority === lowestPriority && toast.createdAt < oldestTime)) {
        lowestPriority = toast.priority;
        oldestTime = toast.createdAt;
        toastToRemove = id;
      }
    }

    if (toastToRemove) {
      this.dismissToast(toastToRemove);
    }
  }

  /**
   * Set up auto-dismissal for a toast
   */
  private setupAutoDismissal(toast: GlobalToast): void {
    if (toast.persistent) return;

    const duration = toast.duration || this.durationMap[toast.type];
    const timer = setTimeout(() => {
      this.dismissToast(toast.id);
    }, duration);

    this.dismissalTimers.set(toast.id, timer);
    toast.expiresAt = Date.now() + duration;
  }

  /**
   * Clear auto-dismissal timer for a toast
   */
  private clearAutoDismissal(toastId: string): void {
    const timer = this.dismissalTimers.get(toastId);
    if (timer) {
      clearTimeout(timer);
      this.dismissalTimers.delete(toastId);
    }
  }

  /**
   * Dismiss a specific toast
   */
  dismissToast(toastId: string): void {
    const toast = this.activeToasts.get(toastId);
    if (!toast) return;

    this.clearAutoDismissal(toastId);
    this.activeToasts.delete(toastId);
    sonnerToast.dismiss(toastId);

    // Process queue if there are waiting toasts
    this.processQueue();
  }

  /**
   * Dismiss all toasts
   */
  dismissAll(): void {
    // Clear all timers
    for (const timer of this.dismissalTimers.values()) {
      clearTimeout(timer);
    }
    
    // Clear all data structures
    this.dismissalTimers.clear();
    this.activeToasts.clear();
    this.toastQueue.length = 0;
    
    // Dismiss all Sonner toasts
    sonnerToast.dismiss();
  }

  /**
   * Process the toast queue
   */
  private processQueue(): void {
    while (this.toastQueue.length > 0 && this.getVisibleToastCount() < TOAST_CONFIG.MAX_VISIBLE_TOASTS) {
      const toast = this.toastQueue.shift();
      if (toast) {
        this.showToastInternal(toast);
      }
    }
  }

  /**
   * Internal method to show a toast using Sonner
   */
  private showToastInternal(toast: GlobalToast): void {
    this.activeToasts.set(toast.id, toast);

    const options: any = {
      id: toast.id,
      duration: toast.persistent ? Infinity : (toast.duration || this.durationMap[toast.type]),
    };

    // Add action button if present
    if (toast.action) {
      options.action = {
        label: toast.action.label,
        onClick: toast.action.onClick,
      };
    } else if (toast.onRetry) {
      options.action = {
        label: 'Retry',
        onClick: toast.onRetry,
      };
    }

    // Show toast based on type
    const message = toast.title ? toast.title : toast.message;
    const description = toast.title ? toast.message : undefined;

    switch (toast.type) {
      case ToastType.SUCCESS:
        sonnerToast.success(message, { ...options, description });
        break;
      case ToastType.ERROR:
      case ToastType.NETWORK_ERROR:
      case ToastType.AUTH_ERROR:
      case ToastType.CRITICAL_ERROR:
        sonnerToast.error(message, { 
          ...options, 
          description,
          style: { background: '#7f1d1d', color: '#fff' }
        });
        break;
      case ToastType.WARNING:
      case ToastType.VALIDATION_ERROR:
        sonnerToast.warning(message, { ...options, description });
        break;
      default:
        sonnerToast(message, { ...options, description });
        break;
    }

    // Set up auto-dismissal
    this.setupAutoDismissal(toast);

    // Log error toasts for debugging
    if (toast.type.includes('error')) {
      try {
        logErrorToProduction(toast.message, new Error(toast.message), { 
          context: 'globalToastManager',
          toastType: toast.type,
          priority: toast.priority,
          metadata: toast.metadata 
        });
      } catch (e) {
        logErrorToProduction('Failed to log toast error:', { data:  e });
      }
    }
  }

  /**
   * Show a toast (public API)
   */
  showToast(params: {
    message: string;
    title?: string;
    type?: ToastType;
    priority?: ToastPriority;
    duration?: number;
    persistent?: boolean;
    action?: { label: string; onClick: () => void };
    onRetry?: () => void;
    metadata?: Record<string, any>;
  }): string {
    const {
      message,
      title,
      type = ToastType.INFO,
      priority,
      duration,
      persistent = false,
      action,
      onRetry,
      metadata,
    } = params;

    // Clean up old dedupe cache entries periodically
    if (Math.random() < 0.1) {
      this.cleanupDedupeCache();
    }

    // Create toast object
    const toast: GlobalToast = {
      id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message,
      title,
      type,
      priority: priority || this.priorityMap[type],
      duration,
      persistent,
      action,
      onRetry,
      metadata,
      createdAt: Date.now(),
    };

    // Check deduplication
    const dedupeKey = this.generateDedupeKey(toast);
    if (!this.shouldShowToast(dedupeKey)) {
      return toast.id; // Return ID even if not shown for consistency
    }

    // If we have room, show immediately
    if (this.getVisibleToastCount() < TOAST_CONFIG.MAX_VISIBLE_TOASTS) {
      this.showToastInternal(toast);
    } else {
      // If toast is high priority, remove lower priority toast
      if (toast.priority >= ToastPriority.HIGH) {
        this.removeLowestPriorityToast();
        this.showToastInternal(toast);
      } else {
        // Otherwise, add to queue
        this.toastQueue.push(toast);
        // Sort queue by priority (highest first)
        this.toastQueue.sort((a, b) => b.priority - a.priority);
      }
    }

    return toast.id;
  }

  /**
   * Get information about active toasts
   */
  getActiveToasts(): GlobalToast[] {
    return Array.from(this.activeToasts.values());
  }

  /**
   * Get queue length
   */
  getQueueLength(): number {
    return this.toastQueue.length;
  }
}

// Create singleton instance
export const globalToastManager = new GlobalToastManager();

// Convenience functions for different toast types
export const showToast = {
  info: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.INFO, ...options }),

  success: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.SUCCESS, ...options }),

  warning: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.WARNING, ...options }),

  error: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.ERROR, ...options }),

  networkError: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.NETWORK_ERROR, ...options }),

  authError: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.AUTH_ERROR, ...options }),

  validationError: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.VALIDATION_ERROR, ...options }),

  criticalError: (message: string, options?: Partial<Parameters<typeof globalToastManager.showToast>[0]>) =>
    globalToastManager.showToast({ message, type: ToastType.CRITICAL_ERROR, ...options }),

  dismiss: (toastId: string) => globalToastManager.dismissToast(toastId),
  dismissAll: () => globalToastManager.dismissAll(),
};

// Enhanced error handler that integrates with the toast manager
export class EnhancedGlobalErrorHandler {
  private retryCount: Map<string, number> = new Map();
  private maxRetries = 3;

  /**
   * Report an error with appropriate toast notification
   */
  reportError(error: Error | string, context?: {
    type?: ToastType;
    priority?: ToastPriority;
    retryAction?: () => void;
    metadata?: Record<string, any>;
    showToast?: boolean;
  }): string | null {
    const {
      type = ToastType.ERROR,
      priority,
      retryAction,
      metadata,
      showToast: actualShowToastFlag = true, // Internal variable
    } = context || {};

    const errorMessage = error instanceof Error ? error.message : error;
    const errorKey = `${type}-${errorMessage}`;

    // Suppress specific "Authentication Required / Access denied" toast on public pages for unauthenticated users.
    if (
      type === ToastType.AUTH_ERROR &&
      errorMessage.toLowerCase().trim() === 'access denied' &&
      this.getErrorTitle(type) === 'Authentication Required' &&
      actualShowToastFlag
    ) {
      let isLikelyUnauthenticated = true; // Default assumption for this specific error
      if (typeof window !== 'undefined' && window.localStorage) {
        // Check for Supabase auth token in localStorage. This is a heuristic.
        const supabaseAuthTokenKey = Object.keys(window.localStorage).find(k => k.startsWith('sb-') && k.endsWith('-auth-token'));
        if (supabaseAuthTokenKey && window.localStorage.getItem(supabaseAuthTokenKey)) {
          isLikelyUnauthenticated = false; // Found a token, user might be authenticated
        }
      }

      if (isLikelyUnauthenticated) {
        // Log suppression for debugging, but don't show the toast.
        logWarn(`[EnhancedGlobalErrorHandler] Suppressing toast for ${type} with message "${errorMessage}" for assumed unauthenticated user.`);
        return null;
      } else {
        if (process.env.NODE_ENV === 'development') {
          logInfo(`[EnhancedGlobalErrorHandler] NOT suppressing "${errorMessage}" toast as user appears authenticated or check is inconclusive.`);
        }
      }
    }

    const currentRetries = this.retryCount.get(errorKey) || 0;

    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction('Enhanced Global Error Handler:', error, context);
    }

    if (currentRetries >= this.maxRetries) {
      logWarn(`Max retries exceeded for error: ${errorMessage}`);
      return null;
    }

    if (actualShowToastFlag) {
      const toastId = globalToastManager.showToast({
        message: this.getErrorMessage(errorMessage),
        title: this.getErrorTitle(type),
        type,
        priority,
        onRetry: retryAction ? () => {
          this.retryCount.set(errorKey, currentRetries + 1);
          retryAction();
        } : undefined,
        metadata: {
          ...metadata,
          originalError: error,
          retryCount: currentRetries,
        },
      });
      return toastId;
    }
    return null;
  }

  /**
   * Get user-friendly error message
   */
  private getErrorMessage(error: string): string {
    if (error.includes('network') || error.includes('fetch')) {
      return 'Network error – please retry';
    }
    if (error.includes('timeout')) {
      return 'Request timed out - please try again';
    }
    if (error.includes('unauthorized') || error.includes('401')) {
      return 'Please log in to continue';
    }
    if (error.includes('forbidden') || error.includes('403')) {
      return 'You don\'t have permission for this action';
    }
    if (error.includes('not found') || error.includes('404')) {
      return 'Requested resource not found';
    }
    if (error.includes('server') || error.includes('500')) {
      return 'Server error - please try again later';
    }
    
    // Return sanitized error message
    return error.length > 100 ? `${error.substring(0, 100)}...` : error;
  }

  /**
   * Get appropriate title for error type
   */
  private getErrorTitle(type: ToastType): string {
    switch (type) {
      case ToastType.NETWORK_ERROR:
        return 'Connection Problem';
      case ToastType.AUTH_ERROR:
        return 'Authentication Required';
      case ToastType.VALIDATION_ERROR:
        return 'Validation Error';
      case ToastType.CRITICAL_ERROR:
        return 'Critical Error';
      default:
        return 'Error';
    }
  }

  /**
   * Clear retry count for a specific error
   */
  clearRetryCount(errorKey: string): void {
    this.retryCount.delete(errorKey);
  }

  /**
   * Clear all retry counts
   */
  clearAllRetryCounts(): void {
    this.retryCount.clear();
  }
}

// Create singleton instance
export const enhancedGlobalErrorHandler = new EnhancedGlobalErrorHandler(); 