import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation',
        'Custom AI Solutions'
      ],
      href: '/services/ai',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions and automated deployment pipelines for modern applications.',
      features: [
        'AWS, Azure & GCP Migration',
        'Container Orchestration',
        'Serverless Architecture',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Compliance'
      ],
      href: '/services/cloud',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Zero Trust Security',
        'Penetration Testing',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      href: '/services/security',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization and digital strategy implementation.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'API Integration',
        'Data Migration',
        'Change Management',
        'Digital Strategy Consulting'
      ],
      href: '/services/transformation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      features: [
        'React & Next.js Development',
        'Mobile App Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development',
        'Performance Optimization'
      ],
      href: '/services/development',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
        'Data Governance'
      ],
      href: '/services/analytics',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    }
  ];

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: CheckCircle, color: 'text-green-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-blue-400' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-400' },
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your requirements and business objectives to understand your needs.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your goals and budget.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using industry best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance.',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation. 
              From AI and cloud infrastructure to cybersecurity and digital transformation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 group`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
                
                <step.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-white/70">200+ successful projects delivered across various industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-white/70">Certified professionals with 15+ years of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-white/70">Round-the-clock assistance for critical issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quality Guarantee</h3>
                    <p className="text-white/70">99.99% uptime guarantee and comprehensive support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-white/80 mb-6">
                  Let's discuss your project requirements and explore how our innovative solutions can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/about"
                    className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}