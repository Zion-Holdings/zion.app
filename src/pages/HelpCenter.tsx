import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Settings, Shield, MessageSquare, FileText, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Getting Started",
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
    }
  ];

  const quickActions = [
    {
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
    }
  ];

  return (
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
            </p>
          </div>

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
      </main>
      <Footer />
    </>
  );
}