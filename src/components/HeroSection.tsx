
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Users, Globe, Star, TrendingUp, Shield, Brain, Cloud, Code } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
      </div>

      {/* Moving Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-slide-in-left"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500 to-transparent animate-slide-in-right"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          🚀 The Future of Tech is Here
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="gradient-text neon-flicker">ZION TECH GROUP</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-normal">
            Where Innovation Meets Excellence
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Discover cutting-edge AI services, micro SAAS solutions, and enterprise-grade IT infrastructure. 
          We're not just building the future – we're defining it with every line of code, every algorithm, 
          and every breakthrough innovation.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Verified Talents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">4.9★</div>
            <div className="text-gray-400 text-sm">Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button asChild size="lg" className="cyber-button text-lg px-8 py-4 h-auto">
            <Link to="/marketplace">
              <span>Explore Marketplace</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/50">
            <Link to="/request-quote">
              <span>Get Free Quote</span>
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl">
            <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-gray-400 text-sm">Advanced algorithms, neural networks, and intelligent automation solutions</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade security, threat detection, and compliance management</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
            <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Cloud & Infrastructure</h3>
            <p className="text-gray-400 text-sm">Scalable cloud solutions, DevOps automation, and infrastructure optimization</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="text-gray-500 font-medium">Microsoft</span>
            <span className="text-gray-500 font-medium">Google</span>
            <span className="text-gray-500 font-medium">Amazon</span>
            <span className="text-gray-500 font-medium">Meta</span>
            <span className="text-gray-500 font-medium">Netflix</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
