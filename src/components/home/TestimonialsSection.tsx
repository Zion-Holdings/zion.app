import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% while improving system reliability to 99.9%. The team\'s expertise and dedication are unmatched.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
      logo: '/logos/techflow.png'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'InnovateCorp',
      content: 'Working with Zion has been a game-changer for our development team. Their micro SAAS solutions and cloud expertise helped us scale from startup to enterprise in just 18 months. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg',
      logo: '/logos/innovatecorp.png'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Digital Transformation',
      company: 'Global Retail Inc.',
      content: 'Zion\'s digital transformation services revolutionized our customer experience. Their AI-driven insights helped us increase online sales by 65% and improve customer satisfaction scores significantly.',
      rating: 5,
      avatar: '/avatars/emily.jpg',
      logo: '/logos/globalretail.png'
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'As a growing startup, we needed reliable tech partners. Zion delivered beyond our expectations with their scalable solutions and 24/7 support. They\'re now an integral part of our success story.',
      rating: 5,
      avatar: '/avatars/david.jpg',
      logo: '/logos/startupxyz.png'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of IT',
      company: 'Healthcare Plus',
      content: 'Zion\'s security-first approach and compliance expertise made them the perfect partner for our healthcare organization. Their solutions meet all regulatory requirements while maintaining top performance.',
      rating: 5,
      avatar: '/avatars/lisa.jpg',
      logo: '/logos/healthcareplus.png'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue-light to-zion-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about 
            working with Zion Tech Group and the results we've delivered.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-zion-cyan text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zion-blue-light/50 border border-zion-purple/20 rounded-full flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-blue-light/70 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zion-blue-light/50 border border-zion-purple/20 rounded-full flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-blue-light/70 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-zion-cyan w-8'
                    : 'bg-zion-purple/30 hover:bg-zion-purple/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-slate-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">4.9/5</div>
                <div className="text-zion-slate-light">Client Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};