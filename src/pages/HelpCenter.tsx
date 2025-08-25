import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap
} from 'lucide-react';

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'New to Zion Tech Group? Start here to learn the basics.',
      articles: [
        'Welcome to Zion Tech Group',
        'How to Get Started',
        'Understanding Our Services',
        'First Project Setup'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks and features.',
      articles: [
        'Platform Overview',
        'Service Request Process',
        'Project Management Tools',
        'Support System Usage'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation.',
      articles: [
        'API Documentation',
        'Integration Guides',
        'Best Practices',
        'Troubleshooting'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Support Resources',
      description: 'Get help when you need it most.',
      articles: [
        'Contact Support',
        'Live Chat',
        'Emergency Contacts',
        'Support Hours'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak directly with our team',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help online',
      action: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Check Status',
      description: 'Monitor your project status',
      action: '/status',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const popularArticles = [
    {
      title: 'How to Request a New Service',
      description: 'Step-by-step guide to requesting new services from our team.',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      title: 'Understanding Our Pricing Structure',
      description: 'Learn about our flexible pricing models and payment options.',
      category: 'Billing',
      readTime: '8 min read'
    },
    {
      title: 'Project Timeline and Milestones',
      description: 'How we manage project timelines and what to expect.',
      category: 'Project Management',
      readTime: '6 min read'
    },
    {
      title: 'Security and Compliance Standards',
      description: 'Our security measures and compliance certifications.',
      category: 'Security',
      readTime: '7 min read'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers, learn how to use our services, and get the support you need. 
              Everything you need to succeed with Zion Tech Group is right here.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick Actions
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Get help quickly with these direct actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${action.color} rounded-xl p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-white/70 text-sm mb-4">{action.description}</p>
                <a
                  href={action.action}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Browse organized help content by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl p-3 mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.articles.map((article) => (
                    <div key={article} className="flex items-center text-sm text-white/70 hover:text-cyan-400 transition-colors cursor-pointer">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {article}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Explore {category.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Most frequently accessed help content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-white/50 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">{article.description}</p>
                
                <Link
                  to={`/help/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our support team is here to help you succeed. We offer multiple ways to get assistance 
                and ensure you have the resources you need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-white/70">Round-the-clock assistance for critical issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-white/70">Certified professionals ready to help</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
                    <p className="text-white/70">Average response time of 2 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Support</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        Call Support
                      </div>
                      <div className="text-white/70 text-sm">+1 (302) 464-0950</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        Email Support
                      </div>
                      <div className="text-white/70 text-sm">kleber@ziontechgroup.com</div>
                    </div>
                  </a>
                  
                  <Link
                    to="/contact"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <MessageSquare className="w-6 h-6 text-green-400 mr-4" />
                    <div>
                      <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                        Contact Form
                      </div>
                      <div className="text-white/70 text-sm">Send us a detailed message</div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}