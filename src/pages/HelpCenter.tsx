import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Users, Globe } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle, count: 25 },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, count: 8 },
    { id: 'ai-services', name: 'AI Services', icon: Users, count: 6 },
    { id: 'technical-support', name: 'Technical Support', icon: Globe, count: 7 },
    { id: 'billing', name: 'Billing & Pricing', icon: FileText, count: 4 }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
    },
    {
      category: 'getting-started',
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including AI & Autonomous Systems, Quantum Technology, Cybersecurity, IT Infrastructure, Micro SAAS Solutions, and Industry-specific solutions. Visit our services page for detailed information."
    },
    {
      category: 'ai-services',
      question: "How does your AI autonomous systems work?",
      answer: "Our AI autonomous systems use advanced machine learning algorithms to automate complex business processes. They continuously learn and adapt to optimize performance, reduce costs, and improve efficiency across your organization."
    },
    {
      category: 'ai-services',
      question: "What is quantum neural network technology?",
      answer: "Quantum neural networks combine quantum computing principles with neural network architectures to solve complex problems that are beyond the capabilities of classical computers. This technology is particularly effective for optimization, simulation, and machine learning tasks."
    },
    {
      category: 'technical-support',
      question: "What kind of technical support do you provide?",
      answer: "We provide comprehensive technical support including 24/7 monitoring, real-time issue resolution, preventive maintenance, and dedicated support teams. Our support covers all aspects of our services and solutions."
    },
    {
      category: 'technical-support',
      question: "How do you ensure data security and compliance?",
      answer: "We implement enterprise-grade security measures including quantum-safe encryption, SOC2 compliance automation, and continuous security monitoring. All our solutions are designed with security and compliance as top priorities."
    },
    {
      category: 'billing',
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs and requirements."
    },
    {
      category: 'billing',
      question: "Do you offer free trials or demos?",
      answer: "Yes! We offer free trials for many of our services and can arrange personalized demos to show you how our solutions can benefit your business. Contact us to schedule a demo or start a free trial."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      contact: "+1 302 464 0950",
      availability: "24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@ziontechgroup.com",
      availability: "Response within 4 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Business hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help & Support
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, get technical support, and learn how to make the most of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {channel.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-cyan-400 font-semibold">
                      {channel.contact}
                    </div>
                    <div className="text-sm text-gray-400">
                      {channel.availability}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find help articles organized by topic and service area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-center ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cyan-400 text-sm">
                    {category.count} articles
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services and solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-300">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you succeed with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
