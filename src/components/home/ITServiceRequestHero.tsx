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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Navigate after showing success state
      setTimeout(() => {
        navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      }, 1500);
    }
  };

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-blue" },
    { icon: CheckCircle, text: "Instant Response", color: "text-green-400" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">
              IT Support Services
            </span>
          </div>
          
          <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
            24x7 Global IT Onsite Services
          </GradientHeading>
          
          <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
            Request professional technicians anywhere in the world, anytime you need them. 
            Get instant quotes and rapid response times for all your IT infrastructure needs.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-sm text-zion-slate-light">{feature.text}</span>
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
              <div className="text-2xl font-bold text-zion-blue">15min</div>
              <div className="text-sm">Response Time</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-zion-blue-light/20 to-zion-purple/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/30">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Request Service</h3>
                  <p className="text-zion-slate-light text-sm">
                    Enter your location to get instant quotes
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter service location (city, country)"
                      className="bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light h-12 text-lg"
                      required
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-lg py-6 h-12 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Get Instant Quote
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </form>
                
                <div className="text-center mt-4">
                  <p className="text-xs text-zion-slate-light">
                    Available worldwide, 24 hours a day
                  </p>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                <p className="text-zion-slate-light mb-4">
                  Redirecting you to service details...
                </p>
                <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
              </motion.div>
            )}
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </motion.div>
      </div>
    </section>
  );
}
