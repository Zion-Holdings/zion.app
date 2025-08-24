import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Code, Shield, Globe, Zap, Database, Lock, Cpu, Network, BarChart3, Smartphone } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Automated processes',
        'Competitive advantage'
      ],
      href: '/services/ai-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: [
        'AWS/Azure/GCP Migration',
        'Microservices Architecture',
        'Serverless Solutions',
        'DevOps Automation',
        'Container Orchestration',
        'Cloud Security'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Reduced maintenance'
      ],
      href: '/services/cloud-services'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React/Next.js Applications',
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
        'E-commerce Solutions',
        'Custom CMS'
      ],
      benefits: [
        'Modern user experience',
        'Mobile-first design',
        'Fast performance',
        'SEO optimization'
      ],
      href: '/services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Threat Intelligence'
      ],
      benefits: [
        'Protect sensitive data',
        'Meet compliance requirements',
        'Reduce security risks',
        'Build customer trust'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'IoT Platforms',
      description: 'Connected device solutions for smart environments and automation.',
      features: [
        'Sensor Networks',
        'Edge Computing',
        'Real-time Analytics',
        'Device Management',
        'Data Collection',
        'Remote Monitoring'
      ],
      benefits: [
        'Automated operations',
        'Real-time insights',
        'Cost savings',
        'Improved efficiency'
      ],
      href: '/services/iot-platforms'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: [
        'Process Automation',
        'Legacy Modernization',
        'Change Management',
        'Training Programs',
        'Workflow Optimization',
        'Technology Roadmaps'
      ],
      benefits: [
        'Streamlined operations',
        'Improved productivity',
        'Better customer experience',
        'Future-ready business'
      ],
      href: '/services/digital-transformation'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for strategic decision making.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Predictive Analytics',
        'Data Visualization',
        'ETL Processes',
        'Performance Dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Identify opportunities',
        'Optimize operations',
        'Measure performance'
      ],
      href: '/services/data-analytics'
    },
    {
      icon: Lock,
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized applications for modern businesses.',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Supply Chain Tracking',
        'Identity Management',
        'Cross-chain Solutions'
      ],
      benefits: [
        'Enhanced security',
        'Transparent operations',
        'Reduced costs',
        'New business models'
      ],
      href: '/services/blockchain'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML solutions that learn and adapt to your business needs.',
      features: [
        'Custom ML Models',
        'Deep Learning',
        'Neural Networks',
        'Model Training',
        'A/B Testing',
        'Continuous Learning'
      ],
      benefits: [
        'Automated insights',
        'Pattern recognition',
        'Predictive capabilities',
        'Scalable intelligence'
      ],
      href: '/services/machine-learning'
    },
    {
      icon: Network,
      title: 'API Development',
      description: 'Robust and scalable APIs that power modern applications.',
      features: [
        'RESTful APIs',
        'GraphQL Services',
        'API Gateway',
        'Rate Limiting',
        'Authentication',
        'Documentation'
      ],
      benefits: [
        'Seamless integration',
        'Scalable architecture',
        'Developer experience',
        'Faster development'
      ],
      href: '/services/api-development'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions for data-driven business decisions.',
      features: [
        'Interactive Dashboards',
        'KPI Tracking',
        'Report Automation',
        'Data Mining',
        'Trend Analysis',
        'Executive Reporting'
      ],
      benefits: [
        'Real-time insights',
        'Better decisions',
        'Performance tracking',
        'Competitive advantage'
      ],
      href: '/services/business-intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'Mobile UI/UX',
        'App Store Optimization'
      ],
      benefits: [
        'Mobile presence',
        'User engagement',
        'Brand visibility',
        'Revenue growth'
      ],
      href: '/services/mobile-development'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and objectives to understand your requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your business goals and technical requirements.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop your solution using best practices and conduct thorough testing to ensure quality.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud architecture, web development, cybersecurity, and more." />
        <meta name="keywords" content="technology services, AI development, cloud architecture, web development, cybersecurity, digital transformation" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth 
            for forward-thinking organizations across industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI and machine learning to cloud architecture and cybersecurity, we offer end-to-end 
              solutions that transform businesses and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and maximum value 
              for your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology services can transform your business and drive 
            innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>Contact Us Today</span>
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <span>Learn More About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;