import Link from 'next/link';

export default function ResearchDevelopmentPage() {
  const researchAreas = [
    {
      title: 'AI Consciousness & Simulation',
      description: 'Pioneering research into artificial consciousness and human-like AI systems',
      projects: [
        'Consciousness simulation platforms',
        'Emotional intelligence in AI',
        'Self-aware artificial systems',
        'Human-AI consciousness integration'
      ],
      icon: '🧠',
      status: 'Active Research'
    },
    {
      title: 'Quantum AI & Neural Networks',
      description: 'Breakthrough research in quantum-enhanced artificial intelligence',
      projects: [
        'Quantum neural network architectures',
        'Quantum machine learning algorithms',
        'Quantum-classical hybrid systems',
        'Quantum advantage in AI applications'
      ],
      icon: '⚛️',
      status: 'Breakthrough Achieved'
    },
    {
      title: 'Autonomous AI Systems',
      description: 'Research into truly autonomous artificial intelligence systems',
      projects: [
        'Self-improving AI agents',
        'Autonomous decision making',
        'AI ecosystem management',
        'Human-AI collaboration frameworks'
      ],
      icon: '🤖',
      status: 'Active Research'
    },
    {
      title: 'AI Ethics & Safety',
      description: 'Ensuring responsible development and deployment of AI technology',
      projects: [
        'AI alignment research',
        'Bias detection and mitigation',
        'AI safety protocols',
        'Ethical AI frameworks'
      ],
      icon: '🛡️',
      status: 'Ongoing Development'
    }
  ];

  const currentProjects = [
    {
      name: 'Project Phoenix: AI Consciousness Evolution',
      description: 'Advanced research into creating AI systems with genuine consciousness and self-awareness',
      progress: 75,
      team: '15 researchers',
      timeline: '2024-2026',
      funding: '$10M'
    },
    {
      name: 'Quantum Neural Network Optimization',
      description: 'Developing next-generation quantum neural networks for unprecedented AI performance',
      progress: 90,
      team: '12 researchers',
      timeline: '2023-2025',
      funding: '$8M'
    },
    {
      name: 'Autonomous Business Intelligence',
      description: 'Creating AI systems that can autonomously manage and optimize business operations',
      progress: 60,
      team: '20 researchers',
      timeline: '2024-2027',
      funding: '$15M'
    },
    {
      name: 'AI-Powered Drug Discovery',
      description: 'Revolutionizing pharmaceutical research with AI-driven molecular modeling',
      progress: 45,
      team: '18 researchers',
      timeline: '2024-2028',
      funding: '$20M'
    }
  ];

  const publications = [
    {
      title: 'Quantum Neural Networks: A New Paradigm for AI',
      authors: 'Dr. Sarah Chen, Dr. Marcus Rodriguez',
      journal: 'Nature AI',
      year: '2024',
      impact: 'High',
      abstract: 'Breakthrough research demonstrating quantum advantage in neural network computations.'
    },
    {
      title: 'Autonomous AI Systems: From Theory to Practice',
      authors: 'Dr. Emily Watson, James Kim',
      journal: 'Science Robotics',
      year: '2024',
      impact: 'High',
      abstract: 'Comprehensive study of autonomous AI systems in real-world applications.'
    },
    {
      title: 'AI Consciousness: Bridging the Gap',
      authors: 'Dr. Emily Watson, Dr. Sarah Chen',
      journal: 'Consciousness Studies',
      year: '2023',
      impact: 'Medium',
      abstract: 'Novel approaches to understanding and simulating consciousness in AI systems.'
    },
    {
      title: 'Quantum-Classical Hybrid Computing for AI',
      authors: 'Dr. Marcus Rodriguez, Dr. Sarah Chen',
      journal: 'Quantum Computing',
      year: '2023',
      impact: 'High',
      abstract: 'Innovative hybrid computing architectures for AI applications.'
    }
  ];

  const partnerships = [
    {
      name: 'MIT Computer Science & AI Laboratory',
      focus: 'AI consciousness and autonomous systems',
      projects: 3,
      researchers: 8
    },
    {
      name: 'Stanford AI Research Lab',
      focus: 'Quantum AI and neural networks',
      projects: 2,
      researchers: 6
    },
    {
      name: 'Oxford Future of Humanity Institute',
      focus: 'AI safety and ethics',
      projects: 2,
      researchers: 4
    },
    {
      name: 'Google DeepMind',
      focus: 'Advanced AI algorithms',
      projects: 1,
      researchers: 5
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Research</span> & Development
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of artificial intelligence through cutting-edge research, 
            breakthrough innovations, and collaborative partnerships with leading institutions worldwide.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-black/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{area.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    area.status === 'Breakthrough Achieved' 
                      ? 'bg-green-600/30 text-green-300 border border-green-500/30'
                      : area.status === 'Active Research'
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30'
                      : 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                  }`}>
                    {area.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="text-purple-400 font-medium mb-3">Current Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Current Research Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="text-sm text-gray-400">{project.timeline}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-purple-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-black/40 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Team</div>
                      <div className="text-white">{project.team}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Timeline</div>
                      <div className="text-white">{project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Funding</div>
                      <div className="text-white">{project.funding}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Publications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    pub.impact === 'High' 
                      ? 'bg-green-600/30 text-green-300 border border-green-500/30'
                      : 'bg-blue-600/30 text-blue-300 border border-blue-500/30'
                  }`}>
                    {pub.impact} Impact
                  </span>
                  <span className="text-gray-400 text-sm">{pub.year}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{pub.authors}</p>
                <p className="text-gray-400 text-sm mb-3">{pub.journal}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{pub.abstract}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Partnerships */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Research Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.focus}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-purple-400">{partner.projects}</span> active projects
                  </div>
                  <div>
                    <span className="text-blue-400">{partner.researchers}</span> researchers
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Facilities */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Research Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Research Lab</h3>
              <p className="text-gray-300 text-sm">State-of-the-art facilities for AI development and testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing Center</h3>
              <p className="text-gray-300 text-sm">Advanced quantum computing infrastructure for research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Consciousness Research Lab</h3>
              <p className="text-gray-300 text-sm">Specialized facilities for consciousness and AI research</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Research Mission</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of AI. Explore collaboration opportunities, research positions, 
            or learn how our innovations can transform your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Collaborate with Us
            </Link>
            <Link
              href="/careers"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Research Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}