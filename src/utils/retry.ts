export interface RetryOptions {
  retries?: number;
  minTimeout?: number;
}

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
  const { retries = 3, minTimeout = 500 } = options;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= retries) {
        throw err;
      }
      const delay = Math.pow(2, attempt - 1) * minTimeout;
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  
  // This should never be reached, but TypeScript requires it
  throw new Error('Maximum retry attempts exceeded');
}

export async function withRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { retries = 3, minTimeout = 1000 } = options;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt >= retries) {
        throw error;
      }
      
      const waitTime = Math.pow(2, attempt - 1) * minTimeout;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  // This should never be reached, but TypeScript requires it
  throw new Error('Maximum retry attempts exceeded');
}

export default retry;
