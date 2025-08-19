#!/usr/bin/env node

'use strict';

/*
  Rapid Content Generator
  - Generates new pages every 2 minutes
  - Creates diverse content types: services, products, tutorials, reviews
  - Updates content registry and homepage
  - Commits and pushes changes immediately
  - Built-in error handling and recovery

  Environment Variables:
  - CANONICAL_URL: The canonical URL for the site
  - PROCESS_TYPE: Process type identifier
  - MAX_PAGES_PER_RUN: Maximum pages to create per run
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const SERVICES_DIR = path.join(PAGES_DIR, 'services');
const PRODUCTS_DIR = path.join(PAGES_DIR, 'products');
const TUTORIALS_DIR = path.join(PAGES_DIR, 'tutorials');
const REVIEWS_DIR = path.join(PAGES_DIR, 'reviews');
const BLOG_DIR = path.join(PAGES_DIR, 'blog');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const PROCESS_TYPE = process.env.PROCESS_TYPE || 'rapid';
const MAX_PAGES_PER_RUN = parseInt(process.env.MAX_PAGES_PER_RUN) || 3;

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${PROCESS_TYPE.toUpperCase()}] ${level}: ${message}`;
  console.log(logMessage);
  
  // Write to log file
  ensureDir(LOGS_DIR);
  const logFile = path.join(LOGS_DIR, `rapid-content-generator-${new Date().toISOString().split('T')[0]}.log`);
  fs.appendFileSync(logFile, logMessage + '\n');
}

function generateSlug() {
  const now = new Date();
  const timestamp = now.getTime();
  const random = Math.random().toString(36).substring(2, 8);
  return `rapid-${timestamp}-${random}`;
}

function generateServiceName() {
  const services = [
    'AI-Powered Analytics',
    'Cloud Infrastructure',
    'DevOps Automation',
    'Data Processing',
    'Machine Learning',
    'Web Development',
    'Mobile App Development',
    'API Integration',
    'Database Optimization',
    'Security Auditing'
  ];
  return services[Math.floor(Math.random() * services.length)];
}

function generateProductName() {
  const products = [
    'Smart Dashboard',
    'Automation Suite',
    'Data Platform',
    'Development Tools',
    'Monitoring System',
    'Collaboration Platform',
    'Analytics Engine',
    'Integration Hub',
    'Security Framework',
    'Performance Optimizer'
  ];
  return products[Math.floor(Math.random() * products.length)];
}

function generateTutorialTitle() {
  const tutorials = [
    'Getting Started with',
    'Advanced Techniques for',
    'Best Practices in',
    'Complete Guide to',
    'Mastering',
    'Step-by-Step Guide to',
    'Professional Tips for',
    'Essential Skills in',
    'Expert Techniques for',
    'Comprehensive Tutorial on'
  ];
  return tutorials[Math.floor(Math.random() * tutorials.length)];
}

function createServicePage() {
  ensureDir(SERVICES_DIR);
  const slug = generateSlug();
  const serviceName = generateServiceName();
  
  const filePath = path.join(SERVICES_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(filePath)) {
    log(`Service page already exists: ${slug}`, 'WARN');
    return null;
  }

  const pageContent = `import Head from 'next/head';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${serviceName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${serviceName.toLowerCase()} services to accelerate your business growth and digital transformation." />
        <meta name="keywords" content="${serviceName.toLowerCase()}, services, technology, business, digital transformation" />
        <link rel="canonical" href="${CANONICAL_URL}/services/${slug}" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-4xl font-extrabold text-center mb-8">${serviceName}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🚀 Service Overview</h2>
          <p className="text-xl text-white/90 mb-4">
            Our ${serviceName.toLowerCase()} service delivers cutting-edge solutions to help your business thrive in the digital age.
          </p>
          <p className="text-white/80">
            We combine industry expertise with innovative technology to deliver results that exceed expectations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">⚡ Key Benefits</h2>
          <ul className="space-y-2">
            <li>Increased efficiency and productivity</li>
            <li>Cost reduction and optimization</li>
            <li>Scalable and flexible solutions</li>
            <li>24/7 support and maintenance</li>
            <li>Proven track record of success</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 What We Deliver</h2>
          <p className="text-white/80">
            Our comprehensive approach includes strategy development, implementation, training, and ongoing support
            to ensure your success with ${serviceName.toLowerCase()}.
          </p>
        </section>

        <section className="text-center">
          <p className="text-white/75 mb-4">
            Ready to transform your business with ${serviceName.toLowerCase()}?
          </p>
          <a 
            href="${CANONICAL_URL}/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started Today
          </a>
        </section>
      </main>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  log(`Created service page: ${serviceName}`);
  return { filePath, route: `/services/${slug}`, title: serviceName };
}

function createProductPage() {
  ensureDir(PRODUCTS_DIR);
  const slug = generateSlug();
  const productName = generateProductName();
  
  const filePath = path.join(PRODUCTS_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(filePath)) {
    log(`Product page already exists: ${slug}`, 'WARN');
    return null;
  }

  const pageContent = `import Head from 'next/head';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${productName} - Zion Tech Group</title>
        <meta name="description" content="${productName} - The ultimate solution for modern businesses seeking innovation and efficiency." />
        <meta name="keywords" content="${productName.toLowerCase()}, product, technology, innovation, business solution" />
        <link rel="canonical" href="${CANONICAL_URL}/products/${slug}" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-4xl font-extrabold text-center mb-8">${productName}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🌟 Product Overview</h2>
          <p className="text-xl text-white/90 mb-4">
            ${productName} is designed to revolutionize how businesses operate and grow in today's competitive landscape.
          </p>
          <p className="text-white/80">
            Built with cutting-edge technology and user experience in mind, it delivers exceptional value and performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🔧 Features</h2>
          <ul className="space-y-2">
            <li>Intuitive user interface</li>
            <li>Advanced analytics and reporting</li>
            <li>Seamless integration capabilities</li>
            <li>Real-time collaboration tools</li>
            <li>Enterprise-grade security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">💡 Use Cases</h2>
          <p className="text-white/80">
            Perfect for businesses looking to streamline operations, improve decision-making, and accelerate growth
            through intelligent automation and data-driven insights.
          </p>
        </section>

        <section className="text-center">
          <p className="text-white/75 mb-4">
            Experience the power of ${productName} today!
          </p>
          <a 
            href="${CANONICAL_URL}/demo" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Request Demo
          </a>
        </section>
      </main>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  log(`Created product page: ${productName}`);
  return { filePath, route: `/products/${slug}`, title: productName };
}

function createTutorialPage() {
  ensureDir(TUTORIALS_DIR);
  const slug = generateSlug();
  const tutorialTitle = generateTutorialTitle();
  const topic = generateServiceName();
  
  const filePath = path.join(TUTORIALS_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(filePath)) {
    log(`Tutorial page already exists: ${slug}`, 'WARN');
    return null;
  }

  const pageContent = `import Head from 'next/head';

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${tutorialTitle} ${topic} - Zion Tech Group</title>
        <meta name="description" content="Learn ${topic.toLowerCase()} with our comprehensive tutorial. Step-by-step guidance for beginners and advanced users." />
        <meta name="keywords" content="tutorial, ${topic.toLowerCase()}, learning, guide, education, technology" />
        <link rel="canonical" href="${CANONICAL_URL}/tutorials/${slug}" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-4xl font-extrabold text-center mb-8">${tutorialTitle} ${topic}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📚 Tutorial Overview</h2>
          <p className="text-xl text-white/90 mb-4">
            This comprehensive tutorial will guide you through mastering ${topic.toLowerCase()} from the ground up.
          </p>
          <p className="text-white/80">
            Whether you're a beginner or looking to enhance your skills, this guide has something for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 What You'll Learn</h2>
          <ul className="space-y-2">
            <li>Fundamental concepts and principles</li>
            <li>Practical implementation techniques</li>
            <li>Best practices and optimization</li>
            <li>Real-world applications and examples</li>
            <li>Troubleshooting and problem-solving</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">⏱️ Time Commitment</h2>
          <p className="text-white/80">
            This tutorial is designed to be completed in 2-4 hours, depending on your experience level
            and how much time you spend practicing the concepts.
          </p>
        </section>

        <section className="text-center">
          <p className="text-white/75 mb-4">
            Ready to master ${topic.toLowerCase()}?
          </p>
          <a 
            href="${CANONICAL_URL}/tutorials" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Start Learning
          </a>
        </section>
      </main>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  log(`Created tutorial page: ${tutorialTitle} ${topic}`);
  return { filePath, route: `/tutorials/${slug}`, title: `${tutorialTitle} ${topic}` };
}

function createReviewPage() {
  ensureDir(REVIEWS_DIR);
  const slug = generateSlug();
  const productName = generateProductName();
  
  const filePath = path.join(REVIEWS_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(filePath)) {
    log(`Review page already exists: ${slug}`, 'WARN');
    return null;
  }

  const pageContent = `import Head from 'next/head';

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${productName} Review - Zion Tech Group</title>
        <meta name="description" content="Comprehensive review of ${productName}. Honest assessment of features, performance, and value for businesses." />
        <meta name="keywords" content="review, ${productName.toLowerCase()}, analysis, assessment, technology review" />
        <link rel="canonical" href="${CANONICAL_URL}/reviews/${slug}" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-4xl font-extrabold text-center mb-8">${productName} Review</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📊 Executive Summary</h2>
          <p className="text-xl text-white/90 mb-4">
            ${productName} delivers exceptional value for businesses seeking innovative solutions.
          </p>
          <p className="text-white/80">
            Our comprehensive analysis reveals a product that excels in performance, usability, and ROI.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">⭐ Rating: 9.2/10</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-green-400">9.5</div>
              <div className="text-sm text-white/70">Performance</div>
            </div>
            <div className="text-center p-4 bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">9.0</div>
              <div className="text-sm text-white/70">Usability</div>
            </div>
            <div className="text-center p-4 bg-slate-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">9.1</div>
              <div className="text-sm text-white/70">Value</div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">✅ Pros</h2>
          <ul className="space-y-2">
            <li>Outstanding performance and reliability</li>
            <li>Intuitive and user-friendly interface</li>
            <li>Excellent customer support</li>
            <li>Competitive pricing</li>
            <li>Regular updates and improvements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">⚠️ Cons</h2>
          <ul className="space-y-2">
            <li>Learning curve for advanced features</li>
            <li>Limited customization options</li>
            <li>Requires internet connection</li>
          </ul>
        </section>

        <section className="text-center">
          <p className="text-white/75 mb-4">
            Overall, ${productName} is highly recommended for businesses looking for reliable, efficient solutions.
          </p>
          <a 
            href="${CANONICAL_URL}/products" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Explore Products
          </a>
        </section>
      </main>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  log(`Created review page: ${productName} Review`);
  return { filePath, route: `/reviews/${slug}`, title: `${productName} Review` };
}

function createBlogPage() {
  ensureDir(BLOG_DIR);
  const slug = generateSlug();
  const topic = generateServiceName();
  
  const filePath = path.join(BLOG_DIR, `${slug}.tsx`);
  
  if (fs.existsSync(filePath)) {
    log(`Blog page already exists: ${slug}`, 'WARN');
    return null;
  }

  const pageContent = `import Head from 'next/head';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>The Future of ${topic} - Zion Tech Group Blog</title>
        <meta name="description" content="Explore the latest trends and innovations in ${topic.toLowerCase()} and discover how they're shaping the future of technology." />
        <meta name="keywords" content="blog, ${topic.toLowerCase()}, technology trends, innovation, future tech" />
        <link rel="canonical" href="${CANONICAL_URL}/blog/${slug}" />
      </Head>
      <main className="container mx-auto px-6 py-12 prose prose-invert">
        <h1 className="text-4xl font-extrabold text-center mb-8">The Future of ${topic}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🚀 Introduction</h2>
          <p className="text-xl text-white/90 mb-4">
            ${topic} is rapidly evolving, bringing unprecedented opportunities and challenges to businesses worldwide.
          </p>
          <p className="text-white/80">
            In this article, we'll explore the latest developments, emerging trends, and what the future holds for this exciting field.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📈 Current Trends</h2>
          <p className="text-white/80">
            The landscape of ${topic.toLowerCase()} is being transformed by several key trends that are reshaping how organizations approach technology adoption and implementation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🔮 Future Predictions</h2>
          <p className="text-white/80">
            Looking ahead, we can expect ${topic.toLowerCase()} to become even more integrated into our daily lives, with new applications and use cases emerging regularly.
          </p>
        </section>

        <section className="text-center">
          <p className="text-white/75 mb-4">
            Stay ahead of the curve with our insights and analysis.
          </p>
          <a 
            href="${CANONICAL_URL}/blog" 
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Read More Articles
          </a>
        </section>
      </main>
    </div>
  );
}
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  log(`Created blog page: The Future of ${topic}`);
  return { filePath, route: `/blog/${slug}`, title: `The Future of ${topic}` };
}

function updateContentRegistry(pages) {
  try {
    const registryPath = path.join(ROOT, 'public', 'automation', 'content-registry.json');
    ensureDir(path.dirname(registryPath));
    
    let registry = {};
    if (fs.existsSync(registryPath)) {
      try {
        registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
      } catch (e) {
        log(`Error reading registry: ${e.message}`, 'WARN');
      }
    }
    
    if (!registry.items) registry.items = [];
    
    pages.forEach(page => {
      if (page) {
        registry.items.push({
          id: page.route.split('/').pop(),
          title: page.title,
          route: page.route,
          type: 'rapid-generated',
          created: new Date().toISOString(),
          process: PROCESS_TYPE
        });
      }
    });
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');
    log(`Updated content registry with ${pages.filter(p => p).length} new pages`);
  } catch (error) {
    log(`Error updating content registry: ${error.message}`, 'ERROR');
  }
}

function updateHomepage() {
  try {
    const homepagePath = path.join(ROOT, 'pages', 'index.tsx');
    if (!fs.existsSync(homepagePath)) {
      log('Homepage not found, skipping update', 'WARN');
      return false;
    }
    
    let homepage = fs.readFileSync(homepagePath, 'utf8');
    
    // Simple update - add a timestamp comment
    const timestamp = new Date().toISOString();
    const updateComment = `\n{/* Rapid Content Generator Update: ${timestamp} */}\n`;
    
    if (!homepage.includes('Rapid Content Generator Update')) {
      homepage = homepage.replace('export default function Home() {', 
        `export default function Home() {${updateComment}`);
      fs.writeFileSync(homepagePath, homepage, 'utf8');
      log('Updated homepage with timestamp');
      return true;
    }
    
    return false;
  } catch (error) {
    log(`Error updating homepage: ${error.message}`, 'ERROR');
    return false;
  }
}

function runCommand(command, args, options = {}) {
  try {
    const result = spawnSync(command, args, {
      stdio: 'inherit',
      cwd: ROOT,
      ...options
    });
    return result.status === 0;
  } catch (error) {
    log(`Command failed: ${command} ${args.join(' ')} - ${error.message}`, 'ERROR');
    return false;
  }
}

function main() {
  log('Starting rapid content generation...');
  
  try {
    // Ensure all directories exist
    [SERVICES_DIR, PRODUCTS_DIR, TUTORIALS_DIR, REVIEWS_DIR, BLOG_DIR].forEach(ensureDir);
    
    // Create diverse content types
    const pages = [];
    const contentCreators = [
      createServicePage,
      createProductPage,
      createTutorialPage,
      createReviewPage,
      createBlogPage
    ];
    
    // Create pages up to the maximum limit
    for (let i = 0; i < Math.min(MAX_PAGES_PER_RUN, contentCreators.length); i++) {
      const creator = contentCreators[i];
      const page = creator();
      if (page) {
        pages.push(page);
      }
    }
    
    if (pages.length === 0) {
      log('No new pages created', 'WARN');
      return;
    }
    
    // Update content registry
    updateContentRegistry(pages);
    
    // Update homepage
    const homepageUpdated = updateHomepage();
    
    // Commit and push changes
    log('Committing and pushing changes...');
    
    // Add all new files
    runCommand('git', ['add', '.']);
    
    // Commit with descriptive message
    const commitMessage = `⚡ Rapid content generation: ${pages.length} new pages [${PROCESS_TYPE}]`;
    runCommand('git', ['commit', '-m', commitMessage]);
    
    // Push to main branch
    runCommand('git', ['push', 'origin', 'main']);
    
    log(`✅ Rapid content generation completed successfully! Created ${pages.length} pages${homepageUpdated ? ' and updated homepage' : ''}`);
    
  } catch (error) {
    log(`❌ Rapid content generation failed: ${error.message}`, 'ERROR');
    throw error;
  }
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (error) {
    log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

module.exports = { main, createServicePage, createProductPage, createTutorialPage, createReviewPage, createBlogPage };
