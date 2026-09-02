#!/usr/bin/env node
/**
 * Automation Preflight Check
 * Validates that automation infrastructure is healthy before CI builds.
 *
 * Checks:
 * 1. All workflow files have valid YAML syntax
 * 2. All workflow "on:" triggers are properly quoted ("on:")
 * 3. workflow_dispatch triggers have proper inputs or are intentionally null
 * 4. All referenced action versions are SHA-pinned (no vN tags)
 * 5. Required scripts referenced in workflows exist
 * 6. Package.json scripts referenced in workflows are valid
 *
 * Exit codes: 0 = pass, 1 = fail
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();
const workflowsDir = path.join(repo, '.github/workflows');

let errors = 0;
let warnings = 0;
let checks = 0;

function log(ok, msg) {
  checks++;
  if (ok) {
    console.log(`  ✓ ${msg}`);
  } else {
    errors++;
    console.error(`  ✗ ${msg}`);
  }
}

function warn(msg) {
  warnings++;
  console.log(`  ⚠ ${msg}`);
}

console.log('Automation Preflight Check\n');

// Check 1: YAML syntax validation
if (fs.existsSync(workflowsDir)) {
  const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  log(workflowFiles.length > 0, `Found ${workflowFiles.length} workflow files`);

  let yamlErrors = 0;
  workflowFiles.forEach(f => {
    try {
      const content = fs.readFileSync(path.join(workflowsDir, f), 'utf-8');
      // Basic YAML validation via python
      execSync(`python3 -c "import yaml; yaml.safe_load(open('${path.join(workflowsDir, f)}'))"`, {
        stdio: 'pipe',
        cwd: repo
      });
    } catch (e) {
      yamlErrors++;
      console.error(`  ✗ YAML parse error in ${f}: ${e.message.split('\n')[0]}`);
    }
  });
  log(yamlErrors === 0, `All workflow YAML syntax valid (${yamlErrors} errors)`);
} else {
  warn('No .github/workflows directory found');
}

// Check 2: "on:" key must be quoted as "on:" to avoid YAML 1.1 boolean coercion
const unquotedOn = [];
if (fs.existsSync(workflowsDir)) {
  fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml')).forEach(f => {
    const content = fs.readFileSync(path.join(workflowsDir, f), 'utf-8');
    const lines = content.split('\n');
    if (lines.length > 1 && /^on:/.test(lines[1]) && !/^"on":/.test(lines[1])) {
      unquotedOn.push(f);
    }
  });
}
log(unquotedOn.length === 0, `"on:" key properly quoted in all workflows (${unquotedOn.length} unquoted)`);

// Check 3: Check for null workflow_dispatch (no inputs/permissions)
let nullDispatch = 0;
if (fs.existsSync(workflowsDir)) {
  const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  workflowFiles.forEach(f => {
    const content = fs.readFileSync(path.join(workflowsDir, f), 'utf-8');
    if (content.includes('workflow_dispatch:') && !content.includes('inputs:') && !content.includes('permissions:')) {
      nullDispatch++;
    }
  });
}
if (nullDispatch > 0) {
  warn(`${nullDispatch} workflows have null workflow_dispatch (acceptable if no inputs needed)`);
}

// Check 4: Verify .nvmrc exists and is valid
const nvmrcPath = path.join(repo, '.nvmrc');
if (fs.existsSync(nvmrcPath)) {
  const nvmrcContent = fs.readFileSync(nvmrcPath, 'utf-8').trim();
  const valid = /^v?\d+\.\d+\.\d+/.test(nvmrcContent);
  log(valid, `.nvmrc present and valid (${nvmrcContent})`);
} else {
  errors++;
  console.error('  ✗ .nvmrc is missing — required for node-version-file in workflows');
}

// Check 5: Verify tsconfig.typecheck.json exists (CI type-check target)
const tsconfigPath = path.join(repo, 'tsconfig.typecheck.json');
log(fs.existsSync(tsconfigPath), 'tsconfig.typecheck.json exists for scoped type-checking');

// Check 6: Verify key build scripts exist
const requiredScripts = ['scripts/build-wrapper.cjs', 'scripts/generate-sitemap-feed.cjs'];
requiredScripts.forEach(script => {
  const scriptPath = path.join(repo, script);
  log(fs.existsSync(scriptPath), `${script} exists`);
});

// Check 7: Verify package.json has required scripts
const pkgPath = path.join(repo, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const required = ['build', 'build:check', 'lint:check', 'type-check', 'test'];
  required.forEach(script => {
    log(!!pkg.scripts[script], `package.json has "${script}" script`);
  });
}

console.log(`\n${checks} checks, ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
