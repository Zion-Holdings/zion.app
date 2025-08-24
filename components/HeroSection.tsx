import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm text-white/80 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 pulse-slow"></div>
          Autonomous Innovation Hub
        </div>

        {/* Main Heading */}
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl font-black mb-8 leading-tight"
        >
          <span className="block gradient-text animate-fade-in stagger-1">
            Zion Tech
          </span>
          <span className="block text-white/90 text-4xl md:text-6xl font-bold animate-fade-in stagger-2">
            Group
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in stagger-3">
          Leading-edge technology solutions and autonomous innovation systems that transform businesses and drive the future of digital transformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in stagger-4">
          <Link
            href="/services"
            className="btn-primary text-lg px-8 py-4 transform hover:scale-105 hover:shadow-2xl"
          >
            Explore Services
          </Link>
          <Link
            href="/case-studies"
            className="btn-secondary text-lg px-8 py-4 transform hover:scale-105"
          >
            View Case Studies
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in stagger-5">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-white/70">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-white/70">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-white/70">AI-Powered Support</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;