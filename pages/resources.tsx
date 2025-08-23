import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ArrowRight,
  Search,
  Filter,
  Calendar,
  User,
  Tag,
  Play,
  Headphones,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Rocket,
  Zap,
  Globe,
  Users
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      name: "Documentation",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      description: "Technical documentation and API references",
      count: 45,
      items: [
        { name: "API Reference", href: "/docs/api", type: "Documentation", size: "2.3 MB" },
        { name: "Integration Guide", href: "/docs/integration", type: "Guide", size: "1.8 MB" },
        { name: "SDK Documentation", href: "/docs/sdk", type: "Documentation", size: "3.1 MB" },
        { name: "Architecture Overview", href: "/docs/architecture", type: "Documentation", size: "4.2 MB" }
      ]
    },
    {
      name: "Guides & Tutorials",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      description: "Step-by-step guides and tutorials",
      count: 32,
      items: [
        { name: "Getting Started Guide", href: "/guides/getting-started", type: "Tutorial", size: "1.5 MB" },
        { name: "Best Practices", href: "/guides/best-practices", type: "Guide", size: "2.1 MB" },
        { name: "Troubleshooting", href: "/guides/troubleshooting", type: "Guide", size: "1.9 MB" },
        { name: "Advanced Features", href: "/guides/advanced", type: "Tutorial", size: "2.7 MB" }
      ]
    },
    {
      name: "Video Content",
      icon: Video,
      color: "from-emerald-500 to-teal-500",
      description: "Video tutorials and webinars",
      count: 28,
      items: [
        { name: "Platform Overview", href: "/videos/overview", type: "Video", duration: "15 min" },
        { name: "Setup Tutorial", href: "/videos/setup", type: "Video", duration: "25 min" },
        { name: "Advanced Features", href: "/videos/advanced", type: "Video", duration: "45 min" },
        { name: "Case Study Walkthrough", href: "/videos/case-study", type: "Video", duration: "30 min" }
      ]
    },
    {
      name: "Webinars",
      icon: Play,
      color: "from-orange-500 to-red-500",
      description: "Live and recorded webinars",
      count: 18,
      items: [
        { name: "AI in Business", href: "/webinars/ai-business", type: "Webinar", duration: "60 min" },
        { name: "Quantum Computing", href: "/webinars/quantum", type: "Webinar", duration: "90 min" },
        { name: "Space Technology", href: "/webinars/space-tech", type: "Webinar", duration: "75 min" },
        { name: "Future of Automation", href: "/webinars/automation", type: "Webinar", duration: "80 min" }
      ]
    },
    {
      name: "White Papers",
      icon: Download,
      color: "from-indigo-500 to-purple-500",
      description: "Research papers and technical insights",
      count: 22,
      items: [
        { name: "AI Consciousness", href: "/whitepapers/ai-consciousness", type: "White Paper", size: "5.2 MB" },
        { name: "Quantum Security", href: "/whitepapers/quantum-security", type: "White Paper", size: "4.8 MB" },
        { name: "Space Mining", href: "/whitepapers/space-mining", type: "White Paper", size: "6.1 MB" },
        { name: "Future of Work", href: "/whitepapers/future-work", type: "White Paper", size: "3.9 MB" }
      ]
    },
    {
      name: "Podcasts",
      icon: Headphones,
      color: "from-yellow-500 to-orange-500",
      description: "Audio content and discussions",
      count: 15,
      items: [
        { name: "Tech Trends", href: "/podcasts/tech-trends", type: "Podcast", duration: "45 min" },
        { name: "Innovation Stories", href: "/podcasts/innovation", type: "Podcast", duration: "55 min" },
        { name: "Expert Interviews", href: "/podcasts/interviews", type: "Podcast", duration: "40 min" },
        { name: "Industry Insights", href: "/podcasts/insights", type: "Podcast", duration: "50 min" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Complete Platform Documentation",
      description: "Comprehensive documentation covering all aspects of our AI, quantum, and space technology platforms.",
      category: "Documentation",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      href: "/docs/platform",
      featured: true
    },
    {
      title: "AI Implementation Guide",
      description: "Step-by-step guide to implementing AI solutions in your business with real-world examples.",
      category: "Guide",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      href: "/guides/ai-implementation",
      featured: true
    },
    {
      title: "Quantum Computing Webinar Series",
      description: "Learn about the future of quantum computing and its applications in business and research.",
      category: "Webinar",
      icon: Video,
      color: "from-emerald-500 to-teal-500",
      href: "/webinars/quantum-series",
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: "AI in Healthcare Summit",
      date: "2025-02-15",
      time: "10:00 AM EST",
      type: "Virtual Summit",
      description: "Exploring the latest AI applications in healthcare and patient care.",
      registration: "/events/ai-healthcare-summit"
    },
    {
      title: "Quantum Security Workshop",
      date: "2025-02-22",
      time: "2:00 PM EST",
      type: "Workshop",
      description: "Hands-on workshop on implementing quantum-resistant security solutions.",
      registration: "/events/quantum-security-workshop"
    },
    {
      title: "Space Technology Conference",
      date: "2025-03-01",
      time: "9:00 AM EST",
      type: "Conference",
      description: "Annual conference on space exploration and resource intelligence.",
      registration: "/events/space-tech-conference"
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
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Resources & Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Access comprehensive documentation, guides, webinars, and educational content 
                to master our revolutionary technology platforms.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, guides, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your learning journey with our most popular and comprehensive resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={resource.href}>
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${resource.color} flex items-center justify-center mx-auto mt-8 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="p-6 text-center">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30 mb-4">
                          {resource.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">Access Resource</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by type and topic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="mb-4">
                      <span className="text-cyan-400 font-medium">{category.count} resources</span>
                    </div>
                    
                    {/* Sample Items */}
                    <div className="space-y-2 mb-4">
                      {category.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300 truncate">{item.name}</span>
                          <span className="text-gray-500 text-xs">
                            {item.type === 'Video' || item.type === 'Webinar' || item.type === 'Podcast' 
                              ? item.duration 
                              : item.size}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">View All</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our live events, webinars, and workshops to learn directly from our experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-400">{event.type}</div>
                      <div className="text-xs text-gray-400">{event.date} at {event.time}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <Link
                    href={event.registration}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fast access to our most frequently used resources and tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "API Playground", href: "/api-playground", icon: Code, color: "from-blue-500 to-cyan-500" },
                { name: "Status Page", href: "/status", icon: Shield, color: "from-green-500 to-emerald-500" },
                { name: "Support Center", href: "/support", icon: Headphones, color: "from-purple-500 to-pink-500" },
                { name: "Community Forum", href: "/community", icon: Users, color: "from-orange-500 to-red-500" },
                { name: "GitHub Repos", href: "https://github.com/Zion-Holdings", icon: Code, color: "from-gray-500 to-slate-500", external: true },
                { name: "Developer Blog", href: "/blog", icon: FileText, color: "from-indigo-500 to-purple-500" },
                { name: "Training Portal", href: "/training", icon: BookOpen, color: "from-yellow-500 to-orange-500" },
                { name: "Contact Support", href: "/contact", icon: Globe, color: "from-cyan-500 to-blue-500" }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </h3>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Visit</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </h3>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Access</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified about new resources, upcoming events, and the latest technology insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;