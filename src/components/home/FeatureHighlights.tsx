
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning algorithms that adapt and learn from your business patterns',
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-services',
      benefits: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient cloud solutions built for modern business demands',
      color: 'from-purple-500 to-pink-500',
      link: '/cloud-devops-solutions',
      benefits: ['Auto-scaling', 'Multi-region', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection',
      color: 'from-green-500 to-emerald-500',
      link: '/enterprise-solutions',
      benefits: ['SOC 2 Compliant', 'End-to-end Encryption', '24/7 Monitoring']
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized systems delivering sub-second response times and 99.9% uptime',
      color: 'from-yellow-500 to-orange-500',
      link: '/performance-solutions',
      benefits: ['Sub-second Response', '99.9% Uptime', 'Global CDN']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with decades of combined industry experience',
      color: 'from-indigo-500 to-blue-500',
      link: '/about',
      benefits: ['Certified Experts', 'Industry Veterans', 'Continuous Training']
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Real-time analytics and actionable insights to drive business decisions',
      color: 'from-red-500 to-pink-500',
      link: '/analytics',
      benefits: ['Real-time Data', 'Custom Dashboards', 'Predictive Insights']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group?
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions 
            that drive real business value and accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 h-full hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-sm text-zion-slate-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
