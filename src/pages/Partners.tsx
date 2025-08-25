import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Globe, Users, Award, TrendingUp, Shield, Zap, Building2 } from 'lucide-react';

const Partners = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers to deliver comprehensive solutions.',
      icon: Globe,
      benefits: [
        'Access to cutting-edge technology',
        'Joint go-to-market strategies',
        'Technical collaboration and support',
        'Shared innovation initiatives'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach.',
      icon: Users,
      benefits: [
        'Competitive commission structure',
        'Marketing and sales support',
        'Technical training and certification',
        'Dedicated partner success manager'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term partnerships focused on joint business development and innovation.',
      icon: Handshake,
      benefits: [
        'Joint product development',
        'Shared intellectual property',
        'Market expansion opportunities',
        'Strategic investment options'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      category: 'Technology Partner',
      description: 'Cloud infrastructure and AI platform collaboration.',
      partnership: 'Strategic Technology Alliance'
    },
    {
      name: 'AWS',
      logo: '/api/placeholder/200/100',
      category: 'Technology Partner',
      description: 'Cloud services and AI/ML platform integration.',
      partnership: 'Cloud Infrastructure Partnership'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      category: 'Technology Partner',
      description: 'Hardware optimization for AI workloads.',
      partnership: 'Performance Optimization Alliance'
    },
    {
      name: 'Deloitte',
      logo: '/api/placeholder/200/100',
      category: 'Strategic Partner',
      description: 'Enterprise consulting and implementation services.',
      partnership: 'Strategic Business Partnership'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through our partner network.',
      icon: TrendingUp
    },
    {
      title: 'Technical Excellence',
      description: 'Leverage our AI expertise and cutting-edge technology solutions.',
      icon: Zap
    },
    {
      title: 'Market Expansion',
      description: 'Expand your geographic and vertical market presence.',
      icon: Globe
    },
    {
      title: 'Innovation Support',
      description: 'Collaborate on research and development initiatives.',
      icon: Award
    }
  ];

  const partnerPrograms = [
    {
      name: 'Silver Partner',
      requirements: [
        'Minimum $100K annual revenue',
        '2 certified technical staff',
        'Basic marketing support',
        'Standard commission rates'
      ],
      benefits: [
        'Access to partner portal',
        'Technical training materials',
        'Marketing collateral',
        'Sales support'
      ]
    },
    {
      name: 'Gold Partner',
      requirements: [
        'Minimum $500K annual revenue',
        '5 certified technical staff',
        'Dedicated partner manager',
        'Enhanced commission rates'
      ],
      benefits: [
        'All Silver benefits',
        'Dedicated partner success manager',
        'Joint marketing campaigns',
        'Priority technical support',
        'Exclusive partner events'
      ]
    },
    {
      name: 'Platinum Partner',
      requirements: [
        'Minimum $2M annual revenue',
        '10+ certified technical staff',
        'Strategic business alignment',
        'Premium commission structure'
      ],
      benefits: [
        'All Gold benefits',
        'Strategic planning sessions',
        'Joint product development',
        'Executive relationship management',
        'Custom partnership agreements'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Partner with Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our global partner ecosystem and help businesses transform through AI and technology. 
            Together, we can achieve more than we ever could alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Partner Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Partnership Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{type.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center mr-4">
                    <span className="text-cyan-400 font-bold">{partner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                    <p className="text-cyan-400">{partner.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <span className="text-sm text-cyan-400 font-medium">{partner.partnership}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Partner with Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partner Programs */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Partner Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                program.name === 'Gold Partner'
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-2xl shadow-cyan-500/20'
                  : 'border-gray-700 bg-gray-800/50 hover:border-cyan-400/50'
              }`}>
                {program.name === 'Gold Partner' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Requirements</h4>
                  <ul className="space-y-3 mb-6">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    program.name === 'Gold Partner'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to deliver exceptional value to our customers 
              and grow our businesses together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Download Partner Kit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
