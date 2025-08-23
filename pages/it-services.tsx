import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Cloud, Shield, Settings, Database, Network, 
  CheckCircle, ArrowRight, Server, Lock, Users, Globe,
  BarChart3, Zap, Building, Smartphone, Monitor, Code
} from 'lucide-react';

export default function ITServices() {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud computing solutions for modern businesses',
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Serverless Architecture', 'Container Orchestration'],
      applications: ['Application Hosting', 'Data Storage', 'Backup & Recovery', 'Scalable Computing']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets',
      icon: <Shield className="w-12 h-12 text-green-400" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Auditing', 'Incident Response'],
      applications: ['Network Security', 'Data Protection', 'Compliance Management', 'Security Training']
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development and deployment processes',
      icon: <Settings className="w-12 h-12 text-purple-400" />,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Logging'],
      applications: ['Software Development', 'Deployment Automation', 'Quality Assurance', 'Performance Monitoring']
    },
    {
      title: 'Data Management',
      description: 'Comprehensive data solutions for business intelligence',
      icon: <Database className="w-12 h-12 text-blue-400" />,
      features: ['Data Warehousing', 'Business Intelligence', 'Data Analytics', 'Data Governance'],
      applications: ['Reporting & Dashboards', 'Predictive Analytics', 'Data Integration', 'Master Data Management']
    },
    {
      title: 'Network Infrastructure',
      description: 'Robust networking solutions for enterprise connectivity',
      icon: <Network className="w-12 h-12 text-yellow-400" />,
      features: ['Network Design', 'Wireless Solutions', 'VPN & Remote Access', 'Network Security'],
      applications: ['Office Connectivity', 'Remote Work Support', 'Branch Office Integration', 'Internet Security']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance for business transformation',
      icon: <Building className="w-12 h-12 text-pink-400" />,
      features: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Vendor Management'],
      applications: ['Technology Roadmaps', 'Cost Optimization', 'Risk Management', 'Compliance Planning']
    }
  ];

  const itAdvantages = [
    {
      title: 'Scalability',
      description: 'Flexible solutions that grow with your business needs',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your business',
      icon: <Lock className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Efficiency',
      description: 'Optimized processes that improve productivity',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology to stay ahead of competition',
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Transportation'
  ];

  const technologies = [
    'AWS & Azure',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Jenkins',
    'GitLab',
    'Ansible',
    'Prometheus'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            IT Services & Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your business with enterprise-grade IT solutions that drive efficiency, security, and innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Get IT Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/ai-services" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              AI + IT
            </a>
          </motion.div>
        </div>
      </section>

      {/* IT Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide end-to-end IT services that modernize your business operations.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
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
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Applications:</h4>
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

      {/* IT Advantages */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade IT solutions designed for modern businesses.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itAdvantages.map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are tailored to meet the unique challenges and requirements of diverse industry sectors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{industry}</span>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver robust IT solutions.
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
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Our IT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to successfully implementing IT solutions in your organization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'Understanding your current IT infrastructure and business needs',
                icon: <Monitor className="w-8 h-8 text-green-400" />
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Designing customized IT solutions that meet your requirements',
                icon: <Code className="w-8 h-8 text-blue-400" />
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploying and configuring IT solutions with minimal disruption',
                icon: <Server className="w-8 h-8 text-purple-400" />
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization of IT systems',
                icon: <Settings className="w-8 h-8 text-yellow-400" />
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
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* IT + AI Integration */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              IT + AI Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combine the power of traditional IT infrastructure with artificial intelligence to create intelligent, self-managing systems.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">AI-Enhanced IT Operations</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-powered IT solutions enable intelligent automation, predictive maintenance, and proactive problem resolution, 
                reducing downtime and improving system reliability.
              </p>
              <ul className="space-y-3">
                {[
                  'Intelligent Monitoring & Alerting',
                  'Predictive Maintenance',
                  'Automated Incident Response',
                  'Smart Resource Allocation',
                  'AI-Powered Security'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
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
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-32 h-32 text-white" />
              </div>
              <p className="text-gray-300">
                The future of IT is intelligent, automated, and AI-powered.
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can modernize your business operations and drive digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your IT Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/ai-services" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

