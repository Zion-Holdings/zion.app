import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group's quantum AI platform has revolutionized our data processing capabilities. We've seen a 300% improvement in performance and our clients are amazed by the results.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "InnovateCorp",
    content: "The autonomous cybersecurity orchestrator has eliminated 99% of our manual security tasks. Our team can now focus on strategic initiatives instead of routine monitoring.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "Quantum Research Institute",
    content: "Working with Zion Tech Group has accelerated our quantum computing research by years. Their expertise and cutting-edge solutions are unmatched in the industry.",
    rating: 5
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "CEO",
    company: "Metaverse Ventures",
    content: "The metaverse commerce platform has opened up entirely new revenue streams for us. Zion Tech Group's innovative approach to virtual commerce is game-changing.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "DevOps Manager",
    company: "CloudScale Systems",
    content: "The autonomous DevOps orchestrator has transformed our deployment pipeline. We've reduced deployment time from hours to minutes with zero downtime.",
    rating: 5
  },
  {
    id: 6,
    name: "David Kim",
    role: "AI Research Lead",
    company: "VisionTech Labs",
    content: "Zion Tech Group's quantum computer vision suite has achieved accuracy levels we never thought possible. It's like having superhuman vision for our AI systems.",
    rating: 5
  }
];

const TestimonialSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-6 h-full group-hover:border-cyan-400/50 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-cyan-400/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="flex items-center text-xs text-cyan-400">
                      <Building className="w-3 h-3 mr-1" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the transformative power of Zion Tech Group's cutting-edge solutions
            </p>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;