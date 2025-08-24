import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export default function Marketplace() {
  const marketplaceCategories = [
    {
      title: "AI Services",
      description: "Advanced artificial intelligence solutions and automation services",
      icon: "🤖",
      href: "/micro-saas-services?category=AI Services",
      count: "50+"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT solutions and infrastructure services",
      icon: "💻",
      href: "/micro-saas-services?category=IT Services",
      count: "75+"
    },
    {
      title: "Development",
      description: "Custom software development and programming services",
      icon: "⚡",
      href: "/micro-saas-services?category=Development",
      count: "100+"
    },
    {
      title: "Security",
      description: "Cybersecurity and data protection services",
      icon: "🔒",
      href: "/micro-saas-services?category=Security",
      count: "25+"
    },
    {
      title: "Cloud & Analytics",
      description: "Cloud computing and business analytics solutions",
      icon: "☁️",
      href: "/micro-saas-services?category=Cloud",
      count: "40+"
    },
    {
      title: "Micro SAAS",
      description: "Specialized software-as-a-service solutions",
      icon: "🚀",
      href: "/micro-saas-services?category=Micro SAAS",
      count: "30+"
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Content Generation",
      provider: "TechFlow AI",
      rating: 4.9,
      price: "$99/month",
      description: "Advanced AI content creation with SEO optimization and multi-language support"
    },
    {
      title: "Cloud Migration Expert",
      provider: "CloudBridge Solutions",
      rating: 4.8,
      price: "$150/hour",
      description: "Complete cloud migration services for AWS, Azure, and Google Cloud"
    },
    {
      title: "Cybersecurity Assessment",
      provider: "SecureNet Pro",
      rating: 4.9,
      price: "$2,500",
      description: "Comprehensive security audit including penetration testing and compliance review"
    }
  ];

  return (
    <>
      <SEO
        title="Marketplace - AI & Tech Services"
        description="Discover and connect with top AI specialists, IT professionals, and technology solutions in our comprehensive marketplace."
        keywords="AI marketplace, tech services, IT solutions, AI specialists, technology marketplace"
        canonical="https://ziontechgroup.com/marketplace"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>AI & Tech Marketplace</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Connect with top AI specialists, IT professionals, and cutting-edge technology solutions
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                Browse Services
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                Become a Provider
              </Button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketplaceCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan text-sm">{category.count} services</span>
                      <Link to={category.href}>
                        <Button variant="link" className="text-zion-cyan p-0 hover:text-zion-purple">
                          Explore →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-zion-cyan bg-zion-blue px-3 py-1 rounded-full text-sm">
                        Featured
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">{service.provider}</p>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-purple font-bold">{service.price}</span>
                      <Button variant="outline" size="sm" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-zion-slate-light mb-6">
                Join thousands of professionals and companies already using our marketplace
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                  Start Browsing
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}