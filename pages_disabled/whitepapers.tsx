import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, ArrowRight, Download, Calendar, User, 
  Brain, Atom, Shield, Rocket, Cpu, Database
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Future of Autonomous AI Systems",
      description: "A comprehensive analysis of autonomous AI systems and their potential to revolutionize technology and business operations.",
      author: "Zion Tech Group AI Team",
      date: "2025",
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: The Future of Autonomous AI Systems"
    },
    {
      title: "Quantum Computing in Cybersecurity",
      description: "Exploring the intersection of quantum computing and cybersecurity, including quantum-resistant encryption and threat detection.",
      author: "Zion Tech Group Research",
      date: "2025",
      category: "Quantum Computing",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Quantum Computing in Cybersecurity"
    },
    {
      title: "Next-Generation Space Technology",
      description: "Innovations in space technology including AI-powered satellite systems and autonomous space exploration.",
      author: "Zion Tech Group Space Division",
      date: "2025",
      category: "Space Technology",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Next-Generation Space Technology"
    },
    {
      title: "Edge Computing Architecture",
      description: "Modern edge computing architectures and their applications in IoT, AI deployment, and distributed systems.",
      author: "Zion Tech Group Engineering",
      date: "2025",
      category: "Edge Computing",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Edge Computing Architecture"
    },
    {
      title: "DevOps Automation Strategies",
      description: "Advanced DevOps automation strategies for modern software development and deployment pipelines.",
      author: "Zion Tech Group DevOps Team",
      date: "2025",
      category: "DevOps",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: DevOps Automation Strategies"
    },
    {
      title: "Cybersecurity in the AI Era",
      description: "Comprehensive cybersecurity strategies for protecting AI systems and infrastructure in the modern digital landscape.",
      author: "Zion Tech Group Security",
      date: "2025",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      downloadUrl: "mailto:kleber@ziontechgroup.com?subject=Request: Cybersecurity in the AI Era"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Space Technology", "Edge Computing", "DevOps", "Cybersecurity"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredWhitepapers = selectedCategory === "All" 
    ? whitepapers 
    : whitepapers.filter(paper => paper.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Whitepapers - Zion Tech Group | Research & Insights</title>
        <meta name="description" content="Access comprehensive whitepapers on AI, quantum computing, cybersecurity, space technology, and more from Zion Tech Group." />
        <meta name="keywords" content="whitepapers, research, AI, quantum computing, cybersecurity, space technology, Zion Tech Group" />
        <meta property="og:title" content="Whitepapers - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive research and insights on cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/whitepapers" />
        <link rel="canonical" href="https://ziontechgroup.com/whitepapers" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Whitepapers & Research
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Deep insights and research on cutting-edge technology topics. 
              Download our comprehensive whitepapers to stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${paper.color.replace('from-', 'from-').replace('to-', 'to-')}/0 via-${paper.color.split('-')[1]}-400/10 to-${paper.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} p-4 mb-6`}>
                  <paper.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 mb-3">
                    {paper.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{paper.title}</h3>
                <p className="text-white/70 mb-6">{paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                </div>
                
                <motion.a
                  href={paper.downloadUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  Request Download
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Custom Research?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific research needs and create custom whitepapers tailored to your industry
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Discuss Research Needs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}