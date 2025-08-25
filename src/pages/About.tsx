import { motion } from 'framer-motion';
import { Users, Target, Award, Zap, Globe, Shield, Sparkles, Lightbulb } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Award, color: 'text-zion-cyan' },
    { label: 'Projects Completed', value: '100+', icon: Target, color: 'text-zion-purple' },
    { label: 'Happy Clients', value: '50+', icon: Users, color: 'text-zion-cyan' },
    { label: 'Team Members', value: '15+', icon: Users, color: 'text-zion-purple' }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.',
      color: 'text-zion-cyan'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every project we deliver meets the highest standards of quality, security, and performance that our clients expect.',
      color: 'text-zion-purple'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their needs and building solutions that truly serve their business objectives.',
      color: 'text-zion-cyan'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our services are available worldwide, helping businesses across different industries and regions achieve digital transformation.',
      color: 'text-zion-purple'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and business transformation.',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Team',
      role: 'AI Specialists',
      description: 'Expert team specializing in machine learning, natural language processing, and AI-powered solutions.',
      avatar: '🤖'
    },
    {
      name: 'Dev Team',
      role: 'Development Engineers',
      description: 'Skilled developers creating robust, scalable, and innovative software solutions.',
      avatar: '👨‍💻'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated professionals ensuring exceptional customer experience and support.',
      avatar: '🎯'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to 25+ countries and launched revolutionary AI consciousness platform.'
    },
    {
      year: '2023',
      title: 'AI Breakthrough',
      description: 'Developed breakthrough AI solutions that increased client efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing applications for enterprise solutions.'
    },
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology solutions.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO
        title="About Zion Tech Group - Our Story & Mission"
        description="Learn about Zion Tech Group's journey from startup to global technology leader, our mission to revolutionize business through AI and innovation, and the team behind our success."
        keywords="about Zion Tech Group, company history, team, mission, vision, technology innovation"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-zion-blue-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      <stat.icon className="h-12 w-12" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-xl text-zion-slate-light mb-6 leading-relaxed">
                    To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to achieve digital transformation and competitive advantage through innovative AI, cybersecurity, and cloud solutions.
                  </p>
                  <p className="text-lg text-zion-slate-light leading-relaxed">
                    We believe that every business deserves access to enterprise-grade technology that can drive growth, improve efficiency, and create new opportunities in the digital economy.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/30 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-zion-cyan" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Core Values
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The principles that guide everything we do and every solution we deliver
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="text-center group"
                    variants={itemVariants}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Meet Our Team
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The brilliant minds behind our innovative solutions and exceptional service delivery
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                    variants={itemVariants}
                  >
                    <div className="text-6xl mb-4 text-center">{member.avatar}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white text-center">{member.name}</h3>
                    <p className="text-zion-cyan font-semibold mb-4 text-center">{member.role}</p>
                    <p className="text-zion-slate-light text-center leading-relaxed">{member.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-24 bg-zion-blue-dark/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  From startup to global technology leader - our story of innovation and growth
                </p>
              </motion.div>

              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {timeline.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="flex items-center space-x-8"
                    variants={itemVariants}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
