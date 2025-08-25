import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI-Powered Business Intelligence',
        'Machine Learning Automation',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Content Generation'
      ],
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated development operations',
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Cloud Migration & Strategy',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'Performance Optimization'
      ],
      link: '/cloud-devops'
    },
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions for enterprise growth',
      color: 'from-green-500 to-emerald-500',
      services: [
        'Digital Transformation',
        'Enterprise Security',
        'Business Process Automation',
        'Data Analytics & BI',
        'Legacy System Modernization',
        'Enterprise Integration'
      ],
      link: '/enterprise-solutions'
    },
    {
      icon: Cpu,
      title: 'Micro SAAS Services',
      description: 'Custom software solutions designed for modern business needs',
      color: 'from-orange-500 to-red-500',
      services: [
        'Custom Web Applications',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Management',
        'User Experience Design',
        'Scalable Architecture'
      ],
      link: '/micro-saas-services'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization and digital strategy',
      color: 'from-indigo-500 to-purple-500',
      services: [
        'Digital Strategy Consulting',
        'Process Optimization',
        'Technology Roadmapping',
        'Change Management',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      link: '/digital-transformation'
    },
    {
      icon: Zap,
      title: 'Emerging Tech',
      description: 'Next-generation technology solutions and innovation consulting',
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Quantum Computing Solutions',
        'Blockchain & Web3',
        'IoT & Edge Computing',
        'Augmented Reality',
        'Robotics & Automation',
        'Space Technology'
      ],
      link: '/emerging-tech'
    }
  ];

  const featuredServices = [
    {
      title: 'AI-Powered Talent Matching',
      description: 'Advanced AI algorithms that connect businesses with the perfect talent for their needs',
      icon: Users,
      link: '/zion-hire-ai',
      badge: 'Popular'
    },
    {
      title: 'IT Onsite Services',
      description: 'Professional IT support and infrastructure management at your location',
      icon: Shield,
      link: '/it-onsite-services',
      badge: 'New'
    },
    {
      title: 'Micro SAAS Development',
      description: 'Custom software solutions that scale with your business growth',
      icon: Cpu,
      link: '/micro-saas-services',
      badge: 'Featured'
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: '15+ years of experience in technology innovation and business transformation'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'We measure success by the impact we create for your business'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof technology that grows with your business needs'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes for every project'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth, 
              enhance operational efficiency, and drive digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses today
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -top-3 -right-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={category.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-zion-cyan transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-zion-cyan font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Explore {category.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{reason.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss your technology needs and create a customized solution 
              that drives your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
