import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Explore exciting career opportunities at Zion Tech Group. Join our team of AI and automation experts." />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of AI and automation experts." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build the future of autonomous technology with a team of passionate innovators and AI experts
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Team
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Our Services
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Contact Us
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Why Work With Us */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Cutting-Edge Technology</h3>
                  <p className="text-white/70 text-sm">
                    Work with the latest AI and automation technologies that are shaping the future
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Global Impact</h3>
                  <p className="text-white/70 text-sm">
                    Contribute to solutions that transform businesses and industries worldwide
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Collaborative Culture</h3>
                  <p className="text-white/70 text-sm">
                    Join a team that values innovation, collaboration, and continuous learning
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Innovation Focus</h3>
                  <p className="text-white/70 text-sm">
                    Be part of a company that constantly pushes boundaries and explores new frontiers
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Career Growth</h3>
                  <p className="text-white/70 text-sm">
                    Opportunities for rapid advancement and skill development in emerging technologies
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">Remote First</h3>
                  <p className="text-white/70 text-sm">
                    Work from anywhere with flexible schedules and modern collaboration tools
                  </p>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Open Positions</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-cyan-400">Senior AI Engineer</h3>
                      <p className="text-white/80 mb-4">
                        Lead the development of autonomous AI systems and machine learning models for enterprise clients.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Full-time</span>
                        <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 rounded-full text-sm">Remote</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Senior Level</span>
                      </div>
                      <div className="text-sm text-white/60">
                        <span className="mr-4">📍 Remote</span>
                        <span className="mr-4">⏰ Full-time</span>
                        <span>💰 Competitive Salary + Equity</span>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-fuchsia-400">Automation Specialist</h3>
                      <p className="text-white/80 mb-4">
                        Design and implement intelligent automation solutions for business processes and workflows.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 rounded-full text-sm">Full-time</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Remote</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Mid Level</span>
                      </div>
                      <div className="text-sm text-white/60">
                        <span className="mr-4">📍 Remote</span>
                        <span className="mr-4">⏰ Full-time</span>
                        <span>💰 Competitive Salary</span>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <button className="bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white font-bold py-3 px-6 rounded-lg hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-green-400">DevOps Engineer</h3>
                      <p className="text-white/80 mb-4">
                        Build and maintain cloud infrastructure, CI/CD pipelines, and deployment automation systems.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Full-time</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Remote</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Mid Level</span>
                      </div>
                      <div className="text-sm text-white/60">
                        <span className="mr-4">📍 Remote</span>
                        <span className="mr-4">⏰ Full-time</span>
                        <span>💰 Competitive Salary</span>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-blue-400">Data Scientist</h3>
                      <p className="text-white/80 mb-4">
                        Develop predictive analytics models and business intelligence solutions using AI and machine learning.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Full-time</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Remote</span>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Mid Level</span>
                      </div>
                      <div className="text-sm text-white/60">
                        <span className="mr-4">📍 Remote</span>
                        <span className="mr-4">⏰ Full-time</span>
                        <span>💰 Competitive Salary</span>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">🏥</div>
                  <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
                  <p className="text-white/70 text-sm">Comprehensive health, dental, and vision coverage</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">💰</div>
                  <h3 className="text-lg font-semibold mb-2">Equity Options</h3>
                  <p className="text-white/70 text-sm">Own a piece of the company's future success</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">📚</div>
                  <h3 className="text-lg font-semibold mb-2">Learning Budget</h3>
                  <p className="text-white/70 text-sm">Annual budget for courses, conferences, and certifications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">🏖️</div>
                  <h3 className="text-lg font-semibold mb-2">Unlimited PTO</h3>
                  <p className="text-white/70 text-sm">Take time off when you need it</p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                  <h3 className="text-lg font-semibold mb-2">Apply</h3>
                  <p className="text-white/70 text-sm">Submit your resume and cover letter</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">2</div>
                  <h3 className="text-lg font-semibold mb-2">Interview</h3>
                  <p className="text-white/70 text-sm">Technical and cultural fit discussions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                  <p className="text-white/70 text-sm">Complete a practical coding challenge</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <h3 className="text-lg font-semibold mb-2">Offer</h3>
                  <p className="text-white/70 text-sm">Join our team and start building the future</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join Us?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Don't see a position that fits? We're always looking for talented individuals who are passionate about AI and automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-8 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Send General Application
                  </a>
                  <a href="/team" className="border border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-200">
                    Meet Our Team
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}