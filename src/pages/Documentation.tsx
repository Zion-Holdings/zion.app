import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Code, 
  Database, 
  Shield, 
  Zap,
  ChevronRight,
  ChevronDown,
  FileText,
  Video,
  Download,
  ExternalLink,
  Github,
  Globe,
  Terminal,
  Settings,
  Brain,
  Rocket
} from 'lucide-react';

const Documentation = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and basic setup',
      articles: [
        { title: 'Quick Start Guide', path: '/docs/quick-start', description: 'Get up and running in minutes', readTime: '5 min read' },
        { title: 'Installation Guide', path: '/docs/installation', description: 'Step-by-step installation instructions', readTime: '10 min read' },
        { title: 'First Project', path: '/docs/first-project', description: 'Create your first project', readTime: '15 min read' },
        { title: 'Configuration', path: '/docs/configuration', description: 'Basic configuration settings', readTime: '8 min read' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning service documentation',
      articles: [
        { title: 'AI Business Intelligence', path: '/docs/ai-bi', description: 'AI analytics and insights API', readTime: '20 min read' },
        { title: 'AI Marketing Automation', path: '/docs/ai-marketing', description: 'Marketing automation workflows', readTime: '25 min read' },
        { title: 'AI HR & Recruitment', path: '/docs/ai-hr', description: 'Talent management AI services', readTime: '18 min read' },
        { title: 'AI Legal Tech', path: '/docs/ai-legal', description: 'Legal process automation API', readTime: '22 min read' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', path: '/docs/auth', description: 'API authentication methods', readTime: '12 min read' },
        { title: 'Endpoints', path: '/docs/endpoints', description: 'All available API endpoints', readTime: '30 min read' },
        { title: 'Rate Limits', path: '/docs/rate-limits', description: 'API usage limits and quotas', readTime: '8 min read' },
        { title: 'Error Handling', path: '/docs/errors', description: 'Common errors and solutions', readTime: '15 min read' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance documentation',
      articles: [
        { title: 'Security Best Practices', path: '/docs/security', description: 'Security implementation guidelines', readTime: '20 min read' },
        { title: 'Compliance Standards', path: '/docs/compliance', description: 'SOC2, GDPR, and other standards', readTime: '25 min read' },
        { title: 'Threat Detection', path: '/docs/threat-detection', description: 'Security monitoring setup', readTime: '18 min read' },
        { title: 'Incident Response', path: '/docs/incident-response', description: 'Security incident procedures', readTime: '22 min read' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Database,
      description: 'Cloud services and infrastructure setup',
      articles: [
        { title: 'Cloud Migration', path: '/docs/cloud-migration', description: 'Migrating to cloud infrastructure', readTime: '30 min read' },
        { title: 'DevOps Automation', path: '/docs/devops', description: 'CI/CD and automation setup', readTime: '25 min read' },
        { title: 'Network Configuration', path: '/docs/network', description: 'Network setup and optimization', readTime: '20 min read' },
        { title: 'Monitoring & Logging', path: '/docs/monitoring', description: 'System monitoring and alerting', readTime: '18 min read' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Zap,
      description: 'Third-party integrations and plugins',
      articles: [
        { title: 'CRM Integrations', path: '/docs/crm-integrations', description: 'Salesforce, HubSpot, and more', readTime: '20 min read' },
        { title: 'Payment Gateways', path: '/docs/payment-gateways', description: 'Stripe, PayPal integration', readTime: '18 min read' },
        { title: 'Communication Tools', path: '/docs/communication', description: 'Slack, Teams, email integration', readTime: '15 min read' },
        { title: 'Analytics Platforms', path: '/docs/analytics', description: 'Google Analytics, Mixpanel setup', readTime: '22 min read' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Playground', icon: Terminal, path: '/docs/api-playground', color: 'from-blue-500 to-cyan-500' },
    { title: 'SDK Downloads', icon: Download, path: '/docs/sdks', color: 'from-green-500 to-emerald-500' },
    { title: 'Code Examples', icon: Code, path: '/docs/examples', color: 'from-purple-500 to-pink-500' },
    { title: 'Video Tutorials', icon: Video, path: '/docs/tutorials', color: 'from-orange-500 to-red-500' }
  ];

  const popularDocs = [
    { title: 'Getting Started with AI Services', path: '/docs/ai-getting-started', category: 'AI Services', readTime: '15 min read' },
    { title: 'API Authentication Guide', path: '/docs/api-auth', category: 'API Reference', readTime: '12 min read' },
    { title: 'Security Implementation', path: '/docs/security-implementation', category: 'Cybersecurity', readTime: '25 min read' },
    { title: 'Cloud Migration Checklist', path: '/docs/cloud-checklist', category: 'Cloud & Infrastructure', readTime: '20 min read' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Documentation</h1>
              <p className="text-xl text-zion-slate-light">Comprehensive guides, API references, and tutorials</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search documentation, APIs, and guides..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {link.title}
              </h3>
              <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                <span className="text-sm">Explore</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse Documentation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationSections.map((section) => (
              <div key={section.id} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      <p className="text-zion-slate-light">{section.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                {expandedSections.includes(section.id) && (
                  <div className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <Link
                        key={articleIndex}
                        to={article.path}
                        className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-sm text-zion-slate-light">{article.description}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                              {article.readTime}
                            </span>
                            <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Documentation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                to={doc.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {doc.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {doc.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">{doc.readTime}</span>
                  <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub Repository</h3>
              <p className="text-zion-slate-light mb-4">Access source code and examples</p>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
              <p className="text-zion-slate-light mb-4">Step-by-step video guides</p>
              <Link
                to="/docs/tutorials"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Watch Tutorials
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Developer Portal</h3>
              <p className="text-zion-slate-light mb-4">Advanced developer resources</p>
              <Link
                to="/developer-portal"
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Visit Portal
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;