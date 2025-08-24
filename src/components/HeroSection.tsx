
import React from 'react';
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-light opacity-90"></div>
      
      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Enhanced Animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 left-1/6 w-1 h-1 rounded-full bg-zion-purple-light opacity-60 animate-ping animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-2 h-2 rounded-full bg-zion-cyan opacity-40 animate-bounce animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Neon Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-40"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-purple to-transparent opacity-40"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-gradient">
          Zion Tech Group
        </h1>

        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
          Your trusted partner for innovative technology solutions and digital transformation
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/services"
            className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1 neon-glow"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-6 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1 neon-glow"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
