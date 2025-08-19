import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      excerpt: "Exploring how AI systems are evolving to operate independently and make intelligent decisions without human intervention. Discover the latest breakthroughs in autonomous decision-making and their implications for business and society.",
      date: "2025-01-19",
      category: "AI Development",
      readTime: "5 min read",
      image: "🤖",
      author: "Dr. Sarah Chen",
      featured: true
    },
    {
      id: 2,
      title: "Automation in Modern DevOps",
      excerpt: "How automated CI/CD pipelines and infrastructure management are revolutionizing software development. Learn about the tools and practices that are transforming how teams build, test, and deploy software.",
      date: "2025-01-18",
      category: "DevOps",
      readTime: "4 min read",
      image: "⚡",
      author: "Marcus Rodriguez",
      featured: false
    },
    {
      id: 3,
      title: "Cloud-Native Architecture Trends",
      excerpt: "The latest developments in cloud infrastructure and how autonomous systems are optimizing performance. Explore microservices, serverless computing, and the future of cloud architecture.",
      date: "2025-01-17",
      category: "Cloud",
      readTime: "6 min read",
      image: "☁️",
      author: "Alex Thompson",
      featured: false
    },
    {
      id: 4,
      title: "Machine Learning in Production",
      excerpt: "Best practices for deploying and maintaining ML models in production environments. From model versioning to monitoring and retraining, discover how to build robust ML systems.",
      date: "2025-01-16",
      category: "Machine Learning",
      readTime: "7 min read",
      image: "🧠",
      author: "Dr. Priya Patel",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Self-Healing Applications",
      excerpt: "How modern applications are becoming more resilient through autonomous monitoring and recovery. Learn about the technologies enabling applications to detect and fix issues automatically.",
      date: "2025-01-15",
      category: "Automation",
      readTime: "5 min read",
      image: "🔧",
      author: "David Kim",
      featured: false
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Development",
      excerpt: "Important considerations for building AI systems that are fair, transparent, and beneficial to society. Explore frameworks for ethical AI development and deployment.",
      date: "2025-01-14",
      category: "AI Ethics",
      readTime: "8 min read",
      image: "⚖️",
      author: "Dr. Elena Rodriguez",
      featured: false
    },
    {
      id: 7,
      title: "Edge Computing and IoT Automation",
      excerpt: "How edge computing is revolutionizing IoT automation and enabling real-time decision making closer to data sources. Discover the benefits and challenges of edge AI deployment.",
      date: "2025-01-13",
      category: "Edge Computing",
      readTime: "6 min read",
      image: "🌐",
      author: "Michael Chang",
      featured: false
    },
    {
      id: 8,
      title: "Natural Language Processing Breakthroughs",
      excerpt: "Recent advances in NLP and how they're transforming business applications. From chatbots to document analysis, explore the cutting-edge of language AI.",
      date: "2025-01-12",
      category: "AI Development",
      readTime: "7 min read",
      image: "💬",
      author: "Dr. James Wilson",
      featured: false
    },
    {
      id: 9,
      title: "Cybersecurity in the Age of AI",
      excerpt: "How AI is both enhancing and challenging cybersecurity practices. Learn about AI-powered threat detection and the evolving landscape of digital security.",
      date: "2025-01-11",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "🔒",
      author: "Lisa Chen",
      featured: false
    }
  ];

  const categories = ["All", "AI Development", "DevOps", "Cloud", "Machine Learning", "Automation", "AI Ethics", "Edge Computing", "Cybersecurity"];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, automation, and technology trends from Zion Tech Group experts." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, automation, and technology trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on AI, automation, and the future of technology
            </p>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-8xl mb-4">{post.image}</div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        Featured • {post.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-white/60 text-sm mb-6">
                      <span>By {post.author}</span>
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-white/20 text-white/70 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-white/50 text-xs">
                    {post.date}
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Read More
                  </button>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
                <p className="text-white/70 mb-6">
                  Get the latest insights delivered to your inbox. No spam, just valuable content.
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