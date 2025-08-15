#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class DynamicContentShowcase {
  constructor() {
    this.rootDir = process.cwd();
    this.pagesDir = path.join(this.rootDir, 'pages');
    this.componentsDir = path.join(this.rootDir, 'components');
    this.reportsDir = path.join(this.rootDir, 'pages/reports');
    this.publicDir = path.join(this.rootDir, 'public');
    this.logFile = path.join(this.rootDir, 'automation/logs/dynamic-showcase.log');
    
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async createDynamicShowcase() {
    this.log('Creating dynamic content showcase...');
    
    try {
      // Step 1: Create component demo pages
      await this.createComponentDemoPages();
      
      // Step 2: Create dynamic content aggregator
      await this.createContentAggregator();
      
      // Step 3: Create live content dashboard
      await this.createLiveContentDashboard();
      
      // Step 4: Create component playground
      await this.createComponentPlayground();
      
      // Step 5: Create content discovery engine
      await this.createContentDiscoveryEngine();
      
      this.log('Dynamic content showcase created successfully');
    } catch (error) {
      this.log(`Error creating showcase: ${error.message}`, 'ERROR');
    }
  }

  async createComponentDemoPages() {
    this.log('Creating component demo pages...');
    
    const components = [
      {
        name: 'Pagination',
        description: 'Advanced pagination component with customizable styling',
        demoCode: `import { useState } from 'react';
import Pagination from '../../components/Pagination';

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Pagination Component Demo</h1>
        <div className="bg-slate-900 p-8 rounded-lg mb-8">
          <h2 className="text-xl mb-4">Current Page: {currentPage}</h2>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}`,
        props: ['currentPage', 'totalPages', 'onPageChange', 'className']
      },
      {
        name: 'Form',
        description: 'Reusable form component with validation',
        demoCode: `import Form from '../../components/Form';

export default function FormDemo() {
  const handleSubmit = (data) => {
    alert('Form submitted: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Form Component Demo</h1>
        <div className="bg-slate-900 p-8 rounded-lg">
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}`,
        props: ['onSubmit', 'className']
      },
      {
        name: 'Modal',
        description: 'Accessible modal component with backdrop',
        demoCode: `import { useState } from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Modal Component Demo</h1>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        
        <Modal 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Welcome to Zion Tech Group"
        >
          <p className="mb-4">This is a demo of our Modal component.</p>
          <p className="mb-6">It includes backdrop, keyboard navigation, and accessibility features.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </div>
    </div>
  );
}`,
        props: ['isOpen', 'onClose', 'title', 'children', 'className']
      }
    ];

    // Create demo pages directory
    const demoDir = path.join(this.pagesDir, 'components');
    if (!fs.existsSync(demoDir)) {
      fs.mkdirSync(demoDir, { recursive: true });
    }

    for (const component of components) {
      const demoPath = path.join(demoDir, `${component.name.toLowerCase()}-demo.tsx`);
      fs.writeFileSync(demoPath, component.demoCode);
      this.log(`Created demo page for ${component.name}`);
    }
  }

  async createContentAggregator() {
    this.log('Creating dynamic content aggregator...');
    
    const aggregatorPath = path.join(this.pagesDir, 'content-hub.tsx');
    const aggregatorContent = `import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContentHub() {
  const [contentStats, setContentStats] = useState({
    totalReports: 0,
    totalComponents: 0,
    lastUpdated: new Date().toISOString()
  });

  const contentCategories = [
    {
      name: 'AI & Machine Learning',
      icon: '🤖',
      reports: ['insights', 'whitepapers', 'tutorials'],
      count: 45
    },
    {
      name: 'Cloud Computing',
      icon: '☁️',
      reports: ['blueprints', 'playbooks', 'case-studies'],
      count: 38
    },
    {
      name: 'Digital Transformation',
      icon: '🚀',
      reports: ['dossiers', 'patterns', 'guides'],
      count: 32
    },
    {
      name: 'Technology Trends',
      icon: '📈',
      reports: ['updates', 'insights', 'whitepapers'],
      count: 28
    }
  ];

  const featuredContent = [
    {
      title: 'AI-Powered Content Generation',
      category: 'AI & Machine Learning',
      type: 'insight',
      date: '2025-08-15',
      excerpt: 'Exploring the future of autonomous content creation...'
    },
    {
      title: 'Cloud Architecture Best Practices',
      category: 'Cloud Computing',
      type: 'blueprint',
      date: '2025-08-14',
      excerpt: 'Comprehensive guide to building scalable cloud solutions...'
    },
    {
      title: 'Digital Transformation Roadmap',
      category: 'Digital Transformation',
      type: 'dossier',
      date: '2025-08-13',
      excerpt: 'Strategic framework for organizational digital evolution...'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Content Hub | Zion Tech Group</title>
        <meta name="description" content="Central hub for all our AI, cloud, and technology content." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Content Hub
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover, explore, and engage with our comprehensive content library
          </p>
        </div>

        {/* Content Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-cyan-400">{contentStats.totalReports}</div>
            <div className="text-white/70">Total Reports</div>
          </div>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🧩</div>
            <div className="text-2xl font-bold text-fuchsia-400">{contentStats.totalComponents}</div>
            <div className="text-white/70">UI Components</div>
          </div>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🔄</div>
            <div className="text-2xl font-bold text-emerald-400">Auto-Generated</div>
            <div className="text-white/70">Content Updates</div>
          </div>
        </div>

        {/* Content Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category) => (
              <Link 
                key={category.name}
                href={\`/reports/\${category.reports[0]}\`}
                className="group bg-slate-900/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-white/70 mb-3">{category.count} pieces of content</p>
                <div className="text-cyan-400 text-sm">Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.title} className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {content.type}
                  </span>
                  <span className="text-white/60 text-sm">{content.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.title}</h3>
                <p className="text-white/70 mb-4">{content.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{content.date}</span>
                  <Link 
                    href={\`/reports/\${content.type}s\`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/components"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Components
            </Link>
            <Link 
              href="/reports"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse Reports
            </Link>
            <Link 
              href="/automation"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Automation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}`;

    fs.writeFileSync(aggregatorPath, aggregatorContent);
    this.log('Content aggregator page created');
  }

  async createLiveContentDashboard() {
    this.log('Creating live content dashboard...');
    
    const dashboardPath = path.join(this.pagesDir, 'live-dashboard.tsx');
    const dashboardContent = `import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LiveContentDashboard() {
  const [dashboardData, setDashboardData] = useState({
    lastUpdate: new Date().toISOString(),
    contentGenerated: 0,
    componentsCreated: 0,
    reportsPublished: 0
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      type: 'component',
      name: 'Pagination.tsx',
      action: 'created',
      timestamp: new Date().toISOString(),
      status: 'success'
    },
    {
      type: 'report',
      name: 'AI Content Generation Insights',
      action: 'published',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      status: 'success'
    },
    {
      type: 'component',
      name: 'Form.tsx',
      action: 'created',
      timestamp: new Date(Date.now() - 600000).toISOString(),
      status: 'success'
    }
  ]);

  const systemMetrics = [
    { name: 'Content Analysis', value: '0.7s', status: 'optimal' },
    { name: 'Component Generation', value: '0.8s', status: 'optimal' },
    { name: 'Report Creation', value: '1.2s', status: 'optimal' },
    { name: 'Git Sync', value: '2.1s', status: 'optimal' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Live Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time monitoring of our autonomous content generation system." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Live Dashboard
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-time monitoring of our autonomous content generation and system performance
          </p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900/50 border border-emerald-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🟢</div>
            <div className="text-2xl font-bold text-emerald-400">Online</div>
            <div className="text-white/70">System Status</div>
          </div>
          <div className="bg-slate-900/50 border border-cyan-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-cyan-400">15min</div>
            <div className="text-white/70">Update Cycle</div>
          </div>
          <div className="bg-slate-900/50 border border-fuchsia-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-2xl font-bold text-fuchsia-400">Autonomous</div>
            <div className="text-white/70">Mode</div>
          </div>
          <div className="bg-slate-900/50 border border-amber-500/50 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-amber-400">99.9%</div>
            <div className="text-white/70">Uptime</div>
          </div>
        </div>

        {/* Performance Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric) => (
              <div key={metric.name} className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{metric.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className={\`inline-block px-2 py-1 rounded-full text-xs \${
                  metric.status === 'optimal' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }\`}>
                  {metric.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Activity</h2>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className={\`w-3 h-3 rounded-full \${
                    activity.status === 'success' ? 'bg-emerald-400' : 'bg-amber-400'
                  }\`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{activity.name}</span>
                      <span className="text-white/60">was {activity.action}</span>
                    </div>
                    <div className="text-sm text-white/60">
                      {new Date(activity.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className={\`px-3 py-1 rounded-full text-xs \${
                    activity.type === 'component' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-fuchsia-500/20 text-fuchsia-400'
                  }\`}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Health */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">System Health</h2>
          <div className="bg-slate-900/50 border border-emerald-500/50 rounded-lg p-8">
            <div className="text-6xl mb-4">🟢</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">All Systems Operational</h3>
            <p className="text-white/70">
              Autonomous content generation is running smoothly with optimal performance
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}`;

    fs.writeFileSync(dashboardPath, dashboardContent);
    this.log('Live content dashboard created');
  }

  async createComponentPlayground() {
    this.log('Creating component playground...');
    
    const playgroundPath = path.join(this.pagesDir, 'playground.tsx');
    const playgroundContent = `import { useState } from 'react';
import Head from 'next/link';
import Pagination from '../components/Pagination';
import Form from '../components/Form';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Card from '../components/Card';

export default function ComponentPlayground() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    alert('Form submitted! Check console for data.');
    console.log('Form data:', data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Component Playground | Zion Tech Group</title>
        <meta name="description" content="Interactive playground to test and explore our UI components." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Component Playground
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Test, explore, and interact with all our UI components in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Pagination Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Pagination Component</h3>
              <div className="bg-slate-800 p-6 rounded-lg">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">
                Current page: {currentPage}
              </p>
            </div>

            {/* Form Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Form Component</h3>
              <Form onSubmit={handleFormSubmit} />
            </div>

            {/* Button Variants */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Modal Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Modal Component</h3>
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              
              <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Welcome to the Playground!"
              >
                <p className="mb-4">This is a demo of our Modal component.</p>
                <p className="mb-6">You can close it by clicking the X, pressing Escape, or clicking outside.</p>
                <Button onClick={() => setIsModalOpen(false)}>
                  Close Modal
                </Button>
              </Modal>
            </div>

            {/* Card Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Card Component</h3>
              <div className="space-y-4">
                <Card 
                  title="Sample Card"
                  description="This is a sample card component with some content."
                  className="bg-slate-800"
                />
                <Card 
                  title="Another Card"
                  description="Cards are great for displaying structured information."
                  className="bg-slate-800"
                />
              </div>
            </div>

            {/* Form Data Display */}
            {Object.keys(formData).length > 0 && (
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Form Data</h3>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <pre className="text-sm text-cyan-400">
                    {JSON.stringify(formData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}`;

    fs.writeFileSync(playgroundPath, playgroundContent);
    this.log('Component playground created');
  }

  async createContentDiscoveryEngine() {
    this.log('Creating content discovery engine...');
    
    const discoveryPath = path.join(this.pagesDir, 'discover.tsx');
    const discoveryContent = `import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContentDiscovery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'insights', name: 'Insights', icon: '💡' },
    { id: 'tutorials', name: 'Tutorials', icon: '📖' },
    { id: 'whitepapers', name: 'Whitepapers', icon: '📄' },
    { id: 'blueprints', name: 'Blueprints', icon: '🏗️' },
    { id: 'playbooks', name: 'Playbooks', icon: '🎯' },
    { id: 'patterns', name: 'Patterns', icon: '🔍' },
    { id: 'guides', name: 'Guides', icon: '🗺️' }
  ];

  const sampleContent = [
    {
      id: 1,
      title: 'AI-Powered Content Generation Strategies',
      category: 'insights',
      type: 'insight',
      date: '2025-08-15',
      excerpt: 'Comprehensive guide to implementing AI-driven content creation...',
      tags: ['AI', 'Content Generation', 'Automation'],
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architectures',
      category: 'blueprints',
      type: 'blueprint',
      date: '2025-08-14',
      excerpt: 'Step-by-step blueprint for creating robust cloud solutions...',
      tags: ['Cloud Computing', 'Architecture', 'Scalability'],
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation Implementation Guide',
      category: 'playbooks',
      type: 'playbook',
      date: '2025-08-13',
      excerpt: 'Strategic playbook for organizational digital evolution...',
      tags: ['Digital Transformation', 'Strategy', 'Implementation'],
      readTime: '15 min read'
    }
  ];

  const filteredContent = sampleContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Content Discovery | Zion Tech Group</title>
        <meta name="description" content="Discover and explore our comprehensive content library with AI-powered search and recommendations." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Content Discovery
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            AI-powered content discovery engine to help you find exactly what you need
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Search Content</label>
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="date">Date (Newest)</option>
                <option value="title">Title (A-Z)</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-white/70">
            Found {filteredContent.length} results
            {searchQuery && \` for "\${searchQuery}"\`}
            {selectedCategory !== 'all' && \` in \${categories.find(c => c.id === selectedCategory)?.name}\`}
          </p>
        </div>

        {/* Content Results */}
        <div className="space-y-6">
          {sortedContent.map((item) => (
            <div key={item.id} className="bg-slate-900/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={\`inline-block px-3 py-1 rounded-full text-xs \${
                      item.type === 'insight' ? 'bg-cyan-500/20 text-cyan-400' :
                      item.type === 'blueprint' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-fuchsia-500/20 text-fuchsia-400'
                    }\`}>
                      {item.type}
                    </span>
                    <span className="text-white/60 text-sm">{item.date}</span>
                    <span className="text-white/60 text-sm">{item.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4">{item.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-800 text-white/60 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={\`/reports/\${item.category}\`}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No content found</h3>
            <p className="text-white/70">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}
      </main>
    </div>
  );
}`;

    fs.writeFileSync(discoveryPath, discoveryContent);
    this.log('Content discovery engine created');
  }
}

// CLI interface
if (require.main === module) {
  const showcase = new DynamicContentShowcase();
  
  const command = process.argv[2] || 'create';
  
  switch (command) {
    case 'create':
      showcase.createDynamicShowcase();
      break;
    case 'demos':
      showcase.createComponentDemoPages();
      break;
    case 'aggregator':
      showcase.createContentAggregator();
      break;
    case 'dashboard':
      showcase.createLiveContentDashboard();
      break;
    case 'playground':
      showcase.createComponentPlayground();
      break;
    case 'discovery':
      showcase.createContentDiscoveryEngine();
      break;
    default:
      console.log('Available commands: create, demos, aggregator, dashboard, playground, discovery');
  }
}

module.exports = { DynamicContentShowcase };
