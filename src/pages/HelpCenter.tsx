import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Search, HelpCircle, MessageCircle, BookOpen, Users, Settings, Shield, Zap, Globe, Phone } from 'lucide-react';

interface HelpArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  lastUpdated: string;
}

interface HelpCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  articleCount: number;
}

const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Learn the basics of using Zion Tech Group',
    icon: <BookOpen className="w-6 h-6" />,
    articleCount: 8
  },
  {
    id: 'account-management',
    name: 'Account Management',
    description: 'Manage your profile, settings, and preferences',
    icon: <Users className="w-6 h-6" />,
    articleCount: 12
  },
  {
    id: 'services',
    name: 'Services & Solutions',
    description: 'Information about our tech services and solutions',
    icon: <Zap className="w-6 h-6" />,
    articleCount: 15
  },
  {
    id: 'security',
    name: 'Security & Privacy',
    description: 'Learn about our security measures and privacy policies',
    icon: <Shield className="w-6 h-6" />,
    articleCount: 6
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    description: 'Get help with technical issues and troubleshooting',
    icon: <Settings className="w-6 h-6" />,
    articleCount: 20
  },
  {
    id: 'billing',
    name: 'Billing & Payments',
    description: 'Information about pricing, billing, and payment methods',
    icon: <Globe className="w-6 h-6" />,
    articleCount: 10
  }
];

const helpArticles: HelpArticle[] = [
  {
    id: 'getting-started-1',
    title: 'How to Create Your First Account',
    content: 'Step-by-step guide to setting up your Zion Tech Group account and getting started with our services.',
    category: 'getting-started',
    tags: ['account', 'setup', 'beginner'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'getting-started-2',
    title: 'Understanding Our Service Categories',
    content: 'Learn about the different types of tech services we offer and how to choose the right one for your needs.',
    category: 'getting-started',
    tags: ['services', 'categories', 'overview'],
    lastUpdated: '2024-01-10'
  },
  {
    id: 'account-management-1',
    title: 'Updating Your Profile Information',
    content: 'Learn how to keep your profile information current and accurate.',
    category: 'account-management',
    tags: ['profile', 'update', 'settings'],
    lastUpdated: '2024-01-12'
  },
  {
    id: 'services-1',
    title: 'AI Services Overview',
    content: 'Comprehensive guide to our AI-powered services and how they can benefit your business.',
    category: 'services',
    tags: ['AI', 'services', 'business'],
    lastUpdated: '2024-01-08'
  },
  {
    id: 'security-1',
    title: 'Data Protection & Privacy',
    content: 'Learn about how we protect your data and maintain your privacy.',
    category: 'security',
    tags: ['privacy', 'security', 'data'],
    lastUpdated: '2024-01-05'
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<HelpArticle | null>(null);

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    setSelectedArticle(null);
  };

  const handleArticleSelect = (article: HelpArticle) => {
    setSelectedArticle(article);
  };

  const handleBackToCategories = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions and learn how to use our platform."
        url="https://ziontechgroup.com/help"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Find answers to common questions, learn how to use our services, and get the support you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>

        {!selectedArticle ? (
          <>
            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {helpCategories.map((category) => (
                <Card 
                  key={category.id}
                  className="cursor-pointer hover:border-zion-purple/40 transition-colors"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-zion-cyan">
                        {category.icon}
                      </div>
                      <Badge variant="secondary">{category.articleCount}</Badge>
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Articles List */}
            {filteredArticles.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {selectedCategory 
                    ? `${helpCategories.find(c => c.id === selectedCategory)?.name} Articles`
                    : 'All Articles'
                  }
                </h2>
                {filteredArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="cursor-pointer hover:border-zion-purple/40 transition-colors"
                    onClick={() => handleArticleSelect(article)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {article.title}
                          </h3>
                          <p className="text-zion-slate-light mb-3">
                            {article.content}
                          </p>
                          <div className="flex items-center gap-2">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right text-sm text-zion-slate-light">
                          <p>Updated {article.lastUpdated}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredArticles.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-zion-slate-light mb-4">
                  Try adjusting your search terms or browse our categories instead.
                </p>
                <Button onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </>
        ) : (
          /* Article View */
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToCategories}
                className="text-zion-cyan hover:text-zion-cyan-dark"
              >
                ← Back to Categories
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">
                    {helpCategories.find(c => c.id === selectedArticle.category)?.name}
                  </Badge>
                  <span className="text-zion-slate-light text-sm">
                    Updated {selectedArticle.lastUpdated}
                  </span>
                </div>
                <CardTitle className="text-2xl">{selectedArticle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-zion-slate-light leading-relaxed">
                    {selectedArticle.content}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-zion-purple/20">
                    <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-zion-purple/10 border-zion-purple/20">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Still need help?
              </h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:support@ziontechgroup.com" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Email Support
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}