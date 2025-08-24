<<<<<<< HEAD
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are a leading technology company specializing in enterprise solutions, 
              AI services, and cybersecurity. Our mission is to empower businesses with 
              cutting-edge technology solutions.
            </p>
          </div>
          
          {/* Company Overview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Company Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-zion-slate-light mb-6">
                  To provide innovative, scalable, and secure technology solutions that 
                  enable businesses to thrive in the digital age. We believe in making 
                  advanced technology accessible and practical for organizations of all sizes.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-zion-slate-light">
                  To be the trusted technology partner for businesses worldwide, 
                  driving digital transformation and innovation across industries.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <span className="text-zion-cyan">✓</span>
                    Innovation and Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-zion-cyan">✓</span>
                    Customer Success
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-zion-cyan">✓</span>
                    Security and Trust
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-zion-cyan">✓</span>
                    Continuous Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-zion-cyan">✓</span>
                    Ethical Business Practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Solutions</h3>
                <p className="text-zion-slate-light text-sm">
                  Comprehensive technology solutions designed for large organizations, 
                  including cloud infrastructure, digital transformation, and system integration.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">AI Services</h3>
                <p className="text-zion-slate-light text-sm">
                  Advanced artificial intelligence solutions including machine learning, 
                  natural language processing, and predictive analytics.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                <p className="text-zion-slate-light text-sm">
                  Enterprise-grade security solutions including threat detection, 
                  compliance management, and security consulting.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Leadership Team</h3>
                <p className="text-zion-slate-light text-sm">
                  Experienced executives with decades of combined experience in 
                  technology, business, and innovation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Technical Experts</h3>
                <p className="text-zion-slate-light text-sm">
                  Skilled engineers, developers, and architects specializing in 
                  cutting-edge technologies and best practices.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="https://ziontechgroup.com" 
                className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
=======

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">About Zion Tech Group</h1>
        <p className="text-lg text-zion-slate-light mb-6">
          Zion Tech Group is a leading technology marketplace that connects businesses with top-tier AI and tech talent.
        </p>
        <p className="text-lg text-zion-slate-light">
          Our mission is to accelerate digital transformation by providing access to the best technology professionals and services.
        </p>
>>>>>>> dd620ef4409d707a58974776442fbda9c1819828
      </div>
    </div>
  );
}