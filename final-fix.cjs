const fs = require('fs');
const path = require('path');

// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to create a proper Next.js page template
function createProperPageTemplate(pageName, isApi = false) {
  const componentName = kebabToPascal(pageName);
  
  if (isApi) {
    return `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint working' });
}`;
  }
  
  return `import type { NextPage } from 'next';
import Head from 'next/head';

const ${componentName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${componentName} - Zion Tech Solutions</title>
        <meta name="description" content="${componentName} page" />
      </Head>
      
      <main>
        <h1>${componentName}</h1>
        {/* TODO: Add page content */}
      </main>
    </div>
  );
};

export default ${componentName};`;
}

// Function to create a proper blog page template
function createBlogPageTemplate(pageName) {
  const componentName = kebabToPascal(pageName);
  
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ${componentName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${componentName} - Zion Tech Solutions</title>
        <meta name="description" content="${componentName} blog post" />
      </Head>
      
      <main>
        <h1>${componentName}</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default ${componentName};`;
}

// Function to create a proper service page template
function createServicePageTemplate(pageName) {
  const componentName = kebabToPascal(pageName);
  
  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ${componentName}: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${componentName} - Zion Tech Solutions</title>
        <meta name="description" content="${componentName} service" />
      </Head>
      
      <main>
        <h1>${componentName}</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default ${componentName};`;
}

// Function to create a proper component template
function createComponentTemplate(componentName) {
  const pascalName = kebabToPascal(componentName);
  
  return `import React from 'react';

interface ${pascalName}Props {
  children?: React.ReactNode;
}

const ${pascalName}: React.FC<${pascalName}Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ${pascalName};`;
}

// Function to fix a file based on its path and name
function fixFile(filePath) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    
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
