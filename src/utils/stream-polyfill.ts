/**
 * Stream Polyfill for Browser Environment
 * 
 * This polyfill provides a basic implementation of Node.js streams
 * for browser environments where the stream module is not available.
 */

// EventEmitter polyfill (simplified)
class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  on(event: string, listener: Function): this {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }

  emit(event: string, ...args: any[]): boolean {
    if (!this.events[event]) {
      return false;
    }
    this.events[event].forEach(listener => listener(...args));
    return true;
  }

  removeListener(event: string, listener: Function): this {
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
  private _read: Function;

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

  read(size?: number): any {
    return this._read(size);
  }

  push(chunk: any, encoding?: string): boolean {
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
  private _write: Function;

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

  write(chunk: any, encoding?: string, cb?: Function): boolean {
    this._write(chunk, encoding, cb);
    return true;
  }

  end(chunk?: any, encoding?: string, cb?: Function): this {
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

  write(chunk: any, encoding?: string, cb?: Function): boolean {
    return this._writable.write(chunk, encoding, cb);
  }

  end(chunk?: any, encoding?: string, cb?: Function): this {
    this._writable.end(chunk, encoding, cb);
    return this;
  }
}

// Transform Stream
class Transform extends Duplex {
  private _transform: Function;
  private _flush: Function;

  constructor(options: any = {}) {
    super(options);
    this._transform = options.transform || ((chunk: any, encoding: string, callback: Function) => {
      callback(null, chunk);
    });
    this._flush = options.flush || ((callback: Function) => {
      callback();
    });
  }

  _transform(chunk: any, encoding: string, callback: Function): void {
    this._transform(chunk, encoding, callback);
  }

  _flush(callback: Function): void {
    this._flush(callback);
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
  finished: (stream: any, callback: Function) => {
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