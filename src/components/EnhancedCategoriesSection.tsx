import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  HardDrive, 
  Lightbulb, 
  Users, 
  Brain, 
  Shield, 
  Zap, 
  Database,
  TrendingUp,
  Globe,
  ArrowRight,
  Star
} from "lucide-react";
import { SERVICE_CATEGORIES, getPopularServices } from "@/data/microSaasServices";

const enhancedCategories = [
  {
    title: "AI Services",
    description: "Cutting-edge AI and machine learning solutions",
    icon: <Brain className="w-10 h-10" />,
    link: "/micro-saas-services?category=ai-services",
    color: "from-purple-500 via-pink-500 to-indigo-600",
    services: 3,
    avgRating: 4.8,
    isNew: true
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: <Shield className="w-10 h-10" />,
    link: "/micro-saas-services?category=it-services",
    color: "from-blue-500 via-cyan-500 to-blue-600",
    services: 2,
    avgRating: 4.7,
    isPopular: true
  },
  {
    title: "Development Services",
    description: "Custom software and AI-powered applications",
    icon: <Zap className="w-10 h-10" />,
    link: "/micro-saas-services?category=development-services",
    color: "from-green-500 via-emerald-500 to-teal-600",
    services: 1,
    avgRating: 4.9,
    isFeatured: true
  },
  {
    title: "Automation Services",
    description: "Business process automation and workflow optimization",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/micro-saas-services?category=automation-services",
    color: "from-orange-500 via-red-500 to-pink-600",
    services: 1,
    avgRating: 4.7
  },
  {
    title: "Data Services",
    description: "Data engineering, analytics, and business intelligence",
    icon: <Database className="w-10 h-10" />,
    link: "/micro-saas-services?category=data-services",
    color: "from-teal-500 via-blue-500 to-indigo-600",
    services: 1,
    avgRating: 4.8
  },
  {
    title: "Consulting Services",
    description: "Strategic consulting and implementation guidance",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/micro-saas-services?category=consulting-services",
    color: "from-pink-500 via-purple-500 to-indigo-600",
    services: 1,
    avgRating: 4.9
  }
];

const legacyCategories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and on-site technical assistance"
  },
  {
    title: "AI Recruiting Solutions",
    link: "/zion-hire-ai",
    description: "AI-powered talent acquisition and hiring tools"
  },
  {
    title: "Request Custom Quote",
    link: "/request-quote",
    description: "Get personalized pricing for your specific needs"
  }
];

interface EnhancedCategoriesSectionProps {
  showTitle?: boolean;
  showLegacy?: boolean;
}

export function EnhancedCategoriesSection({ showTitle = true, showLegacy = true }: EnhancedCategoriesSectionProps) {
  const popularServices = getPopularServices();

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of AI-powered services, IT solutions, and innovative technology tools
            </p>
          </div>
        )}
        
        {/* New Micro SAAS Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                🚀 New Micro SAAS Services
              </span>
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Cutting-edge solutions designed to transform your business operations and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedCategories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <Card className="h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {category.isNew && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                            New
                          </Badge>
                        )}
                        {category.isPopular && (
                          <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                            Popular
                          </Badge>
                        )}
                        {category.isFeatured && (
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                      <span>{category.services} services available</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{category.avgRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Legacy Categories */}
        {showLegacy && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-zion-blue to-zion-cyan bg-clip-text text-transparent">
                  💎 Core Marketplace Categories
                </span>
              </h3>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Our established marketplace categories for talent, equipment, and traditional services
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {legacyCategories.map((category) => (
                <Link 
                  key={category.title} 
                  to={category.link} 
                  className="group block"
                >
                  <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-lg">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Special Services */}
        <div className="mb-12">
          <h3 className="text-center text-xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
              ⭐ Featured Solutions
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group"
              >
                <div className="px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-dark/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-white transition-all duration-300 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="font-semibold mb-1">{service.title}</div>
                    <div className="text-xs text-zion-slate-light opacity-80">{service.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Popular Services Preview */}
        {popularServices.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  🔥 Most Popular Services
                </span>
              </h3>
              <p className="text-zion-slate-light text-sm">
                Services our customers love the most
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularServices.slice(0, 3).map((service) => (
                <div key={service.id} className="bg-zion-blue-dark/60 border border-zion-blue-light rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                      Popular
                    </Badge>
                  </div>
                  <p className="text-zion-slate-light text-xs mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan font-bold text-sm">
                      ${service.price}{service.pricingModel === 'monthly' ? '/mo' : ''}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs">{service.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center">
          <Link 
            to="/micro-saas-services" 
            className="inline-flex items-center gap-2 text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors text-lg font-medium"
          >
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}