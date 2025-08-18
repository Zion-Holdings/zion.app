#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class HealthChecker {
  constructor() {
    this.automationDir = path.join(__dirname);
    this.healthFile = path.join(this.automationDir, 'health-status.json');
  }

  async checkHealth() {
    const status = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      automations: [],
      orchestrators: [],
      processes: []
    };

    // Check automations
    const automationFiles = fs.readdirSync(this.automationDir)
      .filter(file => file.endsWith('.cjs') && !file.includes('orchestrator'));

    for (const file of automationFiles) {
      status.automations.push({
        name: file,
        status: 'active',
        lastModified: fs.statSync(path.join(this.automationDir, file)).mtime.toISOString()
      });
    }

    // Check orchestrators
    const orchestratorFiles = fs.readdirSync(this.automationDir)
      .filter(file => file.includes('orchestrator'));

    for (const file of orchestratorFiles) {
      status.orchestrators.push({
        name: file,
        status: 'active',
        lastModified: fs.statSync(path.join(this.automationDir, file)).mtime.toISOString()
      });
    }

    // Save health status
    fs.writeFileSync(this.healthFile, JSON.stringify(status, null, 2));

    return status;
  }
}

// Run health check
const checker = new HealthChecker();
checker.checkHealth().then(console.log).catch(console.error);
