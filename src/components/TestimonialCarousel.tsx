import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    company: 'TechCorp Inc.',
    content: 'Zion Tech Group has revolutionized how we find AI talent. The platform is intuitive and the quality of candidates is exceptional. We\'ve reduced our hiring time by 60% while improving candidate quality.',
    avatar: '/avatars/sarah.jpg',
    rating: 5,
    category: 'Enterprise',
    project: 'AI Talent Acquisition'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'AI Engineer',
    company: 'Freelance',
    content: 'As a freelancer, Zion Tech Group has opened up incredible opportunities. The marketplace is well-organized and the clients are top-tier. I\'ve doubled my income since joining the platform.',
    avatar: '/avatars/michael.jpg',
    rating: 5,
    category: 'Freelancer',
    project: 'Machine Learning Solutions'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director',
    company: 'InnovateLab',
    content: 'The AI services we found through Zion Tech Group exceeded our expectations. The team delivered cutting-edge solutions that accelerated our research by months. Highly recommended!',
    avatar: '/avatars/emily.jpg',
    rating: 5,
    category: 'Research',
    project: 'AI Research Platform'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Startup Founder',
    company: 'DataFlow',
    content: 'Starting a tech company is challenging, but Zion Tech Group made it so much easier. We found the perfect team and equipment to get our MVP to market in record time.',
    avatar: '/avatars/david.jpg',
    rating: 5,
    category: 'Startup',
    project: 'SaaS Platform'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'IT Manager',
    company: 'Global Retail Co.',
    content: 'Our digital transformation project was a huge success thanks to Zion Tech Group. The comprehensive services and expert team delivered everything we needed on time and budget.',
    avatar: '/avatars/lisa.jpg',
    rating: 5,
    category: 'Enterprise',
    project: 'Digital Transformation'
  },
  {
    id: 6,
    name: 'Alex Patel',
    role: 'DevOps Engineer',
    company: 'CloudScale',
    content: 'The infrastructure solutions from Zion Tech Group are world-class. We\'ve achieved 99.99% uptime and our performance has improved dramatically. The team is incredibly responsive.',
    avatar: '/avatars/alex.jpg',
    rating: 5,
    category: 'Infrastructure',
    project: 'Cloud Infrastructure'
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
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
              className="absolute w-full"
            >
              <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-zion-blue-light/30 shadow-2xl">
                <div className="text-center">
                  {/* Quote icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple mb-8 shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-zion-slate-light text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-zion-slate-light">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-blue-light/20 rounded-full border border-zion-cyan/30">
                    <span className="text-zion-cyan text-sm font-medium">
                      {testimonials[currentIndex].category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light text-sm">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hover:bg-zion-blue-dark border border-zion-blue-light/30 hover:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zion-cyan/25 z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zion-blue-dark/80 hover:bg-zion-blue-dark border border-zion-blue-light/30 hover:border-zion-cyan/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-zion-cyan/25 z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-zion-cyan scale-125' 
                  : 'bg-zion-slate-light/40 hover:bg-zion-slate-light/60'
              }`}
            />
          ))}
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">98%</div>
            <div className="text-zion-slate-light text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple mb-2">5000+</div>
            <div className="text-zion-slate-light text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-cyan-light mb-2">24/7</div>
            <div className="text-zion-slate-light text-sm">Support Available</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="text-3xl font-bold text-zion-purple-light mb-2">100+</div>
            <div className="text-zion-slate-light text-sm">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}