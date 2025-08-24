import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Heart, ArrowRight, TrendingUp } from 'lucide-react';

export function FeaturedListingsSection() {
  const featuredListings = [
    {
      id: 1,
      title: 'AI-Powered Customer Analytics Platform',
      description: 'Advanced machine learning solution for customer behavior analysis and predictive insights',
      category: 'AI Services',
      price: '$2,500',
      rating: 4.9,
      reviews: 127,
      views: 2340,
      likes: 189,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500',
      tags: ['Machine Learning', 'Analytics', 'Customer Insights'],
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Audit & Penetration Testing',
      description: 'Comprehensive security assessment and vulnerability testing for enterprise systems',
      category: 'Security',
      price: '$1,800',
      rating: 4.8,
      reviews: 89,
      views: 1890,
      likes: 156,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500',
      tags: ['Cybersecurity', 'Penetration Testing', 'Security Audit'],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration & DevOps Automation',
      description: 'End-to-end cloud migration services with automated DevOps pipelines',
      category: 'Cloud Services',
      price: '$3,200',
      rating: 4.7,
      reviews: 156,
      views: 3120,
      likes: 234,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500',
      tags: ['Cloud Migration', 'DevOps', 'Automation'],
      featured: false
    },
    {
      id: 4,
      title: 'Custom E-commerce Platform Development',
      description: 'Scalable e-commerce solution with advanced features and mobile optimization',
      category: 'Development',
      price: '$4,500',
      rating: 4.9,
      reviews: 203,
      views: 4560,
      likes: 345,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500',
      tags: ['E-commerce', 'Web Development', 'Mobile App'],
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900/50 to-zinc-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-blue/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Trending Now</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Marketplace Listings
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Discover the most popular and highly-rated services from our verified professionals. 
            These top-tier solutions are trusted by businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredListings.map((listing) => (
            <div
              key={listing.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 ${
                listing.featured 
                  ? 'border-zion-cyan/50 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5' 
                  : 'border-white/10 bg-white/5 hover:border-zion-cyan/30'
              }`}
            >
              {/* Featured Badge */}
              {listing.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{listing.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{listing.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{listing.likes}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-cyan font-medium">{listing.category}</span>
                    <span className="text-2xl font-bold text-white">{listing.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {listing.title}
                  </h3>
                  
                  <p className="text-zinc-400 line-clamp-2">
                    {listing.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {listing.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(listing.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zinc-400">
                      ({listing.reviews} reviews)
                    </span>
                  </div>
                  
                  <Link
                    to={`/marketplace/${listing.id}`}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/marketplace"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Listings</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}