import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause, Users, Award, TrendingUp } from 'lucide-react';

const EnhancedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Inc.',
      avatar: '/avatars/sarah.jpg',
      content: 'Zion Tech Group transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture and AI integration exceeded our expectations. The team delivered on time and within budget, making the entire process seamless.',
      rating: 5,
      project: 'Cloud Migration & AI Integration',
      results: {
        efficiency: '+40%',
        costReduction: '-30%',
        timeToMarket: '-50%'
      },
      industry: 'Technology',
      duration: '8 months'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, DataFlow Inc.',
      company: 'DataFlow Inc.',
      avatar: '/avatars/michael.jpg',
      content: 'The AI-powered analytics solution they built for us increased our operational efficiency by 40%. Their team is incredibly skilled and professional. They didn\'t just deliver a product; they delivered a strategic advantage.',
      rating: 5,
      project: 'AI Analytics Platform',
      results: {
        efficiency: '+40%',
        insights: '+60%',
        decisionSpeed: '+3x'
      },
      industry: 'Finance',
      duration: '6 months'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'VP Engineering, StartupXYZ',
      company: 'StartupXYZ',
      avatar: '/avatars/emily.jpg',
      content: 'From concept to deployment, Zion Tech Group guided us through every step. Their blockchain solution is now a key differentiator for our business. The level of support and expertise they provided was exceptional.',
      rating: 5,
      project: 'Blockchain Platform',
      results: {
        security: '+99%',
        transparency: '+100%',
        userTrust: '+85%'
      },
      industry: 'Healthcare',
      duration: '12 months'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Director of IT, GlobalManufacturing',
      company: 'Global Manufacturing Co.',
      avatar: '/avatars/david.jpg',
      content: 'Zion Tech Group\'s IoT solution revolutionized our manufacturing processes. Real-time monitoring and predictive maintenance have reduced downtime by 70% and increased productivity significantly.',
      rating: 5,
      project: 'IoT Manufacturing Platform',
      results: {
        downtime: '-70%',
        productivity: '+45%',
        maintenanceCost: '-55%'
      },
      industry: 'Manufacturing',
      duration: '10 months'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Head of Digital, RetailCorp',
      company: 'RetailCorp',
      avatar: '/avatars/lisa.jpg',
      content: 'Their digital transformation expertise helped us modernize our entire retail operation. The new e-commerce platform and mobile app have increased our online sales by 200% and improved customer satisfaction dramatically.',
      rating: 5,
      project: 'Digital Retail Transformation',
      results: {
        onlineSales: '+200%',
        customerSatisfaction: '+85%',
        operationalEfficiency: '+65%'
      },
      industry: 'Retail',
      duration: '14 months'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const testimonialVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const currentTestimonial = testimonials[currentIndex]!;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              <Award className="w-4 h-4" />
              Client Success Stories
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here are real stories from real clients who have transformed 
            their businesses with our technology solutions.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Success Rate</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Client Rating</div>
          </motion.div>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 p-8 md:p-12 backdrop-blur-sm">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                        <div className="text-gray-400">{currentTestimonial.role}</div>
                        <div className="text-sm text-gray-500">{currentTestimonial.company}</div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="text-center md:text-right">
                      <div className="text-sm text-gray-400 mb-2">Project</div>
                      <div className="text-white font-medium">{currentTestimonial.project}</div>
                      <div className="text-sm text-gray-500">{currentTestimonial.duration}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Results Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                             {Object.entries(currentTestimonial.results).map(([key, value], index) => (
                 <motion.div
                   key={key}
                   className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 p-6 text-center backdrop-blur-sm relative"
                   onHoverStart={() => setHoveredIndex(index)}
                   onHoverEnd={() => setHoveredIndex(null)}
                 >
                                     <div className="text-3xl font-bold text-white mb-2">{value}</div>
                   <div className="text-gray-400 capitalize">
                     {key.replace(/([A-Z])/g, ' $1').trim()}
                   </div>
                   {hoveredIndex === index && (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.8 }}
                       className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
                     />
                   )}
                 </motion.div>
               ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Play/Pause Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isPlaying ? 'Pause' : 'Play'}
          </motion.button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-8"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;