
import React from 'react';
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { MainNavigation } from "@/layout/MainNavigation";
import Footer from "@/components/Footer";

export default function RequestQuote() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Request a Quote - Zion Tech Group" 
        description="Get a customized quote for your AI, IT services, or equipment needs. Our team will provide you with competitive pricing and solutions."
        keywords="quote request, pricing, AI services, IT services, equipment, Zion Tech Group"
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <MainNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-zion-blue py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tell us about your project requirements and we'll provide you with a detailed quote tailored to your needs. 
              Whether it's AI development, IT services, or equipment solutions, we've got you covered.
            </p>
          </div>
        </section>
        
        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-zion-blue-light/20 rounded-lg border border-zion-purple/20 p-8">
                <QuoteRequestForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Zion Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion for Your Tech Needs?</h2>
              <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-zion-purple/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fast & Efficient</h3>
                <p className="text-zion-slate-light">
                  Get your quote within 24 hours and start your project quickly with our streamlined process.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zion-cyan/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assured</h3>
                <p className="text-zion-slate-light">
                  All our services and equipment meet the highest industry standards with comprehensive warranties.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zion-purple-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Pricing</h3>
                <p className="text-zion-slate-light">
                  Get the best value for your investment with our transparent pricing and no hidden costs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
