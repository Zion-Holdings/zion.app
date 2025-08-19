import React from 'react';
import Head from 'next/head';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches New AI-Powered Automation Platform",
      excerpt: "Our latest innovation brings autonomous decision-making capabilities to enterprise environments, revolutionizing how businesses operate.",
      date: "2025-01-19",
      category: "Company News",
      author: "Zion Tech Group",
      readTime: "3 min read",
      image: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with TechCorp Announced for Cloud Infrastructure",
      excerpt: "Strategic collaboration to deliver next-generation cloud automation solutions for enterprise clients worldwide.",
      date: "2025-01-18",
      category: "Partnerships",
      author: "Sarah Chen",
      readTime: "2 min read",
      image: "🤝"
    },
    {
      id: 3,
      title: "AI Ethics Guidelines Released for Responsible Development",
      excerpt: "Comprehensive framework ensuring our AI solutions are developed with transparency, fairness, and societal benefit in mind.",
      date: "2025-01-17",
      category: "Innovation",
      author: "Dr. Emily Watson",
      readTime: "4 min read",
      image: "⚖️"
    },
    {
      id: 4,
      title: "New Office Opening in Singapore",
      excerpt: "Expanding our global presence to better serve clients in the Asia-Pacific region with local expertise and support.",
      date: "2025-01-16",
      category: "Company News",
      author: "Marcus Rodriguez",
      readTime: "2 min read",
      image: "🌏"
    },
    {
      id: 5,
      title: "Machine Learning Model Achieves 99.7% Accuracy",
      excerpt: "Breakthrough in predictive analytics demonstrates our commitment to pushing the boundaries of AI performance.",
      date: "2025-01-15",
      category: "Technology",
      author: "Dr. James Wilson",
      readTime: "5 min read",
      image: "🧠"
    },
    {
      id: 6,
      title: "Annual Sustainability Report Published",
      excerpt: "Comprehensive overview of our environmental impact and commitment to sustainable technology development.",
      date: "2025-01-14",
      category: "Sustainability",
      author: "Lisa Park",
      readTime: "6 min read",
      image: "🌱"
    },
    {
      id: 7,
      title: "Customer Success Story: Retail Automation",
      excerpt: "How we helped a major retailer increase efficiency by 300% through intelligent automation systems.",
      date: "2025-01-13",
      category: "Case Studies",
      author: "Alex Thompson",
      readTime: "4 min read",
      image: "📊"
    },
    {
      id: 8,
      title: "New Research Paper on Autonomous Systems",
      excerpt: "Published in leading AI journal, our research explores the future of self-managing technology infrastructure.",
      date: "2025-01-12",
      category: "Research",
      author: "Prof. Maria Garcia",
      readTime: "7 min read",
      image: "📚"
    }
  ];

  const categories = ["All", "Company News", "Partnerships", "Innovation", "Technology", "Sustainability", "Case Studies", "Research"];

  return (
    <>
      <Head>
        <title>News | Zion Tech Group - Latest Updates & Insights</title>
        <meta name="description" content="Stay informed with the latest news, company updates, and industry insights from Zion Tech Group." />
        <meta property="og:title" content="News - Zion Tech Group" />
        <meta property="og:description" content="Latest company news, partnerships, and technology insights." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Latest News
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with company news, partnerships, innovations, and industry insights
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === "All"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{article.image}</div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-xs text-white/60 mb-4">
                    By {article.author}
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Read More
                  </button>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay in the Loop</h2>
                <p className="text-white/70 mb-6">
                  Get the latest news and updates delivered directly to your inbox. Never miss an important announcement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}