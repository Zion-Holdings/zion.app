import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous Innovation: AI Agents That Never Sleep",
      excerpt: "Discover how autonomous AI agents are revolutionizing technology development by working 24/7 to optimize, innovate, and improve systems without human intervention.",
      category: "Autonomous Innovation",
      date: "2025-01-17",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "future-autonomous-innovation-ai-agents"
    },
    {
      id: 2,
      title: "Self-Healing Systems: When Technology Fixes Itself",
      excerpt: "Explore the cutting-edge world of self-healing technology systems that automatically detect, diagnose, and resolve issues before they impact performance.",
      category: "Self-Healing Systems",
      date: "2025-01-16",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      slug: "self-healing-systems-technology-fixes-itself"
    },
    {
      id: 3,
      title: "AI-Powered Content Generation: The Content Factory of Tomorrow",
      excerpt: "Learn how artificial intelligence is transforming content creation, from automated writing to intelligent optimization and distribution across multiple platforms.",
      category: "Content AI",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "ai-powered-content-generation-factory-tomorrow"
    },
    {
      id: 4,
      title: "Cloud Automation: Building Infrastructure That Manages Itself",
      excerpt: "Discover how autonomous cloud infrastructure automatically scales, optimizes, and maintains itself, reducing costs and improving reliability.",
      category: "Cloud Automation",
      date: "2025-01-14",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "cloud-automation-infrastructure-manages-itself"
    },
    {
      id: 5,
      title: "The Rise of Autonomous DevOps: When CI/CD Becomes Self-Managing",
      excerpt: "Explore how autonomous DevOps systems are eliminating manual deployment processes and creating self-optimizing development pipelines.",
      category: "DevOps",
      date: "2025-01-13",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "rise-autonomous-devops-cicd-self-managing"
    },
    {
      id: 6,
      title: "AI Ethics in Autonomous Systems: Balancing Innovation with Responsibility",
      excerpt: "Delve into the critical importance of ethical considerations in autonomous AI systems and how to build responsible innovation frameworks.",
      category: "AI Ethics",
      date: "2025-01-12",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      slug: "ai-ethics-autonomous-systems-innovation-responsibility"
    }
  ];

  const categories = [
    "All",
    "Autonomous Innovation",
    "Self-Healing Systems",
    "Content AI",
    "Cloud Automation",
    "DevOps",
    "AI Ethics"
  ];

  return (
    <>
      <Head>
        <title>Blog — Zion Tech Group Insights & Innovation</title>
        <meta name="description" content="Explore the latest insights on autonomous innovation, AI automation, self-healing systems, and the future of technology from Zion Tech Group." />
        <meta property="og:title" content="Blog — Zion Tech Group Insights & Innovation" />
        <meta property="og:description" content="Explore the latest insights on autonomous innovation, AI automation, self-healing systems, and the future of technology from Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Innovation Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and deep dives into the world of autonomous innovation, 
              AI automation, and the future of technology.
            </p>
          </section>

          {/* Category Filter */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Post */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    The Future of Autonomous Innovation: AI Agents That Never Sleep
                  </h2>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Discover how autonomous AI agents are revolutionizing technology development 
                    by working 24/7 to optimize, innovate, and improve systems without human intervention. 
                    This comprehensive guide explores the cutting-edge world of self-managing technology.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <span>January 17, 2025</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-cyan-400 font-medium">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-200">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors duration-200">
                      <a href={`/blog/${post.slug}`}>
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section id="newsletter" className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Stay Updated with Innovation
              </h2>
              <p className="text-white/80 mb-6">
                Get the latest insights on autonomous innovation, AI automation, and 
                cutting-edge technology delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Ready to Explore Autonomous Innovation?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Discover how Zion Tech Group's autonomous systems can transform your 
              technology infrastructure and accelerate your innovation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/automation" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
              >
                Explore Automation
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}