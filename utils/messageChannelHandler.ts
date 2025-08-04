// Message Channel Error Handler
// This utility handles message channel errors that can occur from browser extensions
// or external scripts that use message passing

interface MessageChannelError {
  type: 'message_channel_closed';
  message: string;
  timestamp: number;
}

class MessageChannelHandler {
  private static instance: MessageChannelHandler;
  private errorLog: MessageChannelError[] = [];
  private isInitialized = false;

  private constructor() {
    this.initializeErrorHandling();
  }

  public static getInstance(): MessageChannelHandler {
    if (!MessageChannelHandler.instance) {
      MessageChannelHandler.instance = new MessageChannelHandler();
    }
    return MessageChannelHandler.instance;
  }

  private initializeErrorHandling(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.isInitialized = true;

    // Override console.error to catch message channel errors
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const errorMessage = args.join(' ');
      
      // Check if this is a message channel error
      if (errorMessage.includes('message channel closed') || 
          errorMessage.includes('asynchronous response') ||
          errorMessage.includes('listener indicated')) {
        
        this.handleMessageChannelError(errorMessage);
        return; // Don't log to console to avoid spam
      }
      
      // Log other errors normally
      originalConsoleError.apply(console, args);
    };

    // Add global error handler for unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const errorMessage = event.reason?.message || event.reason?.toString() || 'Unknown error';
      
      if (errorMessage.includes('message channel closed') || 
          errorMessage.includes('asynchronous response') ||
          errorMessage.includes('listener indicated')) {
        
        event.preventDefault(); // Prevent the error from being logged
        this.handleMessageChannelError(errorMessage);
      }
    });

    // Add global error handler for regular errors
    window.addEventListener('error', (event) => {
      const errorMessage = event.message || event.error?.message || 'Unknown error';
      
      if (errorMessage.includes('message channel closed') || 
          errorMessage.includes('asynchronous response') ||
          errorMessage.includes('listener indicated')) {
        
        event.preventDefault(); // Prevent the error from being logged
        this.handleMessageChannelError(errorMessage);
      }
    });
  }

  private handleMessageChannelError(message: string): void {
    const error: MessageChannelError = {
      type: 'message_channel_closed',
      message,
      timestamp: Date.now()
    };

    this.errorLog.push(error);

    // Keep only the last 10 errors to prevent memory leaks
    if (this.errorLog.length > 10) {
      this.errorLog = this.errorLog.slice(-10);
    }

    // Log to a custom channel for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('[MessageChannelHandler] Intercepted message channel error:', message);
    }
  }

  public getErrorLog(): MessageChannelError[] {
    return [...this.errorLog];
  }

  public clearErrorLog(): void {
    this.errorLog = [];
  }

  public getErrorCount(): number {
    return this.errorLog.length;
  }

  public hasRecentErrors(minutes: number = 5): boolean {
    const cutoffTime = Date.now() - (minutes * 60 * 1000);
    return this.errorLog.some(error => error.timestamp > cutoffTime);
  }
}

// Initialize the handler when the module is loaded
if (typeof window !== 'undefined') {
  MessageChannelHandler.getInstance();
}

export default MessageChannelHandler; 