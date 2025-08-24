import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group transformed our digital infrastructure completely. Their AI-powered solutions increased our efficiency by 300% and their team's expertise is unmatched.",
    rating: 5,
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "InnovateCorp",
    content: "Working with Zion Tech Group was a game-changer. They delivered our blockchain platform ahead of schedule and under budget. Highly recommended!",
    rating: 5,
    avatar: "MR"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "Quantum Labs",
    content: "The quantum computing solutions from Zion Tech Group have accelerated our research by years. Their innovative approach and technical excellence are outstanding.",
    rating: 5,
    avatar: "EW"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "CEO",
    company: "FinTech Dynamics",
    content: "Zion Tech Group's cybersecurity solutions are world-class. They've protected our platform from sophisticated threats and provided 24/7 support.",
    rating: 5,
    avatar: "JT"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Product Manager",
    company: "CloudScale Inc",
    content: "The multi-cloud orchestration platform from Zion Tech Group has revolutionized how we manage our infrastructure. Cost savings and performance improvements are remarkable.",
    rating: 5,
    avatar: "LP"
  }
];

export default function ModernTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`relative bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 ${
                  index === 0 ? 'ring-2 ring-zion-cyan scale-105' : 'scale-95 opacity-80'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: index === 0 ? 1.05 : 1 }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 bg-zion-cyan text-zion-blue-dark p-2 rounded-full">
                  <Quote className="w-4 h-4" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                    <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-full text-zion-cyan hover:border-zion-cyan/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-full text-zion-cyan hover:border-zion-cyan/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-zion-cyan scale-125'
                    : 'bg-zion-blue-light/30 hover:bg-zion-blue-light/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence and innovation that has made us the trusted partner for leading companies worldwide.
          </p>
          <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}