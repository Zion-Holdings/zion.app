import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Services() {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group" 
        description="Discover Zion Tech Group's comprehensive AI and tech marketplace services. From AI solutions to enterprise tech services." 
        keywords="AI services, tech marketplace, enterprise solutions, Zion Tech Group services"
        url="https://ziontechgroup.com/services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Our Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Comprehensive AI and tech solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* AI Services Section */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">AI & Machine Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">AI Consulting</h3>
                    <p className="text-zion-slate-light mb-4">
                      Strategic guidance on AI implementation, from initial assessment to full deployment
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• AI strategy development</li>
                      <li>• Technology assessment</li>
                      <li>• Implementation roadmap</li>
                      <li>• ROI analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Custom AI Solutions</h3>
                    <p className="text-zion-slate-light mb-4">
                      Tailored AI applications designed for your specific business needs and workflows
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Predictive analytics</li>
                      <li>• Natural language processing</li>
                      <li>• Computer vision</li>
                      <li>• Recommendation systems</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                    <p className="text-zion-slate-light mb-4">
                      Transform raw data into actionable insights with advanced analytics and visualization
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Data mining & analysis</li>
                      <li>• Business intelligence</li>
                      <li>• Real-time dashboards</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Marketplace Section */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Tech Marketplace</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Software Solutions</h3>
                    <p className="text-zion-slate-light mb-4">
                      Access to cutting-edge software tools and applications for business optimization
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Business applications</li>
                      <li>• Development tools</li>
                      <li>• Security software</li>
                      <li>• Cloud services</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Mobile Applications</h3>
                    <p className="text-zion-slate-light mb-4">
                      Cross-platform mobile solutions for iOS and Android with modern UI/UX design
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Native & hybrid apps</li>
                      <li>• Progressive web apps</li>
                      <li>• App maintenance</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                    <p className="text-zion-slate-light mb-4">
                      Comprehensive security solutions to protect your digital assets and infrastructure
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Threat detection</li>
                      <li>• Vulnerability assessment</li>
                      <li>• Security audits</li>
                      <li>• Compliance management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Enterprise Solutions Section */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Enterprise Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                    <p className="text-zion-slate-light mb-4">
                      End-to-end digital transformation services to modernize your business operations
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Process automation</li>
                      <li>• Legacy system migration</li>
                      <li>• Cloud transformation</li>
                      <li>• Change management</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Team Augmentation</h3>
                    <p className="text-zion-slate-light mb-4">
                      Scale your development team with skilled professionals for project-based work
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• Full-stack developers</li>
                      <li>• AI specialists</li>
                      <li>• DevOps engineers</li>
                      <li>• Project managers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                    <p className="text-zion-slate-light mb-4">
                      Optimize your systems and applications for maximum performance and efficiency
                    </p>
                    <ul className="text-zion-slate-light text-sm space-y-1 text-left">
                      <li>• System optimization</li>
                      <li>• Database tuning</li>
                      <li>• Load balancing</li>
                      <li>• Monitoring & alerting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
                  Let's discuss how Zion Tech Group can help transform your business with our AI and tech solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                  >
                    Schedule Consultation
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