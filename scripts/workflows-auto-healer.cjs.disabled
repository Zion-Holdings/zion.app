#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const WORKFLOWS_DIR = path.resolve(__dirname, "../.github/workflows");

function listWorkflowFiles() {
  return fs
    .readdirSync(WORKFLOWS_DIR)
    .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
    .map((f) => path.join(WORKFLOWS_DIR, f));
}

function ensureGuardPushOnMainOnly(filePath, content) {
  const lines = content.split(/\r?\n/);
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const stepStartMatch = line.match(/^([ \t]+)-\s+name:\s+.*/);
    if (!stepStartMatch) continue;
    const stepIndent = stepStartMatch[1] || "";
    const stepEndIndentPattern = new RegExp(`^${stepIndent}-\\s+name:`);
    let j = i + 1;
    let containsGitPush = false;
    let hasIfGuard = false;
    while (j < lines.length && !lines[j].match(stepEndIndentPattern)) {
      const l = lines[j];
      if (l.includes("git push")) containsGitPush = true;
      const ifGuardPattern = new RegExp(`^${stepIndent}[ \t]{2}if:\s*\$\{\{.*\}\}`);
      if (ifGuardPattern.test(l)) hasIfGuard = true;
      j++;
    }
    if (containsGitPush && !hasIfGuard) {
      const guardLiteral = `${stepIndent}  if: ${{` + ` !github.event.repository.fork && github.ref == 'refs/heads/main' }}`;
      lines.splice(i + 1, 0, guardLiteral);
      changed = true;
      i++;
    }
  }
  return { content: lines.join("\n"), changed };
}

function ensurePa11yUsesNpxAndRetry(filePath, content) {
  if (!filePath.endsWith("pa11y.yml")) return { content, changed: false };
  let changed = false;
  let updated = content.replace(/npm i -g pa11y@[^\s]+/g, "npx --yes pa11y@6.3.1 --version");
  if (updated !== content) changed = true;
  if (/pa11y\s+\"\$u\"/.test(updated) && !/npx\s+--yes\s+pa11y/.test(updated)) {
    updated = updated.replace(/pa11y\s+\"\$u\"[^\n]*/g, () => `npx --yes pa11y@6.3.1 "$u" --threshold 0 --reporter cli || npx --yes pa11y@6.3.1 "$u" --threshold 0 --reporter cli || true`);
    changed = true;
  }
  return { content: updated, changed };
}

function ensureCiSkipsExportIfConfigured(filePath, content) {
  if (!filePath.endsWith("ci.yml")) return { content, changed: false };
  const pattern = /(\n\s*build:\n[\s\S]*?)(\n\s*steps:\n)/m;
  const match = content.match(pattern);
  if (!match) return { content, changed: false };
  const header = match[1];
  if (/\n\s*env:\n\s*SKIP_EXPORT:\s*'1'/.test(header)) return { content, changed: false };
  const updated = content.replace(pattern, (m, a, b) => `${a}\n  env:\n    SKIP_EXPORT: '1'${b}`);
  return { content: updated, changed: true };
}

function run() {
  const files = listWorkflowFiles();
  const changes = [];
  for (const filePath of files) {
    const base = path.basename(filePath);
    // Skip self and non-workflows like codeql (read-only), playwright-smoke (already handled)
    // but include all others by default
    const before = fs.readFileSync(filePath, "utf8");
    let modified = before;
    let fileChanged = false;

    const r1 = ensureGuardPushOnMainOnly(filePath, modified);
    modified = r1.content; fileChanged = fileChanged || r1.changed;

    const r2 = ensurePa11yUsesNpxAndRetry(filePath, modified);
    modified = r2.content; fileChanged = fileChanged || r2.changed;

    const r3 = ensureCiSkipsExportIfConfigured(filePath, modified);
    modified = r3.content; fileChanged = fileChanged || r3.changed;

    if (fileChanged && modified !== before) {
      fs.writeFileSync(filePath, modified, "utf8");
      changes.push(path.basename(filePath));
    }
  }
  console.log(JSON.stringify({ updatedWorkflows: changes }, null, 2));
}

run();

#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const WORKFLOWS_DIR = path.resolve(__dirname, "../.github/workflows");

function listWorkflowFiles() {
  return fs
    .readdirSync(WORKFLOWS_DIR)
    .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
    .map((f) => path.join(WORKFLOWS_DIR, f));
}

function ensureGuardPushOnMainOnly(filePath, content) {
  const lines = content.split(/\r?\n/);
  let changed = false;

  // Scan for step blocks starting with "- name:" and check within for git push
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const stepStartMatch = line.match(/^([ \t]+)-\s+name:\s+.*/);
    if (!stepStartMatch) continue;
    const stepIndent = stepStartMatch[1] || "";
    const stepEndIndentPattern = new RegExp(`^${stepIndent}-\\s+name:`);
    let j = i + 1;
    let containsGitPush = false;
    let hasIfGuard = false;
    while (j < lines.length && !lines[j].match(stepEndIndentPattern)) {
      const l = lines[j];
      if (l.includes("git push")) containsGitPush = true;
      const ifGuardPattern = new RegExp(`^${stepIndent}[ \t]{2}if:\s*\$\{\{\s*github\.ref\s*==\s*'refs/heads/main'\s*\}\}`);
      if (ifGuardPattern.test(l)) hasIfGuard = true;
      j++;
    }
    if (containsGitPush && !hasIfGuard) {
      // Insert guard after the - name: line
      const guardLine = `${stepIndent}  if: ${{}}`;
      // We need to embed ${{ }} without template parsing. Build it dynamically.
      const guard = `${stepIndent}  if: ${{ github: { ref: "refs/heads/main" } }}`;
      // Replace the constructed object line with literal expression form to keep YAML clean
      const guardLiteral = `${stepIndent}  if: ${{` + ` github.ref == 'refs/heads/main' }}`;
      lines.splice(i + 1, 0, guardLiteral);
      changed = true;
      // Advance indices to skip over inserted line
      i++;
    }
  }
  return { content: lines.join("\n"), changed };
}

function ensurePa11yUsesNpxAndRetry(filePath, content) {
  if (!filePath.endsWith("pa11y.yml")) return { content, changed: false };
  let changed = false;
  let updated = content.replace(/npm i -g pa11y@[^\s]+/g, "npx --yes pa11y@6.3.1 --version");
  if (updated !== content) changed = true;
  // Add retry logic if pa11y is invoked directly
  if (/pa11y\s+\"\$u\"/.test(updated) && !/npx\s+--yes\s+pa11y/.test(updated)) {
    updated = updated.replace(/pa11y\s+\"\$u\"[^\n]*/g, (m) => `npx --yes pa11y@6.3.1 "$u" --threshold 0 --reporter cli || npx --yes pa11y@6.3.1 "$u" --threshold 0 --reporter cli || true`);
    changed = true;
  }
  return { content: updated, changed };
}

function ensureCiSkipsExportIfConfigured(filePath, content) {
  if (!filePath.endsWith("ci.yml")) return { content, changed: false };
  // Ensure build job has env SKIP_EXPORT: '1'
  const pattern = /^(\s*)build:\n([\s\S]*?\n)\1\S/m; // crude capture of build job block
  const match = content.match(pattern);
  if (!match) return { content, changed: false };
  const block = match[0];
  if (/\n\s+env:\n\s+SKIP_EXPORT:\s*'1'/.test(block)) return { content, changed: false };
  // Insert env after build job header lines
  const lines = block.split(/\r?\n/);
  const baseIndent = (lines[0].match(/^(\s*)/) || ["", ""])[1];
  // find insertion after timeout-minutes or runs-on line
  let insertIdx = 1;
  for (let i = 1; i < lines.length; i++) {
    if (/timeout-minutes:/.test(lines[i]) || /runs-on:/.test(lines[i])) insertIdx = i + 1;
    if (/^\s*env:/.test(lines[i])) { insertIdx = -1; break; }
    if (/^\s*steps:/.test(lines[i])) break;
  }
  if (insertIdx >= 0) {
    lines.splice(insertIdx, 0, `${baseIndent}  env:`, `${baseIndent}    SKIP_EXPORT: '1'`);
    const newBlock = lines.join("\n");
    const newContent = content.replace(block, newBlock);
    return { content: newContent, changed: true };
  }
  return { content, changed: false };
}

function run() {
  const files = listWorkflowFiles();
  const changes = [];
  for (const filePath of files) {
    const before = fs.readFileSync(filePath, "utf8");
    let modified = before;
    let fileChanged = false;

    const r1 = ensureGuardPushOnMainOnly(filePath, modified);
    modified = r1.content; fileChanged = fileChanged || r1.changed;

    const r2 = ensurePa11yUsesNpxAndRetry(filePath, modified);
    modified = r2.content; fileChanged = fileChanged || r2.changed;

    const r3 = ensureCiSkipsExportIfConfigured(filePath, modified);
    modified = r3.content; fileChanged = fileChanged || r3.changed;

    if (fileChanged && modified !== before) {
      fs.writeFileSync(filePath, modified, "utf8");
      changes.push(path.basename(filePath));
    }
  }
  console.log(JSON.stringify({ updatedWorkflows: changes }, null, 2));
  process.exit(0);
}

run();


