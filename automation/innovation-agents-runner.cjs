#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const AGENTS_DIR = path.join(__dirname, 'innovations-auto');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(AGENTS_DIR)) fs.mkdirSync(AGENTS_DIR, { recursive: true });

const LOG = path.join(LOG_DIR, 'innovation-agents-runner.log');

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

class Runner {
  constructor() {
    this.children = new Map();
  }

  listAgents() {
    return fs.readdirSync(AGENTS_DIR).filter((f) => f.endsWith('.cjs')).map((f) => path.join(AGENTS_DIR, f));
  }

  startAgent(scriptPath) {
    const name = path.basename(scriptPath, '.cjs');
    if (this.children.has(name)) return;
    log(`🚀 Starting innovation agent: ${name}`);
    const child = spawn('node', [scriptPath], { stdio: 'pipe' });
    child.stdout.on('data', (d) => fs.appendFileSync(LOG, `[${name}] ${d.toString()}`));
    child.stderr.on('data', (d) => fs.appendFileSync(LOG, `[${name}] ERROR ${d.toString()}`));
    child.on('close', (code) => {
      log(`🔚 Agent ${name} exited with code ${code}`);
      this.children.delete(name);
    });
    child.on('error', (err) => {
      log(`❌ Agent ${name} error: ${err.message}`);
      this.children.delete(name);
    });
    this.children.set(name, child);
  }

  stopAll() {
    for (const [name, child] of this.children) {
      try { child.kill('SIGTERM'); } catch {}
      log(`🛑 Stopped ${name}`);
    }
    this.children.clear();
  }

  monitor() {
    setInterval(() => {
      try {
        const agents = new Set(this.listAgents());
        // Start any new agents
        for (const script of agents) {
          const name = path.basename(script, '.cjs');
          if (!this.children.has(name)) this.startAgent(script);
        }
        // Clean up removed scripts
        for (const [name, child] of this.children) {
          const script = path.join(AGENTS_DIR, `${name}.cjs`);
          if (!agents.has(script)) {
            try { child.kill('SIGTERM'); } catch {}
            this.children.delete(name);
            log(`🧹 Removed ${name}`);
          }
        }
      } catch (e) {
        log(`Monitor error: ${e.message}`);
      }
    }, 5000);
  }

  async run() {
    log('🏃 Innovation Agents Runner starting');
    for (const script of this.listAgents()) this.startAgent(script);
    this.monitor();
  }
}

async function main() {
  const runner = new Runner();
  await runner.run();
}

if (require.main === module) main();