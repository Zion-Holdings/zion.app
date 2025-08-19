import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DiscoverPage() {
  const discoveryTopics = [
    {
      title: "Autonomous Cloud Systems",
      description: "Learn how self-managing cloud infrastructure is revolutionizing the industry",
      icon: "☁️",
      difficulty: "Intermediate",
      duration: "45 min",
      topics: ["Auto-scaling", "Load Balancing", "Cost Optimization"]
    },
    {
      title: "AI-Powered Content Creation",
      description: "Discover how artificial intelligence generates and optimizes content automatically",
      icon: "✍️",
      difficulty: "Beginner",
      duration: "30 min",
      topics: ["SEO Optimization", "Brand Consistency", "Multi-language"]
    },
    {
      title: "Intelligent DevOps",
      description: "Explore self-healing CI/CD pipelines and automated deployment strategies",
      icon: "🔄",
      difficulty: "Advanced",
      duration: "60 min",
      topics: ["Auto-deployment", "Testing", "Monitoring"]
    },
    {
      title: "Machine Learning Automation",
      description: "Understand how ML models automate complex decision-making processes",
      icon: "🤖",
      difficulty: "Advanced",
      duration: "90 min",
      topics: ["Model Training", "Inference", "Auto-tuning"]
    }
  ];

  const featuredResources = [
    {
      title: "Zion Automation Guide",
      type: "PDF Guide",
      description: "Comprehensive guide to setting up autonomous automation systems",
      downloadCount: "2.5k"
    },
    {
      title: "AI Automation Webinar",
      type: "Video",
      description: "Live demonstration of Zion's autonomous systems in action",
      downloadCount: "1.8k"
    },
    {
      title: "Cloud Architecture Templates",
      type: "Templates",
      description: "Ready-to-use cloud infrastructure templates for automation",
      downloadCount: "3.2k"
    }
  ];

  return (
    <>
      <Head>
        <title>Discover | Zion - Learn AI & Automation</title>
        <meta name="description" content="Discover the latest insights, tutorials, and resources on AI automation and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Zion
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Uncover insights, tutorials, and resources that will transform your understanding of autonomous automation
            </p>
          </div>
        </div>

        {/* Discovery Topics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Would You Like to Discover?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {discoveryTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{topic.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {topic.difficulty}
                  </span>
                  <span className="text-gray-500">⏱️ {topic.duration}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {topic.topics.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">📥 {resource.downloadCount}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learning Paths</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beginner</h3>
                <p className="text-gray-600 text-sm mb-4">Start your journey into autonomous automation</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Intermediate</h3>
                <p className="text-gray-600 text-sm mb-4">Deepen your knowledge and skills</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Continue
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced</h3>
                <p className="text-gray-600 text-sm mb-4">Master advanced concepts and techniques</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                  Master
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Discovering?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their operations with autonomous automation.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Learning
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Browse Resources
            </button>
          </div>
        </div>
      </div>
    </>
  );
}