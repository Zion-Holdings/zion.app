import React from 'react';
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string;
}

const EnhancedTestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      title: 'CTO',
      company: 'Quantum Dynamics Inc.',
      content: 'Zion Tech Group transformed our AI infrastructure completely. Their quantum cybersecurity solution prevented multiple sophisticated attacks and their AI business intelligence platform gave us insights we never had before. ROI exceeded 400% within 8 months.',
      rating: 5,
      avatar: 'SC',
      category: 'AI & Security'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'VP of Engineering',
      company: 'SpaceTech Ventures',
      content: 'Working with Zion Tech Group on our space technology platform was game-changing. Their edge computing orchestration and AI-powered mission planning reduced our satellite deployment time by 60% and increased mission success rate to 98%.',
      rating: 5,
      avatar: 'MR',
      category: 'Space Technology'
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      company: 'NeuralLink Research',
      content: 'Zion Tech Group\'s neural interface development tools are revolutionary. Their AI consciousness simulation platform accelerated our research by 3x and opened new possibilities we hadn\'t considered. The team\'s expertise is unmatched.',
      rating: 5,
      avatar: 'EW',
      category: 'Emerging Tech'
    },
    {
      id: '4',
      name: 'James Thompson',
      title: 'CEO',
      company: 'EdgeFlow Systems',
      content: 'The edge computing orchestration solution from Zion Tech Group transformed our IoT infrastructure. We saw 50% latency reduction and 40% cost savings while improving reliability. Their support team is incredibly responsive.',
      rating: 5,
      avatar: 'JT',
      category: 'Infrastructure'
    },
    {
      id: '5',
      name: 'Dr. Lisa Park',
      title: 'Chief Innovation Officer',
      company: 'FutureTech Labs',
      content: 'Zion Tech Group\'s quantum AI neural networks are cutting-edge. We\'ve achieved breakthroughs in consciousness simulation that seemed impossible. Their technology is truly ahead of its time.',
      rating: 5,
      avatar: 'LP',
      category: 'Quantum AI'
    },
    {
      id: '6',
      name: 'Robert Kim',
      title: 'Head of Digital Transformation',
      company: 'Global Innovations Corp',
      content: 'Implementing Zion Tech Group\'s AI business intelligence suite revolutionized our decision-making process. We now have real-time insights across all departments, leading to 35% faster market response and 28% cost optimization.',
      rating: 5,
      avatar: 'RK',
      category: 'AI & Analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Award },
    { number: '4.9/5', label: 'Average Rating', icon: Star }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover why leading companies trust Zion Tech Group to transform their business with cutting-edge technology solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <p className="text-blue-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.title}</div>
                    <div className="text-xs text-blue-400">{testimonial.company}</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {testimonial.category}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Experience the same transformative results that our clients have achieved. 
              Let's discuss how Zion Tech Group can accelerate your innovation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Client Success Story Discussion"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Success Story
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Proven ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Global support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialsSection;