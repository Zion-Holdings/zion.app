import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, MessageCircle, HelpCircle, 
  GraduationCap, Star, Download, ExternalLink,
  Brain, Atom, Shield, Rocket, Zap, Users
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Knowledge & Support Resources</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Resources
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Access comprehensive knowledge, documentation, and support resources to maximize your success with Zion Tech Group solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive resources organized by category to help you find exactly what you need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Documentation",
                  description: "Technical documentation, API references, and implementation guides",
                  color: "from-cyan-500 to-blue-500",
                  link: "/docs"
                },
                {
                  icon: <MessageCircle className="w-8 h-8" />,
                  title: "Blog & News",
                  description: "Latest insights, updates, and thought leadership articles",
                  color: "from-blue-500 to-indigo-500",
                  link: "/blog"
                },
                {
                  icon: <HelpCircle className="w-8 h-8" />,
                  title: "Support Center",
                  description: "Get help, troubleshoot issues, and access support resources",
                  color: "from-indigo-500 to-purple-500",
                  link: "/support"
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Training",
                  description: "Learn and get certified with our comprehensive training programs",
                  color: "from-purple-500 to-pink-500",
                  link: "/training"
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Case Studies",
                  description: "Success stories and real-world implementation examples",
                  color: "from-pink-500 to-red-500",
                  link: "/case-studies"
                },
                {
                  icon: <Download className="w-8 h-8" />,
                  title: "Downloads",
                  description: "Software, tools, and resources available for download",
                  color: "from-red-500 to-orange-500",
                  link: "/downloads"
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${resource.color} mb-4`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{resource.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Access Resource</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Highlighted resources to help you get started quickly
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Implementation Guide",
                  description: "Complete guide to implementing AI solutions in your organization",
                  category: "Documentation",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Computing Primer",
                  description: "Introduction to quantum computing and its business applications",
                  category: "Training",
                  color: "from-blue-500 to-cyan-500"
                }
              ].map((featured, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${featured.color}`}>
                      {featured.icon}
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium mb-2">
                        {featured.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{featured.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{featured.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology-Specific Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized resources for each of our core technology areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "AI & Consciousness", icon: <Brain className="w-6 h-6" />, description: "AI resources and guides" },
                { name: "Quantum Technology", icon: <Atom className="w-6 h-6" />, description: "Quantum computing resources" },
                { name: "Cybersecurity", icon: <Shield className="w-6 h-6" />, description: "Security best practices" },
                { name: "Space Technology", icon: <Rocket className="w-6 h-6" />, description: "Space tech resources" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need Help Finding Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the right resources for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Browse All Resources
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