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
=======
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan" },
    { icon: CheckCircle, text: "Guaranteed Service", color: "text-zion-purple" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                Available 24/7
              </div>
              
              <GradientHeading className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                24x7 Global IT Onsite Services
              </GradientHeading>
              
              <p className="text-lg md:text-xl text-zion-slate-light leading-relaxed max-w-lg">
                Request professional technicians anywhere in the world, anytime you need them. 
                Our certified experts provide rapid response and guaranteed solutions for all your IT needs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span>500+ Cities Covered</span>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Enhanced Form Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                  <p className="text-zion-slate-light">Get a technician at your location within hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter service location (city, address, or coordinates)"
                      className="pl-10 pr-4 py-4 bg-white/10 border-zion-cyan/30 focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light rounded-xl"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      'Request Service Now'
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-zion-slate-light">
                    Available worldwide, 24 hours a day
                  </p>
                  <div className="flex justify-center items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-zion-cyan text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Instant Quote</span>
                    </div>
                    <div className="flex items-center gap-1 text-zion-purple text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>No Hidden Fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-9715
        </div>
      </div>
    </section>
  );
}
