import React from 'react';
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
  Zap,
  Linkedin,
  Mail,
  Globe,
  Building,
  Lightbulb,
  TrendingUp,
  Cpu,
  Database,
  Code,
  Lock
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer & Founder',
      expertise: ['AI & Consciousness', 'Quantum Technology', 'Strategic Leadership'],
      experience: '15+ years in cutting-edge technology leadership',
      background: 'Former CTO at Google AI, PhD in Quantum Computing from MIT',
      vision: 'Pioneering the future of human-AI collaboration and quantum innovation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      linkedin: 'https://linkedin.com/in/sarah-chen-zion',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      expertise: ['Space Technology', 'Edge Computing', 'Infrastructure Architecture'],
      experience: '12+ years in advanced technology infrastructure',
      background: 'Former VP Engineering at SpaceX, MS in Aerospace Engineering',
      vision: 'Building the next generation of space-based computing infrastructure',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez-zion',
      email: 'marcus.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Elena Petrov',
      title: 'Chief Research Officer',
      expertise: ['Quantum Computing', 'AI Ethics', 'Research Strategy'],
      experience: '18+ years in advanced research and development',
      background: 'Former Research Director at IBM Quantum, PhD in Physics from Stanford',
      vision: 'Advancing the frontiers of quantum computing and ethical AI development',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      linkedin: 'https://linkedin.com/in/elena-petrov-zion',
      email: 'elena.petrov@ziontechgroup.com'
    },
    {
      name: 'James Washington',
      title: 'Chief Security Officer',
      expertise: ['Cybersecurity', 'Zero Trust Architecture', 'Threat Intelligence'],
      experience: '14+ years in cybersecurity and national security',
      background: 'Former Director of Cybersecurity at NSA, MS in Computer Security',
      vision: 'Building unbreakable security systems for the quantum age',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      linkedin: 'https://linkedin.com/in/james-washington-zion',
      email: 'james.washington@ziontechgroup.com'
    },
    {
      name: 'Dr. Priya Patel',
      title: 'Chief Data Officer',
      expertise: ['Data Science', 'Machine Learning', 'AI Governance'],
      experience: '16+ years in data science and AI leadership',
      background: 'Former Head of AI at Netflix, PhD in Machine Learning from Berkeley',
      vision: 'Creating intelligent data systems that drive business transformation',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      linkedin: 'https://linkedin.com/in/priya-patel-zion',
      email: 'priya.patel@ziontechgroup.com'
    },
    {
      name: 'Alex Thompson',
      title: 'Chief Innovation Officer',
      expertise: ['Emerging Technologies', 'Product Strategy', 'Market Innovation'],
      experience: '13+ years in technology innovation and product development',
      background: 'Former VP Product at Tesla, MBA from Harvard Business School',
      vision: 'Accelerating the adoption of breakthrough technologies across industries',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      linkedin: 'https://linkedin.com/in/alex-thompson-zion',
      email: 'alex.thompson@ziontechgroup.com'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, always exploring the next frontier of technology.',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop technology that serves humanity, with ethics and responsibility at the core.',
      icon: Shield,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Collaborative Excellence',
      description: 'We believe the best solutions come from diverse teams working together towards common goals.',
      icon: Users,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Future-Focused',
      description: 'We build for tomorrow, creating solutions that will shape the next decade and beyond.',
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Leadership Team - Zion Tech Group"
        description="Meet the visionary leaders driving innovation at Zion Tech Group. Our executive team brings decades of experience in cutting-edge technology."
        keywords={["leadership", "executive team", "CEO", "CTO", "Zion Tech Group", "technology leaders"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders who are shaping the future of technology at Zion Tech Group. 
                Our executive team brings together decades of experience in cutting-edge innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our leadership team combines deep technical expertise with strategic vision to drive 
                innovation and growth across all areas of our business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Member Info */}
                    <div className="relative z-10">
                      {/* Avatar Placeholder */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                        <member.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">
                        {member.name}
                      </h3>
                      <p className="text-lg text-cyan-400 mb-4 text-center font-semibold">
                        {member.title}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-800 text-cyan-300 text-sm rounded-full border border-gray-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                            Experience
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {member.experience}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                            Background
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {member.background}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                            Vision
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {member.vision}
                          </p>
                        </div>
                      </div>
                      
                      {/* Contact Links */}
                      <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-700">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5" />
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
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our leadership and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Ready to work with the leaders in cutting-edge technology? 
                Let's discuss how we can transform your business together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
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

export default LeadershipPage;