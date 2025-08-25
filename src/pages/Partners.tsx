import React from 'react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that power our solutions',
      partners: [
        {
          name: 'Microsoft',
          logo: '🔵',
          description: 'Azure cloud infrastructure and AI services',
          tier: 'Platinum'
        },
        {
          name: 'Amazon Web Services',
          logo: '🟠',
          description: 'Cloud computing and machine learning platforms',
          tier: 'Platinum'
        },
        {
          name: 'Google Cloud',
          logo: '🔴',
          description: 'AI and data analytics solutions',
          tier: 'Gold'
        },
        {
          name: 'IBM',
          logo: '🔵',
          description: 'Quantum computing and enterprise AI',
          tier: 'Gold'
        }
      ]
    },
    {
      title: 'AI & ML Partners',
      description: 'Specialized AI and machine learning technology providers',
      partners: [
        {
          name: 'OpenAI',
          logo: '🤖',
          description: 'Advanced language models and AI research',
          tier: 'Strategic'
        },
        {
          name: 'Anthropic',
          logo: '🧠',
          description: 'Constitutional AI and safety-focused models',
          tier: 'Strategic'
        },
        {
          name: 'Hugging Face',
          logo: '🤗',
          description: 'Open-source AI models and datasets',
          tier: 'Silver'
        },
        {
          name: 'Databricks',
          logo: '💎',
          description: 'Data engineering and ML platform',
          tier: 'Silver'
        }
      ]
    },
    {
      title: 'Cybersecurity Partners',
      description: 'Security experts and compliance specialists',
      partners: [
        {
          name: 'CrowdStrike',
          logo: '🦅',
          description: 'Endpoint security and threat intelligence',
          tier: 'Gold'
        },
        {
          name: 'Palo Alto Networks',
          logo: '🛡️',
          description: 'Network security and cloud protection',
          tier: 'Gold'
        },
        {
          name: 'Qualys',
          logo: '🔒',
          description: 'Vulnerability management and compliance',
          tier: 'Silver'
        }
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Strategic consulting and implementation partners',
      partners: [
        {
          name: 'McKinsey & Company',
          logo: '📊',
          description: 'Strategic consulting and digital transformation',
          tier: 'Platinum'
        },
        {
          name: 'Deloitte',
          logo: '🔷',
          description: 'Technology consulting and implementation',
          tier: 'Platinum'
        },
        {
          name: 'Accenture',
          logo: '🔶',
          description: 'Digital transformation and technology services',
          tier: 'Gold'
        }
      ]
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Exclusive access to beta features',
        'Joint go-to-market initiatives',
        'Dedicated partner success manager',
        'Priority support and escalation',
        'Co-marketing and co-selling opportunities',
        'Custom integration development'
      ]
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Early access to new features',
        'Joint marketing campaigns',
        'Partner success manager',
        'Enhanced support',
        'Training and certification programs'
      ]
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Standard partner benefits',
        'Marketing materials and resources',
        'Basic support',
        'Partner portal access'
      ]
    }
  ];

  const becomePartnerSteps = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities'
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'We evaluate mutual fit and opportunities'
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'Define partnership terms and objectives'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Begin partnership activities and initiatives'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our ecosystem of technology leaders, innovators, and industry experts. Together, we're building the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300">
              Partner Resources
            </button>
          </div>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the partnership level that best fits your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className="p-8 rounded-2xl border-2 border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                    {tier.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading organizations across technology, AI, and business consulting
            </p>
          </div>

          <div className="space-y-16">
            {partnerCategories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{partner.logo}</div>
                        <h4 className="text-lg font-semibold text-white mb-1">{partner.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          partner.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                          partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                          partner.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                          'bg-cyan-500/20 text-cyan-400'
                        }`}>
                          {partner.tier}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm text-center">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our ecosystem and unlock new opportunities for growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {becomePartnerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can work together to drive innovation and create value for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Partnership Discussion
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Partnership Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation Leadership',
                description: 'Access to cutting-edge AI and emerging technologies'
              },
              {
                icon: '🌍',
                title: 'Global Reach',
                description: 'Expand your market presence with our global network'
              },
              {
                icon: '💼',
                title: 'Revenue Growth',
                description: 'New revenue streams through joint solutions and referrals'
              },
              {
                icon: '🔧',
                title: 'Technical Support',
                description: 'Comprehensive technical resources and training'
              },
              {
                icon: '📈',
                title: 'Market Insights',
                description: 'Access to industry trends and customer insights'
              },
              {
                icon: '🤝',
                title: 'Collaborative Development',
                description: 'Co-develop solutions that address market needs'
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
