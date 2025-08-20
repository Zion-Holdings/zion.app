import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Decision Making',
        'Automated Workflows'
      ],
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      features: [
        'Multi-Cloud Strategy',
        'Auto-Scaling Systems',
        'Load Balancing',
        'Disaster Recovery',
        'Performance Optimization'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions that protect your data and ensure regulatory compliance.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Data Encryption',
        'Access Control'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Real-time Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Performance Metrics'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '🚀',
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated pipelines and deployment strategies.',
      features: [
        'Continuous Integration',
        'Automated Testing',
        'Deployment Automation',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions and strategic consulting.',
      features: [
        'Technology Strategy',
        'Process Optimization',
        'Change Management',
        'Digital Innovation',
        'Legacy Modernization'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
    // Micro SaaS Services - Content & Marketing
    {
      icon: '📝',
      title: 'AI Content Generator Pro',
      description: 'Professional AI-powered content creation tool for blogs, marketing copy, and social media.',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (15+ languages)',
        'Brand voice customization',
        'Content templates library (100+ templates)',
        'Plagiarism-free writing guarantee'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: '$49/month',
      link: 'https://contentgen.zion.app',
      category: 'Content & Marketing',
      marketSize: '$1.2B'
    },
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI optimization and smart segmentation.',
      features: [
        'AI-powered personalization',
        'Advanced segmentation & targeting',
        'A/B testing automation',
        'Behavioral triggers',
        'Advanced analytics & reporting'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: '$79/month',
      link: 'https://email.zion.app',
      category: 'Content & Marketing',
      marketSize: '$1.5B'
    },
    {
      icon: '📱',
      title: 'Social Media Automation',
      description: 'Multi-platform social media management across 5 platforms.',
      features: [
        'Multi-platform posting (5 platforms)',
        'Smart scheduling & automation',
        'Content calendar management',
        'Advanced analytics & insights',
        'AI-powered content suggestions'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      pricing: '$89/month',
      link: 'https://social.zion.app',
      category: 'Content & Marketing',
      marketSize: '$2.1B'
    },
    {
      icon: '🔍',
      title: 'SEO Automation Suite',
      description: 'Comprehensive SEO tools with automated optimization and reporting.',
      features: [
        'Keyword research automation',
        'On-page optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-green-500',
      pricing: '$89/month',
      link: 'https://seo.zion.app',
      category: 'Content & Marketing',
      marketSize: '$1.8B'
    },
    // Micro SaaS Services - Customer Experience
    {
      icon: '🎧',
      title: 'Customer Support Automation',
      description: 'AI-powered customer support platform with chatbots and ticket management.',
      features: [
        'AI chatbot with 95% accuracy',
        'Smart ticket routing',
        'Knowledge base management',
        'Multi-channel support',
        'Performance analytics'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: '$69/month',
      link: 'https://support.zion.app',
      category: 'Customer Experience',
      marketSize: '$3.2B'
    },
    {
      icon: '💬',
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot solutions for customer support and lead generation.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Analytics & insights',
        'Custom training data',
        '24/7 availability'
      ],
      color: 'bg-gradient-to-br from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      gradient: 'from-sky-400 to-blue-500',
      pricing: '$69/month',
      link: 'https://chatbot.zion.app',
      category: 'Customer Experience',
      marketSize: '$1.6B'
    },
    // Micro SaaS Services - Productivity & Collaboration
    {
      icon: '📊',
      title: 'Project Management Suite',
      description: 'Comprehensive project management platform with advanced planning tools.',
      features: [
        'Project planning & scheduling',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Resource management',
        'Gantt charts & timelines'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: '$99/month',
      link: 'https://projects.zion.app',
      category: 'Productivity & Collaboration',
      marketSize: '$4.8B'
    },
    {
      icon: '🎨',
      title: 'Design System Builder',
      description: 'Create and maintain consistent design systems with automated component generation.',
      features: [
        'Component library management',
        'Design token automation',
        'Style guide generation',
        'Design-to-code workflow',
        'Team collaboration tools'
      ],
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      gradient: 'from-violet-400 to-purple-500',
      pricing: '$79/month',
      link: 'https://design.zion.app',
      category: 'Productivity & Collaboration',
      marketSize: '$800M'
    },
    // Micro SaaS Services - Analytics & Monitoring
    {
      icon: '📈',
      title: 'Data Analytics Platform',
      description: 'Business intelligence and data visualization with predictive analytics.',
      features: [
        'Real-time data processing',
        'Advanced data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Data integration tools'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: '$129/month',
      link: 'https://analytics.zion.app',
      category: 'Analytics & Monitoring',
      marketSize: '$6.8B'
    },
    {
      icon: '⚡',
      title: 'App Performance Monitor',
      description: 'Real-time monitoring and optimization for web and mobile applications.',
      features: [
        'Performance metrics tracking',
        'Error monitoring & alerting',
        'User experience analytics',
        'Automated optimization',
        'Custom dashboards'
      ],
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      pricing: '$39/month',
      link: 'https://monitor.zion.app',
      category: 'Analytics & Monitoring',
      marketSize: '$2.4B'
    }
  ];

  const categories = [
    {
      name: 'Core Services',
      description: 'Enterprise-grade technology solutions for modern businesses',
      services: services.filter(s => !s.category)
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered tools for content creation, email marketing, and social media',
      services: services.filter(s => s.category === 'Content & Marketing')
    },
    {
      name: 'Customer Experience',
      description: 'Solutions to enhance customer support and engagement',
      services: services.filter(s => s.category === 'Customer Experience')
    },
    {
      name: 'Productivity & Collaboration',
      description: 'Tools to streamline workflows and improve team collaboration',
      services: services.filter(s => s.category === 'Productivity & Collaboration')
    },
    {
      name: 'Analytics & Monitoring',
      description: 'Data-driven insights and performance monitoring solutions',
      services: services.filter(s => s.category === 'Analytics & Monitoring')
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, security, and specialized micro SaaS solutions for modern businesses." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                Our Services
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              From enterprise infrastructure to specialized micro SaaS tools, we provide the technology solutions 
              your business needs to thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {category.name}
                  </h2>
                  <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="h-full">
                      <div className="p-8 h-full flex flex-col">
                        <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                          {service.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <div className={`w-2 h-2 rounded-full ${service.gradient} mr-3`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {service.pricing && (
                          <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{service.pricing}</div>
                              {service.marketSize && (
                                <div className="text-sm text-gray-400 mt-1">Market Size: {service.marketSize}</div>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="mt-auto">
                          {service.link ? (
                            <Button
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90`}
                            >
                              Learn More
                            </Button>
                          ) : (
                            <Button
                              href="/contact"
                              className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90`}
                            >
                              Get Started
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Whether you need enterprise infrastructure or specialized micro SaaS tools, 
              we have the solutions to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/micro-saas"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"
              >
                Explore Micro SaaS
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}