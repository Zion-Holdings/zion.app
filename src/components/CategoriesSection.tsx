
import React from 'react';
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Brain, Shield, Globe, Database, Network, Zap, Leaf, Eye, CreditCard, ArrowRight, TrendingUp, Sparkles, Clock, Rocket, Target, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Enhanced Services",
    description: "AI, cybersecurity, cloud, and specialized IT solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/enhanced-services",
    color: "from-purple-500 to-indigo-600",
    features: ["AI Solutions", "Cybersecurity", "Cloud Services", "Data Analytics"]
  },
  {
    title: "Services Pricing",
    description: "Compare pricing and ROI for all our services",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/services-pricing",
    color: "from-green-500 to-emerald-600",
    features: ["Transparent Pricing", "ROI Calculator", "Custom Quotes", "Volume Discounts"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-cyan-500 to-blue-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity",
    description: "Advanced security and threat protection services",
    icon: <Shield className="w-10 h-10" />,
    link: "/cybersecurity-services",
    color: "from-red-500 to-pink-600",
    features: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: <Globe className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-blue-500 to-cyan-600",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Data Analytics",
    description: "Big data processing and business intelligence",
    icon: <Database className="w-10 h-10" />,
    link: "/expanded-services",
    color: "from-emerald-500 to-green-600",
    features: ["Big Data", "Business Intelligence", "Data Visualization", "Predictive Models"]
  },
];

const specialServices = [
  {
    title: "Comprehensive Services",
    link: "/enhanced-services",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    title: "Services Pricing",
    link: "/services-pricing",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    title: "AI Services",
    link: "/ai-services",
    icon: <Brain className="w-4 h-4" />
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity-services",
    icon: <Shield className="w-4 h-4" />
  },
  {
    title: "Cloud Solutions",
    link: "/expanded-services",
    icon: <Globe className="w-4 h-4" />
  },
  {
    title: "Advanced Technology",
    link: "/expanded-services",
    icon: <Zap className="w-4 h-4" />
  }
];

const advancedCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    description: "Process automation, NLP, computer vision",
    link: "/expanded-services?category=AI%20%26%20Machine%20Learning",
    color: "from-purple-500 to-pink-600",
    features: ["Neural Networks", "Deep Learning", "Natural Language Processing"]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Zero-trust, threat detection, compliance",
    link: "/expanded-services?category=Cybersecurity",
    color: "from-red-500 to-orange-600",
    features: ["Zero Trust", "Threat Intelligence", "SOC Services"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    description: "Multi-cloud, automation, orchestration",
    link: "/expanded-services?category=Cloud%20%26%20DevOps",
    color: "from-blue-500 to-cyan-600",
    features: ["Multi-Cloud", "Infrastructure as Code", "Monitoring"]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Big data, BI, predictive analytics",
    link: "/expanded-services?category=Data%20%26%20Analytics",
    color: "from-green-500 to-emerald-600",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics"]
  },
  {
    title: "IoT & Edge Computing",
    icon: <Network className="w-6 h-6" />,
    description: "Connected devices, real-time processing",
    link: "/expanded-services?category=IoT%20%26%20Edge%20Computing",
    color: "from-indigo-500 to-purple-600",
    features: ["IoT Platforms", "Edge Computing", "Sensor Networks"]
  },
  {
    title: "Blockchain & Web3",
    icon: <Zap className="w-6 h-6" />,
    description: "Smart contracts, decentralized solutions",
    link: "/expanded-services?category=Blockchain%20%26%20Web3",
    color: "from-yellow-500 to-orange-600",
    features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
  },
  {
    title: "Quantum Computing",
    icon: <Leaf className="w-6 h-6" />,
    description: "Quantum algorithms, optimization",
    link: "/expanded-services?category=Quantum%20Computing",
    color: "from-teal-500 to-blue-600",
    features: ["Quantum Algorithms", "Optimization", "Simulation"]
  },
  {
    title: "AR/VR & Metaverse",
    icon: <Eye className="w-6 h-6" />,
    description: "Immersive experiences, virtual worlds",
    link: "/expanded-services?category=AR%2FVR%20%26%20Metaverse",
    color: "from-pink-500 to-rose-600",
    features: ["Virtual Reality", "Augmented Reality", "3D Modeling"]
  },
  {
    title: "FinTech & Digital Banking",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Digital banking, payments, lending",
    link: "/expanded-services?category=FinTech%20%26%20Digital%20Banking",
    color: "from-blue-600 to-indigo-600",
    features: ["Digital Banking", "Payment Systems", "Lending Platforms"]
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
}

export function CategoriesSection({ showTitle = true, className = "" }: CategoriesSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white py-16 relative overflow-hidden ${className}`}>
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-zion-cyan/20 rotate-45 opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-zion-purple/20 rounded-full opacity-25 animate-bounce" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-zion-cyan" />
              <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Explore Categories</span>
              <Sparkles className="w-7 h-7 text-zion-cyan" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Discover Our Ecosystem</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive tech services, talent, equipment, and innovation solutions
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
              <div className="rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark/90">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">{category.description}</p>
                
                {/* Feature highlights */}
                <div className="mb-4 space-y-2">
                  {category.features?.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-cyan-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-zion-purple" />
              <h3 className="text-2xl font-bold text-white">Advanced Technology Services</h3>
              <Rocket className="w-6 h-6 text-zion-purple" />
            </div>
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
                <div className="rounded-lg overflow-hidden border border-zion-blue-light bg-zion-blue-dark/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark/80">
                  <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2 group-hover:text-zion-cyan transition-colors duration-300">{category.title}</h4>
                  <p className="text-zion-slate-light text-xs leading-relaxed mb-3">{category.description}</p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-1">
                    {category.features?.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-zion-cyan/70">
                        <Star className="w-2 h-2 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/expanded-services">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                Explore All Advanced Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                className="px-6 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/40 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              >
                {service.icon}
                {service.title}
              </Link>
            ))}
            <Link 
              to="/services-pricing"
              className="px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark border border-zion-purple/50 hover:border-zion-purple rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              View Pricing
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/expanded-services" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors hover:text-zion-cyan-light group flex items-center gap-2"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
