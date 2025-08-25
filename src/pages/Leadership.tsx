import React from 'react';
import { Linkedin, Globe, Mail, Award, Users, Rocket, Brain, Shield, Globe as GlobeIcon } from 'lucide-react';

export default function Leadership() {
  const executiveTeam = [
    {
      name: 'Dr. Kleber Santos',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 20+ years of experience in AI, quantum computing, and emerging technologies. Former research scientist at leading institutions.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Strategic Leadership', 'Innovation Management'],
      education: 'PhD in Computer Science, MIT',
      experience: '20+ years in technology leadership',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com',
      achievements: [
        'Pioneered breakthrough AI algorithms',
        'Led 50+ successful AI implementations',
        'Published 30+ research papers',
        'Named Top 100 AI Innovators 2023'
      ]
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'Leading expert in AI architecture and quantum computing systems. Former senior researcher at Google AI and IBM Quantum.',
      expertise: ['AI Architecture', 'Quantum Computing', 'System Design', 'Research & Development'],
      education: 'PhD in Quantum Physics, Stanford',
      experience: '15+ years in AI research',
      image: '👩‍💻',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com',
      achievements: [
        'Designed quantum-safe AI systems',
        'Led breakthrough quantum algorithms',
        'Published in Nature & Science',
        'Recipient of NSF CAREER Award'
      ]
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Security Officer',
      bio: 'Cybersecurity expert specializing in AI-powered threat detection and quantum-safe cryptography. Former CISO at Fortune 500 companies.',
      expertise: ['Cybersecurity', 'AI Security', 'Quantum Cryptography', 'Risk Management'],
      education: 'MS in Cybersecurity, Carnegie Mellon',
      experience: '18+ years in security',
      image: '🛡️',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      achievements: [
        'Developed AI threat detection systems',
        'Led security for 100+ enterprise clients',
        'Certified CISSP, CISM, CISA',
        'Speaker at Black Hat & DEF CON'
      ]
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Chief Innovation Officer',
      bio: 'Innovation strategist focused on emerging technologies and market disruption. Expert in AI ethics and responsible AI development.',
      expertise: ['Innovation Strategy', 'AI Ethics', 'Market Analysis', 'Technology Trends'],
      education: 'PhD in Technology Management, Harvard',
      experience: '12+ years in innovation',
      image: '🚀',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com',
      achievements: [
        'Launched 20+ innovative products',
        'Established AI ethics framework',
        'Advisor to government agencies',
        'Named Innovation Leader of the Year'
      ]
    }
  ];

  const advisoryBoard = [
    {
      name: 'Dr. James Wilson',
      position: 'AI Research Advisor',
      bio: 'Distinguished professor of AI at MIT, leading researcher in autonomous systems and machine learning.',
      expertise: 'AI Research, Autonomous Systems, Machine Learning',
      institution: 'Massachusetts Institute of Technology',
      image: '👨‍🏫'
    },
    {
      name: 'Lisa Park',
      position: 'Quantum Computing Advisor',
      bio: 'Senior researcher at IBM Quantum, expert in quantum algorithms and quantum machine learning.',
      expertise: 'Quantum Computing, Quantum Algorithms, Quantum ML',
      institution: 'IBM Quantum',
      image: '👩‍🔬'
    },
    {
      name: 'Alex Thompson',
      position: 'Business Strategy Advisor',
      bio: 'Former McKinsey partner, specializing in technology strategy and digital transformation.',
      expertise: 'Business Strategy, Digital Transformation, Technology Consulting',
      institution: 'McKinsey & Company',
      image: '👨‍💼'
    }
  ];

  const leadershipValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies.',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are responsible, transparent, and beneficial to society.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Security & Trust',
      description: 'We prioritize the security and privacy of our clients and systems.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Global Impact',
      description: 'We solve real-world problems that affect businesses and communities worldwide.',
      icon: GlobeIcon,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and transformation at Zion Tech Group.
          </p>
        </div>

        {/* Leadership Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Leadership Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {executiveTeam.map((executive, index) => (
              <div key={index} className="group">
                <div className="p-8 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start mb-6">
                    <div className="text-6xl mr-6">{executive.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                      <p className="text-cyan-400 text-lg mb-3">{executive.position}</p>
                      <div className="flex space-x-4">
                        <a
                          href={executive.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${executive.email}`}
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {executive.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Education</h4>
                      <p className="text-gray-300 text-sm">{executive.education}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Experience</h4>
                      <p className="text-gray-300 text-sm">{executive.experience}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {executive.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {executive.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Award className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advisory Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-5xl mb-4">{advisor.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>
                <p className="text-cyan-400 mb-3">{advisor.position}</p>
                <p className="text-gray-300 text-sm mb-4">{advisor.bio}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise</h4>
                  <p className="text-gray-300 text-sm">{advisor.expertise}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Institution</h4>
                  <p className="text-gray-300 text-sm">{advisor.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional leaders who share our vision of transforming the world through AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                Contact Leadership
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}