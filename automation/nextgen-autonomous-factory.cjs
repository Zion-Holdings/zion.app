#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class NextgenAutonomousFactory {
  constructor() {
    this.repoRoot = path.resolve(path.join(__dirname, '..'));
    this.agentsDir = path.join(__dirname, 'nextgen-agents');
    this.logsDir = path.join(__dirname, 'logs');
    this.manifestPath = path.join(this.agentsDir, 'manifest.json');
    this.logFile = path.join(this.logsDir, 'nextgen-factory.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    for (const dir of [this.agentsDir, this.logsDir]) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}`;
    console.log(line);
    fs.appendFileSync(this.logFile, line + '\n');
  }

  runCommand(cmd, opts = {}) {
    try {
      const output = execSync(cmd, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.repoRoot,
        ...opts,
      });
      return { success: true, output };
    } catch (error) {
      return { success: false, output: (error.stdout || error.stderr || error.message || '').toString() };
    }
  }

  scanESLint() {
    this.log('Scanning with ESLint...');
    const res = this.runCommand('npm run lint');
    if (!res.success) {
      return { hasErrors: true, details: res.output };
    }
    return { hasErrors: false, details: res.output };
  }

  scanTypeCheck() {
    this.log('Running TypeScript type check...');
    const res = this.runCommand('npm run type-check');
    if (!res.success) {
      return { hasErrors: true, details: res.output };
    }
    return { hasErrors: false, details: res.output };
  }

  scanAutomationLogs() {
    this.log('Scanning automation logs for common issues...');
    try {
      // Prefer requiring the scanner module to avoid spawning a process
      const scanner = require(path.join(__dirname, 'automation-error-scanner.cjs'));
      const result = scanner.scanOnce();
      return result;
    } catch (e) {
      const res = this.runCommand('node automation/automation-error-scanner.cjs');
      try {
        return JSON.parse(res.output);
      } catch (_) {
        return { timestamp: new Date().toISOString(), issues: [] };
      }
    }
  }

  writeAgent(filename, content) {
    const agentPath = path.join(this.agentsDir, filename);
    fs.writeFileSync(agentPath, content);
    fs.chmodSync(agentPath, 0o755);
    return agentPath;
  }

  generateEslintAgent() {
    const ts = Date.now();
    const filename = `agent-eslint-auto-fix-${ts}.cjs`;
    const content = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-eslint-auto-fix.log');
function log(m){ const t=new Date().toISOString(); const l=\`[\${t}] \${m}\`; console.log(l); fs.appendFileSync(logFile, l+'\n'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('ESLint agent starting...');
  let res = run('npm run lint');
  if(!res.ok){ log('Lint errors detected, attempting --fix'); run('npm run lint -- --fix'); }
  // Re-check once after fix
  res = run('npm run lint');
  log(res.ok ? 'Lint clean after fix' : 'Lint still failing after fix');
})();
`;
    const agentPath = this.writeAgent(filename, content);
    return { type: 'eslint', file: agentPath };
  }

  generateTypeCheckAgent() {
    const ts = Date.now();
    const filename = `agent-tsc-auto-fix-${ts}.cjs`;
    const content = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-tsc-auto-fix.log');
function log(m){ const t=new Date().toISOString(); const l=\`[\${t}] \${m}\`; console.log(l); fs.appendFileSync(logFile, l+'\n'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('TSC agent starting...');
  let res = run('npm run type-check');
  if(!res.ok){
    log('Type errors detected, invoking syntax fixers');
    run('node fix_typescript_syntax_errors.cjs || true');
    run('node fix_all_typescript_errors.cjs || true');
  }
  res = run('npm run type-check');
  log(res.ok ? 'Type check clean after fix' : 'Type check still failing after fix');
})();
`;
    const agentPath = this.writeAgent(filename, content);
    return { type: 'tsc', file: agentPath };
  }

  generateModuleInstallAgent(moduleName) {
    if (!moduleName || /[^@\/\w.-]/.test(moduleName)) {
      return null;
    }
    const ts = Date.now();
    const filename = `agent-install-module-${moduleName.replace(/\W+/g,'_')}-${ts}.cjs`;
    const content = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const logFile = path.join(__dirname, '..', 'logs', 'agent-install-module.log');
function log(m){ const t=new Date().toISOString(); const l=\`[\${t}] \${m}\`; console.log(l); fs.appendFileSync(logFile, l+'\n'); }
function run(cmd){ try{ return {ok:true,out:execSync(cmd,{encoding:'utf8',stdio:'pipe',cwd:path.join(__dirname,'..','..')})}; }catch(e){ return {ok:false,out:(e.stdout||e.stderr||e.message||'').toString()}; }}
(async()=>{
  log('Attempting to install missing module: ${moduleName}');
  const res = run('npm i ${moduleName}');
  log(res.ok ? 'Installed ${moduleName}' : 'Failed to install ${moduleName}');
})();
`;
    const agentPath = this.writeAgent(filename, content);
    return { type: 'module_install', module: moduleName, file: agentPath };
  }

  generateMissingScriptStubAgent(absPath, scriptName) {
    if (!absPath || !absPath.startsWith(this.repoRoot)) return null;
    const ts = Date.now();
    const filename = `agent-create-missing-script-${scriptName.replace(/\W+/g,'_')}-${ts}.cjs`;
    const rel = path.relative(this.repoRoot, absPath);
    const content = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '..', 'logs', 'agent-create-missing-script.log');
function log(m){ const t=new Date().toISOString(); const l=\`[\${t}] \${m}\`; console.log(l); fs.appendFileSync(logFile, l+'\n'); }
(function(){
  const target = path.join(__dirname,'..','..','${rel.replace(/\\/g,'/')}');
  if (fs.existsSync(target)) { log('Target already exists: ${rel}'); return; }
  const dir = path.dirname(target);
  fs.mkdirSync(dir, { recursive: true });
  const stub = '#!/usr/bin/env node\nconsole.log(\'Stub for ${scriptName}\');\n';
  fs.writeFileSync(target, stub);
  try { fs.chmodSync(target, 0o755); } catch(_){}
  log('Created stub script: ${rel}');
})();
`;
    const agentPath = this.writeAgent(filename, content);
    return { type: 'missing_script_stub', target: absPath, file: agentPath };
  }

  readManifest() {
    try {
      return JSON.parse(fs.readFileSync(this.manifestPath, 'utf8'));
    } catch {
      return { createdAt: new Date().toISOString(), agents: [] };
    }
  }

  writeManifest(manifest) {
    fs.writeFileSync(this.manifestPath, JSON.stringify(manifest, null, 2));
  }

  runScanAndGenerate() {
    const manifest = this.readManifest();
    const createdAgents = [];

    const eslint = this.scanESLint();
    if (eslint.hasErrors) {
      this.log('Detected ESLint errors. Generating ESLint auto-fix agent.');
      createdAgents.push(this.generateEslintAgent());
    }

    const tsc = this.scanTypeCheck();
    if (tsc.hasErrors) {
      this.log('Detected TypeScript errors. Generating TSC auto-fix agent.');
      createdAgents.push(this.generateTypeCheckAgent());
    }

    const automationScan = this.scanAutomationLogs();
    for (const issue of (automationScan.issues || [])) {
      if (issue.type === 'module_not_found' && issue.match) {
        // If the match looks like a local path, prefer creating a stub instead of npm install
        const looksLikePath = issue.match.startsWith('/') || issue.match.startsWith('.') || issue.match.includes(path.sep);
        if (looksLikePath) {
          const abs = path.isAbsolute(issue.match) ? issue.match : path.join(this.repoRoot, issue.match);
          if (abs.startsWith(this.repoRoot)) {
            const agent = this.generateMissingScriptStubAgent(abs, path.basename(abs));
            if (agent) { this.log(`Generated missing script stub agent for ${abs}`); createdAgents.push(agent); }
            continue;
          }
        }
        const agent = this.generateModuleInstallAgent(issue.match);
        if (agent) { this.log(`Generated module install agent for ${issue.match}`); createdAgents.push(agent); }
      }
      if (issue.type === 'missing_script_file' && issue.abs) {
        const agent = this.generateMissingScriptStubAgent(issue.abs, issue.scriptName || 'unknown');
        if (agent) { this.log(`Generated missing script stub agent for ${issue.abs}`); createdAgents.push(agent); }
      }
    }

    if (createdAgents.length === 0) {
      this.log('No new issues detected. No agents generated.');
    } else {
      manifest.agents.push(...createdAgents.map(a => ({ ...a, createdAt: new Date().toISOString() })));
      this.writeManifest(manifest);
      this.log(`Generated ${createdAgents.length} agent(s).`);
    }

    return createdAgents;
  }
}

function main() {
  const cmd = process.argv[2] || 'scan';
  const factory = new NextgenAutonomousFactory();
  if (cmd === 'scan' || cmd === 'generate') {
    factory.runScanAndGenerate();
  } else {
    console.log('Usage: node automation/nextgen-autonomous-factory.cjs [scan]');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}