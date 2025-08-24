import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "CTO, QuantumTech Solutions",
      company: "QuantumTech Solutions",
      content: "Zion Tech Group's quantum computing platform has revolutionized our research capabilities. The performance improvements are beyond anything we've seen before.",
      rating: 5,
      avatar: "/avatars/sarah-chen.jpg"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      company: "InnovateCorp",
      content: "The AI-powered automation suite has reduced our deployment time by 80%. Zion Tech Group truly understands enterprise needs.",
      rating: 5,
      avatar: "/avatars/marcus-rodriguez.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      company: "NeuroTech Industries",
      content: "Their consciousness AI platform is groundbreaking. We've achieved breakthroughs in neural network optimization that seemed impossible.",
      rating: 5,
      avatar: "/avatars/emily-watson.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="testimonials-heading" className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why leading companies trust Zion Tech Group with their most critical technology challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500"
                onClick={() => window.location.href = '/contact'}
                aria-label="Get started with Zion Tech Group"
              >
                Get Started Today
              </button>
              <button 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                onClick={() => window.location.href = '/services'}
                aria-label="View all services"
              >
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;