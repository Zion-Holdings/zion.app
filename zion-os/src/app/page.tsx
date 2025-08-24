import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const services = [
    {
      title: 'AI Automation Services',
      description: 'Transform your business operations with intelligent automation powered by cutting-edge AI technology.',
      href: '/ai-automation-services',
      icon: '🤖',
      features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics']
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Build self-managing business systems that operate independently and optimize performance continuously.',
      href: '/ai-autonomous-business-operations',
      icon: '🚀',
      features: ['Self-Optimizing Systems', 'Real-time Decision Making', 'Scalable Operations']
    },
    {
      title: 'Advanced Cybersecurity Suite',
      description: 'Protect your digital assets with next-generation security solutions and threat intelligence.',
      href: '/advanced-cybersecurity-suite',
      icon: '🛡️',
      features: ['Threat Detection', 'Zero Trust Security', 'Compliance Automation']
    },
    {
      title: 'Quantum Computing Services',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization.',
      href: '/quantum-services',
      icon: '⚛️',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Research & Development']
    },
    {
      title: 'Space Technology Solutions',
      description: 'Pioneering space technology innovations for the next generation of exploration and discovery.',
      href: '/space-tech',
      icon: '🚀',
      features: ['Satellite Technology', 'Space Infrastructure', 'Innovation Research']
    },
    {
      title: 'IT Infrastructure Services',
      description: 'Build robust, scalable, and secure IT infrastructure for modern enterprises.',
      href: '/advanced-it-infrastructure-services',
      icon: '🏗️',
      features: ['Cloud Architecture', 'DevOps Automation', 'Performance Optimization']
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI-Powered Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Zion Tech Group delivers cutting-edge AI solutions, autonomous business platforms, and revolutionary technology services that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started Today
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered solutions can revolutionize your business operations and drive unprecedented growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already leveraging our AI-powered solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}