import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield, ArrowRight } from "lucide-react";

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
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock support worldwide"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Technicians available in 150+ countries"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Experts",
      description: "Vetted and certified professionals"
    }
  ];

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

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-zion-purple/20 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-zion-cyan/20 rotate-12 opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-cyan text-sm font-medium">Available Worldwide</span>
          </div>
          
          <GradientHeading className="mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our global network ensures rapid response times and expert service delivery.
          </p>

          {/* Feature highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-zion-cyan" />
              </div>
              <span className="text-zion-slate-light">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-zion-purple" />
              </div>
              <span className="text-zion-slate-light">Global Coverage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-zion-cyan" />
              </div>
              <span className="text-zion-slate-light">Certified Technicians</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={formVariants}
          className="relative"
        >
          <div className="bg-zion-blue-light/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request Service Now</h3>
              <p className="text-zion-slate-light">Get instant quotes from local experts</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan" />
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter service location"
                  className="pl-10 bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-12 rounded-xl"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Request Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-zion-slate-light">
                <Clock className="inline w-3 h-3 mr-1" />
                Available worldwide, 24 hours a day
              </p>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -top-4 -right-4 bg-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              150+ Countries
            </span>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              &lt; 2hr Response
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
