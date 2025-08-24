import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Building secure, reliable solutions that our clients can trust with their most critical business operations.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable business outcomes and growth.',
      color: 'from-zion-cyan to-zion-blue-light'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Delivering world-class solutions with attention to detail, quality, and performance that exceeds expectations.',
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize technology solutions.',
      icon: Calendar
    },
    {
      year: '2024',
      title: 'First AI Platform',
      description: 'Launched our flagship AI-powered analytics platform.',
      icon: Brain
    },
    {
      year: '2024',
      title: 'Quantum Computing',
      description: 'Introduced quantum computing services for research institutions.',
      icon: Cpu
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to serve clients worldwide.',
      icon: Globe
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI/ML', 'Quantum Computing', 'Strategic Planning'],
      avatar: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      description: 'Expert researchers developing cutting-edge artificial intelligence solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      avatar: '🤖'
    },
    {
      name: 'Security Experts',
      role: 'Cybersecurity Team',
      description: 'Certified security professionals protecting digital assets and infrastructure.',
      expertise: ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      avatar: '🛡️'
    },
    {
      name: 'Cloud Architects',
      role: 'DevOps & Cloud',
      description: 'Infrastructure specialists building scalable, resilient cloud solutions.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Terraform', 'CI/CD'],
      avatar: '☁️'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, building revolutionary solutions that transform 
              businesses and drive human progress through innovation, excellence, and unwavering commitment to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes 
                to achieve digital transformation and competitive advantage through innovative AI, quantum computing, 
                and autonomous systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Democratize advanced technology</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Drive digital transformation</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Enable competitive advantage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the world's leading technology partner, pioneering the future of AI consciousness, 
                quantum supremacy, and autonomous systems that create a more intelligent, secure, and 
                sustainable world for future generations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Global technology leadership</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>AI consciousness advancement</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Sustainable future technology</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do, from product development to client relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              From a bold vision to a revolutionary technology company, discover the journey that brought us here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Passionate experts dedicated to pushing the boundaries of technology and delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-zion-cyan font-semibold mb-3">{member.role}</div>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-zion-cyan" />
                Cutting-Edge Technology
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Latest AI/ML algorithms and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Quantum computing capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Advanced cybersecurity solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Cloud-native architecture</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-zion-cyan" />
                Proven Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">15+ years of technology experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Certified security professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Industry-recognized solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">Continuous learning and innovation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our revolutionary technology solutions can transform your business 
              and help you achieve your goals. Our team is ready to partner with you on your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}