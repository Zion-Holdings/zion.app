import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  Zap, 
  Target, 
  Users, 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: 'Rapid Growth',
      description: 'Accelerate your startup growth with scalable technology solutions and agile development.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Quick Launch',
      description: 'Get your MVP to market faster with our streamlined development process and ready-to-use components.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: 'Market Focus',
      description: 'Focus on your core business while we handle the technical infrastructure and scaling challenges.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Team Scaling',
      description: 'Scale your development team efficiently with our managed services and expert consultants.'
    }
  ];

  const solutions = [
    {
      title: 'MVP Development',
      description: 'Fast-track your minimum viable product with our rapid development framework',
      features: ['Rapid Prototyping', 'User Experience Design', 'Scalable Architecture', 'Quick Iterations']
    },
    {
      title: 'Growth Infrastructure',
      description: 'Build the technical foundation for sustainable startup growth',
      features: ['Cloud Infrastructure', 'Performance Optimization', 'Security Implementation', 'Monitoring & Analytics']
    },
    {
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to gain competitive advantages',
      features: ['Machine Learning Models', 'Data Analytics', 'Automation Tools', 'Predictive Insights']
    }
  ];

  const benefits = [
    'Reduced time to market',
    'Lower development costs',
    'Scalable architecture from day one',
    'Expert technical guidance',
    'Focus on core business value',
    'Rapid iteration and improvement'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Rocket className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Startup
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Accelerate your startup's success with cutting-edge technology solutions designed for rapid growth, 
                scalability, and market disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Start Building
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Built for Startup Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our startup-focused solutions are designed to help you move fast, scale efficiently, 
                and focus on what matters most - your customers and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Startup Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for startup needs and growth challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Startups Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide solutions that help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's turn your startup vision into reality with technology that scales with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300">
                  Schedule Free Consultation
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