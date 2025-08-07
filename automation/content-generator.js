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
      .replace(/Page Title/g, options.title || name);

    const fileName = `${name.toLowerCase().replace(/\s+/g, '-')}.${type === 'blog' ? 'tsx' : type === 'component' ? 'tsx' : 'tsx'}`;
    const filePath = path.join(__dirname, '..', '..', 'generated', fileName);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Generated ${type}: ${fileName}`);
  }
}

const generator = new ContentGenerator();
// Example usage:
// generator.generateContent('blog', 'My Blog Post', { title: 'My Blog Post', description: 'A great blog post' });
console.log('Content generator ready');
