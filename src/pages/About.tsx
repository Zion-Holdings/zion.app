import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Zap, Shield, Brain, Cloud, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Rocket, Lightbulb, Code, Database, Lock, Eye } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches to solve complex challenges.',
      color: 'from-zion-cyan to-blue-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI Excellence',
      description: 'We leverage cutting-edge artificial intelligence to create intelligent, adaptive solutions that learn and improve over time.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'Our solutions are built to grow with your business, ensuring long-term success and adaptability.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Innovation']
    },
    {
      name: 'AI Development Team',
      role: 'AI Engineers & Scientists',
      description: 'World-class team of machine learning experts, data scientists, and AI researchers.',
      expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks']
    },
    {
      name: 'Cloud Architecture Team',
      role: 'Cloud & DevOps Engineers',
      description: 'Experienced professionals specializing in scalable cloud solutions and infrastructure automation.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Microservices']
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Specialists',
      description: 'Certified security professionals dedicated to protecting your digital assets and ensuring compliance.',
      expertise: ['Penetration Testing', 'Compliance', 'Threat Intelligence']
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Zion Tech Group Founded',
      description: 'Company established with a vision to revolutionize technology services through AI and innovation.'
    },
    {
      year: '2024',
      title: 'First AI Solutions Launch',
      description: 'Successfully deployed custom AI solutions for enterprise clients across multiple industries.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Extended services to clients in 25+ countries, establishing international partnerships.'
    },
    {
      year: '2025',
      title: 'Innovation Hub Launch',
      description: 'Launched our innovation hub to incubate cutting-edge technologies and solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <Rocket className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">Innovation Driven</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <Lightbulb className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-slate-light">Future Focused</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zion-cyan/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zion-cyan/20 rounded-xl text-zion-cyan">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to leverage the power of AI, automation, and digital transformation to achieve unprecedented growth and success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zion-purple/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zion-purple/20 rounded-xl text-zion-purple">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                To be the global leader in AI-powered technology solutions, creating a future where every business can harness the full potential of intelligent automation and data-driven decision making.
              </p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex gap-6 p-6 bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/50 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <div className={`p-4 bg-gradient-to-r ${value.color} rounded-xl text-white flex-shrink-0`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Expert Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Meet the brilliant minds behind our innovative solutions and exceptional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-medium mb-3">{member.role}</div>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize technology services.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can transform your business and drive unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 p-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <div className="text-left">
                  <div className="text-sm text-zion-slate-light">Call Us</div>
                  <div className="font-semibold text-white">+1 302 464 0950</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <div className="text-left">
                  <div className="text-sm text-zion-slate-light">Email Us</div>
                  <div className="font-semibold text-white">kleber@ziontechgroup.com</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <div className="text-left">
                  <div className="text-sm text-zion-slate-light">Visit Us</div>
                  <div className="font-semibold text-white">Middletown, DE</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 hover:border-zion-cyan transition-all duration-300"
              >
                <span className="font-semibold">Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}