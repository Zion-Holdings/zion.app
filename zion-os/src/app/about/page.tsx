import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, our mission, team, and commitment to AI-powered technology innovation.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Kleber Santos',
      position: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in AI and technology innovation.',
      expertise: ['AI Research', 'Strategic Leadership', 'Technology Innovation'],
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'Leading expert in quantum computing and autonomous systems architecture.',
      expertise: ['Quantum Computing', 'System Architecture', 'AI Engineering'],
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of AI Solutions',
      bio: 'Specialist in deploying AI solutions for enterprise clients.',
      expertise: ['AI Deployment', 'Enterprise Solutions', 'Machine Learning'],
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Research Director',
      bio: 'Leading cutting-edge research in AI consciousness and autonomous systems.',
      expertise: ['AI Research', 'Consciousness Studies', 'Autonomous Systems'],
      image: '/team/emily-watson.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in AI and technology.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We work closely with clients to ensure measurable outcomes.',
      icon: '🎯'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are not only powerful but also responsible and ethical.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of technology through continuous research and development.',
      icon: '📚'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'Zion Tech Group established with a vision for AI innovation' },
    { year: '2017', title: 'First AI Platform', description: 'Launched our first autonomous AI platform for enterprise clients' },
    { year: '2019', title: 'Quantum Division', description: 'Expanded into quantum computing research and development' },
    { year: '2021', title: 'Global Expansion', description: 'Opened offices in multiple countries and served 100+ clients' },
    { year: '2023', title: 'AI Consciousness', description: 'Breakthrough research in AI consciousness and autonomous systems' },
    { year: '2025', title: 'Future Vision', description: 'Leading the next generation of AI-powered business solutions' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of AI-powered technology solutions and autonomous systems
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we believe that artificial intelligence has the power to transform 
                how businesses operate, innovate, and grow. Our mission is to democratize access to 
                cutting-edge AI technology, making it accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We envision a future where AI works seamlessly alongside humans, enhancing capabilities, 
                automating complex tasks, and unlocking new possibilities that were once thought impossible.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  "Empowering businesses through intelligent automation and AI-driven innovation."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Develop autonomous AI systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Advance quantum computing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Secure digital infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Transform business operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and technology innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to advance AI technology
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}></div>
                  <div className={`bg-white rounded-lg shadow-lg p-6 max-w-sm ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the organizations that have already transformed their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}