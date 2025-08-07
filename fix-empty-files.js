const fs = require('fs');
const path = require('path');

// Basic React component template
const basicComponent = `import React from 'react';

const Component = () => {
  return (
    <div>
      <h1>Page Content</h1>
      <p>This page is under construction.</p>
    </div>
  );
};

export default Component;
`;

// Basic API endpoint template
const basicApiEndpoint = `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint working' });
}
`;

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
        
        if (filePath.includes('/api/')) {
          fs.writeFileSync(filePath, basicApiEndpoint);
        } else {
          fs.writeFileSync(filePath, basicComponent);
        }
      }
    }
  });
}

// Fix empty files in pages directory
fixEmptyFiles('./pages');
console.log('Fixed empty files');
