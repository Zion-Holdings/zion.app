import React from 'react';
import Head from 'next/head';

const ContentHub = () => {
  return (
    <>
      <Head>
        <title>Content Hub - Zion.app</title>
        <meta name="description" content="Centralized content management and creation hub for Zion.app platform" />
        <meta name="keywords" content="content, hub, management, creation, Zion, AI" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Hub
              </h1>
              <p className="text-xl text-gray-300">
                Centralized content management and AI-powered creation platform
              </p>
            </header>

            <div className="grid gap-8">
              {/* Content Overview */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Overview</h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">2,960</div>
                    <div className="text-gray-300">Total Pages</div>
                    <div className="text-xs text-green-400 mt-1">+156 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">847</div>
                    <div className="text-gray-300">Blog Posts</div>
                    <div className="text-xs text-blue-400 mt-1">+23 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
                    <div className="text-gray-300">Services</div>
                    <div className="text-xs text-purple-400 mt-1">+8 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">98.2%</div>
                    <div className="text-gray-300">SEO Score</div>
                    <div className="text-xs text-green-400 mt-1">+2.1% this month</div>
                  </div>
                </div>
              </section>

              {/* AI Content Creation */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">AI Content Creation</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Generation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Content Factory</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Image Generation</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content Scheduling</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Recent Creations</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">New service page: AI Consulting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Blog post: Future of AI in 2025</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Landing page: Enterprise Solutions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Case study: Startup Success Story</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Create New Content
                  </button>
                </div>
              </section>

              {/* Content Categories */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Categories</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Services</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Development</span>
                        <span className="text-blue-400">24 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Cloud Solutions</span>
                        <span className="text-blue-400">18 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Consulting</span>
                        <span className="text-blue-400">15 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Training</span>
                        <span className="text-blue-400">12 pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Blog</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Technology</span>
                        <span className="text-blue-400">156 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Industry News</span>
                        <span className="text-blue-400">89 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Tutorials</span>
                        <span className="text-blue-400">67 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Case Studies</span>
                        <span className="text-blue-400">45 posts</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Resources</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Whitepapers</span>
                        <span className="text-blue-400">23 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">E-books</span>
                        <span className="text-blue-400">18 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Templates</span>
                        <span className="text-blue-400">34 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Guides</span>
                        <span className="text-blue-400">56 docs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Performance */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Performance</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Top Performing Content</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Automation Guide</span>
                        <span className="text-green-400">15.2K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Cloud Migration Tips</span>
                        <span className="text-green-400">12.8K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Future of AI 2025</span>
                        <span className="text-green-400">11.5K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Startup Success Story</span>
                        <span className="text-green-400">9.7K views</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">SEO Performance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Organic Traffic</span>
                        <span className="text-green-400">+23%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Keyword Rankings</span>
                        <span className="text-green-400">+156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Backlinks</span>
                        <span className="text-green-400">+89</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Page Speed</span>
                        <span className="text-green-400">+15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Calendar */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Calendar</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">This Week</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">Monday: AI Trends Blog Post</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Wednesday: Service Page Update</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Friday: Case Study Publication</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Next Week</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-300">Monday: Whitepaper Release</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-gray-300">Wednesday: Newsletter</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-300">Friday: Video Content</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Schedule Content
                  </button>
                </div>
              </section>

              {/* Content Tools */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Tools</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <h3 className="font-medium text-green-400 mb-2">AI Writer</h3>
                    <p className="text-sm text-gray-300 mb-3">Generate high-quality content with AI assistance</p>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
                      Start Writing
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="font-medium text-green-400 mb-2">SEO Analyzer</h3>
                    <p className="text-sm text-gray-300 mb-3">Optimize content for search engines</p>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors">
                      Analyze Content
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="font-medium text-green-400 mb-2">Analytics</h3>
                    <p className="text-sm text-gray-300 mb-3">Track content performance and engagement</p>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors">
                      View Reports
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🖼️</div>
                    <h3 className="font-medium text-green-400 mb-2">Image Generator</h3>
                    <p className="text-sm text-gray-300 mb-3">Create custom images with AI</p>
                    <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm transition-colors">
                      Generate Image
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📅</div>
                    <h3 className="font-medium text-green-400 mb-2">Scheduler</h3>
                    <p className="text-sm text-gray-300 mb-3">Plan and schedule content publication</p>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors">
                      Schedule
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🔗</div>
                    <h3 className="font-medium text-green-400 mb-2">Link Manager</h3>
                    <p className="text-sm text-gray-300 mb-3">Manage internal and external links</p>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition-colors">
                      Manage Links
                    </button>
                  </div>
                </div>
              </section>

              {/* Content Insights */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Insights</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Trends</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI-related content</span>
                        <span className="text-green-400">+45% engagement</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Video content</span>
                        <span className="text-green-400">+67% views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Interactive guides</span>
                        <span className="text-green-400">+34% time on page</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Case studies</span>
                        <span className="text-green-400">+28% conversions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Audience Insights</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Primary audience</span>
                        <span className="text-blue-400">Tech professionals</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Preferred format</span>
                        <span className="text-blue-400">Long-form content</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Peak engagement</span>
                        <span className="text-blue-400">Tuesday 10AM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content length</span>
                        <span className="text-blue-400">1500-2500 words</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Ready to Create Amazing Content?</h2>
                <p className="text-gray-300 mb-6">
                  Start building your content strategy with our AI-powered tools and comprehensive management platform
                </p>
                <div className="space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Get Started
                  </a>
                  <a 
                    href="/blog" 
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    View Blog
                  </a>
                  <a 
                    href="/services" 
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Explore Services
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHub;