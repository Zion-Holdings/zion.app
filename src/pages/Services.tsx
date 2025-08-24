import { SEO } from '@/components/SEO';

const Services = () => {
  const mainServices = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '🌐',
      features: [
        'Responsive design for all devices',
        'E-commerce solutions',
        'Content management systems',
        'Progressive web apps',
        'API development and integration'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PHP', 'WordPress'],
      link: '/services/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications and analytics'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      link: '/services/mobile-development'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: '☁️',
      features: [
        'Cloud migration and strategy',
        'Infrastructure as Code',
        'Serverless architecture',
        'Multi-cloud solutions',
        'Cost optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'],
      link: '/services/cloud-solutions'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions to automate and optimize your business',
      icon: '🤖',
      features: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Recommendation systems',
        'Process automation'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'R', 'Azure ML', 'AWS SageMaker'],
      link: '/services/ai-ml'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: '🔒',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Security awareness training'
      ],
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Encryption', 'IAM'],
      link: '/services/cybersecurity'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights',
      icon: '📊',
      features: [
        'Business intelligence dashboards',
        'Data warehousing',
        'Real-time analytics',
        'Predictive modeling',
        'Data visualization'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Apache Spark', 'Hadoop'],
      link: '/services/data-analytics'
    }
  ];

  const specializedServices = [
    {
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions to reduce environmental impact',
      icon: '🌱',
      features: [
        'Energy-efficient infrastructure',
        'Cloud optimization',
        'Sustainable software development',
        'Digital transformation'
      ],
      link: '/green-it'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack',
      icon: '🔄',
      features: [
        'Process automation',
        'Legacy system modernization',
        'Change management',
        'Digital strategy consulting'
      ],
      link: '/services/digital-transformation'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance for your business',
      icon: '💼',
      features: [
        'Technology strategy',
        'Architecture design',
        'Project management',
        'Vendor selection'
      ],
      link: '/services/consulting'
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect your existing systems and applications',
      icon: '🔗',
      features: [
        'API development',
        'Data integration',
        'Legacy system integration',
        'Third-party integrations'
      ],
      link: '/services/system-integration'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant solutions for modern healthcare delivery',
      icon: '🏥',
      solutions: [
        'Electronic Health Records (EHR)',
        'Telemedicine platforms',
        'Patient portals',
        'Healthcare analytics',
        'Compliance management'
      ]
    },
    {
      industry: 'Finance',
      description: 'Secure financial technology solutions for modern banking',
      icon: '💰',
      solutions: [
        'Digital banking platforms',
        'Payment processing systems',
        'Risk management tools',
        'Regulatory compliance',
        'Financial analytics'
      ]
    },
    {
      industry: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing',
      icon: '🏭',
      solutions: [
        'IoT integration',
        'Predictive maintenance',
        'Supply chain optimization',
        'Quality control systems',
        'Production analytics'
      ]
    },
    {
      industry: 'Retail',
      description: 'Omnichannel retail solutions for the digital age',
      icon: '🛍️',
      solutions: [
        'E-commerce platforms',
        'Point of sale systems',
        'Inventory management',
        'Customer analytics',
        'Loyalty programs'
      ]
    },
    {
      industry: 'Education',
      description: 'Technology solutions for modern learning environments',
      icon: '🎓',
      solutions: [
        'Learning management systems',
        'Virtual classrooms',
        'Student information systems',
        'Educational analytics',
        'Mobile learning apps'
      ]
    },
    {
      industry: 'Government',
      description: 'Secure solutions for public sector digital transformation',
      icon: '🏛️',
      solutions: [
        'Citizen portals',
        'Document management',
        'Workflow automation',
        'Data security',
        'Compliance systems'
      ]
    }
  ];

  const whyChooseZion = [
    {
      title: 'Expert Team',
      description: 'Experienced developers, designers, and consultants',
      icon: '👥'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored approaches that fit your specific needs',
      icon: '🎯'
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ projects across industries',
      icon: '✅'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance after delivery',
      icon: '🔄'
    },
    {
      title: 'Modern Technologies',
      description: 'Latest tools and frameworks for optimal performance',
      icon: '🚀'
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business',
      icon: '📈'
    }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery',
      description: 'Understanding your requirements and business goals',
      icon: '🔍',
      activities: ['Requirements gathering', 'Business analysis', 'Technology assessment']
    },
    {
      phase: 'Planning',
      description: 'Creating detailed project roadmap and architecture',
      icon: '📋',
      activities: ['Project planning', 'Architecture design', 'Resource allocation']
    },
    {
      phase: 'Development',
      description: 'Building your solution with agile methodology',
      icon: '💻',
      activities: ['Agile development', 'Regular updates', 'Quality assurance']
    },
    {
      phase: 'Testing',
      description: 'Comprehensive testing and quality assurance',
      icon: '🧪',
      activities: ['Unit testing', 'Integration testing', 'User acceptance testing']
    },
    {
      phase: 'Deployment',
      description: 'Smooth deployment and go-live support',
      icon: '🚀',
      activities: ['Production deployment', 'Go-live support', 'Performance monitoring']
    },
    {
      phase: 'Support',
      description: 'Ongoing maintenance and support services',
      icon: '🛠️',
      activities: ['24/7 monitoring', 'Regular updates', 'Technical support']
    }
  ];

  return (
    <>
      <SEO 
        title="IT Services - Custom Technology Solutions - Zion Tech Group"
        description="Comprehensive IT services including web development, mobile apps, cloud solutions, AI/ML, cybersecurity, and data analytics. Custom solutions for all industries."
        canonical="/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Comprehensive IT solutions designed to transform your business. From web development 
                to AI solutions, we deliver cutting-edge technology that drives growth and innovation.
              </p>
            </div>

            {/* Main Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Core Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {mainServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200 group">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-blue-200 text-xs flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-600/30 text-blue-200 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={service.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm group-hover:bg-blue-700"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Specialized Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {specializedServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-blue-100 mb-4 text-sm">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-blue-200 text-sm flex items-center">
                              <span className="text-green-400 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={service.link}
                          className="text-blue-300 hover:text-blue-200 font-medium text-sm"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Industry Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {industrySolutions.map((industry, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {industry.industry}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {industry.description}
                    </p>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Zion */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Why Choose Zion Tech Group?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {whyChooseZion.map((reason, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{reason.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Development Process
              </h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {developmentProcess.map((phase, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="text-2xl">{phase.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {phase.phase}
                      </h3>
                      <p className="text-blue-100 mb-4 text-sm">
                        {phase.description}
                      </p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="text-blue-200 text-sm flex items-center">
                            <span className="text-green-400 mr-2">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg border border-blue-500/30 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss your project and how our services can help you achieve your goals. 
                  Get a free consultation and custom quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/request-quote"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="/contact"
                    className="border border-blue-500/50 hover:bg-blue-500/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Services;