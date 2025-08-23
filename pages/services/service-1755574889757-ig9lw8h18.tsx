import Head from 'next/head';
import { useState } from 'react';

export default function Service-1755574889757-ig9lw8h18Service() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Data Cloud Infrastructure Platform - Zion Tech Group</title>
        <meta name="description" content="Comprehensive Cloud Infrastructure platform for modern data-driven organizations" />
        <meta name="keywords" content="cloud infrastructure, AI, automation, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/services/service-1755574889757-ig9lw8h18" />
        
        <meta property="og:title" content="Data Cloud Infrastructure Platform" />
        <meta property="og:description" content="Comprehensive Cloud Infrastructure platform for modern data-driven organizations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/service-1755574889757-ig9lw8h18" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Data Cloud Infrastructure Platform",
          "description": "Comprehensive Cloud Infrastructure platform for modern data-driven organizations",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "category": "Cloud Infrastructure",
          "offers": serviceData.pricing.map(plan => ({
            "@type": "Offer",
            "name": plan.plan,
            "price": plan.price,
            "description": plan.features.join(', ')
          }))
        })}</script>
      
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Data Cloud Infrastructure Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive Cloud Infrastructure platform for modern data-driven organizations
          </p>
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceData.pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-800 p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedPlan === index ? 'border-blue-500 bg-slate-700' : 'border-slate-700'
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                <div className="text-3xl font-bold mb-4 text-blue-400">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Transform your business with our cutting-edge cloud infrastructure solutions</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all">
            Contact Us Today
          </button>
        </div>
      </main>
    </div>
  );
}
