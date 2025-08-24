import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Clock, Shield, Users } from "lucide-react";

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <GradientHeading className="mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our global network ensures rapid response times and expert service delivery.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 text-zion-cyan">
              <Globe className="h-6 w-6" />
              <span className="font-medium">Global Coverage</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Clock className="h-6 w-6" />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-3 text-zion-cyan">
              <Shield className="h-6 w-6" />
              <span className="font-medium">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Users className="h-6 w-6" />
              <span className="font-medium">Expert Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-zion-blue-light/10 via-zion-blue/20 to-zion-purple/10 backdrop-blur-sm border border-zion-blue-light/20 p-8 rounded-2xl shadow-2xl shadow-zion-blue/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
              <p className="text-zion-slate-light">Enter your location to get started</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter service location (city, country)"
                  className="bg-zion-blue-dark/50 border-zion-blue-light/30 focus:border-zion-cyan focus:ring-zion-cyan/20 text-white placeholder-zion-slate-light text-lg py-4 px-6 rounded-xl backdrop-blur-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Globe className="h-5 w-5 text-zion-cyan" />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zion-cyan via-zion-cyan to-zion-cyan-light hover:from-zion-cyan-light hover:via-zion-cyan hover:to-zion-cyan text-zion-blue-dark text-lg py-4 rounded-xl font-semibold shadow-lg shadow-zion-cyan/25 hover:shadow-zion-cyan/40 transition-all duration-300 transform hover:scale-105"
              >
                Request Service Now
              </Button>
            </form>
            
            <div className="text-center mt-6">
              <p className="text-xs text-zion-slate-light">
                Available worldwide, 24 hours a day
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-xs text-zion-cyan">Live Support Available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
