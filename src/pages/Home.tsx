
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Cloud, 
  Shield, 
  Zap,
  Users,
  BarChart3,
  Globe,
  Lock
} from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that learn and adapt to your business needs, from predictive analytics to natural language processing.',
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines for modern, resilient applications.',
      color: 'from-purple-500 to-pink-500',
      link: '/cloud-devops-solutions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, advanced threat protection, and 24/7 monitoring.',
      color: 'from-green-500 to-emerald-500',
      link: '/enterprise-solutions'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations and customer experience.',
      color: 'from-yellow-500 to-orange-500',
      link: '/digital-transformation'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Leverage cutting-edge artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Build scalable, resilient applications with modern cloud technologies and microservices architecture.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized systems delivering sub-second response times and 99.9% uptime guarantee.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with decades of combined industry experience and continuous training.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Real-time analytics and actionable insights to drive informed business decisions and growth.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechFlow Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% while improving system reliability to 99.9%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering, InnovateCorp',
      content: 'Working with Zion has been a game-changer for our development team. Their micro SAAS solutions and cloud expertise helped us scale from startup to enterprise in just 18 months.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Digital Transformation, Global Retail Inc.',
      content: 'Zion\'s digital transformation services revolutionized our customer experience. Their AI-driven insights helped us increase online sales by 65%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Cutting-Edge Technology Solutions & Digital Transformation" 
        description="Transform your business with Zion Tech Group's AI-powered solutions, cloud expertise, and digital transformation services. Trusted by 500+ companies worldwide."
        keywords="AI, technology, digital transformation, cloud computing, enterprise solutions, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <ITServiceRequestHero />

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Featured Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our cutting-edge technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
