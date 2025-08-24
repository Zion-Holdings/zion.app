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
              <span>Middletown DE 19709</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full mb-2">
                  {service.category}
                </span>
                <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full ml-2">
                  {service.subcategory}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">
                    {service.currency}{service.price}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.pricingModel}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-zion-slate-light'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">({service.rating})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zion-cyan text-sm">AI Score:</span>
                  <span className="text-white font-semibold">{service.aiScore}%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <span className="text-zion-cyan">✓</span>
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
                      <span className="text-zion-cyan">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/services-pricing?service=${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <Link
              to="/categories"
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Browse All Categories
            </Link>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can accelerate your growth and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              Request Custom Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 transition-all duration-300"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}