import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% and improved efficiency dramatically. The team is incredibly professional and responsive.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "InnovateCorp",
    content: "Working with Zion Tech Group has been a game-changer for our business. Their cybersecurity platform detected threats we didn't even know existed, and their 24/7 support gives us peace of mind.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Director",
    company: "Global Dynamics",
    content: "The AI-powered CRM system they built for us has revolutionized our sales process. We've seen a 30% increase in lead conversion rates and our team is more productive than ever.",
    rating: 5,
    avatar: "👩‍💻"
  },
  {
    name: "David Thompson",
    position: "IT Manager",
    company: "SecureNet Inc",
    content: "Zion Tech Group's cloud migration expertise saved us months of planning and implementation time. Their team handled everything seamlessly, and we experienced zero downtime during the transition.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Lisa Wang",
    position: "VP of Technology",
    company: "FutureTech",
    content: "Their digital transformation services helped us modernize our legacy systems and processes. The ROI was immediate, and our team adapted to the new technologies faster than expected.",
    rating: 5,
    avatar: "👩‍🔬"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Zion Tech Group
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-cyan-400/20">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center relative z-10">
              <div className="mb-6">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="text-center">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-400">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="text-gray-400 mb-6">Trusted by leading companies worldwide</div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-600">Fortune 500</div>
            <div className="text-2xl font-bold text-gray-600">Startups</div>
            <div className="text-2xl font-bold text-gray-600">Enterprises</div>
            <div className="text-2xl font-bold text-gray-600">Government</div>
          </div>
        </div>
      </div>
    </section>
  );
}