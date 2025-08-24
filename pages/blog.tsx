import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "The Future of AI Consciousness: 2029 and Beyond",
      excerpt: "Exploring the evolution of artificial intelligence and the emergence of machine consciousness in the next decade.",
      author: "Dr. Sarah Chen",
      date: "August 23, 2025",
      readTime: "8 min read",
      category: "AI Research",
      image: "🧠",
      featured: true
    },
    {
      title: "Quantum Computing Breakthroughs: What's Next?",
      excerpt: "Recent developments in quantum computing and their implications for AI, cryptography, and scientific discovery.",
      author: "Prof. Michael Rodriguez",
      date: "August 20, 2025",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "⚛️",
      featured: true
    },
    {
      title: "Building Ethical AI: A Developer's Guide",
      excerpt: "Best practices for developing AI systems that are fair, transparent, and beneficial to society.",
      author: "Dr. Emily Watson",
      date: "August 18, 2025",
      readTime: "10 min read",
      category: "AI Ethics",
      image: "⚖️",
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "The Rise of Autonomous Business Operations",
      excerpt: "How AI is transforming business processes and creating new opportunities for automation.",
      author: "Alex Thompson",
      date: "August 15, 2025",
      readTime: "5 min read",
      category: "Business AI",
      image: "🏢"
    },
    {
      title: "Quantum Machine Learning: A Practical Approach",
      excerpt: "Implementing quantum machine learning algorithms for real-world applications.",
      author: "Dr. James Wilson",
      date: "August 12, 2025",
      readTime: "7 min read",
      category: "Quantum ML",
      image: "🔬"
    },
    {
      title: "Edge Computing and AI: The Perfect Match",
      excerpt: "Combining edge computing with AI for faster, more efficient applications.",
      author: "Lisa Park",
      date: "August 10, 2025",
      readTime: "6 min read",
      category: "Edge Computing",
      image: "🌐"
    },
    {
      title: "The Impact of AI on Healthcare",
      excerpt: "Revolutionary changes in medical diagnosis, treatment, and patient care through AI.",
      author: "Dr. Robert Kim",
      date: "August 8, 2025",
      readTime: "9 min read",
      category: "Healthcare AI",
      image: "🏥"
    },
    {
      title: "Sustainable AI: Green Computing Solutions",
      excerpt: "Reducing the environmental impact of AI through energy-efficient algorithms and hardware.",
      author: "Maria Santos",
      date: "August 5, 2025",
      readTime: "5 min read",
      category: "Green AI",
      image: "🌱"
    },
    {
      title: "The Future of Work in the AI Era",
      excerpt: "How artificial intelligence is reshaping job markets and creating new career opportunities.",
      author: "David Chen",
      date: "August 3, 2025",
      readTime: "8 min read",
      category: "Future of Work",
      image: "💼"
    }
  ];

  const categories = [
    "All Posts",
    "AI Research",
    "Quantum Computing",
    "AI Ethics",
    "Business AI",
    "Healthcare AI",
    "Edge Computing",
    "Green AI",
    "Future of Work"
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, and emerging technologies. Expert analysis and thought leadership from Zion Tech Group." />
        <meta name="keywords" content="AI blog, quantum computing blog, technology insights, AI research, machine learning blog" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Explore the latest developments in AI, quantum computing, and emerging technologies. 
              Expert insights, research updates, and thought leadership from our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#featured-posts" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Featured Posts
              </Link>
              <Link href="#newsletter" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section id="featured-posts" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Posts</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="text-6xl mb-4">{post.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section id="newsletter" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights on AI, quantum computing, and emerging technologies 
                delivered to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contribute to Our Blog</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have insights to share? We welcome guest contributions from experts 
              in AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Submit a Guest Post
              </Link>
              <Link href="/about" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}