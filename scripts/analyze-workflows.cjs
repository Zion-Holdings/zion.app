#!/usr/bin/env node
// Analyze GitHub Actions workflows for issues
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

let issues = [];
let warnings = [];
let nullTriggers = [];
let missingScripts = [];

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  try {
    // js-yaml doesn't convert 'on' to true like PyYAML
    const data = yaml.load(content, { filename: file });
    if (!data || typeof data !== 'object') {
      issues.push(`${file}: Not a valid YAML object`);
      return;
    }
    
    // Check for null workflow_dispatch
    const on = data['on'] || data[true];
    if (on && typeof on === 'object') {
      if (on.workflow_dispatch === null || on.workflow_dispatch === undefined) {
        // workflow_dispatch with no config is actually valid in GHA
        // But check if it's truly null vs just present
      }
      // Check for truly null triggers (schedule with no cron, etc.)
      Object.keys(on).forEach(key => {
        if (on[key] === null) {
          // workflow_dispatch: null is valid
          // But schedule: null, push: null, etc. are problems
          if (key !== 'workflow_dispatch') {
            issues.push(`${file}: trigger '${key}' is null`);
          }
        }
      });
    }
    
    // Check for broken run commands with line continuation issues
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      // Look for lines ending with backslash that have content issues
      if (trimmed.endsWith('\\') && trimmed.includes('run:')) {
        // Check next lines
        let j = i + 1;
        let foundContent = false;
        while (j < lines.length && lines[j].trim() === '') j++;
        if (j < lines.length) {
          const nextLine = lines[j].trim();
          if (nextLine && !nextLine.startsWith('#') && !nextLine.startsWith('-') && !nextLine.includes(':')) {
            // This might be a continuation that should be on same line
            foundContent = true;
          }
        }
      }
      
      // Check for broken quotes in run commands
      if (trimmed.startsWith('run:')) {
        const runContent = trimmed.substring(4);
        // Count unescaped quotes
        let singleQuotes = 0;
        let doubleQuotes = 0;
        for (let ch of runContent) {
          if (ch === "'" && !runContent.includes("\\'")) singleQuotes++;
          if (ch === '"' && !runContent.includes('\\"')) doubleQuotes++;
        }
        if (singleQuotes % 2 !== 0 && !runContent.includes("'''")) {
          // Check if it's a multi-line block
          if (!runContent.includes('\n')) {
            issues.push(`${file}:${i+1}: Odd number of single quotes in run command`);
          }
        }
      }
    });
    
    // Check for references to missing scripts
    const runMatches = content.match(/run:\s*.+/g) || [];
    runMatches.forEach(match => {
      // Extract file paths from run commands
      const scriptMatches = match.match(/(?:node|python|ruby|bash|sh)\s+([^\s]+)/g) || [];
      scriptMatches.forEach(sm => {
        const scriptPath = sm.replace(/(node|python|ruby|bash|sh)\s+/, '').trim();
        if (scriptPath && !scriptPath.startsWith('npm') && !scriptPath.startsWith('npx') && !scriptPath.startsWith('-')) {
          // Check if it's a file reference
          let checkPath = scriptPath;
          if (checkPath.startsWith('"') || checkPath.startsWith("'")) {
            checkPath = checkPath.replace(/^['"]|['"]$/g, '');
          }
          if (checkPath.includes('/') && !checkPath.startsWith('http') && !checkPath.startsWith('$') && !checkPath.startsWith('~/')) {
            if (!fs.existsSync(checkPath)) {
              missingScripts.push(`${file}: references missing: ${checkPath}`);
            }
          }
        }
      });
    });
    
    // Check for missing permissions at workflow level
    if (!data.permissions) {
      // Check if any job has permissions
      const jobs = data.jobs || {};
      const hasJobPermissions = Object.values(jobs).some(j => j.permissions);
      if (!hasJobPermissions) {
        warnings.push(`${file}: No permissions field (defaults to all scopes write)`);
      }
    }
    
    // Check for hardcoded old node versions
    lines.forEach((line, i) => {
      if (line.includes('node-version:') && !line.includes("'20'") && !line.includes('"20"') && !line.includes("'22'") && !line.includes('"22"')) {
        if (!line.match(/node-version:\s*[\'"]20[\'"]/g) && !line.match(/node-version:\s*[\'"]22[\'"]/g)) {
          const nodeMatch = line.match(/node-version:\s*([^\s]+)/);
          if (nodeMatch && nodeMatch[1] && nodeMatch[1] !== "'20'" && nodeMatch[1] !== "'22'") {
            warnings.push(`${file}:${i+1}: Node version ${nodeMatch[1]} might be outdated`);
          }
        }
      }
    });
    
  } catch (e) {
    // YAML parse error - check if it's the 'on:' issue
    const hasOnKey = content.includes('\non:');
    const hasBooleanOn = content.match(/^\s*on:\s*$/m);
    if (hasOnKey) {
      issues.push(`${file}: YAML parse error (likely 'on:' boolean issue): ${e.message.slice(0, 100)}`);
    } else {
      issues.push(`${file}: YAML parse error: ${e.message.slice(0, 100)}`);
    }
  }
});

// Deduplicate
const uniqueMissing = [...new Set(missingScripts)];

console.log('=== WORKFLOW ANALYSIS ===');
console.log(`Total workflows: ${files.length}`);
console.log(`Issues: ${issues.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Missing scripts: ${uniqueMissing.length}`);
console.log('');

if (issues.length > 0) {
  console.log('--- ISSUES ---');
  issues.slice(0, 50).forEach(i => console.log(`  ${i}`));
  if (issues.length > 50) console.log(`  ... and ${issues.length - 50} more`);
}

if (uniqueMissing.length > 0) {
  console.log('\n--- MISSING SCRIPTS ---');
  uniqueMissing.slice(0, 30).forEach(m => console.log(`  ${m}`));
  if (uniqueMissing.length > 30) console.log(`  ... and ${uniqueMissing.length - 30} more`);
}

if (warnings.length > 0) {
  console.log('\n--- WARNINGS (first 20) ---');
  warnings.slice(0, 20).forEach(w => console.log(`  ${w}`));
  if (warnings.length > 20) console.log(`  ... and ${warnings.length - 20} more`);
}
