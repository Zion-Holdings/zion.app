import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  HelpCircle, MessageCircle, Phone, Mail, Search,
  BookOpen, FileText, Video, Headphones, Clock
} from 'lucide-react';

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Consciousness',
      description: 'Get help with AI consciousness platforms and neural networks',
      articles: 25,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Technology',
      description: 'Support for quantum computing and quantum security solutions',
      articles: 18,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Help with space resource intelligence and exploration systems',
      articles: 12,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Solutions',
      description: 'Support for enterprise AI and autonomous systems',
      articles: 30,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const commonIssues = [
    {
      question: 'How do I integrate AI consciousness into my existing systems?',
      answer: 'Our AI consciousness platform is designed for seamless integration with existing infrastructure. We provide comprehensive APIs, SDKs, and documentation to ensure smooth deployment.',
      category: 'AI & Consciousness'
    },
    {
      question: 'What quantum-resistant security measures do you offer?',
      answer: 'We provide quantum-resistant encryption algorithms, post-quantum cryptography standards, and AI-powered threat detection systems that protect against both current and future quantum threats.',
      category: 'Quantum Technology'
    },
    {
      question: 'How does your space resource intelligence system work?',
      answer: 'Our space resource intelligence platform uses advanced AI algorithms to analyze satellite data, identify valuable resources, and provide autonomous decision-making for space exploration missions.',
      category: 'Space Technology'
    },
    {
      question: 'What support do you offer for enterprise deployments?',
      answer: 'We provide 24/7 technical support, dedicated account managers, custom training programs, and comprehensive documentation for all enterprise deployments.',
      category: 'Enterprise Solutions'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Calls',
      description: 'Schedule screen-sharing sessions with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: '< 24 hours',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Documentation',
      description: 'Comprehensive technical documentation and API references',
      link: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our platforms',
      link: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      link: '/community',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Get the help you need with our revolutionary AI consciousness, quantum computing, 
              and space technology solutions. Our expert team is here to support your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find support resources organized by technology area
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our technology
            </p>
          </motion.div>

          <div className="space-y-6">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-black/30 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{issue.question}</h3>
                      <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {issue.category}
                      </span>
                    </div>
                    <p className="text-gray-300">{issue.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to connect with our expert support team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">Availability: {channel.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">Response: {channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Help
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive documentation and learning materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm">Access Resource</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is ready to assist you with any questions or technical challenges. 
              Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
              <p className="text-gray-300 mb-4">
                For critical issues affecting production systems, we offer emergency support with guaranteed response times.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300">Response: &lt; 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">24/7 Availability</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}