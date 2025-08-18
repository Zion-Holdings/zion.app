import Head from 'next/head';
import { useState } from 'react';

export default function Simple-service-1755538178084-wovh25hsgService() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Consulting Service - Zion Tech Group</title>
        <meta name="description" content="Professional Consulting solution for modern businesses" />
        <meta name="keywords" content="consulting, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/services/simple-service-1755538178084-wovh25hsg" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Consulting Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Consulting solution for modern businesses
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceData.pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-800 p-6 rounded-lg border-2 ${
                  selectedPlan === index ? 'border-blue-500' : 'border-slate-700'
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                <div className="text-3xl font-bold mb-4 text-blue-400">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Transform your business with our consulting solutions</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Contact Us Today
          </button>
        </div>
      </main>
    </div>
  );
}