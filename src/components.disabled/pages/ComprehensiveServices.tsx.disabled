import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe } from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Service data directly in the component
  const services = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "AI & Analytics",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms",
      price: 2500,
      pricingModel: "monthly",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"]
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      description: "Seamless migration to cloud platforms with optimization for performance and cost",
      price: 15000,
      pricingModel: "project-based",
      features: ["AWS/Azure/GCP migration", "Performance optimization", "Cost optimization", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"],
      tags: ["Cloud", "Migration", "AWS", "Azure", "GCP"]
    },
    {
      id: 3,
      name: "Cybersecurity & Compliance",
      category: "Security",
      description: "Comprehensive cybersecurity solutions and compliance management",
      price: 3500,
      pricingModel: "monthly",
      features: ["Threat detection", "Vulnerability assessment", "Compliance monitoring", "Incident response"],
      benefits: ["Protection against threats", "Regulatory compliance", "Risk mitigation", "Business continuity"],
      tags: ["Cybersecurity", "Compliance", "Security", "Risk Management"]
    },
    {
      id: 4,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      description: "Strategic guidance for digital transformation initiatives",
      price: 200,
      pricingModel: "hourly",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management"],
      benefits: ["Improved efficiency", "Cost savings", "Competitive advantage", "Future readiness"],
      tags: ["Digital Transformation", "Consulting", "Strategy", "Process Optimization"]
    },
    {
      id: 5,
      name: "Custom Software Development",
      category: "Development",
      description: "Tailored software solutions built to your specific business requirements",
      price: 85000,
      pricingModel: "project-based",
      features: ["Custom applications", "Web development", "Mobile apps", "API development"],
      benefits: ["Tailored solutions", "Competitive advantage", "Scalability", "Integration"],
      tags: ["Software Development", "Custom Apps", "Web Development", "Mobile Apps"]
    },
    {
      id: 6,
      name: "Data Management & Governance",
      category: "Data Services",
      description: "Comprehensive data management, governance, and quality solutions",
      price: 1800,
      pricingModel: "monthly",
      features: ["Data governance", "Quality management", "Master data management", "Data cataloging"],
      benefits: ["Data quality", "Compliance", "Efficiency", "Trust"],
      tags: ["Data Management", "Governance", "Quality", "Compliance"]
    }
  ];

  const categories = ['all', 'AI & Analytics', 'Cloud Services', 'Security', 'Consulting', 'Development', 'Data Services'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive Services & Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our extensive portfolio of AI-powered services, cloud solutions, cybersecurity, 
            and digital transformation services designed to accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <span className="text-2xl font-bold text-blue-400">
                    {formatPrice(service.price, service.pricingModel)}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;