import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContentHubPage() {
  const contentCategories = [
    {
      title: "Tutorials",
      description: "Step-by-step guides to master autonomous automation",
      icon: "📚",
      count: 45,
      color: "blue"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful automation implementations",
      icon: "📊",
      count: 23,
      color: "green"
    },
    {
      title: "Whitepapers",
      description: "In-depth research and technical documentation",
      icon: "📄",
      count: 12,
      color: "purple"
    },
    {
      title: "Webinars",
      description: "Live and recorded sessions with industry experts",
      icon: "🎥",
      count: 18,
      color: "red"
    },
    {
      title: "Templates",
      description: "Ready-to-use automation configurations and scripts",
      icon: "⚙️",
      count: 67,
      color: "orange"
    },
    {
      title: "Videos",
      description: "Visual guides and demonstrations",
      icon: "🎬",
      count: 34,
      color: "indigo"
    }
  ];

  const featuredContent = [
    {
      title: "Complete Guide to Autonomous Cloud Management",
      type: "Tutorial",
      description: "Learn how to set up and manage truly autonomous cloud infrastructure",
      readTime: "15 min read",
      difficulty: "Intermediate",
      author: "Zion Team"
    },
    {
      title: "AI Content Generation: From Theory to Practice",
      type: "Case Study",
      description: "How a Fortune 500 company automated their content creation process",
      readTime: "8 min read",
      difficulty: "Advanced",
      author: "Sarah Chen"
    },
    {
      title: "Building Self-Healing DevOps Pipelines",
      type: "Whitepaper",
      description: "Comprehensive guide to creating resilient automation workflows",
      readTime: "25 min read",
      difficulty: "Expert",
      author: "Dr. Michael Rodriguez"
    }
  ];

  return (
    <>
      <Head>
        <title>Content Hub | Zion - AI & Automation Resources</title>
        <meta name="description" content="Access Zion's comprehensive library of tutorials, case studies, whitepapers, and resources on AI automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Hub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your central destination for AI automation knowledge, tutorials, and resources
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search for content..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Tutorials</option>
                <option>Case Studies</option>
                <option>Whitepapers</option>
                <option>Webinars</option>
                <option>Templates</option>
                <option>Videos</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCategories.map((category, index) => (
              <Link 
                key={index}
                href={`/content-hub/${category.title.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} items</span>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="space-y-6">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{content.difficulty}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.title}</h3>
                    <p className="text-gray-600 mb-4">{content.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {content.author}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Statistics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Hub Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">199</div>
                <div className="text-gray-600">Total Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">45k+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Content Updates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contribute to Our Content Hub
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have expertise in AI automation? Share your knowledge with our community and help others learn.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Submit Content
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Become an Author
            </button>
          </div>
        </div>
      </div>
    </>
  );
}