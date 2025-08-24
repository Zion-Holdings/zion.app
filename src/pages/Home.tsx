
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🚀',
      title: 'AI-Powered Matching',
      description: 'Find the perfect tech talent or service using our advanced AI algorithms.',
      color: 'zion-blue'
    },
    {
      icon: '💼',
      title: 'Verified Professionals',
      description: 'All talent and services are thoroughly vetted and quality-assured.',
      color: 'zion-purple'
    },
    {
      icon: '⚡',
      title: 'Fast & Secure',
      description: 'Quick connections with secure payment and project management tools.',
      color: 'zion-cyan'
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models',
      icon: '🤖',
      category: 'Technology'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and DevOps services',
      icon: '☁️',
      category: 'Infrastructure'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization',
      icon: '🔄',
      category: 'Consulting'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions and threat protection',
      icon: '🔒',
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-cyan opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-purple opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-blue opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-gold opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">Zion</span>
              <br />
              <span className="text-zion-cyan">Tech Group</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              The Premier Tech & AI Marketplace
            </p>
            
            <p className="text-lg md:text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place. 
              Connect with experts, find innovative solutions, and accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/talent"
                className="group relative px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-blue-light hover:to-zion-blue text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Find Talent</span>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/services"
                className="group relative px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Browse Services
              </Link>
              
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient">Zion</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl glass-morphism border border-${feature.color}-light/20 hover:border-${feature.color}/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br from-${feature.color} to-${feature.color}-dark rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl glass-morphism border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {service.icon}
                </div>
                <div className="text-xs text-zion-cyan mb-2 font-semibold uppercase tracking-wide">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-zion-slate-dark/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-ring">
                500+
              </div>
              <div className="text-zion-slate-light">Expert Professionals</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-ring">
                1000+
              </div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-ring">
                50+
              </div>
              <div className="text-zion-slate-light">AI Solutions</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-ring">
                99%
              </div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl glass-morphism border border-zion-cyan/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their digital transformation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-xl font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
