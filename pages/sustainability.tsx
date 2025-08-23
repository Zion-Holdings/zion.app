import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Recycle, 
  Sun, 
  Wind, 
  Droplets, 
  Trees,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Award,
  Lightbulb,
  Cloud,
  Brain,
  Atom,
  Rocket,
  Code
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const SustainabilityPage: React.FC = () => {
  const initiatives = [
    {
      title: 'Green Cloud Infrastructure',
      description: 'Our cloud platforms are powered by renewable energy sources and optimized for energy efficiency.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      impact: '40% reduction in carbon footprint',
      features: ['Renewable Energy Powered', 'Energy-Efficient Data Centers', 'Carbon-Neutral Operations', 'Green Computing Practices']
    },
    {
      title: 'AI for Environmental Solutions',
      description: 'Leveraging artificial intelligence to develop sustainable solutions for environmental challenges.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      impact: '60% improvement in resource efficiency',
      features: ['Environmental Monitoring', 'Resource Optimization', 'Climate Prediction Models', 'Sustainable AI Training']
    },
    {
      title: 'Quantum Energy Optimization',
      description: 'Using quantum computing to optimize energy consumption and develop sustainable energy solutions.',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      impact: '35% energy savings',
      features: ['Energy Grid Optimization', 'Quantum Energy Algorithms', 'Sustainable Computing', 'Green Quantum Systems']
    },
    {
      title: 'Space-Based Environmental Monitoring',
      description: 'Satellite technology for monitoring environmental changes and promoting sustainable practices.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      impact: 'Real-time environmental tracking',
      features: ['Climate Monitoring', 'Resource Management', 'Environmental Protection', 'Sustainable Space Operations']
    },
    {
      title: 'Circular Economy Solutions',
      description: 'Technology platforms that promote circular economy principles and reduce waste.',
      icon: <Recycle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      impact: '50% reduction in waste',
      features: ['Waste Reduction', 'Resource Recovery', 'Sustainable Supply Chains', 'Circular Business Models']
    },
    {
      title: 'Green Software Development',
      description: 'Sustainable software development practices that minimize environmental impact.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      impact: '30% lower energy consumption',
      features: ['Efficient Algorithms', 'Green Coding Practices', 'Sustainable Architecture', 'Energy-Aware Development']
    }
  ];

  const commitments = [
    'Carbon-neutral operations by 2026',
    '100% renewable energy usage',
    'Zero-waste office operations',
    'Sustainable supply chain management',
    'Green technology partnerships',
    'Environmental education programs'
  ];

  const achievements = [
    { metric: '40%', label: 'Carbon Footprint Reduction', icon: <Leaf className="w-8 h-8" /> },
    { metric: '100%', label: 'Renewable Energy Usage', icon: <Sun className="w-8 h-8" /> },
    { metric: '60%', label: 'Resource Efficiency Improvement', icon: <TrendingUp className="w-8 h-8" /> },
    { metric: '50%', label: 'Waste Reduction', icon: <Recycle className="w-8 h-8" /> }
  ];

  return (
    <Layout>
      <SEO 
        title="Sustainability - Zion Tech Group"
        description="Zion Tech Group's commitment to sustainability through green technology, renewable energy, and environmental innovation. Learn about our eco-friendly initiatives and carbon-neutral operations."
        keywords={["sustainability", "green technology", "renewable energy", "environmental innovation", "carbon-neutral", "eco-friendly", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sustainability
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Committed to a sustainable future through innovative green technology, 
                renewable energy, and environmental responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-green-400 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-300">
                  View Report
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{achievement.metric}</div>
                  <div className="text-gray-300 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Sustainable Technology Initiatives
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach to sustainability integrates green technology 
                across all our platforms and services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center mb-6`}>
                    {initiative.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{initiative.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{initiative.description}</p>
                  
                  <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4 mb-6">
                    <div className="text-green-400 font-semibold text-sm mb-2">Impact:</div>
                    <div className="text-white">{initiative.impact}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {initiative.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Sustainability Commitments
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to leading the technology industry in environmental responsibility 
                and sustainable innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Join Us in Building a Sustainable Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Together, we can create technology solutions that benefit both people and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Partner With Us
                </a>
                <a
                  href="/sustainability-report"
                  className="px-8 py-4 border-2 border-green-400 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  Download Report
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SustainabilityPage;