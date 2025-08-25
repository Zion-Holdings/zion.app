import React from 'react';
import { SEO } from '@/components/SEO';

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers | Zion Tech Group"
        description="Join our team of technology innovators and AI experts. Explore exciting career opportunities at Zion Tech Group"
        keywords="careers, jobs, employment, technology jobs, AI careers, Zion Tech Group careers"
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate 
              individuals who want to make a difference in the world of AI and digital transformation.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Work With Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-zion-slate-light">
                  Work on cutting-edge AI and technology projects that push the boundaries of what's possible.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaborative Culture</h3>
                <p className="text-zion-slate-light">
                  Join a diverse team where collaboration, creativity, and mutual support drive success.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
                <p className="text-zion-slate-light">
                  Continuous learning and development with mentorship programs and skill-building initiatives.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Work</h3>
                <p className="text-zion-slate-light">
                  Remote-first culture with flexible hours and work-life balance that respects your needs.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Competitive Benefits</h3>
                <p className="text-zion-slate-light">
                  Comprehensive health coverage, retirement plans, and performance-based compensation.
                </p>
              </div>

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-zion-slate-light">
                  Contribute to solutions that address real-world challenges and make a positive difference.
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {/* Position 1 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Senior AI Engineer
                    </h3>
                    <p className="text-zion-slate-light mb-3">
                      Lead the development of cutting-edge AI solutions and machine learning models.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        Full-time
                      </span>
                      <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        Senior Level
                      </span>
                    </div>
                  </div>
                  <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Position 2 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Full-Stack Developer
                    </h3>
                    <p className="text-zion-slate-light mb-3">
                      Build scalable web applications and contribute to our marketplace platform.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        Full-time
                      </span>
                      <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        Mid Level
                      </span>
                    </div>
                  </div>
                  <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Position 3 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Green IT Specialist
                    </h3>
                    <p className="text-zion-slate-light mb-3">
                      Develop sustainable technology solutions and help clients reduce their carbon footprint.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        Full-time
                      </span>
                      <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        Entry Level
                      </span>
                    </div>
                  </div>
                  <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Position 4 */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Cybersecurity Analyst
                    </h3>
                    <p className="text-zion-slate-light mb-3">
                      Protect our systems and clients from cyber threats with advanced security measures.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        Full-time
                      </span>
                      <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        Mid Level
                      </span>
                    </div>
                  </div>
                  <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-zion-blue-dark">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Apply</h3>
                <p className="text-zion-slate-light">
                  Submit your application with resume and cover letter
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-zion-blue-dark">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Review</h3>
                <p className="text-zion-slate-light">
                  Our team reviews your application within 48 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-zion-blue-dark">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Interview</h3>
                <p className="text-zion-slate-light">
                  Technical and cultural fit discussions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-zion-blue-dark">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Join</h3>
                <p className="text-zion-slate-light">
                  Welcome to the Zion Tech Group family!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss 
              how you can contribute to our mission.
            </p>
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Send General Application
            </button>
          </div>
        </div>
      </main>
    </>
  );
}