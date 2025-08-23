import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, Calendar, Clock, Users, ArrowRight, 
  Play, Star, CheckCircle, Download, Share2,
  Brain, Atom, Rocket, Shield, Globe, Zap, FileText
} from 'lucide-react';
import Link from 'next/link';

export default function Webinars() {
  const upcomingWebinars = [
    {
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      description: 'Join us for an in-depth exploration of how AI consciousness is evolving and what it means for the future of technology.',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      speakers: ['Dr. Kleber Vasconcelos', 'AI Research Team'],
      category: 'AI & Consciousness',
      image: '🧠',
      featured: true,
      registrationUrl: '/webinars/ai-consciousness-future'
    },
    {
      title: 'Quantum Computing in Enterprise: Real-World Applications and ROI',
      description: 'Discover how quantum computing is transforming business operations and delivering measurable value across industries.',
      date: '2025-02-22',
      time: '1:00 PM EST',
      duration: '75 minutes',
      speakers: ['Quantum Engineering Team', 'Enterprise Solutions Team'],
      category: 'Quantum Technology',
      image: '⚛️',
      featured: false,
      registrationUrl: '/webinars/quantum-enterprise-applications'
    },
    {
      title: 'Building Autonomous Business Systems: From Concept to Implementation',
      description: 'Learn how to design and deploy autonomous systems that can manage your business operations 24/7.',
      date: '2025-03-01',
      time: '3:00 PM EST',
      duration: '60 minutes',
      speakers: ['Autonomous Systems Team', 'DevOps Team'],
      category: 'Autonomous Systems',
      image: '🤖',
      featured: false,
      registrationUrl: '/webinars/autonomous-business-systems'
    }
  ];

  const pastWebinars = [
    {
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      description: 'Essential guidelines for developing AI systems that are not only powerful but also ethical and beneficial to humanity.',
      date: '2025-01-20',
      duration: '80 minutes',
      speakers: ['AI Ethics Team', 'Legal Team'],
      category: 'AI Ethics',
      image: '⚖️',
      recordingUrl: '/webinars/ai-ethics-governance',
      slidesUrl: '/webinars/ai-ethics-governance/slides',
      transcriptUrl: '/webinars/ai-ethics-governance/transcript'
    },
    {
      title: 'Space Technology and AI: The Next Frontier of Innovation',
      description: 'Exploring how AI is revolutionizing space exploration, resource mining, and autonomous space systems.',
      date: '2025-01-15',
      duration: '90 minutes',
      speakers: ['Space Technology Team', 'AI Research Team'],
      category: 'Space Technology',
      image: '🚀',
      recordingUrl: '/webinars/space-technology-ai',
      slidesUrl: '/webinars/space-technology-ai/slides',
      transcriptUrl: '/webinars/space-technology-ai/transcript'
    },
    {
      title: 'Quantum Cybersecurity: Protecting Against Future Threats',
      description: 'Understanding quantum-resistant encryption and preparing for the quantum computing era.',
      date: '2025-01-10',
      duration: '70 minutes',
      speakers: ['Quantum Security Team', 'Cybersecurity Team'],
      category: 'Quantum Security',
      image: '🔐',
      recordingUrl: '/webinars/quantum-cybersecurity',
      slidesUrl: '/webinars/quantum-cybersecurity/slides',
      transcriptUrl: '/webinars/quantum-cybersecurity/transcript'
    },
    {
      title: 'AI-Powered Financial Risk Management',
      description: 'How artificial intelligence is revolutionizing financial risk assessment and creating more accurate prediction models.',
      date: '2025-01-05',
      duration: '65 minutes',
      speakers: ['Financial AI Team', 'Risk Management Team'],
      category: 'Financial AI',
      image: '💰',
      recordingUrl: '/webinars/ai-financial-risk',
      slidesUrl: '/webinars/ai-financial-risk/slides',
      transcriptUrl: '/webinars/ai-financial-risk/transcript'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 8, icon: '🧠' },
    { name: 'Quantum Technology', count: 6, icon: '⚛️' },
    { name: 'Autonomous Systems', count: 5, icon: '🤖' },
    { name: 'Space Technology', count: 4, icon: '🚀' },
    { name: 'AI Ethics', count: 3, icon: '⚖️' },
    { name: 'Financial AI', count: 4, icon: '💰' },
    { name: 'Cybersecurity', count: 5, icon: '🔐' },
    { name: 'Enterprise Solutions', count: 7, icon: '🏢' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Educational Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Join our expert-led webinars to learn about the latest developments in AI consciousness, 
            quantum computing, and autonomous systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#upcoming"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Upcoming Sessions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Request Custom Webinar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Upcoming Webinars
          </motion.h2>
          
          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  webinar.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border-cyan-500/30' 
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/50'
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-6xl mb-4 text-center">
                      {webinar.image}
                    </div>
                    <div className="text-center lg:text-left">
                      {webinar.featured && (
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 mb-3">
                          Featured Event
                        </span>
                      )}
                      <h3 className="text-2xl font-bold mb-2">
                        {webinar.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-2">
                        {webinar.category}
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(webinar.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {webinar.time} • {webinar.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {webinar.speakers.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={webinar.registrationUrl}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <Play className="w-5 h-5" />
                        Register Now
                      </Link>
                      <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Explore by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/webinars/category/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10 text-center">
                    <div className="text-4xl mb-3">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.count} webinars
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Past Webinars
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={webinar.recordingUrl}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="text-4xl mb-4 text-center">
                      {webinar.image}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(webinar.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Speakers</h4>
                      <p className="text-gray-300 text-sm">
                        {webinar.speakers.join(', ')}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-400">
                        <a 
                          href={webinar.slidesUrl}
                          className="hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4" />
                        </a>
                        <a 
                          href={webinar.transcriptUrl}
                          className="hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FileText className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-sm">Watch Recording</span>
                        <Play className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our webinars to learn from industry experts and stay updated on the latest 
              developments in AI consciousness, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Webinar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/resources"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Browse Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}