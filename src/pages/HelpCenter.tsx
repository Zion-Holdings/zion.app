import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  FileText, 
  MessageCircle, 
  Users, 
  Settings, 
  Shield, 
  CreditCard,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using Zion Tech Group",
      articles: [
        "Creating your first account",
        "Setting up your profile",
        "Navigating the platform",
        "First steps for talent",
        "First steps for clients"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent & Profiles",
      description: "Everything about talent profiles and portfolios",
      articles: [
        "Creating a compelling profile",
        "Adding skills and certifications",
        "Building your portfolio",
        "Setting competitive rates",
        "Getting discovered by clients"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Services & Projects",
      description: "Managing services and project workflows",
      articles: [
        "Creating service listings",
        "Managing project milestones",
        "Client communication tips",
        "Payment and invoicing",
        "Project completion"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Keeping your account and data safe",
      articles: [
        "Account security best practices",
        "Two-factor authentication",
        "Data privacy settings",
        "Safe payment practices",
        "Reporting issues"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Billing & Payments",
      description: "Understanding fees and payment processes",
      articles: [
        "Payment methods accepted",
        "Understanding platform fees",
        "Escrow protection",
        "Refund policies",
        "Tax considerations"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication",
      description: "Staying connected with clients and talent",
      articles: [
        "Using the messaging system",
        "Video call features",
        "File sharing guidelines",
        "Communication best practices",
        "Resolving disputes"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "/contact",
      color: "bg-zion-cyan text-zion-blue-dark"
    },
    {
      title: "Live Chat",
      description: "Instant help available",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "#",
      color: "bg-zion-purple text-white"
    },
    {
      title: "Video Tutorials",
      description: "Learn with visual guides",
      icon: <Video className="w-6 h-6" />,
      href: "#",
      color: "bg-green-500 text-white"
    },
    {
      title: "Documentation",
      description: "Detailed technical guides",
      icon: <FileText className="w-6 h-6" />,
      href: "#",
      color: "bg-blue-500 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's AI and tech marketplace platform."
        keywords="help, support, documentation, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/help-center"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and support resources to help you make the most of Zion Tech Group
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-zion-blue/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {action.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                      <p className="text-zion-slate-light text-sm">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                          {article}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-zion-purple/20 text-zion-purple hover:bg-zion-purple/10">
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Explore our comprehensive library of resources to help you succeed on Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Video className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
                  <p className="text-zion-slate-light mb-4">
                    Step-by-step video guides for all major platform features
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Watch Tutorials
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">API Documentation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Technical documentation for developers and integrators
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
                  <p className="text-zion-slate-light mb-4">
                    Connect with other users and share best practices
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may encounter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Contact Support Team
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}