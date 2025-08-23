import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Sparkles, Zap, Target, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp, Globe
} from 'lucide-react';
import Link from 'next/link';

const SpaceTechnologyServices: React.FC = () => {
  const services = [
    {
      title: "Space Resource Intelligence Platform",
      description: "Revolutionary space resource intelligence with AI consciousness and exploration",
      href: "/space-resource-intelligence-platform",
      features: ["Space Resource Intelligence", "AI Consciousness", "Resource Exploration", "Space Mining"],
      price: "$39,999/month",
      badge: "Featured"
    },
    {
      title: "Space Technology AI Platform",
      description: "Advanced space technology with AI consciousness and autonomous systems",
      href: "/space-technology-ai-platform",
      features: ["Space Technology AI", "Autonomous Systems", "Consciousness Integration", "Space Exploration"],
      price: "$29,999/month",
      badge: "Advanced"
    },
    {
      title: "Space Resource Mining Platform",
      description: "Next-generation space resource mining with consciousness and automation",
      href: "/space-resource-mining-platform",
      features: ["Space Mining", "Resource Extraction", "AI Consciousness", "Automated Systems"],
      price: "$49,999/month",
      badge: "Premium"
    },
    {
      title: "Space Exploration Intelligence",
      description: "Comprehensive space exploration intelligence with AI consciousness",
      href: "/space-exploration-intelligence",
      features: ["Space Exploration", "AI Intelligence", "Consciousness Integration", "Discovery Systems"],
      price: "$34,999/month",
      badge: "Research"
    }
  ];

  const stats = [
    { number: "500+", label: "Space Projects", icon: Rocket },
    { number: "99.9%", label: "Mission Success", icon: CheckCircle },
    { number: "50+", label: "Space Partners", icon: Users },
    { number: "24/7", label: "Space Monitoring", icon: Clock }
  ];

  return (
    <Layout 
      title="Space Technology Services - Zion Tech Group"
      description="Revolutionary space technology services including space resource intelligence, space mining, and space exploration. Pioneer the future of space technology with AI consciousness."
      keywords="space technology, space resource intelligence, space mining, space exploration, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 text-sm font-medium">Space Technology Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Space Technology
                </span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Pioneer the future of space exploration with AI consciousness, resource intelligence, 
                and autonomous systems that transcend Earth's boundaries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                >
                  Launch Space Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of space technology and exploration services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs font-medium text-indigo-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-indigo-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the space revolution. Pioneer the future of space technology with our 
                revolutionary space intelligence and exploration services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                >
                  Launch Space Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SpaceTechnologyServices;