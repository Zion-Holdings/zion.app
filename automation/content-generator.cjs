#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ContentGenerator {
  constructor() {
    this.templates = {
      blog: this.getBlogTemplate(),
      component: this.getComponentTemplate(),
      page: this.getPageTemplate()
    };
  }

  getBlogTemplate() {
    return `import type { NextPage } from 'next';
import Head from 'next/head';

const BlogPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog Post Title</title>
        <meta name="description" content="Blog post description" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Post Title</h1>
        <div className="prose max-w-none">
          <p>Blog content goes here...</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;`;
  }

  getComponentTemplate() {
    return `import React from 'react';

interface ComponentProps {
  // Add props here
}

const Component: React.FC<ComponentProps> = ({}) => {
  return (
    <div className="">
      {/* Component content */}
    </div>
  );
};

export default Component;`;
  }

  getPageTemplate() {
    return `import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Page Title</h1>
        {/* Page content */}
      </div>
    </>
  );
};

export default Page;`;
  }

  generateContent(type, name, options = {}) {
    const template = this.templates[type];
    if (!template) {
      console.error('Unknown content type:', type);
      return;
    }

    const content = template
      .replace(/Blog Post Title/g, options.title || name)
      .replace(/Blog post description/g, options.description || 'Generated content')
      .replace(/Component/g, name)
      .replace(/Page Title/g, options.title || name)
      .replace(/Page description/g, options.description || 'Generated content');

    const fileName = `${name.toLowerCase().replace(/\s+/g, '-')}.${type === 'blog' ? 'tsx' : type === 'component' ? 'tsx' : 'tsx'}`;

    const outputDir = options.dir
      ? path.isAbsolute(options.dir)
        ? options.dir
        : path.join(__dirname, '..', options.dir)
      : path.join(__dirname, '..', 'generated');

    const filePath = path.join(outputDir, fileName);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`✅ Generated ${type}: ${filePath}`);
    return filePath;
  }
}

// Simple CLI interface
// Usage:
//  node automation/content-generator.cjs <type> <name> [--title "Title"] [--description "Desc"] [--dir pages/auto]
(function cli() {
  if (require.main !== module) return;

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Content generator ready');
    console.log('Usage: node automation/content-generator.cjs <type> <name> [--title "Title"] [--description "Desc"] [--dir pages/auto]');
    return;
  }

  const [type, ...rest] = args;
  if (!type) {
    console.error('Missing <type>.');
    process.exit(1);
  }

  // Extract quoted name (first non-flag token)
  let name = null;
  const flags = {};
  for (let i = 0; i < rest.length; i++) {
    const token = rest[i];
    if (token.startsWith('--')) {
      const key = token.replace(/^--/, '');
      const next = rest[i + 1];
      if (next && !next.startsWith('--')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else if (name === null) {
      name = token;
    }
  }

  if (!name) {
    console.error('Missing <name>.');
    process.exit(1);
  }

  const generator = new ContentGenerator();
  const filePath = generator.generateContent(type, name, {
    title: flags.title,
    description: flags.description,
    dir: flags.dir
  });

  if (!filePath) process.exit(1);
})();
