import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MessageSquare, Clock, Shield, Zap } from 'lucide-react';

export default function ITServiceRequestHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Content */}
          <motion.div variants={leftVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Need IT Services?
              <span className="block text-zion-cyan">We're Here to Help</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Get instant access to our network of certified IT professionals. 
              From troubleshooting to full system implementations, we've got you covered.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">24/7 Support</h4>
                  <p className="text-zion-slate-light text-sm">Round-the-clock assistance</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-zion-purple" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Certified Experts</h4>
                  <p className="text-zion-slate-light text-sm">Vetted professionals only</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instant Matching</h4>
                  <p className="text-zion-slate-light text-sm">AI-powered connections</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group"
                asChild
              >
                <a href="/request-quote" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  Contact Support
                  <MessageSquare className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form preview */}
          <motion.div variants={rightVariants} className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Quick Service Request</h3>
                <p className="text-zion-slate-light">Tell us what you need</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-zion-purple" />
                  <span className="text-white">support@ziontechgroup.com</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-zion-cyan" />
                  <span className="text-white">Live Chat Available</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-zion-slate-light text-sm mb-3">
                  Average response time: <span className="text-zion-cyan font-semibold">15 minutes</span>
                </p>
                <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-sm">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                  Online Now
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
