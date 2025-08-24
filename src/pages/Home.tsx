
import React from 'react';
import { HeroSection } from "../components/HeroSection";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { InteractiveServiceShowcase } from "../components/InteractiveServiceShowcase";
import { PerformanceMonitor } from "../components/PerformanceMonitor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Advanced Search Section */}
      <section className="py-16 bg-gradient-to-br from-zion-blue-light/5 to-zion-purple-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Find Your Perfect Tech Solution
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Use our AI-powered search to discover the exact services and technologies you need
            </p>
          </div>
          <AdvancedSearch />
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <InteractiveServiceShowcase />
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Innovation First</h3>
              <p className="text-muted-foreground">
                Stay ahead with the latest technologies and innovative solutions that drive growth.
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-purple">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance and rapid delivery ensure your projects launch on time.
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-emerald to-zion-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zion-emerald">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-grade security and compliance standards protect your valuable assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Developers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-zion-emerald mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-zion-gold mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1">
              Get Free Consultation
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Performance Monitor */}
      <PerformanceMonitor />
    </div>
  );
}
