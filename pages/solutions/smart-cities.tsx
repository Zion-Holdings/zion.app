import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Database, 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Lock,
  BarChart3,
  Users,
  Settings,
  Activity,
  FileText,
  Wrench,
  Factory,
  Gauge,
  Lightbulb,
  Car,
  Building
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const SmartCitiesSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Transportation',
      description: 'Intelligent transportation systems that optimize traffic flow and improve mobility.',
      icon: Car,
      features: [
        'Traffic management',
        'Public transit optimization',
        'Parking solutions',
        'Route optimization',
        'Real-time monitoring',
        'Predictive analytics'
      ],
      benefits: ['Reduced congestion', 'Better mobility', 'Lower emissions', 'Improved safety']
    },
    {
      title: 'Smart Energy Management',
      description: 'Intelligent energy systems that optimize consumption and integrate renewable sources.',
      icon: Zap,
      features: [
        'Smart grid technology',
        'Energy monitoring',
        'Demand response',
        'Renewable integration',
        'Load balancing',
        'Efficiency optimization'
      ],
      benefits: ['Lower costs', 'Reduced emissions', 'Better reliability', 'Sustainability']
    },
    {
      title: 'Smart Buildings',
      description: 'Connected building systems that optimize comfort, security, and energy efficiency.',
      icon: Building,
      features: [
        'Building automation',
        'Energy management',
        'Security systems',
        'Climate control',
        'Occupancy monitoring',
        'Predictive maintenance'
      ],
      benefits: ['Energy savings', 'Better comfort', 'Improved security', 'Reduced maintenance']
    },
    {
      title: 'Smart Water Management',
      description: 'Intelligent water systems that monitor quality and optimize distribution.',
      icon: Gauge,
      features: [
        'Water quality monitoring',
        'Leak detection',
        'Distribution optimization',
        'Consumption tracking',
        'Predictive maintenance',
        'Quality assurance'
      ],
      benefits: ['Water conservation', 'Quality improvement', 'Cost reduction', 'Sustainability']
    },
    {
      title: 'Smart Waste Management',
      description: 'Intelligent waste collection and processing systems that improve efficiency.',
      icon: Activity,
      features: [
        'Smart bins',
        'Route optimization',
        'Recycling tracking',
        'Waste analytics',
        'Automated collection',
        'Environmental monitoring'
      ],
      benefits: ['Cost reduction', 'Better efficiency', 'Environmental impact', 'Public health']
    },
    {
      title: 'Smart Public Safety',
      description: 'Advanced security and emergency response systems that protect citizens.',
      icon: Shield,
      features: [
        'Surveillance systems',
        'Emergency response',
        'Crime prevention',
        'Public monitoring',
        'Incident management',
        'Community alerts'
      ],
      benefits: ['Improved safety', 'Faster response', 'Crime reduction', 'Public confidence']
    }
  ];

  const technologies = [
    {
      title: 'IoT & Sensors',
      description: 'Connected devices that collect real-time data from urban infrastructure.',
      icon: Cpu,
      features: ['Environmental monitoring', 'Traffic sensors', 'Energy meters', 'Water quality sensors']
    },
    {
      title: 'AI & Analytics',
      description: 'Intelligent algorithms that analyze data and optimize urban operations.',
      icon: Brain,
      features: ['Predictive analytics', 'Pattern recognition', 'Optimization algorithms', 'Decision support']
    },
    {
      title: 'Cloud & Edge Computing',
      description: 'Distributed computing that processes data efficiently across the city.',
      icon: Globe,
      features: ['Real-time processing', 'Scalable infrastructure', 'Data integration', 'Global access']
    }
  ];

  const benefits = [
    {
      title: 'Sustainability',
      description: 'Reduce environmental impact through intelligent resource management.',
      icon: Lightbulb,
      features: ['Lower emissions', 'Resource conservation', 'Renewable energy', 'Waste reduction']
    },
    {
      title: 'Efficiency',
      description: 'Optimize urban operations and reduce costs through smart technology.',
      icon: Target,
      features: ['Cost reduction', 'Operational efficiency', 'Resource optimization', 'Performance improvement']
    },
    {
      title: 'Quality of Life',
      description: 'Improve citizen experience through better services and infrastructure.',
      icon: Users,
      features: ['Better mobility', 'Improved services', 'Enhanced safety', 'Community engagement']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Smart{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Cities Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform urban environments with intelligent technology solutions that create 
                sustainable, efficient, and livable cities of the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Smart Cities Quote
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Smart City Technology Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our comprehensive smart city solutions integrate cutting-edge technologies to 
                create intelligent, sustainable, and connected urban environments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Core Technologies
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                The foundational technologies that power our smart city solutions and 
                enable intelligent urban management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Smart City Benefits
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover how smart city solutions create value for citizens, businesses, 
                and government organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-6">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Smart Cities?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our smart city solutions can transform your urban environment, 
                improve citizen services, and create sustainable communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Smart Cities Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Smart Cities Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SmartCitiesSolutionsPage;