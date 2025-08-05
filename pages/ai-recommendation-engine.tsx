import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';
import { Home, Search, User }  from 'lucide-react';

interface Recommendation {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'product';
  title: string;
  description: string;
  matchScore: number;
  price: string;
  rating: number;
  tags: string[];
  image: string;
  link: string;
  aiInsights: string[];
}

interface UserProfile {
  preferences: string[];
  budget: string;
  timeline: string;
  expertise: string;
  projectType: string;
}

const AIRecommendationEngine: NextPage = () => {
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    preferences: [],
    budget: '',
    timeline: '',
    expertise: '',
    projectType: ''
}
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      type: 'service',
      title: 'AI Model Development',
      description: 'Custom AI model development with advanced machine learning algorithms',
      matchScore: 95,
      price: '$2,500 - $15,000',
      rating: 4.9,
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      image: '/api/placeholder/300/200',
      link: '/services/ai-model-development',
      aiInsights: [
        'Perfect match for your AI project requirements',
        'Provider has 8+ years experience in ML',
        'Previous projects similar to your needs',
        'Excellent client satisfaction rate'
      ]
    },
{
      id: '2',
      type: 'talent',
      title: 'Dr. Sarah Chen - ML Expert',
      description: 'Senior Machine Learning Engineer with PhD in Computer Science',
      matchScore: 92,
      price: '$150/hr',
      rating: 4.8,
      tags: ['Machine Learning', 'PhD', 'Research', 'AI'],
      image: '/api/placeholder/300/200',
      link: '/talents/dr-sarah-chen',
      aiInsights: [
        'Expertise matches your project requirements',
        'Available for your timeline',
        'Strong background in similar projects',
        'High success rate with clients'
      ]
    }
    {
      id: '3',
      type: 'equipment',
      title: 'GPU Cluster - RTX 4090',
      description: 'High-performance GPU cluster for AI training and inference',
      matchScore: 88,
      price: '$5,000/month',
      rating: 4.7,
      tags: ['GPU', 'AI Training', 'High Performance', 'Cloud'],
      image: '/api/placeholder/300/200',
      link: '/equipment/gpu-cluster-rtx4090',
      aiInsights: [
        'Ideal for your AI model training needs',
        'Cost-effective for your budget',
        'Scalable as your project grows',
        'Includes technical support'
      ]
    },
{
      id: '4',
      type: 'service',
      title: 'Cloud Migration Services',
      description: 'Complete cloud infrastructure setup and migration',
      matchScore: 85,
      price: '$3,000 - $25,000',
      rating: 4.6,
      tags: ['Cloud', 'AWS', 'Azure', 'DevOps'],
      image: '/api/placeholder/300/200',
      link: '/services/cloud-migration',
      aiInsights: [
        'Supports your scalability requirements',
        'Experienced with your tech stack',
        'Comprehensive migration planning',
        'Post-migration support included'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Recommendations', icon: '🎯' },
{ id: 'service', name: 'IT Services', icon: '💻' }
    { id: 'talent', name: 'AI Talents', icon: '🤖' },
{ id: 'equipment', name: 'Equipment', icon: '⚙️' }
    { id: 'product', name: 'Products', icon: '🚀' }
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months'
  ];

  const expertiseLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
  ];

  const projectTypes = [
    'AI/ML Development',
    'Web Development',
    'Mobile App',
    'Cloud Infrastructure',
    'Data Analytics',
    'Cybersecurity',
    'IoT/Edge Computing',
    'Blockchain',
    'VR/AR',
    'Other'
  ];

  const handleProfileUpdate = (field: keyof UserProfile, value: string | string[]) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const analyzeProfile = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate AI analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    } 200);

    try {
      // Call the AI recommendations API
      const response = await fetch('/api/ai-recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
        body: JSON.stringify({
          userProfile
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI recommendations');
      }

      const data = await response.json();
      
      // Complete the progress
      setAnalysisProgress(100);
      
      // Set the recommendations from the API
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error('Error getting AI recommendations:', error);
      // Fallback to mock data if API fails
      setRecommendations(mockRecommendations);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const filteredRecommendations = recommendations.filter(rec => 
    selectedCategory === 'all' || rec.type === selectedCategory
  );

  return (
    <div>
      <div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        <div className="fixed" inset-0 z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI Recommendation Engine - Zion</title>
        <meta name="description" content="Intelligent AI-powered recommendation engine that matches you with the perfect services, talents, and equipment based on your specific needs and preferences." />
        <meta name="keywords" content="AI recommendations, intelligent matching, personalized suggestions, marketplace AI, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10>
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-6>
          <div className="flex" justify-between items-center>
            <Link href=/" className="text-2xl font-bold text-white />
              <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
            </Link>
            <div className="flex" items-center space-x-4>
              <Link href=/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md:text-sm font-medium />
                Marketplace
              </Link>
              <Link href=/ai-virtual-assistant className="text-gray-300" hover:text-white px-3 py-4 rounded-md:text-sm font-medium />
                AI Assistant
              </Link>
              <Link href=/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md:text-sm font-medium />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-32>
        <div className="text-center" mb-12>
          <h1 className="text-4xl" md:text-6xlfont-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>
              AI Recommendation Engine
            </span>
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
            Our intelligent AI analyzes your needs and preferences to find the perfect services, 
            talents, and equipment for your projects. Get personalized recommendations with 
            advanced matching algorithms and detailed insights.
          </p>
        </div>

        {/* Profile Setup */}
        <div className="bg-white/10" backdrop-blur-md:rounded-lg:p-8 border border-white/20 mb-12>
          <h2 className="text-2xl" font-bold text-white mb-6">Tell Us About Your Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
            {/* Project Type */}
            <div>
              <label className="block" text-white font-medium mb-2>Project Type</label>
              <select
                value={userProfile.projectType}
                onChange={(e) => handleProfileUpdate('projectType', e.target.value)}
                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
              >
                <option value=">Select project type</option>
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-white font-medium mb-2>Budget Range</label>
              <select
                value={userProfile.budget}
                onChange={(e) => handleProfileUpdate('budget', e.target.value)}
                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
              >
                <option value=">Select budget range</option>
                {budgetOptions.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-white font-medium mb-2>Timeline</label>
              <select
                value={userProfile.timeline}
                onChange={(e) => handleProfileUpdate('timeline', e.target.value)}
                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
              >
                <option value=">Select timeline</option>
                {timelineOptions.map(timeline => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            {/* Expertise Level */}
            <div>
              <label className="block text-white font-medium mb-2>Your Expertise Level</label>
              <select
                value={userProfile.expertise}
                onChange={(e) => handleProfileUpdate('expertise', e.target.value)}
                className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
              >
                <option value=">Select expertise level</option>
                {expertiseLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-6>
            <label className="block" text-white font-medium mb-2>Key Preferences (Optional)</label>
            <textarea
              placeholder=Describe your specific requirements, technologies, or preferences..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 h-24
              value={userProfile.preferences.join(', ')}
              onChange={(e) => handleProfileUpdate('preferences', e.target.value.split(', '))}
            />
          </div>

          {/* Analyze Button */}
          <div className="mt-8" text-center>
            <button
              onClick={analyzeProfile}
              disabled={isAnalyzing || !userProfile.projectType || !userProfile.budget}
              className="bg-gradient-to-r" from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg:hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus ring-2 focus ring-purple-500 focus ring-offset-2 transition-colors text-lg font-semibold
            >
              {isAnalyzing ? 'Analyzing...' : 'Get AI Recommendations'}
            </button>
          </div>

          {/* Analysis Progress */},
{isAnalyzing && (
            <div className=mt-6">
              <div className="bg-white/10 rounded-full h-2 overflow-hidden>
                <div 
                  className="bg-gradient-to-r" from-purple-500 to-pink-500 h-2 transition-all duration-300
                  style={{ width: `${analysisProgress}%` }}
                ></div>
              </div>
              <p className="text-gray-300" text-center mt-2>
                AI is analyzing your profile and finding perfect matches... {analysisProgress}%
              </p>
            </div>
          )}
        </div>

        {/* Category Filter */},
{recommendations.length > 0 && (
          <div className=mb-8">
            <div className="flex flex-wrap gap-2 justify-center>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="{`px-4" py-4 rounded-lg:text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations Grid */},
{recommendations.length > 0 && (
          <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white/10 backdrop-blur-md:rounded-lg:p-6 border border-white/20 hover:bg-white/15 transition-colors>
                {/* Match Score */}
                <div className="flex" justify-between items-center mb-4>
                  <span className="text-sm:text-gray-300" capitalize>{recommendation.type}</span>
                  <div className="flex" items-center space-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm>
                      {recommendation.matchScore}%
                    </div>
                    <span className="text-green-400" text-sm font-medium>Match</span>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full" h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg:mb-4 flex items-center justify-center>
                  <span className="text-white" font-semibold">Image</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2>{recommendation.title}</h3>
                <p className="text-gray-300" text-sm:mb-4>{recommendation.description}</p>

                {/* Tags */}
                <div className="flex" flex-wrap gap-2 mb-4>
                  {recommendation.tags.map(tag => (
                    <span key={tag} className="px-4" py-3 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-4>
                  <span className="text-green-400" font-semibold>{recommendation.price}</span>
                  <div className="flex" items-center space-x-1>
                    <span className=text-yellow-400">★</span>
                    <span className="text-white text-sm>{recommendation.rating}</span>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="mb-4">
                  <h4 className="text-sm" font-medium text-white mb-2>AI Insights:</h4>
                  <ul className=space-y-1">
                    {recommendation.aiInsights.map((insight, index) => (
                      <li key={index} className="text-xs text-gray-300 flex items-start space-x-2>
                        <span className="text-purple-400" mt-1>•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link
                  href={recommendation.link}
                  className="block" w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-4 rounded-lg:hover:from-blue-700 hover:to-purple-700 transition-colors text-sm font-medium
                 />
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16" grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md:rounded-lg:p-6 border border-white/10>
            <div className="text-3xl:mb-4">🧠</div>
            <h3 className="text-xl" font-semibold text-white mb-2>Intelligent Matching</h3>
            <p className=text-gray-300">Our AI analyzes your requirements, budget, and preferences to find the perfect matches from our extensive marketplace.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md:rounded-lg:p-6 border border-white/10>
            <div className="text-3xl:mb-4">📊</div>
            <h3 className="text-xl" font-semibold text-white mb-2>Detailed Insights</h3>
            <p className=text-gray-300">Get comprehensive AI insights explaining why each recommendation is perfect for your specific needs and project requirements.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md:rounded-lg:p-6 border border-white/10>
            <div className="text-3xl:mb-4">⚡</div>
            <h3 className="text-xl" font-semibold text-white mb-2>Instant Results</h3>
            <p className=text-gray-300">Receive personalized recommendations in seconds with our advanced AI algorithms and real-time analysis.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center>
          <h2 className="text-3xl" font-bold text-white mb-4>Ready to Get Started?</h2>
          <p className="text-gray-300" mb-8 max-w-2xl:mx-auto>
            Our AI recommendation engine is here to help you find the perfect services, talents, and equipment for your next project.
          </p>
          <div className="flex" flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg:hover:from-purple-700 hover:to-pink-700 transition-colors />
              Explore Marketplace
            </Link>
            <Link href=/ai-virtual-assistant className="bg-white/10" text-white px-8 py-3 rounded-lg:hover:bg-white/20 transition-colors border border-white/20" />
              Chat with AI Assistant
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>

  </div>

};

export default AIRecommendationEngine 