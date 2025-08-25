
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Micro-SaaS Development",
      description: "Scalable software-as-a-service solutions for modern businesses",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "Robust cloud computing and infrastructure management",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Team Collaboration",
      description: "Advanced collaboration tools and workflow optimization",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Global Reach",
      description: "Worldwide technology solutions and support services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Services Deployed", icon: <Brain className="w-6 h-6" />, color: "from-cyan-400 to-blue-400" },
    { number: "1000+", label: "Micro SAAS Solutions", icon: <Rocket className="w-6 h-6" />, color: "from-purple-400 to-pink-400" },
    { number: "24/7", label: "IT Support Available", icon: <Shield className="w-6 h-6" />, color: "from-green-400 to-emerald-400" },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Zap className="w-6 h-6" />, color: "from-orange-400 to-red-400" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The micro-SaaS platform they built for us is exactly what we needed. Highly recommend!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content: "Outstanding service and support. They truly understand our business needs.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
      icon: <Brain className="w-6 h-6" />,
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
    },
    {
      title: "Micro-SaaS Development",
      description: "Scalable software-as-a-service solutions designed for modern businesses.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["Cloud-Native Architecture", "Multi-Tenant Systems", "API-First Design", "Scalable Infrastructure"]
    },
    {
      title: "Cloud Computing",
      description: "Cloud infrastructure, migration, and optimization services for scalable solutions.",
      icon: <Shield className="w-6 h-6" />,
      features: ["AWS/Azure/GCP", "Container Orchestration", "Serverless Architecture", "Cost Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From AI development to cloud computing, 
              we help you transform your digital presence and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-cyan-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients <span className="text-cyan-400">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get <span className="text-cyan-400">Started</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
            </p>
          </motion.div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
