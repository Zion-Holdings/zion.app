import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check,
  Building, Cpu, Database, Cloud, Lock, ShoppingCart, Lightbulb,
  Users, TrendingUp, Globe, Zap, Star, Award, Target as TargetIcon
} from 'lucide-react';

// Import 2038 innovative services
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038IndustryServices } from '../data/innovative-2038-industry-services';
import { innovative2038ConsultingServices } from '../data/innovative-2038-consulting-services';

const Innovative2038ServicesShowcase: React.FC = () => {
  const all2038Services = [
    ...innovative2038AIServices,
    ...innovative2038ITServices,
    ...innovative2038MicroSaasServices,
    ...innovative2038IndustryServices,
    ...innovative2038ConsultingServices
  ];

  const stats = [
    { number: "25+", label: "Innovative Services", icon: Star },
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Globe }
  ];

  const highlights = [
    {
      title: "AI-Powered Innovation",
      description: "Cutting-edge AI services including emotional intelligence, creativity, and predictive analytics",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum infrastructure and strategic consulting services",
      icon: Atom,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Industry 4.0 Automation",
      description: "Smart manufacturing, retail intelligence, and logistics optimization platforms",
      icon: Building,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Strategic Consulting",
      description: "Expert guidance for AI transformation, cybersecurity, and digital transformation",
      icon: Lightbulb,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <>
      <SEO 
        title="Innovative 2038 Services Showcase | Zion Tech Group - Cutting-Edge AI, IT & Micro SAAS Solutions" 
        description="Discover our revolutionary 2038 services portfolio featuring AI emotional intelligence, quantum computing, smart manufacturing, and strategic consulting solutions. Transform your business with next-generation technology." 
        canonical="https://ziontechgroup.com/innovative-2038-services-showcase/"
      />

      <Layout>
        <div className="min-h-screen bg-black text-white pt-24">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                  Revolutionary 2038 Services
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  The Future of <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technology</span> is Here
                </h1>
                
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                  Experience our comprehensive portfolio of innovative 2038 services featuring cutting-edge AI, 
                  quantum computing, smart manufacturing, and strategic consulting solutions that are transforming industries worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    <span>Get Started Today</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full">
                        <stat.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Capabilities</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our 2038 services portfolio represents the pinnacle of technological innovation, 
                  combining AI, quantum computing, and industry expertise to deliver unprecedented value.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`p-3 bg-gradient-to-r ${highlight.color} rounded-full mr-4`}>
                        <highlight.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Showcase */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our most innovative and impactful 2038 services that are reshaping industries 
                  and driving digital transformation across the globe.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {all2038Services.slice(0, 9).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          <Star className="w-3 h-3" />
                          <span>Popular</span>
                        </div>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className="text-4xl mb-4">{service.icon}</div>

                    {/* Service Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at</h4>
                      <div className="text-2xl font-bold text-white">
                        {service.price}{service.period}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3">
                      <motion.a
                        href={service.link}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                      >
                        <span>Contact Sales</span>
                      </motion.a>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* View All Services CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-16"
              >
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-2xl shadow-purple-500/25"
                >
                  <span>View All 2038 Services</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience the <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Future</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join leading organizations that trust Zion Tech Group for their digital transformation. 
                  Our expert team is ready to guide you through your technology journey with our revolutionary 2038 services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    <TargetIcon className="w-6 h-6" />
                    <span>Explore Services</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Innovative2038ServicesShowcase;