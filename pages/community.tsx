import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Calendar, Github, 
  Globe, BookOpen, Video, Award, Star,
  ArrowRight, Search, Filter, Clock, Tag,
  Download, ExternalLink, Terminal, Code,
  Play, ChevronRight, ChevronDown, Heart,
  Share2, ThumbsUp, MessageSquare, UserPlus,
  Brain, Rocket, Building
} from 'lucide-react';

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Discussion Forums',
      description: 'Join conversations about AI consciousness, quantum computing, and space technology',
      count: '2.5k+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: 'Open Source Projects',
      description: 'Contribute to our open source initiatives and collaborate with developers worldwide',
      count: '150+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Events & Meetups',
      description: 'Attend virtual and in-person events, workshops, and networking sessions',
      count: '25+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Knowledge Sharing',
      description: 'Share your expertise and learn from other community members',
      count: '500+',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Consciousness Workshop 2025',
      date: '2025-02-15',
      time: '10:00 AM EST',
      type: 'Virtual Workshop',
      description: 'Hands-on workshop on implementing AI consciousness in enterprise applications',
      attendees: 150,
      speakers: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez'],
      tags: ['AI Consciousness', 'Workshop', 'Enterprise'],
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Meetup',
      date: '2025-02-20',
      time: '6:00 PM EST',
      type: 'In-Person',
      description: 'Local meetup for quantum computing enthusiasts and professionals',
      attendees: 45,
      speakers: ['Dr. James Wilson', 'Alice Thompson'],
      tags: ['Quantum Computing', 'Meetup', 'Networking'],
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Technology Summit',
      date: '2025-03-01',
      time: '9:00 AM EST',
      type: 'Conference',
      description: 'Annual summit on space exploration technology and resource intelligence',
      attendees: 300,
      speakers: ['Dr. Elena Petrova', 'Commander David Kim'],
      tags: ['Space Technology', 'Conference', 'Innovation'],
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Developer Hackathon',
      date: '2025-03-15',
      time: '48 Hours',
      type: 'Hackathon',
      description: 'Build innovative solutions using our AI consciousness and quantum computing APIs',
      attendees: 200,
      speakers: ['Tech Team', 'Community Leaders'],
      tags: ['Hackathon', 'Development', 'Innovation'],
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const forumCategories = [
    {
      title: 'AI Consciousness',
      description: 'Discussions about AI consciousness, emotional intelligence, and self-aware systems',
      topics: 1250,
      posts: 8900,
      members: 3400,
      color: 'from-purple-500 to-pink-500',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, quantum hardware, and quantum-classical hybrid systems',
      topics: 890,
      posts: 5600,
      members: 2100,
      color: 'from-blue-500 to-cyan-500',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Space Technology',
      description: 'Space exploration, resource intelligence, and celestial body analysis',
      topics: 650,
      posts: 3200,
      members: 1800,
      color: 'from-green-500 to-emerald-500',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Enterprise Solutions',
      description: 'Enterprise deployment, integration, and best practices for our services',
      topics: 450,
      posts: 2800,
      members: 1200,
      color: 'from-yellow-500 to-orange-500',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'Development & APIs',
      description: 'API integration, SDK usage, and development best practices',
      topics: 780,
      posts: 4200,
      members: 2600,
      color: 'from-indigo-500 to-purple-500',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'General Discussion',
      description: 'General community discussions, announcements, and off-topic conversations',
      topics: 320,
      posts: 1800,
      members: 1500,
      color: 'from-red-500 to-pink-500',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const openSourceProjects = [
    {
      name: 'AI Consciousness Framework',
      description: 'Open source framework for implementing AI consciousness in applications',
      language: 'Python',
      stars: 1250,
      forks: 320,
      contributors: 45,
      lastCommit: '2 days ago',
      tags: ['AI Consciousness', 'Framework', 'Python'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing Simulator',
      description: 'Local quantum computing simulator for development and testing',
      language: 'JavaScript',
      stars: 890,
      forks: 180,
      contributors: 28,
      lastCommit: '1 week ago',
      tags: ['Quantum Computing', 'Simulator', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Space Data Analyzer',
      description: 'Tools for analyzing space exploration data and resource mapping',
      language: 'Python',
      stars: 650,
      forks: 120,
      contributors: 22,
      lastCommit: '3 days ago',
      tags: ['Space Technology', 'Data Analysis', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Autonomous Systems Toolkit',
      description: 'Collection of tools for building and managing autonomous IT infrastructure',
      language: 'Go',
      stars: 420,
      forks: 95,
      contributors: 18,
      lastCommit: '5 days ago',
      tags: ['Autonomous Systems', 'Toolkit', 'Go'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const communityStats = [
    { label: 'Total Members', value: '15,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Active Discussions', value: '2,500+', icon: <MessageCircle className="w-6 h-6" /> },
    { label: 'Open Source Projects', value: '150+', icon: <Github className="w-6 h-6" /> },
    { label: 'Events This Year', value: '25+', icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our global community of innovators, developers, and technology enthusiasts 
              building the future with AI consciousness, quantum computing, and space technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#forums"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Join Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#events"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Community Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes our community unique and engaging
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400">{feature.count}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming events, workshops, and meetups
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center`}>
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {event.type}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                      <span>{event.attendees} attendees</span>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Speakers:</div>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <span
                            key={speakerIndex}
                            className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Register for Event
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section id="forums" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Discussion Forums
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join conversations in our specialized discussion forums
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Topics:</span>
                      <span className="text-cyan-400">{category.topics.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Posts:</span>
                      <span className="text-cyan-400">{category.posts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Members:</span>
                      <span className="text-cyan-400">{category.members.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-cyan-400 text-sm">Join Discussion</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Open Source Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contribute to our open source initiatives and collaborate with developers worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <Github className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {project.language}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {project.stars.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        {project.forks.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <UserPlus className="w-4 h-4 text-green-400" />
                        {project.contributors}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Updated {project.lastCommit}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with like-minded professionals, share your knowledge, and contribute to 
              the future of technology. Join thousands of members worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
              <p className="text-gray-300 mb-4">
                Get updates about community events, new features, and member highlights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}