import Link from 'next/link';

export const metadata = {
  title: 'Research & Development - Zion Tech Group',
  description: 'Cutting-edge research and development in AI, quantum computing, and emerging technologies from Zion Tech Group.',
};

export default function ResearchDevelopmentPage() {
  const researchAreas = [
    {
      name: 'AI Consciousness & Autonomous Systems',
      description: 'Pioneering research into artificial consciousness, self-aware AI systems, and autonomous decision-making capabilities.',
      icon: '🧠',
      focus: [
        'Consciousness Simulation',
        'Self-Aware AI Development',
        'Autonomous Learning Systems',
        'Ethical AI Frameworks'
      ],
      applications: ['Advanced AI Systems', 'Human-AI Collaboration', 'Cognitive Computing', 'Philosophy of Mind']
    },
    {
      name: 'Quantum AI & Machine Learning',
      description: 'Research at the intersection of quantum computing and artificial intelligence for breakthrough computational capabilities.',
      icon: '⚛️',
      focus: [
        'Quantum Neural Networks',
        'Quantum Machine Learning',
        'Hybrid Quantum-Classical AI',
        'Quantum Feature Mapping'
      ],
      applications: ['Quantum Computing', 'AI Acceleration', 'Pattern Recognition', 'Optimization Problems']
    },
    {
      name: 'Advanced Cybersecurity',
      description: 'Next-generation cybersecurity research including quantum-resistant cryptography and AI-powered threat detection.',
      icon: '🔒',
      focus: [
        'Quantum Cryptography',
        'AI Threat Detection',
        'Zero-Trust Security',
        'Blockchain Security'
      ],
      applications: ['Enterprise Security', 'Financial Systems', 'Government Infrastructure', 'IoT Security']
    },
    {
      name: 'Emerging Technologies',
      description: 'Exploration of cutting-edge technologies including brain-computer interfaces, nanotechnology, and space technology.',
      icon: '🚀',
      focus: [
        'Brain-Computer Interfaces',
        'Nanotechnology',
        'Space Technology',
        'Biotechnology'
      ],
      applications: ['Medical Technology', 'Space Exploration', 'Human Enhancement', 'Environmental Solutions']
    }
  ];

  const researchProjects = [
    {
      title: 'AI Consciousness Evolution Platform',
      description: 'Development of AI systems capable of evolving consciousness and self-awareness through continuous learning and adaptation.',
      status: 'Active',
      timeline: '2023-2026',
      team: '15 researchers',
      outcomes: ['Consciousness Metrics', 'Self-Aware AI Models', 'Ethical Guidelines', 'Human-AI Interaction Protocols']
    },
    {
      title: 'Quantum Neural Network Architecture',
      description: 'Research into hybrid quantum-classical neural networks for solving complex optimization and machine learning problems.',
      status: 'Active',
      timeline: '2024-2027',
      team: '12 researchers',
      outcomes: ['Quantum AI Algorithms', 'Hybrid Architectures', 'Performance Benchmarks', 'Scalability Solutions']
    },
    {
      title: 'Autonomous Business Intelligence',
      description: 'Development of fully autonomous business intelligence systems that operate independently and make strategic decisions.',
      status: 'Active',
      timeline: '2023-2025',
      team: '18 researchers',
      outcomes: ['Autonomous BI Platform', 'Decision Algorithms', 'Business Process Automation', 'ROI Optimization']
    },
    {
      title: 'Next-Generation Cybersecurity Framework',
      description: 'Research into AI-powered cybersecurity systems with quantum-resistant encryption and autonomous threat response.',
      status: 'Planning',
      timeline: '2025-2028',
      team: '20 researchers',
      outcomes: ['Quantum-Safe Encryption', 'AI Threat Response', 'Security Automation', 'Compliance Frameworks']
    }
  ];

  const publications = [
    {
      title: 'Towards Artificial Consciousness: A Framework for Self-Aware AI Systems',
      authors: ['Dr. Kleber Santos', 'Dr. Emily Watson', 'Dr. Sarah Chen'],
      journal: 'Journal of Artificial Intelligence Research',
      year: '2024',
      doi: '10.1000/ai.2024.001',
      abstract: 'This paper presents a comprehensive framework for developing AI systems with emergent consciousness...'
    },
    {
      title: 'Quantum-Classical Hybrid Neural Networks: Architecture and Applications',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'Dr. David Kim'],
      journal: 'Quantum Computing and Information',
      year: '2024',
      doi: '10.1000/qci.2024.015',
      abstract: 'We explore the design and implementation of hybrid quantum-classical neural networks...'
    },
    {
      title: 'Autonomous Business Intelligence: From Automation to Strategic Decision Making',
      authors: ['Dr. Kleber Santos', 'Dr. Emily Watson', 'Prof. James Wilson'],
      journal: 'Business Intelligence Quarterly',
      year: '2023',
      doi: '10.1000/biq.2023.089',
      abstract: 'This research examines the evolution of business intelligence from automated reporting...'
    },
    {
      title: 'AI-Powered Cybersecurity: Threat Detection and Response in the Digital Age',
      authors: ['Dr. Michael Rodriguez', 'Dr. Sarah Chen', 'Dr. Lisa Park'],
      journal: 'Cybersecurity and Privacy',
      year: '2023',
      doi: '10.1000/csp.2023.203',
      abstract: 'We present a comprehensive analysis of AI-powered cybersecurity systems...'
    }
  ];

  const collaborations = [
    {
      institution: 'MIT Computer Science & AI Laboratory',
      focus: 'AI Consciousness Research',
      projects: ['Consciousness Metrics', 'Ethical AI Frameworks', 'Human-AI Collaboration'],
      status: 'Active'
    },
    {
      institution: 'Stanford Quantum Computing Institute',
      focus: 'Quantum AI Development',
      projects: ['Quantum Neural Networks', 'Hybrid Algorithms', 'Quantum Machine Learning'],
      status: 'Active'
    },
    {
      institution: 'Carnegie Mellon Robotics Institute',
      focus: 'Autonomous Systems',
      projects: ['Robotic Learning', 'Autonomous Navigation', 'Human-Robot Interaction'],
      status: 'Planning'
    },
    {
      institution: 'UC Berkeley AI Research Lab',
      focus: 'Machine Learning & AI',
      projects: ['Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research & Development
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research in AI, 
            quantum computing, and emerging technologies.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advancing Technology Through Research</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our research and development initiatives are at the forefront of technological innovation, 
                exploring the boundaries of what's possible in artificial intelligence, quantum computing, 
                and emerging technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We collaborate with leading academic institutions, research organizations, and industry 
                partners to drive breakthrough discoveries and develop next-generation solutions.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  "Research that transforms the future of technology and human potential."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">🔬</span>
                  <span className="text-gray-700">Cutting-edge innovation and discovery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">🤝</span>
                  <span className="text-gray-700">Collaborative research partnerships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">🌍</span>
                  <span className="text-gray-700">Real-world impact and applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">⚡</span>
                  <span className="text-gray-700">Rapid translation to practical solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research spans multiple cutting-edge technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.name}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Research Focus:</h4>
                  <ul className="space-y-2">
                    {area.focus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {area.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Research Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Active Research Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current research initiatives driving innovation and discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Timeline:</span>
                    <p className="text-gray-600">{project.timeline}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Team Size:</span>
                    <p className="text-gray-600">{project.team}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Expected Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research contributions to the scientific community
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{publication.title}</h3>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">Journal:</span> {publication.journal} ({publication.year})
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">DOI:</span> {publication.doi}
                </p>
                <p className="text-gray-600 italic">{publication.abstract}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Collaborations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading research institutions and organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collaborations.map((collaboration, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{collaboration.institution}</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Focus:</span> {collaboration.focus}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Collaborative Projects:</h4>
                  <ul className="space-y-2">
                    {collaboration.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    collaboration.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {collaboration.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Research */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Research Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Opportunities for researchers, students, and industry partners to collaborate on cutting-edge projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Internships</h3>
              <p className="text-gray-600 mb-6">Join our research team as an intern and contribute to breakthrough discoveries.</p>
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Partnerships</h3>
              <p className="text-gray-600 mb-6">Collaborate with our research team on joint projects and publications.</p>
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Partner With Us
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Collaboration</h3>
              <p className="text-gray-600 mb-6">Work with us to translate research into practical business solutions.</p>
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Technology Together?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in pushing the boundaries of what's possible. Contact our research team 
            to discuss collaboration opportunities and research partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Research Team
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}