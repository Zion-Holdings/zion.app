import React from 'react';
import { SEO } from '@/components/SEO';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: "🚀",
      articles: [
        "How to create your first project",
        "Understanding our development process",
        "Setting up your development environment",
        "First steps with Zion Tech Group"
      ]
    },
    {
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription",
      icon: "💳",
      articles: [
        "Creating and managing your account",
        "Understanding billing and pricing",
        "Updating payment methods",
        "Canceling or modifying services"
      ]
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      icon: "🔧",
      articles: [
        "Common technical issues and solutions",
        "Performance optimization tips",
        "Security best practices",
        "API documentation and integration"
      ]
    },
    {
      title: "Project Management",
      description: "Learn how to manage your projects effectively",
      icon: "📋",
      articles: [
        "Project planning and scoping",
        "Timeline management and milestones",
        "Communication with development team",
        "Quality assurance and testing"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Resources for AI and ML projects",
      icon: "🤖",
      articles: [
        "AI model training and deployment",
        "Data preparation and preprocessing",
        "Model evaluation and optimization",
        "AI ethics and best practices"
      ]
    },
    {
      title: "Web & Mobile Development",
      description: "Guidance for web and mobile projects",
      icon: "📱",
      articles: [
        "Frontend development best practices",
        "Backend architecture patterns",
        "Mobile app development guidelines",
        "Responsive design principles"
      ]
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get in touch with our support team",
      action: "Contact Us",
      href: "/contact"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      href: "#"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive documentation",
      action: "View Docs",
      href: "#"
    },
    {
      title: "Community Forum",
      description: "Connect with other developers",
      action: "Join Forum",
      href: "#"
    }
  ];

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group Support"
        description="Get help and support for all your Zion Tech Group services. Find documentation, tutorials, and contact our support team."
        canonical="/help-center"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Help Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Find answers to your questions, learn best practices, and get the support you need to succeed with Zion Tech Group.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white text-center mb-8">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {quickActions.map((action, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {action.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      {action.description}
                    </p>
                    <a
                      href={action.href}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {action.action}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white text-center mb-8">
                Browse Help Topics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {helpCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a
                            href="#"
                            className="text-blue-300 hover:text-blue-200 text-sm transition-colors duration-200 block"
                          >
                            {article}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Options */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Need More Help?
                </h2>
                <p className="text-blue-100 mb-6">
                  Our support team is available 24/7 to help you with any questions or issues you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/faq"
                    className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    View FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HelpCenter;