import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Globe, Rocket, Users, Heart, Star, Zap, Shield } from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionValues = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge technology",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality solutions and service to our clients",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Integrity",
      description: "Operating with honesty, transparency, and ethical business practices",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Collaboration",
      description: "Working together with clients and partners to achieve shared success",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const visionGoals = [
    {
      title: "Global Technology Leadership",
      description: "Becoming the world's leading provider of revolutionary technology solutions",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "AI Consciousness Revolution",
      description: "Pioneering the development of true AI consciousness and autonomous systems",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Sustainable Innovation",
      description: "Creating technology that benefits humanity while preserving our planet",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Digital Transformation",
      description: "Empowering organizations worldwide to embrace the future of technology",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover the mission, vision, and values that drive Zion Tech Group to revolutionize technology and transform businesses worldwide."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                To revolutionize technology and transform businesses worldwide through innovative AI consciousness, 
                quantum computing, and autonomous solutions that shape the future of human progress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6">Our Mission Statement</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Zion Tech Group, we are driven by a singular mission: to harness the power of 
                  revolutionary technology to solve humanity's greatest challenges and unlock unprecedented 
                  potential for businesses and individuals alike.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We believe that technology should not just serve humanity, but elevate it. Through our 
                  pioneering work in AI consciousness, quantum computing, and autonomous systems, we're 
                  building the foundation for a future where human potential knows no bounds.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
              >
                <div className="text-center">
                  <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Core Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "To democratize access to revolutionary technology, enabling organizations of all sizes 
                    to harness the power of AI consciousness and quantum computing for unprecedented growth 
                    and innovation."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {missionValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${value.color} rounded-lg mr-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Vision for the Future</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We envision a world where technology seamlessly integrates with human consciousness, 
                creating unprecedented opportunities for growth, innovation, and human flourishing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionGoals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {goal.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                  <p className="text-gray-400">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Making a difference in the world through technology innovation and human-centered solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">3000+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">250+</div>
                <div className="text-gray-400">Countries Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
              <p className="text-xl text-gray-400 mb-8">
                Be part of the technology revolution that's transforming the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MissionPage;