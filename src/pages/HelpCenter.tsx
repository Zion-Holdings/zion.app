<<<<<<< HEAD
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Settings, Shield, MessageSquare, FileText, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";
=======
import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';

const HelpCenter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac

  const helpCategories = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Getting Started",
<<<<<<< HEAD
      description: "Learn the basics of using Zion Tech Group",
      articles: [
        "Creating your first account",
        "Setting up your profile",
        "Navigating the marketplace",
        "Understanding the platform"
      ],
      link: "/help/getting-started",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Management",
      description: "Manage your account and profile settings",
      articles: [
        "Updating profile information",
        "Managing notifications",
        "Account security settings",
        "Privacy controls"
      ],
      link: "/help/user-management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Platform Features",
      description: "Master all the features and tools",
      articles: [
        "AI talent matching",
        "Project management tools",
        "Payment and billing",
        "Communication features"
      ],
      link: "/help/platform-features",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety & Security",
      description: "Stay safe and secure on our platform",
      articles: [
        "Verification processes",
        "Dispute resolution",
        "Payment protection",
        "Reporting issues"
      ],
      link: "/help/safety-security",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Communication",
      description: "Learn how to communicate effectively",
      articles: [
        "Messaging system",
        "Video calls",
        "Project collaboration",
        "Feedback and reviews"
      ],
      link: "/help/communication",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation",
      description: "Access detailed guides and references",
      articles: [
        "API documentation",
        "Developer guides",
        "Integration tutorials",
        "Best practices"
      ],
      link: "/help/documentation",
      color: "from-yellow-500 to-orange-500"
=======
      description: "Learn the basics and get up and running quickly with Zion Tech Group",
      icon: "🚀",
      color: "from-blue-500/20 to-cyan-500/20",
      articles: [
        {
          title: "How to create your first project",
          content: "Learn the step-by-step process of creating your first project with Zion Tech Group, from initial consultation to project kickoff.",
          readTime: "5 min read",
          difficulty: "Beginner"
        },
        {
          title: "Understanding our development process",
          content: "Get familiar with our proven development methodology, including planning, development, testing, and deployment phases.",
          readTime: "8 min read",
          difficulty: "Beginner"
        },
        {
          title: "Setting up your development environment",
          content: "Configure your development environment with the necessary tools, frameworks, and dependencies for your project.",
          readTime: "6 min read",
          difficulty: "Intermediate"
        },
        {
          title: "First steps with Zion Tech Group",
          content: "Essential information for new clients, including account setup, project onboarding, and communication protocols.",
          readTime: "4 min read",
          difficulty: "Beginner"
        }
      ]
    },
    {
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription settings",
      icon: "💳",
      color: "from-green-500/20 to-emerald-500/20",
      articles: [
        {
          title: "Creating and managing your account",
          content: "Complete guide to account creation, profile management, and security settings for your Zion Tech Group account.",
          readTime: "7 min read",
          difficulty: "Beginner"
        },
        {
          title: "Understanding billing and pricing",
          content: "Comprehensive overview of our pricing structure, billing cycles, and payment options for different services.",
          readTime: "10 min read",
          difficulty: "Beginner"
        },
        {
          title: "Updating payment methods",
          content: "Step-by-step instructions for adding, updating, and managing payment methods in your account.",
          readTime: "4 min read",
          difficulty: "Beginner"
        },
        {
          title: "Canceling or modifying services",
          content: "Learn how to modify your service plan, cancel subscriptions, and understand our cancellation policies.",
          readTime: "6 min read",
          difficulty: "Beginner"
        }
      ]
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      icon: "🔧",
      color: "from-purple-500/20 to-pink-500/20",
      articles: [
        {
          title: "Common technical issues and solutions",
          content: "Troubleshooting guide for common technical problems, including error messages, performance issues, and connectivity problems.",
          readTime: "12 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Performance optimization tips",
          content: "Best practices for optimizing your applications, including code optimization, database tuning, and caching strategies.",
          readTime: "15 min read",
          difficulty: "Advanced"
        },
        {
          title: "Security best practices",
          content: "Essential security guidelines for protecting your applications, data, and user information.",
          readTime: "18 min read",
          difficulty: "Advanced"
        },
        {
          title: "API documentation and integration",
          content: "Comprehensive API documentation, integration guides, and examples for our services and platforms.",
          readTime: "20 min read",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Project Management",
      description: "Learn how to manage your projects effectively",
      icon: "📋",
      color: "from-orange-500/20 to-red-500/20",
      articles: [
        {
          title: "Project planning and scoping",
          content: "Guidelines for effective project planning, requirement gathering, and scope definition to ensure project success.",
          readTime: "14 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Timeline management and milestones",
          content: "Strategies for managing project timelines, setting realistic milestones, and tracking progress effectively.",
          readTime: "11 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Communication with development team",
          content: "Best practices for effective communication with your development team, including meetings, updates, and feedback.",
          readTime: "8 min read",
          difficulty: "Beginner"
        },
        {
          title: "Quality assurance and testing",
          content: "Overview of our QA process, testing methodologies, and how to ensure high-quality deliverables.",
          readTime: "13 min read",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Resources for AI and ML projects",
      icon: "🤖",
      color: "from-cyan-500/20 to-blue-500/20",
      articles: [
        {
          title: "AI model training and deployment",
          content: "Comprehensive guide to training, validating, and deploying machine learning models in production environments.",
          readTime: "25 min read",
          difficulty: "Advanced"
        },
        {
          title: "Data preparation and preprocessing",
          content: "Essential techniques for preparing and preprocessing data for machine learning applications.",
          readTime: "20 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Model evaluation and optimization",
          content: "Methods for evaluating model performance, identifying areas for improvement, and optimizing AI models.",
          readTime: "22 min read",
          difficulty: "Advanced"
        },
        {
          title: "AI ethics and best practices",
          content: "Guidelines for responsible AI development, ethical considerations, and industry best practices.",
          readTime: "16 min read",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Web & Mobile Development",
      description: "Guidance for web and mobile projects",
      icon: "📱",
      color: "from-indigo-500/20 to-purple-500/20",
      articles: [
        {
          title: "Frontend development best practices",
          content: "Modern frontend development practices, including responsive design, accessibility, and performance optimization.",
          readTime: "19 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Backend architecture patterns",
          content: "Common backend architecture patterns, design principles, and best practices for scalable applications.",
          readTime: "24 min read",
          difficulty: "Advanced"
        },
        {
          title: "Mobile app development guidelines",
          content: "Guidelines for developing mobile applications, including platform-specific considerations and best practices.",
          readTime: "21 min read",
          difficulty: "Intermediate"
        },
        {
          title: "Responsive design principles",
          content: "Core principles of responsive design, mobile-first approaches, and cross-platform compatibility.",
          readTime: "17 min read",
          difficulty: "Intermediate"
        }
      ]
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
    }
  ];

  const quickActions = [
    {
<<<<<<< HEAD
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      link: "/help/video-tutorials"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Live Support",
      description: "Get help in real-time",
      link: "/contact"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Knowledge Base",
      description: "Search our articles",
      link: "/help/knowledge-base"
=======
      title: "Contact Support",
      description: "Get in touch with our support team for personalized assistance",
      action: "Contact Us",
      href: "/contact",
      icon: "📞",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time for immediate help",
      action: "Start Chat",
      href: "#",
      icon: "💬",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive technical documentation and guides",
      action: "View Docs",
      href: "#",
      icon: "📚",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and share knowledge",
      action: "Join Forum",
      href: "#",
      icon: "👥",
      color: "from-orange-500/20 to-red-500/20"
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
    }
  ];

  const popularArticles = [
    "How to create your first project",
    "Understanding billing and pricing",
    "Common technical issues and solutions",
    "AI model training and deployment",
    "Frontend development best practices"
  ];

  const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...helpCategories.map(cat => ({ id: cat.title, label: cat.title, icon: cat.icon }))
  ];

  // Filter help data based on search term and active category
  const filteredHelpData = helpCategories.filter(category => {
    if (activeCategory !== 'all' && category.title !== activeCategory) {
      return false;
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const hasMatchingTitle = category.title.toLowerCase().includes(searchLower);
      const hasMatchingDescription = category.description.toLowerCase().includes(searchLower);
      const hasMatchingArticles = category.articles.some(article => 
        article.title.toLowerCase().includes(searchLower) ||
        article.content.toLowerCase().includes(searchLower)
      );
      return hasMatchingTitle || hasMatchingDescription || hasMatchingArticles;
    }
    
    return true;
  });

  const handleArticleClick = (articleTitle: string) => {
    setSelectedArticle(selectedArticle === articleTitle ? null : articleTitle);
  };

  return (
<<<<<<< HEAD
    <>
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for Zion Tech Group platform. Find tutorials, guides, and resources to make the most of our marketplace."
        keywords="help center, support, tutorials, guides, Zion Tech Group, tech marketplace"
        canonical="https://ziontechgroup.com/help-center"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Everything you need to know about using Zion Tech Group. Find answers, tutorials, and support resources.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all your Zion Tech Group services. Find answers, documentation, and contact our support team."
        keywords="help center, support, documentation, troubleshooting, Zion Tech Group, technical support"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Help Center
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get technical support, and access comprehensive 
              documentation for all Zion Tech Group services.
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
            </p>

<<<<<<< HEAD
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or guides..."
                className="w-full px-6 py-4 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
              <Button className="absolute right-2 top-2 bg-zion-purple hover:bg-zion-purple-light">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-zion-cyan">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{action.description}</p>
                        <Link 
                          to={action.link}
                          className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                        >
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-zion-slate-light text-sm flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                          {article}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={category.link}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium group-hover:translate-x-1 transition-transform"
                    >
                      View all articles →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "How to create a winning talent profile",
                "Understanding the AI matching algorithm",
                "Best practices for project collaboration",
                "Setting up secure payments",
                "Managing project milestones",
                "Resolving disputes effectively"
              ].map((article, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{article}</h3>
                    <Link 
                      to={`/help/article/${index + 1}`}
                      className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                    >
                      Read article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
=======
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
>>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">
                  Need more help?
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Our support team is available 24/7 to assist you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-zion-slate-light">
                    Can't find what you're looking for? Contact our support team directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                    >
                      Contact Support
                    </Link>
                    <Link
                      to="/faq"
                      className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                    >
                      View FAQ
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get immediate help or access resources quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${action.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                  <a
                    href={action.href}
                    className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
                  >
                    {action.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredHelpData.length > 0 
                ? `Browse ${filteredHelpData.length} categories of help articles and guides.`
                : 'No categories match your current search criteria. Try adjusting your search terms.'
              }
            </p>
          </div>

          {filteredHelpData.length > 0 ? (
            <div className="space-y-8">
              {filteredHelpData.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{category.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.articles.map((article, articleIndex) => (
                        <div 
                          key={articleIndex}
                          className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                          onClick={() => handleArticleClick(article.title)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                {article.readTime}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-red-500/20 text-red-300'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          {selectedArticle === article.title && (
                            <div className="mt-3 p-3 bg-white/10 rounded border-l-4 border-cyan-400">
                              <p className="text-gray-300 text-sm">{article.content}</p>
                              <button className="mt-2 text-cyan-400 text-sm hover:text-cyan-300">
                                Read Full Article →
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No help articles found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most frequently accessed help articles and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    📖
                  </div>
                  <h3 className="text-lg font-bold text-white">{article}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Quick access to this popular help article with detailed information and step-by-step guidance.
                </p>
                <button className="text-cyan-400 text-sm hover:text-cyan-300 group-hover:underline">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Still Need Help?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;