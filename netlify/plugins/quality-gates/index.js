/* eslint-disable no-console */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command, options = {}) {
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf8', ...options });
    return { ok: true, output };
  } catch (error) {
    const output = error.stdout ? String(error.stdout) : '';
    const errout = error.stderr ? String(error.stderr) : '';
    return { ok: false, output: `${output}\n${errout}`.trim() };
  }
}

function getNextBundleSizeKb(publishDir) {
  try {
    // For Next.js on Netlify, build output is in .next; use that path if exists
    const nextDir = path.resolve(process.cwd(), '.next');
    const dir = fs.existsSync(nextDir) ? nextDir : publishDir;
    if (!dir || !fs.existsSync(dir)) return 0;

    let totalBytes = 0;
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      const entries = fs.readdirSync(current, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(current, e.name);
        if (e.isDirectory()) stack.push(full);
        else if (e.isFile()) totalBytes += fs.statSync(full).size;
      }
    }
    return Math.round(totalBytes / 1024);
  } catch {
    return 0;
  }
}

module.exports = {
  name: 'quality-gates',
  onPreBuild: async ({ inputs, utils }) => {
    const maxWarnings = Number(inputs.maxWarnings || 0);

    // Lint
    const lintCmd = maxWarnings > 0 ? `npm run lint -- --max-warnings ${maxWarnings}` : 'npm run lint';
    const lint = runCommand(lintCmd);
    if (!lint.ok) {
      utils.build.failBuild('ESLint failed quality gate', { error: new Error(lint.output) });
      return;
    }

    // Type-check
    const typeCheck = runCommand('npm run type-check');
    if (!typeCheck.ok) {
      utils.build.failBuild('TypeScript type-check failed', { error: new Error(typeCheck.output) });
      return;
    }

    utils.status.show({ title: 'Quality gates (pre-build) passed', summary: 'lint + type-check OK' });
  },
  onSuccess: async ({ netlifyConfig, inputs, utils }) => {
    // Simple size budget on build artifacts
    const sizeBudgetKb = Number(inputs.sizeBudgetKb || 0);
    if (!sizeBudgetKb) return;

    const publishDir = netlifyConfig.build && netlifyConfig.build.publish ? path.resolve(process.cwd(), netlifyConfig.build.publish) : null;
    const totalKb = getNextBundleSizeKb(publishDir);

    if (totalKb > sizeBudgetKb) {
      utils.build.failBuild(`Bundle size ${totalKb}KB exceeds budget ${sizeBudgetKb}KB`);
      return;
    }
    utils.status.show({ title: 'Bundle size OK', summary: `${totalKb}KB <= ${sizeBudgetKb}KB` });
  },
};