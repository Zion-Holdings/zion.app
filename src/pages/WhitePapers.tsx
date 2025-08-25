import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Calendar, User, Tag } from 'lucide-react';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation: A Comprehensive Guide",
      description: "Explore the future of business transformation through artificial intelligence, machine learning, and automation technologies.",
      category: "Artificial Intelligence",
      author: "Zion Tech Group Research Team",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["AI", "Digital Transformation", "Machine Learning", "Automation"]
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Quantum Computing",
      description: "Understanding the security implications and preparing for the quantum computing revolution in enterprise environments.",
      category: "Cybersecurity",
      author: "Dr. Sarah Chen",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["Cybersecurity", "Quantum Computing", "Enterprise Security", "Risk Management"]
    },
    {
      id: 3,
      title: "Micro-SaaS Solutions: Building Scalable Business Applications",
      description: "A comprehensive guide to developing, deploying, and scaling micro-SaaS applications for modern businesses.",
      category: "Software Development",
      author: "Michael Rodriguez",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["Micro-SaaS", "Software Development", "Scalability", "Business Applications"]
    },
    {
      id: 4,
      title: "IT Infrastructure Modernization: Cloud-Native Approaches",
      description: "Strategies for modernizing legacy IT infrastructure using cloud-native technologies and microservices architecture.",
      category: "IT Infrastructure",
      author: "Zion Tech Group Infrastructure Team",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["IT Infrastructure", "Cloud Computing", "Microservices", "Modernization"]
    },
    {
      id: 5,
      title: "Emerging Technologies in Healthcare: AI and IoT Integration",
      description: "How artificial intelligence and Internet of Things are revolutionizing healthcare delivery and patient care.",
      category: "Healthcare Technology",
      author: "Dr. Emily Watson",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["Healthcare", "AI", "IoT", "Digital Health", "Patient Care"]
    },
    {
      id: 6,
      title: "Sustainable Technology: Green Computing for Enterprise",
      description: "Implementing environmentally conscious technology solutions while maintaining business efficiency and performance.",
      category: "Sustainability",
      author: "Environmental Technology Division",
      date: "2025",
      downloadUrl: "#",
      externalUrl: "#",
      tags: ["Sustainability", "Green Computing", "Enterprise", "Environmental Impact"]
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Software Development", "IT Infrastructure", "Healthcare Technology", "Sustainability"];

  return (
    <>
      <Helmet>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Access comprehensive white papers and technical documentation on AI, cybersecurity, digital transformation, and emerging technologies from Zion Tech Group." />
        <meta name="keywords" content="white papers, technical documentation, AI research, cybersecurity, digital transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              White Papers & Research
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Access our comprehensive research and technical documentation on cutting-edge technologies, 
              industry insights, and innovative solutions that drive digital transformation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* White Papers Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                    {paper.category}
                  </span>
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors duration-300">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {paper.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {paper.date}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stay Updated with Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers, research findings, and industry insights. 
              Join our community of technology professionals and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WhitePapers;