#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function scanPages() {
  const pages = [];
  
  try {
    const scanDirectory = (dir, basePath = '') => {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);
        
        if (entry.isDirectory()) {
          // Skip certain directories
          if (entry.name === 'api' || entry.name === '_app' || entry.name === '_document') {
            continue;
          }
          scanDirectory(fullPath, relativePath);
        } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
          // Convert file path to URL path
          const urlPath = relativePath
            .replace(/\.(tsx|jsx|js)$/, '')
            .replace(/\/index$/, '')
            .replace(/^index$/, '');
          
          if (urlPath) {
            pages.push({
              path: `/${urlPath}`,
              file: relativePath,
              modified: fs.statSync(fullPath).mtime
            });
          }
        }
      }
    };
    
    scanDirectory(PAGES_DIR);
    
    // Add static pages
    pages.push({ path: '/', file: 'pages/index.tsx', modified: new Date() });
    
  } catch (error) {
    log(`Error scanning pages: ${error.message}`);
  }
  
  return pages;
}

function generateSitemap(pages) {
  try {
    const baseUrl = process.env.URL || process.env.SITE_URL || 'https://example.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.modified.toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
    
    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    log('✅ Sitemap generated');
    return true;
  } catch (error) {
    log(`❌ Error generating sitemap: ${error.message}`);
    return false;
  }
}

function generateRobotsTxt() {
  try {
    const baseUrl = process.env.URL || process.env.SITE_URL || 'https://example.com';
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay: 1
`;
    
    const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    log('✅ Robots.txt generated');
    return true;
  } catch (error) {
    log(`❌ Error generating robots.txt: ${error.message}`);
    return false;
  }
}

function generateSitemapIndex() {
  try {
    const baseUrl = process.env.URL || process.env.SITE_URL || 'https://example.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const indexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
    
    const indexPath = path.join(PUBLIC_DIR, 'sitemap-index.xml');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    log('✅ Sitemap index generated');
    return true;
  } catch (error) {
    log(`❌ Error generating sitemap index: ${error.message}`);
    return false;
  }
}

function commitChanges() {
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    
    if (gitStatus) {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🤖 Update sitemap and robots.txt via Netlify function [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      log('✅ Changes committed and pushed');
      return { success: true, changes: gitStatus.split('\n').length };
    } else {
      log('No changes to commit');
      return { success: true, changes: 0 };
    }
  } catch (error) {
    log(`❌ Git commit failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Netlify function handler
exports.handler = async function(event, context) {
  try {
    log('🤖 Starting sitemap_runner function...');
    
    ensureDir(LOGS_DIR);
    
    // Scan pages
    const pages = scanPages();
    log(`Found ${pages.length} pages`);
    
    // Generate sitemap files
    const sitemapGenerated = generateSitemap(pages);
    const robotsGenerated = generateRobotsTxt();
    const indexGenerated = generateSitemapIndex();
    
    // Commit changes
    const commitResult = commitChanges();
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      function: 'sitemap_runner',
      status: 'completed',
      summary: {
        pagesScanned: pages.length,
        sitemapGenerated: sitemapGenerated,
        robotsGenerated: robotsGenerated,
        indexGenerated: indexGenerated,
        gitChanges: commitResult.changes || 0
      },
      pages: pages.map(p => ({
        path: p.path,
        file: p.file,
        modified: p.modified
      })),
      gitResult: commitResult
    };
    
    // Write report
    const reportPath = path.join(LOGS_DIR, 'sitemap-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log('✅ sitemap_runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify(report)
    };
    
  } catch (error) {
    log(`❌ sitemap_runner function failed: ${error.message}`);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      function: 'sitemap_runner',
      status: 'failed',
      error: error.message,
      stack: error.stack
    };
    
    // Write error report
    try {
      const errorPath = path.join(LOGS_DIR, 'sitemap-runner-error.json');
      fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    } catch (writeError) {
      log(`Failed to write error report: ${writeError.message}`);
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify(errorReport)
    };
  }
};