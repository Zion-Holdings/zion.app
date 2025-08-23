import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Brain, Atom, Rocket,
  Linkedin, Mail, Phone, MapPin, Building, Lightbulb, Cpu
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadership = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and strategic growth with over 15 years of experience in cutting-edge technology",
      expertise: ["AI & Consciousness", "Quantum Technology", "Strategic Leadership"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/team/kleber.jpg",
      linkedin: "https://linkedin.com/in/kleber-zion",
      email: "kleber@ziontechgroup.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "AI Consciousness Team",
      role: "AI & Consciousness Division",
      description: "Experts in next-generation artificial intelligence and consciousness systems, pioneering emotional AI and self-aware systems",
      expertise: ["Emotional AI", "Consciousness Systems", "Ethical AI Governance"],
      color: "from-purple-500 to-pink-500",
      image: "/images/team/ai-team.jpg",
      linkedin: "https://linkedin.com/company/ziontechgroup",
      email: "ai-team@ziontechgroup.com",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Quantum Technology Team",
      role: "Quantum Computing Division",
      description: "Pioneers in quantum computing and quantum-resistant solutions, developing the next generation of computational power",
      expertise: ["Quantum Computing", "Quantum Security", "Quantum Neural Networks"],
      color: "from-indigo-500 to-purple-500",
      image: "/images/team/quantum-team.jpg",
      linkedin: "https://linkedin.com/company/ziontechgroup",
      email: "quantum@ziontechgroup.com",
      phone: "+1 (555) 123-4569"
    },
    {
      name: "Space Technology Team",
      role: "Space Technology Division",
      description: "Innovators in space exploration and resource intelligence, developing AI-powered space solutions",
      expertise: ["Space Exploration", "Resource Intelligence", "AI Space Systems"],
      color: "from-cyan-500 to-blue-500",
      image: "/images/team/space-team.jpg",
      linkedin: "https://linkedin.com/company/ziontechgroup",
      email: "space@ziontechgroup.com",
      phone: "+1 (555) 123-4570"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering cutting-edge technology solutions that transform industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering world-class quality and reliability in everything we do",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients to achieve extraordinary results",
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
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "2000+", label: "Revolutionary Services", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Leadership Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Meet Our Leaders
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and expert teams driving Zion Tech Group's mission 
                to revolutionize technology and create a better future for humanity.
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, 
                strategic vision, and innovative thinking to drive Zion Tech Group forward.
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`p-8 rounded-2xl border ${leader.borderColor} ${leader.bgColor} backdrop-blur-sm`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className={`w-12 h-12 ${leader.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${leader.color} mb-2`}>{leader.name}</h3>
                      <p className="text-white font-semibold mb-1">{leader.title}</p>
                      <p className="text-gray-400 text-sm mb-4">{leader.department}</p>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                        <p className="text-blue-400 font-semibold mb-3">{leader.role}</p>
                        <p className="text-gray-300 mb-4 leading-relaxed">{leader.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {leader.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-gray-700/50"
                            >
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4">
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                            <Linkedin className="w-4 h-4" />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        )}
                        {leader.contact.twitter && (
                          <a href={leader.contact.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Twitter className="w-4 h-4" />
                            <span className="text-sm">Twitter</span>
                          </a>
                        )}
                        {leader.contact.github && (
                          <a href={leader.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition-colors">
                            <Github className="w-4 h-4" />
                            <span className="text-sm">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our leadership and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Company Structure</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our organization is structured around four core divisions, each led by experts 
                in their respective fields, ensuring focused innovation and excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyStructure.map((division, index) => (
                <motion.div
                  key={division.department}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{division.department}</h3>
                  <p className="text-gray-400 mb-3">Led by: <span className="text-cyan-400">{division.leader}</span></p>
                  <p className="text-gray-300 mb-4">{division.focus}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Teams</h4>
                    <div className="flex flex-wrap gap-2">
                      {division.teams.map((team) => (
                        <span key={team} className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Culture */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our leadership team embodies the core values that drive Zion Tech Group's success 
                and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  We prioritize breakthrough thinking and revolutionary approaches to solving 
                  complex technological challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ethical Leadership</h3>
                <p className="text-gray-300">
                  We lead with integrity, ensuring all technological advancements serve 
                  humanity while maintaining ethical boundaries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaborative Excellence</h3>
                <p className="text-gray-300">
                  We foster a culture of collaboration, where diverse perspectives combine 
                  to create extraordinary results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Leadership Team</h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to lead the future of technology? Explore opportunities to join our 
                executive team and help shape the next generation of AI and quantum innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Leadership
                  <Mail className="w-5 h-5 ml-2" />
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LeadershipPage;
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
