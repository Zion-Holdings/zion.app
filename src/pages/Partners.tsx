import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Users, Globe, Award, TrendingUp, Shield, Zap, Rocket } from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate cutting-edge technologies and platforms',
      benefits: [
        'Access to our AI and quantum computing solutions',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Revenue sharing opportunities'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Channel Partners',
      description: 'Resell our solutions and expand your portfolio',
      benefits: [
        'Competitive margins and incentives',
        'Sales and technical training',
        'Marketing support and materials',
        'Dedicated partner success manager'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategic Partners',
      description: 'Deep collaboration on joint solutions',
      benefits: [
        'Co-development of innovative solutions',
        'Shared intellectual property',
        'Joint research and development',
        'Exclusive market access'
      ],
      icon: Handshake,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Implementation Partners',
      description: 'Deliver our solutions to end customers',
      benefits: [
        'Certification and training programs',
        'Implementation methodologies',
        'Technical support and escalation',
        'Project delivery resources'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '🪟',
      category: 'Technology Partner',
      description: 'Cloud infrastructure and AI platform integration',
      year: '2022'
    },
    {
      name: 'AWS',
      logo: '☁️',
      category: 'Technology Partner',
      description: 'Cloud services and machine learning solutions',
      year: '2021'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      category: 'Technology Partner',
      description: 'AI and analytics platform collaboration',
      year: '2023'
    },
    {
      name: 'IBM',
      logo: '💻',
      category: 'Strategic Partner',
      description: 'Quantum computing and enterprise solutions',
      year: '2022'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      category: 'Technology Partner',
      description: 'Database and enterprise software integration',
      year: '2023'
    },
    {
      name: 'Salesforce',
      logo: '⚡',
      category: 'Technology Partner',
      description: 'CRM and business process automation',
      year: '2023'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our innovative solutions',
      icon: TrendingUp
    },
    {
      title: 'Technology Innovation',
      description: 'Leverage cutting-edge AI, quantum, and emerging technologies',
      icon: Zap
    },
    {
      title: 'Market Expansion',
      description: 'Enter new markets with our proven solutions and expertise',
      icon: Globe
    },
    {
      title: 'Competitive Advantage',
      description: 'Differentiate your offerings with our advanced technology stack',
      icon: Award
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce development costs and time-to-market risks',
      icon: Shield
    },
    {
      title: 'Expert Support',
      description: 'Access our team of AI and technology experts',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our ecosystem of innovative partners and together we'll transform industries with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#partnership-types"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Partnerships
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div id="partnership-types" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Partnership Opportunities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the partnership model that best fits your business goals and capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${type.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-3 px-6 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Trusted Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud to work with industry leaders and innovators across the technology landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPartners.map((partner, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-3">
                  {partner.category}
                </span>
                <p className="text-gray-400 text-sm mb-3">{partner.description}</p>
                <span className="text-xs text-gray-500">Partner since {partner.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Zion Tech Group?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of joining our partner ecosystem and accelerating your business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerBenefits.map((benefit, index) => {
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

      {/* Partnership Process */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Partnership Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined partnership process ensures a smooth onboarding experience for all new partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Discovery', description: 'Initial discussion about partnership opportunities' },
            { step: '2', title: 'Evaluation', description: 'Mutual assessment of fit and potential' },
            { step: '3', title: 'Agreement', description: 'Partnership terms and contract signing' },
            { step: '4', title: 'Launch', description: 'Go-to-market execution and support' }
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

      {/* Partner Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Partner Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access the tools, training, and support you need to succeed as a Zion Tech Group partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Partner Portal', description: 'Access to resources, training, and support' },
            { title: 'Technical Documentation', description: 'Comprehensive guides and API references' },
            { title: 'Marketing Materials', description: 'Brand assets and campaign resources' },
            { title: 'Training Programs', description: 'Certification and skill development' }
          ].map((resource, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-400 text-sm">{resource.description}</p>
              <button className="mt-4 w-full py-2 px-4 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                Access
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our ecosystem of innovative partners and together we'll transform industries with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Partnership Discussion
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Download Partner Kit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
