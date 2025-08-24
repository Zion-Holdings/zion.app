export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a pioneering company in AI-powered digital economies, quantum computing, and autonomous business solutions.',
  keywords: 'about Zion Tech Group, company history, AI innovation, quantum computing, autonomous business',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2025',
      title: 'AI Consciousness Evolution Platform',
      description: 'Launch of revolutionary AI consciousness simulation and evolution platform.',
    },
    {
      year: '2024',
      title: 'Quantum Neural Network Breakthrough',
      description: 'Achieved breakthrough in quantum neural network architecture.',
    },
    {
      year: '2023',
      title: 'Autonomous Business Operations',
      description: 'Successfully deployed autonomous business management systems.',
    },
    {
      year: '2022',
      title: 'Company Foundation',
      description: 'Zion Tech Group founded with vision of AI-powered digital economies.',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in AI and technology.',
      icon: '🚀',
    },
    {
      title: 'Autonomous Excellence',
      description: 'Building systems that operate independently and intelligently.',
      icon: '🤖',
    },
    {
      title: 'Quantum Leap',
      description: 'Advancing computing beyond classical limitations.',
      icon: '⚛️',
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Creating symbiotic relationships between humans and AI systems.',
      icon: '🤝',
    },
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'CEO & Founder',
      description: 'Visionary leader in AI consciousness and autonomous systems.',
      email: 'kleber@ziontechgroup.com',
    },
    {
      name: 'AI Research Team',
      role: 'Research & Development',
      description: 'Cutting-edge research in AI consciousness and quantum computing.',
    },
    {
      name: 'Engineering Team',
      role: 'Product Development',
      description: 'Building the future of autonomous business operations.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
          Pioneering the future of AI-powered digital economies, autonomous business operations, and quantum computing solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              To democratize access to advanced AI technologies and enable businesses to operate autonomously, 
              efficiently, and intelligently in the digital age. We believe in a future where AI and humans 
              collaborate seamlessly to solve complex challenges and create unprecedented value.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              A world where every business can leverage autonomous AI systems to optimize operations, 
              accelerate innovation, and create sustainable digital economies that benefit all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="opacity-80 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Company Milestones</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="text-2xl font-bold text-blue-400 min-w-[80px]">{milestone.year}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="opacity-80">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="p-6 rounded-lg border border-white/10 text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="opacity-80 text-sm mb-4">{member.description}</p>
              {member.email && (
                <a 
                  href={`mailto:${member.email}`}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Be part of the revolution in AI-powered business operations and digital economies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/careers"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            View Careers
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}