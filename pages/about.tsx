import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Atom, Shield, Globe, Star, CheckCircle, Users, Target, Zap, Heart, Building, Award, TrendingUp, Eye, Code, Palette, Lock, Infinity } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with revolutionary technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering the highest quality solutions and services",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "Creating positive change in the world through technology",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Multiple awards for innovation and excellence"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients across 50+ countries"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth",
      description: "Consistent year-over-year growth and expansion"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Client Satisfaction",
      description: "99% client satisfaction rate"
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and growth",
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: "AI Team",
      role: "AI Research & Development",
      description: "World-class AI researchers and engineers",
      icon: <Atom className="w-8 h-8" />
    },
    {
      name: "Quantum Team",
      role: "Quantum Computing",
      description: "Leading quantum technology experts",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      name: "Security Team",
      role: "Cybersecurity",
      description: "Advanced security and protection specialists",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Zion Tech Group | Revolutionary Technology Company"
        description="Learn about Zion Tech Group, a revolutionary technology company leading the future with AI consciousness, quantum computing, and cutting-edge innovations."
        keywords={["about Zion Tech Group", "technology company", "AI consciousness", "quantum computing", "innovation", "2040 technology"]}
        canonical="https://ziontechgroup.com/about"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <Building className="w-4 h-4" />
              About Zion Tech Group
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              We are Zion Tech Group, a revolutionary technology company leading the future 
              with AI consciousness, quantum computing, and cutting-edge innovations that redefine what's possible.
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: -1,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: -1,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              To accelerate human progress through revolutionary technology, creating a future where 
              AI consciousness, quantum computing, and advanced innovations enhance every aspect of human life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">
                Pioneering the Future
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we believe that technology should serve humanity, not replace it. 
                Our revolutionary approach combines cutting-edge AI consciousness, quantum computing, 
                and emerging technologies to solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-300">
                We're not just building the future – we're defining it. Every innovation, every breakthrough, 
                every solution we create is designed to enhance human potential and create a better world for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <Brain className="w-32 h-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative bg-gradient-to-r from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${value.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind our revolutionary technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that demonstrate our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join the Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to be part of the future? Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                View Careers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;