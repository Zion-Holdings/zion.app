import React from 'react';
import Head from 'next/head';

export default function InnovationPipelinePage() {
  return (
    <>
      <Head>
        <title>Innovation Pipeline | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovation pipeline, research progress, and future technology roadmaps." />
        <meta property="og:title" content="Innovation Pipeline - Zion Tech Group" />
        <meta property="og:description" content="Research progress and future technology roadmaps." />
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
                Innovation Pipeline
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Cutting-edge research, emerging technologies, and future innovation roadmaps
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-300">Active Research Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-2xl border border-blue-500/30">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">Quantum AI Processing</h3>
                  <p className="text-white/80 mb-4">
                    Developing quantum computing algorithms for advanced AI decision-making and pattern recognition.
                  </p>
                  <div className="text-sm text-white/60 mb-4">
                    <strong>Status:</strong> Phase 2 - Algorithm Development<br/>
                    <strong>Timeline:</strong> Q2 2026
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-2">Progress</div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">65% Complete</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-8 rounded-2xl border border-purple-500/30">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">Autonomous Cloud Orchestration</h3>
                  <p className="text-white/80 mb-4">
                    Multi-cloud management system that automatically optimizes resources across different cloud providers.
                  </p>
                  <div className="text-sm text-white/60 mb-4">
                    <strong>Status:</strong> Phase 3 - Testing<br/>
                    <strong>Timeline:</strong> Q4 2025
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-2">Progress</div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">85% Complete</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-8 rounded-2xl border border-green-500/30">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Bio-Inspired AI</h3>
                  <p className="text-white/80 mb-4">
                    Neural networks modeled after biological systems for enhanced learning and adaptation capabilities.
                  </p>
                  <div className="text-sm text-white/60 mb-4">
                    <strong>Status:</strong> Phase 1 - Research<br/>
                    <strong>Timeline:</strong> Q3 2026
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-2">Progress</div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">35% Complete</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 rounded-2xl border border-orange-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">Edge AI Deployment</h3>
                  <p className="text-white/80 mb-4">
                    Lightweight AI models optimized for edge devices and IoT applications with minimal resource usage.
                  </p>
                  <div className="text-sm text-white/60 mb-4">
                    <strong>Status:</strong> Phase 2 - Prototyping<br/>
                    <strong>Timeline:</strong> Q1 2026
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs text-white/60 mb-2">Progress</div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">55% Complete</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-fuchsia-300">Technology Roadmap</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">Q4 2025 - Autonomous Cloud</h3>
                      <p className="text-white/80 mb-3">Launch of fully autonomous cloud management system with AI-driven optimization.</p>
                      <div className="text-sm text-white/60">Key Milestone: Multi-cloud orchestration platform</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-fuchsia-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Q2 2026 - Quantum AI</h3>
                      <p className="text-white/80 mb-3">Integration of quantum computing algorithms into our AI decision-making systems.</p>
                      <div className="text-sm text-white/60">Key Milestone: Quantum-enhanced neural networks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">Q3 2026 - Bio-Inspired AI</h3>
                      <p className="text-white/80 mb-3">Deployment of biologically-inspired neural networks for enhanced learning capabilities.</p>
                      <div className="text-sm text-white/60">Key Milestone: Adaptive learning systems</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">Q4 2026 - Edge AI</h3>
                      <p className="text-white/80 mb-3">Widespread deployment of edge AI solutions for IoT and mobile applications.</p>
                      <div className="text-sm text-white/60">Key Milestone: Universal edge AI platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-green-300">Research Partnerships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Academic Collaborations</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• MIT Computer Science & AI Lab</li>
                    <li>• Stanford AI Research Institute</li>
                    <li>• Carnegie Mellon Robotics Institute</li>
                    <li>• University of Toronto Vector Institute</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Industry Partners</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• NVIDIA AI Research</li>
                    <li>• Google DeepMind</li>
                    <li>• Microsoft Research</li>
                    <li>• OpenAI Research</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Join Our Innovation Journey</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented researchers, engineers, and innovators to join our mission. 
                  Explore opportunities to contribute to the future of autonomous technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/reports" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200"
                  >
                    View All Reports
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