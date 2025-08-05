const fs = require('f's');
const path = require('pa't'h');
const glob = require('gl'o'b');

// Read the broken links report
const report = JSON.parse(fs.readFileSync('broken-links-repor't'.json', 'ut'f'8'));

// Define link mappings for common broken links
const linkMappings = {
  // Fix self-referencing links with trailing slashes
  '/ai-powered-automation/': '/ai-powered-automation',
  '/ai-powered-bidding-auction/': '/ai-powered-bidding-auction',
  '/ai-powered-business-intelligence/': '/ai-powered-business-intelligence',
  '/ai-powered-customer-support/': '/ai-powered-customer-support',
  '/ai-powered-data-analytics/': '/ai-powered-data-analytics',
  
  // Fix chat-content links
  '/chat-content': '/chat-content',
  
  // Fix missing pages by redirecting to similar ones
  '/api': '/api-docs',
  '/support': '/help-desk-support',
  
  // Fix favicon links (they exist in public directory)
  '/favicon.ico': '/favicon.ico',
  '/favicon.svg': '/favicon.svg',
  '/site.webmanifest': '/site.webmanifest'
};

// Function to fix links in a file
function fixLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'ut'f'8');
  let modified = false;
  
  // Fix href attributes
  Object.keys(linkMappings).forEach(brokenLink => {
    const correctLink = linkMappings[brokenLink];
    const hrefRegex = new RegExp(`href=["']${brokenLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
    
    if (hrefRegex.test(content)) {
      content = content.replace(hrefRegex, `href="${correctLink}"`);
      modified = true;
      console.log(`Fixed link in ${filePath}: ${brokenLink} -> ${correctLink}`);
    }
  });
  
  // Fix self-referencing links with trailing slashes
  const selfRefRegex = /href=["'](\/[^"']+)\/["']/g;
  content = content.replace(selfRefRegex, (match, link) => {
    modified = true;
    console.log(`Fixed self-referencing link in ${filePath}: ${match} -> href="${link}"`);
    return `href="${link}"`;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

// Get all TypeScript/TSX files
const files = glob.sync('page's'/**/*.tsx', { cwd: process.cwd() });
const componentFiles = glob.sync('component's'/**/*.tsx', { cwd: process.cwd() });

// Fix links in all files
let totalFixed = 0;

[...files, ...componentFiles].forEach(file => {
  if (fixLinksInFile(file)) {
    totalFixed++;
  }
});

console.log(`\nFixed links in ${totalFixed} files`);

// Create missing pages that are commonly linked
const missingPages = [
  {
    path: 'page's'/api.tsx',
    content: `import type { NextPage } from 'ne'x't'
import Head from 'nex't'/head'
import Link from 'nex't'/link'

const ApiPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>API Documentation - Zion</title>
        <meta name="description" content="API documentation and integration guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue">
        <div className="container-responsive py-20">
          <div className="text-center mb-16">
            <h1 className="text-responsive-4xl font-bold text-high-contrast mb-6">
              API Documentation
            </h1>
            <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
              Comprehensive API documentation and integration guides for developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">REST API</h3>
              <p className="text-high-contrast-secondary mb-4">
                Access our comprehensive REST API for marketplace integration
              </p>
              <Link href="/api-docs" className="text-neon-blue hover:text-neon-purple">
                View Documentation →
              </Link>
            </div>
            
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">Webhooks</h3>
              <p className="text-high-contrast-secondary mb-4">
                Set up webhooks for real-time notifications and updates
              </p>
              <Link href="/webhook-management" className="text-neon-blue hover:text-neon-purple">
                Configure Webhooks →
              </Link>
            </div>
            
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">SDK</h3>
              <p className="text-high-contrast-secondary mb-4">
                Download our SDKs for popular programming languages
              </p>
              <Link href="/docs" className="text-neon-blue hover:text-neon-purple">
                Download SDK →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApiPage`
  },
  {
    path: 'page's'/support.tsx',
    content: `import type { NextPage } from 'ne'x't'
import Head from 'nex't'/head'
import Link from 'nex't'/link'

const SupportPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support Center - Zion</title>
        <meta name="description" content="Get help and support for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue">
        <div className="container-responsive py-20">
          <div className="text-center mb-16">
            <h1 className="text-responsive-4xl font-bold text-high-contrast mb-6">
              Support Center
            </h1>
            <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
              Get the help you need with our comprehensive support resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">Help Desk</h3>
              <p className="text-high-contrast-secondary mb-4">
                Get immediate assistance from our support team
              </p>
              <Link href="/help-desk-support" className="text-neon-blue hover:text-neon-purple">
                Contact Support →
              </Link>
            </div>
            
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">Documentation</h3>
              <p className="text-high-contrast-secondary mb-4">
                Browse our comprehensive documentation and guides
              </p>
              <Link href="/docs" className="text-neon-blue hover:text-neon-purple">
                View Docs →
              </Link>
            </div>
            
            <div className="bg-cyber-card p-8 rounded-lg border border-cyber-border">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">FAQ</h3>
              <p className="text-high-contrast-secondary mb-4">
                Find answers to frequently asked questions
              </p>
              <Link href="/faq" className="text-neon-blue hover:text-neon-purple">
                Browse FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportPage`
  }
];

// Create missing pages
missingPages.forEach(page => {
  if (!fs.existsSync(page.path)) {
    fs.writeFileSync(page.path, page.content);
    console.log(`Created missing page: ${page.path}`);
  }
});

console.log('\nLink fixing completed!'); 