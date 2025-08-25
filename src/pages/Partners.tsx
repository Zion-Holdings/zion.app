import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

const Partners: React.FC = () => {
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
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/120/60',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure integration and AI solutions',
      year: '2023'
    },
    {
      name: 'AWS',
      logo: '/api/placeholder/120/60',
      category: 'Cloud Partner',
      description: 'Advanced cloud infrastructure and AI services collaboration',
      year: '2023'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/120/60',
      category: 'Quantum Partner',
      description: 'Quantum computing research and development partnership',
      year: '2024'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/120/60',
      category: 'CRM Partner',
      description: 'Enterprise CRM integration and AI-powered solutions',
      year: '2023'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/120/60',
      category: 'Database Partner',
      description: 'Enterprise database solutions and cloud infrastructure',
      year: '2024'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/120/60',
      category: 'AI Partner',
      description: 'Machine learning and AI services collaboration',
      year: '2024'
    }
  ];

  const partnerBenefits = [
    {
      icon: Star,
      title: 'Exclusive Access',
      description: 'Early access to new technologies and solutions'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Expand your portfolio and increase revenue streams'
    },
    {
      icon: Shield,
      title: 'Technical Support',
      description: 'Dedicated technical support and training programs'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Collaborate on cutting-edge research and development'
    },
    {
      icon: Heart,
      title: 'Partner Success',
      description: 'Dedicated partner success managers and programs'
    },
    {
      icon: Target,
      title: 'Market Access',
      description: 'Access to new markets and customer segments'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner ecosystem. Explore partnership opportunities in technology, channel, strategic, and implementation partnerships." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, strategic partners, Zion Tech Group partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Partner With Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Join our ecosystem of technology leaders, innovators, and implementers. 
              Together, we're building the future of business technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                View Partnership Types
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Partnership Types Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300">
              Choose the partnership model that best fits your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color}`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    <p className="text-gray-400">{type.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by industry leaders and technology innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="w-24 h-12 mx-auto mb-4 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{partner.name}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{partner.category}</p>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                <div className="text-xs text-gray-400">Partner since {partner.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology leaders and innovators. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Start Partnership Discussion
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Partners;
