import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_SERVICES } from '@/data/innovativeServices';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      link: '/services/web-development',
      color: 'from-blue-500/20 to-cyan-500/20'
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
      link: '/services/mobile-development',
      color: 'from-green-500/20 to-emerald-500/20'
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
      link: '/services/cloud-solutions',
      color: 'from-purple-500/20 to-indigo-500/20'
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
      link: '/services/ai-ml',
      color: 'from-orange-500/20 to-red-500/20'
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
      link: '/services/cybersecurity',
      color: 'from-red-500/20 to-pink-500/20'
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
      link: '/services/data-analytics',
      color: 'from-teal-500/20 to-cyan-500/20'
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
      link: '/green-it',
      color: 'from-green-500/20 to-emerald-500/20'
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
      link: '/services/digital-transformation',
      color: 'from-blue-500/20 to-indigo-500/20'
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
      link: '/services/consulting',
      color: 'from-purple-500/20 to-pink-500/20'
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
      link: '/services/system-integration',
      color: 'from-orange-500/20 to-yellow-500/20'
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
      ],
      color: 'from-red-500/20 to-pink-500/20'
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
      ],
      color: 'from-green-500/20 to-emerald-500/20'
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
      ],
      color: 'from-blue-500/20 to-indigo-500/20'
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
      ],
      color: 'from-purple-500/20 to-pink-500/20'
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
      ],
      color: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  // Get unique categories from innovative services
  const serviceCategories = Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)));
  
  // Filter innovative services based on search and category
  const filteredInnovativeServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const tabs = [
    { id: 'all', label: 'All Services', count: INNOVATIVE_SERVICES.length },
    ...serviceCategories.map(category => ({
      id: category,
      label: category,
      count: INNOVATIVE_SERVICES.filter(s => s.category === category).length
    }))
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="Our Services" 
        description="Comprehensive technology services including AI, web development, mobile apps, cloud solutions, cybersecurity, and more. Transform your business with Zion Tech Group."
        keywords="AI services, web development, mobile apps, cloud solutions, cybersecurity, data analytics, IT consulting, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Our Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: INNOVATIVE_SERVICES.length.toString(), label: "Total Services" },
                { number: serviceCategories.length.toString(), label: "Categories" },
                { number: INNOVATIVE_SERVICES.filter(s => s.featured).length.toString(), label: "Featured" },
                { number: "4.9", label: "Rating" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search services, features, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm bg-white/90 backdrop-blur-sm"
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Enhanced Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/20 text-white border border-white/30 hover:border-cyan-400/50 hover:bg-white/30'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered services and micro SAAS solutions designed to revolutionize your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInnovativeServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/20 transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="h-48 bg-gradient-to-br from-blue-100/20 to-purple-100/20 flex items-center justify-center relative">
                  <span className="text-6xl">{getCategoryIcon(service.category)}</span>
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}
                  {service.aiScore && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      AI: {service.aiScore}
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-white">{service.rating || 4.5}</span>
                      {service.reviewCount && (
                        <span className="text-xs text-gray-400">({service.reviewCount})</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-cyan-400 font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Support Level */}
                  <div className="mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel} Support
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive range of technology services designed to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${service.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${service.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${industry.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  
                  {/* Solutions */}
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/industries/${industry.industry.toLowerCase()}`}
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
                  >
                    View Solutions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your specific needs and find the perfect solution from our comprehensive service catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper functions
const getCategoryIcon = (categoryName: string) => {
  const categoryIcons: { [key: string]: string } = {
    'AI Services': '🤖',
    'Micro SAAS': '💻',
    'IT Services': '🖥️',
    'Blockchain & Web3': '⛓️',
    'IoT & Edge Computing': '🌐',
    'Emerging Technologies': '🔮',
    'Cybersecurity Services': '🔒',
    'Data Science & Analytics': '📊'
  };
  return categoryIcons[categoryName] || '💼';
};

const formatPrice = (price: number, pricingModel: string) => {
  if (pricingModel === 'monthly') {
    return `$${price}/month`;
  } else if (pricingModel === 'yearly') {
    return `$${price}/year`;
  } else if (pricingModel === 'one-time') {
    return `$${price}`;
  } else if (pricingModel === 'per-user') {
    return `$${price}/user`;
  } else if (pricingModel === 'per-project') {
    return `$${price}/project`;
  } else if (pricingModel === 'usage-based') {
    return `$${price}/usage`;
  } else if (pricingModel === 'freemium') {
    return `Free + Premium`;
  }
  return `$${price}`;
};

const getSupportLevelColor = (level: string) => {
  const colors: { [key: string]: string } = {
    'basic': 'bg-gray-100 text-gray-800',
    'standard': 'bg-blue-100 text-blue-800',
    'premium': 'bg-purple-100 text-purple-800',
    'enterprise': 'bg-green-100 text-green-800'
  };
  return colors[level] || 'bg-gray-100 text-gray-800';
};

export default Services;