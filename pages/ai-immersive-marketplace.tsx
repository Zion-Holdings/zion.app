import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  aiOptimized: boolean;
}

interface ImmersiveExperience {
  id: string;
  type: 'vr-tour' | 'ar-try-on' | 'interactive-demo' | 'virtual-showroom';
  title: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  price: number;
  image: string;
}

const AIImmersiveMarketplacePage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [experiences, setExperiences] = useState<ImmersiveExperience[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Smart Home Hub',
          description: 'AI-powered home automation system',
          features: ['Voice Control', 'Smart Scheduling', 'Energy Optimization'],
          aiOptimized: true
        },
        {
          id: '2',
          name: 'Fitness Tracker Pro',
          description: 'Advanced health monitoring device',
          features: ['Heart Rate Monitor', 'Sleep Tracking', 'Workout Analysis'],
          aiOptimized: true
        },
        {
          id: '3',
          name: 'Security Camera System',
          description: 'Intelligent surveillance solution',
          features: ['Motion Detection', 'Facial Recognition', 'Cloud Storage'],
          aiOptimized: true
        }
      ];

      const mockExperiences: ImmersiveExperience[] = [
        {
          id: '1',
          type: 'vr-tour',
          title: 'Virtual Home Tour',
          description: 'Experience our smart home products in virtual reality',
          duration: 15,
          difficulty: 'beginner',
          rating: 4.8,
          price: 0,
          image: '/images/vr-home.jpg'
        },
        {
          id: '2',
          type: 'ar-try-on',
          title: 'AR Product Demo',
          description: 'Try products in your space with augmented reality',
          duration: 10,
          difficulty: 'beginner',
          rating: 4.6,
          price: 0,
          image: '/images/ar-demo.jpg'
        },
        {
          id: '3',
          type: 'interactive-demo',
          title: 'Interactive Showcase',
          description: 'Explore product features through interactive demos',
          duration: 20,
          difficulty: 'intermediate',
          rating: 4.9,
          price: 0,
          image: '/images/interactive.jpg'
        }
      ];

      setProducts(mockProducts);
      setExperiences(mockExperiences);
      setLoading(false);
    }, 1000);
  }, []);

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'vr-tour': return '🥽';
      case 'ar-try-on': return '📱';
      case 'interactive-demo': return '🎮';
      case 'virtual-showroom': return '🏪';
      default: return '🎯';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>AI Immersive Marketplace - Zion App</title>
        <meta name="description" content="AI-powered immersive shopping experiences" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Immersive Marketplace</h1>
            <p className="text-gray-600">Experience products through AI-powered immersive technologies</p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex space-x-2">
              {['all', 'vr-tour', 'ar-try-on', 'interactive-demo', 'virtual-showroom'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category === 'all' ? 'All' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                Loading immersive experiences...
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Immersive Experiences */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Immersive Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experiences
                    .filter(exp => selectedCategory === 'all' || exp.type === selectedCategory)
                    .map((experience) => (
                      <div key={experience.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <span className="text-4xl">{getExperienceIcon(experience.type)}</span>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                              {experience.difficulty}
                            </span>
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-400">★</span>
                              <span className="text-sm text-gray-600">{experience.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>Duration: {experience.duration} min</span>
                            <span>{experience.price === 0 ? 'Free' : `$${experience.price}`}</span>
                          </div>
                          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                            Start Experience
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* AI-Optimized Products */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Optimized Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        {product.aiOptimized && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            AI Optimized
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Immersive Technology Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🥽</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Reality</h3>
                    <p className="text-gray-600 text-sm">Experience products in immersive 3D environments</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Augmented Reality</h3>
                    <p className="text-gray-600 text-sm">Try products in your own space with AR technology</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎮</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demos</h3>
                    <p className="text-gray-600 text-sm">Explore product features through interactive experiences</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIImmersiveMarketplacePage;