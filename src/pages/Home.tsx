
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { SEO } from "@/components/SEO";
import { ServicesShowcase } from '../components/ServicesShowcase';
import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import { AdvancedServicesShowcase } from '../components/AdvancedServicesShowcase';

// Lazy load heavy components for better performance
const LazyServicesShowcase = lazy(() => import('../components/ServicesShowcase'));
const LazyEnhancedServicesShowcase = lazy(() => import('../components/EnhancedServicesShowcase'));
const LazyAdvancedServicesShowcase = lazy(() => import('../components/AdvancedServicesShowcase'));

// Loading component with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Handle scroll for parallax effects
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Zion Tech Group - Transform Your Business With AI & Tech"
        description="Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services designed to propel your business into the future. Leading the future of technology with innovative AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions."
        url="https://ziontechgroup.com"
        type="website"
        tags={["AI services", "Micro SAAS", "IT services", "business transformation", "artificial intelligence", "technology consulting", "cybersecurity", "quantum technology", "autonomous systems"]}
      />
      
      {/* Futuristic Background Elements with Performance Optimization */}
      <div className="quantum-particles" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="quantum-particle"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
      
      <div className="neural-lines" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="neural-line"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Hero Section with Enhanced Performance */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Enhanced Animated Background with CSS-only animations */}
        <div className="absolute inset-0 futuristic-bg" aria-hidden="true">
          <div 
            className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"
            style={{ animationDelay: '0s' }}
          />
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"
            style={{ animationDelay: '1s' }}
          />
          <div 
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30" aria-hidden="true" />

        {/* Matrix Rain Effect - Optimized for Performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
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

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <button 
                className="quantum-button text-lg px-8 py-4 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border animate-neon-border-glow focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get free consultation"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats with Better Accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "100+", label: "AI Services", icon: "🤖", color: "from-cyan-400 to-blue-400", description: "Advanced AI solutions" },
                { number: "150+", label: "Micro SAAS Solutions", icon: "💻", color: "from-blue-400 to-purple-400", description: "Scalable software solutions" },
                { number: "24/7", label: "IT Support", icon: "🔧", color: "from-purple-400 to-pink-400", description: "Round-the-clock assistance" },
                { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400", description: "Worldwide presence" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center animate-on-scroll group transition-all duration-500 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  role="region"
                  aria-label={`${stat.label}: ${stat.number}`}
                >
                  <div className="relative mb-4">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {stat.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements with Reduced Motion Support */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" aria-hidden="true" />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} aria-hidden="true" />
      </section>

      {/* Advanced Services Showcase with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAdvancedServicesShowcase />
      </Suspense>
      
      {/* Original Services Showcase with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyServicesShowcase />
      </Suspense>
      
      {/* Enhanced Services Showcase with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyEnhancedServicesShowcase />
      </Suspense>

      {/* Enhanced Features Section with Better Performance */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Stay ahead with the latest AI and emerging technologies",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
                role="article"
                aria-label={`Feature: ${feature.title}`}
              >
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with Better CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can drive your business forward. 
              Get a free consultation and discover the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="quantum-button text-lg px-8 py-4 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300"
                aria-label="Schedule a consultation"
              >
                Schedule Consultation
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="View our case studies"
              >
                View Case Studies
              </button>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a></p>
              <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                description: "Machine learning, NLP, computer vision, and predictive analytics",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🔗",
                title: "Blockchain",
                description: "Smart contracts, decentralized applications, and secure transactions",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "☁️",
                title: "Cloud Computing",
                description: "AWS, Azure, Google Cloud, and hybrid cloud solutions",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🌐",
                title: "IoT & Edge",
                description: "Connected devices, edge computing, and real-time analytics",
                color: "from-green-500 to-teal-500"
              }
            ].map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{tech.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
