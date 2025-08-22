import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Download, ExternalLink, BookOpen, 
  ArrowRight, Star, Eye, Tag,
  Brain, Atom, Shield, Rocket, FileText,
  Video, Headphones, Code, Database, Server
} from 'lucide-react';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: <Eye className="w-4 h-4" />, count: 45 },
    { id: 'documentation', name: 'Documentation', icon: <FileText className="w-4 h-4" />, count: 15 },
    { id: 'sdk', name: 'SDKs & APIs', icon: <Code className="w-4 h-4" />, count: 12 },
    { id: 'guides', name: 'Guides & Tutorials', icon: <BookOpen className="w-4 h-4" />, count: 18 }
  ];

  const resources = [
    {
      id: 1,
      title: "AI Platform Integration Guide",
      description: "Complete guide to integrating our AI consciousness platform with your existing systems.",
      category: "documentation",
      type: "PDF Guide",
      size: "2.4 MB",
      downloads: 1247,
      featured: true,
      tags: ["AI", "Integration", "Platform"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing SDK v2.1",
      description: "Latest SDK for quantum computing applications with examples and best practices.",
      category: "sdk",
      type: "SDK Package",
      size: "45.2 MB",
      downloads: 892,
      featured: true,
      tags: ["Quantum", "SDK", "Development"],
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Enterprise Security Implementation",
      description: "Step-by-step guide to implementing zero trust security architecture.",
      category: "guides",
      type: "Video Series",
      size: "1.2 GB",
      downloads: 756,
      featured: false,
      tags: ["Security", "Enterprise", "Zero Trust"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Micro SAAS Development Kit",
      description: "Complete development kit for building scalable micro SAAS applications.",
      category: "sdk",
      type: "Development Kit",
      size: "128.7 MB",
      downloads: 634,
      featured: false,
      tags: ["Micro SAAS", "Development", "Kit"],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "API Reference Documentation",
      description: "Comprehensive API reference for all Zion Tech Group services and platforms.",
      category: "documentation",
      type: "API Docs",
      size: "8.9 MB",
      downloads: 543,
      featured: false,
      tags: ["API", "Reference", "Documentation"],
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "Getting Started Tutorial",
      description: "Beginner-friendly tutorial to get started with our technology platforms.",
      category: "guides",
      type: "Interactive Tutorial",
      size: "15.3 MB",
      downloads: 478,
      featured: false,
      tags: ["Tutorial", "Getting Started", "Beginner"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    if (type.includes('PDF') || type.includes('Guide')) return <FileText className="w-4 h-4" />;
    if (type.includes('SDK') || type.includes('Kit')) return <Code className="w-4 h-4" />;
    if (type.includes('Video')) return <Video className="w-4 h-4" />;
    if (type.includes('API')) return <Database className="w-4 h-4" />;
    if (type.includes('Tutorial')) return <BookOpen className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  return (
    <Layout>
      <Head>
        <title>Resources | Zion Tech Group</title>
        <meta name="description" content="Access documentation, SDKs, guides, and resources for Zion Tech Group's revolutionary technology platforms." />
        <meta name="keywords" content="resources, documentation, SDKs, guides, Zion Tech Group, AI, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Access documentation, SDKs, guides, and everything you need to build with our revolutionary technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                        : 'border-gray-600/50 text-gray-300 hover:border-gray-500 hover:text-gray-200'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredResources.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-white mb-4">No resources found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.article
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                      resource.featured ? 'ring-2 ring-purple-500/30' : ''
                    }`}
                  >
                    {resource.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                          resource.category === 'documentation' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          resource.category === 'sdk' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {categories.find(c => c.id === resource.category)?.name}
                        </span>
                      </div>

                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {resource.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {resource.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            {getTypeIcon(resource.type)}
                            {resource.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {resource.size}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {resource.downloads}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                          <Download className="w-4 h-4" />
                          Download
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        
                        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600/50 text-gray-300 text-sm font-medium rounded-lg hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                          Preview
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                More Ways to Learn
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore additional resources to help you master our revolutionary technology platforms.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Video className="w-8 h-8" />,
                  title: "Video Tutorials",
                  description: "Step-by-step video guides for all our platforms",
                  color: "from-red-500 to-pink-500",
                  href: "/tutorials"
                },
                {
                  icon: <Headphones className="w-8 h-8" />,
                  title: "Webinars",
                  description: "Live and recorded webinars on latest features",
                  color: "from-blue-500 to-cyan-500",
                  href: "/webinars"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Code Examples",
                  description: "Ready-to-use code snippets and examples",
                  color: "from-green-500 to-emerald-500",
                  href: "/code-examples"
                },
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "API Playground",
                  description: "Interactive API testing and exploration",
                  color: "from-purple-500 to-indigo-500",
                  href: "/api-playground"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 text-lg mb-6">
                Get notified when new resources, SDKs, and documentation are available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
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

export default Resources;