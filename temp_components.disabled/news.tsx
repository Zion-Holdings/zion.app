import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Calendar, Newspaper, Play, Mic, FileText, ExternalLink as ExternalLinkIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "Our latest AI platform transforms how enterprises process and analyze data, delivering real-time insights with unprecedented accuracy and speed.",
      category: "Product Launch",
      date: "2025-01-15",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/ai-bi-platform-launch",
      external: false,
      featured: true,
      tags: ["AI", "Business Intelligence", "Product Launch", "Enterprise"]
    },
    {
      id: 2,
      title: "Zion Tech Group Secures $50M Series B Funding for Quantum Computing Research",
      excerpt: "Major investment round will accelerate our quantum computing initiatives and expand our research capabilities in quantum-resistant cybersecurity.",
      category: "Company News",
      date: "2025-01-10",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/series-b-funding",
      external: false,
      featured: true,
      tags: ["Funding", "Quantum Computing", "Cybersecurity", "Investment"]
    },
    {
      id: 3,
      title: "Zion Tech Group Named Top 10 AI Companies by TechCrunch",
      excerpt: "Recognition of our innovative AI solutions and contributions to the advancement of artificial intelligence technology.",
      category: "Awards & Recognition",
      date: "2025-01-08",
      author: "TechCrunch",
      image: "/api/placeholder/600/400",
      link: "https://techcrunch.com/2025/01/08/top-10-ai-companies-2025",
      external: true,
      featured: false,
      tags: ["Awards", "AI", "Recognition", "TechCrunch"]
    },
    {
      id: 4,
      title: "Partnership Announced: Zion Tech Group and NASA Collaborate on Space Technology",
      excerpt: "Strategic partnership to develop next-generation space exploration technologies and autonomous mission planning systems.",
      category: "Partnerships",
      date: "2025-01-05",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/nasa-partnership",
      external: false,
      featured: false,
      tags: ["Partnership", "NASA", "Space Technology", "Collaboration"]
    },
    {
      id: 5,
      title: "Zion Tech Group CEO Featured in Forbes: The Future of Autonomous AI",
      excerpt: "Our CEO discusses the future of autonomous AI systems and how they're transforming industries across the globe.",
      category: "Media Coverage",
      date: "2025-01-03",
      author: "Forbes",
      image: "/api/placeholder/600/400",
      link: "https://forbes.com/2025/01/03/future-of-autonomous-ai",
      external: true,
      featured: false,
      tags: ["Media Coverage", "Forbes", "CEO", "Autonomous AI"]
    },
    {
      id: 6,
      title: "New Research Paper: Quantum-Resistant Cryptography in Practice",
      excerpt: "Our research team publishes groundbreaking findings on implementing quantum-resistant cryptographic solutions in real-world applications.",
      category: "Research",
      date: "2024-12-28",
      author: "Zion Tech Group Research Team",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/research/quantum-resistant-cryptography",
      external: false,
      featured: false,
      tags: ["Research", "Quantum Computing", "Cryptography", "Security"]
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Announces Expansion to European Market",
      date: "2025-01-12",
      summary: "Strategic expansion to serve European clients with cutting-edge AI and quantum computing solutions.",
      link: "https://ziontechgroup.com/press/european-expansion"
    },
    {
      id: 2,
      title: "Zion Tech Group Launches Quantum Cybersecurity Certification Program",
      date: "2025-01-08",
      summary: "New certification program to train cybersecurity professionals in quantum-resistant security protocols.",
      link: "https://ziontechgroup.com/press/quantum-cybersecurity-certification"
    },
    {
      id: 3,
      title: "Zion Tech Group Reports Record Q4 2024 Results",
      date: "2024-12-20",
      summary: "Strong financial performance driven by increased demand for AI and cybersecurity solutions.",
      link: "https://ziontechgroup.com/press/q4-2024-results"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats and color schemes",
      icon: FileText,
      link: "/media-kit/logos.zip"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of our leadership team",
      icon: Users,
      link: "/media-kit/executives.zip"
    },
    {
      title: "Product Screenshots",
      description: "High-quality images of our technology platforms",
      icon: Code,
      link: "/media-kit/products.zip"
    },
    {
      title: "Company Fact Sheet",
      description: "Key facts and figures about Zion Tech Group",
      icon: FileText,
      link: "/media-kit/fact-sheet.pdf"
    }
  ];

  const categories = ["All", "Product Launch", "Company News", "Awards & Recognition", "Partnerships", "Media Coverage", "Research"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredNews = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>News & Press - Zion Tech Group | Latest Updates and Media Coverage</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, and media coverage. Discover our innovations in AI, quantum computing, and technology." />
        <meta property="og:title" content="News & Press - Zion Tech Group" />
        <meta property="og:description" content="Latest news, press releases, and media coverage from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="news, press, media coverage, Zion Tech Group, AI news, quantum computing news" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              News & Press
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with our latest innovations, company news, and media coverage
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl'
                      : 'bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our most important announcements and breakthrough innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Article Image */}
                <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Newspaper className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={article.link}
                    target={article.external ? "_blank" : "_self"}
                    rel={article.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    Read More
                    {article.external ? <ExternalLinkIcon className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Latest News
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with all our latest announcements and developments
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/60">By {article.author}</span>
                      <a
                        href={article.link}
                        target={article.external ? "_blank" : "_self"}
                        rel={article.external ? "noopener noreferrer" : ""}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        Read More
                        {article.external ? <ExternalLinkIcon className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Press Releases
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Official announcements and company updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-sm text-white/60">
                    {formatDate(release.date)}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {release.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm">
                  {release.summary}
                </p>

                <a
                  href={release.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium text-sm"
                >
                  Read Press Release
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Media Kit
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resources for journalists, media professionals, and content creators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium text-sm"
                >
                  Download
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl border border-white/10 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates from Zion Tech Group delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Media Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:press@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Email Press
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
