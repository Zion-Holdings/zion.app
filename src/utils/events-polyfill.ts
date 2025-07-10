// Events polyfill for browser environment
// This provides a minimal EventEmitter implementation for client-side use

class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  on(event: string, listener: (...args: unknown[]) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event: string, ...args: any[]): void {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach(listener => listener(...args));
  }

  off(event: string, listener: (...args: unknown[]) => void): void {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }

  removeAllListeners(event?: string): void {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
  }
}

// Export the EventEmitter class
export { EventEmitter };

// Also export as default for compatibility
export default EventEmitter; 