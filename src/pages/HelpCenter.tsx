import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, MessageCircle, Phone, Mail, HelpCircle, FileText, Video, Users, Settings, Globe, Shield, Building } from 'lucide-react';

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion Tech Group",
      icon: BookOpen,
      articles: [
        "Creating Your First Account",
        "Setting Up Your Profile",
        "Navigating the Platform",
        "Understanding the Marketplace"
      ]
    },
    {
      title: "For Talent & Creators",
      description: "Everything you need to succeed as a service provider",
      icon: Users,
      articles: [
        "Building Your Portfolio",
        "Setting Competitive Rates",
        "Managing Client Relationships",
        "Getting Paid Securely"
      ]
    },
    {
      title: "For Clients & Businesses",
      description: "How to find and work with the best talent",
      icon: Building,
      articles: [
        "Posting Your First Project",
        "Evaluating Proposals",
        "Managing Project Milestones",
        "Ensuring Project Success"
      ]
    },
    {
      title: "Platform Features",
      description: "Master all the tools and features available",
      icon: Settings,
      articles: [
        "Advanced Search & Filters",
        "Communication Tools",
        "Project Management",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Safety & Security",
      description: "Understanding our security measures and policies",
      icon: Shield,
      articles: [
        "Payment Protection",
        "Dispute Resolution",
        "Privacy & Data Security",
        "Community Guidelines"
      ]
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues and bugs",
      icon: HelpCircle,
      articles: [
        "Common Issues & Solutions",
        "Browser Compatibility",
        "Mobile App Support",
        "API Documentation"
      ]
    }
  ];

  const quickActions = [
    {
      title: "Live Chat Support",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      action: "Start Chat",
      href: "/contact"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      action: "Call Now",
      href: "tel:+13024640950"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      action: "Send Email",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      title: "Video Tutorials",
      description: "Learn through step-by-step videos",
      icon: Video,
      action: "Watch Now",
      href: "/tutorials"
    }
  ];

  return (
    <>
      <SEO
        title="Help Center - Get Support & Learn | Zion Tech Group"
        description="Get help, find answers, and learn how to use Zion Tech Group's marketplace platform effectively. 24/7 support available."
        keywords="help center, support, tutorials, FAQ, Zion Tech Group assistance"
        canonical="https://ziontechgroup.com/help"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers to your questions, learn new features, and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  className="pl-12 pr-4 py-4 text-lg bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{action.description}</p>
                  <Button
                    asChild
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white"
                  >
                    <a href={action.href}>{action.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Browse Help Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a
                            href={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}/${article.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1"
                          >
                            {article}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark border-zion-purple/30 p-8">
              <CardContent>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Still need help?
                </h2>
                <p className="text-zion-slate-light mb-8 text-lg">
                  Our support team is available 24/7 to assist you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 py-3 text-lg"
                  >
                    <a href="/contact">Contact Support</a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 px-8 py-3 text-lg"
                  >
                    <a href="/faq">View FAQ</a>
                  </Button>
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