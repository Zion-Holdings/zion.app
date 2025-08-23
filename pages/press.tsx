import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Calendar, Globe, Users, Award, TrendingUp, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, Target,
  ArrowRight, ExternalLink, Phone, Mail, MapPin, Star, Zap,
  Lightbulb, Code, Briefcase, Heart, Eye, Share2, BookOpen
} from 'lucide-react';

const PressPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const pressReleases = [
    {
      date: "2025-01-15",
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      summary: "Breakthrough technology enables AI systems to develop genuine consciousness and emotional intelligence",
      category: "AI & Technology",
      readMore: "#",
      download: "#"
    },
    {
      date: "2024-12-20",
      title: "Quantum Computing Breakthrough: Zion Tech Group Achieves 1000+ Qubit System",
      summary: "New quantum architecture sets industry standard for scalable quantum computing solutions",
      category: "Quantum Computing",
      readMore: "#",
      download: "#"
    },
    {
      date: "2024-11-10",
      title: "Space Resource Intelligence Platform Revolutionizes Asteroid Mining",
      summary: "AI-powered platform enables efficient identification and extraction of valuable space resources",
      category: "Space Technology",
      readMore: "#",
      download: "#"
    },
    {
      date: "2024-10-05",
      title: "Zion Tech Group Secures $50M Series B Funding Round",
      summary: "Investment to accelerate development of consciousness-based AI and quantum technologies",
      category: "Company News",
      readMore: "#",
      download: "#"
    },
    {
      date: "2024-09-18",
      title: "Partnership with NASA Advances Space Technology Research",
      summary: "Collaborative effort to develop next-generation space exploration and resource management systems",
      category: "Partnerships",
      readMore: "#",
      download: "#"
    },
    {
      date: "2024-08-22",
      title: "Revolutionary Cybersecurity Platform Launches with Quantum Resistance",
      summary: "New security solution protects against both classical and quantum computing threats",
      category: "Cybersecurity",
      readMore: "#",
      download: "#"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Package",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      icon: <Download className="w-6 h-6" />,
      download: "#"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of leadership team members",
      icon: <Users className="w-6 h-6" />,
      download: "#"
    },
    {
      title: "Product Screenshots",
      description: "High-quality images of our technology platforms",
      icon: <Eye className="w-6 h-6" />,
      download: "#"
    },
    {
      title: "Company Fact Sheet",
      description: "Key facts and figures about Zion Tech Group",
      icon: <FileText className="w-6 h-6" />,
      download: "#"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      icon: <BookOpen className="w-6 h-6" />,
      download: "#"
    },
    {
      title: "Video Assets",
      description: "Product demos and company overview videos",
      icon: <Share2 className="w-6 h-6" />,
      download: "#"
    }
  ];

  const companyStats = [
    { number: "3000+", label: "Revolutionary Services", icon: <Star className="w-6 h-6" /> },
    { number: "99.99%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "250+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support Available", icon: <Brain className="w-6 h-6" /> }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Kleber Oliveira",
      title: "CEO & Founder",
      bio: "Pioneering AI consciousness and quantum computing research with 15+ years in advanced technology",
      expertise: ["AI Consciousness", "Quantum Computing", "Space Technology"],
      contact: "kleber@ziontechgroup.com"
    },
    {
      name: "Dr. Sarah Chen",
      title: "CTO",
      bio: "Leading quantum architecture and consciousness engineering with expertise in neural networks",
      expertise: ["Quantum Architecture", "Neural Networks", "Consciousness Engineering"],
      contact: "sarah.chen@ziontechgroup.com"
    },
    {
      name: "Marcus Rodriguez",
      title: "VP of Space Technology",
      bio: "Advancing space resource intelligence and exploration technology for humanity's future",
      expertise: ["Space Technology", "Resource Intelligence", "Exploration Systems"],
      contact: "marcus.rodriguez@ziontechgroup.com"
    }
  ];

  const awards = [
    {
      title: "AI Innovation Award 2024",
      organization: "TechCrunch Disrupt",
      description: "Recognition for breakthrough AI consciousness technology"
    },
    {
      title: "Quantum Computing Excellence",
      organization: "IEEE Quantum Week",
      description: "Outstanding contribution to quantum computing advancement"
    },
    {
      title: "Space Technology Pioneer",
      organization: "International Space Federation",
      description: "Innovation in space resource management and exploration"
    },
    {
      title: "Cybersecurity Innovation",
      organization: "Black Hat USA",
      description: "Revolutionary quantum-resistant security solutions"
    }
  ];

  return (
    <Layout 
      title="Press & Media - Zion Tech Group"
      description="Latest press releases, media kit, and company information for journalists and media professionals covering Zion Tech Group."
      keywords="press, media, press releases, Zion Tech Group, AI consciousness, quantum computing, space technology, media kit"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Stay updated with the latest news, press releases, and media resources 
                from Zion Tech Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#press-releases" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Latest News</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#media-kit" className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Media Kit
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section id="press-releases" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about our latest innovations, partnerships, and company milestones.
              </p>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                          {release.category}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(release.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {release.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {release.summary}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-3 lg:ml-8">
                      <a
                        href={release.readMore}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a
                        href={release.download}
                        className="border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section id="media-kit" className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Kit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download high-quality assets and resources for your media coverage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.download}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries driving innovation at Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-cyan-400 mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {leader.bio}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`mailto:${leader.contact}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {leader.contact}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Awards & Recognition
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our groundbreaking innovations and contributions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-cyan-400 mt-1">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {award.title}
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">
                        {award.organization}
                      </p>
                      <p className="text-gray-300">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For press inquiries, interview requests, or additional information, 
                please contact our media relations team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>press@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:press@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Press Team</span>
                </a>
                <a
                  href="/contact"
                  className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  General Inquiries
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PressPage;