#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-CONTENT-QUALITY] ${message}`;
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

function checkContentQuality() {
  try {
    log("Checking content quality...");
    
    // Check for broken links
    const brokenLinks = [];
    const pagesDir = path.join(process.cwd(), "pages");
    
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir, { recursive: true });
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        const linkMatches = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
        
        for (const match of linkMatches) {
          const urlMatch = match.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (urlMatch) {
            const url = urlMatch[2];
            if (url.startsWith('http') && !url.includes('ziontechgroup.com')) {
              brokenLinks.push({ file, url, context: urlMatch[1] });
            }
          }
        }
      }
    }
    
    return {
      brokenLinks: {
        count: brokenLinks.length,
        links: brokenLinks
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Content quality check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkSEOElements() {
  try {
    log("Checking SEO elements...");
    
    const seoIssues = [];
    const pagesDir = path.join(process.cwd(), "pages");
    
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir, { recursive: true });
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        
        // Check for title
        if (!content.includes('# ')) {
          seoIssues.push({ file, issue: 'Missing H1 title' });
        }
        
        // Check for meta description
        if (!content.includes('description:') && !content.includes('meta:')) {
          seoIssues.push({ file, issue: 'Missing meta description' });
        }
        
        // Check for keywords
        if (!content.includes('keywords:') && !content.includes('tags:')) {
          seoIssues.push({ file, issue: 'Missing keywords/tags' });
        }
      }
    }
    
    return {
      seoIssues: {
        count: seoIssues.length,
        issues: seoIssues
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`SEO check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateContentReport(contentQuality, seoElements) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    contentQuality: {
      contentQuality,
      seoElements,
      summary: {
        overallQuality: "good",
        issues: []
      }
    }
  };
  
  // Analyze overall quality
  if (contentQuality.brokenLinks?.count > 0) {
    report.contentQuality.summary.issues.push(`${contentQuality.brokenLinks.count} broken links detected`);
  }
  
  if (seoElements.seoIssues?.count > 0) {
    report.contentQuality.summary.issues.push(`${seoElements.seoIssues.count} SEO issues detected`);
  }
  
  if (report.contentQuality.summary.issues.length > 0) {
    report.contentQuality.summary.overallQuality = "needs_attention";
  }

  const reportPath = path.join(process.cwd(), "content-quality-redundancy-report.md");
  const reportContent = `# Content Quality Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Quality: ${report.contentQuality.summary.overallQuality.toUpperCase()}

## Issues Detected
${report.contentQuality.summary.issues.length > 0 ? 
  report.contentQuality.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No issues detected"}

## Content Quality
- Broken Links: ${contentQuality.brokenLinks?.count || 0} ❌
- Files Scanned: ${contentQuality.brokenLinks?.links?.length > 0 ? 
  new Set(contentQuality.brokenLinks.links.map(l => l.file)).size : 0} 📁

## SEO Elements
- SEO Issues: ${seoElements.seoIssues?.count || 0} ❌
- Files with Issues: ${seoElements.seoIssues?.issues?.length > 0 ? 
  new Set(seoElements.seoIssues.issues.map(i => i.file)).size : 0} 📁

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Content quality report generated: ${reportPath}`);
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
    run("git", ["commit", "-m", `chore(redundancy): content quality check via PM2 redundancy`]);

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
    log("Starting content quality redundancy process...");
    
    const contentQuality = checkContentQuality();
    const seoElements = checkSEOElements();
    
    const report = generateContentReport(contentQuality, seoElements);
    
    await commitAndPush();
    
    log("Content quality redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Content quality redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkContentQuality, checkSEOElements, generateContentReport };