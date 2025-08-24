import React, { useState } from "react";
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
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-zion-cyan-light text-sm font-medium uppercase tracking-wider">IT Support Services</span>
            </div>
            
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan-light bg-clip-text text-transparent">
              24x7 Global IT Onsite Services
            </h1>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Fast, reliable, and certified IT support for your business.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
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
                <div className="text-2xl font-bold text-zion-cyan-light">15min</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/20"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request IT Support</h3>
              <p className="text-zion-slate-light">Get immediate assistance from certified technicians</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Service Location
                </label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter your city or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? "Processing..." : "Request Service Now"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-zion-slate-light">
                By submitting, you agree to our terms and privacy policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
