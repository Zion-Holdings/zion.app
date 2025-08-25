import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle,
  ChevronRight,
  FileText,
  Video,
  Users,
  Settings,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      description: 'New to Zion Tech Group? Start here',
      articles: [
        { title: 'How to Get Started', path: '/help/getting-started', description: 'Complete guide for new users' },
        { title: 'Account Setup', path: '/help/account-setup', description: 'Setting up your account' },
        { title: 'First Project', path: '/help/first-project', description: 'Creating your first project' },
        { title: 'Platform Overview', path: '/help/platform-overview', description: 'Understanding our platform' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'Help with AI and machine learning services',
      articles: [
        { title: 'AI Business Intelligence', path: '/help/ai-bi', description: 'Using AI analytics tools' },
        { title: 'AI Marketing Automation', path: '/help/ai-marketing', description: 'Setting up marketing automation' },
        { title: 'AI HR & Recruitment', path: '/help/ai-hr', description: 'AI-powered talent management' },
        { title: 'AI Legal Tech', path: '/help/ai-legal', description: 'Legal process automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance assistance',
      articles: [
        { title: 'Security Best Practices', path: '/help/security-best-practices', description: 'Keeping your data safe' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meeting regulatory requirements' },
        { title: 'Threat Detection', path: '/help/threat-detection', description: 'Understanding security alerts' },
        { title: 'Incident Response', path: '/help/incident-response', description: 'What to do during security events' }
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'Common Issues', path: '/help/common-issues', description: 'Frequently encountered problems' },
        { title: 'API Documentation', path: '/help/api-docs', description: 'Integration and API usage' },
        { title: 'Performance Optimization', path: '/help/performance', description: 'Improving system performance' },
        { title: 'Backup & Recovery', path: '/help/backup-recovery', description: 'Data protection strategies' }
      ]
    }
  ];

  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, path: '/contact', color: 'from-blue-500 to-cyan-500' },
    { title: 'Live Chat', icon: MessageCircle, path: '/chat', color: 'from-green-500 to-emerald-500' },
    { title: 'Schedule Call', icon: Phone, path: '/schedule', color: 'from-purple-500 to-pink-500' },
    { title: 'Email Support', icon: Mail, path: 'mailto:kleber@ziontechgroup.com', color: 'from-orange-500 to-red-500' }
  ];

  const popularArticles = [
    { title: 'How to Implement AI in Your Business', path: '/help/ai-implementation', category: 'AI Services' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/cybersecurity-checklist', category: 'Cybersecurity' },
    { title: 'Cloud Migration Best Practices', path: '/help/cloud-migration', category: 'Technical Support' },
    { title: 'Setting Up Micro SAAS Solutions', path: '/help/micro-saas-setup', category: 'Getting Started' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Help Center</h1>
              <p className="text-xl text-zion-slate-light">Find answers to your questions and get the support you need</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {action.title}
              </h3>
              <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                <span className="text-sm">Get Help</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <Link
                      key={articleIndex}
                      to={article.path}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-sm text-zion-slate-light">{article.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you with any questions or issues you may have. 
            We're committed to providing you with the best possible support experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Support Team
            </Link>
            <Link
              to="/chat"
              className="bg-white/10 border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Live Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
