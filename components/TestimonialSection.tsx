import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "CTO, QuantumTech Solutions",
    company: "Fortune 500 Technology",
    avatar: "👩‍💼",
    rating: 5,
    content: "Zion Tech Group's AI consciousness platform has revolutionized our decision-making process. The autonomous capabilities have increased our efficiency by 300% while maintaining perfect accuracy.",
    category: "AI & Consciousness",
    results: ["300% efficiency increase", "Perfect accuracy maintained", "24/7 autonomous operation"]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Head of Security",
    company: "Global Financial Corp",
    avatar: "👨‍💼",
    rating: 5,
    content: "Their quantum cybersecurity platform is simply unmatched. We've seen zero security breaches since implementation, and the AI threat detection is incredibly proactive.",
    category: "Cybersecurity",
    results: ["Zero security breaches", "Proactive threat detection", "Quantum-resistant encryption"]
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Research Director",
    company: "Space Innovation Labs",
    avatar: "👩‍🔬",
    rating: 5,
    content: "The space resource intelligence platform has opened new frontiers for our research. The AI-powered analysis capabilities are beyond anything we've seen before.",
    category: "Space Technology",
    results: ["New research frontiers", "Advanced AI analysis", "Unprecedented insights"]
  },
  {
    id: 4,
    name: "James Thompson",
    title: "VP of Operations",
    company: "Manufacturing Dynamics",
    avatar: "👨‍🏭",
    rating: 5,
    content: "Implementing Zion's autonomous business intelligence has transformed our operations. Real-time insights and predictive analytics have saved us millions annually.",
    category: "Business Intelligence",
    results: ["Millions saved annually", "Real-time insights", "Predictive analytics"]
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "Innovation Lead",
    company: "Healthcare Innovations Inc",
    avatar: "👩‍⚕️",
    rating: 5,
    content: "Their AI healthcare platform has improved patient outcomes dramatically. The consciousness integration provides insights that human doctors simply can't match.",
    category: "AI Healthcare",
    results: ["Improved patient outcomes", "Enhanced medical insights", "Human-AI collaboration"]
  },
  {
    id: 6,
    name: "David Kim",
    title: "Chief Architect",
    company: "Cloud Infrastructure Corp",
    avatar: "👨‍💻",
    rating: 5,
    content: "The quantum cloud infrastructure is revolutionary. We've achieved unprecedented performance levels while reducing costs by 40%.",
    category: "Quantum Technology",
    results: ["Unprecedented performance", "40% cost reduction", "Future-proof architecture"]
  }
];

const stats = [
  { number: "98.7%", label: "Customer Satisfaction", icon: Star, color: "from-yellow-500 to-orange-500" },
  { number: "500+", label: "Enterprise Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
  { number: "99.99%", label: "Uptime Reliability", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
  { number: "25+", label: "Industry Awards", icon: Award, color: "from-purple-500 to-pink-500" }
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          See how forward-thinking companies are transforming their business with our revolutionary technology solutions.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-center group">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 h-full">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-400/50" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Results */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 mb-2 font-medium">Key Results:</div>
                <div className="space-y-1">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                  {testimonial.category}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.title}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Revolution?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join hundreds of industry leaders who are already transforming their business with our revolutionary technology solutions.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            Get Started Today
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;