
import React from 'react';
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Zap, Shield, Cloud, Database, TrendingUp, Cpu, LinkIcon } from "lucide-react";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/comprehensive-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Solutions",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Enterprise",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/enterprise-solutions",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/comprehensive-services",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Pricing",
    link: "/services-pricing"
  },
  {
    title: "AI Services",
    link: "/ai-services"
  },
  {
    title: "Micro SAAS",
    link: "/micro-saas"
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise-solutions"
  }
];

const serviceCategories = [
  {
    title: "AI & Automation",
    description: "Intelligent automation and AI solutions",
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    link: "/ai-services"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and protection services",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    link: "/comprehensive-services"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/enterprise-solutions"
  },
  {
    title: "Data & Analytics",
    description: "Big data processing and business intelligence",
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/comprehensive-services"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with digital solutions",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-600",
    link: "/enterprise-solutions"
  },
  {
    title: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    link: "/comprehensive-services"
  },
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions and smart contracts",
    icon: <LinkIcon className="w-8 h-8" />,
    color: "from-teal-500 to-blue-600",
    link: "/comprehensive-services"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore Categories</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
            <Link 
              to="/comprehensive-services"
              className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/comprehensive-services" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
