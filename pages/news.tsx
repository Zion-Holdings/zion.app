import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Zion Launches Autonomous Cloud Automation Platform",
      excerpt: "Revolutionary new platform enables truly autonomous cloud management with zero human intervention.",
      date: "2025-01-17",
      category: "Product Launch",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "AI-Powered Content Generation Reaches New Heights",
      excerpt: "Our autonomous content systems now generate high-quality, SEO-optimized content at scale.",
      date: "2025-01-16",
      category: "Technology",
      image: "/api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Zion Achieves 99.9% Uptime Milestone",
      excerpt: "Continuous operation excellence demonstrates the reliability of autonomous systems.",
      date: "2025-01-15",
      category: "Achievement",
      image: "/api/placeholder/400/250",
      readTime: "2 min read"
    },
    {
      id: 4,
      title: "Partnership with Leading Cloud Providers Announced",
      excerpt: "Strategic partnerships expand Zion's reach across major cloud platforms.",
      date: "2025-01-14",
      category: "Partnership",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Product Launch", "Technology", "Achievement", "Partnership", "Industry News"];

  return (
    <>
      <Head>
        <title>News | Zion - Latest Updates & Announcements</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and announcements from Zion." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion News
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Latest updates, product launches, and insights from the world of autonomous cloud automation
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <Link 
                      href={`/news/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Load More News
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new features, product launches, and industry insights.
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