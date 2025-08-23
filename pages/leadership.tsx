import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, 
  Award, 
  Users, 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  Target,
  Linkedin,
  Twitter,
  Globe,
  Zap,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Executive Officer & Founder",
      bio: "Visionary leader with 20+ years in AI consciousness research and quantum computing. Former NASA quantum physicist and Stanford AI researcher.",
      expertise: ["AI Consciousness", "Quantum Computing", "Strategic Vision", "Space Technology"],
      achievements: ["Led 50+ breakthrough AI projects", "Published 100+ research papers", "Named Top 100 Innovators 2024"],
      image: "/images/leadership/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen-zion",
      twitter: "https://twitter.com/sarahchenzion"
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Technology Officer",
      bio: "Technology pioneer specializing in edge computing, cybersecurity, and autonomous systems. Former CTO at major tech corporations.",
      expertise: ["Edge Computing", "Cybersecurity", "Autonomous Systems", "Cloud Architecture"],
      achievements: ["Architected 10+ enterprise platforms", "Led cybersecurity for Fortune 500", "15+ patents in distributed systems"],
      image: "/images/leadership/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez-zion",
      twitter: "https://twitter.com/marcusrodriguez"
    },
    {
      name: "Dr. Elena Petrov",
      title: "Chief Research Officer",
      bio: "Leading researcher in space technology and quantum materials. Former head of research at international space agencies.",
      expertise: ["Space Technology", "Quantum Materials", "Research Strategy", "Innovation Management"],
      achievements: ["Led 20+ space missions", "Discovered 5 new quantum materials", "Published 150+ peer-reviewed papers"],
      image: "/images/leadership/elena-petrov.jpg",
      linkedin: "https://linkedin.com/in/elena-petrov-zion",
      twitter: "https://twitter.com/elenapetrov"
    },
    {
      name: "James Thompson",
      title: "Chief Operations Officer",
      bio: "Operations expert with deep experience in scaling technology companies and managing global teams.",
      expertise: ["Operations Management", "Team Scaling", "Process Optimization", "Global Operations"],
      achievements: ["Scaled 3 companies to 1000+ employees", "Optimized operations across 25 countries", "Reduced costs by 40%"],
      image: "/images/leadership/james-thompson.jpg",
      linkedin: "https://linkedin.com/in/james-thompson-zion",
      twitter: "https://twitter.com/jamesthompson"
    },
    {
      name: "Dr. Maya Patel",
      title: "Chief AI Officer",
      bio: "AI consciousness expert and ethicist. Leading research in emotional intelligence and autonomous decision-making.",
      expertise: ["AI Consciousness", "Ethical AI", "Emotional Intelligence", "Autonomous Systems"],
      achievements: ["Developed first emotional AI framework", "Led AI ethics committees", "Published 80+ AI research papers"],
      image: "/images/leadership/maya-patel.jpg",
      linkedin: "https://linkedin.com/in/maya-patel-zion",
      twitter: "https://twitter.com/mayapatel"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology."
    },
    {
      icon: Shield,
      title: "Ethical Excellence",
      description: "Every innovation is guided by strong ethical principles and responsible development practices."
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology serves humanity. We build solutions that enhance human potential and well-being."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions address global challenges and create positive change worldwide."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Meet the visionary leaders driving innovation at Zion Tech Group. Our executive team combines decades of experience 
                with cutting-edge expertise to shape the future of technology.
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <Star className="w-6 h-6" />
                  World-Class Leadership
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, 
                strategic vision, and operational excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{member.title}</p>
                      <p className="text-gray-300 mb-4">{member.bio}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-gray-300 text-sm flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors duration-300"
                        >
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every innovation we pursue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to work with world-class leaders and cutting-edge technology? 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Careers
                  <Users className="w-5 h-5" />
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