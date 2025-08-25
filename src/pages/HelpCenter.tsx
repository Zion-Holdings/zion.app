<<<<<<< HEAD
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: "🚀",
      articles: ["Quick Start Guide", "Account Setup", "First Steps"]
    },
    {
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription",
      icon: "💳",
      articles: ["Update Billing Info", "Change Plan", "Cancel Subscription"]
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      icon: "🔧",
      articles: ["Common Issues", "Error Messages", "Performance Tips"]
    },
    {
      title: "API & Integration",
      description: "Learn how to integrate with our APIs and services",
      icon: "🔌",
      articles: ["API Documentation", "Authentication", "Webhooks"]
    }
  ];

  const popularArticles = [
    {
      title: "How to set up your first project",
      description: "Step-by-step guide to creating your first project in Zion Tech Group",
      readTime: "5 min read"
    },
    {
      title: "Understanding AI service pricing",
      description: "Learn about our pricing structure and how to optimize costs",
      readTime: "8 min read"
    },
    {
      title: "Security best practices",
      description: "Essential security measures to protect your data and applications",
      readTime: "10 min read"
    },
    {
      title: "Troubleshooting common errors",
      description: "Solutions to the most frequently encountered issues",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Help <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our services, and get the support you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} onClick={() => console.log(`Navigate to ${category.title}`)}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                            • {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} onClick={() => console.log(`Read article: ${article.title}`)}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-xl text-white hover:text-cyan-400 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{article.readTime}</span>
                        <span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                          Read more →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
=======
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
              How can we <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-blue-light/30 rounded-xl text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  )}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD

          {/* Contact Support */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4 bg-zion-blue-light/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                  <Link
                    to={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-zion-slate-light text-sm mb-4">Get instant help from our support team</p>
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Send us a detailed message</p>
                <Link
                  to="/contact"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Send Email
                </Link>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
