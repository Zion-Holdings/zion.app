import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

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
    <section className="bg-zion-blue-dark py-16 md:py-24 border-b border-zion-purple/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <GradientHeading className="mb-6 text-4xl md:text-5xl">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md">
            Request professional technicians anywhere in the world, anytime you need them.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter service location"
              className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6">
              Request Service
            </Button>
          </form>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            Available worldwide, 24 hours a day
          </p>
        </div>
      </div>
    </section>
  );
}
