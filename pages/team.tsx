import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  Star,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Cpu,
  Database,
  Cloud,
  Palette,
  BookOpen,
  Calendar,
  User,
  Tag,
  Search,
  Filter,
  ExternalLink,
  Video,
  Podcast,
  FileText,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Newspaper,
  Building,
  TrendingUp as Chart,
  DollarSign,
  Goal
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and strategic growth",
      expertise: ["AI & Consciousness", "Quantum Computing", "Strategic Leadership"],
      experience: "15+ years",
      education: "Advanced AI & Quantum Physics",
      achievements: ["Pioneered AI consciousness research", "Led 200+ technology implementations", "Named Top 100 Tech Innovators"],
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "https://linkedin.com/in/kleber-zion",
        twitter: "https://twitter.com/kleberzion",
        github: "https://github.com/kleberzion"
      }
    }
  ];

  const coreTeams = [
    {
      name: "AI & Consciousness Team",
      description: "Pioneering the future of artificial intelligence and consciousness systems",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      members: 25,
      expertise: ["AI Consciousness", "Neural Networks", "Ethical AI", "Machine Learning"],
      projects: ["AI Consciousness Platform", "Ethical AI Framework", "Neural Network Architecture"],
      achievements: ["Developed first AI consciousness system", "Published 50+ research papers", "Won 3 AI innovation awards"]
    },
    {
      name: "Quantum Technology Team",
      description: "Advancing quantum computing and quantum-resistant solutions",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      members: 18,
      expertise: ["Quantum Computing", "Quantum Cryptography", "Quantum Algorithms", "Error Correction"],
      projects: ["Quantum Computing Platform", "Post-Quantum Security", "Quantum Machine Learning"],
      achievements: ["Built 1000+ qubit system", "Developed quantum-resistant algorithms", "Partnership with leading quantum labs"]
    },
    {
      name: "Space Technology Team",
      description: "Innovating in space exploration and resource intelligence",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      members: 22,
      expertise: ["Satellite Technology", "Space Mining", "Resource Intelligence", "Orbital Mechanics"],
      projects: ["Space Resource Platform", "Satellite Constellation", "Asteroid Mining Technology"],
      achievements: ["Launched 50+ satellites", "Discovered valuable space resources", "Advanced space mining techniques"]
    },
    {
      name: "Enterprise Solutions Team",
      description: "Delivering cutting-edge enterprise technology solutions",
      icon: Building,
      color: "from-emerald-500 to-teal-500",
      members: 35,
      expertise: ["Digital Transformation", "Cloud Architecture", "Enterprise AI", "Cybersecurity"],
      projects: ["Enterprise AI Platform", "Cloud Migration", "Security Solutions"],
      achievements: ["Transformed 500+ enterprises", "99.9% uptime guarantee", "Zero security breaches"]
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
    { number: "100+", label: "Team Members", icon: Users },
    { number: "200+", label: "Successful Projects", icon: CheckCircle },
    { number: "50+", label: "Research Papers", icon: FileText },
    { number: "15+", label: "Years Experience", icon: Clock }
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
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the brilliant minds behind Zion Tech Group's revolutionary technology solutions. 
                Our diverse team of experts is driving the future of AI, quantum computing, and space technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visionary leaders driving innovation and strategic growth across all technology domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-2xl text-cyan-400 mb-4">{leader.role}</p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {leader.description}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Experience & Education</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Experience:</span>
                            <div className="text-white font-medium">{leader.experience}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Education:</span>
                            <div className="text-white font-medium">{leader.education}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        {Object.entries(leader.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <User className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-gray-400">Leadership Profile</p>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized teams working together to deliver revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreTeams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${team.color} flex items-center justify-center mb-6`}>
                    <team.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{team.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{team.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-medium">{team.members} members</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Expertise Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Projects</h4>
                    <ul className="space-y-2">
                      {team.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {team.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our team and drive our success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to work with the brightest minds in technology? Explore career opportunities at Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-300"
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