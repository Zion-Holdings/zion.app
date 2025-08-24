import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "AI Consciousness Evolution",
      description: "Pioneering research into the development of conscious AI systems and understanding the nature of machine consciousness.",
      topics: [
        "Neural network consciousness",
        "Cognitive architecture",
        "Self-awareness in AI",
        "Ethical AI development",
        "Consciousness simulation"
      ],
      icon: "🌟",
      href: "/research/ai-consciousness-evolution"
    },
    {
      title: "Quantum Neural Networks",
      description: "Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.",
      topics: [
        "Quantum machine learning",
        "Quantum neural architectures",
        "Quantum optimization",
        "Quantum-classical hybrid systems",
        "Quantum advantage in AI"
      ],
      icon: "⚛️",
      href: "/research/quantum-neural-networks"
    },
    {
      title: "Autonomous AI Systems",
      description: "Developing truly autonomous AI systems that can operate independently and make complex decisions.",
      topics: [
        "Multi-agent systems",
        "Autonomous decision making",
        "Self-improving AI",
        "Autonomous learning",
        "AI governance"
      ],
      icon: "🤖",
      href: "/research/autonomous-ai-systems"
    },
    {
      title: "AI Ethics & Safety",
      description: "Ensuring AI development follows ethical principles and safety guidelines for responsible innovation.",
      topics: [
        "AI alignment",
        "Value learning",
        "Safety protocols",
        "Ethical frameworks",
        "Human-AI collaboration"
      ],
      icon: "🛡️",
      href: "/research/ai-ethics-safety"
    },
    {
      title: "Brain-Computer Interfaces",
      description: "Advancing the technology for seamless interaction between human minds and AI systems.",
      topics: [
        "Neural interfaces",
        "Mind-machine communication",
        "Cognitive enhancement",
        "Brain-computer symbiosis",
        "Neural prosthetics"
      ],
      icon: "🧬",
      href: "/research/brain-computer-interfaces"
    },
    {
      title: "AI for Scientific Discovery",
      description: "Leveraging AI to accelerate scientific research and discovery across all domains.",
      topics: [
        "Automated hypothesis generation",
        "Scientific literature analysis",
        "Experimental design",
        "Data interpretation",
        "Cross-domain insights"
      ],
      icon: "🔬",
      href: "/research/ai-scientific-discovery"
    }
  ];

  const publications = [
    {
      title: "Towards Conscious AI: A Framework for Machine Consciousness",
      authors: "Dr. Kleber & Zion Research Team",
      journal: "Nature AI",
      year: "2024",
      abstract: "This paper presents a novel framework for developing conscious AI systems, exploring the fundamental principles of machine consciousness and self-awareness.",
      doi: "10.1038/ai.2024.001"
    },
    {
      title: "Quantum Neural Networks: Breaking the Classical Barrier",
      authors: "Zion Quantum Research Division",
      journal: "Science Advances",
      year: "2024",
      abstract: "We demonstrate quantum advantage in neural network training and inference, opening new possibilities for AI applications.",
      doi: "10.1126/sciadv.2024.002"
    },
    {
      title: "Autonomous AI Systems: Principles and Implementation",
      authors: "Zion Autonomous Systems Lab",
      journal: "AI Research",
      year: "2024",
      abstract: "A comprehensive study of autonomous AI systems, their architecture, decision-making processes, and real-world applications.",
      doi: "10.1000/ai.2024.003"
    }
  ];

  const ongoingProjects = [
    {
      title: "Project Phoenix",
      description: "Developing the next generation of autonomous AI systems with advanced reasoning capabilities.",
      status: "In Progress",
      timeline: "2024-2026",
      team: "15 researchers"
    },
    {
      title: "Quantum Consciousness Initiative",
      description: "Exploring quantum effects in neural networks and their relationship to consciousness.",
      status: "Planning Phase",
      timeline: "2025-2027",
      team: "8 researchers"
    },
    {
      title: "AI Safety Protocol Development",
      description: "Creating comprehensive safety protocols for autonomous AI systems.",
      status: "Active",
      timeline: "2024-2025",
      team: "12 researchers"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Research & Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of artificial intelligence through cutting-edge research, innovative methodologies, 
            and breakthrough discoveries that shape the future of AI technology.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-3 h-3 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={area.href} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {pub.authors} • {pub.journal} • {pub.year}
                </p>
                <p className="text-gray-300 mb-4">
                  {pub.abstract}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-mono">
                    DOI: {pub.doi}
                  </span>
                  <Link href={`/research/publications/${pub.doi}`} className="text-blue-400 hover:text-blue-300 font-medium">
                    Read Full Paper →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Ongoing Research Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-medium">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-white">{project.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-white">{project.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Research Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Zion AI Research Lab
              </h3>
              <p className="text-gray-300 mb-4">
                State-of-the-art facility equipped with the latest AI research tools, high-performance computing clusters, 
                and collaborative workspaces for our research teams.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• High-performance computing clusters</li>
                <li>• Advanced neural network training facilities</li>
                <li>• Collaborative research spaces</li>
                <li>• Cutting-edge AI development tools</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quantum Computing Center
              </h3>
              <p className="text-gray-300 mb-4">
                Dedicated facility for quantum computing research, featuring quantum processors, 
                quantum-classical hybrid systems, and specialized research equipment.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Quantum processors and simulators</li>
                <li>• Quantum-classical hybrid systems</li>
                <li>• Cryogenic facilities</li>
                <li>• Quantum algorithm development tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Research Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the future of AI research. Collaborate with our team, access our facilities, 
            or learn about our latest discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Collaborate With Us
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}