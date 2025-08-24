
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "Zion has revolutionized how we find AI talent. The AI matching system is incredibly accurate, and we've built an amazing team in record time.",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "InnovateCorp",
      content: "As a developer, Zion has opened up incredible opportunities. The platform is intuitive, payments are reliable, and the community is supportive.",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "AI Research Director",
      company: "FutureTech Labs",
      content: "The quality of AI specialists we've found through Zion is outstanding. Their verification process ensures we only work with top-tier talent.",
      rating: 5,
      avatar: "EW"
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Startup Founder",
      company: "QuantumLeap",
      content: "Zion's marketplace helped us scale from 3 to 15 team members in just 6 months. The platform's efficiency is game-changing for startups.",
      rating: 5,
      avatar: "AT"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Product Manager",
      company: "DataSphere",
      content: "Finding specialized AI consultants was always a challenge until we discovered Zion. The platform's matching algorithm is incredibly precise.",
      rating: 5,
      avatar: "LP"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            See what our clients and talent say about their experience with Zion
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <Button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zion-blue-dark border border-zion-blue-light hover:bg-zion-blue hover:border-zion-cyan shadow-lg transition-all duration-300"
            size="sm"
          >
            <ChevronLeft className="w-6 h-6 text-zion-cyan" />
          </Button>

          <Button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zion-blue-dark border border-zion-blue-light hover:bg-zion-blue hover:border-zion-cyan shadow-lg transition-all duration-300"
            size="sm"
          >
            <ChevronRight className="w-6 h-6 text-zion-cyan" />
          </Button>

          {/* Testimonial carousel */}
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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute w-full"
              >
                <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="text-center">
                    {/* Quote icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mb-6">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-white mb-8 leading-relaxed italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-zion-slate-light">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-zion-cyan w-8' 
                    : 'bg-zion-blue-light/50 hover:bg-zion-blue-light'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-zion-cyan">
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-zion-slate-light">Client Satisfaction</div>
          </div>
          <div className="text-zion-purple">
            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="text-zion-slate-light">Companies Served</div>
          </div>
          <div className="text-zion-cyan-light">
            <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
            <div className="text-zion-slate-light">Projects Completed</div>
          </div>
          <div className="text-zion-purple-light">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
