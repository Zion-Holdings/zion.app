<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business with
          <span className="block bg-gradient-to-r from-zion-cyan to-zion-gold bg-clip-text text-transparent">
            Zion Tech Group
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
          Comprehensive AI, IT, and business solutions designed to accelerate your growth and innovation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/comprehensive-services"
            className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan-light transition-colors"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
            <p className="text-zion-slate-light text-sm">Cutting-edge artificial intelligence solutions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-zion-slate-light text-sm">Quick deployment and 24/7 support</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-white font-semibold mb-2">Cost Effective</h3>
            <p className="text-zion-slate-light text-sm">Competitive pricing with flexible plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Globe, Shield, Zap, MapPin, CheckCircle } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      }, 1000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
    { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left side - Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Professional IT Services
            </motion.div>
            
            <GradientHeading className="mb-6 text-4xl md:text-6xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Get instant quotes and rapid deployment for all your IT infrastructure needs.
            </p>
          </div>

          {/* Feature highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-sm text-zion-slate-light font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-8 text-zion-slate-light"
          >
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
          </motion.div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div variants={itemVariants} className="relative">
          <div className="bg-gradient-to-br from-zion-blue-light/20 to-zion-purple/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-blue-light/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
              <p className="text-zion-slate-light">Get instant quotes and deployment</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan" />
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter service location"
                  className="pl-12 bg-zion-blue-dark/50 border-zion-blue-light/30 focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-14 text-lg"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Request Service
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-zion-slate-light">
                Available worldwide, 24 hours a day
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Live Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
>>>>>>> f2b2fbcfb4f353ea65468110a1b8ef64d9d7cf73
