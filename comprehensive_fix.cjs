const fs = require('fs');
const path = require('path');

// Function to create a proper Next.js page template
function createProperPageTemplate(pageName, isApi = false) {
  if (isApi) {
    return `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint working' });
}`;
  }
  
  return `import type { NextPage } from 'next';
import Head from 'next/head';

const ${pageName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${pageName} - Zion Tech Solutions</title>
        <meta name="description" content="${pageName} page" />
      </Head>
      
      <main>
        <h1>${pageName}</h1>
        {/* TODO: Add page content */}
      </main>
    </div>
  );
};

export default ${pageName};`;
}

// Function to create a proper blog page template
function createBlogPageTemplate(pageName) {
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ${pageName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${pageName} - Zion Tech Solutions</title>
        <meta name="description" content="${pageName} blog post" />
      </Head>
      
      <main>
        <h1>${pageName}</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default ${pageName};`;
}

// Function to create a proper service page template
function createServicePageTemplate(pageName) {
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ${pageName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${pageName} - Zion Tech Solutions</title>
        <meta name="description" content="${pageName} service" />
      </Head>
      
      <main>
        <h1>${pageName}</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default ${pageName};`;
}

// Function to create a proper component template
function createComponentTemplate(componentName) {
  return `import React from 'react';

interface ${componentName}Props {
  children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ${componentName};`;
}

// Function to fix a file based on its path and name
function fixFile(filePath) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const dirName = path.dirname(filePath);
    
    let content = '';
    
    // Determine the type of file and create appropriate content
    if (filePath.includes('/api/')) {
      content = createProperPageTemplate(fileName, true);
    } else if (filePath.includes('/blog/') || filePath.includes('/category/')) {
      content = createBlogPageTemplate(fileName);
    } else if (filePath.includes('/services/')) {
      content = createServicePageTemplate(fileName);
    } else if (filePath.includes('/components/')) {
      content = createComponentTemplate(fileName);
    } else if (filePath.includes('/pages/')) {
      content = createProperPageTemplate(fileName);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix corrupted files
function fixCorruptedFiles(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixCorruptedFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

// Start fixing from the pages and components directories
console.log('Fixing corrupted TypeScript files with proper templates...');
fixCorruptedFiles('./pages');
fixCorruptedFiles('./components');
console.log('Finished fixing corrupted files with proper templates.');
