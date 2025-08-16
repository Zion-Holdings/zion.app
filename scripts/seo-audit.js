#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'seo');

function ensureDir(dir) { 
  try {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory ensured: ${dir}`);
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error.message);
    throw error;
  }
}

function walk(dir) {
  try {
    const out = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const e of entries) {
      if (e.name.startsWith('_') || e.name === 'api') continue;
      const full = path.join(dir, e.name);
      
      if (e.isDirectory()) {
        try {
          out.push(...walk(full));
        } catch (error) {
          console.warn(`Warning: Could not process directory ${full}:`, error.message);
        }
      } else if (e.isFile() && e.name.match(/\.(tsx|jsx)$/)) {
        out.push(full);
      }
    }
    return out;
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error.message);
    return [];
  }
}

function analyzeFile(file) {
  try {
    const src = fs.readFileSync(file, 'utf8');
    const rel = file.split('pages')[1] || file;
    const hasHead = /<Head[\s>]/.test(src);
    const titleMatch = src.match(/<title>([\s\S]*?)<\/title>/);
    const descMatch = src.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/);
    const title = titleMatch ? titleMatch[1].trim() : null;
    const description = descMatch ? descMatch[1].trim() : null;
    
    const issues = [];
    if (!hasHead) issues.push('Missing <Head>');
    if (!title) issues.push('Missing <title>');
    if (!description) issues.push('Missing meta description');
    if (title && (title.length < 10 || title.length > 70)) issues.push(`Title length suboptimal (${title.length})`);
    if (description && (description.length < 50 || description.length > 170)) issues.push(`Description length suboptimal (${description.length})`);
    
    return { file: rel, title, description, issues };
  } catch (error) {
    console.error(`Error analyzing file ${file}:`, error.message);
    return { file: file.split('pages')[1] || file, title: null, description: null, issues: ['Error reading file'] };
  }
}

function renderHTML(rows) {
  try {
    const tr = rows.map(r => `
    <tr>
      <td>${r.file}</td>
      <td>${(r.title||'').replace(/</g,'&lt;')}</td>
      <td>${(r.description||'').replace(/</g,'&lt;')}</td>
      <td>${r.issues.length ? r.issues.join('<br/>') : 'OK'}</td>
    </tr>`).join('\n');
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SEO Audit Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>SEO Audit Report</h1>
  <p>Autonomously generated. Checks for presence and length of title and description tags.</p>
  <table>
    <thead>
      <tr><th>Page</th><th>Title</th><th>Description</th><th>Issues</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
  } catch (error) {
    console.error('Error rendering HTML:', error.message);
    throw error;
  }
}

function main() {
  try {
    console.log('Starting SEO audit...');
    console.log(`Pages directory: ${PAGES_DIR}`);
    console.log(`Output directory: ${OUT_DIR}`);
    
    // Check if pages directory exists
    if (!fs.existsSync(PAGES_DIR)) {
      throw new Error(`Pages directory does not exist: ${PAGES_DIR}`);
    }
    
    const files = walk(PAGES_DIR);
    console.log(`Found ${files.length} page files to analyze`);
    
    if (files.length === 0) {
      console.warn('Warning: No page files found to analyze');
    }
    
    const rows = files.map(analyzeFile);
    console.log(`Analyzed ${rows.length} files`);
    
    // Ensure output directory exists
    ensureDir(OUT_DIR);
    
    // Write HTML report
    const htmlPath = path.join(OUT_DIR, 'index.html');
    fs.writeFileSync(htmlPath, renderHTML(rows));
    console.log(`HTML report written to: ${htmlPath}`);
    
    // Write JSON report
    const jsonPath = path.join(OUT_DIR, 'latest.json');
    fs.writeFileSync(jsonPath, JSON.stringify(rows, null, 2));
    console.log(`JSON report written to: ${jsonPath}`);
    
    // Summary
    const totalIssues = rows.reduce((sum, row) => sum + row.issues.length, 0);
    const filesWithIssues = rows.filter(row => row.issues.length > 0).length;
    
    console.log(`SEO Audit completed successfully!`);
    console.log(`- Total files analyzed: ${rows.length}`);
    console.log(`- Files with issues: ${filesWithIssues}`);
    console.log(`- Total issues found: ${totalIssues}`);
    
    return true;
  } catch (error) {
    console.error('SEO Audit failed:', error.message);
    console.error('Stack trace:', error.stack);
    return false;
  }
}

// Run the main function and exit with appropriate code
const success = main();
process.exit(success ? 0 : 1);