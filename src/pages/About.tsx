import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, TrendingUp, Zap, Shield, Brain, Rocket, Star, CheckCircle, ArrowRight } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Global Clients', value: '50+', icon: Globe },
    { label: 'Team Members', value: '25+', icon: Users },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      title: 'Excellence in Execution',
      description: 'Every project is delivered with precision, quality, and attention to detail that exceeds expectations.',
      icon: Star,
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable, transformative results.',
      icon: Target,
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve through continuous research, training, and adoption of cutting-edge technologies.',
      icon: Brain,
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Development'],
      avatar: '/avatars/kleber.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Machine Learning with expertise in neural networks and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development'],
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Former government cybersecurity expert with deep knowledge of threat intelligence.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
      avatar: '/avatars/marcus.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      bio: 'Software architect with experience building scalable systems for Fortune 500 companies.',
      expertise: ['Software Architecture', 'Cloud Computing', 'DevOps'],
      avatar: '/avatars/emily.jpg'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in healthcare and finance',
      category: 'Industry Recognition'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Successfully delivered over 500 technology solutions worldwide',
      category: 'Business Growth'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries across 3 continents',
      category: 'Market Expansion'
    },
    {
      year: '2021',
      title: 'Patent Portfolio',
      description: 'Filed 25+ patents in AI, cybersecurity, and quantum computing',
      category: 'Innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
            and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Founded 2014
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              Global Presence
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Innovation Leader
            </span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to harness the power of AI, quantum computing, and advanced automation for sustainable growth 
                and competitive advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Accelerate digital transformation</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Bridge the technology gap</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                  <span>Foster innovation ecosystems</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-purple">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the global leader in AI-powered technology solutions, creating a future where every 
                organization can leverage intelligent automation, predictive analytics, and quantum computing 
                to solve humanity's greatest challenges.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>AI-first world</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Sustainable technology</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-purple flex-shrink-0" />
                  <span>Human-AI collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${value.color} rounded-lg text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-zion-cyan text-sm mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-2">{achievement.description}</p>
                      <span className="inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our solutions, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
