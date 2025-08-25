import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

const HelpCenter = () => {
  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      link: "/help/getting-started"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Account & Billing",
      description: "Manage your account and billing information",
      link: "/help/account-billing"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "Detailed guides and API documentation",
      link: "/help/documentation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Management",
      description: "Manage team members and permissions",
      link: "/help/user-management"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Platform Features",
      description: "Learn about advanced features and settings",
      link: "/help/platform-features"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Services",
      description: "Understanding our AI-powered solutions",
      link: "/help/ai-services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Security best practices and privacy information",
      link: "/help/security-privacy"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Integration Guides",
      description: "Connect with third-party tools and services",
      link: "/help/integrations"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Understanding your data and insights",
      link: "/help/analytics"
    }
  ];

  const popularArticles = [
    {
      title: "How to set up your first AI agent",
      description: "Step-by-step guide to creating and configuring AI agents",
      link: "/help/setup-ai-agent"
    },
    {
      title: "Understanding micro SAAS pricing",
      description: "Learn about our flexible pricing structure and plans",
      link: "/help/micro-saas-pricing"
    },
    {
      title: "API authentication best practices",
      description: "Secure your API integrations with proper authentication",
      link: "/help/api-authentication"
    },
    {
      title: "Troubleshooting common issues",
      description: "Solutions to frequently encountered problems",
      link: "/help/troubleshooting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to your questions, learn how to use our platform, and get the most out of Zion Tech Group's services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and more..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Browse Help Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Link 
                to={category.link}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Popular Help Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                <Link 
                  to={article.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read article
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Support
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;