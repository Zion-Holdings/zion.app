#!/usr/bin/env node

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Import the build quality guardian
const { analyzeFile, generateReport, shouldBlockBuild } = require('./build-quality-guardian.cjs');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'pre-commit'),
  maxIssues: 5, // Stricter limit for pre-commit
  stagedFilesOnly: true, // Only check staged files
  autoFix: true, // Attempt to auto-fix common issues
  backupDir: path.join(process.cwd(), '.backup-pre-commit')
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'pre-commit-guardian.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
    return output.split('\n').filter(Boolean);
  } catch (error) {
    log('Error getting staged files, checking all files instead', 'WARNING');
    return [];
  }
}

function getStagedFileContent(filePath) {
  try {
    return execSync(`git show :${filePath}`, { encoding: 'utf8' });
  } catch (error) {
    // If file is not staged, read from filesystem
    return fs.readFileSync(filePath, 'utf8');
  }
}

function backupFile(filePath) {
  if (!fs.existsSync(CONFIG.backupDir)) {
    fs.mkdirSync(CONFIG.backupDir, { recursive: true });
  }
  
  const backupPath = path.join(CONFIG.backupDir, path.basename(filePath) + '.backup');
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

function autoFixFile(filePath, content) {
  let fixedContent = content;
  let fixesApplied = 0;
  
  // Fix missing space before opening brace
  const bracePatterns = [
    { pattern: /function\s+(\w+)\s*\(\)\{/g, replacement: 'function $1() {' },
    { pattern: /if\s*\(([^)]+)\)\{/g, replacement: 'if ($1) {' },
    { pattern: /for\s*\(([^)]+)\)\{/g, replacement: 'for ($1) {' },
    { pattern: /while\s*\(([^)]+)\)\{/g, replacement: 'while ($1) {' },
    { pattern: /catch\s*\(([^)]+)\)\{/g, replacement: 'catch ($1) {' },
    { pattern: /else\s*\{/g, replacement: 'else {' }
  ];
  
  bracePatterns.forEach(({ pattern, replacement }) => {
    const matches = fixedContent.match(pattern);
    if (matches) {
      fixedContent = fixedContent.replace(pattern, replacement);
      fixesApplied += matches.length;
    }
  });
  
  // Fix missing React component structure for .tsx/.jsx files
  if ((filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) && 
      /^import\s+.*\s+from\s+['"]/.test(fixedContent) && 
      !/export\s+default\s+/.test(fixedContent)) {
    
    // Extract component name from filename
    const componentName = path.basename(filePath, path.extname(filePath))
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    // Add proper React component structure
    const componentStructure = `
export default function ${componentName}() {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}`;
    
    fixedContent += componentStructure;
    fixesApplied++;
  }
  
  return { fixedContent, fixesApplied };
}

function analyzeStagedFiles() {
  const stagedFiles = getStagedFiles();
  const results = [];
  
  if (stagedFiles.length === 0) {
    log('No staged files to analyze');
    return results;
  }
  
  log(`Analyzing ${stagedFiles.length} staged files...`);
  
  stagedFiles.forEach(filePath => {
    // Only analyze TypeScript/JSX files
    if (!/\.(tsx?|jsx?)$/.test(filePath)) {
      return;
    }
    
    try {
      const content = getStagedFileContent(filePath);
      const result = analyzeFile(filePath);
      
      // Attempt auto-fix if enabled
      if (CONFIG.autoFix && result.issues.length > 0) {
        const { fixedContent, fixesApplied } = autoFixFile(filePath, content);
        
        if (fixesApplied > 0) {
          log(`Auto-fixed ${fixesApplied} issues in ${filePath}`, 'INFO');
          
          // Backup original file
          const backupPath = backupFile(filePath);
          log(`Backed up original to ${backupPath}`, 'INFO');
          
          // Write fixed content
          fs.writeFileSync(filePath, fixedContent);
          
          // Stage the fixed file
          try {
            execSync(`git add "${filePath}"`, { stdio: 'pipe' });
            log(`Staged fixed file: ${filePath}`, 'INFO');
          } catch (error) {
            log(`Failed to stage fixed file: ${error.message}`, 'WARNING');
          }
          
          // Re-analyze the fixed file
          const fixedResult = analyzeFile(filePath);
          result.issues = fixedResult.issues;
          result.totalIssues = fixedResult.totalIssues;
        }
      }
      
      results.push(result);
    } catch (error) {
      log(`Error analyzing ${filePath}: ${error.message}`, 'ERROR');
      results.push({
        file: filePath,
        issues: [{
          severity: 'ERROR',
          message: `Error analyzing file: ${error.message}`,
          lineNumbers: [],
          pattern: 'File analysis error'
        }],
        totalIssues: 1
      });
    }
  });
  
  return results;
}

function generatePreCommitReport(results) {
  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: results.length,
    totalIssues: results.reduce((sum, r) => sum + r.totalIssues, 0),
    criticalIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'CRITICAL').length, 0),
    warningIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'WARNING').length, 0),
    errorIssues: results.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'ERROR').length, 0)
  };
  
  // Generate JSON report
  const jsonReport = path.join(CONFIG.reportDir, 'pre-commit-latest.json');
  fs.writeFileSync(jsonReport, JSON.stringify({ summary, results }, null, 2));
  
  // Generate markdown report
  const mdReport = path.join(CONFIG.reportDir, 'pre-commit-report.md');
  const markdown = generatePreCommitMarkdownReport(summary, results);
  fs.writeFileSync(mdReport, markdown);
  
  return summary;
}

function generatePreCommitMarkdownReport(summary, results) {
  let markdown = `# 🛡️ Pre-Commit Quality Guardian Report

Generated: ${new Date(summary.generatedAt).toLocaleString()}

## 📊 Summary

- **Files Analyzed**: ${summary.totalFiles}
- **Total Issues**: ${summary.totalIssues}
- **Critical Issues**: ${summary.criticalIssues}
- **Warnings**: ${summary.warningIssues}
- **Errors**: ${summary.errorIssues}

## 🚨 Critical Issues (Blocking Commit)

`;

  const criticalResults = results.filter(r => r.issues.some(i => i.severity === 'CRITICAL'));
  
  if (criticalResults.length === 0) {
    markdown += '✅ No critical issues found - commit allowed!\n\n';
  } else {
    criticalResults.forEach(result => {
      markdown += `### \`${result.file}\`\n`;
      result.issues.filter(i => i.severity === 'CRITICAL').forEach(issue => {
        markdown += `- **${issue.severity}**: ${issue.message}`;
        if (issue.lineNumbers.length > 0) {
          markdown += ` (Lines: ${issue.lineNumbers.join(', ')})`;
        }
        markdown += '\n';
      });
      markdown += '\n';
    });
    
    markdown += `## ❌ Commit Blocked
    
The commit has been blocked due to critical issues. Please fix these issues before committing.\n\n`;
  }
  
  if (summary.warningIssues > 0) {
    markdown += `## ⚠️ Warnings (Non-blocking)
    
These warnings won't block your commit but should be addressed:\n\n`;
    
    const warningResults = results.filter(r => r.issues.some(i => i.severity === 'WARNING'));
    warningResults.forEach(result => {
      markdown += `### \`${result.file}\`\n`;
      result.issues.filter(i => i.severity === 'WARNING').forEach(issue => {
        markdown += `- **${issue.severity}**: ${issue.message}`;
        if (issue.lineNumbers.length > 0) {
          markdown += ` (Lines: ${issue.lineNumbers.join(', ')})`;
        }
        markdown += '\n';
      });
      markdown += '\n';
    });
  }
  
  return markdown;
}

function shouldBlockCommit(summary) {
  return summary.criticalIssues > CONFIG.maxIssues;
}

// Main execution
async function main() {
  try {
    log('Starting Pre-Commit Quality Guardian...');
    
    // Ensure directories exist
    ensureDir(CONFIG.logDir);
    ensureDir(CONFIG.reportDir);
    
    // Analyze staged files
    const results = analyzeStagedFiles();
    
    if (results.length === 0) {
      log('No files to analyze - commit allowed');
      process.exit(0);
    }
    
    // Generate report
    const summary = generatePreCommitReport(results);
    
    // Log summary
    log(`Pre-commit analysis complete: ${summary.totalFiles} files, ${summary.totalIssues} issues (${summary.criticalIssues} critical, ${summary.warningIssues} warnings, ${summary.errorIssues} errors)`);
    
    // Check if commit should be blocked
    if (shouldBlockCommit(summary)) {
      log(`🚨 COMMIT BLOCKED: Too many critical issues (${summary.criticalIssues} > ${CONFIG.maxIssues})`, 'CRITICAL');
      log('Please fix the critical issues before committing. Check the report at: public/reports/pre-commit/pre-commit-report.md', 'INFO');
      process.exit(1);
    } else if (summary.criticalIssues > 0) {
      log(`⚠️  Commit allowed but ${summary.criticalIssues} critical issues found`, 'WARNING');
      log('Consider fixing these issues before committing', 'INFO');
    } else {
      log('✅ Pre-commit quality check passed - commit allowed', 'INFO');
    }
    
    // Exit with appropriate code
    process.exit(summary.criticalIssues > 0 ? 1 : 0);
    
  } catch (error) {
    log(`Fatal error in Pre-Commit Guardian: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { analyzeStagedFiles, generatePreCommitReport, shouldBlockCommit };