import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "AI Automation Trends 2025",
      excerpt: "Discover the latest trends in AI automation and how they're reshaping industries worldwide.",
      date: "2025-01-17",
      category: "AI & Automation",
      readTime: "5 min read",
      slug: "ai-automation-trends-2025"
    },
    {
      id: 2,
      title: "The Future of Cloud Computing",
      excerpt: "Explore how cloud computing is evolving and what it means for businesses and developers.",
      date: "2025-01-16",
      category: "Cloud Computing",
      readTime: "7 min read",
      slug: "future-of-cloud-computing"
    },
    {
      id: 3,
      title: "Building Autonomous Systems",
      excerpt: "Learn the principles and practices behind creating truly autonomous software systems.",
      date: "2025-01-15",
      category: "System Design",
      readTime: "10 min read",
      slug: "building-autonomous-systems"
    },
    {
      id: 4,
      title: "Next.js Performance Optimization",
      excerpt: "Advanced techniques for optimizing Next.js applications for maximum performance.",
      date: "2025-01-14",
      category: "Web Development",
      readTime: "8 min read",
      slug: "nextjs-performance-optimization"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Zion - AI & Automation Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI automation, cloud computing, and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, trends, and deep dives into the world of AI automation and autonomous systems
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI automation, cloud computing, and autonomous systems delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}