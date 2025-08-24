import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, Shield, Users, Globe } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Inc.",
      content: "Zion transformed our hiring process. We found 3 senior AI engineers in just 2 weeks. The AI matching is incredibly accurate!",
      rating: 5,
      avatar: "SC",
      verified: true
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      company: "InnovateCorp",
      content: "The quality of talent on Zion is unmatched. Every developer we've hired has exceeded our expectations. Highly recommended!",
      rating: 5,
      avatar: "MR",
      verified: true
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Research Lead",
      company: "FutureTech Labs",
      content: "Zion's equipment marketplace saved us months of procurement time. We got cutting-edge AI hardware delivered in days.",
      rating: 5,
      avatar: "EW",
      verified: true
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50,000+", label: "Active Users" },
    { icon: <Globe className="h-6 w-6" />, value: "150+", label: "Countries" },
    { icon: <CheckCircle className="h-6 w-6" />, value: "99.8%", label: "Success Rate" },
    { icon: <Shield className="h-6 w-6" />, value: "100%", label: "Secure" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full backdrop-blur-sm">
            <Star className="h-4 w-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">Trusted by Thousands</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            What Our Users Say
          </h2>
          
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their businesses with Zion's AI-powered marketplace
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-cyan-light rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-zion-slate-light text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-zion-blue/10 border border-zion-blue/20 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-zion-purple/30 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/10">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-zion-purple/20 group-hover:text-zion-purple/40 transition-colors duration-300">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-zion-purple text-zion-purple" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-zion-slate-light mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-light rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      )}
                    </div>
                    <p className="text-zion-slate-light text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-zion-purple text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-zion-purple/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-zion-blue/10 border border-zion-blue/20 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-zion-cyan" />
              <span className="text-zion-slate-light font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-zion-purple" />
              <span className="text-zion-slate-light font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-zion-blue" />
              <span className="text-zion-slate-light font-medium">Global Coverage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}