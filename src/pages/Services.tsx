import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      services: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Machine Learning Models",
        "AI Chatbots",
        "Process Automation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      services: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Security Audits",
        "Incident Response",
        "Compliance Management",
        "Security Training"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and efficient development operations",
      services: [
        "Cloud Migration",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Container Orchestration",
        "Monitoring & Logging",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "System Integration",
        "Legacy Modernization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies and implementation",
      services: [
        "Digital Strategy",
        "Process Optimization",
        "Change Management",
        "Technology Assessment",
        "Digital Roadmap",
        "Success Metrics"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Emerging Technologies",
      description: "Innovative solutions using the latest cutting-edge technologies",
      services: [
        "Blockchain Solutions",
        "IoT Integration",
        "AR/VR Applications",
        "Quantum Computing",
        "Edge Computing",
        "5G Solutions"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cybersecurity, cloud solutions, and digital transformation."
        keywords="AI services, cybersecurity, cloud solutions, software development, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative bg-zion-blue/30 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{category.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zion-blue/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with years of experience in cutting-edge technologies"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
              },
              {
                icon: Users,
                title: "Client Focused",
                description: "Dedicated to understanding your business needs and delivering tailored solutions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan p-5 mx-auto mb-6">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;