import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
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
        </div>
      </div>
    </section>
  );
}
