import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);


  const animatedTexts = [
    "Autonomous Innovation Hub",
    "AI-Powered Solutions",
    "Future-Ready Technology",
    "Digital Transformation",
    "Smart Automation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 transition-all duration-1000">
              {animatedTexts[currentTextIndex]}
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          Leading-edge technology solutions and intelligent automation systems that drive 
          <span className="text-cyan-400 font-semibold"> digital transformation</span> and 
          <span className="text-purple-400 font-semibold"> innovation</span> across industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
          >
            <span>Explore Our Services</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          
          <Link
            href="/case-studies"
            className="group px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-xl flex items-center space-x-2"
          >
            <span>View Case Studies</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Delivered", icon: "🚀" },
            { number: "50+", label: "Enterprise Clients", icon: "🏢" },
            { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: "🤖", x: "10%", y: "20%", delay: "0s" },
          { icon: "⚡", x: "85%", y: "15%", delay: "1s" },
          { icon: "🔮", x: "15%", y: "80%", delay: "2s" },
          { icon: "🚀", x: "80%", y: "75%", delay: "3s" },
          { icon: "💻", x: "50%", y: "10%", delay: "4s" },
          { icon: "🌐", x: "50%", y: "90%", delay: "5s" }
        ].map((item, index) => (
          <div
            key={index}
            className="absolute text-2xl md:text-3xl opacity-20 animate-float"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
              animationDuration: '6s'
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;