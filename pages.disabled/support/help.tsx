import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  HelpCircle, Search, MessageCircle, Phone, Mail, Clock, 
  BookOpen, Video, Users, FileText, ArrowRight, CheckCircle,
  Brain, Atom, Shield, Rocket, Cpu, Database, Globe, Building, Eye
} from 'lucide-react';

const SupportHelpPage: React.FC = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and onboarding resources',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-500',
      articles: [
        'First Steps with Zion Tech Group',
        'Setting Up Your Account',
        'Quick Tour of Features',
        'Common Setup Issues'
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'AI platform setup and troubleshooting',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      articles: [
        'AI Model Configuration',
        'Training Data Setup',
        'Performance Optimization',
        'AI Ethics Guidelines'
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum platform implementation support',
      icon: Atom,
      color: 'from-blue-500 to-indigo-500',
      articles: [
        'Quantum Circuit Design',
        'Quantum Error Correction',
        'Quantum-Classical Integration',
        'Performance Benchmarks'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Security implementation and best practices',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        'Security Configuration',
        'Threat Detection Setup',
        'Compliance Guidelines',
        'Incident Response'
      ]
    },
    {
      title: 'Space Technology',
      description: 'Space tech platform support',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        'Satellite Integration',
        'Data Processing Pipelines',
        'Mission Planning Tools',
        'Ground Station Setup'
      ]
    },
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale deployment support',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      articles: [
        'Enterprise Architecture',
        'Scalability Planning',
        'Integration Services',
        'Custom Development'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up AI Consciousness Evolution',
      category: 'AI & Machine Learning',
      views: '2.5k',
      href: '/ai-consciousness-evolution-2045'
    },
    {
      title: 'Quantum Neural Network Implementation Guide',
      category: 'Quantum Computing',
      views: '1.8k',
      href: '/quantum-neural-network-platform'
    },
    {
      title: 'Space Resource Intelligence Platform Setup',
      category: 'Space Technology',
      views: '1.2k',
      href: '/space-resource-intelligence-2045'
    },
    {
      title: 'Zero Trust Security Architecture',
      category: 'Cybersecurity',
      views: '3.1k',
      href: '/zero-trust-network-architecture-platform'
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-500',
      availability: '24/7',
      response: '< 2 minutes'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-500',
      availability: 'Mon-Fri 9AM-6PM EST',
      response: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Detailed technical assistance',
      icon: Mail,
      color: 'from-purple-500 to-pink-500',
      availability: '24/7',
      response: '< 4 hours'
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help and support for all Zion Tech Group products and services. Find answers, contact support, and access comprehensive documentation." />
        <meta name="keywords" content="help center, support, documentation, troubleshooting, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/support/help" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-cyan-500/25 flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Find answers to your questions, troubleshoot issues, and get expert support 
              for all Zion Tech Group products and services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Support
              </Link>
              <Link href="/resources" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Browse Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Help Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find help organized by product category and topic area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {article}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/support/${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="font-medium">View All Articles</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Help Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Most viewed and helpful articles from our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple ways to reach our support team for personalized assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{method.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {method.availability}
                    </div>
                    <div className="flex items-center justify-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {method.response} response
                    </div>
                  </div>
                  
                  <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Get Help
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our expert support team is ready to assist you with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Support Team
              </Link>
              <Link href="/support" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Support Center
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportHelpPage;