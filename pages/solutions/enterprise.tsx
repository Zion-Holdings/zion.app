import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket, 
  Zap, 
  Target, 
  TrendingUp, 
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise AI & Machine Learning',
      description: 'Advanced AI solutions designed for enterprise-scale operations',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Custom AI model development',
        'Enterprise data analytics',
        'Predictive maintenance systems',
        'Intelligent process automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions for large organizations',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Zero-trust architecture',
        'Advanced threat detection',
        'Compliance automation',
        'Security operations center'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Enterprise Cloud Infrastructure',
      description: 'Scalable cloud solutions for enterprise workloads',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Multi-cloud management',
        'Hybrid cloud solutions',
        'Cloud cost optimization',
        'Disaster recovery'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enterprise Data Management',
      description: 'Comprehensive data solutions for enterprise needs',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Data governance',
        'Big data analytics',
        'Data warehousing',
        'Real-time data processing'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Enterprise Edge Computing',
      description: 'Next-generation edge solutions for distributed enterprises',
      icon: <Cpu className="w-8 h-8" />,
      features: [
        'Edge AI processing',
        'IoT integration',
        '5G optimization',
        'Edge security'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Enterprise Digital Transformation',
      description: 'End-to-end digital transformation consulting',
      icon: <Rocket className="w-8 h-8" />,
      features: [
        'Legacy system modernization',
        'Process optimization',
        'Change management',
        'ROI measurement'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Scalable solutions for enterprise growth',
    '24/7 enterprise support',
    'Compliance and security focused',
    'Custom integration capabilities',
    'Proven enterprise track record',
    'Strategic technology consulting'
  ];

  return (
    <Layout 
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions designed for large organizations. AI, cybersecurity, cloud infrastructure, and digital transformation services."
      keywords="enterprise solutions, enterprise AI, enterprise cybersecurity, enterprise cloud, digital transformation, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Enterprise Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and innovation. From AI to cybersecurity, we deliver enterprise-grade results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Enterprise Quote
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are built for scale, security, and performance. 
                Each solution is designed to meet the unique challenges of large organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group for Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges of enterprise technology and deliver 
                solutions that drive real business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our enterprise solutions can drive innovation, 
                security, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Enterprise Team
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Enterprise Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;