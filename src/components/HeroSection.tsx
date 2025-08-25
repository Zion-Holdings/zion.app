import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="w-4 h-4 bg-zion-cyan rounded-full"></div>
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-300">
          <div className="w-3 h-3 bg-zion-purple rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-700">
          <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>Innovating the Future of Technology</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Zion Tech Group
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
            The Future of Tech
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-12 leading-relaxed">
          Discover cutting-edge AI, Micro SAAS, IT services, and innovative solutions that transform businesses. 
          From artificial intelligence to blockchain, we're your premier technology partner.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            to="/comprehensive-services"
            className="group bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25 flex items-center gap-2"
          >
            Explore Services
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 flex items-center gap-2">
            <Play className="h-5 w-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-zion-slate-light">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-zion-slate-light">Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-zion-slate-light">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
            <div className="text-zion-slate-light flex items-center justify-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Rating
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}