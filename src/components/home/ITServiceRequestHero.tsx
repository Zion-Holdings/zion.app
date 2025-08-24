import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield } from "lucide-react";

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

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <GradientHeading className="mb-6 text-4xl md:text-5xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our global network ensures rapid response times and expert service delivery.
          </p>
          
          {/* Feature highlights */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-zion-slate-light">
              <Clock className="w-5 h-5 text-zion-cyan" />
              <span>Available 24/7 worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <Globe className="w-5 h-5 text-zion-purple" />
              <span>Global technician network</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <Shield className="w-5 h-5 text-zion-cyan-light" />
              <span>Certified professionals</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-zion-blue-light/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                Service Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-purple" />
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city, country, or address"
                  className="bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white pl-10 py-4 text-lg rounded-lg transition-all duration-200"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting || !location.trim()}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 rounded-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Requesting Service...
                </div>
              ) : (
                "Request Service"
              )}
            </Button>
            
            <p className="text-xs text-center text-zion-slate-light mt-4">
              Available worldwide, 24 hours a day • Response within 2 hours
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
