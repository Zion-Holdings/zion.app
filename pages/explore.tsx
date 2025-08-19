import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ExplorePage() {
  const explorationCategories = [
    {
      title: "AI Automation",
      description: "Discover how artificial intelligence is revolutionizing automation across industries",
      icon: "🤖",
      features: ["Machine Learning", "Neural Networks", "Predictive Analytics"],
      link: "/explore/ai-automation"
    },
    {
      title: "Cloud Computing",
      description: "Explore the latest in cloud infrastructure and autonomous management",
      icon: "☁️",
      features: ["Auto-scaling", "Load Balancing", "Cost Optimization"],
      link: "/explore/cloud-computing"
    },
    {
      title: "DevOps & CI/CD",
      description: "Learn about autonomous development and deployment pipelines",
      icon: "🔄",
      features: ["Auto-deployment", "Testing", "Monitoring"],
      link: "/explore/devops"
    },
    {
      title: "Content Generation",
      description: "See how AI creates and optimizes content automatically",
      icon: "✍️",
      features: ["SEO Optimization", "Brand Consistency", "Multi-language"],
      link: "/explore/content-generation"
    }
  ];

  const trendingTopics = [
    "Autonomous Systems",
    "AI Ethics",
    "Edge Computing",
    "Quantum Computing",
    "Blockchain Automation",
    "IoT Integration"
  ];

  return (
    <>
      <Head>
        <title>Explore | Zion - Discover AI & Automation</title>
        <meta name="description" content="Explore the latest trends and technologies in AI automation, cloud computing, and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Zion
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover the cutting-edge technologies and innovations shaping the future of autonomous automation
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search for topics, technologies, or concepts..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Exploration Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {explorationCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="text-blue-600 hover:text-blue-800 font-semibold">
                  Explore {category.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trending Topics</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {trendingTopics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Learning Path */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Path</h3>
              <p className="text-gray-600 mb-6">
                Start your journey into autonomous automation with our curated learning paths.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                  Fundamentals of AI
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                  Cloud Infrastructure
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                  Autonomous Systems
                </div>
              </div>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Start Learning
              </button>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Try It Live</h3>
              <p className="text-gray-600 mb-6">
                Experience autonomous automation in action with our interactive demos.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  AI Content Generator
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Cloud Auto-scaling
                </button>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  DevOps Pipeline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}