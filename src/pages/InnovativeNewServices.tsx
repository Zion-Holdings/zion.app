import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  TrendingUp, 
  Atom, 
  Truck, 
  Globe,
  Star,
  Zap,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';

export default function InnovativeNewServices() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Creative Services':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'AI & Legal Tech':
        return Scale;
      case 'Sustainability & Tech':
        return Leaf;
      case 'AI & Healthcare':
        return Heart;
      case 'Edge Computing':
        return Cpu;
      case 'AI & FinTech':
        return TrendingUp;
      case 'Quantum Computing':
        return Atom;
      case 'AI & Supply Chain':
        return Truck;
      case 'Metaverse & VR':
        return Globe;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Creative Services':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'AI & Legal Tech':
        return 'from-blue-500 to-indigo-500';
      case 'Sustainability & Tech':
        return 'from-green-500 to-emerald-500';
      case 'AI & Healthcare':
        return 'from-pink-500 to-red-500';
      case 'Edge Computing':
        return 'from-cyan-500 to-blue-500';
      case 'AI & FinTech':
        return 'from-yellow-500 to-orange-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'AI & Supply Chain':
        return 'from-teal-500 to-cyan-500';
      case 'Metaverse & VR':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative New Services - Zion Tech Group" 
        description="Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business and drive innovation."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative New Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-blue-light mb-8 max-w-4xl mx-auto">
              Cutting-edge micro SAAS solutions, IT services, and AI platforms that drive business transformation and competitive advantage
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">10+ New Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Future-Ready Technology</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-spin"></div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-zion-blue-light">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INNOVATIVE_NEW_SERVICES.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div 
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-white/80 text-sm">{service.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                    >
                      {expandedService === service.id ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-zion-blue-light mb-4">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-4 rounded-xl mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm">Starting at</p>
                        <p className="text-2xl font-bold text-white">
                          ${service.price.toLocaleString()}
                          <span className="text-lg text-white/80">/{service.pricingModel}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80 text-sm">Market Price</p>
                        <p className="text-white font-semibold">{service.marketPrice}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Delivery */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-white/80 text-xs">ROI</p>
                      <p className="text-white font-semibold text-sm">{service.roi}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-white/80 text-xs">Delivery</p>
                      <p className="text-white font-semibold text-sm">{service.estimatedDelivery}</p>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {expandedService === service.id && (
                    <div className="border-t border-white/10 pt-4 space-y-4">
                      {/* Technology Stack */}
                      <div>
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          Technology Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {service.technology.map((tech, index) => (
                            <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Integrations */}
                      <div>
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-400" />
                          Integrations
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {service.integrations.map((integration, index) => (
                            <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Compliance */}
                      <div>
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Compliance
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((compliance, index) => (
                            <span key={index} className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">
                              {compliance}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Unique Value */}
                      <div>
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          Unique Value
                        </h5>
                        <p className="text-zion-blue-light text-sm">{service.uniqueValue}</p>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h5 className="text-white font-semibold mb-2">Use Cases</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {service.useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={`tel:+13024640950`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our team of experts is ready to help you implement these innovative solutions and transform your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm">Send us a detailed inquiry</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80 text-sm">Our headquarters location</p>
              <p className="text-green-400 font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zion-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Our Website
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}