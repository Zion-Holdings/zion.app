const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const htmlFiles = [];

function walk(dir) {
  try {
    const items = fs.readdirSync(dir, {withFileTypes: true});
    for (const item of items) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        walk(full);
      } else if (item.name.endsWith('.html')) {
        htmlFiles.push(full);
      }
    }
  } catch (e) {
    console.error('Error reading dir', dir, e.message);
  }
}
walk(outDir);
console.log(`Found ${htmlFiles.length} HTML files`);

const hrefRegex = /href=["']([^"']+)["']/gi;
let broken = 0;
const brokenLinks = [];

for (const file of htmlFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
      const link = match[1];
      if (!link || link.startsWith('javascript:') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#')) {
        continue;
      }
      try {
        const url = new URL(link);
        if (!url.protocol || !url.host) {
          // relative link
          let rel = url.pathname;
          // Remove query and hash if any (already removed by regex? but safe)
          const queryIndex = rel.indexOf('?');
          if (queryIndex !== -1) {
            rel = rel.substring(0, queryIndex);
          }
          const hashIndex = rel.indexOf('#');
          if (hashIndex !== -1) {
            rel = rel.substring(0, hashIndex);
          }
          if (rel.startsWith('/')) {
            rel = rel.slice(1);
          }
          if (!rel) {
            rel = 'index.html';
          }
          const candidate = path.join(outDir, rel);
          if (!fs.existsSync(candidate)) {
            // If it's a directory, try index.html inside
            if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
              const indexPath = path.join(candidate, 'index.html');
              if (!fs.existsSync(indexPath)) {
                brokenLinks.push({file, link, tried: [candidate, indexPath]});
                broken++;
              }
            } else if (!fs.existsSync(candidate)) {
              brokenLinks.push({file, link, tried: candidate});
              broken++;
            }
          }
        }
        // else: absolute link, we skip for now
      } catch (e) {
        // Invalid URL, skip
        continue;
      }
    }
  } catch (e) {
    console.error('Error reading file', file, e.message);
  }
}

console.log(`Total broken internal links: ${broken}`);
if (broken > 0) {
  console.log('First 10 broken links:');
  for (let i = 0; i < Math.min(brokenLinks.length, 10); i++) {
    const {file, link, tried} = brokenLinks[i];
    console.log(`  ${file}: ${link} -> tried ${tried.join(' or ')}`);
  }
}

// Write report to file
const reportPath = path.join(__dirname, 'broken-links-report.json');
fs.writeFileSync(reportPath, JSON.stringify(brokenLinks, null, 2));
console.log(`Report written to ${reportPath}`);