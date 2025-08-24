import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Eye, Calendar, User } from 'lucide-react';

interface ProductListingCardProps {
  listing: {
    id: string;
    title: string;
    description: string;
    price: number | null;
    currency: string;
    category: string;
    tags: string[];
    images: string[];
    createdAt: string;
    rating: number;
    reviewCount: number;
    author: {
      name: string;
      id: string;
      avatarUrl?: string;
    };
    badge?: string;
    badgeColor?: string;
  };
  onRequestQuote?: (listingId: string) => void;
}

export function ProductListingCard({ listing, onRequestQuote }: ProductListingCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom Pricing';
    return `${listing.currency}${price.toLocaleString()}`;
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-zion-slate/10"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-zion-blue/10 to-zion-purple/10">
        {listing.images && listing.images[0] && (
          <img 
            src={listing.images[0]} 
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Badge */}
        {listing.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${listing.badgeColor || 'from-zion-purple to-zion-cyan'}`}>
            {listing.badge}
          </div>
        )}
        
        {/* View count indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
          <Eye className="w-3 h-3" />
          <span>{Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-xs text-zion-cyan font-medium uppercase tracking-wide mb-2">
          {listing.category}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-zion-slate mb-2 line-clamp-2">
          {listing.title}
        </h3>
        
        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
          {listing.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-zion-blue/10 text-zion-blue text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Author and Date */}
        <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3" />
            <span>{listing.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(listing.createdAt)}</span>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(listing.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate/20'}`}
              />
            ))}
          </div>
          <span className="text-sm text-zion-slate-light">
            {listing.rating} ({listing.reviewCount})
          </span>
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-zion-purple">
            {formatPrice(listing.price)}
          </div>
          
          <div className="flex gap-2">
            {listing.price === null ? (
              <button
                onClick={() => onRequestQuote?.(listing.id)}
                className="px-4 py-2 bg-zion-purple hover:bg-zion-purple-dark text-white text-sm rounded-lg transition-colors"
              >
                Request Quote
              </button>
            ) : (
              <Link
                to={`/marketplace/${listing.id}`}
                className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-sm rounded-lg transition-colors"
              >
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}