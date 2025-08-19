import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      excerpt: "Exploring how AI systems are evolving to operate independently and continuously improve themselves.",
      category: "AI & Automation",
      date: "2025-01-17",
      readTime: "5 min read",
      image: "🤖"
    },
    {
      id: 2,
      title: "Building Self-Healing Infrastructure",
      excerpt: "How modern cloud infrastructure can automatically detect and resolve issues without human intervention.",
      category: "Infrastructure",
      date: "2025-01-16",
      readTime: "7 min read",
      image: "🔧"
    },
    {
      id: 3,
      title: "Continuous Deployment with Zero Downtime",
      excerpt: "Strategies for deploying updates and new features without interrupting user experience.",
      category: "DevOps",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "🚀"
    },
    {
      id: 4,
      title: "Machine Learning in Production",
      excerpt: "Best practices for deploying and monitoring ML models in real-world applications.",
      category: "Machine Learning",
      date: "2025-01-14",
      readTime: "8 min read",
      image: "🧠"
    },
    {
      id: 5,
      title: "The Rise of Autonomous Content Generation",
      excerpt: "How AI is revolutionizing content creation and management across digital platforms.",
      category: "Content AI",
      date: "2025-01-13",
      readTime: "4 min read",
      image: "✍️"
    },
    {
      id: 6,
      title: "Quantum Computing and AI: The Next Frontier",
      excerpt: "Exploring the intersection of quantum computing and artificial intelligence.",
      category: "Emerging Tech",
      date: "2025-01-12",
      readTime: "10 min read",
      image: "⚛️"
    }
  ];

  const categories = ["All", "AI & Automation", "Infrastructure", "DevOps", "Machine Learning", "Content AI", "Emerging Tech"];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Explore insights, trends, and innovations in AI automation, autonomous systems, and cutting-edge technology from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group - AI & Automation Insights" />
        <meta property="og:description" content="Explore insights, trends, and innovations in AI automation, autonomous systems, and cutting-edge technology from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and innovations in autonomous AI systems and intelligent automation
            </p>
          </header>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === "All"
                      ? "bg-cyan-500 border-cyan-400 text-white"
                      : "border-white/20 text-white/80 hover:border-cyan-400 hover:text-cyan-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">🤖</div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-300 text-sm px-3 py-1 rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Future of Autonomous AI Systems
                  </h2>
                  <p className="text-white/90 mb-6 text-lg">
                    As we stand on the brink of a new era in artificial intelligence, autonomous systems are becoming 
                    increasingly sophisticated. These systems don't just execute predefined tasks—they learn, adapt, 
                    and evolve to meet ever-changing challenges.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/70 mb-6">
                    <span>January 17, 2025</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span>AI & Automation</span>
                  </div>
                  <Link 
                    href="/blog/ai-automation-trends-2025" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full Article →
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 rounded-xl p-8 text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">Autonomous Innovation</h3>
                    <p className="text-white/80">Discover the cutting-edge technologies shaping our future</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-cyan-300">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-200 group">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <span className="inline-block bg-white/10 text-white/70 text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4">
                    <Link 
                      href={`/blog/post-${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Stay Updated</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get the latest insights on autonomous AI systems, automation trends, and technological breakthroughs 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}