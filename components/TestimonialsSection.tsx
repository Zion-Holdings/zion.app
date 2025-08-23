import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'CTO',
    company: 'Quantum Dynamics Inc.',
    content: 'Zion Tech Group\'s AI consciousness platform has revolutionized our research capabilities. The quantum neural networks are beyond anything we\'ve seen before.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'SpaceX Technologies',
    content: 'Their space resource intelligence platform has given us unprecedented insights into asteroid mining opportunities. Game-changing technology.',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Head of AI Research',
    company: 'NeuralTech Solutions',
    content: 'The autonomous business intelligence system has increased our operational efficiency by 300%. It\'s like having a genius AI partner.',
    rating: 5
  },
  {
    id: '4',
    name: 'James Thompson',
    role: 'Security Director',
    company: 'Global Defense Systems',
    content: 'Quantum cybersecurity platform provides military-grade protection. We\'ve never felt more secure in our digital operations.',
    rating: 5
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    role: 'Research Director',
    company: 'BioQuantum Labs',
    content: 'The brain-computer interface platform is revolutionary. We\'re making breakthroughs in neural rehabilitation that were impossible before.',
    rating: 5
  },
  {
    id: '6',
    name: 'Robert Kim',
    role: 'CEO',
    company: 'CloudScale Enterprises',
    content: 'Quantum cloud infrastructure has transformed our scalability. We can now handle 10x the load with half the resources.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            See what leading companies and researchers say about our revolutionary 2044 technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Quote className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span>{testimonial.role}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Building className="w-3 h-3" />
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of satisfied customers transforming their businesses
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;