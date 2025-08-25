
import React, { useMemo, useCallback, useEffect } from 'react';
import { SEO } from "@/components/SEO";
import { ServicesShowcase } from '../components/ServicesShowcase';
import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import { AdvancedServicesShowcase } from '../components/AdvancedServicesShowcase';
import { Link } from 'react-router-dom'; // Added Link import

export default function Home() {
  // Memoized stats data for better performance
  const statsData = useMemo(() => [
    { number: "100+", label: "AI Services", icon: "🤖", color: "from-cyan-400 to-blue-400", delay: 0 },
    { number: "150+", label: "Micro SAAS Solutions", icon: "💻", color: "from-blue-400 to-purple-400", delay: 0.2 },
    { number: "24/7", label: "IT Support", icon: "🔧", color: "from-purple-400 to-pink-400", delay: 0.4 },
    { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400", delay: 0.6 }
  ], []);

  // Memoized features data
  const featuresData = useMemo(() => [
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
  ], []);

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

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Memoized scroll handler
  const handleScrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleGetConsultation = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  return (
    <div className="min-h-screen relative" role="main" aria-label="Zion Tech Group Homepage">
      <SEO 
        title="Zion Tech Group - Transform Your Business With AI & Tech"
        description="Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services designed to propel your business into the future."
        url="https://ziontechgroup.com"
        keywords="AI services, Micro SAAS, IT services, business transformation, emerging technology, cybersecurity, cloud solutions"
        ogImage="/og-image.jpg"
        twitterCard="summary_large_image"
      />
      
      {/* Enhanced Futuristic Background Elements */}
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

      {/* Enhanced Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        aria-labelledby="hero-heading"
        aria-describedby="hero-description"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 futuristic-bg" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30" aria-hidden="true"></div>

        {/* Enhanced Matrix Rain Effect */}
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
          <div className="animate-fade-in-up">
            <h1 
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="neon-text">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Tech</span>
            </h1>
            
            <p 
              id="hero-description"
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
              designed to propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleScrollToServices}
                className="quantum-button text-lg px-8 py-4 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
              <button 
                onClick={handleGetConsultation}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border animate-neon-border-glow focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get free consultation"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats with Accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {statsData.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-on-scroll group" 
                  style={{ animationDelay: `${stat.delay}s` }}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" aria-hidden="true"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" aria-hidden="true"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-1000" aria-hidden="true"></div>
      </section>

      {/* Services Section with ID for navigation */}
      <div id="services-section">
        {/* Advanced Services Showcase */}
        <AdvancedServicesShowcase />

        {/* Original Services Showcase */}
        <ServicesShowcase />
        
        {/* Enhanced Services Showcase */}
        <EnhancedServicesShowcase />
      </div>
      
      {/* Enhanced Features Section */}
      <section 
        className="py-20 px-4 relative overflow-hidden"
        aria-labelledby="features-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="features-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="article"
                aria-labelledby={`feature-${index}-title`}
              >
                <div className="relative mb-4">
                  <div 
                    className="text-5xl group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label={`${feature.title} icon`}
                  >
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                <h3 
                  id={`feature-${index}-title`}
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section 
        className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleGetConsultation}
              className="quantum-button text-lg px-8 py-4 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300"
              aria-label="Schedule a consultation"
            >
              Schedule Consultation
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Contact us directly"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
