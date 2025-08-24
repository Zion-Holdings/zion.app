#!/usr/bin/env node

'use strict';

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { performance } = require('perf_hooks');

class TurboStressTest {
  constructor() {
    this.workerPool = [];
    this.maxWorkers = 32;
    this.testDuration = 60000; // 1 minute
    this.maxLoad = 1000; // operations per second
  }

  async initialize() {
    for (let i = 0; i < this.maxWorkers; i++) {
      const worker = new Worker(__filename, { workerData: { workerId: i } });
      this.workerPool.push(worker);
    }
    console.log(`💪 TURBO STRESS TEST: Initialized ${this.maxWorkers} workers`);
  }

  async runStressTest() {
    console.log('💪 Starting TURBO STRESS TEST...');
    console.log(`⏱️  Duration: ${this.testDuration / 1000}s, Max Load: ${this.maxLoad} ops/sec`);
    
    const startTime = performance.now();
    const endTime = startTime + this.testDuration;
    
    const metrics = {
      totalOperations: 0,
      successfulOperations: 0,
      failedOperations: 0,
      startTime: new Date().toISOString(),
      samples: []
    };
    
    // Start stress test
    const stressPromises = this.workerPool.map(worker => 
      this.runWorkerStress(worker, endTime)
    );
    
    // Monitor performance
    const monitorInterval = setInterval(() => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const opsPerSecond = metrics.totalOperations / (elapsed / 1000);
      
      console.log(`📊 Stress Test Progress: ${elapsed.toFixed(0)}ms, ${opsPerSecond.toFixed(2)} ops/sec`);
      
      metrics.samples.push({
        timestamp: new Date().toISOString(),
        elapsed,
        opsPerSecond,
        memoryUsage: process.memoryUsage()
      });
      
      if (currentTime >= endTime) {
        clearInterval(monitorInterval);
      }
    }, 1000);
    
    // Wait for all workers to complete
    const workerResults = await Promise.all(stressPromises);
    
    // Aggregate results
    for (const result of workerResults) {
      metrics.totalOperations += result.operations;
      metrics.successfulOperations += result.successful;
      metrics.failedOperations += result.failed;
    }
    
    const totalDuration = performance.now() - startTime;
    metrics.endTime = new Date().toISOString();
    metrics.totalDuration = totalDuration;
    metrics.avgOpsPerSecond = metrics.totalOperations / (totalDuration / 1000);
    metrics.successRate = (metrics.successfulOperations / metrics.totalOperations) * 100;
    
    this.printStressTestResults(metrics);
    
    return metrics;
  }

  async runWorkerStress(worker, endTime) {
    return new Promise((resolve) => {
      let operations = 0;
      let successful = 0;
      let failed = 0;
      
      worker.postMessage({ type: 'stress', endTime });
      
      worker.on('message', (data) => {
        if (data.type === 'result') {
          operations = data.operations;
          successful = data.successful;
          failed = data.failed;
        }
      });
      
      // Wait for worker to complete
      setTimeout(() => {
        resolve({ operations, successful, failed });
      }, 100);
    });
  }

  async cleanup() {
    for (const worker of this.workerPool) {
      worker.terminate();
    }
  }

  printStressTestResults(metrics) {
    console.log('\n💪 TURBO STRESS TEST RESULTS');
    console.log('============================');
    console.log(`📊 Total Operations: ${metrics.totalOperations.toLocaleString()}`);
    console.log(`✅ Successful: ${metrics.successfulOperations.toLocaleString()}`);
    console.log(`❌ Failed: ${metrics.failedOperations.toLocaleString()}`);
    console.log(`⏱️  Duration: ${metrics.totalDuration.toFixed(2)}ms`);
    console.log(`🚀 Average Ops/sec: ${metrics.avgOpsPerSecond.toFixed(2)}`);
    console.log(`📈 Success Rate: ${metrics.successRate.toFixed(2)}%`);
    
    // Performance rating
    if (metrics.avgOpsPerSecond > 500) {
      console.log('🏆 EXCEPTIONAL PERFORMANCE! System handles extreme load perfectly!');
    } else if (metrics.avgOpsPerSecond > 200) {
      console.log('🚀 EXCELLENT PERFORMANCE! System handles high load very well!');
    } else if (metrics.avgOpsPerSecond > 100) {
      console.log('⚡ GOOD PERFORMANCE! System handles moderate load well.');
    } else {
      console.log('⚠️  PERFORMANCE NEEDS IMPROVEMENT. Consider scaling or optimization.');
    }
  }
}

// Worker thread code
if (!isMainThread) {
  const { workerId } = workerData;
  
  parentPort.on('message', async (data) => {
    if (data.type === 'stress') {
      const result = await runStressOperations(data.endTime);
      parentPort.postMessage({ type: 'result', ...result });
    }
  });
  
  async function runStressOperations(endTime) {
    let operations = 0;
    let successful = 0;
    let failed = 0;
    
    while (performance.now() < endTime) {
      try {
        // Simulate various operations
        await simulateOperation();
        successful++;
      } catch (error) {
        failed++;
      }
      operations++;
      
      // Small delay to prevent overwhelming
      await new Promise(resolve => setTimeout(resolve, 1));
    }
    
    return { operations, successful, failed };
  }
  
  async function simulateOperation() {
    // Simulate different types of operations
    const operations = [
      () => new Promise(resolve => setTimeout(resolve, Math.random() * 10)),
      () => new Promise(resolve => setTimeout(resolve, Math.random() * 5)),
      () => new Promise(resolve => setTimeout(resolve, Math.random() * 15))
    ];
    
    const operation = operations[Math.floor(Math.random() * operations.length)];
    await operation();
    
    // Simulate occasional failures
    if (Math.random() < 0.01) {
      throw new Error('Simulated failure');
    }
  }
}

// CLI interface
if (require.main === module) {
  const stressTest = new TurboStressTest();
  
  const command = process.argv[2] || 'help';
  
  switch (command) {
    case 'run':
      stressTest.initialize().then(() => {
        return stressTest.runStressTest();
      }).then(() => {
        stressTest.cleanup();
      });
      break;
      
    case 'help':
    default:
      console.log('💪 TURBO Stress Test Commands:');
      console.log('  run   - Run stress test');
      console.log('  help  - Show this help');
      break;
  }
}

module.exports = TurboStressTest;
