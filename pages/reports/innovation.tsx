import React from 'react';
import Head from 'next/head';

export default function InnovationPipeline() {
  return (
    <>
      <Head>
        <title>Innovation Pipeline & Research | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovation pipeline, research progress, and future technology roadmaps." />
        <meta property="og:title" content="Innovation Pipeline & Research | Zion Tech Group" />
        <meta property="og:description" content="Explore our innovation pipeline and future technology roadmaps." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/reports" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Reports
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Innovation Pipeline & Research
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the cutting-edge technologies and research initiatives that will shape the future of autonomous systems
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Current Research Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400">Advanced AI Orchestration</h3>
                      <span className="text-sm text-white/60">Phase 2 Development</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">
                    Developing next-generation AI coordination systems that enable cross-platform automation 
                    and intelligent decision-making across all services.
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• Progress: 65% Complete</div>
                    <div>• Expected Launch: Q4 2025</div>
                    <div>• Team: 12 AI Researchers</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔮</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-fuchsia-400">Predictive Analytics Engine</h3>
                      <span className="text-sm text-white/60">Research Phase</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">
                    Building advanced predictive models that can forecast system behavior, 
                    user needs, and market trends with unprecedented accuracy.
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• Progress: 35% Complete</div>
                    <div>• Expected Launch: Q1 2026</div>
                    <div>• Team: 8 Data Scientists</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">Quantum AI Integration</h3>
                      <span className="text-sm text-white/60">Exploratory Research</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">
                    Investigating the potential of quantum computing to enhance AI capabilities 
                    and solve complex optimization problems.
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• Progress: 15% Complete</div>
                    <div>• Expected Launch: 2027</div>
                    <div>• Team: 6 Quantum Researchers</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400">Self-Evolving Systems</h3>
                      <span className="text-sm text-white/60">Concept Development</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">
                    Researching systems that can autonomously evolve their own architecture 
                    and capabilities based on performance data.
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• Progress: 10% Complete</div>
                    <div>• Expected Launch: 2028</div>
                    <div>• Team: 4 AI Architects</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Technology Roadmap</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2025</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Phase 2: AI Orchestration</h3>
                      <p className="text-white/80 mb-3">
                        Launch of advanced AI coordination systems with cross-platform automation capabilities.
                      </p>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li>• Multi-cloud automation orchestration</li>
                        <li>• Intelligent resource allocation</li>
                        <li>• Advanced monitoring and alerting</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2026</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Phase 3: Predictive Intelligence</h3>
                      <p className="text-white/80 mb-3">
                        Implementation of predictive analytics and autonomous decision-making systems.
                      </p>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li>• Market trend prediction</li>
                        <li>• Proactive system optimization</li>
                        <li>• User behavior forecasting</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2027</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Phase 4: Quantum Enhancement</h3>
                      <p className="text-white/80 mb-3">
                        Integration of quantum computing capabilities for enhanced AI processing power.
                      </p>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li>• Quantum machine learning</li>
                        <li>• Complex optimization solving</li>
                        <li>• Advanced cryptography</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2028</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-orange-400 mb-2">Phase 5: Autonomous Evolution</h3>
                      <p className="text-white/80 mb-3">
                        Development of self-evolving systems that can autonomously improve their capabilities.
                      </p>
                      <ul className="space-y-1 text-sm text-white/70">
                        <li>• Self-modifying architecture</li>
                        <li>• Autonomous capability expansion</li>
                        <li>• Evolutionary optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Research Partnerships & Collaborations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-blue-400 font-semibold mb-3">Academic Institutions</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• MIT Computer Science & AI Lab</li>
                    <li>• Stanford AI Research Center</li>
                    <li>• Carnegie Mellon Robotics Institute</li>
                    <li>• UC Berkeley AI Research Lab</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                  <h3 className="text-green-400 font-semibold mb-3">Industry Partners</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Google AI Research</li>
                    <li>• Microsoft Research</li>
                    <li>• OpenAI Collaboration Program</li>
                    <li>• NVIDIA AI Research</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Innovation Metrics & KPIs</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
                    <div className="text-white/80 font-semibold">Active Research Projects</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fuchsia-400 mb-2">8</div>
                    <div className="text-white/80 font-semibold">Patents Filed</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$2.4M</div>
                    <div className="text-white/80 font-semibold">R&D Investment</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">34</div>
                    <div className="text-white/80 font-semibold">Research Papers Published</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-semibold mb-3">Innovation Highlights</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• 3 breakthrough technologies in autonomous systems</li>
                    <li>• 5 industry-first implementations</li>
                    <li>• 12 research collaborations established</li>
                    <li>• 89% success rate in research-to-production pipeline</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Join the Innovation Journey</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Our research and innovation pipeline is constantly evolving. 
                  Stay updated on the latest developments and future technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/reports" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    View All Reports
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                  >
                    Collaborate on Research
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}