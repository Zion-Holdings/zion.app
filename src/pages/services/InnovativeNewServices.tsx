import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  DollarSign, 
  Atom, 
  Truck, 
  Globe,
  Zap,
  TrendingUp,
  Users,
  Target,
  Award,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function InnovativeNewServices() {
  const categories = [
    { name: "AI & Creative Services", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Legal Tech", icon: Scale, color: "from-blue-500 to-indigo-500" },
    { name: "Sustainability", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { name: "Healthcare", icon: Heart, color: "from-pink-500 to-rose-500" },
    { name: "Edge Computing", icon: Cpu, color: "from-cyan-500 to-blue-500" },
    { name: "FinTech", icon: DollarSign, color: "from-yellow-500 to-orange-500" },
    { name: "Quantum Computing", icon: Atom, color: "from-violet-500 to-purple-500" },
    { name: "Supply Chain", icon: Truck, color: "from-gray-500 to-slate-500" },
    { name: "Metaverse", icon: Globe, color: "from-indigo-500 to-purple-500" }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => category.includes(c.name.split(' ')[0]));
    return cat ? cat.icon : Brain;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => category.includes(c.name.split(' ')[0]));
    return cat ? cat.color : "from-blue-500 to-purple-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative New Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS services, IT solutions, and AI-powered platforms that transform businesses and drive innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Innovative New Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary micro SAAS solutions, cutting-edge IT services, and AI-powered platforms 
              that push the boundaries of what's possible in business technology.
            </p>
          </div>
          
          {/* Contact Info Banner */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008</p>
                  <p className="text-white font-semibold">Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Services That Transform Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered creative studios to quantum-safe cybersecurity, our innovative services 
              represent the cutting edge of technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {INNOVATIVE_NEW_SERVICES.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${categoryColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing & Market Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-cyan-400">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>Market Price: {service.marketPrice}</p>
                      <p>ROI: {service.roi}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Cpu className="w-5 h-5 text-blue-400 mr-2" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Unique Value */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Award className="w-5 h-5 text-cyan-400 mr-2" />
                      Unique Value
                    </h4>
                    <p className="text-sm text-gray-200">
                      {service.uniqueValue}
                    </p>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're innovators, problem-solvers, and 
              strategic partners who deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering 200-400% ROI within 6-18 months for our clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-gray-300">
                Cutting-edge AI and machine learning technologies powering all our solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">
                SOC 2, ISO 27001, and industry-specific compliance standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">
                Most solutions deployed in 1-6 weeks with ongoing support and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of innovative companies already leveraging our cutting-edge services 
            to gain competitive advantages and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Quote
            </a>
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-gray-300 mb-4">
              <strong>Limited Time Offer:</strong> First 3 months at 50% off for new clients
            </p>
            <p className="text-sm text-gray-400">
              *Terms and conditions apply. Contact us for full details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}