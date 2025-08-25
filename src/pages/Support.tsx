import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, FileText, Users, Search, Send, CheckCircle } from 'lucide-react';

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportCategories = [
    { id: 'general', name: 'General Support', icon: MessageCircle, description: 'General questions and assistance' },
    { id: 'technical', name: 'Technical Support', icon: FileText, description: 'Technical issues and troubleshooting' },
    { id: 'billing', name: 'Billing & Payments', icon: CheckCircle, description: 'Billing questions and payment issues' },
    { id: 'feature', name: 'Feature Requests', icon: Users, description: 'Suggest new features or improvements' }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including autonomous systems, machine learning solutions, AI research assistance, and custom AI development for your specific business needs.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 monitoring and support for critical systems. Our support team is available during business hours, and we have emergency response procedures for urgent issues.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setMessage('');
    // In a real application, this would send the message to a backend service
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help you succeed with Zion Tech Group solutions
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 text-center">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300 mb-4">Speak directly with our support team</p>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              +1 (302) 464-0950
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6 text-center">
            <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">Send us a detailed message</p>
            <a 
              href="mailto:support@ziontechgroup.com" 
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              support@ziontechgroup.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 text-center">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
            <p className="text-gray-300 mb-4">Monday - Friday</p>
            <p className="text-cyan-400 font-medium">9:00 AM - 6:00 PM EST</p>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <Icon className={`w-8 h-8 mt-1 ${
                      selectedCategory === category.id ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Please describe your question or issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-600 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300 mb-4">Access our comprehensive documentation and user guides</p>
              <a href="/docs" className="text-cyan-400 hover:text-cyan-300 font-medium">
                View Documentation →
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">Help Center</h3>
              <p className="text-gray-300 mb-4">Browse our help articles and troubleshooting guides</p>
              <a href="/help" className="text-purple-400 hover:text-purple-300 font-medium">
                Visit Help Center →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;