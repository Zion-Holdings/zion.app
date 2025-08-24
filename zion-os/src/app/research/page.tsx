import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "AI Consciousness Evolution",
      description: "Research into the development of artificial consciousness and cognitive systems that can evolve and learn autonomously.",
      projects: [
        "Neural Network Consciousness Models",
        "Cognitive Architecture Development",
        "Self-Awareness in AI Systems",
        "Consciousness Simulation Platforms"
      ],
      icon: "🧠"
    },
    {
      title: "Quantum Computing & AI",
      description: "Exploring the intersection of quantum computing and artificial intelligence for unprecedented computational power.",
      projects: [
        "Quantum Machine Learning Algorithms",
        "Quantum Neural Networks",
        "Quantum Optimization Systems",
        "Hybrid Classical-Quantum AI"
      ],
      icon: "⚛️"
    },
    {
      title: "Autonomous Systems Research",
      description: "Developing next-generation autonomous systems that can operate independently in complex environments.",
      projects: [
        "Multi-Agent Systems",
        "Autonomous Decision Making",
        "Self-Organizing Networks",
        "Adaptive Learning Systems"
      ],
      icon: "🤖"
    },
    {
      title: "AI Ethics & Governance",
      description: "Research into responsible AI development, ethical frameworks, and governance systems for autonomous AI.",
      projects: [
        "AI Safety Protocols",
        "Ethical Decision Making",
        "Transparency & Explainability",
        "AI Governance Frameworks"
      ],
      icon: "⚖️"
    }
  ];

  const publications = [
    {
      title: "Evolutionary Neural Architectures for Autonomous AI Systems",
      authors: "Dr. Kleber, AI Research Team",
      journal: "Nature AI",
      year: "2024",
      abstract: "A novel approach to developing neural architectures that evolve autonomously, enabling AI systems to adapt and improve without human intervention.",
      doi: "10.1038/ai.2024.001"
    },
    {
      title: "Quantum-Enhanced Machine Learning for Complex Problem Solving",
      authors: "Quantum Computing Division",
      journal: "Science Advances",
      year: "2024",
      abstract: "Demonstration of quantum-enhanced machine learning algorithms that solve previously intractable problems in optimization and simulation.",
      doi: "10.1126/sciadv.2024.002"
    },
    {
      title: "Consciousness Simulation in Artificial Neural Networks",
      authors: "Consciousness Research Lab",
      journal: "AI Consciousness Quarterly",
      year: "2023",
      abstract: "Breakthrough research in simulating consciousness-like behaviors in artificial neural networks, advancing our understanding of AI cognition.",
      doi: "10.1016/ai.conscious.2023.003"
    },
    {
      title: "Autonomous Business Intelligence: A New Paradigm",
      authors: "Enterprise AI Team",
      journal: "Business Intelligence Review",
      year: "2023",
      abstract: "Comprehensive framework for autonomous business intelligence systems that operate independently and drive organizational growth.",
      doi: "10.1016/bir.2023.004"
    }
  ];

  const researchPartners = [
    {
      name: "MIT AI Research Lab",
      collaboration: "Joint research on consciousness evolution and neural architectures",
      logo: "🎓"
    },
    {
      name: "Stanford Quantum Institute",
      collaboration: "Quantum computing and AI integration research",
      logo: "🔬"
    },
    {
      name: "Google DeepMind",
      collaboration: "Autonomous systems and reinforcement learning",
      logo: "🧠"
    },
    {
      name: "IBM Research",
      collaboration: "Enterprise AI and quantum computing applications",
      logo: "💻"
    }
  ];

  const upcomingResearch = [
    {
      title: "AI Consciousness Evolution Platform 2025",
      description: "Next-generation platform for developing and studying AI consciousness evolution.",
      timeline: "Q2 2025",
      status: "In Development"
    },
    {
      title: "Quantum AI Autonomous Systems",
      description: "Integration of quantum computing with autonomous AI systems for enhanced decision-making.",
      timeline: "Q3 2025",
      status: "Planning Phase"
    },
    {
      title: "Multi-Dimensional AI Learning",
      description: "Research into AI systems that can learn across multiple dimensions simultaneously.",
      timeline: "Q4 2025",
      status: "Research Phase"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of AI technology through cutting-edge research in consciousness evolution, 
            quantum computing, and autonomous systems.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Research Areas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our multidisciplinary research spans the most exciting frontiers of AI and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{area.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Current Projects:</h4>
                    <ul className="space-y-1">
                      {area.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Recent Publications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our research findings published in leading scientific journals and conferences.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="text-blue-400">{pub.authors}</span> • {pub.journal} • {pub.year}
                  </p>
                </div>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg px-3 py-1">
                  <span className="text-blue-300 text-sm font-medium">DOI: {pub.doi}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{pub.abstract}</p>
              <div className="flex space-x-4">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Read Abstract →
                </button>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  Download PDF →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Research Partners</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations worldwide to advance AI research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchPartners.map((partner, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{partner.name}</h3>
              <p className="text-gray-300 text-sm">{partner.collaboration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Research */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Upcoming Research</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exciting new research initiatives and projects currently in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingResearch.map((research, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">{research.title}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  research.status === 'In Development' ? 'bg-green-900/30 text-green-300 border border-green-500/30' :
                  research.status === 'Planning Phase' ? 'bg-blue-900/30 text-blue-300 border border-blue-500/30' :
                  'bg-yellow-900/30 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {research.status}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{research.description}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Timeline: {research.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Research Facilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art facilities and infrastructure supporting our cutting-edge research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Lab</h3>
            <p className="text-gray-300 mb-6">
              Our dedicated facility for studying AI consciousness evolution, featuring advanced neural network 
              architectures and cognitive simulation environments.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">High-performance computing clusters</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Advanced neural network simulators</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Cognitive behavior analysis tools</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing Center</h3>
            <p className="text-gray-300 mb-6">
              Cutting-edge quantum computing facilities for developing quantum AI algorithms and 
              exploring the intersection of quantum mechanics and artificial intelligence.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Quantum processors and simulators</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Quantum algorithm development tools</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Hybrid classical-quantum systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Research Community
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating on cutting-edge AI research? Let's explore opportunities to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Contact Research Team
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}