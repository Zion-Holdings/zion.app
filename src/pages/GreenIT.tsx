import React from 'react';
import { SEO } from '@/components/SEO';

export default function GreenIT() {
  return (
    <>
      <SEO
        title="Green IT Solutions | Zion Tech Group"
        description="Sustainable technology solutions to reduce your carbon footprint and improve environmental impact"
        keywords="green IT, sustainable technology, eco-friendly IT, carbon footprint reduction, green computing"
        canonical="https://ziontechgroup.com/green-it"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Green IT Solutions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transform your technology infrastructure with sustainable solutions that reduce environmental impact 
              while improving efficiency and cost-effectiveness.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Green IT?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Environmental Impact</h3>
                <p className="text-zion-slate-light">
                  Reduce your carbon footprint and contribute to a more sustainable future for generations to come.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Savings</h3>
                <p className="text-zion-slate-light">
                  Lower energy bills and reduced operational costs through efficient technology solutions.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
                <p className="text-zion-slate-light">
                  Meet environmental regulations and sustainability standards with certified green solutions.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Boost</h3>
                <p className="text-zion-slate-light">
                  Modern, energy-efficient technology often provides better performance and reliability.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Enhancement</h3>
                <p className="text-zion-slate-light">
                  Strengthen your brand reputation by demonstrating commitment to environmental responsibility.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof</h3>
                <p className="text-zion-slate-light">
                  Invest in technology that aligns with evolving sustainability trends and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Green IT Services
            </h2>
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Energy-Efficient Infrastructure
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Design and implement data centers and IT infrastructure that minimize energy consumption 
                      while maximizing performance. Our solutions include:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• High-efficiency servers and storage systems</li>
                      <li>• Smart cooling and power management</li>
                      <li>• Virtualization and consolidation strategies</li>
                      <li>• Renewable energy integration</li>
                    </ul>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 bg-blue-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Sustainable Software Solutions
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Develop and optimize software applications that consume fewer resources and promote 
                      sustainable business practices:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• Cloud-native applications with auto-scaling</li>
                      <li>• Energy-aware algorithm optimization</li>
                      <li>• Paperless workflow automation</li>
                      <li>• Carbon footprint tracking tools</li>
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      E-Waste Management & Recycling
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      Responsible disposal and recycling of electronic equipment to minimize environmental impact:
                    </p>
                    <ul className="text-zion-slate-light space-y-2 mb-6">
                      <li>• Secure data destruction services</li>
                      <li>• Certified e-waste recycling partners</li>
                      <li>• Equipment refurbishment programs</li>
                      <li>• Circular economy initiatives</li>
                    </ul>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-6 text-center">
                    <svg className="w-24 h-24 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Success Story: TechCorp's Green Transformation
            </h2>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    From High Energy Costs to Sustainable Success
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    TechCorp, a mid-sized software company, was struggling with skyrocketing energy bills 
                    and wanted to improve their environmental impact. We helped them implement a comprehensive 
                    green IT strategy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">40%</div>
                      <div className="text-zion-slate-light text-sm">Energy Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">$85K</div>
                      <div className="text-zion-slate-light text-sm">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">60%</div>
                      <div className="text-zion-slate-light text-sm">Carbon Footprint</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">12</div>
                      <div className="text-zion-slate-light text-sm">Months ROI</div>
                    </div>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read Full Case Study
                  </button>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <blockquote className="text-zion-slate-light italic text-lg">
                    "Zion Tech Group's green IT solutions transformed our infrastructure and significantly 
                    reduced our environmental impact while saving us money. It's a win-win for our business 
                    and the planet."
                  </blockquote>
                  <div className="mt-4 text-white font-semibold">
                    — Sarah Johnson, CTO at TechCorp
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your organization implement sustainable technology solutions 
              that benefit both your bottom line and the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Download Green IT Guide
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}