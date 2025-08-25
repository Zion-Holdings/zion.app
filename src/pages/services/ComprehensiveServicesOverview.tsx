import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Cpu, 
  Rocket, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Building, 
  Target,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../../data/innovativeITInfrastructure';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';

export default function ComprehensiveServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'ai',
      name: 'Advanced AI Services',
      description: 'Cutting-edge artificial intelligence solutions for enterprise transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: ADVANCED_AI_SERVICES,
      features: [
        'Edge AI Computing',
        'Federated Learning',
        'AI Governance & Ethics',
        'Quantum Machine Learning',
        'Autonomous AI Agents'
      ]
    },
    {
      id: 'infrastructure',
      name: 'Innovative IT Infrastructure',
      description: 'Next-generation infrastructure solutions for modern businesses',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      services: INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
      features: [
        'Green Computing',
        'Edge Computing',
        'Quantum-Ready Infrastructure',
        'Zero-Trust Security',
        'AI-Optimized Infrastructure'
      ]
    },
    {
      id: 'saas',
      name: 'Micro SAAS Solutions',
      description: 'Revolutionary software-as-a-service platforms for business innovation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: INNOVATIVE_MICRO_SAAS_SERVICES,
      features: [
        'Web3 Business Platform',
        'Metaverse Solutions',
        'Sustainable Business Intelligence',
        'AI Content Creation',
        'Predictive Analytics'
      ]
    }
  ];

  const totalServices = serviceCategories.reduce((sum, category) => sum + category.services.length, 0);
  const totalFeatures = serviceCategories.reduce((sum, category) => sum + category.features.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of advanced AI services, innovative IT infrastructure, and revolutionary micro SAAS solutions designed for business transformation."
        keywords="AI services, IT infrastructure, micro SAAS, comprehensive solutions, technology services, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/comprehensive-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Overview
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Your Complete Technology Innovation Portfolio
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our extensive range of cutting-edge solutions spanning artificial intelligence, 
            IT infrastructure, and micro SAAS platforms. We provide end-to-end technology services 
            to drive your business into the future.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">{totalServices}</div>
              <div className="text-zion-slate-light">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">{totalFeatures}</div>
              <div className="text-zion-slate-light">Key Features</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">3</div>
              <div className="text-zion-slate-light">Service Categories</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Choose Your Innovation Path
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Navigate through our comprehensive service categories to find the perfect solutions for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className={`bg-gradient-to-br ${category.color} rounded-xl p-8 text-white text-center hover:scale-105 transition-transform cursor-pointer`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <p className="text-white/90 mb-6">{category.description}</p>
                  <div className="text-sm text-white/80">
                    {category.services.length} services available
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Category View */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className={`mb-20 ${selectedCategory !== 'all' && selectedCategory !== category.id ? 'hidden' : ''}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-zion-slate max-w-3xl mx-auto mb-8">
                  {category.description}
                </p>
                
                {/* Category Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {category.features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-zion-blue-dark text-center">{feature}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm">{service.description}</p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-zion-blue-dark">
                            {service.currency}{service.price}
                          </span>
                          <span className="text-zion-slate text-sm">/month</span>
                        </div>
                        <p className="text-sm text-zion-slate">Market: {service.marketPrice}</p>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-zion-blue-dark mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-zion-slate">
                              <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ROI and Delivery */}
                      <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-zion-slate">ROI:</span>
                          <div className="font-semibold text-zion-cyan">{service.roi}</div>
                        </div>
                        <div>
                          <span className="text-zion-slate">Delivery:</span>
                          <div className="font-semibold text-zion-blue-dark">{service.estimatedDelivery}</div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              innovative solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">AI-First Approach</h3>
              <p className="text-zion-slate">Leverage the latest AI technologies to gain competitive advantages</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance for all our solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Rapid Deployment</h3>
              <p className="text-zion-slate">Quick implementation and time-to-value for your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">Expert Support</h3>
              <p className="text-zion-slate">Dedicated support team with deep technical expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our team of technology experts is ready to help you implement these innovative solutions 
            and transform your business. Contact us today to get started.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-zion-slate-light">+1 302 464 0950</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
            </div>
            <div className="text-center">
              <Building className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View Detailed Services
            </button>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}