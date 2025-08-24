import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Zap, Shield, Users } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }
  };

  const features = [
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: <Globe className="h-5 w-5" />, text: "Global Coverage", color: "text-zion-purple" },
    { icon: <Shield className="h-5 w-5" />, text: "Certified Technicians", color: "text-zion-cyan" },
    { icon: <Users className="h-5 w-5" />, text: "Expert Team", color: "text-zion-purple" }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/30 py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-purple text-sm font-medium">Premium IT Services</span>
            </motion.div>
          </div>

          <GradientHeading className="mb-6 text-4xl md:text-6xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our certified experts are ready to solve your IT challenges on-site.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className={`${feature.color}`}>
                  {feature.icon}
                </div>
                <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div 
            className="flex items-center gap-8 text-zion-slate-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-zion-cyan">150+</div>
              <div className="text-xs">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zion-purple">10K+</div>
              <div className="text-xs">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zion-cyan">24/7</div>
              <div className="text-xs">Support</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm p-8 rounded-2xl border border-zion-blue-light/30 shadow-2xl shadow-zion-purple/10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Request Service</h3>
              <p className="text-zion-slate-light text-sm">
                Enter your location and we'll connect you with the nearest technician
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter service location (city, country)"
                  className="bg-zion-blue-dark/50 border-zion-blue-light/50 focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light/60 h-12 text-base"
                />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light/40" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Service Now
                </Button>
              </motion.div>
            </form>

            <div className="text-center mt-6">
              <p className="text-xs text-zion-slate-light/80">
                Available worldwide, 24 hours a day
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">Live Support</span>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-60"
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-60"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
