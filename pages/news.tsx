import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Newspaper, Globe, Award, Users, Rocket, Brain, 
  ArrowRight, ExternalLink, Calendar, Tag, Star
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function NewsPage() {
  const newsItems = [
    {
      title: "Zion Tech Group Named Top AI Innovation Company 2025",
      category: "Awards & Recognition",
      date: "January 15, 2025",
      excerpt: "Zion Tech Group has been recognized as one of the top AI innovation companies of 2025 by TechCrunch, highlighting our breakthrough work in autonomous AI systems and quantum computing integration.",
      image: "/api/placeholder/600/400",
      source: "TechCrunch",
      url: "#",
      featured: true,
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Revolutionary Quantum AI Breakthrough Announced",
      category: "Technology Innovation",
      date: "January 10, 2025",
      excerpt: "Zion Tech Group announces a major breakthrough in quantum AI integration, achieving unprecedented performance improvements in machine learning algorithms through quantum-enhanced neural networks.",
      image: "/api/placeholder/600/400",
      source: "MIT Technology Review",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Partnership with Fortune 500 Financial Institution",
      category: "Business Development",
      date: "January 5, 2025",
      excerpt: "Zion Tech Group announces strategic partnership with leading financial institution to deploy AI-powered risk assessment and fraud detection systems across their global operations.",
      image: "/api/placeholder/600/400",
      source: "Business Insider",
      url: "#",
      featured: false,
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "New Cybersecurity Division Launch",
      category: "Company News",
      date: "December 28, 2024",
      excerpt: "Zion Tech Group expands its service portfolio with the launch of a dedicated cybersecurity division, offering quantum-resistant encryption and AI-powered threat detection solutions.",
      image: "/api/placeholder/600/400",
      source: "Security Weekly",
      url: "#",
      featured: false,
      icon: Rocket,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Record-Breaking AI Model Performance",
      category: "Research & Development",
      date: "December 20, 2024",
      excerpt: "Our research team achieves record-breaking performance in natural language processing, with our latest AI model outperforming industry benchmarks by 40% in accuracy and 60% in speed.",
      image: "/api/placeholder/600/400",
      source: "AI Research Journal",
      url: "#",
      featured: false,
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Global Expansion: New Office in Singapore",
      category: "Company News",
      date: "December 15, 2024",
      excerpt: "Zion Tech Group announces the opening of its new Asia-Pacific headquarters in Singapore, expanding our global reach and strengthening partnerships in the region.",
      image: "/api/placeholder/600/400",
      source: "Singapore Business Times",
      url: "#",
      featured: false,
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const categories = ["All", "Awards & Recognition", "Technology Innovation", "Business Development", "Company News", "Research & Development"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredNews = selectedCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>News & Press - Zion Tech Group</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, awards, and media coverage. Discover our innovations in AI, quantum computing, and technology." />
        <meta property="og:title" content="News & Press - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with our latest news, awards, and media coverage." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              News & Press
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest innovations, awards, and media coverage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover the latest developments in AI, quantum computing, and technology 
              innovation from Zion Tech Group and our global team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-white/70">Latest headlines and major announcements</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 mb-6">{item.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Newspaper className="w-4 h-4" />
                        <span>{item.source}</span>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest News</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay informed about our latest developments and industry recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Newspaper className="w-3 h-3" />
                      <span>{item.source}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Inquiries
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, company information, and arrange interviews with our leadership team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
