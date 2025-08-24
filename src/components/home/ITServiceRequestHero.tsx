import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield, ArrowRight } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">Global IT Services</span>
          </div>
          
          <GradientHeading className="mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our global network ensures rapid response times and expert support.
          </p>

          {/* Feature highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-zion-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-white">24/7 Availability</h4>
                <p className="text-sm text-zion-slate-light">Round-the-clock support worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Global Coverage</h4>
                <p className="text-sm text-zion-slate-light">Technicians in 150+ countries</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zion-purple-light/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-zion-purple-light" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Certified Experts</h4>
                <p className="text-sm text-zion-slate-light">Vetted and qualified professionals</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm border border-zion-blue-light/20 p-8 rounded-2xl shadow-2xl"
          variants={rightItemVariants}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
            <p className="text-zion-slate-light">Get a technician at your location</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter service location (city, country)"
                className="bg-zion-blue-dark/50 border-zion-blue-light/30 focus:border-zion-purple focus:ring-zion-purple text-white pl-10 py-4 text-lg placeholder:text-zion-slate-light/60"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-zion-slate-light">
              Available worldwide, 24 hours a day
            </p>
            <div className="flex justify-center items-center gap-4 mt-3 text-xs text-zion-slate-light">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Instant Quote
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Same Day Service
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
