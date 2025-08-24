import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  HardDrive, 
  Lightbulb, 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Monitor, 
  Link as LinkIcon, 
  PenTool,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
    featured: false
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
    featured: false
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    featured: false
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
    featured: false
  },
];

const microSaasCategories = [
  {
    title: "AI & Chatbots",
    description: "Intelligent conversational AI solutions for customer support and engagement",
    icon: <Brain className="w-10 h-10" />,
    link: "/micro-saas-services#ai-chatbots",
    color: "from-purple-500 to-pink-500",
    featured: true,
    badge: "New"
  },
  {
    title: "Cybersecurity",
    description: "Advanced threat protection and compliance solutions for businesses",
    icon: <Shield className="w-10 h-10" />,
    link: "/micro-saas-services#cybersecurity",
    color: "from-red-500 to-orange-500",
    featured: true,
    badge: "Hot"
  },
  {
    title: "Cloud Management",
    description: "Multi-cloud optimization and monitoring platforms",
    icon: <Cloud className="w-10 h-10" />,
    link: "/micro-saas-services#cloud-management",
    color: "from-blue-500 to-cyan-500",
    featured: true,
    badge: "Popular"
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines and infrastructure automation tools",
    icon: <Code className="w-10 h-10" />,
    link: "/micro-saas-services#devops",
    color: "from-green-500 to-emerald-500",
    featured: true,
    badge: "Trending"
  },
  {
    title: "Data & Analytics",
    description: "Business intelligence and predictive analytics platforms",
    icon: <Database className="w-10 h-10" />,
    link: "/micro-saas-services#data-analytics",
    color: "from-indigo-500 to-purple-500",
    featured: true,
    badge: "Featured"
  },
  {
    title: "IoT & Edge Computing",
    description: "Connected devices and real-time processing solutions",
    icon: <Monitor className="w-10 h-10" />,
    link: "/micro-saas-services#iot",
    color: "from-yellow-500 to-orange-500",
    featured: true,
    badge: "Emerging"
  }
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services",
    description: "Global IT support and consulting services"
  },
  {
    title: "Request Quote",
    link: "/request-quote",
    description: "Get customized pricing for your needs"
  }
];

interface EnhancedCategoriesSectionProps {
  showTitle?: boolean;
}

export function EnhancedCategoriesSection({ showTitle = true }: EnhancedCategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Our Ecosystem</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and cutting-edge micro SAAS solutions
            </p>
          </div>
        )}
        
        {/* Micro SAAS Services Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">Micro SAAS Services</h2>
              <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            </div>
            <Link to="/micro-saas-services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasCategories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <div className="relative rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  {category.badge && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0 text-xs">
                      {category.badge}
                    </Badge>
                  )}
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Traditional Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Marketplace</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.title} 
                to={category.link} 
                className="group block"
              >
                <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-zion-purple/20">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Special Services */}
        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="group"
              >
                <div className="px-8 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/20">
                  <div className="text-center">
                    <div className="font-semibold text-lg mb-1">{service.title}</div>
                    <div className="text-sm text-zion-slate-light opacity-80">{service.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Explore our comprehensive suite of services and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/micro-saas-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}