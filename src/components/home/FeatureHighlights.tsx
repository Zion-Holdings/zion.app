
import React from 'react';
import { Check, Star, Shield, Zap, Users, Globe, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms that understand your needs and connect you with the perfect tech professionals.',
      features: [
        'Smart talent matching',
        'Skills-based recommendations',
        'Project compatibility scoring',
        'Real-time availability tracking'
      ],
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      color: 'from-zion-purple/20 to-zion-blue/20',
      borderColor: 'border-zion-purple/30'
    },
    {
      title: 'Verified Professionals',
      description: 'Every talent on our platform is thoroughly vetted and verified for quality and reliability.',
      features: [
        'Background verification',
        'Skills assessment',
        'Portfolio review',
        'Client feedback system'
      ],
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      color: 'from-zion-cyan/20 to-zion-purple/20',
      borderColor: 'border-zion-cyan/30'
    },
    {
      title: 'Comprehensive Services',
      description: 'From development to infrastructure, we offer end-to-end technology solutions for your business.',
      features: [
        'Custom software development',
        'Cloud infrastructure',
        'Data analytics & AI',
        'Cybersecurity solutions'
      ],
      icon: <Code className="h-8 w-8 text-zion-blue" />,
      color: 'from-zion-blue/20 to-zion-cyan/20',
      borderColor: 'border-zion-blue/30'
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver 
            exceptional results that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlightsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className={`
                bg-gradient-to-br ${category.color} 
                border ${category.borderColor} 
                backdrop-blur-sm
                hover:shadow-2xl hover:shadow-zion-purple/20
                transition-all duration-300
                group-hover:border-opacity-60
                h-full
              `}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-zion-blue-dark/50 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-zion-slate-light leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {category.description}
                  </p>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {category.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        variants={featureVariants}
                      >
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <Check className="h-5 w-5 text-zion-cyan group-hover:text-zion-purple transition-colors" />
                        </div>
                        <span className="text-zion-slate-light leading-relaxed group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-zion-purple/10 border border-zion-purple/20 rounded-2xl hover:bg-zion-purple/20 transition-all duration-300">
            <Users className="h-12 w-12 text-zion-purple mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Global Network</h4>
            <p className="text-zion-slate-light text-sm">Access talent worldwide</p>
          </div>
          
          <div className="text-center p-6 bg-zion-cyan/10 border border-zion-cyan/20 rounded-2xl hover:bg-zion-cyan/20 transition-all duration-300">
            <Database className="h-12 w-12 text-zion-cyan mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Data-Driven</h4>
            <p className="text-zion-slate-light text-sm">Insights and analytics</p>
          </div>
          
          <div className="text-center p-6 bg-zion-blue/10 border border-zion-blue/20 rounded-2xl hover:bg-zion-blue/20 transition-all duration-300">
            <Globe className="h-12 w-12 text-zion-blue mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
            <p className="text-zion-slate-light text-sm">Always here to help</p>
          </div>
          
          <div className="text-center p-6 bg-zion-purple/10 border border-zion-purple/20 rounded-2xl hover:bg-zion-purple/20 transition-all duration-300">
            <Star className="h-12 w-12 text-zion-purple mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Premium Quality</h4>
            <p className="text-zion-slate-light text-sm">Excellence guaranteed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
