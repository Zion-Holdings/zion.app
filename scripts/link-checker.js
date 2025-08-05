const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all TypeScript/TSX files
const files = glob.sync('pages/**/*.tsx', { cwd: process.cwd() });

// Extract all existing pages
const existingPages = new Set();
files.forEach(file => {
  const pageName = file.replace('pages/', '').replace('.tsx', '');
  if (pageName === 'index') {
    existingPages.add('/');
  } else {
    existingPages.add(`/${pageName}`);
  }
});

// Add auth pages
existingPages.add('/auth/login');
existingPages.add('/auth/signup');
existingPages.add('/auth/forgot-password');
existingPages.add('/auth/reset-password');
existingPages.add('/auth/verify');
existingPages.add('/auth/callback');

// Add service pages
const serviceFiles = glob.sync('pages/services/**/*.tsx', { cwd: process.cwd() });
serviceFiles.forEach(file => {
  const serviceName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${serviceName}`);
});

// Add product pages
const productFiles = glob.sync('pages/products/**/*.tsx', { cwd: process.cwd() });
productFiles.forEach(file => {
  const productName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${productName}`);
});

// Add blog pages
const blogFiles = glob.sync('pages/blog/**/*.tsx', { cwd: process.cwd() });
blogFiles.forEach(file => {
  const blogName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${blogName}`);
});

// Add category pages
const categoryFiles = glob.sync('pages/category/**/*.tsx', { cwd: process.cwd() });
categoryFiles.forEach(file => {
  const categoryName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${categoryName}`);
});

// Add chat-content pages
const chatContentFiles = glob.sync('pages/chat-content/**/*.tsx', { cwd: process.cwd() });
chatContentFiles.forEach(file => {
  const chatContentName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${chatContentName}`);
});

// Add talent pages
const talentFiles = glob.sync('pages/talent/**/*.tsx', { cwd: process.cwd() });
talentFiles.forEach(file => {
  const talentName = file.replace('pages/', '').replace('.tsx', '');
  existingPages.add(`/${talentName}`);
});

// Add public assets that are valid
const publicAssets = [
  '/favicon.ico',
  '/favicon.svg',
  '/site.webmanifest',
  '/robots.txt',
  '/sitemap.xml'
];

publicAssets.forEach(asset => {
  existingPages.add(asset);
});

console.log('Existing pages:', Array.from(existingPages).sort());

// Function to extract links from a file
function extractLinks(content) {
  const linkRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

// Check for broken links
const brokenLinks = [];
const allLinks = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const links = extractLinks(content);
  
  links.forEach(link => {
    allLinks.push(link);
    
    // Skip external links, anchors, and special cases
    if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:')) {
      return;
    }
    
    // Check if the link exists
    if (!existingPages.has(link)) {
      brokenLinks.push({
        file,
        link,
        line: findLineNumber(content, link)
      });
    }
  });
});

function findLineNumber(content, link) {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`href="${link}"`) || lines[i].includes(`href='${link}'`)) {
      return i + 1;
    }
  }
  return 'unknown';
}

console.log('\n=== BROKEN LINKS FOUND ===');
brokenLinks.forEach(({ file, link, line }) => {
  console.log(`${file}:${line} - ${link}`);
});

console.log(`\nTotal broken links: ${brokenLinks.length}`);
console.log(`Total links checked: ${allLinks.length}`);

// Save results to file
const results = {
  existingPages: Array.from(existingPages).sort(),
  brokenLinks,
  totalBrokenLinks: brokenLinks.length,
  totalLinksChecked: allLinks.length
};

fs.writeFileSync('broken-links-report.json', JSON.stringify(results, null, 2));
console.log('\nDetailed report saved to broken-links-report.json'); 