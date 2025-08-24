
import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Eye } from "lucide-react";

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
}

export function FeaturedListingsSection({ showTitle = true }: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
      id: "advanced-nlp-model",
      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
      category: "AI Models",
      tags: ["AI", "NLP", "Machine Learning"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,
      author: {
        name: "TechAI Labs",
        id: "tech-ai-labs",
        avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format"
      },
      badge: "Top Rated",
      badgeColor: "from-yellow-500 to-orange-500"
    },
    {
      id: "image-generation-service",
      title: "AI Image Generation Service",
      description: "Create stunning visuals with our advanced AI image generator",
      price: 2499,
      currency: "$",
      category: "Content Creation",
      tags: ["AI", "Images", "Generation"],
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-10-20T11:15:00.000Z",
      rating: 4.7,
      reviewCount: 89,
      author: {
        name: "VisualAI",
        id: "visual-ai"
      },
      badge: "Popular",
      badgeColor: "from-purple-500 to-pink-500"
    },
    {
      id: "fullstack-ai-dev",
      title: "Full-Stack AI Development",
      description: "End-to-end development for AI-powered applications",
      price: null, // Custom pricing
      currency: "$",
      category: "Services",
      tags: ["Development", "Full-stack", "AI"],
      images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-12-15T09:45:00.000Z",
      rating: 4.9,
      reviewCount: 56,
      author: {
        name: "DataMinds Consulting",
        id: "dataminds-consulting"
      },
      badge: "Expert",
      badgeColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "sentiment-analysis-api",
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis for social media monitoring",
      price: 1299,
      currency: "$",
      category: "APIs",
      tags: ["API", "Sentiment", "Analytics"],
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-01-05T11:15:00.000Z",
      rating: 4.6,
      reviewCount: 72,
      author: {
        name: "SocialAI",
        id: "social-ai"
      },
      badge: "New",
      badgeColor: "from-green-500 to-emerald-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="featured" className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our handpicked selection of top AI products and services. 
              Curated by experts for quality and innovation.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan">500+</div>
                <div className="text-sm text-zion-slate-light">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple">98%</div>
                <div className="text-sm text-zion-slate-light">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-blue">24/7</div>
                <div className="text-sm text-zion-slate-light">Support Available</div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredListings.map((listing, index) => (
            <motion.div key={listing.id} variants={itemVariants}>
              <div className="relative group">
                {/* Badge */}
                {listing.badge && (
                  <div className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${listing.badgeColor} shadow-lg`}>
                    {listing.badge}
                  </div>
                )}
                
                {/* View count indicator */}
                <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-medium text-white bg-zion-slate-dark/80 backdrop-blur-sm flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {Math.floor(Math.random() * 1000) + 100}
                </div>
                
                <ProductListingCard
                  key={listing.id}
                  listing={listing}
                  onRequestQuote={(listingId: string) => {
                    // Handle quote request - could navigate to quote form or open modal
                    console.log('Requesting quote for:', listingId);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-zion-cyan" />
              <h3 className="text-xl font-bold text-white">Trending Now</h3>
            </div>
            <p className="text-zion-slate-light mb-6">
              Join thousands of tech professionals discovering amazing opportunities every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25 transform hover:scale-105 flex items-center gap-2">
                  Explore Marketplace
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
