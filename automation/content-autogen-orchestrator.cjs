#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const cron = require('node-cron');

class ContentAutogenOrchestrator {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'content-autogen.log');
    this.stateFile = path.join(__dirname, 'logs', 'content-autogen-state.json');
    this.ensureLogDirectory();
    this.state = this.loadState();
  }

  ensureLogDirectory() {
    const dir = path.dirname(this.logFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, line);
  }

  loadState() {
    try {
      if (fs.existsSync(this.stateFile)) {
        return JSON.parse(fs.readFileSync(this.stateFile, 'utf8')) || {};
      }
    } catch (_) {}
    return { generated: [] };
  }

  saveState() {
    fs.writeFileSync(this.stateFile, JSON.stringify(this.state, null, 2));
  }

  buildTitle() {
    const now = new Date();
    const stamp = now.toISOString().replace(/[:.]/g, '-');
    return `Auto Update ${stamp}`;
  }

  buildSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  generateOnce(customTopic) {
    return new Promise((resolve) => {
      const title = customTopic || this.buildTitle();
      const name = this.buildSlug(title);

      if (this.state.generated.includes(name)) {
        this.log(`⏭️ Skipping duplicate generation for ${name}`);
        return resolve(false);
      }

      const generatorPath = path.join(__dirname, 'content-generator.cjs');
      const args = [generatorPath, 'page', name, '--title', title, '--description', 'Automatically generated content', '--dir', 'pages/auto'];

      this.log(`📝 Generating content: ${title}`);

      const child = spawn('node', args, { cwd: path.join(__dirname, '..'), stdio: 'pipe' });

      child.stdout.on('data', (d) => this.log(`[gen] ${d.toString().trim()}`));
      child.stderr.on('data', (d) => this.log(`[gen][err] ${d.toString().trim()}`));

      child.on('close', (code) => {
        if (code === 0) {
          this.state.generated.push(name);
          if (this.state.generated.length > 200) this.state.generated.shift();
          this.saveState();
          this.log(`✅ Content generated: ${name}`);
          resolve(true);
        } else {
          this.log(`❌ Generation failed with code ${code}`);
          resolve(false);
        }
      });

      child.on('error', (err) => {
        this.log(`❌ Generator error: ${err.message}`);
        resolve(false);
      });
    });
  }

  start(schedule = '*/30 * * * *') { // every 30 minutes by default
    this.log('🚀 Content Autogen Orchestrator starting...');
    // Immediate run on startup
    this.generateOnce().then(() => this.log('⚙️ Initial generation attempt complete'));

    // Schedule periodic generation
    cron.schedule(schedule, () => {
      this.generateOnce();
    });

    this.log(`⏱️ Scheduling enabled with cron: ${schedule}`);
  }
}

// CLI
const orchestrator = new ContentAutogenOrchestrator();
const cmd = process.argv[2] || 'start';

switch (cmd) {
  case 'start':
    orchestrator.start(process.env.CONTENT_AUTOGEN_CRON || '*/30 * * * *');
    break;
  case 'run-once':
    orchestrator.generateOnce().then((ok) => process.exit(ok ? 0 : 1));
    break;
  default:
    console.log('Usage: node automation/content-autogen-orchestrator.cjs [start|run-once]');
    process.exit(1);
}