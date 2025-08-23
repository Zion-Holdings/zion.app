import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Target, 
  TrendingUp, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Lightbulb, 
  Star,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Code
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Startup AI & Automation',
      description: 'AI-powered solutions to accelerate startup growth and efficiency',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'AI-powered customer insights',
        'Automated marketing campaigns',
        'Predictive analytics',
        'Intelligent process automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Startup MVP Development',
      description: 'Rapid MVP development to validate your startup idea',
      icon: <Rocket className="w-8 h-8" />,
      features: [
        'Rapid prototyping',
        'User experience design',
        'Scalable architecture',
        'Performance optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Startup Cloud Infrastructure',
      description: 'Cost-effective cloud solutions that scale with your startup',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Pay-as-you-grow pricing',
        'Auto-scaling infrastructure',
        'Cost optimization',
        'Security best practices'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Startup Cybersecurity',
      description: 'Essential security solutions for startup protection',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Basic security setup',
        'Compliance guidance',
        'Threat monitoring',
        'Security training'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Startup Data Analytics',
      description: 'Data-driven insights to guide startup decisions',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Customer behavior analysis',
        'Market trend insights',
        'Performance metrics',
        'ROI tracking'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Startup Growth Hacking',
      description: 'Technology-driven growth strategies for startups',
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        'Growth analytics tools',
        'A/B testing platforms',
        'Conversion optimization',
        'User acquisition tools'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    'Startup-friendly pricing',
    'Rapid deployment',
    'Scalable solutions',
    'Expert startup guidance',
    'Proven startup track record',
    'Flexible payment terms'
  ];

  const successStories = [
    {
      company: 'TechFlow',
      industry: 'SaaS',
      result: '300% growth in 6 months',
      description: 'AI-powered automation increased efficiency and customer satisfaction'
    },
    {
      company: 'DataVault',
      industry: 'FinTech',
      result: '500% user growth',
      description: 'Cloud infrastructure scaled seamlessly with user demand'
    },
    {
      company: 'SecureNet',
      industry: 'Cybersecurity',
      result: '200% revenue increase',
      description: 'Advanced security solutions attracted enterprise clients'
    }
  ];

  return (
    <Layout 
      title="Startup Solutions - Zion Tech Group"
      description="Technology solutions designed specifically for startups. MVP development, AI automation, cloud infrastructure, and growth hacking services."
      keywords="startup solutions, MVP development, startup AI, startup cloud, startup cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Rocket className="w-16 h-16 text-orange-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                  Startup Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Accelerate your startup's growth with technology solutions designed for speed, 
                scalability, and success. From MVP to scale, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Startup Quote
                </button>
                <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Free Startup Consultation
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
                Startup-Focused Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our startup solutions are built for speed, flexibility, and growth. 
                Each solution is designed to help startups move fast and scale efficiently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
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
                Why Startups Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the startup journey and provide solutions that help you 
                move fast, stay lean, and scale efficiently.
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
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startup Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how other startups have accelerated their growth with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.company}</h3>
                  <p className="text-orange-400 mb-2">{story.industry}</p>
                  <p className="text-2xl font-bold text-green-400 mb-4">{story.result}</p>
                  <p className="text-gray-300">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Accelerate Your Startup?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our startup solutions can help you build, launch, 
                and scale your business faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Consultation
                </button>
                <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Startup Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartupSolutionsPage;