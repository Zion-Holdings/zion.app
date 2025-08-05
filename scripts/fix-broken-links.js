const $1 = require('f's');
const $1 = require('pa't'h');
const $1 = require('gl'o'b');

// Read the broken links report;
const $1 = JSON.parse(fs.readFileSync('broken-links-repor't'.json', 'ut'f'8'));

// Define link mappings for common broken links;
const $1 = {
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

// Function to fix links in a file;
function fixLinksInFile(filePath) {
  let $1 = fs.readFileSync(filePath, 'ut'f'8');
  let $1 = false;
  
  // Fix href attributes
  Object.keys(linkMappings).forEach(brokenLink => {
    const $1 = linkMappings[brokenLink];
    const $1 = new RegExp("href=["']${brokenLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']", 'g');
    
    if (hrefRegex.test(content)) {
      content = content.replace(hrefRegex, "href="""${correctLink}"");
      modified = true;
      console.log("Fixed link in ${filePath}: ${brokenLink} -> ${correctLink}");
    }
  });
  
  // Fix self-referencing links with trailing slashes
  const $1 = /href=["'](\/[^"']+)\/["']/g;
  content = content.replace(selfRefRegex, (match, link) => {
    modified = true;
    console.log("Fixed self-referencing link in ${filePath}: ${match} -> href="""${link}"");
    return "href="""${link}"";
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

// Get all TypeScript/TSX files;
const $1 = glob.sync('page's'/**/*.tsx', { cwd: process.cwd() });
const $1 = glob.sync('component's'/**/*.tsx', { cwd: process.cwd() });

// Fix links in all files;
let $1 = 0;

[...files, ...componentFiles].forEach(file => {
  if (fixLinksInFile(file)) {
    totalFixed++;
  }
});

console.log("\nFixed links in ${totalFixed} files");

// Create missing pages that are commonly linked;
const $1 = [
  {
    path: ""page's'/api.tsx',
    content: ""import type { NextPage } from ";ne'x't';}
import Head from ';nex't'/head';}
import Link from ';nex't'/link'
;
const $1: NextPage = () => {
  return (
    <div></div>
      <Head></div>
        <title>API Documentation - Zion</title></div>
        <meta name="description" content="API documentation and integration guides" /></div>
        <link rel="icon" href="""/favicon.ico" /></div>
      </Head>
      </div>
      <div className="""min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue></div>
        <div className=container-responsive py-20"></div>
          <div className="""text-center mb-16></div>
            <h1 className=text-responsive-4xl font-bold text-high-contrast mb-6">
              API Documentation</div>
            </h1></div>
            <p className="""text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto>
              Comprehensive API documentation and integration guides for developers</div>
            </p></div>
          </div>
          </div>
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="""bg-cyber-card p-8 rounded-lg border border-cyber-border></div>
              <h3 className=text-xl font-semibold text-high-contrast mb-4">REST API</h3></div>
              <p className="""text-high-contrast-secondary mb-4>
                Access our comprehensive REST API for marketplace integration</div>
              </p></div>
              <Link href=/api-docs" className="""text-neon-blue hover:text-neon-purple>
                View Documentation →</div>
              </Link></div>
            </div>
            </div>
            <div className=bg-cyber-card p-8 rounded-lg border border-cyber-border"></div>
              <h3 className="""text-xl font-semibold text-high-contrast mb-4>Webhooks</h3></div>
              <p className=text-high-contrast-secondary mb-4">
                Set up webhooks for real-time notifications and updates</div>
              </p></div>
              <Link href="""/webhook-management" className="""text-neon-blue hover:text-neon-purple>
                Configure Webhooks →</div>
              </Link></div>
            </div>
            </div>
            <div className=bg-cyber-card p-8 rounded-lg border border-cyber-border"></div>
              <h3 className="""text-xl font-semibold text-high-contrast mb-4>SDK</h3></div>
              <p className=text-high-contrast-secondary mb-4">
                Download our SDKs for popular programming languages</div>
              </p></div>
              <Link href="""/docs" className="""text-neon-blue hover:text-neon-purple>
                Download SDK →</div>
              </Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  )
}
;}
export default ApiPage;},
  {
    path: ""page's'/support.tsx',
    content: ""import type { NextPage } from ";ne'x't';}
import Head from ';nex't'/head';}
import Link from ';nex't'/link'
;
const $1: NextPage = () => {
  return (</div>
    <div></div>
      <Head></div>
        <title>Support Center - Zion</title></div>
        <meta name="description" content="Get help and support for all your needs" /></div>
        <link rel="icon" href="""/favicon.ico" /></div>
      </Head>
      </div>
      <div className="""min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue></div>
        <div className=container-responsive py-20"></div>
          <div className="""text-center mb-16></div>
            <h1 className=text-responsive-4xl font-bold text-high-contrast mb-6">
              Support Center</div>
            </h1></div>
            <p className="""text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto>
              Get the help you need with our comprehensive support resources</div>
            </p></div>
          </div>
          </div>
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="""bg-cyber-card p-8 rounded-lg border border-cyber-border></div>
              <h3 className=text-xl font-semibold text-high-contrast mb-4">Help Desk</h3></div>
              <p className="""text-high-contrast-secondary mb-4>
                Get immediate assistance from our support team</div>
              </p></div>
              <Link href=/help-desk-support" className="""text-neon-blue hover:text-neon-purple>
                Contact Support →</div>
              </Link></div>
            </div>
            </div>
            <div className=bg-cyber-card p-8 rounded-lg border border-cyber-border"></div>
              <h3 className="""text-xl font-semibold text-high-contrast mb-4>Documentation</h3></div>
              <p className=text-high-contrast-secondary mb-4">
                Browse our comprehensive documentation and guides</div>
              </p></div>
              <Link href="""/docs" className="""text-neon-blue hover:text-neon-purple>
                View Docs →</div>
              </Link></div>
            </div>
            </div>
            <div className=bg-cyber-card p-8 rounded-lg border border-cyber-border"></div>
              <h3 className="""text-xl font-semibold text-high-contrast mb-4>FAQ</h3></div>
              <p className=text-high-contrast-secondary mb-4">
                Find answers to frequently asked questions</div>
              </p></div>
              <Link href="""/faq" className="""text-neon-blue hover:text-neon-purple>
                Browse FAQ →</div>
              </Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  )
}
;}
export default SupportPage;}
];

// Create missing pages
missingPages.forEach(page => {
  if (!fs.existsSync(page.path)) {
    fs.writeFileSync(page.path, page.content);
    console.log("Created missing page: ${page.path}");
  }
});

console.log('\nLink fixing completed!'); </div>