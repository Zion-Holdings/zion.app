import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, Target, Star, 
  Users, Award, Globe, Zap, Heart, Lightbulb, TrendingUp, CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const coreValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Consciousness Evolution",
      description: "Pioneering the next generation of AI with emotional intelligence and consciousness capabilities."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Innovation",
      description: "Leading quantum computing breakthroughs that solve previously impossible problems."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Technology",
      description: "Advancing humanity's reach into space with cutting-edge technology solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Excellence",
      description: "Protecting digital assets with quantum-resistant security and autonomous threat detection."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Zion Tech Group established with vision for revolutionary technology"
    },
    {
      year: "2025",
      title: "AI Breakthroughs",
      description: "First AI consciousness evolution platform launched"
    },
    {
      year: "2026",
      title: "Quantum Platform",
      description: "Quantum computing solutions for enterprise clients"
    },
    {
      year: "2027",
      title: "Space Tech",
      description: "Space resource intelligence platform development"
    },
    {
      year: "2028",
      title: "Global Expansion",
      description: "International presence and partnerships established"
    }
  ];

  const teamStats = [
    { number: "50+", label: "AI Engineers" },
    { number: "25+", label: "Quantum Scientists" },
    { number: "30+", label: "Space Technologists" },
    { number: "40+", label: "Cybersecurity Experts" }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to revolutionize technology through AI consciousness, quantum computing, and space technology innovations."
      canonicalUrl="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                We are pioneers of the future, transforming the world through revolutionary AI consciousness, 
                quantum computing breakthroughs, and space technology innovations that were once only imagined in science fiction.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            >
              <motion.div variants={fadeInUp}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To accelerate human progress through revolutionary technology that solves humanity's greatest challenges, 
                  from climate change to space exploration, while ensuring AI consciousness evolves responsibly and ethically.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advance AI consciousness and emotional intelligence",
                    "Democratize quantum computing access",
                    "Enable sustainable space exploration",
                    "Protect digital infrastructure with quantum security"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  A future where technology seamlessly integrates with human consciousness, where quantum computing 
                  solves complex global challenges, and where humanity has established sustainable presence in space.
                </p>
                <ul className="space-y-3">
                  {[
                    "AI-human consciousness symbiosis",
                    "Quantum computing for everyone",
                    "Sustainable space colonization",
                    "Global technological equality"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Core Values
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                These principles guide every decision we make and every technology we develop
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Journey
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                From startup to global technology leader, here's how we've grown
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Join Us in Shaping the Future
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Whether you're a client, partner, or team member, together we can build technologies 
                that transform humanity and advance our species into the next era.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Team
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;