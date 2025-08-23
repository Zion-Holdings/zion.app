import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Star, Zap, Target, 
  CheckCircle, ArrowRight, Building, Rocket, Shield, Award,
  BarChart3, Database, Cloud, Lock, Settings, Code
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate complementary technologies and create joint solutions',
      icon: <Code className="w-12 h-12 text-cyan-400" />,
      benefits: [
        'Joint product development',
        'Technology integration',
        'Shared intellectual property',
        'Co-marketing opportunities'
      ],
      requirements: [
        'Complementary technology stack',
        'Strong market presence',
        'Technical expertise',
        'Commitment to innovation'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and implement our solutions in your markets',
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      benefits: [
        'Competitive margins',
        'Sales and technical training',
        'Marketing support',
        'Dedicated partner success team'
      ],
      requirements: [
        'Established customer base',
        'Sales and technical capabilities',
        'Geographic market coverage',
        'Commitment to customer success'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaboration on major initiatives and markets',
      icon: <Handshake className="w-12 h-12 text-green-400" />,
      benefits: [
        'Exclusive market access',
        'Joint investment opportunities',
        'Strategic planning collaboration',
        'Priority support and resources'
      ],
      requirements: [
        'Strategic market alignment',
        'Significant market presence',
        'Long-term commitment',
        'Shared vision and values'
      ]
    },
    {
      title: 'Academic Partners',
      description: 'Research collaboration and talent development programs',
      icon: <Users className="w-12 h-12 text-blue-400" />,
      benefits: [
        'Research funding opportunities',
        'Student internship programs',
        'Technology transfer programs',
        'Joint publication opportunities'
      ],
      requirements: [
        'Research excellence',
        'Relevant academic programs',
        'Industry collaboration experience',
        'Innovation focus'
      ]
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through partnership',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Technology Access',
      description: 'Leverage cutting-edge AI, quantum, and space technologies',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Market Expansion',
      description: 'Enter new markets and customer segments',
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Innovation Support',
      description: 'Collaborate on breakthrough technology solutions',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      partnership: 'Technology Integration',
      description: 'Successfully integrated our AI services with their enterprise platform, resulting in 40% efficiency improvement for joint customers.',
      results: '40% efficiency improvement, 200+ joint customers'
    },
    {
      company: 'Global Systems Inc.',
      partnership: 'Channel Partnership',
      description: 'Expanded our reach into European markets through their established channel network, achieving 300% growth in the region.',
      results: '300% regional growth, 15 new markets'
    },
    {
      company: 'Innovation Labs',
      partnership: 'Strategic Collaboration',
      description: 'Joint development of quantum computing solutions for financial services, creating a new market category.',
      results: 'New market category, $50M+ opportunity'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Understanding partnership goals and alignment',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Partnership Design',
      description: 'Creating customized partnership structure and terms',
      icon: <Building className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Agreement & Launch',
      description: 'Finalizing partnership agreement and launching collaboration',
      icon: <Handshake className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Growth & Optimization',
      description: 'Scaling partnership and optimizing for mutual success',
      icon: <Rocket className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Partnership Opportunities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Join forces with Zion Tech Group to create innovative solutions, expand markets, and drive technological advancement together.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#partnerships" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Explore Partnerships
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnerships" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the different ways we can collaborate to create mutual value and drive innovation.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {type.icon}
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group and how we can help you achieve your business goals.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our partners have achieved remarkable results through collaboration with Zion Tech Group.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{story.company}</h3>
                  <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {story.partnership}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{story.description}</p>
                <div className="text-sm text-blue-400 font-medium">{story.results}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Our Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to building successful, long-term partnerships.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <div className="flex justify-center mb-3">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Partner Support & Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support and resources to ensure your partnership success.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Dedicated Partner Success</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our partner success team provides comprehensive support including training, marketing materials, 
                technical assistance, and ongoing guidance to ensure your partnership thrives.
              </p>
              <ul className="space-y-3">
                {[
                  'Dedicated Partner Success Manager',
                  'Comprehensive Training Programs',
                  'Marketing & Sales Support',
                  'Technical Implementation Assistance',
                  'Regular Business Reviews'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                Your success is our success. We're committed to building lasting partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can create innovative solutions together and drive mutual growth and success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Partnership Discussion</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/services" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}