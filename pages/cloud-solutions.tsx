import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime',
      features: ['AWS Migration', 'Azure Migration', 'GCP Migration', 'Hybrid Cloud Setup'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      features: ['Terraform', 'CloudFormation', 'ARM Templates', 'Infrastructure Automation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Scalable and secure database solutions in the cloud',
      features: ['RDS Management', 'NoSQL Solutions', 'Data Warehousing', 'Backup & Recovery'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and continuous integration',
      features: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Deployment Automation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security for cloud infrastructure',
      features: ['Identity Management', 'Access Control', 'Security Monitoring', 'Compliance'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance across multiple cloud providers',
      features: ['Cost Optimization', 'Performance Monitoring', 'Load Balancing', 'Disaster Recovery'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      logo: '☁️',
      description: 'Leading cloud platform with comprehensive services',
      strengths: ['Global Infrastructure', 'Wide Service Range', 'Enterprise Focus', 'Market Leader']
    },
    {
      name: 'Microsoft Azure',
      logo: '🔷',
      description: 'Enterprise-grade cloud platform with strong integration',
      strengths: ['Windows Integration', 'Enterprise Tools', 'Hybrid Cloud', 'Security Focus']
    },
    {
      name: 'Google Cloud Platform (GCP)',
      logo: '🔶',
      description: 'Innovative cloud platform with AI/ML capabilities',
      strengths: ['AI/ML Services', 'Data Analytics', 'Cost Efficiency', 'Innovation']
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand',
      icon: '📈'
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for the resources you use',
      icon: '💰'
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications closer to your users',
      icon: '🌍'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: '🔒'
    },
    {
      title: 'Reliability',
      description: '99.9%+ uptime with built-in redundancy',
      icon: '⚡'
    },
    {
      title: 'Innovation',
      description: 'Access to cutting-edge cloud technologies',
      icon: '🚀'
    }
  ];

  return (
    <>
      <Head>
        <title>Cloud Solutions | Zion Tech Group - Cloud Migration & Infrastructure</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure as code, DevOps automation, and multi-cloud strategies." />
        <meta property="og:title" content="Cloud Solutions | Zion Tech Group" />
        <meta property="og:description" content="Expert cloud migration, infrastructure management, and DevOps solutions for modern businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="relative container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Solutions
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions designed for the modern digital enterprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Cloud Services</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                End-to-end cloud solutions to accelerate your digital transformation journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Cloud Platform Expertise</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{provider.logo}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{provider.name}</h3>
                  <p className="text-white/70 mb-6">{provider.description}</p>
                  <div className="space-y-2">
                    {provider.strengths.map((strength, strengthIndex) => (
                      <div key={strengthIndex} className="text-sm text-white/60">
                        • {strength}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Cloud?</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The advantages of moving to the cloud for modern businesses
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Migration Process</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A proven methodology for successful cloud migration
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: '01', title: 'Assessment', description: 'Evaluate current infrastructure and identify migration opportunities' },
                  { step: '02', title: 'Planning', description: 'Design cloud architecture and create detailed migration roadmap' },
                  { step: '03', title: 'Migration', description: 'Execute migration with minimal downtime and risk mitigation' },
                  { step: '04', title: 'Optimization', description: 'Fine-tune performance and optimize costs' },
                  { step: '05', title: 'Management', description: 'Ongoing monitoring, maintenance, and support' }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">{phase.title}</h3>
                    <p className="text-white/70 text-sm">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">Success Story: E-commerce Platform Migration</h2>
                  <p className="text-lg text-white/80 mb-6">
                    We helped a leading e-commerce company migrate their entire infrastructure to AWS, resulting in 40% cost savings and 99.9% uptime.
                  </p>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      Zero downtime during migration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      40% reduction in infrastructure costs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      99.9% uptime achieved
                    </li>
                  </ul>
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-8 text-center"
                >
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-4">Migration Results</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">40%</div>
                      <div className="text-white/70">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                      <div className="text-white/70">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">0</div>
                      <div className="text-white/70">Downtime Hours</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/70 mb-8">
                Let our cloud experts help you design and implement the perfect cloud strategy for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Cloud Consultation
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}