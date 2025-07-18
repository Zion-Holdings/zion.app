const fs = require('fs');'const path = require('path');';
function fixPages(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixPages(fullPath);
    } else if (file.isFile() && /\.(tsx?|jsx?)$/.test(file.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');'        
        // Check if the file has a valid React component export
        if (!content.includes('export default') || '            content.includes('placeholder') ||'            content.length < 100) {
          
          console.log(`Fixing page: ${fullPath}`);
          
          // Create a minimal working React component
          const componentName = file.name.replace(/\.(tsx?|jsx?)$/, '');'          const pagePath = fullPath.replace('pages/', '').replace(/\.(tsx?|jsx?)$/, '');'          
          if (file.name.endsWith('.tsx')) {'            content = `import React from 'react';'import Head from 'next/head';';
export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${pagePath} - Zion App</title>
        <meta name="description" content="${pagePath} page" />"      </Head>
      <div className="container mx-auto px-4 py-8">"        <h1 className="text-3xl font-bold mb-6">${pagePath}</h1>"        <p className="text-lg mb-4">"          This page is under construction.
        </p>
        <div className="mt-4">"          <a href="/" className="text-blue-600 hover:underline">"            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
          } else if (file.name.endsWith('.ts')) {'            content = `import React from 'react';'import Head from 'next/head';';
export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${pagePath} - Zion App</title>
        <meta name="description" content="${pagePath} page" />"      </Head>
      <div className="container mx-auto px-4 py-8">"        <h1 className="text-3xl font-bold mb-6">${pagePath}</h1>"        <p className="text-lg mb-4">"          This page is under construction.
        </p>
        <div className="mt-4">"          <a href="/" className="text-blue-600 hover:underline">"            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
          } else if (file.name.endsWith('.jsx')) {'            content = `import React from 'react';'import Head from 'next/head';';
export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${pagePath} - Zion App</title>
        <meta name="description" content="${pagePath} page" />"      </Head>
      <div className="container mx-auto px-4 py-8">"        <h1 className="text-3xl font-bold mb-6">${pagePath}</h1>"        <p className="text-lg mb-4">"          This page is under construction.
        </p>
        <div className="mt-4">"          <a href="/" className="text-blue-600 hover:underline">"            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
          } else if (file.name.endsWith('.js')) {'            content = `import React from 'react';'import Head from 'next/head';';
export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${pagePath} - Zion App</title>
        <meta name="description" content="${pagePath} page" />"      </Head>
      <div className="container mx-auto px-4 py-8">"        <h1 className="text-3xl font-bold mb-6">${pagePath}</h1>"        <p className="text-lg mb-4">"          This page is under construction.
        </p>
        <div className="mt-4">"          <a href="/" className="text-blue-600 hover:underline">"            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
          }
          
          fs.writeFileSync(fullPath, content);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the pages directory
fixPages('./pages');'console.log('Page fixing completed'); '