import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Rocket, Brain, Shield, Globe } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions and autonomous systems.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'Strong background in computer science'
      ],
      icon: Brain
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$90,000 - $140,000',
      description: 'Protect our clients with advanced cybersecurity solutions and threat detection.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CEH preferred',
        'Experience with SIEM tools',
        'Knowledge of compliance frameworks'
      ],
      icon: Shield
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Emerging Technology',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$150,000 - $220,000',
      description: 'Pioneer the future of quantum computing and quantum-safe cryptography.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Research experience in quantum computing',
        'Publications in peer-reviewed journals',
        'Experience with quantum programming languages'
      ],
      icon: Rocket
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$80,000 - $130,000',
      description: 'Build scalable web applications and microservices for our clients.',
      requirements: [
        '3+ years full-stack development',
        'Proficiency in React, Node.js, Python',
        'Experience with cloud platforms',
        'Knowledge of microservices architecture'
      ],
      icon: Globe
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$85,000 - $140,000',
      description: 'Automate and optimize our infrastructure and deployment processes.',
      requirements: [
        '3+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Infrastructure as code knowledge'
      ],
      icon: Users
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      icon: DollarSign
    },
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and work-life balance',
      icon: Globe
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conferences, and certifications',
      icon: Rocket
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI, quantum, and emerging technologies',
      icon: Brain
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: Shield
    },
    {
      title: 'Team Collaboration',
      description: 'Join a diverse team of experts and innovators',
      icon: Users
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace new technologies to solve complex problems.'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and their digital transformation.'
    },
    {
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous improvement and knowledge sharing.'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We celebrate diverse perspectives and create an inclusive environment for all.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us shape the future of technology. Join a team of innovators, problem-solvers, and visionaries at Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#open-positions"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Zion Tech Group, we believe in fostering an environment where innovation thrives and every team member can reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive benefits and opportunities for growth in a dynamic, fast-paced environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to join our team? Explore our current openings and find the perfect role for your skills and aspirations.
          </p>
        </div>
        
        <div className="space-y-6">
          {openPositions.map((position, index) => {
            const Icon = position.icon;
            return (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <p className="text-gray-400 mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-gray-400 flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Process */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined application process ensures a smooth experience for all candidates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Apply', description: 'Submit your application with resume and cover letter' },
            { step: '2', title: 'Review', description: 'Our team reviews your application within 48 hours' },
            { step: '3', title: 'Interview', description: 'Technical and cultural fit interviews with our team' },
            { step: '4', title: 'Offer', description: 'Receive your offer and join our amazing team' }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-bold mb-4">
                {process.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
              <p className="text-gray-400 text-sm">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Submit Resume
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Recruiting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}