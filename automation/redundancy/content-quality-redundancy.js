#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY] ${message}`;
  console.log(line);
}

function run(command, args, options = {}) {
  const execCwd = options.cwd || process.cwd();
  const result = spawnSync(command, args, {
    cwd: execCwd,
    env: process.env,
    shell: false,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 20
  });
  const stdout = (result.stdout || "").trim();
  const stderr = (result.stderr || "").trim();
  const status = typeof result.status === "number" ? result.status : 0;
  if (options.verbose) {
    log(`$ ${command} ${args.join(" ")}`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  }
  return { status, stdout, stderr };
}

function runGit(args, options = {}) {
  return run("git", args, options);
}

function scanContentFiles() {
  log("Scanning content files...");
  
  try {
    const contentDirs = ["pages", "public", "automation"];
    const contentFiles = [];
    
    contentDirs.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        scanDirectory(dirPath, dir, contentFiles);
      }
    });
    
    log(`Found ${contentFiles.length} content files`);
    return { success: true, files: contentFiles };
  } catch (error) {
    log(`Error scanning content files: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function scanDirectory(dirPath, relativePath, contentFiles) {
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const relativeItemPath = path.join(relativePath, item);
      
      if (fs.statSync(itemPath).isDirectory()) {
        scanDirectory(itemPath, relativeItemPath, contentFiles);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.md', '.js', '.jsx', '.ts', '.tsx', '.json', '.txt', '.yml', '.yaml'].includes(ext)) {
          contentFiles.push({
            path: relativeItemPath,
            fullPath: itemPath,
            extension: ext,
            size: fs.statSync(itemPath).size,
            modified: fs.statSync(itemPath).mtime.toISOString()
          });
        }
      }
    });
  } catch (error) {
    log(`Error scanning directory ${dirPath}: ${String(error)}`);
  }
}

function analyzeContentQuality(files) {
  log("Analyzing content quality...");
  
  try {
    const analysis = {
      totalFiles: files.length,
      byExtension: {},
      qualityIssues: [],
      recommendations: []
    };
    
    // Group by extension
    files.forEach(file => {
      if (!analysis.byExtension[file.extension]) {
        analysis.byExtension[file.extension] = [];
      }
      analysis.byExtension[file.extension].push(file);
    });
    
    // Analyze each file for quality issues
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file.fullPath, 'utf8');
        const fileAnalysis = analyzeFileContent(file, content);
        
        if (fileAnalysis.issues.length > 0) {
          analysis.qualityIssues.push(fileAnalysis);
        }
        
        if (fileAnalysis.recommendations.length > 0) {
          analysis.recommendations.push(...fileAnalysis.recommendations);
        }
      } catch (error) {
        log(`Error analyzing file ${file.path}: ${String(error)}`);
      }
    });
    
    // Generate summary
    analysis.summary = `Analyzed ${analysis.totalFiles} files with ${analysis.qualityIssues.length} quality issues`;
    
    return { success: true, analysis };
  } catch (error) {
    log(`Error analyzing content quality: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function analyzeFileContent(file, content) {
  const analysis = {
    file: file.path,
    issues: [],
    recommendations: []
  };
  
  // Check for common quality issues
  if (content.length === 0) {
    analysis.issues.push("Empty file");
    analysis.recommendations.push("Consider removing empty files or adding content");
  }
  
  if (content.length > 1000000) { // 1MB
    analysis.issues.push("File is very large");
    analysis.recommendations.push("Consider splitting large files into smaller modules");
  }
  
  // Check for TODO comments
  const todoMatches = content.match(/TODO|FIXME|HACK|XXX/g);
  if (todoMatches) {
    analysis.issues.push(`${todoMatches.length} TODO/FIXME comments found`);
    analysis.recommendations.push("Review and address TODO comments");
  }
  
  // Check for long lines
  const lines = content.split('\n');
  const longLines = lines.filter(line => line.length > 120);
  if (longLines.length > 0) {
    analysis.issues.push(`${longLines.length} lines exceed 120 characters`);
    analysis.recommendations.push("Consider breaking long lines for better readability");
  }
  
  // Check for inconsistent indentation
  const indentationIssues = [];
  lines.forEach((line, index) => {
    if (line.length > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      // Check if this should be indented (following a line that ends with { or :)
      if (index > 0) {
        const prevLine = lines[index - 1];
        if (prevLine.trim().endsWith('{') || prevLine.trim().endsWith(':')) {
          indentationIssues.push(index + 1);
        }
      }
    }
  });
  
  if (indentationIssues.length > 0) {
    analysis.issues.push(`${indentationIssues.length} potential indentation issues`);
    analysis.recommendations.push("Review indentation consistency");
  }
  
  return analysis;
}

function runContentQualityScripts() {
  log("Running content quality scripts...");
  
  try {
    const scripts = [
      "automation/content-quality-fixer.cjs",
      "automation/content-quality-analyzer.cjs"
    ];
    
    const results = [];
    
    scripts.forEach(script => {
      const scriptPath = path.join(process.cwd(), script);
      if (fs.existsSync(scriptPath)) {
        log(`Running ${script}...`);
        const result = run("node", [script]);
        results.push({
          script,
          success: result.status === 0,
          output: result.stdout,
          error: result.stderr
        });
        
        if (result.status === 0) {
          log(`✓ ${script} completed successfully`);
        } else {
          log(`✗ ${script} failed`);
        }
      } else {
        log(`Script not found: ${script}`);
        results.push({
          script,
          success: false,
          error: "Script not found"
        });
      }
    });
    
    return { success: true, results };
  } catch (error) {
    log(`Error running content quality scripts: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateContentReport() {
  const report = {
    generatedAt: nowIso(),
    contentScan: null,
    qualityAnalysis: null,
    scriptResults: null,
    summary: "Content quality redundancy report"
  };

  try {
    // Scan content files
    const contentScan = scanContentFiles();
    report.contentScan = contentScan;
    
    if (contentScan.success && contentScan.files) {
      // Analyze content quality
      const qualityAnalysis = analyzeContentQuality(contentScan.files);
      report.qualityAnalysis = qualityAnalysis;
      
      // Run quality scripts
      const scriptResults = runContentQualityScripts();
      report.scriptResults = scriptResults;
      
      // Generate summary
      const totalIssues = qualityAnalysis.analysis.qualityIssues.length;
      const totalFiles = qualityAnalysis.analysis.totalFiles;
      
      if (totalIssues === 0) {
        report.summary = `Content quality check completed - ${totalFiles} files analyzed, no issues found`;
      } else {
        report.summary = `Content quality check completed - ${totalFiles} files analyzed, ${totalIssues} issues found`;
      }
    } else {
      report.summary = "Content quality check failed - unable to scan files";
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "content-quality-redundancy-report.md");
    const reportContent = `# Content Quality Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## Content Scan
- Status: ${report.contentScan.success ? "✅ Success" : "❌ Failed"}
- Files Found: ${report.contentScan.files?.length || 0}

## Quality Analysis
${report.qualityAnalysis ? `
- Status: ${report.qualityAnalysis.success ? "✅ Success" : "❌ Failed"}
- Total Files: ${report.qualityAnalysis.analysis.totalFiles}
- Quality Issues: ${report.qualityAnalysis.analysis.qualityIssues.length}
- Recommendations: ${report.qualityAnalysis.analysis.recommendations.length}

### File Extensions
${Object.entries(report.qualityAnalysis.analysis.byExtension).map(([ext, files]) => 
  `- ${ext}: ${files.length} files`
).join('\n')}

### Quality Issues
${report.qualityAnalysis.analysis.qualityIssues.map(issue => 
  `- ${issue.file}: ${issue.issues.join(', ')}`
).join('\n')}
` : '- Analysis not available'}

## Script Results
${report.scriptResults ? `
- Status: ${report.scriptResults.success ? "✅ Success" : "❌ Failed"}
- Scripts Run: ${report.scriptResults.results.length}
- Successful: ${report.scriptResults.results.filter(r => r.success).length}
- Failed: ${report.scriptResults.results.filter(r => !r.success).length}
` : '- Script results not available'}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Content quality report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating content quality report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting content quality redundancy process");
  
  try {
    const report = generateContentReport();
    log(`Content quality redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Content quality redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  scanContentFiles, 
  analyzeContentQuality, 
  analyzeFileContent, 
  runContentQualityScripts, 
  generateContentReport 
};