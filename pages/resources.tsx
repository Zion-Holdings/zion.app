import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Star, Zap, BookOpen, Users, Calendar, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, GraduationCap, DollarSign, Clock, Target, Code, Handshake
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: "Knowledge Base",
      description: "Comprehensive guides and tutorials for our technologies",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      resources: [
        { name: "Getting Started Guide", href: "/docs/getting-started", description: "Quick start guide for new users" },
        { name: "API Documentation", href: "/docs/api", description: "Complete API reference and examples" },
        { name: "Best Practices", href: "/docs/best-practices", description: "Industry best practices and guidelines" },
        { name: "Troubleshooting", href: "/docs/troubleshooting", description: "Common issues and solutions" }
      ]
    },
    {
      title: "Blog & Insights",
      description: "Latest industry insights and company updates",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      resources: [
        { name: "Latest Posts", href: "/blog", description: "Recent articles and insights" },
        { name: "Industry Trends", href: "/blog/trends", description: "Analysis of emerging technology trends" },
        { name: "Company News", href: "/blog/news", description: "Updates about Zion Tech Group" },
        { name: "Expert Opinions", href: "/blog/experts", description: "Insights from our technology experts" }
      ]
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      icon: Star,
      color: "from-green-500 to-emerald-500",
      resources: [
        { name: "Success Stories", href: "/case-studies", description: "Client success stories and results" },
        { name: "Implementation Guides", href: "/case-studies/implementations", description: "Step-by-step implementation examples" },
        { name: "ROI Analysis", href: "/case-studies/roi", description: "Return on investment case studies" },
        { name: "Industry Solutions", href: "/case-studies/industries", description: "Industry-specific solutions" }
      ]
    },
    {
      title: "Webinars & Events",
      description: "Educational content and live events",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      resources: [
        { name: "Upcoming Webinars", href: "/webinars", description: "Register for upcoming live events" },
        { name: "On-Demand Content", href: "/webinars/on-demand", description: "Recorded webinars and presentations" },
        { name: "Event Calendar", href: "/events", description: "Complete calendar of events" },
        { name: "Speaker Series", href: "/webinars/speakers", description: "Featured speakers and topics" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "AI Consciousness Development Guide",
      description: "Complete guide to developing AI systems with consciousness-like properties",
      href: "/docs/ai-consciousness-guide",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Primer",
      description: "Introduction to quantum computing and its business applications",
      href: "/docs/quantum-computing-primer",
      icon: Target,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity practices for modern businesses",
      href: "/docs/cybersecurity-best-practices",
      icon: Lock,
      color: "from-red-500 to-orange-500"
    }
  ];

  const quickLinks = [
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "Support Center", href: "/support", icon: Users },
    { name: "Training Programs", href: "/training", icon: GraduationCap },
    { name: "Developer Portal", href: "/developers", icon: Code },
    { name: "Partner Resources", href: "/partners", icon: Handshake },
    { name: "Research Papers", href: "/research", icon: FileText }
  ];

  return (
    <Layout 
      title="Resources - Zion Tech Group"
      description="Access our comprehensive knowledge base, case studies, webinars, and documentation to accelerate your technology journey."
      keywords="resources, documentation, case studies, webinars, knowledge base, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/resources"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Resources</span> Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive knowledge base, case studies, webinars, and documentation 
                to accelerate your technology journey and maximize your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Start your journey with these essential guides and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300 mb-6">{resource.description}</p>
                  <a 
                    href={resource.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
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
                Organized resources to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.href}
                        className="block p-3 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors duration-300"
                      >
                        <div className="font-semibold text-white">{resource.name}</div>
                        <div className="text-sm text-gray-400">{resource.description}</div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Fast access to frequently used resources and tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a 
                  href="/support"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                >
                  Visit Support Center
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