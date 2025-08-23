import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Users, 
  Target, 
  Award, 
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, always exploring the next frontier of technology."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Everywhere",
      description: "AI and machine learning are integrated into every solution we create."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Ready",
      description: "We're building the infrastructure for the quantum computing revolution."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security by Design",
      description: "Every solution is built with enterprise-grade security from the ground up."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Global Support" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "AI Ethics & Consciousness",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "Quantum Computing Lead",
      expertise: "Quantum Algorithms & Infrastructure",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Space Technology Director",
      expertise: "Space Mining & Colonization",
      avatar: "👩‍🚀"
    },
    {
      name: "Alex Thompson",
      role: "Enterprise Solutions Architect",
      expertise: "Cloud Infrastructure & Security",
      avatar: "👨‍🏗️"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            About Zion Tech Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Pioneering the future of technology with revolutionary AI, quantum computing, and space innovation solutions that transform businesses and advance humanity.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To accelerate human progress through cutting-edge technology, making AI consciousness, quantum computing, and space exploration accessible to forward-thinking organizations.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that technology should serve humanity, not the other way around. Our solutions are designed to enhance human capabilities while maintaining the highest ethical standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the leading force in the technological revolution, creating a future where:
              </p>
              <ul className="space-y-3">
                {[
                  "AI consciousness enhances human creativity and problem-solving",
                  "Quantum computing solves previously impossible challenges",
                  "Space technology opens new frontiers for humanity",
                  "Technology serves as a bridge to a better world"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <div className="text-blue-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-300">
              Numbers that tell the story of our impact and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts leading the charge in AI, quantum computing, and space technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Technology Focus</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three pillars of innovation that define the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI & Consciousness",
                description: "Developing AI systems that understand, learn, and evolve with human-like consciousness and emotional intelligence.",
                features: ["Machine Learning", "Neural Networks", "Emotional AI", "Autonomous Systems"],
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: <Atom className="w-12 h-12" />,
                title: "Quantum Computing",
                description: "Building the infrastructure for quantum supremacy and solving complex problems beyond classical computing capabilities.",
                features: ["Quantum Algorithms", "Quantum Security", "Quantum Networks", "Quantum Materials"],
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Space Technology",
                description: "Pioneering space exploration, resource mining, and colonization technologies for humanity's next frontier.",
                features: ["Space Mining", "Colonization", "Resource Management", "Interplanetary Travel"],
                color: "from-orange-600 to-red-600"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${tech.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tech.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Zion Tech Group and be part of the technological revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;