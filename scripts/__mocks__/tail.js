// scripts/__mocks__/tail.js
const Tail = jest.fn().mockImplementation(function(filePath) {
  this.filePath = filePath;
  this.on = jest.fn((event, callback) => {
    // Store callbacks if needed for later manual triggering in tests
    if (!this.eventCallbacks) this.eventCallbacks = {};
    if (!this.eventCallbacks[event]) this.eventCallbacks[event] = [];
    this.eventCallbacks[event].push(callback);
  });
  this.watch = jest.fn(() => {
    // console.log(`Mock Tail: watch() called for ${this.filePath}`);
  });
  this.unwatch = jest.fn(() => {
    // console.log(`Mock Tail: unwatch() called for ${this.filePath}`);
  });

  // Helper for tests to simulate line events
  this._simulateLine = (data) => {
    if (this.eventCallbacks && this.eventCallbacks['line']) {
      this.eventCallbacks['line'].forEach(cb => cb(data));
    }
  };
  // Helper for tests to simulate error events
  this._simulateError = (error) => {
    if (this.eventCallbacks && this.eventCallbacks['error']) {
      this.eventCallbacks['error'].forEach(cb => cb(error));
    }
  };

  // console.log(`Mock Tail: constructor called for ${filePath}`);
  return this;
});

module.exports = { Tail };
