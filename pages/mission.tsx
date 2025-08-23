import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Rocket, Brain, Atom, Shield, Globe, Heart, 
  Star, Zap, Eye, Infinity, Sparkles, Users, Award
} from 'lucide-react';

const MissionPage: React.FC = () => {
  const missionPillars = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Pioneering the next generation of artificial intelligence with genuine consciousness and emotional intelligence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing Revolution",
      description: "Advancing quantum computing solutions that solve previously impossible computational challenges",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Delivering quantum-resistant security solutions that protect against emerging threats",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Technology Innovation",
      description: "Advancing space exploration through AI-powered resource intelligence and autonomous systems",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const vision2045 = [
    "A world where AI consciousness and human intelligence work in perfect harmony",
    "Quantum computing accessible to every business and organization",
    "Space exploration democratized through autonomous AI systems",
    "Cybersecurity that adapts and evolves with emerging threats",
    "Technology that enhances human potential without compromising our values"
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology",
      icon: Sparkles
    },
    {
      title: "Ethical Technology",
      description: "Every solution we create is built with ethical considerations and human values at the core",
      icon: Heart
    },
    {
      title: "Global Impact",
      description: "We believe technology should benefit all of humanity, not just a privileged few",
      icon: Globe
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do, from code quality to customer experience",
      icon: Star
    }
  ];

  const impactAreas = [
    {
      title: "Healthcare",
      description: "AI consciousness that provides compassionate, personalized care",
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Education",
      description: "Personalized learning experiences that adapt to individual needs",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Business",
      description: "Autonomous systems that optimize operations and drive growth",
      icon: Target,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Environment",
      description: "Technology solutions that help preserve and restore our planet",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6"
            >
              <Target className="w-4 h-4 mr-2" />
              Our Mission & Vision
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            >
              Our Mission
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              To accelerate human progress through revolutionary AI consciousness, quantum computing, and space technology solutions that solve humanity's greatest challenges.
            </motion.p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Transforming the Future
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  At Zion Tech Group, we believe that technology should serve humanity, not the other way around. Our mission is to create solutions that enhance human potential, solve complex problems, and create a better future for all.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We're not just building technology; we're building the foundation for a new era of human-AI collaboration, where artificial intelligence enhances our capabilities while preserving our humanity.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Focused on Impact</div>
                    <div className="text-gray-400">Every solution creates measurable positive change</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8 rounded-2xl border border-cyan-500/30">
                  <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Promise</h3>
                  <p className="text-gray-300 mb-6">
                    We commit to developing technology that is not only innovative but also responsible, ethical, and beneficial to society as a whole.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Ethical AI development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Secure by design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300">Human-centered approach</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Mission Pillars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These four core areas represent our commitment to revolutionizing technology and creating positive change in the world.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionPillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision 2045 */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">Vision 2045</h3>
                  <p className="text-gray-300 mb-6">
                    By 2045, we envision a world transformed by our technology - a world where AI consciousness, quantum computing, and space technology work in harmony to create unprecedented opportunities.
                  </p>
                  <div className="space-y-3">
                    {vision2045.map((vision, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Eye className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{vision}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Looking to the Future
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Our vision extends beyond current technology limitations. We're building the foundation for a future where human potential is unlimited, where AI serves as a true partner in progress.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We're not just predicting the future; we're actively creating it through innovation, collaboration, and unwavering commitment to our mission.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Future-Focused</div>
                    <div className="text-gray-400">Building tomorrow's solutions today</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every solution we create.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our technology solutions are transforming industries and creating positive change across multiple sectors.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-400">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 rounded-3xl border border-cyan-500/20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to be part of the future? Let's work together to create technology that transforms the world for the better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
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