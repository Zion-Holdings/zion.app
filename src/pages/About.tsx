import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, Globe, Shield, Cpu, Rocket } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Shield },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Cpu }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches to solve complex challenges.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Speed and efficiency are at our core. We deliver solutions that perform exceptionally well under any conditions.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions reach across borders, helping businesses worldwide transform their operations and achieve their goals.'
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'We build systems that not only meet today\'s needs but are designed to evolve and adapt to tomorrow\'s challenges.'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary leader with 15+ years in tech innovation and business transformation.'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Lead',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'AI researcher and technology architect specializing in machine learning and neural networks.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Cybersecurity expert with deep expertise in threat detection and zero-trust architectures.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Innovation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Quantum computing specialist leading our next-generation technology initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>
      
      <div className="neural-lines">
        <div className="neural-line" style={{ top: '10%', width: '40%', left: '5%', animationDelay: '0s' }}></div>
        <div className="neural-line" style={{ top: '30%', width: '60%', left: '20%', animationDelay: '1s' }}></div>
        <div className="neural-line" style={{ top: '50%', width: '35%', left: '10%', animationDelay: '2s' }}></div>
        <div className="neural-line" style={{ top: '70%', width: '50%', left: '25%', animationDelay: '3s' }}></div>
        <div className="neural-line" style={{ top: '90%', width: '45%', left: '15%', animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="neon-text">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, creating intelligent solutions that transform businesses and shape tomorrow's digital landscape.
            </p>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="futuristic-card p-6 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold neon-text mb-2">{stat.number}</div>
                    <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold neon-text mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                To democratize cutting-edge technology and make AI-powered solutions accessible to businesses of all sizes, 
                enabling them to thrive in the digital age through innovation, reliability, and exceptional service.
              </p>
              <div className="futuristic-card p-6 rounded-xl border border-zion-cyan/30">
                <h3 className="text-xl font-semibold text-white mb-3">Core Focus</h3>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    AI & Machine Learning Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Cybersecurity & Data Protection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Micro SAAS & Enterprise Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Emerging Technology Integration
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold neon-text mb-6">Our Vision</h2>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                To be the global leader in intelligent technology solutions, pioneering the next generation of AI, 
                quantum computing, and autonomous systems that redefine what's possible in business and society.
              </p>
              <div className="futuristic-card p-6 rounded-xl border border-zion-cyan/30">
                <h3 className="text-xl font-semibold text-white mb-3">Future Goals</h3>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Quantum Computing Breakthroughs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    AI Consciousness Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Space Technology Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Sustainable Tech Innovation
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text mb-6">Our Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our innovation and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="futuristic-card p-6 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">{value.title}</h3>
                    <p className="text-zion-slate-light text-center leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold neon-text mb-6">Meet Our Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and groundbreaking technologies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="futuristic-card overflow-hidden rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:neon-text transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-zion-cyan text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold neon-text mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="quantum-button px-8 py-4 text-lg font-medium transform hover:scale-105">
                Get Started Today
              </button>
              <button className="futuristic-card border border-zion-cyan/30 text-zion-cyan px-8 py-4 text-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}