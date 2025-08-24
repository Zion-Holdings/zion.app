import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations.',
    color: 'from-zion-cyan to-blue-500',
    benefits: ['Automated workflows', 'Predictive analytics', 'Natural language processing'],
    price: 'Starting at $2,500/month'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade cybersecurity solutions protecting your digital assets and ensuring compliance.',
    color: 'from-green-500 to-emerald-500',
    benefits: ['24/7 monitoring', 'Threat detection', 'Compliance management'],
    price: 'Starting at $1,800/month'
  },
  {
    icon: Cloud,
    title: 'Cloud Excellence',
    description: 'Scalable cloud architecture and migration services for modern business needs.',
    color: 'from-purple-500 to-pink-500',
    benefits: ['Scalable infrastructure', 'Cost optimization', 'Performance tuning'],
    price: 'Starting at $1,200/month'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored web, mobile, and software solutions built with the latest technologies.',
    color: 'from-orange-500 to-red-500',
    benefits: ['Custom applications', 'API development', 'Mobile apps'],
    price: 'Starting at $150/hour'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications and systems optimized for maximum efficiency.',
    color: 'from-yellow-500 to-orange-500',
    benefits: ['Speed optimization', 'Resource management', 'Scalability'],
    price: 'Starting at $800/month'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Worldwide deployment and support ensuring your services reach every corner of the globe.',
    color: 'from-blue-500 to-cyan-500',
    benefits: ['Multi-region deployment', 'Local compliance', '24/7 support'],
    price: 'Starting at $2,000/month'
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-zion-slate-800/50 border-zion-slate-700 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zion-slate-300 text-center">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zion-slate-700">
                    <div className="text-center">
                      <p className="text-zion-purple font-semibold text-sm">
                        {feature.price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">25+</div>
              <div className="text-zion-slate-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">1000+</div>
              <div className="text-zion-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-300">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}