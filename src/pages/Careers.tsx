import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Rocket, Brain, Shield, Globe, Zap } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$120K - $180K',
      description: 'Lead the development of cutting-edge AI solutions and autonomous systems.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'Strong background in mathematics and statistics'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security & Compliance',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$90K - $140K',
      description: 'Protect our clients and systems with advanced security solutions.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SOC2, ISO 27001',
        'Knowledge of threat detection and response'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work flexibility',
        'Security conference attendance',
        'Continuous learning opportunities'
      ]
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Emerging Technologies',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$150K - $220K',
      description: 'Pioneer the future of quantum computing and quantum-safe cryptography.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Research experience in quantum computing',
        'Publications in peer-reviewed journals',
        'Experience with quantum programming languages'
      ],
      benefits: [
        'Top-tier compensation package',
        'Research publication support',
        'Conference and workshop attendance',
        'Collaboration with leading institutions'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$80K - $130K',
      description: 'Build scalable web applications and microservices for our AI platform.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS, Azure)',
        'Knowledge of microservices architecture'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work options',
        'Latest tools and technology',
        'Career growth opportunities'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions & Consulting',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$110K - $170K',
      description: 'Design and implement AI solutions for enterprise clients.',
      requirements: [
        '5+ years in solution architecture',
        'Experience with AI/ML platforms',
        'Strong client-facing skills',
        'Knowledge of enterprise architecture'
      ],
      benefits: [
        'Competitive salary and commission',
        'Client interaction opportunities',
        'Professional development',
        'Travel and networking events'
      ]
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies.',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth with ongoing education and skill development.',
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
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Dental and vision coverage', 'Mental health support', 'Fitness reimbursement']
    },
    {
      category: 'Work-Life Balance',
      items: ['Flexible remote work options', 'Unlimited PTO', 'Flexible hours', 'Parental leave']
    },
    {
      category: 'Professional Growth',
      items: ['Learning budget', 'Conference attendance', 'Certification support', 'Mentorship programs']
    },
    {
      category: 'Team & Culture',
      items: ['Regular team events', 'Collaborative environment', 'Diversity initiatives', 'Innovation time']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us shape the future of AI and technology. We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-900/30">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{benefit.category}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Zap className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="p-8 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}