import fs from 'fs';
import path from 'path';

// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to create a proper Next.js page template
function createPageTemplate(pageName, filePath) {
  const componentName = kebabToPascal(pageName);
  const isApi = filePath.includes('/api/');
  
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
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default ${componentName};`;
}

// Function to fix empty files
function fixEmptyFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixEmptyFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8').trim();
      
      if (!content) {
        console.log(`Fixing empty file: ${filePath}`);
        const fileName = path.basename(file, path.extname(file));
        const pageTemplate = createPageTemplate(fileName, filePath);
        fs.writeFileSync(filePath, pageTemplate);
      }
    }
  });
}

// Start fixing from the pages directory
const pagesDir = './pages';
if (fs.existsSync(pagesDir)) {
  console.log('Fixing empty pages...');
  fixEmptyFiles(pagesDir);
  console.log('Empty pages fixed successfully!');
} else {
  console.error('Pages directory not found');
}
