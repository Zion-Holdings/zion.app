import React from 'react';
import { Link } from 'react-router-dom';

export default function Leadership() {
  const leadershipTeam = [
    {
      name: 'Dr. Kleber Santos',
      position: 'Chief Executive Officer & Founder',
      bio: 'Visionary leader with over 15 years of experience in AI and technology. Former research scientist at leading tech companies, Dr. Santos founded Zion Tech Group with a mission to democratize AI technology.',
      expertise: ['AI & Machine Learning', 'Strategic Leadership', 'Technology Innovation', 'Business Development'],
      education: 'PhD in Computer Science, Stanford University',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'Leading expert in quantum computing and AI systems. Dr. Chen has published over 50 research papers and holds 15 patents in AI and quantum technologies.',
      expertise: ['Quantum Computing', 'AI Systems Architecture', 'Research & Development', 'Technical Strategy'],
      education: 'PhD in Quantum Physics, MIT',
      image: '👩‍💻',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Operations Officer',
      bio: 'Operations expert with 20+ years in scaling technology companies. Michael has successfully led operations for three unicorn startups and brings deep expertise in process optimization.',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership', 'Strategic Planning'],
      education: 'MBA, Harvard Business School',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Chief Research Officer',
      bio: 'Leading researcher in AI ethics and responsible AI development. Dr. Watson has advised governments and international organizations on AI policy and regulation.',
      expertise: ['AI Ethics', 'Research Strategy', 'Policy Development', 'Academic Collaboration'],
      education: 'PhD in Ethics & AI, Oxford University',
      image: '👩‍🔬',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      position: 'Chief Financial Officer',
      bio: 'Financial strategist with extensive experience in technology finance and venture capital. David has helped raise over $500M in funding for technology companies.',
      expertise: ['Financial Strategy', 'Venture Capital', 'Risk Management', 'Strategic Planning'],
      education: 'MBA in Finance, Wharton School',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      position: 'Chief Marketing Officer',
      bio: 'Marketing innovator with expertise in B2B technology marketing and brand development. Lisa has built brands for several successful AI companies.',
      expertise: ['Brand Strategy', 'B2B Marketing', 'Digital Marketing', 'Market Research'],
      education: 'MBA in Marketing, Northwestern University',
      image: '👩‍💼',
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa@ziontechgroup.com'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Robert Johnson',
      position: 'Board Chairman',
      bio: 'Former CEO of TechCorp and current advisor to multiple AI startups. Dr. Johnson brings 30+ years of technology leadership experience.',
      company: 'TechCorp (Retired)',
      image: '👨‍💼'
    },
    {
      name: 'Maria Garcia',
      position: 'Board Member',
      bio: 'Partner at Innovation Ventures, a leading technology investment firm. Maria has invested in over 50 successful technology companies.',
      company: 'Innovation Ventures',
      image: '👩‍💼'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Board Member',
      bio: 'Distinguished professor of AI at Stanford University and advisor to multiple AI research organizations.',
      company: 'Stanford University',
      image: '👨‍🏫'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Dr. Amanda Foster',
      position: 'AI Ethics Advisor',
      bio: 'Leading expert in AI ethics and responsible AI development. Former advisor to the White House Office of Science and Technology Policy.',
      company: 'AI Ethics Institute',
      image: '👩‍🔬'
    },
    {
      name: 'Thomas Anderson',
      position: 'Cybersecurity Advisor',
      bio: 'Cybersecurity expert with 25+ years in government and private sector security. Former CISO at Fortune 100 companies.',
      company: 'CyberSec Solutions',
      image: '👨‍💻'
    },
    {
      name: 'Dr. Rachel Green',
      position: 'Quantum Computing Advisor',
      bio: 'Pioneering researcher in quantum computing and quantum algorithms. Has published over 100 papers in quantum computing.',
      company: 'Quantum Research Lab',
      image: '👩‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet the visionary leaders and experts driving innovation at Zion Tech Group. Our leadership team combines decades of experience in AI, technology, and business to shape the future of intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Team
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Executive Leadership */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our C-suite executives bring together decades of experience and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="group">
                <div className="p-8 rounded-2xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="flex items-start mb-6">
                    <div className="text-6xl mr-6">{leader.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">{leader.position}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{leader.bio}</p>
                      <p className="text-gray-400 text-sm mb-4">{leader.education}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn Profile"
                      >
                        💼
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300"
                        aria-label="Email"
                      >
                        ✉️
                      </a>
                    </div>
                    <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300 text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced leaders providing strategic guidance and oversight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                  <div className="text-5xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                  <p className="text-gray-400 text-sm font-medium">{member.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Board */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry experts providing specialized guidance and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full text-center">
                  <div className="text-5xl mb-4">{advisor.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {advisor.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">{advisor.position}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{advisor.bio}</p>
                  <p className="text-gray-400 text-sm font-medium">{advisor.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Values */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Leadership Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our leadership team and company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Vision & Innovation',
                description: 'We lead with bold vision and drive innovation that transforms industries and creates lasting impact.'
              },
              {
                icon: '🤝',
                title: 'Collaboration & Trust',
                description: 'We build strong relationships based on trust, transparency, and mutual respect across all levels.'
              },
              {
                icon: '📚',
                title: 'Continuous Learning',
                description: 'We embrace lifelong learning and encourage our team to stay at the forefront of technology and industry trends.'
              },
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'We\'re committed to creating positive change on a global scale through responsible technology development.'
              }
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional leaders to join our mission of transforming the world through AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Leadership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}