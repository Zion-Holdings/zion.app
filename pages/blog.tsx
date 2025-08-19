import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      excerpt: "Exploring how AI systems are evolving to operate independently and make intelligent decisions without human intervention.",
      date: "2025-01-19",
      category: "AI Development",
      readTime: "5 min read",
      image: "🤖"
    },
    {
      id: 2,
      title: "Automation in Modern DevOps",
      excerpt: "How automated CI/CD pipelines and infrastructure management are revolutionizing software development.",
      date: "2025-01-18",
      category: "DevOps",
      readTime: "4 min read",
      image: "⚡"
    },
    {
      id: 3,
      title: "Cloud-Native Architecture Trends",
      excerpt: "The latest developments in cloud infrastructure and how autonomous systems are optimizing performance.",
      date: "2025-01-17",
      category: "Cloud",
      readTime: "6 min read",
      image: "☁️"
    },
    {
      id: 4,
      title: "Machine Learning in Production",
      excerpt: "Best practices for deploying and maintaining ML models in production environments.",
      date: "2025-01-16",
      category: "Machine Learning",
      readTime: "7 min read",
      image: "🧠"
    },
    {
      id: 5,
      title: "The Rise of Self-Healing Applications",
      excerpt: "How modern applications are becoming more resilient through autonomous monitoring and recovery.",
      date: "2025-01-15",
      category: "Automation",
      readTime: "5 min read",
      image: "🔧"
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Development",
      excerpt: "Important considerations for building AI systems that are fair, transparent, and beneficial to society.",
      date: "2025-01-14",
      category: "AI Ethics",
      readTime: "8 min read",
      image: "⚖️"
    }
  ];

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

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
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