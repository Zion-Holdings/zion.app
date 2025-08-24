import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield, ArrowRight, CheckCircle } from "lucide-react";

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
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Availability" },
    { icon: <Globe className="w-5 h-5" />, text: "Global Coverage" },
    { icon: <Shield className="w-5 h-5" />, text: "Certified Technicians" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Guaranteed Service" }
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-24 border-b border-zion-purple/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Available 24/7
            </div>
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              24x7 Global IT Onsite Services
            </GradientHeading>
          </div>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Our certified experts are ready to solve your IT challenges on-site.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 text-zion-slate-light"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-zion-cyan">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-zion-slate-light/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span className="text-sm">500+ Cities Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span className="text-sm">10K+ Happy Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="relative">
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-blue-light/30 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">
                  Tell us where you need help and we'll connect you with a local expert
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter service location (city, country)"
                    className="pl-12 bg-zion-blue-dark/50 border-zion-blue-light/50 focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light/60 h-14 text-lg"
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
                    <span className="flex items-center gap-2">
                      Request Service
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-xs text-zion-slate-light/60">
                  Available worldwide, 24 hours a day
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                  <span className="text-xs text-zion-cyan">Live Support</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-60"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
