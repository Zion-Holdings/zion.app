import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageSquare, Phone, Mail, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'How to create your first account', href: '/help/create-account' },
        { title: 'Complete profile setup guide', href: '/help/profile-setup' },
        { title: 'Understanding the marketplace', href: '/help/marketplace-guide' },
        { title: 'First steps for new users', href: '/help/first-steps' }
      ]
    },
    'marketplace': {
      title: 'Marketplace',
      icon: BookOpen,
      articles: [
        { title: 'How to list products and services', href: '/help/list-products' },
        { title: 'Managing your listings', href: '/help/manage-listings' },
        { title: 'Understanding pricing and fees', href: '/help/pricing-fees' },
        { title: 'Marketplace policies and guidelines', href: '/help/marketplace-policies' }
      ]
    },
    'talent': {
      title: 'Talent & Hiring',
      icon: BookOpen,
      articles: [
        { title: 'Creating a talent profile', href: '/help/talent-profile' },
        { title: 'Finding and hiring talent', href: '/help/hire-talent' },
        { title: 'Managing projects and contracts', href: '/help/manage-projects' },
        { title: 'Payment and escrow system', href: '/help/payment-system' }
      ]
    },
    'technical': {
      title: 'Technical Support',
      icon: BookOpen,
      articles: [
        { title: 'Common technical issues', href: '/help/technical-issues' },
        { title: 'Browser compatibility', href: '/help/browser-compatibility' },
        { title: 'Mobile app troubleshooting', href: '/help/mobile-troubleshooting' },
        { title: 'API and integration support', href: '/help/api-support' }
      ]
    },
    'billing': {
      title: 'Billing & Payments',
      icon: BookOpen,
      articles: [
        { title: 'Understanding your invoice', href: '/help/invoice-guide' },
        { title: 'Payment methods and security', href: '/help/payment-methods' },
        { title: 'Refund and cancellation policy', href: '/help/refund-policy' },
        { title: 'Tax information and reporting', href: '/help/tax-information' }
      ]
    },
    'account': {
      title: 'Account & Security',
      icon: BookOpen,
      articles: [
        { title: 'Account security best practices', href: '/help/account-security' },
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        { title: 'Password reset and recovery', href: '/help/password-recovery' },
        { title: 'Privacy settings and data control', href: '/help/privacy-settings' }
      ]
    }
  };

  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's platform. Find answers to common questions, tutorials, and contact information." />
        <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Help</span> Center
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, learn how to use our platform, and get the support you need.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/contact"
                className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <MessageSquare className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light">Get instant help from our support team</p>
              </Link>

              <Link
                to="/contact"
                className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light">Call us for immediate assistance</p>
              </Link>

              <Link
                to="/contact"
                className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-zion-slate-light">Send us a detailed message</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Help Categories</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {Object.entries(helpCategories).map(([key, category]) => {
                const Icon = category.icon;
                const isExpanded = expandedCategories.includes(key);
                
                return (
                  <div key={key} className="bg-zion-blue-light/20 rounded-xl border border-zion-purple/30 overflow-hidden">
                    <button
                      onClick={() => toggleCategory(key)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-zion-purple/10 transition-colors"
                    >
                      <div className="flex items-center">
                        <Icon className="w-6 h-6 text-zion-cyan mr-4" />
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-zion-cyan" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-zion-cyan" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="space-y-3">
                          {category.articles.map((article, index) => (
                            <Link
                              key={index}
                              to={article.href}
                              className="block p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                                  {article.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors opacity-0 group-hover:opacity-100 transition-all" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Articles</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {popularArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                        {article}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  to="/help/feedback"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Feedback
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}