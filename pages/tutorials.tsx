import React, { useState } from 'react';
import Head from 'next/head';

const Tutorials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'advanced', name: 'Advanced', icon: '⚡' },
    { id: 'best-practices', name: 'Best Practices', icon: '✅' },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Setting Up Your First AI Project',
      category: 'getting-started',
      description: 'Learn how to create and configure your first AI project on Zion Marketplace',
      duration: '20 min',
      difficulty: 'Beginner',
      steps: 8,
      featured: true,
      tags: ['onboarding', 'project-setup', 'first-steps'],
    },
    {
      id: 2,
      title: 'Integrating AI Services with Your Application',
      category: 'integration',
      description: 'Step-by-step guide to integrating AI services into your existing applications',
      duration: '45 min',
      difficulty: 'Intermediate',
      steps: 12,
      featured: true,
      tags: ['integration', 'api', 'webhooks'],
    },
    {
      id: 3,
      title: 'Building a Custom AI Workflow',
      category: 'advanced',
      description: 'Create complex AI workflows that combine multiple services and data sources',
      duration: '90 min',
      difficulty: 'Advanced',
      steps: 15,
      featured: false,
      tags: ['workflow', 'automation', 'advanced'],
    },
    {
      id: 4,
      title: 'Implementing AI-Powered Search',
      category: 'integration',
      description: 'Add intelligent search capabilities to your application using our AI search API',
      duration: '35 min',
      difficulty: 'Intermediate',
      steps: 10,
      featured: false,
      tags: ['search', 'ai', 'implementation'],
    },
    {
      id: 5,
      title: 'Securing Your AI Integration',
      category: 'best-practices',
      description: 'Best practices for securing AI integrations and protecting user data',
      duration: '40 min',
      difficulty: 'Intermediate',
      steps: 11,
      featured: true,
      tags: ['security', 'best-practices', 'compliance'],
    },
    {
      id: 6,
      title: 'Optimizing AI Service Performance',
      category: 'advanced',
      description: 'Techniques for optimizing AI service performance and reducing costs',
      duration: '60 min',
      difficulty: 'Advanced',
      steps: 13,
      featured: false,
      tags: ['optimization', 'performance', 'cost'],
    },
    {
      id: 7,
      title: 'Creating AI-Powered Dashboards',
      category: 'integration',
      description: 'Build real-time dashboards that display AI insights and analytics',
      duration: '50 min',
      difficulty: 'Intermediate',
      steps: 14,
      featured: false,
      tags: ['dashboard', 'analytics', 'real-time'],
    },
    {
      id: 8,
      title: 'Testing and Debugging AI Integrations',
      category: 'best-practices',
      description: 'Comprehensive testing strategies for AI integrations and debugging techniques',
      duration: '55 min',
      difficulty: 'Intermediate',
      steps: 16,
      featured: false,
      tags: ['testing', 'debugging', 'quality'],
    },
  ];

  const filteredTutorials = tutorials.filter(tutorial => 
    activeCategory === 'all' || tutorial.category === activeCategory
  );

  return (
    <>
      <Head>
        <title>Tutorials - Zion AI Marketplace</title>
        <meta name="description" content="Step-by-step tutorials for AI integration and marketplace success" />
        <meta name="keywords" content="tutorials, step-by-step, AI, integration, learning" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Step-by-Step Tutorials
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Master AI integration with our comprehensive, hands-on tutorials
            </p>
          </div>
        </header>

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Choose a Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Featured Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.filter(tutorial => tutorial.featured).map((tutorial) => (
              <div key={tutorial.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-gray-400">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">{tutorial.steps} steps</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* All Tutorials */}
        <main className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-400">
              {activeCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-400">
              {filteredTutorials.length} tutorials found
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <article key={tutorial.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">{tutorial.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{tutorial.steps} steps</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Start Tutorial →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Learning Path */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Recommended Learning Path</h2>
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
                <p className="text-gray-300 text-sm">Learn the basics and set up your first project</p>
                <div className="mt-4">
                  <a href="#getting-started" className="text-blue-400 hover:text-blue-300 text-sm">
                    View Tutorials →
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-lg font-semibold text-white mb-2">Integration</h3>
                <p className="text-gray-300 text-sm">Connect AI services to your applications</p>
                <div className="mt-4">
                  <a href="#integration" className="text-blue-400 hover:text-blue-300 text-sm">
                    View Tutorials →
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-lg font-semibold text-white mb-2">Best Practices</h3>
                <p className="text-gray-300 text-sm">Learn industry best practices and security</p>
                <div className="mt-4">
                  <a href="#best-practices" className="text-blue-400 hover:text-blue-300 text-sm">
                    View Tutorials →
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">4️⃣</div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced</h3>
                <p className="text-gray-300 text-sm">Master complex workflows and optimization</p>
                <div className="mt-4">
                  <a href="#advanced" className="text-blue-400 hover:text-blue-300 text-sm">
                    View Tutorials →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Learning */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Interactive Learning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Practice Projects</h3>
              <p className="text-gray-300 mb-4">
                Apply what you learn with hands-on practice projects that simulate real-world scenarios.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Start Practice Project
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-4">Earn Certificates</h3>
              <p className="text-gray-300 mb-4">
                Complete tutorial series to earn certificates and showcase your AI integration skills.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                View Certificates
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help with a tutorial? Our support team is here to help</p>
              <p className="mt-2">
                <a href="/contact" className="text-blue-400 hover:text-blue-300">
                  Get Support →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Tutorials;