import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Building, Brain, Zap, Target, Rocket, 
  CheckCircle, ArrowRight, Cpu, Users, Globe, Shield,
  BarChart3, Database, Cloud, Lock, Settings, Star, Network, DollarSign
} from 'lucide-react';

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: 'AI-Powered Micro SAAS',
      description: 'Intelligent software solutions that automate complex business processes',
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      features: ['Machine Learning Integration', 'Natural Language Processing', 'Predictive Analytics', 'Automated Decision Making'],
      applications: ['Content Generation', 'Data Analysis', 'Customer Support', 'Process Automation']
    },
    {
      title: 'Business Productivity Tools',
      description: 'Essential tools that streamline operations and boost team efficiency',
      icon: <Building className="w-12 h-12 text-purple-400" />,
      features: ['Project Management', 'Team Collaboration', 'Time Tracking', 'Workflow Automation'],
      applications: ['Task Management', 'Team Communication', 'Resource Planning', 'Performance Monitoring']
    },
    {
      title: 'Data Analytics Platforms',
      description: 'Comprehensive analytics solutions for data-driven decision making',
      icon: <BarChart3 className="w-12 h-12 text-green-400" />,
      features: ['Real-time Dashboards', 'Custom Reporting', 'Data Visualization', 'Predictive Insights'],
      applications: ['Business Intelligence', 'Performance Tracking', 'Market Analysis', 'Customer Insights']
    },
    {
      title: 'Security & Compliance Tools',
      description: 'Essential security solutions for modern business requirements',
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      features: ['Threat Detection', 'Compliance Monitoring', 'Access Control', 'Security Auditing'],
      applications: ['Data Protection', 'Regulatory Compliance', 'Identity Management', 'Risk Assessment']
    },
    {
      title: 'Integration & API Tools',
      description: 'Seamless connectivity solutions for your business ecosystem',
      icon: <Network className="w-12 h-12 text-yellow-400" />,
      features: ['API Management', 'Data Integration', 'Workflow Automation', 'Third-party Connectors'],
      applications: ['System Integration', 'Data Synchronization', 'Process Automation', 'Ecosystem Management']
    },
    {
      title: 'Custom Micro SAAS',
      description: 'Tailored software solutions designed for your specific business needs',
      icon: <Code className="w-12 h-12 text-pink-400" />,
      features: ['Custom Development', 'Scalable Architecture', 'Cloud Deployment', 'Ongoing Support'],
      applications: ['Industry Solutions', 'Business Processes', 'Customer Experience', 'Operational Efficiency']
    }
  ];

  const microSaasBenefits = [
    {
      title: 'Cost-Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Scalable',
      description: 'Solutions that grow with your business needs',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Quick Deployment',
      description: 'Fast implementation and time-to-value',
      icon: <Rocket className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamless connection with existing systems',
      icon: <Settings className="w-8 h-8 text-purple-400" />
    }
  ];

  const useCases = [
    'Small business automation',
    'Team productivity enhancement',
    'Data analysis and reporting',
    'Customer relationship management',
    'Project management and tracking',
    'Financial planning and budgeting',
    'Marketing automation',
    'Inventory management'
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Python',
    'AWS & Azure',
    'PostgreSQL & MongoDB',
    'Docker & Kubernetes',
    'GraphQL & REST APIs',
    'Machine Learning',
    'Cloud Computing'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent mb-6"
          >
            Micro SAAS Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Powerful, focused software solutions that solve specific business problems and drive growth without the complexity of enterprise systems.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Get Micro SAAS Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/ai-services" className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              AI + Micro SAAS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Micro SAAS Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Comprehensive Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered tools to business productivity solutions, we provide focused software that delivers immediate value.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-pink-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of focused, purpose-built software solutions over complex enterprise systems.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Micro SAAS Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how micro SAAS solutions can address specific business challenges and opportunities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage modern, scalable technologies to build robust and efficient micro SAAS solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Our Micro SAAS Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to building and deploying focused software solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'Understanding your specific business needs and requirements',
                icon: <Target className="w-8 h-8 text-pink-400" />
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Creating user-friendly interfaces and user experience',
                icon: <Code className="w-8 h-8 text-cyan-400" />
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building and validating the software solution',
                icon: <Cpu className="w-8 h-8 text-green-400" />
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Launching the solution and providing ongoing support',
                icon: <Rocket className="w-8 h-8 text-yellow-400" />
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <div className="flex justify-center mb-3">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS + AI Integration */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Micro SAAS + AI Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combine the power of focused software solutions with artificial intelligence to create intelligent, automated business tools.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">AI-Enhanced Micro SAAS</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-powered micro SAAS solutions provide intelligent automation, predictive insights, and adaptive functionality, 
                making them more valuable and user-friendly than traditional software.
              </p>
              <ul className="space-y-3">
                {[
                  'Intelligent Automation',
                  'Predictive Analytics',
                  'Natural Language Processing',
                  'Adaptive User Interfaces',
                  'Smart Data Processing'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Code className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                The future of business software is intelligent, focused, and AI-powered.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent">
              Ready to Build Your Micro SAAS Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how a focused software solution can solve your specific business challenges and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/ai-services" className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

