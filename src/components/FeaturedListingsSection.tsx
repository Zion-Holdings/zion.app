import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight } from 'lucide-react';

const featuredListings = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$15,000",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"]
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$22,000",
    tags: ["React Native", "Security", "FinTech", "Biometrics"]
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$18,500",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  }
];

export function FeaturedListingsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our most popular and highly-rated projects that showcase our expertise and innovation
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredListings.map((listing) => (
            <motion.div
              key={listing.id}
              className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105 group"
              variants={itemVariants}
            >
              <div className="relative mb-6">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-3 right-3 bg-zion-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {listing.price}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full mb-2">
                  {listing.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {listing.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{listing.rating}</span>
                  <span className="text-zion-slate-light text-sm">({listing.reviews})</span>
                </div>
                <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-zion-blue/20 text-zion-cyan text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
