
import React from 'react';
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Shield, Globe, Database, Network, Zap, Leaf, Eye, CreditCard, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Enhanced Services",
    description: "AI, cybersecurity, cloud, and specialized IT solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: <Globe className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Data Analytics",
    description: "Big data processing and business intelligence",
    icon: <Database className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "Comprehensive Services",
    link: "/enhanced-services"
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
    title: "Cybersecurity",
    link: "/cybersecurity-services"
  },
  {
    title: "Cloud Solutions",
    link: "/expanded-services"
  },
  {
    title: "Advanced Technology",
    link: "/expanded-services"
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600"
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
}

export function CategoriesSection({ showTitle = true, className = "" }: CategoriesSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore Categories</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{category.description}</p>
                <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Advanced Technology Services Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology Services</h3>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Cutting-edge micro SAAS solutions and professional IT services designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {advancedCategories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden border border-zion-blue-light bg-zion-blue-dark/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-zion-purple/20">
                  <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2">{category.title}</h4>
                  <p className="text-zion-slate-light text-xs leading-relaxed">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/expanded-services">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Explore All Advanced Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                {service.title}
              </Link>
            ))}
            <Link 
              to="/services-pricing"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Pricing
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/expanded-services" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors hover:text-zion-cyan-light"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
