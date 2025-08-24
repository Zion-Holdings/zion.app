import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Simple service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  tags: string[];
  rating: number;
  aiScore: number;
}

const SERVICES: Service[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration capabilities.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: ["Multi-language support (50+ languages)", "Advanced NLP with GPT-4 integration", "Custom training on your data", "Analytics dashboard", "API integration", "24/7 customer support"],
    benefits: ["Reduce customer service costs by 60%", "24/7 availability", "Scalable customer support", "Improved customer satisfaction", "Data-driven insights"],
    tags: ["AI", "Chatbot", "NLP", "Customer Service", "Automation"],
    rating: 4.8,
    aiScore: 95
  },
  {
    id: "cloud-migration-suite",
    title: "Cloud Migration Suite",
    description: "Comprehensive cloud migration solution with automated assessment, planning, and execution tools for seamless transition to cloud infrastructure.",
    category: "Cloud Services",
    subcategory: "Migration & Consulting",
    price: 4999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Automated workload assessment", "Cost optimization analysis", "Migration planning tools", "Execution automation", "Post-migration support", "Performance monitoring"],
    benefits: ["Reduce migration time by 40%", "Minimize downtime", "Optimize cloud costs", "Ensure compliance", "Risk mitigation"],
    tags: ["Cloud", "Migration", "AWS", "Azure", "GCP", "DevOps"],
    rating: 4.7,
    aiScore: 92
  },
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Compliance",
    description: "Comprehensive security assessment and compliance framework for enterprise organizations with detailed reporting and remediation guidance.",
    category: "Security Services",
    subcategory: "Cybersecurity",
    price: 8999,
    currency: "$",
    pricingModel: "project-based",
    features: ["Vulnerability assessment", "Penetration testing", "Compliance audit", "Security policy review", "Incident response planning", "Staff training"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Reduce breach risk", "Improve security posture", "Protect customer data"],
    tags: ["Cybersecurity", "Compliance", "Audit", "Security", "Risk Management"],
    rating: 4.9,
    aiScore: 96
  }
];

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Enterprise Solutions & Micro SAAS Services
        </h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
          Discover our comprehensive range of enterprise-grade solutions, micro SAAS services, 
          and innovative technology offerings designed to accelerate your business growth.
        </p>
        
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-zion-cyan"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-zion-slate-dark text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white text-sm">{service.rating}</span>
                </div>
              </div>
              
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-zion-cyan font-semibold">
                  {service.currency}{service.price}
                  <span className="text-sm text-zion-slate-light ml-1">
                    /{service.pricingModel}
                  </span>
                </span>
                <span className="bg-zion-purple text-white px-2 py-1 rounded text-sm">
                  AI Score: {service.aiScore}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Learn More
                </button>
                <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our team of experts help you find the perfect solution for your needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <a href="https://ziontechgroup.com" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}