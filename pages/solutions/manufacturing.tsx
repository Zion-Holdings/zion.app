import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Shield, 
  Database, 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Lock,
  BarChart3,
  Globe,
  Users,
  Settings,
  Activity,
  FileText,
  Wrench,
  Factory,
  Gauge,
  Cloud
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const ManufacturingSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Industrial IoT (IIoT)',
      description: 'Connected sensors and devices that provide real-time monitoring and control of manufacturing processes.',
      icon: Cpu,
      features: [
        'Sensor integration',
        'Real-time monitoring',
        'Predictive maintenance',
        'Remote control',
        'Data collection',
        'Edge computing'
      ],
      benefits: ['Reduced downtime', 'Improved efficiency', 'Cost savings', 'Better quality']
    },
    {
      title: 'Smart Manufacturing',
      description: 'Intelligent automation systems that optimize production workflows and increase productivity.',
      icon: Factory,
      features: [
        'Automated workflows',
        'Quality control',
        'Production optimization',
        'Resource management',
        'Performance analytics',
        'Adaptive systems'
      ],
      benefits: ['Higher productivity', 'Better quality', 'Reduced waste', 'Faster time-to-market']
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered systems that predict equipment failures before they occur.',
      icon: Brain,
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Performance analytics',
        'Cost optimization',
        'Risk assessment'
      ],
      benefits: ['Prevented failures', 'Reduced costs', 'Extended equipment life', 'Better planning']
    },
    {
      title: 'Quality Management',
      description: 'Advanced quality control systems that ensure consistent product quality.',
      icon: Target,
      features: [
        'Automated inspection',
        'Quality metrics',
        'Defect detection',
        'Compliance tracking',
        'Statistical analysis',
        'Continuous improvement'
      ],
      benefits: ['Better quality', 'Reduced defects', 'Customer satisfaction', 'Compliance']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain management that reduces costs and improves efficiency.',
      icon: Globe,
      features: [
        'Inventory management',
        'Demand forecasting',
        'Supplier management',
        'Logistics optimization',
        'Cost analysis',
        'Risk management'
      ],
      benefits: ['Reduced costs', 'Better availability', 'Improved efficiency', 'Risk mitigation']
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual representations of physical manufacturing systems for simulation and optimization.',
      icon: Settings,
      features: [
        '3D modeling',
        'Real-time simulation',
        'Performance optimization',
        'Scenario planning',
        'Virtual testing',
        'Predictive analytics'
      ],
      benefits: ['Better planning', 'Reduced testing costs', 'Optimized performance', 'Risk reduction']
    }
  ];

  const industries = [
    {
      name: 'Automotive Manufacturing',
      description: 'Advanced manufacturing solutions for automotive production and assembly.',
      icon: Factory,
      solutions: ['Assembly line automation', 'Quality control', 'Supply chain management', 'Predictive maintenance']
    },
    {
      name: 'Electronics Manufacturing',
      description: 'Precision manufacturing solutions for electronic components and devices.',
      icon: Cpu,
      solutions: ['PCB assembly', 'Component testing', 'Quality assurance', 'Production optimization']
    },
    {
      name: 'Pharmaceutical Manufacturing',
      description: 'Compliant manufacturing solutions for pharmaceutical and medical device production.',
      icon: Shield,
      solutions: ['GMP compliance', 'Quality control', 'Documentation', 'Regulatory reporting']
    },
    {
      name: 'Food & Beverage',
      description: 'Safe and efficient manufacturing solutions for food and beverage production.',
      icon: Target,
      solutions: ['Food safety', 'Quality control', 'Production efficiency', 'Compliance management']
    }
  ];

  const technologies = [
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent algorithms that optimize manufacturing processes and decision-making.',
      icon: Brain,
      features: ['Process optimization', 'Quality prediction', 'Demand forecasting', 'Anomaly detection']
    },
    {
      title: 'Edge Computing',
      description: 'Localized computing that processes data closer to the source for faster response times.',
      icon: Zap,
      features: ['Real-time processing', 'Reduced latency', 'Local analytics', 'Offline operation']
    },
    {
      title: 'Cloud Integration',
      description: 'Scalable cloud solutions that connect and manage manufacturing operations globally.',
      icon: Cloud,
      features: ['Global access', 'Scalability', 'Data backup', 'Collaboration tools']
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
                  Manufacturing Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your manufacturing operations with cutting-edge IoT, AI, and automation 
                solutions that drive efficiency and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Manufacturing Quote
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
                Manufacturing Technology Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our comprehensive manufacturing solutions leverage the latest technologies to 
                optimize production, improve quality, and reduce costs.
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
                    <h4 className="text-white font-semibold mb-3">Business Benefits:</h4>
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

        {/* Industry Solutions */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Tailored manufacturing solutions designed for the unique challenges and requirements 
                of different industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {solution}
                        </div>
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Core Technologies
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                The foundational technologies that power our smart manufacturing solutions 
                and drive operational excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our smart manufacturing solutions can optimize your operations, 
                improve quality, and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Manufacturing Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Manufacturing Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingSolutionsPage;