
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading our AI research and development initiatives with 15+ years in machine learning.',
      avatar: '👩‍💻',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Technology',
      bio: 'Expert in cloud infrastructure and scalable system architecture.',
      avatar: '👨‍💻',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      bio: 'Pioneering quantum computing research and advanced algorithms.',
      avatar: '👩‍🔬',
      expertise: ['Quantum Computing', 'Algorithm Design', 'Research']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group established with a vision for AI-driven innovation'
    },
    {
      year: '2022',
      title: 'AI Platform Launch',
      description: 'Successfully launched our AI-powered talent matching platform'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries'
    },
    {
      year: '2025',
      title: 'Quantum Leap',
      description: 'Introduced quantum computing solutions and advanced AI services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-gradient">Zion</span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology through innovation, expertise, and unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                At Zion Tech Group, we believe that technology should empower, not complicate. Our mission is to bridge the gap between cutting-edge innovation and practical business solutions.
              </p>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                We're committed to democratizing access to advanced AI and tech solutions, making them accessible to businesses of all sizes while maintaining the highest standards of quality and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-lg font-semibold transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl glass-morphism border border-zion-cyan/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">🚀</div>
                  <p className="text-zion-slate-light text-lg">Innovation at Work</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-gold rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass-morphism border border-zion-blue/20 hover:border-zion-blue/40 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-blue-dark rounded-2xl mb-6 flex items-center justify-center text-3xl">
                💡
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-zion-slate-light leading-relaxed">
                We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-morphism border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-2xl mb-6 flex items-center justify-center text-3xl">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client Partnership</h3>
              <p className="text-zion-slate-light leading-relaxed">
                We view our clients as partners, working collaboratively to achieve shared success and long-term growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-morphism border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-cyan-dark rounded-2xl mb-6 flex items-center justify-center text-3xl">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trust & Security</h3>
              <p className="text-zion-slate-light leading-relaxed">
                We maintain the highest standards of security and ethical practices in all our operations and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl glass-morphism border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:animate-float">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-semibold">{member.role}</p>
                </div>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light text-sm rounded-full border border-zion-purple/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-zion-slate-dark/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones in our growth and innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-blue"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="p-6 rounded-xl glass-morphism border border-zion-cyan/20">
                    <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-zion-slate-light">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full border-4 border-zion-slate-dark"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl glass-morphism border border-zion-cyan/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Join</span> the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Partner with Zion Tech Group and be part of the technological revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start a Conversation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-xl font-semibold transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
