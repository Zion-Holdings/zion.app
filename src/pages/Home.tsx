
import React from 'react';
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Your trusted partner for innovative technology solutions
        </p>
      </div>

      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Innovation</h3>
            <p className="text-muted-foreground">
              Cutting-edge technology solutions that drive your business forward.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-zion-purple">Excellence</h3>
            <p className="text-muted-foreground">
              Quality service delivery with attention to every detail.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-zion-blue">Partnership</h3>
            <p className="text-muted-foreground">
              Long-term relationships built on trust and mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
