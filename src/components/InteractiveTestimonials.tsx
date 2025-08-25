import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  MessageCircle,
  ThumbsUp,
  Share2
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  category: string;
  date: string;
  likes: number;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
    avatar: 'SC',
    rating: 5,
    content: 'Zion Tech Group transformed our AI infrastructure completely. The integration was seamless, and the results exceeded our expectations. We\'ve seen a 300% improvement in our AI model performance.',
    category: 'AI Infrastructure',
    date: '2 weeks ago',
    likes: 127,
    verified: true
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    company: 'InnovateCorp',
    avatar: 'MR',
    rating: 5,
    content: 'The talent matching algorithm is incredible. We found our lead AI engineer in just 3 days, and the quality was outstanding. Zion has become our go-to platform for all tech talent needs.',
    category: 'Talent Matching',
    date: '1 month ago',
    likes: 89,
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    company: 'Quantum Labs',
    avatar: 'EW',
    rating: 5,
    content: 'Working with Zion\'s AI services has accelerated our research by months. The platform\'s capabilities and the team\'s expertise are unmatched in the industry.',
    category: 'Research & Development',
    date: '3 weeks ago',
    likes: 156,
    verified: true
  },
  {
    id: '4',
    name: 'Alex Thompson',
    role: 'Product Manager',
    company: 'StartupXYZ',
    avatar: 'AT',
    rating: 5,
    content: 'As a startup, we needed cost-effective AI solutions. Zion delivered enterprise-grade tools at startup prices. The ROI was immediate and substantial.',
    category: 'Startup Solutions',
    date: '1 week ago',
    likes: 73,
    verified: true
  },
  {
    id: '5',
    name: 'Lisa Park',
    role: 'VP of Operations',
    company: 'GlobalTech Inc',
    avatar: 'LP',
    rating: 5,
    content: 'The global network and 24/7 support are game-changers. We operate in multiple time zones, and Zion\'s support team is always available when we need them.',
    category: 'Global Operations',
    date: '2 months ago',
    likes: 94,
    verified: true
  }
];

const categories = ['All', 'AI Infrastructure', 'Talent Matching', 'Research & Development', 'Startup Solutions', 'Global Operations'];

export function InteractiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [likedTestimonials, setLikedTestimonials] = useState<Set<string>>(new Set());

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const toggleLike = (testimonialId: string) => {
    setLikedTestimonials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(testimonialId)) {
        newSet.delete(testimonialId);
      } else {
        newSet.add(testimonialId);
      }
      return newSet;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover why leading companies choose Zion Tech Group for their AI and technology needs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-12 border border-white/20 backdrop-blur-sm relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-8 left-8 text-blue-400/20">
                  <Quote className="w-16 h-16" />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(filteredTestimonials[currentIndex]?.rating || 0)}
                </div>

                {/* Content */}
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{filteredTestimonials[currentIndex]?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {filteredTestimonials[currentIndex]?.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {filteredTestimonials[currentIndex]?.name}
                    </div>
                    <div className="text-zion-slate-light">
                      {filteredTestimonials[currentIndex]?.role} at {filteredTestimonials[currentIndex]?.company}
                    </div>
                  </div>
                  {filteredTestimonials[currentIndex]?.verified && (
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓ Verified
                    </div>
                  )}
                </div>

                {/* Category and date */}
                <div className="flex items-center justify-center gap-4 text-zion-slate-light text-sm">
                  <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20">
                    {filteredTestimonials[currentIndex]?.category}
                  </span>
                  <span>{filteredTestimonials[currentIndex]?.date}</span>
                </div>

                {/* Interactive elements */}
                <div className="flex items-center justify-center gap-6 mt-8">
                  <motion.button
                    onClick={() => toggleLike(filteredTestimonials[currentIndex]?.id || '')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      likedTestimonials.has(filteredTestimonials[currentIndex]?.id || '')
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-white/10 text-zion-slate-light border border-white/20 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ThumbsUp className={`w-4 h-4 ${
                      likedTestimonials.has(filteredTestimonials[currentIndex]?.id || '') ? 'fill-current' : ''
                    }`} />
                    {filteredTestimonials[currentIndex]?.likes || 0}
                  </motion.button>

                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-zion-slate-light border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isAutoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredTestimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content preview */}
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-zion-slate-light">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    {testimonial.category}
                  </span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Success Stories
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence and innovation that our clients rave about
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center gap-3 border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                View All Reviews
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}