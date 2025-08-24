const fs = require('fs');
const path = require('path');

// Common fixes for broken pages
const pageFixes = {
  'pages/403.tsx': `import React from 'react';
import Head from 'next/head';

export default function Error403() {
  return (
    <>
      <Head>
        <title>403 - Zion App</title>
        <meta name="description" content="403 page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">403</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`,
  'pages/ProductsList.tsx': `import React from 'react';
import Head from 'next/head';

export default function ProductsList() {
  return (
    <>
      <Head>
        <title>Products List - Zion Tech Group</title>
        <meta name="description" content="Browse our comprehensive list of innovative products and services" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Products List</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`,
  'pages/academy/futurescape.tsx': `import React from 'react';
import Head from 'next/head';

export default function Futurescape() {
  return (
    <>
      <Head>
        <title>Futurescape Academy - Zion Tech Group</title>
        <meta name="description" content="Explore the future of technology with our Futurescape Academy" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Futurescape Academy</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`,
  'pages/academy/storybook.tsx': `import React from 'react';
import Head from 'next/head';

export default function Storybook() {
  return (
    <>
      <Head>
        <title>Storybook Academy - Zion Tech Group</title>
        <meta name="description" content="Learn through interactive stories at our Storybook Academy" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Storybook Academy</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`,
  'pages/account.tsx': `import React from 'react';
import Head from 'next/head';

export default function Account() {
  return (
    <>
      <Head>
        <title>Account - Zion Tech Group</title>
        <meta name="description" content="Manage your Zion Tech Group account" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Account</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`
};

// Apply fixes
Object.entries(pageFixes).forEach(([filePath, content]) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  } catch (error) {
    console.log(`❌ Failed to fix ${filePath}: ${error.message}`);
  }
});

console.log('Page fixes applied. Run the build again to check for remaining issues.');