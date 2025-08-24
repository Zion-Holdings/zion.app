
import React from 'react';
import { MicroSaasServicesSection } from "@/components/home/MicroSaasServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
          Zion Tech Group
        </h1>
        <p className="text-xl text-center text-zion-slate-light mb-16 max-w-4xl mx-auto">
          The world's first free marketplace dedicated to high-tech and artificial intelligence.
        </p>
        
        <MicroSaasServicesSection />
      </div>
    </div>
  );
}
