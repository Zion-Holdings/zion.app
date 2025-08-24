import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface HelpArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('getting-started');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: '🚀'
    },
    {
      id: 'account-management',
      title: 'Account Management',
      description: 'Manage your account settings and preferences',
      icon: '⚙️'
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      description: 'Everything about billing, invoices, and payments',
      icon: '💳'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      description: 'Get help with technical issues and troubleshooting',
      icon: '🔧'
    }
  ];

  const popularArticles: HelpArticle[] = [
    {
      id: 1,
      title: 'How to create your first project',
      excerpt: 'Step-by-step guide to setting up your first project in our platform',
      category: 'Getting Started',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Understanding your billing cycle',
      excerpt: 'Learn how our billing works and when you\'ll be charged',
      category: 'Billing',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Troubleshooting common login issues',
      excerpt: 'Solutions to the most common login problems users encounter',
      category: 'Technical Support',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Setting up team collaboration',
      excerpt: 'Configure team settings and invite team members to collaborate',
      category: 'Account Management',
      readTime: '6 min read'
    }
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions and learn how to make the most of our platform.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-lg"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpCategories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer"
              onClick={() => setActiveTab(category.id)}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {helpCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {helpCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="bg-white rounded-lg p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        📖 Read Documentation
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        🎥 Watch Tutorial
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        💬 Contact Support
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Common Questions</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900">How do I get started?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Follow our step-by-step guide to set up your account and first project.
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900">What if I need help?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Our support team is available 24/7 to help you with any questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Popular Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Help Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardDescription>
                    <span className="text-blue-600 font-medium">{article.category}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Contact Support</Button>
              <Button variant="outline">Schedule a Call</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}