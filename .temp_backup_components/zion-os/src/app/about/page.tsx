import Link from 'next/link';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Quantum computing expert with 15+ years in enterprise AI. Previously led AI infrastructure at Microsoft and Amazon.',
      image: '/images/leadership/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Research Officer',
      bio: 'Neuroscience and AI researcher with breakthrough work in consciousness simulation. PhD from MIT, published 50+ peer-reviewed papers.',
      image: '/images/leadership/emily-watson.jpg'
    },
    {
      name: 'James Kim',
      title: 'Chief Operations Officer',
      bio: 'Operations and scaling expert with experience at Tesla and SpaceX. Specializes in AI deployment at enterprise scale.',
      image: '/images/leadership/james-kim.jpg'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Zion Tech Group established with mission to democratize AI technology' },
    { year: '2021', title: 'First AI Platform', description: 'Launched autonomous business operations platform' },
    { year: '2022', title: 'Quantum Breakthrough', description: 'Developed first quantum neural network prototype' },
    { year: '2023', title: 'Enterprise Launch', description: 'Secured first 10 enterprise clients' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded to 5 countries with 100+ team members' },
    { year: '2025', title: 'AI Revolution', description: 'Leading the next wave of AI innovation and deployment' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in the AI revolution, building the future of autonomous systems, 
            quantum computing, and intelligent technology solutions that transform businesses and society.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize AI technology and make autonomous systems accessible to businesses of all sizes. 
              We believe that AI should be a force for good, enhancing human capabilities and solving complex challenges.
            </p>
          </div>
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              A world where AI seamlessly integrates with human intelligence, creating unprecedented opportunities 
              for innovation, growth, and positive societal impact across all industries and communities.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$100M+</div>
              <div className="text-gray-300">Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{leader.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full absolute left-1/2 transform -translate-x-3 ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'}`}></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to be part of the AI revolution? Explore our services or get in touch to learn how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}