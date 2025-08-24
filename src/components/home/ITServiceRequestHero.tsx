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
    <section className="bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple py-16 md:py-24 border-b border-zion-purple/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-zion-purple-light" />
                <span className="text-sm text-zion-purple-light font-medium">
                  Global IT Services
                </span>
              </div>
            </div>
            
            <GradientHeading className="mb-6 text-4xl md:text-5xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              From emergency repairs to scheduled maintenance, we've got you covered.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm text-zion-slate-light font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-zion-slate-light">
              <div>
                <div className="text-2xl font-bold text-zion-cyan">150+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-purple">10K+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zion-cyan-light">99.9%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-zion-blue-light/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Get a technician at your location</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Location
                  </label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, address, or coordinates"
                    className="bg-zion-blue-dark/50 border-zion-blue-light/30 focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light/60 h-12"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 h-12 transition-all duration-200 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Request Service Now"}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-zion-slate-light">
                  <Clock className="w-3 h-3 inline mr-1" />
                  Available worldwide, 24 hours a day
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
