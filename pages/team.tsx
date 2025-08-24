import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, Mail, Linkedin, Github, Globe, Zap, Star,
  CheckCircle, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Kleber Oliveira',
      role: 'Founder & CEO',
      expertise: 'AI Strategy, Quantum Computing, Business Development',
      bio: 'Visionary leader with 15+ years in AI and quantum technologies. Former AI researcher at leading institutions, now driving Zion Tech Group\'s mission to democratize cutting-edge technology.',
      avatar: '/api/placeholder/200/200',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleberoliveira',
      github: 'https://github.com/kleberoliveira',
      skills: ['AI Strategy', 'Quantum Computing', 'Business Development', 'Team Leadership'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI Architecture, Quantum Algorithms, System Design',
      bio: 'PhD in Computer Science with specialization in quantum machine learning. Led AI initiatives at Fortune 500 companies and research institutions.',
      avatar: '/api/placeholder/200/200',
      email: 'sarah.chen@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen',
      skills: ['AI Architecture', 'Quantum Algorithms', 'System Design', 'Research & Development'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Quantum Security, Threat Intelligence, Compliance',
      bio: 'Cybersecurity expert with deep knowledge in quantum-resistant encryption and AI-powered threat detection. Former security consultant for government agencies.',
      avatar: '/api/placeholder/200/200',
      email: 'marcus.rodriguez@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      github: 'https://github.com/marcusrodriguez',
      skills: ['Quantum Security', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Dr. Elena Petrova',
      role: 'Lead Quantum Researcher',
      expertise: 'Quantum Computing, Neural Networks, Research',
      bio: 'Quantum physicist with breakthrough research in quantum neural networks. Published author in top-tier journals and speaker at international conferences.',
      avatar: '/api/placeholder/200/200',
      email: 'elena.petrova@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/elenapetrova',
      github: 'https://github.com/elenapetrova',
      skills: ['Quantum Computing', 'Neural Networks', 'Research', 'Academic Collaboration'],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      expertise: 'Platform Architecture, DevOps, Scalability',
      bio: 'Engineering leader with expertise in building scalable platforms and autonomous systems. Former engineering director at major tech companies.',
      avatar: '/api/placeholder/200/200',
      email: 'alex.thompson@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alexthompson',
      github: 'https://github.com/alexthompson',
      skills: ['Platform Architecture', 'DevOps', 'Scalability', 'Team Management'],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      name: 'Dr. James Kim',
      role: 'Head of AI Research',
      expertise: 'Machine Learning, Neural Interfaces, AI Ethics',
      bio: 'AI researcher specializing in neural interfaces and consciousness studies. Pioneer in brain-computer interface technology and AI safety.',
      avatar: '/api/placeholder/200/200',
      email: 'james.kim@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/jameskim',
      github: 'https://github.com/jameskim',
      skills: ['Machine Learning', 'Neural Interfaces', 'AI Ethics', 'Research Leadership'],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, always exploring the next frontier of technology.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Excellence in Execution',
      description: 'We don\'t just dream big, we deliver exceptional results that exceed expectations.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Collaborative Growth',
      description: 'We believe in the power of diverse perspectives and collaborative problem-solving.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop technology that benefits humanity while ensuring safety and ethical considerations.',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Research Papers', icon: Star },
    { number: '25+', label: 'Patents Filed', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Our Team - Zion Tech Group | Meet the Experts Behind Innovation</title>
        <meta name="description" content="Meet the exceptional team at Zion Tech Group. Our experts in AI, quantum computing, cybersecurity, and technology innovation are driving the future." />
        <meta name="keywords" content="Zion Tech Group team, AI experts, quantum computing researchers, cybersecurity specialists, technology innovators" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the exceptional team at Zion Tech Group driving innovation in AI, quantum computing, and cybersecurity." />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Exceptional minds united by a shared vision: to democratize cutting-edge technology 
              and build a future where innovation serves humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Meet the visionary leaders and experts driving innovation at Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent who share our passion for innovation 
              and commitment to building technology that serves humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
