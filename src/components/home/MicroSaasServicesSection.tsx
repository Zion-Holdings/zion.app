import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { getFeaturedMicroSaasServices } from '@/data/microSaasServices';

export function MicroSaasServicesSection() {
  const featuredServices = getFeaturedMicroSaasServices().slice(0, 3);

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover-lift"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-zion-slate-light">{service.rating}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
        {service.title}
      </h3>
      
      <p className="text-zion-slate-light mb-4 leading-relaxed text-sm">
        {service.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-zion-cyan">
          ${service.price}
          <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zion-slate-light">
          <Users className="w-3 h-3" />
          <span>{service.reviewCount} reviews</span>
        </div>
      </div>
      
      <Link
        to={`/micro-saas-services?service=${service.id}`}
        className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Featured Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge micro SAAS services. From AI-powered automation
            to enterprise IT solutions, we provide innovative tools that drive growth and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-zion-slate-light">Micro SAAS Services</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-zion-slate-light">Happy Clients</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-zion-slate-light">Success Rate</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover our complete range of micro SAAS services and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}