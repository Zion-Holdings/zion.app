interface ErrorLog {
  timestamp: Date;
  error: string;
  context: string;
  retryCount: number;
}

class LinkedInErrorHandler {
  private errorLogs: ErrorLog[] = [];
  private maxRetries = 3;
  private retryDelay = 60000; // 1 minute

  logError(error: Error, context: string, retryCount: number = 0) {
    const errorLog: ErrorLog = {
      timestamp: new Date(),
      error: error.message,
      context,
      retryCount
    };
    
    this.errorLogs.push(errorLog);
    console.error(`❌ LinkedIn Error [${context}]:`, error.message);
    
    if (retryCount < this.maxRetries) {
      console.log(`🔄 Retrying in ${this.retryDelay / 1000} seconds... (${retryCount + 1}/${this.maxRetries})`);
      return this.retryDelay;
    } else {
      console.error(`💥 Max retries exceeded for ${context}`);
      return 0;
    }
  }

  async retryOperation<T>(
    operation: () => Promise<T>,
    context: string,
    maxRetries: number = this.maxRetries
  ): Promise<T | null> {
    let lastError: Error;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        const delay = this.logError(lastError, context, attempt);
        
        if (delay > 0 && attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    console.error(`💥 Operation failed after ${maxRetries} retries: ${context}`);
    return null;
  }

  getRecentErrors(limit: number = 10): ErrorLog[] {
    return this.errorLogs
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  clearOldErrors(daysOld: number = 7) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - daysOld);
    
    this.errorLogs = this.errorLogs.filter(
      log => log.timestamp >= cutoff
    );
  }

  getErrorStats(): { total: number; recent: number; byContext: Record<string, number> } {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    const recent = this.errorLogs.filter(log => log.timestamp >= oneHourAgo).length;
    const byContext: Record<string, number> = {};
    
    this.errorLogs.forEach(log => {
      byContext[log.context] = (byContext[log.context] || 0) + 1;
    });
    
    return {
      total: this.errorLogs.length,
      recent,
      byContext
    };
  }
}

export const linkedInErrorHandler = new LinkedInErrorHandler(); 