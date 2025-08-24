import React from 'react';

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
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Leadership</h3>
                <p className="text-zion-slate-light mb-6">
                  Our leadership team brings decades of combined experience in technology, 
                  business, and innovation. We're committed to driving growth and success 
                  for our clients and partners.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
                <p className="text-zion-slate-light">
                  Our team consists of certified professionals in cloud computing, 
                  cybersecurity, AI/ML, and enterprise architecture, ensuring the 
                  highest quality solutions for our clients.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p><strong>Mobile:</strong> +1 302 464 0950</p>
              <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}