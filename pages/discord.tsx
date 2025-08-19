import React from 'react';
import Head from 'next/head';

const Discord: React.FC = () => {
  const channels = [
    {
      name: 'general',
      description: 'General discussion about Zion AI Marketplace',
      members: 1250,
      online: 89,
      icon: '💬',
    },
    {
      name: 'api-support',
      description: 'Get help with API integration and development',
      members: 890,
      online: 45,
      icon: '🔧',
    },
    {
      name: 'ai-discussions',
      description: 'Discuss AI trends, technologies, and use cases',
      members: 2100,
      online: 156,
      icon: '🤖',
    },
    {
      name: 'marketplace',
      description: 'Share marketplace experiences and feedback',
      members: 750,
      online: 32,
      icon: '🏪',
    },
    {
      name: 'showcase',
      description: 'Show off your AI projects and integrations',
      members: 680,
      online: 28,
      icon: '🎨',
    },
    {
      name: 'events',
      description: 'Stay updated on upcoming events and webinars',
      members: 1200,
      online: 67,
      icon: '📅',
    },
  ];

  const roles = [
    { name: 'Community Member', color: 'bg-gray-600', description: 'Basic access to community channels' },
    { name: 'Developer', color: 'bg-blue-600', description: 'Access to technical channels and resources' },
    { name: 'AI Expert', color: 'bg-purple-600', description: 'Access to advanced AI discussions' },
    { name: 'Marketplace Partner', color: 'bg-green-600', description: 'Special access for marketplace partners' },
    { name: 'Moderator', color: 'bg-yellow-600', description: 'Community moderation and support' },
  ];

  return (
    <>
      <Head>
        <title>Discord Community - Zion AI Marketplace</title>
        <meta name="description" content="Join our Discord community for AI discussions, support, and networking" />
        <meta name="keywords" content="discord, community, AI, support, networking" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Discord Community
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  Join thousands of AI enthusiasts, developers, and professionals
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-6xl mb-4">🎮</div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Community Stats */}
        <section className="container mx-auto px-6 py-12">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30 text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Community Overview</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">5,000+</div>
                <div className="text-gray-300">Total Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Active Channels</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Daily Messages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Channels */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Popular Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{channel.icon}</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{channel.online} online</div>
                    <div className="text-xs text-gray-500">{channel.members} members</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">#{channel.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                    Active
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Join Channel →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Roles */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Community Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
                <div className={`w-4 h-4 ${role.color} rounded-full mb-4`}></div>
                <h3 className="text-lg font-semibold text-white mb-2">{role.name}</h3>
                <p className="text-gray-300 text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What You'll Find */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">What You'll Find</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Insights</h3>
              <p className="text-gray-300 text-sm">Learn from AI professionals and industry experts</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
              <p className="text-gray-300 text-sm">Get help with integration and development issues</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Networking</h3>
              <p className="text-gray-300 text-sm">Connect with like-minded professionals</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Latest Updates</h3>
              <p className="text-gray-300 text-sm">Stay informed about new features and releases</p>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Connect with thousands of AI enthusiasts, get instant support, and stay updated on the latest developments in AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Discord Server
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Rules
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              Free to join • No registration required • Instant access
            </p>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Be Respectful</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Treat all members with kindness and respect</li>
                <li>• No harassment, hate speech, or discrimination</li>
                <li>• Be constructive in feedback and discussions</li>
                <li>• Respect different opinions and perspectives</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Stay On Topic</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Use appropriate channels for discussions</li>
                <li>• Keep conversations relevant to AI and technology</li>
                <li>• No spam or excessive self-promotion</li>
                <li>• Share valuable insights and knowledge</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Questions about the community? Contact our community managers</p>
              <p className="mt-2">
                <a href="/contact" className="text-blue-400 hover:text-blue-300">
                  Get in Touch →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Discord;