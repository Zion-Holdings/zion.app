/**
 * Stream Polyfill for Browser Environment
 * 
 * This polyfill provides a basic implementation of Node.js streams
 * for browser environments where the stream module is not available.
 */

// EventEmitter polyfill (simplified)
class EventEmitter {
  private events: { [key: string]: Array<(...args: unknown[]) => unknown> } = {};

  on(event: string, listener: (...args: unknown[]) => unknown): this {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }

  emit(event: string, ...args: unknown[]): boolean {
    if (!this.events[event]) {
      return false;
    }
    this.events[event].forEach(listener => listener(...args));
    return true;
  }

  removeListener(event: string, listener: (...args: unknown[]) => unknown): this {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
    return this;
  }

  removeAllListeners(event?: string): this {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }
}

// Base Stream class
class Stream extends EventEmitter {
  constructor() {
    super();
  }
}

// Readable Stream
class Readable extends Stream {
  private _readableState: any;
  private _read: (size?: number) => unknown;

  constructor(options: any = {}) {
    super();
    this._readableState = {
      flowing: null,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    };
    this._read = options.read || (() => {});
  }

  read(size?: number): unknown {
    return this._read(size);
  }

  push(chunk: unknown, encoding?: string): boolean {
    this.emit('data', chunk);
    return true;
  }

  pipe(dest: any, options?: any): any {
    this.on('data', (chunk) => {
      if (dest.write && !dest.write(chunk)) {
        this.pause();
      }
    });
    this.on('end', () => {
      if (dest.end) dest.end();
    });
    return dest;
  }

  pause(): this {
    this._readableState.flowing = false;
    return this;
  }

  resume(): this {
    this._readableState.flowing = true;
    return this;
  }

  destroy(): this {
    this._readableState.destroyed = true;
    this.emit('close');
    return this;
  }
}

// Writable Stream
class Writable extends Stream {
  private _writableState: any;
  private _write: (chunk: unknown, encoding?: string, cb?: (err?: Error) => unknown) => unknown;

  constructor(options: any = {}) {
    super();
    this._writableState = {
      ended: false,
      ending: false,
      finished: false,
      destroyed: false,
      decodeStrings: true,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: () => {},
      writecb: () => {},
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      bufferedRequestCount: 0,
      corkedRequestsFree: null
    };
    this._write = options.write || (() => {});
  }

  write(chunk: unknown, encoding?: string, cb?: (err?: Error) => unknown): boolean {
    this._write(chunk, encoding, cb);
    return true;
  }

  end(chunk?: unknown, encoding?: string, cb?: (err?: Error) => unknown): this {
    this._writableState.ending = true;
    this._writableState.finished = true;
    this.emit('finish');
    return this;
  }

  destroy(): this {
    this._writableState.destroyed = true;
    this.emit('close');
    return this;
  }
}

// Duplex Stream
class Duplex extends Readable {
  private _writable: Writable;

  constructor(options: any = {}) {
    super(options);
    this._writable = new Writable(options);
  }

  write(chunk: unknown, encoding?: string, cb?: (err?: Error) => unknown): boolean {
    return this._writable.write(chunk, encoding, cb);
  }

  end(chunk?: unknown, encoding?: string, cb?: (err?: Error) => unknown): this {
    this._writable.end(chunk, encoding, cb);
    return this;
  }
}

// Transform Stream
class Transform extends Duplex {
  private _internalTransform: (chunk: unknown, encoding: string, callback: (err?: Error, data?: unknown) => unknown) => unknown;
  private _internalFlush: (callback: (err?: Error) => unknown) => unknown;

  constructor(options: any = {}) {
    super(options);
    this._internalTransform = options.transform || ((chunk: unknown, encoding: string, callback: (err?: Error, data?: unknown) => unknown) => {
      callback(undefined, chunk);
    });
    this._internalFlush = options.flush || ((callback: (err?: Error) => unknown) => {
      callback();
    });
  }

  _transform(chunk: unknown, encoding: string, callback: (err?: Error, data?: unknown) => unknown): void {
    this._internalTransform(chunk, encoding, callback);
  }

  _flush(callback: (err?: Error) => unknown): void {
    this._internalFlush(callback);
  }
}

// PassThrough Stream
class PassThrough extends Transform {
  constructor(options: any = {}) {
    super(options);
  }
}

// Create the stream module
const streamModule = {
  Stream,
  Readable,
  Writable,
  Duplex,
  Transform,
  PassThrough,
  // Add commonly used properties
  ReadableState: class {},
  WritableState: class {},
  Buffer: typeof Buffer !== 'undefined' ? Buffer : null,
  // Add utility functions
  finished: (stream: any, callback: (err?: Error) => unknown) => {
    stream.on('end', callback);
    stream.on('finish', callback);
    stream.on('close', callback);
  },
  pipeline: (...streams: any[]) => {
    // Simple pipeline implementation
    let current = streams[0];
    for (let i = 1; i < streams.length; i++) {
      current = current.pipe(streams[i]);
    }
    return current;
  }
};

// Export the stream module
export default streamModule;

// Also make it available globally
if (typeof globalThis !== 'undefined') {
  (globalThis as any).stream = streamModule;
}

if (typeof window !== 'undefined') {
  (window as any).stream = streamModule;
} 