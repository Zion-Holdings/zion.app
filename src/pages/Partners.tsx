import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Globe, Users, Award, TrendingUp, Shield, Zap, Rocket } from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'API access to our AI platform',
        'Joint go-to-market initiatives',
        'Technical integration support',
        'Co-marketing opportunities'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Deliver comprehensive solutions to enterprise clients',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'White-label solutions',
        'Revenue sharing programs',
        'Sales and technical training',
        'Dedicated partner support'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell our services through your established channels',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Competitive pricing tiers',
        'Marketing materials and support',
        'Lead generation assistance',
        'Performance-based incentives'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaboration on innovative projects',
      icon: Handshake,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Joint R&D initiatives',
        'Co-innovation programs',
        'Market expansion support',
        'Equity participation opportunities'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft Azure',
      logo: '🔵',
      category: 'Cloud Infrastructure',
      description: 'Strategic cloud partnership for AI deployment and scaling',
      achievements: ['Azure AI integration', 'Joint customer success', 'Market expansion']
    },
    {
      name: 'NVIDIA',
      logo: '🟢',
      category: 'AI Hardware',
      description: 'GPU acceleration for our AI and machine learning platforms',
      achievements: ['GPU optimization', 'Performance benchmarks', 'Technical collaboration']
    },
    {
      name: 'OpenAI',
      logo: '🟡',
      category: 'AI Research',
      description: 'Advanced language models and AI research collaboration',
      achievements: ['Model integration', 'Research partnerships', 'Innovation labs']
    },
    {
      name: 'IBM',
      logo: '🔵',
      category: 'Enterprise Solutions',
      description: 'Enterprise AI and quantum computing partnerships',
      achievements: ['Quantum collaboration', 'Enterprise integration', 'Global reach']
    },
    {
      name: 'AWS',
      logo: '🟠',
      category: 'Cloud Services',
      description: 'Scalable cloud infrastructure for AI workloads',
      achievements: ['Cloud optimization', 'Global deployment', 'Cost optimization']
    },
    {
      name: 'Google Cloud',
      logo: '🔴',
      category: 'AI Platform',
      description: 'Advanced AI and machine learning platform integration',
      achievements: ['AI platform integration', 'ML pipeline optimization', 'Research collaboration']
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our AI solutions',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Technical Innovation',
      description: 'Stay ahead with cutting-edge AI and emerging technologies',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your reach into new industries and geographies',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Brand Enhancement',
      description: 'Strengthen your brand through association with AI innovation',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Let\'s explore how we can work together and identify opportunities',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Partnership Assessment',
      description: 'Evaluate technical and business alignment for mutual success',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Agreement & Onboarding',
      description: 'Finalize partnership terms and begin collaboration setup',
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Execute joint initiatives and scale partnership success',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our ecosystem of technology partners and help shape the future of AI and emerging technologies.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="p-8 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${type.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                  <p className="text-cyan-400 text-sm">{partner.category}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {partner.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-xs text-gray-400">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner With Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((process, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{process.description}</p>
                <span className="text-cyan-400 text-xs font-medium">{process.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how we can create value together and drive innovation in the AI and technology space.
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
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                Download Partner Kit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
