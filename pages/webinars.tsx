import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight,
  Star,
  Search,
  Filter,
  Tag,
  Globe,
  Video,
  Award,
  ExternalLink,
  BookOpen,
  Zap
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const WebinarsPage: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'AI Consciousness: The Next Frontier',
      description: 'Explore the latest breakthroughs in AI consciousness technology and how it\'s revolutionizing business applications.',
      date: 'March 20, 2025',
      time: '2:00 PM - 3:30 PM PST',
      duration: '90 min',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Scientist',
      attendees: '500+',
      price: 'Free',
      featured: true,
      category: 'AI & Machine Learning',
      href: '/webinars/ai-consciousness-next-frontier'
    },
    {
      title: 'Quantum Computing for Enterprise',
      description: 'Learn how quantum computing is solving complex business problems and what it means for your organization.',
      date: 'March 28, 2025',
      time: '1:00 PM - 2:30 PM PST',
      duration: '90 min',
      speaker: 'Prof. Michael Rodriguez',
      speakerTitle: 'Quantum Research Director',
      attendees: '300+',
      price: 'Free',
      featured: false,
      category: 'Quantum Computing',
      href: '/webinars/quantum-computing-enterprise'
    },
    {
      title: 'Cybersecurity in the AI Era',
      description: 'Discover how AI is transforming cybersecurity and protecting organizations from emerging threats.',
      date: 'April 5, 2025',
      time: '11:00 AM - 12:30 PM PST',
      duration: '90 min',
      speaker: 'Alex Johnson',
      speakerTitle: 'Security Expert',
      attendees: '400+',
      price: 'Free',
      featured: false,
      category: 'Cybersecurity',
      href: '/webinars/cybersecurity-ai-era'
    }
  ];

  const pastWebinars = [
    {
      title: 'Getting Started with AI Solutions',
      description: 'A comprehensive introduction to implementing AI solutions in your business.',
      date: 'February 15, 2025',
      duration: '75 min',
      speaker: 'Dr. Lisa Park',
      speakerTitle: 'AI Solutions Architect',
      attendees: '600+',
      category: 'AI & Machine Learning',
      recording: true,
      rating: 4.9,
      views: '2.5k',
      href: '/webinars/getting-started-ai-solutions'
    },
    {
      title: 'Space Technology Applications',
      description: 'How space technology innovations are transforming industries on Earth.',
      date: 'January 30, 2025',
      duration: '60 min',
      speaker: 'Dr. Emily Watson',
      speakerTitle: 'Space Technology Lead',
      attendees: '350+',
      category: 'Space Technology',
      recording: true,
      rating: 4.8,
      views: '1.8k',
      href: '/webinars/space-technology-applications'
    },
    {
      title: 'Cloud Infrastructure Best Practices',
      description: 'Learn the best practices for building scalable and secure cloud infrastructure.',
      date: 'January 15, 2025',
      duration: '90 min',
      speaker: 'James Thompson',
      speakerTitle: 'Cloud Architect',
      attendees: '450+',
      category: 'Cloud Infrastructure',
      recording: true,
      rating: 4.7,
      views: '2.1k',
      href: '/webinars/cloud-infrastructure-best-practices'
    }
  ];

  const webinarCategories = [
    { name: 'All Webinars', count: 6, active: true },
    { name: 'AI & Machine Learning', count: 2, active: false },
    { name: 'Quantum Computing', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Space Technology', count: 1, active: false },
    { name: 'Cloud Infrastructure', count: 1, active: false }
  ];

  const stats = [
    { label: 'Total Webinars', value: '100+', icon: <Play className="w-6 h-6" /> },
    { label: 'Global Attendees', value: '25k+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '50+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Average Rating', value: '4.8/5', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Webinars - Zion Tech Group | Live & On-Demand Technology Webinars" 
          description="Join Zion Tech Group webinars to learn about AI consciousness, quantum computing, cybersecurity, and revolutionary technology solutions. Live sessions and recordings available." 
          canonical="https://ziontechgroup.com/webinars/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technology Webinars
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join our live webinars and access on-demand recordings to stay ahead of the technology curve. Learn from industry experts about AI consciousness, quantum computing, and more.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars by title, speaker, or topic..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                {webinarCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                      category.active
                        ? 'bg-cyan-500 text-white border-cyan-500'
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Register for these upcoming live sessions and get your questions answered by our technology experts.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    webinar.featured ? 'ring-2 ring-cyan-500/30' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  {webinar.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Featured Webinar
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{webinar.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{webinar.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{webinar.time} ({webinar.duration})</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="text-sm text-gray-400 mb-1">Speaker</div>
                    <div className="text-white font-semibold">{webinar.speaker}</div>
                    <div className="text-cyan-400 text-sm">{webinar.speakerTitle}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{webinar.price}</div>
                    <a
                      href={webinar.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Register Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Past Webinars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access recordings of our previous webinars and learn at your own pace. All recordings include Q&A sessions and additional resources.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {webinar.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-white">{webinar.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.attendees} attended
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Speaker</div>
                    <div className="text-white font-medium">{webinar.speaker}</div>
                    <div className="text-cyan-400 text-xs">{webinar.speakerTitle}</div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-green-400 text-sm">
                      <Video className="w-4 h-4 mr-1" />
                      Recording Available
                    </div>
                    <div className="text-sm text-gray-400">
                      {webinar.views} views
                    </div>
                  </div>
                  
                  <a
                    href={webinar.href}
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Never Miss a Webinar</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and get notified about upcoming webinars, early access to registrations, and exclusive content from our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default WebinarsPage;