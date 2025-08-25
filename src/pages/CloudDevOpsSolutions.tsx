import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Shield, Zap, Database, Server, GitBranch, Monitor, Rocket, Target, Users, Globe } from 'lucide-react';

const CloudDevOpsSolutions = () => {
  const cloudServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      services: [
        'AWS, Azure, and Google Cloud expertise',
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cost optimization and management'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with intelligent automation.',
      services: [
        'CI/CD pipeline automation',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring and alerting'
      ],
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions.',
      services: [
        'Identity and access management',
        'Security monitoring and threat detection',
        'Compliance automation (SOC2, HIPAA)',
        'Vulnerability assessment and remediation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Faster Deployment',
      description: 'Reduce time-to-market with automated CI/CD pipelines and cloud-native solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize cloud spending and infrastructure costs through intelligent automation.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalability',
      description: 'Scale your infrastructure automatically based on demand and business growth.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and 99.9% uptime guarantees for your applications.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      tools: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Linode'],
      icon: Cloud
    },
    {
      category: 'Container & Orchestration',
      tools: ['Docker', 'Kubernetes', 'Helm', 'OpenShift', 'Rancher'],
      icon: Cpu
    },
    {
      category: 'Infrastructure as Code',
      tools: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet', 'Chef'],
      icon: GitBranch
    },
    {
      category: 'Monitoring & Observability',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
      icon: Monitor
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenges: ['High traffic spikes', 'Inventory management', 'Payment processing'],
      solutions: ['Auto-scaling infrastructure', 'Microservices architecture', 'CDN optimization']
    },
    {
      industry: 'Healthcare',
      challenges: ['Data compliance', 'High availability', 'Security requirements'],
      solutions: ['HIPAA-compliant infrastructure', 'Multi-region deployment', 'Advanced security monitoring']
    },
    {
      industry: 'Financial Services',
      challenges: ['Regulatory compliance', 'Real-time processing', 'Data security'],
      solutions: ['SOC2 compliance automation', 'High-performance computing', 'End-to-end encryption']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cloud &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                DevOps
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Accelerate your digital transformation with enterprise-grade cloud infrastructure 
              and DevOps automation solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Cloud & DevOps
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of modern cloud infrastructure and DevOps practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive cloud and DevOps solutions designed for modern enterprises.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Technologies &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Tools
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We work with the latest and most reliable technologies in the industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-zion-slate-light text-sm bg-zion-blue-light/20 px-3 py-2 rounded-lg">
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for specific industry challenges and requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-zion-cyan">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Challenges:</h4>
                  <ul className="space-y-2">
                    {useCase.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {useCase.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successful cloud and DevOps implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current infrastructure and identify optimization opportunities.',
                icon: Monitor
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop comprehensive cloud and DevOps strategy aligned with business goals.',
                icon: Target
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the strategy with best practices and proven methodologies.',
                icon: Rocket
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, optimize, and improve your infrastructure.',
                icon: Zap
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you build a scalable, secure, and efficient cloud infrastructure 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get a Free Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsSolutions;