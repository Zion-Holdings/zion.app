import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Cpu, 
  Shield, 
  Zap, 
  Database, 
  Server,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';

const CloudDevOpsSolutions = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to cloud platforms with strategic planning and execution',
      features: [
        'Cloud readiness assessment',
        'Migration planning & strategy',
        'Data migration services',
        'Application modernization',
        'Cost optimization',
        'Performance monitoring'
      ],
      pricing: 'Starting from $5,000',
      link: '/cloud-migration'
    },
    {
      icon: Cpu,
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Monitoring & alerting',
        'Performance optimization'
      ],
      pricing: 'Starting from $3,500/month',
      link: '/devops-automation'
    },
    {
      icon: Database,
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications with Kubernetes and Docker',
      features: [
        'Kubernetes cluster setup',
        'Container orchestration',
        'Service mesh implementation',
        'Auto-scaling configuration',
        'Load balancing',
        'Health monitoring'
      ],
      pricing: 'Starting from $4,000/month',
      link: '/container-orchestration'
    },
    {
      icon: Server,
      title: 'Serverless Architecture',
      description: 'Build scalable applications with serverless computing platforms',
      features: [
        'Serverless function development',
        'API gateway setup',
        'Event-driven architecture',
        'Auto-scaling configuration',
        'Cost optimization',
        'Performance monitoring'
      ],
      pricing: 'Starting from $2,500/month',
      link: '/serverless-architecture'
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance',
      description: 'Ensure your cloud infrastructure meets security and compliance requirements',
      features: [
        'Security assessment',
        'Compliance auditing',
        'Identity & access management',
        'Data encryption',
        'Threat detection',
        'Security monitoring'
      ],
      pricing: 'Starting from $4,500/month',
      link: '/cloud-security'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize cloud infrastructure for maximum performance and cost efficiency',
      features: [
        'Performance analysis',
        'Resource optimization',
        'Cost optimization',
        'Capacity planning',
        'Monitoring setup',
        'Performance tuning'
      ],
      pricing: 'Starting from $3,000/month',
      link: '/performance-optimization'
    }
  ];

  const cloudCapabilities = [
    {
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance across multiple cloud providers'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your cloud infrastructure'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
    },
    {
      icon: Star,
      title: 'Best Practices',
      description: 'Industry-leading cloud architecture and security practices'
    }
  ];

  const platforms = [
    {
      name: 'AWS',
      services: ['EC2', 'S3', 'Lambda', 'RDS', 'ECS', 'CloudFormation']
    },
    {
      name: 'Azure',
      services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'AKS', 'ARM Templates']
    },
    {
      name: 'Google Cloud',
      services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'GKE', 'Terraform']
    },
    {
      name: 'Kubernetes',
      services: ['Cluster Management', 'Service Mesh', 'Monitoring', 'Security', 'Networking', 'Storage']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-zion-cyan/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-zion-cyan bg-clip-text text-transparent">
              Cloud & DevOps Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Build, deploy, and scale applications with enterprise-grade cloud infrastructure 
              and automated DevOps practices that accelerate your development cycle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Cloud Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Cloud Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Cloud Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to modernize your infrastructure
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
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
                    className="block p-8 bg-zion-blue-dark/50 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-blue-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

      {/* Cloud Capabilities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide end-to-end cloud solutions from strategy to implementation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Cloud Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expertise across all major cloud providers and container platforms
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how cloud and DevOps can accelerate your development and reduce costs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Get Cloud Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsSolutions;