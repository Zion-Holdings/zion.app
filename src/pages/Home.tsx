
import React from 'react';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
        {/* Enhanced background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90"></div>

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
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Digital Transformation</h3>
              <p className="text-zion-slate-light">End-to-end digital solutions to modernize your business operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zion-slate mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of experience in AI and IT solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Quality Guarantee</h3>
              <p className="text-zion-slate-light">100% satisfaction guarantee on all our services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">Services available worldwide with local expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive IT and AI services can accelerate your growth and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>📱 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
