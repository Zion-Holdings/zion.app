import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Brain, Shield, Rocket, Cpu, Users,
  ArrowRight, Check, Star, TrendingUp, Zap, Globe,
  Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';
import { comprehensiveAdvertisingMarketingServices } from '../data/comprehensive-advertising-marketing-services';

const AdvertisingMarketingServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO 
        title="Advertising & Marketing Services | Zion Tech Group"
        description="Revolutionary AI-powered advertising and marketing automation solutions. Increase ROI by 300%, reduce costs by 60%, and automate your entire marketing strategy."
        keywords={[
          "AI advertising", "marketing automation", "digital marketing", "social media automation", 
          "content marketing", "email marketing", "influencer marketing", "marketing analytics"
        ]}
      />

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-tight tracking-tight">
              Revolutionary Advertising & Marketing Solutions
            </h1>
          </motion.div>
          
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your marketing with <span className="text-green-400 font-semibold">AI-powered automation</span>, <span className="text-emerald-400 font-semibold">intelligent optimization</span>, and <span className="text-teal-400 font-semibold">unprecedented ROI</span>
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <button 
              className="group px-12 py-6 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-bold text-xl rounded-2xl hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-green-500/50 relative overflow-hidden"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              className="px-12 py-6 border-2 border-green-400 text-green-400 font-bold text-xl rounded-2xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-green-400/50 group"
              onClick={() => window.location.href = '/services'}
            >
              <span>View All Services</span>
            </button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 group">
              <div className="relative">
                <TrendingUp className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors" />
                <div className="absolute inset-0 w-10 h-10 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-400/30 transition-all"></div>
              </div>
              <span className="text-xl font-bold text-white">300% ROI Increase</span>
              <span className="text-sm text-gray-500">Average improvement</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 group">
              <div className="relative">
                <Zap className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div className="absolute inset-0 w-10 h-10 bg-emerald-400/20 rounded-full blur-lg group-hover:bg-emerald-400/30 transition-all"></div>
              </div>
              <span className="text-xl font-bold text-white">60% Cost Reduction</span>
              <span className="text-sm text-gray-500">Marketing efficiency</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 group">
              <div className="relative">
                <Globe className="w-10 h-10 text-teal-400 group-hover:text-teal-300 transition-colors" />
                <div className="absolute inset-0 w-10 h-10 bg-teal-400/20 rounded-full blur-lg group-hover:bg-teal-400/30 transition-all"></div>
              </div>
              <span className="text-xl font-bold text-white">20+ Hours Saved</span>
              <span className="text-sm text-gray-500">Per week automation</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Showcase */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-b from-gray-900/80 via-green-900/40 to-gray-800/80 relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Revolutionary Marketing Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveAdvertisingMarketingServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                
                <div className="text-3xl font-bold text-green-400 mb-6">
                  ${service.price.monthly}/month
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <Star className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                  onClick={() => setSelectedService(service.id)}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {(() => {
                const service = comprehensiveAdvertisingMarketingServices.find(s => s.id === selectedService);
                if (!service) return null;
                
                return (
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
                        <p className="text-xl text-gray-300">{service.tagline}</p>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                        <p className="text-gray-300 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
                        <div className="bg-gray-700 rounded-lg p-4 mb-6">
                          <div className="text-2xl font-bold text-green-400 mb-2">
                            ${service.price.monthly}/month
                          </div>
                          <div className="text-gray-300">
                            <div>Yearly: ${service.price.yearly}/year</div>
                            <div>Trial: {service.price.trialDays} days</div>
                            <div>Setup: {service.price.setupTime}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-4">Target Audience</h3>
                        <ul className="space-y-2 mb-6">
                          {service.targetAudience.map((audience, index) => (
                            <li key={index} className="text-gray-300 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              {audience}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                        <ul className="space-y-2 mb-6">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-gray-300 flex items-center gap-2">
                              <Star className="w-4 h-4 text-green-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold text-white mb-4">ROI</h3>
                        <p className="text-gray-300 mb-6">{service.roi}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-6 mt-6">
                      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <div className="text-center sm:text-left">
                          <div className="text-sm text-gray-400 mb-2">Contact Information</div>
                          <div className="flex items-center gap-2 text-gray-300 mb-1">
                            <Phone className="w-4 h-4" />
                            {service.contactInfo.mobile}
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 mb-1">
                            <Mail className="w-4 h-4" />
                            {service.contactInfo.email}
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            {service.contactInfo.address}
                          </div>
                        </div>
                        
                        <button 
                          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-teal-900/40 relative overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-10 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Revolutionize Your Marketing?
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of companies already leveraging our <span className="text-green-400 font-semibold">AI-powered marketing automation</span> solutions
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              className="px-12 py-6 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-bold text-xl rounded-2xl hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500/50"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Marketing Revolution
            </button>
            <button 
              className="px-12 py-6 border-2 border-green-400 text-green-400 font-bold text-xl rounded-2xl hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50"
              onClick={() => window.location.href = '/services'}
            >
              Explore All Services
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AdvertisingMarketingServices;