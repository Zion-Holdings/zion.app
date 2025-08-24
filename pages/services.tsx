import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        { name: 'Machine Learning Models', description: 'Custom ML solutions for predictive analytics', link: '/ai-solutions' },
        { name: 'Natural Language Processing', description: 'Advanced NLP and chatbot development', link: '/ai-solutions' },
        { name: 'Computer Vision', description: 'Image recognition and visual analytics', link: '/ai-solutions' },
        { name: 'Predictive Analytics', description: 'Data-driven insights and forecasting', link: '/ai-solutions' }
      ],
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Consulting & Development',
      description: 'Comprehensive technology solutions',
      services: [
        { name: 'Web Development', description: 'Modern web applications and platforms', link: '/services/web-development' },
        { name: 'Mobile Development', description: 'iOS and Android applications', link: '/services/mobile-development' },
        { name: 'API Development', description: 'RESTful APIs and microservices', link: '/services/api-development' },
        { name: 'Database Design', description: 'Scalable database architecture', link: '/services/database-design' }
      ],
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      services: [
        { name: 'Security Auditing', description: 'Comprehensive security assessments', link: '/services/security-auditing' },
        { name: 'Network Security', description: 'Firewall and intrusion detection', link: '/services/network-security' },
        { name: 'Compliance Management', description: 'GDPR, SOC2, and industry compliance', link: '/services/compliance' },
        { name: 'Incident Response', description: '24/7 security monitoring and response', link: '/services/incident-response' }
      ],
      icon: '🔒',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and DevOps',
      services: [
        { name: 'Cloud Migration', description: 'AWS, Azure, and GCP migration', link: '/services/cloud-migration' },
        { name: 'DevOps Automation', description: 'CI/CD pipelines and automation', link: '/services/devops' },
        { name: 'Container Orchestration', description: 'Kubernetes and Docker management', link: '/services/containers' },
        { name: 'Performance Optimization', description: 'Application and infrastructure optimization', link: '/services/performance' }
      ],
      icon: '☁️',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const additionalServices = [
    {
      name: 'Data Pipeline Engineering',
      description: 'ETL processes and data warehousing solutions',
      link: '/services/data-pipeline-engineering'
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design and prototyping',
      link: '/services/ui-ux-design'
    },
    {
      name: 'Technical Documentation',
      description: 'Comprehensive documentation and knowledge management',
      link: '/services/technical-documentation'
    },
    {
      name: 'Customer Support Chatbots',
      description: 'AI-powered customer service automation',
      link: '/services/customer-support-chatbot'
    }
  ];

  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI solutions, IT services, cybersecurity, and cloud infrastructure services." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI, IT, cybersecurity, and cloud solutions for modern businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive innovation, enhance security, and accelerate your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-white/70">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-l-4 border-cyan-400 pl-4">
                        <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                        <p className="text-white/70 text-sm mb-2">{service.description}</p>
                        <Link 
                          href={service.link}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm inline-flex items-center"
                        >
                          Learn More <span className="ml-1">→</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Specialized Solutions</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Additional services tailored to meet specific business needs and industry requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
              <p className="text-xl text-white/70 mb-8">
                Let our expert team help you choose the right services and implement solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get a Free Consultation
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
