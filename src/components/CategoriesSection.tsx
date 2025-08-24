
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Shield, Cloud, Database, Globe, Zap, TrendingUp, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export function CategoriesSection() {
  const categories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and insights",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-purple",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-cyan",
      features: ["Threat Detection", "Data Protection", "Compliance", "Incident Response"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation solutions",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-blue",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Transform raw data into actionable business intelligence",
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-cyan",
      features: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Visualization"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions for your unique business needs",
      link: "/micro-saas-services",
      color: "from-zion-blue to-zion-purple",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Comprehensive digital modernization strategies",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-purple",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover-lift"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {category.title}
              </h3>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={category.link}
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
              >
                Explore Solutions
                <TrendingUp className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Let our expert team help you choose the right solutions and implement them successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Expert Consultation
              </Link>
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
