
import React, { useEffect, useRef } from 'react';
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
        {/* Enhanced background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-transparent to-zion-purple/20 animate-pulse"></div>

        {/* Enhanced floating particles with better positioning */}
        <div className="absolute inset-0">
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "1s" }}
            className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-40"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "2s" }}
            className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-50"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "0.5s" }}
            className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-30"
          />
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "1.5s" }}
            className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-zion-purple-light opacity-40"
          />
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
        </div>

        <motion.div
          className="container relative z-10 px-4 mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced title with better typography */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Zion Tech Group - <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">The Future of Tech</span>
            </h1>
          </motion.div>

          {/* Enhanced subtitle with better spacing */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place. Powered by cutting-edge AI matching technology.
            </p>
          </motion.div>

          {/* Enhanced CTA buttons with better mobile layout */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto"
          >
            <Link
              to="/expanded-services"
              className="group bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-white font-bold"
            >
              <Sparkles className="w-5 h-5" />
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105 font-bold"
            >
              <Globe className="w-5 h-5" />
              Get in Touch
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Global Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Contact Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your technology goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
              <p className="text-zion-slate-light mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-zion-cyan font-semibold hover:text-zion-cyan-light transition-colors">
                +1 302 464 0950
              </a>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
              <p className="text-zion-slate-light mb-4">Send us your project details</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan font-semibold hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
              <p className="text-zion-slate-light mb-4">Meet us at our headquarters</p>
              <address className="text-zion-cyan font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </address>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-cyan-dark text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
