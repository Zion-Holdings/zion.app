#!/usr/bin/env node
/**
 * Fix broken double-quoted run commands across all workflows.
 * These have the pattern: run: \"...\\\\n...\\\\\\ ...\\\\n...\"
 * which contains broken line continuations and escaped sequences.
 * We convert them to clean run: | block scalars.
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

let fixed = 0;

/**
 * Unescape a double-quoted YAML run command value into clean lines.
 */
function unescapeDoubleQuotedRun(content) {
  let result = content;
  
  // Pattern: run: "..." where the value has \\n and \\ line continuations
  // We need to find these and rewrite them as block scalars
  
  // Match run: "..." blocks that span multiple lines (with \n in the string)
  const runRegex = /(^(\s+))run: "(.*?)"\s*$/gms;
  
  result = result.replace(runRegex, (match, indent, _, value) => {
    // Check if this is a simple single-line run (no \\n)
    if (!value.includes('\\\\n') && !value.includes('\\n')) {
      return match; // leave as-is
    }
    
    // Unescape the double-quoted string content
    let unescaped = value
      // Handle \\\\n → \n (literal newlines in the YAML string)
      .replace(/\\\\n/g, '\n')
      // Handle \\" → "
      .replace(/\\"/g, '"')
      // Handle \\\\ → \\ (literal backslash)
      .replace(/\\\\\\\\/g, '\\')
      // Handle remaining \\ at end of lines (line continuations)
      .replace(/\\\s*$/gm, '')
      // Remove leading spaces that were part of continuation
      .replace(/\n\s+/g, '\n');
    
    // Trim and re-indent
    const lines = unescaped.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) return match;
    
    return `run: |\n${indent}  ${lines.join('\n' + indent + '  ')}`;
  });
  
  return result;
}

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Apply fixes
  content = unescapeDoubleQuotedRun(content);
  
  // Also fix single-quoted run blocks that have broken format
  // Pattern: run: 'command\n\n        echo...\n\n        '
  // where content is split across lines with extra whitespace
  const singleQuoteRegex = /(run: '(.+?)\n\n        echo "exit_code=\$\?" >> \$GITHUB_OUTPUT\n\n        ')/gs;
  content = content.replace(singleQuoteRegex, (match, full, cmd) => {
    const cleanCmd = cmd.trim().replace(/\n\s+/g, '\n');
    return `run: |\n        ${cleanCmd}\n        echo "exit_code=$?" >> $GITHUB_OUTPUT`;
  });
  
  // Fix script: "..." blocks in github-script that are broken
  // These have the pattern: script: "\\n  ..." which is valid YAML but hard to read
  // Leave those as-is since they parse correctly
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`FIXED: ${file}`);
    fixed++;
  }
});

console.log(`\nTotal fixed: ${fixed}/${files.length}`);
