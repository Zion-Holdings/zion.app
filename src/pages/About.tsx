import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Zap, Brain, Shield, Cloud, Code, Rocket, CheckCircle, TrendingUp, Target, Eye, Heart } from 'lucide-react';

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
      description: 'We constantly push boundaries with emerging technologies and creative solutions.',
      icon: Brain,
      color: 'text-zion-cyan'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in every project and deliver exceptional results.',
      icon: Award,
      color: 'text-zion-purple'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: Shield,
      color: 'text-zion-cyan'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
      icon: Users,
      color: 'text-zion-purple'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former AI Research Director at Google, PhD in Computer Science from MIT. 15+ years leading tech companies.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Principal Engineer, specialized in cloud architecture and AI systems. Led teams of 100+ engineers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      bio: 'Stanford PhD in Machine Learning, former Research Lead at OpenAI. Published 50+ papers in top AI conferences.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400'
    },
    {
      name: 'David Kim',
      role: 'Chief Security Officer',
      bio: 'Former NSA cybersecurity expert, CISSP certified. 20+ years protecting critical infrastructure.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Ethics Award',
      description: 'Recognized for responsible AI development and ethical technology practices.'
    },
    {
      year: '2023',
      title: 'Global Innovation Prize',
      description: 'Awarded for breakthrough quantum computing simulation platform.'
    },
    {
      year: '2022',
      title: 'Cybersecurity Excellence',
      description: 'Industry recognition for zero-trust security framework implementation.'
    },
    {
      year: '2021',
      title: 'Startup of the Year',
      description: 'Named top emerging tech company by TechCrunch.'
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                      <div className="text-2xl md:text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                      <div className="text-zion-slate-light text-sm">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                  To democratize access to cutting-edge AI and technology solutions, making innovation 
                  accessible to businesses of all sizes worldwide.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We believe that the future of technology should be inclusive, ethical, and beneficial 
                  to all of humanity. Through our comprehensive services and solutions, we're building 
                  a world where AI enhances human potential rather than replacing it.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Transformative Impact</h3>
                    <p className="text-zion-slate-light">
                      We've helped over 500 companies transform their operations through AI and technology innovation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative lg:order-2"
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-zion-purple mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Future Vision</h3>
                    <p className="text-zion-slate-light">
                      Leading the charge towards a future where AI and human intelligence work in perfect harmony.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-zion-slate-light text-lg mb-6 leading-relaxed">
                  To be the global leader in AI-powered business transformation, setting new standards 
                  for innovation, ethics, and human-AI collaboration.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We envision a world where every organization, regardless of size or industry, 
                  can harness the power of artificial intelligence to solve complex challenges, 
                  drive growth, and create positive impact.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-zion-slate-light">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and transformation at Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Key milestones and achievements that have shaped our company's growth and success
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-cyan"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                        <div className="text-2xl font-bold text-zion-cyan mb-2">{achievement.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-zion-slate-light">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Join Our Mission
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Ready to be part of the future? Let's work together to transform your business 
                and shape the world of tomorrow.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
