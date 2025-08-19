import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const exploreCategories = [
    { id: 'all', name: 'All Topics', icon: '🔍' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'automation', name: 'Automation', icon: '⚙️' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'performance', name: 'Performance', icon: '⚡' }
  ];

  const exploreTopics = [
    {
      id: 1,
      title: 'AI-Powered Development Workflows',
      category: 'ai',
      description: 'Discover how artificial intelligence is revolutionizing software development processes.',
      difficulty: 'Intermediate',
      timeToRead: '8 min',
      tags: ['AI', 'workflows', 'development'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Resilient Automation Systems',
      category: 'automation',
      description: 'Learn the principles of creating automation systems that can handle failures gracefully.',
      difficulty: 'Advanced',
      timeToRead: '12 min',
      tags: ['automation', 'resilience', 'systems'],
      featured: false
    },
    {
      id: 3,
      title: 'Cloud-Native Architecture Patterns',
      category: 'cloud',
      description: 'Explore modern cloud architecture patterns for scalable and maintainable applications.',
      difficulty: 'Intermediate',
      timeToRead: '10 min',
      tags: ['cloud', 'architecture', 'patterns'],
      featured: true
    },
    {
      id: 4,
      title: 'Zero-Trust Security Implementation',
      category: 'security',
      description: 'Implement comprehensive security measures with zero-trust principles.',
      difficulty: 'Advanced',
      timeToRead: '15 min',
      tags: ['security', 'zero-trust', 'implementation'],
      featured: false
    },
    {
      id: 5,
      title: 'Performance Optimization Strategies',
      category: 'performance',
      description: 'Master techniques for optimizing application performance and user experience.',
      difficulty: 'Intermediate',
      timeToRead: '9 min',
      tags: ['performance', 'optimization', 'UX'],
      featured: false
    },
    {
      id: 6,
      title: 'Machine Learning in Production',
      category: 'ai',
      description: 'Best practices for deploying and maintaining machine learning models in production.',
      difficulty: 'Advanced',
      timeToRead: '14 min',
      tags: ['ML', 'production', 'deployment'],
      featured: false
    }
  ];

  const filteredTopics = activeCategory === 'all' 
    ? exploreTopics 
    : exploreTopics.filter(topic => topic.category === activeCategory);

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <Head>
        <title>Explore - bolt.new.zion.app</title>
        <meta name="description" content="Explore cutting-edge topics in AI, automation, cloud computing, and more" />
        <meta name="keywords" content="explore, AI, automation, cloud, security, performance, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore & Learn
            </h1>
            <p className="text-xl text-gray-600">
              Dive deep into cutting-edge topics and discover new possibilities in technology
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Topics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {exploreTopics.filter(topic => topic.featured).map((topic) => (
                <div key={topic.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[topic.difficulty as keyof typeof difficultyColors]}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{topic.timeToRead}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Explore Topic →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {exploreCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <div key={topic.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[topic.difficulty as keyof typeof difficultyColors]}`}>
                      {topic.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">{topic.timeToRead}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">{topic.category}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Explore Topic →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learning Paths</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Beginner Path</h3>
                <p className="text-gray-600 mb-4">
                  Start your journey with foundational concepts and gradually build up to advanced topics.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Introduction to Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Basic AI Concepts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Cloud Fundamentals</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Advanced Path</h3>
                <p className="text-gray-600 mb-4">
                  Deep dive into complex topics and cutting-edge technologies for experienced developers.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <span>Advanced ML Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <span>Zero-Trust Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    <span>Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;