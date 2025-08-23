#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-SEO-MONITOR] ${message}`;
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

function checkSEOMetadata() {
  try {
    log("Checking SEO metadata...");
    
    const seoIssues = [];
    const pagesDir = path.join(process.cwd(), "pages");
    
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir, { recursive: true });
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        
        // Check for title
        if (!content.includes('# ')) {
          seoIssues.push({ file, issue: 'Missing H1 title', severity: 'high' });
        }
        
        // Check for meta description
        if (!content.includes('description:') && !content.includes('meta:')) {
          seoIssues.push({ file, issue: 'Missing meta description', severity: 'medium' });
        }
        
        // Check for keywords
        if (!content.includes('keywords:') && !content.includes('tags:')) {
          seoIssues.push({ file, issue: 'Missing keywords/tags', severity: 'low' });
        }
        
        // Check for canonical URL
        if (!content.includes('canonical:') && !content.includes('url:')) {
          seoIssues.push({ file, issue: 'Missing canonical URL', severity: 'medium' });
        }
      }
    }
    
    return {
      seoMetadata: {
        issues: seoIssues,
        count: seoIssues.length,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`SEO metadata check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkContentStructure() {
  try {
    log("Checking content structure...");
    
    const structureIssues = [];
    const pagesDir = path.join(process.cwd(), "pages");
    
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir, { recursive: true });
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        
        // Check for proper heading hierarchy
        const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
        const headingLevels = headings.map(h => h.match(/^(#{1,6})/)[1].length);
        
        if (headingLevels.length > 0 && headingLevels[0] !== 1) {
          structureIssues.push({ file, issue: 'Missing H1 heading', severity: 'high' });
        }
        
        // Check for content length
        const textContent = content.replace(/^#+\s+.+$/gm, '').replace(/```[\s\S]*?```/g, '').trim();
        if (textContent.length < 300) {
          structureIssues.push({ file, issue: 'Content too short (<300 chars)', severity: 'medium' });
        }
        
        // Check for internal links
        const internalLinks = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
        const hasInternalLinks = internalLinks.some(link => link.includes('ziontechgroup.com') || link.includes('./'));
        
        if (internalLinks.length > 0 && !hasInternalLinks) {
          structureIssues.push({ file, issue: 'No internal links found', severity: 'low' });
        }
      }
    }
    
    return {
      contentStructure: {
        issues: structureIssues,
        count: structureIssues.length,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Content structure check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkImageOptimization() {
  try {
    log("Checking image optimization...");
    
    const imageIssues = [];
    const publicDir = path.join(process.cwd(), "public");
    
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir, { recursive: true });
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file));
      
      for (const file of imageFiles) {
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 500) {
          imageIssues.push({ 
            file, 
            issue: `Image too large (${sizeKB}KB)`, 
            severity: 'medium',
            size: sizeKB
          });
        }
        
        // Check for alt text in markdown files that reference this image
        const pagesDir = path.join(process.cwd(), "pages");
        if (fs.existsSync(pagesDir)) {
          const mdFiles = fs.readdirSync(pagesDir, { recursive: true }).filter(f => f.endsWith('.md'));
          let hasAltText = false;
          
          for (const mdFile of mdFiles) {
            const content = fs.readFileSync(path.join(pagesDir, mdFile), 'utf8');
            const imageRegex = new RegExp(`!\\[([^\\]]*)\\]\\([^)]*${file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^)]*\\)`);
            if (imageRegex.test(content)) {
              const match = content.match(imageRegex);
              if (match[1] && match[1].trim()) {
                hasAltText = true;
                break;
              }
            }
          }
          
          if (!hasAltText) {
            imageIssues.push({ 
              file, 
              issue: 'Missing alt text', 
              severity: 'high' 
            });
          }
        }
      }
    }
    
    return {
      imageOptimization: {
        issues: imageIssues,
        count: imageIssues.length,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Image optimization check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateSEOReport(seoMetadata, contentStructure, imageOptimization) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    seoMonitor: {
      seoMetadata,
      contentStructure,
      imageOptimization,
      summary: {
        overallSEO: "good",
        issues: []
      }
    }
  };
  
  // Analyze overall SEO
  if (seoMetadata.seoMetadata?.count > 0) {
    report.seoMonitor.summary.issues.push(`${seoMetadata.seoMetadata.count} SEO metadata issues`);
  }
  
  if (contentStructure.contentStructure?.count > 0) {
    report.seoMonitor.summary.issues.push(`${contentStructure.contentStructure.count} content structure issues`);
  }
  
  if (imageOptimization.imageOptimization?.count > 0) {
    report.seoMonitor.summary.issues.push(`${imageOptimization.imageOptimization.count} image optimization issues`);
  }
  
  if (report.seoMonitor.summary.issues.length > 0) {
    report.seoMonitor.summary.overallSEO = "needs_attention";
  }

  const reportPath = path.join(process.cwd(), "seo-monitor-redundancy-report.md");
  const reportContent = `# SEO Monitor Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall SEO: ${report.seoMonitor.summary.overallSEO.toUpperCase()}

## Issues Detected
${report.seoMonitor.summary.issues.length > 0 ? 
  report.seoMonitor.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No SEO issues detected"}

## SEO Metadata
- Issues: ${seoMetadata.seoMetadata?.count || 0} ❌
${seoMetadata.seoMetadata?.issues?.length > 0 ? 
  seoMetadata.seoMetadata.issues.map(issue => `  - ${issue.file}: ${issue.issue} (${issue.severity})`).join("\n") : 
  "- All metadata is properly configured"}

## Content Structure
- Issues: ${contentStructure.contentStructure?.count || 0} ❌
${contentStructure.contentStructure?.issues?.length > 0 ? 
  contentStructure.contentStructure.issues.map(issue => `  - ${issue.file}: ${issue.issue} (${issue.severity})`).join("\n") : 
  "- Content structure is well-organized"}

## Image Optimization
- Issues: ${imageOptimization.imageOptimization?.count || 0} ❌
${imageOptimization.imageOptimization?.issues?.length > 0 ? 
  imageOptimization.imageOptimization.issues.map(issue => `  - ${issue.file}: ${issue.issue} (${issue.severity})`).join("\n") : 
  "- All images are properly optimized"}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`SEO report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    run("git", ["config", "user.name", "pm2-redundancy[bot]"]);
    run("git", ["config", "user.email", "redundancy@ziontechgroup.com"]);

    const status = run("git", ["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    run("git", ["add", "-A"]);
    run("git", ["commit", "-m", `chore(redundancy): SEO monitoring via PM2 redundancy`]);

    const pushResult = run("git", ["push", "origin", "main"]);
    if (pushResult.status === 0) {
      log("Changes pushed successfully via redundancy.");
    } else {
      log(`Push failed: ${pushResult.stderr}`);
    }
  } catch (err) {
    log(`Commit/push error: ${String(err)}`);
  }
}

async function main() {
  try {
    log("Starting SEO monitor redundancy process...");
    
    const seoMetadata = checkSEOMetadata();
    const contentStructure = checkContentStructure();
    const imageOptimization = checkImageOptimization();
    
    const report = generateSEOReport(seoMetadata, contentStructure, imageOptimization);
    
    await commitAndPush();
    
    log("SEO monitor redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`SEO monitor redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkSEOMetadata, checkContentStructure, checkImageOptimization, generateSEOReport };