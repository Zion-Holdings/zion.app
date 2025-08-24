import React from 'react';
import { Link } from 'react-router-dom';

export function ITServiceRequestHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Need IT Services?
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get a free consultation and quote for your IT infrastructure, cybersecurity, or AI implementation needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold text-lg hover:bg-zion-slate-light transition-colors shadow-lg"
          >
            Request Free Quote
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-colors"
          >
            View All Services
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
            <div className="text-zion-slate-light">No obligation assessment</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
            <div className="text-zion-slate-light">Always here to help</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">Custom Solutions</div>
            <div className="text-zion-slate-light">Tailored to your needs</div>
          </div>
        </div>
      </div>
    </section>
  );
}