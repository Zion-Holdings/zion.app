import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Heart,
  BookOpen, FileText, Video, Code, GraduationCap,
  MessageCircle, Calendar, Play
} from 'lucide-react';

const CompanyPage: React.FC = () => {
  const companySections = [
    {
      title: 'About Zion Tech Group',
      description: 'Learn about our story, mission, and the team behind our revolutionary technology solutions.',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'About Us', href: '/about', description: 'Our story and company overview' },
        { name: 'Our Mission', href: '/mission', description: 'Vision, mission, and strategic goals' },
        { name: 'Leadership Team', href: '/team', description: 'Meet our executive team and experts' },
        { name: 'Company Values', href: '/values', description: 'Core principles that guide our work' }
      ]
    },
    {
      title: 'Careers & Growth',
      description: 'Join our team of innovators and pioneers in the technology revolution.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Open Positions', href: '/careers', description: 'Current job opportunities' },
        { name: 'Company Culture', href: '/culture', description: 'What it\'s like to work here' },
        { name: 'Benefits & Perks', href: '/benefits', description: 'Employee benefits and advantages' },
        { name: 'Career Development', href: '/career-development', description: 'Growth and learning opportunities' }
      ]
    },
    {
      title: 'News & Media',
      description: 'Stay updated with our latest news, press releases, and media coverage.',
      icon: FileText,
      color: 'from-emerald-500 to-teal-500',
      links: [
        { name: 'Company News', href: '/news', description: 'Latest updates and announcements' },
        { name: 'Press Releases', href: '/press', description: 'Official company statements' },
        { name: 'Media Kit', href: '/media-kit', description: 'Brand assets and press materials' },
        { name: 'Events & Webinars', href: '/webinars', description: 'Upcoming and past events' }
      ]
    },
    {
      title: 'Resources & Learning',
      description: 'Access our knowledge base, documentation, and training resources.',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      links: [
        { name: 'Documentation', href: '/resources/documentation', description: 'Technical guides and manuals' },
        { name: 'Training Programs', href: '/training', description: 'Professional development courses' },
        { name: 'Case Studies', href: '/resources/case-studies', description: 'Success stories and implementations' },
        { name: 'API Reference', href: '/resources/api', description: 'Developer documentation' }
      ]
    }
  ];

  const stats = [
    { number: "2000+", label: "Revolutionary Services", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Global Support", icon: Clock },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering cutting-edge technology solutions that transform industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering world-class quality and reliability in everything we do",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients to achieve extraordinary results",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change across industries and communities worldwide",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Company Overview
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A revolutionary technology company pioneering the future with AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {companySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{section.description}</p>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 group"
                      >
                        <div>
                          <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-gray-500">{link.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our company culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${value.color} mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to work with us, join our team, or learn more about our mission, 
                we'd love to connect with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Careers
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CompanyPage;