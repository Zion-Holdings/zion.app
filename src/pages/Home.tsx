
import React from 'react';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="main-content">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-zion-blue mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate mb-8">
            The Tech & AI Marketplace
          </p>
          <p className="text-lg text-zion-slate-light mb-12 max-w-3xl mx-auto">
            Discover top AI and tech talent, services, and equipment in one place. 
            Connect with experts, find innovative solutions, and accelerate your digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/comprehensive-services" className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </a>
            <a href="/ai-services" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              AI Services
            </a>
            <a href="/cybersecurity-services" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Cybersecurity
            </a>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">AI-Powered Solutions</h3>
            <p className="text-zion-slate-light">Cutting-edge AI and machine learning services to transform your business.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">Cybersecurity Excellence</h3>
            <p className="text-zion-slate-light">Comprehensive security solutions to protect your digital assets.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">Cloud & DevOps</h3>
            <p className="text-zion-slate-light">Modern cloud infrastructure and automation solutions.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-zion-slate mb-6">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">Our certified professionals bring years of experience in AI, cybersecurity, and IT solutions.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-zion-purple mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">We stay ahead of technology trends to deliver cutting-edge solutions for your business.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">Serving clients worldwide with 24/7 support and rapid response times.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations and measurable business outcomes.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-zion-slate mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your technology needs and discover how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
            <a href="/comprehensive-services" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
