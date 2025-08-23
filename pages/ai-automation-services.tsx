import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIAutomationServices() {
  const services = [
    {
      title: 'Intelligent Process Automation',
      description: 'Transform manual workflows into intelligent, self-optimizing processes that learn and improve over time.',
      features: [
        'Workflow automation with AI decision-making',
        'Process optimization and continuous improvement',
        'Integration with existing enterprise systems',
        'Real-time monitoring and analytics'
      ],
      icon: '🤖',
      category: 'Core Services'
    },
    {
      title: 'AI-Powered Content Generation',
      description: 'Create high-quality, engaging content at scale using advanced natural language processing and generation.',
      features: [
        'Automated content creation and curation',
        'Multi-language content generation',
        'SEO-optimized content strategies',
        'Content performance analytics'
      ],
      icon: '✍️',
      category: 'Content Services'
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to predict trends, identify opportunities, and make data-driven decisions.',
      features: [
        'Advanced predictive modeling',
        'Real-time data analysis',
        'Custom forecasting algorithms',
        'Actionable insights and recommendations'
      ],
      icon: '📊',
      category: 'Analytics Services'
    },
    {
      title: 'Autonomous Customer Service',
      description: 'Provide 24/7 customer support with intelligent chatbots and automated response systems.',
      features: [
        'Natural language understanding',
        'Multi-channel support integration',
        'Escalation to human agents',
        'Continuous learning and improvement'
      ],
      icon: '💬',
      category: 'Customer Experience'
    },
    {
      title: 'Smart Supply Chain Management',
      description: 'Optimize supply chain operations with AI-driven demand forecasting and inventory management.',
      features: [
        'Demand prediction and planning',
        'Inventory optimization',
        'Supplier performance monitoring',
        'Risk assessment and mitigation'
      ],
      icon: '🚚',
      category: 'Operations'
    },
    {
      title: 'Cybersecurity Automation',
      description: 'Protect your systems with intelligent threat detection and automated response capabilities.',
      features: [
        'Real-time threat monitoring',
        'Automated incident response',
        'Behavioral analysis',
        'Compliance monitoring and reporting'
      ],
      icon: '🔒',
      category: 'Security'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI automation for patient care, diagnosis, and administrative processes.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Automated trading, risk assessment, and fraud detection systems.',
      icon: '💳'
    },
    {
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control.',
      icon: '🏭'
    },
    {
      name: 'Retail',
      description: 'Personalized shopping experiences and inventory optimization.',
      icon: '🛍️'
    },
    {
      name: 'Transportation',
      description: 'Route optimization and autonomous vehicle systems.',
      icon: '🚗'
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization.',
      icon: '⚡'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual tasks by up to 80% while improving accuracy and consistency.',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation and optimization of resource allocation.',
      icon: '💰'
    },
    {
      title: '24/7 Operation',
      description: 'Enable continuous operation without human intervention or downtime.',
      icon: '🌙'
    },
    {
      title: 'Scalability',
      description: 'Easily scale operations up or down based on demand and business needs.',
      icon: '📈'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights from automated data analysis and pattern recognition.',
      icon: '🔍'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI automation capabilities.',
      icon: '🏆'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Automation Services | Zion Tech Group - Intelligent Automation Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's comprehensive AI automation services. From process automation to predictive analytics, we deliver intelligent solutions that drive growth and efficiency." />
        <meta property="og:title" content="AI Automation Services | Zion Tech Group - Intelligent Automation Solutions" />
        <meta property="og:description" content="Transform your business with Zion Tech Group's comprehensive AI automation services. From process automation to predictive analytics, we deliver intelligent solutions that drive growth and efficiency." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Automation Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Transform your business operations with intelligent automation solutions that learn, adapt, and optimize continuously
              </p>
            </header>

            {/* Services Overview */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Core Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/70 text-sm flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Industries We Serve */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Industries We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                    <div className="text-3xl mb-3">{industry.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{industry.name}</h3>
                    <p className="text-white/70 text-sm">{industry.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Choose AI Automation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Process */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Implementation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Discovery & Analysis</h3>
                  <p className="text-white/70 text-sm">We analyze your current processes and identify automation opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Strategy & Design</h3>
                  <p className="text-white/70 text-sm">We design a comprehensive automation strategy tailored to your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Development & Testing</h3>
                  <p className="text-white/70 text-sm">We build and thoroughly test your automation solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Deployment & Support</h3>
                  <p className="text-white/70 text-sm">We deploy your solutions and provide ongoing support and optimization</p>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  'Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Robotic Process Automation',
                  'Cloud Computing', 'Edge Computing', 'IoT Integration', 'Blockchain', 'Quantum Computing',
                  'Neural Networks', 'Deep Learning', 'Predictive Analytics'
                ].map((tech, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 border border-white/20 text-center hover:border-cyan-400/30 transition-all duration-300">
                    <p className="text-white/80 text-sm font-medium">{tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies Preview */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Manufacturing Efficiency</h3>
                  <p className="text-white/80 mb-4">
                    A leading manufacturer achieved 40% increase in production efficiency and 60% reduction in downtime 
                    through our AI-powered predictive maintenance system.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>Industry: Manufacturing</span>
                    <span>ROI: 300%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Customer Service Transformation</h3>
                  <p className="text-white/80 mb-4">
                    A retail company reduced customer service response time by 80% and increased customer satisfaction 
                    scores through intelligent chatbot automation.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>Industry: Retail</span>
                    <span>ROI: 250%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how AI automation can revolutionize your operations and drive unprecedented growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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