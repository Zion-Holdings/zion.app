import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse" />
          <span className="text-sm text-white/80 font-medium">Autonomous Innovation Hub</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in stagger-1">
          <span className="block text-white mb-4">Zion</span>
          <span className="block gradient-text">Tech Group</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in stagger-2">
          Leading-edge technology solutions and{' '}
          <span className="text-cyan-400 font-semibold">autonomous innovation systems</span>{' '}
          that transform businesses and drive the future of digital transformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in stagger-3">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          
          <Link
            href="/case-studies"
            className="group px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View Our Work</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in stagger-4">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-white/70 text-sm md:text-base">
              Projects Delivered
            </div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-white/70 text-sm md:text-base">
              Uptime Guarantee
            </div>
          </div>
          
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-white/70 text-sm md:text-base">
              Support Available
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          ⚡
        </div>
        <div className="absolute top-1/3 right-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          🚀
        </div>
        <div className="absolute bottom-1/3 left-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          💡
        </div>
        <div className="absolute bottom-1/4 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          🔮
        </div>
      </div>
    </section>
  );
};

export default HeroSection;