<<<<<<< HEAD
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield, CheckCircle } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }
  };

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
    { icon: CheckCircle, text: "Guaranteed Service", color: "text-zion-purple-light" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-zion-cyan-light text-sm font-medium uppercase tracking-wider">IT Support Services</span>
            </div>
            
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Fast, reliable, and certified IT support for your business.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-zion-slate-light">
              <div>
                <div className="text-2xl font-bold text-zion-cyan">150+</div>
                <div className="text-sm">Countries Covered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-purple">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan-light">15min</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zion-blue-light/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service Now</h3>
                <p className="text-zion-slate-light">Get instant quotes and schedule service</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan" />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter service location (city, country)"
                    className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-12 text-lg"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 h-12 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    "Request Service"
                  )}
                </Button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-xs text-zion-slate-light">
                  Available worldwide, 24 hours a day
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Live Support</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-zion-purple rounded-full opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-cyan rounded-full opacity-40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
=======
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Server, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ITServiceRequestHero() {
  const { t } = useTranslation();

  const services = [
    { icon: <Wrench className="h-5 w-5" />, text: "Hardware Setup" },
    { icon: <Server className="h-5 w-5" />, text: "Network Configuration" },
    { icon: <Shield className="h-5 w-5" />, text: "Security Audits" },
    { icon: <Zap className="h-5 w-5" />, text: "Performance Optimization" }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              {t('home.it_services_badge') || "Professional IT Services"}
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            {t('home.it_services_title') || "Need Expert IT Support?"}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('home.it_services_subtitle') || "Get professional IT services delivered to your location. From setup to maintenance, our certified technicians have you covered."}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                {service.icon}
                <span className="text-sm font-medium">{service.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-light hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              {t('home.it_services_cta_primary') || "Request IT Service Quote"}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/it-onsite-services"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              {t('home.it_services_cta_secondary') || "Learn More"}
            </Link>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light/70 text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Same-day response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Certified technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
              <span>Warranty included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/30 rounded-lg rotate-45"
        animate={{ rotate: [45, 405], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/30 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
