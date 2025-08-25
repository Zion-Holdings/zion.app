import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Heart, ArrowRight } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function FeaturedListingsSection() {
  const featuredListings = [
    {
      id: 1,
      title: "AI Content Generator Pro",
      category: "AI & Machine Learning",
      price: "$29/month",
      rating: 4.9,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      description: "Advanced AI-powered content creation platform with multi-language support and SEO optimization.",
      features: ["AI Content Generation", "Multi-language Support", "SEO Optimization", "Brand Voice Customization"]
    },
    {
      id: 2,
      title: "Cloud Migration Pro",
      category: "Cloud & DevOps",
      price: "$199/month",
      rating: 4.8,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      description: "Comprehensive cloud migration solution with zero-downtime deployment and cost optimization.",
      features: ["Zero-downtime Migration", "Cost Optimization", "Security Compliance", "24/7 Support"]
    },
    {
      id: 3,
      title: "Cybersecurity Audit Suite",
      category: "Cybersecurity",
      price: "$149/month",
      rating: 4.9,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
      description: "Enterprise-grade security auditing and compliance management platform.",
      features: ["Security Auditing", "Compliance Management", "Threat Detection", "Real-time Monitoring"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="4xl" className="mb-4">
            Featured Services
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions that are 
            transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {listing.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{listing.rating}</span>
                    <span className="text-zion-slate-light text-sm">({listing.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {listing.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {listing.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs text-zion-slate-light bg-white/5 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {listing.price}
                  </span>
                  <Link
                    to={`/micro-saas-services`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
