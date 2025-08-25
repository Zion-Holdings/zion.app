import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroStats {
  number: string;
  label: string;
  icon: string;
  color: string;
}

const HeroStats = memo<{ stats: HeroStats[] }>(({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {stats.map((stat, index) => (
      <div 
        key={index} 
        className="text-center animate-fade-in-up group" 
        style={{ animationDelay: `${index * 0.2}s` }}
        role="region"
        aria-label={`${stat.label} statistics`}
      >
        <div className="relative mb-4">
          <div 
            className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300"
            role="img"
            aria-label={stat.label}
          >
            {stat.icon}
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </div>
        <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {stat.number}
        </div>
        <div className="text-gray-400 font-medium">{stat.label}</div>
      </div>
    ))}
  </div>
));

const PerformanceOptimizedHero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const loadTimer = setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  const stats: HeroStats[] = [
    { number: "100+", label: "AI Services", icon: "🤖", color: "from-cyan-400 to-blue-400" },
    { number: "150+", label: "Micro SAAS Solutions", icon: "💻", color: "from-blue-400 to-purple-400" },
    { number: "24/7", label: "IT Support", icon: "🔧", color: "from-purple-400 to-pink-400" },
    { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400" }
  ];

  if (!isVisible) {
    return (
      <section className="relative py-20 px-4 overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      role="banner"
      aria-label="Zion Tech Group Hero Section"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 futuristic-bg">
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"
          aria-hidden="true"
        ></div>
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"
          aria-hidden="true"
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"
          aria-hidden="true"
        ></div>
      </div>

      {/* Optimized Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" aria-hidden="true"></div>

      {/* Optimized Matrix Rain Effect - Only render when loaded */}
      {isLoaded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neon-text">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With AI & Tech</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
            designed to propel your business into the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/services"
              className="quantum-button text-lg px-8 py-4 inline-block"
              aria-label="Explore our services"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border animate-neon-border-glow inline-block"
              aria-label="Get free consultation"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Optimized Stats Component */}
          <HeroStats stats={stats} />
        </div>
      </div>

      {/* Optimized Floating Elements */}
      {isLoaded && (
        <>
          <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" aria-hidden="true"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" aria-hidden="true"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" aria-hidden="true"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-1000" aria-hidden="true"></div>
        </>
      )}
    </section>
  );
});

PerformanceOptimizedHero.displayName = 'PerformanceOptimizedHero';

export default PerformanceOptimizedHero;