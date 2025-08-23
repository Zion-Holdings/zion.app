import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Video, Code, FileText, Users, Globe, 
  CheckCircle, ArrowRight, Brain, Rocket, Shield, Zap,
  BarChart3, Database, Cloud, Lock, Settings, Star, Atom
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical documentation and API references',
      icon: <FileText className="w-12 h-12 text-cyan-400" />,
      resources: [
        { name: 'API Reference', description: 'Complete API documentation with examples', href: '/api' },
        { name: 'Integration Guides', description: 'Step-by-step integration tutorials', href: '/integration-guides' },
        { name: 'Best Practices', description: 'Recommended implementation patterns', href: '/best-practices' },
        { name: 'Troubleshooting', description: 'Common issues and solutions', href: '/troubleshooting' }
      ]
    },
    {
      title: 'Tutorials & Learning',
      description: 'Interactive tutorials and educational content',
      icon: <Video className="w-12 h-12 text-purple-400" />,
      resources: [
        { name: 'Getting Started', description: 'Quick start guides for beginners', href: '/getting-started' },
        { name: 'Video Tutorials', description: 'Visual learning resources', href: '/video-tutorials' },
        { name: 'Interactive Demos', description: 'Hands-on learning experiences', href: '/demos' },
        { name: 'Learning Paths', description: 'Structured learning journeys', href: '/learning-paths' }
      ]
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code samples and templates',
      icon: <Code className="w-12 h-12 text-green-400" />,
      resources: [
        { name: 'Code Snippets', description: 'Reusable code examples', href: '/code-snippets' },
        { name: 'Templates', description: 'Project templates and boilerplates', href: '/templates' },
        { name: 'Sample Projects', description: 'Complete example applications', href: '/sample-projects' },
        { name: 'GitHub Repositories', description: 'Open source code examples', href: '/github' }
      ]
    },
    {
      title: 'Knowledge Base',
      description: 'In-depth articles and technical insights',
      icon: <BookOpen className="w-12 h-12 text-blue-400" />,
      resources: [
        { name: 'Technical Articles', description: 'Deep dive technical content', href: '/articles' },
        { name: 'Case Studies', description: 'Real-world implementation stories', href: '/case-studies' },
        { name: 'White Papers', description: 'Comprehensive research documents', href: '/white-papers' },
        { name: 'Industry Insights', description: 'Trends and analysis', href: '/insights' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Implementation Guide',
      description: 'Complete guide to implementing AI solutions in your business',
      category: 'Guide',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      href: '/ai-implementation-guide'
    },
    {
      title: 'Quantum Computing Primer',
      description: 'Introduction to quantum computing and its business applications',
      category: 'Primer',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      href: '/quantum-computing-primer'
    },
    {
      title: 'Space Technology Overview',
      description: 'Comprehensive overview of space technology solutions',
      category: 'Overview',
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      href: '/space-technology-overview'
    },
    {
      title: 'Micro SAAS Development',
      description: 'Step-by-step guide to building micro SAAS solutions',
      category: 'Guide',
      icon: <Code className="w-8 h-8 text-green-400" />,
      href: '/micro-saas-development'
    }
  ];

  const learningPaths = [
    {
      title: 'AI & Machine Learning',
      description: 'Master artificial intelligence and machine learning fundamentals',
      duration: '8 weeks',
      level: 'Intermediate',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Quantum Computing',
      description: 'Learn quantum computing principles and applications',
      duration: '6 weeks',
      level: 'Advanced',
      icon: <Atom className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Space Technology',
      description: 'Explore space technology and satellite systems',
      duration: '10 weeks',
      level: 'Intermediate',
      icon: <Rocket className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Micro SAAS Development',
      description: 'Build and deploy micro software solutions',
      duration: '12 weeks',
      level: 'Beginner',
      icon: <Code className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Resources & Learning
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Access comprehensive knowledge, tutorials, and resources to master cutting-edge technology and drive innovation in your business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#resources" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Resources</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Get Support
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start your learning journey with our most popular and comprehensive resources.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {resource.icon}
                  <span className="text-sm text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a 
                  href={resource.href}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resources" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our organized collection of resources designed to accelerate your learning and implementation.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.resources.map((resource, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{resource.name}</h4>
                        <p className="text-gray-400 text-sm">{resource.description}</p>
                      </div>
                      <a 
                        href={resource.href}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        →
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert in cutting-edge technologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {path.icon}
                  <span className="text-sm text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
                    {path.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{path.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{path.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {path.duration}</span>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Start Learning →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Interactive Learning Experiences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engage with hands-on learning through interactive demos, sandboxes, and real-world projects.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Learn by Doing</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our interactive learning platform provides hands-on experience with real tools and technologies, 
                allowing you to build practical skills through experimentation and guided projects.
              </p>
              <ul className="space-y-3">
                {[
                  'Interactive Code Sandboxes',
                  'Real-time Collaboration',
                  'Guided Project Tutorials',
                  'Instant Feedback & Validation',
                  'Community Learning Forums'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                Interactive learning accelerates skill development and retention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Community & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our community of learners and get support from experts and peers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Forums',
                description: 'Connect with other learners and share knowledge',
                icon: <Users className="w-12 h-12 text-cyan-400" />,
                href: '/forums'
              },
              {
                title: 'Expert Support',
                description: 'Get help from our team of technology experts',
                icon: <Star className="w-12 h-12 text-purple-400" />,
                href: '/support'
              },
              {
                title: 'Live Events',
                description: 'Attend webinars, workshops, and live Q&A sessions',
                icon: <Globe className="w-12 h-12 text-green-400" />,
                href: '/events'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <a 
                  href={item.href}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                >
                  Join Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Begin your journey to mastering cutting-edge technology with our comprehensive resources and learning paths.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#resources" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Explore Resources</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/contact" className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get Personalized Guidance
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}