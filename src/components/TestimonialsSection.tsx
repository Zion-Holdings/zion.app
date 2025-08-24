import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Inc.",
    content: "Zion has revolutionized how we source tech talent. The AI matching system found us the perfect developer in under 24 hours. Incredible platform!",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Developer",
    company: "Freelance",
    content: "As a developer, Zion has opened up amazing opportunities. The platform is intuitive, payments are reliable, and the community is supportive.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Emily Watson",
    role: "AI Research Lead",
    company: "InnovateAI",
    content: "The quality of AI services on Zion is outstanding. We've found specialized expertise that would have been impossible to source otherwise.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "James Thompson",
    role: "IT Director",
    company: "GlobalCorp",
    content: "Zion's equipment rental service saved us thousands on hardware costs. Professional service and excellent support throughout.",
    rating: 5,
    avatar: "JT"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-light to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
            Join thousands of satisfied professionals and businesses who trust Zion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:bg-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-zion-cyan mb-3 opacity-60" />
                <p className="text-white/90 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-zion-slate-light text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-zion-cyan text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Verified Reviews</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Real Users</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}