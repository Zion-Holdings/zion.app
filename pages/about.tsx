import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Star, Globe, Award, Heart, Shield, Rocket, Brain, Atom, Cpu, Cloud,
  Building, Zap, TrendingUp, Lightbulb, Eye, Lock, Server, Database, Network
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const companyStats = [
    { number: "5000+", label: "Revolutionary Services", icon: Star, color: "from-yellow-500 to-orange-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: Shield, color: "from-green-500 to-emerald-500" },
    { number: "250+", label: "Countries Served", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-purple-500 to-pink-500" }
  ];

  const coreValues = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "We believe in leveraging artificial intelligence to solve complex business challenges and drive transformation.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure, reliable solutions that our clients can trust with their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Future-Ready Solutions",
      description: "Developing cutting-edge technology that prepares businesses for tomorrow's challenges.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business value.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Zion Tech Group was founded with a vision to revolutionize business technology through AI and automation."
    },
    {
      year: "2022",
      title: "AI Breakthrough",
      description: "Launched our first AI-powered business intelligence platform, serving 100+ enterprise clients."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries with advanced quantum computing and space technology solutions."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Pioneering AI consciousness evolution and autonomous business ecosystems for the next decade."
    }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to revolutionize business technology through AI, quantum computing, and autonomous solutions."
      canonicalUrl="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">500+ Team Members</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">250+ Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                  <Target className="w-16 h-16 text-cyan-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4 text-cyan-400">Our Mission</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To democratize advanced technology and empower businesses of all sizes with 
                    cutting-edge AI, quantum computing, and autonomous solutions that drive 
                    unprecedented growth and innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                  <Eye className="w-16 h-16 text-purple-400 mb-6" />
                  <h2 className="text-3xl font-bold mb-4 text-purple-400">Our Vision</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To create a world where technology seamlessly enhances human potential, 
                    where AI consciousness and quantum computing work harmoniously to solve 
                    humanity's greatest challenges.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From startup to global technology leader - our path to innovation.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              <motion.div 
                className="space-y-12"
                initial="initial"
                whileInView="animate"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 z-10 relative">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6">
                        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Technology Stack</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that power our revolutionary solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {[
                { icon: Brain, name: "AI & ML", color: "from-purple-500 to-pink-500" },
                { icon: Atom, name: "Quantum Computing", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, name: "Cybersecurity", color: "from-red-500 to-orange-500" },
                { icon: Cloud, name: "Cloud Infrastructure", color: "from-indigo-500 to-purple-500" },
                { icon: Cpu, name: "Edge Computing", color: "from-green-500 to-teal-500" },
                { icon: Server, name: "DevOps", color: "from-yellow-500 to-orange-500" },
                { icon: Database, name: "Data Analytics", color: "from-cyan-500 to-blue-500" },
                { icon: Network, name: "Network Security", color: "from-pink-500 to-rose-500" },
                { icon: Rocket, name: "Space Tech", color: "from-violet-500 to-purple-500" },
                { icon: Zap, name: "Automation", color: "from-amber-500 to-yellow-500" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-gray-300 font-medium">{tech.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary technology solutions 
                to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;