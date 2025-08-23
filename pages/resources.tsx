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
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Getting Started Guide',
          description: 'Complete setup and configuration guide',
          type: 'Guide',
          difficulty: 'Beginner',
          time: '15 min',
          link: '/docs/getting-started'
        },
        {
          title: 'API Reference',
          description: 'Complete API documentation with examples',
          type: 'Reference',
          difficulty: 'Intermediate',
          time: '30 min',
          link: '/docs/api'
        },
        {
          title: 'SDK Documentation',
          description: 'Client libraries and SDK guides',
          type: 'Reference',
          difficulty: 'Intermediate',
          time: '20 min',
          link: '/docs/sdks'
        }
      ]
    },
    {
      title: 'Blog & Insights',
      description: 'Latest articles, insights, and industry trends',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI Automation Trends 2025',
          description: 'Latest developments in AI automation',
          type: 'Article',
          difficulty: 'Intermediate',
          time: '8 min',
          link: '/blog/ai-automation-trends-2025'
        },
        {
          title: 'Future of Work & Automation',
          description: 'How automation is reshaping the workplace',
          type: 'Article',
          difficulty: 'Beginner',
          time: '12 min',
          link: '/blog/future-of-work'
        },
        {
          title: 'Performance Optimization Guide',
          description: 'Best practices for system optimization',
          type: 'Guide',
          difficulty: 'Advanced',
          time: '25 min',
          link: '/blog/performance-optimization'
        }
      ]
    },
    {
      title: 'Webinars & Events',
      description: 'Live and recorded educational sessions',
      icon: Video,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'AI & Quantum Computing Summit',
          description: 'Join industry leaders for insights',
          type: 'Webinar',
          difficulty: 'All Levels',
          time: '2 hours',
          link: '/webinars/ai-quantum-summit'
        },
        {
          title: 'Space Technology Workshop',
          description: 'Hands-on workshop on space computing',
          type: 'Workshop',
          difficulty: 'Intermediate',
          time: '4 hours',
          link: '/webinars/space-tech-workshop'
        },
        {
          title: 'Cybersecurity Best Practices',
          description: 'Security strategies for modern systems',
          type: 'Webinar',
          difficulty: 'Intermediate',
          time: '1.5 hours',
          link: '/webinars/cybersecurity-best-practices'
        }
      ]
    },
    {
      title: 'Case Studies',
      description: 'Real-world implementations and success stories',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Enterprise AI Transformation',
          description: 'How a Fortune 500 company scaled AI',
          type: 'Case Study',
          difficulty: 'Advanced',
          time: '20 min',
          link: '/case-studies/enterprise-ai-transformation'
        },
        {
          title: 'Quantum Computing in Finance',
          description: 'Risk assessment optimization case study',
          type: 'Case Study',
          difficulty: 'Advanced',
          time: '18 min',
          link: '/case-studies/quantum-finance'
        },
        {
          title: 'Space Data Analytics',
          description: 'Satellite data processing implementation',
          type: 'Case Study',
          difficulty: 'Intermediate',
          time: '15 min',
          link: '/case-studies/space-data-analytics'
        }
      ]
    },
    {
      title: 'Research & Whitepapers',
      description: 'In-depth research and technical papers',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      items: [
        {
          title: 'AI Consciousness Evolution',
          description: 'Research on artificial consciousness',
          type: 'Whitepaper',
          difficulty: 'Advanced',
          time: '45 min',
          link: '/research/ai-consciousness-evolution'
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Next-generation neural computing',
          type: 'Research Paper',
          difficulty: 'Advanced',
          time: '60 min',
          link: '/research/quantum-neural-networks'
        },
        {
          title: 'Space Computing Architecture',
          description: 'Orbital computing infrastructure design',
          type: 'Technical Paper',
          difficulty: 'Advanced',
          time: '40 min',
          link: '/research/space-computing-architecture'
        }
      ]
    },
    {
      title: 'Learning Paths',
      description: 'Structured learning journeys for different skill levels',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      items: [
        {
          title: 'AI Developer Path',
          description: 'Complete path from beginner to AI expert',
          type: 'Learning Path',
          difficulty: 'Progressive',
          time: '40 hours',
          link: '/learning-paths/ai-developer'
        },
        {
          title: 'Quantum Computing Fundamentals',
          description: 'Master quantum computing basics',
          type: 'Learning Path',
          difficulty: 'Intermediate',
          time: '25 hours',
          link: '/learning-paths/quantum-fundamentals'
        },
        {
          title: 'Space Technology Specialist',
          description: 'Become a space tech expert',
          type: 'Learning Path',
          difficulty: 'Advanced',
          time: '35 hours',
          link: '/learning-paths/space-technology'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Automation Conference 2025',
      date: 'March 15-17, 2025',
      type: 'Conference',
      location: 'San Francisco, CA',
      description: 'Join us for the biggest AI and automation event of the year',
      registration: 'Open',
      link: '/events/ai-automation-conference-2025'
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'April 5, 2025',
      type: 'Workshop',
      location: 'Virtual',
      description: 'Hands-on quantum computing workshop for developers',
      registration: 'Open',
      link: '/events/quantum-computing-workshop'
    },
    {
      title: 'Space Technology Summit',
      date: 'May 20-22, 2025',
      type: 'Summit',
      location: 'Houston, TX',
      description: 'Explore the future of space-based computing',
      registration: 'Coming Soon',
      link: '/events/space-technology-summit'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete AI Development Guide',
      description: 'Comprehensive guide covering AI development from basics to advanced implementation',
      type: 'Guide',
      difficulty: 'All Levels',
      time: '6 hours',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Development'],
      link: '/resources/ai-development-guide'
    },
    {
      title: 'Quantum Computing for Beginners',
      description: 'Perfect introduction to quantum computing concepts and applications',
      type: 'Course',
      difficulty: 'Beginner',
      time: '8 hours',
      featured: true,
      tags: ['Quantum', 'Computing', 'Basics'],
      link: '/resources/quantum-computing-beginners'
    },
    {
      title: 'Enterprise Security Framework',
      description: 'Comprehensive security framework for enterprise applications',
      type: 'Framework',
      difficulty: 'Advanced',
      time: '4 hours',
      featured: true,
      tags: ['Security', 'Enterprise', 'Framework'],
      link: '/resources/enterprise-security-framework'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Resources & Learning - Zion Tech Group"
        description="Access comprehensive resources, learning materials, webinars, case studies, and research papers to accelerate your technology journey with Zion Tech Group."
        keywords={["resources", "learning", "webinars", "case studies", "research", "documentation", "Zion Tech Group"]}
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
                Access comprehensive resources, learning materials, and insights to accelerate 
                your technology journey with Zion Tech Group.
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

        {/* Featured Resources */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start with our most popular and comprehensive learning materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {resource.featured && (
                      <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          resource.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          resource.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          resource.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {resource.difficulty}
                        </span>
                        <span className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {resource.time}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Access Resource
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category and type.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
                    
                    {/* Resource List */}
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {item.difficulty}
                              </span>
                              <span className="flex items-center text-xs text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                {item.time}
                              </span>
                              <span className="text-xs text-gray-500">{item.type}</span>
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
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join us for live events, workshops, and conferences to expand your knowledge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        event.registration === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {event.registration}
                      </span>
                      <span className="text-xs text-gray-500">{event.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    
                    <a
                      href={event.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
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
                Begin your technology journey with our comprehensive resources and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Documentation
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Get Support
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