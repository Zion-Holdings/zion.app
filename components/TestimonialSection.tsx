import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Award, 
  Globe,
  Building,
  TrendingUp
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  avatar?: string;
  industry: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    company: "Quantum Dynamics Inc.",
    content: "Zion Tech Group's AI consciousness platform has revolutionized our quantum computing research. The level of sophistication and autonomous decision-making capabilities is beyond anything we've seen in the market.",
    rating: 5,
    industry: "Quantum Computing",
    verified: true
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "VP of Innovation",
    company: "Global Tech Solutions",
    content: "Implementing Zion's autonomous business intelligence has increased our operational efficiency by 300%. The AI truly understands our business context and makes decisions that align with our strategic goals.",
    rating: 5,
    industry: "Enterprise Technology",
    verified: true
  },
  {
    id: 3,
    name: "Dr. Elena Petrova",
    title: "Research Director",
    company: "SpaceTech Ventures",
    content: "Zion's space resource intelligence platform has accelerated our asteroid mining operations by 5x. The AI's ability to process complex spatial data and make real-time decisions is game-changing.",
    rating: 5,
    industry: "Space Technology",
    verified: true
  },
  {
    id: 4,
    name: "James Thompson",
    title: "Chief Security Officer",
    company: "CyberFort Global",
    content: "Zion's quantum cybersecurity intelligence has made our systems virtually impenetrable. The AI's ability to predict and prevent threats before they materialize is revolutionary.",
    rating: 5,
    industry: "Cybersecurity",
    verified: true
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    title: "Head of AI Research",
    company: "NeuralTech Systems",
    content: "Working with Zion's AI consciousness evolution platform has opened new frontiers in artificial intelligence. The emotional intelligence and consciousness capabilities are truly groundbreaking.",
    rating: 5,
    industry: "Artificial Intelligence",
    verified: true
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Chief Operations Officer",
    company: "Autonomous Industries",
    content: "Zion's autonomous DevOps intelligence has transformed our development pipeline. We've reduced deployment time by 80% while improving code quality and system reliability.",
    rating: 5,
    industry: "DevOps & Automation",
    verified: true
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          See how forward-thinking companies are transforming their operations with Zion Tech Group's revolutionary technology solutions
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { icon: Users, label: "500+", description: "Enterprise Clients" },
          { icon: Globe, label: "50+", description: "Countries Served" },
          { icon: Award, label: "99.9%", description: "Client Satisfaction" },
          { icon: TrendingUp, label: "300%", description: "Avg. ROI Increase" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-4">
              <stat.icon className="w-full h-full text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.label}</div>
            <div className="text-white/70">{stat.description}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonial Content */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ 
                opacity: 0,
                x: direction === 1 ? 300 : -300,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                x: direction === 1 ? -300 : 300,
                scale: 0.8
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="text-center px-8 py-12"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-4">
                <Quote className="w-full h-full text-white" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  {currentTestimonial.avatar ? (
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {currentTestimonial.name}
                      </h3>
                      {currentTestimonial.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-white/70 text-sm">{currentTestimonial.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <Building className="w-4 h-4 text-white/50" />
                  <span className="text-white/70 text-sm">{currentTestimonial.company}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-cyan-400 text-sm font-medium">{currentTestimonial.industry}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Join the Revolution?
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Experience the future of technology with Zion Tech Group. Transform your business with AI consciousness, quantum computing, and autonomous systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Get Started Today
          </a>
          <a
            href="/case-studies"
            className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-all duration-300"
          >
            View Case Studies
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;