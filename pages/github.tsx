import React, { useState } from 'react';
import Head from 'next/head';

const GitHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Discussions', icon: '💬' },
    { id: 'announcements', name: 'Announcements', icon: '📢' },
    { id: 'general', name: 'General', icon: '🌐' },
    { id: 'ideas', name: 'Ideas', icon: '💡' },
    { id: 'help', name: 'Help', icon: '❓' },
    { id: 'showcase', name: 'Showcase', icon: '🎨' },
  ];

  const discussions = [
    {
      id: 1,
      title: 'New AI Model Integration API Released',
      category: 'announcements',
      author: 'Zion Team',
      authorAvatar: '👨‍💼',
      replies: 45,
      views: 1200,
      lastActivity: '2 hours ago',
      status: 'pinned',
      tags: ['api', 'release', 'ai-models'],
    },
    {
      id: 2,
      title: 'How to optimize API response times?',
      category: 'help',
      author: 'DevUser123',
      authorAvatar: '👩‍💻',
      replies: 23,
      views: 890,
      lastActivity: '5 hours ago',
      status: 'active',
      tags: ['performance', 'optimization', 'api'],
    },
    {
      id: 3,
      title: 'Feature Request: Batch Processing for Multiple AI Services',
      category: 'ideas',
      author: 'AIEnthusiast',
      authorAvatar: '🤖',
      replies: 67,
      views: 2100,
      lastActivity: '1 day ago',
      status: 'active',
      tags: ['feature-request', 'batch-processing', 'ai-services'],
    },
    {
      id: 4,
      title: 'Showcase: AI-Powered Customer Support Bot',
      category: 'showcase',
      author: 'TechStartup',
      authorAvatar: '🚀',
      replies: 34,
      views: 1560,
      lastActivity: '2 days ago',
      status: 'active',
      tags: ['showcase', 'chatbot', 'customer-support'],
    },
    {
      id: 5,
      title: 'Discussion: Future of AI in Healthcare',
      category: 'general',
      author: 'HealthTech',
      authorAvatar: '🏥',
      replies: 89,
      views: 3400,
      lastActivity: '3 days ago',
      status: 'active',
      tags: ['healthcare', 'ai-future', 'discussion'],
    },
    {
      id: 6,
      title: 'Troubleshooting: Webhook Delivery Issues',
      category: 'help',
      author: 'WebhookDev',
      authorAvatar: '🔗',
      replies: 12,
      views: 450,
      lastActivity: '4 days ago',
      status: 'resolved',
      tags: ['webhooks', 'troubleshooting', 'integration'],
    },
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    activeCategory === 'all' || discussion.category === activeCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pinned': return 'bg-yellow-600 text-white';
      case 'active': return 'bg-green-600 text-white';
      case 'resolved': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <>
      <Head>
        <title>GitHub Discussions - Zion AI Marketplace</title>
        <meta name="description" content="Join GitHub discussions about AI integration, development, and marketplace features" />
        <meta name="keywords" content="github, discussions, AI, development, community" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GitHub Discussions
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  Join the conversation about AI development and marketplace features
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-6xl mb-4">🐙</div>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600">
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Discussion Stats */}
        <section className="container mx-auto px-6 py-12">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30 text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Community Activity</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">2,500+</div>
                <div className="text-gray-300">Total Discussions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">15,000+</div>
                <div className="text-gray-300">Total Replies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-gray-300">Total Views</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Discussion Categories</h2>
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
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Discussions List */}
        <main className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-400">
              {activeCategory === 'all' ? 'All Discussions' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start New Discussion
            </button>
          </div>
          
          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <article key={discussion.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{discussion.authorAvatar}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(discussion.status)}`}>
                        {discussion.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>By {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        💬 {discussion.replies} replies
                      </span>
                      <span className="flex items-center gap-1">
                        👁️ {discussion.views} views
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 font-medium">
                        View Discussion →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Popular Topics */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Popular Discussion Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">API Integration</h3>
              <p className="text-gray-300 text-sm">Get help with API integration and development</p>
              <div className="mt-4">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  500+ discussions
                </span>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Models</h3>
              <p className="text-gray-300 text-sm">Discuss AI models and their applications</p>
              <div className="mt-4">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  300+ discussions
                </span>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Troubleshooting</h3>
              <p className="text-gray-300 text-sm">Find solutions to common issues</p>
              <div className="mt-4">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  400+ discussions
                </span>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Feature Requests</h3>
              <p className="text-gray-300 text-sm">Suggest new features and improvements</p>
              <div className="mt-4">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  200+ discussions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-center border border-gray-600">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Contribute?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of developers and AI enthusiasts in discussions about the future of AI technology. 
              Share your knowledge, ask questions, and help shape the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join GitHub Discussions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                View Guidelines
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Free to participate • Open source community • Developer friendly
            </p>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Be Constructive</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Provide helpful and constructive feedback</li>
                <li>• Ask clear, specific questions</li>
                <li>• Share code examples when possible</li>
                <li>• Respect different skill levels</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Stay Organized</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Use appropriate categories for posts</li>
                <li>• Tag discussions with relevant topics</li>
                <li>• Search before starting new discussions</li>
                <li>• Mark solutions as resolved</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help with GitHub discussions? Contact our community team</p>
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

export default GitHub;