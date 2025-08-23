import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Users, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Globe,
  Download, ExternalLink, Play, Headphones, Code
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and technical documentation",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "API Documentation", href: "/docs/api", type: "Guide" },
        { name: "Integration Guides", href: "/docs/integration", type: "Tutorial" },
        { name: "Best Practices", href: "/docs/best-practices", type: "Guide" },
        { name: "Troubleshooting", href: "/docs/troubleshooting", type: "Reference" }
      ]
    },
    {
      icon: FileText,
      title: "White Papers",
      description: "In-depth research and industry insights",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "AI in Enterprise 2025", href: "/white-papers/ai-enterprise-2025", type: "Research" },
        { name: "Quantum Computing Future", href: "/white-papers/quantum-future", type: "Research" },
        { name: "Space Technology Trends", href: "/white-papers/space-trends", type: "Analysis" },
        { name: "Cybersecurity Evolution", href: "/white-papers/cybersecurity-evolution", type: "Research" }
      ]
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Tutorials, demos, and educational videos",
      color: "from-emerald-500 to-teal-500",
      items: [
        { name: "Product Demos", href: "/videos/demos", type: "Demo" },
        { name: "Tutorial Series", href: "/videos/tutorials", type: "Tutorial" },
        { name: "Webinars", href: "/webinars", type: "Live" },
        { name: "Case Study Videos", href: "/videos/case-studies", type: "Case Study" }
      ]
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with experts and fellow users",
      color: "from-indigo-500 to-purple-500",
      items: [
        { name: "Developer Forum", href: "/community/forum", type: "Community" },
        { name: "User Groups", href: "/community/groups", type: "Networking" },
        { name: "Events Calendar", href: "/community/events", type: "Events" },
        { name: "Success Stories", href: "/community/success-stories", type: "Stories" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      type: "Guide",
      icon: Play,
      href: "/docs/getting-started",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      type: "Reference",
      icon: Code,
      href: "/docs/api",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Best Practices",
      description: "Enterprise security guidelines and recommendations",
      type: "Guide",
      icon: Shield,
      href: "/docs/security",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const learningPaths = [
    {
      title: "Beginner",
      description: "Start your journey with Zion Tech Group",
      steps: ["Account Setup", "First Integration", "Basic Configuration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Intermediate",
      description: "Build advanced solutions and integrations",
      steps: ["Advanced Features", "Custom Workflows", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expert",
      description: "Master enterprise-level implementations",
      steps: ["Architecture Design", "Scalability", "Advanced Security"],
      color: "from-purple-500 to-pink-500"
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
                <Sparkles className="w-4 h-4 mr-2" />
                Knowledge Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Access comprehensive documentation, tutorials, and resources to maximize 
                the value of Zion Tech Group's revolutionary technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
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
                Start with these essential resources to get the most out of our platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${resource.color} bg-opacity-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-800/50 text-xs font-medium text-gray-300 mb-3">
                        {resource.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{resource.description}</p>
                    </div>
                    <a
                      href={resource.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                              {item.type}
                            </span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {item.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow structured learning paths to master our technology platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${path.color} bg-opacity-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{path.description}</p>
                    <div className="space-y-3">
                      {path.steps.map((step, stepIndex) => (
                        <div key={step} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${path.color} flex items-center justify-center text-white text-sm font-bold`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team of experts is here to help you succeed with Zion Tech Group's 
                revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/docs/getting-started"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Documentation <ExternalLink className="w-5 h-5 ml-2" />
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