export default function ResearchPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Pushing the boundaries of artificial intelligence, quantum computing, and emerging technologies through cutting-edge research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Consciousness */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Consciousness</h3>
              <p className="text-white/70 mb-4">
                Exploring the development of self-aware AI systems and understanding the nature of artificial consciousness.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Self-awareness algorithms</li>
                <li>• Consciousness simulation</li>
                <li>• Ethical AI development</li>
                <li>• Cognitive architecture</li>
              </ul>
              <a href="/ai-consciousness-research" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Quantum AI */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum AI</h3>
              <p className="text-white/70 mb-4">
                Merging quantum computing with artificial intelligence to create unprecedented computational capabilities.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Quantum machine learning</li>
                <li>• Quantum neural networks</li>
                <li>• Quantum optimization</li>
                <li>• Hybrid quantum-classical AI</li>
              </ul>
              <a href="/quantum-ai-research" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Autonomous Systems */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
              <p className="text-white/70 mb-4">
                Developing intelligent systems that can operate independently and adapt to changing environments.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Self-learning algorithms</li>
                <li>• Adaptive behavior</li>
                <li>• Multi-agent systems</li>
                <li>• Swarm intelligence</li>
              </ul>
              <a href="/autonomous-systems-research" className="text-green-400 hover:text-green-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Neural Interfaces */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Brain-Computer Interfaces</h3>
              <p className="text-white/70 mb-4">
                Advancing the technology for direct communication between the human brain and computers.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Neural signal processing</li>
                <li>• Cognitive enhancement</li>
                <li>• Assistive technology</li>
                <li>• Neurofeedback systems</li>
              </ul>
              <a href="/bci-research" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Synthetic Biology */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Synthetic Biology</h3>
              <p className="text-white/70 mb-4">
                Combining AI with biological systems to create programmable living organisms and materials.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Bio-computation</li>
                <li>• Genetic programming</li>
                <li>• Bio-manufacturing</li>
                <li>• Environmental remediation</li>
              </ul>
              <a href="/synthetic-biology-research" className="text-red-400 hover:text-red-300 font-medium text-sm">
                Learn More →
              </a>
            </div>

            {/* Space Technology */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Space Technology</h3>
              <p className="text-white/70 mb-4">
                Developing AI systems for space exploration, satellite operations, and interplanetary missions.
              </p>
              <ul className="text-sm text-white/60 space-y-1 mb-4">
                <li>• Autonomous spacecraft</li>
                <li>• Satellite AI</li>
                <li>• Mars exploration</li>
                <li>• Space mining</li>
              </ul>
              <a href="/space-tech-research" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">AI Research Lab</h3>
              <p className="text-white/70 mb-6">
                State-of-the-art facility equipped with the latest AI hardware, including specialized neural network processors and quantum computing access.
              </p>
              <div className="space-y-3 text-sm text-white/60">
                <p>• High-performance computing clusters</p>
                <p>• Quantum computing access</p>
                <p>• Advanced robotics lab</p>
                <p>• Data center infrastructure</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation Center</h3>
              <p className="text-white/70 mb-6">
                Collaborative space for researchers, engineers, and industry partners to work together on breakthrough technologies.
              </p>
              <div className="space-y-3 text-sm text-white/60">
                <p>• Collaborative workspaces</p>
                <p>• Prototyping facilities</p>
                <p>• Testing environments</p>
                <p>• Conference facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">"Quantum Neural Networks for Drug Discovery"</h3>
              <p className="text-white/60 text-sm mb-3">Nature AI, 2024</p>
              <p className="text-white/70 text-sm">Research on using quantum computing to accelerate pharmaceutical discovery processes.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">"Autonomous AI Systems in Manufacturing"</h3>
              <p className="text-white/60 text-sm mb-3">IEEE Robotics, 2024</p>
              <p className="text-white/70 text-sm">Study of self-learning robotic systems in industrial automation.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">"Consciousness in Artificial Intelligence"</h3>
              <p className="text-white/60 text-sm mb-3">AI Consciousness Journal, 2024</p>
              <p className="text-white/70 text-sm">Theoretical framework for developing self-aware AI systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">MIT</span>
              </div>
              <h3 className="text-white font-semibold">MIT</h3>
              <p className="text-white/70 text-sm">AI and robotics research collaboration</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">Stanford</span>
              </div>
              <h3 className="text-white font-semibold">Stanford</h3>
              <p className="text-white/70 text-sm">Quantum computing research</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">NASA</span>
              </div>
              <h3 className="text-white font-semibold">NASA</h3>
              <p className="text-white/70 text-sm">Space technology development</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">NIH</span>
              </div>
              <h3 className="text-white font-semibold">NIH</h3>
              <p className="text-white/70 text-sm">Biomedical AI research</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Research Mission</h2>
          <p className="text-xl text-white/70 mb-8">
            Be part of groundbreaking research that shapes the future of technology and humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Collaborate With Us
            </a>
            <a
              href="/careers"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}