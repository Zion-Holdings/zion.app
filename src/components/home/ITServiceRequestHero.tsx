import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Globe, Clock, Shield, MapPin, ArrowRight } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-zion-purple/20 rounded-lg">
              <Globe className="w-6 h-6 text-zion-purple" />
            </div>
            <span className="text-zion-cyan-light font-medium">Global IT Services</span>
          </div>
          
          <GradientHeading className="text-4xl md:text-6xl leading-tight">
            Professional IT Support
            <span className="block text-3xl md:text-4xl mt-2 text-zion-cyan-light">
              Available Worldwide
            </span>
          </GradientHeading>
          
          <p className="text-xl text-zion-slate-light leading-relaxed max-w-lg">
            Get expert IT technicians dispatched to your location within hours. 
            From emergency repairs to system upgrades, we provide comprehensive 
            technical support anywhere in the world.
          </p>

          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-slate-light">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-zion-cyan-light" />
              <span className="text-zion-slate-light">150+ Countries</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-zion-purple-light" />
              <span className="text-zion-slate-light">Same-Day Dispatch</span>
            </div>
          </div>
        </div>

        <div className="bg-zion-blue-light/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Request Service Now</h3>
            <p className="text-zion-slate-light">Get a technician dispatched to your location</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light">
                Service Location
              </label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, country, or address"
                className="bg-zion-blue-dark/50 border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white placeholder-zion-slate-light h-12 text-lg"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Request Service
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-xs text-zion-slate-light">
              <Clock className="w-3 h-3 inline mr-1" />
              Available worldwide, 24 hours a day
            </p>
            <p className="text-xs text-zion-slate-light mt-1">
              <Shield className="w-3 h-3 inline mr-1" />
              All technicians are certified and insured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
