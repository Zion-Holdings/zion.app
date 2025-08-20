import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Features from '../components/ui/Features';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your operations automatically.',
      features: [
        'Machine learning algorithms',
        'Predictive analytics',
        'Natural language processing',
        'Computer vision systems',
        'Autonomous decision making'
      ],
      color: 'bg-gradient-to-br from-blue-100 to-blue-200'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, reliable cloud solutions with zero-downtime guarantees.',
      features: [
        'Multi-region deployment',
        'Auto-scaling systems',
        'Load balancing',
        'Disaster recovery',
        'Performance optimization'
      ],
      color: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
      icon: '🔄',
      title: 'CI/CD Automation',
      description: 'Streamlined development workflows with intelligent build and deployment systems.',
      features: [
        'Automated testing',
        'Continuous integration',
        'Zero-downtime deployments',
        'Rollback capabilities',
        'Performance monitoring'
      ],
      color: 'bg-gradient-to-br from-green-100 to-green-200'
    },
    {
      icon: '📊',
      title: 'Performance Monitoring',
      description: 'Real-time insights and automated optimization for your applications.',
      features: [
        'Real-time metrics',
        'Automated alerts',
        'Performance optimization',
        'Health monitoring',
        'Predictive maintenance'
      ],
      color: 'bg-gradient-to-br from-indigo-100 to-indigo-200'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated threat detection and compliance monitoring.',
      features: [
        'Automated security scanning',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Threat detection',
        'Data protection'
      ],
      color: 'bg-gradient-to-br from-red-100 to-red-200'
    },
    {
      icon: '🚀',
      title: 'Content Generation',
      description: 'AI-powered content creation and optimization for maximum engagement.',
      features: [
        'Automated content creation',
        'SEO optimization',
        'Quality assurance',
        'Performance analytics',
        'A/B testing'
      ],
      color: 'bg-gradient-to-br from-orange-100 to-orange-200'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on what matters most'
    },
    {
      icon: '📈',
      title: 'Better Performance',
      description: 'Continuous optimization and monitoring for peak performance'
    },
    {
      icon: '🔄',
      title: '24/7 Operation',
      description: 'Autonomous systems that work around the clock'
    },
    {
      icon: '🎯',
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with real-time analytics'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including automation, cloud infrastructure, and intelligent solutions." />
        <meta property="og:title" content="AI Services | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive AI services including automation, cloud infrastructure, and intelligent solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
              <span className="mr-2">🚀</span>
              Our Services
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your business with cutting-edge AI solutions and autonomous systems
            </p>
            
            <Button href="/contact" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are designed to work together, creating a complete ecosystem of intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of autonomous technology and AI-powered solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful implementation and maximum value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We analyze your current systems and identify opportunities for automation and optimization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Our team implements the solution with minimal disruption to your existing operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and optimization ensure your systems perform at peak efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI services can revolutionize your operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started Today
              </Button>
              <Button 
                href="/case-studies" 
                variant="ghost" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}