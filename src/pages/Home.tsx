
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain, Cpu, Shield, Cloud, Zap, Users, TrendingUp, Globe, Lock } from 'lucide-react';

import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ITServiceRequestHero } from "@/components/ITServiceRequestHero";
import { AnimatedBackground, FloatingOrbs } from "@/components/ui/AnimatedBackground";

const featuredServices = [
  {
    title: "AI & Machine Learning",
    description: "Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems.",
    icon: Brain,
    link: "/ai-services",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Micro SAAS Solutions",
    description: "Custom software solutions designed for modern businesses, from workflow automation to customer relationship management systems.",
    icon: Cpu,
    link: "/micro-saas-services",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle.",
    icon: Cloud,
    link: "/cloud-devops",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions including threat detection, data protection, and compliance management for enterprise environments.",
    icon: Shield,
    link: "/enterprise-security",
    color: "from-orange-500 to-red-500"
  }
];

const features = [
  {
    title: "AI-Powered Matching",
    description: "Our advanced AI algorithms connect you with the perfect tech talent and solutions for your specific needs.",
    icon: Brain,
    color: "text-zion-cyan"
  },
  {
    title: "Global Talent Network",
    description: "Access a diverse pool of verified tech professionals from around the world with proven expertise.",
    icon: Globe,
    color: "text-zion-purple"
  },
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols ensure your data and transactions are protected at every step.",
    icon: Lock,
    color: "text-green-400"
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support and consultation from our team of industry experts.",
    icon: Users,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce costs by 40% while improving efficiency.",
    name: "Sarah Johnson",
    role: "CTO, TechCorp Solutions",
    rating: 5
  },
  {
    content: "The micro SAAS platform they built for us has streamlined our operations completely. It's like they read our minds!",
    name: "Michael Chen",
    role: "Operations Director, InnovateLab",
    rating: 5
  },
  {
    content: "Working with Zion has been a game-changer. Their AI talent matching found us the perfect team in record time.",
    name: "Emily Rodriguez",
    role: "Founder, StartupXYZ",
    rating: 5
  }
];

const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "AI Models Deployed", value: "50+", icon: Brain },
  { label: "Success Rate", value: "98%", icon: TrendingUp }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - The Future of Tech is Here" 
        description="Discover cutting-edge AI solutions, connect with top tech talent, and access innovative micro SAAS services that transform your business operations."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, digital transformation"
        canonical="https://ziontechgroup.com/"
      />

      {/* Futuristic Animated Backgrounds */}
      <AnimatedBackground variant="grid" intensity="low" />
      <FloatingOrbs count={8} />

      {/* Hero Section */}
      <HeroSection />

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
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

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
