import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { GradientHeading } from './ui/gradient-heading';

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Happy Clients' },
  { icon: Users, value: '10K+', label: 'Active Users' },
  { icon: Clock, value: '<2h', label: 'Response Time' },
  { icon: Award, value: '98%', label: 'Success Rate' }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    category: 'AI Solutions',
    rating: 5,
    avatar: 'SC',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions helped us reduce costs by 40% while improving performance. It&apos;s like having a team of experts working 24/7.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP Engineering',
    company: 'InnovateCorp',
    category: 'Cloud Migration',
    rating: 5,
    avatar: 'MR',
    content: 'The team at Zion delivered our cloud migration project ahead of schedule. Their expertise in enterprise solutions is unmatched. We&apos;ve seen a 60% improvement in system reliability.'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    company: 'BioTech Solutions',
    category: 'Data Analytics',
    rating: 5,
    avatar: 'EW',
    content: 'Zion&apos;s data analytics platform revolutionized our research capabilities. The AI-powered insights helped us accelerate our drug discovery process by 3x. Absolutely game-changing technology.'
  },
  {
    name: 'David Kim',
    role: 'Operations Manager',
    company: 'Global Logistics',
    category: 'Automation',
    rating: 5,
    avatar: 'DK',
    content: 'Implementing Zion&apos;s automation solutions streamlined our entire supply chain. We&apos;ve reduced operational costs by 35% and improved delivery times significantly.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Digital Director',
    company: 'Retail Plus',
    category: 'Digital Transformation',
    rating: 5,
    avatar: 'LT',
    content: 'Zion helped us completely transform our digital presence. Their e-commerce solutions and AI-powered customer insights have increased our online sales by 150%.'
  },
  {
    name: 'James Wilson',
    role: 'Security Officer',
    company: 'FinSecure',
    category: 'Cybersecurity',
    rating: 5,
    avatar: 'JW',
    content: 'Zion&apos;s cybersecurity framework is enterprise-grade and comprehensive. They&apos;ve helped us maintain zero security breaches while scaling our operations globally.'
  }
];

export function TestimonialsSection() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zion-cyan origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientHeading size="5xl" className="mb-6">
            Trusted by Industry Leaders
          </GradientHeading>
          <p className="text-zinc-200 text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            See how businesses and professionals worldwide are transforming their operations with Zion&apos;s AI-powered marketplace
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center group">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 border border-zion-purple/30 rounded-xl mb-4 group-hover:border-zion-cyan/50 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zinc-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div 
                className="group relative h-full bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-zion-purple/30 group-hover:text-zion-purple/50 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zion-cyan text-zion-cyan" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-200 mb-4 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4 group-hover:bg-zion-purple/30 transition-colors duration-300">
                  <span className="text-zion-cyan text-xs font-medium">{testimonial.category}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zinc-300 text-sm">{testimonial.role}</div>
                    <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full hover:border-zion-cyan/50 transition-all duration-300">
            <Star className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-semibold text-lg">Join thousands of satisfied users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}