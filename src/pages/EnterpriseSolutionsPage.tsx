import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building, 
  Users, 
  Target, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database
} from 'lucide-react';

const EnterpriseSolutionsPage = () => {
  const enterpriseServices = [
    {
      icon: Building,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization and digital strategy implementation',
      features: [
        'Digital strategy consulting',
        'Process optimization',
        'Technology roadmapping',
        'Change management',
        'Performance monitoring',
        'Continuous improvement'
      ],
      pricing: 'Starting from $25,000',
      link: '/digital-transformation'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for enterprise environments',
      features: [
        'Security assessment & auditing',
        'Compliance management',
        'Identity & access management',
        'Threat detection & response',
        'Data protection',
        'Security monitoring'
      ],
      pricing: 'Starting from $15,000/month',
      link: '/enterprise-security'
    },
    {
      icon: Users,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      features: [
        'Process analysis & mapping',
        'Workflow automation',
        'Integration services',
        'Performance analytics',
        'Change management',
        'Training & support'
      ],
      pricing: 'Starting from $20,000',
      link: '/business-process-automation'
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable business intelligence',
      features: [
        'Data strategy & architecture',
        'Analytics platform setup',
        'Custom dashboard development',
        'Predictive analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: 'Starting from $18,000/month',
      link: '/data-analytics'
    },
    {
      icon: Cpu,
      title: 'Legacy System Modernization',
      description: 'Transform legacy systems into modern, scalable solutions',
      features: [
        'System assessment',
        'Modernization strategy',
        'Migration planning',
        'Data migration',
        'Testing & validation',
        'Training & support'
      ],
      pricing: 'Starting from $30,000',
      link: '/legacy-modernization'
    },
    {
      icon: Globe,
      title: 'Enterprise Integration',
      description: 'Seamlessly connect all your business systems and applications',
      features: [
        'Integration architecture',
        'API development',
        'Data synchronization',
        'Real-time connectivity',
        'Monitoring & alerting',
        'Performance optimization'
      ],
      pricing: 'Starting from $22,000/month',
      link: '/enterprise-integration'
    }
  ];

  const enterpriseCapabilities = [
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade solutions that grow with your business'
    },
    {
      icon: Star,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and sectors'
    },
    {
      icon: TrendingUp,
      title: 'ROI Focused',
      description: 'Solutions designed to deliver measurable business value'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast deployment with minimal business disruption'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      solutions: ['Compliance automation', 'Risk management', 'Customer analytics', 'Security enhancement']
    },
    {
      name: 'Healthcare',
      solutions: ['Patient data management', 'Compliance automation', 'Operational efficiency', 'Security & privacy']
    },
    {
      name: 'Manufacturing',
      solutions: ['Supply chain optimization', 'Quality control', 'Predictive maintenance', 'Process automation']
    },
    {
      name: 'Retail',
      solutions: ['Customer experience', 'Inventory management', 'Omnichannel integration', 'Analytics & insights']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-zion-cyan/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-zion-cyan bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your enterprise with comprehensive technology solutions designed for scale, 
              security, and business growth. From digital transformation to legacy modernization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Enterprise Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Enterprise Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for enterprise-scale challenges and opportunities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-green-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

      {/* Enterprise Capabilities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide enterprise-grade solutions with proven methodologies and expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{capability.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions for specific industries and business challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation 
              and accelerate business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Enterprise Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Get Enterprise Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutionsPage;