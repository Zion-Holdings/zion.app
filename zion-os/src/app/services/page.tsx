import Link from 'next/link';

export const metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Comprehensive AI-powered technology services including automation, autonomous business operations, cybersecurity, quantum computing, and space technology solutions.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI & Automation',
      description: 'Transform your business with intelligent automation and AI-powered solutions.',
      services: [
        {
          name: 'AI Automation Services',
          description: 'Intelligent process automation and workflow optimization.',
          href: '/ai-automation-services',
          icon: '🤖',
          features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics', 'Machine Learning Models']
        },
        {
          name: 'AI Autonomous Business Operations',
          description: 'Self-managing business systems that optimize performance continuously.',
          href: '/ai-autonomous-business-operations',
          icon: '🚀',
          features: ['Self-Optimizing Systems', 'Real-time Decision Making', 'Scalable Operations', 'Performance Analytics']
        },
        {
          name: 'AI Content Generation',
          description: 'Automated content creation and marketing automation.',
          href: '/ai-content-generator',
          icon: '✍️',
          features: ['Content Creation', 'Marketing Automation', 'Personalization Engine', 'Creative Studio']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Protect your digital assets with next-generation security solutions.',
      services: [
        {
          name: 'Advanced Cybersecurity Suite',
          description: 'Comprehensive security solutions for modern enterprises.',
          href: '/advanced-cybersecurity-suite',
          icon: '🛡️',
          features: ['Threat Detection', 'Zero Trust Security', 'Incident Response', 'Security Analytics']
        },
        {
          name: 'SOC2 Compliance Automation',
          description: 'Automated compliance management and reporting.',
          href: '/soc2-compliance-automation',
          icon: '📋',
          features: ['Compliance Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Preparation']
        }
      ]
    },
    {
      title: 'Infrastructure & Development',
      description: 'Build robust, scalable, and secure IT infrastructure.',
      services: [
        {
          name: 'Advanced IT Infrastructure Services',
          description: 'Modern infrastructure solutions for enterprise needs.',
          href: '/advanced-it-infrastructure-services',
          icon: '🏗️',
          features: ['Cloud Architecture', 'DevOps Automation', 'Performance Optimization', 'Scalability Solutions']
        },
        {
          name: 'AI-Powered IT Asset Management',
          description: 'Intelligent management of IT resources and assets.',
          href: '/ai-powered-it-asset-management',
          icon: '💻',
          features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Performance Monitoring']
        }
      ]
    },
    {
      title: 'Quantum & Advanced Technologies',
      description: 'Harness cutting-edge technologies for complex problem-solving.',
      services: [
        {
          name: 'Quantum Computing Services',
          description: 'Quantum solutions for optimization and research.',
          href: '/quantum-services',
          icon: '⚛️',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Research & Development', 'Quantum Consulting']
        },
        {
          name: 'Space Technology Solutions',
          description: 'Innovative space technology and infrastructure.',
          href: '/space-tech',
          icon: '🚀',
          features: ['Satellite Technology', 'Space Infrastructure', 'Innovation Research', 'Technology Partnerships']
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows for maximum productivity.',
      icon: '📈'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'Scale your operations seamlessly as your business grows.',
      icon: '📊'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology.',
      icon: '🏆'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize risks through intelligent monitoring and predictive analytics.',
      icon: '🛡️'
    },
    {
      title: 'Innovation Leadership',
      description: 'Lead your industry with pioneering technology solutions.',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive AI-powered technology solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of partnering with us for your technology transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful technology implementation and transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your current systems and identify opportunities for improvement.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Our experts design a customized solution tailored to your specific needs.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We implement the solution with minimal disruption to your operations.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization to ensure maximum performance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}