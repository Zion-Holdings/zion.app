import React from 'react';
import Layout from '../components/layout/Layout';
import { Users, Target, Award, Star, Zap, Heart, Brain, Rocket, Shield, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology',
      icon: Zap
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality solutions and services',
      icon: Star
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve success',
      icon: Users
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'CEO & Founder',
      description: 'Visionary leader driving innovation in AI and quantum technology',
      icon: Brain
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Experts in machine learning, neural networks, and AI consciousness',
      icon: Brain
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Technology',
      description: 'Pioneers in quantum computing and quantum algorithms',
      icon: Rocket
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Specialists in advanced threat protection and zero trust security',
      icon: Shield
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision for revolutionary technology'
    },
    {
      year: '2022',
      title: 'AI Breakthroughs',
      description: 'Major advances in AI consciousness and neural network development'
    },
    {
      year: '2024',
      title: 'Quantum Innovation',
      description: 'Breakthrough quantum computing solutions and hybrid systems'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding services worldwide and pioneering space technology'
    }
  ];

  return (
    <Layout
      title="About Us | Zion Tech Group"
      description="Learn about Zion Tech Group's mission to pioneer revolutionary technology including AI consciousness, quantum computing, and space technology. Meet our expert team and discover our journey."
      keywords="about Zion Tech Group, company mission, team, AI consciousness, quantum computing, space technology"
      canonicalUrl="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Users className="mx-auto h-20 w-20 text-blue-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To accelerate human progress through revolutionary technology that solves 
                the world's most complex challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Transforming the Future
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  At Zion Tech Group, we believe that technology should serve humanity's 
                  greatest aspirations. Our mission is to develop and deploy cutting-edge 
                  solutions that address the most pressing challenges of our time.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From AI consciousness evolution to quantum computing breakthroughs, 
                  we're building the foundation for a future where technology amplifies 
                  human potential and creates unprecedented opportunities for growth and innovation.
                </p>
              </div>
              <div className="text-center">
                <Target className="mx-auto h-32 w-32 text-blue-400 mb-6" />
                <p className="text-gray-300 text-lg">
                  "Technology should serve humanity's greatest aspirations"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-blue-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="team">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experts in AI, quantum computing, cybersecurity, and space technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                      <member.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-blue-400 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-blue-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the technology revolution that's shaping the future of humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Work With Us
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Join Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;