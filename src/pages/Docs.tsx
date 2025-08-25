import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Code, Video, Users, Search, ArrowRight, Download, ExternalLink } from 'lucide-react';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-500',
      items: [
        { name: 'Quick Start Guide', path: '/docs/quick-start', description: 'Get up and running in 5 minutes' },
        { name: 'Installation Guide', path: '/docs/installation', description: 'Step-by-step installation instructions' },
        { name: 'First Project', path: '/docs/first-project', description: 'Create your first project with our platform' },
        { name: 'Configuration', path: '/docs/configuration', description: 'Configure your environment and settings' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Authentication', path: '/docs/api/auth', description: 'Learn about API authentication methods' },
        { name: 'Endpoints', path: '/docs/api/endpoints', description: 'Complete list of available API endpoints' },
        { name: 'Rate Limits', path: '/docs/api/rate-limits', description: 'Understanding API rate limits and quotas' },
        { name: 'Error Codes', path: '/docs/api/errors', description: 'Common error codes and troubleshooting' }
      ]
    },
    {
      title: 'User Guides',
      description: 'Detailed guides for specific features and workflows',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'AI Models', path: '/docs/ai-models', description: 'Working with AI models and training' },
        { name: 'Data Management', path: '/docs/data-management', description: 'Managing and organizing your data' },
        { name: 'Deployment', path: '/docs/deployment', description: 'Deploying your applications and models' },
        { name: 'Monitoring', path: '/docs/monitoring', description: 'Monitoring and analytics tools' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      icon: Video,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Platform Overview', path: '/docs/videos/overview', description: 'Complete platform walkthrough' },
        { name: 'AI Development', path: '/docs/videos/ai-development', description: 'Building AI applications' },
        { name: 'Advanced Features', path: '/docs/videos/advanced', description: 'Advanced platform capabilities' },
        { name: 'Best Practices', path: '/docs/videos/best-practices', description: 'Industry best practices' }
      ]
    },
    {
      title: 'Community',
      description: 'Connect with other developers and get help',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { name: 'Forums', path: '/docs/community/forums', description: 'Community discussion forums' },
        { name: 'Discord Server', path: '/docs/community/discord', description: 'Join our Discord community' },
        { name: 'GitHub', path: '/docs/community/github', description: 'Open source projects and examples' },
        { name: 'Events', path: '/docs/community/events', description: 'Upcoming events and meetups' }
      ]
    }
  ];

  const popularDocs = [
    { name: 'AI Model Training Guide', path: '/docs/ai-training', views: '12.5K' },
    { name: 'API Integration Tutorial', path: '/docs/api-integration', views: '8.9K' },
    { name: 'Deployment Best Practices', path: '/docs/deployment-best-practices', views: '7.2K' },
    { name: 'Troubleshooting Common Issues', path: '/docs/troubleshooting', views: '6.8K' },
    { name: 'Performance Optimization', path: '/docs/performance', views: '5.4K' }
  ];

  const resources = [
    { name: 'SDK Downloads', icon: Download, path: '/docs/sdk', description: 'Download SDKs for various platforms' },
    { name: 'Code Examples', icon: Code, path: '/docs/examples', description: 'Ready-to-use code examples' },
    { name: 'API Playground', icon: ExternalLink, path: '/docs/playground', description: 'Interactive API testing tool' },
    { name: 'Changelog', icon: FileText, path: '/docs/changelog', description: 'Latest updates and changes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Developer Resources
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and scale with our AI platform. 
              From quick start guides to advanced API references.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the information you need to succeed with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white group-hover/item:text-cyan-400 transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Most Popular Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these frequently accessed documentation pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={doc.name}
                to={doc.path}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">#{index + 1}</span>
                  <span className="text-sm text-gray-400">{doc.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {doc.name}
                </h3>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Read Guide
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tools and resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                to={resource.path}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-400">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs/community/forums"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Community Forums
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;