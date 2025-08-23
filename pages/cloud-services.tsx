import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Database, Network, Zap, Target, Users, Heart, DollarSign, Cog, FileText, 
  Calendar, Lightbulb, HelpCircle, Monitor, Star, Award, TrendingUp, Globe, 
  Lock, Palette, Cpu, Layers, Globe2, Truck, Brain, Atom, Shield, Rocket, BarChart
} from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      category: 'Cloud Infrastructure',
      services: [
        {
          name: 'Cloud Migration & Strategy',
          description: 'Comprehensive cloud migration planning and execution strategies',
          href: '/cloud-migration-strategy',
          icon: <Cloud className="w-6 h-6" />,
          features: ['Migration Planning', 'Cost Optimization', 'Performance Tuning', 'Risk Assessment'],
          badge: 'Strategic'
        },
        {
          name: 'Multi-Cloud Management',
          description: 'Unified management across AWS, Azure, Google Cloud, and private clouds',
          href: '/multi-cloud-management',
          icon: <Globe className="w-6 h-6" />,
          features: ['Unified Dashboard', 'Cost Management', 'Security Compliance', 'Performance Monitoring'],
          badge: 'Multi-Cloud'
        },
        {
          name: 'Hybrid Cloud Solutions',
          description: 'Seamless integration between on-premises and cloud environments',
          href: '/hybrid-cloud-solutions',
          icon: <Server className="w-6 h-6" />,
          features: ['Seamless Integration', 'Data Synchronization', 'Workload Optimization', 'Security Management'],
          badge: 'Hybrid'
        }
      ]
    },
    {
      category: 'Cloud Security & Compliance',
      services: [
        {
          name: 'Cloud Security Management',
          description: 'Comprehensive security across all cloud platforms and services',
          href: '/cloud-security-management',
          icon: <Shield className="w-6 h-6" />,
          features: ['Identity Management', 'Access Control', 'Data Protection', 'Threat Detection'],
          badge: 'Security'
        },
        {
          name: 'Cloud Compliance Solutions',
          description: 'GDPR, HIPAA, SOC2, and other compliance frameworks for cloud',
          href: '/cloud-compliance-solutions',
          icon: <Lock className="w-6 h-6" />,
          features: ['Compliance Frameworks', 'Audit Trails', 'Policy Enforcement', 'Reporting Tools'],
          badge: 'Compliance'
        },
        {
          name: 'Zero Trust Cloud Architecture',
          description: 'Zero trust security implementation for cloud environments',
          href: '/zero-trust-cloud-architecture',
          icon: <Shield className="w-6 h-6" />,
          features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control'],
          badge: 'Zero Trust'
        }
      ]
    },
    {
      category: 'Cloud Development & DevOps',
      services: [
        {
          name: 'DevOps as a Service',
          description: 'Complete DevOps pipeline implementation and management',
          href: '/devops-as-a-service',
          icon: <Cog className="w-6 h-6" />,
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
          badge: 'DevOps'
        },
        {
          name: 'Container Orchestration',
          description: 'Kubernetes and Docker container management and optimization',
          href: '/container-orchestration',
          icon: <Server className="w-6 h-6" />,
          features: ['Kubernetes Management', 'Container Security', 'Auto-scaling', 'Load Balancing'],
          badge: 'Containers'
        },
        {
          name: 'Serverless Computing',
          description: 'Serverless architecture design and implementation',
          href: '/serverless-computing',
          icon: <Zap className="w-6 h-6" />,
          features: ['Function Design', 'Event-Driven Architecture', 'Cost Optimization', 'Performance Monitoring'],
          badge: 'Serverless'
        }
      ]
    },
    {
      category: 'Cloud Data & Analytics',
      services: [
        {
          name: 'Cloud Data Warehousing',
          description: 'Scalable data warehouse solutions on cloud platforms',
          href: '/cloud-data-warehousing',
          icon: <Database className="w-6 h-6" />,
          features: ['Data Modeling', 'ETL Processes', 'Performance Optimization', 'Scalability'],
          badge: 'Data'
        },
        {
          name: 'Big Data Analytics',
          description: 'Big data processing and analytics on cloud infrastructure',
          href: '/big-data-analytics',
          icon: <BarChart className="w-6 h-6" />,
          features: ['Data Processing', 'Real-time Analytics', 'Machine Learning', 'Visualization'],
          badge: 'Analytics'
        },
        {
          name: 'Data Lake Solutions',
          description: 'Comprehensive data lake architecture and management',
          href: '/data-lake-solutions',
          icon: <Database className="w-6 h-6" />,
          features: ['Data Ingestion', 'Storage Management', 'Data Governance', 'Access Control'],
          badge: 'Data Lake'
        }
      ]
    },
    {
      category: 'Cloud AI & Machine Learning',
      services: [
        {
          name: 'Cloud AI Platform',
          description: 'AI and machine learning platform on cloud infrastructure',
          href: '/cloud-ai-platform',
          icon: <Brain className="w-6 h-6" />,
          features: ['Model Training', 'Deployment', 'Monitoring', 'Scaling'],
          badge: 'AI'
        },
        {
          name: 'MLOps Implementation',
          description: 'Machine learning operations and lifecycle management',
          href: '/mlops-implementation',
          icon: <Cog className="w-6 h-6" />,
          features: ['Model Versioning', 'Pipeline Automation', 'Performance Monitoring', 'Model Governance'],
          badge: 'MLOps'
        },
        {
          name: 'AI Model Deployment',
          description: 'Production deployment and management of AI models',
          href: '/ai-model-deployment',
          icon: <Rocket className="w-6 h-6" />,
          features: ['Model Serving', 'A/B Testing', 'Performance Optimization', 'Monitoring'],
          badge: 'Deployment'
        }
      ]
    },
    {
      category: 'Cloud Cost Optimization',
      services: [
        {
          name: 'Cloud Cost Management',
          description: 'Comprehensive cloud cost optimization and monitoring',
          href: '/cloud-cost-management',
          icon: <DollarSign className="w-6 h-6" />,
          features: ['Cost Monitoring', 'Resource Optimization', 'Budget Management', 'Cost Forecasting'],
          badge: 'Cost'
        },
        {
          name: 'Reserved Instance Management',
          description: 'Strategic reserved instance planning and optimization',
          href: '/reserved-instance-management',
          icon: <Target className="w-6 h-6" />,
          features: ['Instance Planning', 'Cost Analysis', 'Commitment Management', 'Optimization'],
          badge: 'Savings'
        },
        {
          name: 'Cloud Performance Optimization',
          description: 'Performance tuning and optimization for cloud workloads',
          href: '/cloud-performance-optimization',
          icon: <Zap className="w-6 h-6" />,
          features: ['Performance Monitoring', 'Bottleneck Analysis', 'Optimization', 'Scaling'],
          badge: 'Performance'
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Scalability',
      description: 'Elastic scaling to meet your business demands'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized performance and reliability'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Worldwide cloud infrastructure coverage'
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime SLA', icon: <Monitor className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Users className="w-6 h-6" /> },
    { number: '50%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6" /> },
    { number: '100+', label: 'Cloud Services', icon: <Cloud className="w-6 h-6" /> }
  ];

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive AWS services and optimization',
      icon: <Cloud className="w-8 h-8" />,
      services: ['EC2 & Lambda', 'S3 & RDS', 'CloudFormation', 'CloudWatch']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise Azure solutions and integration',
      icon: <Server className="w-8 h-8" />,
      services: ['Virtual Machines', 'Azure SQL', 'ARM Templates', 'Application Insights']
    },
    {
      name: 'Google Cloud Platform',
      description: 'GCP services and machine learning solutions',
      icon: <Globe className="w-8 h-8" />,
      services: ['Compute Engine', 'BigQuery', 'Cloud Functions', 'AI Platform']
    },
    {
      name: 'Private Cloud',
      description: 'On-premises private cloud solutions',
      icon: <Lock className="w-8 h-8" />,
      services: ['OpenStack', 'VMware', 'Hyper-V', 'Custom Solutions']
    }
  ];

  return (
    <Layout
      title="Cloud Services - Zion Tech Group"
      description="Comprehensive cloud computing services including infrastructure, security, DevOps, AI, and cost optimization. Transform your business with our cloud expertise."
      keywords="cloud services, cloud computing, cloud migration, cloud security, DevOps, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/cloud-services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Cloud Computing Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud computing solutions. 
              From migration to optimization, we help you leverage the full power of the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                Cloud Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Migration Planning
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Cloud Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cloud computing offers unprecedented flexibility, scalability, and cost-effectiveness 
              for modern businesses looking to innovate and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide expertise across all major cloud platforms, helping you choose 
              the right solution for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{platform.name}</h3>
                <p className="text-gray-400 mb-4 text-center">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From infrastructure to AI, we provide the complete spectrum of cloud computing 
              services to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {cloudServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          {service.badge && (
                            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full border border-blue-500/30">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-200"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform with Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with cloud computing. 
                Our experts are ready to guide your cloud journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Cloud Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  Cloud Assessment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudServicesPage;