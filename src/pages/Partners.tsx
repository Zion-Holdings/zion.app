import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Partners() {
  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group" 
        description="Partner with Zion Tech Group to drive innovation and growth in AI and technology solutions." 
        keywords="partners, partnerships, Zion Tech Group, business collaboration, technology partners"
        url="https://ziontechgroup.com/partners"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Partnerships</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Join forces with us to create innovative solutions and drive digital transformation
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Partnership Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation Power</h3>
                  <p className="text-zion-slate-light">
                    Access cutting-edge AI and technology solutions to enhance your offerings
                  </p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Market Reach</h3>
                  <p className="text-zion-slate-light">
                    Expand your market presence through our global network and expertise
                  </p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Shared Success</h3>
                  <p className="text-zion-slate-light">
                    Collaborative approach ensuring mutual growth and long-term success
                  </p>
                </div>
              </div>
            </section>

            {/* Partnership Types */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-zion-blue inline-flex p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Technology Partners</h3>
                      <p className="text-zion-slate-light mb-4">
                        Integrate our AI and technology solutions into your products and services
                      </p>
                      <ul className="text-zion-slate-light text-sm space-y-2">
                        <li>• API integrations and SDKs</li>
                        <li>• White-label solutions</li>
                        <li>• Custom development</li>
                        <li>• Technical support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-zion-blue inline-flex p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Channel Partners</h3>
                      <p className="text-zion-slate-light mb-4">
                        Resell our solutions and earn competitive commissions
                      </p>
                      <ul className="text-zion-slate-light text-sm space-y-2">
                        <li>• Reseller programs</li>
                        <li>• Marketing support</li>
                        <li>• Training and certification</li>
                        <li>• Revenue sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-zion-blue inline-flex p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Strategic Partners</h3>
                      <p className="text-zion-slate-light mb-4">
                        Joint ventures and strategic alliances for market expansion
                      </p>
                      <ul className="text-zion-slate-light text-sm space-y-2">
                        <li>• Joint product development</li>
                        <li>• Market expansion</li>
                        <li>• Investment opportunities</li>
                        <li>• Shared IP development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-zion-blue inline-flex p-3 rounded-full flex-shrink-0">
                      <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Consulting Partners</h3>
                      <p className="text-zion-slate-light mb-4">
                        Leverage our expertise for client projects and implementations
                      </p>
                      <ul className="text-zion-slate-light text-sm space-y-2">
                        <li>• Implementation services</li>
                        <li>• Consulting projects</li>
                        <li>• Training delivery</li>
                        <li>• Project management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Current Partners */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
                  <p className="text-zion-slate-light">
                    We collaborate with leading companies across various industries
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                  <div className="text-center">
                    <div className="bg-zion-blue w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-zion-cyan font-bold text-lg">Tech</span>
                    </div>
                    <p className="text-zion-slate-light text-sm">Technology</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-zion-blue w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-zion-cyan font-bold text-lg">AI</span>
                    </div>
                    <p className="text-zion-slate-light text-sm">AI Solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-zion-blue w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-zion-cyan font-bold text-lg">Cloud</span>
                    </div>
                    <p className="text-zion-slate-light text-sm">Cloud Services</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-zion-blue w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-zion-cyan font-bold text-lg">Data</span>
                    </div>
                    <p className="text-zion-slate-light text-sm">Data Analytics</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Partnership Process */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-zion-blue inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-zion-cyan mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Initial Contact</h3>
                  <p className="text-zion-slate-light text-sm">
                    Reach out to discuss partnership opportunities
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-zion-blue inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-zion-cyan mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
                  <p className="text-zion-slate-light text-sm">
                    Understand mutual goals and opportunities
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-zion-blue inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-zion-cyan mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Agreement</h3>
                  <p className="text-zion-slate-light text-sm">
                    Define terms and formalize partnership
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-zion-blue inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold text-zion-cyan mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Launch</h3>
                  <p className="text-zion-slate-light text-sm">
                    Execute partnership and drive success
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner?</h2>
                <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
                  Let's explore how we can work together to create innovative solutions and drive growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                  >
                    Start Partnership
                  </a>
                  <a
                    href="mailto:partnerships@ziontechgroup.com"
                    className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                  >
                    Contact Partnerships
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}