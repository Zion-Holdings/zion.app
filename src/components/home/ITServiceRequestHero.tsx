import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
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

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple-light text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-zion-purple rounded-full mr-2 animate-pulse"></span>
                Global IT Services
              </div>
            </div>

            <GradientHeading className="mb-8 text-5xl md:text-6xl font-bold leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-xl text-zion-slate-light mb-12 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our certified experts are ready to solve your IT challenges 24/7.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-zion-slate-light">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 text-lg font-semibold"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/comprehensive-services')}
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 text-lg font-semibold"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request IT Services</h3>
              <p className="text-zion-slate-light">Tell us where you need assistance</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter your location or address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-zion-blue-light/20 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white py-3 font-semibold"
              >
                {isSubmitting ? 'Processing...' : 'Request Services'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-zion-slate-light">
                Response time: <span className="text-zion-cyan font-semibold">Under 15 minutes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
