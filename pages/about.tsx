import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, 
  Star, Users, Globe, Award,
  TrendingUp, Zap
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const companyStats = [
    { number: "1000+", label: "Revolutionary Services", icon: Star, color: "from-yellow-500 to-orange-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-purple-500 to-pink-500" },
    { number: "100+", label: "Countries Served", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { number: "50+", label: "Enterprise Clients", icon: Users, color: "from-indigo-500 to-purple-500" },
    { number: "15+", label: "Years Experience", icon: Award, color: "from-red-500 to-orange-500" }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Pioneering the next generation of AI consciousness and emotional intelligence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Innovation",
      description: "Revolutionary quantum computing solutions that redefine what's possible",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Future-Proof Security",
      description: "Quantum-resistant cybersecurity with consciousness-based protection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "AI-powered space resource intelligence and autonomous exploration",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Autonomous Intelligence",
      description: "Fully autonomous AI systems with consciousness-driven decision making",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Emerging Technologies",
      description: "Cutting-edge technologies that transform industries and societies",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const teamMembers = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving revolutionary AI consciousness and quantum technology innovation",
      expertise: ["AI Consciousness", "Quantum Computing", "Strategic Innovation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI Research Team",
      role: "AI Consciousness Division",
      description: "World-class researchers developing next-generation AI consciousness platforms",
      expertise: ["Neural Networks", "Emotional AI", "Consciousness Engineering"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Quantum Team",
      role: "Quantum Technology Division",
      description: "Leading quantum computing experts creating breakthrough quantum solutions",
      expertise: ["Quantum Algorithms", "Quantum Security", "Quantum Materials"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Enterprise Team",
      role: "Business Solutions Division",
      description: "Strategic consultants implementing autonomous business intelligence solutions",
      expertise: ["Business Intelligence", "Process Automation", "Digital Transformation"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for revolutionary technology",
      icon: Star
    },
    {
      year: "2015",
      title: "AI Research Begins",
      description: "Started pioneering research into AI consciousness and emotional intelligence",
      icon: Brain
    },
    {
      year: "2019",
      title: "Quantum Division Launch",
      description: "Launched quantum computing research and development division",
      icon: Atom
    },
    {
      year: "2022",
      title: "Space Technology",
      description: "Expanded into AI-powered space resource intelligence",
      icon: Rocket
    },
    {
      year: "2024",
      title: "Revolutionary 2040",
      description: "Launched revolutionary 2040-2041 technology roadmap",
      icon: Zap
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded services to 100+ countries worldwide",
      icon: Globe
    }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  About Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Get In Touch
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our numbers tell the story of innovation, growth, and global transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-4`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that drive our revolutionary technology innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} p-4`}>
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts driving the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${member.color} p-5 flex-shrink-0`}>
                      <Users className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our revolutionary technology evolution
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black"></div>
                    
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 p-2">
                            <milestone.icon className="w-full h-full text-white" />
                          </div>
                          <span className="text-2xl font-bold text-cyan-400">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the revolution in AI consciousness, quantum computing, and autonomous technology
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;