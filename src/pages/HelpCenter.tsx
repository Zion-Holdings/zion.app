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
                </div>
              ))}
            </div>
          </div>

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