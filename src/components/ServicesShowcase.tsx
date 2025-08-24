import React from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { Zap, Shield, Rocket, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesShowcase() {
  const popularServices = COMPREHENSIVE_SERVICES.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple min-h-screen">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why Choose <span className="text-zion-cyan">Zion Tech Group</span> Services?
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            We deliver enterprise-grade solutions with startup agility and competitive pricing
          </p>
        </motion.div>

        {/* Enhanced Key Features */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Rapid Deployment</h3>
            <p className="text-zion-slate-light">Get your solutions up and running in days, not months</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Enterprise Security</h3>
            <p className="text-zion-slate-light">Bank-level security and compliance built-in</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Scalable Architecture</h3>
            <p className="text-zion-slate-light">Grow from startup to enterprise seamlessly</p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-purple-light to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Expert Support</h3>
            <p className="text-zion-slate-light">24/7 technical support and consultation</p>
          </motion.div>
        </motion.div>

        {/* Enhanced Popular Service Categories */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Popular Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div 
                key={service.id} 
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan text-sm font-semibold rounded-full border border-zion-cyan/30">
                    {SERVICE_CATEGORIES.find(cat => cat.id === service.category)?.name || 'Service'}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm text-zion-slate-light font-medium">{service.rating}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
                <p className="text-zion-slate-light text-base mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-zion-cyan">
                    ${service.price}
                  </span>
                  <span className="text-sm text-zion-slate-light">{service.currency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced What Sets Us Apart */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.div 
                variants={cardVariants}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Competitive Pricing</h4>
                  <p className="text-zion-slate-light">Up to 40% lower than enterprise competitors</p>
                </div>
              </motion.div>
              <motion.div 
                variants={cardVariants}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Global Reach</h4>
                  <p className="text-zion-slate-light">Serving clients across 50+ countries</p>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div 
                variants={cardVariants}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Proven Track Record</h4>
                  <p className="text-zion-slate-light">500+ successful deployments and counting</p>
                </div>
              </motion.div>
              <motion.div 
                variants={cardVariants}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Future-Proof Technology</h4>
                  <p className="text-zion-slate-light">Built with the latest AI and cloud technologies</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Pricing Tiers */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Transparent, Competitive Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-4 text-white">Startup</h4>
              <p className="text-4xl font-bold text-zion-cyan mb-6">$299</p>
              <p className="text-zion-slate-light mb-6 text-lg">Perfect for small teams and MVPs</p>
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  Basic Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  Standard Features
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  Community Access
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-2xl shadow-2xl p-8 text-center border-2 border-zion-cyan transform scale-105"
            >
              <h4 className="text-2xl font-bold mb-4 text-white">Business</h4>
              <p className="text-4xl font-bold text-white mb-6">$799</p>
              <p className="text-zion-slate-light mb-6 text-lg">Ideal for growing businesses</p>
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Priority Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Advanced Features
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Custom Integration
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-4 text-white">Enterprise</h4>
              <p className="text-4xl font-bold text-zion-cyan mb-6">$2,499</p>
              <p className="text-zion-slate-light mb-6 text-lg">For large organizations</p>
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  All Features
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                  Dedicated Manager
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-zion-cyan to-zion-cyan-dark rounded-2xl p-12 text-white shadow-2xl border border-zion-cyan/30"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-zion-slate-light max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a custom quote
          </p>
          
          {/* Enhanced Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-zion-cyan-light" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-zion-cyan-light" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-zion-cyan-light" />
              <span className="font-semibold text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="space-x-6">
            <motion.a 
              href="/comprehensive-services" 
              className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl font-bold hover:bg-zion-slate-light transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a 
              href="/services-comparison" 
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-zion-cyan transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Compare Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}