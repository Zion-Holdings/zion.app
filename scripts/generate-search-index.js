#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateSearchIndex() {
  const publicDir = path.join(process.cwd(), 'public');
  const searchIndexPath = path.join(publicDir, 'search-index.json');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Basic search index structure
  const searchIndex = {
    pages: [
      {
        title: 'Zion Tech Group — Autonomous Innovation Hub',
        url: '/',
        description: 'Leading-edge technology solutions and autonomous innovation systems.',
        keywords: ['technology', 'innovation', 'automation', 'AI', 'autonomous systems'],
        category: 'home'
      },
      {
        title: 'About Us',
        url: '/about',
        description: 'Learn about Zion Tech Group and our mission.',
        keywords: ['about', 'company', 'mission', 'team'],
        category: 'company'
      },
      {
        title: 'Our Services',
        url: '/services',
        description: 'Explore our comprehensive technology services.',
        keywords: ['services', 'technology', 'solutions', 'consulting'],
        category: 'services'
      },
      {
        title: 'Resources',
        url: '/resources',
        description: 'Access our knowledge base and resources.',
        keywords: ['resources', 'knowledge', 'guides', 'documentation'],
        category: 'resources'
      },
      {
        title: 'Case Studies',
        url: '/case-studies',
        description: 'Real-world examples of our technology solutions.',
        keywords: ['case studies', 'examples', 'success stories', 'projects'],
        category: 'portfolio'
      },
      {
        title: 'Blog',
        url: '/blog',
        description: 'Latest insights and updates from our team.',
        keywords: ['blog', 'insights', 'updates', 'news'],
        category: 'content'
      },
      {
        title: 'Contact',
        url: '/contact',
        description: 'Get in touch with our team.',
        keywords: ['contact', 'support', 'inquiry', 'get quote'],
        category: 'contact'
      }
    ],
    lastUpdated: new Date().toISOString(),
    totalPages: 7
  };
  
  fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex, null, 2));
  console.log(`✅ Search index generated at: ${searchIndexPath}`);
  console.log(`📊 Indexed ${searchIndex.pages.length} pages`);
}

if (require.main === module) {
  generateSearchIndex();
}

module.exports = generateSearchIndex;