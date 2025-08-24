import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Careers() {
  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group" 
        description="Join our team at Zion Tech Group. Explore exciting career opportunities in AI, technology, and innovation." 
        keywords="careers, jobs, Zion Tech Group, employment, AI jobs, tech careers"
        url="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Build the future of AI and technology with us
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Why Work With Us */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                  <p className="text-zion-slate-light">
                    Work on cutting-edge AI and technology projects that shape the future
                  </p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Growth & Learning</h3>
                  <p className="text-zion-slate-light">
                    Continuous learning opportunities and career development programs
                  </p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Great Culture</h3>
                  <p className="text-zion-slate-light">
                    Collaborative environment with passionate professionals
                  </p>
                </div>
              </div>
            </section>

            {/* Open Positions */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
              <div className="space-y-6">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Senior AI Engineer</h3>
                      <p className="text-zion-slate-light mb-4">
                        Lead AI development projects and mentor junior developers
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Full-time</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Remote</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">5+ years</span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Developer</h3>
                      <p className="text-zion-slate-light mb-4">
                        Build scalable web applications and contribute to our tech platform
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Full-time</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Hybrid</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">3+ years</span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Data Scientist</h3>
                      <p className="text-zion-slate-light mb-4">
                        Analyze complex data sets and develop predictive models
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Full-time</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Remote</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">2+ years</span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 hover:border-zion-cyan/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Product Manager</h3>
                      <p className="text-zion-slate-light mb-4">
                        Drive product strategy and lead cross-functional teams
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">Full-time</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">On-site</span>
                        <span className="bg-zion-blue px-3 py-1 rounded-full text-sm text-white">4+ years</span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Competitive Salary</h3>
                  <p className="text-zion-slate-light text-sm">Market-leading compensation packages</p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Health Insurance</h3>
                  <p className="text-zion-slate-light text-sm">Comprehensive health coverage</p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Flexible Hours</h3>
                  <p className="text-zion-slate-light text-sm">Work-life balance focus</p>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Remote Work</h3>
                  <p className="text-zion-slate-light text-sm">Work from anywhere options</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Role?</h2>
                <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                  >
                    Send Resume
                  </a>
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                  >
                    Email Us
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