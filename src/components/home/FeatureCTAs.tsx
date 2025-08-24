
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that understand your needs and match you with the perfect solutions.',
    benefits: ['Smart Matching', 'Predictive Analytics', 'Continuous Learning'],
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/20',
    iconColor: 'text-zion-purple',
    link: '/zion-hire-ai'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get your projects up and running in record time with our streamlined processes and global network.',
    benefits: ['24/7 Support', 'Global Coverage', 'Instant Quotes'],
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/20',
    iconColor: 'text-zion-cyan',
    link: '/services'
  },
  {
    icon: Users,
    title: 'Precision Solutions',
    description: 'Tailored solutions designed specifically for your unique requirements and business objectives.',
    benefits: ['Custom Development', 'Scalable Architecture', 'Future-Proof Design'],
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/20',
    iconColor: 'text-zion-blue',
    link: '/request-quote'
  }
];

const stats = [
  { number: '10K+', label: 'Projects Completed', icon: CheckCircle, color: 'text-green-400' },
  { number: '150+', label: 'Countries Served', icon: Globe, color: 'text-zion-cyan' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'text-zion-purple' },
  { number: '<15min', label: 'Response Time', icon: Zap, color: 'text-yellow-400' }
];

export function FeatureCTAs() {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-72 h-72 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Zion Tech Group
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features That Drive Results
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven methodologies 
            to deliver exceptional outcomes for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={feature.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} mb-2`}>
                <stat.icon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-zion-slate-light">Join thousands of businesses already using Zion Tech Group</p>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
