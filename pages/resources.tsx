import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Award, 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  Target, 
  Zap,
  ArrowRight,
  Star,
  Clock,
  Download,
  ExternalLink,
  ChevronRight,
  Search,
  Filter,
  Calendar,
  Tag,
  Play,
  Headphones,
  GraduationCap,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation & Guides',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive technical documentation and implementation guides',
      resources: [
        { title: 'API Reference', description: 'Complete API documentation for all services', type: 'Documentation', time: 'Reference' },
        { title: 'Getting Started Guide', description: 'Quick start tutorials for new users', type: 'Tutorial', time: '15 min' },
        { title: 'Best Practices', description: 'Recommended development practices', type: 'Guide', time: '30 min' },
        { title: 'Integration Examples', description: 'Code samples and integration patterns', type: 'Code', time: '45 min' }
      ]
    },
    {
      title: 'Webinars & Training',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      description: 'Live and recorded educational sessions with industry experts',
      resources: [
        { title: 'AI Fundamentals', description: 'Introduction to AI and machine learning', type: 'Webinar', time: '60 min' },
        { title: 'Quantum Computing Basics', description: 'Understanding quantum technology', type: 'Training', time: '90 min' },
        { title: 'Space Technology Overview', description: 'Exploring space-based computing', type: 'Webinar', time: '75 min' },
        { title: 'Cybersecurity Best Practices', description: 'Security implementation strategies', type: 'Training', time: '120 min' }
      ]
    },
    {
      title: 'Case Studies & Success Stories',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      description: 'Real-world examples of successful implementations',
      resources: [
        { title: 'Healthcare AI Transformation', description: 'AI-powered diagnostic system implementation', type: 'Case Study', time: '10 min' },
        { title: 'Financial Services Innovation', description: 'Quantum computing in risk management', type: 'Case Study', time: '12 min' },
        { title: 'Manufacturing IoT Success', description: 'Smart factory transformation story', type: 'Case Study', time: '8 min' },
        { title: 'Cybersecurity Implementation', description: 'Zero trust architecture deployment', type: 'Case Study', time: '15 min' }
      ]
    },
    {
      title: 'Research & Whitepapers',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      description: 'In-depth research and technical analysis',
      resources: [
        { title: 'AI Consciousness Evolution', description: 'The future of artificial consciousness', type: 'Whitepaper', time: '25 min' },
        { title: 'Quantum Internet Security', description: 'Next-generation quantum security', type: 'Research', time: '20 min' },
        { title: 'Space Computing Architecture', description: 'Orbital computing infrastructure', type: 'Whitepaper', time: '30 min' },
        { title: 'Edge Computing Trends', description: 'Future of distributed computing', type: 'Research', time: '18 min' }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Quantum Computing Summit',
      date: 'March 15, 2025',
      time: '10:00 AM - 4:00 PM EST',
      type: 'Conference',
      description: 'Join industry leaders for a deep dive into AI and quantum computing innovations',
      speakers: ['Dr. Sarah Chen', 'Dr. Elena Petrov', 'Marcus Rodriguez'],
      registration: 'Open',
      featured: true
    },
    {
      title: 'Space Technology Workshop',
      date: 'March 22, 2025',
      time: '2:00 PM - 5:00 PM EST',
      type: 'Workshop',
      description: 'Hands-on workshop on space-based computing and satellite technology',
      speakers: ['Dr. Elena Petrov', 'Alex Thompson'],
      registration: 'Limited Spots',
      featured: false
    },
    {
      title: 'Cybersecurity Masterclass',
      date: 'March 29, 2025',
      time: '1:00 PM - 6:00 PM EST',
      type: 'Masterclass',
      description: 'Advanced cybersecurity strategies and zero trust implementation',
      speakers: ['James Washington', 'Dr. Priya Patel'],
      registration: 'Open',
      featured: false
    }
  ];

  const learningPaths = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Master artificial intelligence and machine learning technologies',
      modules: 8,
      duration: '16 hours',
      difficulty: 'Intermediate',
      topics: ['Neural Networks', 'Deep Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      description: 'Learn quantum computing fundamentals and applications',
      modules: 6,
      duration: '12 hours',
      difficulty: 'Advanced',
      topics: ['Quantum Mechanics', 'Quantum Algorithms', 'Quantum Cryptography', 'Quantum Applications']
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      description: 'Explore space-based computing and satellite technology',
      modules: 5,
      duration: '10 hours',
      difficulty: 'Advanced',
      topics: ['Satellite Systems', 'Orbital Computing', 'Space Communications', 'Space Security']
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Master modern cybersecurity and threat protection',
      modules: 7,
      duration: '14 hours',
      difficulty: 'Intermediate',
      topics: ['Zero Trust', 'Threat Detection', 'Incident Response', 'Compliance']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Resources & Learning - Zion Tech Group"
        description="Access comprehensive resources, training materials, webinars, and learning paths to master Zion Tech Group's cutting-edge technologies."
        keywords={["resources", "learning", "training", "webinars", "case studies", "whitepapers", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-6">
                Resources & Learning
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Access comprehensive resources, training materials, and learning paths to master 
                Zion Tech Group's cutting-edge technologies and drive innovation in your organization.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by type and technology area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Resources List */}
                    <div className="space-y-4">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{resource.title}</h4>
                            <p className="text-sm text-gray-400">{resource.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                                {resource.type}
                              </span>
                              <span className="flex items-center text-xs text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                {resource.time}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our live events, webinars, and workshops to learn from industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 ${
                    event.featured ? 'ring-2 ring-blue-400/30' : ''
                  }`}>
                    {event.featured && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Featured Event
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        event.type === 'Conference' ? 'bg-purple-500/20 text-purple-400' :
                        event.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                        Speakers
                      </h4>
                      <div className="space-y-1">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <p key={speakerIndex} className="text-gray-300 text-sm">
                            {speaker}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        event.registration === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {event.registration}
                      </span>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:underline"
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Structured learning paths to master specific technologies and advance your skills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${path.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <path.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {path.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    
                    {/* Path Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{path.modules}</div>
                        <div className="text-xs text-gray-400">Modules</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{path.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          path.difficulty === 'Beginner' ? 'text-green-400' :
                          path.difficulty === 'Intermediate' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {path.difficulty}
                        </div>
                        <div className="text-xs text-gray-400">Level</div>
                      </div>
                    </div>
                    
                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Topics Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {path.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Start Learning Path
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Access our comprehensive resources and start mastering cutting-edge technologies today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Browse Documentation
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Get Personalized Training
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;