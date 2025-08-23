import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Settings, 
  Shield, 
  Database, 
  Zap, 
  Lock, 
  Globe, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Server,
  Network,
  Smartphone,
  Code,
  Brain,
  Atom,
  Rocket,
  Activity,
  Factory,
  Gauge,
  Wrench,
  Cog,
  CircuitBoard,
  Bot,
  Car,
  Pill,
  Plane
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const ManufacturingSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Manufacturing & IoT',
      description: 'Connected manufacturing systems with real-time monitoring and predictive analytics',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time production monitoring',
        'Predictive maintenance systems',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency monitoring',
        'Inventory management'
      ],
      benefits: [
        '30% increase in production efficiency',
        '50% reduction in downtime',
        'Real-time quality control',
        'Optimized resource utilization'
      ]
    },
    {
      title: 'AI-Powered Manufacturing',
      description: 'Intelligent automation and decision-making systems for modern manufacturing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive analytics',
        'Quality prediction models',
        'Process optimization',
        'Demand forecasting',
        'Anomaly detection',
        'Autonomous decision making'
      ],
      benefits: [
        '25% improvement in quality',
        '40% reduction in defects',
        'Optimized production planning',
        'Enhanced product consistency'
      ]
    },
    {
      title: 'Industrial Cybersecurity',
      description: 'Advanced security solutions for industrial control systems and manufacturing networks',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'OT network security',
        'Industrial firewall protection',
        'Threat detection systems',
        'Access control management',
        'Incident response automation',
        'Compliance monitoring'
      ],
      benefits: [
        '99.99% security uptime',
        'Zero cyber incidents',
        'Regulatory compliance',
        'Protected intellectual property'
      ]
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical manufacturing systems for simulation and optimization',
      icon: Cog,
      color: 'from-indigo-500 to-purple-500',
      features: [
        '3D digital modeling',
        'Real-time simulation',
        'Performance optimization',
        'Predictive maintenance',
        'Scenario planning',
        'Virtual commissioning'
      ],
      benefits: [
        'Reduced testing time',
        'Optimized system performance',
        'Faster product development',
        'Improved decision making'
      ]
    },
    {
      title: 'Robotics & Automation',
      description: 'Advanced robotics and automation systems for increased productivity and precision',
      icon: Bot,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Collaborative robots',
        'Automated assembly lines',
        'Material handling systems',
        'Quality inspection robots',
        'Flexible manufacturing cells',
        'Human-robot collaboration'
      ],
      benefits: [
        'Increased production capacity',
        'Improved precision and quality',
        'Reduced labor costs',
        'Enhanced workplace safety'
      ]
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Intelligent supply chain management with real-time visibility and optimization',
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Real-time tracking',
        'Demand forecasting',
        'Inventory optimization',
        'Supplier management',
        'Risk assessment',
        'Performance analytics'
      ],
      benefits: [
        '20% reduction in inventory costs',
        'Improved supplier relationships',
        'Faster response times',
        'Enhanced risk management'
      ]
    }
  ];

  const industries = [
    {
      name: 'Automotive',
      icon: Car,
      solutions: ['Production line automation', 'Quality control', 'Supply chain optimization', 'Predictive maintenance'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Electronics',
      icon: CircuitBoard,
      solutions: ['PCB manufacturing', 'Component testing', 'Quality assurance', 'Production optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Pharmaceuticals',
      icon: Pill,
      solutions: ['GMP compliance', 'Quality control', 'Batch tracking', 'Regulatory reporting'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Aerospace',
      icon: Plane,
      solutions: ['Precision manufacturing', 'Quality assurance', 'Compliance management', 'Supply chain security'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const technologies = [
    {
      title: 'Industry 4.0',
      description: 'Fourth industrial revolution technologies and smart factory solutions',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Edge Computing',
      description: 'Localized data processing for real-time manufacturing decisions',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '5G Networks',
      description: 'High-speed connectivity for industrial IoT and automation',
      icon: Network,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Blockchain',
      description: 'Secure and transparent supply chain tracking and verification',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Manufacturing & IoT Solutions - Zion Tech Group"
        description="Transform your manufacturing operations with cutting-edge technology solutions including IoT, AI, robotics, and digital twin technology."
        keywords={["manufacturing technology", "IoT", "AI manufacturing", "robotics", "digital twin", "industrial cybersecurity", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Manufacturing & IoT Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionizing manufacturing with cutting-edge technology that enhances productivity, 
                improves quality, and drives innovation in the industrial sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#solutions"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our manufacturing technology solutions combine IoT, artificial intelligence, robotics, 
                and advanced analytics to deliver smart, efficient, and sustainable manufacturing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Manufacturing Benefits
                      </h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored solutions designed for the unique challenges and opportunities in your manufacturing sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {industry.name}
                    </h3>
                    
                    {/* Solutions */}
                    <div className="space-y-3">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
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

        {/* Emerging Technologies */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the curve with cutting-edge technologies that are shaping the future of manufacturing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our manufacturing technology solutions can enhance productivity, 
                improve quality, and drive innovation in your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  View All Services
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