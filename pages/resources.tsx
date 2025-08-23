import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete AI Automation Implementation Guide',
      description: 'A comprehensive 50-page guide covering everything from initial planning to full deployment of AI automation systems.',
      category: 'Guides',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      featured: true,
      icon: '📚',
      color: 'cyan'
    },
    {
      id: 'performance-benchmarks',
      title: 'AI System Performance Benchmarks 2025',
      description: 'Latest performance metrics and benchmarks for autonomous AI systems across different industries and use cases.',
      category: 'Reports',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 892,
      featured: true,
      icon: '📊',
      color: 'fuchsia'
    },
    {
      id: 'automation-checklist',
      title: 'Pre-Automation Assessment Checklist',
      description: 'Interactive checklist to evaluate your organization\'s readiness for AI automation implementation.',
      category: 'Tools',
      type: 'Interactive',
      size: 'Web App',
      downloads: 2156,
      featured: false,
      icon: '✅',
      color: 'green'
    },
    {
      id: 'cost-calculator',
      title: 'AI Automation ROI Calculator',
      description: 'Calculate potential cost savings and ROI for implementing AI automation in your business processes.',
      category: 'Tools',
      type: 'Web App',
      size: 'Web App',
      downloads: 1834,
      featured: false,
      icon: '💰',
      color: 'yellow'
    },
    {
      id: 'security-framework',
      title: 'AI Security & Ethics Framework',
      description: 'Comprehensive framework for ensuring AI systems are secure, ethical, and compliant with regulations.',
      category: 'Frameworks',
      type: 'PDF',
      size: '3.1 MB',
      downloads: 567,
      featured: false,
      icon: '🔒',
      color: 'blue'
    },
    {
      id: 'integration-playbook',
      title: 'AI Integration Playbook',
      description: 'Step-by-step playbook for integrating AI systems with existing enterprise infrastructure and workflows.',
      category: 'Guides',
      type: 'PDF',
      size: '4.2 MB',
      downloads: 734,
      featured: false,
      icon: '🔗',
      color: 'purple'
    },
    {
      id: 'case-study-template',
      title: 'AI Project Case Study Template',
      description: 'Professional template for documenting and presenting AI automation project results and outcomes.',
      category: 'Templates',
      type: 'Word/PDF',
      size: '0.8 MB',
      downloads: 445,
      featured: false,
      icon: '📋',
      color: 'indigo'
    },
    {
      id: 'webinar-series',
      title: 'AI Automation Webinar Series',
      description: 'Complete series of 12 webinars covering AI automation fundamentals, implementation, and best practices.',
      category: 'Video',
      type: 'MP4',
      size: '2.1 GB',
      downloads: 1234,
      featured: false,
      icon: '🎥',
      color: 'pink'
    }
  ];

  const categories = ['All', 'Guides', 'Reports', 'Tools', 'Frameworks', 'Templates', 'Video'];
  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'from-cyan-400 to-blue-500',
      fuchsia: 'from-fuchsia-400 to-purple-500',
      green: 'from-green-400 to-emerald-500',
      yellow: 'from-yellow-400 to-orange-500',
      blue: 'from-blue-400 to-indigo-500',
      purple: 'from-purple-400 to-pink-500',
      indigo: 'from-indigo-400 to-purple-500',
      pink: 'from-pink-400 to-rose-500'
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Tools</title>
        <meta name="description" content="Access comprehensive resources, tools, and guides for AI automation and autonomous technology implementation." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Tools" />
        <meta property="og:description" content="Access comprehensive resources, tools, and guides for AI automation and autonomous technology implementation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI & Automation Resources
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive resources to help you understand, implement, and optimize AI automation solutions
              </p>
            </header>

            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category
                        ? 'border-cyan-400/50 bg-cyan-400/20 text-cyan-400'
                        : 'border-white/20 text-white/80 hover:border-cyan-400/50 hover:text-cyan-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Featured Resources */}
            {featuredResources.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-white">Featured Resources</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredResources.map(resource => (
                    <div key={resource.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(resource.color)} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                              {resource.category}
                            </span>
                            <span className="text-white/60 text-sm">{resource.type}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                          <p className="text-white/80 mb-4">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-white/60">
                              <span className="mr-4">{resource.size}</span>
                              <span>{resource.downloads.toLocaleString()} downloads</span>
                            </div>
                            <button className="px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300">
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Resources Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-white">
                {selectedCategory === 'All' ? 'All Resources' : `${selectedCategory} Resources`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularResources.map(resource => (
                  <div key={resource.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(resource.color)} rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {resource.icon}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {resource.category}
                      </span>
                      <span className="text-white/60 text-xs">{resource.type}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/60">
                        <span className="mr-3">{resource.size}</span>
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                      <button className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 text-white text-sm font-medium rounded-lg transition-all duration-300">
                        Get Resource
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Tools Section */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Interactive Tools & Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Readiness Assessment</h3>
                  <p className="text-white/80 mb-6">
                    Take our comprehensive assessment to evaluate your organization's readiness for AI automation implementation.
                  </p>
                  <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300">
                    Start Assessment
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">ROI Calculator</h3>
                  <p className="text-white/80 mb-6">
                    Calculate potential cost savings and return on investment for implementing AI automation in your business.
                  </p>
                  <button className="px-6 py-3 bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300">
                    Calculate ROI
                  </button>
                </div>
              </div>
            </section>

            {/* Learning Paths */}
            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                    🚀
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">Beginner</h3>
                  <p className="text-white/70 text-sm text-center mb-4">
                    Start your AI automation journey with fundamentals
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• AI Basics & Concepts</li>
                    <li>• Automation Fundamentals</li>
                    <li>• Use Case Identification</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300">
                    Start Learning
                  </button>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⚡
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2 text-center">Intermediate</h3>
                  <p className="text-white/70 text-sm text-center mb-4">
                    Deep dive into implementation and optimization
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Implementation Strategies</li>
                    <li>• Performance Optimization</li>
                    <li>• Integration Best Practices</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300">
                    Continue Learning
                  </button>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2 text-center">Advanced</h3>
                  <p className="text-white/70 text-sm text-center mb-4">
                    Master advanced concepts and enterprise solutions
                  </p>
                  <ul className="text-white/60 text-xs space-y-1 mb-4">
                    <li>• Enterprise Architecture</li>
                    <li>• Advanced AI Models</li>
                    <li>• Strategic Planning</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300">
                    Master Level
                  </button>
                </div>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated with New Resources</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get notified when we release new tools, guides, and resources for AI automation and autonomous technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Discover our AI and automation solutions</p>
                </Link>
                
                <Link href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">See real success stories and results</p>
                </Link>
                
                <Link href="/blog" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Blog & Insights</h3>
                  <p className="text-white/80 text-sm">Read our latest thoughts and analysis</p>
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your journey with these essential guides and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300 mb-6">{resource.description}</p>
                  <a 
                    href={resource.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized resources to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.href}
                        className="block p-3 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors duration-300"
                      >
                        <div className="font-semibold text-white">{resource.name}</div>
                        <div className="text-sm text-gray-400">{resource.description}</div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fast access to frequently used resources and tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a 
                  href="/support"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                >
                  Visit Support Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;