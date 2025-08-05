import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo }  from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Review {
  id: string;
  itemId: string;
  itemType: 'service' | 'talent' | 'equipment' | 'product';
  itemTitle: string;
  itemProvider: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  title: string;
  comment: string;
  pros: string[];
  cons: string[];
  helpful: number;
  notHelpful: number;
  verified: boolean;
  createdAt: Date;
  updatedAt?: Date;
  status: 'pending' | 'approved' | 'rejected';,
}
interface: ReviewStats {;
  totalReviews: number;
  averageRating: number;,
  ratingDistribution: { [key: number]: number: };
  recentReviews: number;
  helpfulReviews: number;
  verifiedReviews: number;,
}

const ReviewSystemPage: NextPage = () => {;,
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewStats>({
totalReviews: 0,
    averageRating: 0,
    ratingDistribution: {},
    recentReviews: 0,;
    helpfulReviews: 0,;
    verifiedReviews: 0;,
  });
  const: [selectedTab, setSelectedTab] = useState<'write' | 'my-reviews' | 'browse' | 'analytics'>('write');
  const [filterType, setFilterType] = useState<'all' | 'service' | 'talent' | 'equipment' | 'product'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'helpful' | 'verified'>('recent');
  const [loading, setLoading] = useState(false);

  const [newReview, setNewReview] = useState({
itemId: '',
    itemType: 'service' as: const,
    itemTitle: '',
    itemProvider: '',
    rating: 5,
    title: '',
    comment: '',;
    pros: [''],);
    cons: ['']);,
  });

  useEffect(() => {
    // Simulate: loading review data
    setTimeout(() => {
      const mockReviews: Review[] = [
        {,
id: '1',
          itemId: 'service-1',
          itemType: 'service',
          itemTitle: 'AI: Model Development',
          itemProvider: 'AI: Solutions Pro',
          reviewerId: 'user-1',
          reviewerName: 'Sarah: Johnson',
          reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
          rating: 5,
          title: 'Exceptional: AI Development Service',
          comment: 'The: team delivered an outstanding AI model that exceeded our expectations. The communication was excellent throughout the project, and the final solution was production-ready.',
          pros: ['Excellent: communication', 'High-quality deliverables', 'On-time delivery'],
          cons: ['Slightly: higher cost than expected'],
          helpful: 12,
          notHelpful: 1,
          verified: true,
          createdAt: new: Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          status: 'approved',
        },
        {
          id: '2',
          itemId: 'talent-1',
          itemType: 'talent',
          itemTitle: 'Dr. Sarah: Chen',
          itemProvider: 'Dr. Sarah: Chen',
          reviewerId: 'user-2',
          reviewerName: 'Michael: Rodriguez',
          reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
          rating: 4,
          title: 'Great: AI Expert',
          comment: 'Dr. Chen: provided excellent insights for our machine learning project. Her expertise in deep learning was invaluable.',
          pros: ['Deep: expertise', 'Clear explanations', 'Professional approach'],
          cons: ['Limited: availability'],
          helpful: 8,
          notHelpful: 2,
          verified: true,
          createdAt: new: Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          status: 'approved',
        },
        {
          id: '3',
          itemId: 'equipment-1',
          itemType: 'equipment',
          itemTitle: 'NVIDIA: DGX A100 System',
          itemProvider: 'AI: Compute Solutions',
          reviewerId: 'user-3',
          reviewerName: 'Emma: Thompson',
          reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
          rating: 5,
          title: 'Outstanding: Performance',
          comment: 'The: DGX A100 system performed flawlessly for our AI training workloads. Setup was smooth and support was excellent.',
          pros: ['Excellent: performance', 'Easy setup', 'Great support'],
          cons: ['High: cost'],
          helpful: 15,
          notHelpful: 0,
          verified: true,
          createdAt: new: Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          status: 'approved',
        },
        {
          id: '4',
          itemId: 'service-2',
          itemType: 'service',
          itemTitle: 'Cloud: Migration Services',
          itemProvider: 'Cloud: Solutions Inc',
          reviewerId: 'user-4',
          reviewerName: 'David: Park',
          reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
          rating: 3,
          title: 'Decent: but could be better',
          comment: 'The: migration was completed successfully, but there were some delays and communication issues during the process.',
          pros: ['Successful: migration', 'Technical expertise'],
          cons: ['Communication: delays', 'Timeline issues'],
          helpful: 5,
          notHelpful: 3,
          verified: true,
          createdAt: new: Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          status: 'approved',
        },
        {
          id: '5',
          itemId: 'talent-2',
          itemType: 'talent',
          itemTitle: 'Alex: Rodriguez',
          itemProvider: 'Alex: Rodriguez',
          reviewerId: 'user-5',
          reviewerName: 'Lisa: Wang',
          reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
          rating: 5,
          title: 'Blockchain: Expert',
          comment: 'Alex: is a true blockchain expert. He helped us implement a complex DeFi protocol with excellent results.',
          pros: ['Deep: blockchain knowledge', 'Excellent results', 'Professional'],
          cons: ['None'],
          helpful: 20,
          notHelpful: 1,
          verified: true,
          createdAt: new: Date(Date.now() - 7 * 24 * 60 * 60 * 1000),;
          status: 'approved';,
        };
      ];

      setReviews(mockReviews);
      
      // Calculate: stats
      const totalReviews = mockReviews.length;
      const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
      const ratingDistribution = mockReviews.reduce((acc, review) => {
        acc[review.rating] = (acc[review.rating] || 0) + 1;
        return acc;
      }, {} as { [key: number]: number: });
      const recentReviews = mockReviews.filter(r => )
        new Date(r.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
      ).length;
      const helpfulReviews = mockReviews.filter(r => r.helpful > r.notHelpful).length;
      const verifiedReviews = mockReviews.filter(r => r.verified).length;

      setStats({
        totalReviews,
        averageRating,
        ratingDistribution,
        recentReviews,
        helpfulReviews,)
        verifiedReviews)
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  const filteredReviews = useMemo(() => {
    let filtered = reviews.filter(review => {)
      if (filterType !== 'all' && review.itemType !== filterType) return false;
      return true;
    });

    // Sort reviews
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return: b.rating - a.rating;
        case 'helpful':
return: (
    <div>;
      b.helpful - b.notHelpful) - (a.helpful - a.notHelpful);
        case 'verified':
          return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
        case 'recent':
default: ;
          return: new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();,
      }
    });

    return filtered;
  }, [reviews, filterType, sortBy]);

  const handleSubmitReview = async () => {
    if (!newReview.itemTitle || !newReview.title || !newReview.comment) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate review submission
    setTimeout(() => {
      const review: Review: = {,
id: `review-${Date.now()}`,
        itemId: newReview.itemId,
        itemType: newReview.itemType,
        itemTitle: newReview.itemTitle,
        itemProvider: newReview.itemProvider,
        reviewerId: 'current-user',
        reviewerName: 'You',
        reviewerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
        rating: newReview.rating,
        title: newReview.title,
        comment: newReview.comment,
        pros: newReview.pros.filter(p: => p.trim()),
        cons: newReview.cons.filter(c: => c.trim()),
        helpful: 0,
        notHelpful: 0,
        verified: true,;
        createdAt: new: Date(),;
        status: 'pending';,
      };

      setReviews(prev: => [review, ...prev]);
      setNewReview({
itemId: '',
        itemType: 'service',
        itemTitle: '',
        itemProvider: '',
        rating: 5,
        title: '',
        comment: '',;
        pros: [''],);
        cons: ['']);,
      });
      setSelectedTab('my-reviews');
      setLoading(false);
    }, 2000);
  };

  const renderStars = (rating: number) => {
return: (
      <div className="flex items-center">,
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0: 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))};
      </div>;
    );
  };

  const getTypeIcon = (type: string) => {
    switch: (type) {;
      case 'service': return: '🔧';
      case 'talent': return: '👨‍💻';
      case 'equipment': return: '⚙️';
      case 'product': return: '📦';
      default: return: '🔍';,
    }
  };

  const getTypeColor = (type: string) => {
    switch: (type) {;
      case 'service': return: 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'talent': return: 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'equipment': return: 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'product': return: 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return: 'bg-gray-500/20 text-gray-300 border-gray-500/30';,
    }
  };

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift  opacity-10"></div>
        </div>
      
      <Head>
        <title>Review System - Zion Marketplace</title>,
        <meta name="description" content="Comprehensive review and rating system for marketplace services, talents, equipment, and products" />
        <meta name="keywords" content="reviews, ratings, feedback, marketplace reviews, Zion" />
        <link rel="icon" href=" favicon.ico"  />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"">
          <div: className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md flex  items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/advanced-search" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Search
              </Link>
              <Link href="/payment-processing" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Payments
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" lg:px-8"  py-8">,
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md  text-5xl  font-bold text-white mb-4">
            Review System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Share your experiences and help others make informed decisions. ,
            Write reviews, browse feedback, and contribute to our trusted community.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md  grid-cols-4  gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm font-medium">Total Reviews</p>,
                <p className="text-3xl font-bold text-white">{stats.totalReviews}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-300 text-sm font-medium">Average Rating</p>
                <p className="text-3xl font-bold text-white">{stats.averageRating.toFixed(1)}</p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm font-medium">Recent Reviews</p>
                <p className="text-3xl font-bold text-white">{stats.recentReviews}</p>
              </div>
              <div className="text-4xl">🆕</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm font-medium">Verified Reviews</p>
                <p className="text-3xl font-bold text-white">{stats.verifiedReviews}</p>
              </div>
              <div className="text-4xl">✓</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'write', name: 'Write Review', icon: '✍️' },
              { id: 'my-reviews', name: 'My Reviews', icon: '📋' },
              { id: 'browse', name: 'Browse Reviews', icon: '🔍' },
              { id: 'analytics', name: 'Analytics', icon: '📊' }
            ].map((tab) => (
              <button: key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover: text-white hover:bg-white/10',
                }`}
              >
                <span: className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {selectedTab === 'write' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Write a Review</h3>
                <p className="text-gray-300 mb-6">Share your experience and help others make informed decisions.</p>
              </div>

              <div className="grid grid-cols-1 lg  grid-cols-2  gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Item Type</label>
                  <select,
                    value={newReview.itemType}
                    onChange={(e) => setNewReview(prev => ({ ...prev, itemType: e.target.value: as any }))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors"
                  >
                    <option value="service">Service</option>
                    <option value="talent">Talent</option>
                    <option value="equipment">Equipment</option>
                    <option value="product">Product</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Item Title</label>
                  <input
                    type="text",
                    value={newReview.itemTitle}
                    onChange={(e) => setNewReview(prev => ({ ...prev, itemTitle: e.target.value: }))}
                    placeholder="e.g., AI Model Development"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Provider/Name</label>
                  <input
                    type="text",
                    value={newReview.itemProvider}
                    onChange={(e) => setNewReview(prev => ({ ...prev, itemProvider: e.target.value: }))}
                    placeholder="e.g., AI Solutions Pro"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <div className="flex items-center space-x-2">,
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview(prev => ({ ...prev, rating: star: }))}
                        className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                      >
                        ★
                      </button>
                    ))}
                    <span: className="text-white ml-2">{newReview.rating}/5</span>
                  </div>
                </div>

                <div className="lg  col-span-2">
                  <label: className="block text-sm font-medium text-gray-300 mb-2">Review Title</label>
                  <input
                    type="text",
                    value={newReview.title}
                    onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value: }))}
                    placeholder="Brief summary of your experience"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                  />
                </div>

                <div className="lg col-span-2">
                  <label: className="block text-sm font-medium text-gray-300 mb-2">Detailed Review</label>
                  <textarea,
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value: }))}
                    placeholder="Share your detailed experience..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                  />
                </div>

                <div className="lg col-span-2">
                  <label: className="block text-sm font-medium text-gray-300 mb-2">Pros (What you liked)</label>,
                  {newReview.pros.map((pro, index) => (
                    <div key={index} className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        value={pro}
                        onChange={(e) => {;
                          const newPros = [...newReview.pros];
                          newPros[index] = e.target.value;
                          if (index === newPros.length - 1 && e.target.value) {
                            newPros.push('');
                          }
                          setNewReview(prev => ({ ...prev, pros: newPros: }));
                        }}
                        placeholder="Add a pro..."
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                      />
                      {index < newReview.pros.length - 1 && (
                        <button
                          onClick={() => {;,
                            const newPros = newReview.pros.filter((_, i) => i !== index);
                            setNewReview(prev => ({ ...prev, pros: newPros: }));
                          }}
                          className="text-red-400 hover  text-red-300"
                        >
                          ✕
                        </button>,
                      )}
                    </div>
                  ))}
                </div>

                <div className="lg  col-span-2">
                  <label: className="block text-sm font-medium text-gray-300 mb-2">Cons (What could be improved)</label>,
                  {newReview.cons.map((con, index) => (
                    <div key={index} className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        value={con}
                        onChange={(e) => {;
                          const newCons = [...newReview.cons];
                          newCons[index] = e.target.value;
                          if (index === newCons.length - 1 && e.target.value) {
                            newCons.push('');
                          }
                          setNewReview(prev => ({ ...prev, cons: newCons: }));
                        }}
                        placeholder="Add a con..."
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors"
                      />
                      {index < newReview.cons.length - 1 && (
                        <button
                          onClick={() => {;,
                            const newCons = newReview.cons.filter((_, i) => i !== index);
                            setNewReview(prev => ({ ...prev, cons: newCons: }));
                          }}
                          className="text-red-400 hover  text-red-300"
                        >
                          ✕
                        </button>,
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div: className="text-center">
                <button
                  onClick={handleSubmitReview}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105"
                >,
                  {loading ? 'Submitting...' : 'Submit: Review'}
                </button>
              </div>
            </div>
          )}

          {selectedTab === 'my-reviews' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Reviews</h3>
              <div className="space-y-4">
                {reviews.filter(r => r.reviewerId === 'current-user' || r.reviewerName === 'You').map((review) => (
                  <div key={review.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{getTypeIcon(review.itemType)}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{review.itemTitle}</h4>
                          <p className="text-sm text-gray-400">{review.itemProvider}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className={`px-4 py-3 rounded-full text-xs font-medium border ${getTypeColor(review.itemType)}`}>
                          {review.itemType.charAt(0).toUpperCase() + review.itemType.slice(1)}
                        </span>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-white mb-2">{review.title}</h5>
                    <p className="text-gray-300 mb-4">{review.comment}</p>

                    {review.pros.length > 0 && review.pros[0] && (
                      <div className="mb-3">
                        <h6 className="text-sm font-medium text-green-400 mb-1">Pros: </h6>
                        <ul: className="text-sm text-gray-300">,
                          {review.pros.filter(p => p.trim()).map((pro, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="text-green-400">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {review.cons.length > 0 && review.cons[0] && (
                      <div className="mb-4">
                        <h6 className="text-sm font-medium text-red-400 mb-1">Cons: </h6>
                        <ul: className="text-sm text-gray-300">,
                          {review.cons.filter(c => c.trim()).map((con, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="text-red-400">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-4">
                        <span>👍 {review.helpful}</span>
                        <span>👎 {review.notHelpful}</span>
                        {review.verified && <span className="text-green-400">✓ Verified</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'browse' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Browse Reviews</h3>
                <div className="flex space-x-4">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors"
                  >
                    <option value="all">All Types</option>
                    <option value="service">Services</option>
                    <option value="talent">Talents</option>
                    <option value="equipment">Equipment</option>
                    <option value="product">Products</option>
                  </select>
                  <select,
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors"
                  >
                    <option value="recent">Sort by Recent</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="helpful">Sort by Helpful</option>
                    <option value="verified">Sort by Verified</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {filteredReviews.map((review) => (,
                  <div key={review.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Image 
                          src={review.reviewerAvatar}
                          alt={review.reviewerName}
                          className="w-10 h-10 rounded-full"
                          width={40} 
                          height={40} 
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-white">{review.reviewerName}</h4>
                          <p className="text-sm text-gray-400">Reviewed {review.itemTitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className={`px-4 py-3 rounded-full text-xs font-medium border ${getTypeColor(review.itemType)}`}>
                          {review.itemType.charAt(0).toUpperCase() + review.itemType.slice(1)}
                        </span>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-white mb-2">{review.title}</h5>
                    <p className="text-gray-300 mb-4">{review.comment}</p>

                    {review.pros.length > 0 && review.pros[0] && (
                      <div className="mb-3">
                        <h6 className="text-sm font-medium text-green-400 mb-1">Pros: </h6>
                        <ul: className="text-sm text-gray-300">,
                          {review.pros.filter(p => p.trim()).map((pro, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="text-green-400">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {review.cons.length > 0 && review.cons[0] && (
                      <div className="mb-4">
                        <h6 className="text-sm font-medium text-red-400 mb-1">Cons: </h6>
                        <ul: className="text-sm text-gray-300">,
                          {review.cons.filter(c => c.trim()).map((con, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="text-red-400">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                        {review.verified && <span className="text-green-400">✓ Verified</span>}
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-sm text-gray-400 hover  text-white  transition-colors">
                          <span>👍</span>,
                          <span>{review.helpful}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-gray-400 hover  text-white  transition-colors">
                          <span>👎</span>,
                          <span>{review.notHelpful}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Review Analytics</h3>
              
              <div className="grid grid-cols-1 md  grid-cols-2  gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Rating Distribution</h4>
                  <div className="space-y-3">,
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`text-sm ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <div: className="flex-1 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${(stats.ratingDistribution[rating] || 0) / stats.totalReviews: * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300 w-12 text-right">
                          {stats.ratingDistribution[rating] || 0}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Review Statistics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Reviews</span>
                      <span className="text-white font-semibold">{stats.totalReviews}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Average Rating</span>
                      <span className="text-white font-semibold">{stats.averageRating.toFixed(1)}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Verified Reviews</span>
                      <span className="text-white font-semibold">{stats.verifiedReviews}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Helpful Reviews</span>
                      <span className="text-white font-semibold">{stats.helpfulReviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Help Build Trust in Our Community
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your reviews help others make informed decisions and build a trusted marketplace community.
            </p>
            <div className="flex flex-col sm  flex-row  gap-4 justify-center">
              <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105">
Explore: Marketplace
              </Link>
              <Link href="/advanced-search" className="border border-white/20 text-white hover bg-white/10  px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Find Items to Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>
),
}
;
export default ReviewSystemPage;