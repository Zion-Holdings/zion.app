<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GradientHeading } from "../GradientHeading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/router";
import { 
  Globe, 
  Clock, 
  Shield, 
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const benefits = [
  { icon: <Globe className="w-5 h-5" />, text: "Available Worldwide" },
  { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
  { icon: <Shield className="w-5 h-5" />, text: "Certified Technicians" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Guaranteed Service" }
];

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      const params = new URLSearchParams();
      if (location.trim()) params.append('location', location.trim());
      if (serviceType.trim()) params.append('service', serviceType.trim());
      router.push(`/it-onsite-services?${params.toString()}`);
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 113, 242, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(34, 221, 210, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
                <Globe className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-white font-medium">Global IT Services</span>
              </div>
            </div>

            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Don&apos;t let IT challenges slow down your business. Get expert help fast.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-zion-slate-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-zion-blue-light/10 backdrop-blur-md p-8 rounded-2xl border border-zion-blue-light/30 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Get a technician to your location</p>
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
              </div>
            </motion.div>

<<<<<<< HEAD
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 group"
                asChild
              >
                <a href="/quote" className="flex items-center gap-2">
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
=======
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Service Location
                  </label>
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, state, or country"
                    className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Service Type (Optional)
                  </label>
                  <Input
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    placeholder="e.g., Network setup, Hardware repair"
                    className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 shadow-lg hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
                >
                  Request Service Now
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-zion-slate-light">
                  Available worldwide, 24 hours a day • Response within 2 hours
                </p>
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}