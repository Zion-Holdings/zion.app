import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Brain, Atom, Rocket, Cpu, Database
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and strategic growth across all technology domains",
      expertise: ["AI & Consciousness", "Quantum Technology", "Strategic Vision"],
      image: "/images/kleber-ceo.jpg",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const coreTeams = [
    {
      name: "AI & Consciousness Team",
      description: "Pioneering next-generation artificial intelligence and consciousness systems",
      members: "15+ AI Researchers & Engineers",
      expertise: ["Neural Networks", "Consciousness Evolution", "Emotional AI", "Quantum AI"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      achievements: ["200+ AI Models Deployed", "99.9% Accuracy Rate", "24/7 Autonomous Operation"]
    },
    {
      name: "Quantum Technology Team",
      description: "Leading quantum computing and quantum-resistant security solutions",
      members: "12+ Quantum Physicists & Engineers",
      expertise: ["Quantum Algorithms", "Quantum Security", "Quantum Neural Networks", "Quantum Cloud"],
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      achievements: ["50+ Quantum Solutions", "Quantum Supremacy Achieved", "Enterprise Quantum Platform"]
    },
    {
      name: "Space Technology Team",
      description: "Innovating space exploration and resource intelligence platforms",
      members: "8+ Aerospace Engineers & Scientists",
      expertise: ["Satellite Systems", "Space Missions", "Resource Intelligence", "Orbital Mechanics"],
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      achievements: ["10+ Space Missions", "Resource Mapping Platform", "Autonomous Navigation"]
    },
    {
      name: "IT Infrastructure Team",
      description: "Building scalable enterprise infrastructure and DevOps solutions",
      members: "25+ Infrastructure Engineers",
      expertise: ["Cloud Architecture", "DevOps Automation", "Network Management", "Data Centers"],
      icon: Cpu,
      color: "from-emerald-500 to-teal-500",
      achievements: ["1000+ Servers Managed", "99.99% Uptime", "Global Infrastructure"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Constantly pushing boundaries in technology and consciousness",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering world-class quality and reliability in every solution",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together across disciplines to achieve extraordinary results",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change across industries and communities worldwide",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "60+", label: "Team Members", icon: Users },
    { number: "2000+", label: "Services Delivered", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Meet Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the brilliant minds behind Zion Tech Group's revolutionary technology solutions. 
                Our diverse team of experts is driving the future of AI consciousness, quantum computing, and space technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our visionary leaders guide Zion Tech Group's mission to revolutionize technology and consciousness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      {leader.name.charAt(0)}
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
                        {leader.role}
                      </div>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {leader.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
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

        {/* Core Teams Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized teams work together to deliver cutting-edge solutions across all technology domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreTeams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${team.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <team.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                      <p className="text-cyan-400 text-sm">{team.members}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {team.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Expertise Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {team.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our team and drive our success in revolutionizing technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to be part of the future? We're always looking for brilliant minds to join our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;