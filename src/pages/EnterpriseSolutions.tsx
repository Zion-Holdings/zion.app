import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Building, Users, Shield, Database, Cloud, Zap, Star, DollarSign, Clock, CheckCircle, ArrowRight, Phone, Mail, Globe, TrendingUp, Lightbulb, BarChart3, Lock, Network, Server, Monitor, Smartphone, Search, ShoppingCart } from 'lucide-react';

const EnterpriseSolutions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedEnterpriseScore, setSelectedEnterpriseScore] = useState<string>('all');

  // Filter enterprise services
  const enterpriseServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category.toLowerCase().includes('enterprise') || 
    service.subcategory.toLowerCase().includes('enterprise') ||
    service.tags.some(tag => tag.toLowerCase().includes('enterprise') || tag.toLowerCase().includes('large-scale'))
  );

  const industries = ['all', 'finance', 'healthcare', 'manufacturing', 'retail', 'technology', 'government', 'education', 'energy'];
  const enterpriseScores = ['all', 'enterprise', 'large-scale', 'medium-scale', 'small-scale'];

  const filteredServices = useMemo(() => {
    return enterpriseServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesIndustry = selectedIndustry === 'all' || service.industry === selectedIndustry;
      const matchesEnterpriseScore = selectedEnterpriseScore === 'all' || service.enterpriseScore === selectedEnterpriseScore;
      
      return matchesSearch && matchesIndustry && matchesEnterpriseScore;
    });
  }, [searchTerm, selectedIndustry, selectedEnterpriseScore]);

  const getEnterpriseScoreColor = (score: string) => {
    switch (score) {
      case 'enterprise': return 'text-purple-400';
      case 'large-scale': return 'text-blue-400';
      case 'medium-scale': return 'text-green-400';
      case 'small-scale': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getEnterpriseScoreLabel = (score: string) => {
    switch (score) {
      case 'enterprise': return 'Enterprise Grade';
      case 'large-scale': return 'Large Scale';
      case 'medium-scale': return 'Medium Scale';
      case 'small-scale': return 'Small Scale';
      default: return 'Scalable';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'finance': return Shield;
      case 'healthcare': return Users;
      case 'manufacturing': return Building;
      case 'retail': return ShoppingCart;
      case 'technology': return Zap;
      case 'government': return Globe;
      case 'education': return Lightbulb;
      case 'energy': return BarChart3;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Building className="w-20 h-20 text-zion-cyan" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise Solutions & Technology
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Transform your enterprise with our comprehensive technology solutions, 
            designed for large-scale operations, security, and scalability.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search enterprise solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
              />
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All Industries</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry.charAt(0).toUpperCase() + industry.slice(1)}</option>
              ))}
            </select>

            {/* Enterprise Score Filter */}
            <select
              value={selectedEnterpriseScore}
              onChange={(e) => setSelectedEnterpriseScore(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All Enterprise Levels</option>
              {enterpriseScores.map(score => (
                <option key={score} value={score}>{getEnterpriseScoreLabel(score)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Industry Solutions Overview */}
      <div className="bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Financial Services",
                description: "Banking, insurance, and fintech solutions",
                count: enterpriseServices.filter(s => s.industry === 'finance').length
              },
              {
                icon: Users,
                title: "Healthcare",
                description: "Medical systems and patient care",
                count: enterpriseServices.filter(s => s.industry === 'healthcare').length
              },
              {
                icon: Building,
                title: "Manufacturing",
                description: "Industrial automation and IoT",
                count: enterpriseServices.filter(s => s.industry === 'manufacturing').length
              },
              {
                icon: Zap,
                title: "Technology",
                description: "Software and infrastructure",
                count: enterpriseServices.filter(s => s.industry === 'technology').length
              }
            ].map((industry, index) => (
              <div key={industry.title} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <industry.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{industry.description}</p>
                <span className="bg-zion-purple text-white text-sm px-3 py-1 rounded-full">
                  {industry.count} Solutions
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="bg-zion-slate-dark py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise-Grade Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 compliance, advanced threat protection, and data encryption"
              },
              {
                icon: Database,
                title: "Scalable Infrastructure",
                description: "Cloud-native architecture that grows with your business needs"
              },
              {
                icon: Users,
                title: "Multi-tenant Support",
                description: "Isolated environments for different departments and clients"
              },
              {
                icon: Clock,
                title: "99.9% Uptime",
                description: "Enterprise-grade reliability with comprehensive SLAs"
              },
              {
                icon: Lock,
                title: "Compliance Ready",
                description: "GDPR, HIPAA, PCI DSS, and industry-specific compliance"
              },
              {
                icon: Network,
                title: "Global Deployment",
                description: "Multi-region deployment with edge computing capabilities"
              }
            ].map((feature, index) => (
              <div key={feature.title} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <feature.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Enterprise Solutions Found
          </h2>
          <p className="text-zion-slate-light">
            Discover our comprehensive enterprise technology portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm">{service.category} • {service.subcategory}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {service.supportLevel === 'premium' && (
                    <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                      Premium
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getEnterpriseScoreColor(service.enterpriseScore)} border-current`}>
                    {getEnterpriseScoreLabel(service.enterpriseScore)}
                  </span>
                </div>
              </div>

              {/* Industry Badge */}
              {service.industry && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-zion-blue/20 text-zion-cyan text-sm rounded-full border border-zion-blue/30">
                    {React.createElement(getIndustryIcon(service.industry), { className: "w-4 h-4" })}
                    {service.industry.charAt(0).toUpperCase() + service.industry.slice(1)}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Enterprise Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-zion-cyan" />
                  Enterprise Features:
                </h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-zion-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Price:</span>
                  <span className="text-white font-bold">
                    ${service.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Market Price:</span>
                  <span className="text-zion-cyan text-sm">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Enterprise Level:</span>
                  <span className={`text-sm font-medium ${getEnterpriseScoreColor(service.enterpriseScore)}`}>
                    {service.enterpriseScore}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Delivery:</span>
                  <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                <div className="text-center mb-3">
                  <p className="text-zion-slate-light text-sm mb-2">Ready for enterprise transformation?</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {service.supportLevel}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Enterprise Solution Inquiry: ${service.name}`}
                    className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Get Enterprise Quote
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zion-blue hover:bg-zion-blue-light text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zion-slate-light text-lg mb-4">
              No enterprise solutions found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedEnterpriseScore('all');
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our enterprise technology experts can help you implement scalable solutions 
            that drive growth, efficiency, and innovation across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Enterprise Solutions</h4>
              <div className="space-y-2">
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;