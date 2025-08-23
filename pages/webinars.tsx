import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Calendar, Clock, Users, Video, 
  BookOpen, ArrowRight, ExternalLink, Download,
  Star, TrendingUp, Brain, Shield, Rocket
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Webinars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'on-demand'>('upcoming');

  const upcomingWebinars = [
    {
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      description: 'Discover how AI is transforming healthcare delivery, from diagnosis to treatment planning.',
      date: 'February 15, 2025',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez'],
      category: 'Healthcare AI',
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      topics: ['Medical AI', 'Patient Care', 'Diagnostic Tools', 'Treatment Planning']
    },
    {
      title: 'Quantum Computing: Business Applications 2025',
      description: 'Learn about practical quantum computing applications for enterprise businesses.',
      date: 'February 22, 2025',
      time: '1:00 PM EST',
      duration: '90 minutes',
      speakers: ['Prof. Emily Watson', 'Alex Thompson'],
      category: 'Quantum Computing',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      topics: ['Business Applications', 'ROI Analysis', 'Implementation Strategy', 'Case Studies']
    },
    {
      title: 'Cybersecurity Trends: AI-Powered Threat Detection',
      description: 'Explore the latest cybersecurity threats and AI-powered defense strategies.',
      date: 'March 1, 2025',
      time: '3:00 PM EST',
      duration: '75 minutes',
      speakers: ['David Kim', 'Lisa Martinez'],
      category: 'Cybersecurity',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      topics: ['Threat Detection', 'AI Security', 'Incident Response', 'Best Practices']
    }
  ];

  const onDemandWebinars = [
    {
      title: 'Getting Started with AI: A Business Guide',
      description: 'Essential guide for business leaders looking to implement AI solutions.',
      duration: '45 minutes',
      views: '2,847',
      rating: 4.8,
      category: 'AI Fundamentals',
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      topics: ['AI Strategy', 'Business Case', 'Implementation', 'ROI']
    },
    {
      title: 'Cloud Migration: Best Practices for 2025',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud.',
      duration: '60 minutes',
      views: '1,923',
      rating: 4.9,
      category: 'Cloud Computing',
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      topics: ['Migration Strategy', 'Cost Optimization', 'Security', 'Performance']
    },
    {
      title: 'Data Privacy Compliance: GDPR & Beyond',
      description: 'Navigate the complex world of data privacy regulations and compliance.',
      duration: '50 minutes',
      views: '3,156',
      rating: 4.7,
      category: 'Compliance',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      topics: ['GDPR', 'CCPA', 'Data Governance', 'Privacy by Design']
    },
    {
      title: 'Space Technology: Commercial Applications',
      description: 'Exploring the business opportunities in commercial space technology.',
      duration: '55 minutes',
      views: '1,234',
      rating: 4.6,
      category: 'Space Technology',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      topics: ['Satellite Technology', 'Investment Opportunities', 'Regulatory Landscape', 'Market Analysis']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Video className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Webinars
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our expert-led webinars to gain insights into the latest 
              technology trends and business solutions.
            </p>
            <p className="text-lg text-gray-400">
              Live sessions and on-demand content covering AI, quantum computing, 
              cybersecurity, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-900 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-cyan-500 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Upcoming Webinars
              </button>
              <button
                onClick={() => setActiveTab('on-demand')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'on-demand'
                    ? 'bg-cyan-500 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Play className="w-4 h-4 inline mr-2" />
                On-Demand Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {activeTab === 'upcoming' && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upcoming Live Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Register for our upcoming live sessions and interact with industry experts 
                in real-time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {webinar.icon}
                      <span className="ml-2 text-sm text-cyan-400 font-medium">{webinar.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{webinar.date}</div>
                      <div className="text-xs text-gray-400">{webinar.time}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{webinar.description}</p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Key Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {webinar.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {webinar.speakers.join(', ')}
                    </span>
                  </div>

                  <Button 
                    href={`/contact?subject=Webinar Registration: ${encodeURIComponent(webinar.title)}`}
                    variant="quantum" 
                    size="sm" 
                    className="w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* On-Demand Webinars */}
      {activeTab === 'on-demand' && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                On-Demand Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Access our library of recorded webinars anytime, anywhere. 
                Learn at your own pace with expert insights and practical guidance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onDemandWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {webinar.icon}
                      <span className="ml-2 text-sm text-cyan-400 font-medium">{webinar.category}</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{webinar.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{webinar.description}</p>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Key Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {webinar.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {webinar.views} views
                    </span>
                  </div>

                  <Button 
                    href={`/contact?subject=Webinar Access: ${encodeURIComponent(webinar.title)}`}
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Custom Webinar
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Need a webinar on a specific topic? Our experts can create 
              custom content tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg" className="text-lg px-8 py-4">
                Request Custom Webinar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/resources" variant="outline" size="lg" className="text-lg px-8 py-4">
                View All Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Our Webinars?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact our team for webinar schedules, custom content, or technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Webinars;