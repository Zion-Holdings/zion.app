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
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" }
  ];

  return (
    <section className="bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-dark py-16 md:py-24 border-b border-zion-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientHeading className="mb-6 text-3xl md:text-4xl lg:text-5xl leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Fast, reliable, and secure IT support when you need it most.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-purple/20">
                <div className="text-2xl font-bold text-zion-cyan">150+</div>
                <div className="text-sm text-zion-slate-light">Countries</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-purple/20">
                <div className="text-2xl font-bold text-zion-purple">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-purple/20">
                <div className="text-2xl font-bold text-zion-cyan-light">15min</div>
                <div className="text-sm text-zion-slate-light">Response</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Get instant quotes from certified technicians</p>
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
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 h-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Request Service
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-zion-slate-light">
                  Available worldwide, 24 hours a day
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                  <span className="text-xs text-zion-cyan">Live Support</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
