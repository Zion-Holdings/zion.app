# Automation Tasks Directory

This directory contains pluggable, modular automation tasks for the system. Each task should be implemented as a class extending the base `AutomationTask` (see `automation/continuous-improvement/AutomationTask.js`).

## How to Add a New Task
1. Create a new file (e.g., `DependencyUpdater.js`) in this directory.
2. Export a class that extends `AutomationTask` and implements at least the `run()` method.
3. Optionally implement `getStatus()`, `getConfig()`, and any custom logic.
4. The automation core will automatically load and manage all tasks in this directory.

## Example Skeleton
```js
const AutomationTask = require('../automation/continuous-improvement/AutomationTask');

class ExampleTask extends AutomationTask {
  async run() {
    // Task logic here
    this.lastRun = new Date();
    this.lastStatus = 'success';
  }
}

module.exports = ExampleTask;
``` 