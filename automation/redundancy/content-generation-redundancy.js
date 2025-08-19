#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-CONTENT-GENERATION] ${message}`;
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

function ensureRepoRoot() {
  const gitDir = path.join(process.cwd(), ".git");
  if (!fs.existsSync(gitDir)) {
    throw new Error(`No .git directory found in ${process.cwd()}`);
  }
}

function scanContentDirectories() {
  log("Scanning content directories...");
  
  try {
    const contentDirs = [
      "pages",
      "public",
      "content",
      "docs",
      "blog",
      "articles"
    ];
    
    const contentResults = [];
    
    for (const dir of contentDirs) {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        const stats = fs.statSync(dirPath);
        if (stats.isDirectory()) {
          const items = fs.readdirSync(dirPath);
          const contentFiles = items.filter(item => {
            const itemPath = path.join(dirPath, item);
            const itemStats = fs.statSync(itemPath);
            if (itemStats.isFile()) {
              const ext = path.extname(item).toLowerCase();
              return ['.md', '.js', '.jsx', '.ts', '.tsx', '.html', '.txt'].includes(ext);
            }
            return false;
          });
          
          contentResults.push({
            directory: dir,
            exists: true,
            totalItems: items.length,
            contentFiles: contentFiles.length,
            healthy: contentFiles.length > 0
          });
        }
      } else {
        contentResults.push({
          directory: dir,
          exists: false,
          totalItems: 0,
          contentFiles: 0,
          healthy: false
        });
      }
    }
    
    log(`Content scan completed: ${contentResults.filter(r => r.healthy).length}/${contentResults.length} directories have content`);
    return contentResults;
  } catch (err) {
    log(`Content scan error: ${String(err)}`);
    return [];
  }
}

function generateSitemap() {
  log("Generating sitemap...");
  
  try {
    const sitemapResult = run("npm", ["run", "sitemap"]);
    if (sitemapResult.status === 0) {
      log("Sitemap generated successfully");
      return { success: true, output: sitemapResult.stdout };
    } else {
      log(`Sitemap generation failed: ${sitemapResult.stderr}`);
      return { success: false, error: sitemapResult.stderr };
    }
  } catch (err) {
    log(`Sitemap generation error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function generateSearchIndex() {
  log("Generating search index...");
  
  try {
    const searchIndexResult = run("npm", ["run", "search:index"]);
    if (searchIndexResult.status === 0) {
      log("Search index generated successfully");
      return { success: true, output: searchIndexResult.stdout };
    } else {
      log(`Search index generation failed: ${searchIndexResult.stderr}`);
      return { success: false, error: searchIndexResult.stderr };
    }
  } catch (err) {
    log(`Search index generation error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function runContentQualityFix() {
  log("Running content quality fix...");
  
  try {
    const contentFixResult = run("npm", ["run", "content:fix"]);
    if (contentFixResult.status === 0) {
      log("Content quality fix completed successfully");
      return { success: true, output: contentFixResult.stdout };
    } else {
      log(`Content quality fix failed: ${contentFixResult.stderr}`);
      return { success: false, error: contentFixResult.stderr };
    }
  } catch (err) {
    log(`Content quality fix error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function generateReadme() {
  log("Generating README...");
  
  try {
    const readmeResult = run("npm", ["run", "readme:generate"]);
    if (readmeResult.status === 0) {
      log("README generated successfully");
      return { success: true, output: readmeResult.stdout };
    } else {
      log(`README generation failed: ${readmeResult.stderr}`);
      return { success: false, error: readmeResult.stderr };
    }
  } catch (err) {
    log(`README generation error: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function validateContentStructure() {
  log("Validating content structure...");
  
  try {
    const validationResults = [];
    
    // Check for essential content files
    const essentialFiles = [
      "README.md",
      "package.json",
      "next.config.js",
      "tsconfig.json"
    ];
    
    for (const file of essentialFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        validationResults.push({
          file: file,
          exists: true,
          size: stats.size,
          healthy: stats.size > 0
        });
      } else {
        validationResults.push({
          file: file,
          exists: false,
          size: 0,
          healthy: false
        });
      }
    }
    
    // Check for content directories
    const contentDirs = ["pages", "public"];
    for (const dir of contentDirs) {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        const stats = fs.statSync(dirPath);
        if (stats.isDirectory()) {
          const items = fs.readdirSync(dirPath);
          validationResults.push({
            file: dir,
            exists: true,
            size: items.length,
            healthy: items.length > 0
          });
        } else {
          validationResults.push({
            file: dir,
            exists: false,
            size: 0,
            healthy: false
          });
        }
      } else {
        validationResults.push({
          file: dir,
          exists: false,
          size: 0,
          healthy: false
        });
      }
    }
    
    const healthy = validationResults.filter(r => r.healthy).length;
    const total = validationResults.length;
    
    log(`Content structure validation: ${healthy}/${total} items healthy`);
    return {
      total: total,
      healthy: healthy,
      results: validationResults
    };
  } catch (err) {
    log(`Content structure validation error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function generateContentReport(contentScan, sitemapResult, searchIndexResult, contentFixResult, readmeResult, structureValidation) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "content-generation",
    operations: {
      contentScan: contentScan,
      sitemapGeneration: sitemapResult,
      searchIndexGeneration: searchIndexResult,
      contentQualityFix: contentFixResult,
      readmeGeneration: readmeResult,
      structureValidation: structureValidation
    },
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (contentScan.filter(r => !r.healthy).length > 0) report.summary.issues.push("content-directories-empty");
  if (!sitemapResult.success) report.summary.issues.push("sitemap-generation-failed");
  if (!searchIndexResult.success) report.summary.issues.push("search-index-generation-failed");
  if (!contentFixResult.success) report.summary.issues.push("content-quality-fix-failed");
  if (!readmeResult.success) report.summary.issues.push("readme-generation-failed");
  if (structureValidation.healthy < structureValidation.total) report.summary.issues.push("structure-validation-failed");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "content-generation-redundancy-report.md");
  const reportContent = `# Content Generation Redundancy Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Issues Found**: ${report.summary.issues.length}

## Content Directory Scan
${contentScan.map(r => `- **${r.directory}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.totalItems} items, ${r.contentFiles} content files, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Operations Status
- **Sitemap Generation**: ${report.operations.sitemapGeneration.success ? '✅ Success' : '❌ Failed'}${report.operations.sitemapGeneration.error ? ` (${report.operations.sitemapGeneration.error})` : ''}
- **Search Index Generation**: ${report.operations.searchIndexGeneration.success ? '✅ Success' : '❌ Failed'}${report.operations.searchIndexGeneration.error ? ` (${report.operations.searchIndexGeneration.error})` : ''}
- **Content Quality Fix**: ${report.operations.contentQualityFix.success ? '✅ Success' : '❌ Failed'}${report.operations.contentQualityFix.error ? ` (${report.operations.contentQualityFix.error})` : ''}
- **README Generation**: ${report.operations.readmeGeneration.success ? '✅ Success' : '❌ Failed'}${report.operations.readmeGeneration.error ? ` (${report.operations.readmeGeneration.error})` : ''}
- **Structure Validation**: ${report.operations.structureValidation.healthy}/${report.operations.structureValidation.total} items healthy

## Structure Validation Details
${structureValidation.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.size} items, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for content generation automation processes.

## Next Steps
- Review any failed operations
- Check content directory structure
- Validate generated files
- Ensure all content is properly formatted
- Monitor content quality metrics
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Content report generated: ${reportPath}`);
  return reportPath;
}

async function commitContentReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update content-generation redundancy report"]);
      
      log("Content report committed successfully");
      return true;
    } else {
      log("No changes to commit");
      return true;
    }
  } catch (err) {
    log(`Commit error: ${String(err)}`);
    return false;
  }
}

async function main() {
  log("Starting Content Generation Redundancy Process");
  
  try {
    ensureRepoRoot();
    
    // Scan content directories
    log("Scanning content directories...");
    const contentScan = scanContentDirectories();
    
    // Generate sitemap
    log("Generating sitemap...");
    const sitemapResult = generateSitemap();
    
    // Generate search index
    log("Generating search index...");
    const searchIndexResult = generateSearchIndex();
    
    // Run content quality fix
    log("Running content quality fix...");
    const contentFixResult = runContentQualityFix();
    
    // Generate README
    log("Generating README...");
    const readmeResult = generateReadme();
    
    // Validate content structure
    log("Validating content structure...");
    const structureValidation = validateContentStructure();
    
    // Generate content report
    log("Generating content report...");
    const reportPath = generateContentReport(contentScan, sitemapResult, searchIndexResult, contentFixResult, readmeResult, structureValidation);
    
    // Commit report if changed
    log("Committing content report if changed...");
    await commitContentReport(reportPath);
    
    log("Content Generation Redundancy Process completed");
    log(`Results: Content=${contentScan.filter(r => r.healthy).length}/${contentScan.length}, Sitemap=${sitemapResult.success ? 'OK' : 'FAILED'}, Structure=${structureValidation.healthy}/${structureValidation.total}`);
    
    // Exit with appropriate code
    if (contentScan.filter(r => r.healthy).length > 0 && structureValidation.healthy === structureValidation.total) {
      process.exit(0);
    } else {
      process.exit(1);
    }
    
  } catch (error) {
    log(`Fatal error: ${String(error)}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    log(`Unhandled error: ${String(error)}`);
    process.exit(1);
  });
}

module.exports = { 
  main, 
  scanContentDirectories, 
  generateSitemap, 
  generateSearchIndex, 
  runContentQualityFix, 
  generateReadme, 
  validateContentStructure,
  generateContentReport 
};