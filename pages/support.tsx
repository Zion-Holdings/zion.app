import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  ArrowRight,
  BookOpen,
  Video,
  Headphones,
  Clock,
  Users,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle, color: 'from-cyan-400 to-purple-600' },
    { id: 'ai-consciousness', name: 'AI Consciousness', icon: Brain, color: 'from-purple-400 to-pink-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-blue-400 to-cyan-600' },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket, color: 'from-indigo-400 to-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-orange-600' },
    { id: 'cloud-computing', name: 'Cloud Computing', icon: Cloud, color: 'from-emerald-400 to-teal-600' }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with the AI Consciousness platform?",
      answer: "Getting started with our AI Consciousness platform is straightforward. First, sign up for an account and complete the onboarding process. We'll guide you through setting up your first AI consciousness model, including emotional intelligence parameters and response patterns. Our comprehensive documentation and video tutorials will help you understand the platform's capabilities.",
      category: "ai-consciousness",
      tags: ["Getting Started", "AI Consciousness", "Onboarding"]
    },
    {
      id: 2,
      question: "What are the system requirements for quantum computing simulations?",
      answer: "Our quantum computing platform requires a modern web browser with JavaScript enabled. For optimal performance, we recommend Chrome 90+, Firefox 88+, or Safari 14+. The platform runs entirely in the cloud, so no local installation is needed. We support quantum circuits with up to 100 qubits for simulation and 50 qubits for real quantum hardware execution.",
      category: "quantum-computing",
      tags: ["System Requirements", "Quantum Computing", "Performance"]
    },
    {
      id: 3,
      question: "How secure is the space technology data platform?",
      answer: "Security is our top priority. All data transmitted through our space technology platform is encrypted using AES-256 encryption. We implement multi-factor authentication, role-based access controls, and regular security audits. Our platform complies with SOC 2 Type II, ISO 27001, and GDPR standards. Real-time threat detection and automated incident response ensure your data remains protected.",
      category: "space-technology",
      tags: ["Security", "Data Protection", "Compliance"]
    },
    {
      id: 4,
      question: "What support channels are available for enterprise customers?",
      answer: "Enterprise customers have access to multiple support channels including dedicated account managers, 24/7 phone support, priority email support, and custom training sessions. We also offer on-site consulting, dedicated Slack channels, and quarterly business reviews. Response times are guaranteed based on your service level agreement.",
      category: "general",
      tags: ["Enterprise Support", "Account Management", "SLA"]
    },
    {
      id: 5,
      question: "How do I integrate the cybersecurity API into my existing systems?",
      answer: "Our cybersecurity API is designed for easy integration. We provide SDKs for Python, JavaScript, Java, and Go. The API uses RESTful endpoints with comprehensive documentation and code examples. We offer integration consulting services and can help you implement the API according to your specific security requirements and compliance needs.",
      category: "cybersecurity",
      tags: ["API Integration", "SDK", "Documentation"]
    }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "Getting Started with AI Consciousness",
      description: "Complete guide to setting up and using our AI consciousness platform",
      category: "ai-consciousness",
      readTime: "15 min",
      difficulty: "Beginner",
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Best Practices",
      description: "Learn the best practices for developing quantum algorithms and applications",
      category: "quantum-computing",
      readTime: "25 min",
      difficulty: "Intermediate",
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      featured: true
    },
    {
      id: 3,
      title: "Space Data API Integration",
      description: "Step-by-step guide to integrating our space technology APIs",
      category: "space-technology",
      readTime: "20 min",
      difficulty: "Intermediate",
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      featured: true
    }
  ];

  const contactOptions = [
    {
      id: 1,
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-cyan-400 to-blue-600",
      responseTime: "Immediate",
      availability: "24/7",
      featured: true
    },
    {
      id: 2,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      color: "from-green-400 to-emerald-600",
      responseTime: "Under 5 min",
      availability: "24/7",
      featured: true
    },
    {
      id: 3,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      icon: Mail,
      color: "from-purple-400 to-pink-600",
      responseTime: "Under 4 hours",
      availability: "24/7",
      featured: false
    },
    {
      id: 4,
      title: "Video Call",
      description: "Schedule a screen sharing session with our team",
      icon: Video,
      color: "from-orange-400 to-red-600",
      responseTime: "Under 2 hours",
      availability: "Business Hours",
      featured: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Center
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Get help with our platforms, find answers to common questions, 
                    and connect with our expert support team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or contact options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Get Help Fast
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the support option that works best for you. Our team is available 24/7 to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/support/contact/${option.id}`}>
                    <div className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden ${
                      option.featured ? 'ring-2 ring-cyan-400/30' : ''
                    }`}>
                      <div className="p-8 text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl mb-6`}>
                          <option.icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {option.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {option.description}
                        </p>

                        <div className="space-y-2 text-sm text-gray-400 mb-6">
                          <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Response: {option.responseTime}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>Available: {option.availability}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="font-semibold">Get Help</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Articles */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Help Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive guides and tutorials to help you get the most out of our platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {helpArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/support/articles/${article.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                          <article.icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {article.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{article.difficulty}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="font-semibold">Read Article</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Find quick answers to common questions about our platforms and services.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex items-center justify-center space-x-2 mb-12 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No FAQs Found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or contact our support team directly.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View All FAQs
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Support Options */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                More Ways to Get Help
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Explore additional resources and support channels to find the help you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive technical documentation and API references.
                </p>
                <Link
                  href="/docs"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
                <p className="text-gray-300 mb-6">
                  Step-by-step video guides for all our platforms.
                </p>
                <Link
                  href="/tutorials"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Watch Videos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-6">
                  Connect with other users and share solutions.
                </p>
                <Link
                  href="/community"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert support team is here to help 
                with any questions or technical issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/support/request"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Submit Request
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SupportPage;