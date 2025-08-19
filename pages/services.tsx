import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-automation-consulting',
      title: 'AI Automation Consulting',
      description: 'Strategic consulting to help organizations plan and implement AI automation initiatives.',
      icon: '🤖',
      features: [
        'Automation readiness assessment',
        'Strategy development and roadmap planning',
        'Technology selection and vendor evaluation',
        'Change management and organizational readiness',
        'ROI analysis and business case development'
      ],
      benefits: [
        'Clear implementation roadmap',
        'Reduced risk and improved success rates',
        'Optimized technology investments',
        'Faster time to value',
        'Sustainable long-term success'
      ],
      duration: '4-8 weeks',
      investment: 'Starting at $25K'
    },
    {
      id: 'process-automation',
      title: 'Process Automation',
      description: 'End-to-end automation of business processes using AI and robotic process automation.',
      icon: '⚡',
      features: [
        'Process analysis and optimization',
        'Workflow automation design',
        'RPA implementation and integration',
        'Exception handling and error management',
        'Performance monitoring and optimization'
      ],
      benefits: [
        '50-80% reduction in processing time',
        'Improved accuracy and consistency',
        '24/7 operation capability',
        'Scalable and flexible solutions',
        'Immediate cost savings'
      ],
      duration: '6-12 weeks',
      investment: 'Starting at $50K'
    },
    {
      id: 'intelligent-content-generation',
      title: 'Intelligent Content Generation',
      description: 'AI-powered content creation systems that scale content production while maintaining quality.',
      icon: '📝',
      features: [
        'Content strategy and planning',
        'AI content generation engines',
        'Quality control and validation',
        'SEO optimization and analytics',
        'Multi-channel content distribution'
      ],
      benefits: [
        '10x increase in content output',
        'Consistent brand voice and quality',
        'Improved SEO performance',
        'Reduced content creation costs',
        'Faster time to market'
      ],
      duration: '8-16 weeks',
      investment: 'Starting at $75K'
    },
    {
      id: 'data-analytics-automation',
      title: 'Data Analytics Automation',
      description: 'Automated data collection, processing, and analysis for real-time insights and decision-making.',
      icon: '📊',
      features: [
        'Data pipeline automation',
        'Real-time analytics dashboards',
        'Predictive modeling and forecasting',
        'Automated reporting and alerts',
        'Data quality monitoring'
      ],
      benefits: [
        'Real-time business insights',
        'Faster decision-making',
        'Improved data accuracy',
        'Reduced manual reporting',
        'Predictive capabilities'
      ],
      duration: '10-20 weeks',
      investment: 'Starting at $100K'
    },
    {
      id: 'customer-service-automation',
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and automated customer service solutions for improved customer experience.',
      icon: '💬',
      features: [
        'Chatbot design and development',
        'Natural language processing',
        'Integration with existing systems',
        'Multi-language support',
        'Performance analytics and optimization'
      ],
      benefits: [
        '24/7 customer support',
        '80% reduction in response time',
        'Improved customer satisfaction',
        'Reduced support costs',
        'Scalable support operations'
      ],
      duration: '6-12 weeks',
      investment: 'Starting at $60K'
    },
    {
      id: 'cloud-infrastructure-automation',
      title: 'Cloud Infrastructure Automation',
      description: 'Self-healing, auto-scaling cloud infrastructure with intelligent resource management.',
      icon: '☁️',
      features: [
        'Infrastructure as code implementation',
        'Auto-scaling and load balancing',
        'Monitoring and alerting systems',
        'Cost optimization and management',
        'Security and compliance automation'
      ],
      benefits: [
        '50% reduction in cloud costs',
        '99.9% uptime guarantee',
        'Zero manual intervention',
        'Improved performance and reliability',
        'Enhanced security posture'
      ],
      duration: '12-24 weeks',
      investment: 'Starting at $150K'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Automate production processes, quality control, and supply chain management.',
      icon: '🏭'
    },
    {
      name: 'Healthcare',
      description: 'Streamline patient care, automate administrative tasks, and improve diagnostic accuracy.',
      icon: '🏥'
    },
    {
      name: 'Financial Services',
      description: 'Automate compliance, risk management, and customer service operations.',
      icon: '🏦'
    },
    {
      name: 'E-commerce',
      description: 'Optimize customer experience, automate inventory management, and improve conversion rates.',
      icon: '🛒'
    },
    {
      name: 'Marketing & Advertising',
      description: 'Scale content creation, automate campaign management, and optimize customer engagement.',
      icon: '📢'
    },
    {
      name: 'Technology',
      description: 'Automate development workflows, testing, and deployment processes.',
      icon: '💻'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business objectives, current processes, and automation opportunities.',
      duration: '1-2 weeks',
      deliverables: ['Business process analysis', 'Technology assessment', 'ROI analysis', 'Implementation roadmap']
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Our team designs a comprehensive automation solution tailored to your specific needs and constraints.',
      duration: '2-4 weeks',
      deliverables: ['Technical architecture', 'Process flow design', 'Integration plan', 'Change management strategy']
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We develop and thoroughly test the automation solution to ensure reliability and performance.',
      duration: '4-12 weeks',
      deliverables: ['Working automation system', 'Test results', 'Documentation', 'Training materials']
    },
    {
      step: 4,
      title: 'Deployment & Training',
      description: 'We deploy the solution and provide comprehensive training to ensure successful adoption.',
      duration: '1-2 weeks',
      deliverables: ['Production deployment', 'User training', 'Go-live support', 'Performance monitoring']
    },
    {
      step: 5,
      title: 'Optimization & Support',
      description: 'We continuously monitor performance and optimize the system for ongoing improvement.',
      duration: 'Ongoing',
      deliverables: ['Performance reports', 'Optimization recommendations', 'Technical support', 'System updates']
    }
  ];

  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI & Automation Solutions</title>
        <meta name="description" content="Comprehensive AI automation services including process automation, content generation, data analytics, and cloud infrastructure optimization." />
        <meta property="og:title" content="Services | Zion Tech Group - AI & Automation Solutions" />
        <meta property="og:description" content="Comprehensive AI automation services for modern businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>

            {/* Header */}
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive AI automation solutions designed to transform your business operations, 
                improve efficiency, and drive sustainable growth
              </p>
            </header>

            {/* Services Grid */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">AI Automation Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                        <p className="text-white/80">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-fuchsia-400 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div className="text-sm text-white/60">
                        <div>Duration: {service.duration}</div>
                        <div>Investment: {service.investment}</div>
                      </div>
                      <Link 
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Industries We Serve */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Industries We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{industry.name}</h3>
                    <p className="text-white/80 text-sm">{industry.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Implementation Process</h2>
              <div className="space-y-8">
                {processSteps.map((step) => (
                  <div key={step.step} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-white/80 text-lg mb-4">{step.description}</p>
                        <div>
                          <h4 className="font-semibold text-fuchsia-400 mb-2">Deliverables:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable, index) => (
                              <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Proven Expertise</h3>
                  <p className="text-white/80 text-sm">
                    Over 10 years of experience implementing AI automation solutions across various industries, 
                    with a track record of successful transformations.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Innovation Focus</h3>
                  <p className="text-white/80 text-sm">
                    We stay at the forefront of AI technology, continuously innovating and adopting 
                    the latest advancements to deliver cutting-edge solutions.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Partnership Approach</h3>
                  <p className="text-white/80 text-sm">
                    We work as true partners with our clients, ensuring long-term success through 
                    ongoing support, optimization, and continuous improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI automation services can help you achieve your business objectives, 
                  improve efficiency, and gain competitive advantages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/case-studies"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}