
import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from 'lucide-react';


import { Button } from "@/components/ui/button";
import { AppStoreButtons } from "./AppStoreButtons";

export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config
  const appStoreUrl = "#"; // Replace with actual App Store URL when available
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available

  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-zion-cyan">Zion</span> in Your Pocket
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, now available on your mobile device.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            
            <Link href="/open-app">
              <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                Open App
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-auto">
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>
              <Phone className="w-full h-auto text-white" />
              {/* This would be replaced with an actual phone mockup image in production */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
