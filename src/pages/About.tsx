
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud,
  TrendingUp,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your business security and data protection are our top priorities in every solution we deliver.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the growth and success of our clients\' businesses.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We serve clients worldwide, bringing technology solutions that transcend borders and cultures.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Zion Tech Group established with a vision to transform businesses through technology' },
    { year: '2016', title: 'First AI Project', description: 'Successfully delivered our first AI-powered solution to a Fortune 500 company' },
    { year: '2018', title: 'Cloud Division', description: 'Launched cloud infrastructure and migration services' },
    { year: '2020', title: 'Cybersecurity Focus', description: 'Expanded into comprehensive cybersecurity solutions' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices in multiple countries and served 500+ clients' },
    { year: '2024', title: 'AI Revolution', description: 'Leading the AI transformation with cutting-edge machine learning platforms' }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'CEO & Founder',
      expertise: 'AI & Technology Strategy',
      experience: '15+ years',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      expertise: 'AI Platforms & Solutions',
      experience: '8+ years average',
      avatar: '🤖'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Architects',
      expertise: 'AWS, Azure, Google Cloud',
      experience: '10+ years average',
      avatar: '☁️'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      expertise: 'Threat Detection & Prevention',
      experience: '12+ years average',
      avatar: '🔒'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="About Zion Tech Group - Technology Innovation Leaders"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership."
        canonical="/about"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              🚀 Our Story
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transforming Business
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                Through Innovation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over a decade, Zion Tech Group has been at the forefront of technology 
              innovation, helping businesses transform and thrive in the digital age. 
              We combine deep expertise with cutting-edge solutions to drive real results.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-zion-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <span>500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <span>1000+ Projects Delivered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  To democratize access to cutting-edge technology solutions, enabling 
                  businesses of all sizes to compete and thrive in the digital economy. 
                  We believe that innovation should be accessible to everyone.
                </p>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Democratize technology access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Drive business transformation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Foster innovation culture</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  To be the global leader in AI-powered business transformation, 
                  creating a world where every business can leverage cutting-edge 
                  technology to achieve unprecedented growth and success.
                </p>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Global technology leadership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>AI-powered transformation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Unprecedented business growth</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Core Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions 
              to how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From humble beginnings to global technology leadership, here's how 
              we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-pink"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-6">
                      <div className="text-zion-cyan font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-zion-slate-light">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Team</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in technology, AI, and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 text-4xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-zion-cyan font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="text-zion-slate-light text-sm mb-3">
                    {member.expertise}
                  </p>
                  <div className="text-zion-slate-light text-xs">
                    Experience: {member.experience}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their operations 
                and achieved remarkable growth with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Partnership Inquiry'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start a Partnership
                </FuturisticNeonButton>
                <FuturisticNeonButton
                  onClick={() => window.location.href = '/contact'}
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get in Touch
                </FuturisticNeonButton>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
