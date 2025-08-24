import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  service: string;
  result: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions increased our operational efficiency by 300% and reduced costs by 40%. The team's expertise and 24/7 support are unmatched.",
    service: "AI Solutions & Cloud Infrastructure",
    result: "300% efficiency increase, 40% cost reduction",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Global Retail Corp",
    role: "VP of Technology",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "The cybersecurity implementation was flawless. Zion Tech Group not only secured our systems but also provided comprehensive training for our team. Their proactive approach prevented multiple potential threats.",
    service: "Cybersecurity & Compliance",
    result: "100% security compliance, zero breaches",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "InnovateHealth",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "Working with Zion Tech Group was a game-changer for our startup. They delivered a cutting-edge mobile app in record time, helping us secure Series A funding. Their expertise in modern technologies is exceptional.",
    service: "Web & Mobile Development",
    result: "App launched in 6 weeks, secured Series A funding",
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Manufacturing Plus",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "The digital transformation project exceeded all expectations. Zion Tech Group modernized our legacy systems seamlessly, improving productivity by 250% and enabling real-time data analytics across all operations.",
    service: "Digital Transformation",
    result: "250% productivity increase, real-time analytics",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "DataDrive Analytics",
    role: "Head of Data Science",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "Zion Tech Group's data analytics platform revolutionized our business intelligence capabilities. We now have insights that were previously impossible to obtain, driving better decision-making across the organization.",
    service: "Data Analytics & BI",
    result: "Advanced BI capabilities, data-driven decisions",
    date: "November 2023"
  },
  {
    id: 6,
    name: "Robert Kim",
    company: "CloudFirst Enterprises",
    role: "Infrastructure Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
    rating: 5,
    content: "The cloud migration was executed perfectly with zero downtime. Zion Tech Group's DevOps expertise and automation tools have made our deployment process 10x faster and more reliable than ever before.",
    service: "Cloud Infrastructure & DevOps",
    result: "Zero downtime migration, 10x faster deployments",
    date: "October 2023"
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Star, color: "text-yellow-400" },
  { value: "500+", label: "Projects Completed", icon: CheckCircle, color: "text-green-400" },
  { value: "24/7", label: "Support Available", icon: Users, color: "text-blue-400" },
  { value: "99.9%", label: "Uptime Guarantee", icon: Award, color: "text-purple-400" }
];

export function EnhancedTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Zion Tech Group.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                {/* Quote Icon */}
                <div className="text-cyan-400 mb-6">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-white/90 mb-8 leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400/30"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{currentTestimonial.name}</div>
                    <div className="text-cyan-400">{currentTestimonial.role}</div>
                    <div className="text-white/70">{currentTestimonial.company}</div>
                  </div>
                </div>

                {/* Service & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-sm text-white/60 mb-1">Service Used</div>
                    <div className="text-white font-medium">{currentTestimonial.service}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-sm text-white/60 mb-1">Results Achieved</div>
                    <div className="text-white font-medium">{currentTestimonial.result}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="text-right mt-4">
                  <span className="text-sm text-white/50">{currentTestimonial.date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let Zion Tech Group transform your business with cutting-edge technology solutions. 
              Join hundreds of satisfied clients who have already revolutionized their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Start Your Project
              </button>
              <button className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <Users className="w-5 h-5" />
                View More Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}