import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: 'Zion Tech Group transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture and AI integration exceeded our expectations. The team delivered on time and within budget.',
    rating: 5,
    industry: 'Technology'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'DataFlow Inc',
    content: 'The AI-powered analytics solution they built for us increased our operational efficiency by 40%. Their team is incredibly skilled and professional. We\'ve seen measurable ROI within the first quarter.',
    rating: 5,
    industry: 'Data Analytics'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'VP Engineering',
    company: 'StartupXYZ',
    content: 'From concept to deployment, Zion Tech Group guided us through every step. Their blockchain solution is now a key differentiator for our business. The quality of work is outstanding.',
    rating: 5,
    industry: 'Fintech'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Director of IT',
    company: 'Enterprise Solutions',
    content: 'Their cybersecurity implementation saved us from potential threats and ensured compliance. The team\'s attention to detail and security expertise is unmatched in the industry.',
    rating: 5,
    industry: 'Enterprise'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content: 'The mobile app they developed for us has received rave reviews from users. The performance and user experience are exceptional. Zion Tech Group truly understands modern app development.',
    rating: 5,
    industry: 'Mobile'
  }
];

const AdvancedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % testimonials.length;
      } else {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex] || testimonials[0];

  if (!currentTestimonial) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with Zion Tech Group.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-8 md:p-12">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-500/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic"
                  >
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center"
                  >
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>

                    {/* Author Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-300">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mt-2">
                        {currentTestimonial.industry}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full flex items-center justify-center border border-gray-600/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full flex items-center justify-center border border-gray-600/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="mt-6 mx-auto flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <div className={`w-3 h-3 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </motion.button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to join our satisfied clients?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTestimonials;