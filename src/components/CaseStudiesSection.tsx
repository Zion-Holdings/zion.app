import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  Award, 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle,
  Building,
  Globe,
  Zap,
  Shield
} from 'lucide-react';

const caseStudies = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Revolution',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'from-zion-cyan/20 to-zion-blue/20',
    challenge: 'Needed to reduce diagnostic errors by 40% while improving patient outcomes',
    solution: 'Implemented custom AI diagnostic system with real-time learning capabilities',
    results: [
      { metric: 'Diagnostic Accuracy', value: '+95%', improvement: 'Improved from 78% to 95%' },
      { metric: 'Processing Time', value: '-70%', improvement: 'Reduced from 24 hours to 7 hours' },
      { metric: 'Cost Savings', value: '$2.5M', improvement: 'Annual savings in operational costs' },
      { metric: 'Patient Satisfaction', value: '+88%', improvement: 'Significant improvement in patient experience' }
    ],
    duration: '6 months',
    team: '8 experts',
    technologies: ['Machine Learning', 'Computer Vision', 'Cloud Infrastructure', 'Real-time Analytics'],
    testimonial: 'Zion Tech Group transformed our diagnostic capabilities. The AI system has become an invaluable tool for our medical professionals.',
    author: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    rating: 5,
    videoUrl: '/videos/healthcare-case-study.mp4',
    imageUrl: '/images/healthcare-ai.jpg'
  },
  {
    id: 'fintech-platform',
    title: 'Next-Gen Fintech Platform',
    company: 'DigitalBank Pro',
    industry: 'Financial Services',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'from-zion-purple/20 to-zion-purple-dark/20',
    challenge: 'Required a scalable, secure platform to handle 10M+ daily transactions',
    solution: 'Built enterprise-grade fintech platform with advanced security and real-time processing',
    results: [
      { metric: 'Transaction Volume', value: '+300%', improvement: 'Increased from 3M to 12M daily transactions' },
      { metric: 'Security Score', value: '99.99%', improvement: 'Zero security breaches in 2 years' },
      { metric: 'Performance', value: '-85%', improvement: 'Reduced transaction time from 2s to 0.3s' },
      { metric: 'User Growth', value: '+250%', improvement: 'Customer base expanded significantly' }
    ],
    duration: '8 months',
    team: '12 experts',
    technologies: ['Blockchain', 'Microservices', 'Advanced Security', 'Real-time Processing'],
    testimonial: 'The platform Zion built for us exceeded all expectations. It\'s not just a technical solution; it\'s a business enabler.',
    author: 'Michael Rodriguez',
    role: 'CTO',
    rating: 5,
    videoUrl: '/videos/fintech-case-study.mp4',
    imageUrl: '/images/fintech-platform.jpg'
  },
  {
    id: 'retail-transformation',
    title: 'Retail Digital Transformation',
    company: 'Global Retail Co.',
    industry: 'Retail',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-zion-cyan-light to-zion-cyan',
    bgColor: 'from-zion-cyan-light/20 to-zion-cyan/20',
    challenge: 'Needed to modernize 500+ store locations with unified digital experience',
    solution: 'Created comprehensive digital transformation strategy with omnichannel capabilities',
    results: [
      { metric: 'Online Sales', value: '+180%', improvement: 'E-commerce revenue increased dramatically' },
      { metric: 'Customer Engagement', value: '+120%', improvement: 'Mobile app usage and customer interaction' },
      { metric: 'Operational Efficiency', value: '+65%', improvement: 'Streamlined processes and reduced costs' },
      { metric: 'Market Share', value: '+45%', improvement: 'Expanded market presence and customer base' }
    ],
    duration: '12 months',
    team: '15 experts',
    technologies: ['E-commerce Platform', 'Mobile Apps', 'IoT Integration', 'Data Analytics'],
    testimonial: 'Zion\'s digital transformation approach revolutionized our retail operations. We\'re now a truly modern, customer-centric organization.',
    author: 'Lisa Thompson',
    role: 'VP of Digital Strategy',
    rating: 5,
    videoUrl: '/videos/retail-case-study.mp4',
    imageUrl: '/images/retail-transformation.jpg'
  },
  {
    id: 'manufacturing-iot',
    title: 'Smart Manufacturing IoT',
    company: 'Advanced Manufacturing Inc.',
    industry: 'Manufacturing',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-zion-purple-light to-zion-purple',
    bgColor: 'from-zion-purple-light/20 to-zion-purple/20',
    challenge: 'Required real-time monitoring and predictive maintenance for 200+ production lines',
    solution: 'Implemented comprehensive IoT solution with AI-powered predictive analytics',
    results: [
      { metric: 'Downtime Reduction', value: '-75%', improvement: 'Significantly reduced production interruptions' },
      { metric: 'Maintenance Costs', value: '-60%', improvement: 'Optimized maintenance schedules and costs' },
      { metric: 'Production Efficiency', value: '+45%', improvement: 'Increased overall production output' },
      { metric: 'Quality Control', value: '+92%', improvement: 'Enhanced product quality and consistency' }
    ],
    duration: '10 months',
    team: '10 experts',
    technologies: ['IoT Sensors', 'Predictive Analytics', 'Machine Learning', 'Cloud Platform'],
    testimonial: 'The IoT solution from Zion has transformed our manufacturing operations. We\'re now operating at peak efficiency with minimal downtime.',
    author: 'David Kim',
    role: 'Operations Director',
    rating: 5,
    videoUrl: '/videos/manufacturing-case-study.mp4',
    imageUrl: '/images/manufacturing-iot.jpg'
  }
];

const industries = [
  { name: 'Healthcare', count: 25, icon: <Shield className="w-5 h-5" /> },
  { name: 'Finance', count: 32, icon: <TrendingUp className="w-5 h-5" /> },
  { name: 'Retail', count: 18, icon: <Globe className="w-5 h-5" /> },
  { name: 'Manufacturing', count: 15, icon: <Zap className="w-5 h-5" /> },
  { name: 'Education', count: 12, icon: <Users className="w-5 h-5" /> },
  { name: 'Government', count: 8, icon: <Building className="w-5 h-5" /> }
];

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how we've helped organizations across industries achieve remarkable results. 
            Our proven track record speaks for itself.
          </p>

          {/* Industry stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-3 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
              >
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {industry.icon}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{industry.name}</div>
                <div className="text-zion-slate-light text-xs">{industry.count} projects</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
              onHoverStart={() => setHoveredCase(caseStudy.id)}
              onHoverEnd={() => setHoveredCase(null)}
            >
              <div 
                className="h-full p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer"
                onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.color} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-white">
                      {caseStudy.icon}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-zion-cyan text-sm font-medium">{caseStudy.industry}</div>
                    <div className="text-zion-slate-light text-xs">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold text-sm mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold text-sm mb-2">Solution:</h4>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-lg">{caseStudy.duration}</div>
                    <div className="text-zion-slate-light text-xs">Duration</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                    <div className="text-zion-cyan font-bold text-lg">{caseStudy.team}</div>
                    <div className="text-zion-slate-light text-xs">Team Size</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold text-sm mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <span className="text-zion-cyan/60 text-xs">
                        +{caseStudy.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                    View Full Case Study
                  </span>
                  <ArrowRight className="w-5 h-5 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Expanded results */}
                <AnimatePresence>
                  {selectedCase === caseStudy.id && (
                    <motion.div 
                      className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-zion-cyan font-semibold text-sm mb-4">Key Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {caseStudy.results.map((result, idx) => (
                          <motion.div 
                            key={idx}
                            className="p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/20"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-zion-slate-light text-xs">{result.metric}</span>
                              <span className="text-zion-cyan font-bold text-sm">{result.value}</span>
                            </div>
                            <div className="text-zion-slate-light/80 text-xs">{result.improvement}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="p-3 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/20">
                        <p className="text-zion-slate-light text-sm italic mb-2">"{caseStudy.testimonial}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm">{caseStudy.author}</div>
                            <div className="text-zion-slate-light text-xs">{caseStudy.role}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(caseStudy.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Let us help you achieve similar results. Our proven methodology and expert team are ready to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Start Your Project
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}