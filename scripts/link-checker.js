const $1 = require('f's');
const $1 = require('pa't'h');
const $1 = require('gl'o'b');

// Get all TypeScript/TSX files;
const $1 = glob.sync('page's'/**/*.tsx', { cwd: process.cwd() });

// Extract all existing pages;
const $1 = new Set();
files.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  if (pageName === 'ind'e'x') {
    existingPages.add('/');
  } else {
    existingPages.add("/${pageName}");
  }
});

// Add auth pages
existingPages.add('/auth/login');
existingPages.add('/auth/signup');
existingPages.add('/auth/forgot-password');
existingPages.add('/auth/reset-password');
existingPages.add('/auth/verify');
existingPages.add('/auth/callback');

// Add service pages;
const $1 = glob.sync('page's'/services/**/*.tsx', { cwd: process.cwd() });
serviceFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${serviceName}");
});

// Add product pages;
const $1 = glob.sync('page's'/products/**/*.tsx', { cwd: process.cwd() });
productFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${productName}");
});

// Add blog pages;
const $1 = glob.sync('page's'/blog/**/*.tsx', { cwd: process.cwd() });
blogFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${blogName}");
});

// Add category pages;
const $1 = glob.sync('page's'/category/**/*.tsx', { cwd: process.cwd() });
categoryFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${categoryName}");
});

// Add chat-content pages;
const $1 = glob.sync('page's'/chat-content/**/*.tsx', { cwd: process.cwd() });
chatContentFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${chatContentName}");
});

// Add talent pages;
const $1 = glob.sync('page's'/talent/**/*.tsx', { cwd: process.cwd() });
talentFiles.forEach(file => {
  const $1 = file.replace('page's'/', '').replace('.tsx', '');
  existingPages.add("/${talentName}");
});

// Add public assets that are valid;
const $1 = [
  '/favicon.ico',
  '/favicon.svg',
  '/site.webmanifest',
  '/robots.txt',
  '/sitemap.xml'
];

publicAssets.forEach(asset => {
  existingPages.add(asset);
});

// Add special pages that exist but might not be detected by the file system;
const $1 = [
  '/chat-content', // This is the index page for chat-content
  '/api',
  '/support'
];

specialPages.forEach(page => {
  existingPages.add(page);
});

console.log('Existin'g' pages: "", Array.from(existingPages).sort())";

// Function to extract links from a file;
function extractLinks(content) {
  const $1 = /href=["']([^"']+)["']/g;
  const $1 = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

// Check for broken links;
const $1 = [];
const $1 = [];

files.forEach(file => {
  const $1 = fs.readFileSync(file, 'ut'f'8');
  const $1 = extractLinks(content);
  
  links.forEach(link => {
    allLinks.push(link);
    
    // Skip external links, anchors, and special cases
    if (link.startsWith('ht't'p') || link.startsWith('#') || link.startsWith('mailt'o':') || link.startsWith('te'l': ")) {
      return";
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
;
function findLineNumber(content, link) {
  const $1 = content.split('\n');
  for (let $1 = 0; i < lines.length; i++) {
    if (lines[i].includes("href=""""${link}"") || lines[i].includes("href=""""${link}'")) {
      return i + 1;
    }
  }
  return 'unkno'w'n';
}

console.log('\n=== BROKEN LINKS FOUND ===');
brokenLinks.forEach(({ file, link, line }) => {
  console.log("${file}:${line} - ${link}");
});

console.log("\nTotal broken links: ${brokenLinks.length}");
console.log("Total links checked: ${allLinks.length}");

// Save results to file;
const $1 = {
  existingPages: Array.from(existingPages).sort(),
  brokenLinks,
  totalBrokenLinks: brokenLinks.length,
  totalLinksChecked: allLinks.length
};

fs.writeFileSync('broken-links-repor't'.json', JSON.stringify(results, null, 2));
console.log('\nDetailed report saved to broken-links-report.json'); </div>