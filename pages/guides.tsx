import React from 'react';
import Head from 'next/head';

const Guides: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: 'Getting Started with Zion AI Marketplace',
      category: 'Beginner',
      description: 'Complete beginner guide to using our AI marketplace platform',
      readTime: '15 min',
      difficulty: 'Beginner',
      tags: ['onboarding', 'setup', 'first-steps'],
      featured: true,
    },
    {
      id: 2,
      title: 'Advanced AI Integration Strategies',
      category: 'Advanced',
      description: 'Deep dive into advanced techniques for AI service integration',
      readTime: '45 min',
      difficulty: 'Advanced',
      tags: ['integration', 'advanced', 'workflow'],
      featured: false,
    },
    {
      id: 3,
      title: 'Building Scalable AI Solutions',
      category: 'Intermediate',
      description: 'Learn how to architect AI solutions that grow with your business',
      readTime: '30 min',
      difficulty: 'Intermediate',
      tags: ['architecture', 'scalability', 'best-practices'],
      featured: true,
    },
    {
      id: 4,
      title: 'AI Ethics and Responsible Development',
      category: 'Intermediate',
      description: 'Essential principles for developing ethical AI systems',
      readTime: '25 min',
      difficulty: 'Intermediate',
      tags: ['ethics', 'responsible-ai', 'governance'],
      featured: false,
    },
    {
      id: 5,
      title: 'Optimizing AI Model Performance',
      category: 'Advanced',
      description: 'Practical techniques for improving AI model accuracy and efficiency',
      readTime: '40 min',
      difficulty: 'Advanced',
      tags: ['optimization', 'performance', 'ml'],
      featured: false,
    },
    {
      id: 6,
      title: 'Security Best Practices for AI Systems',
      category: 'Intermediate',
      description: 'Comprehensive security guide for AI marketplace implementations',
      readTime: '35 min',
      difficulty: 'Intermediate',
      tags: ['security', 'compliance', 'best-practices'],
      featured: true,
    },
  ];

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <>
      <Head>
        <title>Guides - Zion AI Marketplace</title>
        <meta name="description" content="Comprehensive guides for AI integration and marketplace success" />
        <meta name="keywords" content="guides, tutorials, AI, marketplace, learning" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Guides & Tutorials
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Master AI integration with our comprehensive guides and tutorials
            </p>
          </div>
        </header>

        {/* Featured Guides */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(guide => guide.featured).map((guide) => (
              <div key={guide.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                  {guide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                    {guide.difficulty}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Read Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Guides */}
        <main className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">All Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <article key={guide.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    guide.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer">
                  {guide.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read Guide →
                </button>
              </article>
            ))}
          </div>
        </main>

        {/* Learning Path */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Learning Path</h2>
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Beginner</h3>
                <p className="text-gray-300 text-sm">Start your AI journey with fundamentals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Intermediate</h3>
                <p className="text-gray-300 text-sm">Build practical AI solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced</h3>
                <p className="text-gray-300 text-sm">Master complex AI architectures</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert</h3>
                <p className="text-gray-300 text-sm">Lead AI innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Need help with a specific topic? Contact our support team</p>
              <p className="mt-2">
                <a href="/contact" className="text-blue-400 hover:text-blue-300">
                  Get Help →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Guides;