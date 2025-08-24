#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec, execSync, spawn } = require('child_process');

class NextgenOrchestrator {
  constructor() {
    this.repoRoot = path.resolve(path.join(__dirname, '..'));
    this.agentsDir = path.join(__dirname, 'nextgen-agents');
    this.logsDir = path.join(__dirname, 'logs');
    this.logFile = path.join(this.logsDir, 'nextgen-orchestrator.log');
    this.ensureDirectories();
    this.running = false;
    this.lastRunSummary = null;
  }

  ensureDirectories() {
    for (const dir of [this.agentsDir, this.logsDir]) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }
  }

  log(message) {
    const ts = new Date().toISOString();
    const line = `[${ts}] ${message}`;
    console.log(line);
    fs.appendFileSync(this.logFile, line + '\n');
  }

  discoverAgents() {
    if (!fs.existsSync(this.agentsDir)) return [];
    return fs
      .readdirSync(this.agentsDir)
      .filter((f) => f.endsWith('.cjs') && f.startsWith('agent-'))
      .map((f) => path.join(this.agentsDir, f))
      .sort();
  }

  runAgentOnce(agentPath) {
    try {
      const out = execSync(`node "${agentPath}"`, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.repoRoot,
      });
      return { ok: true, output: out };
    } catch (e) {
      return { ok: false, output: (e.stdout || e.stderr || e.message || '').toString() };
    }
  }

  runAllAgentsOnce() {
    const agents = this.discoverAgents();
    const results = [];
    this.log(`Running ${agents.length} nextgen agent(s)`);
    for (const agent of agents) {
      this.log(`▶ Running ${path.basename(agent)}`);
      const res = this.runAgentOnce(agent);
      results.push({ agent: path.basename(agent), ...res });
      this.log(res.ok ? `✔ Completed ${path.basename(agent)}` : `✖ Failed ${path.basename(agent)}`);
    }
    this.lastRunSummary = { timestamp: new Date().toISOString(), results };
    return results;
  }

  startContinuous(intervalMs = 10 * 60 * 1000) {
    if (this.running) {
      this.log('Already running');
      return;
    }
    this.running = true;
    this.log('Starting continuous nextgen orchestration...');

    // Initial run
    this.runAllAgentsOnce();

    // Periodic runs
    const timer = setInterval(() => {
      if (!this.running) { clearInterval(timer); return; }
      this.log('Periodic run triggered');
      this.runAllAgentsOnce();
    }, intervalMs);

    // Also re-scan/generate agents periodically by invoking the factory
    const factoryTimer = setInterval(() => {
      if (!this.running) { clearInterval(factoryTimer); return; }
      this.log('Triggering factory scan to generate new agents if needed');
      try { execSync('node automation/nextgen-autonomous-factory.cjs scan', { stdio: 'pipe', cwd: this.repoRoot, encoding: 'utf8' }); } catch (_) {}
    }, Math.max(intervalMs, 15 * 60 * 1000));
  }

  status() {
    const agents = this.discoverAgents();
    return {
      running: this.running,
      agentsCount: agents.length,
      lastRunSummary: this.lastRunSummary,
    };
  }
}

function main() {
  const cmd = process.argv[2] || 'start';
  const orchestrator = new NextgenOrchestrator();
  if (cmd === 'start') {
    orchestrator.startContinuous();
  } else if (cmd === 'run') {
    orchestrator.runAllAgentsOnce();
  } else if (cmd === 'status') {
    const s = orchestrator.status();
    console.log(JSON.stringify(s, null, 2));
  } else {
    console.log('Usage: node automation/nextgen-orchestrator.cjs [start|run|status]');
    process.exit(1);
  }

  // Graceful shutdown
  process.on('SIGINT', () => { orchestrator.running = false; process.exit(0); });
  process.on('SIGTERM', () => { orchestrator.running = false; process.exit(0); });
}

if (require.main === module) {
  main();
}