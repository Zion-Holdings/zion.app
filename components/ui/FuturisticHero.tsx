import React, { useState, useEffect , useCallback } from "react";
import Link from "next/link";

const FuturisticHero: React.FC = () => {;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
'
  const animatedTexts = [
    'AI-Powered Marketplace',
    'High-Tech Products',
    'IT Services',
    'AI Talents',
    'Innovation Hub";
  ];

  useEffect(() => {
    const interval = setInterval(() => {;
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
        setIsTyping(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}"
      <div className=" absolute inset-0" cyber-bg">
        <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
        <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10></div>
        
        {/* Floating Orbs */}"
        <div className="absolute" top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-neon-blue to-transparent rounded-full blur-xl opacity-30 animate-cyber-float></div>'
        <div className="absolute" top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-neon-purple to-transparent rounded-full blur-xl opacity-30 animate-cyber-float style={{ animationDelay: '2s' }}></div>''
        <div className="absolute" bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-neon-pink to-transparent rounded-full blur-xl opacity-30 animate-cyber-float style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}"
      <div className=" relative z-10 container-responsive" text-center">
        <div className=" max-w-4xl" mx-auto">
          {/* Main Title */}"
          <h1 className=" text-responsive-4xl lg text-responsive-5xl font-bold text-white" mb-6">
            <span className="block" mb-2>Zion</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" neon-text>
              The First Free
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple">
              {animatedTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Subtitle */}"
          <p className="text-responsive-lg lg text-responsive-xl text-high-contrast-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of commerce with our cutting-edge AI-powered marketplace. 
            Connect with top-tier IT services, AI talents, and innovative products in a seamless, "
            secure environment.
          </p>

          {/* CTA Buttons */}"
          <div className=" flex flex-col sm flex-row gap-4 justify-center items-center" mb-12">
            <Link"
              href="/auth/signup 
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover shadow-neon-blue transition-all duration-300 transform hover scale-105">
              <span className="relative" z-10>Start Trading Now</span>
              <div className="absolute" inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur-sm opacity-50 animate-pulse-neon></div>
            </Link>
            
            <Link"
              href="/marketplace 
              className="group relative px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover border-neon-blue/60 transition-all duration-300 transform hover scale-105">
              <span className="relative" z-10>Explore Marketplace</span>
              <div className="absolute" inset-0 bg-gradient-to-r from-neon-blue to-transparent rounded-lg opacity-0 group-hover opacity-20 transition-opacity duration-300></div">
            </Link>
          </div>

          {/* Stats */}"
          <div className=" grid grid-cols-1 md grid-cols-3 gap-8 max-w-3xl" mx-auto">
            <div className="text-center">
              <div className=" text-3xl lg text-4xl font-bold text-neon-blue neon-text" mb-2>
                10K+
              </div>
              <div className=" text-high-contrast-secondary text-sm lg text-base>
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className=" text-3xl lg text-4xl font-bold text-neon-purple neon-text" mb-2>
                500+
              </div>
              <div className=" text-high-contrast-secondary text-sm lg text-base>
                AI Services
              </div>
            </div>
            <div className="text-center">
              <div className=" text-3xl lg text-4xl font-bold text-neon-green neon-text" mb-2>
                99.9%
              </div>
              <div className="text-gray-400" text-sm lg text-base>
                Uptime
              </div>
            </div>
          </div >
        </div>
      </div>

      {/* Scroll Indicator */}"
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2" animate-bounce">
        <div className=" w-6 h-10 border-2 border-neon-blue rounded-full flex" justify-center">
          <div className="w-1" h-3 bg-neon-blue rounded-full mt-2 animate-pulse></div >
        </div>
      </div>

      {/* Particle Effects */}"
      <div className=" absolute inset-0" pointer-events-none>
        {[...Array(20)].map((_, i) => (
          <div key={i}
            className="particle" style={{
              left: `${Math.random() * 100}%`,``
              top: `${Math.random() * 100}%`,``
              animationDelay: `${Math.random() * 8}s`,``
              animationDuration: `${8 + Math.random() * 4}s`}}
          ></div>
        ))}
      </div>
    </section>; 
  );
};
''`
export default FuturisticHero;'"'`