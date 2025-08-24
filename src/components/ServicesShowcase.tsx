import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  BarChart3, 
  Phone,
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import { Button } from './ui/button';
import { GradientHeading } from './ui/gradient-heading';

const services = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions for business automation, predictive analytics, and intelligent decision-making.',
    icon: Brain,
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
    category: 'Technology',
    rating: 4.9,
    reviews: 1247,
    price: 'From $2,500',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions protecting your digital assets with advanced threat detection and prevention.',
    icon: Shield,
    features: ['Threat Detection', 'Data Encryption', 'Compliance Management', '24/7 Monitoring'],
    category: 'Security',
    rating: 4.8,
    reviews: 892,
    price: 'From $1,800',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
    category: 'Infrastructure',
    rating: 4.7,
    reviews: 1563,
    price: 'From $3,200',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: BarChart3,
    features: ['Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Predictive Modeling'],
    category: 'Analytics',
    rating: 4.9,
    reviews: 1034,
    price: 'From $2,100',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation and workflow optimization.',
    icon: Zap,
    features: ['Workflow Automation', 'RPA Solutions', 'Integration Services', 'Performance Monitoring'],
    category: 'Operations',
    rating: 4.6,
    reviews: 756,
    price: 'From $1,900',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT with business objectives.',
    icon: Phone,
    features: ['Technology Strategy', 'Digital Transformation', 'Vendor Selection', 'Project Management'],
    category: 'Strategy',
    rating: 4.8,
    reviews: 445,
    price: 'From $150/hr',
    color: 'from-indigo-500 to-purple-500'
  }
];

const categories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'technology', name: 'Technology', count: services.filter(s => s.category === 'Technology').length },
  { id: 'security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
  { id: 'infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
  { id: 'analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
  { id: 'operations', name: 'Operations', count: services.filter(s => s.category === 'Operations').length },
  { id: 'strategy', name: 'Strategy', count: services.filter(s => s.category === 'Strategy').length }
];

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientHeading size="5xl" className="mb-6">
            Our Services
          </GradientHeading>
          <p className="text-zinc-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-zion-blue-dark border border-zion-cyan'
                  : 'bg-zion-blue-dark/40 text-zinc-300 border border-zion-blue-light/30 hover:border-zion-cyan/50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <motion.div
                  className="relative h-full bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-zinc-300">{service.rating}</span>
                        </div>
                        <span className="text-xs text-zinc-400">({service.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                    {/* Category and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded text-xs text-zion-cyan">
                        {service.category}
                      </span>
                      <span className="text-sm text-zinc-200 font-medium">{service.price}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm" 
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-zion-purple/30 text-zion-purple hover:bg-zion-purple hover:text-white"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full hover:border-zion-cyan/50 transition-all duration-300">
            <Zap className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan font-semibold text-lg">Ready to transform your business?</span>
          </div>
          <p className="text-zinc-300 mt-4 mb-6">Get in touch with our experts for a personalized consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple/30 text-zion-purple hover:bg-zion-purple hover:text-white">
              <Mail className="mr-2 w-5 h-5" />
              Send Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}