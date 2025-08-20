import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

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
      link: '/ai-content-generator'
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
      link: '/cloud-platform'
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
      link: '/contact'
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
      link: '/analytics'
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
      link: '/automation'
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
      link: '/contact'
    },
  ];

  const microSaasServices = [
    {
      icon: '✍️',
      title: 'AI Content Generator',
      description: 'Generate high-quality, SEO-optimized content in seconds with AI-powered writing assistance.',
      features: [
        'AI-powered content creation',
        'SEO optimization',
        'Multiple content formats',
        'Brand voice customization'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      link: '/ai-content-generator',
      badge: 'New'
    },
    {
      icon: '⚡',
      title: 'Website Performance Monitor',
      description: 'Real-time monitoring of website performance with Core Web Vitals tracking and optimization tips.',
      features: [
        'Real-time monitoring',
        'Core Web Vitals',
        'Performance optimization',
        'Uptime monitoring'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-cyan-500',
      link: '/website-performance-monitor',
      badge: 'New'
    },
    {
      icon: '🔍',
      title: 'SEO Analyzer Tool',
      description: 'Comprehensive SEO analysis with keyword research, competitive analysis, and optimization recommendations.',
      features: [
        'SEO analysis',
        'Keyword research',
        'Competitive analysis',
        'Optimization tips'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      link: '/seo-analyzer-tool',
      badge: 'New'
    },
    {
      icon: '🔧',
      title: 'API Testing Suite',
      description: 'Comprehensive API testing with functional, performance, and security testing capabilities.',
      features: [
        'API testing',
        'Performance testing',
        'Security testing',
        'Real-time monitoring'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      link: '/api-testing-suite',
      badge: 'New'
    },
    {
      icon: '💻',
      title: 'Code Quality Checker',
      description: 'Analyze and improve code quality with multi-language support and security scanning.',
      features: [
        'Multi-language support',
        'Code quality metrics',
        'Security scanning',
        'Improvement recommendations'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      link: '/code-quality-checker',
      badge: 'New'
    }
  ];

  const technologies = [
    { name: 'Next.js', category: 'Frontend', icon: '⚡' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Azure', category: 'Cloud', icon: '🔷' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
  ];

  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI-Powered Solutions & Cloud Infrastructure</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, security, data analytics, DevOps, and digital transformation solutions." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="AI-powered automation, cloud infrastructure, security, and digital transformation services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Our Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            From AI-powered automation to cloud infrastructure, we deliver cutting-edge solutions that drive innovation and transform businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              What We Offer
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of technology services designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <div className="mt-6">
                        <Button
                          href={service.link}
                          variant="outline"
                          size="sm"
                          className={`border-${service.textColor.split('-')[1]}-500 text-${service.textColor.split('-')[1]}-400 hover:bg-${service.textColor.split('-')[1]}-500 hover:text-white`}
                        >
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
              New Micro SaaS Services
            </div>
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Ready-to-Use SaaS Solutions
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our new micro SaaS services designed to solve specific business challenges with ready-to-use solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.badge}
                    </span>
                  </div>
                )}
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={service.link}
                      size="sm"
                      className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
                    >
                      Try Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
              Technology Stack
            </div>
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Built with Modern Technologies
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="card-hover text-center group border-gradient-blue"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let&apos;s discuss how our services can help transform your business and accelerate your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get a Quote
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}