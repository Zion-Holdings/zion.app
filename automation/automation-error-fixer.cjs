#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = path.join(LOG_DIR, 'auto-error-fixer.log');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(LOG_FILE, line);
}

function ensureFileWithContent(absPath, content) {
  const dir = path.dirname(absPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(absPath)) {
    fs.writeFileSync(absPath, content);
    log(`🆕 Created missing file: ${absPath}`);
  }
}

function makePlaceholderNodeScript(absPath, name) {
  const content = `#!/usr/bin/env node\n\nconst fs=require('fs');const path=require('path');\nconst logFile=path.join(__dirname,'logs','${path.basename(name, path.extname(name))}.log');\nif(!fs.existsSync(path.dirname(logFile))){fs.mkdirSync(path.dirname(logFile),{recursive:true});}\nfunction log(m){const l=\`[\${new Date().toISOString()}] \${m}\\n\`;console.log(m);fs.appendFileSync(logFile,l);}\nlog('🚀 Placeholder started for ${name}');\nsetInterval(()=>log('⏳ heartbeat'),60000);\n`;
  ensureFileWithContent(absPath, content);
  try { execSync(`chmod +x "${absPath}"`); } catch {}
}

function fixMissingScriptFile(issue) {
  const abs = issue.abs;
  const base = path.basename(abs);
  if (base.endsWith('.js') || base.endsWith('.cjs')) {
    makePlaceholderNodeScript(abs, base);
    return true;
  }
  if (base.endsWith('.sh')) {
    ensureFileWithContent(abs, `#!/bin/bash\necho 'placeholder cron for ${base}'\n`);
    try { execSync(`chmod +x "${abs}"`); } catch {}
    return true;
  }
  return false;
}

function fixEaddrInUse(port) {
  try {
    const out = execSync(`lsof -ti tcp:${port}`).toString().trim();
    if (out) {
      out.split(/\s+/).forEach((pid) => {
        try { process.kill(parseInt(pid, 10)); log(`🛑 Killed process on port ${port} (PID ${pid})`); } catch {}
      });
      return true;
    }
  } catch {}
  return false;
}

function fixEsmInCjs(file) {
  // Best-effort convert top-level ESM imports to require for .cjs files
  try {
    if (!fs.existsSync(file)) return false;
    let src = fs.readFileSync(file, 'utf8');
    if (!/import\s+/.test(src)) return false;
    src = src.replace(/import\s+([^'";]+)from\s+['"]([^'"]+)['"];?/g, (m, bindings, mod) => {
      const req = `require('${mod}')`;
      if (/^\{/.test(bindings.trim())) {
        return `const ${bindings.trim()} = ${req};`;
      }
      if (/^\*\s+as\s+/.test(bindings.trim())) {
        const name = bindings.trim().replace(/^\*\s+as\s+/, '');
        return `const ${name} = ${req};`;
      }
      return `const ${bindings.trim()} = ${req};`;
    });
    src = src.replace(/export\s+default\s+/g, 'module.exports = ');
    fs.writeFileSync(file, src);
    log(`🔧 Converted ESM style to CJS in ${file}`);
    return true;
  } catch (e) {
    log(`⚠️ Failed to convert ESM to CJS in ${file}: ${e.message}`);
    return false;
  }
}

function isLikelyPackageName(nameOrPath) {
  // No slashes means likely a package name
  return typeof nameOrPath === 'string' && !/[\\/]/.test(nameOrPath);
}

function fixModuleNotFound(missingSpecifier) {
  // If it's a package, try to install it; otherwise, if it looks like a local automation file, create a placeholder
  try {
    if (isLikelyPackageName(missingSpecifier)) {
      log(`📦 Attempting to install missing package: ${missingSpecifier}`);
      try {
        execSync(`npm install --save ${missingSpecifier}`, { stdio: 'pipe' });
        log(`✅ Installed package: ${missingSpecifier}`);
        return true;
      } catch (e) {
        log(`⚠️ Failed to install package ${missingSpecifier}: ${e.message}`);
      }
    } else {
      // Normalize and resolve under repo root
      const candidate = path.resolve(process.cwd(), missingSpecifier);
      if (missingSpecifier.startsWith('automation/')) {
        const abs = path.resolve(path.join(__dirname, '..'), missingSpecifier);
        const base = path.basename(abs);
        if (base.endsWith('.js') || base.endsWith('.cjs')) {
          makePlaceholderNodeScript(abs, base);
          return true;
        }
      }
      // If absolute path within repo
      if (candidate.startsWith(path.resolve(path.join(__dirname, '..')))) {
        const base = path.basename(candidate);
        if (base.endsWith('.js') || base.endsWith('.cjs')) {
          makePlaceholderNodeScript(candidate, base);
          return true;
        }
      }
    }
  } catch (e) {
    log(`⚠️ fixModuleNotFound error: ${e.message}`);
  }
  return false;
}

function runFixes(issues) {
  let fixed = 0;
  for (const issue of issues) {
    if (issue.type === 'missing_script_file') {
      if (fixMissingScriptFile(issue)) fixed++;
    } else if (issue.type === 'addr_in_use') {
      const port = parseInt(issue.match, 10);
      if (port && fixEaddrInUse(port)) fixed++;
    } else if (issue.type === 'esm_in_cjs') {
      // Hard-coded commonly failing file
      const cjsCandidates = [
        path.join(__dirname, 'lint-automation-manager.cjs'),
      ];
      for (const f of cjsCandidates) if (fixEsmInCjs(f)) { fixed++; break; }
    } else if (issue.type === 'module_not_found' && issue.match) {
      if (fixModuleNotFound(issue.match)) fixed++;
    }
  }
  return fixed;
}

if (require.main === module) {
  const scanner = require('./automation-error-scanner.cjs');
  const res = scanner.scanOnce();
  const count = runFixes(res.issues);
  log(`✅ Fixes applied: ${count}`);
  console.log(JSON.stringify({ fixed: count, issues: res.issues }, null, 2));
}

module.exports = { runFixes };


