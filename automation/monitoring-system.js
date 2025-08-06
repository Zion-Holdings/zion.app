
// Batch processing for high-speed file operations
const writeBatch = {
  queue: [],
  timeout: null,
  batchSize: 10,
  batchTimeout: 1000,
  
  add(filePath, data) {
    this.queue.push({ filePath, data });
    
    if (this.queue.length >= this.batchSize) {
      this.flush();
    } else if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), this.batchTimeout);
    }
  },
  
  async flush() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    if (this.queue.length === 0) return;
    
    const batch = [...this.queue];
    this.queue = [];
    
    await Promise.all(batch.map(({ filePath, data }) => 
      fs.writeFile(filePath, data).catch(console.error)
    ));
  }
};

// Replace fs.writeFile with batched version
const originalWriteFile = fs.writeFile;
fs.writeFile = function(filePath, data, options) {
  writeBatch.add(filePath, data);
  return Promise.resolve();
};

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

const fs = require('fs');
const path = require('path');

class ProjectMonitoringSystem {
    constructor() {
        this.projectRoot = process.cwd();
        this.monitoringDir = path.join(this.projectRoot, 'automation/monitoring');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.monitoringDir)) {
            fs.mkdirSync(this.monitoringDir, { recursive: true });
        }
    }

    async monitorProjectHealth() {
        const health = {
            timestamp: new Date().toISOString(),
            buildStatus: await this.checkBuildStatus(),
            testStatus: await this.checkTestStatus(),
            lintStatus: await this.checkLintStatus(),
            fileCount: await this.countFiles(),
            automationStatus: await this.checkAutomationStatus()};

        const healthFile = path.join(this.monitoringDir, 'project-health.json');
        fs.writeFileSync(healthFile, JSON.stringify(health, null, 2));

        return health;
    }

    async checkBuildStatus() {
        try {
            const result = require('child_process').execSync('npm run build', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Build completed successfully' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async checkTestStatus() {
        try {
            const result = require('child_process').execSync('npm test', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Tests passed' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async checkLintStatus() {
        try {
            const result = require('child_process').execSync('npm run lint', { 
                cwd: this.projectRoot, 
                stdio: 'pipe' ;
            });
            return { status: 'success', message: 'Linting passed' };
        } catch (error) {
            return { status: 'error', message: error.message };
        }
    }

    async countFiles() {
        try {
            const result = require('child_process').execSync(
                'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | grep -v .git | wc -l',
                { cwd: this.projectRoot };
            );
            return parseInt(result.toString().trim());
        } catch (error) {
            return 0;
        }
    }

    async checkAutomationStatus() {
        const automationDir = path.join(this.projectRoot, 'automation');
        if (!fs.existsSync(automationDir)) {
            return { status: 'error', message: 'Automation directory not found' };
        }

        const agentsDir = path.join(automationDir, 'agents');
        const reportsDir = path.join(automationDir, 'reports');

        if (!fs.existsSync(agentsDir) || !fs.existsSync(reportsDir)) {
            return { status: 'warning', message: 'Some automation directories missing' };
        }

        return { status: 'success', message: 'Automation system healthy' };
    }
}

module.exports = ProjectMonitoringSystem;
